
// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

if (!uri) {
  throw new Error("MongoDB connection string is not defined. Please check your environment variables.");
}

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// In development mode, use a global variable to preserve the connection
if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

const dbName = "portfolioDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection("contacts");

    const { name, email, subject, message, projectType } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await collection.insertOne({
      name,
      email,
      subject,
      message,
      projectType: projectType || null,
      createdAt: new Date(),
    });

    res.status(200).json({ message: "Message saved to MongoDB" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

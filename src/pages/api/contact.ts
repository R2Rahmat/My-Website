// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI as string;
const client = new MongoClient(uri);
const dbName = "portfolioDB";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await client.connect();
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
  } finally {
    await client.close();
  }
}

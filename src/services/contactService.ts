
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || process.env.MONGO_URI as string;
const client = new MongoClient(uri);

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    await client.connect();
    const db = client.db('portfolioDB');
    const collection = db.collection('contact_messages');

    const result = await collection.insertOne({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      projectType: formData.projectType || null,
      createdAt: new Date()
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Error submitting contact form:', error);
    return { success: false, error };
  } finally {
    await client.close();
  }
};

export const submitProjectInquiry = async (formData: ContactFormData) => {
  try {
    await client.connect();
    const db = client.db('portfolioDB');
    const collection = db.collection('project_inquiries');

    const result = await collection.insertOne({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      projectType: formData.projectType || formData.subject || 'General',
      createdAt: new Date()
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Error submitting project inquiry:', error);
    return { success: false, error };
  } finally {
    await client.close();
  }
};

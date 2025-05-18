import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db';
import Message from './models/Message';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050; // ✅ Avoid macOS port 5000 conflict

// ✅ CORS config to allow frontend (e.g., Vite on 8080)
app.use(cors({
  origin:['https:dev-md-rahmat786.vercel.app',]
  methods: ['GET', 'POST'],
  credentials: true
}));

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ POST route for contact form
app.post('/api/contact', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, projectType, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required.' });
      return;
    }

    const newMessage = new Message({ name, email, subject, projectType, message });
    await newMessage.save();

    res.status(201).json({ message: 'Message received!' });
  } catch (err) {
    console.error('❌ Error saving contact message:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// ✅ Start the Express server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

import mongoose, { Schema, model, Document } from 'mongoose';

interface IMessage extends Document {
  name: string;
  email: string;
  subject: string;
  projectType?: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    projectType: { type: String, default: "" },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite during development or hot reloads
const Message = mongoose.models?.Message || model<IMessage>('Message', messageSchema);

export default Message;

import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const Message = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model('Message', Message);

import mongoose from 'mongoose';

const Message = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model('Message', Message);

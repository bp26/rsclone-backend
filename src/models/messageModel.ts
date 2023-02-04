import mongoose from 'mongoose';

const Message = new mongoose.Schema({
  login: { type: String, unique: true, required: true },
  content: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.model('Message', Message);

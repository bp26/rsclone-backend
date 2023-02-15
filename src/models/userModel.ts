import mongoose from 'mongoose';

const User = new mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  coins: { type: Number, required: true, default: 0 },
  lessons: { type: Array, required: true, default: [] },
});

export default mongoose.model('User', User);

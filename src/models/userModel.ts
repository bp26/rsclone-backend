import mongoose from 'mongoose';

const User = new mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  coins: { type: Number, required: true, default: 0 },
  lessons: { type: Array, required: true, default: [] },
  chat: {
    color: { type: String, required: true, default: '#FF0000' },
    notifications: { type: Boolean, required: true, default: true },
  },
  avatar: {
    secure_url: { type: String, default: '' },
    public_id: { type: String, default: '' },
  },
});

export default mongoose.model('User', User);

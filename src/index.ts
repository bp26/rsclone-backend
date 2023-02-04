import mongoose from 'mongoose';
import { DB_URL, PORT } from './config.js';
import app from './app.js';

try {
  mongoose.connect(DB_URL);
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

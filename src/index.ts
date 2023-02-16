import mongoose from 'mongoose';
import { DB_URL, PORT } from './config.js';
import server from './server.js';
import wsServer from './websockets/wsServer.js';

try {
  mongoose.connect(DB_URL);
  wsServer.initServer();
  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}

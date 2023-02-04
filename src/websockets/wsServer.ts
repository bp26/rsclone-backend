import { WebSocketServer } from 'ws';
import server from '../server.js';

const wsServer = new WebSocketServer({ server });

wsServer.on('connection', (websocket) => {
  websocket.on('message', (data) => {
    const message = JSON.parse(data.toString());
  });
});

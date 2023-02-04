import { WebSocketServer } from 'ws';
import chatService from '../services/chatService.js';
import server from '../server.js';

const wsServer = new WebSocketServer({ server });

wsServer.on('connection', (websocket) => {
  websocket.on('message', async (data) => {
    try {
      const message = JSON.parse(data.toString());
      await chatService.saveMessage(message);
      wsServer.clients.forEach((client) => {
        client.send(JSON.stringify(message));
      });
    } catch (error) {
      console.log(error);
    }
  });
});

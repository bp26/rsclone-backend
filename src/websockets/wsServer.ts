import { WebSocketServer } from 'ws';
import chatService from '../services/chatService.js';
import server from '../server.js';
import { IMessageData } from '../types/interfaces.js';
import { MessageType } from '../types/enums.js';

class WsServer {
  public initServer() {
    const wsServer = new WebSocketServer({ server });
    this.configureServer(wsServer);
  }

  private configureServer(wsServer: WebSocketServer) {
    wsServer.on('connection', (websocket) => {
      websocket.on('message', async (data) => {
        try {
          const messageData = JSON.parse(data.toString());
          switch (messageData.type) {
            case MessageType.CONNECTION:
              this.broadcastMessage(wsServer, messageData);
              break;
            case MessageType.MESSAGE:
              const savedMessage = await chatService.saveMessage(
                messageData.data
              );
              this.broadcastMessage(wsServer, {
                type: messageData.type,
                data: savedMessage,
              });
              break;
          }
        } catch (error) {
          console.log(error);
        }
      });
    });
  }

  private broadcastMessage(
    wsServer: WebSocketServer,
    messageData: IMessageData
  ) {
    wsServer.clients.forEach((client) => {
      client.send(JSON.stringify(messageData));
    });
  }
}

export default new WsServer();

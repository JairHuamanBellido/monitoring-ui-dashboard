import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";
import { SocketSubscribeConnectionAdapter } from "../adapter/infrastructure/SocketSubscribeConnectionAdapter";
import { SocketSubscribePort } from "../port/SocketSubscribePort";

export class SubscribeClientConnectionUseCase {
  public static async subscribe(
    socket: Socket,
    fn: (payload: SocketSubscribeConnectionAdapter) => void
  ): Promise<void> {
    const port: SocketSubscribePort<SocketSubscribeConnectionAdapter> = {
      socket: socket,
      fn: fn,
    };

    WebSocketAdminAdapter.subscribeClientConnection(port);
  }

  public static unsubscribe(socket: Socket) {
    WebSocketAdminAdapter.unsubscribeClientConnection(socket);
  }
}

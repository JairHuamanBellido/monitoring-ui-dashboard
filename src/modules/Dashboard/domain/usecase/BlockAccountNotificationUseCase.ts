import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";
import { SocketPayloadPort } from "../port/SocketPayloadPort";

export class BlockAccountNotificationUseCase {
  public static execute(socket: Socket, userId: number): void {
    const port: SocketPayloadPort<string> = {
      payload: userId.toString(),
      socket: socket,
    };

    WebSocketAdminAdapter.blockAccount(port);
  }
}

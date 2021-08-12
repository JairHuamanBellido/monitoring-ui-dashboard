import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";
import { BlockAccountPort } from "../port/BlockAccountPort";

export class BlockAccountNotificationUseCase {
  public static execute(socket: Socket, userId: number): void {
    const port: BlockAccountPort = {
      event: "blockAccount",
      payload: userId.toString(),
      socket: socket,
    };

    WebSocketAdminAdapter.blockAccount(port);
  }
}

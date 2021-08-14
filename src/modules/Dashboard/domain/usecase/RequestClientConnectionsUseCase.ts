import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";

export class RequestClientConnectionsUseCase {
  public static execute(socket: Socket): void {
    WebSocketAdminAdapter.requestClientConnection(socket);
  }
}

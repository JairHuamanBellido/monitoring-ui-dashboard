import { UseCase } from "core/usecase/UseCase";
import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";

export class JoinAdminRoomUseCase implements UseCase<void, void> {
  public static execute(socket: Socket): void {
    WebSocketAdminAdapter.joinAdminRoom(socket);
  }
}

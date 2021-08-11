import { UseCase } from "core/usecase/UseCase";
import { WebSocketAdminAdapter } from "modules/Dashboard/infrastructure/WebSocketAdminAdapter";
import { Socket } from "socket.io-client";
import { JoinRoomPort } from "../port/JoinRoomPort";

export class JoinAdminRoomUseCase implements UseCase<void, void> {
  public static execute(socket: Socket): void {
    const port: JoinRoomPort = {
      room: "adminJoinRoom",
      socket: socket,
    };
    WebSocketAdminAdapter.joinAdminRoom(port);
  }
}

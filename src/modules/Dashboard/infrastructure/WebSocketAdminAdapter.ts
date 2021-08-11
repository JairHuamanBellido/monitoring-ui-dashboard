import { BlockAccountPort } from "../domain/port/BlockAccountPort";
import { JoinRoomPort } from "../domain/port/JoinRoomPort";

export class WebSocketAdminAdapter {
  public static joinAdminRoom(port: JoinRoomPort): void {
    const { room, socket } = port;
    socket.emit(room);
  }

  public static blockAccount(port: BlockAccountPort): void {
    const { event, payload, socket } = port;
    socket.emit(event, payload);
  }
}

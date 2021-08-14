import { Socket } from "socket.io-client";
import { SocketSubscribeConnectionAdapter } from "../domain/adapter/infrastructure/SocketSubscribeConnectionAdapter";
import { SocketPayloadPort } from "../domain/port/SocketPayloadPort";
import { SocketSubscribePort } from "../domain/port/SocketSubscribePort";

export class WebSocketAdminAdapter {
  public static joinAdminRoom(socket: Socket): void {
    socket.emit("adminJoinRoom");
  }

  public static blockAccount(port: SocketPayloadPort<string>): void {
    const { payload, socket } = port;
    socket.emit("blockAccount", payload);
  }

  public static requestClientConnection(socket: Socket): void {
    socket.emit("requestClientConnections");
  }

  public static subscribeClientConnection(
    port: SocketSubscribePort<SocketSubscribeConnectionAdapter>
  ): void {
    const { fn, socket } = port;
    socket.on("handleUserLogged", (payload: SocketSubscribeConnectionAdapter) => {
      fn(payload);
    });
  }

  public static unsubscribeClientConnection(socket: Socket): void {
    socket.off("handleUserLogged");
  }
}

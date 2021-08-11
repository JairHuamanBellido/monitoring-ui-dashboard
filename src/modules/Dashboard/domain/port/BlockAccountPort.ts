import { Socket } from "socket.io-client";

export interface BlockAccountPort{
    socket:Socket,
    event: string;
    payload: string;
}
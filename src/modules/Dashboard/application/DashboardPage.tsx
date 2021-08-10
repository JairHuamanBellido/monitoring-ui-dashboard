import { useEffect } from "react";
import DashboardRouter from "router/DasbhoardRouter";
import { Flex } from "shared";
import { io } from "socket.io-client";
import { Sidebar } from "./components";
import HeaderBar from "./components/Header/HeaderBar";
import "./index.scss";

export default function DashboardPage() {
  const socket = io(`http://localhost:3001/users-management`, {
    transports: ["websocket", "polling"],
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("conectado");
    });

    socket.emit("adminJoinRoom", () => {
      console.log("Me uni al room administrador");
    });

    socket.emit("blockAccount", '77')


  }, [socket]);

  socket.on("notify-admin", (v) => {
    console.log("Un usuario entro", v);
  });
  return (
    <Flex width="100%" height="100vh">
      <Sidebar />
      <Flex height="100%" direction="column">
        <HeaderBar />
        <div className="dashboard-section-container">
          <DashboardRouter />
        </div>
      </Flex>
    </Flex>
  );
}

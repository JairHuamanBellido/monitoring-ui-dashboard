import SocketContext from "context/SocketContext";
import { useEffect } from "react";
import DashboardRouter from "router/DasbhoardRouter";
import { Flex, useSocket } from "shared";
import { JoinAdminRoomUseCase } from "../domain/usecase/JoinAdminRoomUseCase";
import { Sidebar } from "./components";
import HeaderBar from "./components/Header/HeaderBar";
import "./index.scss";

export default function DashboardPage() {
  const socket = useSocket("users-management");

  useEffect(() => {
    if(socket !== undefined) {
      JoinAdminRoomUseCase.execute(socket)
    }
  }, [socket]);

  if (socket === undefined) return <p>Cargando...</p>
  return (
    <SocketContext.Provider value={socket}>
      <Flex width="100%" height="100vh">
        <Sidebar />
        <Flex height="100%" direction="column">
          <HeaderBar />
          <div className="dashboard-section-container">
            <DashboardRouter />
          </div>
        </Flex>
      </Flex>
    </SocketContext.Provider>
  );
}

import SocketContext from "context/SocketContext";
import { SocketSubscribeConnectionAdapter } from "modules/Dashboard/domain/adapter/infrastructure/SocketSubscribeConnectionAdapter";
import { UserForTableAdapter } from "modules/Dashboard/domain/adapter/ui/UserForTableAdapter";
import { BlockAccountNotificationUseCase } from "modules/Dashboard/domain/usecase/BlockAccountNotificationUseCase";
import { RequestClientConnectionsUseCase } from "modules/Dashboard/domain/usecase/RequestClientConnectionsUseCase";
import { SubscribeClientConnectionUseCase } from "modules/Dashboard/domain/usecase/SubscribeClientConnectionUseCase";
import { UpdateAccountStatusUseCase } from "modules/Dashboard/domain/usecase/UpdateAccountStatusUseCase";
import { useContext, useEffect, useState } from "react";
import { HeaderSectionDashboard } from "shared";
import { Socket } from "socket.io-client";
import UsersTable from "../../components/table/UserTable";
import useGetUsers from "../../hooks/useGetUsers";

export default function DefaultUserPage() {
  const { data, isLoading } = useGetUsers();
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState<UserForTableAdapter[]>([]);

  useEffect(() => {
    if (socket !== undefined && data !== undefined) {
      RequestClientConnectionsUseCase.execute(socket);
      setUsers(data);
      SubscribeClientConnectionUseCase.subscribe(
        socket,
        changeConnectionStatus
      );
    }
    return () => {
      SubscribeClientConnectionUseCase.unsubscribe(socket as Socket);
    };
  }, [socket, data]);

  async function changeConnectionStatus(
    payload: SocketSubscribeConnectionAdapter
  ) {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === parseInt(payload.id) || user.socketIdSession === payload.socketId) {
          return {
            ...user,
            isLogged: payload.isLogged,
            socketIdSession: payload.socketId,
          };
        }
        return user;
      });
    });
  }
  const switchToggle = async (payload: UserForTableAdapter): Promise<void> => {
    if (!payload.account.isBlocked) {
      BlockAccountNotificationUseCase.execute(socket as Socket, payload.id);
    }
    await UpdateAccountStatusUseCase.execute(payload.account.id);

    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            account: { ...user.account, isBlocked: !user.account.isBlocked },
          };
        }
        return user;
      });
    });
  };
  if (isLoading) return <p> cargando...</p>;
  return (
    <div>
      <HeaderSectionDashboard
        title="Usuarios"
        description="Gestión y control de usuarios"
      />
      <UsersTable toggle={switchToggle} users={users} />
    </div>
  );
}

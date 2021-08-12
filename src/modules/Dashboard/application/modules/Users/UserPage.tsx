import SocketContext from "context/SocketContext";
import { User } from "modules/Dashboard/domain/entity/User";
import { BlockAccountNotificationUseCase } from "modules/Dashboard/domain/usecase/BlockAccountNotificationUseCase";

import { GetUsersUseCase } from "modules/Dashboard/domain/usecase/GetUsersUseCase";
import { UpdateAccountStatusUseCase } from "modules/Dashboard/domain/usecase/UpdateAccountStatusUseCase";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { HeaderSectionDashboard } from "shared";
import { Socket } from "socket.io-client";
import UsersTable from "./components/UserTable";

export default function UsersPage() {
  const { data, isLoading } = useQuery<User[]>("fetchUsers", () =>
    GetUsersUseCase.execute()
  );

  const socket = useContext(SocketContext);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setUsers(data);
    }
  }, [data]);
  const switchToggle = async (payload: User): Promise<void> => {
    if (!payload.account.isBlocked) {
      BlockAccountNotificationUseCase.execute(socket as Socket,payload.id)
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

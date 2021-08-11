import SocketContext from "context/SocketContext";
import { User } from "modules/Dashboard/domain/entity/User";
import { BlockAccountUseCase } from "modules/Dashboard/domain/usecase/BlockAccountUseCase";
import { GetUsersUseCase } from "modules/Dashboard/domain/usecase/GetUsersUseCase";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { HeaderSectionDashboard } from "shared";
import { Socket } from "socket.io-client";
import UsersTable from "./components/UserTable";

export default function UsersPage() {
  const { data, isLoading } = useQuery<User[]>("fetchUsers", () =>
    GetUsersUseCase.execute()
  );

  const socket = useContext(SocketContext)
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setUsers(data);
    }
  }, [data]);
  const switchToggle = (userId: number): void => {
    BlockAccountUseCase.execute(socket as Socket,userId)
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        if (user.id === userId) {
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

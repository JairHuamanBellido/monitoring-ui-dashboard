import { User } from "modules/Dashboard/domain/entity/User";
import { GetUsersUseCase } from "modules/Dashboard/domain/usecase/GetUsersUseCase";
import { useQuery } from "react-query";
import { HeaderSectionDashboard } from "shared";
import UsersTable from "./components/UserTable";

export default function UsersPage() {
  const { data, isLoading } = useQuery<User[]>("fetchUsers", () =>
    GetUsersUseCase.execute()
  );

  if (isLoading) return <p> cargando...</p>;
  return (
    <div>
      <HeaderSectionDashboard
        title="Usuarios"
        description="Gestión y control de usuarios"
      />
      <UsersTable users={data as User[]} />
    </div>
  );
}

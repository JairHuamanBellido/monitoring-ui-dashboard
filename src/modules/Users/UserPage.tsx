import { User } from "core/entity/User";
import { UserService } from "modules/Dashboard/services/UserService";
import { useQuery } from "react-query";
import { HeaderSectionDashboard } from "shared";
import UsersTable from "./components/UserTable";

export default function UsersPage() {
  const { data, isLoading } = useQuery<User[]>("fetchUsers", () =>
    UserService.GetAllUsers()
  );

  if (isLoading) return <p> cargando...</p>
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

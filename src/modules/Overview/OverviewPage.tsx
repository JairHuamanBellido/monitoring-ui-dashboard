import { User } from "core/entity/User";
import { UserService } from "modules/Dashboard/services/UserService";
import { useQuery } from "react-query";
import { Flex, HeaderSectionDashboard } from "shared";
import HeaderLabel from "./HeaderLabel/HeaderLabel";

export default function OverviewPage() {
  const { data } = useQuery<User[]>("getUsers", () =>
    UserService.GetAllUsers()
  );
  return (
    <div>
      <HeaderSectionDashboard
        title="Overview"
        description="Estadísticas de OXC"
      />
      <Flex alignItems="center">
        <HeaderLabel label={"Total de usuarios"} value={data?.length} />
        <HeaderLabel label={"Conectados"} value={data?.length} />
        <HeaderLabel label={"Desconectados"} value={data?.length} />
      </Flex>
    </div>
  );
}

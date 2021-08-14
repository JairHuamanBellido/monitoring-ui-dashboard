import { User } from "modules/Dashboard/domain/entity/User";
import { GetUsersUseCase } from "modules/Dashboard/domain/usecase/user/GetUsersUseCase";
import { useQuery } from "react-query";
import { Flex, HeaderSectionDashboard } from "shared";
import HeaderLabel from "./HeaderLabel/HeaderLabel";

export default function OverviewPage() {
  const { data } = useQuery<User[]>("getUsers", () =>
    GetUsersUseCase.execute()
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

import { User } from "modules/Dashboard/domain/entity/User";
import { GetPersonalInformationUseCase } from "modules/Dashboard/domain/usecase/GetPersonalInformationUseCase";
import { useQuery } from "react-query";
import { Flex } from "shared";
import "./index.scss";

export default function HeaderBar() {
  const { data, isLoading } = useQuery<User>("fechtUser", () =>
    GetPersonalInformationUseCase.execute()
  );

  if (isLoading) return <p>Cargando...</p>;

  return (
    <Flex
      height={"64px"}
      width="calc(100vw - 240px)"
      className="headerbar-container"
      padding="0 128px"
      justifyContent="flex-end"
      alignItems="center"
    >
      <img src={data?.avatar} alt="" />
    </Flex>
  );
}

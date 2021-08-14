import { User } from "modules/Dashboard/domain/entity/User";
import { Flex } from "shared";

interface Props {
  user: User;
}
export default function Header(props: Props) {
  const { user } = props;

  return (
    <Flex alignItems="center" width="100%" className="header">
      <div className="avatar">
        <img src={user.avatar} alt="" />
      </div>
      <Flex direction="column" className="information">
        <h2>
          {user.name} {user.lastname}
        </h2>
      </Flex>
    </Flex>
  );
}

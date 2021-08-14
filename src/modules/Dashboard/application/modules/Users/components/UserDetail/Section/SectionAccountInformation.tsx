import { Account } from "modules/Dashboard/domain/entity/Account";
import { Flex } from "shared";
import "./index.scss";

interface Props {
  account: Account;
}
export default function SectionAccountInformation(props: Props) {
  return (
    <Flex className="user-detail-section" direction="column">
      <div className="field">
        <p className="label">Usuario</p>
        <p className="value">{props.account.username}</p>
      </div>
      <div className="field">
        <p className="label">Estado de la cuenta</p>
        <p className="value">{props.account.isBlocked ? 'Bloqueado': 'No bloqueado'}</p>
      </div>
    </Flex>
  );
}

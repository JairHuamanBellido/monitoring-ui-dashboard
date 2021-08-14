import { User } from "modules/Dashboard/domain/entity/User";
import { Flex } from "shared";
import "./index.scss";

interface Props {
  user: User;
}
export default function SectionPersonalInformation(props: Props) {
  return (
    <Flex className="user-detail-section" direction="column">
      <div className="field">
        <p className="label">Nombre</p>
        <p className="value">{props.user.name}</p>
      </div>
      <div className="field">
        <p className="label">Apellidos</p>
        <p className="value">{props.user.lastname}</p>
      </div>
      <div className="field">
        <p className="label">Edad</p>
        <p className="value">{props.user.age}</p>
      </div>
      <div className="field">
        <p className="label">Dni</p>
        <p className="value">{props.user.dni}</p>
      </div>
      <div className="field">
        <p className="label">Email</p>
        <p className="value">{props.user.email}</p>
      </div>
    </Flex>
  );
}

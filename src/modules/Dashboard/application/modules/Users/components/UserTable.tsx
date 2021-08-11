import { User } from "modules/Dashboard/domain/entity/User";
import { Flex, ToggleButton } from "shared";
import "./index.scss";

interface IProps {
  users: User[];
  toggle(id: number): void;
}
export default function UsersTable(props: IProps) {
  return (
    <table className="users-table-container">
      <thead>
        <tr>
          <th>Bloqueda</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>DNI</th>
          <th>En la plataforma</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((e) => (
          <tr className="transition" key={e.id}>
            <td>
              <ToggleButton
                onChange={() => {
                  props.toggle(e.id);
                }}
                isActive={e.account.isBlocked}
              />
            </td>

            <td>
              <Flex alignItems="center" className="avatar">
                <img src={e.avatar} alt="" />
                <p>{e.name}</p>
              </Flex>
            </td>
            <td>{e.lastname}</td>
            <td>{e.dni}</td>
            <td>
              <Flex
                alignItems="center"
                className="transition row-isActive active rounded"
              >
                <div className="transition circle"></div>
                <p className="transition">Activo</p>
              </Flex>
            </td>

            <td>{e.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

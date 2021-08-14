import { UserForTableAdapter } from "modules/Dashboard/domain/adapter/ui/UserForTableAdapter";
import { Link, useRouteMatch } from "react-router-dom";
import { Flex, ToggleButton } from "shared";
import "./index.scss";

interface IProps {
  users: UserForTableAdapter[];
  toggle(user: UserForTableAdapter): void;
}
export default function UsersTable(props: IProps) {
  let { url } = useRouteMatch();

  const isLoggedClassName = (isLogged: boolean): string => {
    return isLogged ? "active" : "inactive";
  };
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
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((e) => (
          <tr className="transition" key={e.id}>
            <td>
              <ToggleButton
                onChange={() => {
                  props.toggle(e);
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
                className={`transition row-isActive ${isLoggedClassName(
                  e.isLogged
                )} rounded`}
              >
                <div className="transition circle"></div>
                <p className="transition">
                  {e.isLogged ? "Conectado" : "Desconectado"}
                </p>
              </Flex>
            </td>

            <td>{e.email}</td>
            <td>
              <Link to={`${url}/${e.dni}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

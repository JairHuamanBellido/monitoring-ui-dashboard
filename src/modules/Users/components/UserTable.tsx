import { User } from "core/entity/User";
import { Flex } from "shared";
import "./index.scss";

interface IProps {
  users: User[];
}
export default function UsersTable(props: IProps) {
  return (
    <table className="users-table-container">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>DNI</th>
          <th>En la plataforma</th>
          <th>Correo</th>
          <th>Usuario</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((e) => (
          <tr className="transition" key={e.id}>
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
            <td>{e.account.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

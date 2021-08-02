import { Logo } from "assets";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { Flex, IconConfiguration, IconDashboard, IconUser } from "shared";
import "./index.scss";
export default function Sidebar() {
  const { url } = useRouteMatch();
  const { pathname } = useLocation();
  
  const isActualPathname = (path: string): string => {
    return pathname.includes(path) ? "active-link" : "inactive-link";
  };

  return (
    <div className="sidebar-container">
      <Flex width="100%" justifyContent="center" alignItems="center">
        <img src={Logo} alt="logo" />
      </Flex>
      <div className="sidebar-menu-container">
        <Link to={`${url}/overview`}>
          <Flex
            className={`sidebar-menu-item transition rounded ${isActualPathname("/overview")}`}
            alignItems="center"
          >
            <IconDashboard width={24} height={24} />
            <p className="transition">Dasbhoard</p>
          </Flex>
        </Link>
        <Link to={`${url}/users`}>
          <Flex
            className={`sidebar-menu-item transition rounded ${isActualPathname("/users")}`}
            alignItems="center"
          >
            <IconUser width={24} height={24} />
            <p className="transition">Usuarios</p>
          </Flex>
        </Link>
        <Link to={`${url}/configuration`}>
          <Flex
            className={`sidebar-menu-item transition rounded ${isActualPathname("/configuration")}`}
            alignItems="center"
          >
            <IconConfiguration width={24} height={24} />
            <p className="transition">Configuración</p>
          </Flex>
        </Link>
      </div>
    </div>
  );
}

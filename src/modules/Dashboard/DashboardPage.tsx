import DashboardRouter from "router/DasbhoardRouter";
import { Flex } from "shared";
import { Sidebar } from "./components";
import HeaderBar from "./components/Header/HeaderBar";
import "./index.scss";


export default function DashboardPage() {
  return (
    <Flex width="100%" height="100vh">
      <Sidebar />
      <Flex height="100%" direction="column">
        <HeaderBar />
        <div className="dashboard-section-container">
          <DashboardRouter />
        </div>
      </Flex>
    </Flex>
  );
}

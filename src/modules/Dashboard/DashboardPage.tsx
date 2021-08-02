import DashboardRouter from "router/DasbhoardRouter";
import { Flex } from "shared";
import { Sidebar } from "./components";

export default function DashboardPage() {
  return (
    <Flex width="100%" height="100vh">
      <Sidebar />
      <DashboardRouter />
    </Flex>
  );
}

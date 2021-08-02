import DashboardPage from "modules/Dashboard/DashboardPage";
import LoginPage from "modules/Login/LoginPage";
import { Redirect, Route, Switch } from "react-router-dom";

export default function MainRouter() {
  return (
    <Switch>
      <Route exact={true} path="/" >
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route exact={true} path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

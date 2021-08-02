import ConfigurationPage from "modules/Configuration/ConfigurationPage";
import OverviewPage from "modules/Overview/OverviewPage";
import UsersPage from "modules/Users/UserPage";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

export default function DashboardRouter() {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact={true} path={path}>
        <Redirect to={`${path}/overview`} />
      </Route>
      <Route path={`${path}/overview`}>
        <OverviewPage />
      </Route>
      <Route path={`${path}/users`}>
        <UsersPage />
      </Route>
      <Route path={`${path}/configuration`}>
        <ConfigurationPage />
      </Route>
    </Switch>
  );
}

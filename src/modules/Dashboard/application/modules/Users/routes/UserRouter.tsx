import { Route, Switch, useRouteMatch } from "react-router-dom";
import DefaultUserPage from "../pages/Default/DefaultUserPage";
import UserDetailPage from "../pages/UserDetail/UserDetailPage";
export default function UserRouter() {
    let { path } = useRouteMatch();
    
    return(
        <Switch>
            <Route exact={true} path={`${path}/:dni`}>
                <UserDetailPage />
            </Route>
            <Route exact={true} path={`${path}/`}>
                <DefaultUserPage />
            </Route>
        </Switch>
    )
}
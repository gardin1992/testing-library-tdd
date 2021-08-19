import Header from "main/components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routes";

function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {routes.map((route) => (
          <Route
            component={route.component}
            exact={route.exact}
            path={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

import Header from "main/components/Header";
import { NotFound } from "main/pages/NotFound";
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

        <Route component={NotFound} path="*" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

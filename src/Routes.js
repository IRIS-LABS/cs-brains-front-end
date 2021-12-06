import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import Cards from "./screens/cards";
import CardsSearch from "./screens/cards/search";
import Account from "./screens/account";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/login" render={(props) => <Login {...props} />} />
      <Route
        exact
        path="/register"
        render={(props) => <Register {...props} />}
      />
      <ProtectedRoute exact path="/cards" component={Cards} />
      <ProtectedRoute exact path="/cards/search" component={CardsSearch} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  );
};

export default AppRouter;

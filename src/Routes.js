import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./screens/login";
import Register from "./screens/register";
import Home from "./screens/home";
import Cards from "./screens/cards";
import CardsSearch from "./screens/cards/search";
import Account from "./screens/account";
import Header from "./components/header";

const AppRouter = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/signin" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/signup"
          render={(props) => <Register {...props} />}
        />
        <ProtectedRoute exact path="/cards" component={Cards} />
        <ProtectedRoute exact path="/account" component={Account} />
        <ProtectedRoute exact path="/" component={CardsSearch} />
      </Switch>
    </>
  );
};

export default AppRouter;

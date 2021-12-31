import React, { createContext, useState } from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./screens/login";
import Register from "./screens/register";
import Cards from "./screens/cards";
import CardsSearch from "./screens/cards/search";
import Account from "./screens/account";
import Header from "./components/header";
import Footer from "./components/footer";
import Alert from "./components/common/Alert";
import Verify from "./screens/thirdPartyAuth/verify";

export const AlertContext = createContext(null);

const AppRouter = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  return (
    <AlertContext.Provider
      value={{
        alertMsg,
        setAlertMsg,
        alertType,
        setAlertType,
        alertOpen,
        setAlertOpen,
      }}
    >
      <Header />
      <Switch>
        <Route exact path="/signin" render={(props) => <Login {...props} />} />
        <Route
          exact
          path="/signup"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/google/verify/:token"
          render={(props) => <Verify {...props} />}
        />
        <ProtectedRoute exact path="/cards" component={Cards} />
        <ProtectedRoute exact path="/editProfile" component={Account} />
        <ProtectedRoute exact path="/" component={CardsSearch} />
      </Switch>
      <Footer />
      <Alert />
    </AlertContext.Provider>
  );
};

export default AppRouter;

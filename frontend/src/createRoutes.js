import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import SignInSignUp from "./containers";
import history from "./components/history";

const createRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signinsignup" component={SignInSignUp} />
      </Switch>
    </Router>
  );
};

export default createRoutes;

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import SignInOutContainer from "./containers/index";
import history from "./components/history";
import Admin from "./components/admin";
import Customer from "./components/Customer";
import Pizza from "./components/pizza"

const createRoutes = () => {
  return (

    <Router forceRefresh={true} history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signinsignup" component={SignInOutContainer} />
        <Route path="/admin" component={Admin} />
        <Route path="/customer" component={Customer} />
        <Route path="/pizza" component={Pizza} />
      </Switch>
    </Router>
  );
};

export default createRoutes;

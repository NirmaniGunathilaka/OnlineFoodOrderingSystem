import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup";
import Login from "./components/login";
import SignInSignUp from "./containers";
import history from "./components/history";
import Feedback from "./components/Feedback";
import About from "./components/About";
import Hotline from "./components/Hotline";
import Privacy from "./components/Privacy";
import Appbar from "./components/Appbar";
import Admin from "./components/admin";
import Customer from "./components/Customer";


const createRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signinsignup" component={SignInSignUp} />
        <Route path="/feed" component={Feedback} />
        <Route path="/about" component={About} />
        <Route path="/hotline" render={(props) => <Hotline {...props} />} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/appbar" component={Appbar} />
        <Route path="/admin" component={Admin} />
        <Route path="/customer" component={Customer} />
      </Switch>
    </Router>
  );
};

export default createRoutes;

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
        <Route path="/hotline" component={Hotline} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
    </Router>
  );
};

export default createRoutes;
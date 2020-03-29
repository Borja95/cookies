import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
);

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";

import Signup from "../modules/signup";
import UserDetail from "../modules/userDetail";
import AddUser from "../modules/addUser";

const Router = () => (
  <Switch>
    <Route path="/" exact component={Signup} />
    <Route path="/userdetail" exact component={UserDetail} />
    <Route path="/adduser" exact component={AddUser} />
  </Switch>
);

export default Router;

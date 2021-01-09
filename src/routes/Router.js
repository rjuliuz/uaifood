import React from "react";
import LandingPage from "../screens/LandingPage/LandingPage";
import Restaurants from "../screens/Restaurants/Restaurants";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <LandingPage/>
      </Route>
      <Route exact path={"/restaurantes"}>
        <Restaurants/>
      </Route>
      <Route>
        <LandingPage/>
      </Route>
    </Switch>
  </BrowserRouter>
)};

export default Router;
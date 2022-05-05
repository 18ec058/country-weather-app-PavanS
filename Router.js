import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SearchCountries from "./WebPages/Firstpage";
import CountryDetails from "./WebPages/countrypage";
import WeatherDetails from "./WebPages/countryweather";

function Router(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchCountries} />
        <Route exact path="/country" component={CountryDetails} />
        <Route exact path="/weather" component={WeatherDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
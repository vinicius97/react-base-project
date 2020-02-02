import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Screens
import NotFound from "./NotFound";
import Home from "./Home";

const defaultRoute = {
  name: "",
  path: "",
  exact: true
};

export const Routes = () => {
  const routes = [
    {
      ...defaultRoute,
      name: "Home",
      path: "/",
      component: Home
    },
    {
      ...defaultRoute,
      name: "Not found",
      path: "",
      component: NotFound
    }
  ];

  const renderRoutes = (routesList) => routesList.map((route) => (
    <Route {...route} key={route.path} />
  ))

  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes)}</Switch>
    </BrowserRouter>
  );
};

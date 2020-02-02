import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

// Screens

export const Routes = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
      exact: true,
      component: () => import("./Home")
    }
  ];

  const renderRoutes = routesList =>
    routesList.map(({ component, ...route }) => {
      const RouteComponent = lazy(component)
      return (
        <Route component={RouteComponent} {...route} key={route.path} />
      )
    });

  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

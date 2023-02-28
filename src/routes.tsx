import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home, NotFound, Expenses } from "./pages";

export default function Router() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "expenses", element: <Expenses /> },
    { path: "/", element: <Navigate to='/expenses' /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to='/404' /> }
  ]);

  return routes;
}

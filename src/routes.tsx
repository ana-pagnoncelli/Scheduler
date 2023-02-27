import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home, NotFound, Expenses } from "./pages";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "expenses", element: <Expenses /> },
        // { path: "/", element: <Navigate to='/introducao' /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to='/404' /> }
      ]
    },
    { path: "*", element: <Navigate to='/404' replace /> }
  ]);
}

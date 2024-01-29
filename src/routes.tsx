import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home, NotFound, Schedule, AvailablePlans, Profile } from "./pages";
import { Logout } from "./pages/logout";
import { AlertPopup } from "./components/AlertPopup";

export default function Router() {
  const routes = useRoutes([
    { path: "schedule-class", element: <Schedule /> },
    { path: "available-plans", element: <AvailablePlans /> },
    { path: "logout", element: <Logout /> },
    { path: "home", element: <Home /> },
    { path: "profile", element: <Profile /> },
    { path: "/", element: <Navigate to='/home' /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to='/404' /> },
    {
      path: "/",
      element: <AlertPopup />,
      children: []
    }
  ]);

  return routes;
}

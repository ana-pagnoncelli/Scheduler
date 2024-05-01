import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  Home,
  NotFound,
  ScheduleUser,
  AvailablePlansClient,
  Profile,
  ScheduleAdmin,
  AvailablePlansAdmin
} from "./pages";
import { Logout } from "./pages/logout";
import { ManageClients } from "./pages/manage-clients/ManageClients";

export default function Router() {
  const routes = useRoutes([
    { path: "schedule-class", element: <ScheduleUser /> },
    { path: "available-plans", element: <AvailablePlansClient /> },
    { path: "available-plans-admin", element: <AvailablePlansAdmin /> },
    { path: "schedule-admin", element: <ScheduleAdmin /> },
    { path: "manage-clients", element: <ManageClients /> },
    { path: "logout", element: <Logout /> },
    { path: "home", element: <Home /> },
    { path: "profile", element: <Profile /> },
    { path: "/", element: <Navigate to='/home' /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to='/404' /> }
  ]);

  return routes;
}

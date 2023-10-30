import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import {
  Home,
  NotFound,
  Schedule,
  AvailablePlans,
  LoginOrSignUp,
  Profile
} from "./pages";

type RouterProps = {
  // eslint-disable-next-line no-unused-vars
  handleUserLogin: (userEmail: string) => void;
};

export default function Router({ handleUserLogin }: RouterProps) {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "schedule-class", element: <Schedule /> },
    { path: "available-plans", element: <AvailablePlans /> },
    {
      path: "login",
      element: <LoginOrSignUp handleUserLogin={handleUserLogin} />
    },
    { path: "home", element: <Home /> },
    { path: "profile", element: <Profile /> },
    { path: "/", element: <Navigate to='/home' /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to='/404' /> }
  ]);

  return routes;
}

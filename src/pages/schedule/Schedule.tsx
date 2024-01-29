import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleAdmin } from "./ScheduleAdmin";

export function Schedule() {
  const { isAdmin } = useContext(UserContext);

  return <div>{isAdmin ? <ScheduleAdmin /> : <ScheduleUser />}</div>;
}

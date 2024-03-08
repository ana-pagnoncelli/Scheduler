import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleAdmin } from "./ScheduleAdmin";
import { ScheduleApp } from "./styles";

export function Schedule() {
  const { isAdmin } = useContext(UserContext);

  return (
    <ScheduleApp>{isAdmin ? <ScheduleAdmin /> : <ScheduleUser />}</ScheduleApp>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleAdmin } from "./ScheduleAdmin";

export function Schedule() {
  const { isAdmin } = useContext(UserContext);

  return <div>{isAdmin ? <ScheduleAdmin /> : <ScheduleUser />}</div>;
}

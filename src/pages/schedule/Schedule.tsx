import React, { useContext } from "react";
import { UserContext } from "../../providers/userProvider";
import { getUser } from "../login/requests";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleAdmin } from "./ScheduleAdmin";

export function Schedule() {
  const userName = useContext(UserContext);

  const isAdmin = () => {
    const fetchUser = async () => {
      const userData = await getUser(userName);
      return userData ? userData.admin : false;
    };

    return userName ? fetchUser() : false;
  };

  return <div>{isAdmin() ? <ScheduleAdmin /> : <ScheduleUser />}</div>;
}

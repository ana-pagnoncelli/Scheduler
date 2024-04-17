import axios from "axios";
import { Plan } from "./types";
import {
  AlertColors,
  AlertMessage,
  planCreated
} from "../../components/AlertPopup";

export const getPlans = async (): Promise<Plan[]> => {
  let plans: Plan[] = [];

  await axios
    .get(`/plans`)
    .then((response) => {
      plans = response.data;
      console.log(plans);
    })
    .catch((err) => {
      console.log(err);
    });

  return plans;
};

export const createPlan = async (plan: Plan) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post("/plans", plan)
    .then(() => {
      message = { text: planCreated, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
      console.log(err);
    });

  return message;
};

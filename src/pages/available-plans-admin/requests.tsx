import axios from "axios";
import { Plan } from "./types";
import {
  AlertColors,
  AlertMessage,
  planCreated,
  planDeleted
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

export const deletePlan = async (planId: string) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .delete(`/plans/${planId}`)
    .then(() => {
      message = { text: planDeleted, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
    });

  return message;
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
    });

  return message;
};

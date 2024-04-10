import { styled } from "@mui/material";
import {
  QUATERNARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR
} from "../../styles";
import { BaseApp, BaseBox } from "../styles";

export const ScheduleBox = styled(BaseBox)({
  maxWidth: "1000px"
});

export const ScheduleApp = styled(BaseApp)({
  minHeight: "100vh",
  maxHeight: "5000px"
});

export const tableInnerItemStyle = {
  background: TERTIARY_COLOR
};

export const tableInnerHeadStyle = {
  background: QUATERNARY_COLOR
};

export const buttonStyleSecondaryColor = {
  background: SECONDARY_COLOR,
  backgroundColor: SECONDARY_COLOR,
  color: "white"
};

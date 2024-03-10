import { Box, styled } from "@mui/material";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  QUATERNARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR
} from "../../styles";

export const ScheduleBox = styled(Box)({
  background: BOX_COLOR,
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "1000px",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

export const ScheduleApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  overflow: "hidden",
  minHeight: "100vh",
  maxHeight: "5000px"
});

export const tableInnerItemStyle = {
  background: TERTIARY_COLOR
};

export const tableHeadStyle = {
  background: SECONDARY_COLOR
};

export const tableInnerHeadStyle = {
  background: QUATERNARY_COLOR
};

export const tableHeadItemStyle = {
  color: "white"
};

export const buttonStyleSecondaryColor = {
  background: SECONDARY_COLOR,
  backgroundColor: SECONDARY_COLOR,
  color: "white"
};

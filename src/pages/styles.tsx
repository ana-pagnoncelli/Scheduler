import { Box, styled } from "@mui/material";
import {
  BACKGROUND_COLOR,
  BOX_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR
} from "../styles";

export const BaseBox = styled(Box)({
  background: BOX_COLOR,
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

export const BaseApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  overflow: "hidden"
});

export const tableHeadStyle = {
  background: SECONDARY_COLOR
};

export const tableHeadItemStyle = {
  color: "white"
};

export const buttonStyleSecondaryColor = {
  background: SECONDARY_COLOR,
  backgroundColor: SECONDARY_COLOR,
  color: "white"
};

export const AddElementBox = styled(Box)({
  background: TERTIARY_COLOR,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: SECONDARY_COLOR,
  padding: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center"
});

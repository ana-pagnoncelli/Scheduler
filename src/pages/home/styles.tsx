import { Box, styled } from "@mui/material";
import { BaseApp, BaseBox } from "../styles";
import { SECONDARY_COLOR, TERTIARY_COLOR } from "../../styles";

export const HomeBox = styled(BaseBox)({
  maxWidth: "1000px"
});

export const HomeApp = styled(BaseApp)({
  minHeight: "100vh"
});

export const InformationListBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px"
});

export const InformationBox = styled(Box)({
  background: TERTIARY_COLOR,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: SECONDARY_COLOR,
  padding: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "left"
});

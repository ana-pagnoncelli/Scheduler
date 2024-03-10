import { Box, styled } from "@mui/material";
import { BACKGROUND_COLOR, SECONDARY_COLOR } from "../../../styles";

export const AddScheduleBox = styled(Box)({
  background: BACKGROUND_COLOR,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: SECONDARY_COLOR,
  padding: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%"
});

export const InputBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  textAlign: "center",
  flex: 1,
  width: "100%"
});

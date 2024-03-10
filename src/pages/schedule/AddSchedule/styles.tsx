import { Box, styled } from "@mui/material";
import { SECONDARY_COLOR, TERTIARY_COLOR } from "../../../styles";

export const AddScheduleBox = styled(Box)({
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

export const InputBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  flex: 1,
  width: "100%"
});

export const selectHourStyle = { flex: 1, margin: 0, padding: 0 };

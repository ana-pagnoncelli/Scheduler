import { styled } from "@mui/material/styles";
import { BASE_COLOR } from "../styles";

export const SubmitButton = styled("button")(() => ({
  color: "white",
  backgroundColor: BASE_COLOR,
  borderColor: BASE_COLOR,
  borderRadius: "5px",
  fontSize: "medium",
  display: "block",
  padding: "5px",
  margin: "5px"
}));

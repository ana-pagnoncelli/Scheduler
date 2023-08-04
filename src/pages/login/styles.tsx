import { styled } from "@mui/material/styles";
import { BASE_COLOR } from "../../styles";

export const Label = styled("label")(() => ({
  display: "block",
  fontSize: "medium",
  padding: "5px"
}));

export const Input = styled("input")(() => ({
  display: "block",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

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

export const HasAccountButton = styled("button")(() => ({
  color: BASE_COLOR,
  backgroundColor: "white",
  borderColor: "white",
  borderRadius: "5px",
  fontSize: "medium",
  display: "block",
  padding: "5px",
  margin: "5px"
}));

export const Message = styled("div")(() => ({
  color: "red",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

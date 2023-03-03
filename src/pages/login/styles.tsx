import { styled } from "@mui/material/styles";

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
  backgroundColor: "#1976d2",
  borderColor: "#1976d2",
  borderRadius: "5px",
  fontSize: "medium",
  display: "block",
  padding: "5px",
  margin: "5px"
}));

export const Message = styled("div")<{ showMessage: boolean }>((props) => ({
  display: props.showMessage ? "" : "none",
  color: "red",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

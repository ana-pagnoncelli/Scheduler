import { Box } from "@mui/material";
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

export const MessageBox = styled(Box)({
  textAlign: "center",
  margin: "2px",
  padding: "3px",
  overflow: "hidden"
});

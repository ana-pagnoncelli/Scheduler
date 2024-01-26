import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography } from "@mui/material";
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

export const LoginForm = styled("form")(() => ({
  maxWidth: "330px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  background: "white",
  padding: "20px",
  marginTop: "40px"
}));

export const LoginApp = styled(Box)({
  background: "#dcdcdc",
  textAlign: "center",
  height: "100vh",
  overflow: "hidden"
});

export const LoginTextField = styled(TextField)({
  margin: "2px",
  padding: "3px"
});

export const LoginButton = styled(Button)({
  margin: "4px",
  padding: "6px"
});

export const LoginTitle = styled(Typography)({
  marginBottom: "10px",
  padding: "3px"
});

import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { BACKGROUND_COLOR } from "../../styles";

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
  background: BACKGROUND_COLOR,
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

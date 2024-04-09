import { styled } from "@mui/material/styles";
import { BaseApp } from "../styles";

export const LoginForm = styled("form")(() => ({
  width: "330px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  background: "white",
  padding: "20px",
  gap: "12px",
  borderRadius: "10px",
  marginTop: "40px"
}));

export const LoginApp = styled(BaseApp)({
  height: "100vh"
});

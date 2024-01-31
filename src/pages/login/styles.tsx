import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { BACKGROUND_COLOR } from "../../styles";

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

export const LoginApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  height: "100vh",
  overflow: "hidden"
});

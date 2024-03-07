import { Box, styled } from "@mui/material";
import { BACKGROUND_COLOR, BOX_COLOR } from "../../styles";

export const ProfileBox = styled(Box)({
  background: BOX_COLOR,
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "70%",
  margin: "50px auto"
});

export const ProfileForm = styled("form")(() => ({
  display: "flex",
  flexFlow: "row wrap",
  gap: "12px",
  marginTop: "20px",
  marginBottom: "20px",
  alignContent: "stretch"
}));

export const ProfileApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  height: "100vh",
  overflow: "hidden"
});

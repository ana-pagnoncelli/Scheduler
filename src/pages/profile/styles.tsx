import { Box, styled } from "@mui/material";
import { BACKGROUND_COLOR, BOX_COLOR } from "../../styles";

export const ProfileBox = styled(Box)({
  background: BOX_COLOR,
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

export const ProfileForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
  alignContent: "stretch"
}));

export const ProfileApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  height: "100vh",
  overflow: "hidden"
});

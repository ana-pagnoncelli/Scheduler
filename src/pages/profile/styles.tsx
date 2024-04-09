import { styled } from "@mui/material";
import { BaseApp, BaseBox } from "../styles";

export const ProfileBox = styled(BaseBox)({});

export const ProfileForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
  alignContent: "stretch"
}));

export const ProfileApp = styled(BaseApp)({
  height: "100vh"
});

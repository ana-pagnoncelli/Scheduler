import { Box, styled } from "@mui/material";
import { BACKGROUND_COLOR, BOX_COLOR } from "../styles";

export const BaseBox = styled(Box)({
  background: BOX_COLOR,
  padding: "30px",
  borderRadius: "10px",
  maxWidth: "500px",
  margin: "50px auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px"
});

export const BaseApp = styled(Box)({
  background: BACKGROUND_COLOR,
  textAlign: "center",
  overflow: "hidden"
});

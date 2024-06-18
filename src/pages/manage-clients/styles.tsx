import { styled } from "@mui/material";
import { BaseApp, BaseBox } from "../styles";

export const ManageClientBox = styled(BaseBox)({
  maxWidth: "1000px"
});

export const EditClientBox = styled(BaseBox)({
  minWidth: "400px",
  margin: "auto"
});

export const ManageClientApp = styled(BaseApp)({
  height: "100vh"
});

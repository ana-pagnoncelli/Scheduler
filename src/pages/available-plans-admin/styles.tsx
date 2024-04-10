import { Box, styled } from "@mui/material";
import { BaseApp, BaseBox } from "../styles";
import { QUATERNARY_COLOR, SECONDARY_COLOR } from "../../styles";

export const AvailablePlanBox = styled(BaseBox)({
  maxWidth: "1000px"
});

export const ItemPlanBox = styled(Box)(() => ({
  background: QUATERNARY_COLOR,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: SECONDARY_COLOR,
  borderRadius: "10px"
}));

export const AvailablePlanApp = styled(BaseApp)({
  height: "100vh"
});

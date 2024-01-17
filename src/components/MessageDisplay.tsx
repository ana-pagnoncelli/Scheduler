import React from "react";
import { Alert, Box } from "@mui/material";

export const SUCCESS_MESSAGE = "success";
export const FAIL_MESSAGE = "error";

export type MessageDisplayType = {
  text: string;
  type: string;
};

// TODO implement onClose function
export function MessageDisplay({
  text,
  type
}: MessageDisplayType): JSX.Element {
  const successMessage = (): JSX.Element => {
    return (
      <Alert severity='success' onClose={() => {}}>
        {text}
      </Alert>
    );
  };

  const failMessage = (): JSX.Element => {
    return (
      <Alert severity='error' onClose={() => {}}>
        {text}
      </Alert>
    );
  };

  const renderMessage = (): JSX.Element => {
    if (type === SUCCESS_MESSAGE) {
      return successMessage();
    }

    return failMessage();
  };

  const hasText = () => {
    return text !== "";
  };

  return (
    <div>
      {hasText() ? (
        <Box pt={3} sx={{ width: "40%" }}>
          {renderMessage()}
        </Box>
      ) : null}
    </div>
  );
}

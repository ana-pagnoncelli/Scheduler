import React from "react";
import { Alert } from "@mui/material";
import { MessageBox } from "./styles";

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
    <div>{hasText() ? <MessageBox>{renderMessage()}</MessageBox> : null}</div>
  );
}

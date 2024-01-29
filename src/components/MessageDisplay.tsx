import React, { useEffect, useState } from "react";
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
  const [messageText, setMessageText] = useState(text);

  const clearMessage = () => {
    setMessageText("");
  };

  const successMessage = (): JSX.Element => {
    return (
      // alert that closes when clicking x
      <Alert
        severity='success'
        onClose={() => {
          clearMessage();
        }}
      >
        {messageText}
      </Alert>
    );
  };

  const failMessage = (): JSX.Element => {
    return (
      <Alert
        severity='error'
        onClose={() => {
          clearMessage();
        }}
      >
        {messageText}
      </Alert>
    );
  };

  const renderMessage = (): JSX.Element => {
    if (type === SUCCESS_MESSAGE) {
      return successMessage();
    }

    return failMessage();
  };

  useEffect(() => {
    setMessageText(text);
  }, [text]);

  return (
    <div>{messageText ? <MessageBox>{renderMessage()}</MessageBox> : null}</div>
    // </Fade>
  );
}

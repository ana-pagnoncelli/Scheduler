import React from "react";
import { styled } from "@mui/material/styles";

export const SUCCESS_MESSAGE = "success";
export const FAIL_MESSAGE = "fail";

export type MessageDisplayType = {
  text: string;
  type: string;
};

export const MessageStyleFail = styled("div")(() => ({
  color: "red",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

export const MessageStyleSuccess = styled("div")(() => ({
  color: "red",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

export function MessageDisplay({
  text,
  type
}: MessageDisplayType): JSX.Element {
  const successMessage = (): JSX.Element => {
    return (
      <MessageStyleFail>
        <span>{text}</span>
      </MessageStyleFail>
    );
  };

  const failMessage = (): JSX.Element => {
    return (
      <MessageStyleSuccess>
        <span>{text}</span>
      </MessageStyleSuccess>
    );
  };

  const renderMessage = (): JSX.Element => {
    if (type === SUCCESS_MESSAGE) {
      return successMessage();
    }

    return failMessage();
  };

  return <div>{renderMessage()}</div>;
}

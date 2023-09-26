import React from "react";
import { styled } from "@mui/material/styles";

type MessageDisplayProps = {
  message: string;
};

export const MessageStyle = styled("div")(() => ({
  color: "red",
  fontSize: "medium",
  padding: "5px",
  margin: "2px"
}));

export function MessageDisplay({ message }: MessageDisplayProps) {
  return (
    <MessageStyle>
      <span>{message}</span>
    </MessageStyle>
  );
}

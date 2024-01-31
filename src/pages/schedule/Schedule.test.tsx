import React from "react";
import { render, screen } from "@testing-library/react";
import { Schedule } from "./Schedule";
import { UserContext, initialValue } from "../../context/userContext";

jest.mock("../login/requests");

test("renders scheduler page", () => {
  render(
    <UserContext.Provider value={initialValue}>
      <Schedule />
    </UserContext.Provider>
  );
  const linkElement = screen.getByText("My Schedule User");
  expect(linkElement).toBeInTheDocument();
});

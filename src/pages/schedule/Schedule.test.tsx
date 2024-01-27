import React from "react";
import { render, screen } from "@testing-library/react";
import { Schedule } from "./Schedule";
import { UserContext, defaultUserContext } from "../../providers/userProvider";

jest.mock("../login/requests");

test("renders scheduler page", () => {
  render(
    <UserContext.Provider value={defaultUserContext}>
      <Schedule />
    </UserContext.Provider>
  );
  const linkElement = screen.getByText("My Schedule User");
  expect(linkElement).toBeInTheDocument();
});

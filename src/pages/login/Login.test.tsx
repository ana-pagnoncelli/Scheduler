import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { loginRequest } from "./requests";

jest.mock("./requests");

const setUserHasAccountToFalse = () => {};

describe("Login", () => {
  beforeEach(() => {
    render(<Login setUserHasAccountToFalse={setUserHasAccountToFalse} />);
  });

  it("renders Login page", () => {
    const linkElement = screen.getByText("Login");
    expect(linkElement).toBeInTheDocument();
  });

  describe("Login request", () => {
    describe("successful login", () => {
      it("should call loginRequest function", async () => {
        const inputEmail = screen.getByLabelText("Email");
        fireEvent.change(inputEmail, { target: { value: "test email" } });

        const inputPassword = screen.getByLabelText("Password");
        fireEvent.change(inputPassword, { target: { value: "test password" } });

        const submitButton = screen.getByRole("button", { name: "Submit" });
        fireEvent.click(submitButton);

        expect(loginRequest).toHaveBeenCalled();
      });
    });
  });
});

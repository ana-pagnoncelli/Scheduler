import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { loginRequest } from "./requests";
import { missingFields } from "../../messages";

jest.mock("./requests");

const setUserHasAccountToFalse = () => {};

describe("Login", () => {
  beforeEach(() => {
    render(
      <Login
        setUserHasAccountToFalse={setUserHasAccountToFalse}
        handleUserLogin={() => {}}
      />
    );
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

  describe("Login form", () => {
    describe("user fill a field from the form", () => {
      it("should have the right email value", () => {
        const testEmail = "test email";
        const inputEmail = screen.getByLabelText("Email");
        fireEvent.change(inputEmail, { target: { value: testEmail } });
        expect(inputEmail).toHaveValue(testEmail);
      });
      it("should have the right password value", () => {
        const testPassword = "test password";
        const inputPassword = screen.getByLabelText("Password");
        fireEvent.change(inputPassword, { target: { value: testPassword } });
        expect(inputPassword).toHaveValue(testPassword);
      });
    });

    describe("user fill the form and submit", () => {
      it("should show error message if there is a missing field", () => {
        const inputEmail = screen.getByLabelText("Email");
        fireEvent.change(inputEmail, { target: { value: "test email" } });

        const submitButton = screen.getByRole("button", { name: "Submit" });
        fireEvent.click(submitButton);

        const errorMessage = screen.queryByText(missingFields);

        expect(errorMessage).toBeVisible();
      });
    });
  });
});

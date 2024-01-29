import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SignUp } from "./SignUp";
import { createUserRequest } from "./requests";
import { missingFields } from "../../components/AlertPopup/messages";

jest.mock("./requests");

const setUserHasAccountToTrue = () => {};

describe("SignUp", () => {
  beforeEach(() => {
    render(<SignUp setUserHasAccountToTrue={setUserHasAccountToTrue} />);
  });
  it("renders signUp page", () => {
    const linkElement = screen.getByText("Sing Up");
    expect(linkElement).toBeInTheDocument();
  });

  describe("Sing Up form", () => {
    describe("user fill a field from the form", () => {
      it("should have the right name value", () => {
        const testName = "test name";
        const inputName = screen.getByLabelText("Name");
        fireEvent.change(inputName, { target: { value: testName } });
        expect(inputName).toHaveValue(testName);
      });
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
      it("should create user if all the data was filled", () => {
        const inputName = screen.getByLabelText("Name");
        fireEvent.change(inputName, { target: { value: "test name" } });

        const inputEmail = screen.getByLabelText("Email");
        fireEvent.change(inputEmail, { target: { value: "test email" } });

        const inputPassword = screen.getByLabelText("Password");
        fireEvent.change(inputPassword, { target: { value: "test password" } });

        const submitButton = screen.getByRole("button", { name: "Submit" });
        fireEvent.click(submitButton);

        expect(createUserRequest).toHaveBeenCalled();
      });

      it("should show error message if there is a missing field", () => {
        const inputName = screen.getByLabelText("Name");
        fireEvent.change(inputName, { target: { value: "test name" } });

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

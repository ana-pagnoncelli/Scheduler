import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });
  it("renders Login page", () => {
    const linkElement = screen.getByText("User Registration");
    expect(linkElement).toBeInTheDocument();
  });

  describe("user fill the form to user registration", () => {
    it("should show success message if all the data was filled", () => {
      const inputName = screen.getByLabelText("Name");
      fireEvent.change(inputName, { target: { value: "test name" } });

      const inputEmail = screen.getByLabelText("Email");
      fireEvent.change(inputEmail, { target: { value: "test email" } });

      const inputPassword = screen.getByLabelText("Password");
      fireEvent.change(inputPassword, { target: { value: "test password" } });

      const submitButton = screen.getByRole("button", { name: "Submit" });
      fireEvent.click(submitButton);

      const successMessage = screen.queryByText(
        "User test name successfully registered!!"
      );

      expect(successMessage).toBeVisible();
    });
  });
});

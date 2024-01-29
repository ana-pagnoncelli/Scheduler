import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Profile } from "./Profile";
import { missingFields } from "../../messages";
import { SUBMIT_CHANGES_BUTTON_NAME } from "./constants";
import { UserContext } from "../../context/userContext";
import { getProfile, updateProfile } from "./requests";

jest.mock("./requests");

const userContext = {
  email: "ana",
  isAdmin: false
};

describe("Profile", () => {
  beforeEach(() => {
    render(
      <UserContext.Provider value={userContext}>
        <Profile />
      </UserContext.Provider>
    );
  });

  test("renders profile page", () => {
    const linkElement = screen.getByText("Profile Page");
    expect(linkElement).toBeInTheDocument();
  });

  describe("Profile form", () => {
    describe("user fill a field from the form", () => {
      it("should have the right email value", () => {
        const testEmail = "test email";
        const inputEmail = screen.getByLabelText("Email");
        fireEvent.change(inputEmail, { target: { value: testEmail } });
        expect(inputEmail).toHaveValue(testEmail);
      });
      it("should have the right name value", () => {
        const testName = "test name";
        const inputName = screen.getByLabelText("Name");
        fireEvent.change(inputName, { target: { value: testName } });
        expect(inputName).toHaveValue(testName);
      });
      it("should have the right gender value", () => {
        const testGender = "test gender";
        const inputGender = screen.getByLabelText("Gender");
        fireEvent.change(inputGender, { target: { value: testGender } });
        expect(inputGender).toHaveValue(testGender);
      });
      it("should have the right age value", () => {
        const testAge = "23";
        const inputAge = screen.getByLabelText("Age");
        fireEvent.change(inputAge, { target: { value: testAge } });
        expect(inputAge).toHaveValue(testAge);
      });
      it("should have the right phone value", () => {
        const testPhone = "123";
        const inputPhone = screen.getByLabelText("Phone");
        fireEvent.change(inputPhone, { target: { value: testPhone } });
        expect(inputPhone).toHaveValue(testPhone);
      });
      it("should have the right plan value", () => {
        const testPlan = "1";
        const inputPlan = screen.getByLabelText("Plan");
        fireEvent.change(inputPlan, { target: { value: testPlan } });
        expect(inputPlan).toHaveValue(testPlan);
      });
    });

    describe("user fill the form and submit", () => {
      it("should show error message if it is missing name", () => {
        const inputAge = screen.getByLabelText("Age");
        fireEvent.change(inputAge, { target: { value: "23" } });

        const submitButton = screen.getByRole("button", {
          name: SUBMIT_CHANGES_BUTTON_NAME
        });
        fireEvent.click(submitButton);

        const errorMessage = screen.queryByText(missingFields);

        expect(errorMessage).toBeVisible();
      });
    });
  });

  describe("Get profile request", () => {
    it("should call getProfile function when rendering Profile page", async () => {
      expect(getProfile).toHaveBeenCalled();
    });
  });

  describe("Update profile request", () => {
    it("should not call updateProfile function when submitting invalid changes", async () => {
      const submitButton = screen.getByRole("button", {
        name: SUBMIT_CHANGES_BUTTON_NAME
      });
      fireEvent.click(submitButton);

      expect(updateProfile).not.toHaveBeenCalled();
    });
    it("should call updateProfile function when submitting valid changes", async () => {
      const inputName = screen.getByLabelText("Name");
      fireEvent.change(inputName, { target: { value: "test name" } });

      const submitButton = screen.getByRole("button", {
        name: SUBMIT_CHANGES_BUTTON_NAME
      });
      fireEvent.click(submitButton);

      expect(updateProfile).toHaveBeenCalled();
    });
  });
});

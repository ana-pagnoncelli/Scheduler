import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Logout } from "./Logout";
import { UserContext } from "../../context/userContext";

// Mock the UserContext
const mockSetUser = jest.fn();
const mockUserContext = {
  email: "test@example.com",
  isAdmin: false,
  setUser: mockSetUser
};

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe("Logout", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders logout page with correct content", () => {
    render(
      <UserContext.Provider value={mockUserContext}>
        <Logout />
      </UserContext.Provider>
    );
    
    expect(screen.getByText("Logging Out...")).toBeInTheDocument();
    expect(screen.getByText("You are being logged out. If you are not redirected automatically, please click the button below.")).toBeInTheDocument();
    expect(screen.getByText("Logout Now")).toBeInTheDocument();
  });

  it("calls setUser and removes user from localStorage when logout button is clicked", () => {
    render(
      <UserContext.Provider value={mockUserContext}>
        <Logout />
      </UserContext.Provider>
    );
    
    const logoutButton = screen.getByText("Logout Now");
    fireEvent.click(logoutButton);
    
    expect(mockSetUser).toHaveBeenCalledWith("", false);
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("user");
  });

  it("automatically logs out when component mounts", () => {
    render(
      <UserContext.Provider value={mockUserContext}>
        <Logout />
      </UserContext.Provider>
    );
    
    // The useEffect should automatically call logout
    expect(mockSetUser).toHaveBeenCalledWith("", false);
    expect(localStorageMock.removeItem).toHaveBeenCalledWith("user");
  });
});

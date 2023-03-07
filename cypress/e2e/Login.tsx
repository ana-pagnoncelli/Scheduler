describe("Redirect to login page", () => {
  it("should redirect to login page when clicking in login item", () => {
    cy.visit("http://localhost:3000");

    cy.get(`[aria-label="open drawer"]`).click();
    cy.get('[data-cy="Login"]').click();

    cy.url().should("include", "/login");
  });
});

describe("User registration", () => {
  it("should register the user successfully when the data is filled", () => {
    cy.visit("http://localhost:3000/login");

    cy.contains("button", "Do not have an account? Register here.").click();

    cy.contains("Name").type("test name");
    cy.contains("Email").type("test email");
    cy.contains("Password").type("test password");

    cy.contains("button", "Submit").click();

    cy.contains("User test name successfully registered!!");
  });

  it("should fail to register the user when there is missing data", () => {
    cy.visit("http://localhost:3000/login");

    cy.contains("button", "Do not have an account? Register here.").click();

    cy.contains("Email").type("test email");
    cy.contains("Password").type("test password");

    cy.contains("button", "Submit").click();

    cy.contains("Please enter all the fields");
  });
});

export {};

describe("Interaction with the drawer", () => {
  it("should open when I click in the drawer icon", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");
  });
});

export {};

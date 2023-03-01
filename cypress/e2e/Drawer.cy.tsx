describe("Redirects when clicking on items on the drawer", () => {
  it("should redirect to expenses page when clicking in expenses item", () => {
    cy.visit("http://localhost:3000");

    cy.get(`[aria-label="open drawer"]`).click();
    cy.get('[data-cy="Expenses"]').click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/expenses");
  });
});

export {};

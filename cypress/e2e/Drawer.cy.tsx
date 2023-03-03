describe("Redirects when clicking on the scheduler item on the drawer", () => {
  it("should redirect to scheduler page when clicking in scheduler item", () => {
    cy.visit("http://localhost:3000");

    cy.get(`[aria-label="open drawer"]`).click();
    cy.get('[data-cy="Schedule Class"]').click();

    cy.url().should("include", "/schedule-class");
  });
});

export {};

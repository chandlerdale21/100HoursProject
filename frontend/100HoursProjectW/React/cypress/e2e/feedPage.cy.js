describe("profilePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="Email address"]').type("hunterp21@gmail.com");
    cy.get('[data-cy="Password"]').type("Chandler21@");

    cy.get('[data-cy="LoginTest"]').click();
    cy.url().should("include", "/feed");
    cy.visit("http://localhost:5173/feed");
  });
  it("feed", () => {
    cy.url().should("include", "/feed");
  });
  it("should display personal posts", () => {
    cy.get('[data-cy="SinglePost"]').should("have.length.at.least", 0);
  });
 
});

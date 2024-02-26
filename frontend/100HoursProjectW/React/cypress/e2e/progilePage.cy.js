describe("profilePage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="Email address"]').type("hunterp21@gmail.com");
    cy.get('[data-cy="Password"]').type("Chandler21@");

    cy.get('[data-cy="LoginTest"]').click();
    cy.url().should("include", "/feed");
    cy.visit("http://localhost:5173/profile");
  });
  it("profile", () => {
    cy.url().should("include", "/profile");
  });
  it("should display user information", () => {
    cy.get('[data-cy="UserInfo"]').should("contain.text", "Hello, hunterp");
    cy.get('[data-cy="UserInfo"]').should(
      "contain.text",
      "Create a new post below!"
    );
  });

  it("should display submit post title", () => {
    cy.get('[data-cy="Post Title"]').should("be.visible");
  });
  it("should display submit post caotuib", () => {
    cy.get('[data-cy="Post Caption"]').should("be.visible");
  });

  it("should display personal posts", () => {
    cy.get('[data-cy="SinglePost"]').should("have.length.at.least", 0);
  });
});

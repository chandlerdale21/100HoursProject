describe("signupPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/signup");
  });
  it("Username Form", () => {
    cy.get('[data-cy="Username"]').should("be.visible");

    cy.get('[data-cy="Username"]').type("ThisIsMyUsername");

    cy.get('[data-cy="Username"]').should("have.value", "ThisIsMyUsername");
  });
  it("Email Form ", () => {
    cy.get('[data-cy="Email address"]').should("be.visible");
    cy.get('[data-cy="Email address"]').type("coolemail@gmail.com");
    cy.get('[data-cy="Email address"]').should(
      "have.value",
      "coolemail@gmail.com"
    );
  });
  it("Password ", () => {
    cy.get('[data-cy="Password"]').should("be.visible");
    cy.get('[data-cy="Password"]').type("Password123@");
    cy.get('[data-cy="Password"]').should("have.value", "Password123@");
  });
  it("Confirm Password", () => {
    cy.get('[data-cy="Confirm Password"]').should("be.visible");
    cy.get('[data-cy="Confirm Password"]').type("Password123@");
    cy.get('[data-cy="Confirm Password"]').should("have.value", "Password123@");
  });

//Things need to be implemented

  it("Fill Signup Form With Invalid email", () => {

    cy.get('[data-cy="Username"]').type("ThisIsMyUsername");

    cy.get('[data-cy="Email address"]').type(
      "someemailWaitDoINeedTheAttheratesymbol?"
    );
    cy.get('[data-cy="Password"]').type("ThisIsAPassword21@");

    cy.get('[data-cy="Confirm Password"]').type("ThisIsAPassword21@");

    cy.get('[data-cy="Signup"]').click();

    cy.get("[data-cy=InvalidSignup]").should(
      "contain.text",
      "Please enter a valid email address."
    );
  });


  it("Fill Signup Form With weak Password", () => {
    cy.get('[data-cy="Username"]').type("ThisIsMyUsername");

    cy.get('[data-cy="Email address"]').type(
      "someemail@gmail.com"
    );
    cy.get('[data-cy="Password"]').type("pass1");

    cy.get('[data-cy="Confirm Password"]').type("pass1");

    cy.get('[data-cy="Signup"]').click();

    cy.get("[data-cy=InvalidSignup]").should(
      "contain.text",
      "Password must be at least 8 characters long"
    );
  });
      it("Fill Signup Form With mismatched Password", () => {
        cy.get('[data-cy="Username"]').type("ThisIsMyUsername");

        cy.get('[data-cy="Email address"]').type("someemail@gmail.com");
        cy.get('[data-cy="Password"]').type("password1");

        cy.get('[data-cy="Confirm Password"]').type("password3");

        cy.get('[data-cy="Signup"]').click();

        cy.get("[data-cy=InvalidSignup]").should(
          "contain.text",
          "Passwords do not match"
        );
      });


  it("Empty Form", () => {
    cy.get('[data-cy="Signup"]').click();

    cy.get("[data-cy=InvalidSignup]").should(
      "contain.text",
      "Please enter a valid email address.Password must be at least 8 characters long"
    );
  });

});

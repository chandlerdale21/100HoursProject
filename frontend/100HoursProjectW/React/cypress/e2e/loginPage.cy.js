describe("loginPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  ////happy tests
  it("Click To Signup", () => {
    cy.get('a[href="/signup"]').find("button").click();
    cy.url().should("include", "/signup");
  });

  it("Fill Email Form", () => {
    cy.get('[data-cy="Email address"]').should("be.visible");

    cy.get('[data-cy="Email address"]').type("someemail@example.com");

    cy.get('[data-cy="Email address"]').should(
      "have.value",
      "someemail@example.com"
    );
  });

  it("Fill Password Form", () => {
    cy.get('[data-cy="Password"]').should("be.visible");

    cy.get('[data-cy="Password"]').type("ThisIsABadPassword21@");

    cy.get('[data-cy="Password"]').should(
      "have.value",
      "ThisIsABadPassword21@"
    );
  });

  it("Good User Login", () => {
    cy.get('[data-cy="Email address"]').type("hunterp21@gmail.com");
    cy.get('[data-cy="Password"]').type("Chandler21@");

    cy.get('[data-cy="LoginTest"]').click();

    cy.url().should("include", "/feed");
  });

  ///less desirable tests
  it("Fill Email Form With Invalid email", () => {
    cy.get('[data-cy="Email address"]').type(
      "someemailWaitDoINeedTheAttheratesymbol?"
    );
    cy.get('[data-cy="Password"]').type("ThisIsABadPassword21@");

    cy.get('[data-cy="LoginTest"]').click();

    cy.get("[data-cy=InvalidEmail]").should(
      "contain.text",
      "Please enter a valid email address."
    );
  });

  it("Fill Email Form With Short Password", () => {
    cy.get('[data-cy="Email address"]').type(
      "goodemail21@gmail.com"
    );
    cy.get('[data-cy="Password"]').type("7chars");

    cy.get('[data-cy="LoginTest"]').click();

    cy.get("[data-cy=InvalidEmail]").should(
      "contain.text",
      "Password must be at least 8 characters long"
    );
  });

   it("Unknown User", () => {
     cy.get('[data-cy="Email address"]').type("goodemail21@gmail.com");
     cy.get('[data-cy="Password"]').type("GoodPassword21@");

     cy.get('[data-cy="LoginTest"]').click();

     cy.get("[data-cy=InvalidEmail]").should(
       "contain.text",
       "Please verify your email or password. If you dont have an account feel free to signup below"
     );
   });
   
   it("Empty Form", () =>{
     cy.get('[data-cy="LoginTest"]').click();
    cy.get("[data-cy=InvalidEmail]")
      .invoke("text")
      .should("include", "Please enter a valid email address.");
    cy.get("[data-cy=InvalidEmail]")
      .invoke("text")
      .should("include", "Password must be at least 8 characters long");
   } )
});

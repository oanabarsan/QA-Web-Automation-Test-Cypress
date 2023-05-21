/// <reference types = "cypress" />

describe("Iframes page test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
    
  });


  it("Iframe 'Learn more' button test", () => {
  
    cy.get("#iframes").click();
    cy.get("#learn-more").click();
    cy.get("#message").should("be.visible");
    cy.contains(
      'This text appears when you click the "Learn more" button'
    ).should("be.visible");

  });
});
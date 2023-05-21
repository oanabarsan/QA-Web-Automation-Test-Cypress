/// <reference types = "cypress" />

describe("Buttons page test", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Double click button test", () => {
    cy.get("#actions").click();
    cy.get('a[href="double-click.html"').click();
    cy.get("#double-click-btn").dblclick();
    cy.get("#double-click-result")
      .contains(`Congrats, you double clicked!`)
      .should("be.visible");
  });

  it("Scrolling test", () => {
    cy.get("#actions").click();
    cy.get("#scrolling").click();
    cy.scrollTo('bottom')
    cy.get("#the-end")
      .contains(`THE END`)
      .should("be.visible");
  });

  it("Show element test", () => {
    cy.get("#actions").click();
    cy.get('a[href="show-hide-element.html"]').click();
    cy.get('#showHideBtn').click;
    cy.get('#hiddenText').contains('This text will be hidden').should('be.visible');
    
  });
});

/// <reference types = "cypress" />

describe("Buttons page test", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
    
  });

  it("Checkbox button test", () => {
    cy.get("#buttons").click();
    cy.get('#checkboxes').click();
    cy.get("#checkbox1").click().should('be.checked');
    cy.get("#checkbox2").click().should('be.checked');
    cy.get("#checkbox3").click().should('be.checked');
    cy.get('button[type="reset"').click();
    cy.get(':checkbox').uncheck();
  });
});
/// <reference types = "cypress" />

describe("Pagination test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Pagination test", () => {
    cy.get("#pagination").click();
    cy.get(".page-link").contains("1").click();
    cy.contains(`You clicked page no. 1`).should("be.visible");
    cy.get(".page-link").contains("2").click();
    cy.contains(`You clicked page no. 2`).should("be.visible");
    cy.get(".page-link").contains("3").click();
    cy.contains(`You clicked page no. 3`).should("be.visible");
    cy.get(".page-link").contains("Next").click();
    cy.contains(`You clicked the "Next" button`).should("be.visible");
  });
});

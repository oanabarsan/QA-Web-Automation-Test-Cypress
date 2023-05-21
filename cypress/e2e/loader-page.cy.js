/// <reference types = "cypress" />

describe("Loader page test", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Loader page test", () => {
  
    cy.get("a[href='loader.html']").click();
    cy.wait(3000);
    cy.get('#myDiv>h2').contains(`Tada!`).should(
      "be.visible"
    );

  });
});
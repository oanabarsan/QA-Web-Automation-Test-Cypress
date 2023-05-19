/// <reference types = "cypress" />

describe("File upload test suites", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
    cy.get("#pagination").click();
  });

  it("Loader page test", () => {
  
    cy.get("a[href='loader.html']").click();
    cy.get('#myDiv>h2').contains(`Tada!`).should(
      "be.visible"
    );

  });
});
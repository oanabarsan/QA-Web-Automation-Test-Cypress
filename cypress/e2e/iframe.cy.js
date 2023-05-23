/// <reference types = "cypress" />

import "cypress-iframe";

describe("Iframes test suite", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Iframe test", () => {
    cy.get("#iframes").click();
    cy.frameLoaded("#iframe-checkboxes");
    cy.iframe().find("#learn-more").click();
    cy.iframe().find("#show-text").should("be.visible");
  });
});

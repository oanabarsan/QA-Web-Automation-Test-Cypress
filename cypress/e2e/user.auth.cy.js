/// <reference types = "cypress" />

import { faker } from "@faker-js/faker";

describe("Auth user test suite", () => {
  beforeEach(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("login with valid creds", () => {
    cy.login("admin@admin.com", "admin123");
    cy.get("#message").should("be.visible");
    cy.get("#message")
      .should("contain", "admin@admin.com, you have successfully logged in!")
      .should("be.visible");

    cy.contains("admin@admin.com, you have successfully logged in!").should(
      "be.visible"
    );
  });

  it("login with invalid creds", () => {
    cy.login("admin@admin.com", "parolagresita");
    cy.get("#message").should("be.visible");
    cy.contains(
      "Bad credentials! Please try again! Make sure that you've registered."
    ).should("be.visible");
  });

  it("Register with valid creds", () => {
    const randomLastName = faker.person.lastName();

    cy.get("#forms").click();
    cy.get("#register").click();
    cy.get("#firstName").type(faker.person.firstName());
    cy.get("#lastName").type(randomLastName);
    cy.get("#phone").type("0748648803");
    cy.get("select").select("Romania");
    cy.get("#emailAddress").type(randomLastName + "." + faker.internet.email());
    cy.get("#password").type("IloveBucovina123!");
    cy.get("#exampleCheck1").click();
    cy.get("button").contains("Register").click();
    cy.get("#message").should("be.visible");
    cy.contains("The account has been successfully created!").should(
      "be.visible"
    );
  });
});

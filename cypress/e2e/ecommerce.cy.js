/// <reference types = "cypress" />

describe("Ecommerce test suite", () => {
  before(() => {
    cy.visit("https://qa-practice.netlify.app");
  });

  it("Submit order test", () => {
    cy.get('a[href="auth_ecommerce.html"]').click();
    cy.get('#email').type("admin@admin.com");
    cy.get("#password").type("admin123");
    cy.get("#submitLoginBtn").click();
    cy.contains('SHOPPING CART').should('be.visible');
    cy.get('div.shop-items div.shop-item:nth-child(1) button').click();
    cy.get('input.cart-quantity-input').should('be.visible');
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('#phone').type('0747648803');
    cy.get('input[name="street"]').type('Republicii street');
    cy.get('input[name="city"]').type('Bucuresti');
    cy.get('#countries_dropdown_menu').select('Austria');
    cy.get('#submitOrderBtn').click();
    cy.contains('Congrats! Your order of').should('be.visible');
  });
});

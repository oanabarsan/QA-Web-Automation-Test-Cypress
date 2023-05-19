Cypress.Commands.add('login',(email, password) =>{
  cy.get("#forms").click();
  cy.get('a[href="login.html"]').click();
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#submitLoginBtn").click();
})
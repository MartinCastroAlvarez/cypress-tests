require('cypress-xpath')

Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.get('#Email\\ Address-field').type(Cypress.env('USERNAME'))
  cy.get('#Password-field').type(Cypress.env('PASSWORD'))
  cy.contains('Login').click()
})
describe('Login Test', () => {
  it('Visits the login page and expects the email to be required.', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Email required')
  })

  it('Visits the login page and expects the password to be required.', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.contains('Password required')
  })

  it('Visits the login page and introduces an incorrect username and password.', () => {
    cy.visit('/')
    cy.get('#Email').type('123')
    cy.get('#Password').type('123')
    cy.contains('Login').click()
    cy.contains('Invalid credentials.')
  })
})
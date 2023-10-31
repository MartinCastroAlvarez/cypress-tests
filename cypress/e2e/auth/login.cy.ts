describe('Login Test', () => {
  it('Visits the login page and authenticates successfully.', () => {
    cy.login()
    cy.contains('welcome')
  })

  it('Visits the login page, authenticates successfully, and then logs out.', () => {
    cy.login()
    cy.xpath('//*[@id="root"]/div/div').click()
    cy.contains('Logout').click()
    cy.contains('Login')
  })
})

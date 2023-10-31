describe('Dashboard Test', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Visits the dashboard and opens a modal.', () => {
    cy.contains('Welcome')
    cy.contains('Open').click()
    cy.contains('Modal')
    cy.xpath('//*[@id="root"]/div[1]/div[1]/div[2]').click()
    cy.contains('Welcome')
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')
  })
})
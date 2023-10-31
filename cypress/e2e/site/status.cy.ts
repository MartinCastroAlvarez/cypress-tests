describe('Site Test', () => {
   it('Visits the login page and expects it to load.', () => {
      cy.visit('/');
      cy.contains('Login');
   })
})
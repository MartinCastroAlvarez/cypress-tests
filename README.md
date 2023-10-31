# cypress-tests
Testing automation using Cypress

![wallpaper.jpg](wallpaper.jpg)

## Tests

|Test|Purpose|
|--|---|
|[site/status.cy.js](./cypress/e2e/site/status.cy.js)|Site is Ok.|
|[auth/validations.cy.js](./cypress/e2e/auth/validations.cy.js)|The login perform shows the proper error messages.|
|[auth/login.cy.js](./cypress/e2e/auth/login.cy.js)|The login form works properly.|
|[dashboard/modal.cy.js](./cypress/e2e/dashboard/modal.cy.js)|The dashboard sidebar works successfully.|

## Instructions

Set environment variables:

```bash
export CYPRESS_BASE_URL='http://localhost:3000'
export CYPRESS_USERNAME='lorem-ipsum'
export CYPRESS_PASSWORD='lorem-ipsum'
```

Open Cypress console:

```bash
npx cypress open --e2e --browser chrome
```

Run Cypress in headless mode:

```bash
npx cypress run --browser chrome
```

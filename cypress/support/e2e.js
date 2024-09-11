// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { credentials } from '../fixtures/Credentials';
import { URLs } from '../fixtures/URLs'
import { login } from '../fixtures/Xpaths'
import './commands'
const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand()

require('cypress-xpath');

// Alternatively you can use CommonJS syntax:
// require('./commands')

before(() => {
    if(Cypress.currentTest.titlePath[0].includes('Logged In')){
        cy.visit(URLs.main + URLs.loginPage)

        cy.xpath(login.email).type(credentials.email)
        cy.xpath(login.password).first().type(credentials.password)
        cy.xpath(login.submit).first().click()
    
        cy.visit(URLs.main)
    } else {
        cy.visit(URLs.main)
    }
    
})
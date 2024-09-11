// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />

Cypress.Commands.add('clickOn', (locator, index) => {
    const updatedLocator = index ? `${locator}[${index}]` : locator;
    cy.xpath(updatedLocator)
      .scrollIntoView()
      .should('be.visible')
      .then(() => {
          cy.xpath(updatedLocator).click();
      });
});

Cypress.Commands.add('hoverOver', (locator, index) => {
    const updatedLocator = index ? `${locator}[${index}]` : locator;
    cy.xpath(updatedLocator)
      .scrollIntoView()
      .should('be.visible')
      .then(() => {
          cy.xpath(updatedLocator).trigger('mouseover');
      });
});
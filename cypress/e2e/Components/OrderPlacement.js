import { credentials } from "../../fixtures/Credentials";
import { generic, productPage, shippingPage } from "../../fixtures/Xpaths";
import { Utils } from "../../support/Utils";

export class OrderPlacement {
    static addProduct(size, color, quantity) {
        cy.waitForStableDOM();
        Utils.clickOn(productPage.sizes(size));
        Utils.clickOn(productPage.colors(color));
        Utils.type(productPage.quantity, quantity);
        Utils.clickOn(generic.button('Add to Cart'));
        cy.contains('You added Argus All-Weather Tank to your shopping cart.').should('be.visible')
        cy.waitForStableDOM()
    }

    static inputShippingDetails(){
        cy.waitForStableDOM()
        if(Cypress.currentTest.titlePath[0].includes('Guest')){
            Utils.type(shippingPage.email, credentials.guestEmail)
        }
        Utils.type(shippingPage.name, credentials.firstName);
        Utils.type(shippingPage.lastName, credentials.lastName);
        Utils.type(shippingPage.company, credentials.company);
        Utils.type(shippingPage.street, credentials.street);
        Utils.type(shippingPage.city, credentials.city);
        Utils.selectFromDropdown(shippingPage.country, credentials.country);
        Utils.selectFromDropdown(shippingPage.region, credentials.region);
        Utils.type(shippingPage.Zip, Utils.numeric(6));
        Utils.type(shippingPage.phone, Utils.numeric(10));
    }

    static checkTotalPrice(productPrice, shippingPrice) {
        let totalPrice = Utils.fetchPrice(shippingPage.totalPrice)
        expect(totalPrice).to.eq(productPrice + shippingPrice);
    }
}


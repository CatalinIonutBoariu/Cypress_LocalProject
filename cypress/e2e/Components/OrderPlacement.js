import { credentials } from "../../fixtures/Credentials";
import { generic, productPage, shippingPage } from "../../fixtures/Xpaths";
import { Utils } from "../../support/Utils";

export class OrderPlacement {
    static addProduct(size, color, quantity) {
        Utils.clickOn(productPage.sizes(size));
        Utils.clickOn(productPage.colors(color));
        Utils.type(productPage.quantity, quantity);
        Utils.clickOn(generic.addButton);
        cy.contains('You added Argus All-Weather Tank to your shopping cart.').should('be.visible')
    }

    static inputShippingDetails(){
        Utils.type(shippingPage.name, credentials.firstName);
        Utils.type(shippingPage.lastName, credentials.lastName);
        Utils.type(shippingPage.company, credentials.company);
        Utils.type(shippingPage.street, credentials.street);
        Utils.type(shippingPage.city, credentials.city);
        Utils.selectFromDropdown(shippingPage.country, credentials.country);
        Utils.selectFromDropdown(shippingPage.region, credentials.region);
        Utils.type(shippingPage.Zip, Utils.numeric(6));
        Utils.type(shippingPage.phone, Utils.numeric(10));
        Utils.clickOn(generic.nextButton)
    }
}


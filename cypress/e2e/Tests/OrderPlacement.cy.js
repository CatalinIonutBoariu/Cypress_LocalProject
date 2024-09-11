import { generic, homepage, menCatalog, shippingPage } from "../../fixtures/Xpaths"
import { Utils } from "../../support/Utils"
import { OrderPlacement } from "../Components/OrderPlacement"

describe('Order placement process - Logged In', () => {

    it('Order product from Men catalog Hot Sellers bar', () => {
        Utils.clickOn(homepage.navigationBar('Men'));
        Utils.clickOn(menCatalog.hotSellersBar, 1);
        OrderPlacement.addProduct('L','Gray', 1);
        Utils.clickOn(generic.cartDropdown);
        Utils.clickOn(generic.checkoutButton)
        Utils.clickOn(generic.button('Next'))
        Utils.clickOn(generic.button('Place Order'));
        cy.contains('Thank you for your purchase!').should('be.visible');
    })

    it('Add new Shipping details', () => {
        Utils.clickOn(homepage.navigationBar('Men'));
        Utils.clickOn(menCatalog.hotSellersBar, 1);
        OrderPlacement.addProduct('L','Gray', 1);
        Utils.clickOn(generic.cartDropdown);
        Utils.clickOn(generic.checkoutButton);
        Utils.clickOn(shippingPage.newAdress);
        OrderPlacement.inputShippingDetails();
        Utils.clickOn(shippingPage.saveAddress);
        Utils.clickOn(generic.button('Ship here'));
        cy.waitForStableDOM()      
        Utils.clickOn(shippingPage.shippingMethod(1));
        Utils.clickOn(generic.button('Next'));
        Utils.clickOn(generic.button('Place Order'));
        cy.contains('Thank you for your purchase!').should('be.visible');
    })


})

describe('Order placement process - Guest', () => {
    it('Order product from Men catalog Hot Sellers bar', () => {
        Utils.clickOn(homepage.navigationBar('Men'));
        Utils.clickOn(menCatalog.hotSellersBar, 1);
        OrderPlacement.addProduct('L','Gray', 1);
        Utils.clickOn(generic.cartDropdown);
        Utils.clickOn(generic.checkoutButton);
        OrderPlacement.inputShippingDetails();
        Utils.clickOn(shippingPage.shippingMethod(1));
        Utils.clickOn(generic.button('Next'));
        Utils.clickOn(generic.button('Place Order'))
        cy.contains('Thank you for your purchase!').should('be.visible')
    })
})
import { generic, homepage, menCatalog } from "../../fixtures/Xpaths"
import { Utils } from "../../support/Utils"
import { OrderPlacement } from "../Components/OrderPlacement"

describe('Regression test suite for the order placement process', () => {

    it('Order product from Men catalog Hot Sellers bar', () => {
        Utils.clickOn(homepage.navigationBar('Men'));
        Utils.clickOn(menCatalog.hotSellersBar, 1);
        OrderPlacement.addProduct('L','Gray', 1);
        Utils.clickOn(generic.cartDropdown);
        Utils.clickOn(generic.checkoutButton);
        OrderPlacement.inputShippingDetails();
    }) 


})
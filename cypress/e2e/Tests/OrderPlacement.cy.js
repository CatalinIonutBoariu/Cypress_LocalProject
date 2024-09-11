import { generic, homepage, menCatalog } from "../../fixtures/Xpaths"
import { Utils } from "../../support/Utils"
import { OrderPlacement } from "../Components/OrderPlacement"

describe('Regression test suite for the order placement process', () => {

    it('Order product from Men catalog Hot Sellers bar', () => {
        Utils.clickOn(homepage.navigationBar('Men'))
        Utils.clickOn(menCatalog.hotSellersBar, 1)
        OrderPlacement.chooseProductAttributes('L','Gray')
        Utils.clickOn(generic.addButton)
    }) 

    it('Order product from Men catalog Hot Sellers bar 2', () => {
        Utils.clickOn(homepage.navigationBar('Men'))
        Utils.clickOn(menCatalog.hotSellersBar, 3)
        OrderPlacement.chooseProductAttributes('33','Black')
        Utils.clickOn(generic.addButton)
    }) 
})
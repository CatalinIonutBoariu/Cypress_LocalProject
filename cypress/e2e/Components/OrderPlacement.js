import { productPage } from "../../fixtures/Xpaths";
import { Utils } from "../../support/Utils";

export class OrderPlacement {
    static chooseProductAttributes(size, color) {
        debugger
        Utils.clickOn(productPage.sizes(size))
        Utils.clickOn(productPage.colors(color))
    }
}
export class Utils {
    static clickOn(locator, index){
        index ? cy.clickOn(locator, index) : cy.clickOn(locator);
    }

    static hover(locator, index) {
        index ? cy.hoverOver(locator, index) : cy.hoverOver(locator);
    }
}
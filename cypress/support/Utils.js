
export class Utils {
    static clickOn(locator, index){
        index ? cy.clickOn(locator, index) : cy.clickOn(locator);
    }

    static hover(locator, index) {
        index ? cy.hoverOver(locator, index) : cy.hoverOver(locator);
    }

    static type(locator, input) {
        cy.xpath(locator).clear().type(input)
    }
    static selectFromDropdown(locator, value) {
        cy.xpath(locator).select(value)
    }

    static numeric(length) {
        var text = '';
        var possible = '1234567890';
        for(var i = 0; i< length; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    static fetchPrice(locator) {
        debugger
        cy.xpath(locator).invoke('text').then((priceText) => {
            debugger
        const numericValue = parseFloat(priceText.replace('$', ''));
        return numericValue
  });
    }
}
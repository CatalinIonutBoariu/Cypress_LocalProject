export const login = {
    email: "//input[@id='email']",
    password: "//input[@id='pass']",
    submit: "//button[@id='send2']"
}

export const homepage = {

    navigationBar: (text) => {
        return `//ul/li//span[normalize-space()='${String(text)}']`;
    }
}

export const menCatalog = {
    hotSellersBar: "//div[@class='block-content']/div[@class='products-grid grid']/ol/li",
}

export const productPage = {
    sizes: (size) => { return `//div[@class='swatch-attribute size']//*[normalize-space()='${size}']`},
    colors: (color) => { return `//div[@class='swatch-attribute color']//*[@option-label= '${color}']`},
    quantity: "//input[@id='qty']"

}

export const shippingPage = {
    name: "//input[@name='firstname']",
    lastName: "//input[@name='lastname']",
    company: "//input[@name='company']",
    street: "//input[@name='street[0]']",
    city: "//input[@name='city']",
    region: "//select[@name='region_id']",
    Zip: "//input[@name='postcode']",
    country: "//select[@name='country_id']",
    phone: "//input[@name='telephone']",
}

export const generic = {
    addButton : "//span[normalize-space()='Add to Cart']",
    cartDropdown: "//div[@data-block='minicart']",
    checkoutButton: "//button[@id='top-cart-btn-checkout']",
    nextButton: "//span[normalize-space()='Next']"
}
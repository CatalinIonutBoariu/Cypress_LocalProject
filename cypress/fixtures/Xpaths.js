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
    quantity: "//input[@id='qty']",
    price: "//div[@class='product-info-price']//span[@class='price']"

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
    email: "//div[@id='checkout-step-shipping']//input[@id='customer-email']",
    shippingMethod: (index) => { return `(//input[@type='radio'])[${index}]`},
    shippingPrice: "(//div[@id='checkout-shipping-method-load']//span[@class='price'])[1]",
    totalPrice: "//tr[@class='grand totals']//span[@class='price']",
    newAdress: "//div[@class='new-address-popup']/button",
    saveAddress: "//input[@id='shipping-save-in-address-book']"
}

export const generic = {
    cartDropdown: "//div[@data-block='minicart']",
    checkoutButton: "//button[@id='top-cart-btn-checkout']",
    button : (text) => { return `//span[normalize-space()='${text}']`},
    accountDropdown: "//li[@class='customer-welcome active']",
    logout: "//li[@class='customer-welcome active']//li[@class='authorization-link']"
}
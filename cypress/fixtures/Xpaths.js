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

}

export const generic = {
    addButton : "//span[normalize-space()='Add to Cart']",
}
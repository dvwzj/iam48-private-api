import PublicProductsGiftSection from './PublicProductsGiftSection'

export default class PublicProductsGift {
    constructor(_product) {
        Object.defineProperty(this, '$product', {
            value: _product,
        })
        Object.defineProperty(this, '$http', {
            value: _product.$http.extends({
                baseURL: [
                    _product.$http.defaults.baseURL,
                    'gift',
                ].join('/'),
            }),
        })
        this.section = new PublicProductsGiftSection(this)
    }
}
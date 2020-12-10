import PublicProductsGift from './PublicProductsGift'

export default class PublicProducts {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'products',
                ].join('/'),
            }),
        })
        if (!this.gift.section) {
            Object.defineProperty(this.gift, 'section', {
                value: new PublicProductsGift(this).section,
            })
        }
    }
    async gift() {
        try {
            const res = await this.$http.get('/gift')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
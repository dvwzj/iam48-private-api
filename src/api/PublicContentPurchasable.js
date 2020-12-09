export default class PublicContentPurchasable {
    constructor(_content) {
        Object.defineProperty(this, '$content', {
            value: _content,
        })
        Object.defineProperty(this, '$http', {
            value: _content.$http.extends({
                baseURL: [
                    _content.$http.defaults.baseURL,
                    'purchasable',
                ].join('/'),
            }),
        })
    }
    async recommend() {
        try {
            const res = await this.$http.get('/recommend')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
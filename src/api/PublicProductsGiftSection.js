export default class PublicProductsGiftSection {
    constructor(_gift) {
        Object.defineProperty(this, '$gift', {
            value: _gift,
        })
        Object.defineProperty(this, '$http', {
            value: _gift.$http.extends({
                baseURL: [
                    _gift.$http.defaults.baseURL,
                    'section',
                ].join('/'),
            }),
        })
    }
    async timelineFeed() {
        try {
            const res = await this.$http.get('/timeline-feed')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
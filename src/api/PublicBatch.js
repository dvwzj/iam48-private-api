export default class PublicBatch {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'batch',
                ].join('/'),
            }),
        })
    }
    async latest() {
        try {
            const res = await this.$http.get('/latest')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async current() {
        try {
            const res = await this.$http.get('/current')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
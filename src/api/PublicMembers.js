export default class PublicMembers {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'members',
                ].join('/'),
            }),
        })
    }
    async all() {
        try {
            const res = await this.$http.get('/all')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async stats() {
        try {
            const res = await this.$http.get('/stats')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
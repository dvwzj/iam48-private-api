export default class UserUserCommentsContent {
    constructor(_comments) {
        Object.defineProperty(this, '$comments', {
            value: _comments,
        })
        Object.defineProperty(this, '$http', {
            value: _comments.$http.extends({
                baseURL: [
                    _comments.$http.defaults.baseURL,
                    'content',
                ].join('/'),
            }),
        })
    }
    async top100(contentId) {
        try {
            if (!this.$comments.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get(`/${contentId}/top100`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
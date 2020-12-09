export default class UserUserLikes {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'likes',
                ].join('/'),
            }),
        })
    }
    async memberLive(contentId) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!contentId) {
                throw new Error('[contentId] is required.')
            }
            const res = await this.$http.get(`/member-live/${contentId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
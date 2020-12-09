export default class UserUserBadge {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'badge',
                ].join('/'),
            }),
        })
    }
    async current() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/current')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
export default class UserSubscription {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _user.$http.extends({
                    baseURL: [
                        _user.$http.defaults.baseURL,
                        'subscription',
                    ].join('/'),
                })
            },
        })
    }
    async user() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get(`/user/${this.$user.$data.id}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
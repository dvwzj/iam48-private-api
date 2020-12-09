export default class UserUserNotification {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'notification',
                ].join('/'),
            }),
        })
    }
    async sound() {
        try {
            if (!this.$user.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/sound')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
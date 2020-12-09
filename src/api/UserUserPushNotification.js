export default class UserUserPushNotification {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'push-notification',
                ].join('/'),
            }),
        })
    }
    async register(fcmToken) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!fcmToken) {
                throw new Error('[fcmToken] is required.')
            }
            const res = await this.$http.post('/register', {
                fcmToken,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
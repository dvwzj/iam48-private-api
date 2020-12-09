export default class CoinUserbalance {
    constructor(_app) {
        Object.defineProperty(this, '$app', {
            value: _app,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _app.$http.extends({
                    baseURL: 'https://coin-userbalance.bnk48.io',
                    headers: {
                        environment: _app.defaults.environment,
                        'user-agent': _app.defaults.userAgent,
                        'bnk48-appcode': _app.defaults.appId,
                        'bnk48-device-id': _app.defaults.deviceId,
                        'bnk48-device-model': _app.defaults.deviceModel,
                        'authorization': `Bearer ${_app.user.$data.token || ''}`,
                    }
                })
            },
        })
    }
    async balance() {
        try {
            if (!this.$app.user.$data.id) {
                throw new Error('Unauthirized')
            }
            const res = await this.$http.get(`/app/${this.$app.defaults.appId}/user/${this.$app.user.$data.id}/balance`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
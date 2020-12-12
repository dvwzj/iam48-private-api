export default class Live {
    constructor(_app) {
        Object.defineProperty(this, '$app', {
            value: _app,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _app.$http.extends({
                    baseURL: 'https://live-api.bnk48.io',
                    headers: {
                        environment: _app.defaults.environment,
                        'user-agent': _app.defaults.userAgent,
                        'bnk48-appcode': _app.defaults.appId,
                        'bnk48-device-id': _app.defaults.deviceId,
                        'bnk48-device-model': _app.defaults.deviceModel,
                        'authorization': `Bearer ${this.$app.user.$data.token || ''}`,
                    }
                })
            },
        })
    }
    async info(scheduleId) {
        try {
            if (!this.$app.user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!scheduleId) {
                throw new Error('[scheduleId] is required.')
            }
            const res = await this.$http.get(`/user/${this.$app.user.$data.id}/info/member-live/${scheduleId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async watch(scheduleId) {
        try {
            if (!this.$app.user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!scheduleId) {
                throw new Error('[scheduleId] is required.')
            }
            const res = await this.$http.get(`/user/${this.$app.user.$data.id}/watch/member-live/${scheduleId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
import UserAuth from './UserAuth'
import UserUser from './UserUser'
import UserSubscription from './UserSubscription'

export default class User {
    constructor(_app) {
        Object.defineProperty(this, '$app', {
            value: _app,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _app.$http.extends({
                    baseURL: 'https://user.bnk48.io',
                    headers: {
                        environment: _app.defaults.environment,
                        'user-agent': _app.defaults.userAgent,
                        'bnk48-appcode': _app.defaults.appId,
                        'bnk48-device-id': _app.defaults.deviceId,
                        'bnk48-device-model': _app.defaults.deviceModel,
                        'authorization': `Bearer ${this.$data.token || ''}`,
                    }
                })
            },
        })
        Object.defineProperty(this, '$data', {
            enumerable: true,
            writable: true,
            value: {
                id: undefined,
                token: undefined,
                refreshToken: undefined,
                expireDate: undefined,
            },
        })
        this.auth = new UserAuth(this)
        this.user = new UserUser(this)
        this.subscription = new UserSubscription(this)
    }
    async memberLive(contentId) {
        try {
            if (!this.$data.id) {
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
    async batchThankyouVideo (contentId) {
        try {
            if (!this.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!contentId) {
                throw new Error('[contentId] is required.')
            }
            const res = await this.$http.get(`/batch-thankyou-video/${contentId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
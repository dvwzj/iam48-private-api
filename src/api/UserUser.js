import _ from 'lodash'

import UserUserBadge from './UserUserBadge'
import UserUserLikes from './UserUserLikes'
import UserUserFollows from './UserUserFollows'
import UserUserNotification from './UserUserNotification'
import UserUserPushNotification from './UserUserPushNotification'
import UserUserRewardPoints from './UserUserRewardPoints'
import UserUserContent from './UserUserContent'
import UserUserComments from './UserUserComments'
import UserUserWatch from './UserUserWatch'

export default class UserUser {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _user.$http.extends({
                    baseURL: [
                        _user.$http.defaults.baseURL,
                        'user',
                        this.$user.$data.id,
                    ].join('/'),
                })
            },
        })
        if (!this.notification.sound) {
            Object.defineProperty(this.notification, 'sound', {
                value: () => {
                    return new UserUserNotification(this).sound()
                }
            })
        }
        this.badge = new UserUserBadge(this)
        this.likes = new UserUserLikes(this)
        this.follows = new UserUserFollows(this)
        this.push = new UserUserPushNotification(this)
        this.reward = new UserUserRewardPoints(this)
        this.content = new UserUserContent(this)
        this.comments = new UserUserComments(this)
        this.watch = new UserUserWatch(this)
    }
    async profile() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/profile')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async device() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.post('/device', {
                deviceModel: this.$user.$app.defaults.deviceModel,
                deviceName: this.$user.$app.defaults.deviceName,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async notification(params) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            params = _.merge({
                skip: 0,
                take: 1,
            }, params)
            const res = await this.$http.get('/notification', {
                params,
            })
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
    async oshiMember() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/oshi-member')
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
    async memberLive(contentId) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!contentId) {
                throw new Error('[contentId] is required.')
            }
            const res = await this.$http.post(`/member-live/${contentId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
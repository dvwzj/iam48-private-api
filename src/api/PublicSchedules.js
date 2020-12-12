import _ from 'lodash'

export default class PublicSchedules {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'schedules',
                ].join('/'),
            }),
        })
    }
    async memberLive(scheduleId) {
        try {
            const res = await this.$http.get(`/member-live/${scheduleId || ''}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
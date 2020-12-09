import _ from 'lodash'

export default class PublicTimelineOnly {
    constructor(_timeline) {
        Object.defineProperty(this, '$timeline', {
            value: _timeline,
        })
        Object.defineProperty(this, '$http', {
            value: _timeline.$http.extends({
                baseURL: [
                    _timeline.$http.defaults.baseURL,
                    'only',
                ].join('/'),
            }),
        })
    }
    async member(memberId, params) {
        try {
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            params = _.merge({
                amount: 6,
                last_id: undefined,
            }, params)
            const res = await this.$http.get(`/member/${memberId}`, {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
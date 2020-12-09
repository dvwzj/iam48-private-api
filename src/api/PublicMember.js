import PublicMemberFans from './PublicMemberFans'

export default class PublicMember {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'member',
                ].join('/'),
            }),
        })
        this.fans = new PublicMemberFans(this)
    }
    async profile(memberId) {
        try {
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            const res = await this.$http.get(`/${memberId}/profile`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async memberLive(memberId, params) {
        try {
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            params = _.merge({
                skip: 0,
                take: 10,
            }, params)
            const res = await this.$http.get(`/${memberId}/member-lives`, {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
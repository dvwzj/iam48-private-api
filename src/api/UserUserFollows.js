export default class UserUserFollows {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'follows',
                ].join('/'),
            }),
        })
    }
    async members() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/members')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async member(memberId) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            const res = await this.$http.get(`/member/${memberId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
export default class UserUserRewardPoints {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'reward-points',
                ].join('/'),
            }),
        })
    }
    async balance() {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get('/balance')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
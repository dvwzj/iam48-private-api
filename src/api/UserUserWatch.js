export default class UserUserWatch {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'watch',
                ].join('/'),
            }),
        })
    }
    async theaterPlayback(contentId) {
        try {
            if (!this.$user.$data.id) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.get(`/theater-playback/${contentId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
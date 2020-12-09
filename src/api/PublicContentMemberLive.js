export default class PublicContentMemberLive {
    constructor(_content) {
        Object.defineProperty(this, '$content', {
            value: _content,
        })
        Object.defineProperty(this, '$http', {
            value: _content.$http.extends({
                baseURL: [
                    _content.$http.defaults.baseURL,
                    'member-live',
                ].join('/'),
            }),
        })
    }
    async videos(params) {
        try {
            params = _.merge({
                skip: 0,
                take: 10,
            }, params)
            const res = await this.$http.get('/videos', {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
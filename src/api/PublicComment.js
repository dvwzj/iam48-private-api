export default class PublicComment {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'comment',
                ].join('/'),
            }),
        })
    }
    async multiple(contentId, params) {
        try {
            params = _.merge({
                commentIdList: [],
            }, params)
            const res = await this.$http.get(`/${contentId}/multiple`, {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
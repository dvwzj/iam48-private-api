import _ from 'lodash'

export default class PublicCampaigns {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'campaigns',
                ].join('/'),
            }),
        })
    }
    async all(params) {
        try {
            params = _.merge({
                skip: 0,
                take: 10,
            }, params)
            const res = await this.$http.get('/all', {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
import _ from 'lodash'

export default class PublicTheater {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'theater',
                ].join('/'),
            }),
        })
    }
    async playback(params) {
        try {
            if ((_.isString(params) && _.isInteger(parseInt(`${params}`))) || _.isInteger(params)) {
                const res = await this.$http.get(`/playback/${params}`)
                return res.data
            } else if (_.isObject(params) && _.size(_.keys(params))) {
                params = _.merge({
                    skip: 0,
                    take: 20,
                }, params)
                const res = await this.$http.get('/playback', {
                    params,
                })
                return res.data
            } else {
                throw new Error('invalid [memberId].')
            }
            
        } catch (e) {
            console.error(e)
        }
    }
}
import _ from 'lodash'

export default class PublicUsersAllToprank {
    constructor(_all) {
        Object.defineProperty(this, '$all', {
            value: _all,
        })
        Object.defineProperty(this, '$http', {
            value: _all.$http.extends({
                baseURL: [
                    _all.$http.defaults.baseURL,
                    'toprank',
                ].join('/'),
            }),
        })
    }
    async today() {
        try {
            const res = await this.$http.get('/today')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
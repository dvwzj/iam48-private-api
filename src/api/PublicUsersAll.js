import _ from 'lodash'
import PublicUsersAllToprank from './PublicUsersAllToprank'

export default class PublicUsersAll {
    constructor(_users) {
        Object.defineProperty(this, '$users', {
            value: _users,
        })
        Object.defineProperty(this, '$http', {
            value: _users.$http.extends({
                baseURL: [
                    _users.$http.defaults.baseURL,
                    'all',
                ].join('/'),
            }),
        })
        if (!this.toprank.today) {
            Object.defineProperty(this.toprank, 'today', {
                value: () => {
                    return new PublicUsersAllToprank(this).today()
                }
            })
        }
    }
    async toprank() {
        try {
            const res = await this.$http.get('/toprank')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
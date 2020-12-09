import PublicUsersAll from './PublicUsersAll'

export default class PublicUsers {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'users',
                ].join('/'),
            }),
        })
        this.all = new PublicUsersAll(this)
    }
}
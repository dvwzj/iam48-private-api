import UserUserCommentsContent from './UserUserCommentsContent'

export default class UserUserComments {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            value: _user.$http.extends({
                baseURL: [
                    _user.$http.defaults.baseURL,
                    'comments',
                ].join('/'),
            }),
        })
        this.content = new UserUserCommentsContent(this)
    }
}
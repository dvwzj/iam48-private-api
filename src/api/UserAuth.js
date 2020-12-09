export default class UserAuth {
    constructor(_user) {
        Object.defineProperty(this, '$user', {
            value: _user,
        })
        Object.defineProperty(this, '$http', {
            get() {
                return _user.$http.extends({
                    baseURL: [
                        _user.$http.defaults.baseURL,
                        'auth',
                    ].join('/'),
                })
            },
        })
    }
    async login(email, password) {
        try {
            const res = await this.$http.post('/email', {
                email,
                password,
            })
            if (res.data) {
                this.$user.$data = res.data
                return this.$user.user
            }
        } catch (e) {
            console.error(e)
        }
    }
    async refreshToken() {
        try {
            if (!this.$user.$data.refreshToken) {
                throw new Error('Unauthorized')
            }
            const res = await this.$http.post('/refresh', {
                refreshToken: this.$user.$data.refreshToken,
            })
            if (res.data) {
                this.$user.$data = res.data
                return this.$user.user
            }
        } catch (e) {
            console.error(e)
        }
    }
}
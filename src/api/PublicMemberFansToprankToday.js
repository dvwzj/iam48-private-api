export default class PublicMemberFansToprankToday {
    constructor(_toprank) {
        Object.defineProperty(this, '$toprank', {
            value: _toprank,
        })
        Object.defineProperty(this, '$http', {
            value: _toprank.$http,
        })
    }
    async summary(memberId) {
        try {
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            const res = await this.$http.get(`/${memberId}/fans/toprank/today/summary`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
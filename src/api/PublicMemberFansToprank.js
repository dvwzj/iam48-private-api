import PublicMemberFansToprankToday from './PublicMemberFansToprankToday'

export default class PublicMemberFansToprank {
    constructor(_fans) {
        Object.defineProperty(this, '$fans', {
            value: _fans,
        })
        Object.defineProperty(this, '$http', {
            value: _fans.$http,
        })
        this.today = new PublicMemberFansToprankToday(this)
    }
    async summary(memberId) {
        try {
            if (!memberId) {
                throw new Error('[memberId] is required.')
            }
            const res = await this.$http.get(`/${memberId}/fans/toprank/summary`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
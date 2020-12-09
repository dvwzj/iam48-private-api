import PublicMemberFansToprank from './PublicMemberFansToprank'

export default class PublicMemberFans {
    constructor(_member) {
        Object.defineProperty(this, '$member', {
            value: _member,
        })
        Object.defineProperty(this, '$http', {
            value: _member.$http,
        })
        this.toprank = new PublicMemberFansToprank(this)
    }
}
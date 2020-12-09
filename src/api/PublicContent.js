import PublicContentPurchasable from './PublicContentPurchasable'
import PublicContentMemberLive from './PublicContentMemberLive'

export default class PublicContent {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'content',
                ].join('/'),
            }),
        })
        this.purchasable = new PublicContentPurchasable(this)
        this.member = new PublicContentMemberLive(this)
    }
}
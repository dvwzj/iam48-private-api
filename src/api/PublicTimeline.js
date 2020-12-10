import _ from 'lodash'

import PublicTimelineOnly from './PublicTimelineOnly'

export default class PublicTimeline {
    constructor(_public) {
        Object.defineProperty(this, '$public', {
            value: _public,
        })
        Object.defineProperty(this, '$http', {
            value: _public.$http.extends({
                baseURL: [
                    _public.$http.defaults.baseURL,
                    'timeline',
                ].join('/'),
            }),
        })
        this.only = new PublicTimelineOnly(this)
    }
    async all(params) {
        try {
            params = _.merge({
                amount: 10,
                last_id: undefined,
            }, params)
            const res = await this.$http.get('/all', {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async getContent(post) {
        try {
            switch (post.itemType) {
                case 'recommend-media-content': {
                    const recommend = await this.$public.content.purchasable.recommend()
                    post.content = recommend
                    return post
                }
                case 'promotion-list': {
                    const campaigns = await this.$public.campaigns.all()
                    post.content = campaigns
                    return post
                }
                case 'game-list': {
                    const games = await this.$public.games()
                    post.content = games
                    return post
                }
                case 'schedule-member-live':
                case 'content-member-timeline':
                case 'content-member-live-playback':
                default: {
                    return post
                }
            }
        } catch (e) {
            console.error(e)
        }
    }
    async info(contentId) {
        try {
            const res = await this.$http.get(`/${contentId}/info/v2`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async contentMemberTimeline(contentId) {
        try {
            const res = await this.$http.get(`/content-member-timeline/${contentId}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
import moment from 'moment-timezone'
import PublicMember from './PublicMember'
import PublicMembers from './PublicMembers'
import PublicBatch from './PublicBatch'
import PublicProducts from './PublicProducts'
import PublicContent from './PublicContent'
import PublicCampaigns from './PublicCampaigns'
import PublicSchedules from './PublicSchedules'
import PublicTimeline from './PublicTimeline'
import PublicUsers from './PublicUsers'
import PublicTheater from './PublicTheater'
import PublicComment from './PublicComment'

export default class Public {
    constructor(app) {
        Object.defineProperty(this, '$app', {
            value: app,
        })
        Object.defineProperty(this, '$http', {
            value: app.$http.extends({
                baseURL: 'https://public.bnk48.io',
            }),
        })
        this.member = new PublicMember(this)
        this.members = new PublicMembers(this)
        this.batch = new PublicBatch(this)
        this.products = new PublicProducts(this)
        this.content = new PublicContent(this)
        this.campaigns = new PublicCampaigns(this)
        this.timeline = new PublicTimeline(this)
        this.users = new PublicUsers(this)
        this.comment = new PublicComment(this)
        Object.defineProperty(this.theater, 'playback', {
            value: (params) => {
                return new PublicTheater(this).playback(params)
            }
        })
        Object.defineProperty(this.schedules, 'memberLive', {
            value: (liveId) => {
                return new PublicSchedules(this).memberLive(liveId)
            }
        })
    }
    async games() {
        try {
            const res = await this.$http.get('/games', {
                params: {
                    app: this.$app.defaults.appId,
                }
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async discover() {
        try {
            const res = await this.$http.get('/discover')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async promotion() {
        try {
            const res = await this.$http.get('/promotion')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async theater() {
        try {
            const res = await this.$http.get('/theater')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async schedules() {
        try {
            const res = await this.$http.get('/schedules')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async media(params) {
        try {
            params = _.merge({
                skip: 0,
                take: 20,
            }, params)
            const res = await this.$http.get('/media', {
                params,
            })
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async events(month, year) {
        try {
            if (!month) {
                month = parseInt(moment().tz('Asia/Bangkok').format('MM'))
            }
            if (!year) {
                year = parseInt(moment().tz('Asia/Bangkok').format('YYYY'))
            }
            const res = await this.$http.get(`/events/${year}/${month}`)
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
    async ads() {
        try {
            const res = await this.$http.get('ads')
            return res.data
        } catch (e) {
            console.error(e)
        }
    }
}
import _ from 'lodash'
import { ReqFastPromise } from 'req-fast-promise'
import Public from './api/Public'
import User from './api/User'
import CoinUserbalance from './api/CoinUserbalance'

export default class iAM48 {
    constructor(defaults) {
        Object.defineProperty(this, 'defaults', {
            enumerable: true,
            writable: false,
            value: _.merge({
                environment: 'PROD',
                userAgent: 'BNK48_102/1.2.89/Dalvik/2.1.0 (Linux; U; Android 5.1.1; HUAWEI MLA-L12 Build/HUAWEIMLA-L12)',
                appId: 'BNK48_102',
                appVersion: '1.2.22',
                deviceModel: 'HUAWEI HUAWEI MLA-L12',
                deviceId: '6802689067815614',
                deviceName: 'HUAWEI MLA-L12',
            }, defaults)
        })
        Object.defineProperty(this, '$http', {
            value: new ReqFastPromise
        })
        this.public = new Public(this)
        this.user = new User(this)
        this.coin = new CoinUserbalance(this)
    }
    Singleton(email, password) {
        try {
            if (!email) {
                throw new Error('[email] is required.')
            }
            if (!password) {
                throw new Error('[password] is required.')
            }
            const iam48 = new iAM48(this.defaults)
            Object.defineProperty(iam48, 'User', {
                enumerable: true,
                writable: false,
                value: async () => {
                    if (!iam48.user.$data.id) {
                        await iam48.user.auth.login(email, password)
                    }
                    return iam48.user.user
                }
            })
            return iam48
        } catch (e) {
            console.error(e)
        }
    }
}
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
}
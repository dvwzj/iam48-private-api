"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _PublicMember = _interopRequireDefault(require("./PublicMember"));

var _PublicMembers = _interopRequireDefault(require("./PublicMembers"));

var _PublicBatch = _interopRequireDefault(require("./PublicBatch"));

var _PublicProducts = _interopRequireDefault(require("./PublicProducts"));

var _PublicContent = _interopRequireDefault(require("./PublicContent"));

var _PublicCampaigns = _interopRequireDefault(require("./PublicCampaigns"));

var _PublicSchedules = _interopRequireDefault(require("./PublicSchedules"));

var _PublicTimeline = _interopRequireDefault(require("./PublicTimeline"));

var _PublicUsers = _interopRequireDefault(require("./PublicUsers"));

var _PublicTheater = _interopRequireDefault(require("./PublicTheater"));

var _PublicComment = _interopRequireDefault(require("./PublicComment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Public {
  constructor(app) {
    Object.defineProperty(this, '$app', {
      value: app
    });
    Object.defineProperty(this, '$http', {
      value: app.$http.extends({
        baseURL: 'https://public.bnk48.io'
      })
    });
    this.member = new _PublicMember.default(this);
    this.members = new _PublicMembers.default(this);
    this.batch = new _PublicBatch.default(this);
    this.products = new _PublicProducts.default(this);
    this.content = new _PublicContent.default(this);
    this.campaigns = new _PublicCampaigns.default(this);
    this.timeline = new _PublicTimeline.default(this);
    this.users = new _PublicUsers.default(this);
    this.comment = new _PublicComment.default(this);

    if (!this.theater.playback) {
      Object.defineProperty(this.theater, 'playback', {
        value: params => {
          return new _PublicTheater.default(this).playback(params);
        }
      });
    }

    if (!this.schedules.memberLive) {
      Object.defineProperty(this.schedules, 'memberLive', {
        value: liveId => {
          return new _PublicSchedules.default(this).memberLive(liveId);
        }
      });
    }
  }

  games() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this.$http.get('/games', {
          params: {
            app: _this.$app.defaults.appId
          }
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  discover() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this2.$http.get('/discover');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  promotion() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this3.$http.get('/promotion');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  theater() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this4.$http.get('/theater');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  schedules() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this5.$http.get('/schedules/member-live');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  media(params) {
    var _this6 = this;

    return _asyncToGenerator(function* () {
      try {
        params = _.merge({
          skip: 0,
          take: 20
        }, params);
        var res = yield _this6.$http.get('/media', {
          params
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  events(month, year) {
    var _this7 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!month) {
          month = parseInt((0, _momentTimezone.default)().tz('Asia/Bangkok').format('MM'));
        }

        if (!year) {
          year = parseInt((0, _momentTimezone.default)().tz('Asia/Bangkok').format('YYYY'));
        }

        var res = yield _this7.$http.get("/events/".concat(year, "/").concat(month));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  ads() {
    var _this8 = this;

    return _asyncToGenerator(function* () {
      try {
        var res = yield _this8.$http.get('ads');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = Public;
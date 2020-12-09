"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _UserUserBadge = _interopRequireDefault(require("./UserUserBadge"));

var _UserUserLikes = _interopRequireDefault(require("./UserUserLikes"));

var _UserUserFollows = _interopRequireDefault(require("./UserUserFollows"));

var _UserUserNotification = _interopRequireDefault(require("./UserUserNotification"));

var _UserUserPushNotification = _interopRequireDefault(require("./UserUserPushNotification"));

var _UserUserRewardPoints = _interopRequireDefault(require("./UserUserRewardPoints"));

var _UserUserContent = _interopRequireDefault(require("./UserUserContent"));

var _UserUserComments = _interopRequireDefault(require("./UserUserComments"));

var _UserUserWatch = _interopRequireDefault(require("./UserUserWatch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class UserUser {
  constructor(_user) {
    Object.defineProperty(this, '$user', {
      value: _user
    });
    Object.defineProperty(this, '$http', {
      get() {
        return _user.$http.extends({
          baseURL: [_user.$http.defaults.baseURL, 'user', this.$user.$data.id].join('/')
        });
      }

    });
    Object.defineProperty(this.notification, 'sound', {
      value: () => {
        return new _UserUserNotification.default(this).sound();
      }
    });
    this.badge = new _UserUserBadge.default(this);
    this.likes = new _UserUserLikes.default(this);
    this.follows = new _UserUserFollows.default(this);
    this.push = new _UserUserPushNotification.default(this);
    this.reward = new _UserUserRewardPoints.default(this);
    this.content = new _UserUserContent.default(this);
    this.comments = new _UserUserComments.default(this);
    this.watch = new _UserUserWatch.default(this);
  }

  profile() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this.$user.$data.id) {
          throw new Error('Unauthorized');
        }

        var res = yield _this.$http.get('/profile');
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  device() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this2.$user.$data.id) {
          throw new Error('Unauthorized');
        }

        var res = yield _this2.$http.post('/device', {
          deviceModel: _this2.$user.$app.defaults.deviceModel,
          deviceName: _this2.$user.$app.defaults.deviceName
        });
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

  notification(params) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this3.$user.$data.id) {
          throw new Error('Unauthorized');
        }

        params = _lodash.default.merge({
          skip: 0,
          take: 1
        }, params);
        var res = yield _this3.$http.get('/notification', {
          params
        });
        return res.data;
      } catch (e) {
        console.log(e);
      }
    })();
  }

  oshiMember() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this4.$user.$data.id) {
          throw new Error('Unauthorized');
        }

        var res = yield _this4.$http.get('/oshi-member');
        return res.data;
      } catch (e) {
        console.log(e);
      }
    })();
  }

  memberLive(contentId) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      try {
        if (!_this5.$user.$data.id) {
          throw new Error('Unauthorized');
        }

        if (!contentId) {
          throw new Error('[contentId] is required.');
        }

        var res = yield _this5.$http.post("/member-live/".concat(contentId));
        return res.data;
      } catch (e) {
        console.error(e);
      }
    })();
  }

}

exports.default = UserUser;
"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 649);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),

/***/ 198:
/*!**********************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-section/uni-section.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=fa53215e&scoped=true& */ 199);
/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 201);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=fa53215e&scoped=true&lang=css& */ 203).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=fa53215e&scoped=true&lang=css& */ 203).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fa53215e",
  "e640de42",
  false,
  _uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "jellyClassTable/components/uni-section/uni-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 199:
/*!*****************************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=template&id=fa53215e&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=template&id=fa53215e&scoped=true& */ 200);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_fa53215e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 2:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),

/***/ 20:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 200:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=template&id=fa53215e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-section"] },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 201:
/*!***********************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 202);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 202:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Section 标题栏
 * @description 标题栏
 * @property {String} type = [line|circle] 标题装饰类型
 * 	@value line 竖线
 * 	@value circle 圆形
 * @property {String} title 主标题
 * @property {String} subTitle 副标题
 */var _default =

{
  name: 'UniTitle',
  props: {
    type: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '' },

    subTitle: {
      type: String,
      default: '' } },


  data: function data() {
    return {};
  },
  watch: {
    title: function title(newVal) {
      if (uni.report && newVal !== '') {
        uni.report('title', newVal);
      }
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 203:
/*!*******************************************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=style&index=0&id=fa53215e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=fa53215e&scoped=true&lang=css& */ 204);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_fa53215e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-section/uni-section.vue?vue&type=style&index=0&id=fa53215e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "position": "relative",
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "0.5",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 3:
/*!***********************************************************!*\
  !*** C:/proj/jellyClassTable/pages.json?{"type":"style"} ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 34:
/*!******************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-badge.vue?vue&type=template&id=c4f7b5e6&scoped=true& */ 35);
/* harmony import */ var _uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-badge.vue?vue&type=script&lang=js& */ 37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-badge.vue?vue&type=style&index=0&id=c4f7b5e6&scoped=true&lang=css& */ 39).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-badge.vue?vue&type=style&index=0&id=c4f7b5e6&scoped=true&lang=css& */ 39).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c4f7b5e6",
  "494a9cdb",
  false,
  _uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "jellyClassTable/components/uni-badge/uni-badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/*!*************************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=template&id=c4f7b5e6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-badge.vue?vue&type=template&id=c4f7b5e6&scoped=true& */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_template_id_c4f7b5e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 36:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=template&id=c4f7b5e6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.text
    ? _c(
        "u-text",
        {
          staticClass: ["uni-badge"],
          class: _vm.inverted
            ? "uni-badge--" +
              _vm.type +
              " uni-badge--" +
              _vm.size +
              " uni-badge--" +
              _vm.type +
              "-inverted"
            : "uni-badge--" + _vm.type + " uni-badge--" + _vm.size,
          style: _vm.badgeStyle,
          on: {
            click: function($event) {
              _vm.onClick()
            }
          }
        },
        [_vm._v(_vm._s(_vm.text))]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 37:
/*!*******************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-badge.vue?vue&type=script&lang=js& */ 38);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//

/**
 * Badge 数字角标
 * @description 数字角标一般和其它控件（列表、9宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
 * @tutorial https://ext.dcloud.net.cn/plugin?id=21
 * @property {String} text 角标内容
 * @property {String} type = [default|primary|success|warning|error] 颜色类型
 * 	@value default 灰色
 * 	@value primary 蓝色
 * 	@value success 绿色
 * 	@value warning 黄色
 * 	@value error 红色
 * @property {String} size = [normal|small] Badge 大小
 * 	@value normal 一般尺寸
 * 	@value small 小尺寸
 * @property {String} inverted = [true|false] 是否无需背景颜色
 * @event {Function} click 点击 Badge 触发事件
 * @example <uni-badge text="1"></uni-badge>
 */var _default =
{
  name: 'UniBadge',
  props: {
    type: {
      type: String,
      default: 'default' },

    inverted: {
      type: Boolean,
      default: false },

    text: {
      type: [String, Number],
      default: '' },

    size: {
      type: String,
      default: 'normal' } },


  data: function data() {
    return {
      badgeStyle: '' };

  },
  watch: {
    text: function text() {
      this.setStyle();
    } },

  mounted: function mounted() {
    this.setStyle();
  },
  methods: {
    setStyle: function setStyle() {
      this.badgeStyle = "width: ".concat(String(this.text).length * 8 + 12, "px");
    },
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 39:
/*!***************************************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=style&index=0&id=c4f7b5e6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-badge.vue?vue&type=style&index=0&id=c4f7b5e6&scoped=true&lang=css& */ 40);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_badge_vue_vue_type_style_index_0_id_c4f7b5e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 4:
/*!**********************************************************!*\
  !*** C:/proj/jellyClassTable/pages.json?{"type":"stat"} ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B564C4D"});

/***/ }),

/***/ 40:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/components/uni-badge/uni-badge.vue?vue&type=style&index=0&id=c4f7b5e6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-badge": {
    "justifyContent": "center",
    "flexDirection": "row",
    "height": "20",
    "lineHeight": "20",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "textAlign": "center",
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "paddingTop": "0",
    "paddingRight": "6",
    "paddingBottom": "0",
    "paddingLeft": "6"
  },
  "uni-badge--inverted": {
    "paddingTop": 0,
    "paddingRight": "5",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "color": "#f1f1f1"
  },
  "uni-badge--default": {
    "color": "#333333",
    "backgroundColor": "#f1f1f1"
  },
  "uni-badge--default-inverted": {
    "color": "#999999",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-badge--primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge--primary-inverted": {
    "color": "#007aff",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-badge--success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge--success-inverted": {
    "color": "#4cd964",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-badge--warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge--warning-inverted": {
    "color": "#f0ad4e",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-badge--error": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge--error-inverted": {
    "color": "#dd524d",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "uni-badge--small": {
    "transform": "scale(0.8)",
    "transformOrigin": "center center"
  }
}

/***/ }),

/***/ 5:
/*!***********************************************************!*\
  !*** C:/proj/jellyClassTable/main.js?{"type":"appStyle"} ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 6:
/*!************************************************************************!*\
  !*** C:/proj/jellyClassTable/App.vue?vue&type=style&index=0&lang=scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 7);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 649:
/*!********************************************************************************!*\
  !*** C:/proj/jellyClassTable/main.js?{"page":"pages%2FextUI%2Fbadge%2Fbadge"} ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_extUI_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extUI/badge/badge.nvue?mpType=page */ 650);

        
        
        
        _pages_extUI_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_extUI_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/extUI/badge/badge'
        _pages_extUI_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_extUI_badge_badge_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 650:
/*!************************************************************************!*\
  !*** C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?mpType=page ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.nvue?vue&type=template&id=7b1e95f5&mpType=page */ 651);
/* harmony import */ var _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.nvue?vue&type=script&lang=js&mpType=page */ 653);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 20);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./badge.nvue?vue&type=style&index=0&lang=css&mpType=page */ 655).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./badge.nvue?vue&type=style&index=0&lang=css&mpType=page */ 655).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "45791cb8",
  false,
  _badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "jellyClassTable/pages/extUI/badge/badge.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 651:
/*!******************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=template&id=7b1e95f5&mpType=page ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=template&id=7b1e95f5&mpType=page */ 652);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_template_id_7b1e95f5_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 652:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=template&id=7b1e95f5&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c("u-text", { staticClass: ["example-info"] }, [
            _vm._v(
              "数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等"
            )
          ]),
          _c("uni-section", { attrs: { title: "有底色", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "1" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "2", type: "primary" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "34", type: "success" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "45", type: "warning" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "123", type: "error" }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "无底色", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { inverted: true, text: "1" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { inverted: true, text: "2", type: "primary" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { inverted: true, text: "34", type: "success" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { inverted: true, text: "45", type: "warning" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { inverted: true, text: "123", type: "error" }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "迷你", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "1", size: "small" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "2", type: "primary", size: "small" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "34", type: "success", size: "small" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "45", type: "warning", size: "small" }
              }),
              _c("uni-badge", {
                staticClass: ["uni-badge-left-margin"],
                attrs: { text: "123", type: "error", size: "small" }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 653:
/*!************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=script&lang=js&mpType=page */ 654);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 654:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _uniBadge = _interopRequireDefault(__webpack_require__(/*! @/components/uni-badge/uni-badge.vue */ 34));
var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 198));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { uniBadge: _uniBadge.default, uniSection: _uniSection.default }, data: function data() {return {};} };exports.default = _default;

/***/ }),

/***/ 655:
/*!********************************************************************************************************!*\
  !*** C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./badge.nvue?vue&type=style&index=0&lang=css&mpType=page */ 656);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_badge_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 656:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/pages/extUI/badge/badge.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "15",
    "paddingBottom": 0,
    "paddingLeft": "15"
  },
  "example-info": {
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "14",
    "lineHeight": "20"
  },
  "example-info-text": {
    "fontSize": "14",
    "lineHeight": "20",
    "color": "#3b4144"
  },
  "example-body": {
    "flexDirection": "row",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "backgroundColor": "#ffffff",
    "justifyContent": "flex-start"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  },
  "uni-badge-left-margin": {
    "marginLeft": "20rpx"
  }
}

/***/ }),

/***/ 7:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/lib/loader.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/proj/jellyClassTable/App.vue?vue&type=style&index=0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "yticon",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url(\"https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf\") format(\"truetype\")"
    }
  ],
  "yticon": {
    "fontFamily": "\"yticon\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT84MjgyIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT9hNDc3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT9lNTg4Iiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT83YmMxIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/M2RkNSIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/MDVhOSIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvcGFnZXMuanNvbj9kZTczIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2UudnVlP2U3NmYiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL2NvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZS52dWU/MWY1NCIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvY29tcG9uZW50cy91bmktYmFkZ2UvdW5pLWJhZGdlLnZ1ZT9mYjcyIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2UudnVlPzk0YjEiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZS52dWUiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL2NvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZS52dWU/ODU2ZCIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvcGFnZXMuanNvbj81ZTVhIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9jb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2UudnVlP2ZlNmIiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL21haW4uanM/NWFhOCIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvQXBwLnZ1ZT9iMGRhIiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9tYWluLmpzP2Q5NDUiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL3BhZ2VzL2V4dFVJL2JhZGdlL2JhZGdlLm52dWU/ZTFiOCIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvcGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UubnZ1ZT85MmE0Iiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9wYWdlcy9leHRVSS9iYWRnZS9iYWRnZS5udnVlPzI0NmUiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL3BhZ2VzL2V4dFVJL2JhZGdlL2JhZGdlLm52dWU/ZDAxOSIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UubnZ1ZSIsIndlYnBhY2s6Ly8vQzovcHJvai9qZWxseUNsYXNzVGFibGUvcGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UubnZ1ZT8wYTA2Iiwid2VicGFjazovLy9DOi9wcm9qL2plbGx5Q2xhc3NUYWJsZS9wYWdlcy9leHRVSS9iYWRnZS9iYWRnZS5udnVlPzhiZTgiLCJ3ZWJwYWNrOi8vL0M6L3Byb2ovamVsbHlDbGFzc1RhYmxlL0FwcC52dWU/ZDFlZiJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNjQ5KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTUzMjE1ZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmE1MzIxNWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZhNTMyMTVlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZhNTMyMTVlXCIsXG4gIFwiZTY0MGRlNDJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiamVsbHlDbGFzc1RhYmxlL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTUzMjE1ZSZzY29wZWQ9dHJ1ZSZcIiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fSlcbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25cIl0gfSxcbiAgICBbXG4gICAgICBfdm0udHlwZVxuICAgICAgICA/IF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9faGVhZFwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInZpZXdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2hlYWQtdGFnXCJdLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnR5cGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwidmlld1wiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudFwiXSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCJdLFxuICAgICAgICAgICAgY2xhc3M6IHsgZGlzdHJhY3Rpb246ICFfdm0uc3ViVGl0bGUgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldXG4gICAgICAgICksXG4gICAgICAgIF92bS5zdWJUaXRsZVxuICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCJdIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3ViVGl0bGUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvblwiPlxyXG5cdFx0PHZpZXcgdi1pZj1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50XCI+XHJcblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnZGlzdHJhY3Rpb24nOiFzdWJUaXRsZX1cIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI+e3sgdGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCI+e3sgc3ViVGl0bGUgfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c2xvdCAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogU2VjdGlvbiDmoIfpopjmoI9cclxuXHQgKiBAZGVzY3JpcHRpb24g5qCH6aKY5qCPXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHR5cGUgPSBbbGluZXxjaXJjbGVdIOagh+mimOijhemlsOexu+Wei1xyXG5cdCAqIFx0QHZhbHVlIGxpbmUg56uW57q/XHJcblx0ICogXHRAdmFsdWUgY2lyY2xlIOWchuW9olxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0aXRsZSDkuLvmoIfpophcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gc3ViVGl0bGUg5Ymv5qCH6aKYXHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlUaXRsZScsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge31cclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHR0aXRsZShuZXdWYWwpIHtcclxuXHRcdFx0XHRpZiAodW5pLnJlcG9ydCAmJiBuZXdWYWwgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR1bmkucmVwb3J0KCd0aXRsZScsIG5ld1ZhbClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLXNlY3Rpb24ge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMCAxMHB4O1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0fVxyXG5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0LnVuaS1zZWN0aW9uOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGhlaWdodDogMXB4O1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LnVuaS1zZWN0aW9uX19oZWFkIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubGluZSB7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjMGMwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0d2lkdGg6IDNweDtcclxuXHR9XHJcblxyXG5cdC5jaXJjbGUge1xyXG5cdFx0d2lkdGg6IDhweDtcclxuXHRcdGhlaWdodDogOHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LmRpc3RyYWN0aW9uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXN1YiB7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmE1MzIxNWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmE1MzIxNWUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktc2VjdGlvblwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMC41XCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwibm9ybWFsXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9faGVhZFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMFwiXG4gIH0sXG4gIFwibGluZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNVwiLFxuICAgIFwid2lkdGhcIjogXCIzXCJcbiAgfSxcbiAgXCJjaXJjbGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2MwYzBjMFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnRcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC10aXRsZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImRpc3RyYWN0aW9uXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50LXN1YlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktYmFkZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM0ZjdiNWU2JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1iYWRnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jNGY3YjVlNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWJhZGdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWM0ZjdiNWU2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM0ZjdiNWU2XCIsXG4gIFwiNDk0YTljZGJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiamVsbHlDbGFzc1RhYmxlL2NvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWJhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNGY3YjVlNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS50ZXh0XG4gICAgPyBfYyhcbiAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2VcIl0sXG4gICAgICAgICAgY2xhc3M6IF92bS5pbnZlcnRlZFxuICAgICAgICAgICAgPyBcInVuaS1iYWRnZS0tXCIgK1xuICAgICAgICAgICAgICBfdm0udHlwZSArXG4gICAgICAgICAgICAgIFwiIHVuaS1iYWRnZS0tXCIgK1xuICAgICAgICAgICAgICBfdm0uc2l6ZSArXG4gICAgICAgICAgICAgIFwiIHVuaS1iYWRnZS0tXCIgK1xuICAgICAgICAgICAgICBfdm0udHlwZSArXG4gICAgICAgICAgICAgIFwiLWludmVydGVkXCJcbiAgICAgICAgICAgIDogXCJ1bmktYmFkZ2UtLVwiICsgX3ZtLnR5cGUgKyBcIiB1bmktYmFkZ2UtLVwiICsgX3ZtLnNpemUsXG4gICAgICAgICAgc3R5bGU6IF92bS5iYWRnZVN0eWxlLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5vbkNsaWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50ZXh0KSldXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktYmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dGV4dCB2LWlmPVwidGV4dFwiIDpjbGFzcz1cImludmVydGVkID8gJ3VuaS1iYWRnZS0tJyArIHR5cGUgKyAnIHVuaS1iYWRnZS0tJyArIHNpemUgKyAnIHVuaS1iYWRnZS0tJyArIHR5cGUgKyAnLWludmVydGVkJyA6ICd1bmktYmFkZ2UtLScgKyB0eXBlICsgJyB1bmktYmFkZ2UtLScgKyBzaXplXCIgOnN0eWxlPVwiYmFkZ2VTdHlsZVwiIGNsYXNzPVwidW5pLWJhZGdlXCIgQGNsaWNrPVwib25DbGljaygpXCI+e3sgdGV4dCB9fTwvdGV4dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LyoqXHJcblx0ICogQmFkZ2Ug5pWw5a2X6KeS5qCHXHJcblx0ICogQGRlc2NyaXB0aW9uIOaVsOWtl+inkuagh+S4gOiIrOWSjOWFtuWug+aOp+S7tu+8iOWIl+ihqOOAgTnlrqvmoLznrYnvvInphY3lkIjkvb/nlKjvvIznlKjkuo7ov5vooYzmlbDph4/mj5DnpLrvvIzpu5jorqTkuLrlrp7lv4PngbDoibLog4zmma9cclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MjFcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdGV4dCDop5LmoIflhoXlrrlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSA9IFtkZWZhdWx0fHByaW1hcnl8c3VjY2Vzc3x3YXJuaW5nfGVycm9yXSDpopzoibLnsbvlnotcclxuXHQgKiBcdEB2YWx1ZSBkZWZhdWx0IOeBsOiJslxyXG5cdCAqIFx0QHZhbHVlIHByaW1hcnkg6JOd6ImyXHJcblx0ICogXHRAdmFsdWUgc3VjY2VzcyDnu7/oibJcclxuXHQgKiBcdEB2YWx1ZSB3YXJuaW5nIOm7hOiJslxyXG5cdCAqIFx0QHZhbHVlIGVycm9yIOe6ouiJslxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBzaXplID0gW25vcm1hbHxzbWFsbF0gQmFkZ2Ug5aSn5bCPXHJcblx0ICogXHRAdmFsdWUgbm9ybWFsIOS4gOiIrOWwuuWvuFxyXG5cdCAqIFx0QHZhbHVlIHNtYWxsIOWwj+WwuuWvuFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpbnZlcnRlZCA9IFt0cnVlfGZhbHNlXSDmmK/lkKbml6DpnIDog4zmma/popzoibJcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7sgQmFkZ2Ug6Kem5Y+R5LqL5Lu2XHJcblx0ICogQGV4YW1wbGUgPHVuaS1iYWRnZSB0ZXh0PVwiMVwiPjwvdW5pLWJhZGdlPlxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlCYWRnZScsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdkZWZhdWx0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbnZlcnRlZDoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c2l6ZToge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnbm9ybWFsJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRiYWRnZVN0eWxlOiAnJ1xyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHRleHQoKSB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdHlsZSgpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnNldFN0eWxlKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNldFN0eWxlKCkge1xyXG5cdFx0XHRcdHRoaXMuYmFkZ2VTdHlsZSA9IGB3aWR0aDogJHtTdHJpbmcodGhpcy50ZXh0KS5sZW5ndGggKiA4ICsgMTJ9cHhgXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLWJhZGdlIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nOiAwcHggNnB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1iYWRnZS0taW52ZXJ0ZWQge1xyXG5cdFx0cGFkZGluZzogMCA1cHggMCAwO1xyXG5cdFx0Y29sb3I6ICNmMWYxZjE7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS1kZWZhdWx0IHtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHR9XHJcblxyXG5cdC51bmktYmFkZ2UtLWRlZmF1bHQtaW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblxyXG5cdC51bmktYmFkZ2UtLXByaW1hcnkge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO1xyXG5cdH1cclxuXHJcblx0LnVuaS1iYWRnZS0tcHJpbWFyeS1pbnZlcnRlZCB7XHJcblx0XHRjb2xvcjogIzAwN2FmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuXHJcblx0LnVuaS1iYWRnZS0tc3VjY2VzcyB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2Q5NjQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS1zdWNjZXNzLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAjNGNkOTY0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS13YXJuaW5nIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcclxuXHR9XHJcblxyXG5cdC51bmktYmFkZ2UtLXdhcm5pbmctaW52ZXJ0ZWQge1xyXG5cdFx0Y29sb3I6ICNmMGFkNGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblxyXG5cdC51bmktYmFkZ2UtLWVycm9yIHtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2RkNTI0ZDtcclxuXHR9XHJcblxyXG5cdC51bmktYmFkZ2UtLWVycm9yLWludmVydGVkIHtcclxuXHRcdGNvbG9yOiAjZGQ1MjRkO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0fVxyXG5cclxuXHQudW5pLWJhZGdlLS1zbWFsbCB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcblx0XHR0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1iYWRnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jNGY3YjVlNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktYmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzRmN2I1ZTYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiX19VTklfX0I1NjRDNERcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktYmFkZ2VcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiBcIjIwXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiMjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRGYW1pbHlcIjogXCInSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTJcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI2XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI2XCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtLWludmVydGVkXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJjb2xvclwiOiBcIiNmMWYxZjFcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tZGVmYXVsdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMWYxZjFcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tZGVmYXVsdC1pbnZlcnRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdhZmZcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tcHJpbWFyeS1pbnZlcnRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDdhZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM0Y2Q5NjRcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tc3VjY2Vzcy1pbnZlcnRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0Y2Q5NjRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcInVuaS1iYWRnZS0td2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMGFkNGVcIlxuICB9LFxuICBcInVuaS1iYWRnZS0td2FybmluZy1pbnZlcnRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmMGFkNGVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcInVuaS1iYWRnZS0tZXJyb3JcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGQ1MjRkXCJcbiAgfSxcbiAgXCJ1bmktYmFkZ2UtLWVycm9yLWludmVydGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RkNTI0ZFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLS1zbWFsbFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwLjgpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogXCJjZW50ZXIgY2VudGVyXCJcbiAgfVxufSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2Nzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2Nzc1wiIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZXh0VUkvYmFkZ2UvYmFkZ2UnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYmFkZ2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjFlOTVmNSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9iYWRnZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9iYWRnZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDU3OTFjYjhcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiamVsbHlDbGFzc1RhYmxlL3BhZ2VzL2V4dFVJL2JhZGdlL2JhZGdlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFkZ2UubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjFlOTVmNSZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInBhZ2VcIl0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtaW5mb1wiXSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwi5pWw5a2X6KeS5qCH6YCa55So5p2l5qCH6K6w6YeN54K55L+h5oGv5L2/55So77yM5aaC5o6l5Y+X5Yiw5paw5raI5oGv44CB5pyJ5pyq6K+75raI5oGv562JXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5pyJ5bqV6ImyXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVuaS1iYWRnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjFcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1iYWRnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjJcIiwgdHlwZTogXCJwcmltYXJ5XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIzNFwiLCB0eXBlOiBcInN1Y2Nlc3NcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1iYWRnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjQ1XCIsIHR5cGU6IFwid2FybmluZ1wiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLWJhZGdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWJhZGdlLWxlZnQtbWFyZ2luXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiMTIzXCIsIHR5cGU6IFwiZXJyb3JcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuaXoOW6leiJslwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaW52ZXJ0ZWQ6IHRydWUsIHRleHQ6IFwiMVwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLWJhZGdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWJhZGdlLWxlZnQtbWFyZ2luXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGludmVydGVkOiB0cnVlLCB0ZXh0OiBcIjJcIiwgdHlwZTogXCJwcmltYXJ5XCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaW52ZXJ0ZWQ6IHRydWUsIHRleHQ6IFwiMzRcIiwgdHlwZTogXCJzdWNjZXNzXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaW52ZXJ0ZWQ6IHRydWUsIHRleHQ6IFwiNDVcIiwgdHlwZTogXCJ3YXJuaW5nXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaW52ZXJ0ZWQ6IHRydWUsIHRleHQ6IFwiMTIzXCIsIHR5cGU6IFwiZXJyb3JcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIui/t+S9oFwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCIxXCIsIHNpemU6IFwic21hbGxcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1iYWRnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjJcIiwgdHlwZTogXCJwcmltYXJ5XCIsIHNpemU6IFwic21hbGxcIiB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1iYWRnZVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIjM0XCIsIHR5cGU6IFwic3VjY2Vzc1wiLCBzaXplOiBcInNtYWxsXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktYmFkZ2VcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCI0NVwiLCB0eXBlOiBcIndhcm5pbmdcIiwgc2l6ZTogXCJzbWFsbFwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLWJhZGdlXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWJhZGdlLWxlZnQtbWFyZ2luXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiMTIzXCIsIHR5cGU6IFwiZXJyb3JcIiwgc2l6ZTogXCJzbWFsbFwiIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JhZGdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JhZGdlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cclxuXHRcdDx0ZXh0IGNsYXNzPVwiZXhhbXBsZS1pbmZvXCI+5pWw5a2X6KeS5qCH6YCa55So5p2l5qCH6K6w6YeN54K55L+h5oGv5L2/55So77yM5aaC5o6l5Y+X5Yiw5paw5raI5oGv44CB5pyJ5pyq6K+75raI5oGv562JPC90ZXh0PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5pyJ5bqV6ImyXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIHRleHQ9XCIxXCIgLz5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIHRleHQ9XCIyXCIgdHlwZT1cInByaW1hcnlcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjM0XCIgdHlwZT1cInN1Y2Nlc3NcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjQ1XCIgdHlwZT1cIndhcm5pbmdcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjEyM1wiIHR5cGU9XCJlcnJvclwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLml6DlupXoibJcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgOmludmVydGVkPVwidHJ1ZVwiIHRleHQ9XCIxXCIgLz5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIDppbnZlcnRlZD1cInRydWVcIiB0ZXh0PVwiMlwiIHR5cGU9XCJwcmltYXJ5XCIgLz5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIDppbnZlcnRlZD1cInRydWVcIiB0ZXh0PVwiMzRcIiB0eXBlPVwic3VjY2Vzc1wiIC8+XHJcblx0XHRcdDx1bmktYmFkZ2UgY2xhc3M9XCJ1bmktYmFkZ2UtbGVmdC1tYXJnaW5cIiA6aW52ZXJ0ZWQ9XCJ0cnVlXCIgdGV4dD1cIjQ1XCIgdHlwZT1cIndhcm5pbmdcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgOmludmVydGVkPVwidHJ1ZVwiIHRleHQ9XCIxMjNcIiB0eXBlPVwiZXJyb3JcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi6L+35L2gXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIHRleHQ9XCIxXCIgc2l6ZT1cInNtYWxsXCIgLz5cclxuXHRcdFx0PHVuaS1iYWRnZSBjbGFzcz1cInVuaS1iYWRnZS1sZWZ0LW1hcmdpblwiIHRleHQ9XCIyXCIgdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjM0XCIgdHlwZT1cInN1Y2Nlc3NcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjQ1XCIgdHlwZT1cIndhcm5pbmdcIiBzaXplPVwic21hbGxcIiAvPlxyXG5cdFx0XHQ8dW5pLWJhZGdlIGNsYXNzPVwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCIgdGV4dD1cIjEyM1wiIHR5cGU9XCJlcnJvclwiIHNpemU9XCJzbWFsbFwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdW5pQmFkZ2UgZnJvbSAnQC9jb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2UudnVlJztcclxuXHRpbXBvcnQgdW5pU2VjdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pQmFkZ2UsXHJcblx0XHRcdHVuaVNlY3Rpb25cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge307XHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0Lyog5aS05p2h5bCP56iL5bqP57uE5Lu25YaF5LiN6IO95byV5YWl5a2X5L2TICovXHJcblx0LyogI2lmZGVmIE1QLVRPVVRJQU8gKi9cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcclxuXHRcdGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcblx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRzcmM6IHVybCgnfkAvc3RhdGljL3VuaS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcblx0fVxyXG5cclxuXHQvKiAjZW5kaWYgKi9cclxuXHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdHBhZ2Uge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZmNDtcclxuXHRcdG1pbi1oZWlnaHQ6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVxyXG5cclxuXHR2aWV3IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4IDE1cHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvIHtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mbyB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUtaW5mby10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0Y29sb3I6ICMzYjQxNDQ7XHJcblx0fVxyXG5cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4td2hpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdG1hcmdpbjogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4tLWhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2EyZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LyogI2lmZGVmIE1QLUFMSVBBWSAqL1xyXG5cdC51bmktYmFkZ2Uge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdH1cclxuXHJcblx0LnVuaS1iYWRnZS1sZWZ0LW1hcmdpbiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBycHg7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFkZ2UubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJleGFtcGxlXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCJcbiAgfSxcbiAgXCJleGFtcGxlLWluZm9cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNVwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzYjQxNDRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIyMFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1pbmZvLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzYjQxNDRcIlxuICB9LFxuICBcImV4YW1wbGUtYm9keVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjE1XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwid29yZC1idG4td2hpdGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0blwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi0taG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjYTJmZlwiXG4gIH0sXG4gIFwidW5pLWJhZGdlLWxlZnQtbWFyZ2luXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJARk9OVC1GQUNFXCI6IFtcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJ5dGljb25cIixcbiAgICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgICAgXCJmb250U3R5bGVcIjogXCJub3JtYWxcIixcbiAgICAgIFwic3JjXCI6IFwidXJsKFxcXCJodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzEwNzg2MDRfdzRrcHhoMHJhZmkudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpXCJcbiAgICB9XG4gIF0sXG4gIFwieXRpY29uXCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJcXFwieXRpY29uXFxcIlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIxNlwiLFxuICAgIFwiZm9udFN0eWxlXCI6IFwibm9ybWFsXCIsXG4gICAgXCJXZWJraXRGb250U21vb3RoaW5nXCI6IFwiYW50aWFsaWFzZWRcIixcbiAgICBcIk1vek9zeEZvbnRTbW9vdGhpbmdcIjogXCJncmF5c2NhbGVcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
exports["ccdaview"] =
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
/******/ 		(function (module) {
/******/ 		  if (module.exports
/******/ 		    && !module.exports.__esModule
/******/ 		    && module.exports.default === undefined
/******/ 		  ) {
/******/ 		    if (module.exports.headers
/******/ 		      && module.exports.headers.common
/******/ 		      && module.exports.headers.common.Accept
/******/ 		      && module.exports.adapter
/******/ 		      && module.exports.transformRequest
/******/ 		      && module.exports.transformResponse
/******/ 		    ) {
/******/ 		      return;
/******/ 		    }
/******/ 		    module.exports.default = module.exports;
/******/ 		  }
/******/ 		})(module);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("riot");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(8));
__export(__webpack_require__(25));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.eot");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(1);
lodash_1.default.mixin({
    move: function (array, fromIndex, toIndex) {
        array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
        return array;
    }
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash = __webpack_require__(1);
function updateSortOrder(sections) {
    lodash.each(sections, (v, k) => {
        v.sort = k;
    });
    return sections;
}
exports.updateSortOrder = updateSortOrder;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash = __webpack_require__(1);
const jquery_1 = __webpack_require__(7);
function getElementIndex(node) {
    let children = lodash.filter([].slice.call(node.parentNode.childNodes), { nodeType: 1 });
    return Array.prototype.indexOf.call(children, node);
}
exports.getElementIndex = getElementIndex;
function bootstrapize(html) {
    let $html = jquery_1.default('<div />');
    $html.html(html);
    let $all = $html.find('*').removeAttr('width border xmlns');
    $all.filter('table')
        .addClass('table table-bordered table-striped');
    return $html.html();
}
exports.bootstrapize = bootstrapize;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __webpack_require__(21);
const lodash_1 = __webpack_require__(1);
class PreferencesService {
    save(opts) {
        let enabled = lodash_1.default.filter(opts.sections, (item) => {
            return item.enabled;
        });
        let sortOrder = lodash_1.default.map(opts.sections, (item) => {
            return item.key;
        });
        let pref = this.getPreferences(opts.pref.id);
        pref.enabledSectionKeys = lodash_1.default.map(enabled, (item) => {
            return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;
        let storageId = 'doc_' + opts.pref.id;
        localStorage.setItem(storageId, JSON.stringify(pref));
    }
    getPreferences(docId) {
        let storageId = 'doc_' + docId, prefString = localStorage.getItem(storageId), pref = JSON.parse(prefString), isSet = pref !== null;
        if (!isSet) {
            pref = {
                id: docId,
                isSet: isSet,
                enabledSectionKeys: null,
                sortedSectionKeys: null
            };
        }
        return new models_1.Preferences(pref);
    }
}
exports.PreferencesService = PreferencesService;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
__webpack_require__(17);
__webpack_require__(53);
const riot_1 = __webpack_require__(0);
const services_1 = __webpack_require__(2);
class App {
    constructor(options, errorHandler) {
        this.service = new services_1.DocumentsService();
        let docs = options.docs;
        this.service.fetch(docs[0].Url)
            .subscribe((options) => {
            options.documents = docs;
            riot_1.default.mount('sialia', options);
        }, errorHandler);
    }
}
exports.App = App;
window['Sialia'] = App;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700);", ""]);

// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.eot?v=4.7.0\");\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/fonts//fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333em;\n  line-height: 0.75em;\n  vertical-align: -15%; }\n.fa-2x {\n  font-size: 2em; }\n.fa-3x {\n  font-size: 3em; }\n.fa-4x {\n  font-size: 4em; }\n.fa-5x {\n  font-size: 5em; }\n.fa-fw {\n  width: 1.28571em;\n  text-align: center; }\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14286em;\n  list-style-type: none; }\n.fa-ul > li {\n    position: relative; }\n.fa-li {\n  position: absolute;\n  left: -2.14286em;\n  width: 2.14286em;\n  top: 0.14286em;\n  text-align: center; }\n.fa-li.fa-lg {\n    left: -1.85714em; }\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eee;\n  border-radius: .1em; }\n.fa-pull-left {\n  float: left; }\n.fa-pull-right {\n  float: right; }\n.fa.fa-pull-left {\n  margin-right: .3em; }\n.fa.fa-pull-right {\n  margin-left: .3em; }\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right; }\n.pull-left {\n  float: left; }\n.fa.pull-left {\n  margin-right: .3em; }\n.fa.pull-right {\n  margin-left: .3em; }\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear; }\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8); }\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1); }\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n  transform: scale(1, -1); }\n:root .fa-rotate-90, :root .fa-rotate-180, :root .fa-rotate-270, :root .fa-flip-horizontal, :root .fa-flip-vertical {\n  -webkit-filter: none;\n          filter: none; }\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle; }\n.fa-stack-1x, .fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center; }\n.fa-stack-1x {\n  line-height: inherit; }\n.fa-stack-2x {\n  font-size: 2em; }\n.fa-inverse {\n  color: #fff; }\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\"; }\n.fa-music:before {\n  content: \"\\F001\"; }\n.fa-search:before {\n  content: \"\\F002\"; }\n.fa-envelope-o:before {\n  content: \"\\F003\"; }\n.fa-heart:before {\n  content: \"\\F004\"; }\n.fa-star:before {\n  content: \"\\F005\"; }\n.fa-star-o:before {\n  content: \"\\F006\"; }\n.fa-user:before {\n  content: \"\\F007\"; }\n.fa-film:before {\n  content: \"\\F008\"; }\n.fa-th-large:before {\n  content: \"\\F009\"; }\n.fa-th:before {\n  content: \"\\F00A\"; }\n.fa-th-list:before {\n  content: \"\\F00B\"; }\n.fa-check:before {\n  content: \"\\F00C\"; }\n.fa-remove:before, .fa-close:before, .fa-times:before {\n  content: \"\\F00D\"; }\n.fa-search-plus:before {\n  content: \"\\F00E\"; }\n.fa-search-minus:before {\n  content: \"\\F010\"; }\n.fa-power-off:before {\n  content: \"\\F011\"; }\n.fa-signal:before {\n  content: \"\\F012\"; }\n.fa-gear:before, .fa-cog:before {\n  content: \"\\F013\"; }\n.fa-trash-o:before {\n  content: \"\\F014\"; }\n.fa-home:before {\n  content: \"\\F015\"; }\n.fa-file-o:before {\n  content: \"\\F016\"; }\n.fa-clock-o:before {\n  content: \"\\F017\"; }\n.fa-road:before {\n  content: \"\\F018\"; }\n.fa-download:before {\n  content: \"\\F019\"; }\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\"; }\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\"; }\n.fa-inbox:before {\n  content: \"\\F01C\"; }\n.fa-play-circle-o:before {\n  content: \"\\F01D\"; }\n.fa-rotate-right:before, .fa-repeat:before {\n  content: \"\\F01E\"; }\n.fa-refresh:before {\n  content: \"\\F021\"; }\n.fa-list-alt:before {\n  content: \"\\F022\"; }\n.fa-lock:before {\n  content: \"\\F023\"; }\n.fa-flag:before {\n  content: \"\\F024\"; }\n.fa-headphones:before {\n  content: \"\\F025\"; }\n.fa-volume-off:before {\n  content: \"\\F026\"; }\n.fa-volume-down:before {\n  content: \"\\F027\"; }\n.fa-volume-up:before {\n  content: \"\\F028\"; }\n.fa-qrcode:before {\n  content: \"\\F029\"; }\n.fa-barcode:before {\n  content: \"\\F02A\"; }\n.fa-tag:before {\n  content: \"\\F02B\"; }\n.fa-tags:before {\n  content: \"\\F02C\"; }\n.fa-book:before {\n  content: \"\\F02D\"; }\n.fa-bookmark:before {\n  content: \"\\F02E\"; }\n.fa-print:before {\n  content: \"\\F02F\"; }\n.fa-camera:before {\n  content: \"\\F030\"; }\n.fa-font:before {\n  content: \"\\F031\"; }\n.fa-bold:before {\n  content: \"\\F032\"; }\n.fa-italic:before {\n  content: \"\\F033\"; }\n.fa-text-height:before {\n  content: \"\\F034\"; }\n.fa-text-width:before {\n  content: \"\\F035\"; }\n.fa-align-left:before {\n  content: \"\\F036\"; }\n.fa-align-center:before {\n  content: \"\\F037\"; }\n.fa-align-right:before {\n  content: \"\\F038\"; }\n.fa-align-justify:before {\n  content: \"\\F039\"; }\n.fa-list:before {\n  content: \"\\F03A\"; }\n.fa-dedent:before, .fa-outdent:before {\n  content: \"\\F03B\"; }\n.fa-indent:before {\n  content: \"\\F03C\"; }\n.fa-video-camera:before {\n  content: \"\\F03D\"; }\n.fa-photo:before, .fa-image:before, .fa-picture-o:before {\n  content: \"\\F03E\"; }\n.fa-pencil:before {\n  content: \"\\F040\"; }\n.fa-map-marker:before {\n  content: \"\\F041\"; }\n.fa-adjust:before {\n  content: \"\\F042\"; }\n.fa-tint:before {\n  content: \"\\F043\"; }\n.fa-edit:before, .fa-pencil-square-o:before {\n  content: \"\\F044\"; }\n.fa-share-square-o:before {\n  content: \"\\F045\"; }\n.fa-check-square-o:before {\n  content: \"\\F046\"; }\n.fa-arrows:before {\n  content: \"\\F047\"; }\n.fa-step-backward:before {\n  content: \"\\F048\"; }\n.fa-fast-backward:before {\n  content: \"\\F049\"; }\n.fa-backward:before {\n  content: \"\\F04A\"; }\n.fa-play:before {\n  content: \"\\F04B\"; }\n.fa-pause:before {\n  content: \"\\F04C\"; }\n.fa-stop:before {\n  content: \"\\F04D\"; }\n.fa-forward:before {\n  content: \"\\F04E\"; }\n.fa-fast-forward:before {\n  content: \"\\F050\"; }\n.fa-step-forward:before {\n  content: \"\\F051\"; }\n.fa-eject:before {\n  content: \"\\F052\"; }\n.fa-chevron-left:before {\n  content: \"\\F053\"; }\n.fa-chevron-right:before {\n  content: \"\\F054\"; }\n.fa-plus-circle:before {\n  content: \"\\F055\"; }\n.fa-minus-circle:before {\n  content: \"\\F056\"; }\n.fa-times-circle:before {\n  content: \"\\F057\"; }\n.fa-check-circle:before {\n  content: \"\\F058\"; }\n.fa-question-circle:before {\n  content: \"\\F059\"; }\n.fa-info-circle:before {\n  content: \"\\F05A\"; }\n.fa-crosshairs:before {\n  content: \"\\F05B\"; }\n.fa-times-circle-o:before {\n  content: \"\\F05C\"; }\n.fa-check-circle-o:before {\n  content: \"\\F05D\"; }\n.fa-ban:before {\n  content: \"\\F05E\"; }\n.fa-arrow-left:before {\n  content: \"\\F060\"; }\n.fa-arrow-right:before {\n  content: \"\\F061\"; }\n.fa-arrow-up:before {\n  content: \"\\F062\"; }\n.fa-arrow-down:before {\n  content: \"\\F063\"; }\n.fa-mail-forward:before, .fa-share:before {\n  content: \"\\F064\"; }\n.fa-expand:before {\n  content: \"\\F065\"; }\n.fa-compress:before {\n  content: \"\\F066\"; }\n.fa-plus:before {\n  content: \"\\F067\"; }\n.fa-minus:before {\n  content: \"\\F068\"; }\n.fa-asterisk:before {\n  content: \"\\F069\"; }\n.fa-exclamation-circle:before {\n  content: \"\\F06A\"; }\n.fa-gift:before {\n  content: \"\\F06B\"; }\n.fa-leaf:before {\n  content: \"\\F06C\"; }\n.fa-fire:before {\n  content: \"\\F06D\"; }\n.fa-eye:before {\n  content: \"\\F06E\"; }\n.fa-eye-slash:before {\n  content: \"\\F070\"; }\n.fa-warning:before, .fa-exclamation-triangle:before {\n  content: \"\\F071\"; }\n.fa-plane:before {\n  content: \"\\F072\"; }\n.fa-calendar:before {\n  content: \"\\F073\"; }\n.fa-random:before {\n  content: \"\\F074\"; }\n.fa-comment:before {\n  content: \"\\F075\"; }\n.fa-magnet:before {\n  content: \"\\F076\"; }\n.fa-chevron-up:before {\n  content: \"\\F077\"; }\n.fa-chevron-down:before {\n  content: \"\\F078\"; }\n.fa-retweet:before {\n  content: \"\\F079\"; }\n.fa-shopping-cart:before {\n  content: \"\\F07A\"; }\n.fa-folder:before {\n  content: \"\\F07B\"; }\n.fa-folder-open:before {\n  content: \"\\F07C\"; }\n.fa-arrows-v:before {\n  content: \"\\F07D\"; }\n.fa-arrows-h:before {\n  content: \"\\F07E\"; }\n.fa-bar-chart-o:before, .fa-bar-chart:before {\n  content: \"\\F080\"; }\n.fa-twitter-square:before {\n  content: \"\\F081\"; }\n.fa-facebook-square:before {\n  content: \"\\F082\"; }\n.fa-camera-retro:before {\n  content: \"\\F083\"; }\n.fa-key:before {\n  content: \"\\F084\"; }\n.fa-gears:before, .fa-cogs:before {\n  content: \"\\F085\"; }\n.fa-comments:before {\n  content: \"\\F086\"; }\n.fa-thumbs-o-up:before {\n  content: \"\\F087\"; }\n.fa-thumbs-o-down:before {\n  content: \"\\F088\"; }\n.fa-star-half:before {\n  content: \"\\F089\"; }\n.fa-heart-o:before {\n  content: \"\\F08A\"; }\n.fa-sign-out:before {\n  content: \"\\F08B\"; }\n.fa-linkedin-square:before {\n  content: \"\\F08C\"; }\n.fa-thumb-tack:before {\n  content: \"\\F08D\"; }\n.fa-external-link:before {\n  content: \"\\F08E\"; }\n.fa-sign-in:before {\n  content: \"\\F090\"; }\n.fa-trophy:before {\n  content: \"\\F091\"; }\n.fa-github-square:before {\n  content: \"\\F092\"; }\n.fa-upload:before {\n  content: \"\\F093\"; }\n.fa-lemon-o:before {\n  content: \"\\F094\"; }\n.fa-phone:before {\n  content: \"\\F095\"; }\n.fa-square-o:before {\n  content: \"\\F096\"; }\n.fa-bookmark-o:before {\n  content: \"\\F097\"; }\n.fa-phone-square:before {\n  content: \"\\F098\"; }\n.fa-twitter:before {\n  content: \"\\F099\"; }\n.fa-facebook-f:before, .fa-facebook:before {\n  content: \"\\F09A\"; }\n.fa-github:before {\n  content: \"\\F09B\"; }\n.fa-unlock:before {\n  content: \"\\F09C\"; }\n.fa-credit-card:before {\n  content: \"\\F09D\"; }\n.fa-feed:before, .fa-rss:before {\n  content: \"\\F09E\"; }\n.fa-hdd-o:before {\n  content: \"\\F0A0\"; }\n.fa-bullhorn:before {\n  content: \"\\F0A1\"; }\n.fa-bell:before {\n  content: \"\\F0F3\"; }\n.fa-certificate:before {\n  content: \"\\F0A3\"; }\n.fa-hand-o-right:before {\n  content: \"\\F0A4\"; }\n.fa-hand-o-left:before {\n  content: \"\\F0A5\"; }\n.fa-hand-o-up:before {\n  content: \"\\F0A6\"; }\n.fa-hand-o-down:before {\n  content: \"\\F0A7\"; }\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\"; }\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\"; }\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\"; }\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\"; }\n.fa-globe:before {\n  content: \"\\F0AC\"; }\n.fa-wrench:before {\n  content: \"\\F0AD\"; }\n.fa-tasks:before {\n  content: \"\\F0AE\"; }\n.fa-filter:before {\n  content: \"\\F0B0\"; }\n.fa-briefcase:before {\n  content: \"\\F0B1\"; }\n.fa-arrows-alt:before {\n  content: \"\\F0B2\"; }\n.fa-group:before, .fa-users:before {\n  content: \"\\F0C0\"; }\n.fa-chain:before, .fa-link:before {\n  content: \"\\F0C1\"; }\n.fa-cloud:before {\n  content: \"\\F0C2\"; }\n.fa-flask:before {\n  content: \"\\F0C3\"; }\n.fa-cut:before, .fa-scissors:before {\n  content: \"\\F0C4\"; }\n.fa-copy:before, .fa-files-o:before {\n  content: \"\\F0C5\"; }\n.fa-paperclip:before {\n  content: \"\\F0C6\"; }\n.fa-save:before, .fa-floppy-o:before {\n  content: \"\\F0C7\"; }\n.fa-square:before {\n  content: \"\\F0C8\"; }\n.fa-navicon:before, .fa-reorder:before, .fa-bars:before {\n  content: \"\\F0C9\"; }\n.fa-list-ul:before {\n  content: \"\\F0CA\"; }\n.fa-list-ol:before {\n  content: \"\\F0CB\"; }\n.fa-strikethrough:before {\n  content: \"\\F0CC\"; }\n.fa-underline:before {\n  content: \"\\F0CD\"; }\n.fa-table:before {\n  content: \"\\F0CE\"; }\n.fa-magic:before {\n  content: \"\\F0D0\"; }\n.fa-truck:before {\n  content: \"\\F0D1\"; }\n.fa-pinterest:before {\n  content: \"\\F0D2\"; }\n.fa-pinterest-square:before {\n  content: \"\\F0D3\"; }\n.fa-google-plus-square:before {\n  content: \"\\F0D4\"; }\n.fa-google-plus:before {\n  content: \"\\F0D5\"; }\n.fa-money:before {\n  content: \"\\F0D6\"; }\n.fa-caret-down:before {\n  content: \"\\F0D7\"; }\n.fa-caret-up:before {\n  content: \"\\F0D8\"; }\n.fa-caret-left:before {\n  content: \"\\F0D9\"; }\n.fa-caret-right:before {\n  content: \"\\F0DA\"; }\n.fa-columns:before {\n  content: \"\\F0DB\"; }\n.fa-unsorted:before, .fa-sort:before {\n  content: \"\\F0DC\"; }\n.fa-sort-down:before, .fa-sort-desc:before {\n  content: \"\\F0DD\"; }\n.fa-sort-up:before, .fa-sort-asc:before {\n  content: \"\\F0DE\"; }\n.fa-envelope:before {\n  content: \"\\F0E0\"; }\n.fa-linkedin:before {\n  content: \"\\F0E1\"; }\n.fa-rotate-left:before, .fa-undo:before {\n  content: \"\\F0E2\"; }\n.fa-legal:before, .fa-gavel:before {\n  content: \"\\F0E3\"; }\n.fa-dashboard:before, .fa-tachometer:before {\n  content: \"\\F0E4\"; }\n.fa-comment-o:before {\n  content: \"\\F0E5\"; }\n.fa-comments-o:before {\n  content: \"\\F0E6\"; }\n.fa-flash:before, .fa-bolt:before {\n  content: \"\\F0E7\"; }\n.fa-sitemap:before {\n  content: \"\\F0E8\"; }\n.fa-umbrella:before {\n  content: \"\\F0E9\"; }\n.fa-paste:before, .fa-clipboard:before {\n  content: \"\\F0EA\"; }\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\"; }\n.fa-exchange:before {\n  content: \"\\F0EC\"; }\n.fa-cloud-download:before {\n  content: \"\\F0ED\"; }\n.fa-cloud-upload:before {\n  content: \"\\F0EE\"; }\n.fa-user-md:before {\n  content: \"\\F0F0\"; }\n.fa-stethoscope:before {\n  content: \"\\F0F1\"; }\n.fa-suitcase:before {\n  content: \"\\F0F2\"; }\n.fa-bell-o:before {\n  content: \"\\F0A2\"; }\n.fa-coffee:before {\n  content: \"\\F0F4\"; }\n.fa-cutlery:before {\n  content: \"\\F0F5\"; }\n.fa-file-text-o:before {\n  content: \"\\F0F6\"; }\n.fa-building-o:before {\n  content: \"\\F0F7\"; }\n.fa-hospital-o:before {\n  content: \"\\F0F8\"; }\n.fa-ambulance:before {\n  content: \"\\F0F9\"; }\n.fa-medkit:before {\n  content: \"\\F0FA\"; }\n.fa-fighter-jet:before {\n  content: \"\\F0FB\"; }\n.fa-beer:before {\n  content: \"\\F0FC\"; }\n.fa-h-square:before {\n  content: \"\\F0FD\"; }\n.fa-plus-square:before {\n  content: \"\\F0FE\"; }\n.fa-angle-double-left:before {\n  content: \"\\F100\"; }\n.fa-angle-double-right:before {\n  content: \"\\F101\"; }\n.fa-angle-double-up:before {\n  content: \"\\F102\"; }\n.fa-angle-double-down:before {\n  content: \"\\F103\"; }\n.fa-angle-left:before {\n  content: \"\\F104\"; }\n.fa-angle-right:before {\n  content: \"\\F105\"; }\n.fa-angle-up:before {\n  content: \"\\F106\"; }\n.fa-angle-down:before {\n  content: \"\\F107\"; }\n.fa-desktop:before {\n  content: \"\\F108\"; }\n.fa-laptop:before {\n  content: \"\\F109\"; }\n.fa-tablet:before {\n  content: \"\\F10A\"; }\n.fa-mobile-phone:before, .fa-mobile:before {\n  content: \"\\F10B\"; }\n.fa-circle-o:before {\n  content: \"\\F10C\"; }\n.fa-quote-left:before {\n  content: \"\\F10D\"; }\n.fa-quote-right:before {\n  content: \"\\F10E\"; }\n.fa-spinner:before {\n  content: \"\\F110\"; }\n.fa-circle:before {\n  content: \"\\F111\"; }\n.fa-mail-reply:before, .fa-reply:before {\n  content: \"\\F112\"; }\n.fa-github-alt:before {\n  content: \"\\F113\"; }\n.fa-folder-o:before {\n  content: \"\\F114\"; }\n.fa-folder-open-o:before {\n  content: \"\\F115\"; }\n.fa-smile-o:before {\n  content: \"\\F118\"; }\n.fa-frown-o:before {\n  content: \"\\F119\"; }\n.fa-meh-o:before {\n  content: \"\\F11A\"; }\n.fa-gamepad:before {\n  content: \"\\F11B\"; }\n.fa-keyboard-o:before {\n  content: \"\\F11C\"; }\n.fa-flag-o:before {\n  content: \"\\F11D\"; }\n.fa-flag-checkered:before {\n  content: \"\\F11E\"; }\n.fa-terminal:before {\n  content: \"\\F120\"; }\n.fa-code:before {\n  content: \"\\F121\"; }\n.fa-mail-reply-all:before, .fa-reply-all:before {\n  content: \"\\F122\"; }\n.fa-star-half-empty:before, .fa-star-half-full:before, .fa-star-half-o:before {\n  content: \"\\F123\"; }\n.fa-location-arrow:before {\n  content: \"\\F124\"; }\n.fa-crop:before {\n  content: \"\\F125\"; }\n.fa-code-fork:before {\n  content: \"\\F126\"; }\n.fa-unlink:before, .fa-chain-broken:before {\n  content: \"\\F127\"; }\n.fa-question:before {\n  content: \"\\F128\"; }\n.fa-info:before {\n  content: \"\\F129\"; }\n.fa-exclamation:before {\n  content: \"\\F12A\"; }\n.fa-superscript:before {\n  content: \"\\F12B\"; }\n.fa-subscript:before {\n  content: \"\\F12C\"; }\n.fa-eraser:before {\n  content: \"\\F12D\"; }\n.fa-puzzle-piece:before {\n  content: \"\\F12E\"; }\n.fa-microphone:before {\n  content: \"\\F130\"; }\n.fa-microphone-slash:before {\n  content: \"\\F131\"; }\n.fa-shield:before {\n  content: \"\\F132\"; }\n.fa-calendar-o:before {\n  content: \"\\F133\"; }\n.fa-fire-extinguisher:before {\n  content: \"\\F134\"; }\n.fa-rocket:before {\n  content: \"\\F135\"; }\n.fa-maxcdn:before {\n  content: \"\\F136\"; }\n.fa-chevron-circle-left:before {\n  content: \"\\F137\"; }\n.fa-chevron-circle-right:before {\n  content: \"\\F138\"; }\n.fa-chevron-circle-up:before {\n  content: \"\\F139\"; }\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\"; }\n.fa-html5:before {\n  content: \"\\F13B\"; }\n.fa-css3:before {\n  content: \"\\F13C\"; }\n.fa-anchor:before {\n  content: \"\\F13D\"; }\n.fa-unlock-alt:before {\n  content: \"\\F13E\"; }\n.fa-bullseye:before {\n  content: \"\\F140\"; }\n.fa-ellipsis-h:before {\n  content: \"\\F141\"; }\n.fa-ellipsis-v:before {\n  content: \"\\F142\"; }\n.fa-rss-square:before {\n  content: \"\\F143\"; }\n.fa-play-circle:before {\n  content: \"\\F144\"; }\n.fa-ticket:before {\n  content: \"\\F145\"; }\n.fa-minus-square:before {\n  content: \"\\F146\"; }\n.fa-minus-square-o:before {\n  content: \"\\F147\"; }\n.fa-level-up:before {\n  content: \"\\F148\"; }\n.fa-level-down:before {\n  content: \"\\F149\"; }\n.fa-check-square:before {\n  content: \"\\F14A\"; }\n.fa-pencil-square:before {\n  content: \"\\F14B\"; }\n.fa-external-link-square:before {\n  content: \"\\F14C\"; }\n.fa-share-square:before {\n  content: \"\\F14D\"; }\n.fa-compass:before {\n  content: \"\\F14E\"; }\n.fa-toggle-down:before, .fa-caret-square-o-down:before {\n  content: \"\\F150\"; }\n.fa-toggle-up:before, .fa-caret-square-o-up:before {\n  content: \"\\F151\"; }\n.fa-toggle-right:before, .fa-caret-square-o-right:before {\n  content: \"\\F152\"; }\n.fa-euro:before, .fa-eur:before {\n  content: \"\\F153\"; }\n.fa-gbp:before {\n  content: \"\\F154\"; }\n.fa-dollar:before, .fa-usd:before {\n  content: \"\\F155\"; }\n.fa-rupee:before, .fa-inr:before {\n  content: \"\\F156\"; }\n.fa-cny:before, .fa-rmb:before, .fa-yen:before, .fa-jpy:before {\n  content: \"\\F157\"; }\n.fa-ruble:before, .fa-rouble:before, .fa-rub:before {\n  content: \"\\F158\"; }\n.fa-won:before, .fa-krw:before {\n  content: \"\\F159\"; }\n.fa-bitcoin:before, .fa-btc:before {\n  content: \"\\F15A\"; }\n.fa-file:before {\n  content: \"\\F15B\"; }\n.fa-file-text:before {\n  content: \"\\F15C\"; }\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\"; }\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\"; }\n.fa-sort-amount-asc:before {\n  content: \"\\F160\"; }\n.fa-sort-amount-desc:before {\n  content: \"\\F161\"; }\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\"; }\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\"; }\n.fa-thumbs-up:before {\n  content: \"\\F164\"; }\n.fa-thumbs-down:before {\n  content: \"\\F165\"; }\n.fa-youtube-square:before {\n  content: \"\\F166\"; }\n.fa-youtube:before {\n  content: \"\\F167\"; }\n.fa-xing:before {\n  content: \"\\F168\"; }\n.fa-xing-square:before {\n  content: \"\\F169\"; }\n.fa-youtube-play:before {\n  content: \"\\F16A\"; }\n.fa-dropbox:before {\n  content: \"\\F16B\"; }\n.fa-stack-overflow:before {\n  content: \"\\F16C\"; }\n.fa-instagram:before {\n  content: \"\\F16D\"; }\n.fa-flickr:before {\n  content: \"\\F16E\"; }\n.fa-adn:before {\n  content: \"\\F170\"; }\n.fa-bitbucket:before {\n  content: \"\\F171\"; }\n.fa-bitbucket-square:before {\n  content: \"\\F172\"; }\n.fa-tumblr:before {\n  content: \"\\F173\"; }\n.fa-tumblr-square:before {\n  content: \"\\F174\"; }\n.fa-long-arrow-down:before {\n  content: \"\\F175\"; }\n.fa-long-arrow-up:before {\n  content: \"\\F176\"; }\n.fa-long-arrow-left:before {\n  content: \"\\F177\"; }\n.fa-long-arrow-right:before {\n  content: \"\\F178\"; }\n.fa-apple:before {\n  content: \"\\F179\"; }\n.fa-windows:before {\n  content: \"\\F17A\"; }\n.fa-android:before {\n  content: \"\\F17B\"; }\n.fa-linux:before {\n  content: \"\\F17C\"; }\n.fa-dribbble:before {\n  content: \"\\F17D\"; }\n.fa-skype:before {\n  content: \"\\F17E\"; }\n.fa-foursquare:before {\n  content: \"\\F180\"; }\n.fa-trello:before {\n  content: \"\\F181\"; }\n.fa-female:before {\n  content: \"\\F182\"; }\n.fa-male:before {\n  content: \"\\F183\"; }\n.fa-gittip:before, .fa-gratipay:before {\n  content: \"\\F184\"; }\n.fa-sun-o:before {\n  content: \"\\F185\"; }\n.fa-moon-o:before {\n  content: \"\\F186\"; }\n.fa-archive:before {\n  content: \"\\F187\"; }\n.fa-bug:before {\n  content: \"\\F188\"; }\n.fa-vk:before {\n  content: \"\\F189\"; }\n.fa-weibo:before {\n  content: \"\\F18A\"; }\n.fa-renren:before {\n  content: \"\\F18B\"; }\n.fa-pagelines:before {\n  content: \"\\F18C\"; }\n.fa-stack-exchange:before {\n  content: \"\\F18D\"; }\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\"; }\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\"; }\n.fa-toggle-left:before, .fa-caret-square-o-left:before {\n  content: \"\\F191\"; }\n.fa-dot-circle-o:before {\n  content: \"\\F192\"; }\n.fa-wheelchair:before {\n  content: \"\\F193\"; }\n.fa-vimeo-square:before {\n  content: \"\\F194\"; }\n.fa-turkish-lira:before, .fa-try:before {\n  content: \"\\F195\"; }\n.fa-plus-square-o:before {\n  content: \"\\F196\"; }\n.fa-space-shuttle:before {\n  content: \"\\F197\"; }\n.fa-slack:before {\n  content: \"\\F198\"; }\n.fa-envelope-square:before {\n  content: \"\\F199\"; }\n.fa-wordpress:before {\n  content: \"\\F19A\"; }\n.fa-openid:before {\n  content: \"\\F19B\"; }\n.fa-institution:before, .fa-bank:before, .fa-university:before {\n  content: \"\\F19C\"; }\n.fa-mortar-board:before, .fa-graduation-cap:before {\n  content: \"\\F19D\"; }\n.fa-yahoo:before {\n  content: \"\\F19E\"; }\n.fa-google:before {\n  content: \"\\F1A0\"; }\n.fa-reddit:before {\n  content: \"\\F1A1\"; }\n.fa-reddit-square:before {\n  content: \"\\F1A2\"; }\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\"; }\n.fa-stumbleupon:before {\n  content: \"\\F1A4\"; }\n.fa-delicious:before {\n  content: \"\\F1A5\"; }\n.fa-digg:before {\n  content: \"\\F1A6\"; }\n.fa-pied-piper-pp:before {\n  content: \"\\F1A7\"; }\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\"; }\n.fa-drupal:before {\n  content: \"\\F1A9\"; }\n.fa-joomla:before {\n  content: \"\\F1AA\"; }\n.fa-language:before {\n  content: \"\\F1AB\"; }\n.fa-fax:before {\n  content: \"\\F1AC\"; }\n.fa-building:before {\n  content: \"\\F1AD\"; }\n.fa-child:before {\n  content: \"\\F1AE\"; }\n.fa-paw:before {\n  content: \"\\F1B0\"; }\n.fa-spoon:before {\n  content: \"\\F1B1\"; }\n.fa-cube:before {\n  content: \"\\F1B2\"; }\n.fa-cubes:before {\n  content: \"\\F1B3\"; }\n.fa-behance:before {\n  content: \"\\F1B4\"; }\n.fa-behance-square:before {\n  content: \"\\F1B5\"; }\n.fa-steam:before {\n  content: \"\\F1B6\"; }\n.fa-steam-square:before {\n  content: \"\\F1B7\"; }\n.fa-recycle:before {\n  content: \"\\F1B8\"; }\n.fa-automobile:before, .fa-car:before {\n  content: \"\\F1B9\"; }\n.fa-cab:before, .fa-taxi:before {\n  content: \"\\F1BA\"; }\n.fa-tree:before {\n  content: \"\\F1BB\"; }\n.fa-spotify:before {\n  content: \"\\F1BC\"; }\n.fa-deviantart:before {\n  content: \"\\F1BD\"; }\n.fa-soundcloud:before {\n  content: \"\\F1BE\"; }\n.fa-database:before {\n  content: \"\\F1C0\"; }\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\"; }\n.fa-file-word-o:before {\n  content: \"\\F1C2\"; }\n.fa-file-excel-o:before {\n  content: \"\\F1C3\"; }\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\"; }\n.fa-file-photo-o:before, .fa-file-picture-o:before, .fa-file-image-o:before {\n  content: \"\\F1C5\"; }\n.fa-file-zip-o:before, .fa-file-archive-o:before {\n  content: \"\\F1C6\"; }\n.fa-file-sound-o:before, .fa-file-audio-o:before {\n  content: \"\\F1C7\"; }\n.fa-file-movie-o:before, .fa-file-video-o:before {\n  content: \"\\F1C8\"; }\n.fa-file-code-o:before {\n  content: \"\\F1C9\"; }\n.fa-vine:before {\n  content: \"\\F1CA\"; }\n.fa-codepen:before {\n  content: \"\\F1CB\"; }\n.fa-jsfiddle:before {\n  content: \"\\F1CC\"; }\n.fa-life-bouy:before, .fa-life-buoy:before, .fa-life-saver:before, .fa-support:before, .fa-life-ring:before {\n  content: \"\\F1CD\"; }\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\"; }\n.fa-ra:before, .fa-resistance:before, .fa-rebel:before {\n  content: \"\\F1D0\"; }\n.fa-ge:before, .fa-empire:before {\n  content: \"\\F1D1\"; }\n.fa-git-square:before {\n  content: \"\\F1D2\"; }\n.fa-git:before {\n  content: \"\\F1D3\"; }\n.fa-y-combinator-square:before, .fa-yc-square:before, .fa-hacker-news:before {\n  content: \"\\F1D4\"; }\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\"; }\n.fa-qq:before {\n  content: \"\\F1D6\"; }\n.fa-wechat:before, .fa-weixin:before {\n  content: \"\\F1D7\"; }\n.fa-send:before, .fa-paper-plane:before {\n  content: \"\\F1D8\"; }\n.fa-send-o:before, .fa-paper-plane-o:before {\n  content: \"\\F1D9\"; }\n.fa-history:before {\n  content: \"\\F1DA\"; }\n.fa-circle-thin:before {\n  content: \"\\F1DB\"; }\n.fa-header:before {\n  content: \"\\F1DC\"; }\n.fa-paragraph:before {\n  content: \"\\F1DD\"; }\n.fa-sliders:before {\n  content: \"\\F1DE\"; }\n.fa-share-alt:before {\n  content: \"\\F1E0\"; }\n.fa-share-alt-square:before {\n  content: \"\\F1E1\"; }\n.fa-bomb:before {\n  content: \"\\F1E2\"; }\n.fa-soccer-ball-o:before, .fa-futbol-o:before {\n  content: \"\\F1E3\"; }\n.fa-tty:before {\n  content: \"\\F1E4\"; }\n.fa-binoculars:before {\n  content: \"\\F1E5\"; }\n.fa-plug:before {\n  content: \"\\F1E6\"; }\n.fa-slideshare:before {\n  content: \"\\F1E7\"; }\n.fa-twitch:before {\n  content: \"\\F1E8\"; }\n.fa-yelp:before {\n  content: \"\\F1E9\"; }\n.fa-newspaper-o:before {\n  content: \"\\F1EA\"; }\n.fa-wifi:before {\n  content: \"\\F1EB\"; }\n.fa-calculator:before {\n  content: \"\\F1EC\"; }\n.fa-paypal:before {\n  content: \"\\F1ED\"; }\n.fa-google-wallet:before {\n  content: \"\\F1EE\"; }\n.fa-cc-visa:before {\n  content: \"\\F1F0\"; }\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\"; }\n.fa-cc-discover:before {\n  content: \"\\F1F2\"; }\n.fa-cc-amex:before {\n  content: \"\\F1F3\"; }\n.fa-cc-paypal:before {\n  content: \"\\F1F4\"; }\n.fa-cc-stripe:before {\n  content: \"\\F1F5\"; }\n.fa-bell-slash:before {\n  content: \"\\F1F6\"; }\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\"; }\n.fa-trash:before {\n  content: \"\\F1F8\"; }\n.fa-copyright:before {\n  content: \"\\F1F9\"; }\n.fa-at:before {\n  content: \"\\F1FA\"; }\n.fa-eyedropper:before {\n  content: \"\\F1FB\"; }\n.fa-paint-brush:before {\n  content: \"\\F1FC\"; }\n.fa-birthday-cake:before {\n  content: \"\\F1FD\"; }\n.fa-area-chart:before {\n  content: \"\\F1FE\"; }\n.fa-pie-chart:before {\n  content: \"\\F200\"; }\n.fa-line-chart:before {\n  content: \"\\F201\"; }\n.fa-lastfm:before {\n  content: \"\\F202\"; }\n.fa-lastfm-square:before {\n  content: \"\\F203\"; }\n.fa-toggle-off:before {\n  content: \"\\F204\"; }\n.fa-toggle-on:before {\n  content: \"\\F205\"; }\n.fa-bicycle:before {\n  content: \"\\F206\"; }\n.fa-bus:before {\n  content: \"\\F207\"; }\n.fa-ioxhost:before {\n  content: \"\\F208\"; }\n.fa-angellist:before {\n  content: \"\\F209\"; }\n.fa-cc:before {\n  content: \"\\F20A\"; }\n.fa-shekel:before, .fa-sheqel:before, .fa-ils:before {\n  content: \"\\F20B\"; }\n.fa-meanpath:before {\n  content: \"\\F20C\"; }\n.fa-buysellads:before {\n  content: \"\\F20D\"; }\n.fa-connectdevelop:before {\n  content: \"\\F20E\"; }\n.fa-dashcube:before {\n  content: \"\\F210\"; }\n.fa-forumbee:before {\n  content: \"\\F211\"; }\n.fa-leanpub:before {\n  content: \"\\F212\"; }\n.fa-sellsy:before {\n  content: \"\\F213\"; }\n.fa-shirtsinbulk:before {\n  content: \"\\F214\"; }\n.fa-simplybuilt:before {\n  content: \"\\F215\"; }\n.fa-skyatlas:before {\n  content: \"\\F216\"; }\n.fa-cart-plus:before {\n  content: \"\\F217\"; }\n.fa-cart-arrow-down:before {\n  content: \"\\F218\"; }\n.fa-diamond:before {\n  content: \"\\F219\"; }\n.fa-ship:before {\n  content: \"\\F21A\"; }\n.fa-user-secret:before {\n  content: \"\\F21B\"; }\n.fa-motorcycle:before {\n  content: \"\\F21C\"; }\n.fa-street-view:before {\n  content: \"\\F21D\"; }\n.fa-heartbeat:before {\n  content: \"\\F21E\"; }\n.fa-venus:before {\n  content: \"\\F221\"; }\n.fa-mars:before {\n  content: \"\\F222\"; }\n.fa-mercury:before {\n  content: \"\\F223\"; }\n.fa-intersex:before, .fa-transgender:before {\n  content: \"\\F224\"; }\n.fa-transgender-alt:before {\n  content: \"\\F225\"; }\n.fa-venus-double:before {\n  content: \"\\F226\"; }\n.fa-mars-double:before {\n  content: \"\\F227\"; }\n.fa-venus-mars:before {\n  content: \"\\F228\"; }\n.fa-mars-stroke:before {\n  content: \"\\F229\"; }\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\"; }\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\"; }\n.fa-neuter:before {\n  content: \"\\F22C\"; }\n.fa-genderless:before {\n  content: \"\\F22D\"; }\n.fa-facebook-official:before {\n  content: \"\\F230\"; }\n.fa-pinterest-p:before {\n  content: \"\\F231\"; }\n.fa-whatsapp:before {\n  content: \"\\F232\"; }\n.fa-server:before {\n  content: \"\\F233\"; }\n.fa-user-plus:before {\n  content: \"\\F234\"; }\n.fa-user-times:before {\n  content: \"\\F235\"; }\n.fa-hotel:before, .fa-bed:before {\n  content: \"\\F236\"; }\n.fa-viacoin:before {\n  content: \"\\F237\"; }\n.fa-train:before {\n  content: \"\\F238\"; }\n.fa-subway:before {\n  content: \"\\F239\"; }\n.fa-medium:before {\n  content: \"\\F23A\"; }\n.fa-yc:before, .fa-y-combinator:before {\n  content: \"\\F23B\"; }\n.fa-optin-monster:before {\n  content: \"\\F23C\"; }\n.fa-opencart:before {\n  content: \"\\F23D\"; }\n.fa-expeditedssl:before {\n  content: \"\\F23E\"; }\n.fa-battery-4:before, .fa-battery:before, .fa-battery-full:before {\n  content: \"\\F240\"; }\n.fa-battery-3:before, .fa-battery-three-quarters:before {\n  content: \"\\F241\"; }\n.fa-battery-2:before, .fa-battery-half:before {\n  content: \"\\F242\"; }\n.fa-battery-1:before, .fa-battery-quarter:before {\n  content: \"\\F243\"; }\n.fa-battery-0:before, .fa-battery-empty:before {\n  content: \"\\F244\"; }\n.fa-mouse-pointer:before {\n  content: \"\\F245\"; }\n.fa-i-cursor:before {\n  content: \"\\F246\"; }\n.fa-object-group:before {\n  content: \"\\F247\"; }\n.fa-object-ungroup:before {\n  content: \"\\F248\"; }\n.fa-sticky-note:before {\n  content: \"\\F249\"; }\n.fa-sticky-note-o:before {\n  content: \"\\F24A\"; }\n.fa-cc-jcb:before {\n  content: \"\\F24B\"; }\n.fa-cc-diners-club:before {\n  content: \"\\F24C\"; }\n.fa-clone:before {\n  content: \"\\F24D\"; }\n.fa-balance-scale:before {\n  content: \"\\F24E\"; }\n.fa-hourglass-o:before {\n  content: \"\\F250\"; }\n.fa-hourglass-1:before, .fa-hourglass-start:before {\n  content: \"\\F251\"; }\n.fa-hourglass-2:before, .fa-hourglass-half:before {\n  content: \"\\F252\"; }\n.fa-hourglass-3:before, .fa-hourglass-end:before {\n  content: \"\\F253\"; }\n.fa-hourglass:before {\n  content: \"\\F254\"; }\n.fa-hand-grab-o:before, .fa-hand-rock-o:before {\n  content: \"\\F255\"; }\n.fa-hand-stop-o:before, .fa-hand-paper-o:before {\n  content: \"\\F256\"; }\n.fa-hand-scissors-o:before {\n  content: \"\\F257\"; }\n.fa-hand-lizard-o:before {\n  content: \"\\F258\"; }\n.fa-hand-spock-o:before {\n  content: \"\\F259\"; }\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\"; }\n.fa-hand-peace-o:before {\n  content: \"\\F25B\"; }\n.fa-trademark:before {\n  content: \"\\F25C\"; }\n.fa-registered:before {\n  content: \"\\F25D\"; }\n.fa-creative-commons:before {\n  content: \"\\F25E\"; }\n.fa-gg:before {\n  content: \"\\F260\"; }\n.fa-gg-circle:before {\n  content: \"\\F261\"; }\n.fa-tripadvisor:before {\n  content: \"\\F262\"; }\n.fa-odnoklassniki:before {\n  content: \"\\F263\"; }\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\"; }\n.fa-get-pocket:before {\n  content: \"\\F265\"; }\n.fa-wikipedia-w:before {\n  content: \"\\F266\"; }\n.fa-safari:before {\n  content: \"\\F267\"; }\n.fa-chrome:before {\n  content: \"\\F268\"; }\n.fa-firefox:before {\n  content: \"\\F269\"; }\n.fa-opera:before {\n  content: \"\\F26A\"; }\n.fa-internet-explorer:before {\n  content: \"\\F26B\"; }\n.fa-tv:before, .fa-television:before {\n  content: \"\\F26C\"; }\n.fa-contao:before {\n  content: \"\\F26D\"; }\n.fa-500px:before {\n  content: \"\\F26E\"; }\n.fa-amazon:before {\n  content: \"\\F270\"; }\n.fa-calendar-plus-o:before {\n  content: \"\\F271\"; }\n.fa-calendar-minus-o:before {\n  content: \"\\F272\"; }\n.fa-calendar-times-o:before {\n  content: \"\\F273\"; }\n.fa-calendar-check-o:before {\n  content: \"\\F274\"; }\n.fa-industry:before {\n  content: \"\\F275\"; }\n.fa-map-pin:before {\n  content: \"\\F276\"; }\n.fa-map-signs:before {\n  content: \"\\F277\"; }\n.fa-map-o:before {\n  content: \"\\F278\"; }\n.fa-map:before {\n  content: \"\\F279\"; }\n.fa-commenting:before {\n  content: \"\\F27A\"; }\n.fa-commenting-o:before {\n  content: \"\\F27B\"; }\n.fa-houzz:before {\n  content: \"\\F27C\"; }\n.fa-vimeo:before {\n  content: \"\\F27D\"; }\n.fa-black-tie:before {\n  content: \"\\F27E\"; }\n.fa-fonticons:before {\n  content: \"\\F280\"; }\n.fa-reddit-alien:before {\n  content: \"\\F281\"; }\n.fa-edge:before {\n  content: \"\\F282\"; }\n.fa-credit-card-alt:before {\n  content: \"\\F283\"; }\n.fa-codiepie:before {\n  content: \"\\F284\"; }\n.fa-modx:before {\n  content: \"\\F285\"; }\n.fa-fort-awesome:before {\n  content: \"\\F286\"; }\n.fa-usb:before {\n  content: \"\\F287\"; }\n.fa-product-hunt:before {\n  content: \"\\F288\"; }\n.fa-mixcloud:before {\n  content: \"\\F289\"; }\n.fa-scribd:before {\n  content: \"\\F28A\"; }\n.fa-pause-circle:before {\n  content: \"\\F28B\"; }\n.fa-pause-circle-o:before {\n  content: \"\\F28C\"; }\n.fa-stop-circle:before {\n  content: \"\\F28D\"; }\n.fa-stop-circle-o:before {\n  content: \"\\F28E\"; }\n.fa-shopping-bag:before {\n  content: \"\\F290\"; }\n.fa-shopping-basket:before {\n  content: \"\\F291\"; }\n.fa-hashtag:before {\n  content: \"\\F292\"; }\n.fa-bluetooth:before {\n  content: \"\\F293\"; }\n.fa-bluetooth-b:before {\n  content: \"\\F294\"; }\n.fa-percent:before {\n  content: \"\\F295\"; }\n.fa-gitlab:before {\n  content: \"\\F296\"; }\n.fa-wpbeginner:before {\n  content: \"\\F297\"; }\n.fa-wpforms:before {\n  content: \"\\F298\"; }\n.fa-envira:before {\n  content: \"\\F299\"; }\n.fa-universal-access:before {\n  content: \"\\F29A\"; }\n.fa-wheelchair-alt:before {\n  content: \"\\F29B\"; }\n.fa-question-circle-o:before {\n  content: \"\\F29C\"; }\n.fa-blind:before {\n  content: \"\\F29D\"; }\n.fa-audio-description:before {\n  content: \"\\F29E\"; }\n.fa-volume-control-phone:before {\n  content: \"\\F2A0\"; }\n.fa-braille:before {\n  content: \"\\F2A1\"; }\n.fa-assistive-listening-systems:before {\n  content: \"\\F2A2\"; }\n.fa-asl-interpreting:before, .fa-american-sign-language-interpreting:before {\n  content: \"\\F2A3\"; }\n.fa-deafness:before, .fa-hard-of-hearing:before, .fa-deaf:before {\n  content: \"\\F2A4\"; }\n.fa-glide:before {\n  content: \"\\F2A5\"; }\n.fa-glide-g:before {\n  content: \"\\F2A6\"; }\n.fa-signing:before, .fa-sign-language:before {\n  content: \"\\F2A7\"; }\n.fa-low-vision:before {\n  content: \"\\F2A8\"; }\n.fa-viadeo:before {\n  content: \"\\F2A9\"; }\n.fa-viadeo-square:before {\n  content: \"\\F2AA\"; }\n.fa-snapchat:before {\n  content: \"\\F2AB\"; }\n.fa-snapchat-ghost:before {\n  content: \"\\F2AC\"; }\n.fa-snapchat-square:before {\n  content: \"\\F2AD\"; }\n.fa-pied-piper:before {\n  content: \"\\F2AE\"; }\n.fa-first-order:before {\n  content: \"\\F2B0\"; }\n.fa-yoast:before {\n  content: \"\\F2B1\"; }\n.fa-themeisle:before {\n  content: \"\\F2B2\"; }\n.fa-google-plus-circle:before, .fa-google-plus-official:before {\n  content: \"\\F2B3\"; }\n.fa-fa:before, .fa-font-awesome:before {\n  content: \"\\F2B4\"; }\n.fa-handshake-o:before {\n  content: \"\\F2B5\"; }\n.fa-envelope-open:before {\n  content: \"\\F2B6\"; }\n.fa-envelope-open-o:before {\n  content: \"\\F2B7\"; }\n.fa-linode:before {\n  content: \"\\F2B8\"; }\n.fa-address-book:before {\n  content: \"\\F2B9\"; }\n.fa-address-book-o:before {\n  content: \"\\F2BA\"; }\n.fa-vcard:before, .fa-address-card:before {\n  content: \"\\F2BB\"; }\n.fa-vcard-o:before, .fa-address-card-o:before {\n  content: \"\\F2BC\"; }\n.fa-user-circle:before {\n  content: \"\\F2BD\"; }\n.fa-user-circle-o:before {\n  content: \"\\F2BE\"; }\n.fa-user-o:before {\n  content: \"\\F2C0\"; }\n.fa-id-badge:before {\n  content: \"\\F2C1\"; }\n.fa-drivers-license:before, .fa-id-card:before {\n  content: \"\\F2C2\"; }\n.fa-drivers-license-o:before, .fa-id-card-o:before {\n  content: \"\\F2C3\"; }\n.fa-quora:before {\n  content: \"\\F2C4\"; }\n.fa-free-code-camp:before {\n  content: \"\\F2C5\"; }\n.fa-telegram:before {\n  content: \"\\F2C6\"; }\n.fa-thermometer-4:before, .fa-thermometer:before, .fa-thermometer-full:before {\n  content: \"\\F2C7\"; }\n.fa-thermometer-3:before, .fa-thermometer-three-quarters:before {\n  content: \"\\F2C8\"; }\n.fa-thermometer-2:before, .fa-thermometer-half:before {\n  content: \"\\F2C9\"; }\n.fa-thermometer-1:before, .fa-thermometer-quarter:before {\n  content: \"\\F2CA\"; }\n.fa-thermometer-0:before, .fa-thermometer-empty:before {\n  content: \"\\F2CB\"; }\n.fa-shower:before {\n  content: \"\\F2CC\"; }\n.fa-bathtub:before, .fa-s15:before, .fa-bath:before {\n  content: \"\\F2CD\"; }\n.fa-podcast:before {\n  content: \"\\F2CE\"; }\n.fa-window-maximize:before {\n  content: \"\\F2D0\"; }\n.fa-window-minimize:before {\n  content: \"\\F2D1\"; }\n.fa-window-restore:before {\n  content: \"\\F2D2\"; }\n.fa-times-rectangle:before, .fa-window-close:before {\n  content: \"\\F2D3\"; }\n.fa-times-rectangle-o:before, .fa-window-close-o:before {\n  content: \"\\F2D4\"; }\n.fa-bandcamp:before {\n  content: \"\\F2D5\"; }\n.fa-grav:before {\n  content: \"\\F2D6\"; }\n.fa-etsy:before {\n  content: \"\\F2D7\"; }\n.fa-imdb:before {\n  content: \"\\F2D8\"; }\n.fa-ravelry:before {\n  content: \"\\F2D9\"; }\n.fa-eercast:before {\n  content: \"\\F2DA\"; }\n.fa-microchip:before {\n  content: \"\\F2DB\"; }\n.fa-snowflake-o:before {\n  content: \"\\F2DC\"; }\n.fa-superpowers:before {\n  content: \"\\F2DD\"; }\n.fa-wpexplorer:before {\n  content: \"\\F2DE\"; }\n.fa-meetup:before {\n  content: \"\\F2E0\"; }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\nbody {\n  margin: 0; }\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n[hidden], template {\n  display: none; }\na {\n  background-color: transparent; }\na:active, a:hover {\n  outline: 0; }\nabbr[title] {\n  border-bottom: 1px dotted; }\nb, strong {\n  font-weight: bold; }\ndfn {\n  font-style: italic; }\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\nmark {\n  background: #ff0;\n  color: #000; }\nsmall {\n  font-size: 80%; }\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\nimg {\n  border: 0; }\nsvg:not(:root) {\n  overflow: hidden; }\nfigure {\n  margin: 1em 40px; }\nhr {\n  box-sizing: content-box;\n  height: 0; }\npre {\n  overflow: auto; }\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\nbutton {\n  overflow: visible; }\nbutton, select {\n  text-transform: none; }\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\nbutton[disabled], html input[disabled] {\n  cursor: default; }\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\ninput {\n  line-height: normal; }\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\ninput[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\nlegend {\n  border: 0;\n  padding: 0; }\ntextarea {\n  overflow: auto; }\noptgroup {\n  font-weight: bold; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd, th {\n  padding: 0; }\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *, *:before, *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a, a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after, a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre, blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr, img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p, h2, h3 {\n    orphans: 3;\n    widows: 3; }\n  h2, h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret, .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td, .table th {\n      background-color: #fff !important; }\n  .table-bordered th, .table-bordered td {\n    border: 1px solid #ddd !important; } }\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(3) + ");\n  src: url(" + __webpack_require__(3) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(13) + ") format(\"woff2\"), url(" + __webpack_require__(14) + ") format(\"woff\"), url(" + __webpack_require__(15) + ") format(\"truetype\"), url(" + __webpack_require__(16) + "#glyphicons_halflingsregular) format(\"svg\"); }\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n.glyphicon-plus:before {\n  content: \"+\"; }\n.glyphicon-euro:before, .glyphicon-eur:before {\n  content: \"\\20AC\"; }\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n* {\n  box-sizing: border-box; }\n*:before, *:after {\n  box-sizing: border-box; }\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\nbody {\n  font-family: \"Source Sans Pro\", Calibri, Candara, Arial, sans-serif;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\ninput, button, select, textarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\na {\n  color: #2780E3;\n  text-decoration: none; }\na:hover, a:focus {\n    color: #165ba8;\n    text-decoration: underline; }\na:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\nfigure {\n  margin: 0; }\nimg {\n  vertical-align: middle; }\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n.img-rounded {\n  border-radius: 0; }\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n.img-circle {\n  border-radius: 50%; }\nhr {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  border: 0;\n  border-top: 1px solid #e6e6e6; }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n[role=\"button\"] {\n  cursor: pointer; }\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: \"Source Sans Pro\", Calibri, Candara, Arial, sans-serif;\n  font-weight: 300;\n  line-height: 1.1;\n  color: inherit; }\nh1 small, h1 .small, h2 small, h2 .small, h3 small, h3 .small, h4 small, h4 .small, h5 small, h5 .small, h6 small, h6 .small, .h1 small, .h1 .small, .h2 small, .h2 .small, .h3 small, .h3 .small, .h4 small, .h4 .small, .h5 small, .h5 .small, .h6 small, .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #999999; }\nh1, .h1, h2, .h2, h3, .h3 {\n  margin-top: 21px;\n  margin-bottom: 10.5px; }\nh1 small, h1 .small, .h1 small, .h1 .small, h2 small, h2 .small, .h2 small, .h2 .small, h3 small, h3 .small, .h3 small, .h3 .small {\n    font-size: 65%; }\nh4, .h4, h5, .h5, h6, .h6 {\n  margin-top: 10.5px;\n  margin-bottom: 10.5px; }\nh4 small, h4 .small, .h4 small, .h4 .small, h5 small, h5 .small, .h5 small, .h5 .small, h6 small, h6 .small, .h6 small, .h6 .small {\n    font-size: 75%; }\nh1, .h1 {\n  font-size: 39px; }\nh2, .h2 {\n  font-size: 32px; }\nh3, .h3 {\n  font-size: 26px; }\nh4, .h4 {\n  font-size: 19px; }\nh5, .h5 {\n  font-size: 15px; }\nh6, .h6 {\n  font-size: 13px; }\np {\n  margin: 0 0 10.5px; }\n.lead {\n  margin-bottom: 21px;\n  font-size: 17px;\n  font-weight: 300;\n  line-height: 1.4; }\n@media (min-width: 768px) {\n    .lead {\n      font-size: 22.5px; } }\nsmall, .small {\n  font-size: 86%; }\nmark, .mark {\n  background-color: #FF7518;\n  padding: .2em; }\n.text-left {\n  text-align: left; }\n.text-right {\n  text-align: right; }\n.text-center {\n  text-align: center; }\n.text-justify {\n  text-align: justify; }\n.text-nowrap {\n  white-space: nowrap; }\n.text-lowercase {\n  text-transform: lowercase; }\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n.text-capitalize {\n  text-transform: capitalize; }\n.text-muted {\n  color: #999999; }\n.text-primary {\n  color: #2780E3; }\na.text-primary:hover, a.text-primary:focus {\n  color: #1967be; }\n.text-success {\n  color: #fff; }\na.text-success:hover, a.text-success:focus {\n  color: #e6e6e6; }\n.text-info {\n  color: #fff; }\na.text-info:hover, a.text-info:focus {\n  color: #e6e6e6; }\n.text-warning {\n  color: #fff; }\na.text-warning:hover, a.text-warning:focus {\n  color: #e6e6e6; }\n.text-danger {\n  color: #fff; }\na.text-danger:hover, a.text-danger:focus {\n  color: #e6e6e6; }\n.bg-primary {\n  color: #fff; }\n.bg-primary {\n  background-color: #2780E3; }\na.bg-primary:hover, a.bg-primary:focus {\n  background-color: #1967be; }\n.bg-success {\n  background-color: #3FB618; }\na.bg-success:hover, a.bg-success:focus {\n  background-color: #2f8912; }\n.bg-info {\n  background-color: #9954BB; }\na.bg-info:hover, a.bg-info:focus {\n  background-color: #7e3f9d; }\n.bg-warning {\n  background-color: #FF7518; }\na.bg-warning:hover, a.bg-warning:focus {\n  background-color: #e45c00; }\n.bg-danger {\n  background-color: #FF0039; }\na.bg-danger:hover, a.bg-danger:focus {\n  background-color: #cc002e; }\n.page-header {\n  padding-bottom: 9.5px;\n  margin: 42px 0 21px;\n  border-bottom: 1px solid #e6e6e6; }\nul, ol {\n  margin-top: 0;\n  margin-bottom: 10.5px; }\nul ul, ul ol, ol ul, ol ol {\n    margin-bottom: 0; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n.list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\ndl {\n  margin-top: 0;\n  margin-bottom: 21px; }\ndt, dd {\n  line-height: 1.42857; }\ndt {\n  font-weight: bold; }\ndd {\n  margin-left: 0; }\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n.dl-horizontal dd:after {\n  clear: both; }\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\nabbr[title], abbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #999999; }\n.initialism {\n  font-size: 90%; }\nblockquote {\n  padding: 10.5px 21px;\n  margin: 0 0 21px;\n  font-size: 18.75px;\n  border-left: 5px solid #e6e6e6; }\nblockquote p:last-child, blockquote ul:last-child, blockquote ol:last-child {\n    margin-bottom: 0; }\nblockquote footer, blockquote small, blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #999999; }\nblockquote footer:before, blockquote small:before, blockquote .small:before {\n      content: '\\2014   \\A0'; }\n.blockquote-reverse, blockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #e6e6e6;\n  border-left: 0;\n  text-align: right; }\n.blockquote-reverse footer:before, .blockquote-reverse small:before, .blockquote-reverse .small:before, blockquote.pull-right footer:before, blockquote.pull-right small:before, blockquote.pull-right .small:before {\n    content: ''; }\n.blockquote-reverse footer:after, .blockquote-reverse small:after, .blockquote-reverse .small:after, blockquote.pull-right footer:after, blockquote.pull-right small:after, blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\naddress {\n  margin-bottom: 21px;\n  font-style: normal;\n  line-height: 1.42857; }\ncode, kbd, pre, samp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 0; }\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\npre {\n  display: block;\n  padding: 10px;\n  margin: 0 0 10.5px;\n  font-size: 14px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 0; }\npre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n.container:before, .container:after {\n    content: \" \";\n    display: table; }\n.container:after {\n    clear: both; }\n@media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n@media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n@media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n.container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n.container-fluid:after {\n    clear: both; }\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n.row:before, .row:after {\n    content: \" \";\n    display: table; }\n.row:after {\n    clear: both; }\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n.col-xs-1 {\n  width: 8.33333%; }\n.col-xs-2 {\n  width: 16.66667%; }\n.col-xs-3 {\n  width: 25%; }\n.col-xs-4 {\n  width: 33.33333%; }\n.col-xs-5 {\n  width: 41.66667%; }\n.col-xs-6 {\n  width: 50%; }\n.col-xs-7 {\n  width: 58.33333%; }\n.col-xs-8 {\n  width: 66.66667%; }\n.col-xs-9 {\n  width: 75%; }\n.col-xs-10 {\n  width: 83.33333%; }\n.col-xs-11 {\n  width: 91.66667%; }\n.col-xs-12 {\n  width: 100%; }\n.col-xs-pull-0 {\n  right: auto; }\n.col-xs-pull-1 {\n  right: 8.33333%; }\n.col-xs-pull-2 {\n  right: 16.66667%; }\n.col-xs-pull-3 {\n  right: 25%; }\n.col-xs-pull-4 {\n  right: 33.33333%; }\n.col-xs-pull-5 {\n  right: 41.66667%; }\n.col-xs-pull-6 {\n  right: 50%; }\n.col-xs-pull-7 {\n  right: 58.33333%; }\n.col-xs-pull-8 {\n  right: 66.66667%; }\n.col-xs-pull-9 {\n  right: 75%; }\n.col-xs-pull-10 {\n  right: 83.33333%; }\n.col-xs-pull-11 {\n  right: 91.66667%; }\n.col-xs-pull-12 {\n  right: 100%; }\n.col-xs-push-0 {\n  left: auto; }\n.col-xs-push-1 {\n  left: 8.33333%; }\n.col-xs-push-2 {\n  left: 16.66667%; }\n.col-xs-push-3 {\n  left: 25%; }\n.col-xs-push-4 {\n  left: 33.33333%; }\n.col-xs-push-5 {\n  left: 41.66667%; }\n.col-xs-push-6 {\n  left: 50%; }\n.col-xs-push-7 {\n  left: 58.33333%; }\n.col-xs-push-8 {\n  left: 66.66667%; }\n.col-xs-push-9 {\n  left: 75%; }\n.col-xs-push-10 {\n  left: 83.33333%; }\n.col-xs-push-11 {\n  left: 91.66667%; }\n.col-xs-push-12 {\n  left: 100%; }\n.col-xs-offset-0 {\n  margin-left: 0%; }\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n.col-xs-offset-3 {\n  margin-left: 25%; }\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n.col-xs-offset-6 {\n  margin-left: 50%; }\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n.col-xs-offset-9 {\n  margin-left: 75%; }\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n.col-xs-offset-12 {\n  margin-left: 100%; }\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\ntable {\n  background-color: transparent; }\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #999999;\n  text-align: left; }\nth {\n  text-align: left; }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 21px; }\n.table > thead > tr > th, .table > thead > tr > td, .table > tbody > tr > th, .table > tbody > tr > td, .table > tfoot > tr > th, .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n.table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n.table > caption + thead > tr:first-child > th, .table > caption + thead > tr:first-child > td, .table > colgroup + thead > tr:first-child > th, .table > colgroup + thead > tr:first-child > td, .table > thead:first-child > tr:first-child > th, .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n.table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n.table .table {\n    background-color: #fff; }\n.table-condensed > thead > tr > th, .table-condensed > thead > tr > td, .table-condensed > tbody > tr > th, .table-condensed > tbody > tr > td, .table-condensed > tfoot > tr > th, .table-condensed > tfoot > tr > td {\n  padding: 5px; }\n.table-bordered {\n  border: 1px solid #ddd; }\n.table-bordered > thead > tr > th, .table-bordered > thead > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tbody > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n.table-bordered > thead > tr > th, .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\ntable td[class*=\"col-\"], table th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n.table > thead > tr > td.active, .table > thead > tr > th.active, .table > thead > tr.active > td, .table > thead > tr.active > th, .table > tbody > tr > td.active, .table > tbody > tr > th.active, .table > tbody > tr.active > td, .table > tbody > tr.active > th, .table > tfoot > tr > td.active, .table > tfoot > tr > th.active, .table > tfoot > tr.active > td, .table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n.table-hover > tbody > tr > td.active:hover, .table-hover > tbody > tr > th.active:hover, .table-hover > tbody > tr.active:hover > td, .table-hover > tbody > tr:hover > .active, .table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n.table > thead > tr > td.success, .table > thead > tr > th.success, .table > thead > tr.success > td, .table > thead > tr.success > th, .table > tbody > tr > td.success, .table > tbody > tr > th.success, .table > tbody > tr.success > td, .table > tbody > tr.success > th, .table > tfoot > tr > td.success, .table > tfoot > tr > th.success, .table > tfoot > tr.success > td, .table > tfoot > tr.success > th {\n  background-color: #3FB618; }\n.table-hover > tbody > tr > td.success:hover, .table-hover > tbody > tr > th.success:hover, .table-hover > tbody > tr.success:hover > td, .table-hover > tbody > tr:hover > .success, .table-hover > tbody > tr.success:hover > th {\n  background-color: #379f15; }\n.table > thead > tr > td.info, .table > thead > tr > th.info, .table > thead > tr.info > td, .table > thead > tr.info > th, .table > tbody > tr > td.info, .table > tbody > tr > th.info, .table > tbody > tr.info > td, .table > tbody > tr.info > th, .table > tfoot > tr > td.info, .table > tfoot > tr > th.info, .table > tfoot > tr.info > td, .table > tfoot > tr.info > th {\n  background-color: #9954BB; }\n.table-hover > tbody > tr > td.info:hover, .table-hover > tbody > tr > th.info:hover, .table-hover > tbody > tr.info:hover > td, .table-hover > tbody > tr:hover > .info, .table-hover > tbody > tr.info:hover > th {\n  background-color: #8d46b0; }\n.table > thead > tr > td.warning, .table > thead > tr > th.warning, .table > thead > tr.warning > td, .table > thead > tr.warning > th, .table > tbody > tr > td.warning, .table > tbody > tr > th.warning, .table > tbody > tr.warning > td, .table > tbody > tr.warning > th, .table > tfoot > tr > td.warning, .table > tfoot > tr > th.warning, .table > tfoot > tr.warning > td, .table > tfoot > tr.warning > th {\n  background-color: #FF7518; }\n.table-hover > tbody > tr > td.warning:hover, .table-hover > tbody > tr > th.warning:hover, .table-hover > tbody > tr.warning:hover > td, .table-hover > tbody > tr:hover > .warning, .table-hover > tbody > tr.warning:hover > th {\n  background-color: #fe6600; }\n.table > thead > tr > td.danger, .table > thead > tr > th.danger, .table > thead > tr.danger > td, .table > thead > tr.danger > th, .table > tbody > tr > td.danger, .table > tbody > tr > th.danger, .table > tbody > tr.danger > td, .table > tbody > tr.danger > th, .table > tfoot > tr > td.danger, .table > tfoot > tr > th.danger, .table > tfoot > tr.danger > td, .table > tfoot > tr.danger > th {\n  background-color: #FF0039; }\n.table-hover > tbody > tr > td.danger:hover, .table-hover > tbody > tr > th.danger:hover, .table-hover > tbody > tr.danger:hover > td, .table-hover > tbody > tr:hover > .danger, .table-hover > tbody > tr.danger:hover > th {\n  background-color: #e60033; }\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n@media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15.75px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th, .table-responsive > .table > thead > tr > td, .table-responsive > .table > tbody > tr > th, .table-responsive > .table > tbody > tr > td, .table-responsive > .table > tfoot > tr > th, .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child, .table-responsive > .table-bordered > thead > tr > td:first-child, .table-responsive > .table-bordered > tbody > tr > th:first-child, .table-responsive > .table-bordered > tbody > tr > td:first-child, .table-responsive > .table-bordered > tfoot > tr > th:first-child, .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child, .table-responsive > .table-bordered > thead > tr > td:last-child, .table-responsive > .table-bordered > tbody > tr > th:last-child, .table-responsive > .table-bordered > tbody > tr > td:last-child, .table-responsive > .table-bordered > tfoot > tr > th:last-child, .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th, .table-responsive > .table-bordered > tbody > tr:last-child > td, .table-responsive > .table-bordered > tfoot > tr:last-child > th, .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 21px;\n  font-size: 22.5px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\ninput[type=\"search\"] {\n  box-sizing: border-box; }\ninput[type=\"radio\"], input[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\ninput[type=\"file\"] {\n  display: block; }\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\nselect[multiple], select[size] {\n  height: auto; }\ninput[type=\"file\"]:focus, input[type=\"radio\"]:focus, input[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\noutput {\n  display: block;\n  padding-top: 11px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #333333; }\n.form-control {\n  display: block;\n  width: 100%;\n  height: 43px;\n  padding: 10px 18px;\n  font-size: 15px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n.form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n.form-control::-moz-placeholder {\n    color: #999999;\n    opacity: 1; }\n.form-control:-ms-input-placeholder {\n    color: #999999; }\n.form-control::-webkit-input-placeholder {\n    color: #999999; }\n.form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n.form-control[disabled], .form-control[readonly], fieldset[disabled] .form-control {\n    background-color: #e6e6e6;\n    opacity: 1; }\n.form-control[disabled], fieldset[disabled] .form-control {\n    cursor: not-allowed; }\ntextarea.form-control {\n  height: auto; }\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control, input[type=\"time\"].form-control, input[type=\"datetime-local\"].form-control, input[type=\"month\"].form-control {\n    line-height: 43px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control, .input-group-sm > input[type=\"date\"].input-group-addon, .input-group-sm > .input-group-btn > input[type=\"date\"].btn, .input-group-sm input[type=\"date\"], input[type=\"time\"].input-sm, .input-group-sm > input[type=\"time\"].form-control, .input-group-sm > input[type=\"time\"].input-group-addon, .input-group-sm > .input-group-btn > input[type=\"time\"].btn, .input-group-sm\n  input[type=\"time\"], input[type=\"datetime-local\"].input-sm, .input-group-sm > input[type=\"datetime-local\"].form-control, .input-group-sm > input[type=\"datetime-local\"].input-group-addon, .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn, .input-group-sm\n  input[type=\"datetime-local\"], input[type=\"month\"].input-sm, .input-group-sm > input[type=\"month\"].form-control, .input-group-sm > input[type=\"month\"].input-group-addon, .input-group-sm > .input-group-btn > input[type=\"month\"].btn, .input-group-sm\n  input[type=\"month\"] {\n    line-height: 31px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control, .input-group-lg > input[type=\"date\"].input-group-addon, .input-group-lg > .input-group-btn > input[type=\"date\"].btn, .input-group-lg input[type=\"date\"], input[type=\"time\"].input-lg, .input-group-lg > input[type=\"time\"].form-control, .input-group-lg > input[type=\"time\"].input-group-addon, .input-group-lg > .input-group-btn > input[type=\"time\"].btn, .input-group-lg\n  input[type=\"time\"], input[type=\"datetime-local\"].input-lg, .input-group-lg > input[type=\"datetime-local\"].form-control, .input-group-lg > input[type=\"datetime-local\"].input-group-addon, .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn, .input-group-lg\n  input[type=\"datetime-local\"], input[type=\"month\"].input-lg, .input-group-lg > input[type=\"month\"].form-control, .input-group-lg > input[type=\"month\"].input-group-addon, .input-group-lg > .input-group-btn > input[type=\"month\"].btn, .input-group-lg\n  input[type=\"month\"] {\n    line-height: 64px; } }\n.form-group {\n  margin-bottom: 15px; }\n.radio, .checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n.radio label, .checkbox label {\n    min-height: 21px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n.radio input[type=\"radio\"], .radio-inline input[type=\"radio\"], .checkbox input[type=\"checkbox\"], .checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n.radio + .radio, .checkbox + .checkbox {\n  margin-top: -5px; }\n.radio-inline, .checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n.radio-inline + .radio-inline, .checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled, fieldset[disabled] input[type=\"radio\"], input[type=\"checkbox\"][disabled], input[type=\"checkbox\"].disabled, fieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n.radio-inline.disabled, fieldset[disabled] .radio-inline, .checkbox-inline.disabled, fieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n.radio.disabled label, fieldset[disabled] .radio label, .checkbox.disabled label, fieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n.form-control-static {\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-bottom: 0;\n  min-height: 36px; }\n.form-control-static.input-lg, .input-group-lg > .form-control-static.form-control, .input-group-lg > .form-control-static.input-group-addon, .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control, .input-group-sm > .form-control-static.input-group-addon, .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n.input-sm, .input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn {\n  height: 31px;\n  padding: 5px 10px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 0; }\nselect.input-sm, .input-group-sm > select.form-control, .input-group-sm > select.input-group-addon, .input-group-sm > .input-group-btn > select.btn {\n  height: 31px;\n  line-height: 31px; }\ntextarea.input-sm, .input-group-sm > textarea.form-control, .input-group-sm > textarea.input-group-addon, .input-group-sm > .input-group-btn > textarea.btn, select[multiple].input-sm, .input-group-sm > select[multiple].form-control, .input-group-sm > select[multiple].input-group-addon, .input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n.form-group-sm .form-control {\n  height: 31px;\n  padding: 5px 10px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 0; }\n.form-group-sm select.form-control {\n  height: 31px;\n  line-height: 31px; }\n.form-group-sm textarea.form-control, .form-group-sm select[multiple].form-control {\n  height: auto; }\n.form-group-sm .form-control-static {\n  height: 31px;\n  min-height: 34px;\n  padding: 6px 10px;\n  font-size: 13px;\n  line-height: 1.5; }\n.input-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn {\n  height: 64px;\n  padding: 18px 30px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 0; }\nselect.input-lg, .input-group-lg > select.form-control, .input-group-lg > select.input-group-addon, .input-group-lg > .input-group-btn > select.btn {\n  height: 64px;\n  line-height: 64px; }\ntextarea.input-lg, .input-group-lg > textarea.form-control, .input-group-lg > textarea.input-group-addon, .input-group-lg > .input-group-btn > textarea.btn, select[multiple].input-lg, .input-group-lg > select[multiple].form-control, .input-group-lg > select[multiple].input-group-addon, .input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n.form-group-lg .form-control {\n  height: 64px;\n  padding: 18px 30px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 0; }\n.form-group-lg select.form-control {\n  height: 64px;\n  line-height: 64px; }\n.form-group-lg textarea.form-control, .form-group-lg select[multiple].form-control {\n  height: auto; }\n.form-group-lg .form-control-static {\n  height: 64px;\n  min-height: 40px;\n  padding: 19px 30px;\n  font-size: 19px;\n  line-height: 1.33333; }\n.has-feedback {\n  position: relative; }\n.has-feedback .form-control {\n    padding-right: 53.75px; }\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 43px;\n  height: 43px;\n  line-height: 43px;\n  text-align: center;\n  pointer-events: none; }\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback, .input-group-lg > .input-group-addon + .form-control-feedback, .input-group-lg > .input-group-btn > .btn + .form-control-feedback, .input-group-lg + .form-control-feedback, .form-group-lg .form-control + .form-control-feedback {\n  width: 64px;\n  height: 64px;\n  line-height: 64px; }\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback, .input-group-sm > .input-group-addon + .form-control-feedback, .input-group-sm > .input-group-btn > .btn + .form-control-feedback, .input-group-sm + .form-control-feedback, .form-group-sm .form-control + .form-control-feedback {\n  width: 31px;\n  height: 31px;\n  line-height: 31px; }\n.has-success .help-block, .has-success .control-label, .has-success .radio, .has-success .checkbox, .has-success .radio-inline, .has-success .checkbox-inline, .has-success.radio label, .has-success.checkbox label, .has-success.radio-inline label, .has-success.checkbox-inline label {\n  color: #fff; }\n.has-success .form-control {\n  border-color: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n.has-success .form-control:focus {\n    border-color: #e6e6e6;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n.has-success .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #3FB618; }\n.has-success .form-control-feedback {\n  color: #fff; }\n.has-warning .help-block, .has-warning .control-label, .has-warning .radio, .has-warning .checkbox, .has-warning .radio-inline, .has-warning .checkbox-inline, .has-warning.radio label, .has-warning.checkbox label, .has-warning.radio-inline label, .has-warning.checkbox-inline label {\n  color: #fff; }\n.has-warning .form-control {\n  border-color: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n.has-warning .form-control:focus {\n    border-color: #e6e6e6;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n.has-warning .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #FF7518; }\n.has-warning .form-control-feedback {\n  color: #fff; }\n.has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline, .has-error.radio label, .has-error.checkbox label, .has-error.radio-inline label, .has-error.checkbox-inline label {\n  color: #fff; }\n.has-error .form-control {\n  border-color: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n.has-error .form-control:focus {\n    border-color: #e6e6e6;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px white; }\n.has-error .input-group-addon {\n  color: #fff;\n  border-color: #fff;\n  background-color: #FF0039; }\n.has-error .form-control-feedback {\n  color: #fff; }\n.has-feedback label ~ .form-control-feedback {\n  top: 26px; }\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon, .form-inline .input-group .input-group-btn, .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio, .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label, .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"], .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n.form-horizontal .radio, .form-horizontal .checkbox, .form-horizontal .radio-inline, .form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 11px; }\n.form-horizontal .radio, .form-horizontal .checkbox {\n  min-height: 32px; }\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n.form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n.form-horizontal .form-group:after {\n    clear: both; }\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 11px; } }\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 19px;\n    font-size: 19px; } }\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 13px; } }\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 10px 18px;\n  font-size: 15px;\n  line-height: 1.42857;\n  border-radius: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n.btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n.btn:hover, .btn:focus, .btn.focus {\n    color: #fff;\n    text-decoration: none; }\n.btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n.btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none; }\na.btn.disabled, fieldset[disabled] a.btn {\n  pointer-events: none; }\n.btn-default {\n  color: #fff;\n  background-color: #222222;\n  border-color: #222222; }\n.btn-default:focus, .btn-default.focus {\n    color: #fff;\n    background-color: #090909;\n    border-color: black; }\n.btn-default:hover {\n    color: #fff;\n    background-color: #090909;\n    border-color: #040404; }\n.btn-default:active, .btn-default.active, .open > .btn-default.dropdown-toggle {\n    color: #fff;\n    background-color: #090909;\n    border-color: #040404; }\n.btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus, .open > .btn-default.dropdown-toggle:hover, .open > .btn-default.dropdown-toggle:focus, .open > .btn-default.dropdown-toggle.focus {\n      color: #fff;\n      background-color: black;\n      border-color: black; }\n.btn-default:active, .btn-default.active, .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n.btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus, fieldset[disabled] .btn-default:hover, fieldset[disabled] .btn-default:focus, fieldset[disabled] .btn-default.focus {\n    background-color: #222222;\n    border-color: #222222; }\n.btn-default .badge {\n    color: #222222;\n    background-color: #fff; }\n.btn-primary {\n  color: #fff;\n  background-color: #2780E3;\n  border-color: #2780E3; }\n.btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #1967be;\n    border-color: #10427b; }\n.btn-primary:hover {\n    color: #fff;\n    background-color: #1967be;\n    border-color: #1862b5; }\n.btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #1967be;\n    border-color: #1862b5; }\n.btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus, .open > .btn-primary.dropdown-toggle:hover, .open > .btn-primary.dropdown-toggle:focus, .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #15569f;\n      border-color: #10427b; }\n.btn-primary:active, .btn-primary.active, .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n.btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus, fieldset[disabled] .btn-primary:hover, fieldset[disabled] .btn-primary:focus, fieldset[disabled] .btn-primary.focus {\n    background-color: #2780E3;\n    border-color: #2780E3; }\n.btn-primary .badge {\n    color: #2780E3;\n    background-color: #fff; }\n.btn-success {\n  color: #fff;\n  background-color: #3FB618;\n  border-color: #3FB618; }\n.btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #2f8912;\n    border-color: #184509; }\n.btn-success:hover {\n    color: #fff;\n    background-color: #2f8912;\n    border-color: #2c8011; }\n.btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #2f8912;\n    border-color: #2c8011; }\n.btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus, .open > .btn-success.dropdown-toggle:hover, .open > .btn-success.dropdown-toggle:focus, .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #24690e;\n      border-color: #184509; }\n.btn-success:active, .btn-success.active, .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n.btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus, fieldset[disabled] .btn-success:hover, fieldset[disabled] .btn-success:focus, fieldset[disabled] .btn-success.focus {\n    background-color: #3FB618;\n    border-color: #3FB618; }\n.btn-success .badge {\n    color: #3FB618;\n    background-color: #fff; }\n.btn-info {\n  color: #fff;\n  background-color: #9954BB;\n  border-color: #9954BB; }\n.btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #7e3f9d;\n    border-color: #522967; }\n.btn-info:hover {\n    color: #fff;\n    background-color: #7e3f9d;\n    border-color: #783c96; }\n.btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #7e3f9d;\n    border-color: #783c96; }\n.btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus, .open > .btn-info.dropdown-toggle:hover, .open > .btn-info.dropdown-toggle:focus, .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #6a3484;\n      border-color: #522967; }\n.btn-info:active, .btn-info.active, .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n.btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus, fieldset[disabled] .btn-info:hover, fieldset[disabled] .btn-info:focus, fieldset[disabled] .btn-info.focus {\n    background-color: #9954BB;\n    border-color: #9954BB; }\n.btn-info .badge {\n    color: #9954BB;\n    background-color: #fff; }\n.btn-warning {\n  color: #fff;\n  background-color: #FF7518;\n  border-color: #FF7518; }\n.btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #e45c00;\n    border-color: #983d00; }\n.btn-warning:hover {\n    color: #fff;\n    background-color: #e45c00;\n    border-color: #da5800; }\n.btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #e45c00;\n    border-color: #da5800; }\n.btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus, .open > .btn-warning.dropdown-toggle:hover, .open > .btn-warning.dropdown-toggle:focus, .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #c04d00;\n      border-color: #983d00; }\n.btn-warning:active, .btn-warning.active, .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n.btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus, fieldset[disabled] .btn-warning:hover, fieldset[disabled] .btn-warning:focus, fieldset[disabled] .btn-warning.focus {\n    background-color: #FF7518;\n    border-color: #FF7518; }\n.btn-warning .badge {\n    color: #FF7518;\n    background-color: #fff; }\n.btn-danger {\n  color: #fff;\n  background-color: #FF0039;\n  border-color: #FF0039; }\n.btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #cc002e;\n    border-color: #80001d; }\n.btn-danger:hover {\n    color: #fff;\n    background-color: #cc002e;\n    border-color: #c2002b; }\n.btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #cc002e;\n    border-color: #c2002b; }\n.btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus, .open > .btn-danger.dropdown-toggle:hover, .open > .btn-danger.dropdown-toggle:focus, .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #a80026;\n      border-color: #80001d; }\n.btn-danger:active, .btn-danger.active, .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n.btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus, fieldset[disabled] .btn-danger:hover, fieldset[disabled] .btn-danger:focus, fieldset[disabled] .btn-danger.focus {\n    background-color: #FF0039;\n    border-color: #FF0039; }\n.btn-danger .badge {\n    color: #FF0039;\n    background-color: #fff; }\n.btn-link {\n  color: #2780E3;\n  font-weight: normal;\n  border-radius: 0; }\n.btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled], fieldset[disabled] .btn-link {\n    background-color: transparent;\n    box-shadow: none; }\n.btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n.btn-link:hover, .btn-link:focus {\n    color: #165ba8;\n    text-decoration: underline;\n    background-color: transparent; }\n.btn-link[disabled]:hover, .btn-link[disabled]:focus, fieldset[disabled] .btn-link:hover, fieldset[disabled] .btn-link:focus {\n    color: #999999;\n    text-decoration: none; }\n.btn-lg, .btn-group-lg > .btn {\n  padding: 18px 30px;\n  font-size: 19px;\n  line-height: 1.33333;\n  border-radius: 0; }\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 0; }\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 13px;\n  line-height: 1.5;\n  border-radius: 0; }\n.btn-block {\n  display: block;\n  width: 100%; }\n.btn-block + .btn-block {\n  margin-top: 5px; }\ninput[type=\"submit\"].btn-block, input[type=\"reset\"].btn-block, input[type=\"button\"].btn-block {\n  width: 100%; }\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear; }\n.fade.in {\n    opacity: 1; }\n.collapse {\n  display: none; }\n.collapse.in {\n    display: block; }\ntr.collapse.in {\n  display: table-row; }\ntbody.collapse.in {\n  display: table-row-group; }\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-property: height, visibility;\n  transition-duration: 0.35s;\n  transition-timing-function: ease; }\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n.dropup, .dropdown {\n  position: relative; }\n.dropdown-toggle:focus {\n  outline: 0; }\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 15px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n.dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n.dropdown-menu .divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n.dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #fff;\n  background-color: #2780E3; }\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #2780E3; }\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #999999; }\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n.open > .dropdown-menu {\n  display: block; }\n.open > a {\n  outline: 0; }\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 13px;\n  line-height: 1.42857;\n  color: #999999;\n  white-space: nowrap; }\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n.dropup .caret, .navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n.dropup .dropdown-menu, .navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n.btn-group, .btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n.btn-group > .btn, .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n.btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn:hover, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn.active {\n      z-index: 2; }\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n.btn-toolbar {\n  margin-left: -5px; }\n.btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n.btn-toolbar:after {\n    clear: both; }\n.btn-toolbar .btn, .btn-toolbar .btn-group, .btn-toolbar .input-group {\n    float: left; }\n.btn-toolbar > .btn, .btn-toolbar > .btn-group, .btn-toolbar > .input-group {\n    margin-left: 5px; }\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n.btn-group > .btn:last-child:not(:first-child), .btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.btn-group > .btn-group {\n  float: left; }\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.btn-group .dropdown-toggle:active, .btn-group.open .dropdown-toggle {\n  outline: 0; }\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n.btn-group.open .dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n.btn-group.open .dropdown-toggle.btn-link {\n    box-shadow: none; }\n.btn .caret {\n  margin-left: 0; }\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n.btn-group-vertical > .btn, .btn-group-vertical > .btn-group, .btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child, .btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n.btn-group-justified > .btn, .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n.btn-group-justified > .btn-group .btn {\n    width: 100%; }\n.btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"], [data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"], [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"], [data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n.input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n.input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n.input-group .form-control:focus {\n      z-index: 3; }\n.input-group-addon, .input-group-btn, .input-group .form-control {\n  display: table-cell; }\n.input-group-addon:not(:first-child):not(:last-child), .input-group-btn:not(:first-child):not(:last-child), .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n.input-group-addon, .input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n.input-group-addon {\n  padding: 10px 18px;\n  font-size: 15px;\n  font-weight: normal;\n  line-height: 1;\n  color: #333333;\n  text-align: center;\n  background-color: #e6e6e6;\n  border: 1px solid #ccc;\n  border-radius: 0; }\n.input-group-addon.input-sm, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 13px;\n    border-radius: 0; }\n.input-group-addon.input-lg, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 18px 30px;\n    font-size: 19px;\n    border-radius: 0; }\n.input-group-addon input[type=\"radio\"], .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n.input-group .form-control:first-child, .input-group-addon:first-child, .input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group > .btn, .input-group-btn:first-child > .dropdown-toggle, .input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n.input-group-addon:first-child {\n  border-right: 0; }\n.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group > .btn, .input-group-btn:last-child > .dropdown-toggle, .input-group-btn:first-child > .btn:not(:first-child), .input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.input-group-addon:last-child {\n  border-left: 0; }\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n.input-group-btn > .btn {\n    position: relative; }\n.input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n.input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n.input-group-btn:first-child > .btn, .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n.input-group-btn:last-child > .btn, .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n.nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n.nav:after {\n    clear: both; }\n.nav > li {\n    position: relative;\n    display: block; }\n.nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n.nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #e6e6e6; }\n.nav > li.disabled > a {\n      color: #999999; }\n.nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #999999;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n.nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #e6e6e6;\n    border-color: #2780E3; }\n.nav .nav-divider {\n    height: 1px;\n    margin: 9.5px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n.nav > li > a > img {\n    max-width: none; }\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n.nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n.nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 0 0 0 0; }\n.nav-tabs > li > a:hover {\n        border-color: #e6e6e6 #e6e6e6 #ddd; }\n.nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n.nav-pills > li {\n  float: left; }\n.nav-pills > li > a {\n    border-radius: 0; }\n.nav-pills > li + li {\n    margin-left: 2px; }\n.nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #2780E3; }\n.nav-stacked > li {\n  float: none; }\n.nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n.nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n.nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n.nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n@media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n.nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 0; }\n.nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n@media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 0 0 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a, .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover, .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n.tab-content > .tab-pane {\n  display: none; }\n.tab-content > .active {\n  display: block; }\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 21px;\n  border: 1px solid transparent; }\n.navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n.navbar:after {\n    clear: both; }\n@media (min-width: 768px) {\n    .navbar {\n      border-radius: 0; } }\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n.navbar-header:after {\n  clear: both; }\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n.navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n.navbar-collapse:after {\n    clear: both; }\n.navbar-collapse.in {\n    overflow-y: auto; }\n@media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n.navbar-fixed-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n@media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse, .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n.container > .navbar-header, .container > .navbar-collapse, .container-fluid > .navbar-header, .container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n@media (min-width: 768px) {\n    .container > .navbar-header, .container > .navbar-collapse, .container-fluid > .navbar-header, .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n@media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n.navbar-fixed-top, .navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n@media (min-width: 768px) {\n    .navbar-fixed-top, .navbar-fixed-bottom {\n      border-radius: 0; } }\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n.navbar-brand {\n  float: left;\n  padding: 14.5px 15px;\n  font-size: 19px;\n  line-height: 21px;\n  height: 50px; }\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n.navbar-brand > img {\n    display: block; }\n@media (min-width: 768px) {\n    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 0; }\n.navbar-toggle:focus {\n    outline: 0; }\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n.navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n@media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n.navbar-nav {\n  margin: 7.25px -15px; }\n.navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 21px; }\n@media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a, .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 21px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n@media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 14.5px;\n          padding-bottom: 14.5px; } }\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 3.5px;\n  margin-bottom: 3.5px; }\n@media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon, .navbar-form .input-group .input-group-btn, .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio, .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label, .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"], .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n@media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n@media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      box-shadow: none; } }\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n.navbar-btn {\n  margin-top: 3.5px;\n  margin-bottom: 3.5px; }\n.navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 9.5px;\n    margin-bottom: 9.5px; }\n.navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n.navbar-text {\n  margin-top: 14.5px;\n  margin-bottom: 14.5px; }\n@media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n.navbar-default {\n  background-color: #222222;\n  border-color: #121212; }\n.navbar-default .navbar-brand {\n    color: #fff; }\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #fff;\n      background-color: none; }\n.navbar-default .navbar-text {\n    color: #fff; }\n.navbar-default .navbar-nav > li > a {\n    color: #fff; }\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: #090909; }\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n.navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n.navbar-default .navbar-toggle {\n    border-color: transparent; }\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #090909; }\n.navbar-default .navbar-toggle .icon-bar {\n      background-color: #fff; }\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    border-color: #121212; }\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n@media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: #090909; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n.navbar-default .navbar-link {\n    color: #fff; }\n.navbar-default .navbar-link:hover {\n      color: #fff; }\n.navbar-default .btn-link {\n    color: #fff; }\n.navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #fff; }\n.navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus, fieldset[disabled] .navbar-default .btn-link:hover, fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n.navbar-inverse {\n  background-color: #2780E3;\n  border-color: #1967be; }\n.navbar-inverse .navbar-brand {\n    color: #fff; }\n.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: none; }\n.navbar-inverse .navbar-text {\n    color: #fff; }\n.navbar-inverse .navbar-nav > li > a {\n    color: #fff; }\n.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: #1967be; }\n.navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #1967be; }\n.navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #fff;\n    background-color: transparent; }\n.navbar-inverse .navbar-toggle {\n    border-color: transparent; }\n.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #1967be; }\n.navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form {\n    border-color: #1a6ecc; }\n.navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #1967be;\n    color: #fff; }\n@media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #1967be; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #1967be; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #fff; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: #1967be; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #1967be; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #fff;\n      background-color: transparent; } }\n.navbar-inverse .navbar-link {\n    color: #fff; }\n.navbar-inverse .navbar-link:hover {\n      color: #fff; }\n.navbar-inverse .btn-link {\n    color: #fff; }\n.navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n.navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus, fieldset[disabled] .navbar-inverse .btn-link:hover, fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #fff; }\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 21px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 0; }\n.breadcrumb > li {\n    display: inline-block; }\n.breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n.breadcrumb > .active {\n    color: #999999; }\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 21px 0;\n  border-radius: 0; }\n.pagination > li {\n    display: inline; }\n.pagination > li > a, .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 10px 18px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #2780E3;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n.pagination > li:first-child > a, .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n.pagination > li:last-child > a, .pagination > li:last-child > span {\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n.pagination > li > a:hover, .pagination > li > a:focus, .pagination > li > span:hover, .pagination > li > span:focus {\n    z-index: 2;\n    color: #165ba8;\n    background-color: #e6e6e6;\n    border-color: #ddd; }\n.pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus, .pagination > .active > span, .pagination > .active > span:hover, .pagination > .active > span:focus {\n    z-index: 3;\n    color: #999999;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n    cursor: default; }\n.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {\n    color: #999999;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n.pagination-lg > li > a, .pagination-lg > li > span {\n  padding: 18px 30px;\n  font-size: 19px;\n  line-height: 1.33333; }\n.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n.pagination-sm > li > a, .pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 13px;\n  line-height: 1.5; }\n.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n.pager {\n  padding-left: 0;\n  margin: 21px 0;\n  list-style: none;\n  text-align: center; }\n.pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n.pager:after {\n    clear: both; }\n.pager li {\n    display: inline; }\n.pager li > a, .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 0; }\n.pager li > a:hover, .pager li > a:focus {\n      text-decoration: none;\n      background-color: #e6e6e6; }\n.pager .next > a, .pager .next > span {\n    float: right; }\n.pager .previous > a, .pager .previous > span {\n    float: left; }\n.pager .disabled > a, .pager .disabled > a:hover, .pager .disabled > a:focus, .pager .disabled > span {\n    color: #999999;\n    background-color: #fff;\n    cursor: not-allowed; }\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n.label:empty {\n    display: none; }\n.btn .label {\n    position: relative;\n    top: -1px; }\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n.label-default {\n  background-color: #222222; }\n.label-default[href]:hover, .label-default[href]:focus {\n    background-color: #090909; }\n.label-primary {\n  background-color: #2780E3; }\n.label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #1967be; }\n.label-success {\n  background-color: #3FB618; }\n.label-success[href]:hover, .label-success[href]:focus {\n    background-color: #2f8912; }\n.label-info {\n  background-color: #9954BB; }\n.label-info[href]:hover, .label-info[href]:focus {\n    background-color: #7e3f9d; }\n.label-warning {\n  background-color: #FF7518; }\n.label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #e45c00; }\n.label-danger {\n  background-color: #FF0039; }\n.label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #cc002e; }\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 13px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #2780E3;\n  border-radius: 10px; }\n.badge:empty {\n    display: none; }\n.btn .badge {\n    position: relative;\n    top: -1px; }\n.btn-xs .badge, .btn-group-xs > .btn .badge, .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n.list-group-item.active > .badge, .nav-pills > .active > a > .badge {\n    color: #2780E3;\n    background-color: #fff; }\n.list-group-item > .badge {\n    float: right; }\n.list-group-item > .badge + .badge {\n    margin-right: 5px; }\n.nav-pills > li > a > .badge {\n    margin-left: 3px; }\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #e6e6e6; }\n.jumbotron h1, .jumbotron .h1 {\n    color: inherit; }\n.jumbotron p {\n    margin-bottom: 15px;\n    font-size: 23px;\n    font-weight: 200; }\n.jumbotron > hr {\n    border-top-color: #cccccc; }\n.container .jumbotron, .container-fluid .jumbotron {\n    border-radius: 0;\n    padding-left: 15px;\n    padding-right: 15px; }\n.jumbotron .container {\n    max-width: 100%; }\n@media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron, .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1, .jumbotron .h1 {\n        font-size: 68px; } }\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 21px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0;\n  transition: border 0.2s ease-in-out; }\n.thumbnail > img, .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n.thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\na.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active {\n  border-color: #2780E3; }\n.alert {\n  padding: 15px;\n  margin-bottom: 21px;\n  border: 1px solid transparent;\n  border-radius: 0; }\n.alert h4 {\n    margin-top: 0;\n    color: inherit; }\n.alert .alert-link {\n    font-weight: bold; }\n.alert > p, .alert > ul {\n    margin-bottom: 0; }\n.alert > p + p {\n    margin-top: 5px; }\n.alert-dismissable, .alert-dismissible {\n  padding-right: 35px; }\n.alert-dismissable .close, .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n.alert-success {\n  background-color: #3FB618;\n  border-color: #4e9f15;\n  color: #fff; }\n.alert-success hr {\n    border-top-color: #438912; }\n.alert-success .alert-link {\n    color: #e6e6e6; }\n.alert-info {\n  background-color: #9954BB;\n  border-color: #7643a8;\n  color: #fff; }\n.alert-info hr {\n    border-top-color: #693c96; }\n.alert-info .alert-link {\n    color: #e6e6e6; }\n.alert-warning {\n  background-color: #FF7518;\n  border-color: #ff4309;\n  color: #fff; }\n.alert-warning hr {\n    border-top-color: #ee3800; }\n.alert-warning .alert-link {\n    color: #e6e6e6; }\n.alert-danger {\n  background-color: #FF0039;\n  border-color: #f0005e;\n  color: #fff; }\n.alert-danger hr {\n    border-top-color: #d60054; }\n.alert-danger .alert-link {\n    color: #e6e6e6; }\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n.progress {\n  overflow: hidden;\n  height: 21px;\n  margin-bottom: 21px;\n  background-color: #ccc;\n  border-radius: 0;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 13px;\n  line-height: 21px;\n  color: #fff;\n  text-align: center;\n  background-color: #2780E3;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  transition: width 0.6s ease; }\n.progress-striped .progress-bar, .progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n.progress.active .progress-bar, .progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n.progress-bar-success {\n  background-color: #3FB618; }\n.progress-striped .progress-bar-success {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n.progress-bar-info {\n  background-color: #9954BB; }\n.progress-striped .progress-bar-info {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n.progress-bar-warning {\n  background-color: #FF7518; }\n.progress-striped .progress-bar-warning {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n.progress-bar-danger {\n  background-color: #FF0039; }\n.progress-striped .progress-bar-danger {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n.media {\n  margin-top: 15px; }\n.media:first-child {\n    margin-top: 0; }\n.media, .media-body {\n  zoom: 1;\n  overflow: hidden; }\n.media-body {\n  width: 10000px; }\n.media-object {\n  display: block; }\n.media-object.img-thumbnail {\n    max-width: none; }\n.media-right, .media > .pull-right {\n  padding-left: 10px; }\n.media-left, .media > .pull-left {\n  padding-right: 10px; }\n.media-left, .media-right, .media-body {\n  display: table-cell;\n  vertical-align: top; }\n.media-middle {\n  vertical-align: middle; }\n.media-bottom {\n  vertical-align: bottom; }\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n.list-group-item:first-child {\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\na.list-group-item, button.list-group-item {\n  color: #555; }\na.list-group-item .list-group-item-heading, button.list-group-item .list-group-item-heading {\n    color: #333; }\na.list-group-item:hover, a.list-group-item:focus, button.list-group-item:hover, button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #e6e6e6;\n  color: #999999;\n  cursor: not-allowed; }\n.list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n.list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #999999; }\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #2780E3;\n  border-color: #ddd; }\n.list-group-item.active .list-group-item-heading, .list-group-item.active .list-group-item-heading > small, .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading, .list-group-item.active:hover .list-group-item-heading > small, .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading, .list-group-item.active:focus .list-group-item-heading > small, .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n.list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #dceafa; }\n.list-group-item-success {\n  color: #fff;\n  background-color: #3FB618; }\na.list-group-item-success, button.list-group-item-success {\n  color: #fff; }\na.list-group-item-success .list-group-item-heading, button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\na.list-group-item-success:hover, a.list-group-item-success:focus, button.list-group-item-success:hover, button.list-group-item-success:focus {\n    color: #fff;\n    background-color: #379f15; }\na.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus, button.list-group-item-success.active, button.list-group-item-success.active:hover, button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n.list-group-item-info {\n  color: #fff;\n  background-color: #9954BB; }\na.list-group-item-info, button.list-group-item-info {\n  color: #fff; }\na.list-group-item-info .list-group-item-heading, button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\na.list-group-item-info:hover, a.list-group-item-info:focus, button.list-group-item-info:hover, button.list-group-item-info:focus {\n    color: #fff;\n    background-color: #8d46b0; }\na.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus, button.list-group-item-info.active, button.list-group-item-info.active:hover, button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n.list-group-item-warning {\n  color: #fff;\n  background-color: #FF7518; }\na.list-group-item-warning, button.list-group-item-warning {\n  color: #fff; }\na.list-group-item-warning .list-group-item-heading, button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\na.list-group-item-warning:hover, a.list-group-item-warning:focus, button.list-group-item-warning:hover, button.list-group-item-warning:focus {\n    color: #fff;\n    background-color: #fe6600; }\na.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus, button.list-group-item-warning.active, button.list-group-item-warning.active:hover, button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n.list-group-item-danger {\n  color: #fff;\n  background-color: #FF0039; }\na.list-group-item-danger, button.list-group-item-danger {\n  color: #fff; }\na.list-group-item-danger .list-group-item-heading, button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\na.list-group-item-danger:hover, a.list-group-item-danger:focus, button.list-group-item-danger:hover, button.list-group-item-danger:focus {\n    color: #fff;\n    background-color: #e60033; }\na.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus, button.list-group-item-danger.active, button.list-group-item-danger.active:hover, button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #fff;\n    border-color: #fff; }\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n.panel {\n  margin-bottom: 21px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 0;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n.panel-body {\n  padding: 15px; }\n.panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n.panel-body:after {\n    clear: both; }\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: -1;\n  border-top-left-radius: -1; }\n.panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 17px;\n  color: inherit; }\n.panel-title > a, .panel-title > small, .panel-title > .small, .panel-title > small > a, .panel-title > .small > a {\n    color: inherit; }\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1; }\n.panel > .list-group, .panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n.panel > .list-group .list-group-item, .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n.panel > .list-group:first-child .list-group-item:first-child, .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: -1;\n    border-top-left-radius: -1; }\n.panel > .list-group:last-child .list-group-item:last-child, .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: -1;\n    border-bottom-left-radius: -1; }\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n.list-group + .panel-footer {\n  border-top-width: 0; }\n.panel > .table, .panel > .table-responsive > .table, .panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n.panel > .table caption, .panel > .table-responsive > .table caption, .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n.panel > .table:first-child, .panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: -1;\n  border-top-left-radius: -1; }\n.panel > .table:first-child > thead:first-child > tr:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: -1;\n    border-top-right-radius: -1; }\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: -1; }\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child, .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: -1; }\n.panel > .table:last-child, .panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: -1;\n  border-bottom-left-radius: -1; }\n.panel > .table:last-child > tbody:last-child > tr:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: -1;\n    border-bottom-right-radius: -1; }\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: -1; }\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child, .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: -1; }\n.panel > .panel-body + .table, .panel > .panel-body + .table-responsive, .panel > .table + .panel-body, .panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n.panel > .table > tbody:first-child > tr:first-child th, .panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n.panel > .table-bordered, .panel > .table-responsive > .table-bordered {\n  border: 0; }\n.panel > .table-bordered > thead > tr > th:first-child, .panel > .table-bordered > thead > tr > td:first-child, .panel > .table-bordered > tbody > tr > th:first-child, .panel > .table-bordered > tbody > tr > td:first-child, .panel > .table-bordered > tfoot > tr > th:first-child, .panel > .table-bordered > tfoot > tr > td:first-child, .panel > .table-responsive > .table-bordered > thead > tr > th:first-child, .panel > .table-responsive > .table-bordered > thead > tr > td:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n.panel > .table-bordered > thead > tr > th:last-child, .panel > .table-bordered > thead > tr > td:last-child, .panel > .table-bordered > tbody > tr > th:last-child, .panel > .table-bordered > tbody > tr > td:last-child, .panel > .table-bordered > tfoot > tr > th:last-child, .panel > .table-bordered > tfoot > tr > td:last-child, .panel > .table-responsive > .table-bordered > thead > tr > th:last-child, .panel > .table-responsive > .table-bordered > thead > tr > td:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child, .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child, .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n.panel > .table-bordered > thead > tr:first-child > td, .panel > .table-bordered > thead > tr:first-child > th, .panel > .table-bordered > tbody > tr:first-child > td, .panel > .table-bordered > tbody > tr:first-child > th, .panel > .table-responsive > .table-bordered > thead > tr:first-child > td, .panel > .table-responsive > .table-bordered > thead > tr:first-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n.panel > .table-bordered > tbody > tr:last-child > td, .panel > .table-bordered > tbody > tr:last-child > th, .panel > .table-bordered > tfoot > tr:last-child > td, .panel > .table-bordered > tfoot > tr:last-child > th, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td, .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td, .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n.panel-group {\n  margin-bottom: 21px; }\n.panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 0; }\n.panel-group .panel + .panel {\n      margin-top: 5px; }\n.panel-group .panel-heading {\n    border-bottom: 0; }\n.panel-group .panel-heading + .panel-collapse > .panel-body, .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n.panel-group .panel-footer {\n    border-top: 0; }\n.panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n.panel-default {\n  border-color: #ddd; }\n.panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n.panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n.panel-primary {\n  border-color: #2780E3; }\n.panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #2780E3;\n    border-color: #2780E3; }\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #2780E3; }\n.panel-primary > .panel-heading .badge {\n      color: #2780E3;\n      background-color: #fff; }\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #2780E3; }\n.panel-success {\n  border-color: #4e9f15; }\n.panel-success > .panel-heading {\n    color: #fff;\n    background-color: #3FB618;\n    border-color: #4e9f15; }\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #4e9f15; }\n.panel-success > .panel-heading .badge {\n      color: #3FB618;\n      background-color: #fff; }\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #4e9f15; }\n.panel-info {\n  border-color: #7643a8; }\n.panel-info > .panel-heading {\n    color: #fff;\n    background-color: #9954BB;\n    border-color: #7643a8; }\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #7643a8; }\n.panel-info > .panel-heading .badge {\n      color: #9954BB;\n      background-color: #fff; }\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #7643a8; }\n.panel-warning {\n  border-color: #ff4309; }\n.panel-warning > .panel-heading {\n    color: #fff;\n    background-color: #FF7518;\n    border-color: #ff4309; }\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ff4309; }\n.panel-warning > .panel-heading .badge {\n      color: #FF7518;\n      background-color: #fff; }\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ff4309; }\n.panel-danger {\n  border-color: #f0005e; }\n.panel-danger > .panel-heading {\n    color: #fff;\n    background-color: #FF0039;\n    border-color: #f0005e; }\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #f0005e; }\n.panel-danger > .panel-heading .badge {\n      color: #FF0039;\n      background-color: #fff; }\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #f0005e; }\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n.embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 0;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n.well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n.well-lg {\n  padding: 24px;\n  border-radius: 0; }\n.well-sm {\n  padding: 9px;\n  border-radius: 0; }\n.close {\n  float: right;\n  font-size: 22.5px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n.close:hover, .close:focus {\n    color: #fff;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n.modal-open {\n  overflow: hidden; }\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n.modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n.modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    transform: translate(0, 0); }\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid transparent;\n  border-radius: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n.modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n.modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n.modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n.modal-header:after {\n    clear: both; }\n.modal-header .close {\n  margin-top: -2px; }\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n.modal-body {\n  position: relative;\n  padding: 20px; }\n.modal-footer {\n  padding: 20px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n.modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n.modal-footer:after {\n    clear: both; }\n.modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n.modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n.modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Source Sans Pro\", Calibri, Candara, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 13px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n.tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n.tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n.tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n.tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n.tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0; }\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Source Sans Pro\", Calibri, Candara, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 15px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n.popover.top {\n    margin-top: -10px; }\n.popover.right {\n    margin-left: 10px; }\n.popover.bottom {\n    margin-top: 10px; }\n.popover.left {\n    margin-left: -10px; }\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 15px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: -1 -1 0 0; }\n.popover-content {\n  padding: 9px 14px; }\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n.popover > .arrow {\n  border-width: 11px; }\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  bottom: -11px; }\n.popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n.popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: fadein(rgba(0, 0, 0, 0.2), 5%);\n  top: -11px; }\n.popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: fadein(rgba(0, 0, 0, 0.2), 5%); }\n.popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n.carousel {\n  position: relative; }\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n.carousel-inner > .item {\n    display: none;\n    position: relative;\n    transition: 0.6s ease-in-out left; }\n.carousel-inner > .item > img, .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n@media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        transition: -webkit-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n.carousel-inner > .active, .carousel-inner > .next, .carousel-inner > .prev {\n    display: block; }\n.carousel-inner > .active {\n    left: 0; }\n.carousel-inner > .next, .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n.carousel-inner > .next {\n    left: 100%; }\n.carousel-inner > .prev {\n    left: -100%; }\n.carousel-inner > .next.left, .carousel-inner > .prev.right {\n    left: 0; }\n.carousel-inner > .active.left {\n    left: -100%; }\n.carousel-inner > .active.right {\n    left: 100%; }\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n.carousel-control.left {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n.carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n.carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n.carousel-control .icon-prev, .carousel-control .icon-next, .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n.carousel-control .icon-prev, .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n.carousel-control .icon-next, .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n.carousel-control .icon-prev, .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n.carousel-control .icon-prev:before {\n    content: '\\2039'; }\n.carousel-control .icon-next:before {\n    content: '\\203A'; }\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n.carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n.carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n.carousel-caption .btn {\n    text-shadow: none; }\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right, .carousel-control .icon-prev, .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left, .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right, .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n.clearfix:after {\n  clear: both; }\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n.pull-right {\n  float: right !important; }\n.pull-left {\n  float: left !important; }\n.hide {\n  display: none !important; }\n.show {\n  display: block !important; }\n.invisible {\n  visibility: hidden; }\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.hidden {\n  display: none !important; }\n.affix {\n  position: fixed; }\n@-ms-viewport {\n  width: device-width; }\n.visible-xs {\n  display: none !important; }\n.visible-sm {\n  display: none !important; }\n.visible-md {\n  display: none !important; }\n.visible-lg {\n  display: none !important; }\n.visible-xs-block, .visible-xs-inline, .visible-xs-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-lg-block, .visible-lg-inline, .visible-lg-inline-block {\n  display: none !important; }\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs, td.visible-xs {\n    display: table-cell !important; } }\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm, td.visible-sm {\n    display: table-cell !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md, td.visible-md {\n    display: table-cell !important; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg, td.visible-lg {\n    display: table-cell !important; } }\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n.visible-print {\n  display: none !important; }\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print, td.visible-print {\n    display: table-cell !important; } }\n.visible-print-block {\n  display: none !important; }\n@media print {\n    .visible-print-block {\n      display: block !important; } }\n.visible-print-inline {\n  display: none !important; }\n@media print {\n    .visible-print-inline {\n      display: inline !important; } }\n.visible-print-inline-block {\n  display: none !important; }\n@media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n@media print {\n  .hidden-print {\n    display: none !important; } }\n.navbar-inverse .badge {\n  background-color: #fff;\n  color: #2780E3; }\nbody {\n  -webkit-font-smoothing: antialiased; }\n.text-primary, .text-primary:hover {\n  color: #2780E3; }\n.text-success, .text-success:hover {\n  color: #3FB618; }\n.text-danger, .text-danger:hover {\n  color: #FF0039; }\n.text-warning, .text-warning:hover {\n  color: #FF7518; }\n.text-info, .text-info:hover {\n  color: #9954BB; }\ntable a:not(.btn), .table a:not(.btn) {\n  text-decoration: underline; }\ntable .dropdown-menu a, .table .dropdown-menu a {\n  text-decoration: none; }\ntable .success, table .warning, table .danger, table .info, .table .success, .table .warning, .table .danger, .table .info {\n  color: #fff; }\ntable .success a, table .warning a, table .danger a, table .info a, .table .success a, .table .warning a, .table .danger a, .table .info a {\n    color: #fff; }\n.has-warning .help-block, .has-warning .control-label, .has-warning .radio, .has-warning .checkbox, .has-warning .radio-inline, .has-warning .checkbox-inline, .has-warning.radio label, .has-warning.checkbox label, .has-warning.radio-inline label, .has-warning.checkbox-inline label, .has-warning .form-control-feedback {\n  color: #FF7518; }\n.has-warning .form-control, .has-warning .form-control:focus, .has-warning .input-group-addon {\n  border: 1px solid #FF7518; }\n.has-error .help-block, .has-error .control-label, .has-error .radio, .has-error .checkbox, .has-error .radio-inline, .has-error .checkbox-inline, .has-error.radio label, .has-error.checkbox label, .has-error.radio-inline label, .has-error.checkbox-inline label, .has-error .form-control-feedback {\n  color: #FF0039; }\n.has-error .form-control, .has-error .form-control:focus, .has-error .input-group-addon {\n  border: 1px solid #FF0039; }\n.has-success .help-block, .has-success .control-label, .has-success .radio, .has-success .checkbox, .has-success .radio-inline, .has-success .checkbox-inline, .has-success.radio label, .has-success.checkbox label, .has-success.radio-inline label, .has-success.checkbox-inline label, .has-success .form-control-feedback {\n  color: #3FB618; }\n.has-success .form-control, .has-success .form-control:focus, .has-success .input-group-addon {\n  border: 1px solid #3FB618; }\n.nav-pills > li > a {\n  border-radius: 0; }\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  background-image: none; }\n.close {\n  text-decoration: none;\n  text-shadow: none;\n  opacity: 0.4; }\n.close:hover, .close:focus {\n    opacity: 1; }\n.alert {\n  border: none; }\n.alert .alert-link {\n    text-decoration: underline;\n    color: #fff; }\n.label {\n  border-radius: 0; }\n.progress {\n  height: 8px;\n  box-shadow: none; }\n.progress .progress-bar {\n    font-size: 8px;\n    line-height: 8px; }\n.panel-heading, .panel-footer {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n.panel-default .close {\n  color: #333333; }\na.list-group-item-success.active {\n  background-color: #3FB618; }\na.list-group-item-success.active:hover, a.list-group-item-success.active:focus {\n  background-color: #379f15; }\na.list-group-item-warning.active {\n  background-color: #FF7518; }\na.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus {\n  background-color: #fe6600; }\na.list-group-item-danger.active {\n  background-color: #FF0039; }\na.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus {\n  background-color: #e60033; }\n.modal .close {\n  color: #333333; }\n.popover {\n  color: #333333; }\n.gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80); }\n.gu-hide {\n  display: none !important; }\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important; }\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20); }\nsialia {\n  background-color: #f2f2f2; }\nsialia .sialia-body {\n    padding-top: 65px; }\nsialia h1 {\n    margin-bottom: 20px;\n    color: #666; }\nsialia .panel-heading h2 {\n    margin: 10px 0 15px; }\nsialia .panel .toggle-body {\n    z-index: 1;\n    color: #000; }\nsialia .alert-info {\n    font-size: .94em;\n    background-color: #eee;\n    padding: 15px;\n    color: #666; }\nsialia .document-info {\n    font-size: .8em;\n    margin-top: -15px; }\nsialia .header-name {\n    display: block; }\nsialia .header-date {\n    display: inline-block; }\nsialia .header-small {\n    font-size: .8em;\n    font-color: #ccc; }\nsialia .header-row {\n    border-bottom: 1px solid #eee;\n    margin: 0 10px 10px 10px;\n    padding-bottom: 5px; }\nsialia .table-borderless tbody tr td, sialia .table-borderless tbody tr th, sialia .table-borderless thead tr th {\n    border: none; }\nsialia .alert-mild {\n    background-color: #ffdc67;\n    border-color: #ffdc67;\n    color: #000; }\nsialia .alert-mild hr {\n      border-top-color: #ffd64e; }\nsialia .alert-mild .alert-link {\n      color: black; }\nsialia .reasons {\n    padding: 3px;\n    background-color: #fafafa;\n    border: 1px solid #eee; }\n@media (min-width: 768px) {\n    sialia #left {\n      position: fixed;\n      padding-right: 8px; }\n    sialia #right {\n      padding-left: 7px; }\n    sialia #jump-nav {\n      margin-right: 15px; } }\nsialia #demographics .fa-ul {\n    margin-left: 24px; }\nsialia #demographics address {\n    margin-bottom: 10px; }\nsialia .panel-heading {\n    position: relative; }\nsialia .panel-heading .toggle-body {\n      position: absolute;\n      bottom: 11px;\n      right: 15px; }\nsialia .panel-body > *:last-child, sialia .panel-heading > *:last-child {\n    margin-bottom: 0; }\n#demographics-summary sialia .panel-body > ul:last-child > li:last-child > *:last-child, sialia .panel-body > ul:last-child > li:last-child > *:last-child {\n    margin-bottom: 0; }\nsialia panel.collapsed .panel-body {\n    display: none; }\nsialia panel.expanded.fade {\n    opacity: 1; }\nsialia .section-icon {\n    margin-right: 8px; }\nsialia .section-item-count {\n    margin-left: 5px;\n    vertical-align: bottom; }\nsialia .badge-muted, sialia .panel-default > .panel-heading .badge-muted {\n    background-color: #bbb; }\nsialia preferences {\n    display: block; }\nsialia preferences h2 {\n      line-height: 44px; }\nsialia preference-section {\n    display: block; }\nsialia preference-section.gu-mirror {\n      cursor: -webkit-grabbing;\n      cursor: grabbing; }\nsialia .preferences-section {\n    cursor: move;\n    cursor: -webkit-grab;\n    cursor: grab; }\nsialia .section-toggle {\n    cursor: pointer; }\nsialia .section-toggle .fa {\n      transition: all 0.05s ease; }\nsialia .fade {\n    opacity: .45; }\nsialia list {\n    display: block; }\nsialia list item {\n      display: list-item;\n      list-style-type: none;\n      margin-bottom: 10px; }\nsialia list item content[id^=problem] {\n        display: block;\n        font-weight: bold; }\nsialia paragraph {\n    display: block; }\nsialia paragraph[stylecode=Bold] {\n      font-weight: bold; }\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff2");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.woff");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.ttf");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.svg");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(18);
__webpack_require__(19);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);
__webpack_require__(48);
__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(52);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('sialia', '<header data="{data}" sections="{sections}" documents="{documents}"></header> <div class="container-fluid sialia-body"> <div class="row"> <div class="col-lg-3 col-sm-4 hidden-xs" id="placeholder"></div> <div class="col-lg-3 col-sm-4" id="left"> <demographics demographics="{data.demographics}"></demographics> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showPreferences && !showNonXml}"> <preferences sections="{sections}" pref="{pref}"></preferences> </div> <div class="col-lg-9 col-sm-8" id="right" if="{!showPreferences && !showNonXml}"> <ccda-section each="{section in sections}" current="{section}" parent="{parent}"></ccda-section> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showNonXml}"> <nonxml nonxml="{data.document.type.nonXmlBody}"></nonxml> </div> </div> </div>', '', '', function(opts) {

    var self = this;
    this.data = opts.data;
    this.pref = opts.pref;
    this.sections = opts.sections;
    this.showPreferences = !opts.pref.isSet;
    this.showNonXml = false;
    this.documents = opts.documents;
    this.dictionary = this.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
    this.on('update', function() {

        self.showNonXml = self.data.document.type.nonXmlBody.type !== "";
    });
});

    
  

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_section__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_htmlhelpers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_htmlhelpers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utilities_htmlhelpers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__services__);

    var riot = __webpack_require__(0)
    






riot.tag2('preferences', '<h2> <button class="btn btn-primary pull-right" type="button" name="button" onclick="{save}">Save</button> Which sections would you like to see? <small> <a href="#" onclick="{enableAll}">all</a> | <a href="#" onclick="{disableAll}">none</a> (drag to sort)</small> </h2> <p class="alert-info" if="{!opts.pref.isSet}"> This is the first time you are setting up your section preferences for <b>{opts.pref.type.type} {opts.pref.type.displayName}</b> documents. You can order and select sections that are relevant for the care you are providing and we will save these for future use. </p> <ul class="list-group" id="preferences"> <preference-section each="{opts.sections}"></preference-section> </div>', '', '', function(opts) {
    var self = this;
    this.preferencesService = new __WEBPACK_IMPORTED_MODULE_5__services__["PreferencesService"]();

    this.on('mount', function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__models_section__["updateSortOrder"])();
      var container = document.getElementById('preferences');
      __WEBPACK_IMPORTED_MODULE_0_dragula___default()([container], {direction: 'vertical'}).on('drop', drop);
    });

    function drop(el) {
      var from = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(opts.sections, { key: el.key });
      var to = Object(__WEBPACK_IMPORTED_MODULE_4__utilities_htmlhelpers__["getElementIndex"])(el);
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.move(opts.sections, from, to);
      Object(__WEBPACK_IMPORTED_MODULE_3__models_section__["updateSortOrder"])();
      self.preferencesService.save(opts);
      self.update();
    }

    this.enableAll = function() {
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(opts.sections, function(s) {
        s.enabled = true;
      });
    }.bind(this)

    this.disableAll = function() {
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(opts.sections, function(s) {
        s.enabled = false;
      });
    }.bind(this)

    this.save = function() {
      this.parent.showPreferences = false;
      this.preferencesService.save(opts);
      riot.update();
    }.bind(this)

});

riot.tag2('preference-section', '<li class="list-group-item preferences-section text-right"> <label class="checkbox-inline pull-left"> <input type="checkbox" checked="{enabled}" onchange="{change}"> <i class="fa fa-{icon}"></i> {display} </label> <i class="fa fa-bars" title="Drag to sort"></i> </div>', '', '', function(opts) {
    this.root.key = this.key;

    this.change = function(e) {
      e.item.enabled = e.target.checked;
      this.update();
    }.bind(this)
});

    
  

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("dragula");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));
__export(__webpack_require__(5));
__export(__webpack_require__(23));
__export(__webpack_require__(24));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Document {
}
exports.Document = Document;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ViewerOptions {
}
exports.ViewerOptions = ViewerOptions;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(1);
class Preferences {
    constructor(pref) {
        this.id = pref.id;
        this.enabledSectionKeys = pref.enabledSectionKeys || [];
        this.sortedSectionKeys = pref.sortedSectionKeys || [];
        this.isSet = pref.isSet;
    }
    isSectionEnabled(key) {
        return lodash_1.default.some(this.enabledSectionKeys, (k) => {
            return k === key;
        });
    }
    indexOfSection(key) {
        return this.sortedSectionKeys.indexOf(key);
    }
}
exports.Preferences = Preferences;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __webpack_require__(7);
const lodash_1 = __webpack_require__(1);
const bluebutton_1 = __webpack_require__(26);
const Observable_1 = __webpack_require__(27);
const config_1 = __webpack_require__(28);
const preferences_service_1 = __webpack_require__(8);
let viewer;
class DocumentsService {
    getSections(bb, sections, ignoreSections, pref) {
        let allSections = [];
        lodash_1.default.each(bb.data, (val, key) => {
            if (lodash_1.default.includes(ignoreSections, key))
                return;
            let match = lodash_1.default.find(sections, s => s.key === key);
            if (match) {
                match.sort = pref.indexOfSection(key);
                allSections.push(match);
            }
            else
                allSections.push({
                    key: key,
                    display: val.displayName || key,
                    tagName: 'generic',
                    icon: 'asterisk',
                    sort: pref.indexOfSection(key)
                });
        });
        // sort by name first, then by sort order
        allSections = lodash_1.default.sortBy(allSections, s => s.display.toLowerCase());
        allSections = lodash_1.default.sortBy(allSections, s => s.sort);
        // init sort and enabled
        lodash_1.default.each(allSections, (val, index) => {
            val.enabled = pref.isSectionEnabled(val.key);
        });
        return allSections;
    }
    fetch(url) {
        return Observable_1.Observable.create((observer) => {
            jquery_1.default.get(url, (content) => {
                try {
                    let loadedData = this.load(content);
                    observer.next(loadedData);
                    observer.complete();
                }
                catch (e) {
                    observer.error(e);
                }
            }, 'text');
        });
    }
    loadRaw(data) {
        return Observable_1.Observable.create((observer) => {
            try {
                let loadedData = this.load(data);
                observer.next(loadedData);
                observer.complete();
            }
            catch (e) {
                observer.error(e);
            }
        });
    }
    load(data) {
        console.log(bluebutton_1.bluebutton);
        let bb = bluebutton_1.bluebutton(data);
        console.log(bb);
        if (!bb.data)
            throw 'BlueButton could not parse the file.';
        console.log(bb);
        let pref = new preferences_service_1.PreferencesService().getPreferences(bb.meta.identifiers[0]);
        return {
            sections: this.getSections(bb, config_1.SECTIONS, config_1.IGNORE_SECTIONS, pref),
            data: bb.data,
            pref: pref,
        };
    }
}
exports.DocumentsService = DocumentsService;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("bluebutton");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(1);
exports.SECTIONS = [
    { key: 'allergies', display: 'Allergies', tagName: 'allergies', icon: 'pagelines' },
    { key: 'care_plan', display: 'Care Plan', tagName: 'generic', icon: 'sticky-note-o' },
    { key: 'chief_complaint', display: 'Chief Complaint', tagName: 'generic', icon: 'bullhorn' },
    { key: 'encounters', display: 'Encounters', tagName: 'generic', icon: 'stethoscope' },
    { key: 'functional_statuses', display: 'Functional Status', tagName: 'generic', icon: 'wheelchair' },
    { key: 'immunization_declines', display: 'Declined Immunizations', tagName: 'generic', icon: 'ban' },
    { key: 'immunizations', display: 'Immunization', tagName: 'generic', icon: 'eyedropper' },
    { key: 'instructions', display: 'Patient Instructions', tagName: 'generic', icon: 'user-md' },
    { key: 'medications', display: 'Medications', tagName: 'medications', icon: 'medkit' },
    { key: 'problems', display: 'Problems', tagName: 'generic', icon: 'exclamation-triangle' },
    { key: 'procedures', display: 'Procedures', tagName: 'generic', icon: 'hospital-o' },
    { key: 'results', display: 'Results', tagName: 'generic', icon: 'flask' },
    { key: 'smoking_status', display: 'Smoking Status', tagName: 'generic', icon: 'fire' },
    { key: 'vitals', display: 'Vitals', tagName: 'generic', icon: 'heartbeat' },
];
exports.IGNORE_SECTIONS = ['document', 'demographics', 'json'];
let root = 'https://raw.githubusercontent.com/dougludlow/ccdaview/develop/docs/';
let fileNames = [
    'C-CDA_R2-1_CCD.xml',
    'C-CDA_R2_Care_Plan.xml',
    'CCD 1.xml',
    'Consult 1.xml',
    'DIR.sample.xml',
    'Discharge Summary 1.xml',
    'Final_Task_Force_Full_Sample_R1.1.xml',
    'HandP 1.xml',
    'Op Note 1.xml',
    'Proc Note 1.xml',
    'Progress Note 1.xml',
    'UD 1.xml',
    'UD 2.xml',
];
exports.DOCUMENTS = lodash_1.default.map(fileNames, (name) => ({
    name: name,
    url: `${root}${name}`
}));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('name', '<span>{opts.name.first} {opts.name.last}{possesive}</span>', '', '', function(opts) {
    if (opts.possesive) {
      this.possesive = opts.name.Last.slice(-1) === 's' ? '\'' : '\'s';
    }
});

    
  

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services__);

    var riot = __webpack_require__(0)
    



riot.tag2('header', '<nav class="navbar navbar-default navbar-fixed-top"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> {opts.data.header.title} - <name name="{opts.data.demographics.name}" class="text-muted"></name> </a> </div> <div class="collapse navbar-collapse" id="navbar-collapse-1"> <ul class="nav navbar-nav navbar-right" id="jump-nav"> <li class="dropdown"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Documents <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li each="{documents}" class="{active: active}"> <a href="#" onclick="{load}"> {Name} </a> </li> </ul> </li> <li class="dropdown"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Jump to <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li> <a href="#">Top</a> </li> <li role="separator" class="divider"></li> <li each="{opts.sections}"> <a href="#{key}"> <i class="fa fa-{icon}" aria-hidden="true"></i> {display} </a> </li> </ul> </li> <li class="{active: this.parent.showPreferences}"> <a href="#" onclick="{showPreferences}"> <i class="fa fa-lg fa-cog"></i> </a> </li> </ul> </div> </div> </nav>', '', '', function(opts) {


    this.documents = this.opts.documents;
    this.service = new __WEBPACK_IMPORTED_MODULE_1__services__["DocumentsService"]();
    this.documents[0].active = true;

    this.load = function(e) {
      this.toggleActive(e);
      this.service.fetch(e.item.Url).subscribe(function(options) {
        if (!options) return;
        if(!options.pref.isSet) {
          this.parent.showPreferences = true;
        };

        this.parent.update(options);
        riot.update();
      }.bind(this));
    }.bind(this)

    this.showPreferences = function() {
      this.parent.showPreferences = true;
      this.parent.update();
    }.bind(this)

    this.toggleActive = function(e) {
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(this.documents, function(d) {
        d.active = false;
      });
      e.item.active = true;
    }.bind(this)
});

    
  

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

    var riot = __webpack_require__(0)
    

riot.tag2('panel', '<div class="panel panel-{opts.state ? opts.state : \'default\'}" id="{opts.section.key}"> <div class="panel-heading section-toggle" onclick="{toggleSection}"> <h3 class="panel-title"> <i class="fa fa-{opts.section.icon} section-icon" aria-hidden="true" if="{!opts.hideicon}"></i> {opts.section.display} <span class="section-item-count badge badge-muted" if="{opts.data.entries.length}">{opts.data.entries.length}</span> <span class="text-muted" if="{isEmpty()}">(empty)</span> <span class="pull-right"> <i class="fa fa-chevron-down {fa-rotate-180: opts.section.enabled}" aria-hidden="true"></i> </span> </h3> </div> <div class="panel-body"> <yield></yield> </div> </div>', '', 'class="{opts.section.tagName}" class="{fade: isEmpty(), expanded: isEnabled(), collapsed: !isEnabled()}"', function(opts) {
    var current;

    this.on('update', function() {
      if (opts.data !== current) {
        current = opts.data;
        if(this.isEmpty()) opts.section.enabled = false;
      }
    }.bind(this));

    this.isEmpty = function() {
      return !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.get(opts, 'data.entries.length') && !opts.data.text;
    }.bind(this)

    this.isEnabled = function() {
      return opts.section.enabled || opts.enabled;
    }.bind(this)

    this.toggleSection = function() {
      opts.section.enabled = !opts.section.enabled;
    }.bind(this)
});

    
  

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('ccda-section', '', '', '', function(opts) {
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };

  riot.mount(this.root, opts.current.tagName, options);
  this.on('update', function() {
    options.data = opts.parent.data[opts.current.key];
  });
});

    
  

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__);

    var riot = __webpack_require__(0)
    
riot.tag2('raw', '<span></span>', '', '', function(opts) {

  this.on('update', function() {
    this.root.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__["bootstrapize"])(opts.content);
  }.bind(this));
});

    
  

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('nonxml', '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"> Document Attachment </h3> </div> <div class="panel-body"> The clinical document you are viewing has an attached document <b>{opts.nonxml.reference}</b>. Please download the document through your EMR. <br> </div>', '', '', function(opts) {
});
    
  

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('empty', '<span class="text-muted">This section is empty.</span>', '', '', function(opts) {
});

    
  

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('generic', '<panel section="{opts.section}" data="{opts.data}" data="{opts.data}"> <raw content="{opts.data.text}" if="{opts.data.text}"></raw> <empty if="{!opts.data.text}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_lang__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utilities_lang__);

    var riot = __webpack_require__(0)
    




riot.tag2('demographics', '<div class="panel panel-default" id="demographics"> <div class="panel-heading"> <h2><name name="{opts.demographics.name}"></name></h2> <a href="#" class="toggle-body" onclick="{toggle}"> <i class="fa fa-chevron-down {fa-rotate-180: visible}" title="Show/hide"></i> </a> <ul class="fa-ul"> <li class="dob"> <i class="fa fa-li fa-birthday-cake" title="DOB"></i> <p>{formatDate(opts.demographics.dob)}</p> </li> <li class="guardian" if="{opts.demographics.guardian.name.family}"> <i class="fa fa-li fa-child" title="Guardian"></i> <name name="{opts.demographics.guardian.name}"></name> <span class="text-muted">(guardian)</span> </li> </ul> </div> <div class="panel-body" show="{visible}"> <ul class="fa-ul"> <li class="narrative"> <i class="fa fa-li fa-female" title="Demographics"></i> <p> <strong>{opts.demographics.name.given[0]}</strong> is a <strong>{opts.demographics.marital_status} {opts.demographics.race} {opts.demographics.gender}</strong> whose religion is <strong>{opts.demographics.religion || \'unspecified\'}</strong> and speaks <strong>{formatLanguage(opts.demographics.language)}</strong>. </p> </li> <li> <i class="fa fa-li fa-map-marker" title="Address"></i> <address class="address"> {opts.demographics.address.street[0]}<br> {opts.demographics.address.city}, {opts.demographics.address.state} {opts.demographics.address.zip} </address> </li> <li> <i class="fa fa-li fa-phone" title="Phone"></i> <address class="phone"> {formatPhone(opts.demographics.phone)}</address> </li> <li if="{opts.demographics.provider.organization}"> <i class="fa fa-li fa-building" title="Provider"></i> <p>{opts.demographics.provider.organization}</p> </li> </ul> </div> </div>', '', '', function(opts) {
    this.visible = true;

    this.toggle = function() {
      this.visible = !this.visible;
    }.bind(this)

    this.formatDate = function(date) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).format('MMM D, YYYY');
    }.bind(this)

    this.formatPhone = function(phone) {

      var p = '';

      if (phone.work) {
        p = phone.work
      }
      if (phone.home) {
        p = phone.home;
      }
      if (phone.cell) {
        p = phone.cell;
      }

      var clean = "";

      for (var i = 0, len = p.length; i < len; i++) {
        if (!isNaN(p[i])) {
          clean = clean + p[i];
        }
      }

      if (clean.length > 10) {
        if (clean[0] == '1') {
          clean = clean.slice(1);
        }
      }

      var pretty = '';
      if (clean.length == 10) {
        var c = clean;
        pretty = '(' + c[0] + c[1] + c[2] + ') ' + c[3] + c[4] + c[5] + '-' + c[6] + c[7] + c[8] + c[9];
      }
      return pretty;
    }.bind(this)

    this.formatLanguage = function(languageCode) {
      return languageCode && __WEBPACK_IMPORTED_MODULE_3__utilities_lang__["languages"][languageCode.toLowerCase()] || 'an uknown language';
    }.bind(this)

});

    
  

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.languages = {
    'aa': 'Afar',
    'aar': 'Afar',
    'ab': 'Abkhazian',
    'abk': 'Abkhazian',
    'af': 'Afrikaans',
    'afr': 'Afrikaans',
    'am': 'Amharic',
    'amh': 'Amharic',
    'ar': 'Arabic',
    'ara': 'Arabic',
    'as': 'Assamese',
    'asm': 'Assamese',
    'ay': 'Aymara',
    'aym': 'Aymara',
    'az': 'Azerbaijani',
    'aze': 'Azerbaijani',
    'ba': 'Bashkir',
    'bak': 'Bashkir',
    'be': 'Byelorussian (Belarusian)',
    'bel': 'Byelorussian (Belarusian)',
    'bg': 'Bulgarian',
    'bul': 'Bulgarian',
    'bh': 'Bihari',
    'bih': 'Bihari',
    'bi': 'Bislama',
    'bis': 'Bislama',
    'bn': 'Bengali (Bangla)',
    'ben': 'Bengali (Bangla)',
    'bo': 'Tibetan',
    'bod': 'Tibetan',
    'br': 'Breton',
    'bre': 'Breton',
    'ca': 'Catalan',
    'cat': 'Catalan',
    'co': 'Corsican',
    'cos': 'Corsican',
    'cs': 'Czech',
    'ces': 'Czech',
    'cy': 'Welsh',
    'cym': 'Welsh',
    'da': 'Danish',
    'dan': 'Danish',
    'de': 'German',
    'deu': 'German',
    'dz': 'Bhutani',
    'dzo': 'Bhutani',
    'el': 'Greek',
    'ell': 'Greek',
    'en': 'English',
    'eng': 'English',
    'eo': 'Esperanto',
    'epo': 'Esperanto',
    'es': 'Spanish',
    'spa': 'Spanish',
    'et': 'Estonian',
    'est': 'Estonian',
    'eu': 'Basque',
    'euq': 'Basque',
    'fa': 'Farsi',
    'fas': 'Farsi',
    'fi': 'Finnish',
    'fin': 'Finnish',
    'fj': 'Fijian',
    'fij': 'Fijian',
    'fo': 'Faeroese',
    'fr': 'French',
    'fra': 'French',
    'fy': 'Frisian',
    'fry': 'Frisian',
    'ga': 'Irish',
    'gle': 'Irish',
    'gd': 'Gaelic (Scottish)',
    'gla': 'Gaelic (Scottish)',
    'gl': 'Galician',
    'glg': 'Galician',
    'gn': 'Guarani',
    'grn': 'Guarani',
    'gu': 'Gujarati',
    'guj': 'Gujarati',
    // marker - need iso 639-2 for remaining langages
    'gv': 'Gaelic (Manx)',
    'ha': 'Hausa',
    'he': 'Hebrew',
    'hi': 'Hindi',
    'hr': 'Croatian',
    'hu': 'Hungarian',
    'hy': 'Armenian',
    'ia': 'Interlingua',
    'id': 'Indonesian',
    'ie': 'Interlingue',
    'ik': 'Inupiak',
    'is': 'Icelandic',
    'it': 'Italian',
    'iu': 'Inuktitut',
    'ja': 'Japanese',
    // 'ja': 'Javanese',
    'ka': 'Georgian',
    'kk': 'Kazakh',
    'kl': 'Greenlandic',
    'km': 'Cambodian',
    'kn': 'Kannada',
    'ko': 'Korean',
    'ks': 'Kashmiri',
    'ku': 'Kurdish',
    'ky': 'Kirghiz',
    'la': 'Latin',
    'li': 'Limburgish ( Limburger)',
    'ln': 'Lingala',
    'lo': 'Laothian',
    'lt': 'Lithuanian',
    'lv': 'Latvian (Lettish)',
    'mg': 'Malagasy',
    'mi': 'Maori',
    'mk': 'Macedonian',
    'ml': 'Malayalam',
    'mn': 'Mongolian',
    'mo': 'Moldavian',
    'mr': 'Marathi',
    'ms': 'Malay',
    'mt': 'Maltese',
    'my': 'Burmese',
    'na': 'Nauru',
    'ne': 'Nepali',
    'nl': 'Dutch',
    'no': 'Norwegian',
    'oc': 'Occitan',
    'om': 'Oromo (Afan, Galla)',
    'or': 'Oriya',
    'pa': 'Punjabi',
    'pl': 'Polish',
    'ps': 'Pashto (Pushto)',
    'pt': 'Portuguese',
    'qu': 'Quechua',
    'rm': 'Rhaeto-Romance',
    'rn': 'Kirundi (Rundi)',
    'ro': 'Romanian',
    'ru': 'Russian',
    'rw': 'Kinyarwanda (Ruanda)',
    'sa': 'Sanskrit',
    'sd': 'Sindhi',
    'sg': 'Sangro',
    'sh': 'Serbo-Croatian',
    'si': 'Sinhalese',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'sm': 'Samoan',
    'sn': 'Shona',
    'so': 'Somali',
    'sq': 'Albanian',
    'sr': 'Serbian',
    'ss': 'Siswati',
    'st': 'Sesotho',
    'su': 'Sundanese',
    'sv': 'Swedish',
    'sw': 'Swahili (Kiswahili)',
    'ta': 'Tamil',
    'te': 'Telugu',
    'tg': 'Tajik',
    'th': 'Thai',
    'ti': 'Tigrinya',
    'tk': 'Turkmen',
    'tl': 'Tagalog',
    'tn': 'Setswana',
    'to': 'Tonga',
    'tr': 'Turkish',
    'ts': 'Tsonga',
    'tt': 'Tatar',
    'tw': 'Twi',
    'ug': 'Uighur',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'vo': 'Volapük',
    'wo': 'Wolof',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    // 'zh': 'Chinese (Simplified)',
    // 'zh': 'Chinese (Traditional)',
    'zh': 'Chinese',
    'zu': 'Zulu',
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('allergies', '<panel section="{opts.section}" data="{opts.data}"> <div class="row" if="{opts.data.entries.length}"> <div each="{opts.data.entries}" class="col-sm-4"> <div class="alert alert-mild clearfix " role="alert"> <h4>{allergen.name}</h4> <div class="pull-left">{reaction.name}</div> <div class="pull-right">{severity}</div> </div> </div> </div> <empty if="{!opts.dat.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('care-plan', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('chief-complaint', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('encounters', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('functional-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunization-declines', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunizations', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('instructions', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

    var riot = __webpack_require__(0)
    

riot.tag2('medications', '<panel section="{opts.section}" data="{opts.data}"> <div each="{opts.data.entries}"> <div class="row"> <div class="col-md-12"> <div class="header-row"> {text} <span class="header-date pull-right"> <span class="header-small">{date_range.start_display} - {date_range.end_display} </span> </div> </div> </div> <div class="row"> <div class="col-md-12"> </div> </div> <div class="row"> <div class="col-md-4"> <table class="table table-borderless"> <tbody> <tr> <th> <span class="header-small">Admin</span> </th> <td> <span>{administration.name} [{administration.code}]</span> </td> </tr> <tr> <th> <span class="header-small">Schedule</span> </th> <td> <span>{schedule.type} {schedule.period_value}{schedule.period_unit}</span> </td> </tr> <tr> <th> <span class="header-small">Dose</span> </th> <td> <span>{dose_quantity.value} {dose_quantity.unit}</span> </td> </tr> <tr> <th scope="row"> <span class="header-small">Rate</span> </th> <td> <span>{rate_quantity.value} {rate_quantity.unit}</span> </td> </tr> </tbody> </table> </div> <div class="col-md-4"> <table class="table table-borderless"> <tbody> <tr> <th> <span class="header-small">Route</span> </th> <td> <span>{route.name}</span> </td> </tr> <tr> <th> <span class="header-small">Vehicle</span> </th> <td> <span>{vehicle.name} [{vehicle.code_system_name} {vehicle.code}]</span> </td> </tr> <tr> <th> <span class="header-small">Prescriber</span> </th> <td> <span>{prescriber.organization}</span> </td> </tr> <tr> </tr> </tbody> </table> </div> <div class="col-md-4"> <span class="header-small"><b>Reason</b></span> <p class="reasons">{reason.name}</p> </div> </div> </div> </panel>', '', '', function(opts) {

        this.on('update', function() {
            _.each(opts.data.entries, function(e) {
                e.date_range.start_display =  __WEBPACK_IMPORTED_MODULE_0_moment___default()(e.date_range.start).format('MMM D, YYYY');
                e.date_range.end_display =  __WEBPACK_IMPORTED_MODULE_0_moment___default()(e.date_range.end).format('MMM D, YYYY');
            });
        })

});

    
  

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('problems', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('procedures', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('results', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('smoking-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('vitals', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass");

/***/ })
/******/ ]);
//# sourceMappingURL=sialia.js.map
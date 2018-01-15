exports["sialia"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(5);
var lodash_1 = __webpack_require__(0);
var PreferencesService = /** @class */ (function () {
    function PreferencesService() {
    }
    PreferencesService.prototype.save = function (opts) {
        var enabled = lodash_1.default.filter(opts.sections, function (item) {
            return item.enabled;
        });
        var sortOrder = lodash_1.default.map(opts.sections, function (item) {
            return item.key;
        });
        var pref = this.getPreferences(opts.pref.type);
        pref.enabledSectionKeys = lodash_1.default.map(enabled, function (item) {
            return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;
        var storageId = 'doc_' + opts.pref.type.templateId;
        localStorage.setItem(storageId, JSON.stringify(pref));
    };
    PreferencesService.prototype.getPreferences = function (docType) {
        var id = docType.templateId, storageId = 'doc_' + id, prefString = localStorage.getItem(storageId), pref = JSON.parse(prefString), isSet = pref !== null;
        if (!isSet) {
            pref = {
                id: id,
                isSet: isSet,
                type: docType,
                enabledSectionKeys: null,
                sortedSectionKeys: null
            };
        }
        return new models_1.Preferences(pref);
    };
    return PreferencesService;
}());
exports.PreferencesService = PreferencesService;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var riot_1 = __webpack_require__(3);
var services_1 = __webpack_require__(4);
var Sialia = /** @class */ (function () {
    function Sialia(options) {
        this.service = new services_1.DocumentsService();
        var documents = options.docs;
        this.service.fetch(documents[0].Url).then(function (options) {
            options.documents = documents;
            riot_1.default.mount('sialia', options);
        });
    }
    return Sialia;
}());
exports.Sialia = Sialia;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("riot");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(10));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(7));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Document = /** @class */ (function () {
    function Document() {
    }
    return Document;
}());
exports.Document = Document;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(0);
function updateSortOrder(sections) {
    lodash_1.default.each(sections, function (v, k) {
        v.sort = k;
    });
    return sections;
}
exports.updateSortOrder = updateSortOrder;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ViewerOptions = /** @class */ (function () {
    function ViewerOptions() {
    }
    return ViewerOptions;
}());
exports.ViewerOptions = ViewerOptions;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(0);
var Preferences = /** @class */ (function () {
    function Preferences(pref) {
        this.id = pref.id;
        this.type = pref.type;
        this.enabledSectionKeys = pref.enabledSectionKeys || [];
        this.sortedSectionKeys = pref.sortedSectionKeys || [];
        this.isSet = pref.isSet;
    }
    Preferences.prototype.isSectionEnabled = function (key) {
        return lodash_1.default.some(this.enabledSectionKeys, function (k) {
            return k === key;
        });
    };
    Preferences.prototype.indexOfSection = function (key) {
        return this.sortedSectionKeys.indexOf(key);
    };
    return Preferences;
}());
exports.Preferences = Preferences;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __webpack_require__(11);
var lodash_1 = __webpack_require__(0);
var bluebutton_1 = __webpack_require__(12);
var config_1 = __webpack_require__(13);
var preferences_service_1 = __webpack_require__(1);
var viewer;
var DocumentsService = /** @class */ (function () {
    function DocumentsService() {
    }
    DocumentsService.prototype.getSections = function (bb, sections, ignoreSections, pref) {
        var allSections = [];
        lodash_1.default.each(bb.data, function (val, key) {
            if (lodash_1.default.includes(ignoreSections, key))
                return;
            var match = lodash_1.default.find(sections, function (s) { return s.key === key; });
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
        allSections = lodash_1.default.sortBy(allSections, function (s) { return s.display.toLowerCase(); });
        allSections = lodash_1.default.sortBy(allSections, function (s) { return s.sort; });
        // init sort and enabled
        lodash_1.default.each(allSections, function (val, index) {
            val.enabled = pref.isSectionEnabled(val.key);
        });
        return allSections;
    };
    DocumentsService.prototype.fetch = function (url) {
        var _this = this;
        return new Promise(function (resolve) {
            jquery_1.default.get(url, function (content) {
                resolve(_this.load(content));
            }, 'text');
        });
    };
    DocumentsService.prototype.load = function (data) {
        var bb = bluebutton_1.bluebutton(data);
        if (!bb.data)
            throw 'BlueButton could not parse the file.';
        var pref = new preferences_service_1.PreferencesService().getPreferences(bb.data.document.type);
        return {
            sections: this.getSections(bb, config_1.SECTIONS, config_1.IGNORE_SECTIONS, pref),
            data: bb.data,
            pref: pref,
        };
    };
    return DocumentsService;
}());
exports.DocumentsService = DocumentsService;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bluebutton");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ })
/******/ ]);
//# sourceMappingURL=sialia.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
__export(__webpack_require__(7));
__export(__webpack_require__(19));


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(1);
function updateSortOrder(sections) {
    lodash_1.default.each(sections, (v, k) => {
        v.sort = k;
    });
    return sections;
}
exports.updateSortOrder = updateSortOrder;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash = __webpack_require__(1);
const jquery_1 = __webpack_require__(6);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __webpack_require__(15);
const lodash_1 = __webpack_require__(1);
class PreferencesService {
    save(opts) {
        let enabled = lodash_1.default.filter(opts.sections, (item) => {
            return item.enabled;
        });
        let sortOrder = lodash_1.default.map(opts.sections, (item) => {
            return item.key;
        });
        let pref = this.getPreferences(opts.pref.type);
        pref.enabledSectionKeys = lodash_1.default.map(enabled, (item) => {
            return item.key;
        });
        pref.sortedSectionKeys = sortOrder;
        pref.isSet = true;
        let storageId = 'doc_' + opts.pref.type.templateId;
        localStorage.setItem(storageId, JSON.stringify(pref));
    }
    getPreferences(docType) {
        let id = docType.templateId, storageId = 'doc_' + id, prefString = localStorage.getItem(storageId), pref = JSON.parse(prefString), isSet = pref !== null;
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
    }
}
exports.PreferencesService = PreferencesService;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(48);
const riot_1 = __webpack_require__(0);
const services_1 = __webpack_require__(2);
class App {
    constructor(options) {
        this.service = new services_1.DocumentsService();
        let documents = options.docs;
        this.service.fetch(documents[0].Url).subscribe((options) => {
            options.documents = documents;
            riot_1.default.mount('sialia', options);
        });
    }
}
exports.App = App;
window['Sialia'] = App;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(24);
__webpack_require__(25);
__webpack_require__(26);
__webpack_require__(27);
__webpack_require__(28);
__webpack_require__(29);
__webpack_require__(30);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(34);
__webpack_require__(35);
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
__webpack_require__(44);
__webpack_require__(45);
__webpack_require__(46);
__webpack_require__(47);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('sialia', '<header data="{data}" sections="{sections}" documents="{documents}"></header> <div class="container-fluid sialia-body"> <div class="row"> <div class="col-lg-3 col-sm-4 hidden-xs" id="placeholder"></div> <div class="col-lg-3 col-sm-4" id="left"> <demographics demographics="{data.demographics}"></demographics> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showPreferences && !showNonXml}"> <preferences sections="{sections}" pref="{pref}"></preferences> </div> <div class="col-lg-9 col-sm-8" id="right" if="{!showPreferences && !showNonXml}"> <ccda-section each="{section in sections}" current="{section}" parent="{parent}"></ccda-section> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showNonXml}"> <nonxml nonxml="{data.document.type.nonXmlBody}"></nonxml> </div> </div> </div>', '', '', function(opts) {

    var self = this;
    this.data = opts.data;
    this.pref = opts.pref;
    this.sections = [opts.sections[0]];
    console.log("Sections: ", this.sections);
    this.showPreferences = !opts.pref.isSet;
    this.showNonXml = self.data.document.type.nonXmlBody.type;
    this.documents = opts.documents;
    console.log("Documents: ", this.documents);
    this.dictionary = this.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
    this.on('update', function() {

        // ML - Not showing preferences when the body type is nonXmL.  We just want to show
        // a link to the document.
        self.showNonXml = self.data.document.type.nonXmlBody.type !== "";
    });
});

    
  

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_section__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utilities_htmlhelpers__ = __webpack_require__(5);
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
    }

    this.disableAll = function() {
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(opts.sections, function(s) {
        s.enabled = false;
      });
    }

    this.save = function() {
      this.parent.showPreferences = false;
      this.preferencesService.save(opts);
      riot.update();
    }

});

riot.tag2('preference-section', '<li class="list-group-item preferences-section text-right"> <label class="checkbox-inline pull-left"> <input type="checkbox" checked="{enabled}" onchange="{change}"> <i class="fa fa-{icon}"></i> {display} </label> <i class="fa fa-bars" title="Drag to sort"></i> </div>', '', '', function(opts) {
    this.root.key = this.key;

    this.change = function(e) {
      e.item.enabled = e.target.checked;
      this.update();
    }
});

    
  

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("dragula");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));
__export(__webpack_require__(4));
__export(__webpack_require__(17));
__export(__webpack_require__(18));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Document {
}
exports.Document = Document;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ViewerOptions {
}
exports.ViewerOptions = ViewerOptions;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(1);
class Preferences {
    constructor(pref) {
        this.id = pref.id;
        this.type = pref.type;
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __webpack_require__(6);
const lodash_1 = __webpack_require__(1);
const bluebutton_1 = __webpack_require__(20);
const Observable_1 = __webpack_require__(22);
const config_1 = __webpack_require__(23);
const preferences_service_1 = __webpack_require__(7);
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
                observer.next(this.load(content));
                observer.complete();
            }, 'text');
        });
    }
    load(data) {
        let bb = bluebutton_1.bluebutton(data);
        if (!bb.data)
            throw 'BlueButton could not parse the file.';
        let pref = new preferences_service_1.PreferencesService().getPreferences(bb.data.document.type);
        return {
            sections: this.getSections(bb, config_1.SECTIONS, config_1.IGNORE_SECTIONS, pref),
            data: bb.data,
            pref: pref,
        };
    }
}
exports.DocumentsService = DocumentsService;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports["bluebutton"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * ...
 */

var Codes = __webpack_require__(6);
var XML = __webpack_require__(7);
var { stripWhitespace } = __webpack_require__(3);

/* exported Core */
module.exports = {
  parseData: parseData,
  stripWhitespace: stripWhitespace,
  json: json,
  trim: trim,
  Codes: Codes,
  XML: XML
};
/*
  * ...
  */
function parseData(source) {
  source = stripWhitespace(source);
  
  if (source.charAt(0) === '<') {
    try {
      return XML.parse(source);
    } catch (e) {
      if (console.log) {
        console.log("File looked like it might be XML but couldn't be parsed.");
      }
    }
  }

  try {
    return JSON.parse(source);
  } catch (e) {
    if (console.error) {
      console.error("Error: Cannot parse this file. BB.js only accepts valid XML " +
        "(for parsing) or JSON (for generation). If you are attempting to provide " +
        "XML or JSON, please run your data through a validator to see if it is malformed.\n");
    }
    throw e;
  }
};

/*
  * A wrapper around JSON.stringify which allows us to produce customized JSON.
  *
  * See https://developer.mozilla.org/en-US/docs/Web/
  *        JavaScript/Guide/Using_native_JSON#The_replacer_parameter
  * for documentation on the replacerFn.
  */
function json() {

  var datePad = function(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  };
  
  var replacerFn = function(key, value) {
    /* By default, Dates are output as ISO Strings like "2014-01-03T08:00:00.000Z." This is
      * tricky when all we have is a date (not a datetime); JS sadly ignores that distinction.
      *
      * To paper over this JS wart, we use two different JSON formats for dates and datetimes.
      * This is a little ugly but makes sure that the dates/datetimes mostly just parse
      * correclty for clients:
      *
      * 1. Datetimes are rendered as standard ISO strings, without the misleading millisecond
      *    precision (misleading because we don't have it): YYYY-MM-DDTHH:mm:ssZ
      * 2. Dates are rendered as MM/DD/YYYY. This ensures they are parsed as midnight local-time,
      *    no matter what local time is, and therefore ensures the date is always correct.
      *    Outputting "YYYY-MM-DD" would lead most browsers/node to assume midnight UTC, which
      *    means "2014-04-27" suddenly turns into "04/26/2014 at 5PM" or just "04/26/2014"
      *    if you format it as a date...
      *
      * See http://stackoverflow.com/questions/2587345/javascript-date-parse and
      *     http://blog.dygraphs.com/2012/03/javascript-and-dates-what-mess.html
      * for more on this issue.
      */
    var originalValue = this[key]; // a Date

    if ( value && (originalValue instanceof Date) && !isNaN(originalValue.getTime()) ) {

      // If while parsing we indicated that there was time-data specified, or if we see
      // non-zero values in the hour/minutes/seconds/millis fields, output a datetime.
      if (originalValue._parsedWithTimeData ||
          originalValue.getHours() || originalValue.getMinutes() ||
          originalValue.getSeconds() || originalValue.getMilliseconds()) {

        // Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/
        //    Reference/Global_Objects/Date/toISOString
        return originalValue.getUTCFullYear() +
          '-' + datePad( originalValue.getUTCMonth() + 1 ) +
          '-' + datePad( originalValue.getUTCDate() ) +
          'T' + datePad( originalValue.getUTCHours() ) +
          ':' + datePad( originalValue.getUTCMinutes() ) +
          ':' + datePad( originalValue.getUTCSeconds() ) +
          'Z';
      }
      
      // We just have a pure date
      return datePad( originalValue.getMonth() + 1 ) +
        '/' + datePad( originalValue.getDate() ) +
        '/' + originalValue.getFullYear();

    }

    return value;
  };
  
  return JSON.stringify(this, replacerFn, 2);
};


/*
  * Removes all `null` properties from an object.
  */
function trim(o) {
  var y;
  for (var x in o) {
    if (o.hasOwnProperty(x)) {
      y = o[x];
      // if (y === null || (y instanceof Object && Object.keys(y).length == 0)) {
      if (y === null) {
        delete o[x];
      }
      if (y instanceof Object) y = trim(y);
    }
  }
  return o;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* Parses out basic data about each section */

module.exports = function (ccda, data) {

    var each = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    };

    var containsTemplateId = function(templateId, data) {
        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                var p = data[property].templateId;
                //var display = this[property].displayName;
                if(p) {
                    if(p === templateId) {
                        //console.log("TemplateId Match " + templateId + " " + display);
                        return true;
                    }
                }
            }
        }
        return false;
    };

    var allSections = ccda.elsByTag('section');
    allSections.each = each;

    allSections.each(function(s) {

        var code = s.tag('code').attr('displayName');
        var templateId =  s.tag('templateId').attr('root');

        var existingTemplateId = containsTemplateId(templateId, data);

        if (code) {
            var nodeName = code.split(' ').join('_').toLowerCase();

            //console.log("NODE NAME " + nodeName);

            if (!data[nodeName] && !existingTemplateId) {
                //console.log("CREATE NODE " + code);
                data[nodeName] = {};
            }

            if(data[nodeName]) {
                data[nodeName].displayName = code;
                data[nodeName].templateId = templateId;
                data[nodeName].text = s.tag('text').val(true);
            }

        }
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA demographics section
 */
var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.demographics = demographics;

  function demographics(ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data = {}, el;
    
    var demographics = ccda.section('demographics');
    
    var patient = demographics.tag('patientRole');
    el = patient.tag('patient').tag('name');
    var patient_name_dict = parseName(el);
    
    el = patient.tag('patient');
    var dob = parseDate(el.tag('birthTime').attr('value')),
        gender = Core.Codes.gender(el.tag('administrativeGenderCode').attr('code')),
        marital_status = Core.Codes.maritalStatus(el.tag('maritalStatusCode').attr('code'));
    
    el = patient.tag('addr');
    var patient_address_dict = parseAddress(el);
    
    el = patient.tag('telecom');
    var home = el.attr('value'),
        work = null,
        mobile = null;
    
    var email = null;
    
    var language = patient.tag('languageCommunication').tag('languageCode').attr('code'),
        race = patient.tag('raceCode').attr('displayName'),
        ethnicity = patient.tag('ethnicGroupCode').attr('displayName'),
        religion = patient.tag('religiousAffiliationCode').attr('displayName');
    
    el = patient.tag('birthplace');
    var birthplace_dict = parseAddress(el);
    
    el = patient.tag('guardian');
    var guardian_relationship = el.tag('code').attr('displayName'),
        guardian_relationship_code = el.tag('code').attr('code'),
        guardian_home = el.tag('telecom').attr('value');
    
    el = el.tag('guardianPerson').tag('name');
    var guardian_name_dict = parseName(el);
    
    el = patient.tag('guardian').tag('addr');
    var guardian_address_dict = parseAddress(el);
    
    el = patient.tag('providerOrganization');
    var provider_organization = el.tag('name').val(),
        provider_phone = el.tag('telecom').attr('value');
    
    var provider_address_dict = parseAddress(el.tag('addr'));
    
    data = {
      name: patient_name_dict,
      dob: dob,
      gender: gender,
      marital_status: marital_status,
      address: patient_address_dict,
      phone: {
        home: home,
        work: work,
        mobile: mobile
      },
      email: email,
      language: language,
      race: race,
      ethnicity: ethnicity,
      religion: religion,
      birthplace: {
        state: birthplace_dict.state,
        zip: birthplace_dict.zip,
        country: birthplace_dict.country
      },
      guardian: {
        name: {
          given: guardian_name_dict.given,
          family: guardian_name_dict.family
        },
        relationship: guardian_relationship,
        relationship_code: guardian_relationship_code,
        address: guardian_address_dict,
        phone: {
          home: guardian_home
        }
      },
      provider: {
        organization: provider_organization,
        phone: provider_phone,
        address: provider_address_dict
      }
    };
    
    return data;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  stripWhitespace: stripWhitespace
}

function stripWhitespace (str) {
    if (!str) { return str; }
    return str.replace(/^\s+|\s+$/g,'');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
 * Parser for the CCDAR2 Health Concerns Section
 * 2.16.840.1.113883.10.20.22.2.58
 */

module.exports = function(doc) {
    var self = this;
    self.doc = doc;

    self.health_concerns_document = function (ccda) {
        var parseDate = self.doc.parseDate;
        var parseName = self.doc.parseName;
        var parseAddress = self.doc.parseAddress;
    
        // Helper to create each iterator for collection
        var each = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback(this[i]);
            }
        };
    
        var model = {}, el;
        model.entries = [];
    
        model.text = ccda.tag('text').val(true);
    
        var health_concerns = ccda.section('health_concerns_document');
        var title = health_concerns.tag('title').val();
    
        health_concerns.entries().each(function(entry) {
    
            var entryModel = {};
            // Parse out the ACT Body
            //A record of something that is being done, has been done, can be done, or is intended or requested to be done.
            var act = entry.tag('act');
            var er = act.elsByTag('entryRelationship');
            var templateId = act.tag('templateId').attr('root');
            var id = act.tag('id').attr('root');
            var statusCode = act.tag('statusCode').attr('code');
            var code = act.tag('code');
            var name = code.attr('displayName');
            var effectiveTime = parseDate(entry.tag('effectiveTime'));
    
            // The model we want to return in json
            var actModel = {
                effective_time: effectiveTime,
                name: name,
                entry_relationship:[]
            };
    
            // Parse Entity Relationship child nodes
    
            var ers = entry.elsByTag('entryRelationship');
            ers.each = each;
    
            ers.each(function(er){
    
                var erModel = {
                    type_code : er.attr('typeCode'),
                    observations : []
                };
    
                var obs = er.elsByTag('observation');
                obs.each = each;
    
                // Parse out Obsevations for Each ER
                obs.each(function(ob) {
                    erModel.observations.push({
                        class_code: ob.attr('classCode'),
                        mood_code: ob.attr('moodCode'),
                        display_name : ob.tag('value').attr('displayName'),
                        status: ob.tag('statusCode').attr('code')
                    });
                });
    
                actModel.entry_relationship.push(erModel);
    
            });
    
            // Add ACT Model to our final return model
            entryModel['act'] = actModel;
            model.entries.push(entryModel);
        });
    
        return model;
    };    
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * ...
 */

var Core = __webpack_require__(0);

var Documents = __webpack_require__(9);

var Generators = __webpack_require__(14);

var Parsers = __webpack_require__(18);


/* exported BlueButton */
module.exports = function (source, opts) {
  var type, parsedData, parsedDocument;
  
  // Look for options
  if (!opts) opts = {};
  
  // Detect and parse the source data
  parsedData = Core.parseData(source);
  
  // Detect and parse the document
  if (opts.parser) {
    
    // TODO: parse the document with provided custom parser
    parsedDocument = opts.parser();
    
  } else {
    var documents = new Documents();
    type = documents.detect(parsedData);
    var parsers = new Parsers(documents);
    switch (type) {
      case 'c32':
        parsedData = documents.C32.process(parsedData);
        parsedDocument = parsers.C32.run(parsedData);
        break;
      case 'ccda':
        parsedData = documents.CCDA.process(parsedData);
        parsedDocument = parsers.CCDA.run(parsedData);
        break;
      case 'ccdar2':
        parsedData = documents.CCDAR2.process(parsedData);
        parsedDocument = parsers.CCDAR2.run(parsedData);
        break;
      case 'ccd':
        parsedData = documents.CCD.process(parsedData);
        parsedDocument = parsers.CCD.run(parsedData);
        break;
      case 'json':
        /* Expects a call like:
         * BlueButton(json string, {
         *   generatorType: 'ccda',
         *   template: < EJS file contents >
         * })
         * The returned "type" will be the requested type (not "json")
         * and the XML will be turned as a string in the 'data' key
         */
        switch (opts.generatorType) {
          // only the unit tests ever need to worry about this testingMode argument
          case 'c32':
            type = 'c32';
            parsedDocument = Generators.C32.run(parsedData, opts.template, opts.testingMode);
            break;
          case 'ccda':
            type = 'ccda';
            parsedDocument = Generators.CCDA.run(parsedData, opts.template, opts.testingMode);
            break;
        }
    }
  }
  
  return {
    type: type,
    data: parsedDocument,
    source: parsedData
  };

};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
 * ...
 */


  
/*
  * Administrative Gender (HL7 V3)
  * http://phinvads.cdc.gov/vads/ViewValueSet.action?id=8DE75E17-176B-DE11-9B52-0015173D1785
  * OID: 2.16.840.1.113883.1.11.1
  */
var GENDER_MAP = {
  'F': 'female',
  'M': 'male',
  'UN': 'undifferentiated'
};

/*
  * Marital Status (HL7)
  * http://phinvads.cdc.gov/vads/ViewValueSet.action?id=46D34BBC-617F-DD11-B38D-00188B398520
  * OID: 2.16.840.1.114222.4.11.809
  */
var MARITAL_STATUS_MAP = {
  'N': 'annulled',
  'C': 'common law',
  'D': 'divorced',
  'P': 'domestic partner',
  'I': 'interlocutory',
  'E': 'legally separated',
  'G': 'living together',
  'M': 'married',
  'O': 'other',
  'R': 'registered domestic partner',
  'A': 'separated',
  'S': 'single',
  'U': 'unknown',
  'B': 'unmarried',
  'T': 'unreported',
  'W': 'widowed'
};

/*
  * Religious Affiliation (HL7 V3)
  * https://phinvads.cdc.gov/vads/ViewValueSet.action?id=6BFDBFB5-A277-DE11-9B52-0015173D1785
  * OID: 2.16.840.1.113883.5.1076
  */
var RELIGION_MAP = {
  "1001": "adventist",
  "1002": "african religions",
  "1003": "afro-caribbean religions",
  "1004": "agnosticism",
  "1005": "anglican",
  "1006": "animism",
  "1061": "assembly of god",
  "1007": "atheism",
  "1008": "babi & baha'i faiths",
  "1009": "baptist",
  "1010": "bon",
  "1062": "brethren",
  "1011": "cao dai",
  "1012": "celticism",
  "1013": "christian (non-catholic, non-specific)",
  "1063": "christian scientist",
  "1064": "church of christ",
  "1065": "church of god",
  "1014": "confucianism",
  "1066": "congregational",
  "1015": "cyberculture religions",
  "1067": "disciples of christ",
  "1016": "divination",
  "1068": "eastern orthodox",
  "1069": "episcopalian",
  "1070": "evangelical covenant",
  "1017": "fourth way",
  "1018": "free daism",
  "1071": "friends",
  "1072": "full gospel",
  "1019": "gnosis",
  "1020": "hinduism",
  "1021": "humanism",
  "1022": "independent",
  "1023": "islam",
  "1024": "jainism",
  "1025": "jehovah's witnesses",
  "1026": "judaism",
  "1027": "latter day saints",
  "1028": "lutheran",
  "1029": "mahayana",
  "1030": "meditation",
  "1031": "messianic judaism",
  "1073": "methodist",
  "1032": "mitraism",
  "1074": "native american",
  "1075": "nazarene",
  "1033": "new age",
  "1034": "non-roman catholic",
  "1035": "occult",
  "1036": "orthodox",
  "1037": "paganism",
  "1038": "pentecostal",
  "1076": "presbyterian",
  "1039": "process, the",
  "1077": "protestant",
  "1078": "protestant, no denomination",
  "1079": "reformed",
  "1040": "reformed/presbyterian",
  "1041": "roman catholic church",
  "1080": "salvation army",
  "1042": "satanism",
  "1043": "scientology",
  "1044": "shamanism",
  "1045": "shiite (islam)",
  "1046": "shinto",
  "1047": "sikism",
  "1048": "spiritualism",
  "1049": "sunni (islam)",
  "1050": "taoism",
  "1051": "theravada",
  "1081": "unitarian universalist",
  "1052": "unitarian-universalism",
  "1082": "united church of christ",
  "1053": "universal life church",
  "1054": "vajrayana (tibetan)",
  "1055": "veda",
  "1056": "voodoo",
  "1057": "wicca",
  "1058": "yaohushua",
  "1059": "zen buddhism",
  "1060": "zoroastrianism"
};

/*
  * Race & Ethnicity (HL7 V3)
  * Full list at http://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.6.238
  * OID: 2.16.840.1.113883.6.238
  *
  * Abbreviated list closer to real usage at: (Race / Ethnicity)
  * https://phinvads.cdc.gov/vads/ViewValueSet.action?id=67D34BBC-617F-DD11-B38D-00188B398520
  * https://phinvads.cdc.gov/vads/ViewValueSet.action?id=35D34BBC-617F-DD11-B38D-00188B398520
  */
var RACE_ETHNICITY_MAP = {
  '2028-9': 'asian',
  '2054-5': 'black or african american',
  '2135-2': 'hispanic or latino',
  '2076-8': 'native',
  '2186-5': 'not hispanic or latino',
  '2131-1': 'other',
  '2106-3': 'white'
};

/*
  * Role (HL7 V3)
  * https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.5.111
  * OID: 2.16.840.1.113883.5.111
  */
var ROLE_MAP = {
  "ACC": "accident site",
  "ACHFID":  "accreditation location identifier",
  "ACTMIL":  "active duty military",
  "ALL": "allergy clinic",
  "AMB": "ambulance",
  "AMPUT":   "amputee clinic",
  "ANTIBIOT":    "antibiotic",
  "ASSIST":  "assistive non-person living subject",
  "AUNT":    "aunt",
  "B":   "blind",
  "BF":  "beef",
  "BILL":    "billing contact",
  "BIOTH":   "biotherapeutic non-person living subject",
  "BL":  "broiler",
  "BMTC":    "bone marrow transplant clinic",
  "BMTU":    "bone marrow transplant unit",
  "BR":  "breeder",
  "BREAST":  "breast clinic",
  "BRO": "brother",
  "BROINLAW":    "brother-in-law",
  "C":   "calibrator",
  "CANC": "child and adolescent neurology clinic",
  "CAPC": "child and adolescent psychiatry clinic",
  "CARD": "ambulatory health care facilities; clinic/center; rehabilitation: cardiac facilities",
  "CAS": "asylum seeker",
  "CASM":    "single minor asylum seeker",
  "CATH":    "cardiac catheterization lab",
  "CCO": "clinical companion",
  "CCU": "coronary care unit",
  "CHEST":   "chest unit",
  "CHILD":   "child",
  "CHLDADOPT":   "adopted child",
  "CHLDFOST":    "foster child",
  "CHLDINLAW":   "child in-law",
  "CHR": "chronic care facility",
  "CLAIM":   "claimant",
  "CN":  "national",
  "CNRP":    "non-country member without residence permit",
  "CNRPM":   "non-country member minor without residence permit",
  "CO":  "companion",
  "COAG":    "coagulation clinic",
  "COCBEN":  "continuity of coverage beneficiary",
  "COMM":    "community location",
  "COMMUNITYLABORATORY": "community laboratory",
  "COUSN":   "cousin",
  "CPCA":    "permit card applicant",
  "CRIMEVIC":    "crime victim",
  "CRP": "non-country member with residence permit",
  "CRPM":    "non-country member minor with residence permit",
  "CRS": "colon and rectal surgery clinic",
  "CSC": "community service center",
  "CVDX":    "cardiovascular diagnostics or therapeutics unit",
  "DA":  "dairy",
  "DADDR":   "delivery address",
  "DAU": "natural daughter",
  "DAUADOPT":    "adopted daughter",
  "DAUC":    "daughter",
  "DAUFOST": "foster daughter",
  "DAUINLAW":    "daughter in-law",
  "DC":  "therapeutic class",
  "DEBR":    "debridement",
  "DERM":    "dermatology clinic",
  "DIFFABL": "differently abled",
  "DOMPART": "domestic partner",
  "DPOWATT": "durable power of attorney",
  "DR":  "draft",
  "DU":  "dual",
  "DX":  "diagnostics or therapeutics unit",
  "E":   "electronic qc",
  "ECHO":    "echocardiography lab",
  "ECON":    "emergency contact",
  "ENDO":    "endocrinology clinic",
  "ENDOS":   "endoscopy lab",
  "ENROLBKR":    "enrollment broker",
  "ENT": "otorhinolaryngology clinic",
  "EPIL":    "epilepsy unit",
  "ER":  "emergency room",
  "ERL": "enrollment",
  "ETU": "emergency trauma unit",
  "EXCEST":  "executor of estate",
  "EXT": "extended family member",
  "F":   "filler proficiency",
  "FAMDEP":  "family dependent",
  "FAMMEMB": "family member",
  "FI":  "fiber",
  "FMC": "family medicine clinic",
  "FRND":    "unrelated friend",
  "FSTUD":   "full-time student",
  "FTH": "father",
  "FTHINLAW":    "father-in-law",
  "FULLINS": "fully insured coverage sponsor",
  "G":   "group",
  "GACH":    "hospitals; general acute care hospital",
  "GD":  "generic drug",
  "GDF": "generic drug form",
  "GDS": "generic drug strength",
  "GDSF":    "generic drug strength form",
  "GGRFTH":  "great grandfather",
  "GGRMTH":  "great grandmother",
  "GGRPRN":  "great grandparent",
  "GI":  "gastroenterology clinic",
  "GIDX":    "gastroenterology diagnostics or therapeutics lab",
  "GIM": "general internal medicine clinic",
  "GRFTH":   "grandfather",
  "GRMTH":   "grandmother",
  "GRNDCHILD":   "grandchild",
  "GRNDDAU": "granddaughter",
  "GRNDSON": "grandson",
  "GRPRN":   "grandparent",
  "GT":  "guarantor",
  "GUADLTM": "guardian ad lidem",
  "GUARD":   "guardian",
  "GYN": "gynecology clinic",
  "HAND":    "hand clinic",
  "HANDIC":  "handicapped dependent",
  "HBRO":    "half-brother",
  "HD":  "hemodialysis unit",
  "HEM": "hematology clinic",
  "HLAB":    "hospital laboratory",
  "HOMEHEALTH":  "home health",
  "HOSP":    "hospital",
  "HPOWATT": "healthcare power of attorney",
  "HRAD":    "radiology unit",
  "HSIB":    "half-sibling",
  "HSIS":    "half-sister",
  "HTN": "hypertension clinic",
  "HU":  "hospital unit",
  "HUSB":    "husband",
  "HUSCS":   "specimen collection site",
  "ICU": "intensive care unit",
  "IEC": "impairment evaluation center",
  "INDIG":   "member of an indigenous people",
  "INFD":    "infectious disease clinic",
  "INJ": "injured plaintiff",
  "INJWKR":  "injured worker",
  "INLAB":   "inpatient laboratory",
  "INPHARM": "inpatient pharmacy",
  "INV": "infertility clinic",
  "JURID":   "jurisdiction location identifier",
  "L":   "pool",
  "LABORATORY":  "laboratory",
  "LOCHFID": "local location identifier",
  "LY":  "layer",
  "LYMPH":   "lympedema clinic",
  "MAUNT":   "maternalaunt",
  "MBL": "medical laboratory",
  "MCOUSN":  "maternalcousin",
  "MGDSF":   "manufactured drug strength form",
  "MGEN":    "medical genetics clinic",
  "MGGRFTH": "maternalgreatgrandfather",
  "MGGRMTH": "maternalgreatgrandmother",
  "MGGRPRN": "maternalgreatgrandparent",
  "MGRFTH":  "maternalgrandfather",
  "MGRMTH":  "maternalgrandmother",
  "MGRPRN":  "maternalgrandparent",
  "MHSP":    "military hospital",
  "MIL": "military",
  "MOBL":    "mobile unit",
  "MT":  "meat",
  "MTH": "mother",
  "MTHINLAW":    "mother-in-law",
  "MU":  "multiplier",
  "MUNCLE":  "maternaluncle",
  "NBOR":    "neighbor",
  "NBRO":    "natural brother",
  "NCCF":    "nursing or custodial care facility",
  "NCCS":    "neurology critical care and stroke unit",
  "NCHILD":  "natural child",
  "NEPH":    "nephrology clinic",
  "NEPHEW":  "nephew",
  "NEUR":    "neurology clinic",
  "NFTH":    "natural father",
  "NFTHF":   "natural father of fetus",
  "NIECE":   "niece",
  "NIENEPH": "niece/nephew",
  "NMTH":    "natural mother",
  "NOK": "next of kin",
  "NPRN":    "natural parent",
  "NS":  "neurosurgery unit",
  "NSIB":    "natural sibling",
  "NSIS":    "natural sister",
  "O":   "operator proficiency",
  "OB":  "obstetrics clinic",
  "OF":  "outpatient facility",
  "OMS": "oral and maxillofacial surgery clinic",
  "ONCL":    "medical oncology clinic",
  "OPH": "opthalmology clinic",
  "OPTC":    "optometry clinic",
  "ORG": "organizational contact",
  "ORTHO":   "orthopedics clinic",
  "OUTLAB":  "outpatient laboratory",
  "OUTPHARM":    "outpatient pharmacy",
  "P":   "patient",
  "PAINCL":  "pain clinic",
  "PATHOLOGIST": "pathologist",
  "PAUNT":   "paternalaunt",
  "PAYOR":   "payor contact",
  "PC":  "primary care clinic",
  "PCOUSN":  "paternalcousin",
  "PEDC":    "pediatrics clinic",
  "PEDCARD": "pediatric cardiology clinic",
  "PEDE":    "pediatric endocrinology clinic",
  "PEDGI":   "pediatric gastroenterology clinic",
  "PEDHEM":  "pediatric hematology clinic",
  "PEDHO":   "pediatric oncology clinic",
  "PEDICU":  "pediatric intensive care unit",
  "PEDID":   "pediatric infectious disease clinic",
  "PEDNEPH": "pediatric nephrology clinic",
  "PEDNICU": "pediatric neonatal intensive care unit",
  "PEDRHEUM":    "pediatric rheumatology clinic",
  "PEDU":    "pediatric unit",
  "PGGRFTH": "paternalgreatgrandfather",
  "PGGRMTH": "paternalgreatgrandmother",
  "PGGRPRN": "paternalgreatgrandparent",
  "PGRFTH":  "paternalgrandfather",
  "PGRMTH":  "paternalgrandmother",
  "PGRPRN":  "paternalgrandparent",
  "PH":  "policy holder",
  "PHARM":   "pharmacy",
  "PHLEBOTOMIST":    "phlebotomist",
  "PHU": "psychiatric hospital unit",
  "PL":  "pleasure",
  "PLS": "plastic surgery clinic",
  "POD": "podiatry clinic",
  "POWATT":  "power of attorney",
  "PRC": "pain rehabilitation center",
  "PREV":    "preventive medicine clinic",
  "PRN": "parent",
  "PRNINLAW":    "parent in-law",
  "PROCTO":  "proctology clinic",
  "PROFF":   "provider's office",
  "PROG":    "program eligible",
  "PROS":    "prosthodontics clinic",
  "PSI": "psychology clinic",
  "PSTUD":   "part-time student",
  "PSY": "psychiatry clinic",
  "PSYCHF":  "psychiatric care facility",
  "PT":  "patient",
  "PTRES":   "patient's residence",
  "PUNCLE":  "paternaluncle",
  "Q":   "quality control",
  "R":   "replicate",
  "RADDX":   "radiology diagnostics or therapeutics unit",
  "RADO":    "radiation oncology unit",
  "RC":  "racing",
  "RESPRSN": "responsible party",
  "RETIREE": "retiree",
  "RETMIL":  "retired military",
  "RH":  "rehabilitation hospital",
  "RHAT":    "addiction treatment center",
  "RHEUM":   "rheumatology clinic",
  "RHII":    "intellectual impairment center",
  "RHMAD":   "parents with adjustment difficulties center",
  "RHPI":    "physical impairment center",
  "RHPIH":   "physical impairment - hearing center",
  "RHPIMS":  "physical impairment - motor skills center",
  "RHPIVS":  "physical impairment - visual skills center",
  "RHU": "rehabilitation hospital unit",
  "RHYAD":   "youths with adjustment difficulties center",
  "RNEU":    "neuroradiology unit",
  "ROOM":    "roommate",
  "RTF": "residential treatment facility",
  "SCHOOL":  "school",
  "SCN": "screening",
  "SEE": "seeing",
  "SELF":    "self",
  "SELFINS": "self insured coverage sponsor",
  "SH":  "show",
  "SIB": "sibling",
  "SIBINLAW":    "sibling in-law",
  "SIGOTHR": "significant other",
  "SIS": "sister",
  "SISINLAW":    "sister-in-law",
  "SLEEP":   "sleep disorders unit",
  "SNF": "skilled nursing facility",
  "SNIFF":   "sniffing",
  "SON": "natural son",
  "SONADOPT":    "adopted son",
  "SONC":    "son",
  "SONFOST": "foster son",
  "SONINLAW":    "son in-law",
  "SPMED":   "sports medicine clinic",
  "SPON":    "sponsored dependent",
  "SPOWATT": "special power of attorney",
  "SPS": "spouse",
  "STPBRO":  "stepbrother",
  "STPCHLD": "step child",
  "STPDAU":  "stepdaughter",
  "STPFTH":  "stepfather",
  "STPMTH":  "stepmother",
  "STPPRN":  "step parent",
  "STPSIB":  "step sibling",
  "STPSIS":  "stepsister",
  "STPSON":  "stepson",
  "STUD":    "student",
  "SU":  "surgery clinic",
  "SUBJECT": "self",
  "SURF":    "substance use rehabilitation facility",
  "THIRDPARTY":  "third party",
  "TPA": "third party administrator",
  "TR":  "transplant clinic",
  "TRAVEL":  "travel and geographic medicine clinic",
  "TRB": "tribal member",
  "UMO": "utilization management organization",
  "UNCLE":   "uncle",
  "UPC": "underage protection center",
  "URO": "urology clinic",
  "V":   "verifying",
  "VET": "veteran",
  "VL":  "veal",
  "WARD":    "ward",
  "WIFE":    "wife",
  "WL":  "wool",
  "WND": "wound clinic",
  "WO":  "working",
  "WORK":    "work site",
};

var PROBLEM_STATUS_MAP = {
  "55561003": "active",
  "73425007": "inactive",
  "413322009": "resolved"
};


// copied from _.invert to avoid making browser users include all of underscore
var invertKeys = function(obj) {
  var result = {};
  var keys = Object.keys(obj);
  for (var i = 0, length = keys.length; i < length; i++) {
    result[obj[keys[i]]] = keys[i];
  }
  return result;
};

var lookupFnGenerator = function(map) {
  return function(key) {
    return map[key] || null;
  };
};
var reverseLookupFnGenerator = function(map) {
  return function(key) {
    if (!key) { return null; }
    var invertedMap = invertKeys(map);
    key = key.toLowerCase();
    return invertedMap[key] || null;
  };
};


module.exports =  {
  gender: lookupFnGenerator(GENDER_MAP),
  reverseGender: reverseLookupFnGenerator(GENDER_MAP),
  maritalStatus: lookupFnGenerator(MARITAL_STATUS_MAP),
  reverseMaritalStatus: reverseLookupFnGenerator(MARITAL_STATUS_MAP),
  religion: lookupFnGenerator(RELIGION_MAP),
  reverseReligion: reverseLookupFnGenerator(RELIGION_MAP),
  raceEthnicity: lookupFnGenerator(RACE_ETHNICITY_MAP),
  reverseRaceEthnicity: reverseLookupFnGenerator(RACE_ETHNICITY_MAP),
  role: lookupFnGenerator(ROLE_MAP),
  reverseRole: reverseLookupFnGenerator(ROLE_MAP),
  problemStatus: lookupFnGenerator(PROBLEM_STATUS_MAP),
  reverseProblemStatus: reverseLookupFnGenerator(PROBLEM_STATUS_MAP)
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * ...
 */
var { stripWhitespace } = __webpack_require__(3);
/*
  * A function used to wrap DOM elements in an object so methods can be added
  * to the element object. IE8 does not allow methods to be added directly to
  * DOM objects.
  */
var wrapElement = function (el) {
  function wrapElementHelper(currentEl) {
    return {
      el: currentEl,
      template: template,
      content: content,
      tag: tag,
      immediateChildTag: immediateChildTag,
      elsByTag: elsByTag,
      attr: attr,
      boolAttr: boolAttr,
      val: val,
      isEmpty: isEmpty
    };
  }
  
  // el is an array of elements
  if (el.length) {
    var els = [];
    for (var i = 0; i < el.length; i++) {
      els.push(wrapElementHelper(el[i]));
    }
    return els;
  
  // el is a single element
  } else {
    return wrapElementHelper(el);
  }
};


/*
  * Find element by tag name, then attribute value.
  */
var tagAttrVal = function (el, tag, attr, value) {
  el = el.getElementsByTagName(tag);
  for (var i = 0; i < el.length; i++) {
    if (el[i].getAttribute(attr) === value) {
      return el[i];
    }
  }
};


/*
  * Search for a template ID, and return its parent element.
  * Example:
  *   <templateId root="2.16.840.1.113883.10.20.22.2.17"/>
  * Can be found using:
  *   el = dom.template('2.16.840.1.113883.10.20.22.2.17');
  */
var template = function (templateId) {
  var el = tagAttrVal(this.el, 'templateId', 'root', templateId);
  if (!el) {
    return emptyEl();
  } else {
    return wrapElement(el.parentNode);
  }
};

/*
  * Search for a content tag by "ID", and return it as an element.
  * These are used in the unstructured versions of each section but
  * referenced from the structured version sometimes.
  * Example:
  *   <content ID="UniqueNameReferencedElsewhere"/>
  * Can be found using:
  *   el = dom.content('UniqueNameReferencedElsewhere');
  *
  * We can't use `getElementById` because `ID` (the standard attribute name
  * in this context) is not the same attribute as `id` in XML, so there are no matches
  */
var content = function (contentId) {
    var el = tagAttrVal(this.el, 'content', 'ID', contentId);
    if (!el) {
      // check the <td> tag too, which isn't really correct but
      // will inevitably be used sometimes because it looks like very
      // normal HTML to put the data directly in a <td>
      el = tagAttrVal(this.el, 'td', 'ID', contentId);
    }
    if (!el) {
      // Ugh, Epic uses really non-standard locations.
      el = tagAttrVal(this.el, 'caption', 'ID', contentId) ||
            tagAttrVal(this.el, 'paragraph', 'ID', contentId) ||
            tagAttrVal(this.el, 'tr', 'ID', contentId) ||
            tagAttrVal(this.el, 'item', 'ID', contentId);
    }

    if (!el) {
      return emptyEl();
    } else {
      return wrapElement(el);
    }
  };


/*
  * Search for the first occurrence of an element by tag name.
  */
var tag = function (tag) {
  var el = this.el.getElementsByTagName(tag)[0];
  if (!el) {
    return emptyEl();
  } else {
    return wrapElement(el);
  }
};

/*
  * Like `tag`, except it will only count a tag that is an immediate child of `this`.
  * This is useful for tags like "text" which A. may not be present for a given location
  * in every document and B. have a very different meaning depending on their positioning
  *
  *   <parent>
  *     <target></target>
  *   </parent>
  * vs.
  *   <parent>
  *     <intermediate>
  *       <target></target>
  *     </intermediate>
  *   </parent>
  * parent.immediateChildTag('target') will have a result in the first case but not in the second.
  */
var immediateChildTag = function (tag) {
  var els = this.el.getElementsByTagName(tag);
  if (!els) { return null; }
  for (var i = 0; i < els.length; i++) {
    if (els[i].parentNode === this.el) {
      return wrapElement(els[i]);
    }
  }
  return emptyEl();
};


/*
  * Search for all elements by tag name.
  */
var elsByTag = function (tag) {
  return wrapElement(this.el.getElementsByTagName(tag));
};


var unescapeSpecialChars = function(s) {
  if (!s) { return s; }
  return s.replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'");
};


/*
  * Retrieve the element's attribute value. Example:
  *   value = el.attr('displayName');
  *
  * The browser and jsdom return "null" for empty attributes;
  * xmldom (which we now use because it's faster / can be explicitly
  * told to parse malformed XML as XML anyways), return the empty
  * string instead, so we fix that here.
  */
var attr = function (attrName) {
  if (!this.el) { return null; }
  var attrVal = this.el.getAttribute(attrName);
  if (attrVal) {
    return unescapeSpecialChars(attrVal);
  }
  return null;
};

/*
  * Wrapper for attr() for retrieving boolean attributes;
  * a raw call attr() will return Strings, which can be unexpected,
  * since the string 'false' will by truthy
  */
var boolAttr = function (attrName) {
  var rawAttr = this.attr(attrName);
  if (rawAttr === 'true' || rawAttr === '1') {
    return true;
  }
  return false;
};

/*
  * Retrieve the element's value. For example, if the element is:
  *   <city>Madison</city>
  * Use:
  *   value = el.tag('city').val();
  *
  * This function also knows how to retrieve the value of <reference> tags,
  * which can store their content in a <content> tag in a totally different
  * part of the document.
  */
var val = function (html) {
  if (!this.el) { return null; }
  if (!this.el.childNodes || !this.el.childNodes.length) { return null; }
  var textContent = html ? this.el.innerHTML : this.el.textContent;

  // if there's no text value here and the only thing inside is a
  // <reference> tag, see if there's a linked <content> tag we can
  // get something out of
  if (!stripWhitespace(textContent)) {

    var contentId;
    // "no text value" might mean there's just a reference tag
    if (this.el.childNodes.length === 1 &&
        this.el.childNodes[0].tagName === 'reference') {
      contentId = this.el.childNodes[0].getAttribute('value');

    // or maybe a newlines on top/above the reference tag
    } else if (this.el.childNodes.length === 3 &&
        this.el.childNodes[1].tagName === 'reference') {
      contentId = this.el.childNodes[1].getAttribute('value');

    } else {
      return unescapeSpecialChars(textContent);
    }

    if (contentId && contentId[0] === '#') {
      contentId = contentId.slice(1); // get rid of the '#'
      var docRoot = wrapElement(this.el.ownerDocument);
      var contentTag = docRoot.content(contentId);
      return contentTag.val();
    }
  }

  return unescapeSpecialChars(textContent);
};


/*
  * Creates and returns an empty DOM element with tag name "empty":
  *   <empty></empty>
  */
var emptyEl = function () {
  var el = doc.createElement('empty');
  return wrapElement(el);
};


/*
  * Determines if the element is empty, i.e.:
  *   <empty></empty>
  * This element is created by function `emptyEL`.
  */
var isEmpty = function () {
  if (this.el.tagName.toLowerCase() === 'empty') {
    return true;
  } else {
    return false;
  }
};


/*
  * Cross-browser XML parsing supporting IE8+ and Node.js.
  */
function parse(data) {
  // XML data must be a string
  if (!data || typeof data !== "string") {
    console.log("BB Error: XML data is not a string");
    return null;
  }
  
  var xml, parser;
  
  // Node
  if (isNode) {
    parser = new (xmldom.DOMParser)();
    xml = parser.parseFromString(data, "text/xml");
    
  // Browser
  } else {
    
    // Standard parser
    if (window.DOMParser) {
      parser = new DOMParser();
      xml = parser.parseFromString(data, "text/xml");
      
    // IE
    } else {
      try {
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
      } catch (e) {
        console.log("BB ActiveX Exception: Could not parse XML");
      }
    }
  }
  
  if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
    console.log("BB Error: Could not parse XML");
    return null;
  }
  
  return wrapElement(xml);
};


// Establish the root object, `window` in the browser, or `global` in Node.
var root = this,
    xmldom,
    isNode = false,
    doc = root.document; // Will be `undefined` if we're in Node

// Check if we're in Node. If so, pull in `xmldom` so we can simulate the DOM.
if (true) {
  if (typeof module !== 'undefined' && module.exports) {
    isNode = true;
    xmldom = __webpack_require__(8);
    doc = new xmldom.DOMImplementation().createDocument();
  }
}

module.exports = {
  parse: parse
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(21);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
  * ...
  */
var C32 = __webpack_require__(10);
var CCD = __webpack_require__(11);
var CCDA = __webpack_require__(12);
var CCDAR2 = __webpack_require__(13);

module.exports = function() {
  var self = this;

  self.detect = detect;
  self.entries = entries;
  self.parseDate = parseDate;
  self.parseName = parseName;
  self.parseAddress = parseAddress;
  self.C32 = new C32(getEntries);
  self.CCD = new CCD(getEntries);
  self.CCDA = new CCDA(getEntries);
  self.CCDAR2 = new CCDAR2(getEntries);
};

function getEntries() {
  return entries;
};

function detect(data) {
  if (!data.template) {
    return 'json';
  }
  
  if (!data.template('2.16.840.1.113883.3.88.11.32.1').isEmpty()) {
    return 'c32';
  } else if(!data.template('2.16.840.1.113883.10.20.22.1.1').isEmpty()) {
    return 'ccda';
  } else if(!data.template('2.16.840.1.113883.10.20.22.1.15').isEmpty()) {
    return 'ccdar2';
  }else if(!data.template('2.16.840.1.113883.10.20.22.1.2').isEmpty()) {
    return 'ccd';
  }
};


/*
  * Get entries within an element (with tag name 'entry'), adds an `each` function
  */
function entries() {
  var each = function (callback) {
    for (var i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
  
  var els = this.elsByTag('entry');
  els.each = each;
  return els;
};


/*
  * Parses an HL7 date in String form and creates a new Date object.
  * 
  * TODO: CCDA dates can be in form:
  *   <effectiveTime value="20130703094812"/>
  * ...or:
  *   <effectiveTime>
  *     <low value="19630617120000"/>
  *     <high value="20110207100000"/>
  *   </effectiveTime>
  * For the latter, parseDate will not be given type `String`
  * and will return `null`.
  */
function parseDate(str) {
  if (!str || typeof str !== 'string') {
    return null;
  }

  // Note: months start at 0 (so January is month 0)

  // e.g., value="1999" translates to Jan 1, 1999
  if (str.length === 4) {
    return new Date(str, 0, 1);
  }

  var year = str.substr(0, 4);
  // subtract 1 from the month since they're zero-indexed
  var month = parseInt(str.substr(4, 2), 10) - 1;
  // days are not zero-indexed. If we end up with the day 0 or '',
  // that will be equivalent to the last day of the previous month
  var day = str.substr(6, 2) || 1;

  // check for time info (the presence of at least hours and mins after the date)
  if (str.length >= 12) {
    var hour = str.substr(8, 2);
    var min = str.substr(10, 2);
    var secs = str.substr(12, 2);

    // check for timezone info (the presence of chars after the seconds place)
    if (str.length > 14) {
      // _utcOffsetFromString will return 0 if there's no utc offset found.
      var utcOffset = _utcOffsetFromString(str.substr(14));
      // We subtract that offset from the local time to get back to UTC
      // (e.g., if we're -480 mins behind UTC, we add 480 mins to get back to UTC)
      min = _toInt(min) - utcOffset;
    }

    var date = new Date(Date.UTC(year, month, day, hour, min, secs));
    // This flag lets us output datetime-precision in our JSON even if the time happens
    // to translate to midnight local time. If we clone the date object, it is not
    // guaranteed to survive.
    date._parsedWithTimeData = true;
    return date;
  }

  return new Date(year, month, day);
};

// These regexes and the two functions below are copied from moment.js
// http://momentjs.com/
// https://github.com/moment/moment/blob/develop/LICENSE
var parseTimezoneChunker = /([\+\-]|\d\d)/gi;
var parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
function _utcOffsetFromString(string) {
    string = string || '';
    var possibleTzMatches = (string.match(parseTokenTimezone) || []),
        tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
        parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
        minutes = +(parts[1] * 60) + _toInt(parts[2]);

    return parts[0] === '+' ? minutes : -minutes;
}
function _toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        if (coercedNumber >= 0) {
            value = Math.floor(coercedNumber);
        } else {
            value = Math.ceil(coercedNumber);
        }
    }

    return value;
}


/*
  * Parses an HL7 name (prefix / given [] / family)
  */
function parseName(nameEl) {
  var prefix = nameEl.tag('prefix').val();
  
  var els = nameEl.elsByTag('given');
  var given = [];
  for (var i = 0; i < els.length; i++) {
    var val = els[i].val();
    if (val) { given.push(val); }
  }
  
  var family = nameEl.tag('family').val();
  
  return {
    prefix: prefix,
    given: given,
    family: family
  };
};


/*
  * Parses an HL7 address (streetAddressLine [], city, state, postalCode, country)
  */
function parseAddress(addrEl) {
  var els = addrEl.elsByTag('streetAddressLine');
  var street = [];
  
  for (var i = 0; i < els.length; i++) {
    var val = els[i].val();
    if (val) { street.push(val); }
  }
  
  var city = addrEl.tag('city').val(),
      state = addrEl.tag('state').val(),
      zip = addrEl.tag('postalCode').val(),
      country = addrEl.tag('country').val();
  
  return {
    street: street,
    city: city,
    state: state,
    zip: zip,
    country: country
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
 * ...
 */
 
module.exports = function(getEntries) {
  var self = this;

  self.getEntries = getEntries;
  self.process = process;
  self.section = section;

  /*
  * Preprocesses the C32 document
  */
  function process(c32) {
    c32.section = section;
    return c32;
  };

  /*
    * Finds the section of a C32 document
    *
    * Usually we check first for the HITSP section ID and then for the HL7-CCD ID.
    */
  function section(name) {
    var el, entries = self.getEntries();
    
    switch (name) {
      case 'document':
        return this.template('2.16.840.1.113883.3.88.11.32.1');
      case 'allergies':
        el = this.template('2.16.840.1.113883.3.88.11.83.102');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.2');
        }
        el.entries = entries;
        return el;
      case 'demographics':
        return this.template('2.16.840.1.113883.3.88.11.32.1');
      case 'encounters':
        el = this.template('2.16.840.1.113883.3.88.11.83.127');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.3');
        }
        el.entries = entries;
        return el;
      case 'immunizations':
        el = this.template('2.16.840.1.113883.3.88.11.83.117');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.6');
        }
        el.entries = entries;
        return el;
      case 'results':
        el = this.template('2.16.840.1.113883.3.88.11.83.122');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.14');
        }
        el.entries = entries;
        return el;
      case 'medications':
        el = this.template('2.16.840.1.113883.3.88.11.83.112');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.8');
        }
        el.entries = entries;
        return el;
      case 'problems':
        el = this.template('2.16.840.1.113883.3.88.11.83.103');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.11');
        }
        el.entries = entries;
        return el;
      case 'procedures':
        el = this.template('2.16.840.1.113883.3.88.11.83.108');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.12');
        }
        el.entries = entries;
        return el;
      case 'vitals':
        el = this.template('2.16.840.1.113883.3.88.11.83.119');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.1.16');
        }
        el.entries = entries;
        return el;
    }
    
    return null;
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
 * ...
 */

module.exports = function (getEntries) {
    var self = this;
    self.getEntries = getEntries;

    self.process = process;
    self.section = section;

    /*
     * Preprocesses the CCDAR2 document
     */
    function process(ccda) {
        ccda.section = section;
        return ccda;
    };

    /*
     * Finds the section of a CCDA document
     */
    function section(name) {
        var el, entries = self.getEntries();

        switch (name) {
            case 'document':
                return this.template('2.16.840.1.113883.10.20.22.1.2');
            case 'demographics':
                return this.template('2.16.840.1.113883.10.20.22.1.2');
            case 'health_concerns_document':
                el = this.template('2.16.840.1.113883.10.20.22.2.58');
                el.entries = entries;
                return el;
            case 'goals':
                el = this.template('2.16.840.1.113883.10.20.22.2.60');
                el.entries = entries;
                return el;
            case 'interventions':
                el = this.template('2.16.840.1.113883.10.20.21.2.3');
                el.entries = entries;
                return el;
            case 'health_status_outcomes':
                el = this.template('2.16.840.1.113883.10.20.22.2.61');
                el.entries = entries;
                return el;
        }

        return null;
    };
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*
 * ...
 */

module.exports = function (getEntries) {
  var self = this;

  self.getEntries = getEntries;
  self.process = process;
  self.section = section;
  
  /*
   * Preprocesses the CCDA document
   */
  function process(ccda) {
    ccda.section = section;
    return ccda;
  };  
  
  /*
   * Finds the section of a CCDA document
   */
  function section(name) {
    var el, entries = self.getEntries();
    
    switch (name) {
      case 'document':
        return this.template('2.16.840.1.113883.10.20.22.1.1');
      case 'allergies':
        el = this.template('2.16.840.1.113883.10.20.22.2.6.1');
        el.entries = entries;
        return el;
      case 'care_plan':
        el = this.template('2.16.840.1.113883.10.20.22.2.10');
        el.entries = entries;
        return el;
      case 'chief_complaint':
        el = this.template('2.16.840.1.113883.10.20.22.2.13');
        if (el.isEmpty()) {
          el = this.template('1.3.6.1.4.1.19376.1.5.3.1.1.13.2.1');
        }
        // no entries in Chief Complaint
        return el;
      case 'demographics':
        return this.template('2.16.840.1.113883.10.20.22.1.1');
      case 'encounters':
        el = this.template('2.16.840.1.113883.10.20.22.2.22');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.22.1');
        }
        el.entries = entries;
        return el;
      case 'functional_statuses':
        el = this.template('2.16.840.1.113883.10.20.22.2.14');
        el.entries = entries;
        return el;
      case 'immunizations':
        el = this.template('2.16.840.1.113883.10.20.22.2.2.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.2');
        }
        el.entries = entries;
        return el;
      case 'instructions':
        el = this.template('2.16.840.1.113883.10.20.22.2.45');
        el.entries = entries;
        return el;
      case 'results':
        el = this.template('2.16.840.1.113883.10.20.22.2.3.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.3');
        }
        el.entries = entries;
        return el;
      case 'medications':
        el = this.template('2.16.840.1.113883.10.20.22.2.1.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.1');
        }
        el.entries = entries;
        return el;
      case 'problems':
        el = this.template('2.16.840.1.113883.10.20.22.2.5.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.5');
        }
        el.entries = entries;
        return el;
      case 'procedures':
        el = this.template('2.16.840.1.113883.10.20.22.2.7.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.7');
        }
        el.entries = entries;
        return el;
      case 'social_history':
        el = this.template('2.16.840.1.113883.10.20.22.2.17');
        el.entries = entries;
        return el;
      case 'vitals':
        el = this.template('2.16.840.1.113883.10.20.22.2.4.1');
        if (el.isEmpty()) {
          el = this.template('2.16.840.1.113883.10.20.22.2.4');
        }
        el.entries = entries;
        return el;
    }
    
    return null;
  };  
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
 * ...
 */

module.exports = function (getEntries) {
    var self = this;
    self.getEntries = getEntries;
    
    self.process = process;
    self.section = section;   

    /*
     * Preprocesses the CCDAR2 document
     */
    function process(ccda) {
        ccda.section = section;
        return ccda;
    };

    /*
     * Finds the section of a CCDA document
     */
    function section(name) {
        var el, entries = self.getEntries();

        switch (name) {
            case 'document':
                return this.template('2.16.840.1.113883.10.20.22.1.15');
            case 'demographics':
                return this.template('2.16.840.1.113883.10.20.22.1.15');
            case 'health_concerns_document':
                el = this.template('2.16.840.1.113883.10.20.22.2.58');
                el.entries = entries;
                return el;
            case 'goals':
                el = this.template('2.16.840.1.113883.10.20.22.2.60');
                el.entries = entries;
                return el;
            case 'interventions':
                el = this.template('2.16.840.1.113883.10.20.21.2.3');
                el.entries = entries;
                return el;
            case 'health_status_outcomes':
                el = this.template('2.16.840.1.113883.10.20.22.2.61');
                el.entries = entries;
                return el;
        }

        return null;
    };
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * ...
 */

var C32 = __webpack_require__(15);
var CCDA = __webpack_require__(16);

var method = function () {};

/* exported Generators */
module.exports = {
  method: method,
  C32: C32,
  CCDA: CCDA
};
  


  /* Import ejs if we're in Node. Then setup custom formatting filters
   */
  /*if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      ejs = require("ejs");
    }
  }

  if (typeof ejs !== 'undefined') {
    /* Filters are automatically available to ejs to be used like "... | hl7Date"
     * Helpers are functions that we'll manually pass in to ejs.
     * The intended distinction is that a helper gets called with regular function-call syntax
     */ /*
    var pad = function(number) {
      if (number < 10) {
        return '0' + number;
      }
      return String(number);
    };

    ejs.filters.hl7Date = function(obj) {
      try {
          if (obj === null || obj === undefined) { return 'nullFlavor="UNK"'; }
          var date = new Date(obj);
          if (isNaN(date.getTime())) { return obj; }

          var dateStr = null;
          if (date.getHours() || date.getMinutes() || date.getSeconds()) {
            // If there's a meaningful time, output a UTC datetime
            dateStr = date.getUTCFullYear() +
              pad( date.getUTCMonth() + 1 ) +
              pad( date.getUTCDate() );
            var timeStr = pad( date.getUTCHours() ) +
              pad( date.getUTCMinutes() ) +
              pad ( date.getUTCSeconds() ) +
              "+0000";
            return 'value="' + dateStr + timeStr + '"';
           
          } else {
            // If there's no time, don't apply timezone tranformations: just output a date
            dateStr = String(date.getFullYear()) +
              pad( date.getMonth() + 1 ) +
              pad( date.getDate() );
            return 'value="' + dateStr + '"';
          }

      } catch (e) {
          return obj;
      }
    };

    var escapeSpecialChars = function(s) {
      return s.replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/&/g, '&amp;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&apos;');
    };

    ejs.filters.hl7Code = function(obj) {
      if (!obj) { return ''; }

      var tag = '';
      var name = obj.name || '';
      if (obj.name) { tag += 'displayName="'+escapeSpecialChars(name)+'"'; }

      if (obj.code) {
        tag += ' code="'+obj.code+'"';
        if (obj.code_system) { tag += ' codeSystem="'+escapeSpecialChars(obj.code_system)+'"'; }
        if (obj.code_system_name) { tag += ' codeSystemName="' +
                                        escapeSpecialChars(obj.code_system_name)+'"'; }
      } else {
        tag += ' nullFlavor="UNK"';
      }

      if (!obj.name && ! obj.code) {
        return 'nullFlavor="UNK"';
      }
      
      return tag;
    };

    ejs.filters.emptyStringIfFalsy = function(obj) {
      if (!obj) { return ''; }
      return obj;
    };

    if (!ejs.helpers) ejs.helpers = {};
    ejs.helpers.simpleTag = function(tagName, value) {
      if (value) {
        return "<"+tagName+">"+value+"</"+tagName+">";
      } else {
        return "<"+tagName+" nullFlavor=\"UNK\" />";
      }
    };

    ejs.helpers.addressTags = function(addressDict) {
      if (!addressDict) {
        return '<streetAddressLine nullFlavor="NI" />\n' +
                '<city nullFlavor="NI" />\n' +
                '<state nullFlavor="NI" />\n' +
                '<postalCode nullFlavor="NI" />\n' +
                '<country nullFlavor="NI" />\n';
      }
      
      var tags = '';
      if (!addressDict.street.length) {
        tags += ejs.helpers.simpleTag('streetAddressLine', null) + '\n';
      } else {
        for (var i=0; i<addressDict.street.length; i++) {
          tags += ejs.helpers.simpleTag('streetAddressLine', addressDict.street[i]) + '\n';
        }
      }
      tags += ejs.helpers.simpleTag('city', addressDict.city) + '\n';
      tags += ejs.helpers.simpleTag('state', addressDict.state) + '\n';
      tags += ejs.helpers.simpleTag('postalCode', addressDict.zip) + '\n';
      tags += ejs.helpers.simpleTag('country', addressDict.country) + '\n';
      return tags;
    };

    ejs.helpers.nameTags = function(nameDict) {
      if (!nameDict) {
        return '<given nullFlavor="NI" />\n' +
                '<family nullFlavor="NI" />\n';
      }

      var tags = '';
      if (nameDict.prefix) {
        tags += ejs.helpers.simpleTag('prefix', nameDict.prefix) + '\n';
      }
      if (!nameDict.given.length) {
        tags += ejs.helpers.simpleTag('given', null) + '\n';
      } else {
        for (var i=0; i<nameDict.given.length; i++) {
          tags += ejs.helpers.simpleTag('given', nameDict.given[i]) + '\n';
        }
      }
      tags += ejs.helpers.simpleTag('family', nameDict.family) + '\n';
      if (nameDict.suffix) {
        tags += ejs.helpers.simpleTag('suffix', nameDict.suffix) + '\n';
      }
      return tags;
    };

  }*/


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
 * ...
 */

module.exports = {
  run: run
};
  
/*
  * Generates a C32 document
  */
function run(json, template, testingMode) {
  /* jshint unused: false */ // only until this stub is actually implemented
  console.log("C32 generation is not implemented yet");
  return null;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * ...
 */
var _ = __webpack_require__(17);

module.exports = {
  run: run
};
  
/*
  * Generates a CCDA document
  * A lot of the EJS setup happens in generators.js
  *
  * If `testingMode` is true, we'll set the "now" variable to a specific,
  * fixed time, so that the expected XML doesn't change across runs
  */
function run(json, template, testingMode) {
  if (!template) {
    console.log("Please provide a template EJS file for the Generator to use. " +
                "Load it via fs.readFileSync in Node or XHR in the browser.");
    return null;
  }

  // `now` is actually now, unless we're running this for a test,
  // in which case it's always Jan 1, 2000 at 12PM UTC
  var now = (testingMode) ?
    new Date('2000-01-01T12:00:00Z') : new Date();

  var ccda = _.template(template, {
    filename: 'ccda.xml',
    bb: json,
    now: now,
    tagHelpers: ejs.helpers,
    codes: Core.Codes
  });
  return ccda;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(1);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * ...
 */
var C32 = __webpack_require__(19);
var CCD = __webpack_require__(30);
var CCDA = __webpack_require__(32);
var CCDAR2 = __webpack_require__(47);

var method = function () {};

/* exported Parsers */
module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.method = method;
  self.C32 = new C32(self.doc);
  self.CCD = new CCD(self.doc);
  self.CCDA = new CCDA(self.doc);
  self.CCDAR2 = new CCDAR2(self.doc);
}; 

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 document
 */

var Core = __webpack_require__(0);
var AllergiesParser = __webpack_require__(20);
var DemographicsParser = __webpack_require__(21);
var DocumentParser = __webpack_require__(22);
var EncountersParser = __webpack_require__(23);
var ImmunizationsParser = __webpack_require__(24);
var MedicationsParser = __webpack_require__(25);
var ProblemsParser = __webpack_require__(26);
var ProceduresParser = __webpack_require__(27);
var ResultsParser = __webpack_require__(28);
var VitalsParser = __webpack_require__(29);
var ParseGenericInfo = __webpack_require__(1);

module.exports = function(doc) {
  var self = this;

  self.doc = doc;
  self.allergiesParser = new AllergiesParser(self.doc);
  self.demographicsParser = new DemographicsParser(self.doc);
  self.demographicsParser = new DocumentParser(self.doc);
  self.encountersParser = new EncountersParser(self.doc);
  self.immunizationsParser = new ImmunizationsParser(self.doc);
  self.medicationsParser = new MedicationsParser(self.doc);
  self.problemsParser = new ProblemsParser(self.doc);
  self.proceduresParser = new ProceduresParser(self.doc);
  self.resultsParser = new ResultsParser(self.doc);
  self.vitalsParser = new VitalsParser(self.doc);

  self.run = function (c32) {
    var data = {};
    
    data.document              = self.demographicsParser.parse(c32);
    data.allergies             = self.allergiesParser.parse(c32);
    data.demographics          = self.demographicsParser.parse(c32);
    data.encounters            = self.encountersParser.parse(c32);
    var parsedImmunizations    = self.immunizationsParser.parse(c32);
    data.immunizations         = parsedImmunizations.administered;
    data.immunization_declines = parsedImmunizations.declined;
    data.results               = self.resultsParser.parse(c32);
    data.medications           = self.medicationsParser.parse(c32);
    data.problems              = self.problemsParser.parse(c32);
    data.procedures            = self.proceduresParser.parse(c32);
    data.vitals                = self.vitals.parse(c32);
    
    data.json                       = Core.json;
    data.document.json              = Core.json;
    data.allergies.json             = Core.json;
    data.demographics.json          = Core.json;
    data.encounters.json            = Core.json;
    data.immunizations.json         = Core.json;
    data.immunization_declines.json = Core.json;
    data.results.json               = Core.json;
    data.medications.json           = Core.json;
    data.problems.json              = Core.json;
    data.procedures.json            = Core.json;
    data.vitals.json                = Core.json;
  
    // Sections that are in CCDA but not C32... we want to keep the API
    // consistent, even if the entries are always null
    data.smoking_status = {
      date: null,
      name: null,
      code: null,
      code_system: null,
      code_system_name: null
    };
    data.smoking_status.json = Core.json;
    
    data.chief_complaint = {
      text: null
    };
    data.chief_complaint.json = Core.json;
  
    data.care_plan = [];
    data.care_plan.json = Core.json;
  
    data.instructions = [];
    data.instructions.json = Core.json;
  
    data.functional_statuses = [];
    data.functional_statuses.json = Core.json;
  
    // Decorate each section with Title, templateId and text and adds missing sections
    ParseGenericInfo(c32, data);
  
    return data;
  };
};




/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 allergies section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
  
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var allergies = c32.section('allergies');

    var data = {}, el;
    data.entries = [];
    data.displayName = "Allergies";
    data.templateId = allergies.tag('templateId').attr('root');
    data.text = allergies.tag('text').val(true);

    allergies.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var start_date = parseDate(el.tag('low').attr('value')),
          end_date = parseDate(el.tag('high').attr('value'));
      
      el = entry.template('2.16.840.1.113883.3.88.11.83.6').tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
      
      // value => reaction_type
      el = entry.template('2.16.840.1.113883.3.88.11.83.6').tag('value');
      var reaction_type_name = el.attr('displayName'),
          reaction_type_code = el.attr('code'),
          reaction_type_code_system = el.attr('codeSystem'),
          reaction_type_code_system_name = el.attr('codeSystemName');
      
      // reaction
      el = entry.template('2.16.840.1.113883.10.20.1.54').tag('value');
      var reaction_name = el.attr('displayName'),
          reaction_code = el.attr('code'),
          reaction_code_system = el.attr('codeSystem');
      
      // an irregularity seen in some c32s
      if (!reaction_name) {
        el = entry.template('2.16.840.1.113883.10.20.1.54').tag('text');
        if (!el.isEmpty()) {
          reaction_name = Core.stripWhitespace(el.val());
        }
      }

      // severity
      el = entry.template('2.16.840.1.113883.10.20.1.55').tag('value');
      var severity = el.attr('displayName');
      
      // participant => allergen
      el = entry.tag('participant').tag('code');
      var allergen_name = el.attr('displayName'),
          allergen_code = el.attr('code'),
          allergen_code_system = el.attr('codeSystem'),
          allergen_code_system_name = el.attr('codeSystemName');

      // another irregularity seen in some c32s
      if (!allergen_name) {
        el = entry.tag('participant').tag('name');
        if (!el.isEmpty()) {
          allergen_name = el.val();
        }
      }
      if (!allergen_name) {
        el = entry.template('2.16.840.1.113883.3.88.11.83.6').tag('originalText');
        if (!el.isEmpty()) {
          allergen_name = Core.stripWhitespace(el.val());
        }
      }
      
      // status
      el = entry.template('2.16.840.1.113883.10.20.1.39').tag('value');
      var status = el.attr('displayName');
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        status: status,
        severity: severity,
        reaction: {
          name: reaction_name,
          code: reaction_code,
          code_system: reaction_code_system
        },
        reaction_type: {
          name: reaction_type_name,
          code: reaction_type_code,
          code_system: reaction_type_code_system,
          code_system_name: reaction_type_code_system_name
        },
        allergen: {
          name: allergen_name,
          code: allergen_code,
          code_system: allergen_code_system,
          code_system_name: allergen_code_system_name
        }
      });
    });  
    return data;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 demographics section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data = {}, el;
    
    var demographics = c32.section('demographics');
    
    var patient = demographics.tag('patientRole');
    el = patient.tag('patient').tag('name');
    var patient_name_dict = parseName(el);
    
    el = patient.tag('patient');
    var dob = parseDate(el.tag('birthTime').attr('value')),
        gender = Core.Codes.gender(el.tag('administrativeGenderCode').attr('code')),
        marital_status = Core.Codes.maritalStatus(el.tag('maritalStatusCode').attr('code'));
    
    el = patient.tag('addr');
    var patient_address_dict = parseAddress(el);
    
    el = patient.tag('telecom');
    var home = el.attr('value'),
        work = null,
        mobile = null;
    
    var email = null;
    
    var language = patient.tag('languageCommunication').tag('languageCode').attr('code'),
        race = patient.tag('raceCode').attr('displayName'),
        ethnicity = patient.tag('ethnicGroupCode').attr('displayName'),
        religion = patient.tag('religiousAffiliationCode').attr('displayName');
    
    el = patient.tag('birthplace');
    var birthplace_dict = parseAddress(el);
    
    el = patient.tag('guardian');
    var guardian_relationship = el.tag('code').attr('displayName'),
      guardian_relationship_code = el.tag('code').attr('code'),
        guardian_home = el.tag('telecom').attr('value');
    
    el = el.tag('guardianPerson').tag('name');
    var guardian_name_dict = parseName(el);
    
    el = patient.tag('guardian').tag('addr');
    var guardian_address_dict = parseAddress(el);
    
    el = patient.tag('providerOrganization');
    var provider_organization = el.tag('name').val(),
        provider_phone = el.tag('telecom').attr('value'),
        provider_address_dict = parseAddress(el.tag('addr'));
    
    data = {
      name: patient_name_dict,
      dob: dob,
      gender: gender,
      marital_status: marital_status,
      address: patient_address_dict,
      phone: {
        home: home,
        work: work,
        mobile: mobile
      },
      email: email,
      language: language,
      race: race,
      ethnicity: ethnicity,
      religion: religion,
      birthplace: {
        state: birthplace_dict.state,
        zip: birthplace_dict.zip,
        country: birthplace_dict.country
      },
      guardian: {
        name: {
          given: guardian_name_dict.given,
          family: guardian_name_dict.family
        },
        relationship: guardian_relationship,
        relationship_code: guardian_relationship_code,
        address: guardian_address_dict,
        phone: {
          home: guardian_home
        }
      },
      provider: {
        organization: provider_organization,
        phone: provider_phone,
        address: provider_address_dict
      }
    };
    
    return data;
  };
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 document section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data = {}, el;
    
    var doc = c32.section('document');
  
    // Parse Doc Type Info
    var templates =  doc.elsByTag('templateId');
    var rootTemplate = templates[0].attr('root');
    var secondTemplate;
    if(templates.length >1)
      secondTemplate = templates[1].attr('root');
    else
      secondTemplate = rootTemplate;
  
    var loinc = doc.tag('code').attr('code');
    var templateId = doc.tag('templateId').attr('root');
    var displayName = doc.tag('code').attr('displayName');
  
    var nonXml = doc.tag('nonXMLBody');
    var nonXmlNodes = nonXml.el.childNodes;
  
    var bodyType = "structured";
    var nonXmlBody = {
      type: "",
      mediaType: "",
      representation: "",
      rawText: "",
      reference: ""
    };
  
    if(nonXmlNodes && nonXmlNodes.length > 0) {
      bodyType = "unstructured";
      var text = nonXml.tag('text');
      var mediaType = "";
      var representation = "";
      var rawText = "";
      var reference = "";
      var type = "";
  
      // We have an embedded doc
      if(text && text.attr('mediaType')) {
        mediaType = text.attr('mediaType');
        representation = text.attr('representation');
        rawText = text.val();
        type = "embedded";
      }
  
      if(text && !mediaType) {
        reference = text.tag('reference').attr('value');
        type = "reference";
      }
      nonXmlBody = {
        type: type,
        mediaType: mediaType,
        representation: representation,
        rawText: rawText,
        reference: reference
      }
    }
  
    var docType = {
      type: "CCDAR2",
      rootTemplateId: rootTemplate,
      templateId: secondTemplate,
      displayName: displayName,
      loinc: loinc,
      bodyType: bodyType,
      nonXmlBody: nonXmlBody
    };
    
    var date = parseDate(doc.tag('effectiveTime').attr('value'));
    var title = Core.stripWhitespace(doc.tag('title').val());
    
    var author = doc.tag('author');
    el = author.tag('assignedPerson').tag('name');
    var name_dict = parseName(el);
    // Sometimes C32s include names that are just like <name>String</name>
    // and we still want to get something out in that case
    if (!name_dict.prefix && !name_dict.given.length && !name_dict.family) {
     name_dict.family = el.val();
    }
    
    el = author.tag('addr');
    var address_dict = parseAddress(el);
    
    el = author.tag('telecom');
    var work_phone = el.attr('value');
  
    var documentation_of_list = [];
    var performers = doc.tag('documentationOf').elsByTag('performer');
    for (var i = 0; i < performers.length; i++) {
      el = performers[i].tag('assignedPerson').tag('name');
      var performer_name_dict = parseName(el);
      var performer_phone = performers[i].tag('telecom').attr('value');
      var performer_addr = parseAddress(el.tag('addr'));
      documentation_of_list.push({
        name: performer_name_dict,
        phone: {
          work: performer_phone
        },
        address: performer_addr
      });
    }
  
    el = doc.tag('encompassingEncounter');
    var location_name = Core.stripWhitespace(el.tag('name').val());
    var location_addr_dict = parseAddress(el.tag('addr'));
    
    var encounter_date = null;
    el = el.tag('effectiveTime');
    if (!el.isEmpty()) {
      encounter_date = parseDate(el.attr('value'));
    }
    
    data = {
      type: docType,
      date: date,
      title: title,
      author: {
        name: name_dict,
        address: address_dict,
        phone: {
          work: work_phone
        }
      },
      documentation_of: documentation_of_list,
      location: {
        name: location_name,
        address: location_addr_dict,
        encounter_date: encounter_date
      }
    };
    
    return data;
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/*
 * Parser for the C32 encounters section
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var encounters = c32.section('encounters');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Encounters";
    data.templateId = encounters.tag('templateId').attr('root');
    data.text = encounters.tag('text').val(true);
  
    encounters.entries().each(function(entry) {
      
      var date = parseDate(entry.tag('effectiveTime').attr('value'));
      if (!date) {
        date = parseDate(entry.tag('effectiveTime').tag('low').attr('value'));
      }
      
      el = entry.tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName'),
          code_system_version = el.attr('codeSystemVersion');
      
      // translation
      el = entry.tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
      // performer
      el = entry.tag('performer');
      var performer_name = el.tag('name').val(),
          performer_code = el.attr('code'),
          performer_code_system = el.attr('codeSystem'),
          performer_code_system_name = el.attr('codeSystemName');
      
      // participant => location
      el = entry.tag('participant');
      var organization = el.tag('name').val(),
          location_dict = parseAddress(el);
      location_dict.organization = organization;
  
      // findings
      var findings = [];
      var findingEls = entry.elsByTag('entryRelationship');
      for (var i = 0; i < findingEls.length; i++) {
        el = findingEls[i].tag('value');
        findings.push({
          name: el.attr('displayName'),
          code: el.attr('code'),
          code_system: el.attr('codeSystem')
        });
      }
      
      data.entries.push({
        date: date,
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        code_system_version: code_system_version,
        findings: findings,
        translation: {
          name: translation_name,
          code: translation_code,
          code_system: translation_code_system,
          code_system_name: translation_code_system_name
        },
        performer: {
          name: performer_name,
          code: performer_code,
          code_system: performer_code_system,
          code_system_name: performer_code_system_name
        },
        location: location_dict
      });
    });
    
    return data;
  };
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 immunizations section
 */
var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var administeredData = {}, declinedData = {}, product, el;
  
    var immunizations = c32.section('immunizations');
  
    administeredData.entries = [];
    administeredData.displayName = "Immunizations";
    administeredData.templateId = immunizations.tag('templateId').attr('root');
    administeredData.text = immunizations.tag('text').val(true);
  
    declinedData.entries = [];
    declinedData.displayName = "Immunizations Declined";
    declinedData.templateId = immunizations.tag('templateId').attr('root');
    declinedData.text = immunizations.tag('text').val(true);
  
  
    
    immunizations.entries().each(function(entry) {
      
      // date
      el = entry.tag('effectiveTime');
      var date = parseDate(el.attr('value'));
      if (!date) {
        date = parseDate(el.tag('low').attr('value'));
      }
  
      // if 'declined' is true, this is a record that this vaccine WASN'T administered
      el = entry.tag('substanceAdministration');
      var declined = el.boolAttr('negationInd');
  
      // product
      product = entry.template('2.16.840.1.113883.10.20.1.53');
      el = product.tag('code');
      var product_name = el.attr('displayName'),
          product_code = el.attr('code'),
          product_code_system = el.attr('codeSystem'),
          product_code_system_name = el.attr('codeSystemName');
  
      // translation
      el = product.tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
  
      // misc product details
      el = product.tag('lotNumberText');
      var lot_number = el.val();
  
      el = product.tag('manufacturerOrganization');
      var manufacturer_name = el.tag('name').val();
      
      // route
      el = entry.tag('routeCode');
      var route_name = el.attr('displayName'),
          route_code = el.attr('code'),
          route_code_system = el.attr('codeSystem'),
          route_code_system_name = el.attr('codeSystemName');
      
      // instructions
      el = entry.template('2.16.840.1.113883.10.20.1.49');
      var instructions_text = Core.stripWhitespace(el.tag('text').val());
      el = el.tag('code');
      var education_name = el.attr('displayName'),
          education_code = el.attr('code'),
          education_code_system = el.attr('codeSystem');
  
      // dose
      el = entry.tag('doseQuantity');
      var dose_value = el.attr('value'),
          dose_unit = el.attr('unit');
      
      var data = (declined) ? declinedData : administeredData;
      data.entries.push({
        date: date,
        product: {
          name: product_name,
          code: product_code,
          code_system: product_code_system,
          code_system_name: product_code_system_name,
          translation: {
            name: translation_name,
            code: translation_code,
            code_system: translation_code_system,
            code_system_name: translation_code_system_name
          },
          lot_number: lot_number,
          manufacturer_name: manufacturer_name
        },
        dose_quantity: {
          value: dose_value,
          unit: dose_unit
        },
        route: {
          name: route_name,
          code: route_code,
          code_system: route_code_system,
          code_system_name: route_code_system_name
        },
        instructions: instructions_text,
        education_type: {
          name: education_name,
          code: education_code,
          code_system: education_code_system
        }
      });
    });
    
    return {
      administered: administeredData,
      declined: declinedData
    };
  };
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Core = __webpack_require__(0);

/*
 * Parser for the C32 medications section
 */
module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;
  
  function parse(c32) {    
    var parseDate = self.doc.parseDate;
    var medications = c32.section('medications');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Medications";
    data.templateId = medications.tag('templateId').attr('root');
    data.text = medications.tag('text').val(true);
    
    medications.entries().each(function(entry) {
  
      var text = null;
      el = entry.tag('substanceAdministration').immediateChildTag('text');
      if (!el.isEmpty()) {
        // technically C32s don't use this, but C83s (another CCD) do,
        // and CCDAs do, so we may see it anyways
        text = Core.stripWhitespace(el.val());
      }
  
      var effectiveTimes = entry.elsByTag('effectiveTime');
  
      el = effectiveTimes[0]; // the first effectiveTime is the med start date
      var start_date = null, end_date = null;
      if (el) {
        start_date = parseDate(el.tag('low').attr('value'));
        end_date = parseDate(el.tag('high').attr('value'));
      }
  
      // the second effectiveTime might the schedule period or it might just
      // be a random effectiveTime from further in the entry... xsi:type should tell us
      el = effectiveTimes[1];
      var schedule_type = null, schedule_period_value = null, schedule_period_unit = null;
      if (el && el.attr('xsi:type') === 'PIVL_TS') {
        var institutionSpecified = el.attr('institutionSpecified');
        if (institutionSpecified === 'true') {
          schedule_type= 'frequency';
        } else if (institutionSpecified === 'false') {
          schedule_type = 'interval';
        }
  
        el = el.tag('period');
        schedule_period_value = el.attr('value');
        schedule_period_unit = el.attr('unit');
      }
      
      el = entry.tag('manufacturedProduct').tag('code');
      var product_name = el.attr('displayName'),
          product_code = el.attr('code'),
          product_code_system = el.attr('codeSystem');
  
      var product_original_text = null;
      el = entry.tag('manufacturedProduct').tag('originalText');
      if (!el.isEmpty()) {
        product_original_text = Core.stripWhitespace(el.val());
      }
      // if we don't have a product name yet, try the originalText version
      if (!product_name && product_original_text) {
        product_name = product_original_text;
      }
  
      // irregularity in some c32s
      if (!product_name) {
        el = entry.tag('manufacturedProduct').tag('name');
        if (!el.isEmpty()) {
          product_name = Core.stripWhitespace(el.val());
        }
      }
      
      el = entry.tag('manufacturedProduct').tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
      el = entry.tag('doseQuantity');
      var dose_value = el.attr('value'),
          dose_unit = el.attr('unit');
      
      el = entry.tag('rateQuantity');
      var rate_quantity_value = el.attr('value'),
          rate_quantity_unit = el.attr('unit');
      
      el = entry.tag('precondition').tag('value');
      var precondition_name = el.attr('displayName'),
          precondition_code = el.attr('code'),
          precondition_code_system = el.attr('codeSystem');
      
      el = entry.template('2.16.840.1.113883.10.20.1.28').tag('value');
      var reason_name = el.attr('displayName'),
          reason_code = el.attr('code'),
          reason_code_system = el.attr('codeSystem');
      
      el = entry.tag('routeCode');
      var route_name = el.attr('displayName'),
          route_code = el.attr('code'),
          route_code_system = el.attr('codeSystem'),
          route_code_system_name = el.attr('codeSystemName');
      
      // participant/playingEntity => vehicle
      el = entry.tag('participant').tag('playingEntity');
      var vehicle_name = el.tag('name').val();
  
      el = el.tag('code');
      // prefer the code vehicle_name but fall back to the non-coded one
      // (which for C32s is in fact the primary field for this info)
      vehicle_name = el.attr('displayName') || vehicle_name;
      var vehicle_code = el.attr('code'),
          vehicle_code_system = el.attr('codeSystem'),
          vehicle_code_system_name = el.attr('codeSystemName');
      
      el = entry.tag('administrationUnitCode');
      var administration_name = el.attr('displayName'),
          administration_code = el.attr('code'),
          administration_code_system = el.attr('codeSystem'),
          administration_code_system_name = el.attr('codeSystemName');
      
      // performer => prescriber
      el = entry.tag('performer');
      var prescriber_organization = el.tag('name').val(),
          prescriber_person = null;
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        text: text,
        product: {
          name: product_name,
          text: product_original_text,
          code: product_code,
          code_system: product_code_system,
          translation: {
            name: translation_name,
            code: translation_code,
            code_system: translation_code_system,
            code_system_name: translation_code_system_name
          }
        },
        dose_quantity: {
          value: dose_value,
          unit: dose_unit
        },
        rate_quantity: {
          value: rate_quantity_value,
          unit: rate_quantity_unit
        },
        precondition: {
          name: precondition_name,
          code: precondition_code,
          code_system: precondition_code_system
        },
        reason: {
          name: reason_name,
          code: reason_code,
          code_system: reason_code_system
        },
        route: {
          name: route_name,
          code: route_code,
          code_system: route_code_system,
          code_system_name: route_code_system_name
        },
        schedule: {
          type: schedule_type,
          period_value: schedule_period_value,
          period_unit: schedule_period_unit
        },
        vehicle: {
          name: vehicle_name,
          code: vehicle_code,
          code_system: vehicle_code_system,
          code_system_name: vehicle_code_system_name
        },
        administration: {
          name: administration_name,
          code: administration_code,
          code_system: administration_code_system,
          code_system_name: administration_code_system_name
        },
        prescriber: {
          organization: prescriber_organization,
          person: prescriber_person
        }
      });
    });
    
    return data;
  };
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Core = __webpack_require__(0);

/*
 * Parser for the C32 problems section
 */
module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var problems = c32.section('problems');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Problems";
    data.templateId = problems.tag('templateId').attr('root');
    data.text = problems.tag('text').val(true);
  
    problems.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var start_date = parseDate(el.tag('low').attr('value')),
          end_date = parseDate(el.tag('high').attr('value'));
      
      el = entry.template('2.16.840.1.113883.10.20.1.28').tag('value');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
  
      // Pre-C32 CCDs put the problem name in this "originalText" field, and some vendors
      // continue doing this with their C32, even though it's not technically correct
      if (!name) {
        el = entry.template('2.16.840.1.113883.10.20.1.28').tag('originalText');
        if (!el.isEmpty()) {
          name = Core.stripWhitespace(el.val());
        }
      }
  
      el = entry.template('2.16.840.1.113883.10.20.1.28').tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
      el = entry.template('2.16.840.1.113883.10.20.1.50');
      var status = el.tag('value').attr('displayName');
      
      var age = null;
      el = entry.template('2.16.840.1.113883.10.20.1.38');
      if (!el.isEmpty()) {
        age = parseFloat(el.tag('value').attr('value'));
      }
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        name: name,
        status: status,
        age: age,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        translation: {
          name: translation_name,
          code: translation_code,
          code_system: translation_code_system,
          code_system_name: translation_code_system_name
        },
        comment: null // not part of C32
      });
    });
    
    return data;
  };
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 procedures section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var procedures = c32.section('procedures');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Procedures";
    data.templateId = procedures.tag('templateId').attr('root');
    data.text = procedures.tag('text').val(true);
    
    procedures.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var date = parseDate(el.attr('value'));
      
      el = entry.tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem');
  
      if (!name) {
        name = Core.stripWhitespace(entry.tag('originalText').val());
      }
      
      // 'specimen' tag not always present
      el = entry.tag('specimen').tag('code');
      var specimen_name = el.attr('displayName'),
          specimen_code = el.attr('code'),
          specimen_code_system = el.attr('codeSystem');
      
      el = entry.tag('performer').tag('addr');
      var organization = el.tag('name').val(),
          phone = el.tag('telecom').attr('value');
      
      var performer_dict = parseAddress(el);
      performer_dict.organization = organization;
      performer_dict.phone = phone;
      
      // participant => device
      el = entry.tag('participant').tag('code');
      var device_name = el.attr('displayName'),
          device_code = el.attr('code'),
          device_code_system = el.attr('codeSystem');
      
      data.entries.push({
        date: date,
        name: name,
        code: code,
        code_system: code_system,
        specimen: {
          name: specimen_name,
          code: specimen_code,
          code_system: specimen_code_system
        },
        performer: performer_dict,
        device: {
          name: device_name,
          code: device_code,
          code_system: device_code_system
        }
      });
    });
    
    return data;
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the C32 results (labs) section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var results = c32.section('results');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Results";
    data.templateId = results.tag('templateId').attr('root');
    data.text = results.tag('text').val(true);
  
  
    results.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var panel_date = parseDate(entry.tag('effectiveTime').attr('value'));
      if (!panel_date) {
        panel_date = parseDate(entry.tag('effectiveTime').tag('low').attr('value'));
      }
      
      // panel
      el = entry.tag('code');
      var panel_name = el.attr('displayName'),
          panel_code = el.attr('code'),
          panel_code_system = el.attr('codeSystem'),
          panel_code_system_name = el.attr('codeSystemName');
      
      var observation;
      var tests = entry.elsByTag('observation');
      var tests_data = [];
      
      for (var i = 0; i < tests.length; i++) {
        observation = tests[i];
        
        // sometimes results organizers contain non-results. we only want tests
        if (observation.template('2.16.840.1.113883.10.20.1.31').val()) {
          var date = parseDate(observation.tag('effectiveTime').attr('value'));
          
          el = observation.tag('code');
          var name = el.attr('displayName'),
              code = el.attr('code'),
              code_system = el.attr('codeSystem'),
              code_system_name = el.attr('codeSystemName');
  
          if (!name) {
            name = Core.stripWhitespace(observation.tag('text').val());
          }
      
          el = observation.tag('translation');
          var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
          el = observation.tag('value');
          var value = el.attr('value'),
              unit = el.attr('unit');
          // We could look for xsi:type="PQ" (physical quantity) but it seems better
          // not to trust that that field has been used correctly...
          if (value && !isNaN(parseFloat(value))) {
            value = parseFloat(value);
          }
          if (!value) {
            value = el.val(); // look for free-text values
          }
      
          el = observation.tag('referenceRange');
          var reference_range_text = Core.stripWhitespace(el.tag('observationRange').tag('text').val()),
              reference_range_low_unit = el.tag('observationRange').tag('low').attr('unit'),
              reference_range_low_value = el.tag('observationRange').tag('low').attr('value'),
              reference_range_high_unit = el.tag('observationRange').tag('high').attr('unit'),
              reference_range_high_value = el.tag('observationRange').tag('high').attr('value');
          
          tests_data.push({
            date: date,
            name: name,
            value: value,
            unit: unit,
            code: code,
            code_system: code_system,
            code_system_name: code_system_name,
            translation: {
              name: translation_name,
              code: translation_code,
              code_system: translation_code_system,
              code_system_name: translation_code_system_name
            },
            reference_range: {
              text: reference_range_text,
              low_unit: reference_range_low_unit,
              low_value: reference_range_low_value,
              high_unit: reference_range_high_unit,
              high_value: reference_range_high_value,
            }
          });
        }
      }
      
      data.entries.push({
        name: panel_name,
        code: panel_code,
        code_system: panel_code_system,
        code_system_name: panel_code_system_name,
        date: panel_date,
        tests: tests_data
      });
    });
    
    return data;
  };  
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
 * Parser for the C32 vitals section
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.parse = parse;

  function parse(c32) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var vitals = c32.section('vitals');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Vitals";
    data.templateId = vitals.tag('templateId').attr('root');
    data.text = vitals.tag('text').val(true);
    
    vitals.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var entry_date = parseDate(el.attr('value'));
      
      var result;
      var results = entry.elsByTag('component');
      var results_data = [];
      
      for (var j = 0; j < results.length; j++) {
        result = results[j];
        
        // Results
        
        el = result.tag('code');
        var name = el.attr('displayName'),
            code = el.attr('code'),
            code_system = el.attr('codeSystem'),
            code_system_name = el.attr('codeSystemName');
        
        el = result.tag('value');
        var value = parseFloat(el.attr('value')),
            unit = el.attr('unit');
        
        results_data.push({
          name: name,
          code: code,
          code_system: code_system,
          code_system_name: code_system_name,
          value: value,
          unit: unit
        });
      }
      
      data.entries.push({
        date: entry_date,
        results: results_data
      });
    });
    
    return data;
  };
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDAR2 document
 */

var ParseGenericInfo = __webpack_require__(1);
var Core = __webpack_require__(0);
var DocumentParser = __webpack_require__(31);
var DemographicsParser = __webpack_require__(2);
var HealthConcernsParser = __webpack_require__(4);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.documentParser = new DocumentParser(self.doc);
  self.demographicsParser = new DemographicsParser(self.doc);
  self.healthConcernsParser = new HealthConcernsParser(self.doc);
  
  self.run = function (ccda) {
    var data = {};

    data.document              = self.documentParser.document(ccda);
    data.demographics          = self.demographicsParser.demographics(ccda);
    data.health_concerns_document  = self.healthConcernsParser.health_concerns_document(ccda);
    data.json                  = Core.json;

    // Decorate each section with Title, templateId and text and adds missing sections
    ParseGenericInfo(ccda, data);

    return data;
  };
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDAR2 document section
 */
var Core = __webpack_require__(0);


module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.document = document;

  function document(ccda) {
    
      var parseDate = self.doc.parseDate;
      var parseName = self.doc.parseName;
      var parseAddress = self.doc.parseAddress;
      var data = {}, el;
    
      var doc = ccda.section('document');
      var date = parseDate(doc.tag('effectiveTime').attr('value'));
      var title = Core.stripWhitespace(doc.tag('title').val());
    
      // Parse Doc Type Info
      var templates =  doc.elsByTag('templateId');
      
      var rootTemplate = templates[0].attr('root');
      var secondTemplate;
      if(templates.length >1)
        secondTemplate = templates[1].attr('root');
      else
        secondTemplate = rootTemplate;
    
      var loinc = doc.tag('code').attr('code');
      var templateId = doc.tag('templateId').attr('root');
      var displayName = doc.tag('code').attr('displayName');
    
      var nonXml = doc.tag('nonXMLBody');
      var nonXmlNodes = nonXml.el.childNodes;
    
      var bodyType = "structured";
      var nonXmlBody = {
        type: "",
        mediaType: "",
        representation: "",
        rawText: "",
        reference: ""
      };
      if(nonXmlNodes && nonXmlNodes.length > 0) {
        bodyType = "unstructured";
        var text = nonXml.tag('text');
        var mediaType = "";
        var representation = "";
        var rawText = "";
        var reference = "";
        var type = "";
    
        // We have an embedded doc
        if(text && text.attr('mediaType')) {
          mediaType = text.attr('mediaType');
          representation = text.attr('representation');
          rawText = text.val();
          type = "embedded";
        }
    
        if(text && !mediaType) {
          reference = text.tag('reference').attr('value');
          type = "reference";
        }
        nonXmlBody = {
          type: type,
          mediaType: mediaType,
          representation: representation,
          rawText: rawText,
          reference: reference
        }
      }
    
      var docType = {
        type: "CCDAR2",
        rootTemplateId: rootTemplate,
        templateId: secondTemplate,
        displayName: displayName,
        loinc: loinc,
        bodyType: bodyType,
        nonXmlBody: nonXmlBody
      };
    
      var author = doc.tag('author');
      el = author.tag('assignedPerson').tag('name');
      var name_dict = parseName(el);
    
      el = author.tag('addr');
      var address_dict = parseAddress(el);
    
      el = author.tag('telecom');
      var work_phone = el.attr('value');
    
      var documentation_of_list = [];
      var performers = doc.tag('documentationOf').elsByTag('performer');
      for (var i = 0; i < performers.length; i++) {
        el = performers[i];
        var performer_name_dict = parseName(el);
        var performer_phone = el.tag('telecom').attr('value');
        var performer_addr = parseAddress(el.tag('addr'));
        documentation_of_list.push({
          name: performer_name_dict,
          phone: {
            work: performer_phone
          },
          address: performer_addr
        });
      }
    
      el = doc.tag('encompassingEncounter').tag('location');
      var location_name = Core.stripWhitespace(el.tag('name').val());
      var location_addr_dict = parseAddress(el.tag('addr'));
    
      var encounter_date = null;
      el = el.tag('effectiveTime');
      if (!el.isEmpty()) {
        encounter_date = parseDate(el.attr('value'));
      }
    
      data = {
        type: docType,
        date: date,
        title: title,
        author: {
          name: name_dict,
          address: address_dict,
          phone: {
            work: work_phone
          }
        },
        documentation_of: documentation_of_list,
        location: {
          name: location_name,
          address: location_addr_dict,
          encounter_date: encounter_date
        }
      };
    
      return data;
    };
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Core = __webpack_require__(0);
var AllergiesParser = __webpack_require__(33);
var CarePlanParser = __webpack_require__(34);
var DemographicsParser = __webpack_require__(2);
var DocumentParser = __webpack_require__(35);
var EncountersParser = __webpack_require__(36);
var FreeTextParser = __webpack_require__(37);
var FunctionalStatusesParser = __webpack_require__(38);
var ImmunizationsParser = __webpack_require__(39);
var InstructionsParser = __webpack_require__(40);
var MedicationsParser = __webpack_require__(41);
var ProblemsParser = __webpack_require__(42);
var ProceduresParser = __webpack_require__(43);
var ResultsParser = __webpack_require__(44);
var SmokingStatusParser = __webpack_require__(45);
var VitalsParser = __webpack_require__(46);

var ParseGenericInfo = __webpack_require__(1);

/*
 * Parser for the CCDA document
 */
module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.allergiesParser = new AllergiesParser(self.doc);
  self.carePlanParser = new CarePlanParser(self.doc);
  self.demographicsParser = new DemographicsParser(self.doc);
  self.documentParser = new DocumentParser(self.doc);
  self.encountersParser = new EncountersParser(self.doc);
  self.freeTextParser = new FreeTextParser();
  self.functionalStatusesParser = new FunctionalStatusesParser(self.doc);
  self.immunizationsParser = new ImmunizationsParser(self.doc);
  self.instructionsParser = new InstructionsParser();
  self.medicationsParser = new MedicationsParser(self.doc);
  self.problemsParser = new ProblemsParser(self.doc);
  self.proceduresParser = new ProceduresParser(self.doc);
  self.resultsParser = new ResultsParser(self.doc);
  self.smokingStatusParser = new SmokingStatusParser(self.doc);
  self.vitalsParser = new VitalsParser(self.doc);


  self.run = function (ccda) {
    var data = {};
    
    data.document              = self.documentParser.document(ccda);
    data.allergies             = self.allergiesParser.allergies(ccda);
    data.care_plan             = self.carePlanParser.care_plan(ccda);
    data.chief_complaint       = self.freeTextParser.free_text(ccda, 'chief_complaint');
    data.demographics          = self.demographicsParser.demographics(ccda);
    data.encounters            = self.encountersParser.encounters(ccda);
    data.functional_statuses   = self.functionalStatusesParser.functional_statuses(ccda);
    var parsedImmunizations    = self.immunizationsParser.immunizations(ccda);
    data.immunizations         = parsedImmunizations.administered;
    data.immunization_declines = parsedImmunizations.declined;
    data.instructions          = self.instructionsParser.instructions(ccda);
    data.results               = self.resultsParser.results(ccda);
    data.medications           = self.medicationsParser.medications(ccda);
    data.problems              = self.problemsParser.problems(ccda);
    data.procedures            = self.proceduresParser.procedures(ccda);
    data.smoking_status        = self.smokingStatusParser.smoking_status(ccda);
    data.vitals                = self.vitalsParser.vitals(ccda);
    
    data.json                        = Core.json;
    data.document.json               = Core.json;
    data.allergies.json              = Core.json;
    data.care_plan.json              = Core.json;
    data.chief_complaint.json        = Core.json;
    data.demographics.json           = Core.json;
    data.encounters.json             = Core.json;
    data.functional_statuses.json    = Core.json;
    data.immunizations.json          = Core.json;
    data.immunization_declines.json  = Core.json;
    data.instructions.json           = Core.json;
    data.results.json                = Core.json;
    data.medications.json            = Core.json;
    data.problems.json               = Core.json;
    data.procedures.json             = Core.json;
    data.smoking_status.json         = Core.json;
    data.vitals.json                 = Core.json;

    // Decorate each section with Title, templateId and text and adds missing sections
    ParseGenericInfo(ccda, data);

    return data;
  };
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA allergies section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  
  self.allergies = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var allergies = ccda.section('allergies');
  
      var data = {}, el;
      data.entries = [];
      data.displayName = "Allergies";
      data.templateId = allergies.tag('templateId').attr('root');
      data.text = allergies.tag('text').val(true);
    
    allergies.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var start_date = parseDate(el.tag('low').attr('value')),
          end_date = parseDate(el.tag('high').attr('value'));
      
      el = entry.template('2.16.840.1.113883.10.20.22.4.7').tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
      
      // value => reaction_type
      el = entry.template('2.16.840.1.113883.10.20.22.4.7').tag('value');
      var reaction_type_name = el.attr('displayName'),
          reaction_type_code = el.attr('code'),
          reaction_type_code_system = el.attr('codeSystem'),
          reaction_type_code_system_name = el.attr('codeSystemName');
      
      // reaction
      el = entry.template('2.16.840.1.113883.10.20.22.4.9').tag('value');
      var reaction_name = el.attr('displayName'),
          reaction_code = el.attr('code'),
          reaction_code_system = el.attr('codeSystem');
      
      // severity
      el = entry.template('2.16.840.1.113883.10.20.22.4.8').tag('value');
      var severity = el.attr('displayName');
      
      // participant => allergen
      el = entry.tag('participant').tag('code');
      var allergen_name = el.attr('displayName'),
          allergen_code = el.attr('code'),
          allergen_code_system = el.attr('codeSystem'),
          allergen_code_system_name = el.attr('codeSystemName');
  
      // this is not a valid place to store the allergen name but some vendors use it
      if (!allergen_name) {
        el = entry.tag('participant').tag('name');
        if (!el.isEmpty()) {
          allergen_name = el.val();
        }
      }
      if (!allergen_name) {
        el = entry.template('2.16.840.1.113883.10.20.22.4.7').tag('originalText');
        if (!el.isEmpty()) {
          allergen_name = Core.stripWhitespace(el.val());
        }
      }
      
      // status
      el = entry.template('2.16.840.1.113883.10.20.22.4.28').tag('value');
      var status = el.attr('displayName');
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        status: status,
        severity: severity,
        reaction: {
          name: reaction_name,
          code: reaction_code,
          code_system: reaction_code_system
        },
        reaction_type: {
          name: reaction_type_name,
          code: reaction_type_code,
          code_system: reaction_type_code_system,
          code_system_name: reaction_type_code_system_name
        },
        allergen: {
          name: allergen_name,
          code: allergen_code,
          code_system: allergen_code_system,
          code_system_name: allergen_code_system_name
        }
      });
    });
    
    return data;
  };
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA "plan of care" section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
    var self = this;
    self.doc = doc;

    self.care_plan = function (ccda) {        
        var data = [], el;
    
        var data = {}, el;
        care_plan = ccda.section('care_plan');
        data.entries = [];
        data.displayName = "Care Plan";
        data.templateId = care_plan.tag('templateId').attr('root');
        data.text = care_plan.tag('text').val(true);
    
        care_plan.entries().each(function (entry) {
    
            var name = null,
                code = null,
                code_system = null,
                code_system_name = null;
    
            // Plan of care encounters, which have no other details
            el = entry.template('2.16.840.1.113883.10.20.22.4.40');
            if (!el.isEmpty()) {
                name = 'encounter';
            } else {
                el = entry.tag('code');
    
                name = el.attr('displayName');
                code = el.attr('code');
                code_system = el.attr('codeSystem');
                code_system_name = el.attr('codeSystemName');
            }
    
            var text = Core.stripWhitespace(entry.tag('text').val(true));
            var time = entry.tag('effectiveTime').immediateChildTag('center').attr('value');
    
            data.entries.push({
                text: text,
                name: name,
                code: code,
                code_system: code_system,
                code_system_name: code_system_name,
                effective_time: parse(time)
            });
        });
    
        return data;
    
        function parse(str) {
            if (!str) return null;
            var y = str.substr(0, 4),
                m = str.substr(4, 2) - 1,
                d = str.substr(6, 2);
            var D = new Date(y, m, d);
            return (D.getFullYear() == y && D.getMonth() == m && D.getDate() == d) ? D : null;
        }
    };
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA document section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.document = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data = {}, el;
    
    var doc = ccda.section('document');
  
  
    // Parse Doc Type Info
    var templates =  doc.elsByTag('templateId');
    var rootTemplate = templates[0].attr('root');
    var secondTemplate;
    if(templates.length >1)
      secondTemplate = templates[1].attr('root');
    else
      secondTemplate = rootTemplate;
  
    var loinc = doc.tag('code').attr('code');
    var templateId = doc.tag('templateId').attr('root');
    var displayName = doc.tag('code').attr('displayName');
  
    var nonXml = doc.tag('nonXMLBody');
    var nonXmlNodes = nonXml.el.childNodes;
  
    var bodyType = "structured";
    var nonXmlBody = {
      type: "",
      mediaType: "",
      representation: "",
      rawText: "",
      reference: ""
    };
    if(nonXmlNodes && nonXmlNodes.length > 0) {
      bodyType = "unstructured";
      var text = nonXml.tag('text');
      var mediaType = "";
      var representation = "";
      var rawText = "";
      var reference = "";
      var type = "";
  
      // We have an embedded doc
      if(text && text.attr('mediaType')) {
        mediaType = text.attr('mediaType');
        representation = text.attr('representation');
        rawText = text.val();
        type = "embedded";
      }
  
      if(text && !mediaType) {
         reference = text.tag('reference').attr('value');
        type = "reference";
      }
      nonXmlBody = {
        type: type,
        mediaType: mediaType,
        representation: representation,
        rawText: rawText,
        reference: reference
      }
    }
  
    var docType = {
      type: "CCDAR2",
      rootTemplateId: rootTemplate,
      templateId: secondTemplate,
      displayName: displayName,
      loinc: loinc,
      bodyType: bodyType,
      nonXmlBody: nonXmlBody
    };
  
    var date = parseDate(doc.tag('effectiveTime').attr('value'));
    var title = Core.stripWhitespace(doc.tag('title').val());
    
    var author = doc.tag('author');
    el = author.tag('assignedPerson').tag('name');
    var name_dict = parseName(el);
    
    el = author.tag('addr');
    var address_dict = parseAddress(el);
    
    el = author.tag('telecom');
    var work_phone = el.attr('value');
  
    var documentation_of_list = [];
    var performers = doc.tag('documentationOf').elsByTag('performer');
    for (var i = 0; i < performers.length; i++) {
      el = performers[i];
      var performer_name_dict = parseName(el);
      var performer_phone = el.tag('telecom').attr('value');
      var performer_addr = parseAddress(el.tag('addr'));
      documentation_of_list.push({
        name: performer_name_dict,
        phone: {
          work: performer_phone
        },
        address: performer_addr
      });
    }
  
    el = doc.tag('encompassingEncounter').tag('location');
    var location_name = Core.stripWhitespace(el.tag('name').val());
    var location_addr_dict = parseAddress(el.tag('addr'));
    
    var encounter_date = null;
    el = el.tag('effectiveTime');
    if (!el.isEmpty()) {
      encounter_date = parseDate(el.attr('value'));
    }
    
    data = {
      type: docType,
      date: date,
      title: title,
      author: {
        name: name_dict,
        address: address_dict,
        phone: {
          work: work_phone
        }
      },
      documentation_of: documentation_of_list,
      location: {
        name: location_name,
        address: location_addr_dict,
        encounter_date: encounter_date
      }
    };
    
    return data;
  };
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*
 * Parser for the CCDA encounters section
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.encounters = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var encounters = ccda.section('encounters');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Encounters";
    data.templateId = encounters.tag('templateId').attr('root');
    data.text = encounters.tag('text').val(true);
    
    encounters.entries().each(function(entry) {
      
      var date = parseDate(entry.tag('effectiveTime').attr('value'));
      
      el = entry.tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName'),
          code_system_version = el.attr('codeSystemVersion');
      
      // translation
      el = entry.tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
      // performer
      el = entry.tag('performer').tag('code');
      var performer_name = el.attr('displayName'),
          performer_code = el.attr('code'),
          performer_code_system = el.attr('codeSystem'),
          performer_code_system_name = el.attr('codeSystemName');
    
      // participant => location
      el = entry.tag('participant');
      var organization = el.tag('code').attr('displayName');
      
      var location_dict = parseAddress(el);
      location_dict.organization = organization;
  
      // findings
      var findings = [];
      var findingEls = entry.elsByTag('entryRelationship');
      for (var i = 0; i < findingEls.length; i++) {
        el = findingEls[i].tag('value');
        findings.push({
          name: el.attr('displayName'),
          code: el.attr('code'),
          code_system: el.attr('codeSystem')
        });
      }
      
      data.entries.push({
        date: date,
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        code_system_version: code_system_version,
        findings: findings,
        translation: {
          name: translation_name,
          code: translation_code,
          code_system: translation_code_system,
          code_system_name: translation_code_system_name
        },
        performer: {
          name: performer_name,
          code: performer_code,
          code_system: performer_code_system,
          code_system_name: performer_code_system_name
        },
        location: location_dict
      });
    });
    
    return data;
  };
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for any freetext section (i.e., contains just a single <text> element)
 */

var Core = __webpack_require__(0);

module.exports = function() {
  var self = this;

  self.free_text = function (ccda, sectionName) {    
    var data = {};
    
    var doc = ccda.section(sectionName);
    var text = Core.stripWhitespace(doc.tag('text').val(true));
    
    data = {
      text: text
    };

    return data;
  };
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
 * Parser for the CCDA functional & cognitive status
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.functional_statuses = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var data = [], el;
  
    var statuses = ccda.section('functional_statuses');
  
    statuses.entries().each(function(entry) {
  
      var date = parseDate(entry.tag('effectiveTime').attr('value'));
      if (!date) {
        date = parseDate(entry.tag('effectiveTime').tag('low').attr('value'));
      }
  
      el = entry.tag('value');
  
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
  
      data.push({
        date: date,
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name
      });
    
    });
    
    return data;
  };  
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA immunizations section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.immunizations = function (ccda) {    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var administeredData = {}, declinedData = {}, product, el;
  
    var immunizations = ccda.section('immunizations');
  
    administeredData.entries = [];
    administeredData.displayName = "Immunizations";
    administeredData.templateId = immunizations.tag('templateId').attr('root');
    administeredData.text = immunizations.tag('text').val(true);
  
    declinedData.entries = [];
    declinedData.displayName = "Immunizations Declined";
    declinedData.templateId = immunizations.tag('templateId').attr('root');
    declinedData.text = immunizations.tag('text').val(true);
    
    immunizations.entries().each(function(entry) {
      
      // date
      el = entry.tag('effectiveTime');
      var date = parseDate(el.attr('value'));
      if (!date) {
        date = parseDate(el.tag('low').attr('value'));
      }
  
      // if 'declined' is true, this is a record that this vaccine WASN'T administered
      el = entry.tag('substanceAdministration');
      var declined = el.boolAttr('negationInd');
  
      // product
      product = entry.template('2.16.840.1.113883.10.20.22.4.54');
      el = product.tag('code');
      var product_name = el.attr('displayName'),
          product_code = el.attr('code'),
          product_code_system = el.attr('codeSystem'),
          product_code_system_name = el.attr('codeSystemName');
  
      // translation
      el = product.tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
  
      // misc product details
      el = product.tag('lotNumberText');
      var lot_number = el.val();
  
      el = product.tag('manufacturerOrganization');
      var manufacturer_name = el.tag('name').val();
      
      // route
      el = entry.tag('routeCode');
      var route_name = el.attr('displayName'),
          route_code = el.attr('code'),
          route_code_system = el.attr('codeSystem'),
          route_code_system_name = el.attr('codeSystemName');
      
      // instructions
      el = entry.template('2.16.840.1.113883.10.20.22.4.20');
      var instructions_text = Core.stripWhitespace(el.tag('text').val());
      el = el.tag('code');
      var education_name = el.attr('displayName'),
          education_code = el.attr('code'),
          education_code_system = el.attr('codeSystem');
  
      // dose
      el = entry.tag('doseQuantity');
      var dose_value = el.attr('value'),
          dose_unit = el.attr('unit');
      
      var data = (declined) ? declinedData : administeredData;
      data.entries.push({
        date: date,
        product: {
          name: product_name,
          code: product_code,
          code_system: product_code_system,
          code_system_name: product_code_system_name,
          translation: {
            name: translation_name,
            code: translation_code,
            code_system: translation_code_system,
            code_system_name: translation_code_system_name
          },
          lot_number: lot_number,
          manufacturer_name: manufacturer_name
        },
        dose_quantity: {
          value: dose_value,
          unit: dose_unit
        },
        route: {
          name: route_name,
          code: route_code,
          code_system: route_code_system,
          code_system_name: route_code_system_name
        },
        instructions: instructions_text,
        education_type: {
          name: education_name,
          code: education_code,
          code_system: education_code_system
        }
      });
    });
    
    return {
      administered: administeredData,
      declined: declinedData
    };
  };
}




/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA "plan of care" section
 */

var Core = __webpack_require__(0);

module.exports = function() {
  var self = this;
  
  self.instructions = function (ccda) {
    
    var data = [], el;
    
    var instructions = ccda.section('instructions');
    data.templateId = instructions.tag('templateId').attr('root');
    
    instructions.entries().each(function(entry) {
  
      el = entry.tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
  
      var text = Core.stripWhitespace(entry.tag('text').val(true));
      
      data.push({
        text: text,
        name: name,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name
      });
    });
    
    return data;
  };
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA medications section
 */

var Core = __webpack_require__(0);

module.exports = function (doc) {
  var self = this;
  self.doc = doc;

  self.medications = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var medications = ccda.section('medications');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Medications";
    data.templateId = medications.tag('templateId').attr('root');
    data.text = medications.tag('text').val(true);
  
    medications.entries().each(function(entry) {
      
      el = entry.tag('text');
      var sig = Core.stripWhitespace(el.val());
  
      var effectiveTimes = entry.elsByTag('effectiveTime');
  
      el = effectiveTimes[0]; // the first effectiveTime is the med start date
      var start_date = null, end_date = null;
      if (el) {
        start_date = parseDate(el.tag('low').attr('value'));
        end_date = parseDate(el.tag('high').attr('value'));
      }
  
      // the second effectiveTime might the schedule period or it might just
      // be a random effectiveTime from further in the entry... xsi:type should tell us
      el = effectiveTimes[1];
      var schedule_type = null, schedule_period_value = null, schedule_period_unit = null;
      if (el && el.attr('xsi:type') === 'PIVL_TS') {
        var institutionSpecified = el.attr('institutionSpecified');
        if (institutionSpecified === 'true') {
          schedule_type= 'frequency';
        } else if (institutionSpecified === 'false') {
          schedule_type = 'interval';
        }
  
        el = el.tag('period');
        schedule_period_value = el.attr('value');
        schedule_period_unit = el.attr('unit');
      }
      
      el = entry.tag('manufacturedProduct').tag('code');
      var product_name = el.attr('displayName'),
          product_code = el.attr('code'),
          product_code_system = el.attr('codeSystem');
  
      var product_original_text = null;
      el = entry.tag('manufacturedProduct').tag('originalText');
      if (!el.isEmpty()) {
        product_original_text = Core.stripWhitespace(el.val());
      }
      // if we don't have a product name yet, try the originalText version
      if (!product_name && product_original_text) {
        product_name = product_original_text;
      }
      
      el = entry.tag('manufacturedProduct').tag('translation');
      var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
      el = entry.tag('doseQuantity');
      var dose_value = el.attr('value'),
          dose_unit = el.attr('unit');
      
      el = entry.tag('rateQuantity');
      var rate_quantity_value = el.attr('value'),
          rate_quantity_unit = el.attr('unit');
      
      el = entry.tag('precondition').tag('value');
      var precondition_name = el.attr('displayName'),
          precondition_code = el.attr('code'),
          precondition_code_system = el.attr('codeSystem');
      
      el = entry.template('2.16.840.1.113883.10.20.22.4.19').tag('value');
      var reason_name = el.attr('displayName'),
          reason_code = el.attr('code'),
          reason_code_system = el.attr('codeSystem');
      
      el = entry.tag('routeCode');
      var route_name = el.attr('displayName'),
          route_code = el.attr('code'),
          route_code_system = el.attr('codeSystem'),
          route_code_system_name = el.attr('codeSystemName');
      
      // participant/playingEntity => vehicle
      el = entry.tag('participant').tag('playingEntity');
      var vehicle_name = el.tag('name').val();
  
      el = el.tag('code');
      // prefer the code vehicle_name but fall back to the non-coded one
      vehicle_name = el.attr('displayName') || vehicle_name;
      var vehicle_code = el.attr('code'),
          vehicle_code_system = el.attr('codeSystem'),
          vehicle_code_system_name = el.attr('codeSystemName');
      
      el = entry.tag('administrationUnitCode');
      var administration_name = el.attr('displayName'),
          administration_code = el.attr('code'),
          administration_code_system = el.attr('codeSystem'),
          administration_code_system_name = el.attr('codeSystemName');
      
      // performer => prescriber
      el = entry.tag('performer');
      var prescriber_organization = el.tag('name').val(),
          prescriber_person = null;
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        text: sig,
        product: {
          name: product_name,
          code: product_code,
          code_system: product_code_system,
          text: product_original_text,
          translation: {
            name: translation_name,
            code: translation_code,
            code_system: translation_code_system,
            code_system_name: translation_code_system_name
          }
        },
        dose_quantity: {
          value: dose_value,
          unit: dose_unit
        },
        rate_quantity: {
          value: rate_quantity_value,
          unit: rate_quantity_unit
        },
        precondition: {
          name: precondition_name,
          code: precondition_code,
          code_system: precondition_code_system
        },
        reason: {
          name: reason_name,
          code: reason_code,
          code_system: reason_code_system
        },
        route: {
          name: route_name,
          code: route_code,
          code_system: route_code_system,
          code_system_name: route_code_system_name
        },
        schedule: {
          type: schedule_type,
          period_value: schedule_period_value,
          period_unit: schedule_period_unit
        },
        vehicle: {
          name: vehicle_name,
          code: vehicle_code,
          code_system: vehicle_code_system,
          code_system_name: vehicle_code_system_name
        },
        administration: {
          name: administration_name,
          code: administration_code,
          code_system: administration_code_system,
          code_system_name: administration_code_system_name
        },
        prescriber: {
          organization: prescriber_organization,
          person: prescriber_person
        }
      });
    });
    
    return data;
  };
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA problems section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.problems = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
  
    var problems = ccda.section('problems');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Problems";
    data.templateId = problems.tag('templateId').attr('root');
    data.text = problems.tag('text').val(true);
    
    problems.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var start_date = parseDate(el.tag('low').attr('value')),
          end_date = parseDate(el.tag('high').attr('value'));
      
      el = entry.template('2.16.840.1.113883.10.20.22.4.4').tag('value');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem'),
          code_system_name = el.attr('codeSystemName');
      
      el = entry.template('2.16.840.1.113883.10.20.22.4.4').tag('translation');
      var translation_name = el.attr('displayName'),
        translation_code = el.attr('code'),
        translation_code_system = el.attr('codeSystem'),
        translation_code_system_name = el.attr('codeSystemName');
      
      el = entry.template('2.16.840.1.113883.10.20.22.4.6');
      var status = el.tag('value').attr('displayName');
      
      var age = null;
      el = entry.template('2.16.840.1.113883.10.20.22.4.31');
      if (!el.isEmpty()) {
        age = parseFloat(el.tag('value').attr('value'));
      }
  
      el = entry.template('2.16.840.1.113883.10.20.22.4.64');
      var comment = Core.stripWhitespace(el.tag('text').val());
      
      data.entries.push({
        date_range: {
          start: start_date,
          end: end_date
        },
        name: name,
        status: status,
        age: age,
        code: code,
        code_system: code_system,
        code_system_name: code_system_name,
        translation: {
          name: translation_name,
          code: translation_code,
          code_system: translation_code_system,
          code_system_name: translation_code_system_name
        },
        comment: comment
      });
    });
    
    return data;
  };
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA procedures section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.procedures = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var procedures = ccda.section('procedures');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Procedures";
    data.templateId = procedures.tag('templateId').attr('root');
    data.text = procedures.tag('text').val(true);
    
    procedures.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var date = parseDate(el.attr('value'));
      
      el = entry.tag('code');
      var name = el.attr('displayName'),
          code = el.attr('code'),
          code_system = el.attr('codeSystem');
  
      if (!name) {
        name = Core.stripWhitespace(entry.tag('originalText').val());
      }
      
      // 'specimen' tag not always present
      el = entry.tag('specimen').tag('code');
      var specimen_name = el.attr('displayName'),
          specimen_code = el.attr('code'),
          specimen_code_system = el.attr('codeSystem');
      
      el = entry.tag('performer').tag('addr');
      var organization = el.tag('name').val(),
          phone = el.tag('telecom').attr('value');
      
      var performer_dict = parseAddress(el);
      performer_dict.organization = organization;
      performer_dict.phone = phone;
      
      // participant => device
      el = entry.template('2.16.840.1.113883.10.20.22.4.37').tag('code');
      var device_name = el.attr('displayName'),
          device_code = el.attr('code'),
          device_code_system = el.attr('codeSystem');
      
      data.entries.push({
        date: date,
        name: name,
        code: code,
        code_system: code_system,
        specimen: {
          name: specimen_name,
          code: specimen_code,
          code_system: specimen_code_system
        },
        performer: performer_dict,
        device: {
          name: device_name,
          code: device_code,
          code_system: device_code_system
        }
      });
    });
    
    return data;
  };
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDA results (labs) section
 */

var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.results = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var results = ccda.section('results');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Results";
    data.templateId = results.tag('templateId').attr('root');
    data.text = results.tag('text').val(true);
    
    results.entries().each(function(entry) {
      
      // panel
      el = entry.tag('code');
      var panel_name = el.attr('displayName'),
          panel_code = el.attr('code'),
          panel_code_system = el.attr('codeSystem'),
          panel_code_system_name = el.attr('codeSystemName');
      
      var observation;
      var tests = entry.elsByTag('observation');
      var tests_data = [];
      
      for (var i = 0; i < tests.length; i++) {
        observation = tests[i];
        
        var date = parseDate(observation.tag('effectiveTime').attr('value'));
        
        el = observation.tag('code');
        var name = el.attr('displayName'),
            code = el.attr('code'),
            code_system = el.attr('codeSystem'),
            code_system_name = el.attr('codeSystemName');
  
        if (!name) {
          name = Core.stripWhitespace(observation.tag('text').val());
        }
        
        el = observation.tag('translation');
        var translation_name = el.attr('displayName'),
          translation_code = el.attr('code'),
          translation_code_system = el.attr('codeSystem'),
          translation_code_system_name = el.attr('codeSystemName');
      
        el = observation.tag('value');
        var value = el.attr('value'),
            unit = el.attr('unit');
        // We could look for xsi:type="PQ" (physical quantity) but it seems better
        // not to trust that that field has been used correctly...
        if (value && !isNaN(parseFloat(value))) {
          value = parseFloat(value);
        }
        if (!value) {
          value = el.val(); // look for free-text values
        }
        
        el = observation.tag('referenceRange');
        var reference_range_text = Core.stripWhitespace(el.tag('observationRange').tag('text').val()),
            reference_range_low_unit = el.tag('observationRange').tag('low').attr('unit'),
            reference_range_low_value = el.tag('observationRange').tag('low').attr('value'),
            reference_range_high_unit = el.tag('observationRange').tag('high').attr('unit'),
            reference_range_high_value = el.tag('observationRange').tag('high').attr('value');
        
        tests_data.push({
          date: date,
          name: name,
          value: value,
          unit: unit,
          code: code,
          code_system: code_system,
          code_system_name: code_system_name,
          translation: {
            name: translation_name,
            code: translation_code,
            code_system: translation_code_system,
            code_system_name: translation_code_system_name
          },
          reference_range: {
            text: reference_range_text,
            low_unit: reference_range_low_unit,
            low_value: reference_range_low_value,
            high_unit: reference_range_high_unit,
            high_value: reference_range_high_value,
          }
        });
      }
      
      data.entries.push({
        name: panel_name,
        code: panel_code,
        code_system: panel_code_system,
        code_system_name: panel_code_system_name,
        tests: tests_data
      });
    });
    
    return data;
  };
}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/*
 * Parser for the CCDA smoking status in social history section
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.smoking_status = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data, el;
  
    var name = null,
        code = null,
        code_system = null,
        code_system_name = null,
        entry_date = null;
  
    // We can parse all of the social_history sections,
    // but in practice, this section seems to be used for
    // smoking status, so we're just going to break that out.
    // And we're just looking for the first non-empty one.
    var social_history = ccda.section('social_history');
    var entries = social_history.entries();
    for (var i=0; i < entries.length; i++) {
      var entry = entries[i];
  
      var smoking_status = entry.template('2.16.840.1.113883.10.20.22.4.78');
      if (smoking_status.isEmpty()) {
        smoking_status = entry.template('2.16.840.1.113883.10.22.4.78');
      }
      if (smoking_status.isEmpty()) {
        continue;
      }
  
      el = smoking_status.tag('effectiveTime');
      entry_date = parseDate(el.attr('value'));
  
      el = smoking_status.tag('value');
      name = el.attr('displayName');
      code = el.attr('code');
      code_system = el.attr('codeSystem');
      code_system_name = el.attr('codeSystemName');
  
      if (name) {
        break;
      }
    }
  
    data = {
      date: entry_date,
      name: name,
      code: code,
      code_system: code_system,
      code_system_name: code_system_name
    };
    
    return data;
  };  
}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

/*
 * Parser for the CCDA vitals section
 */

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.vitals = function (ccda) {
    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var vitals = ccda.section('vitals');
  
    var data = {}, el;
    data.entries = [];
    data.displayName = "Vitals";
    data.templateId = vitals.tag('templateId').attr('root');
    data.text = vitals.tag('text').val(true);
  
    vitals.entries().each(function(entry) {
      
      el = entry.tag('effectiveTime');
      var entry_date = parseDate(el.attr('value'));
      
      var result;
      var results = entry.elsByTag('component');
      var results_data = [];
      
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        
        el = result.tag('code');
        var name = el.attr('displayName'),
            code = el.attr('code'),
            code_system = el.attr('codeSystem'),
            code_system_name = el.attr('codeSystemName');
        
        el = result.tag('value');
        var value = parseFloat(el.attr('value')),
            unit = el.attr('unit');
        
        results_data.push({
          name: name,
          code: code,
          code_system: code_system,
          code_system_name: code_system_name,
          value: value,
          unit: unit
        });
      }
      
      data.entries.push({
        date: entry_date,
        results: results_data
      });
    });
    
    return data;
  };
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDAR2 document
 */

var ParseGenericInfo = __webpack_require__(1);
var Core = __webpack_require__(0);

var DocumentParser = __webpack_require__(48);
var DemographicsParser = __webpack_require__(2);
var HealthConcernsParser = __webpack_require__(4);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;
  self.documentParser = new DocumentParser(self.doc);
  self.demographicsParser = new DemographicsParser(self.doc);
  self.healthConcernsParser = new HealthConcernsParser(self.doc);

  self.run = function (ccda) {    
      var data = {};
  
      data.document              = self.documentParser.document(ccda);
      data.demographics          = self.demographicsParser.demographics(ccda);
      data.health_concerns_document  = self.healthConcernsParser.health_concerns_document(ccda);
      data.json                  = Core.json;
  
      // Decorate each section with Title, templateId and text and adds missing sections
      ParseGenericInfo(ccda, data);
  
      return data;
    };
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Parser for the CCDAR2 document section
 */
var Core = __webpack_require__(0);

module.exports = function(doc) {
  var self = this;
  self.doc = doc;

  self.document = function (ccda) {    
    var parseDate = self.doc.parseDate;
    var parseName = self.doc.parseName;
    var parseAddress = self.doc.parseAddress;
    var data = {}, el;
  
    var doc = ccda.section('document');
    var date = parseDate(doc.tag('effectiveTime').attr('value'));
    var title = Core.stripWhitespace(doc.tag('title').val());
  
    // Parse Doc Type Info
    var templates =  doc.elsByTag('templateId');
  
    var rootTemplate = templates[0].attr('root');
    var secondTemplate;
    if(templates.length >1)
      secondTemplate = templates[1].attr('root');
    else
      secondTemplate = rootTemplate;
  
    var loinc = doc.tag('code').attr('code');
    var templateId = doc.tag('templateId').attr('root');
    var displayName = doc.tag('code').attr('displayName');
  
    var nonXml = doc.tag('nonXMLBody');
    var nonXmlNodes = nonXml.el.childNodes;
  
    var bodyType = "structured";
    var nonXmlBody = {
      type: "",
      mediaType: "",
      representation: "",
      rawText: "",
      reference: ""
    };
    if(nonXmlNodes && nonXmlNodes.length > 0) {
      bodyType = "unstructured";
      var text = nonXml.tag('text');
      var mediaType = "";
      var representation = "";
      var rawText = "";
      var reference = "";
      var type = "";
  
      // We have an embedded doc
      if(text && text.attr('mediaType')) {
        mediaType = text.attr('mediaType');
        representation = text.attr('representation');
        rawText = text.val();
        type = "embedded";
      }
  
      if(text && !mediaType) {
        reference = text.tag('reference').attr('value');
        type = "reference";
      }
      nonXmlBody = {
        type: type,
        mediaType: mediaType,
        representation: representation,
        rawText: rawText,
        reference: reference
      }
    }
  
    var docType = {
      type: "CCDAR2",
      rootTemplateId: rootTemplate,
      templateId: secondTemplate,
      displayName: displayName,
      loinc: loinc,
      bodyType: bodyType,
      nonXmlBody: nonXmlBody
    };
  
    var author = doc.tag('author');
    el = author.tag('assignedPerson').tag('name');
    var name_dict = parseName(el);
  
    el = author.tag('addr');
    var address_dict = parseAddress(el);
  
    el = author.tag('telecom');
    var work_phone = el.attr('value');
  
    var documentation_of_list = [];
    var performers = doc.tag('documentationOf').elsByTag('performer');
    for (var i = 0; i < performers.length; i++) {
      el = performers[i];
      var performer_name_dict = parseName(el);
      var performer_phone = el.tag('telecom').attr('value');
      var performer_addr = parseAddress(el.tag('addr'));
      documentation_of_list.push({
        name: performer_name_dict,
        phone: {
          work: performer_phone
        },
        address: performer_addr
      });
    }
  
    el = doc.tag('encompassingEncounter').tag('location');
    var location_name = Core.stripWhitespace(el.tag('name').val());
    var location_addr_dict = parseAddress(el.tag('addr'));
  
    var encounter_date = null;
    el = el.tag('effectiveTime');
    if (!el.isEmpty()) {
      encounter_date = parseDate(el.attr('value'));
    }
  
    data = {
      type: docType,
      date: date,
      title: title,
      author: {
        name: name_dict,
        address: address_dict,
        phone: {
          work: work_phone
        }
      },
      documentation_of: documentation_of_list,
      location: {
        name: location_name,
        address: location_addr_dict,
        encounter_date: encounter_date
      }
    };
  
    return data;
  };
}

/***/ })
/******/ ]);
//# sourceMappingURL=bluebutton.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("xmldom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('name', '<span>{opts.name.given[0]} {opts.name.family}{possesive}</span>', '', '', function(opts) {
    if (opts.possesive) {
      this.possesive = opts.name.family.slice(-1) === 's' ? '\'' : '\'s';
    }
});

    
  

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services__);

    var riot = __webpack_require__(0)
    



riot.tag2('header', '<nav class="navbar navbar-default navbar-fixed-top"> <div class="container-fluid"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#"> {opts.data.document.title} - <name name="{opts.data.demographics.name}" class="text-muted"></name> </a> </div> <div class="collapse navbar-collapse" id="navbar-collapse-1"> <ul class="nav navbar-nav navbar-right" id="jump-nav"> <li class="dropdown"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Documents <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li each="{documents}" class="{active: active}"> <a href="#" onclick="{load}"> {Name} </a> </li> </ul> </li> <li class="dropdown"> <a href="#" class="dropdown-toggle" id="jump" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> Jump to <span class="caret"></span> </a> <ul class="dropdown-menu" aria-labelledby="jump"> <li> <a href="#">Top</a> </li> <li role="separator" class="divider"></li> <li each="{opts.sections}"> <a href="#{key}"> <i class="fa fa-{icon}" aria-hidden="true"></i> {display} </a> </li> </ul> </li> <li class="{active: this.parent.showPreferences}"> <a href="#" onclick="{showPreferences}"> <i class="fa fa-lg fa-cog"></i> </a> </li> </ul> </div> </div> </nav>', '', '', function(opts) {


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
    }

    this.showPreferences = function() {
      this.parent.showPreferences = true;
      this.parent.update();
    }

    this.toggleActive = function(e) {
      __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(this.documents, function(d) {
        d.active = false;
      });
      e.item.active = true;
    }
});

    
  

/***/ }),
/* 26 */
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
    }

    this.isEnabled = function() {
      return opts.section.enabled || opts.enabled;
    }

    this.toggleSection = function() {
      opts.section.enabled = !opts.section.enabled;
    }
});

    
  

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('ccda-section', '', '', '', function(opts) {
  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };

  riot.mount(this.content, opts.current.tagName, options);
  this.on('update', function() {
    options.data = opts.parent.data[opts.current.key];
  });
});

    
  

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__);

    var riot = __webpack_require__(0)
    
riot.tag2('raw', '<span></span>', '', '', function(opts) {

  this.on('update', function() {
    //this.root.innerHTML = bootstrapize(opts.content);
  }.bind(this));
});

    
  

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('nonxml', '<div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title"> Document Attachment </h3> </div> <div class="panel-body"> The clinical document you are viewing has an attached document <b>{opts.nonxml.reference}</b>. Please download the document through your EMR. <br> </div>', '', '', function(opts) {
});
    
  

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('empty', '<span class="text-muted">This section is empty.</span>', '', '', function(opts) {
});

    
  

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('generic', '<panel section="{opts.section}" data="{opts.data}"> <raw content="{opts.data.text}" if="{opts.data.text}"></raw> <empty if="{!opts.data.text}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utilities_lodashmixins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_lang__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utilities_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__utilities_lang__);

    var riot = __webpack_require__(0)
    




riot.tag2('demographics', '<div class="panel panel-default" id="demographics"> <div class="panel-heading"> <h2><name name="{opts.demographics.name}"></name></h2> <a href="#" class="toggle-body" onclick="{toggle}"> <i class="fa fa-chevron-down {fa-rotate-180: visible}" title="Show/hide"></i> </a> <ul class="fa-ul"> <li class="dob"> <i class="fa fa-li fa-birthday-cake" title="DOB"></i> <p>{formatDate(opts.demographics.dob)}</p> </li> <li class="guardian" if="{opts.demographics.guardian.name.family}"> <i class="fa fa-li fa-child" title="Guardian"></i> <name name="{opts.demographics.guardian.name}"></name> <span class="text-muted">(guardian)</span> </li> </ul> </div> <div class="panel-body" show="{visible}"> <ul class="fa-ul"> <li class="narrative"> <i class="fa fa-li fa-female" title="Demographics"></i> <p> <strong>{opts.demographics.name.given[0]}</strong> is a <strong>{opts.demographics.marital_status} {opts.demographics.race} {opts.demographics.gender}</strong> whose religion is <strong>{opts.demographics.religion || \'unspecified\'}</strong> and speaks <strong>{formatLanguage(opts.demographics.language)}</strong>. </p> </li> <li> <i class="fa fa-li fa-map-marker" title="Address"></i> <address class="address"> {opts.demographics.address.street[0]}<br> {opts.demographics.address.city}, {opts.demographics.address.state} {opts.demographics.address.zip} </address> </li> <li> <i class="fa fa-li fa-phone" title="Phone"></i> <address class="phone"> {formatPhone(opts.demographics.phone)}</address> </li> <li if="{opts.demographics.provider.organization}"> <i class="fa fa-li fa-building" title="Provider"></i> <p>{opts.demographics.provider.organization}</p> </li> </ul> </div> </div>', '', '', function(opts) {
    this.visible = true;

    this.toggle = function() {
      this.visible = !this.visible;
    }

    this.formatDate = function(date) {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()(date).format('MMM D, YYYY');
    }

    this.formatPhone = function(phone) {

      var p = '';
      // which phone?
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
      //_.(p).forEach(function(value) {
        //clean = clean + value;
      //});
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
    }

    this.formatLanguage = function(languageCode) {
      return languageCode && __WEBPACK_IMPORTED_MODULE_3__utilities_lang__["languages"][languageCode.toLowerCase()] || 'an uknown language';
    }

    // religion: http://www.hl7.org/documentcenter/public_temp_44EED454-1C23-BA17-0CCDE88B4D98F6FD/standards/vocabulary/vocabulary_tables/infrastructure/vocabulary/ReligiousAffiliation.html
});

    
  

/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('allergies', '<panel section="{opts.section}" data="{opts.data}"> <div class="row" if="{opts.data.entries.length}"> <div each="{opts.data.entries}" class="col-sm-4"> <div class="alert alert-mild clearfix " role="alert"> <h4>{allergen.name}</h4> <div class="pull-left">{reaction.name}</div> <div class="pull-right">{severity}</div> </div> </div> </div> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('care-plan', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('chief-complaint', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('encounters', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('functional-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunization-declines', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
  console.log("Declined Immunizations: ");
  console.log(opts.data);
});

    
  

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('immunizations', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('instructions', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(8);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('problems', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('procedures', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('results', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('smoking-status', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('vitals', '<panel section="{opts.section}" data="{opts.data}"> <empty if="{!opts.data.entries.length}"></empty> </panel>', '', '', function(opts) {
});

    
  

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("bootstrap-sass");

/***/ })
/******/ ]);
//# sourceMappingURL=sialia.js.map
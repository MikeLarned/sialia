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
__export(__webpack_require__(7));
__export(__webpack_require__(21));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(1);
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
var lodash_1 = __webpack_require__(1);
function updateSortOrder(sections) {
    lodash_1.default.each(sections, function (v, k) {
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
var lodash = __webpack_require__(1);
var jquery_1 = __webpack_require__(6);
function getElementIndex(node) {
    var children = lodash.filter([].slice.call(node.parentNode.childNodes), { nodeType: 1 });
    return Array.prototype.indexOf.call(children, node);
}
exports.getElementIndex = getElementIndex;
function bootstrapize(html) {
    var $html = jquery_1.default('<div />');
    $html.html(html);
    var $all = $html.find('*').removeAttr('width border xmlns');
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
var models_1 = __webpack_require__(17);
var lodash_1 = __webpack_require__(1);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var riot_1 = __webpack_require__(0);
var services_1 = __webpack_require__(2);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
var sialia_1 = __webpack_require__(9);
window['Sialia'] = sialia_1.Sialia;
__export(__webpack_require__(9));


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("bootstrap");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(14);
__webpack_require__(15);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


    var riot = __webpack_require__(0)
    riot.tag2('sialia', '<header data="{data}" sections="{sections}" documents="{documents}"></header> <div class="container-fluid sialia-body"> <div class="row"> <div class="col-lg-3 col-sm-4 hidden-xs" id="placeholder"></div> <div class="col-lg-3 col-sm-4" id="left"> <demographics demographics="{data.demographics}"></demographics> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showPreferences && !showNonXml}"> <preferences sections="{sections}" pref="{pref}"></preferences> </div> <div class="col-lg-9 col-sm-8" id="right" if="{!showPreferences && !showNonXml}"> <ccda-section each="{section in sections}" current="{section}" parent="{parent}"></ccda-section> </div> <div class="col-lg-9 col-sm-8" id="right" if="{showNonXml}"> <nonxml nonxml="{data.document.type.nonXmlBody}"></nonxml> </div> </div> </div>', '', '', function(opts) {

    var self = this;
    this.data = opts.data;
    this.pref = opts.pref;
    this.sections = opts.sections;
    this.showPreferences = !opts.pref.isSet;
    this.showNonXml = self.data.document.type.nonXmlBody.type;
    this.documents = opts.documents;
    this.dictionary = this.sections.reduce(function(o, x){ o[x.key] = x; return o; }, {});
    this.on('update', function() {

        // ML - Not showing preferences when the body type is nonXmL.  We just want to show
        // a link to the document.
        self.showNonXml = self.data.document.type.nonXmlBody.type !== "";
    });
});

    
  

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dragula__ = __webpack_require__(16);
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
/* 16 */
/***/ (function(module, exports) {

module.exports = require("dragula");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
__export(__webpack_require__(4));
__export(__webpack_require__(19));
__export(__webpack_require__(20));


/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(1);
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __webpack_require__(6);
var lodash_1 = __webpack_require__(1);
var bluebutton_1 = __webpack_require__(22);
var config_1 = __webpack_require__(23);
var preferences_service_1 = __webpack_require__(7);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("bluebutton");

/***/ }),
/* 23 */
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
    

riot.tag2('panel', '<div class="panel panel-{opts.state ? opts.state : \'default\'}" id="{opts.section.key}"> <div class="panel-heading section-toggle" onclick="{toggleSection}"> <h3 class="panel-title"> <i class="fa fa-{opts.section.icon} section-icon" aria-hidden="true" if="{!opts.hideicon}"></i> {opts.section.display} <span class="section-item-count badge badge-muted" if="{opts.data.entries && opts.data.entries.length}">{opts.data.entries.length}</span> <span class="text-muted" if="{isEmpty()}">(empty)</span> <span class="pull-right"> <i class="fa fa-chevron-down {fa-rotate-180: opts.section.enabled}" aria-hidden="true"></i> </span> </h3> </div> <div class="panel-body"> <yield></yield> </div> </div>', '', 'class="{opts.section.tagName}" class="{fade: isEmpty(), expanded: isEnabled(), collapsed: !isEnabled()}"', function(opts) {
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
    riot.tag2('ccda-section', '<allergies if="{opts.current.tagName == \'allergies\'}" section="{opts.current}" data="{data}"></allergies> <medications if="{opts.current.tagName == \'medications\'}" section="{opts.current}" data="{data}"></medications> <generic if="{opts.current.tagName == \'generic\'}" section="{opts.current}" data="{data}"></generic>', '', '', function(opts) {

  var options = {
    section: opts.current,
    data: opts.parent.data[opts.current.key]
  };

  //riot.mount(this.root, opts.current.tagName, options);
  var self = this;
  this.parent = opts.parent;
  this.current = opts.current;
  this.data = self.parent.data[self.current.key];
  this.on('update', function() {
    self.data = self.parent.data[self.current.key];
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
    this.root.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_0__utilities_htmlhelpers__["bootstrapize"])(opts.content);
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

    
  

/***/ })
/******/ ]);
//# sourceMappingURL=sialia.js.map
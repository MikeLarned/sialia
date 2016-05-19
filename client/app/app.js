System.register(['./tags/viewer.tag!', './tags/name.tag!', './tags/header.tag!', './tags/panel.tag!', './tags/sections/demographics.tag!', './tags/sections/allergies.tag!', 'font-awesome/css/font-awesome.min.css!', 'bluebutton', 'lodash', 'jquery', 'riot'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bluebutton_1, _, $, riot;
    var App;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (bluebutton_1_1) {
                bluebutton_1 = bluebutton_1_1;
            },
            function (_8) {
                _ = _8;
            },
            function ($_1) {
                $ = $_1;
            },
            function (riot_1) {
                riot = riot_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                    var _this = this;
                    this.sections = [
                        { key: 'allergies', display: 'Allergies', icon: 'pagelines' },
                        { key: 'care_plan', display: 'Care Plan', icon: 'sticky-note-o' },
                        { key: 'chief_complaint', display: 'Chief Complaint', icon: 'bullhorn' },
                        { key: 'encounters', display: 'Encounters', icon: 'stethoscope' },
                        { key: 'functional_ststus', display: 'Functional Status', icon: 'wheelchair' },
                        { key: 'immunization_declines', display: 'Declined Immunizations', icon: 'ban' },
                        { key: 'immunizations', display: 'Immunization', icon: 'eyedropper' },
                        { key: 'instructions', display: 'Patient Instructions', icon: 'user-md' },
                        { key: 'medications', display: 'Medications', icon: 'medkit' },
                        { key: 'problems', display: 'Problems', icon: 'exclamation-triangle' },
                        { key: 'procedures', display: 'Procedures', icon: 'hospital-o' },
                        { key: 'results', display: 'Results', icon: 'flask' },
                        { key: 'smoking_status', display: 'Smoking Status', icon: 'fire' },
                        { key: 'vitals', display: 'Vitals', icon: 'heartbeat' },
                    ];
                    this.ignoreSections = ['document', 'demographics', 'json'];
                    this.filter = {
                        user: {
                            sections: ["allergies", "results", "vitals"]
                        },
                        patient: {
                            sections: ["immunizations"]
                        }
                    };
                    $.get('https://raw.githubusercontent.com/MikeLarned/ccdaview/mock/docs/CCD%201.xml', function (x) { return _this.load(x); });
                }
                App.prototype.getSections = function (bb) {
                    var _this = this;
                    var keys = [];
                    _.each(bb.data, function (val, key) {
                        if (val) {
                            if (_this.ignoreSections.indexOf(key) == -1)
                                keys.push(key);
                        }
                    });
                    var allSections = [];
                    _.each(keys, function (key) {
                        var match = _.find(_this.sections, function (s) { s.key == key; });
                        if (match)
                            allSections.push(match);
                        else
                            allSections.push({ key: key, display: key });
                    });
                    var userSections = _.filter(allSections, function (a) {
                        var m = _this.filter.user.sections.indexOf(a.key) > -1;
                        return m;
                    });
                    return {
                        user: _.sortBy(userSections, 'key'),
                        all: _.sortBy(allSections, 'key')
                    };
                };
                App.prototype.render = function (data) {
                    riot.mount('viewer', data);
                };
                App.prototype.load = function (data) {
                    var bb = bluebutton_1.default(data);
                    this.render(bb.data);
                };
                ;
                return App;
            }());
            exports_1("App", App);
        }
    }
});

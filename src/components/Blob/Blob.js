'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var spin = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  to {\n    transform: rotate(1turn);\n  }\n"], ["\n  to {\n    transform: rotate(1turn);\n  }\n"])));
var Shape = styled__default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  transition: border-radius 1s ease-out;\n  transform-origin: center;\n  overflow: hidden;\n  ", "\n  ", "\n"], ["\n  transition: border-radius 1s ease-out;\n  transform-origin: center;\n  overflow: hidden;\n  ",
    "\n  ",
    "\n"])), function (props) {
    return props.size && styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      width: ", ";\n      height: ", ";\n    "], ["\n      width: ", ";\n      height: ", ";\n    "])), props.size, props.size);
}, function (props) { return styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    border-radius: ", ";\n    animation: ", " ", "s ease-in-out infinite both alternate,\n      ", " ", ";\n  "], ["\n    border-radius: ", ";\n    animation: ",
    " ", "s ease-in-out infinite both alternate,\n      ", " ", ";\n  "])), props.radius1, styled.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      0% {\n        border-radius: ", ";\n      }\n      100% {\n        border-radius: ", ";\n      }\n    "], ["\n      0% {\n        border-radius: ", ";\n      }\n      100% {\n        border-radius: ", ";\n      }\n    "])), props.radius1, props.radius2), (Math.random() * 10) | (0 + 10), spin, props.spinParams); });
var ShapeContent = styled__default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  animation: ", " ", " reverse;\n  transform-origin: center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  animation: ", " ", " reverse;\n  transform-origin: center;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])), spin, function (props) { return props.spinParams; });
var Image = styled__default.img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  transform: scale(1.25);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"], ["\n  transform: scale(1.25);\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));
var randomRadiuses = function (x) {
    return new Array(x)
        .fill(1)
        .map(function () { return radiuses[(Math.random() * radiuses.length) | 0]; })
        .join(" ");
};
var radiuses = ["70%", "60%", "50%", "40%", "55%", "45%"];
var makeRadius1 = function () { return randomRadiuses(4) + " / " + randomRadiuses(4); };
var makeRadius2 = function () { return randomRadiuses(55); };
var Blob = function (_a) {
    var src = _a.src, children = _a.children, size = _a.size, animationDuration = _a.animationDuration, animationTimingFunction = _a.animationTimingFunction, animationDelay = _a.animationDelay, animationIterationCount = _a.animationIterationCount, props = __rest(_a, ["src", "children", "size", "animationDuration", "animationTimingFunction", "animationDelay", "animationIterationCount"]);
    var radius1 = makeRadius1();
    var radius2 = makeRadius2();
    var spinParams = animationDuration + " " + animationTimingFunction + " " + animationDelay + " " + animationIterationCount;
    return (React.createElement(Shape, __assign({ size: size, radius1: radius1, radius2: radius2, spinParams: spinParams }, props),
        React.createElement(ShapeContent, { spinParams: spinParams }, src ? React.createElement(Image, { src: src }) : children)));
};
Blob.defaultProps = {
    animationDuration: "15s",
    animationTimingFunction: "linear",
    animationDelay: "",
    animationIterationCount: "infinite"
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

exports.Blob = Blob;
//# sourceMappingURL=index.js.map

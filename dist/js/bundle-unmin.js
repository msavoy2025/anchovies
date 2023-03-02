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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/*! exports provided: CSSPlugin, default, _getBBox, _createElement, checkPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getBBox", function() { return _getBBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_createElement", function() { return _createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPrefix", function() { return _checkPropPrefix; });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.8.0
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(?:left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_ticker"].time) {
    return Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_getCache"])(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_ticker"].time;
      cache.width = parent[measureProperty];
    }
  }

  return Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_getProperty"])(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_renderComplexString"]),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      relative,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_colorStringFilter"])(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_numWithUnitExp"]) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_numWithUnitExp"]) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_numWithUnitExp"].exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;

        if (relative) {
          endValue = endValue.substr(2);
        }

        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_numWithUnitExp"].lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: relative ? relative * endNum : endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_relExp"].test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_numExp"]).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"]);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_getCache"])(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["GSCache"](target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));
  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(Math.sqrt(a * a + b * b + c * c));
      scaleY = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(scaleX);
  cache.scaleY = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(scaleY);
  cache.rotation = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(rotation) + deg;
  cache.rotationX = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(rotationX) + deg;
  cache.rotationY = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(start);
  return Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(a11);
    a21 = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(a21);
    a12 = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(a12);
    a22 = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(tx + xPercent / 100 * temp.width);
    ty = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_round"])(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
  var cap = 360,
      isString = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_isString"])(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = relative ? endNum * relative : endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(startValue);
      endUnit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_forEachName"])("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority;
    _pluginInitted || _initCore();

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_plugins"][p] && Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_checkPlugin"])(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_replaceRandom"])(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_colorExp"].lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_colorExp"].test(startValue)) {
          // colors don't have units
          startUnit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(startValue);
          endUnit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units && !Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(startValue) && (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units[p]); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_isString"])(startValue) && ~startValue.indexOf("random(") && (startValue = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_replaceRandom"])(startValue));
          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["getUnit"])(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["PropTween"](this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], endValue, index, targets);
          } else {
            Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_missingPlugin"])(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, endValue);
        }

        props.push(p);
      }
    }

    hasPriority && Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_sortPropTweensByPriority"])(this);
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_isUndefined"])(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_getSetter"])(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["gsap"].utils.checkPrefix = _checkPropPrefix;

(function (positionAndScale, rotation, others, aliases) {
  var all = Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_forEachName"])(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_forEachName"])(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_forEachName"])(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

Object(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_forEachName"])("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["_config"].units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/*! exports provided: GSCache, Animation, Timeline, Tween, PropTween, gsap, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, TweenMax, TweenLite, TimelineMax, TimelineLite, default, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, selector, mapRange, pipe, unitize, interpolate, shuffle, _getProperty, _numExp, _numWithUnitExp, _isString, _isUndefined, _renderComplexString, _relExp, _setDefaults, _removeLinkedListItem, _forEachName, _sortPropTweensByPriority, _colorStringFilter, _replaceRandom, _checkPlugin, _plugins, _ticker, _config, _roundModifier, _round, _missingPlugin, _getSetter, _getCache, _colorExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GSCache", function() { return GSCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tween", function() { return Tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTween", function() { return PropTween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsap", function() { return gsap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return Quad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubic", function() { return Cubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quart", function() { return Quart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quint", function() { return Quint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return Elastic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return SteppedEase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return Bounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return Sine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return Expo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return Circ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return Tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return Tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gsap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapYoyo", function() { return wrapYoyo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit", function() { return getUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitColor", function() { return splitColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRange", function() { return mapRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitize", function() { return unitize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getProperty", function() { return _getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_numExp", function() { return _numExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_numWithUnitExp", function() { return _numWithUnitExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isString", function() { return _isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isUndefined", function() { return _isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_renderComplexString", function() { return _renderComplexString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_relExp", function() { return _relExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_setDefaults", function() { return _setDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_removeLinkedListItem", function() { return _removeLinkedListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_forEachName", function() { return _forEachName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_sortPropTweensByPriority", function() { return _sortPropTweensByPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_colorStringFilter", function() { return _colorStringFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_replaceRandom", function() { return _replaceRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_checkPlugin", function() { return _checkPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_plugins", function() { return _plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ticker", function() { return _ticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_config", function() { return _config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_roundModifier", function() { return _roundModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_round", function() { return _round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_missingPlugin", function() { return _missingPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getSetter", function() { return _getSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getCache", function() { return _getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_colorExp", function() { return _colorExp; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force);
  _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
  }
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || child._initted && !child._dur) {
    //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
  _initTween(tween, totalTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [totalTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    prevIteration = _animationCycle(tween._tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== prevIteration) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (!child._dur && child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (!child._dur && child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value) {
  if (typeof value !== "string") {
    return "";
  }

  var v = _unitExp.exec(value);

  return v ? value.substr(v.index + v[0].length) : "";
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = Math.round(parseFloat(raw) / v) * v * p;
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      params,
      scope;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  return params ? callback.apply(scope, params) : callback.call(scope);
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(false);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _createPlugin = function _createPlugin(config) {
  config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  var name = config.name,
      isFunc = _isFunction(config),
      Plugin = name && !isFunc && config.init ? function () {
    this._props = [];
  } : config,
      //in case someone passes in an object that's not a plugin, like CustomEase
  instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  },
      statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };

  _wake();

  if (config !== Plugin) {
    if (_plugins[name]) {
      return;
    }

    _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


    _plugins[Plugin.prop = name] = Plugin;

    if (config.targetTest) {
      _harnessPlugins.push(Plugin);

      _reservedProps[name] = 1;
    }

    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
  }

  _addGlobal(name, Plugin);

  config.register && config.register(gsap, Plugin, PropTween);
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    _hue = function _hue(h, m1, m2) {
  h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback) {
      _listeners.indexOf(callback) < 0 && _listeners.push(callback);

      _wake();
    },
    remove: function remove(callback) {
      var i;
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;
    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return this;
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return time;
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate() {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate();
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (parsedStart !== end) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);
    prevStartAt && prevStartAt.render(-1, true).kill();

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.

        if (dur && time <= 0) {
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        } // if (time > 0) {
        // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
        // } else if (dur && !(time < 0 && prevStartAt)) {
        // 	time && (tween._zTime = time);
        // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        // }

      } else if (autoRevert === false) {
        tween._startAt = 0;
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (prevStartAt) {
        !autoRevert && (tween._startAt = 0);
      } else {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {}
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        stagger ? parsedTargets.forEach(function (t, i) {
          return keyframes.forEach(function (frame, j) {
            return tl.to(t, frame, j ? ">" : i * stagger);
          });
        }) : keyframes.forEach(function (frame) {
          return tl.to(parsedTargets, frame, ">");
        });
      } else {
        l = parsedTargets.length;
        staggerFunc = stagger ? distribute(stagger) : _emptyFunc;

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = {};

          for (p in vars) {
            if (_staggerPropsToSkip.indexOf(p) < 0) {
              copy[p] = vars[p];
            }
          }

          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay)); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate() {
    this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate();
    return _Animation2.prototype.invalidate.call(this);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */

var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt;

    for (p in vars) {
      pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
      pt && (pt.op = p);

      this._props.push(p);
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i]);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.8.0";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/*! exports provided: gsap, default, CSSPlugin, TweenMax, TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gsap", function() { return gsapWithCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gsapWithCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenMax", function() { return TweenMaxWithCSS; });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["TweenLite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineMax", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineLite", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["TimelineLite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Power0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Power1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Power2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Power3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Power4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Quad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cubic", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Cubic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quart", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Quart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quint", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Quint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Strong"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Elastic", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Elastic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SteppedEase", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["SteppedEase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bounce", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Bounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sine", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Sine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expo", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Expo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circ", function() { return _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["Circ"]; });

/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSPlugin", function() { return _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["CSSPlugin"]; });



var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__["CSSPlugin"]) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__["gsap"],
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _components_anchovies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/anchovies */ "./src/js/components/anchovies.js");
/* harmony import */ var _components_anchovies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_anchovies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lightbox */ "./src/js/components/lightbox.js");
/* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cursor */ "./src/js/components/cursor.js");
/* harmony import */ var _components_cursor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_cursor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_drag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/drag */ "./src/js/components/drag.js");
/* harmony import */ var _components_drag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_drag__WEBPACK_IMPORTED_MODULE_4__);





console.log('bundle');

/***/ }),

/***/ "./src/js/components/anchovies.js":
/*!****************************************!*\
  !*** ./src/js/components/anchovies.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  //navigation functionality
  $('.nav_open').on('click', function () {
    $('.nav_wrap').css('right', '0');
    $(this).css('opacity', '0');
  });
  $('.nav_close').on('click', function () {
    $('.nav_wrap').css('right', '-100%');
    $('.nav_open').css('opacity', '1');
  }); //thrive image block word change on resize/mobile

  if ($(window).width() < 767) {
    $(".thrive_images_intro_right .bold").text('The image below means...');
  }

  $(window).resize(function () {
    if ($(window).width() < 767) {
      $(".thrive_images_intro_right .bold").text('The image below means...');
    } else {
      $(".thrive_images_intro_right .bold").text('The image on the left means...');
    }
  }); //work page lsab image swap

  /*if ($(".lsab_slide").length > 0) {
      var interval;
      
      var timer = function () {
          interval = setInterval(function () {
              var active = $('.active_lsab');
              var next = ($('.active_lsab').next().length > 0) ? $('.active_lsab').next() : $('.lsab_slide:first');
              active.removeClass('active_lsab');
              next.addClass('active_lsab');
              
          }, 1000);
      };
        timer();
    }
  else {
    }*/
  //if video is unknown

  $('video source[src=""]').each(function () {
    $(this).parents('.note_video').addClass('vid_hide');
  });

  if ($('.note_video_image').css('background-image') == 'none') {
    $(this).parents('.note_video').addClass('vid_hide');
    console.log('image test');
  }

  $('.note').each(function () {
    if ($('.note_video', this).hasClass("vid_hide")) {
      $('.note_upper', this).css('display', 'block');
    }
  });
  $('.prev_project a, .next_project a').addClass('hoverswap');
});

/***/ }),

/***/ "./src/js/components/cursor.js":
/*!*************************************!*\
  !*** ./src/js/components/cursor.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*const cursorBee = document.querySelector(".cursor-bee");
const cursorEye = document.querySelector(".cursor-eye");
let scale = 1;

function mousemoveHandler(e) {
    const target = e.target;
    const tl = gsap.timeline({
        defaults: {
            x: e.clientX,
            y: e.clientY,
            ease: "power2.out"
        }
    });

    if (target.classList.contains("hoverswap")) {
        tl.to(cursorBee, {
            opacity: 0
        }).to(
            cursorEye,
            {
                opacity: 1
            },
            "-=0.5"
        );
    } else {
        if (target.classList.contains("line-animation")) {
            scale = 4;
        } else {
            scale = 1;
        }

        tl.to(cursorBee, {
            opacity: 1,
            scale: scale
        }).to(
            cursorEye,
            {
                opacity: 0
            },
            "-=0.5"
        );
    }
}

function mouseleaveHandler() {
    gsap.to(cursorBee, {
        opacity: 0
    });
}

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseleave", mouseleaveHandler);
*/

/***/ }),

/***/ "./src/js/components/drag.js":
/*!***********************************!*\
  !*** ./src/js/components/drag.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  //GDBD 1-5
  //lightbox1
  var box = $(".lightbox1");
  Draggable.create(box, {
    bounds: "#lightbox_wrap1",
    onPress: offsetBounds,
    onDrag: offsetBounds
  });

  function offsetBounds() {
    // Simulate offset
    var maxX = this.maxX;
    var maxY = this.maxY;
    if (this.x > maxX) TweenLite.set(box, {
      x: maxX
    });
    if (this.y > maxY) TweenLite.set(box, {
      y: maxY
    });
  } //lightbox2


  var box2 = $(".lightbox2");
  Draggable.create(box2, {
    bounds: "#lightbox_wrap2",
    onPress: offsetBounds2,
    onDrag: offsetBounds2
  });

  function offsetBounds2() {
    // Simulate offset
    var maxX2 = this.maxX2;
    var maxY2 = this.maxY2;
    if (this.x > maxX2) TweenLite.set(box2, {
      x: maxX2
    });
    if (this.y > maxY2) TweenLite.set(box2, {
      y: maxY2
    });
  } //lightbox3


  var box3 = $(".lightbox3");
  Draggable.create(box3, {
    bounds: "#lightbox_wrap3",
    onPress: offsetBounds3,
    onDrag: offsetBounds3
  });

  function offsetBounds3() {
    // Simulate offset
    var maxX3 = this.maxX3;
    var maxY3 = this.maxY3;
    if (this.x > maxX3) TweenLite.set(box3, {
      x: maxX3
    });
    if (this.y > maxY3) TweenLite.set(box3, {
      y: maxY3
    });
  } //lightbox4


  var box4 = $(".lightbox4");
  Draggable.create(box4, {
    bounds: "#lightbox_wrap4",
    onPress: offsetBounds4,
    onDrag: offsetBounds4
  });

  function offsetBounds4() {
    // Simulate offset
    var maxX4 = this.maxX4;
    var maxY4 = this.maxY4;
    if (this.x > maxX4) TweenLite.set(box4, {
      x: maxX4
    });
    if (this.y > maxY4) TweenLite.set(box4, {
      y: maxY4
    });
  } //lightbox5


  var box5 = $(".lightbox5");
  Draggable.create(box5, {
    bounds: "#lightbox_wrap5",
    onPress: offsetBounds5,
    onDrag: offsetBounds5
  });

  function offsetBounds5() {
    // Simulate offset
    var maxX5 = this.maxX5;
    var maxY5 = this.maxY5;
    if (this.x > maxX5) TweenLite.set(box5, {
      x: maxX5
    });
    if (this.y > maxY5) TweenLite.set(box5, {
      y: maxY5
    });
  } //STR 6-10
  //lightbox6


  var box6 = $(".lightbox6");
  Draggable.create(box6, {
    bounds: "#lightbox_wrap6",
    onPress: offsetBounds6,
    onDrag: offsetBounds6
  });

  function offsetBounds6() {
    // Simulate offset
    var maxX6 = this.maxX6;
    var maxY6 = this.maxY6;
    if (this.x > maxX6) TweenLite.set(box6, {
      x: maxX6
    });
    if (this.y > maxY6) TweenLite.set(box6, {
      y: maxY6
    });
  } //lightbox7


  var box7 = $(".lightbox7");
  Draggable.create(box7, {
    bounds: "#lightbox_wrap7",
    onPress: offsetBounds7,
    onDrag: offsetBounds7
  });

  function offsetBounds7() {
    // Simulate offset
    var maxX7 = this.maxX7;
    var maxY7 = this.maxY7;
    if (this.x > maxX7) TweenLite.set(box7, {
      x: maxX7
    });
    if (this.y > maxY7) TweenLite.set(box7, {
      y: maxY7
    });
  } //lightbox8


  var box8 = $(".lightbox8");
  Draggable.create(box8, {
    bounds: "#lightbox_wrap8",
    onPress: offsetBounds8,
    onDrag: offsetBounds8
  });

  function offsetBounds8() {
    // Simulate offset
    var maxX8 = this.maxX8;
    var maxY8 = this.maxY8;
    if (this.x > maxX8) TweenLite.set(box8, {
      x: maxX8
    });
    if (this.y > maxY8) TweenLite.set(box8, {
      y: maxY8
    });
  } //lightbox9


  var box9 = $(".lightbox9");
  Draggable.create(box9, {
    bounds: "#lightbox_wrap9",
    onPress: offsetBounds9,
    onDrag: offsetBounds9
  });

  function offsetBounds9() {
    // Simulate offset
    var maxX9 = this.maxX9;
    var maxY9 = this.maxY9;
    if (this.x > maxX9) TweenLite.set(box9, {
      x: maxX9
    });
    if (this.y > maxY9) TweenLite.set(box9, {
      y: maxY9
    });
  } //lightbox10


  var box10 = $(".lightbox10");
  Draggable.create(box10, {
    bounds: "#lightbox_wrap10",
    onPress: offsetBounds10,
    onDrag: offsetBounds10
  });

  function offsetBounds10() {
    // Simulate offset
    var maxX10 = this.maxX10;
    var maxY10 = this.maxY10;
    if (this.x > maxX10) TweenLite.set(box10, {
      x: maxX10
    });
    if (this.y > maxY10) TweenLite.set(box10, {
      y: maxY10
    });
  } //Roman Candle 11-13
  //lightbox11


  var box11 = $(".lightbox11");
  Draggable.create(box11, {
    bounds: "#lightbox_wrap11",
    onPress: offsetBounds11,
    onDrag: offsetBounds11
  });

  function offsetBounds11() {
    // Simulate offset
    var maxX11 = this.maxX11;
    var maxY11 = this.maxY11;
    if (this.x > maxX11) TweenLite.set(box11, {
      x: maxX11
    });
    if (this.y > maxY11) TweenLite.set(box11, {
      y: maxY11
    });
  } //lightbox12


  var box12 = $(".lightbox12");
  Draggable.create(box12, {
    bounds: "#lightbox_wrap12",
    onPress: offsetBounds12,
    onDrag: offsetBounds12
  });

  function offsetBounds12() {
    // Simulate offset
    var maxX12 = this.maxX12;
    var maxY12 = this.maxY12;
    if (this.x > maxX12) TweenLite.set(box12, {
      x: maxX12
    });
    if (this.y > maxY12) TweenLite.set(box12, {
      y: maxY12
    });
  } //lightbox13


  var box13 = $(".lightbox13");
  Draggable.create(box13, {
    bounds: "#lightbox_wrap13",
    onPress: offsetBounds13,
    onDrag: offsetBounds13
  });

  function offsetBounds13() {
    // Simulate offset
    var maxX13 = this.maxX13;
    var maxY13 = this.maxY13;
    if (this.x > maxX13) TweenLite.set(box13, {
      x: maxX13
    });
    if (this.y > maxY13) TweenLite.set(box13, {
      y: maxY13
    });
  } //Thrive 14-15
  //lightbox14


  var box14 = $(".lightbox14");
  Draggable.create(box14, {
    bounds: "#lightbox_wrap14",
    onPress: offsetBounds14,
    onDrag: offsetBounds14
  });

  function offsetBounds14() {
    // Simulate offset
    var maxX14 = this.maxX14;
    var maxY14 = this.maxY14;
    if (this.x > maxX14) TweenLite.set(box14, {
      x: maxX14
    });
    if (this.y > maxY14) TweenLite.set(box14, {
      y: maxY14
    });
  } //lightbox15


  var box15 = $(".lightbox15");
  Draggable.create(box15, {
    bounds: "#lightbox_wrap15",
    onPress: offsetBounds15,
    onDrag: offsetBounds15
  });

  function offsetBounds15() {
    // Simulate offset
    var maxX15 = this.maxX15;
    var maxY15 = this.maxY15;
    if (this.x > maxX15) TweenLite.set(box15, {
      x: maxX15
    });
    if (this.y > maxY15) TweenLite.set(box15, {
      y: maxY15
    });
  } //Show+Tell 16-18
  //lightbox16


  var box16 = $(".lightbox16");
  Draggable.create(box16, {
    bounds: "#lightbox_wrap16",
    onPress: offsetBounds16,
    onDrag: offsetBounds16
  });

  function offsetBounds16() {
    // Simulate offset
    var maxX16 = this.maxX16;
    var maxY16 = this.maxY16;
    if (this.x > maxX16) TweenLite.set(box16, {
      x: maxX16
    });
    if (this.y > maxY16) TweenLite.set(box16, {
      y: maxY16
    });
  } //lightbox17


  var box17 = $(".lightbox17");
  Draggable.create(box17, {
    bounds: "#lightbox_wrap17",
    onPress: offsetBounds17,
    onDrag: offsetBounds17
  });

  function offsetBounds17() {
    // Simulate offset
    var maxX17 = this.maxX17;
    var maxY17 = this.maxY17;
    if (this.x > maxX17) TweenLite.set(box17, {
      x: maxX17
    });
    if (this.y > maxY17) TweenLite.set(box17, {
      y: maxY17
    });
  } //lightbox18


  var box18 = $(".lightbox18");
  Draggable.create(box18, {
    bounds: "#lightbox_wrap18",
    onPress: offsetBounds18,
    onDrag: offsetBounds18
  });

  function offsetBounds18() {
    // Simulate offset
    var maxX18 = this.maxX18;
    var maxY18 = this.maxY18;
    if (this.x > maxX18) TweenLite.set(box18, {
      x: maxX18
    });
    if (this.y > maxY18) TweenLite.set(box18, {
      y: maxY18
    });
  } //Copper Coyote 19-21
  //lightbox19


  var box19 = $(".lightbox19");
  Draggable.create(box19, {
    bounds: "#lightbox_wrap19",
    onPress: offsetBounds19,
    onDrag: offsetBounds19
  });

  function offsetBounds19() {
    // Simulate offset
    var maxX19 = this.maxX19;
    var maxY19 = this.maxY19;
    if (this.x > maxX19) TweenLite.set(box19, {
      x: maxX19
    });
    if (this.y > maxY19) TweenLite.set(box19, {
      y: maxY19
    });
  } //lightbox20


  var box20 = $(".lightbox20");
  Draggable.create(box20, {
    bounds: "#lightbox_wrap20",
    onPress: offsetBounds20,
    onDrag: offsetBounds20
  });

  function offsetBounds20() {
    // Simulate offset
    var maxX20 = this.maxX20;
    var maxY20 = this.maxY20;
    if (this.x > maxX20) TweenLite.set(box20, {
      x: maxX20
    });
    if (this.y > maxY20) TweenLite.set(box20, {
      y: maxY20
    });
  } //lightbox21


  var box21 = $(".lightbox21");
  Draggable.create(box21, {
    bounds: "#lightbox_wrap21",
    onPress: offsetBounds21,
    onDrag: offsetBounds21
  });

  function offsetBounds21() {
    // Simulate offset
    var maxX21 = this.maxX21;
    var maxY21 = this.maxY21;
    if (this.x > maxX21) TweenLite.set(box21, {
      x: maxX21
    });
    if (this.y > maxY21) TweenLite.set(box21, {
      y: maxY21
    });
  } //Viridian 22-24
  //lightbox22


  var box22 = $(".lightbox22");
  Draggable.create(box22, {
    bounds: "#lightbox_wrap22",
    onPress: offsetBounds22,
    onDrag: offsetBounds22
  });

  function offsetBounds22() {
    // Simulate offset
    var maxX22 = this.maxX22;
    var maxY22 = this.maxY22;
    if (this.x > maxX22) TweenLite.set(box22, {
      x: maxX22
    });
    if (this.y > maxY22) TweenLite.set(box22, {
      y: maxY22
    });
  } //lightbox23


  var box23 = $(".lightbox23");
  Draggable.create(box23, {
    bounds: "#lightbox_wrap23",
    onPress: offsetBounds23,
    onDrag: offsetBounds23
  });

  function offsetBounds23() {
    // Simulate offset
    var maxX23 = this.maxX23;
    var maxY23 = this.maxY23;
    if (this.x > maxX23) TweenLite.set(box23, {
      x: maxX23
    });
    if (this.y > maxY23) TweenLite.set(box23, {
      y: maxY23
    });
  } //lightbox24


  var box24 = $(".lightbox24");
  Draggable.create(box24, {
    bounds: "#lightbox_wrap24",
    onPress: offsetBounds24,
    onDrag: offsetBounds24
  });

  function offsetBounds24() {
    // Simulate offset
    var maxX24 = this.maxX24;
    var maxY24 = this.maxY24;
    if (this.x > maxX24) TweenLite.set(box24, {
      x: maxX24
    });
    if (this.y > maxY24) TweenLite.set(box24, {
      y: maxY24
    });
  } //Parachute 25-26
  //lightbox25


  var box25 = $(".lightbox25");
  Draggable.create(box25, {
    bounds: "#lightbox_wrap25",
    onPress: offsetBounds25,
    onDrag: offsetBounds25
  });

  function offsetBounds25() {
    // Simulate offset
    var maxX25 = this.maxX25;
    var maxY25 = this.maxY25;
    if (this.x > maxX25) TweenLite.set(box25, {
      x: maxX25
    });
    if (this.y > maxY25) TweenLite.set(box25, {
      y: maxY25
    });
  } //lightbox26


  var box26 = $(".lightbox26");
  Draggable.create(box26, {
    bounds: "#lightbox_wrap26",
    onPress: offsetBounds26,
    onDrag: offsetBounds26
  });

  function offsetBounds26() {
    // Simulate offset
    var maxX26 = this.maxX26;
    var maxY26 = this.maxY26;
    if (this.x > maxX26) TweenLite.set(box26, {
      x: maxX26
    });
    if (this.y > maxY26) TweenLite.set(box26, {
      y: maxY26
    });
  } //Humanly 27-28
  //lightbox27


  var box27 = $(".lightbox27");
  Draggable.create(box27, {
    bounds: "#lightbox_wrap27",
    onPress: offsetBounds27,
    onDrag: offsetBounds27
  });

  function offsetBounds27() {
    // Simulate offset
    var maxX27 = this.maxX27;
    var maxY27 = this.maxY27;
    if (this.x > maxX27) TweenLite.set(box27, {
      x: maxX27
    });
    if (this.y > maxY27) TweenLite.set(box27, {
      y: maxY27
    });
  } //lightbox28


  var box28 = $(".lightbox28");
  Draggable.create(box28, {
    bounds: "#lightbox_wrap28",
    onPress: offsetBounds28,
    onDrag: offsetBounds28
  });

  function offsetBounds28() {
    // Simulate offset
    var maxX28 = this.maxX28;
    var maxY28 = this.maxY28;
    if (this.x > maxX28) TweenLite.set(box28, {
      x: maxX28
    });
    if (this.y > maxY28) TweenLite.set(box28, {
      y: maxY28
    });
  }
});

/***/ }),

/***/ "./src/js/components/lightbox.js":
/*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {
  //lightbox close
  $('.lightbox_close').on('click', function () {
    $('.lightbox_wrap').css({
      'position': 'static',
      'z-index': '-1'
    });
    $('.lightbox').css({
      'width': '100%',
      'height': '100%',
      'transform': 'translate(0, 0)'
    });
    $('.lightbox_close').css('opacity', '0');
    $('body').css('overflow', 'initial');
    $('.lightbox_open').css('display', 'block');
  }); //lightbox example open

  $('.lightbox_example_open .btn').on('click', function () {
    $('.lightbox_example').css({
      'opacity': '1',
      'z-index': '999999999'
    });
    $('.lightbox_close').css('opacity', '1');
    $('body').css('overflow', 'hidden');
  }); //lightbox example close

  $('.lightbox_example .btn, .example_close').on('click', function () {
    $('.lightbox_example').css({
      'opacity': '0',
      'z-index': '-1'
    });
    $('body').css('overflow', 'initial');
    $('.lightbox_close').css('opacity', '0');
  }); //Good Days Bad Days 1-5
  //lightbox open 1

  $('.lightboxopen1').on('click', function () {
    $('.lightboxwrap1').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox1').css({
      'width': '950px',
      'height': '120%'
    });
    $('.lightboxclose1').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 2

  $('.lightboxopen2').on('click', function () {
    $('.lightboxwrap2').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox2').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose2').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 3

  $('.lightboxopen3').on('click', function () {
    $('.lightboxwrap3').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox3').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose3').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 4

  $('.lightboxopen4').on('click', function () {
    $('.lightboxwrap4').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox4').css({
      'width': '755px',
      'height': '120%'
    });
    $('.lightboxclose4').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 5

  $('.lightboxopen5').on('click', function () {
    $('.lightboxwrap5').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox5').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose5').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Smell The Roses 6-10
  //lightbox open 6

  $('.lightboxopen6').on('click', function () {
    $('.lightboxwrap6').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox6').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose6').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 7

  $('.lightboxopen7').on('click', function () {
    $('.lightboxwrap7').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox7').css({
      'width': '950px',
      'height': '120%'
    });
    $('.lightboxclose7').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 8

  $('.lightboxopen8').on('click', function () {
    $('.lightboxwrap8').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox8').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose8').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 9

  $('.lightboxopen9').on('click', function () {
    $('.lightboxwrap9').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox9').css({
      'width': '755px',
      'height': '120%'
    });
    $('.lightboxclose9').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 10

  $('.lightboxopen10').on('click', function () {
    $('.lightboxwrap10').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox10').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose10').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Roman Candle 11-13
  //lightbox open 11

  $('.lightboxopen11').on('click', function () {
    $('.lightboxwrap11').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox11').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose11').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 12

  $('.lightboxopen12').on('click', function () {
    $('.lightboxwrap12').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox12').css({
      'width': '755px',
      'height': '120%'
    });
    $('.lightboxclose12').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 13

  $('.lightboxopen13').on('click', function () {
    $('.lightboxwrap13').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox13').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose13').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Thrive 14-15
  //lightbox open 14

  $('.lightboxopen14').on('click', function () {
    $('.lightboxwrap14').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox14').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose14').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 15

  $('.lightboxopen15').on('click', function () {
    $('.lightboxwrap15').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox15').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose15').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Show+Tell 16-18
  //lightbox open 16

  $('.lightboxopen16').on('click', function () {
    $('.lightboxwrap16').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox16').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose16').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 17

  $('.lightboxopen17').on('click', function () {
    $('.lightboxwrap17').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox17').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose17').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 18

  $('.lightboxopen18').on('click', function () {
    $('.lightboxwrap18').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox18').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose18').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Coppery Coyote 19-21
  //lightbox open 19

  $('.lightboxopen19').on('click', function () {
    $('.lightboxwrap19').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox19').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose19').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 20

  $('.lightboxopen20').on('click', function () {
    $('.lightboxwrap20').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox20').css({
      'width': '1000px',
      'height': '120%'
    });
    $('.lightboxclose20').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 21

  $('.lightboxopen21').on('click', function () {
    $('.lightboxwrap21').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox21').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose21').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Viridian 22-24
  //lightbox open 22

  $('.lightboxopen22').on('click', function () {
    $('.lightboxwrap22').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox22').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose22').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 23

  $('.lightboxopen23').on('click', function () {
    $('.lightboxwrap23').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox23').css({
      'width': '950px',
      'height': '120%'
    });
    $('.lightboxclose23').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 24

  $('.lightboxopen24').on('click', function () {
    $('.lightboxwrap24').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox24').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose24').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Parachute 25-26
  //lightbox open 25

  $('.lightboxopen25').on('click', function () {
    $('.lightboxwrap25').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox25').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose25').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 26

  $('.lightboxopen26').on('click', function () {
    $('.lightboxwrap26').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox26').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose26').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //Humanly 27-28
  //lightbox open 27

  $('.lightboxopen27').on('click', function () {
    $('.lightboxwrap27').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox27').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose27').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  }); //lightbox open 28

  $('.lightboxopen28').on('click', function () {
    $('.lightboxwrap28').css({
      'position': 'fixed',
      'z-index': '999999'
    });
    $('.lightbox28').css({
      'width': '1340px',
      'height': '120%'
    });
    $('.lightboxclose28').css('opacity', '1');
    $('body').css('overflow', 'hidden');
    $(this).css('display', 'none');
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ1NTUGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nc2FwL2dzYXAtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FuY2hvdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC5qcyJdLCJuYW1lcyI6WyJfd2luIiwiX2RvYyIsIl9kb2NFbGVtZW50IiwiX3BsdWdpbkluaXR0ZWQiLCJfdGVtcERpdiIsIl90ZW1wRGl2U3R5bGVyIiwiX3JlY2VudFNldHRlclBsdWdpbiIsIl93aW5kb3dFeGlzdHMiLCJ3aW5kb3ciLCJfdHJhbnNmb3JtUHJvcHMiLCJfUkFEMkRFRyIsIk1hdGgiLCJQSSIsIl9ERUcyUkFEIiwiX2F0YW4yIiwiYXRhbjIiLCJfYmlnTnVtIiwiX2NhcHNFeHAiLCJfaG9yaXpvbnRhbEV4cCIsIl9jb21wbGV4RXhwIiwiX3Byb3BlcnR5QWxpYXNlcyIsImF1dG9BbHBoYSIsInNjYWxlIiwiYWxwaGEiLCJfcmVuZGVyQ1NTUHJvcCIsInJhdGlvIiwiZGF0YSIsInNldCIsInQiLCJwIiwicm91bmQiLCJzIiwiYyIsInUiLCJfcmVuZGVyUHJvcFdpdGhFbmQiLCJlIiwiX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nIiwiYiIsIl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCIsInZhbHVlIiwiX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUiLCJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCIsIl9zZXR0ZXJDU1NTdHlsZSIsInRhcmdldCIsInByb3BlcnR5Iiwic3R5bGUiLCJfc2V0dGVyQ1NTUHJvcCIsInNldFByb3BlcnR5IiwiX3NldHRlclRyYW5zZm9ybSIsIl9nc2FwIiwiX3NldHRlclNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwiX3NldHRlclNjYWxlV2l0aFJlbmRlciIsImNhY2hlIiwicmVuZGVyVHJhbnNmb3JtIiwiX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIiLCJfdHJhbnNmb3JtUHJvcCIsIl90cmFuc2Zvcm1PcmlnaW5Qcm9wIiwiX3N1cHBvcnRzM0QiLCJfY3JlYXRlRWxlbWVudCIsInR5cGUiLCJucyIsImNyZWF0ZUVsZW1lbnROUyIsInJlcGxhY2UiLCJjcmVhdGVFbGVtZW50IiwiX2dldENvbXB1dGVkUHJvcGVydHkiLCJza2lwUHJlZml4RmFsbGJhY2siLCJjcyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9Mb3dlckNhc2UiLCJfY2hlY2tQcm9wUHJlZml4IiwiX3ByZWZpeGVzIiwic3BsaXQiLCJlbGVtZW50IiwicHJlZmVyUHJlZml4IiwiaSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwiX2luaXRDb3JlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjc3NUZXh0IiwiX2dldEJCb3hIYWNrIiwic3dhcElmUG9zc2libGUiLCJzdmciLCJvd25lclNWR0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJvbGRQYXJlbnQiLCJwYXJlbnROb2RlIiwib2xkU2libGluZyIsIm5leHRTaWJsaW5nIiwib2xkQ1NTIiwiYmJveCIsImFwcGVuZENoaWxkIiwiZGlzcGxheSIsImdldEJCb3giLCJfZ3NhcEJCb3giLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIl9nZXRBdHRyaWJ1dGVGYWxsYmFja3MiLCJhdHRyaWJ1dGVzQXJyYXkiLCJsZW5ndGgiLCJoYXNBdHRyaWJ1dGUiLCJfZ2V0QkJveCIsImJvdW5kcyIsImVycm9yIiwiY2FsbCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJfaXNTVkciLCJnZXRDVE0iLCJfcmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZSIsIl9hZGROb25Ud2VlbmluZ1BUIiwicGx1Z2luIiwiYmVnaW5uaW5nIiwiZW5kIiwib25seVNldEF0RW5kIiwicHQiLCJQcm9wVHdlZW4iLCJfcHQiLCJfcHJvcHMiLCJwdXNoIiwiX25vbkNvbnZlcnRpYmxlVW5pdHMiLCJkZWciLCJyYWQiLCJ0dXJuIiwiX2NvbnZlcnRUb1VuaXQiLCJ1bml0IiwiY3VyVmFsdWUiLCJwYXJzZUZsb2F0IiwiY3VyVW5pdCIsInRyaW0iLCJob3Jpem9udGFsIiwidGVzdCIsImlzUm9vdFNWRyIsInRhZ05hbWUiLCJtZWFzdXJlUHJvcGVydHkiLCJhbW91bnQiLCJ0b1BpeGVscyIsInRvUGVyY2VudCIsInB4IiwicGFyZW50IiwiaXNTVkciLCJpbmRleE9mIiwiX3JvdW5kIiwiYm9keSIsInRpbWUiLCJfdGlja2VyIiwicG9zaXRpb24iLCJfZ2V0Q2FjaGUiLCJfZ2V0IiwidW5jYWNoZSIsIl9wYXJzZVRyYW5zZm9ybSIsIm9yaWdpbiIsIl9maXJzdFR3b09ubHkiLCJ6T3JpZ2luIiwiX3NwZWNpYWxQcm9wcyIsIl9nZXRQcm9wZXJ0eSIsIl90d2VlbkNvbXBsZXhDU1NTdHJpbmciLCJwcm9wIiwic3RhcnQiLCJfcmVuZGVyQ29tcGxleFN0cmluZyIsImluZGV4IiwibWF0Y2hJbmRleCIsImEiLCJyZXN1bHQiLCJzdGFydFZhbHVlcyIsInN0YXJ0TnVtIiwiY29sb3IiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJlbmROdW0iLCJjaHVuayIsImVuZFVuaXQiLCJzdGFydFVuaXQiLCJyZWxhdGl2ZSIsImVuZFZhbHVlcyIsIl9jb2xvclN0cmluZ0ZpbHRlciIsIm1hdGNoIiwiX251bVdpdGhVbml0RXhwIiwiZXhlYyIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsIl9jb25maWciLCJ1bml0cyIsIl9uZXh0IiwibSIsInIiLCJfcmVsRXhwIiwiX2tleXdvcmRUb1BlcmNlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJjZW50ZXIiLCJfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyIsImpvaW4iLCJfcmVuZGVyQ2xlYXJQcm9wcyIsInR3ZWVuIiwiX3RpbWUiLCJfZHVyIiwicHJvcHMiLCJjbGVhclRyYW5zZm9ybXMiLCJjbGVhclByb3BzIiwicHIiLCJfaWRlbnRpdHkyRE1hdHJpeCIsIl9yb3RhdGlvbmFsUHJvcGVydGllcyIsIl9pc051bGxUcmFuc2Zvcm0iLCJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwibWF0cml4U3RyaW5nIiwiX251bUV4cCIsIm1hcCIsIl9nZXRNYXRyaXgiLCJmb3JjZTJEIiwibWF0cml4IiwidGVtcCIsImFkZGVkVG9ET00iLCJ0cmFuc2Zvcm0iLCJiYXNlVmFsIiwiY29uc29saWRhdGUiLCJkIiwiZiIsIm9mZnNldFBhcmVudCIsIl9hcHBseVNWR09yaWdpbiIsIm9yaWdpbklzQWJzb2x1dGUiLCJzbW9vdGgiLCJtYXRyaXhBcnJheSIsInBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvIiwieE9yaWdpbk9sZCIsInhPcmlnaW4iLCJ5T3JpZ2luT2xkIiwieU9yaWdpbiIsInhPZmZzZXRPbGQiLCJ4T2Zmc2V0IiwieU9mZnNldE9sZCIsInlPZmZzZXQiLCJ0eCIsInR5Iiwib3JpZ2luU3BsaXQiLCJkZXRlcm1pbmFudCIsInNldEF0dHJpYnV0ZSIsIkdTQ2FjaGUiLCJpbnZlcnRlZFNjYWxlWCIsInoiLCJyb3RhdGlvbiIsInJvdGF0aW9uWCIsInJvdGF0aW9uWSIsInNrZXdYIiwic2tld1kiLCJwZXJzcGVjdGl2ZSIsImFuZ2xlIiwiY29zIiwic2luIiwiYTEyIiwiYTIyIiwidDEiLCJ0MiIsInQzIiwiYTEzIiwiYTIzIiwiYTMzIiwiYTQyIiwiYTQzIiwiYTMyIiwic3FydCIsImFicyIsImZvcmNlQ1NTIiwieFBlcmNlbnQiLCJvZmZzZXRXaWR0aCIsInlQZXJjZW50Iiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJmb3JjZTNEIiwiX3JlbmRlclNWR1RyYW5zZm9ybXMiLCJfcmVuZGVyQ1NTVHJhbnNmb3JtcyIsIl9yZW5kZXJOb24zRFRyYW5zZm9ybXMiLCJfYWRkUHhUcmFuc2xhdGUiLCJnZXRVbml0IiwiX3plcm9EZWciLCJfemVyb1B4IiwiX2VuZFBhcmVudGhlc2lzIiwiX3JlZiIsInRyYW5zZm9ybXMiLCJ1c2UzRCIsIl9yZWYyIiwiYTExIiwiYTIxIiwidGFuIiwiX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4iLCJjYXAiLCJpc1N0cmluZyIsIl9pc1N0cmluZyIsImNoYW5nZSIsImZpbmFsVmFsdWUiLCJkaXJlY3Rpb24iLCJfYXNzaWduIiwic291cmNlIiwiX2FkZFJhd1RyYW5zZm9ybVBUcyIsInN0YXJ0Q2FjaGUiLCJleGNsdWRlIiwiZW5kQ2FjaGUiLCJfZm9yRWFjaE5hbWUiLCJuYW1lIiwibCIsInNpZGUiLCJ2YXJzIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImluaXQiLCJDU1NQbHVnaW4iLCJyZWdpc3RlciIsInRhcmdldFRlc3QiLCJub2RlVHlwZSIsInRhcmdldHMiLCJzdGFydEF0Iiwic3BlY2lhbFByb3AiLCJpc1RyYW5zZm9ybVJlbGF0ZWQiLCJ0cmFuc2Zvcm1Qcm9wVHdlZW4iLCJoYXNQcmlvcml0eSIsIl9wbHVnaW5zIiwiX2NoZWNrUGx1Z2luIiwiX3JlcGxhY2VSYW5kb20iLCJfY29sb3JFeHAiLCJhZGQiLCJwYXJzZVRyYW5zZm9ybSIsInNtb290aE9yaWdpbiIsImRlcCIsImF1dG9Sb3VuZCIsIl9taXNzaW5nUGx1Z2luIiwiX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSIsImdldCIsImFsaWFzZXMiLCJnZXRTZXR0ZXIiLCJfaXNVbmRlZmluZWQiLCJfZ2V0U2V0dGVyIiwiY29yZSIsImdzYXAiLCJ1dGlscyIsImNoZWNrUHJlZml4IiwicG9zaXRpb25BbmRTY2FsZSIsIm90aGVycyIsImFsbCIsInJlZ2lzdGVyUGx1Z2luIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfX3Byb3RvX18iLCJhdXRvU2xlZXAiLCJudWxsVGFyZ2V0V2FybiIsImxpbmVIZWlnaHQiLCJfZGVmYXVsdHMiLCJkdXJhdGlvbiIsIm92ZXJ3cml0ZSIsImRlbGF5IiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl90aW55TnVtIiwiXzJQSSIsIl9IQUxGX1BJIiwiX2dzSUQiLCJfc3FydCIsIl9jb3MiLCJfc2luIiwiX2lzRnVuY3Rpb24iLCJfaXNOdW1iZXIiLCJfaXNPYmplY3QiLCJfaXNOb3RGYWxzZSIsIl9pc0Z1bmNPclN0cmluZyIsIl9pc1R5cGVkQXJyYXkiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIl9pc0FycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiX3N0cmljdE51bUV4cCIsIl9jb21wbGV4U3RyaW5nTnVtRXhwIiwiX2RlbGltaXRlZFZhbHVlRXhwIiwiX3VuaXRFeHAiLCJfZ2xvYmFsVGltZWxpbmUiLCJfY29yZUluaXR0ZWQiLCJfZ2xvYmFscyIsIl9pbnN0YWxsU2NvcGUiLCJfY29yZVJlYWR5IiwiX2luc3RhbGwiLCJzY29wZSIsIl9tZXJnZSIsImNvbnNvbGUiLCJ3YXJuIiwiX3dhcm4iLCJtZXNzYWdlIiwic3VwcHJlc3MiLCJfYWRkR2xvYmFsIiwib2JqIiwiX2VtcHR5RnVuYyIsIl9yZXNlcnZlZFByb3BzIiwiX2xhenlUd2VlbnMiLCJfbGF6eUxvb2t1cCIsIl9sYXN0UmVuZGVyZWRGcmFtZSIsIl9lZmZlY3RzIiwiX25leHRHQ0ZyYW1lIiwiX2hhcm5lc3NQbHVnaW5zIiwiX2NhbGxiYWNrTmFtZXMiLCJfaGFybmVzcyIsImhhcm5lc3NQbHVnaW4iLCJoYXJuZXNzIiwic3BsaWNlIiwidG9BcnJheSIsInYiLCJuYW1lcyIsImZ1bmMiLCJfcm91bmRQcmVjaXNlIiwiX2FycmF5Q29udGFpbnNBbnkiLCJ0b1NlYXJjaCIsInRvRmluZCIsIl9sYXp5UmVuZGVyIiwic2xpY2UiLCJfbGF6eSIsInJlbmRlciIsIl9sYXp5U2FmZVJlbmRlciIsImFuaW1hdGlvbiIsInN1cHByZXNzRXZlbnRzIiwiZm9yY2UiLCJfbnVtZXJpY0lmUG9zc2libGUiLCJuIiwiX3Bhc3NUaHJvdWdoIiwiX3NldERlZmF1bHRzIiwiZGVmYXVsdHMiLCJfc2V0S2V5ZnJhbWVEZWZhdWx0cyIsImJhc2UiLCJ0b01lcmdlIiwiX21lcmdlRGVlcCIsIl9jb3B5RXhjbHVkaW5nIiwiZXhjbHVkaW5nIiwiY29weSIsIl9pbmhlcml0RGVmYXVsdHMiLCJrZXlmcmFtZXMiLCJpbmhlcml0IiwiX2RwIiwiX2FycmF5c01hdGNoIiwiYTEiLCJhMiIsIl9hZGRMaW5rZWRMaXN0SXRlbSIsImNoaWxkIiwiZmlyc3RQcm9wIiwibGFzdFByb3AiLCJzb3J0QnkiLCJwcmV2IiwiX3ByZXYiLCJfcmVtb3ZlTGlua2VkTGlzdEl0ZW0iLCJuZXh0IiwiX3JlbW92ZUZyb21QYXJlbnQiLCJvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIiwiYXV0b1JlbW92ZUNoaWxkcmVuIiwicmVtb3ZlIiwiX2FjdCIsIl91bmNhY2hlIiwiX2VuZCIsIl9zdGFydCIsIl9kaXJ0eSIsIl9yZWNhY2hlQW5jZXN0b3JzIiwidG90YWxEdXJhdGlvbiIsIl9oYXNOb1BhdXNlZEFuY2VzdG9ycyIsIl90cyIsIl9lbGFwc2VkQ3ljbGVEdXJhdGlvbiIsIl9yZXBlYXQiLCJfYW5pbWF0aW9uQ3ljbGUiLCJfdFRpbWUiLCJfckRlbGF5IiwidFRpbWUiLCJjeWNsZUR1cmF0aW9uIiwid2hvbGUiLCJmbG9vciIsIl9wYXJlbnRUb0NoaWxkVG90YWxUaW1lIiwicGFyZW50VGltZSIsIl90RHVyIiwiX3NldEVuZCIsIl9ydHMiLCJfYWxpZ25QbGF5aGVhZCIsInRvdGFsVGltZSIsInNtb290aENoaWxkVGltaW5nIiwiX3Bvc3RBZGRDaGVja3MiLCJ0aW1lbGluZSIsIl9pbml0dGVkIiwicmF3VGltZSIsIl9jbGFtcCIsIl96VGltZSIsIl9hZGRUb1RpbWVsaW5lIiwic2tpcENoZWNrcyIsIl9wYXJzZVBvc2l0aW9uIiwiX2RlbGF5IiwidGltZVNjYWxlIiwiX3NvcnQiLCJfaXNGcm9tT3JGcm9tU3RhcnQiLCJfcmVjZW50IiwiX3Njcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiU2Nyb2xsVHJpZ2dlciIsIl9hdHRlbXB0SW5pdFR3ZWVuIiwiX2luaXRUd2VlbiIsImxhenkiLCJmcmFtZSIsIl9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQiLCJfbG9jayIsIl9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiIsInByZXZSYXRpbyIsInJlcGVhdERlbGF5IiwiaXRlcmF0aW9uIiwicHJldkl0ZXJhdGlvbiIsIl95b3lvIiwicmVwZWF0UmVmcmVzaCIsImludmFsaWRhdGUiLCJfZnJvbSIsIl9zdGFydEF0IiwiX29uVXBkYXRlIiwiX2NhbGxiYWNrIiwiX3Byb20iLCJfZmluZE5leHRQYXVzZVR3ZWVuIiwicHJldlRpbWUiLCJfZmlyc3QiLCJfbGFzdCIsIl9zZXREdXJhdGlvbiIsInNraXBVbmNhY2hlIiwibGVhdmVQbGF5aGVhZCIsInJlcGVhdCIsImR1ciIsInRvdGFsUHJvZ3Jlc3MiLCJfb25VcGRhdGVUb3RhbER1cmF0aW9uIiwiVGltZWxpbmUiLCJfemVyb1Bvc2l0aW9uIiwiZW5kVGltZSIsInBlcmNlbnRBbmltYXRpb24iLCJsYWJlbHMiLCJyZWNlbnQiLCJjbGlwcGVkRHVyYXRpb24iLCJvZmZzZXQiLCJpc1BlcmNlbnQiLCJpc05hTiIsIl9jcmVhdGVUd2VlblR5cGUiLCJwYXJhbXMiLCJpc0xlZ2FjeSIsInZhcnNJbmRleCIsImlyVmFycyIsImltbWVkaWF0ZVJlbmRlciIsInJ1bkJhY2t3YXJkcyIsIlR3ZWVuIiwiX2NvbmRpdGlvbmFsUmV0dXJuIiwibWluIiwibWF4IiwiY2xhbXAiLCJfc2xpY2UiLCJfaXNBcnJheUxpa2UiLCJub25FbXB0eSIsIl9mbGF0dGVuIiwiYXIiLCJsZWF2ZVN0cmluZ3MiLCJhY2N1bXVsYXRvciIsIl9hY2N1bXVsYXRvciIsImFwcGx5IiwiX3dha2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0b3IiLCJlbCIsImN1cnJlbnQiLCJuYXRpdmVFbGVtZW50Iiwic2h1ZmZsZSIsInNvcnQiLCJyYW5kb20iLCJkaXN0cmlidXRlIiwiZWFjaCIsImVhc2UiLCJfcGFyc2VFYXNlIiwiZnJvbSIsImlzRGVjaW1hbCIsInJhdGlvcyIsImF4aXMiLCJyYXRpb1giLCJyYXRpb1kiLCJlZGdlcyIsImRpc3RhbmNlcyIsIm9yaWdpblgiLCJvcmlnaW5ZIiwiaiIsIndyYXBBdCIsImdyaWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaW52ZXJ0RWFzZSIsIl9yb3VuZE1vZGlmaWVyIiwicG93IiwicmF3Iiwic25hcCIsInNuYXBUbyIsInJhZGl1cyIsImlzMkQiLCJ2YWx1ZXMiLCJpbmNyZW1lbnQiLCJjbG9zZXN0IiwiZHgiLCJkeSIsInJvdW5kaW5nSW5jcmVtZW50IiwicmV0dXJuRnVuY3Rpb24iLCJwaXBlIiwiX2xlbiIsImZ1bmN0aW9ucyIsIl9rZXkiLCJyZWR1Y2UiLCJ1bml0aXplIiwibm9ybWFsaXplIiwibWFwUmFuZ2UiLCJfd3JhcEFycmF5Iiwid3JhcHBlciIsIndyYXAiLCJyYW5nZSIsIndyYXBZb3lvIiwidG90YWwiLCJudW1zIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsImluUmFuZ2UiLCJvdXRSYW5nZSIsImludGVycG9sYXRlIiwicHJvZ3Jlc3MiLCJtdXRhdGUiLCJtYXN0ZXIiLCJpbnRlcnBvbGF0b3JzIiwiaWwiLCJfYWRkUHJvcFR3ZWVuIiwiX3JlbmRlclByb3BUd2VlbnMiLCJfZ2V0TGFiZWxJbkRpcmVjdGlvbiIsImZyb21UaW1lIiwiYmFja3dhcmQiLCJkaXN0YW5jZSIsImxhYmVsIiwiZXhlY3V0ZUxhenlGaXJzdCIsImNhbGxiYWNrIiwiY2FsbGJhY2tTY29wZSIsIl9pbnRlcnJ1cHQiLCJzY3JvbGxUcmlnZ2VyIiwia2lsbCIsIl9xdWlja1R3ZWVuIiwiX2NyZWF0ZVBsdWdpbiIsImNvbmZpZyIsImlzRnVuYyIsIlBsdWdpbiIsImluc3RhbmNlRGVmYXVsdHMiLCJfa2lsbFByb3BUd2VlbnNPZiIsIm1vZGlmaWVyIiwiX2FkZFBsdWdpbk1vZGlmaWVyIiwicmF3VmFycyIsInN0YXRpY3MiLCJfMjU1IiwiX2NvbG9yTG9va3VwIiwiYXF1YSIsImxpbWUiLCJzaWx2ZXIiLCJibGFjayIsIm1hcm9vbiIsInRlYWwiLCJibHVlIiwibmF2eSIsIndoaXRlIiwib2xpdmUiLCJ5ZWxsb3ciLCJvcmFuZ2UiLCJncmF5IiwicHVycGxlIiwiZ3JlZW4iLCJyZWQiLCJwaW5rIiwiY3lhbiIsInRyYW5zcGFyZW50IiwiX2h1ZSIsImgiLCJtMSIsIm0yIiwic3BsaXRDb2xvciIsInRvSFNMIiwiZm9yY2VBbHBoYSIsImciLCJ3YXNIU0wiLCJwYXJzZUludCIsIk51bWJlciIsIl9jb2xvck9yZGVyRGF0YSIsIl9mb3JtYXRDb2xvcnMiLCJvcmRlck1hdGNoRGF0YSIsImNvbG9ycyIsInNoZWxsIiwic2hpZnQiLCJSZWdFeHAiLCJfaHNsRXhwIiwiY29tYmluZWQiLCJfdGlja2VyQWN0aXZlIiwiX2dldFRpbWUiLCJEYXRlIiwibm93IiwiX2xhZ1RocmVzaG9sZCIsIl9hZGp1c3RlZExhZyIsIl9zdGFydFRpbWUiLCJfbGFzdFVwZGF0ZSIsIl9nYXAiLCJfbmV4dFRpbWUiLCJfbGlzdGVuZXJzIiwiX2lkIiwiX3JlcSIsIl9yYWYiLCJfc2VsZiIsIl9kZWx0YSIsIl9pIiwiX3RpY2siLCJlbGFwc2VkIiwibWFudWFsIiwib3ZlcmxhcCIsImRpc3BhdGNoIiwidGljayIsImRlbHRhUmF0aW8iLCJmcHMiLCJ3YWtlIiwiZ3NhcFZlcnNpb25zIiwidmVyc2lvbiIsIkdyZWVuU29ja0dsb2JhbHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbGVlcCIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImxhZ1Ntb290aGluZyIsInRocmVzaG9sZCIsImFkanVzdGVkTGFnIiwiX2ZwcyIsIl9lYXNlTWFwIiwiX2N1c3RvbUVhc2VFeHAiLCJfcXVvdGVzRXhwIiwiX3BhcnNlT2JqZWN0SW5TdHJpbmciLCJrZXkiLCJ2YWwiLCJwYXJzZWRWYWwiLCJsYXN0SW5kZXhPZiIsIl92YWx1ZUluUGFyZW50aGVzZXMiLCJvcGVuIiwiY2xvc2UiLCJuZXN0ZWQiLCJfY29uZmlnRWFzZUZyb21TdHJpbmciLCJfQ0UiLCJfcHJvcGFnYXRlWW95b0Vhc2UiLCJpc1lveW8iLCJ5b3lvRWFzZSIsIl9lYXNlIiwiX3lFYXNlIiwiZGVmYXVsdEVhc2UiLCJfaW5zZXJ0RWFzZSIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJsb3dlcmNhc2VOYW1lIiwiX2Vhc2VJbk91dEZyb21PdXQiLCJfY29uZmlnRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsInAxIiwicDIiLCJwMyIsImFzaW4iLCJfY29uZmlnQmFjayIsIm92ZXJzaG9vdCIsInBvd2VyIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJub25lIiwibjEiLCJuMiIsIm4zIiwiU3RlcHBlZEVhc2UiLCJzdGVwcyIsImltbWVkaWF0ZVN0YXJ0IiwiaWQiLCJBbmltYXRpb24iLCJJbmZpbml0eSIsInlveW8iLCJfcHJvdG8iLCJzdGFydFRpbWUiLCJfdG90YWxUaW1lIiwiX3B0TG9va3VwIiwiX3BUaW1lIiwiX3BzIiwicGF1c2VkIiwiaW5jbHVkZVJlcGVhdHMiLCJ3cmFwUmVwZWF0cyIsImdsb2JhbFRpbWUiLCJzZWVrIiwicmVzdGFydCIsImluY2x1ZGVEZWxheSIsInBsYXkiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJwYXVzZSIsImF0VGltZSIsInJlc3VtZSIsImlzQWN0aXZlIiwiZXZlbnRDYWxsYmFjayIsInRoZW4iLCJvbkZ1bGZpbGxlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX3Jlc29sdmUiLCJfdGhlbiIsIl9BbmltYXRpb24iLCJfdGhpcyIsInNvcnRDaGlsZHJlbiIsIl9wcm90bzIiLCJ0byIsImZyb21UbyIsImZyb21WYXJzIiwidG9WYXJzIiwiZGVsYXllZENhbGwiLCJzdGFnZ2VyVG8iLCJzdGFnZ2VyIiwib25Db21wbGV0ZUFsbCIsIm9uQ29tcGxldGVBbGxQYXJhbXMiLCJvbkNvbXBsZXRlIiwib25Db21wbGV0ZVBhcmFtcyIsInN0YWdnZXJGcm9tIiwic3RhZ2dlckZyb21UbyIsInREdXIiLCJjcm9zc2luZ1N0YXJ0IiwicHJldlBhdXNlZCIsInBhdXNlVHdlZW4iLCJwcmV2U3RhcnQiLCJyZXdpbmRpbmciLCJkb2VzV3JhcCIsIm9uUmVwZWF0IiwiX2hhc1BhdXNlIiwiX2ZvcmNpbmciLCJvblVwZGF0ZSIsImFkanVzdGVkVGltZSIsIl90aGlzMiIsImFkZExhYmVsIiwiZ2V0Q2hpbGRyZW4iLCJ0d2VlbnMiLCJ0aW1lbGluZXMiLCJpZ25vcmVCZWZvcmVUaW1lIiwiZ2V0QnlJZCIsImFuaW1hdGlvbnMiLCJyZW1vdmVMYWJlbCIsImtpbGxUd2VlbnNPZiIsIl90b3RhbFRpbWUyIiwiYWRkUGF1c2UiLCJyZW1vdmVQYXVzZSIsIm9ubHlBY3RpdmUiLCJnZXRUd2VlbnNPZiIsIl9vdmVyd3JpdGluZ1R3ZWVuIiwicGFyc2VkVGFyZ2V0cyIsImlzR2xvYmFsVGltZSIsImNoaWxkcmVuIiwiX3RhcmdldHMiLCJ0d2VlblRvIiwidGwiLCJfdmFycyIsIl9vblN0YXJ0Iiwib25TdGFydCIsIm9uU3RhcnRQYXJhbXMiLCJpbml0dGVkIiwidHdlZW5Gcm9tVG8iLCJmcm9tUG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwibmV4dExhYmVsIiwiYWZ0ZXJUaW1lIiwicHJldmlvdXNMYWJlbCIsImJlZm9yZVRpbWUiLCJjdXJyZW50TGFiZWwiLCJzaGlmdENoaWxkcmVuIiwiYWRqdXN0TGFiZWxzIiwiY2xlYXIiLCJpbmNsdWRlTGFiZWxzIiwidXBkYXRlUm9vdCIsIl9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuIiwic2V0dGVyIiwic3RyaW5nRmlsdGVyIiwiZnVuY1BhcmFtIiwic3RhcnROdW1zIiwiaGFzUmFuZG9tIiwiZnAiLCJjdXJyZW50VmFsdWUiLCJwYXJzZWRTdGFydCIsIl9zZXR0ZXJQbGFpbiIsIl9zZXR0ZXJGdW5jV2l0aFBhcmFtIiwiX3NldHRlckZ1bmMiLCJfcmVuZGVyQm9vbGVhbiIsIl9yZW5kZXJQbGFpbiIsIl9wcm9jZXNzVmFycyIsIl9wYXJzZUZ1bmNPclN0cmluZyIsInB0TG9va3VwIiwicHJpb3JpdHkiLCJvblVwZGF0ZVBhcmFtcyIsImF1dG9SZXZlcnQiLCJwcmV2U3RhcnRBdCIsImZ1bGxUYXJnZXRzIiwiYXV0b092ZXJ3cml0ZSIsIl9vdmVyd3JpdGUiLCJjbGVhblZhcnMiLCJnc0RhdGEiLCJoYXJuZXNzVmFycyIsIm92ZXJ3cml0dGVuIiwiX29wIiwiX29uSW5pdCIsIl9hZGRBbGlhc2VzVG9WYXJzIiwicHJvcGVydHlBbGlhc2VzIiwiX3N0YWdnZXJUd2VlblByb3BzIiwiX3N0YWdnZXJQcm9wc1RvU2tpcCIsIl9BbmltYXRpb24yIiwic2tpcEluaGVyaXQiLCJfdGhpczMiLCJfdGhpczMkdmFycyIsImN1clRhcmdldCIsInN0YWdnZXJGdW5jIiwic3RhZ2dlclZhcnNUb01lcmdlIiwiX3Byb3RvMyIsImtpbGxpbmdUYXJnZXRzIiwicHJvcFR3ZWVuTG9va3VwIiwiZmlyc3RQVCIsIm92ZXJ3cml0dGVuUHJvcHMiLCJjdXJMb29rdXAiLCJjdXJPdmVyd3JpdGVQcm9wcyIsIm9uUmV2ZXJzZUNvbXBsZXRlIiwib25SZXZlcnNlQ29tcGxldGVQYXJhbXMiLCJfc2V0dGVyQXR0cmlidXRlIiwiaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nIiwib3AiLCJfc2V0dGVyV2l0aE1vZGlmaWVyIiwibVNldCIsIm10IiwicHQyIiwiZmlyc3QiLCJsYXN0IiwicmVuZGVyZXIiLCJfcHJvdG80IiwiVHdlZW5NYXgiLCJUd2VlbkxpdGUiLCJUaW1lbGluZUxpdGUiLCJUaW1lbGluZU1heCIsIl9sZW4yIiwiYXJncyIsIl9rZXkyIiwiZ2V0UHJvcGVydHkiLCJnZXR0ZXIiLCJmb3JtYXQiLCJxdWlja1NldHRlciIsInNldHRlcnMiLCJpc1R3ZWVuaW5nIiwicmVnaXN0ZXJFZmZlY3QiLCJfcmVmMyIsImVmZmVjdCIsInBsdWdpbnMiLCJleHRlbmRUaW1lbGluZSIsInBsdWdpbk5hbWUiLCJyZWdpc3RlckVhc2UiLCJwYXJzZUVhc2UiLCJleHBvcnRSb290IiwiaW5jbHVkZURlbGF5ZWRDYWxscyIsImluc3RhbGwiLCJlZmZlY3RzIiwidGlja2VyIiwiZ2xvYmFsVGltZWxpbmUiLCJnbG9iYWxzIiwiZ2V0Q2FjaGUiLCJzdXBwcmVzc092ZXJ3cml0ZXMiLCJfZ2V0UGx1Z2luUHJvcFR3ZWVuIiwiX2FkZE1vZGlmaWVycyIsIm1vZGlmaWVycyIsIl9idWlsZE1vZGlmaWVyUGx1Z2luIiwiUG93ZXIwIiwiUG93ZXIxIiwiUG93ZXIyIiwiUG93ZXIzIiwiUG93ZXI0IiwiUXVhZCIsIkN1YmljIiwiUXVhcnQiLCJRdWludCIsIlN0cm9uZyIsIkVsYXN0aWMiLCJCYWNrIiwiQm91bmNlIiwiU2luZSIsIkV4cG8iLCJDaXJjIiwiZ3NhcFdpdGhDU1MiLCJUd2Vlbk1heFdpdGhDU1MiLCJsb2ciLCJqUXVlcnkiLCJyZWFkeSIsIiQiLCJvbiIsImNzcyIsInRleHQiLCJyZXNpemUiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImJveCIsIkRyYWdnYWJsZSIsIm9uUHJlc3MiLCJvZmZzZXRCb3VuZHMiLCJvbkRyYWciLCJtYXhYIiwibWF4WSIsImJveDIiLCJvZmZzZXRCb3VuZHMyIiwibWF4WDIiLCJtYXhZMiIsImJveDMiLCJvZmZzZXRCb3VuZHMzIiwibWF4WDMiLCJtYXhZMyIsImJveDQiLCJvZmZzZXRCb3VuZHM0IiwibWF4WDQiLCJtYXhZNCIsImJveDUiLCJvZmZzZXRCb3VuZHM1IiwibWF4WDUiLCJtYXhZNSIsImJveDYiLCJvZmZzZXRCb3VuZHM2IiwibWF4WDYiLCJtYXhZNiIsImJveDciLCJvZmZzZXRCb3VuZHM3IiwibWF4WDciLCJtYXhZNyIsImJveDgiLCJvZmZzZXRCb3VuZHM4IiwibWF4WDgiLCJtYXhZOCIsImJveDkiLCJvZmZzZXRCb3VuZHM5IiwibWF4WDkiLCJtYXhZOSIsImJveDEwIiwib2Zmc2V0Qm91bmRzMTAiLCJtYXhYMTAiLCJtYXhZMTAiLCJib3gxMSIsIm9mZnNldEJvdW5kczExIiwibWF4WDExIiwibWF4WTExIiwiYm94MTIiLCJvZmZzZXRCb3VuZHMxMiIsIm1heFgxMiIsIm1heFkxMiIsImJveDEzIiwib2Zmc2V0Qm91bmRzMTMiLCJtYXhYMTMiLCJtYXhZMTMiLCJib3gxNCIsIm9mZnNldEJvdW5kczE0IiwibWF4WDE0IiwibWF4WTE0IiwiYm94MTUiLCJvZmZzZXRCb3VuZHMxNSIsIm1heFgxNSIsIm1heFkxNSIsImJveDE2Iiwib2Zmc2V0Qm91bmRzMTYiLCJtYXhYMTYiLCJtYXhZMTYiLCJib3gxNyIsIm9mZnNldEJvdW5kczE3IiwibWF4WDE3IiwibWF4WTE3IiwiYm94MTgiLCJvZmZzZXRCb3VuZHMxOCIsIm1heFgxOCIsIm1heFkxOCIsImJveDE5Iiwib2Zmc2V0Qm91bmRzMTkiLCJtYXhYMTkiLCJtYXhZMTkiLCJib3gyMCIsIm9mZnNldEJvdW5kczIwIiwibWF4WDIwIiwibWF4WTIwIiwiYm94MjEiLCJvZmZzZXRCb3VuZHMyMSIsIm1heFgyMSIsIm1heFkyMSIsImJveDIyIiwib2Zmc2V0Qm91bmRzMjIiLCJtYXhYMjIiLCJtYXhZMjIiLCJib3gyMyIsIm9mZnNldEJvdW5kczIzIiwibWF4WDIzIiwibWF4WTIzIiwiYm94MjQiLCJvZmZzZXRCb3VuZHMyNCIsIm1heFgyNCIsIm1heFkyNCIsImJveDI1Iiwib2Zmc2V0Qm91bmRzMjUiLCJtYXhYMjUiLCJtYXhZMjUiLCJib3gyNiIsIm9mZnNldEJvdW5kczI2IiwibWF4WDI2IiwibWF4WTI2IiwiYm94MjciLCJvZmZzZXRCb3VuZHMyNyIsIm1heFgyNyIsIm1heFkyNyIsImJveDI4Iiwib2Zmc2V0Qm91bmRzMjgiLCJtYXhYMjgiLCJtYXhZMjgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFHQSxJQUFJQSxJQUFKO0FBQUEsSUFDSUMsSUFESjtBQUFBLElBRUlDLFdBRko7QUFBQSxJQUdJQyxjQUhKO0FBQUEsSUFJSUMsUUFKSjtBQUFBLElBS0lDLGNBTEo7QUFBQSxJQU1JQyxtQkFOSjtBQUFBLElBT0lDLGFBQWEsR0FBRyxTQUFTQSxhQUFULEdBQXlCO0FBQzNDLFNBQU8sT0FBT0MsTUFBUCxLQUFrQixXQUF6QjtBQUNELENB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QUFpQkUsR0FBakIsQ0FBcUI7QUFDakIsZUFBUyxRQURRO0FBRWpCLGdCQUFVO0FBRk8sS0FBckI7QUFJQUYsS0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JFLEdBQXRCLENBQTBCLFNBQTFCLEVBQXFDLEdBQXJDO0FBQ0FGLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsR0FBVixDQUFjLFVBQWQsRUFBMEIsUUFBMUI7QUFDQUYsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRSxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtBQUNILEdBWkQ7QUFhSCxDQW5kRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsIi8qIVxuICogQ1NTUGx1Z2luIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgZ3NhcCwgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIGdldFVuaXQsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX2ZvckVhY2hOYW1lLCBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5LCBfY29sb3JTdHJpbmdGaWx0ZXIsIF9jaGVja1BsdWdpbiwgX3JlcGxhY2VSYW5kb20sIF9wbHVnaW5zLCBHU0NhY2hlLCBQcm9wVHdlZW4sIF9jb25maWcsIF90aWNrZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwLCBfc2V0RGVmYXVsdHMsIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSAvL2ZvciB0aGUgY29tbWVudGVkLW91dCBjbGFzc05hbWUgZmVhdHVyZS5cbn0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5cbnZhciBfd2luLFxuICAgIF9kb2MsXG4gICAgX2RvY0VsZW1lbnQsXG4gICAgX3BsdWdpbkluaXR0ZWQsXG4gICAgX3RlbXBEaXYsXG4gICAgX3RlbXBEaXZTdHlsZXIsXG4gICAgX3JlY2VudFNldHRlclBsdWdpbixcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF90cmFuc2Zvcm1Qcm9wcyA9IHt9LFxuICAgIF9SQUQyREVHID0gMTgwIC8gTWF0aC5QSSxcbiAgICBfREVHMlJBRCA9IE1hdGguUEkgLyAxODAsXG4gICAgX2F0YW4yID0gTWF0aC5hdGFuMixcbiAgICBfYmlnTnVtID0gMWU4LFxuICAgIF9jYXBzRXhwID0gLyhbQS1aXSkvZyxcbiAgICBfaG9yaXpvbnRhbEV4cCA9IC8oPzpsZWZ0fHJpZ2h0fHdpZHRofG1hcmdpbnxwYWRkaW5nfHgpL2ksXG4gICAgX2NvbXBsZXhFeHAgPSAvW1xccyxcXChdXFxTLyxcbiAgICBfcHJvcGVydHlBbGlhc2VzID0ge1xuICBhdXRvQWxwaGE6IFwib3BhY2l0eSx2aXNpYmlsaXR5XCIsXG4gIHNjYWxlOiBcInNjYWxlWCxzY2FsZVlcIixcbiAgYWxwaGE6IFwib3BhY2l0eVwiXG59LFxuICAgIF9yZW5kZXJDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3AocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wV2l0aEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wV2l0aEVuZChyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHJhdGlvID09PSAxID8gZGF0YS5lIDogTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmcocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51IDogZGF0YS5iLCBkYXRhKTtcbn0sXG4gICAgLy9pZiB1bml0cyBjaGFuZ2UsIHdlIG5lZWQgYSB3YXkgdG8gcmVuZGVyIHRoZSBvcmlnaW5hbCB1bml0L3ZhbHVlIHdoZW4gdGhlIHR3ZWVuIGdvZXMgYWxsIHRoZSB3YXkgYmFjayB0byB0aGUgYmVnaW5uaW5nIChyYXRpbzowKVxuX3JlbmRlclJvdW5kZWRDU1NQcm9wID0gZnVuY3Rpb24gX3JlbmRlclJvdW5kZWRDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGEucyArIGRhdGEuYyAqIHJhdGlvO1xuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgfn4odmFsdWUgKyAodmFsdWUgPCAwID8gLS41IDogLjUpKSArIGRhdGEudSwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kID0gZnVuY3Rpb24gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyAhPT0gMSA/IGRhdGEuYiA6IGRhdGEuZSwgZGF0YSk7XG59LFxuICAgIF9zZXR0ZXJDU1NTdHlsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NTdHlsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9zZXR0ZXJDU1NQcm9wKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbn0sXG4gICAgX3NldHRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlID0gZnVuY3Rpb24gX3NldHRlclNjYWxlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAuc2NhbGVYID0gdGFyZ2V0Ll9nc2FwLnNjYWxlWSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclNjYWxlV2l0aFJlbmRlcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSwgcmF0aW8pIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICBjYWNoZS5zY2FsZVggPSBjYWNoZS5zY2FsZVkgPSB2YWx1ZTtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtKHJhdGlvLCBjYWNoZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyID0gZnVuY3Rpb24gX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGVbcHJvcGVydHldID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcCA9IFwidHJhbnNmb3JtXCIsXG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCIsXG4gICAgX3N1cHBvcnRzM0QsXG4gICAgX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudCh0eXBlLCBucykge1xuICB2YXIgZSA9IF9kb2MuY3JlYXRlRWxlbWVudE5TID8gX2RvYy5jcmVhdGVFbGVtZW50TlMoKG5zIHx8IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiKS5yZXBsYWNlKC9eaHR0cHMvLCBcImh0dHBcIiksIHR5cGUpIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgc2VydmVycyBzd2FwIGluIGh0dHBzIGZvciBodHRwIGluIHRoZSBuYW1lc3BhY2Ugd2hpY2ggY2FuIGJyZWFrIHRoaW5ncywgbWFraW5nIFwic3R5bGVcIiBpbmFjY2Vzc2libGUuXG5cbiAgcmV0dXJuIGUuc3R5bGUgPyBlIDogX2RvYy5jcmVhdGVFbGVtZW50KHR5cGUpOyAvL3NvbWUgZW52aXJvbm1lbnRzIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgZWxlbWVudCdzIHN0eWxlIHdoZW4gY3JlYXRlZCB3aXRoIGEgbmFtZXNwYWNlIGluIHdoaWNoIGNhc2Ugd2UgZGVmYXVsdCB0byB0aGUgc3RhbmRhcmQgY3JlYXRlRWxlbWVudCgpIHRvIHdvcmsgYXJvdW5kIHRoZSBpc3N1ZS4gQWxzbyBub3RlIHRoYXQgd2hlbiBHU0FQIGlzIGVtYmVkZGVkIGRpcmVjdGx5IGluc2lkZSBhbiBTVkcgZmlsZSwgY3JlYXRlRWxlbWVudCgpIHdvbid0IGFsbG93IGFjY2VzcyB0byB0aGUgc3R5bGUgb2JqZWN0IGluIEZpcmVmb3ggKHNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMjE1LXByb2JsZW0tdXNpbmctdHdlZW5tYXgtaW4tc3RhbmRhbG9uZS1zZWxmLWNvbnRhaW5pbmctc3ZnLWZpbGUtZXJyLWNhbm5vdC1zZXQtcHJvcGVydHktY3NzdGV4dC1vZi11bmRlZmluZWQvKS5cbn0sXG4gICAgX2dldENvbXB1dGVkUHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCBza2lwUHJlZml4RmFsbGJhY2spIHtcbiAgdmFyIGNzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpO1xuICByZXR1cm4gY3NbcHJvcGVydHldIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSkgfHwgY3MuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkgfHwgIXNraXBQcmVmaXhGYWxsYmFjayAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHkpIHx8IHByb3BlcnR5LCAxKSB8fCBcIlwiOyAvL2NzcyB2YXJpYWJsZXMgbWF5IG5vdCBuZWVkIGNhcHMgc3dhcHBlZCBvdXQgZm9yIGRhc2hlcyBhbmQgbG93ZXJjYXNlLlxufSxcbiAgICBfcHJlZml4ZXMgPSBcIk8sTW96LG1zLE1zLFdlYmtpdFwiLnNwbGl0KFwiLFwiKSxcbiAgICBfY2hlY2tQcm9wUHJlZml4ID0gZnVuY3Rpb24gX2NoZWNrUHJvcFByZWZpeChwcm9wZXJ0eSwgZWxlbWVudCwgcHJlZmVyUHJlZml4KSB7XG4gIHZhciBlID0gZWxlbWVudCB8fCBfdGVtcERpdixcbiAgICAgIHMgPSBlLnN0eWxlLFxuICAgICAgaSA9IDU7XG5cbiAgaWYgKHByb3BlcnR5IGluIHMgJiYgIXByZWZlclByZWZpeCkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHByb3BlcnR5ID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgd2hpbGUgKGktLSAmJiAhKF9wcmVmaXhlc1tpXSArIHByb3BlcnR5IGluIHMpKSB7fVxuXG4gIHJldHVybiBpIDwgMCA/IG51bGwgOiAoaSA9PT0gMyA/IFwibXNcIiA6IGkgPj0gMCA/IF9wcmVmaXhlc1tpXSA6IFwiXCIpICsgcHJvcGVydHk7XG59LFxuICAgIF9pbml0Q29yZSA9IGZ1bmN0aW9uIF9pbml0Q29yZSgpIHtcbiAgaWYgKF93aW5kb3dFeGlzdHMoKSAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICBfd2luID0gd2luZG93O1xuICAgIF9kb2MgPSBfd2luLmRvY3VtZW50O1xuICAgIF9kb2NFbGVtZW50ID0gX2RvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgX3RlbXBEaXYgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiKSB8fCB7XG4gICAgICBzdHlsZToge31cbiAgICB9O1xuICAgIF90ZW1wRGl2U3R5bGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgX3RyYW5zZm9ybVByb3AgPSBfY2hlY2tQcm9wUHJlZml4KF90cmFuc2Zvcm1Qcm9wKTtcbiAgICBfdHJhbnNmb3JtT3JpZ2luUHJvcCA9IF90cmFuc2Zvcm1Qcm9wICsgXCJPcmlnaW5cIjtcbiAgICBfdGVtcERpdi5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiOyAvL21ha2Ugc3VyZSB0byBvdmVycmlkZSBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBtYXkgY29udGFtaW5hdGUgbWVhc3VyZW1lbnRzLCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBvdmVycmVhY2hpbmcgc3R5bGUgc2hlZXRzLlxuXG4gICAgX3N1cHBvcnRzM0QgPSAhIV9jaGVja1Byb3BQcmVmaXgoXCJwZXJzcGVjdGl2ZVwiKTtcbiAgICBfcGx1Z2luSW5pdHRlZCA9IDE7XG4gIH1cbn0sXG4gICAgX2dldEJCb3hIYWNrID0gZnVuY3Rpb24gX2dldEJCb3hIYWNrKHN3YXBJZlBvc3NpYmxlKSB7XG4gIC8vd29ya3MgYXJvdW5kIGlzc3VlcyBpbiBzb21lIGJyb3dzZXJzIChsaWtlIEZpcmVmb3gpIHRoYXQgZG9uJ3QgY29ycmVjdGx5IHJlcG9ydCBnZXRCQm94KCkgb24gU1ZHIGVsZW1lbnRzIGluc2lkZSBhIDxkZWZzPiBlbGVtZW50IGFuZC9vciA8bWFzaz4uIFdlIHRyeSBjcmVhdGluZyBhbiBTVkcsIGFkZGluZyBpdCB0byB0aGUgZG9jdW1lbnRFbGVtZW50IGFuZCB0b3NzIHRoZSBlbGVtZW50IGluIHRoZXJlIHNvIHRoYXQgaXQncyBkZWZpbml0ZWx5IHBhcnQgb2YgdGhlIHJlbmRlcmluZyB0cmVlLCB0aGVuIGdyYWIgdGhlIGJib3ggYW5kIGlmIGl0IHdvcmtzLCB3ZSBhY3R1YWxseSBzd2FwIG91dCB0aGUgb3JpZ2luYWwgZ2V0QkJveCgpIG1ldGhvZCBmb3Igb3VyIG93biB0aGF0IGRvZXMgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbmV2ZXIgZ2V0QkJveCBpcyBuZWVkZWQuIFRoaXMgaGVscHMgZW5zdXJlIHRoYXQgcGVyZm9ybWFuY2UgaXMgb3B0aW1hbCAob25seSBkbyBhbGwgdGhlc2UgZXh0cmEgc3RlcHMgd2hlbiBhYnNvbHV0ZWx5IG5lY2Vzc2FyeS4uLm1vc3QgZWxlbWVudHMgZG9uJ3QgbmVlZCBpdCkuXG4gIHZhciBzdmcgPSBfY3JlYXRlRWxlbWVudChcInN2Z1wiLCB0aGlzLm93bmVyU1ZHRWxlbWVudCAmJiB0aGlzLm93bmVyU1ZHRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiKSB8fCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLFxuICAgICAgb2xkUGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgb2xkU2libGluZyA9IHRoaXMubmV4dFNpYmxpbmcsXG4gICAgICBvbGRDU1MgPSB0aGlzLnN0eWxlLmNzc1RleHQsXG4gICAgICBiYm94O1xuXG4gIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKHRoaXMpO1xuICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKHN3YXBJZlBvc3NpYmxlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGJib3ggPSB0aGlzLmdldEJCb3goKTtcbiAgICAgIHRoaXMuX2dzYXBCQm94ID0gdGhpcy5nZXRCQm94OyAvL3N0b3JlIHRoZSBvcmlnaW5hbFxuXG4gICAgICB0aGlzLmdldEJCb3ggPSBfZ2V0QkJveEhhY2s7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfSBlbHNlIGlmICh0aGlzLl9nc2FwQkJveCkge1xuICAgIGJib3ggPSB0aGlzLl9nc2FwQkJveCgpO1xuICB9XG5cbiAgaWYgKG9sZFBhcmVudCkge1xuICAgIGlmIChvbGRTaWJsaW5nKSB7XG4gICAgICBvbGRQYXJlbnQuaW5zZXJ0QmVmb3JlKHRoaXMsIG9sZFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQoc3ZnKTtcblxuICB0aGlzLnN0eWxlLmNzc1RleHQgPSBvbGRDU1M7XG4gIHJldHVybiBiYm94O1xufSxcbiAgICBfZ2V0QXR0cmlidXRlRmFsbGJhY2tzID0gZnVuY3Rpb24gX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIGF0dHJpYnV0ZXNBcnJheSkge1xuICB2YXIgaSA9IGF0dHJpYnV0ZXNBcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSkpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNBcnJheVtpXSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9nZXRCQm94ID0gZnVuY3Rpb24gX2dldEJCb3godGFyZ2V0KSB7XG4gIHZhciBib3VuZHM7XG5cbiAgdHJ5IHtcbiAgICBib3VuZHMgPSB0YXJnZXQuZ2V0QkJveCgpOyAvL0ZpcmVmb3ggdGhyb3dzIGVycm9ycyBpZiB5b3UgdHJ5IGNhbGxpbmcgZ2V0QkJveCgpIG9uIGFuIFNWRyBlbGVtZW50IHRoYXQncyBub3QgcmVuZGVyZWQgKGxpa2UgaW4gYSA8c3ltYm9sPiBvciA8ZGVmcz4pLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02MTIxMThcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveEhhY2suY2FsbCh0YXJnZXQsIHRydWUpO1xuICB9XG5cbiAgYm91bmRzICYmIChib3VuZHMud2lkdGggfHwgYm91bmRzLmhlaWdodCkgfHwgdGFyZ2V0LmdldEJCb3ggPT09IF9nZXRCQm94SGFjayB8fCAoYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKSk7IC8vc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSBtaXNyZXBvcnQgdGhlIGJvdW5kcyBpZiB0aGUgZWxlbWVudCBoYXMgemVybyB3aWR0aCBhbmQgaGVpZ2h0IChpdCBqdXN0IGFzc3VtZXMgaXQncyBhdCB4OjAsIHk6MCksIHRodXMgd2UgbmVlZCB0byBtYW51YWxseSBncmFiIHRoZSBwb3NpdGlvbiBpbiB0aGF0IGNhc2UuXG5cbiAgcmV0dXJuIGJvdW5kcyAmJiAhYm91bmRzLndpZHRoICYmICFib3VuZHMueCAmJiAhYm91bmRzLnkgPyB7XG4gICAgeDogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ4XCIsIFwiY3hcIiwgXCJ4MVwiXSkgfHwgMCxcbiAgICB5OiArX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyh0YXJnZXQsIFtcInlcIiwgXCJjeVwiLCBcInkxXCJdKSB8fCAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9IDogYm91bmRzO1xufSxcbiAgICBfaXNTVkcgPSBmdW5jdGlvbiBfaXNTVkcoZSkge1xuICByZXR1cm4gISEoZS5nZXRDVE0gJiYgKCFlLnBhcmVudE5vZGUgfHwgZS5vd25lclNWR0VsZW1lbnQpICYmIF9nZXRCQm94KGUpKTtcbn0sXG4gICAgLy9yZXBvcnRzIGlmIHRoZSBlbGVtZW50IGlzIGFuIFNWRyBvbiB3aGljaCBnZXRCQm94KCkgYWN0dWFsbHkgd29ya3Ncbl9yZW1vdmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSkge1xuICAgIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZTtcblxuICAgIGlmIChwcm9wZXJ0eSBpbiBfdHJhbnNmb3JtUHJvcHMgJiYgcHJvcGVydHkgIT09IF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSB7XG4gICAgICBwcm9wZXJ0eSA9IF90cmFuc2Zvcm1Qcm9wO1xuICAgIH1cblxuICAgIGlmIChzdHlsZS5yZW1vdmVQcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5LnN1YnN0cigwLCAyKSA9PT0gXCJtc1wiIHx8IHByb3BlcnR5LnN1YnN0cigwLCA2KSA9PT0gXCJ3ZWJraXRcIikge1xuICAgICAgICAvL01pY3Jvc29mdCBhbmQgc29tZSBXZWJraXQgYnJvd3NlcnMgZG9uJ3QgY29uZm9ybSB0byB0aGUgc3RhbmRhcmQgb2YgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBwcmVmaXggY2hhcmFjdGVyLCBzbyB3ZSBhZGp1c3Qgc28gdGhhdCB3aGVuIHdlIHByZWZpeCB0aGUgY2FwcyB3aXRoIGEgZGFzaCwgaXQncyBjb3JyZWN0IChvdGhlcndpc2UgaXQnZCBiZSBcIm1zLXRyYW5zZm9ybVwiIGluc3RlYWQgb2YgXCItbXMtdHJhbnNmb3JtXCIgZm9yIElFOSwgZm9yIGV4YW1wbGUpXG4gICAgICAgIHByb3BlcnR5ID0gXCItXCIgKyBwcm9wZXJ0eTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkucmVwbGFjZShfY2Fwc0V4cCwgXCItJDFcIikudG9Mb3dlckNhc2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vbm90ZTogb2xkIHZlcnNpb25zIG9mIElFIHVzZSBcInJlbW92ZUF0dHJpYnV0ZSgpXCIgaW5zdGVhZCBvZiBcInJlbW92ZVByb3BlcnR5KClcIlxuICAgICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKHByb3BlcnR5KTtcbiAgICB9XG4gIH1cbn0sXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQgPSBmdW5jdGlvbiBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGJlZ2lubmluZywgZW5kLCBvbmx5U2V0QXRFbmQpIHtcbiAgdmFyIHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAxLCBvbmx5U2V0QXRFbmQgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKTtcbiAgcGx1Z2luLl9wdCA9IHB0O1xuICBwdC5iID0gYmVnaW5uaW5nO1xuICBwdC5lID0gZW5kO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfbm9uQ29udmVydGlibGVVbml0cyA9IHtcbiAgZGVnOiAxLFxuICByYWQ6IDEsXG4gIHR1cm46IDFcbn0sXG4gICAgLy90YWtlcyBhIHNpbmdsZSB2YWx1ZSBsaWtlIDIwcHggYW5kIGNvbnZlcnRzIGl0IHRvIHRoZSB1bml0IHNwZWNpZmllZCwgbGlrZSBcIiVcIiwgcmV0dXJuaW5nIG9ubHkgdGhlIG51bWVyaWMgYW1vdW50LlxuX2NvbnZlcnRUb1VuaXQgPSBmdW5jdGlvbiBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgdW5pdCkge1xuICB2YXIgY3VyVmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwLFxuICAgICAgY3VyVW5pdCA9ICh2YWx1ZSArIFwiXCIpLnRyaW0oKS5zdWJzdHIoKGN1clZhbHVlICsgXCJcIikubGVuZ3RoKSB8fCBcInB4XCIsXG4gICAgICAvLyBzb21lIGJyb3dzZXJzIGxlYXZlIGV4dHJhIHdoaXRlc3BhY2UgYXQgdGhlIGJlZ2lubmluZyBvZiBDU1MgdmFyaWFibGVzLCBoZW5jZSB0aGUgbmVlZCB0byB0cmltKClcbiAgc3R5bGUgPSBfdGVtcERpdi5zdHlsZSxcbiAgICAgIGhvcml6b250YWwgPSBfaG9yaXpvbnRhbEV4cC50ZXN0KHByb3BlcnR5KSxcbiAgICAgIGlzUm9vdFNWRyA9IHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic3ZnXCIsXG4gICAgICBtZWFzdXJlUHJvcGVydHkgPSAoaXNSb290U1ZHID8gXCJjbGllbnRcIiA6IFwib2Zmc2V0XCIpICsgKGhvcml6b250YWwgPyBcIldpZHRoXCIgOiBcIkhlaWdodFwiKSxcbiAgICAgIGFtb3VudCA9IDEwMCxcbiAgICAgIHRvUGl4ZWxzID0gdW5pdCA9PT0gXCJweFwiLFxuICAgICAgdG9QZXJjZW50ID0gdW5pdCA9PT0gXCIlXCIsXG4gICAgICBweCxcbiAgICAgIHBhcmVudCxcbiAgICAgIGNhY2hlLFxuICAgICAgaXNTVkc7XG5cbiAgaWYgKHVuaXQgPT09IGN1clVuaXQgfHwgIWN1clZhbHVlIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW3VuaXRdIHx8IF9ub25Db252ZXJ0aWJsZVVuaXRzW2N1clVuaXRdKSB7XG4gICAgcmV0dXJuIGN1clZhbHVlO1xuICB9XG5cbiAgY3VyVW5pdCAhPT0gXCJweFwiICYmICF0b1BpeGVscyAmJiAoY3VyVmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgXCJweFwiKSk7XG4gIGlzU1ZHID0gdGFyZ2V0LmdldENUTSAmJiBfaXNTVkcodGFyZ2V0KTtcblxuICBpZiAoKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gfHwgfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSkpIHtcbiAgICBweCA9IGlzU1ZHID8gdGFyZ2V0LmdldEJCb3goKVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gOiB0YXJnZXRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICByZXR1cm4gX3JvdW5kKHRvUGVyY2VudCA/IGN1clZhbHVlIC8gcHggKiBhbW91bnQgOiBjdXJWYWx1ZSAvIDEwMCAqIHB4KTtcbiAgfVxuXG4gIHN0eWxlW2hvcml6b250YWwgPyBcIndpZHRoXCIgOiBcImhlaWdodFwiXSA9IGFtb3VudCArICh0b1BpeGVscyA/IGN1clVuaXQgOiB1bml0KTtcbiAgcGFyZW50ID0gfnByb3BlcnR5LmluZGV4T2YoXCJhZGl1c1wiKSB8fCB1bml0ID09PSBcImVtXCIgJiYgdGFyZ2V0LmFwcGVuZENoaWxkICYmICFpc1Jvb3RTVkcgPyB0YXJnZXQgOiB0YXJnZXQucGFyZW50Tm9kZTtcblxuICBpZiAoaXNTVkcpIHtcbiAgICBwYXJlbnQgPSAodGFyZ2V0Lm93bmVyU1ZHRWxlbWVudCB8fCB7fSkucGFyZW50Tm9kZTtcbiAgfVxuXG4gIGlmICghcGFyZW50IHx8IHBhcmVudCA9PT0gX2RvYyB8fCAhcGFyZW50LmFwcGVuZENoaWxkKSB7XG4gICAgcGFyZW50ID0gX2RvYy5ib2R5O1xuICB9XG5cbiAgY2FjaGUgPSBwYXJlbnQuX2dzYXA7XG5cbiAgaWYgKGNhY2hlICYmIHRvUGVyY2VudCAmJiBjYWNoZS53aWR0aCAmJiBob3Jpem9udGFsICYmIGNhY2hlLnRpbWUgPT09IF90aWNrZXIudGltZSkge1xuICAgIHJldHVybiBfcm91bmQoY3VyVmFsdWUgLyBjYWNoZS53aWR0aCAqIGFtb3VudCk7XG4gIH0gZWxzZSB7XG4gICAgKHRvUGVyY2VudCB8fCBjdXJVbml0ID09PSBcIiVcIikgJiYgKHN0eWxlLnBvc2l0aW9uID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcInBvc2l0aW9uXCIpKTtcbiAgICBwYXJlbnQgPT09IHRhcmdldCAmJiAoc3R5bGUucG9zaXRpb24gPSBcInN0YXRpY1wiKTsgLy8gbGlrZSBmb3IgYm9yZGVyUmFkaXVzLCBpZiBpdCdzIGEgJSB3ZSBtdXN0IGhhdmUgaXQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBpdHNlbGYgYnV0IHRoYXQgbWF5IG5vdCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBvciBwb3NpdGlvbjogYWJzb2x1dGUgaW4gd2hpY2ggY2FzZSBpdCdkIGdvIHVwIHRoZSBjaGFpbiB1bnRpbCBpdCBmaW5kcyBpdHMgb2Zmc2V0UGFyZW50IChiYWQpLiBwb3NpdGlvbjogc3RhdGljIHByb3RlY3RzIGFnYWluc3QgdGhhdC5cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGVtcERpdik7XG4gICAgcHggPSBfdGVtcERpdlttZWFzdXJlUHJvcGVydHldO1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChfdGVtcERpdik7XG4gICAgc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cbiAgICBpZiAoaG9yaXpvbnRhbCAmJiB0b1BlcmNlbnQpIHtcbiAgICAgIGNhY2hlID0gX2dldENhY2hlKHBhcmVudCk7XG4gICAgICBjYWNoZS50aW1lID0gX3RpY2tlci50aW1lO1xuICAgICAgY2FjaGUud2lkdGggPSBwYXJlbnRbbWVhc3VyZVByb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX3JvdW5kKHRvUGl4ZWxzID8gcHggKiBjdXJWYWx1ZSAvIGFtb3VudCA6IHB4ICYmIGN1clZhbHVlID8gYW1vdW50IC8gcHggKiBjdXJWYWx1ZSA6IDApO1xufSxcbiAgICBfZ2V0ID0gZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gIHZhciB2YWx1ZTtcbiAgX3BsdWdpbkluaXR0ZWQgfHwgX2luaXRDb3JlKCk7XG5cbiAgaWYgKHByb3BlcnR5IGluIF9wcm9wZXJ0eUFsaWFzZXMgJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICBwcm9wZXJ0eSA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuXG4gICAgaWYgKH5wcm9wZXJ0eS5pbmRleE9mKFwiLFwiKSkge1xuICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdChcIixcIilbMF07XG4gICAgfVxuICB9XG5cbiAgaWYgKF90cmFuc2Zvcm1Qcm9wc1twcm9wZXJ0eV0gJiYgcHJvcGVydHkgIT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICB2YWx1ZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpO1xuICAgIHZhbHVlID0gcHJvcGVydHkgIT09IFwidHJhbnNmb3JtT3JpZ2luXCIgPyB2YWx1ZVtwcm9wZXJ0eV0gOiB2YWx1ZS5zdmcgPyB2YWx1ZS5vcmlnaW4gOiBfZmlyc3RUd29Pbmx5KF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApKSArIFwiIFwiICsgdmFsdWUuek9yaWdpbiArIFwicHhcIjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IHRhcmdldC5zdHlsZVtwcm9wZXJ0eV07XG5cbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09PSBcImF1dG9cIiB8fCB1bmNhY2hlIHx8IH4odmFsdWUgKyBcIlwiKS5pbmRleE9mKFwiY2FsYyhcIikpIHtcbiAgICAgIHZhbHVlID0gX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0gJiYgX3NwZWNpYWxQcm9wc1twcm9wZXJ0eV0odGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkgfHwgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkgfHwgX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIgPyAxIDogMCk7IC8vIG5vdGU6IHNvbWUgYnJvd3NlcnMsIGxpa2UgRmlyZWZveCwgZG9uJ3QgcmVwb3J0IGJvcmRlclJhZGl1cyBjb3JyZWN0bHkhIEluc3RlYWQsIGl0IG9ubHkgcmVwb3J0cyBldmVyeSBjb3JuZXIgbGlrZSAgYm9yZGVyVG9wTGVmdFJhZGl1c1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bml0ICYmICF+KHZhbHVlICsgXCJcIikudHJpbSgpLmluZGV4T2YoXCIgXCIpID8gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpICsgdW5pdCA6IHZhbHVlO1xufSxcbiAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nID0gZnVuY3Rpb24gX3R3ZWVuQ29tcGxleENTU1N0cmluZyh0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQpIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0ID09PSBcIm5vbmVcIikge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgbGlrZSBTYWZhcmkgYWN0dWFsbHkgUFJFRkVSIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBhbmQgbWlzLXJlcG9ydCB0aGUgdW5wcmVmaXhlZCB2YWx1ZSBsaWtlIGNsaXBQYXRoIChCVUcpLiBJbiBvdGhlciB3b3JkcywgZXZlbiB0aG91Z2ggY2xpcFBhdGggZXhpc3RzIGluIHRoZSBzdHlsZSAoXCJjbGlwUGF0aFwiIGluIHRhcmdldC5zdHlsZSkgYW5kIGl0J3Mgc2V0IGluIHRoZSBDU1MgcHJvcGVybHkgKGFsb25nIHdpdGggLXdlYmtpdC1jbGlwLXBhdGgpLCBTYWZhcmkgcmVwb3J0cyBjbGlwUGF0aCBhcyBcIm5vbmVcIiB3aGVyZWFzIFdlYmtpdENsaXBQYXRoIHJlcG9ydHMgYWNjdXJhdGVseSBsaWtlIFwiZWxsaXBzZSgxMDAlIDAlIGF0IDUwJSAwJSlcIiwgc28gaW4gdGhpcyBjYXNlIHdlIG11c3QgU1dJVENIIHRvIHVzaW5nIHRoZSBwcmVmaXhlZCBwcm9wZXJ0eSBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8xODMxMC1jbGlwcGF0aC1kb2VzbnQtd29yay1vbi1pb3MvXG4gICAgdmFyIHAgPSBfY2hlY2tQcm9wUHJlZml4KHByb3AsIHRhcmdldCwgMSksXG4gICAgICAgIHMgPSBwICYmIF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcCwgMSk7XG5cbiAgICBpZiAocyAmJiBzICE9PSBzdGFydCkge1xuICAgICAgcHJvcCA9IHA7XG4gICAgICBzdGFydCA9IHM7XG4gICAgfSBlbHNlIGlmIChwcm9wID09PSBcImJvcmRlckNvbG9yXCIpIHtcbiAgICAgIHN0YXJ0ID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBcImJvcmRlclRvcENvbG9yXCIpOyAvLyBGaXJlZm94IGJ1ZzogYWx3YXlzIHJlcG9ydHMgXCJib3JkZXJDb2xvclwiIGFzIFwiXCIsIHNvIHdlIG11c3QgZmFsbCBiYWNrIHRvIGJvcmRlclRvcENvbG9yLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yNDU4My1ob3ctdG8tcmV0dXJuLWNvbG9ycy10aGF0LWktaGFkLWFmdGVyLXJldmVyc2UvXG4gICAgfVxuICB9XG5cbiAgdmFyIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LnN0eWxlLCBwcm9wLCAwLCAxLCBfcmVuZGVyQ29tcGxleFN0cmluZyksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIGEsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydFZhbHVlcyxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgY29sb3IsXG4gICAgICBzdGFydFZhbHVlLFxuICAgICAgZW5kVmFsdWUsXG4gICAgICBlbmROdW0sXG4gICAgICBjaHVuayxcbiAgICAgIGVuZFVuaXQsXG4gICAgICBzdGFydFVuaXQsXG4gICAgICByZWxhdGl2ZSxcbiAgICAgIGVuZFZhbHVlcztcbiAgcHQuYiA9IHN0YXJ0O1xuICBwdC5lID0gZW5kO1xuICBzdGFydCArPSBcIlwiOyAvL2Vuc3VyZSB2YWx1ZXMgYXJlIHN0cmluZ3NcblxuICBlbmQgKz0gXCJcIjtcblxuICBpZiAoZW5kID09PSBcImF1dG9cIikge1xuICAgIHRhcmdldC5zdHlsZVtwcm9wXSA9IGVuZDtcbiAgICBlbmQgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHByb3ApIHx8IGVuZDtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBzdGFydDtcbiAgfVxuXG4gIGEgPSBbc3RhcnQsIGVuZF07XG5cbiAgX2NvbG9yU3RyaW5nRmlsdGVyKGEpOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuIElmIGNvbG9ycyBhcmUgZm91bmQsIGl0IHJldHVybnMgdHJ1ZSBhbmQgdGhlbiB3ZSBtdXN0IG1hdGNoIHdoZXJlIHRoZSBjb2xvciBzaG93cyB1cCBvcmRlci13aXNlIGJlY2F1c2UgZm9yIHRoaW5ncyBsaWtlIGJveFNoYWRvdywgc29tZXRpbWVzIHRoZSBicm93c2VyIHByb3ZpZGVzIHRoZSBjb21wdXRlZCB2YWx1ZXMgd2l0aCB0aGUgY29sb3IgRklSU1QsIGJ1dCB0aGUgdXNlciBwcm92aWRlcyBpdCB3aXRoIHRoZSBjb2xvciBMQVNULCBzbyBmbGlwIHRoZW0gaWYgbmVjZXNzYXJ5LiBTYW1lIGZvciBkcm9wLXNoYWRvdygpLlxuXG5cbiAgc3RhcnQgPSBhWzBdO1xuICBlbmQgPSBhWzFdO1xuICBzdGFydFZhbHVlcyA9IHN0YXJ0Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gIGVuZFZhbHVlcyA9IGVuZC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuXG4gIGlmIChlbmRWYWx1ZXMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKHJlc3VsdCA9IF9udW1XaXRoVW5pdEV4cC5leGVjKGVuZCkpIHtcbiAgICAgIGVuZFZhbHVlID0gcmVzdWx0WzBdO1xuICAgICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIiB8fCBjaHVuay5zdWJzdHIoLTUpID09PSBcImhzbGEoXCIpIHtcbiAgICAgICAgY29sb3IgPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoZW5kVmFsdWUgIT09IChzdGFydFZhbHVlID0gc3RhcnRWYWx1ZXNbbWF0Y2hJbmRleCsrXSB8fCBcIlwiKSkge1xuICAgICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnRWYWx1ZSkgfHwgMDtcbiAgICAgICAgc3RhcnRVbml0ID0gc3RhcnRWYWx1ZS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgcmVsYXRpdmUgPSBlbmRWYWx1ZS5jaGFyQXQoMSkgPT09IFwiPVwiID8gKyhlbmRWYWx1ZS5jaGFyQXQoMCkgKyBcIjFcIikgOiAwO1xuXG4gICAgICAgIGlmIChyZWxhdGl2ZSkge1xuICAgICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICAgIGVuZFVuaXQgPSBlbmRWYWx1ZS5zdWJzdHIoKGVuZE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIGluZGV4ID0gX251bVdpdGhVbml0RXhwLmxhc3RJbmRleCAtIGVuZFVuaXQubGVuZ3RoO1xuXG4gICAgICAgIGlmICghZW5kVW5pdCkge1xuICAgICAgICAgIC8vaWYgc29tZXRoaW5nIGxpa2UgXCJwZXJzcGVjdGl2ZTozMDBcIiBpcyBwYXNzZWQgaW4gYW5kIHdlIG11c3QgYWRkIGEgdW5pdCB0byB0aGUgZW5kXG4gICAgICAgICAgZW5kVW5pdCA9IGVuZFVuaXQgfHwgX2NvbmZpZy51bml0c1twcm9wXSB8fCBzdGFydFVuaXQ7XG5cbiAgICAgICAgICBpZiAoaW5kZXggPT09IGVuZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZCArPSBlbmRVbml0O1xuICAgICAgICAgICAgcHQuZSArPSBlbmRVbml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQpIHtcbiAgICAgICAgICBzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgfHwgMDtcbiAgICAgICAgfSAvL3RoZXNlIG5lc3RlZCBQcm9wVHdlZW5zIGFyZSBoYW5kbGVkIGluIGEgc3BlY2lhbCB3YXkgLSB3ZSdsbCBuZXZlciBhY3R1YWxseSBjYWxsIGEgcmVuZGVyIG9yIHNldHRlciBtZXRob2Qgb24gdGhlbS4gV2UnbGwganVzdCBsb29wIHRocm91Z2ggdGhlbSBpbiB0aGUgcGFyZW50IGNvbXBsZXggc3RyaW5nIFByb3BUd2VlbidzIHJlbmRlciBtZXRob2QuXG5cblxuICAgICAgICBwdC5fcHQgPSB7XG4gICAgICAgICAgX25leHQ6IHB0Ll9wdCxcbiAgICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgICBzOiBzdGFydE51bSxcbiAgICAgICAgICBjOiByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0IHx8IHByb3AgPT09IFwiekluZGV4XCIgPyBNYXRoLnJvdW5kIDogMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHB0LmMgPSBpbmRleCA8IGVuZC5sZW5ndGggPyBlbmQuc3Vic3RyaW5nKGluZGV4LCBlbmQubGVuZ3RoKSA6IFwiXCI7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBwYXJ0IG9mIHRoZSBzdHJpbmcgKGFmdGVyIHRoZSBsYXN0IG51bWJlcilcbiAgfSBlbHNlIHtcbiAgICBwdC5yID0gcHJvcCA9PT0gXCJkaXNwbGF5XCIgJiYgZW5kID09PSBcIm5vbmVcIiA/IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kIDogX3JlbmRlck5vblR3ZWVuaW5nVmFsdWU7XG4gIH1cblxuICBfcmVsRXhwLnRlc3QoZW5kKSAmJiAocHQuZSA9IDApOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbChwbHVnaW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGFub3RoZXIgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2tleXdvcmRUb1BlcmNlbnQgPSB7XG4gIHRvcDogXCIwJVwiLFxuICBib3R0b206IFwiMTAwJVwiLFxuICBsZWZ0OiBcIjAlXCIsXG4gIHJpZ2h0OiBcIjEwMCVcIixcbiAgY2VudGVyOiBcIjUwJVwiXG59LFxuICAgIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzID0gZnVuY3Rpb24gX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXModmFsdWUpIHtcbiAgdmFyIHNwbGl0ID0gdmFsdWUuc3BsaXQoXCIgXCIpLFxuICAgICAgeCA9IHNwbGl0WzBdLFxuICAgICAgeSA9IHNwbGl0WzFdIHx8IFwiNTAlXCI7XG5cbiAgaWYgKHggPT09IFwidG9wXCIgfHwgeCA9PT0gXCJib3R0b21cIiB8fCB5ID09PSBcImxlZnRcIiB8fCB5ID09PSBcInJpZ2h0XCIpIHtcbiAgICAvL3RoZSB1c2VyIHByb3ZpZGVkIHRoZW0gaW4gdGhlIHdyb25nIG9yZGVyLCBzbyBmbGlwIHRoZW1cbiAgICB2YWx1ZSA9IHg7XG4gICAgeCA9IHk7XG4gICAgeSA9IHZhbHVlO1xuICB9XG5cbiAgc3BsaXRbMF0gPSBfa2V5d29yZFRvUGVyY2VudFt4XSB8fCB4O1xuICBzcGxpdFsxXSA9IF9rZXl3b3JkVG9QZXJjZW50W3ldIHx8IHk7XG4gIHJldHVybiBzcGxpdC5qb2luKFwiIFwiKTtcbn0sXG4gICAgX3JlbmRlckNsZWFyUHJvcHMgPSBmdW5jdGlvbiBfcmVuZGVyQ2xlYXJQcm9wcyhyYXRpbywgZGF0YSkge1xuICBpZiAoZGF0YS50d2VlbiAmJiBkYXRhLnR3ZWVuLl90aW1lID09PSBkYXRhLnR3ZWVuLl9kdXIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZGF0YS50LFxuICAgICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgICAgcHJvcHMgPSBkYXRhLnUsXG4gICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICAgICAgICBwcm9wLFxuICAgICAgICBjbGVhclRyYW5zZm9ybXMsXG4gICAgICAgIGk7XG5cbiAgICBpZiAocHJvcHMgPT09IFwiYWxsXCIgfHwgcHJvcHMgPT09IHRydWUpIHtcbiAgICAgIHN0eWxlLmNzc1RleHQgPSBcIlwiO1xuICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcHMgPSBwcm9wcy5zcGxpdChcIixcIik7XG4gICAgICBpID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoLS1pID4gLTEpIHtcbiAgICAgICAgcHJvcCA9IHByb3BzW2ldO1xuXG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcF0pIHtcbiAgICAgICAgICBjbGVhclRyYW5zZm9ybXMgPSAxO1xuICAgICAgICAgIHByb3AgPSBwcm9wID09PSBcInRyYW5zZm9ybU9yaWdpblwiID8gX3RyYW5zZm9ybU9yaWdpblByb3AgOiBfdHJhbnNmb3JtUHJvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIHByb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbGVhclRyYW5zZm9ybXMpIHtcbiAgICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgICAgaWYgKGNhY2hlKSB7XG4gICAgICAgIGNhY2hlLnN2ZyAmJiB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuXG4gICAgICAgIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpOyAvLyBmb3JjZSBhbGwgdGhlIGNhY2hlZCB2YWx1ZXMgYmFjayB0byBcIm5vcm1hbFwiL2lkZW50aXR5LCBvdGhlcndpc2UgaWYgdGhlcmUncyBhbm90aGVyIHR3ZWVuIHRoYXQncyBhbHJlYWR5IHNldCB0byByZW5kZXIgdHJhbnNmb3JtcyBvbiB0aGlzIGVsZW1lbnQsIGl0IGNvdWxkIGRpc3BsYXkgdGhlIHdyb25nIHZhbHVlcy5cblxuXG4gICAgICAgIGNhY2hlLnVuY2FjaGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbiAgICAvLyBub3RlOiBzcGVjaWFsUHJvcHMgc2hvdWxkIHJldHVybiAxIGlmIChhbmQgb25seSBpZikgdGhleSBoYXZlIGEgbm9uLXplcm8gcHJpb3JpdHkuIEl0IGluZGljYXRlcyB3ZSBuZWVkIHRvIHNvcnQgdGhlIGxpbmtlZCBsaXN0LlxuX3NwZWNpYWxQcm9wcyA9IHtcbiAgY2xlYXJQcm9wczogZnVuY3Rpb24gY2xlYXJQcm9wcyhwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIGlmICh0d2Vlbi5kYXRhICE9PSBcImlzRnJvbVN0YXJ0XCIpIHtcbiAgICAgIHZhciBwdCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDAsIF9yZW5kZXJDbGVhclByb3BzKTtcbiAgICAgIHB0LnUgPSBlbmRWYWx1ZTtcbiAgICAgIHB0LnByID0gLTEwO1xuICAgICAgcHQudHdlZW4gPSB0d2VlbjtcblxuICAgICAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9XG4gIC8qIGNsYXNzTmFtZSBmZWF0dXJlIChhYm91dCAwLjRrYiBnemlwcGVkKS5cbiAgLCBjbGFzc05hbWUocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgXHRsZXQgX3JlbmRlckNsYXNzTmFtZSA9IChyYXRpbywgZGF0YSkgPT4ge1xuICBcdFx0XHRkYXRhLmNzcy5yZW5kZXIocmF0aW8sIGRhdGEuY3NzKTtcbiAgXHRcdFx0aWYgKCFyYXRpbyB8fCByYXRpbyA9PT0gMSkge1xuICBcdFx0XHRcdGxldCBpbmxpbmUgPSBkYXRhLnJtdixcbiAgXHRcdFx0XHRcdHRhcmdldCA9IGRhdGEudCxcbiAgXHRcdFx0XHRcdHA7XG4gIFx0XHRcdFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHJhdGlvID8gZGF0YS5lIDogZGF0YS5iKTtcbiAgXHRcdFx0XHRmb3IgKHAgaW4gaW5saW5lKSB7XG4gIFx0XHRcdFx0XHRfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwKTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdH0sXG4gIFx0XHRfZ2V0QWxsU3R5bGVzID0gKHRhcmdldCkgPT4ge1xuICBcdFx0XHRsZXQgc3R5bGVzID0ge30sXG4gIFx0XHRcdFx0Y29tcHV0ZWQgPSBnZXRDb21wdXRlZFN0eWxlKHRhcmdldCksXG4gIFx0XHRcdFx0cDtcbiAgXHRcdFx0Zm9yIChwIGluIGNvbXB1dGVkKSB7XG4gIFx0XHRcdFx0aWYgKGlzTmFOKHApICYmIHAgIT09IFwiY3NzVGV4dFwiICYmIHAgIT09IFwibGVuZ3RoXCIpIHtcbiAgXHRcdFx0XHRcdHN0eWxlc1twXSA9IGNvbXB1dGVkW3BdO1xuICBcdFx0XHRcdH1cbiAgXHRcdFx0fVxuICBcdFx0XHRfc2V0RGVmYXVsdHMoc3R5bGVzLCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKSk7XG4gIFx0XHRcdHJldHVybiBzdHlsZXM7XG4gIFx0XHR9LFxuICBcdFx0c3RhcnRDbGFzc0xpc3QgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIiksXG4gIFx0XHRzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgXHRcdGNzc1RleHQgPSBzdHlsZS5jc3NUZXh0LFxuICBcdFx0Y2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gIFx0XHRjbGFzc1BUID0gY2FjaGUuY2xhc3NQVCxcbiAgXHRcdGlubGluZVRvUmVtb3ZlQXRFbmQgPSB7fSxcbiAgXHRcdGRhdGEgPSB7dDp0YXJnZXQsIHBsdWdpbjpwbHVnaW4sIHJtdjppbmxpbmVUb1JlbW92ZUF0RW5kLCBiOnN0YXJ0Q2xhc3NMaXN0LCBlOihlbmRWYWx1ZS5jaGFyQXQoMSkgIT09IFwiPVwiKSA/IGVuZFZhbHVlIDogc3RhcnRDbGFzc0xpc3QucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIiArIGVuZFZhbHVlLnN1YnN0cigyKSArIFwiKD8hW1xcXFx3LV0pXCIpLCBcIlwiKSArICgoZW5kVmFsdWUuY2hhckF0KDApID09PSBcIitcIikgPyBcIiBcIiArIGVuZFZhbHVlLnN1YnN0cigyKSA6IFwiXCIpfSxcbiAgXHRcdGNoYW5naW5nVmFycyA9IHt9LFxuICBcdFx0c3RhcnRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQpLFxuICBcdFx0dHJhbnNmb3JtUmVsYXRlZCA9IC8odHJhbnNmb3JtfHBlcnNwZWN0aXZlKS9pLFxuICBcdFx0ZW5kVmFycywgcDtcbiAgXHRpZiAoY2xhc3NQVCkge1xuICBcdFx0Y2xhc3NQVC5yKDEsIGNsYXNzUFQuZCk7XG4gIFx0XHRfcmVtb3ZlTGlua2VkTGlzdEl0ZW0oY2xhc3NQVC5kLnBsdWdpbiwgY2xhc3NQVCwgXCJfcHRcIik7XG4gIFx0fVxuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBkYXRhLmUpO1xuICBcdGVuZFZhcnMgPSBfZ2V0QWxsU3R5bGVzKHRhcmdldCwgdHJ1ZSk7XG4gIFx0dGFyZ2V0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHN0YXJ0Q2xhc3NMaXN0KTtcbiAgXHRmb3IgKHAgaW4gZW5kVmFycykge1xuICBcdFx0aWYgKGVuZFZhcnNbcF0gIT09IHN0YXJ0VmFyc1twXSAmJiAhdHJhbnNmb3JtUmVsYXRlZC50ZXN0KHApKSB7XG4gIFx0XHRcdGNoYW5naW5nVmFyc1twXSA9IGVuZFZhcnNbcF07XG4gIFx0XHRcdGlmICghc3R5bGVbcF0gJiYgc3R5bGVbcF0gIT09IFwiMFwiKSB7XG4gIFx0XHRcdFx0aW5saW5lVG9SZW1vdmVBdEVuZFtwXSA9IDE7XG4gIFx0XHRcdH1cbiAgXHRcdH1cbiAgXHR9XG4gIFx0Y2FjaGUuY2xhc3NQVCA9IHBsdWdpbi5fcHQgPSBuZXcgUHJvcFR3ZWVuKHBsdWdpbi5fcHQsIHRhcmdldCwgXCJjbGFzc05hbWVcIiwgMCwgMCwgX3JlbmRlckNsYXNzTmFtZSwgZGF0YSwgMCwgLTExKTtcbiAgXHRpZiAoc3R5bGUuY3NzVGV4dCAhPT0gY3NzVGV4dCkgeyAvL29ubHkgYXBwbHkgaWYgdGhpbmdzIGNoYW5nZS4gT3RoZXJ3aXNlLCBpbiBjYXNlcyBsaWtlIGEgYmFja2dyb3VuZC1pbWFnZSB0aGF0J3MgcHVsbGVkIGR5bmFtaWNhbGx5LCBpdCBjb3VsZCBjYXVzZSBhIHJlZnJlc2guIFNlZSBodHRwczovL2dyZWVuc29jay5jb20vZm9ydW1zL3RvcGljLzIwMzY4LXBvc3NpYmxlLWdzYXAtYnVnLXN3aXRjaGluZy1jbGFzc25hbWVzLWluLWNocm9tZS8uXG4gIFx0XHRzdHlsZS5jc3NUZXh0ID0gY3NzVGV4dDsgLy93ZSByZWNvcmRlZCBjc3NUZXh0IGJlZm9yZSB3ZSBzd2FwcGVkIGNsYXNzZXMgYW5kIHJhbiBfZ2V0QWxsU3R5bGVzKCkgYmVjYXVzZSBpbiBjYXNlcyB3aGVuIGEgY2xhc3NOYW1lIHR3ZWVuIGlzIG92ZXJ3cml0dGVuLCB3ZSByZW1vdmUgYWxsIHRoZSByZWxhdGVkIHR3ZWVuaW5nIHByb3BlcnRpZXMgZnJvbSB0aGF0IGNsYXNzIGNoYW5nZSAob3RoZXJ3aXNlIGNsYXNzLXNwZWNpZmljIHN0dWZmIGNhbid0IG92ZXJyaWRlIHByb3BlcnRpZXMgd2UndmUgZGlyZWN0bHkgc2V0IG9uIHRoZSB0YXJnZXQncyBzdHlsZSBvYmplY3QgZHVlIHRvIHNwZWNpZmljaXR5KS5cbiAgXHR9XG4gIFx0X3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgdHJ1ZSk7IC8vdG8gY2xlYXIgdGhlIGNhY2hpbmcgb2YgdHJhbnNmb3Jtc1xuICBcdGRhdGEuY3NzID0gbmV3IGdzYXAucGx1Z2lucy5jc3MoKTtcbiAgXHRkYXRhLmNzcy5pbml0KHRhcmdldCwgY2hhbmdpbmdWYXJzLCB0d2Vlbik7XG4gIFx0cGx1Z2luLl9wcm9wcy5wdXNoKC4uLmRhdGEuY3NzLl9wcm9wcyk7XG4gIFx0cmV0dXJuIDE7XG4gIH1cbiAgKi9cblxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUUkFOU0ZPUk1TXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5faWRlbnRpdHkyRE1hdHJpeCA9IFsxLCAwLCAwLCAxLCAwLCAwXSxcbiAgICBfcm90YXRpb25hbFByb3BlcnRpZXMgPSB7fSxcbiAgICBfaXNOdWxsVHJhbnNmb3JtID0gZnVuY3Rpb24gX2lzTnVsbFRyYW5zZm9ybSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCIgfHwgdmFsdWUgPT09IFwibm9uZVwiIHx8ICF2YWx1ZTtcbn0sXG4gICAgX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSA9IGZ1bmN0aW9uIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkodGFyZ2V0KSB7XG4gIHZhciBtYXRyaXhTdHJpbmcgPSBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICByZXR1cm4gX2lzTnVsbFRyYW5zZm9ybShtYXRyaXhTdHJpbmcpID8gX2lkZW50aXR5MkRNYXRyaXggOiBtYXRyaXhTdHJpbmcuc3Vic3RyKDcpLm1hdGNoKF9udW1FeHApLm1hcChfcm91bmQpO1xufSxcbiAgICBfZ2V0TWF0cml4ID0gZnVuY3Rpb24gX2dldE1hdHJpeCh0YXJnZXQsIGZvcmNlMkQpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCksXG4gICAgICBwYXJlbnQsXG4gICAgICBuZXh0U2libGluZyxcbiAgICAgIHRlbXAsXG4gICAgICBhZGRlZFRvRE9NO1xuXG4gIGlmIChjYWNoZS5zdmcgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSkge1xuICAgIHRlbXAgPSB0YXJnZXQudHJhbnNmb3JtLmJhc2VWYWwuY29uc29saWRhdGUoKS5tYXRyaXg7IC8vZW5zdXJlcyB0aGF0IGV2ZW4gY29tcGxleCB2YWx1ZXMgbGlrZSBcInRyYW5zbGF0ZSg1MCw2MCkgcm90YXRlKDEzNSwwLDApXCIgYXJlIHBhcnNlZCBiZWNhdXNlIGl0IG1hc2hlcyBpdCBpbnRvIGEgbWF0cml4LlxuXG4gICAgbWF0cml4ID0gW3RlbXAuYSwgdGVtcC5iLCB0ZW1wLmMsIHRlbXAuZCwgdGVtcC5lLCB0ZW1wLmZdO1xuICAgIHJldHVybiBtYXRyaXguam9pbihcIixcIikgPT09IFwiMSwwLDAsMSwwLDBcIiA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4O1xuICB9IGVsc2UgaWYgKG1hdHJpeCA9PT0gX2lkZW50aXR5MkRNYXRyaXggJiYgIXRhcmdldC5vZmZzZXRQYXJlbnQgJiYgdGFyZ2V0ICE9PSBfZG9jRWxlbWVudCAmJiAhY2FjaGUuc3ZnKSB7XG4gICAgLy9ub3RlOiBpZiBvZmZzZXRQYXJlbnQgaXMgbnVsbCwgdGhhdCBtZWFucyB0aGUgZWxlbWVudCBpc24ndCBpbiB0aGUgbm9ybWFsIGRvY3VtZW50IGZsb3csIGxpa2UgaWYgaXQgaGFzIGRpc3BsYXk6bm9uZSBvciBvbmUgb2YgaXRzIGFuY2VzdG9ycyBoYXMgZGlzcGxheTpub25lKS4gRmlyZWZveCByZXR1cm5zIG51bGwgZm9yIGdldENvbXB1dGVkU3R5bGUoKSBpZiB0aGUgZWxlbWVudCBpcyBpbiBhbiBpZnJhbWUgdGhhdCBoYXMgZGlzcGxheTpub25lLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgICAvL2Jyb3dzZXJzIGRvbid0IHJlcG9ydCB0cmFuc2Zvcm1zIGFjY3VyYXRlbHkgdW5sZXNzIHRoZSBlbGVtZW50IGlzIGluIHRoZSBET00gYW5kIGhhcyBhIGRpc3BsYXkgdmFsdWUgdGhhdCdzIG5vdCBcIm5vbmVcIi4gRmlyZWZveCBhbmQgTWljcm9zb2Z0IGJyb3dzZXJzIGhhdmUgYSBwYXJ0aWFsIGJ1ZyB3aGVyZSB0aGV5J2xsIHJlcG9ydCB0cmFuc2Zvcm1zIGV2ZW4gaWYgZGlzcGxheTpub25lIEJVVCBub3QgYW55IHBlcmNlbnRhZ2UtYmFzZWQgdmFsdWVzIGxpa2UgdHJhbnNsYXRlKC01MCUsIDhweCkgd2lsbCBiZSByZXBvcnRlZCBhcyBpZiBpdCdzIHRyYW5zbGF0ZSgwLCA4cHgpLlxuICAgIHRlbXAgPSBzdHlsZS5kaXNwbGF5O1xuICAgIHN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgICBpZiAoIXBhcmVudCB8fCAhdGFyZ2V0Lm9mZnNldFBhcmVudCkge1xuICAgICAgLy8gbm90ZTogaW4gMy4zLjAgd2Ugc3dpdGNoZWQgdGFyZ2V0Lm9mZnNldFBhcmVudCB0byBfZG9jLmJvZHkuY29udGFpbnModGFyZ2V0KSB0byBhdm9pZCBbc29tZXRpbWVzIHVubmVjZXNzYXJ5XSBNdXRhdGlvbk9ic2VydmVyIGNhbGxzIGJ1dCB0aGF0IHdhc24ndCBhZGVxdWF0ZSBiZWNhdXNlIHRoZXJlIGFyZSBlZGdlIGNhc2VzIHdoZXJlIG5lc3RlZCBwb3NpdGlvbjogZml4ZWQgZWxlbWVudHMgbmVlZCB0byBnZXQgcmVwYXJlbnRlZCB0byBhY2N1cmF0ZWx5IHNlbnNlIHRyYW5zZm9ybXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzM4OCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zNzVcbiAgICAgIGFkZGVkVG9ET00gPSAxOyAvL2ZsYWdcblxuICAgICAgbmV4dFNpYmxpbmcgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG5cbiAgICAgIF9kb2NFbGVtZW50LmFwcGVuZENoaWxkKHRhcmdldCk7IC8vd2UgbXVzdCBhZGQgaXQgdG8gdGhlIERPTSBpbiBvcmRlciB0byBnZXQgdmFsdWVzIHByb3Blcmx5XG5cbiAgICB9XG5cbiAgICBtYXRyaXggPSBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCk7XG4gICAgdGVtcCA/IHN0eWxlLmRpc3BsYXkgPSB0ZW1wIDogX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgXCJkaXNwbGF5XCIpO1xuXG4gICAgaWYgKGFkZGVkVG9ET00pIHtcbiAgICAgIG5leHRTaWJsaW5nID8gcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHRTaWJsaW5nKSA6IHBhcmVudCA/IHBhcmVudC5hcHBlbmRDaGlsZCh0YXJnZXQpIDogX2RvY0VsZW1lbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9yY2UyRCAmJiBtYXRyaXgubGVuZ3RoID4gNiA/IFttYXRyaXhbMF0sIG1hdHJpeFsxXSwgbWF0cml4WzRdLCBtYXRyaXhbNV0sIG1hdHJpeFsxMl0sIG1hdHJpeFsxM11dIDogbWF0cml4O1xufSxcbiAgICBfYXBwbHlTVkdPcmlnaW4gPSBmdW5jdGlvbiBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCBvcmlnaW4sIG9yaWdpbklzQWJzb2x1dGUsIHNtb290aCwgbWF0cml4QXJyYXksIHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgIG1hdHJpeCA9IG1hdHJpeEFycmF5IHx8IF9nZXRNYXRyaXgodGFyZ2V0LCB0cnVlKSxcbiAgICAgIHhPcmlnaW5PbGQgPSBjYWNoZS54T3JpZ2luIHx8IDAsXG4gICAgICB5T3JpZ2luT2xkID0gY2FjaGUueU9yaWdpbiB8fCAwLFxuICAgICAgeE9mZnNldE9sZCA9IGNhY2hlLnhPZmZzZXQgfHwgMCxcbiAgICAgIHlPZmZzZXRPbGQgPSBjYWNoZS55T2Zmc2V0IHx8IDAsXG4gICAgICBhID0gbWF0cml4WzBdLFxuICAgICAgYiA9IG1hdHJpeFsxXSxcbiAgICAgIGMgPSBtYXRyaXhbMl0sXG4gICAgICBkID0gbWF0cml4WzNdLFxuICAgICAgdHggPSBtYXRyaXhbNF0sXG4gICAgICB0eSA9IG1hdHJpeFs1XSxcbiAgICAgIG9yaWdpblNwbGl0ID0gb3JpZ2luLnNwbGl0KFwiIFwiKSxcbiAgICAgIHhPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzBdKSB8fCAwLFxuICAgICAgeU9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luU3BsaXRbMV0pIHx8IDAsXG4gICAgICBib3VuZHMsXG4gICAgICBkZXRlcm1pbmFudCxcbiAgICAgIHgsXG4gICAgICB5O1xuXG4gIGlmICghb3JpZ2luSXNBYnNvbHV0ZSkge1xuICAgIGJvdW5kcyA9IF9nZXRCQm94KHRhcmdldCk7XG4gICAgeE9yaWdpbiA9IGJvdW5kcy54ICsgKH5vcmlnaW5TcGxpdFswXS5pbmRleE9mKFwiJVwiKSA/IHhPcmlnaW4gLyAxMDAgKiBib3VuZHMud2lkdGggOiB4T3JpZ2luKTtcbiAgICB5T3JpZ2luID0gYm91bmRzLnkgKyAofihvcmlnaW5TcGxpdFsxXSB8fCBvcmlnaW5TcGxpdFswXSkuaW5kZXhPZihcIiVcIikgPyB5T3JpZ2luIC8gMTAwICogYm91bmRzLmhlaWdodCA6IHlPcmlnaW4pO1xuICB9IGVsc2UgaWYgKG1hdHJpeCAhPT0gX2lkZW50aXR5MkRNYXRyaXggJiYgKGRldGVybWluYW50ID0gYSAqIGQgLSBiICogYykpIHtcbiAgICAvL2lmIGl0J3MgemVybyAobGlrZSBpZiBzY2FsZVggYW5kIHNjYWxlWSBhcmUgemVybyksIHNraXAgaXQgdG8gYXZvaWQgZXJyb3JzIHdpdGggZGl2aWRpbmcgYnkgemVyby5cbiAgICB4ID0geE9yaWdpbiAqIChkIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqICgtYyAvIGRldGVybWluYW50KSArIChjICogdHkgLSBkICogdHgpIC8gZGV0ZXJtaW5hbnQ7XG4gICAgeSA9IHhPcmlnaW4gKiAoLWIgLyBkZXRlcm1pbmFudCkgKyB5T3JpZ2luICogKGEgLyBkZXRlcm1pbmFudCkgLSAoYSAqIHR5IC0gYiAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHhPcmlnaW4gPSB4O1xuICAgIHlPcmlnaW4gPSB5O1xuICB9XG5cbiAgaWYgKHNtb290aCB8fCBzbW9vdGggIT09IGZhbHNlICYmIGNhY2hlLnNtb290aCkge1xuICAgIHR4ID0geE9yaWdpbiAtIHhPcmlnaW5PbGQ7XG4gICAgdHkgPSB5T3JpZ2luIC0geU9yaWdpbk9sZDtcbiAgICBjYWNoZS54T2Zmc2V0ID0geE9mZnNldE9sZCArICh0eCAqIGEgKyB0eSAqIGMpIC0gdHg7XG4gICAgY2FjaGUueU9mZnNldCA9IHlPZmZzZXRPbGQgKyAodHggKiBiICsgdHkgKiBkKSAtIHR5O1xuICB9IGVsc2Uge1xuICAgIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgfVxuXG4gIGNhY2hlLnhPcmlnaW4gPSB4T3JpZ2luO1xuICBjYWNoZS55T3JpZ2luID0geU9yaWdpbjtcbiAgY2FjaGUuc21vb3RoID0gISFzbW9vdGg7XG4gIGNhY2hlLm9yaWdpbiA9IG9yaWdpbjtcbiAgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSA9ICEhb3JpZ2luSXNBYnNvbHV0ZTtcbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IFwiMHB4IDBweFwiOyAvL290aGVyd2lzZSwgaWYgc29tZW9uZSBzZXRzICBhbiBvcmlnaW4gdmlhIENTUywgaXQgd2lsbCBsaWtlbHkgaW50ZXJmZXJlIHdpdGggdGhlIFNWRyB0cmFuc2Zvcm0gYXR0cmlidXRlIG9uZXMgKGJlY2F1c2UgcmVtZW1iZXIsIHdlJ3JlIGJha2luZyB0aGUgb3JpZ2luIGludG8gdGhlIG1hdHJpeCgpIHZhbHVlKS5cblxuICBpZiAocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8pIHtcbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieE9yaWdpblwiLCB4T3JpZ2luT2xkLCB4T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ5T3JpZ2luXCIsIHlPcmlnaW5PbGQsIHlPcmlnaW4pO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPZmZzZXRcIiwgeE9mZnNldE9sZCwgY2FjaGUueE9mZnNldCk7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9mZnNldFwiLCB5T2Zmc2V0T2xkLCBjYWNoZS55T2Zmc2V0KTtcbiAgfVxuXG4gIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiwgeE9yaWdpbiArIFwiIFwiICsgeU9yaWdpbik7XG59LFxuICAgIF9wYXJzZVRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHVuY2FjaGUpIHtcbiAgdmFyIGNhY2hlID0gdGFyZ2V0Ll9nc2FwIHx8IG5ldyBHU0NhY2hlKHRhcmdldCk7XG5cbiAgaWYgKFwieFwiIGluIGNhY2hlICYmICF1bmNhY2hlICYmICFjYWNoZS51bmNhY2hlKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgaW52ZXJ0ZWRTY2FsZVggPSBjYWNoZS5zY2FsZVggPCAwLFxuICAgICAgcHggPSBcInB4XCIsXG4gICAgICBkZWcgPSBcImRlZ1wiLFxuICAgICAgb3JpZ2luID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtT3JpZ2luUHJvcCkgfHwgXCIwXCIsXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHosXG4gICAgICBzY2FsZVgsXG4gICAgICBzY2FsZVksXG4gICAgICByb3RhdGlvbixcbiAgICAgIHJvdGF0aW9uWCxcbiAgICAgIHJvdGF0aW9uWSxcbiAgICAgIHNrZXdYLFxuICAgICAgc2tld1ksXG4gICAgICBwZXJzcGVjdGl2ZSxcbiAgICAgIHhPcmlnaW4sXG4gICAgICB5T3JpZ2luLFxuICAgICAgbWF0cml4LFxuICAgICAgYW5nbGUsXG4gICAgICBjb3MsXG4gICAgICBzaW4sXG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIGMsXG4gICAgICBkLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdDEsXG4gICAgICB0MixcbiAgICAgIHQzLFxuICAgICAgYTEzLFxuICAgICAgYTIzLFxuICAgICAgYTMzLFxuICAgICAgYTQyLFxuICAgICAgYTQzLFxuICAgICAgYTMyO1xuICB4ID0geSA9IHogPSByb3RhdGlvbiA9IHJvdGF0aW9uWCA9IHJvdGF0aW9uWSA9IHNrZXdYID0gc2tld1kgPSBwZXJzcGVjdGl2ZSA9IDA7XG4gIHNjYWxlWCA9IHNjYWxlWSA9IDE7XG4gIGNhY2hlLnN2ZyA9ICEhKHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCkpO1xuICBtYXRyaXggPSBfZ2V0TWF0cml4KHRhcmdldCwgY2FjaGUuc3ZnKTtcblxuICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgdDEgPSAoIWNhY2hlLnVuY2FjaGUgfHwgb3JpZ2luID09PSBcIjBweCAwcHhcIikgJiYgIXVuY2FjaGUgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKTsgLy8gaWYgb3JpZ2luIGlzIDAsMCBhbmQgY2FjaGUudW5jYWNoZSBpcyB0cnVlLCBsZXQgdGhlIHJlY29yZGVkIGRhdGEtc3ZnLW9yaWdpbiBzdGF5LiBPdGhlcndpc2UsIHdoZW5ldmVyIHdlIHNldCBjYWNoZS51bmNhY2hlIHRvIHRydWUsIHdlJ2QgbmVlZCB0byBzZXQgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAoY2FjaGUueE9yaWdpbiAtIGJib3gueCkgKyBcInB4IFwiICsgKGNhY2hlLnlPcmlnaW4gLSBiYm94LnkpICsgXCJweFwiLiBSZW1lbWJlciwgdG8gd29yayBhcm91bmQgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXMgd2UgYWx3YXlzIGZvcmNlIFNWRyBlbGVtZW50cycgdHJhbnNmb3JtT3JpZ2luIHRvIDAsMCBhbmQgb2Zmc2V0IHRoZSB0cmFuc2xhdGlvbiBhY2NvcmRpbmdseS5cblxuICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIHQxIHx8IG9yaWdpbiwgISF0MSB8fCBjYWNoZS5vcmlnaW5Jc0Fic29sdXRlLCBjYWNoZS5zbW9vdGggIT09IGZhbHNlLCBtYXRyaXgpO1xuICB9XG5cbiAgeE9yaWdpbiA9IGNhY2hlLnhPcmlnaW4gfHwgMDtcbiAgeU9yaWdpbiA9IGNhY2hlLnlPcmlnaW4gfHwgMDtcblxuICBpZiAobWF0cml4ICE9PSBfaWRlbnRpdHkyRE1hdHJpeCkge1xuICAgIGEgPSBtYXRyaXhbMF07IC8vYTExXG5cbiAgICBiID0gbWF0cml4WzFdOyAvL2EyMVxuXG4gICAgYyA9IG1hdHJpeFsyXTsgLy9hMzFcblxuICAgIGQgPSBtYXRyaXhbM107IC8vYTQxXG5cbiAgICB4ID0gYTEyID0gbWF0cml4WzRdO1xuICAgIHkgPSBhMjIgPSBtYXRyaXhbNV07IC8vMkQgbWF0cml4XG5cbiAgICBpZiAobWF0cml4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgc2NhbGVYID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuICAgICAgc2NhbGVZID0gTWF0aC5zcXJ0KGQgKiBkICsgYyAqIGMpO1xuICAgICAgcm90YXRpb24gPSBhIHx8IGIgPyBfYXRhbjIoYiwgYSkgKiBfUkFEMkRFRyA6IDA7IC8vbm90ZTogaWYgc2NhbGVYIGlzIDAsIHdlIGNhbm5vdCBhY2N1cmF0ZWx5IG1lYXN1cmUgcm90YXRpb24uIFNhbWUgZm9yIHNrZXdYIHdpdGggYSBzY2FsZVkgb2YgMC4gVGhlcmVmb3JlLCB3ZSBkZWZhdWx0IHRvIHRoZSBwcmV2aW91c2x5IHJlY29yZGVkIHZhbHVlIChvciB6ZXJvIGlmIHRoYXQgZG9lc24ndCBleGlzdCkuXG5cbiAgICAgIHNrZXdYID0gYyB8fCBkID8gX2F0YW4yKGMsIGQpICogX1JBRDJERUcgKyByb3RhdGlvbiA6IDA7XG4gICAgICBza2V3WCAmJiAoc2NhbGVZICo9IE1hdGguYWJzKE1hdGguY29zKHNrZXdYICogX0RFRzJSQUQpKSk7XG5cbiAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgeCAtPSB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhICsgeU9yaWdpbiAqIGMpO1xuICAgICAgICB5IC09IHlPcmlnaW4gLSAoeE9yaWdpbiAqIGIgKyB5T3JpZ2luICogZCk7XG4gICAgICB9IC8vM0QgbWF0cml4XG5cbiAgICB9IGVsc2Uge1xuICAgICAgYTMyID0gbWF0cml4WzZdO1xuICAgICAgYTQyID0gbWF0cml4WzddO1xuICAgICAgYTEzID0gbWF0cml4WzhdO1xuICAgICAgYTIzID0gbWF0cml4WzldO1xuICAgICAgYTMzID0gbWF0cml4WzEwXTtcbiAgICAgIGE0MyA9IG1hdHJpeFsxMV07XG4gICAgICB4ID0gbWF0cml4WzEyXTtcbiAgICAgIHkgPSBtYXRyaXhbMTNdO1xuICAgICAgeiA9IG1hdHJpeFsxNF07XG4gICAgICBhbmdsZSA9IF9hdGFuMihhMzIsIGEzMyk7XG4gICAgICByb3RhdGlvblggPSBhbmdsZSAqIF9SQUQyREVHOyAvL3JvdGF0aW9uWFxuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgdDEgPSBhMTIgKiBjb3MgKyBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYTIyICogY29zICsgYTIzICogc2luO1xuICAgICAgICB0MyA9IGEzMiAqIGNvcyArIGEzMyAqIHNpbjtcbiAgICAgICAgYTEzID0gYTEyICogLXNpbiArIGExMyAqIGNvcztcbiAgICAgICAgYTIzID0gYTIyICogLXNpbiArIGEyMyAqIGNvcztcbiAgICAgICAgYTMzID0gYTMyICogLXNpbiArIGEzMyAqIGNvcztcbiAgICAgICAgYTQzID0gYTQyICogLXNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgYTEyID0gdDE7XG4gICAgICAgIGEyMiA9IHQyO1xuICAgICAgICBhMzIgPSB0MztcbiAgICAgIH0gLy9yb3RhdGlvbllcblxuXG4gICAgICBhbmdsZSA9IF9hdGFuMigtYywgYTMzKTtcbiAgICAgIHJvdGF0aW9uWSA9IGFuZ2xlICogX1JBRDJERUc7XG5cbiAgICAgIGlmIChhbmdsZSkge1xuICAgICAgICBjb3MgPSBNYXRoLmNvcygtYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbigtYW5nbGUpO1xuICAgICAgICB0MSA9IGEgKiBjb3MgLSBhMTMgKiBzaW47XG4gICAgICAgIHQyID0gYiAqIGNvcyAtIGEyMyAqIHNpbjtcbiAgICAgICAgdDMgPSBjICogY29zIC0gYTMzICogc2luO1xuICAgICAgICBhNDMgPSBkICogc2luICsgYTQzICogY29zO1xuICAgICAgICBhID0gdDE7XG4gICAgICAgIGIgPSB0MjtcbiAgICAgICAgYyA9IHQzO1xuICAgICAgfSAvL3JvdGF0aW9uWlxuXG5cbiAgICAgIGFuZ2xlID0gX2F0YW4yKGIsIGEpO1xuICAgICAgcm90YXRpb24gPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIHQxID0gYSAqIGNvcyArIGIgKiBzaW47XG4gICAgICAgIHQyID0gYTEyICogY29zICsgYTIyICogc2luO1xuICAgICAgICBiID0gYiAqIGNvcyAtIGEgKiBzaW47XG4gICAgICAgIGEyMiA9IGEyMiAqIGNvcyAtIGExMiAqIHNpbjtcbiAgICAgICAgYSA9IHQxO1xuICAgICAgICBhMTIgPSB0MjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvdGF0aW9uWCAmJiBNYXRoLmFicyhyb3RhdGlvblgpICsgTWF0aC5hYnMocm90YXRpb24pID4gMzU5LjkpIHtcbiAgICAgICAgLy93aGVuIHJvdGF0aW9uWSBpcyBzZXQsIGl0IHdpbGwgb2Z0ZW4gYmUgcGFyc2VkIGFzIDE4MCBkZWdyZWVzIGRpZmZlcmVudCB0aGFuIGl0IHNob3VsZCBiZSwgYW5kIHJvdGF0aW9uWCBhbmQgcm90YXRpb24gYm90aCBiZWluZyAxODAgKGl0IGxvb2tzIHRoZSBzYW1lKSwgc28gd2UgYWRqdXN0IGZvciB0aGF0IGhlcmUuXG4gICAgICAgIHJvdGF0aW9uWCA9IHJvdGF0aW9uID0gMDtcbiAgICAgICAgcm90YXRpb25ZID0gMTgwIC0gcm90YXRpb25ZO1xuICAgICAgfVxuXG4gICAgICBzY2FsZVggPSBfcm91bmQoTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIgKyBjICogYykpO1xuICAgICAgc2NhbGVZID0gX3JvdW5kKE1hdGguc3FydChhMjIgKiBhMjIgKyBhMzIgKiBhMzIpKTtcbiAgICAgIGFuZ2xlID0gX2F0YW4yKGExMiwgYTIyKTtcbiAgICAgIHNrZXdYID0gTWF0aC5hYnMoYW5nbGUpID4gMC4wMDAyID8gYW5nbGUgKiBfUkFEMkRFRyA6IDA7XG4gICAgICBwZXJzcGVjdGl2ZSA9IGE0MyA/IDEgLyAoYTQzIDwgMCA/IC1hNDMgOiBhNDMpIDogMDtcbiAgICB9XG5cbiAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAvL3NlbnNlIGlmIHRoZXJlIGFyZSBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkIG9uIGFuIFNWRyBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UgbXVzdCBvdmVyd3JpdGUgdGhlbSB3aGVuIHJlbmRlcmluZy4gVGhlIHRyYW5zZm9ybSBhdHRyaWJ1dGUgaXMgbW9yZSByZWxpYWJsZSBjcm9zcy1icm93c2VyLCBidXQgd2UgY2FuJ3QganVzdCByZW1vdmUgdGhlIENTUyBvbmVzIGJlY2F1c2UgdGhleSBtYXkgYmUgYXBwbGllZCBpbiBhIENTUyBydWxlIHNvbWV3aGVyZSAobm90IGp1c3QgaW5saW5lKS5cbiAgICAgIHQxID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICAgIGNhY2hlLmZvcmNlQ1NTID0gdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcIlwiKSB8fCAhX2lzTnVsbFRyYW5zZm9ybShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKSk7XG4gICAgICB0MSAmJiB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHQxKTtcbiAgICB9XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoc2tld1gpID4gOTAgJiYgTWF0aC5hYnMoc2tld1gpIDwgMjcwKSB7XG4gICAgaWYgKGludmVydGVkU2NhbGVYKSB7XG4gICAgICBzY2FsZVggKj0gLTE7XG4gICAgICBza2V3WCArPSByb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcbiAgICAgIHJvdGF0aW9uICs9IHJvdGF0aW9uIDw9IDAgPyAxODAgOiAtMTgwO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY2FsZVkgKj0gLTE7XG4gICAgICBza2V3WCArPSBza2V3WCA8PSAwID8gMTgwIDogLTE4MDtcbiAgICB9XG4gIH1cblxuICBjYWNoZS54ID0geCAtICgoY2FjaGUueFBlcmNlbnQgPSB4ICYmIChjYWNoZS54UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0V2lkdGggLyAyKSA9PT0gTWF0aC5yb3VuZCgteCkgPyAtNTAgOiAwKSkpID8gdGFyZ2V0Lm9mZnNldFdpZHRoICogY2FjaGUueFBlcmNlbnQgLyAxMDAgOiAwKSArIHB4O1xuICBjYWNoZS55ID0geSAtICgoY2FjaGUueVBlcmNlbnQgPSB5ICYmIChjYWNoZS55UGVyY2VudCB8fCAoTWF0aC5yb3VuZCh0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMikgPT09IE1hdGgucm91bmQoLXkpID8gLTUwIDogMCkpKSA/IHRhcmdldC5vZmZzZXRIZWlnaHQgKiBjYWNoZS55UGVyY2VudCAvIDEwMCA6IDApICsgcHg7XG4gIGNhY2hlLnogPSB6ICsgcHg7XG4gIGNhY2hlLnNjYWxlWCA9IF9yb3VuZChzY2FsZVgpO1xuICBjYWNoZS5zY2FsZVkgPSBfcm91bmQoc2NhbGVZKTtcbiAgY2FjaGUucm90YXRpb24gPSBfcm91bmQocm90YXRpb24pICsgZGVnO1xuICBjYWNoZS5yb3RhdGlvblggPSBfcm91bmQocm90YXRpb25YKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25ZID0gX3JvdW5kKHJvdGF0aW9uWSkgKyBkZWc7XG4gIGNhY2hlLnNrZXdYID0gc2tld1ggKyBkZWc7XG4gIGNhY2hlLnNrZXdZID0gc2tld1kgKyBkZWc7XG4gIGNhY2hlLnRyYW5zZm9ybVBlcnNwZWN0aXZlID0gcGVyc3BlY3RpdmUgKyBweDtcblxuICBpZiAoY2FjaGUuek9yaWdpbiA9IHBhcnNlRmxvYXQob3JpZ2luLnNwbGl0KFwiIFwiKVsyXSkgfHwgMCkge1xuICAgIHN0eWxlW190cmFuc2Zvcm1PcmlnaW5Qcm9wXSA9IF9maXJzdFR3b09ubHkob3JpZ2luKTtcbiAgfVxuXG4gIGNhY2hlLnhPZmZzZXQgPSBjYWNoZS55T2Zmc2V0ID0gMDtcbiAgY2FjaGUuZm9yY2UzRCA9IF9jb25maWcuZm9yY2UzRDtcbiAgY2FjaGUucmVuZGVyVHJhbnNmb3JtID0gY2FjaGUuc3ZnID8gX3JlbmRlclNWR1RyYW5zZm9ybXMgOiBfc3VwcG9ydHMzRCA/IF9yZW5kZXJDU1NUcmFuc2Zvcm1zIDogX3JlbmRlck5vbjNEVHJhbnNmb3JtcztcbiAgY2FjaGUudW5jYWNoZSA9IDA7XG4gIHJldHVybiBjYWNoZTtcbn0sXG4gICAgX2ZpcnN0VHdvT25seSA9IGZ1bmN0aW9uIF9maXJzdFR3b09ubHkodmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSA9IHZhbHVlLnNwbGl0KFwiIFwiKSlbMF0gKyBcIiBcIiArIHZhbHVlWzFdO1xufSxcbiAgICAvL2ZvciBoYW5kbGluZyB0cmFuc2Zvcm1PcmlnaW4gdmFsdWVzLCBzdHJpcHBpbmcgb3V0IHRoZSAzcmQgZGltZW5zaW9uXG5fYWRkUHhUcmFuc2xhdGUgPSBmdW5jdGlvbiBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCBzdGFydCwgdmFsdWUpIHtcbiAgdmFyIHVuaXQgPSBnZXRVbml0KHN0YXJ0KTtcbiAgcmV0dXJuIF9yb3VuZChwYXJzZUZsb2F0KHN0YXJ0KSArIHBhcnNlRmxvYXQoX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgdmFsdWUgKyBcInB4XCIsIHVuaXQpKSkgKyB1bml0O1xufSxcbiAgICBfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zID0gZnVuY3Rpb24gX3JlbmRlck5vbjNEVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgY2FjaGUueiA9IFwiMHB4XCI7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IGNhY2hlLnJvdGF0aW9uWCA9IFwiMGRlZ1wiO1xuICBjYWNoZS5mb3JjZTNEID0gMDtcblxuICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfemVyb0RlZyA9IFwiMGRlZ1wiLFxuICAgIF96ZXJvUHggPSBcIjBweFwiLFxuICAgIF9lbmRQYXJlbnRoZXNpcyA9IFwiKSBcIixcbiAgICBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZiA9IGNhY2hlIHx8IHRoaXMsXG4gICAgICB4UGVyY2VudCA9IF9yZWYueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueSxcbiAgICAgIHogPSBfcmVmLnosXG4gICAgICByb3RhdGlvbiA9IF9yZWYucm90YXRpb24sXG4gICAgICByb3RhdGlvblkgPSBfcmVmLnJvdGF0aW9uWSxcbiAgICAgIHJvdGF0aW9uWCA9IF9yZWYucm90YXRpb25YLFxuICAgICAgc2tld1ggPSBfcmVmLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZi5zY2FsZVgsXG4gICAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICAgIHRyYW5zZm9ybVBlcnNwZWN0aXZlID0gX3JlZi50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxcbiAgICAgIGZvcmNlM0QgPSBfcmVmLmZvcmNlM0QsXG4gICAgICB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgIHpPcmlnaW4gPSBfcmVmLnpPcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1zID0gXCJcIixcbiAgICAgIHVzZTNEID0gZm9yY2UzRCA9PT0gXCJhdXRvXCIgJiYgcmF0aW8gJiYgcmF0aW8gIT09IDEgfHwgZm9yY2UzRCA9PT0gdHJ1ZTsgLy8gU2FmYXJpIGhhcyBhIGJ1ZyB0aGF0IGNhdXNlcyBpdCBub3QgdG8gcmVuZGVyIDNEIHRyYW5zZm9ybS1vcmlnaW4gdmFsdWVzIHByb3Blcmx5LCBzbyB3ZSBmb3JjZSB0aGUgeiBvcmlnaW4gdG8gMCwgcmVjb3JkIGl0IGluIHRoZSBjYWNoZSwgYW5kIHRoZW4gZG8gdGhlIG1hdGggaGVyZSB0byBvZmZzZXQgdGhlIHRyYW5zbGF0ZSB2YWx1ZXMgYWNjb3JkaW5nbHkgKGJhc2ljYWxseSBkbyB0aGUgM0QgdHJhbnNmb3JtLW9yaWdpbiBwYXJ0IG1hbnVhbGx5KVxuXG5cbiAgaWYgKHpPcmlnaW4gJiYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcgfHwgcm90YXRpb25ZICE9PSBfemVyb0RlZykpIHtcbiAgICB2YXIgYW5nbGUgPSBwYXJzZUZsb2F0KHJvdGF0aW9uWSkgKiBfREVHMlJBRCxcbiAgICAgICAgYTEzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICBhMzMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgIGNvcztcblxuICAgIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblgpICogX0RFRzJSQUQ7XG4gICAgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIHggPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB4LCBhMTMgKiBjb3MgKiAtek9yaWdpbik7XG4gICAgeSA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHksIC1NYXRoLnNpbihhbmdsZSkgKiAtek9yaWdpbik7XG4gICAgeiA9IF9hZGRQeFRyYW5zbGF0ZSh0YXJnZXQsIHosIGEzMyAqIGNvcyAqIC16T3JpZ2luICsgek9yaWdpbik7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtUGVyc3BlY3RpdmUgIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicGVyc3BlY3RpdmUoXCIgKyB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJ0cmFuc2xhdGUoXCIgKyB4UGVyY2VudCArIFwiJSwgXCIgKyB5UGVyY2VudCArIFwiJSkgXCI7XG4gIH1cblxuICBpZiAodXNlM0QgfHwgeCAhPT0gX3plcm9QeCB8fCB5ICE9PSBfemVyb1B4IHx8IHogIT09IF96ZXJvUHgpIHtcbiAgICB0cmFuc2Zvcm1zICs9IHogIT09IF96ZXJvUHggfHwgdXNlM0QgPyBcInRyYW5zbGF0ZTNkKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIiwgXCIgKyB6ICsgXCIpIFwiIDogXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIsIFwiICsgeSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlKFwiICsgcm90YXRpb24gKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb25ZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJyb3RhdGVZKFwiICsgcm90YXRpb25ZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWCAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWChcIiArIHJvdGF0aW9uWCArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChza2V3WCAhPT0gX3plcm9EZWcgfHwgc2tld1kgIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNrZXcoXCIgKyBza2V3WCArIFwiLCBcIiArIHNrZXdZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwic2NhbGUoXCIgKyBzY2FsZVggKyBcIiwgXCIgKyBzY2FsZVkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICB0YXJnZXQuc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcyB8fCBcInRyYW5zbGF0ZSgwLCAwKVwiO1xufSxcbiAgICBfcmVuZGVyU1ZHVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJTVkdUcmFuc2Zvcm1zKHJhdGlvLCBjYWNoZSkge1xuICB2YXIgX3JlZjIgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmMi54UGVyY2VudCxcbiAgICAgIHlQZXJjZW50ID0gX3JlZjIueVBlcmNlbnQsXG4gICAgICB4ID0gX3JlZjIueCxcbiAgICAgIHkgPSBfcmVmMi55LFxuICAgICAgcm90YXRpb24gPSBfcmVmMi5yb3RhdGlvbixcbiAgICAgIHNrZXdYID0gX3JlZjIuc2tld1gsXG4gICAgICBza2V3WSA9IF9yZWYyLnNrZXdZLFxuICAgICAgc2NhbGVYID0gX3JlZjIuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZjIuc2NhbGVZLFxuICAgICAgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgeE9yaWdpbiA9IF9yZWYyLnhPcmlnaW4sXG4gICAgICB5T3JpZ2luID0gX3JlZjIueU9yaWdpbixcbiAgICAgIHhPZmZzZXQgPSBfcmVmMi54T2Zmc2V0LFxuICAgICAgeU9mZnNldCA9IF9yZWYyLnlPZmZzZXQsXG4gICAgICBmb3JjZUNTUyA9IF9yZWYyLmZvcmNlQ1NTLFxuICAgICAgdHggPSBwYXJzZUZsb2F0KHgpLFxuICAgICAgdHkgPSBwYXJzZUZsb2F0KHkpLFxuICAgICAgYTExLFxuICAgICAgYTIxLFxuICAgICAgYTEyLFxuICAgICAgYTIyLFxuICAgICAgdGVtcDtcblxuICByb3RhdGlvbiA9IHBhcnNlRmxvYXQocm90YXRpb24pO1xuICBza2V3WCA9IHBhcnNlRmxvYXQoc2tld1gpO1xuICBza2V3WSA9IHBhcnNlRmxvYXQoc2tld1kpO1xuXG4gIGlmIChza2V3WSkge1xuICAgIC8vZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIGNvbWJpbmUgYWxsIHNrZXdpbmcgaW50byB0aGUgc2tld1ggYW5kIHJvdGF0aW9uIHZhbHVlcy4gUmVtZW1iZXIsIGEgc2tld1kgb2YgMTAgZGVncmVlcyBsb29rcyB0aGUgc2FtZSBhcyBhIHJvdGF0aW9uIG9mIDEwIGRlZ3JlZXMgcGx1cyBhIHNrZXdYIG9mIDEwIGRlZ3JlZXMuXG4gICAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcbiAgICBza2V3WCArPSBza2V3WTtcbiAgICByb3RhdGlvbiArPSBza2V3WTtcbiAgfVxuXG4gIGlmIChyb3RhdGlvbiB8fCBza2V3WCkge1xuICAgIHJvdGF0aW9uICo9IF9ERUcyUkFEO1xuICAgIHNrZXdYICo9IF9ERUcyUkFEO1xuICAgIGExMSA9IE1hdGguY29zKHJvdGF0aW9uKSAqIHNjYWxlWDtcbiAgICBhMjEgPSBNYXRoLnNpbihyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTEyID0gTWF0aC5zaW4ocm90YXRpb24gLSBza2V3WCkgKiAtc2NhbGVZO1xuICAgIGEyMiA9IE1hdGguY29zKHJvdGF0aW9uIC0gc2tld1gpICogc2NhbGVZO1xuXG4gICAgaWYgKHNrZXdYKSB7XG4gICAgICBza2V3WSAqPSBfREVHMlJBRDtcbiAgICAgIHRlbXAgPSBNYXRoLnRhbihza2V3WCAtIHNrZXdZKTtcbiAgICAgIHRlbXAgPSBNYXRoLnNxcnQoMSArIHRlbXAgKiB0ZW1wKTtcbiAgICAgIGExMiAqPSB0ZW1wO1xuICAgICAgYTIyICo9IHRlbXA7XG5cbiAgICAgIGlmIChza2V3WSkge1xuICAgICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1kpO1xuICAgICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICAgIGExMSAqPSB0ZW1wO1xuICAgICAgICBhMjEgKj0gdGVtcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhMTEgPSBfcm91bmQoYTExKTtcbiAgICBhMjEgPSBfcm91bmQoYTIxKTtcbiAgICBhMTIgPSBfcm91bmQoYTEyKTtcbiAgICBhMjIgPSBfcm91bmQoYTIyKTtcbiAgfSBlbHNlIHtcbiAgICBhMTEgPSBzY2FsZVg7XG4gICAgYTIyID0gc2NhbGVZO1xuICAgIGEyMSA9IGExMiA9IDA7XG4gIH1cblxuICBpZiAodHggJiYgIX4oeCArIFwiXCIpLmluZGV4T2YoXCJweFwiKSB8fCB0eSAmJiAhfih5ICsgXCJcIikuaW5kZXhPZihcInB4XCIpKSB7XG4gICAgdHggPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIFwieFwiLCB4LCBcInB4XCIpO1xuICAgIHR5ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInlcIiwgeSwgXCJweFwiKTtcbiAgfVxuXG4gIGlmICh4T3JpZ2luIHx8IHlPcmlnaW4gfHwgeE9mZnNldCB8fCB5T2Zmc2V0KSB7XG4gICAgdHggPSBfcm91bmQodHggKyB4T3JpZ2luIC0gKHhPcmlnaW4gKiBhMTEgKyB5T3JpZ2luICogYTEyKSArIHhPZmZzZXQpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeU9yaWdpbiAtICh4T3JpZ2luICogYTIxICsgeU9yaWdpbiAqIGEyMikgKyB5T2Zmc2V0KTtcbiAgfVxuXG4gIGlmICh4UGVyY2VudCB8fCB5UGVyY2VudCkge1xuICAgIC8vVGhlIFNWRyBzcGVjIGRvZXNuJ3Qgc3VwcG9ydCBwZXJjZW50YWdlLWJhc2VkIHRyYW5zbGF0aW9uIGluIHRoZSBcInRyYW5zZm9ybVwiIGF0dHJpYnV0ZSwgc28gd2UgbWVyZ2UgaXQgaW50byB0aGUgdHJhbnNsYXRpb24gdG8gc2ltdWxhdGUgaXQuXG4gICAgdGVtcCA9IHRhcmdldC5nZXRCQm94KCk7XG4gICAgdHggPSBfcm91bmQodHggKyB4UGVyY2VudCAvIDEwMCAqIHRlbXAud2lkdGgpO1xuICAgIHR5ID0gX3JvdW5kKHR5ICsgeVBlcmNlbnQgLyAxMDAgKiB0ZW1wLmhlaWdodCk7XG4gIH1cblxuICB0ZW1wID0gXCJtYXRyaXgoXCIgKyBhMTEgKyBcIixcIiArIGEyMSArIFwiLFwiICsgYTEyICsgXCIsXCIgKyBhMjIgKyBcIixcIiArIHR4ICsgXCIsXCIgKyB0eSArIFwiKVwiO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRlbXApO1xuICBmb3JjZUNTUyAmJiAodGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRlbXApOyAvL3NvbWUgYnJvd3NlcnMgcHJpb3JpdGl6ZSBDU1MgdHJhbnNmb3JtcyBvdmVyIHRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlLiBXaGVuIHdlIHNlbnNlIHRoYXQgdGhlIHVzZXIgaGFzIENTUyB0cmFuc2Zvcm1zIGFwcGxpZWQsIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gdGhpcyB3YXkgKG90aGVyd2lzZSBzb21lIGJyb3dzZXIgc2ltcGx5IHdvbid0IHJlbmRlciB0aGUgIHRyYW5zZm9ybSBhdHRyaWJ1dGUgY2hhbmdlcyEpXG59LFxuICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4ocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKSB7XG4gIHZhciBjYXAgPSAzNjAsXG4gICAgICBpc1N0cmluZyA9IF9pc1N0cmluZyhlbmRWYWx1ZSksXG4gICAgICBlbmROdW0gPSBwYXJzZUZsb2F0KGVuZFZhbHVlKSAqIChpc1N0cmluZyAmJiB+ZW5kVmFsdWUuaW5kZXhPZihcInJhZFwiKSA/IF9SQUQyREVHIDogMSksXG4gICAgICBjaGFuZ2UgPSByZWxhdGl2ZSA/IGVuZE51bSAqIHJlbGF0aXZlIDogZW5kTnVtIC0gc3RhcnROdW0sXG4gICAgICBmaW5hbFZhbHVlID0gc3RhcnROdW0gKyBjaGFuZ2UgKyBcImRlZ1wiLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgcHQ7XG5cbiAgaWYgKGlzU3RyaW5nKSB7XG4gICAgZGlyZWN0aW9uID0gZW5kVmFsdWUuc3BsaXQoXCJfXCIpWzFdO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJzaG9ydFwiKSB7XG4gICAgICBjaGFuZ2UgJT0gY2FwO1xuXG4gICAgICBpZiAoY2hhbmdlICE9PSBjaGFuZ2UgJSAoY2FwIC8gMikpIHtcbiAgICAgICAgY2hhbmdlICs9IGNoYW5nZSA8IDAgPyBjYXAgOiAtY2FwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiY3dcIiAmJiBjaGFuZ2UgPCAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlICsgY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImNjd1wiICYmIGNoYW5nZSA+IDApIHtcbiAgICAgIGNoYW5nZSA9IChjaGFuZ2UgLSBjYXAgKiBfYmlnTnVtKSAlIGNhcCAtIH5+KGNoYW5nZSAvIGNhcCkgKiBjYXA7XG4gICAgfVxuICB9XG5cbiAgcGx1Z2luLl9wdCA9IHB0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCBzdGFydE51bSwgY2hhbmdlLCBfcmVuZGVyUHJvcFdpdGhFbmQpO1xuICBwdC5lID0gZmluYWxWYWx1ZTtcbiAgcHQudSA9IFwiZGVnXCI7XG5cbiAgcGx1Z2luLl9wcm9wcy5wdXNoKHByb3BlcnR5KTtcblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9hc3NpZ24gPSBmdW5jdGlvbiBfYXNzaWduKHRhcmdldCwgc291cmNlKSB7XG4gIC8vIEludGVybmV0IEV4cGxvcmVyIGRvZXNuJ3QgaGF2ZSBPYmplY3QuYXNzaWduKCksIHNvIHdlIHJlY3JlYXRlIGl0IGhlcmUuXG4gIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgdGFyZ2V0W3BdID0gc291cmNlW3BdO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0sXG4gICAgX2FkZFJhd1RyYW5zZm9ybVBUcyA9IGZ1bmN0aW9uIF9hZGRSYXdUcmFuc2Zvcm1QVHMocGx1Z2luLCB0cmFuc2Zvcm1zLCB0YXJnZXQpIHtcbiAgLy9mb3IgaGFuZGxpbmcgY2FzZXMgd2hlcmUgc29tZW9uZSBwYXNzZXMgaW4gYSB3aG9sZSB0cmFuc2Zvcm0gc3RyaW5nLCBsaWtlIHRyYW5zZm9ybTogXCJzY2FsZSgyLCAzKSByb3RhdGUoMjBkZWcpIHRyYW5zbGF0ZVkoMzBlbSlcIlxuICB2YXIgc3RhcnRDYWNoZSA9IF9hc3NpZ24oe30sIHRhcmdldC5fZ3NhcCksXG4gICAgICBleGNsdWRlID0gXCJwZXJzcGVjdGl2ZSxmb3JjZTNELHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW5cIixcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgZW5kQ2FjaGUsXG4gICAgICBwLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBlbmROdW0sXG4gICAgICBzdGFydFVuaXQsXG4gICAgICBlbmRVbml0O1xuXG4gIGlmIChzdGFydENhY2hlLnN2Zykge1xuICAgIHN0YXJ0VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIik7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuXG4gICAgX3JlbW92ZVByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybVByb3ApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBzdGFydFZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdGFydFZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpW190cmFuc2Zvcm1Qcm9wXTtcbiAgICBzdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm1zO1xuICAgIGVuZENhY2hlID0gX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSk7XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gc3RhcnRWYWx1ZTtcbiAgfVxuXG4gIGZvciAocCBpbiBfdHJhbnNmb3JtUHJvcHMpIHtcbiAgICBzdGFydFZhbHVlID0gc3RhcnRDYWNoZVtwXTtcbiAgICBlbmRWYWx1ZSA9IGVuZENhY2hlW3BdO1xuXG4gICAgaWYgKHN0YXJ0VmFsdWUgIT09IGVuZFZhbHVlICYmIGV4Y2x1ZGUuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgIC8vdHdlZW5pbmcgdG8gbm8gcGVyc3BlY3RpdmUgZ2l2ZXMgdmVyeSB1bmludHVpdGl2ZSByZXN1bHRzIC0ganVzdCBrZWVwIHRoZSBzYW1lIHBlcnNwZWN0aXZlIGluIHRoYXQgY2FzZS5cbiAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSk7XG4gICAgICBzdGFydE51bSA9IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgOiBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG4gICAgICBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCBlbmRDYWNoZSwgcCwgc3RhcnROdW0sIGVuZE51bSAtIHN0YXJ0TnVtLCBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICBwbHVnaW4uX3B0LnUgPSBlbmRVbml0IHx8IDA7XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cblxuICBfYXNzaWduKGVuZENhY2hlLCBzdGFydENhY2hlKTtcbn07IC8vIGhhbmRsZSBzcGxpdHRpbmcgYXBhcnQgcGFkZGluZywgbWFyZ2luLCBib3JkZXJXaWR0aCwgYW5kIGJvcmRlclJhZGl1cyBpbnRvIHRoZWlyIDQgY29tcG9uZW50cy4gRmlyZWZveCwgZm9yIGV4YW1wbGUsIHdvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5IC0gaXQgd2lsbCBvbmx5IGRvIGJvcmRlclRvcExlZnRSYWRpdXMgYW5kIHRoZSBvdGhlciBjb3JuZXJzLiBXZSBhbHNvIHdhbnQgdG8gaGFuZGxlIHBhZGRpbmdUb3AsIG1hcmdpbkxlZnQsIGJvcmRlclJpZ2h0V2lkdGgsIGV0Yy5cblxuXG5fZm9yRWFjaE5hbWUoXCJwYWRkaW5nLG1hcmdpbixXaWR0aCxSYWRpdXNcIiwgZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gIHZhciB0ID0gXCJUb3BcIixcbiAgICAgIHIgPSBcIlJpZ2h0XCIsXG4gICAgICBiID0gXCJCb3R0b21cIixcbiAgICAgIGwgPSBcIkxlZnRcIixcbiAgICAgIHByb3BzID0gKGluZGV4IDwgMyA/IFt0LCByLCBiLCBsXSA6IFt0ICsgbCwgdCArIHIsIGIgKyByLCBiICsgbF0pLm1hcChmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBpbmRleCA8IDIgPyBuYW1lICsgc2lkZSA6IFwiYm9yZGVyXCIgKyBzaWRlICsgbmFtZTtcbiAgfSk7XG5cbiAgX3NwZWNpYWxQcm9wc1tpbmRleCA+IDEgPyBcImJvcmRlclwiICsgbmFtZSA6IG5hbWVdID0gZnVuY3Rpb24gKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gICAgdmFyIGEsIHZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDQpIHtcbiAgICAgIC8vIGdldHRlciwgcGFzc2VkIHRhcmdldCwgcHJvcGVydHksIGFuZCB1bml0IChmcm9tIF9nZXQoKSlcbiAgICAgIGEgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgcmV0dXJuIF9nZXQocGx1Z2luLCBwcm9wLCBwcm9wZXJ0eSk7XG4gICAgICB9KTtcbiAgICAgIHZhcnMgPSBhLmpvaW4oXCIgXCIpO1xuICAgICAgcmV0dXJuIHZhcnMuc3BsaXQoYVswXSkubGVuZ3RoID09PSA1ID8gYVswXSA6IHZhcnM7XG4gICAgfVxuXG4gICAgYSA9IChlbmRWYWx1ZSArIFwiXCIpLnNwbGl0KFwiIFwiKTtcbiAgICB2YXJzID0ge307XG4gICAgcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAocHJvcCwgaSkge1xuICAgICAgcmV0dXJuIHZhcnNbcHJvcF0gPSBhW2ldID0gYVtpXSB8fCBhWyhpIC0gMSkgLyAyIHwgMF07XG4gICAgfSk7XG4gICAgcGx1Z2luLmluaXQodGFyZ2V0LCB2YXJzLCB0d2Vlbik7XG4gIH07XG59KTtcblxuZXhwb3J0IHZhciBDU1NQbHVnaW4gPSB7XG4gIG5hbWU6IFwiY3NzXCIsXG4gIHJlZ2lzdGVyOiBfaW5pdENvcmUsXG4gIHRhcmdldFRlc3Q6IGZ1bmN0aW9uIHRhcmdldFRlc3QodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldC5zdHlsZSAmJiB0YXJnZXQubm9kZVR5cGU7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLl9wcm9wcyxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHN0YXJ0QXQgPSB0d2Vlbi52YXJzLnN0YXJ0QXQsXG4gICAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICAgIGVuZFZhbHVlLFxuICAgICAgICBlbmROdW0sXG4gICAgICAgIHN0YXJ0TnVtLFxuICAgICAgICB0eXBlLFxuICAgICAgICBzcGVjaWFsUHJvcCxcbiAgICAgICAgcCxcbiAgICAgICAgc3RhcnRVbml0LFxuICAgICAgICBlbmRVbml0LFxuICAgICAgICByZWxhdGl2ZSxcbiAgICAgICAgaXNUcmFuc2Zvcm1SZWxhdGVkLFxuICAgICAgICB0cmFuc2Zvcm1Qcm9wVHdlZW4sXG4gICAgICAgIGNhY2hlLFxuICAgICAgICBzbW9vdGgsXG4gICAgICAgIGhhc1ByaW9yaXR5O1xuICAgIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgIGlmIChwID09PSBcImF1dG9Sb3VuZFwiKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBlbmRWYWx1ZSA9IHZhcnNbcF07XG5cbiAgICAgIGlmIChfcGx1Z2luc1twXSAmJiBfY2hlY2tQbHVnaW4ocCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKSB7XG4gICAgICAgIC8vIHBsdWdpbnNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICBzcGVjaWFsUHJvcCA9IF9zcGVjaWFsUHJvcHNbcF07XG5cbiAgICAgIGlmICh0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZW5kVmFsdWUgPSBlbmRWYWx1ZS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgICAgICAgdHlwZSA9IHR5cGVvZiBlbmRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgICAgIGVuZFZhbHVlID0gX3JlcGxhY2VSYW5kb20oZW5kVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3BlY2lhbFByb3ApIHtcbiAgICAgICAgc3BlY2lhbFByb3AodGhpcywgdGFyZ2V0LCBwLCBlbmRWYWx1ZSwgdHdlZW4pICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfSBlbHNlIGlmIChwLnN1YnN0cigwLCAyKSA9PT0gXCItLVwiKSB7XG4gICAgICAgIC8vQ1NTIHZhcmlhYmxlXG4gICAgICAgIHN0YXJ0VmFsdWUgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmdldFByb3BlcnR5VmFsdWUocCkgKyBcIlwiKS50cmltKCk7XG4gICAgICAgIGVuZFZhbHVlICs9IFwiXCI7XG4gICAgICAgIF9jb2xvckV4cC5sYXN0SW5kZXggPSAwO1xuXG4gICAgICAgIGlmICghX2NvbG9yRXhwLnRlc3Qoc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBjb2xvcnMgZG9uJ3QgaGF2ZSB1bml0c1xuICAgICAgICAgIHN0YXJ0VW5pdCA9IGdldFVuaXQoc3RhcnRWYWx1ZSk7XG4gICAgICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZW5kVW5pdCA/IHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnRWYWx1ZSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkgKyBlbmRVbml0KSA6IHN0YXJ0VW5pdCAmJiAoZW5kVmFsdWUgKz0gc3RhcnRVbml0KTtcbiAgICAgICAgdGhpcy5hZGQoc3R5bGUsIFwic2V0UHJvcGVydHlcIiwgc3RhcnRWYWx1ZSwgZW5kVmFsdWUsIGluZGV4LCB0YXJnZXRzLCAwLCAwLCBwKTtcbiAgICAgICAgcHJvcHMucHVzaChwKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoc3RhcnRBdCAmJiBwIGluIHN0YXJ0QXQpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHNvbWVvbmUgaGFyZC1jb2RlcyBhIGNvbXBsZXggdmFsdWUgYXMgdGhlIHN0YXJ0LCBsaWtlIHRvcDogXCJjYWxjKDJ2aCAvIDIpXCIuIFdpdGhvdXQgdGhpcywgaXQnZCB1c2UgdGhlIGNvbXB1dGVkIHZhbHVlIChhbHdheXMgaW4gcHgpXG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IHR5cGVvZiBzdGFydEF0W3BdID09PSBcImZ1bmN0aW9uXCIgPyBzdGFydEF0W3BdLmNhbGwodHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogc3RhcnRBdFtwXTtcbiAgICAgICAgICBwIGluIF9jb25maWcudW5pdHMgJiYgIWdldFVuaXQoc3RhcnRWYWx1ZSkgJiYgKHN0YXJ0VmFsdWUgKz0gX2NvbmZpZy51bml0c1twXSk7IC8vIGZvciBjYXNlcyB3aGVuIHNvbWVvbmUgcGFzc2VzIGluIGEgdW5pdGxlc3MgdmFsdWUgbGlrZSB7eDogMTAwfTsgaWYgd2UgdHJ5IHNldHRpbmcgdHJhbnNsYXRlKDEwMCwgMHB4KSBpdCB3b24ndCB3b3JrLlxuXG4gICAgICAgICAgX2lzU3RyaW5nKHN0YXJ0VmFsdWUpICYmIH5zdGFydFZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpICYmIChzdGFydFZhbHVlID0gX3JlcGxhY2VSYW5kb20oc3RhcnRWYWx1ZSkpO1xuICAgICAgICAgIChzdGFydFZhbHVlICsgXCJcIikuY2hhckF0KDEpID09PSBcIj1cIiAmJiAoc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKSk7IC8vIGNhbid0IHdvcmsgd2l0aCByZWxhdGl2ZSB2YWx1ZXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGFydFZhbHVlID0gX2dldCh0YXJnZXQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpO1xuICAgICAgICByZWxhdGl2ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgJiYgZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcbiAgICAgICAgcmVsYXRpdmUgJiYgKGVuZFZhbHVlID0gZW5kVmFsdWUuc3Vic3RyKDIpKTtcbiAgICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHAgaW4gX3Byb3BlcnR5QWxpYXNlcykge1xuICAgICAgICAgIGlmIChwID09PSBcImF1dG9BbHBoYVwiKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSB3aGVyZSB3ZSBjb250cm9sIHRoZSB2aXNpYmlsaXR5IGFsb25nIHdpdGggb3BhY2l0eS4gV2Ugc3RpbGwgYWxsb3cgdGhlIG9wYWNpdHkgdmFsdWUgdG8gcGFzcyB0aHJvdWdoIGFuZCBnZXQgdHdlZW5lZC5cbiAgICAgICAgICAgIGlmIChzdGFydE51bSA9PT0gMSAmJiBfZ2V0KHRhcmdldCwgXCJ2aXNpYmlsaXR5XCIpID09PSBcImhpZGRlblwiICYmIGVuZE51bSkge1xuICAgICAgICAgICAgICAvL2lmIHZpc2liaWxpdHkgaXMgaW5pdGlhbGx5IHNldCB0byBcImhpZGRlblwiLCB3ZSBzaG91bGQgaW50ZXJwcmV0IHRoYXQgYXMgaW50ZW50IHRvIG1ha2Ugb3BhY2l0eSAwIChhIGNvbnZlbmllbmNlKVxuICAgICAgICAgICAgICBzdGFydE51bSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBcInZpc2liaWxpdHlcIiwgc3RhcnROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsIGVuZE51bSA/IFwiaW5oZXJpdFwiIDogXCJoaWRkZW5cIiwgIWVuZE51bSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgIT09IFwic2NhbGVcIiAmJiBwICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBwID0gX3Byb3BlcnR5QWxpYXNlc1twXTtcbiAgICAgICAgICAgIH5wLmluZGV4T2YoXCIsXCIpICYmIChwID0gcC5zcGxpdChcIixcIilbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCA9IHAgaW4gX3RyYW5zZm9ybVByb3BzOyAvLy0tLSBUUkFOU0ZPUk0tUkVMQVRFRCAtLS1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0cmFuc2Zvcm1Qcm9wVHdlZW4pIHtcbiAgICAgICAgICAgIGNhY2hlID0gdGFyZ2V0Ll9nc2FwO1xuICAgICAgICAgICAgY2FjaGUucmVuZGVyVHJhbnNmb3JtICYmICF2YXJzLnBhcnNlVHJhbnNmb3JtIHx8IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHZhcnMucGFyc2VUcmFuc2Zvcm0pOyAvLyBpZiwgZm9yIGV4YW1wbGUsIGdzYXAuc2V0KC4uLiB7dHJhbnNmb3JtOlwidHJhbnNsYXRlWCg1MHZ3KVwifSksIHRoZSBfZ2V0KCkgY2FsbCBkb2Vzbid0IHBhcnNlIHRoZSB0cmFuc2Zvcm0sIHRodXMgY2FjaGUucmVuZGVyVHJhbnNmb3JtIHdvbid0IGJlIHNldCB5ZXQgc28gZm9yY2UgdGhlIHBhcnNpbmcgb2YgdGhlIHRyYW5zZm9ybSBoZXJlLlxuXG4gICAgICAgICAgICBzbW9vdGggPSB2YXJzLnNtb290aE9yaWdpbiAhPT0gZmFsc2UgJiYgY2FjaGUuc21vb3RoO1xuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuID0gdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBzdHlsZSwgX3RyYW5zZm9ybVByb3AsIDAsIDEsIGNhY2hlLnJlbmRlclRyYW5zZm9ybSwgY2FjaGUsIDAsIC0xKTsgLy90aGUgZmlyc3QgdGltZSB0aHJvdWdoLCBjcmVhdGUgdGhlIHJlbmRlcmluZyBQcm9wVHdlZW4gc28gdGhhdCBpdCBydW5zIExBU1QgKGluIHRoZSBsaW5rZWQgbGlzdCwgd2Uga2VlcCBhZGRpbmcgdG8gdGhlIGJlZ2lubmluZylcblxuICAgICAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLmRlcCA9IDE7IC8vZmxhZyBpdCBhcyBkZXBlbmRlbnQgc28gdGhhdCBpZiB0aGluZ3MgZ2V0IGtpbGxlZC9vdmVyd3JpdHRlbiBhbmQgdGhpcyBpcyB0aGUgb25seSBQcm9wVHdlZW4gbGVmdCwgd2UgY2FuIHNhZmVseSBraWxsIHRoZSB3aG9sZSB0d2Vlbi5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocCA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGNhY2hlLCBcInNjYWxlWVwiLCBjYWNoZS5zY2FsZVksIChyZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gY2FjaGUuc2NhbGVZKSB8fCAwKTtcbiAgICAgICAgICAgIHByb3BzLnB1c2goXCJzY2FsZVlcIiwgcCk7XG4gICAgICAgICAgICBwICs9IFwiWFwiO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIikge1xuICAgICAgICAgICAgZW5kVmFsdWUgPSBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyhlbmRWYWx1ZSk7IC8vaW4gY2FzZSBzb21ldGhpbmcgbGlrZSBcImxlZnQgdG9wXCIgb3IgXCJib3R0b20gcmlnaHRcIiBpcyBwYXNzZWQgaW4uIENvbnZlcnQgdG8gcGVyY2VudGFnZXMuXG5cbiAgICAgICAgICAgIGlmIChjYWNoZS5zdmcpIHtcbiAgICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDAsIHNtb290aCwgMCwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbmRVbml0ID0gcGFyc2VGbG9hdChlbmRWYWx1ZS5zcGxpdChcIiBcIilbMl0pIHx8IDA7IC8vaGFuZGxlIHRoZSB6T3JpZ2luIHNlcGFyYXRlbHkhXG5cbiAgICAgICAgICAgICAgZW5kVW5pdCAhPT0gY2FjaGUuek9yaWdpbiAmJiBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJ6T3JpZ2luXCIsIGNhY2hlLnpPcmlnaW4sIGVuZFVuaXQpO1xuXG4gICAgICAgICAgICAgIF9hZGROb25Ud2VlbmluZ1BUKHRoaXMsIHN0eWxlLCBwLCBfZmlyc3RUd29Pbmx5KHN0YXJ0VmFsdWUpLCBfZmlyc3RUd29Pbmx5KGVuZFZhbHVlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzdmdPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgZW5kVmFsdWUsIDEsIHNtb290aCwgMCwgdGhpcyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCBpbiBfcm90YXRpb25hbFByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHRoaXMsIGNhY2hlLCBwLCBzdGFydE51bSwgZW5kVmFsdWUsIHJlbGF0aXZlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInNtb290aE9yaWdpblwiKSB7XG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBjYWNoZSwgXCJzbW9vdGhcIiwgY2FjaGUuc21vb3RoLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJmb3JjZTNEXCIpIHtcbiAgICAgICAgICAgIGNhY2hlW3BdID0gZW5kVmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtXCIpIHtcbiAgICAgICAgICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHModGhpcywgZW5kVmFsdWUsIHRhcmdldCk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghKHAgaW4gc3R5bGUpKSB7XG4gICAgICAgICAgcCA9IF9jaGVja1Byb3BQcmVmaXgocCkgfHwgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVJlbGF0ZWQgfHwgKGVuZE51bSB8fCBlbmROdW0gPT09IDApICYmIChzdGFydE51bSB8fCBzdGFydE51bSA9PT0gMCkgJiYgIV9jb21wbGV4RXhwLnRlc3QoZW5kVmFsdWUpICYmIHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBzdGFydFVuaXQgPSAoc3RhcnRWYWx1ZSArIFwiXCIpLnN1YnN0cigoc3RhcnROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICAgIGVuZE51bSB8fCAoZW5kTnVtID0gMCk7IC8vIHByb3RlY3QgYWdhaW5zdCBOYU5cblxuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKSB8fCAocCBpbiBfY29uZmlnLnVuaXRzID8gX2NvbmZpZy51bml0c1twXSA6IHN0YXJ0VW5pdCk7XG4gICAgICAgICAgc3RhcnRVbml0ICE9PSBlbmRVbml0ICYmIChzdGFydE51bSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcCwgc3RhcnRWYWx1ZSwgZW5kVW5pdCkpO1xuICAgICAgICAgIHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgaXNUcmFuc2Zvcm1SZWxhdGVkID8gY2FjaGUgOiBzdHlsZSwgcCwgc3RhcnROdW0sIHJlbGF0aXZlID8gcmVsYXRpdmUgKiBlbmROdW0gOiBlbmROdW0gLSBzdGFydE51bSwgIWlzVHJhbnNmb3JtUmVsYXRlZCAmJiAoZW5kVW5pdCA9PT0gXCJweFwiIHx8IHAgPT09IFwiekluZGV4XCIpICYmIHZhcnMuYXV0b1JvdW5kICE9PSBmYWxzZSA/IF9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA6IF9yZW5kZXJDU1NQcm9wKTtcbiAgICAgICAgICB0aGlzLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICAgICAgaWYgKHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiBlbmRVbml0ICE9PSBcIiVcIikge1xuICAgICAgICAgICAgLy93aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZywgd2UgbmVlZCB0byByZXZlcnQgaXQgdG8gdGhlIE9MRC9PUklHSU5BTCB2YWx1ZSAod2l0aCB0aG9zZSB1bml0cykuIFdlIHJlY29yZCB0aGF0IGFzIGEgXCJiXCIgKGJlZ2lubmluZykgcHJvcGVydHkgYW5kIHBvaW50IHRvIGEgcmVuZGVyIG1ldGhvZCB0aGF0IGhhbmRsZXMgdGhhdC4gKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3B0LmIgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fcHQuciA9IF9yZW5kZXJDU1NQcm9wV2l0aEJlZ2lubmluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIGlmIChwIGluIHRhcmdldCkge1xuICAgICAgICAgICAgLy9tYXliZSBpdCdzIG5vdCBhIHN0eWxlIC0gaXQgY291bGQgYmUgYSBwcm9wZXJ0eSBhZGRlZCBkaXJlY3RseSB0byBhbiBlbGVtZW50IGluIHdoaWNoIGNhc2Ugd2UnbGwgdHJ5IHRvIGFuaW1hdGUgdGhhdC5cbiAgICAgICAgICAgIHRoaXMuYWRkKHRhcmdldCwgcCwgc3RhcnRWYWx1ZSB8fCB0YXJnZXRbcF0sIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9taXNzaW5nUGx1Z2luKHAsIGVuZFZhbHVlKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcuY2FsbCh0aGlzLCB0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFzUHJpb3JpdHkgJiYgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSh0aGlzKTtcbiAgfSxcbiAgZ2V0OiBfZ2V0LFxuICBhbGlhc2VzOiBfcHJvcGVydHlBbGlhc2VzLFxuICBnZXRTZXR0ZXI6IGZ1bmN0aW9uIGdldFNldHRlcih0YXJnZXQsIHByb3BlcnR5LCBwbHVnaW4pIHtcbiAgICAvL3JldHVybnMgYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRhcmdldCwgcHJvcGVydHksIHZhbHVlIGFuZCBhcHBsaWVzIGl0IGFjY29yZGluZ2x5LiBSZW1lbWJlciwgcHJvcGVydGllcyBsaWtlIFwieFwiIGFyZW4ndCBhcyBzaW1wbGUgYXMgdGFyZ2V0LnN0eWxlLnByb3BlcnR5ID0gdmFsdWUgYmVjYXVzZSB0aGV5J3ZlIGdvdCB0byBiZSBhcHBsaWVkIHRvIGEgcHJveHkgb2JqZWN0IGFuZCB0aGVuIG1lcmdlZCBpbnRvIGEgdHJhbnNmb3JtIHN0cmluZyBpbiBhIHJlbmRlcmVyLlxuICAgIHZhciBwID0gX3Byb3BlcnR5QWxpYXNlc1twcm9wZXJ0eV07XG4gICAgcCAmJiBwLmluZGV4T2YoXCIsXCIpIDwgMCAmJiAocHJvcGVydHkgPSBwKTtcbiAgICByZXR1cm4gcHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCAmJiAodGFyZ2V0Ll9nc2FwLnggfHwgX2dldCh0YXJnZXQsIFwieFwiKSkgPyBwbHVnaW4gJiYgX3JlY2VudFNldHRlclBsdWdpbiA9PT0gcGx1Z2luID8gcHJvcGVydHkgPT09IFwic2NhbGVcIiA/IF9zZXR0ZXJTY2FsZSA6IF9zZXR0ZXJUcmFuc2Zvcm0gOiAoX3JlY2VudFNldHRlclBsdWdpbiA9IHBsdWdpbiB8fCB7fSkgJiYgKHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGVXaXRoUmVuZGVyIDogX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIpIDogdGFyZ2V0LnN0eWxlICYmICFfaXNVbmRlZmluZWQodGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSkgPyBfc2V0dGVyQ1NTU3R5bGUgOiB+cHJvcGVydHkuaW5kZXhPZihcIi1cIikgPyBfc2V0dGVyQ1NTUHJvcCA6IF9nZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gIH0sXG4gIGNvcmU6IHtcbiAgICBfcmVtb3ZlUHJvcGVydHk6IF9yZW1vdmVQcm9wZXJ0eSxcbiAgICBfZ2V0TWF0cml4OiBfZ2V0TWF0cml4XG4gIH1cbn07XG5nc2FwLnV0aWxzLmNoZWNrUHJlZml4ID0gX2NoZWNrUHJvcFByZWZpeDtcblxuKGZ1bmN0aW9uIChwb3NpdGlvbkFuZFNjYWxlLCByb3RhdGlvbiwgb3RoZXJzLCBhbGlhc2VzKSB7XG4gIHZhciBhbGwgPSBfZm9yRWFjaE5hbWUocG9zaXRpb25BbmRTY2FsZSArIFwiLFwiICsgcm90YXRpb24gKyBcIixcIiArIG90aGVycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfdHJhbnNmb3JtUHJvcHNbbmFtZV0gPSAxO1xuICB9KTtcblxuICBfZm9yRWFjaE5hbWUocm90YXRpb24sIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwiZGVnXCI7XG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX3Byb3BlcnR5QWxpYXNlc1thbGxbMTNdXSA9IHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uO1xuXG4gIF9mb3JFYWNoTmFtZShhbGlhc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzcGxpdCA9IG5hbWUuc3BsaXQoXCI6XCIpO1xuICAgIF9wcm9wZXJ0eUFsaWFzZXNbc3BsaXRbMV1dID0gYWxsW3NwbGl0WzBdXTtcbiAgfSk7XG59KShcIngseSx6LHNjYWxlLHNjYWxlWCxzY2FsZVkseFBlcmNlbnQseVBlcmNlbnRcIiwgXCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIsIFwidHJhbnNmb3JtLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sZm9yY2UzRCxzbW9vdGhPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCIwOnRyYW5zbGF0ZVgsMTp0cmFuc2xhdGVZLDI6dHJhbnNsYXRlWiw4OnJvdGF0ZSw4OnJvdGF0aW9uWiw4OnJvdGF0ZVosOTpyb3RhdGVYLDEwOnJvdGF0ZVlcIik7XG5cbl9mb3JFYWNoTmFtZShcIngseSx6LHRvcCxyaWdodCxib3R0b20sbGVmdCx3aWR0aCxoZWlnaHQsZm9udFNpemUscGFkZGluZyxtYXJnaW4scGVyc3BlY3RpdmVcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgX2NvbmZpZy51bml0c1tuYW1lXSA9IFwicHhcIjtcbn0pO1xuXG5nc2FwLnJlZ2lzdGVyUGx1Z2luKENTU1BsdWdpbik7XG5leHBvcnQgeyBDU1NQbHVnaW4gYXMgZGVmYXVsdCwgX2dldEJCb3gsIF9jcmVhdGVFbGVtZW50LCBfY2hlY2tQcm9wUHJlZml4IGFzIGNoZWNrUHJlZml4IH07IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKiFcbiAqIEdTQVAgMy44LjBcbiAqIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAyMDA4LTIwMjEsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIGFncmVlbWVudCBpc3N1ZWQgd2l0aCB0aGF0IG1lbWJlcnNoaXAuXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG52YXIgX2NvbmZpZyA9IHtcbiAgYXV0b1NsZWVwOiAxMjAsXG4gIGZvcmNlM0Q6IFwiYXV0b1wiLFxuICBudWxsVGFyZ2V0V2FybjogMSxcbiAgdW5pdHM6IHtcbiAgICBsaW5lSGVpZ2h0OiBcIlwiXG4gIH1cbn0sXG4gICAgX2RlZmF1bHRzID0ge1xuICBkdXJhdGlvbjogLjUsXG4gIG92ZXJ3cml0ZTogZmFsc2UsXG4gIGRlbGF5OiAwXG59LFxuICAgIF9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfdGlueU51bSA9IDEgLyBfYmlnTnVtLFxuICAgIF8yUEkgPSBNYXRoLlBJICogMixcbiAgICBfSEFMRl9QSSA9IF8yUEkgLyA0LFxuICAgIF9nc0lEID0gMCxcbiAgICBfc3FydCA9IE1hdGguc3FydCxcbiAgICBfY29zID0gTWF0aC5jb3MsXG4gICAgX3NpbiA9IE1hdGguc2luLFxuICAgIF9pc1N0cmluZyA9IGZ1bmN0aW9uIF9pc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufSxcbiAgICBfaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIjtcbn0sXG4gICAgX2lzTnVtYmVyID0gZnVuY3Rpb24gX2lzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCI7XG59LFxuICAgIF9pc1VuZGVmaW5lZCA9IGZ1bmN0aW9uIF9pc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNPYmplY3QgPSBmdW5jdGlvbiBfaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn0sXG4gICAgX2lzTm90RmFsc2UgPSBmdW5jdGlvbiBfaXNOb3RGYWxzZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IGZhbHNlO1xufSxcbiAgICBfd2luZG93RXhpc3RzID0gZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCI7XG59LFxuICAgIF9pc0Z1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9pc0Z1bmNPclN0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpIHx8IF9pc1N0cmluZyh2YWx1ZSk7XG59LFxuICAgIF9pc1R5cGVkQXJyYXkgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24gKCkge30sXG4gICAgLy8gbm90ZTogSUUxMCBoYXMgQXJyYXlCdWZmZXIsIGJ1dCBOT1QgQXJyYXlCdWZmZXIuaXNWaWV3KCkuXG5faXNBcnJheSA9IEFycmF5LmlzQXJyYXksXG4gICAgX3N0cmljdE51bUV4cCA9IC8oPzotP1xcLj9cXGR8XFwuKSsvZ2ksXG4gICAgLy9vbmx5IG51bWJlcnMgKGluY2x1ZGluZyBuZWdhdGl2ZXMgYW5kIGRlY2ltYWxzKSBidXQgTk9UIHJlbGF0aXZlIHZhbHVlcy5cbl9udW1FeHAgPSAvWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC0rXSpcXGQqL2csXG4gICAgLy9maW5kcyBhbnkgbnVtYmVycywgaW5jbHVkaW5nIG9uZXMgdGhhdCBzdGFydCB3aXRoICs9IG9yIC09LCBuZWdhdGl2ZSBudW1iZXJzLCBhbmQgb25lcyBpbiBzY2llbnRpZmljIG5vdGF0aW9uIGxpa2UgMWUtOC5cbl9udW1XaXRoVW5pdEV4cCA9IC9bLSs9Ll0qXFxkK1suZS1dKlxcZCpbYS16JV0qL2csXG4gICAgX2NvbXBsZXhTdHJpbmdOdW1FeHAgPSAvWy0rPS5dKlxcZCtcXC4/XFxkKig/OmUtfGVcXCspP1xcZCovZ2ksXG4gICAgLy9kdXBsaWNhdGUgc28gdGhhdCB3aGlsZSB3ZSdyZSBsb29waW5nIHRocm91Z2ggbWF0Y2hlcyBmcm9tIGV4ZWMoKSwgaXQgZG9lc24ndCBjb250YW1pbmF0ZSB0aGUgbGFzdEluZGV4IG9mIF9udW1FeHAgd2hpY2ggd2UgdXNlIHRvIHNlYXJjaCBmb3IgY29sb3JzIHRvby5cbl9yZWxFeHAgPSAvWystXT0tP1suXFxkXSsvLFxuICAgIF9kZWxpbWl0ZWRWYWx1ZUV4cCA9IC9bXiwnXCJcXFtcXF1cXHNdKy9naSxcbiAgICAvLyBwcmV2aW91c2x5IC9bI1xcLSsuXSpcXGJbYS16XFxkXFwtPSslLl0rL2dpIGJ1dCBkaWRuJ3QgY2F0Y2ggc3BlY2lhbCBjaGFyYWN0ZXJzLlxuX3VuaXRFeHAgPSAvW1xcZC4rXFwtPV0rKD86ZVstK11cXGQqKSovaSxcbiAgICBfZ2xvYmFsVGltZWxpbmUsXG4gICAgX3dpbixcbiAgICBfY29yZUluaXR0ZWQsXG4gICAgX2RvYyxcbiAgICBfZ2xvYmFscyA9IHt9LFxuICAgIF9pbnN0YWxsU2NvcGUgPSB7fSxcbiAgICBfY29yZVJlYWR5LFxuICAgIF9pbnN0YWxsID0gZnVuY3Rpb24gX2luc3RhbGwoc2NvcGUpIHtcbiAgcmV0dXJuIChfaW5zdGFsbFNjb3BlID0gX21lcmdlKHNjb3BlLCBfZ2xvYmFscykpICYmIGdzYXA7XG59LFxuICAgIF9taXNzaW5nUGx1Z2luID0gZnVuY3Rpb24gX21pc3NpbmdQbHVnaW4ocHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiBjb25zb2xlLndhcm4oXCJJbnZhbGlkIHByb3BlcnR5XCIsIHByb3BlcnR5LCBcInNldCB0b1wiLCB2YWx1ZSwgXCJNaXNzaW5nIHBsdWdpbj8gZ3NhcC5yZWdpc3RlclBsdWdpbigpXCIpO1xufSxcbiAgICBfd2FybiA9IGZ1bmN0aW9uIF93YXJuKG1lc3NhZ2UsIHN1cHByZXNzKSB7XG4gIHJldHVybiAhc3VwcHJlc3MgJiYgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xufSxcbiAgICBfYWRkR2xvYmFsID0gZnVuY3Rpb24gX2FkZEdsb2JhbChuYW1lLCBvYmopIHtcbiAgcmV0dXJuIG5hbWUgJiYgKF9nbG9iYWxzW25hbWVdID0gb2JqKSAmJiBfaW5zdGFsbFNjb3BlICYmIChfaW5zdGFsbFNjb3BlW25hbWVdID0gb2JqKSB8fCBfZ2xvYmFscztcbn0sXG4gICAgX2VtcHR5RnVuYyA9IGZ1bmN0aW9uIF9lbXB0eUZ1bmMoKSB7XG4gIHJldHVybiAwO1xufSxcbiAgICBfcmVzZXJ2ZWRQcm9wcyA9IHt9LFxuICAgIF9sYXp5VHdlZW5zID0gW10sXG4gICAgX2xhenlMb29rdXAgPSB7fSxcbiAgICBfbGFzdFJlbmRlcmVkRnJhbWUsXG4gICAgX3BsdWdpbnMgPSB7fSxcbiAgICBfZWZmZWN0cyA9IHt9LFxuICAgIF9uZXh0R0NGcmFtZSA9IDMwLFxuICAgIF9oYXJuZXNzUGx1Z2lucyA9IFtdLFxuICAgIF9jYWxsYmFja05hbWVzID0gXCJcIixcbiAgICBfaGFybmVzcyA9IGZ1bmN0aW9uIF9oYXJuZXNzKHRhcmdldHMpIHtcbiAgdmFyIHRhcmdldCA9IHRhcmdldHNbMF0sXG4gICAgICBoYXJuZXNzUGx1Z2luLFxuICAgICAgaTtcbiAgX2lzT2JqZWN0KHRhcmdldCkgfHwgX2lzRnVuY3Rpb24odGFyZ2V0KSB8fCAodGFyZ2V0cyA9IFt0YXJnZXRzXSk7XG5cbiAgaWYgKCEoaGFybmVzc1BsdWdpbiA9ICh0YXJnZXQuX2dzYXAgfHwge30pLmhhcm5lc3MpKSB7XG4gICAgLy8gZmluZCB0aGUgZmlyc3QgdGFyZ2V0IHdpdGggYSBoYXJuZXNzLiBXZSBhc3N1bWUgdGFyZ2V0cyBwYXNzZWQgaW50byBhbiBhbmltYXRpb24gd2lsbCBiZSBvZiBzaW1pbGFyIHR5cGUsIG1lYW5pbmcgdGhlIHNhbWUga2luZCBvZiBoYXJuZXNzIGNhbiBiZSB1c2VkIGZvciB0aGVtIGFsbCAocGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uKVxuICAgIGkgPSBfaGFybmVzc1BsdWdpbnMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSAmJiAhX2hhcm5lc3NQbHVnaW5zW2ldLnRhcmdldFRlc3QodGFyZ2V0KSkge31cblxuICAgIGhhcm5lc3NQbHVnaW4gPSBfaGFybmVzc1BsdWdpbnNbaV07XG4gIH1cblxuICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHRhcmdldHNbaV0gJiYgKHRhcmdldHNbaV0uX2dzYXAgfHwgKHRhcmdldHNbaV0uX2dzYXAgPSBuZXcgR1NDYWNoZSh0YXJnZXRzW2ldLCBoYXJuZXNzUGx1Z2luKSkpIHx8IHRhcmdldHMuc3BsaWNlKGksIDEpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldHM7XG59LFxuICAgIF9nZXRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRDYWNoZSh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0b0FycmF5KHRhcmdldCkpWzBdLl9nc2FwO1xufSxcbiAgICBfZ2V0UHJvcGVydHkgPSBmdW5jdGlvbiBfZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdikge1xuICByZXR1cm4gKHYgPSB0YXJnZXRbcHJvcGVydHldKSAmJiBfaXNGdW5jdGlvbih2KSA/IHRhcmdldFtwcm9wZXJ0eV0oKSA6IF9pc1VuZGVmaW5lZCh2KSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcGVydHkpIHx8IHY7XG59LFxuICAgIF9mb3JFYWNoTmFtZSA9IGZ1bmN0aW9uIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuYykge1xuICByZXR1cm4gKG5hbWVzID0gbmFtZXMuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmMpIHx8IG5hbWVzO1xufSxcbiAgICAvL3NwbGl0IGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgbmFtZXMgaW50byBhbiBhcnJheSwgdGhlbiBydW4gYSBmb3JFYWNoKCkgZnVuY3Rpb24gYW5kIHJldHVybiB0aGUgc3BsaXQgYXJyYXkgKHRoaXMgaXMganVzdCBhIHdheSB0byBjb25zb2xpZGF0ZS9zaG9ydGVuIHNvbWUgY29kZSkuXG5fcm91bmQgPSBmdW5jdGlvbiBfcm91bmQodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiAxMDAwMDApIC8gMTAwMDAwIHx8IDA7XG59LFxuICAgIF9yb3VuZFByZWNpc2UgPSBmdW5jdGlvbiBfcm91bmRQcmVjaXNlKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDAwMDApIC8gMTAwMDAwMDAgfHwgMDtcbn0sXG4gICAgLy8gaW5jcmVhc2VkIHByZWNpc2lvbiBtb3N0bHkgZm9yIHRpbWluZyB2YWx1ZXMuXG5fYXJyYXlDb250YWluc0FueSA9IGZ1bmN0aW9uIF9hcnJheUNvbnRhaW5zQW55KHRvU2VhcmNoLCB0b0ZpbmQpIHtcbiAgLy9zZWFyY2hlcyBvbmUgYXJyYXkgdG8gZmluZCBtYXRjaGVzIGZvciBhbnkgb2YgdGhlIGl0ZW1zIGluIHRoZSB0b0ZpbmQgYXJyYXkuIEFzIHNvb24gYXMgb25lIGlzIGZvdW5kLCBpdCByZXR1cm5zIHRydWUuIEl0IGRvZXMgTk9UIHJldHVybiBhbGwgdGhlIG1hdGNoZXM7IGl0J3Mgc2ltcGx5IGEgYm9vbGVhbiBzZWFyY2guXG4gIHZhciBsID0gdG9GaW5kLmxlbmd0aCxcbiAgICAgIGkgPSAwO1xuXG4gIGZvciAoOyB0b1NlYXJjaC5pbmRleE9mKHRvRmluZFtpXSkgPCAwICYmICsraSA8IGw7KSB7fVxuXG4gIHJldHVybiBpIDwgbDtcbn0sXG4gICAgX2xhenlSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVJlbmRlcigpIHtcbiAgdmFyIGwgPSBfbGF6eVR3ZWVucy5sZW5ndGgsXG4gICAgICBhID0gX2xhenlUd2VlbnMuc2xpY2UoMCksXG4gICAgICBpLFxuICAgICAgdHdlZW47XG5cbiAgX2xhenlMb29rdXAgPSB7fTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoID0gMDtcblxuICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdHdlZW4gPSBhW2ldO1xuICAgIHR3ZWVuICYmIHR3ZWVuLl9sYXp5ICYmICh0d2Vlbi5yZW5kZXIodHdlZW4uX2xhenlbMF0sIHR3ZWVuLl9sYXp5WzFdLCB0cnVlKS5fbGF6eSA9IDApO1xuICB9XG59LFxuICAgIF9sYXp5U2FmZVJlbmRlciA9IGZ1bmN0aW9uIF9sYXp5U2FmZVJlbmRlcihhbmltYXRpb24sIHRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTtcbiAgYW5pbWF0aW9uLnJlbmRlcih0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIHNvbWVvbmUgY2FsbHMgc2VlaygpIG9yIHRpbWUoKSBvciBwcm9ncmVzcygpLCB0aGV5IGV4cGVjdCBhbiBpbW1lZGlhdGUgcmVuZGVyLlxufSxcbiAgICBfbnVtZXJpY0lmUG9zc2libGUgPSBmdW5jdGlvbiBfbnVtZXJpY0lmUG9zc2libGUodmFsdWUpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuIChuIHx8IG4gPT09IDApICYmICh2YWx1ZSArIFwiXCIpLm1hdGNoKF9kZWxpbWl0ZWRWYWx1ZUV4cCkubGVuZ3RoIDwgMiA/IG4gOiBfaXNTdHJpbmcodmFsdWUpID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG59LFxuICAgIF9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uIF9wYXNzVGhyb3VnaChwKSB7XG4gIHJldHVybiBwO1xufSxcbiAgICBfc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiBfc2V0RGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgKG9ialtwXSA9IGRlZmF1bHRzW3BdKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF9zZXRLZXlmcmFtZURlZmF1bHRzID0gZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMob2JqLCBkZWZhdWx0cykge1xuICBmb3IgKHZhciBwIGluIGRlZmF1bHRzKSB7XG4gICAgcCBpbiBvYmogfHwgcCA9PT0gXCJkdXJhdGlvblwiIHx8IHAgPT09IFwiZWFzZVwiIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cbn0sXG4gICAgX21lcmdlID0gZnVuY3Rpb24gX21lcmdlKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgYmFzZVtwXSA9IHRvTWVyZ2VbcF07XG4gIH1cblxuICByZXR1cm4gYmFzZTtcbn0sXG4gICAgX21lcmdlRGVlcCA9IGZ1bmN0aW9uIF9tZXJnZURlZXAoYmFzZSwgdG9NZXJnZSkge1xuICBmb3IgKHZhciBwIGluIHRvTWVyZ2UpIHtcbiAgICBwICE9PSBcIl9fcHJvdG9fX1wiICYmIHAgIT09IFwiY29uc3RydWN0b3JcIiAmJiBwICE9PSBcInByb3RvdHlwZVwiICYmIChiYXNlW3BdID0gX2lzT2JqZWN0KHRvTWVyZ2VbcF0pID8gX21lcmdlRGVlcChiYXNlW3BdIHx8IChiYXNlW3BdID0ge30pLCB0b01lcmdlW3BdKSA6IHRvTWVyZ2VbcF0pO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9jb3B5RXhjbHVkaW5nID0gZnVuY3Rpb24gX2NvcHlFeGNsdWRpbmcob2JqLCBleGNsdWRpbmcpIHtcbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIG9iaikge1xuICAgIHAgaW4gZXhjbHVkaW5nIHx8IChjb3B5W3BdID0gb2JqW3BdKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfaW5oZXJpdERlZmF1bHRzID0gZnVuY3Rpb24gX2luaGVyaXREZWZhdWx0cyh2YXJzKSB7XG4gIHZhciBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICBmdW5jID0gdmFycy5rZXlmcmFtZXMgPyBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA6IF9zZXREZWZhdWx0cztcblxuICBpZiAoX2lzTm90RmFsc2UodmFycy5pbmhlcml0KSkge1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGZ1bmModmFycywgcGFyZW50LnZhcnMuZGVmYXVsdHMpO1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudCB8fCBwYXJlbnQuX2RwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YXJzO1xufSxcbiAgICBfYXJyYXlzTWF0Y2ggPSBmdW5jdGlvbiBfYXJyYXlzTWF0Y2goYTEsIGEyKSB7XG4gIHZhciBpID0gYTEubGVuZ3RoLFxuICAgICAgbWF0Y2ggPSBpID09PSBhMi5sZW5ndGg7XG5cbiAgd2hpbGUgKG1hdGNoICYmIGktLSAmJiBhMVtpXSA9PT0gYTJbaV0pIHt9XG5cbiAgcmV0dXJuIGkgPCAwO1xufSxcbiAgICBfYWRkTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfYWRkTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCwgc29ydEJ5KSB7XG4gIGlmIChmaXJzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGZpcnN0UHJvcCA9IFwiX2ZpcnN0XCI7XG4gIH1cblxuICBpZiAobGFzdFByb3AgPT09IHZvaWQgMCkge1xuICAgIGxhc3RQcm9wID0gXCJfbGFzdFwiO1xuICB9XG5cbiAgdmFyIHByZXYgPSBwYXJlbnRbbGFzdFByb3BdLFxuICAgICAgdDtcblxuICBpZiAoc29ydEJ5KSB7XG4gICAgdCA9IGNoaWxkW3NvcnRCeV07XG5cbiAgICB3aGlsZSAocHJldiAmJiBwcmV2W3NvcnRCeV0gPiB0KSB7XG4gICAgICBwcmV2ID0gcHJldi5fcHJldjtcbiAgICB9XG4gIH1cblxuICBpZiAocHJldikge1xuICAgIGNoaWxkLl9uZXh0ID0gcHJldi5fbmV4dDtcbiAgICBwcmV2Ll9uZXh0ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQuX25leHQgPSBwYXJlbnRbZmlyc3RQcm9wXTtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgaWYgKGNoaWxkLl9uZXh0KSB7XG4gICAgY2hpbGQuX25leHQuX3ByZXYgPSBjaGlsZDtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRbbGFzdFByb3BdID0gY2hpbGQ7XG4gIH1cblxuICBjaGlsZC5fcHJldiA9IHByZXY7XG4gIGNoaWxkLnBhcmVudCA9IGNoaWxkLl9kcCA9IHBhcmVudDtcbiAgcmV0dXJuIGNoaWxkO1xufSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0ocGFyZW50LCBjaGlsZCwgZmlyc3RQcm9wLCBsYXN0UHJvcCkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gY2hpbGQuX3ByZXYsXG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgaWYgKHByZXYpIHtcbiAgICBwcmV2Ll9uZXh0ID0gbmV4dDtcbiAgfSBlbHNlIGlmIChwYXJlbnRbZmlyc3RQcm9wXSA9PT0gY2hpbGQpIHtcbiAgICBwYXJlbnRbZmlyc3RQcm9wXSA9IG5leHQ7XG4gIH1cblxuICBpZiAobmV4dCkge1xuICAgIG5leHQuX3ByZXYgPSBwcmV2O1xuICB9IGVsc2UgaWYgKHBhcmVudFtsYXN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IHByZXY7XG4gIH1cblxuICBjaGlsZC5fbmV4dCA9IGNoaWxkLl9wcmV2ID0gY2hpbGQucGFyZW50ID0gbnVsbDsgLy8gZG9uJ3QgZGVsZXRlIHRoZSBfZHAganVzdCBzbyB3ZSBjYW4gcmV2ZXJ0IGlmIG5lY2Vzc2FyeS4gQnV0IHBhcmVudCBzaG91bGQgYmUgbnVsbCB0byBpbmRpY2F0ZSB0aGUgaXRlbSBpc24ndCBpbiBhIGxpbmtlZCBsaXN0LlxufSxcbiAgICBfcmVtb3ZlRnJvbVBhcmVudCA9IGZ1bmN0aW9uIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkLCBvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlKSB7XG4gIGNoaWxkLnBhcmVudCAmJiAoIW9ubHlJZlBhcmVudEhhc0F1dG9SZW1vdmUgfHwgY2hpbGQucGFyZW50LmF1dG9SZW1vdmVDaGlsZHJlbikgJiYgY2hpbGQucGFyZW50LnJlbW92ZShjaGlsZCk7XG4gIGNoaWxkLl9hY3QgPSAwO1xufSxcbiAgICBfdW5jYWNoZSA9IGZ1bmN0aW9uIF91bmNhY2hlKGFuaW1hdGlvbiwgY2hpbGQpIHtcbiAgaWYgKGFuaW1hdGlvbiAmJiAoIWNoaWxkIHx8IGNoaWxkLl9lbmQgPiBhbmltYXRpb24uX2R1ciB8fCBjaGlsZC5fc3RhcnQgPCAwKSkge1xuICAgIC8vIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbjogaWYgYSBjaGlsZCBhbmltYXRpb24gaXMgcGFzc2VkIGluIHdlIHNob3VsZCBvbmx5IHVuY2FjaGUgaWYgdGhhdCBjaGlsZCBFWFRFTkRTIHRoZSBhbmltYXRpb24gKGl0cyBlbmQgdGltZSBpcyBiZXlvbmQgdGhlIGVuZClcbiAgICB2YXIgYSA9IGFuaW1hdGlvbjtcblxuICAgIHdoaWxlIChhKSB7XG4gICAgICBhLl9kaXJ0eSA9IDE7XG4gICAgICBhID0gYS5wYXJlbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3JlY2FjaGVBbmNlc3RvcnMgPSBmdW5jdGlvbiBfcmVjYWNoZUFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgdmFyIHBhcmVudCA9IGFuaW1hdGlvbi5wYXJlbnQ7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgLy9zb21ldGltZXMgd2UgbXVzdCBmb3JjZSBhIHJlLXNvcnQgb2YgYWxsIGNoaWxkcmVuIGFuZCB1cGRhdGUgdGhlIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gb2YgYWxsIGFuY2VzdG9yIHRpbWVsaW5lcyBpbW1lZGlhdGVseSBpbiBjYXNlLCBmb3IgZXhhbXBsZSwgaW4gdGhlIG1pZGRsZSBvZiBhIHJlbmRlciBsb29wLCBvbmUgdHdlZW4gYWx0ZXJzIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgd2hpY2ggc2hvdmVzIGl0cyBzdGFydFRpbWUgYmVmb3JlIDAsIGZvcmNpbmcgdGhlIHBhcmVudCB0aW1lbGluZSB0byBzaGlmdCBhcm91bmQgYW5kIHNoaWZ0Q2hpbGRyZW4oKSB3aGljaCBjb3VsZCBhZmZlY3QgdGhhdCBuZXh0IHR3ZWVuJ3MgcmVuZGVyIChzdGFydFRpbWUpLiBEb2Vzbid0IG1hdHRlciBmb3IgdGhlIHJvb3QgdGltZWxpbmUgdGhvdWdoLlxuICAgIHBhcmVudC5fZGlydHkgPSAxO1xuICAgIHBhcmVudC50b3RhbER1cmF0aW9uKCk7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyA9IGZ1bmN0aW9uIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhhbmltYXRpb24pIHtcbiAgcmV0dXJuICFhbmltYXRpb24gfHwgYW5pbWF0aW9uLl90cyAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uLnBhcmVudCk7XG59LFxuICAgIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbiA9IGZ1bmN0aW9uIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbihhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKGFuaW1hdGlvbi5fdFRpbWUsIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpICsgYW5pbWF0aW9uLl9yRGVsYXkpICogYW5pbWF0aW9uIDogMDtcbn0sXG4gICAgLy8gZmVlZCBpbiB0aGUgdG90YWxUaW1lIGFuZCBjeWNsZUR1cmF0aW9uIGFuZCBpdCdsbCByZXR1cm4gdGhlIGN5Y2xlIChpdGVyYXRpb24gbWludXMgMSkgYW5kIGlmIHRoZSBwbGF5aGVhZCBpcyBleGFjdGx5IGF0IHRoZSB2ZXJ5IEVORCwgaXQgd2lsbCBOT1QgYnVtcCB1cCB0byB0aGUgbmV4dCBjeWNsZS5cbl9hbmltYXRpb25DeWNsZSA9IGZ1bmN0aW9uIF9hbmltYXRpb25DeWNsZSh0VGltZSwgY3ljbGVEdXJhdGlvbikge1xuICB2YXIgd2hvbGUgPSBNYXRoLmZsb29yKHRUaW1lIC89IGN5Y2xlRHVyYXRpb24pO1xuICByZXR1cm4gdFRpbWUgJiYgd2hvbGUgPT09IHRUaW1lID8gd2hvbGUgLSAxIDogd2hvbGU7XG59LFxuICAgIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lID0gZnVuY3Rpb24gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50VGltZSwgY2hpbGQpIHtcbiAgcmV0dXJuIChwYXJlbnRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyArIChjaGlsZC5fdHMgPj0gMCA/IDAgOiBjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cik7XG59LFxuICAgIF9zZXRFbmQgPSBmdW5jdGlvbiBfc2V0RW5kKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uLl9lbmQgPSBfcm91bmRQcmVjaXNlKGFuaW1hdGlvbi5fc3RhcnQgKyAoYW5pbWF0aW9uLl90RHVyIC8gTWF0aC5hYnMoYW5pbWF0aW9uLl90cyB8fCBhbmltYXRpb24uX3J0cyB8fCBfdGlueU51bSkgfHwgMCkpO1xufSxcbiAgICBfYWxpZ25QbGF5aGVhZCA9IGZ1bmN0aW9uIF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgdG90YWxUaW1lKSB7XG4gIC8vIGFkanVzdHMgdGhlIGFuaW1hdGlvbidzIF9zdGFydCBhbmQgX2VuZCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIHRvdGFsVGltZSAob25seSBpZiB0aGUgcGFyZW50J3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSBhbmQgdGhlIGFuaW1hdGlvbiBpc24ndCBwYXVzZWQpLiBJdCBkb2Vzbid0IGRvIGFueSByZW5kZXJpbmcgb3IgZm9yY2luZyB0aGluZ3MgYmFjayBpbnRvIHBhcmVudCB0aW1lbGluZXMsIGV0Yy4gLSB0aGF0J3Mgd2hhdCB0b3RhbFRpbWUoKSBpcyBmb3IuXG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24uX2RwO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIGFuaW1hdGlvbi5fdHMpIHtcbiAgICBhbmltYXRpb24uX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShwYXJlbnQuX3RpbWUgLSAoYW5pbWF0aW9uLl90cyA+IDAgPyB0b3RhbFRpbWUgLyBhbmltYXRpb24uX3RzIDogKChhbmltYXRpb24uX2RpcnR5ID8gYW5pbWF0aW9uLnRvdGFsRHVyYXRpb24oKSA6IGFuaW1hdGlvbi5fdER1cikgLSB0b3RhbFRpbWUpIC8gLWFuaW1hdGlvbi5fdHMpKTtcblxuICAgIF9zZXRFbmQoYW5pbWF0aW9uKTtcblxuICAgIHBhcmVudC5fZGlydHkgfHwgX3VuY2FjaGUocGFyZW50LCBhbmltYXRpb24pOyAvL2ZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gSWYgdGhlIHBhcmVudCdzIGNhY2hlIGlzIGFscmVhZHkgZGlydHksIGl0IGFscmVhZHkgdG9vayBjYXJlIG9mIG1hcmtpbmcgdGhlIGFuY2VzdG9ycyBhcyBkaXJ0eSB0b28sIHNvIHNraXAgdGhlIGZ1bmN0aW9uIGNhbGwgaGVyZS5cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuXG4vKlxuX3RvdGFsVGltZVRvVGltZSA9IChjbGFtcGVkVG90YWxUaW1lLCBkdXJhdGlvbiwgcmVwZWF0LCByZXBlYXREZWxheSwgeW95bykgPT4ge1xuXHRsZXQgY3ljbGVEdXJhdGlvbiA9IGR1cmF0aW9uICsgcmVwZWF0RGVsYXksXG5cdFx0dGltZSA9IF9yb3VuZChjbGFtcGVkVG90YWxUaW1lICUgY3ljbGVEdXJhdGlvbik7XG5cdGlmICh0aW1lID4gZHVyYXRpb24pIHtcblx0XHR0aW1lID0gZHVyYXRpb247XG5cdH1cblx0cmV0dXJuICh5b3lvICYmICh+fihjbGFtcGVkVG90YWxUaW1lIC8gY3ljbGVEdXJhdGlvbikgJiAxKSkgPyBkdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xufSxcbiovXG5fcG9zdEFkZENoZWNrcyA9IGZ1bmN0aW9uIF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCkge1xuICB2YXIgdDtcblxuICBpZiAoY2hpbGQuX3RpbWUgfHwgY2hpbGQuX2luaXR0ZWQgJiYgIWNoaWxkLl9kdXIpIHtcbiAgICAvL2luIGNhc2UsIGZvciBleGFtcGxlLCB0aGUgX3N0YXJ0IGlzIG1vdmVkIG9uIGEgdHdlZW4gdGhhdCBoYXMgYWxyZWFkeSByZW5kZXJlZC4gSW1hZ2luZSBpdCdzIGF0IGl0cyBlbmQgc3RhdGUsIHRoZW4gdGhlIHN0YXJ0VGltZSBpcyBtb3ZlZCBXQVkgbGF0ZXIgKGFmdGVyIHRoZSBlbmQgb2YgdGhpcyB0aW1lbGluZSksIGl0IHNob3VsZCByZW5kZXIgYXQgaXRzIGJlZ2lubmluZy5cbiAgICB0ID0gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGltZWxpbmUucmF3VGltZSgpLCBjaGlsZCk7XG5cbiAgICBpZiAoIWNoaWxkLl9kdXIgfHwgX2NsYW1wKDAsIGNoaWxkLnRvdGFsRHVyYXRpb24oKSwgdCkgLSBjaGlsZC5fdFRpbWUgPiBfdGlueU51bSkge1xuICAgICAgY2hpbGQucmVuZGVyKHQsIHRydWUpO1xuICAgIH1cbiAgfSAvL2lmIHRoZSB0aW1lbGluZSBoYXMgYWxyZWFkeSBlbmRlZCBidXQgdGhlIGluc2VydGVkIHR3ZWVuL3RpbWVsaW5lIGV4dGVuZHMgdGhlIGR1cmF0aW9uLCB3ZSBzaG91bGQgZW5hYmxlIHRoaXMgdGltZWxpbmUgYWdhaW4gc28gdGhhdCBpdCByZW5kZXJzIHByb3Blcmx5LiBXZSBzaG91bGQgYWxzbyBhbGlnbiB0aGUgcGxheWhlYWQgd2l0aCB0aGUgcGFyZW50IHRpbWVsaW5lJ3Mgd2hlbiBhcHByb3ByaWF0ZS5cblxuXG4gIGlmIChfdW5jYWNoZSh0aW1lbGluZSwgY2hpbGQpLl9kcCAmJiB0aW1lbGluZS5faW5pdHRlZCAmJiB0aW1lbGluZS5fdGltZSA+PSB0aW1lbGluZS5fZHVyICYmIHRpbWVsaW5lLl90cykge1xuICAgIC8vaW4gY2FzZSBhbnkgb2YgdGhlIGFuY2VzdG9ycyBoYWQgY29tcGxldGVkIGJ1dCBzaG91bGQgbm93IGJlIGVuYWJsZWQuLi5cbiAgICBpZiAodGltZWxpbmUuX2R1ciA8IHRpbWVsaW5lLmR1cmF0aW9uKCkpIHtcbiAgICAgIHQgPSB0aW1lbGluZTtcblxuICAgICAgd2hpbGUgKHQuX2RwKSB7XG4gICAgICAgIHQucmF3VGltZSgpID49IDAgJiYgdC50b3RhbFRpbWUodC5fdFRpbWUpOyAvL21vdmVzIHRoZSB0aW1lbGluZSAoc2hpZnRzIGl0cyBzdGFydFRpbWUpIGlmIG5lY2Vzc2FyeSwgYW5kIGFsc28gZW5hYmxlcyBpdC4gSWYgaXQncyBjdXJyZW50bHkgemVybywgdGhvdWdoLCBpdCBtYXkgbm90IGJlIHNjaGVkdWxlZCB0byByZW5kZXIgdW50aWwgbGF0ZXIgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIGl0IHRvIGFsaWduIHdpdGggdGhlIGN1cnJlbnQgcGxheWhlYWQgcG9zaXRpb24uIE9ubHkgbW92ZSB0byBjYXRjaCB1cCB3aXRoIHRoZSBwbGF5aGVhZC5cblxuICAgICAgICB0ID0gdC5fZHA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUuX3pUaW1lID0gLV90aW55TnVtOyAvLyBoZWxwcyBlbnN1cmUgdGhhdCB0aGUgbmV4dCByZW5kZXIoKSB3aWxsIGJlIGZvcmNlZCAoY3Jvc3NpbmdTdGFydCA9IHRydWUgaW4gcmVuZGVyKCkpLCBldmVuIGlmIHRoZSBkdXJhdGlvbiBoYXNuJ3QgY2hhbmdlZCAod2UncmUgYWRkaW5nIGEgY2hpbGQgd2hpY2ggd291bGQgbmVlZCB0byBnZXQgcmVuZGVyZWQpLiBEZWZpbml0ZWx5IGFuIGVkZ2UgY2FzZS4gTm90ZTogd2UgTVVTVCBkbyB0aGlzIEFGVEVSIHRoZSBsb29wIGFib3ZlIHdoZXJlIHRoZSB0b3RhbFRpbWUoKSBtaWdodCB0cmlnZ2VyIGEgcmVuZGVyKCkgYmVjYXVzZSB0aGlzIF9hZGRUb1RpbWVsaW5lKCkgbWV0aG9kIGdldHMgY2FsbGVkIGZyb20gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgQkVGT1JFIHR3ZWVucyBldmVuIHJlY29yZCB0aGVpciB0YXJnZXRzLCBldGMuIHNvIHdlIHdvdWxkbid0IHdhbnQgdGhpbmdzIHRvIGdldCB0cmlnZ2VyZWQgaW4gdGhlIHdyb25nIG9yZGVyLlxuICB9XG59LFxuICAgIF9hZGRUb1RpbWVsaW5lID0gZnVuY3Rpb24gX2FkZFRvVGltZWxpbmUodGltZWxpbmUsIGNoaWxkLCBwb3NpdGlvbiwgc2tpcENoZWNrcykge1xuICBjaGlsZC5wYXJlbnQgJiYgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICBjaGlsZC5fc3RhcnQgPSBfcm91bmRQcmVjaXNlKChfaXNOdW1iZXIocG9zaXRpb24pID8gcG9zaXRpb24gOiBwb3NpdGlvbiB8fCB0aW1lbGluZSAhPT0gX2dsb2JhbFRpbWVsaW5lID8gX3BhcnNlUG9zaXRpb24odGltZWxpbmUsIHBvc2l0aW9uLCBjaGlsZCkgOiB0aW1lbGluZS5fdGltZSkgKyBjaGlsZC5fZGVsYXkpO1xuICBjaGlsZC5fZW5kID0gX3JvdW5kUHJlY2lzZShjaGlsZC5fc3RhcnQgKyAoY2hpbGQudG90YWxEdXJhdGlvbigpIC8gTWF0aC5hYnMoY2hpbGQudGltZVNjYWxlKCkpIHx8IDApKTtcblxuICBfYWRkTGlua2VkTGlzdEl0ZW0odGltZWxpbmUsIGNoaWxkLCBcIl9maXJzdFwiLCBcIl9sYXN0XCIsIHRpbWVsaW5lLl9zb3J0ID8gXCJfc3RhcnRcIiA6IDApO1xuXG4gIF9pc0Zyb21PckZyb21TdGFydChjaGlsZCkgfHwgKHRpbWVsaW5lLl9yZWNlbnQgPSBjaGlsZCk7XG4gIHNraXBDaGVja3MgfHwgX3Bvc3RBZGRDaGVja3ModGltZWxpbmUsIGNoaWxkKTtcbiAgcmV0dXJuIHRpbWVsaW5lO1xufSxcbiAgICBfc2Nyb2xsVHJpZ2dlciA9IGZ1bmN0aW9uIF9zY3JvbGxUcmlnZ2VyKGFuaW1hdGlvbiwgdHJpZ2dlcikge1xuICByZXR1cm4gKF9nbG9iYWxzLlNjcm9sbFRyaWdnZXIgfHwgX21pc3NpbmdQbHVnaW4oXCJzY3JvbGxUcmlnZ2VyXCIsIHRyaWdnZXIpKSAmJiBfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyLmNyZWF0ZSh0cmlnZ2VyLCBhbmltYXRpb24pO1xufSxcbiAgICBfYXR0ZW1wdEluaXRUd2VlbiA9IGZ1bmN0aW9uIF9hdHRlbXB0SW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykge1xuICBfaW5pdFR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUpO1xuXG4gIGlmICghdHdlZW4uX2luaXR0ZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICghZm9yY2UgJiYgdHdlZW4uX3B0ICYmICh0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSAhPT0gZmFsc2UgfHwgIXR3ZWVuLl9kdXIgJiYgdHdlZW4udmFycy5sYXp5KSAmJiBfbGFzdFJlbmRlcmVkRnJhbWUgIT09IF90aWNrZXIuZnJhbWUpIHtcbiAgICBfbGF6eVR3ZWVucy5wdXNoKHR3ZWVuKTtcblxuICAgIHR3ZWVuLl9sYXp5ID0gW3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHNdO1xuICAgIHJldHVybiAxO1xuICB9XG59LFxuICAgIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQgPSBmdW5jdGlvbiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KF9yZWYpIHtcbiAgdmFyIHBhcmVudCA9IF9yZWYucGFyZW50O1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5fdHMgJiYgcGFyZW50Ll9pbml0dGVkICYmICFwYXJlbnQuX2xvY2sgJiYgKHBhcmVudC5yYXdUaW1lKCkgPCAwIHx8IF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQocGFyZW50KSk7XG59LFxuICAgIC8vIGNoZWNrIHBhcmVudCdzIF9sb2NrIGJlY2F1c2Ugd2hlbiBhIHRpbWVsaW5lIHJlcGVhdHMveW95b3MgYW5kIGRvZXMgaXRzIGFydGlmaWNpYWwgd3JhcHBpbmcsIHdlIHNob3VsZG4ndCBmb3JjZSB0aGUgcmF0aW8gYmFjayB0byAwXG5faXNGcm9tT3JGcm9tU3RhcnQgPSBmdW5jdGlvbiBfaXNGcm9tT3JGcm9tU3RhcnQoX3JlZjIpIHtcbiAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICByZXR1cm4gZGF0YSA9PT0gXCJpc0Zyb21TdGFydFwiIHx8IGRhdGEgPT09IFwiaXNTdGFydFwiO1xufSxcbiAgICBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4gPSBmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odHdlZW4sIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gIHZhciBwcmV2UmF0aW8gPSB0d2Vlbi5yYXRpbyxcbiAgICAgIHJhdGlvID0gdG90YWxUaW1lIDwgMCB8fCAhdG90YWxUaW1lICYmICghdHdlZW4uX3N0YXJ0ICYmIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodHdlZW4pICYmICEoIXR3ZWVuLl9pbml0dGVkICYmIF9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpIHx8ICh0d2Vlbi5fdHMgPCAwIHx8IHR3ZWVuLl9kcC5fdHMgPCAwKSAmJiAhX2lzRnJvbU9yRnJvbVN0YXJ0KHR3ZWVuKSkgPyAwIDogMSxcbiAgICAgIC8vIGlmIHRoZSB0d2VlbiBvciBpdHMgcGFyZW50IGlzIHJldmVyc2VkIGFuZCB0aGUgdG90YWxUaW1lIGlzIDAsIHdlIHNob3VsZCBnbyB0byBhIHJhdGlvIG9mIDAuIEVkZ2UgY2FzZTogaWYgYSBmcm9tKCkgb3IgZnJvbVRvKCkgc3RhZ2dlciB0d2VlbiBpcyBwbGFjZWQgbGF0ZXIgaW4gYSB0aW1lbGluZSwgdGhlIFwic3RhcnRBdFwiIHplcm8tZHVyYXRpb24gdHdlZW4gY291bGQgaW5pdGlhbGx5IHJlbmRlciBhdCBhIHRpbWUgd2hlbiB0aGUgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgaXMgdGVjaG5pY2FsbHkgQkVGT1JFIHdoZXJlIHRoaXMgdHdlZW4gaXMsIHNvIG1ha2Ugc3VyZSB0aGF0IGFueSBcImZyb21cIiBhbmQgXCJmcm9tVG9cIiBzdGFydEF0IHR3ZWVucyBhcmUgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUgYXQgYSByYXRpbyBvZiAxLlxuICByZXBlYXREZWxheSA9IHR3ZWVuLl9yRGVsYXksXG4gICAgICB0VGltZSA9IDAsXG4gICAgICBwdCxcbiAgICAgIGl0ZXJhdGlvbixcbiAgICAgIHByZXZJdGVyYXRpb247XG5cbiAgaWYgKHJlcGVhdERlbGF5ICYmIHR3ZWVuLl9yZXBlYXQpIHtcbiAgICAvLyBpbiBjYXNlIHRoZXJlJ3MgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuIHRoYXQgaGFzIGEgcmVwZWF0IHdpdGggYSByZXBlYXREZWxheVxuICAgIHRUaW1lID0gX2NsYW1wKDAsIHR3ZWVuLl90RHVyLCB0b3RhbFRpbWUpO1xuICAgIGl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodHdlZW4uX3RUaW1lLCByZXBlYXREZWxheSk7XG4gICAgdHdlZW4uX3lveW8gJiYgaXRlcmF0aW9uICYgMSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuXG4gICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbikge1xuICAgICAgcHJldlJhdGlvID0gMSAtIHJhdGlvO1xuICAgICAgdHdlZW4udmFycy5yZXBlYXRSZWZyZXNoICYmIHR3ZWVuLl9pbml0dGVkICYmIHR3ZWVuLmludmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmF0aW8gIT09IHByZXZSYXRpbyB8fCBmb3JjZSB8fCB0d2Vlbi5felRpbWUgPT09IF90aW55TnVtIHx8ICF0b3RhbFRpbWUgJiYgdHdlZW4uX3pUaW1lKSB7XG4gICAgaWYgKCF0d2Vlbi5faW5pdHRlZCAmJiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpKSB7XG4gICAgICAvLyBpZiB3ZSByZW5kZXIgdGhlIHZlcnkgYmVnaW5uaW5nICh0aW1lID09IDApIG9mIGEgZnJvbVRvKCksIHdlIG11c3QgZm9yY2UgdGhlIHJlbmRlciAobm9ybWFsIHR3ZWVucyB3b3VsZG4ndCBuZWVkIHRvIHJlbmRlciBhdCBhIHRpbWUgb2YgMCB3aGVuIHRoZSBwcmV2VGltZSB3YXMgYWxzbyAwKS4gVGhpcyBpcyBhbHNvIG1hbmRhdG9yeSB0byBtYWtlIHN1cmUgb3ZlcndyaXRpbmcga2lja3MgaW4gaW1tZWRpYXRlbHkuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldkl0ZXJhdGlvbiA9IHR3ZWVuLl96VGltZTtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWUgfHwgKHN1cHByZXNzRXZlbnRzID8gX3RpbnlOdW0gOiAwKTsgLy8gd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdHdlZW4sIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICBzdXBwcmVzc0V2ZW50cyB8fCAoc3VwcHJlc3NFdmVudHMgPSB0b3RhbFRpbWUgJiYgIXByZXZJdGVyYXRpb24pOyAvLyBpZiBpdCB3YXMgcmVuZGVyZWQgcHJldmlvdXNseSBhdCBleGFjdGx5IDAgKF96VGltZSkgYW5kIG5vdyB0aGUgcGxheWhlYWQgaXMgbW92aW5nIGF3YXksIERPTidUIGZpcmUgY2FsbGJhY2tzIG90aGVyd2lzZSB0aGV5J2xsIHNlZW0gbGlrZSBkdXBsaWNhdGVzLlxuXG4gICAgdHdlZW4ucmF0aW8gPSByYXRpbztcbiAgICB0d2Vlbi5fZnJvbSAmJiAocmF0aW8gPSAxIC0gcmF0aW8pO1xuICAgIHR3ZWVuLl90aW1lID0gMDtcbiAgICB0d2Vlbi5fdFRpbWUgPSB0VGltZTtcbiAgICBwdCA9IHR3ZWVuLl9wdDtcblxuICAgIHdoaWxlIChwdCkge1xuICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICBwdCA9IHB0Ll9uZXh0O1xuICAgIH1cblxuICAgIHR3ZWVuLl9zdGFydEF0ICYmIHRvdGFsVGltZSA8IDAgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgdHdlZW4uX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cyAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25VcGRhdGVcIik7XG4gICAgdFRpbWUgJiYgdHdlZW4uX3JlcGVhdCAmJiAhc3VwcHJlc3NFdmVudHMgJiYgdHdlZW4ucGFyZW50ICYmIF9jYWxsYmFjayh0d2VlbiwgXCJvblJlcGVhdFwiKTtcblxuICAgIGlmICgodG90YWxUaW1lID49IHR3ZWVuLl90RHVyIHx8IHRvdGFsVGltZSA8IDApICYmIHR3ZWVuLnJhdGlvID09PSByYXRpbykge1xuICAgICAgcmF0aW8gJiYgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4sIDEpO1xuXG4gICAgICBpZiAoIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIF9jYWxsYmFjayh0d2VlbiwgcmF0aW8gPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgdHdlZW4uX3Byb20gJiYgdHdlZW4uX3Byb20oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoIXR3ZWVuLl96VGltZSkge1xuICAgIHR3ZWVuLl96VGltZSA9IHRvdGFsVGltZTtcbiAgfVxufSxcbiAgICBfZmluZE5leHRQYXVzZVR3ZWVuID0gZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2VlbihhbmltYXRpb24sIHByZXZUaW1lLCB0aW1lKSB7XG4gIHZhciBjaGlsZDtcblxuICBpZiAodGltZSA+IHByZXZUaW1lKSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkICYmIGNoaWxkLl9zdGFydCA8PSB0aW1lKSB7XG4gICAgICBpZiAoIWNoaWxkLl9kdXIgJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIgJiYgY2hpbGQuX3N0YXJ0ID4gcHJldlRpbWUpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGFuaW1hdGlvbi5fbGFzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPj0gdGltZSkge1xuICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA8IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fcHJldjtcbiAgICB9XG4gIH1cbn0sXG4gICAgX3NldER1cmF0aW9uID0gZnVuY3Rpb24gX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgZHVyYXRpb24sIHNraXBVbmNhY2hlLCBsZWF2ZVBsYXloZWFkKSB7XG4gIHZhciByZXBlYXQgPSBhbmltYXRpb24uX3JlcGVhdCxcbiAgICAgIGR1ciA9IF9yb3VuZFByZWNpc2UoZHVyYXRpb24pIHx8IDAsXG4gICAgICB0b3RhbFByb2dyZXNzID0gYW5pbWF0aW9uLl90VGltZSAvIGFuaW1hdGlvbi5fdER1cjtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCAmJiAoYW5pbWF0aW9uLl90aW1lICo9IGR1ciAvIGFuaW1hdGlvbi5fZHVyKTtcbiAgYW5pbWF0aW9uLl9kdXIgPSBkdXI7XG4gIGFuaW1hdGlvbi5fdER1ciA9ICFyZXBlYXQgPyBkdXIgOiByZXBlYXQgPCAwID8gMWUxMCA6IF9yb3VuZFByZWNpc2UoZHVyICogKHJlcGVhdCArIDEpICsgYW5pbWF0aW9uLl9yRGVsYXkgKiByZXBlYXQpO1xuICB0b3RhbFByb2dyZXNzICYmICFsZWF2ZVBsYXloZWFkID8gX2FsaWduUGxheWhlYWQoYW5pbWF0aW9uLCBhbmltYXRpb24uX3RUaW1lID0gYW5pbWF0aW9uLl90RHVyICogdG90YWxQcm9ncmVzcykgOiBhbmltYXRpb24ucGFyZW50ICYmIF9zZXRFbmQoYW5pbWF0aW9uKTtcbiAgc2tpcFVuY2FjaGUgfHwgX3VuY2FjaGUoYW5pbWF0aW9uLnBhcmVudCwgYW5pbWF0aW9uKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24gaW5zdGFuY2VvZiBUaW1lbGluZSA/IF91bmNhY2hlKGFuaW1hdGlvbikgOiBfc2V0RHVyYXRpb24oYW5pbWF0aW9uLCBhbmltYXRpb24uX2R1cik7XG59LFxuICAgIF96ZXJvUG9zaXRpb24gPSB7XG4gIF9zdGFydDogMCxcbiAgZW5kVGltZTogX2VtcHR5RnVuYyxcbiAgdG90YWxEdXJhdGlvbjogX2VtcHR5RnVuY1xufSxcbiAgICBfcGFyc2VQb3NpdGlvbiA9IGZ1bmN0aW9uIF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24sIHBlcmNlbnRBbmltYXRpb24pIHtcbiAgdmFyIGxhYmVscyA9IGFuaW1hdGlvbi5sYWJlbHMsXG4gICAgICByZWNlbnQgPSBhbmltYXRpb24uX3JlY2VudCB8fCBfemVyb1Bvc2l0aW9uLFxuICAgICAgY2xpcHBlZER1cmF0aW9uID0gYW5pbWF0aW9uLmR1cmF0aW9uKCkgPj0gX2JpZ051bSA/IHJlY2VudC5lbmRUaW1lKGZhbHNlKSA6IGFuaW1hdGlvbi5fZHVyLFxuICAgICAgLy9pbiBjYXNlIHRoZXJlJ3MgYSBjaGlsZCB0aGF0IGluZmluaXRlbHkgcmVwZWF0cywgdXNlcnMgYWxtb3N0IG5ldmVyIGludGVuZCBmb3IgdGhlIGluc2VydGlvbiBwb2ludCBvZiBhIG5ldyBjaGlsZCB0byBiZSBiYXNlZCBvbiBhIFNVUEVSIGxvbmcgdmFsdWUgbGlrZSB0aGF0IHNvIHdlIGNsaXAgaXQgYW5kIGFzc3VtZSB0aGUgbW9zdCByZWNlbnRseS1hZGRlZCBjaGlsZCdzIGVuZFRpbWUgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgaSxcbiAgICAgIG9mZnNldCxcbiAgICAgIGlzUGVyY2VudDtcblxuICBpZiAoX2lzU3RyaW5nKHBvc2l0aW9uKSAmJiAoaXNOYU4ocG9zaXRpb24pIHx8IHBvc2l0aW9uIGluIGxhYmVscykpIHtcbiAgICAvL2lmIHRoZSBzdHJpbmcgaXMgYSBudW1iZXIgbGlrZSBcIjFcIiwgY2hlY2sgdG8gc2VlIGlmIHRoZXJlJ3MgYSBsYWJlbCB3aXRoIHRoYXQgbmFtZSwgb3RoZXJ3aXNlIGludGVycHJldCBpdCBhcyBhIG51bWJlciAoYWJzb2x1dGUgdmFsdWUpLlxuICAgIG9mZnNldCA9IHBvc2l0aW9uLmNoYXJBdCgwKTtcbiAgICBpc1BlcmNlbnQgPSBwb3NpdGlvbi5zdWJzdHIoLTEpID09PSBcIiVcIjtcbiAgICBpID0gcG9zaXRpb24uaW5kZXhPZihcIj1cIik7XG5cbiAgICBpZiAob2Zmc2V0ID09PSBcIjxcIiB8fCBvZmZzZXQgPT09IFwiPlwiKSB7XG4gICAgICBpID49IDAgJiYgKHBvc2l0aW9uID0gcG9zaXRpb24ucmVwbGFjZSgvPS8sIFwiXCIpKTtcbiAgICAgIHJldHVybiAob2Zmc2V0ID09PSBcIjxcIiA/IHJlY2VudC5fc3RhcnQgOiByZWNlbnQuZW5kVGltZShyZWNlbnQuX3JlcGVhdCA+PSAwKSkgKyAocGFyc2VGbG9hdChwb3NpdGlvbi5zdWJzdHIoMSkpIHx8IDApICogKGlzUGVyY2VudCA/IChpIDwgMCA/IHJlY2VudCA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKSAvIDEwMCA6IDEpO1xuICAgIH1cblxuICAgIGlmIChpIDwgMCkge1xuICAgICAgcG9zaXRpb24gaW4gbGFiZWxzIHx8IChsYWJlbHNbcG9zaXRpb25dID0gY2xpcHBlZER1cmF0aW9uKTtcbiAgICAgIHJldHVybiBsYWJlbHNbcG9zaXRpb25dO1xuICAgIH1cblxuICAgIG9mZnNldCA9IHBhcnNlRmxvYXQocG9zaXRpb24uY2hhckF0KGkgLSAxKSArIHBvc2l0aW9uLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGlzUGVyY2VudCAmJiBwZXJjZW50QW5pbWF0aW9uKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgLyAxMDAgKiAoX2lzQXJyYXkocGVyY2VudEFuaW1hdGlvbikgPyBwZXJjZW50QW5pbWF0aW9uWzBdIDogcGVyY2VudEFuaW1hdGlvbikudG90YWxEdXJhdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiBpID4gMSA/IF9wYXJzZVBvc2l0aW9uKGFuaW1hdGlvbiwgcG9zaXRpb24uc3Vic3RyKDAsIGkgLSAxKSwgcGVyY2VudEFuaW1hdGlvbikgKyBvZmZzZXQgOiBjbGlwcGVkRHVyYXRpb24gKyBvZmZzZXQ7XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb24gPT0gbnVsbCA/IGNsaXBwZWREdXJhdGlvbiA6ICtwb3NpdGlvbjtcbn0sXG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSA9IGZ1bmN0aW9uIF9jcmVhdGVUd2VlblR5cGUodHlwZSwgcGFyYW1zLCB0aW1lbGluZSkge1xuICB2YXIgaXNMZWdhY3kgPSBfaXNOdW1iZXIocGFyYW1zWzFdKSxcbiAgICAgIHZhcnNJbmRleCA9IChpc0xlZ2FjeSA/IDIgOiAxKSArICh0eXBlIDwgMiA/IDAgOiAxKSxcbiAgICAgIHZhcnMgPSBwYXJhbXNbdmFyc0luZGV4XSxcbiAgICAgIGlyVmFycyxcbiAgICAgIHBhcmVudDtcblxuICBpc0xlZ2FjeSAmJiAodmFycy5kdXJhdGlvbiA9IHBhcmFtc1sxXSk7XG4gIHZhcnMucGFyZW50ID0gdGltZWxpbmU7XG5cbiAgaWYgKHR5cGUpIHtcbiAgICBpclZhcnMgPSB2YXJzO1xuICAgIHBhcmVudCA9IHRpbWVsaW5lO1xuXG4gICAgd2hpbGUgKHBhcmVudCAmJiAhKFwiaW1tZWRpYXRlUmVuZGVyXCIgaW4gaXJWYXJzKSkge1xuICAgICAgLy8gaW5oZXJpdGFuY2UgaGFzbid0IGhhcHBlbmVkIHlldCwgYnV0IHNvbWVvbmUgbWF5IGhhdmUgc2V0IGEgZGVmYXVsdCBpbiBhbiBhbmNlc3RvciB0aW1lbGluZS4gV2UgY291bGQgZG8gdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlcikgYnV0IHRoYXQnZCBleGFjdCBhIHNsaWdodCBwZXJmb3JtYW5jZSBwZW5hbHR5IGJlY2F1c2UgX2luaGVyaXREZWZhdWx0cygpIGFsc28gcnVucyBpbiB0aGUgVHdlZW4gY29uc3RydWN0b3IuIFdlJ3JlIHBheWluZyBhIHNtYWxsIGtiIHByaWNlIGhlcmUgdG8gZ2FpbiBzcGVlZC5cbiAgICAgIGlyVmFycyA9IHBhcmVudC52YXJzLmRlZmF1bHRzIHx8IHt9O1xuICAgICAgcGFyZW50ID0gX2lzTm90RmFsc2UocGFyZW50LnZhcnMuaW5oZXJpdCkgJiYgcGFyZW50LnBhcmVudDtcbiAgICB9XG5cbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKGlyVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHR5cGUgPCAyID8gdmFycy5ydW5CYWNrd2FyZHMgPSAxIDogdmFycy5zdGFydEF0ID0gcGFyYW1zW3ZhcnNJbmRleCAtIDFdOyAvLyBcImZyb21cIiB2YXJzXG4gIH1cblxuICByZXR1cm4gbmV3IFR3ZWVuKHBhcmFtc1swXSwgdmFycywgcGFyYW1zW3ZhcnNJbmRleCArIDFdKTtcbn0sXG4gICAgX2NvbmRpdGlvbmFsUmV0dXJuID0gZnVuY3Rpb24gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jKSB7XG4gIHJldHVybiB2YWx1ZSB8fCB2YWx1ZSA9PT0gMCA/IGZ1bmModmFsdWUpIDogZnVuYztcbn0sXG4gICAgX2NsYW1wID0gZnVuY3Rpb24gX2NsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xufSxcbiAgICBnZXRVbml0ID0gZnVuY3Rpb24gZ2V0VW5pdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICB2YXIgdiA9IF91bml0RXhwLmV4ZWModmFsdWUpO1xuXG4gIHJldHVybiB2ID8gdmFsdWUuc3Vic3RyKHYuaW5kZXggKyB2WzBdLmxlbmd0aCkgOiBcIlwiO1xufSxcbiAgICAvLyBub3RlOiBwcm90ZWN0IGFnYWluc3QgcGFkZGVkIG51bWJlcnMgYXMgc3RyaW5ncywgbGlrZSBcIjEwMC4xMDBcIi4gVGhhdCBzaG91bGRuJ3QgcmV0dXJuIFwiMDBcIiBhcyB0aGUgdW5pdC4gSWYgaXQncyBudW1lcmljLCByZXR1cm4gbm8gdW5pdC5cbmNsYW1wID0gZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIF9jbGFtcChtaW4sIG1heCwgdik7XG4gIH0pO1xufSxcbiAgICBfc2xpY2UgPSBbXS5zbGljZSxcbiAgICBfaXNBcnJheUxpa2UgPSBmdW5jdGlvbiBfaXNBcnJheUxpa2UodmFsdWUsIG5vbkVtcHR5KSB7XG4gIHJldHVybiB2YWx1ZSAmJiBfaXNPYmplY3QodmFsdWUpICYmIFwibGVuZ3RoXCIgaW4gdmFsdWUgJiYgKCFub25FbXB0eSAmJiAhdmFsdWUubGVuZ3RoIHx8IHZhbHVlLmxlbmd0aCAtIDEgaW4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlWzBdKSkgJiYgIXZhbHVlLm5vZGVUeXBlICYmIHZhbHVlICE9PSBfd2luO1xufSxcbiAgICBfZmxhdHRlbiA9IGZ1bmN0aW9uIF9mbGF0dGVuKGFyLCBsZWF2ZVN0cmluZ3MsIGFjY3VtdWxhdG9yKSB7XG4gIGlmIChhY2N1bXVsYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgYWNjdW11bGF0b3IgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBhci5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBfYWNjdW11bGF0b3I7XG5cbiAgICByZXR1cm4gX2lzU3RyaW5nKHZhbHVlKSAmJiAhbGVhdmVTdHJpbmdzIHx8IF9pc0FycmF5TGlrZSh2YWx1ZSwgMSkgPyAoX2FjY3VtdWxhdG9yID0gYWNjdW11bGF0b3IpLnB1c2guYXBwbHkoX2FjY3VtdWxhdG9yLCB0b0FycmF5KHZhbHVlKSkgOiBhY2N1bXVsYXRvci5wdXNoKHZhbHVlKTtcbiAgfSkgfHwgYWNjdW11bGF0b3I7XG59LFxuICAgIC8vdGFrZXMgYW55IHZhbHVlIGFuZCByZXR1cm5zIGFuIGFycmF5LiBJZiBpdCdzIGEgc3RyaW5nIChhbmQgbGVhdmVTdHJpbmdzIGlzbid0IHRydWUpLCBpdCdsbCB1c2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgpIGFuZCBjb252ZXJ0IHRoYXQgdG8gYW4gYXJyYXkuIEl0J2xsIGFsc28gYWNjZXB0IGl0ZXJhYmxlcyBsaWtlIGpRdWVyeSBvYmplY3RzLlxudG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUsIHNjb3BlLCBsZWF2ZVN0cmluZ3MpIHtcbiAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyAmJiAoX2NvcmVJbml0dGVkIHx8ICFfd2FrZSgpKSA/IF9zbGljZS5jYWxsKChzY29wZSB8fCBfZG9jKS5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSwgMCkgOiBfaXNBcnJheSh2YWx1ZSkgPyBfZmxhdHRlbih2YWx1ZSwgbGVhdmVTdHJpbmdzKSA6IF9pc0FycmF5TGlrZSh2YWx1ZSkgPyBfc2xpY2UuY2FsbCh2YWx1ZSwgMCkgOiB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbn0sXG4gICAgc2VsZWN0b3IgPSBmdW5jdGlvbiBzZWxlY3Rvcih2YWx1ZSkge1xuICB2YWx1ZSA9IHRvQXJyYXkodmFsdWUpWzBdIHx8IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGVsID0gdmFsdWUuY3VycmVudCB8fCB2YWx1ZS5uYXRpdmVFbGVtZW50IHx8IHZhbHVlO1xuICAgIHJldHVybiB0b0FycmF5KHYsIGVsLnF1ZXJ5U2VsZWN0b3JBbGwgPyBlbCA6IGVsID09PSB2YWx1ZSA/IF93YXJuKFwiSW52YWxpZCBzY29wZVwiKSB8fCBfZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgOiB2YWx1ZSk7XG4gIH07XG59LFxuICAgIHNodWZmbGUgPSBmdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgcmV0dXJuIGEuc29ydChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC41IC0gTWF0aC5yYW5kb20oKTtcbiAgfSk7XG59LFxuICAgIC8vIGFsdGVybmF0aXZlIHRoYXQncyBhIGJpdCBmYXN0ZXIgYW5kIG1vcmUgcmVsaWFibHkgZGl2ZXJzZSBidXQgYmlnZ2VyOiAgIGZvciAobGV0IGosIHYsIGkgPSBhLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB2ID0gYVstLWldLCBhW2ldID0gYVtqXSwgYVtqXSA9IHYpOyByZXR1cm4gYTtcbi8vZm9yIGRpc3RyaWJ1dGluZyB2YWx1ZXMgYWNyb3NzIGFuIGFycmF5LiBDYW4gYWNjZXB0IGEgbnVtYmVyLCBhIGZ1bmN0aW9uIG9yIChtb3N0IGNvbW1vbmx5KSBhIGZ1bmN0aW9uIHdoaWNoIGNhbiBjb250YWluIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczoge2Jhc2UsIGFtb3VudCwgZnJvbSwgZWFzZSwgZ3JpZCwgYXhpcywgbGVuZ3RoLCBlYWNofS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZXhwZWN0cyB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6IGluZGV4LCB0YXJnZXQsIGFycmF5LiBSZWNvZ25pemVzIHRoZSBmb2xsb3dpbmdcbmRpc3RyaWJ1dGUgPSBmdW5jdGlvbiBkaXN0cmlidXRlKHYpIHtcbiAgaWYgKF9pc0Z1bmN0aW9uKHYpKSB7XG4gICAgcmV0dXJuIHY7XG4gIH1cblxuICB2YXIgdmFycyA9IF9pc09iamVjdCh2KSA/IHYgOiB7XG4gICAgZWFjaDogdlxuICB9LFxuICAgICAgLy9uOjEgaXMganVzdCB0byBpbmRpY2F0ZSB2IHdhcyBhIG51bWJlcjsgd2UgbGV2ZXJhZ2UgdGhhdCBsYXRlciB0byBzZXQgdiBhY2NvcmRpbmcgdG8gdGhlIGxlbmd0aCB3ZSBnZXQuIElmIGEgbnVtYmVyIGlzIHBhc3NlZCBpbiwgd2UgdHJlYXQgaXQgbGlrZSB0aGUgb2xkIHN0YWdnZXIgdmFsdWUgd2hlcmUgMC4xLCBmb3IgZXhhbXBsZSwgd291bGQgbWVhbiB0aGF0IHRoaW5ncyB3b3VsZCBiZSBkaXN0cmlidXRlZCB3aXRoIDAuMSBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiB0aGUgYXJyYXkgcmF0aGVyIHRoYW4gYSB0b3RhbCBcImFtb3VudFwiIHRoYXQncyBjaHVua2VkIG91dCBhbW9uZyB0aGVtIGFsbC5cbiAgZWFzZSA9IF9wYXJzZUVhc2UodmFycy5lYXNlKSxcbiAgICAgIGZyb20gPSB2YXJzLmZyb20gfHwgMCxcbiAgICAgIGJhc2UgPSBwYXJzZUZsb2F0KHZhcnMuYmFzZSkgfHwgMCxcbiAgICAgIGNhY2hlID0ge30sXG4gICAgICBpc0RlY2ltYWwgPSBmcm9tID4gMCAmJiBmcm9tIDwgMSxcbiAgICAgIHJhdGlvcyA9IGlzTmFOKGZyb20pIHx8IGlzRGVjaW1hbCxcbiAgICAgIGF4aXMgPSB2YXJzLmF4aXMsXG4gICAgICByYXRpb1ggPSBmcm9tLFxuICAgICAgcmF0aW9ZID0gZnJvbTtcblxuICBpZiAoX2lzU3RyaW5nKGZyb20pKSB7XG4gICAgcmF0aW9YID0gcmF0aW9ZID0ge1xuICAgICAgY2VudGVyOiAuNSxcbiAgICAgIGVkZ2VzOiAuNSxcbiAgICAgIGVuZDogMVxuICAgIH1bZnJvbV0gfHwgMDtcbiAgfSBlbHNlIGlmICghaXNEZWNpbWFsICYmIHJhdGlvcykge1xuICAgIHJhdGlvWCA9IGZyb21bMF07XG4gICAgcmF0aW9ZID0gZnJvbVsxXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaSwgdGFyZ2V0LCBhKSB7XG4gICAgdmFyIGwgPSAoYSB8fCB2YXJzKS5sZW5ndGgsXG4gICAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdLFxuICAgICAgICBvcmlnaW5YLFxuICAgICAgICBvcmlnaW5ZLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBkLFxuICAgICAgICBqLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbixcbiAgICAgICAgd3JhcEF0O1xuXG4gICAgaWYgKCFkaXN0YW5jZXMpIHtcbiAgICAgIHdyYXBBdCA9IHZhcnMuZ3JpZCA9PT0gXCJhdXRvXCIgPyAwIDogKHZhcnMuZ3JpZCB8fCBbMSwgX2JpZ051bV0pWzFdO1xuXG4gICAgICBpZiAoIXdyYXBBdCkge1xuICAgICAgICBtYXggPSAtX2JpZ051bTtcblxuICAgICAgICB3aGlsZSAobWF4IDwgKG1heCA9IGFbd3JhcEF0KytdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpICYmIHdyYXBBdCA8IGwpIHt9XG5cbiAgICAgICAgd3JhcEF0LS07XG4gICAgICB9XG5cbiAgICAgIGRpc3RhbmNlcyA9IGNhY2hlW2xdID0gW107XG4gICAgICBvcmlnaW5YID0gcmF0aW9zID8gTWF0aC5taW4od3JhcEF0LCBsKSAqIHJhdGlvWCAtIC41IDogZnJvbSAlIHdyYXBBdDtcbiAgICAgIG9yaWdpblkgPSByYXRpb3MgPyBsICogcmF0aW9ZIC8gd3JhcEF0IC0gLjUgOiBmcm9tIC8gd3JhcEF0IHwgMDtcbiAgICAgIG1heCA9IDA7XG4gICAgICBtaW4gPSBfYmlnTnVtO1xuXG4gICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgIHggPSBqICUgd3JhcEF0IC0gb3JpZ2luWDtcbiAgICAgICAgeSA9IG9yaWdpblkgLSAoaiAvIHdyYXBBdCB8IDApO1xuICAgICAgICBkaXN0YW5jZXNbal0gPSBkID0gIWF4aXMgPyBfc3FydCh4ICogeCArIHkgKiB5KSA6IE1hdGguYWJzKGF4aXMgPT09IFwieVwiID8geSA6IHgpO1xuICAgICAgICBkID4gbWF4ICYmIChtYXggPSBkKTtcbiAgICAgICAgZCA8IG1pbiAmJiAobWluID0gZCk7XG4gICAgICB9XG5cbiAgICAgIGZyb20gPT09IFwicmFuZG9tXCIgJiYgc2h1ZmZsZShkaXN0YW5jZXMpO1xuICAgICAgZGlzdGFuY2VzLm1heCA9IG1heCAtIG1pbjtcbiAgICAgIGRpc3RhbmNlcy5taW4gPSBtaW47XG4gICAgICBkaXN0YW5jZXMudiA9IGwgPSAocGFyc2VGbG9hdCh2YXJzLmFtb3VudCkgfHwgcGFyc2VGbG9hdCh2YXJzLmVhY2gpICogKHdyYXBBdCA+IGwgPyBsIC0gMSA6ICFheGlzID8gTWF0aC5tYXgod3JhcEF0LCBsIC8gd3JhcEF0KSA6IGF4aXMgPT09IFwieVwiID8gbCAvIHdyYXBBdCA6IHdyYXBBdCkgfHwgMCkgKiAoZnJvbSA9PT0gXCJlZGdlc1wiID8gLTEgOiAxKTtcbiAgICAgIGRpc3RhbmNlcy5iID0gbCA8IDAgPyBiYXNlIC0gbCA6IGJhc2U7XG4gICAgICBkaXN0YW5jZXMudSA9IGdldFVuaXQodmFycy5hbW91bnQgfHwgdmFycy5lYWNoKSB8fCAwOyAvL3VuaXRcblxuICAgICAgZWFzZSA9IGVhc2UgJiYgbCA8IDAgPyBfaW52ZXJ0RWFzZShlYXNlKSA6IGVhc2U7XG4gICAgfVxuXG4gICAgbCA9IChkaXN0YW5jZXNbaV0gLSBkaXN0YW5jZXMubWluKSAvIGRpc3RhbmNlcy5tYXggfHwgMDtcbiAgICByZXR1cm4gX3JvdW5kUHJlY2lzZShkaXN0YW5jZXMuYiArIChlYXNlID8gZWFzZShsKSA6IGwpICogZGlzdGFuY2VzLnYpICsgZGlzdGFuY2VzLnU7IC8vcm91bmQgaW4gb3JkZXIgdG8gd29yayBhcm91bmQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzXG4gIH07XG59LFxuICAgIF9yb3VuZE1vZGlmaWVyID0gZnVuY3Rpb24gX3JvdW5kTW9kaWZpZXIodikge1xuICAvL3Bhc3MgaW4gMC4xIGdldCBhIGZ1bmN0aW9uIHRoYXQnbGwgcm91bmQgdG8gdGhlIG5lYXJlc3QgdGVudGgsIG9yIDUgdG8gcm91bmQgdG8gdGhlIGNsb3Nlc3QgNSwgb3IgMC4wMDEgdG8gdGhlIGNsb3Nlc3QgMTAwMHRoLCBldGMuXG4gIHZhciBwID0gTWF0aC5wb3coMTAsICgodiArIFwiXCIpLnNwbGl0KFwiLlwiKVsxXSB8fCBcIlwiKS5sZW5ndGgpOyAvL3RvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIChsaWtlIDI0ICogMC4xID09IDIuNDAwMDAwMDAwMDAwMDAwNCksIHdlIGNob3Agb2ZmIGF0IGEgc3BlY2lmaWMgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIChtdWNoIGZhc3RlciB0aGFuIHRvRml4ZWQoKSlcblxuICByZXR1cm4gZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciBuID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KHJhdykgLyB2KSAqIHYgKiBwO1xuICAgIHJldHVybiAobiAtIG4gJSAxKSAvIHAgKyAoX2lzTnVtYmVyKHJhdykgPyAwIDogZ2V0VW5pdChyYXcpKTsgLy8gbiAtIG4gJSAxIHJlcGxhY2VzIE1hdGguZmxvb3IoKSBpbiBvcmRlciB0byBoYW5kbGUgbmVnYXRpdmUgdmFsdWVzIHByb3Blcmx5LiBGb3IgZXhhbXBsZSwgTWF0aC5mbG9vcigtMTUwLjAwMDAwMDAwMDAwMDAzKSBpcyAxNTEhXG4gIH07XG59LFxuICAgIHNuYXAgPSBmdW5jdGlvbiBzbmFwKHNuYXBUbywgdmFsdWUpIHtcbiAgdmFyIGlzQXJyYXkgPSBfaXNBcnJheShzbmFwVG8pLFxuICAgICAgcmFkaXVzLFxuICAgICAgaXMyRDtcblxuICBpZiAoIWlzQXJyYXkgJiYgX2lzT2JqZWN0KHNuYXBUbykpIHtcbiAgICByYWRpdXMgPSBpc0FycmF5ID0gc25hcFRvLnJhZGl1cyB8fCBfYmlnTnVtO1xuXG4gICAgaWYgKHNuYXBUby52YWx1ZXMpIHtcbiAgICAgIHNuYXBUbyA9IHRvQXJyYXkoc25hcFRvLnZhbHVlcyk7XG5cbiAgICAgIGlmIChpczJEID0gIV9pc051bWJlcihzbmFwVG9bMF0pKSB7XG4gICAgICAgIHJhZGl1cyAqPSByYWRpdXM7IC8vcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIHNvIHdlIGRvbid0IGhhdmUgdG8gTWF0aC5zcXJ0KCkgaW4gdGhlIGxvb3AuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNuYXBUbyA9IF9yb3VuZE1vZGlmaWVyKHNuYXBUby5pbmNyZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsICFpc0FycmF5ID8gX3JvdW5kTW9kaWZpZXIoc25hcFRvKSA6IF9pc0Z1bmN0aW9uKHNuYXBUbykgPyBmdW5jdGlvbiAocmF3KSB7XG4gICAgaXMyRCA9IHNuYXBUbyhyYXcpO1xuICAgIHJldHVybiBNYXRoLmFicyhpczJEIC0gcmF3KSA8PSByYWRpdXMgPyBpczJEIDogcmF3O1xuICB9IDogZnVuY3Rpb24gKHJhdykge1xuICAgIHZhciB4ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnggOiByYXcpLFxuICAgICAgICB5ID0gcGFyc2VGbG9hdChpczJEID8gcmF3LnkgOiAwKSxcbiAgICAgICAgbWluID0gX2JpZ051bSxcbiAgICAgICAgY2xvc2VzdCA9IDAsXG4gICAgICAgIGkgPSBzbmFwVG8ubGVuZ3RoLFxuICAgICAgICBkeCxcbiAgICAgICAgZHk7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoaXMyRCkge1xuICAgICAgICBkeCA9IHNuYXBUb1tpXS54IC0geDtcbiAgICAgICAgZHkgPSBzbmFwVG9baV0ueSAtIHk7XG4gICAgICAgIGR4ID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkeCA9IE1hdGguYWJzKHNuYXBUb1tpXSAtIHgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZHggPCBtaW4pIHtcbiAgICAgICAgbWluID0gZHg7XG4gICAgICAgIGNsb3Nlc3QgPSBpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsb3Nlc3QgPSAhcmFkaXVzIHx8IG1pbiA8PSByYWRpdXMgPyBzbmFwVG9bY2xvc2VzdF0gOiByYXc7XG4gICAgcmV0dXJuIGlzMkQgfHwgY2xvc2VzdCA9PT0gcmF3IHx8IF9pc051bWJlcihyYXcpID8gY2xvc2VzdCA6IGNsb3Nlc3QgKyBnZXRVbml0KHJhdyk7XG4gIH0pO1xufSxcbiAgICByYW5kb20gPSBmdW5jdGlvbiByYW5kb20obWluLCBtYXgsIHJvdW5kaW5nSW5jcmVtZW50LCByZXR1cm5GdW5jdGlvbikge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKF9pc0FycmF5KG1pbikgPyAhbWF4IDogcm91bmRpbmdJbmNyZW1lbnQgPT09IHRydWUgPyAhIShyb3VuZGluZ0luY3JlbWVudCA9IDApIDogIXJldHVybkZ1bmN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBtaW5bfn4oTWF0aC5yYW5kb20oKSAqIG1pbi5sZW5ndGgpXSA6IChyb3VuZGluZ0luY3JlbWVudCA9IHJvdW5kaW5nSW5jcmVtZW50IHx8IDFlLTUpICYmIChyZXR1cm5GdW5jdGlvbiA9IHJvdW5kaW5nSW5jcmVtZW50IDwgMSA/IE1hdGgucG93KDEwLCAocm91bmRpbmdJbmNyZW1lbnQgKyBcIlwiKS5sZW5ndGggLSAyKSA6IDEpICYmIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgobWluIC0gcm91bmRpbmdJbmNyZW1lbnQgLyAyICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyByb3VuZGluZ0luY3JlbWVudCAqIC45OSkpIC8gcm91bmRpbmdJbmNyZW1lbnQpICogcm91bmRpbmdJbmNyZW1lbnQgKiByZXR1cm5GdW5jdGlvbikgLyByZXR1cm5GdW5jdGlvbjtcbiAgfSk7XG59LFxuICAgIHBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3Rpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmN0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZShmdW5jdGlvbiAodiwgZikge1xuICAgICAgcmV0dXJuIGYodik7XG4gICAgfSwgdmFsdWUpO1xuICB9O1xufSxcbiAgICB1bml0aXplID0gZnVuY3Rpb24gdW5pdGl6ZShmdW5jLCB1bml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyhwYXJzZUZsb2F0KHZhbHVlKSkgKyAodW5pdCB8fCBnZXRVbml0KHZhbHVlKSk7XG4gIH07XG59LFxuICAgIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZShtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIG1hcFJhbmdlKG1pbiwgbWF4LCAwLCAxLCB2YWx1ZSk7XG59LFxuICAgIF93cmFwQXJyYXkgPSBmdW5jdGlvbiBfd3JhcEFycmF5KGEsIHdyYXBwZXIsIHZhbHVlKSB7XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBhW35+d3JhcHBlcihpbmRleCldO1xuICB9KTtcbn0sXG4gICAgd3JhcCA9IGZ1bmN0aW9uIHdyYXAobWluLCBtYXgsIHZhbHVlKSB7XG4gIC8vIE5PVEU6IHdyYXAoKSBDQU5OT1QgYmUgYW4gYXJyb3cgZnVuY3Rpb24hIEEgdmVyeSBvZGQgY29tcGlsaW5nIGJ1ZyBjYXVzZXMgcHJvYmxlbXMgKHVucmVsYXRlZCB0byBHU0FQKS5cbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwKDAsIG1pbi5sZW5ndGgpLCBtYXgpIDogX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHJhbmdlICsgKHZhbHVlIC0gbWluKSAlIHJhbmdlKSAlIHJhbmdlICsgbWluO1xuICB9KTtcbn0sXG4gICAgd3JhcFlveW8gPSBmdW5jdGlvbiB3cmFwWW95byhtaW4sIG1heCwgdmFsdWUpIHtcbiAgdmFyIHJhbmdlID0gbWF4IC0gbWluLFxuICAgICAgdG90YWwgPSByYW5nZSAqIDI7XG4gIHJldHVybiBfaXNBcnJheShtaW4pID8gX3dyYXBBcnJheShtaW4sIHdyYXBZb3lvKDAsIG1pbi5sZW5ndGggLSAxKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFsdWUgPSAodG90YWwgKyAodmFsdWUgLSBtaW4pICUgdG90YWwpICUgdG90YWwgfHwgMDtcbiAgICByZXR1cm4gbWluICsgKHZhbHVlID4gcmFuZ2UgPyB0b3RhbCAtIHZhbHVlIDogdmFsdWUpO1xuICB9KTtcbn0sXG4gICAgX3JlcGxhY2VSYW5kb20gPSBmdW5jdGlvbiBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkge1xuICAvL3JlcGxhY2VzIGFsbCBvY2N1cnJlbmNlcyBvZiByYW5kb20oLi4uKSBpbiBhIHN0cmluZyB3aXRoIHRoZSBjYWxjdWxhdGVkIHJhbmRvbSB2YWx1ZS4gY2FuIGJlIGEgcmFuZ2UgbGlrZSByYW5kb20oLTEwMCwgMTAwLCA1KSBvciBhbiBhcnJheSBsaWtlIHJhbmRvbShbMCwgMTAwLCA1MDBdKVxuICB2YXIgcHJldiA9IDAsXG4gICAgICBzID0gXCJcIixcbiAgICAgIGksXG4gICAgICBudW1zLFxuICAgICAgZW5kLFxuICAgICAgaXNBcnJheTtcblxuICB3aGlsZSAofihpID0gdmFsdWUuaW5kZXhPZihcInJhbmRvbShcIiwgcHJldikpKSB7XG4gICAgZW5kID0gdmFsdWUuaW5kZXhPZihcIilcIiwgaSk7XG4gICAgaXNBcnJheSA9IHZhbHVlLmNoYXJBdChpICsgNykgPT09IFwiW1wiO1xuICAgIG51bXMgPSB2YWx1ZS5zdWJzdHIoaSArIDcsIGVuZCAtIGkgLSA3KS5tYXRjaChpc0FycmF5ID8gX2RlbGltaXRlZFZhbHVlRXhwIDogX3N0cmljdE51bUV4cCk7XG4gICAgcyArPSB2YWx1ZS5zdWJzdHIocHJldiwgaSAtIHByZXYpICsgcmFuZG9tKGlzQXJyYXkgPyBudW1zIDogK251bXNbMF0sIGlzQXJyYXkgPyAwIDogK251bXNbMV0sICtudW1zWzJdIHx8IDFlLTUpO1xuICAgIHByZXYgPSBlbmQgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHMgKyB2YWx1ZS5zdWJzdHIocHJldiwgdmFsdWUubGVuZ3RoIC0gcHJldik7XG59LFxuICAgIG1hcFJhbmdlID0gZnVuY3Rpb24gbWFwUmFuZ2UoaW5NaW4sIGluTWF4LCBvdXRNaW4sIG91dE1heCwgdmFsdWUpIHtcbiAgdmFyIGluUmFuZ2UgPSBpbk1heCAtIGluTWluLFxuICAgICAgb3V0UmFuZ2UgPSBvdXRNYXggLSBvdXRNaW47XG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBvdXRNaW4gKyAoKHZhbHVlIC0gaW5NaW4pIC8gaW5SYW5nZSAqIG91dFJhbmdlIHx8IDApO1xuICB9KTtcbn0sXG4gICAgaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiBpbnRlcnBvbGF0ZShzdGFydCwgZW5kLCBwcm9ncmVzcywgbXV0YXRlKSB7XG4gIHZhciBmdW5jID0gaXNOYU4oc3RhcnQgKyBlbmQpID8gMCA6IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuICgxIC0gcCkgKiBzdGFydCArIHAgKiBlbmQ7XG4gIH07XG5cbiAgaWYgKCFmdW5jKSB7XG4gICAgdmFyIGlzU3RyaW5nID0gX2lzU3RyaW5nKHN0YXJ0KSxcbiAgICAgICAgbWFzdGVyID0ge30sXG4gICAgICAgIHAsXG4gICAgICAgIGksXG4gICAgICAgIGludGVycG9sYXRvcnMsXG4gICAgICAgIGwsXG4gICAgICAgIGlsO1xuXG4gICAgcHJvZ3Jlc3MgPT09IHRydWUgJiYgKG11dGF0ZSA9IDEpICYmIChwcm9ncmVzcyA9IG51bGwpO1xuXG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICBzdGFydCA9IHtcbiAgICAgICAgcDogc3RhcnRcbiAgICAgIH07XG4gICAgICBlbmQgPSB7XG4gICAgICAgIHA6IGVuZFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKF9pc0FycmF5KHN0YXJ0KSAmJiAhX2lzQXJyYXkoZW5kKSkge1xuICAgICAgaW50ZXJwb2xhdG9ycyA9IFtdO1xuICAgICAgbCA9IHN0YXJ0Lmxlbmd0aDtcbiAgICAgIGlsID0gbCAtIDI7XG5cbiAgICAgIGZvciAoaSA9IDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW50ZXJwb2xhdG9ycy5wdXNoKGludGVycG9sYXRlKHN0YXJ0W2kgLSAxXSwgc3RhcnRbaV0pKTsgLy9idWlsZCB0aGUgaW50ZXJwb2xhdG9ycyB1cCBmcm9udCBhcyBhIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB0aGF0IHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCBtYW55IHRpbWVzLCBpdCBjYW4ganVzdCByZXVzZSB0aGVtLlxuICAgICAgfVxuXG4gICAgICBsLS07XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcCAqPSBsO1xuICAgICAgICB2YXIgaSA9IE1hdGgubWluKGlsLCB+fnApO1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yc1tpXShwIC0gaSk7XG4gICAgICB9O1xuXG4gICAgICBwcm9ncmVzcyA9IGVuZDtcbiAgICB9IGVsc2UgaWYgKCFtdXRhdGUpIHtcbiAgICAgIHN0YXJ0ID0gX21lcmdlKF9pc0FycmF5KHN0YXJ0KSA/IFtdIDoge30sIHN0YXJ0KTtcbiAgICB9XG5cbiAgICBpZiAoIWludGVycG9sYXRvcnMpIHtcbiAgICAgIGZvciAocCBpbiBlbmQpIHtcbiAgICAgICAgX2FkZFByb3BUd2Vlbi5jYWxsKG1hc3Rlciwgc3RhcnQsIHAsIFwiZ2V0XCIsIGVuZFtwXSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmMgPSBmdW5jdGlvbiBmdW5jKHApIHtcbiAgICAgICAgcmV0dXJuIF9yZW5kZXJQcm9wVHdlZW5zKHAsIG1hc3RlcikgfHwgKGlzU3RyaW5nID8gc3RhcnQucCA6IHN0YXJ0KTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihwcm9ncmVzcywgZnVuYyk7XG59LFxuICAgIF9nZXRMYWJlbEluRGlyZWN0aW9uID0gZnVuY3Rpb24gX2dldExhYmVsSW5EaXJlY3Rpb24odGltZWxpbmUsIGZyb21UaW1lLCBiYWNrd2FyZCkge1xuICAvL3VzZWQgZm9yIG5leHRMYWJlbCgpIGFuZCBwcmV2aW91c0xhYmVsKClcbiAgdmFyIGxhYmVscyA9IHRpbWVsaW5lLmxhYmVscyxcbiAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICBwLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBsYWJlbDtcblxuICBmb3IgKHAgaW4gbGFiZWxzKSB7XG4gICAgZGlzdGFuY2UgPSBsYWJlbHNbcF0gLSBmcm9tVGltZTtcblxuICAgIGlmIChkaXN0YW5jZSA8IDAgPT09ICEhYmFja3dhcmQgJiYgZGlzdGFuY2UgJiYgbWluID4gKGRpc3RhbmNlID0gTWF0aC5hYnMoZGlzdGFuY2UpKSkge1xuICAgICAgbGFiZWwgPSBwO1xuICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufSxcbiAgICBfY2FsbGJhY2sgPSBmdW5jdGlvbiBfY2FsbGJhY2soYW5pbWF0aW9uLCB0eXBlLCBleGVjdXRlTGF6eUZpcnN0KSB7XG4gIHZhciB2ID0gYW5pbWF0aW9uLnZhcnMsXG4gICAgICBjYWxsYmFjayA9IHZbdHlwZV0sXG4gICAgICBwYXJhbXMsXG4gICAgICBzY29wZTtcblxuICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcGFyYW1zID0gdlt0eXBlICsgXCJQYXJhbXNcIl07XG4gIHNjb3BlID0gdi5jYWxsYmFja1Njb3BlIHx8IGFuaW1hdGlvbjtcbiAgZXhlY3V0ZUxhenlGaXJzdCAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pbiBjYXNlIHJlbmRlcmluZyBjYXVzZWQgYW55IHR3ZWVucyB0byBsYXp5LWluaXQsIHdlIHNob3VsZCByZW5kZXIgdGhlbSBiZWNhdXNlIHR5cGljYWxseSB3aGVuIGEgdGltZWxpbmUgZmluaXNoZXMsIHVzZXJzIGV4cGVjdCB0aGluZ3MgdG8gaGF2ZSByZW5kZXJlZCBmdWxseS4gSW1hZ2luZSBhbiBvblVwZGF0ZSBvbiBhIHRpbWVsaW5lIHRoYXQgcmVwb3J0cy9jaGVja3MgdHdlZW5lZCB2YWx1ZXMuXG5cbiAgcmV0dXJuIHBhcmFtcyA/IGNhbGxiYWNrLmFwcGx5KHNjb3BlLCBwYXJhbXMpIDogY2FsbGJhY2suY2FsbChzY29wZSk7XG59LFxuICAgIF9pbnRlcnJ1cHQgPSBmdW5jdGlvbiBfaW50ZXJydXB0KGFuaW1hdGlvbikge1xuICBfcmVtb3ZlRnJvbVBhcmVudChhbmltYXRpb24pO1xuXG4gIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyICYmIGFuaW1hdGlvbi5zY3JvbGxUcmlnZ2VyLmtpbGwoZmFsc2UpO1xuICBhbmltYXRpb24ucHJvZ3Jlc3MoKSA8IDEgJiYgX2NhbGxiYWNrKGFuaW1hdGlvbiwgXCJvbkludGVycnVwdFwiKTtcbiAgcmV0dXJuIGFuaW1hdGlvbjtcbn0sXG4gICAgX3F1aWNrVHdlZW4sXG4gICAgX2NyZWF0ZVBsdWdpbiA9IGZ1bmN0aW9uIF9jcmVhdGVQbHVnaW4oY29uZmlnKSB7XG4gIGNvbmZpZyA9ICFjb25maWcubmFtZSAmJiBjb25maWdbXCJkZWZhdWx0XCJdIHx8IGNvbmZpZzsgLy9VTUQgcGFja2FnaW5nIHdyYXBzIHRoaW5ncyBvZGRseSwgc28gZm9yIGV4YW1wbGUgTW90aW9uUGF0aEhlbHBlciBiZWNvbWVzIHtNb3Rpb25QYXRoSGVscGVyOk1vdGlvblBhdGhIZWxwZXIsIGRlZmF1bHQ6TW90aW9uUGF0aEhlbHBlcn0uXG5cbiAgdmFyIG5hbWUgPSBjb25maWcubmFtZSxcbiAgICAgIGlzRnVuYyA9IF9pc0Z1bmN0aW9uKGNvbmZpZyksXG4gICAgICBQbHVnaW4gPSBuYW1lICYmICFpc0Z1bmMgJiYgY29uZmlnLmluaXQgPyBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcHJvcHMgPSBbXTtcbiAgfSA6IGNvbmZpZyxcbiAgICAgIC8vaW4gY2FzZSBzb21lb25lIHBhc3NlcyBpbiBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHBsdWdpbiwgbGlrZSBDdXN0b21FYXNlXG4gIGluc3RhbmNlRGVmYXVsdHMgPSB7XG4gICAgaW5pdDogX2VtcHR5RnVuYyxcbiAgICByZW5kZXI6IF9yZW5kZXJQcm9wVHdlZW5zLFxuICAgIGFkZDogX2FkZFByb3BUd2VlbixcbiAgICBraWxsOiBfa2lsbFByb3BUd2VlbnNPZixcbiAgICBtb2RpZmllcjogX2FkZFBsdWdpbk1vZGlmaWVyLFxuICAgIHJhd1ZhcnM6IDBcbiAgfSxcbiAgICAgIHN0YXRpY3MgPSB7XG4gICAgdGFyZ2V0VGVzdDogMCxcbiAgICBnZXQ6IDAsXG4gICAgZ2V0U2V0dGVyOiBfZ2V0U2V0dGVyLFxuICAgIGFsaWFzZXM6IHt9LFxuICAgIHJlZ2lzdGVyOiAwXG4gIH07XG5cbiAgX3dha2UoKTtcblxuICBpZiAoY29uZmlnICE9PSBQbHVnaW4pIHtcbiAgICBpZiAoX3BsdWdpbnNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBfc2V0RGVmYXVsdHMoUGx1Z2luLCBfc2V0RGVmYXVsdHMoX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBpbnN0YW5jZURlZmF1bHRzKSwgc3RhdGljcykpOyAvL3N0YXRpYyBtZXRob2RzXG5cblxuICAgIF9tZXJnZShQbHVnaW4ucHJvdG90eXBlLCBfbWVyZ2UoaW5zdGFuY2VEZWZhdWx0cywgX2NvcHlFeGNsdWRpbmcoY29uZmlnLCBzdGF0aWNzKSkpOyAvL2luc3RhbmNlIG1ldGhvZHNcblxuXG4gICAgX3BsdWdpbnNbUGx1Z2luLnByb3AgPSBuYW1lXSA9IFBsdWdpbjtcblxuICAgIGlmIChjb25maWcudGFyZ2V0VGVzdCkge1xuICAgICAgX2hhcm5lc3NQbHVnaW5zLnB1c2goUGx1Z2luKTtcblxuICAgICAgX3Jlc2VydmVkUHJvcHNbbmFtZV0gPSAxO1xuICAgIH1cblxuICAgIG5hbWUgPSAobmFtZSA9PT0gXCJjc3NcIiA/IFwiQ1NTXCIgOiBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSkpICsgXCJQbHVnaW5cIjsgLy9mb3IgdGhlIGdsb2JhbCBuYW1lLiBcIm1vdGlvblBhdGhcIiBzaG91bGQgYmVjb21lIE1vdGlvblBhdGhQbHVnaW5cbiAgfVxuXG4gIF9hZGRHbG9iYWwobmFtZSwgUGx1Z2luKTtcblxuICBjb25maWcucmVnaXN0ZXIgJiYgY29uZmlnLnJlZ2lzdGVyKGdzYXAsIFBsdWdpbiwgUHJvcFR3ZWVuKTtcbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ09MT1JTXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fMjU1ID0gMjU1LFxuICAgIF9jb2xvckxvb2t1cCA9IHtcbiAgYXF1YTogWzAsIF8yNTUsIF8yNTVdLFxuICBsaW1lOiBbMCwgXzI1NSwgMF0sXG4gIHNpbHZlcjogWzE5MiwgMTkyLCAxOTJdLFxuICBibGFjazogWzAsIDAsIDBdLFxuICBtYXJvb246IFsxMjgsIDAsIDBdLFxuICB0ZWFsOiBbMCwgMTI4LCAxMjhdLFxuICBibHVlOiBbMCwgMCwgXzI1NV0sXG4gIG5hdnk6IFswLCAwLCAxMjhdLFxuICB3aGl0ZTogW18yNTUsIF8yNTUsIF8yNTVdLFxuICBvbGl2ZTogWzEyOCwgMTI4LCAwXSxcbiAgeWVsbG93OiBbXzI1NSwgXzI1NSwgMF0sXG4gIG9yYW5nZTogW18yNTUsIDE2NSwgMF0sXG4gIGdyYXk6IFsxMjgsIDEyOCwgMTI4XSxcbiAgcHVycGxlOiBbMTI4LCAwLCAxMjhdLFxuICBncmVlbjogWzAsIDEyOCwgMF0sXG4gIHJlZDogW18yNTUsIDAsIDBdLFxuICBwaW5rOiBbXzI1NSwgMTkyLCAyMDNdLFxuICBjeWFuOiBbMCwgXzI1NSwgXzI1NV0sXG4gIHRyYW5zcGFyZW50OiBbXzI1NSwgXzI1NSwgXzI1NSwgMF1cbn0sXG4gICAgX2h1ZSA9IGZ1bmN0aW9uIF9odWUoaCwgbTEsIG0yKSB7XG4gIGggPSBoIDwgMCA/IGggKyAxIDogaCA+IDEgPyBoIC0gMSA6IGg7XG4gIHJldHVybiAoaCAqIDYgPCAxID8gbTEgKyAobTIgLSBtMSkgKiBoICogNiA6IGggPCAuNSA/IG0yIDogaCAqIDMgPCAyID8gbTEgKyAobTIgLSBtMSkgKiAoMiAvIDMgLSBoKSAqIDYgOiBtMSkgKiBfMjU1ICsgLjUgfCAwO1xufSxcbiAgICBzcGxpdENvbG9yID0gZnVuY3Rpb24gc3BsaXRDb2xvcih2LCB0b0hTTCwgZm9yY2VBbHBoYSkge1xuICB2YXIgYSA9ICF2ID8gX2NvbG9yTG9va3VwLmJsYWNrIDogX2lzTnVtYmVyKHYpID8gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XSA6IDAsXG4gICAgICByLFxuICAgICAgZyxcbiAgICAgIGIsXG4gICAgICBoLFxuICAgICAgcyxcbiAgICAgIGwsXG4gICAgICBtYXgsXG4gICAgICBtaW4sXG4gICAgICBkLFxuICAgICAgd2FzSFNMO1xuXG4gIGlmICghYSkge1xuICAgIGlmICh2LnN1YnN0cigtMSkgPT09IFwiLFwiKSB7XG4gICAgICAvL3NvbWV0aW1lcyBhIHRyYWlsaW5nIGNvbW1hIGlzIGluY2x1ZGVkIGFuZCB3ZSBzaG91bGQgY2hvcCBpdCBvZmYgKHR5cGljYWxseSBmcm9tIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgdmFsdWVzIGxpa2UgYSB0ZXh0U2hhZG93OlwiMnB4IDJweCAycHggYmx1ZSwgNXB4IDVweCA1cHggcmdiKDI1NSwwLDApXCIgLSBpbiB0aGlzIGV4YW1wbGUgXCJibHVlLFwiIGhhcyBhIHRyYWlsaW5nIGNvbW1hLiBXZSBjb3VsZCBzdHJpcCBpdCBvdXQgaW5zaWRlIHBhcnNlQ29tcGxleCgpIGJ1dCB3ZSdkIG5lZWQgdG8gZG8gaXQgdG8gdGhlIGJlZ2lubmluZyBhbmQgZW5kaW5nIHZhbHVlcyBwbHVzIGl0IHdvdWxkbid0IHByb3ZpZGUgcHJvdGVjdGlvbiBmcm9tIG90aGVyIHBvdGVudGlhbCBzY2VuYXJpb3MgbGlrZSBpZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBzaW1pbGFyIHZhbHVlLlxuICAgICAgdiA9IHYuc3Vic3RyKDAsIHYubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgaWYgKF9jb2xvckxvb2t1cFt2XSkge1xuICAgICAgYSA9IF9jb2xvckxvb2t1cFt2XTtcbiAgICB9IGVsc2UgaWYgKHYuY2hhckF0KDApID09PSBcIiNcIikge1xuICAgICAgaWYgKHYubGVuZ3RoIDwgNikge1xuICAgICAgICAvL2ZvciBzaG9ydGhhbmQgbGlrZSAjOUYwIG9yICM5RjBGIChjb3VsZCBoYXZlIGFscGhhKVxuICAgICAgICByID0gdi5jaGFyQXQoMSk7XG4gICAgICAgIGcgPSB2LmNoYXJBdCgyKTtcbiAgICAgICAgYiA9IHYuY2hhckF0KDMpO1xuICAgICAgICB2ID0gXCIjXCIgKyByICsgciArIGcgKyBnICsgYiArIGIgKyAodi5sZW5ndGggPT09IDUgPyB2LmNoYXJBdCg0KSArIHYuY2hhckF0KDQpIDogXCJcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICh2Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAvLyBoZXggd2l0aCBhbHBoYSwgbGlrZSAjZmQ1ZTUzZmZcbiAgICAgICAgYSA9IHBhcnNlSW50KHYuc3Vic3RyKDEsIDYpLCAxNik7XG4gICAgICAgIHJldHVybiBbYSA+PiAxNiwgYSA+PiA4ICYgXzI1NSwgYSAmIF8yNTUsIHBhcnNlSW50KHYuc3Vic3RyKDcpLCAxNikgLyAyNTVdO1xuICAgICAgfVxuXG4gICAgICB2ID0gcGFyc2VJbnQodi5zdWJzdHIoMSksIDE2KTtcbiAgICAgIGEgPSBbdiA+PiAxNiwgdiA+PiA4ICYgXzI1NSwgdiAmIF8yNTVdO1xuICAgIH0gZWxzZSBpZiAodi5zdWJzdHIoMCwgMykgPT09IFwiaHNsXCIpIHtcbiAgICAgIGEgPSB3YXNIU0wgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApO1xuXG4gICAgICBpZiAoIXRvSFNMKSB7XG4gICAgICAgIGggPSArYVswXSAlIDM2MCAvIDM2MDtcbiAgICAgICAgcyA9ICthWzFdIC8gMTAwO1xuICAgICAgICBsID0gK2FbMl0gLyAxMDA7XG4gICAgICAgIGcgPSBsIDw9IC41ID8gbCAqIChzICsgMSkgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICByID0gbCAqIDIgLSBnO1xuICAgICAgICBhLmxlbmd0aCA+IDMgJiYgKGFbM10gKj0gMSk7IC8vY2FzdCBhcyBudW1iZXJcblxuICAgICAgICBhWzBdID0gX2h1ZShoICsgMSAvIDMsIHIsIGcpO1xuICAgICAgICBhWzFdID0gX2h1ZShoLCByLCBnKTtcbiAgICAgICAgYVsyXSA9IF9odWUoaCAtIDEgLyAzLCByLCBnKTtcbiAgICAgIH0gZWxzZSBpZiAofnYuaW5kZXhPZihcIj1cIikpIHtcbiAgICAgICAgLy9pZiByZWxhdGl2ZSB2YWx1ZXMgYXJlIGZvdW5kLCBqdXN0IHJldHVybiB0aGUgcmF3IHN0cmluZ3Mgd2l0aCB0aGUgcmVsYXRpdmUgcHJlZml4ZXMgaW4gcGxhY2UuXG4gICAgICAgIGEgPSB2Lm1hdGNoKF9udW1FeHApO1xuICAgICAgICBmb3JjZUFscGhhICYmIGEubGVuZ3RoIDwgNCAmJiAoYVszXSA9IDEpO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYSA9IHYubWF0Y2goX3N0cmljdE51bUV4cCkgfHwgX2NvbG9yTG9va3VwLnRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIGEgPSBhLm1hcChOdW1iZXIpO1xuICB9XG5cbiAgaWYgKHRvSFNMICYmICF3YXNIU0wpIHtcbiAgICByID0gYVswXSAvIF8yNTU7XG4gICAgZyA9IGFbMV0gLyBfMjU1O1xuICAgIGIgPSBhWzJdIC8gXzI1NTtcbiAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcbiAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgICBoID0gcyA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICBoID0gbWF4ID09PSByID8gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCkgOiBtYXggPT09IGcgPyAoYiAtIHIpIC8gZCArIDIgOiAociAtIGcpIC8gZCArIDQ7XG4gICAgICBoICo9IDYwO1xuICAgIH1cblxuICAgIGFbMF0gPSB+fihoICsgLjUpO1xuICAgIGFbMV0gPSB+fihzICogMTAwICsgLjUpO1xuICAgIGFbMl0gPSB+fihsICogMTAwICsgLjUpO1xuICB9XG5cbiAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgcmV0dXJuIGE7XG59LFxuICAgIF9jb2xvck9yZGVyRGF0YSA9IGZ1bmN0aW9uIF9jb2xvck9yZGVyRGF0YSh2KSB7XG4gIC8vIHN0cmlwcyBvdXQgdGhlIGNvbG9ycyBmcm9tIHRoZSBzdHJpbmcsIGZpbmRzIGFsbCB0aGUgbnVtZXJpYyBzbG90cyAod2l0aCB1bml0cykgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhvc2UuIFRoZSBBcnJheSBhbHNvIGhhcyBhIFwiY1wiIHByb3BlcnR5IHdoaWNoIGlzIGFuIEFycmF5IG9mIHRoZSBpbmRleCB2YWx1ZXMgd2hlcmUgdGhlIGNvbG9ycyBiZWxvbmcuIFRoaXMgaXMgdG8gaGVscCB3b3JrIGFyb3VuZCBpc3N1ZXMgd2hlcmUgdGhlcmUncyBhIG1pcy1tYXRjaGVkIG9yZGVyIG9mIGNvbG9yL251bWVyaWMgZGF0YSBsaWtlIGRyb3Atc2hhZG93KCNmMDAgMHB4IDFweCAycHgpIGFuZCBkcm9wLXNoYWRvdygweCAxcHggMnB4ICNmMDApLiBUaGlzIGlzIGJhc2ljYWxseSBhIGhlbHBlciBmdW5jdGlvbiB1c2VkIGluIF9mb3JtYXRDb2xvcnMoKVxuICB2YXIgdmFsdWVzID0gW10sXG4gICAgICBjID0gW10sXG4gICAgICBpID0gLTE7XG4gIHYuc3BsaXQoX2NvbG9yRXhwKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGEgPSB2Lm1hdGNoKF9udW1XaXRoVW5pdEV4cCkgfHwgW107XG4gICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCBhKTtcbiAgICBjLnB1c2goaSArPSBhLmxlbmd0aCArIDEpO1xuICB9KTtcbiAgdmFsdWVzLmMgPSBjO1xuICByZXR1cm4gdmFsdWVzO1xufSxcbiAgICBfZm9ybWF0Q29sb3JzID0gZnVuY3Rpb24gX2Zvcm1hdENvbG9ycyhzLCB0b0hTTCwgb3JkZXJNYXRjaERhdGEpIHtcbiAgdmFyIHJlc3VsdCA9IFwiXCIsXG4gICAgICBjb2xvcnMgPSAocyArIHJlc3VsdCkubWF0Y2goX2NvbG9yRXhwKSxcbiAgICAgIHR5cGUgPSB0b0hTTCA/IFwiaHNsYShcIiA6IFwicmdiYShcIixcbiAgICAgIGkgPSAwLFxuICAgICAgYyxcbiAgICAgIHNoZWxsLFxuICAgICAgZCxcbiAgICAgIGw7XG5cbiAgaWYgKCFjb2xvcnMpIHtcbiAgICByZXR1cm4gcztcbiAgfVxuXG4gIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgcmV0dXJuIChjb2xvciA9IHNwbGl0Q29sb3IoY29sb3IsIHRvSFNMLCAxKSkgJiYgdHlwZSArICh0b0hTTCA/IGNvbG9yWzBdICsgXCIsXCIgKyBjb2xvclsxXSArIFwiJSxcIiArIGNvbG9yWzJdICsgXCIlLFwiICsgY29sb3JbM10gOiBjb2xvci5qb2luKFwiLFwiKSkgKyBcIilcIjtcbiAgfSk7XG5cbiAgaWYgKG9yZGVyTWF0Y2hEYXRhKSB7XG4gICAgZCA9IF9jb2xvck9yZGVyRGF0YShzKTtcbiAgICBjID0gb3JkZXJNYXRjaERhdGEuYztcblxuICAgIGlmIChjLmpvaW4ocmVzdWx0KSAhPT0gZC5jLmpvaW4ocmVzdWx0KSkge1xuICAgICAgc2hlbGwgPSBzLnJlcGxhY2UoX2NvbG9yRXhwLCBcIjFcIikuc3BsaXQoX251bVdpdGhVbml0RXhwKTtcbiAgICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gc2hlbGxbaV0gKyAofmMuaW5kZXhPZihpKSA/IGNvbG9ycy5zaGlmdCgpIHx8IHR5cGUgKyBcIjAsMCwwLDApXCIgOiAoZC5sZW5ndGggPyBkIDogY29sb3JzLmxlbmd0aCA/IGNvbG9ycyA6IG9yZGVyTWF0Y2hEYXRhKS5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNoZWxsKSB7XG4gICAgc2hlbGwgPSBzLnNwbGl0KF9jb2xvckV4cCk7XG4gICAgbCA9IHNoZWxsLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgY29sb3JzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQgKyBzaGVsbFtsXTtcbn0sXG4gICAgX2NvbG9yRXhwID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcyA9IFwiKD86XFxcXGIoPzooPzpyZ2J8cmdiYXxoc2x8aHNsYSlcXFxcKC4rP1xcXFwpKXxcXFxcQiMoPzpbMC05YS1mXXszLDR9KXsxLDJ9XFxcXGJcIixcbiAgICAgIC8vd2UnbGwgZHluYW1pY2FsbHkgYnVpbGQgdGhpcyBSZWd1bGFyIEV4cHJlc3Npb24gdG8gY29uc2VydmUgZmlsZSBzaXplLiBBZnRlciBidWlsZGluZyBpdCwgaXQgd2lsbCBiZSBhYmxlIHRvIGZpbmQgcmdiKCksIHJnYmEoKSwgIyAoaGV4YWRlY2ltYWwpLCBhbmQgbmFtZWQgY29sb3IgdmFsdWVzIGxpa2UgcmVkLCBibHVlLCBwdXJwbGUsIGV0Yy4sXG4gIHA7XG5cbiAgZm9yIChwIGluIF9jb2xvckxvb2t1cCkge1xuICAgIHMgKz0gXCJ8XCIgKyBwICsgXCJcXFxcYlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocyArIFwiKVwiLCBcImdpXCIpO1xufSgpLFxuICAgIF9oc2xFeHAgPSAvaHNsW2FdP1xcKC8sXG4gICAgX2NvbG9yU3RyaW5nRmlsdGVyID0gZnVuY3Rpb24gX2NvbG9yU3RyaW5nRmlsdGVyKGEpIHtcbiAgdmFyIGNvbWJpbmVkID0gYS5qb2luKFwiIFwiKSxcbiAgICAgIHRvSFNMO1xuICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICBpZiAoX2NvbG9yRXhwLnRlc3QoY29tYmluZWQpKSB7XG4gICAgdG9IU0wgPSBfaHNsRXhwLnRlc3QoY29tYmluZWQpO1xuICAgIGFbMV0gPSBfZm9ybWF0Q29sb3JzKGFbMV0sIHRvSFNMKTtcbiAgICBhWzBdID0gX2Zvcm1hdENvbG9ycyhhWzBdLCB0b0hTTCwgX2NvbG9yT3JkZXJEYXRhKGFbMV0pKTsgLy8gbWFrZSBzdXJlIHRoZSBvcmRlciBvZiBudW1iZXJzL2NvbG9ycyBtYXRjaCB3aXRoIHRoZSBFTkQgdmFsdWUuXG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSxcblxuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSUNLRVJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbl90aWNrZXJBY3RpdmUsXG4gICAgX3RpY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9nZXRUaW1lID0gRGF0ZS5ub3csXG4gICAgICBfbGFnVGhyZXNob2xkID0gNTAwLFxuICAgICAgX2FkanVzdGVkTGFnID0gMzMsXG4gICAgICBfc3RhcnRUaW1lID0gX2dldFRpbWUoKSxcbiAgICAgIF9sYXN0VXBkYXRlID0gX3N0YXJ0VGltZSxcbiAgICAgIF9nYXAgPSAxMDAwIC8gMjQwLFxuICAgICAgX25leHRUaW1lID0gX2dhcCxcbiAgICAgIF9saXN0ZW5lcnMgPSBbXSxcbiAgICAgIF9pZCxcbiAgICAgIF9yZXEsXG4gICAgICBfcmFmLFxuICAgICAgX3NlbGYsXG4gICAgICBfZGVsdGEsXG4gICAgICBfaSxcbiAgICAgIF90aWNrID0gZnVuY3Rpb24gX3RpY2sodikge1xuICAgIHZhciBlbGFwc2VkID0gX2dldFRpbWUoKSAtIF9sYXN0VXBkYXRlLFxuICAgICAgICBtYW51YWwgPSB2ID09PSB0cnVlLFxuICAgICAgICBvdmVybGFwLFxuICAgICAgICBkaXNwYXRjaCxcbiAgICAgICAgdGltZSxcbiAgICAgICAgZnJhbWU7XG5cbiAgICBlbGFwc2VkID4gX2xhZ1RocmVzaG9sZCAmJiAoX3N0YXJ0VGltZSArPSBlbGFwc2VkIC0gX2FkanVzdGVkTGFnKTtcbiAgICBfbGFzdFVwZGF0ZSArPSBlbGFwc2VkO1xuICAgIHRpbWUgPSBfbGFzdFVwZGF0ZSAtIF9zdGFydFRpbWU7XG4gICAgb3ZlcmxhcCA9IHRpbWUgLSBfbmV4dFRpbWU7XG5cbiAgICBpZiAob3ZlcmxhcCA+IDAgfHwgbWFudWFsKSB7XG4gICAgICBmcmFtZSA9ICsrX3NlbGYuZnJhbWU7XG4gICAgICBfZGVsdGEgPSB0aW1lIC0gX3NlbGYudGltZSAqIDEwMDA7XG4gICAgICBfc2VsZi50aW1lID0gdGltZSA9IHRpbWUgLyAxMDAwO1xuICAgICAgX25leHRUaW1lICs9IG92ZXJsYXAgKyAob3ZlcmxhcCA+PSBfZ2FwID8gNCA6IF9nYXAgLSBvdmVybGFwKTtcbiAgICAgIGRpc3BhdGNoID0gMTtcbiAgICB9XG5cbiAgICBtYW51YWwgfHwgKF9pZCA9IF9yZXEoX3RpY2spKTsgLy9tYWtlIHN1cmUgdGhlIHJlcXVlc3QgaXMgbWFkZSBiZWZvcmUgd2UgZGlzcGF0Y2ggdGhlIFwidGlja1wiIGV2ZW50IHNvIHRoYXQgdGltaW5nIGlzIG1haW50YWluZWQuIE90aGVyd2lzZSwgaWYgcHJvY2Vzc2luZyB0aGUgXCJ0aWNrXCIgcmVxdWlyZXMgYSBidW5jaCBvZiB0aW1lIChsaWtlIDE1bXMpIGFuZCB3ZSdyZSB1c2luZyBhIHNldFRpbWVvdXQoKSB0aGF0J3MgYmFzZWQgb24gMTYuN21zLCBpdCdkIHRlY2huaWNhbGx5IHRha2UgMzEuN21zIGJldHdlZW4gZnJhbWVzIG90aGVyd2lzZS5cblxuICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgZm9yIChfaSA9IDA7IF9pIDwgX2xpc3RlbmVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgLy8gdXNlIF9pIGFuZCBjaGVjayBfbGlzdGVuZXJzLmxlbmd0aCBpbnN0ZWFkIG9mIGEgdmFyaWFibGUgYmVjYXVzZSBhIGxpc3RlbmVyIGNvdWxkIGdldCByZW1vdmVkIGR1cmluZyB0aGUgbG9vcCwgYW5kIGlmIHRoYXQgaGFwcGVucyB0byBhbiBlbGVtZW50IGxlc3MgdGhhbiB0aGUgY3VycmVudCBpbmRleCwgaXQnZCB0aHJvdyB0aGluZ3Mgb2ZmIGluIHRoZSBsb29wLlxuICAgICAgICBfbGlzdGVuZXJzW19pXSh0aW1lLCBfZGVsdGEsIGZyYW1lLCB2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3NlbGYgPSB7XG4gICAgdGltZTogMCxcbiAgICBmcmFtZTogMCxcbiAgICB0aWNrOiBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgX3RpY2sodHJ1ZSk7XG4gICAgfSxcbiAgICBkZWx0YVJhdGlvOiBmdW5jdGlvbiBkZWx0YVJhdGlvKGZwcykge1xuICAgICAgcmV0dXJuIF9kZWx0YSAvICgxMDAwIC8gKGZwcyB8fCA2MCkpO1xuICAgIH0sXG4gICAgd2FrZTogZnVuY3Rpb24gd2FrZSgpIHtcbiAgICAgIGlmIChfY29yZVJlYWR5KSB7XG4gICAgICAgIGlmICghX2NvcmVJbml0dGVkICYmIF93aW5kb3dFeGlzdHMoKSkge1xuICAgICAgICAgIF93aW4gPSBfY29yZUluaXR0ZWQgPSB3aW5kb3c7XG4gICAgICAgICAgX2RvYyA9IF93aW4uZG9jdW1lbnQgfHwge307XG4gICAgICAgICAgX2dsb2JhbHMuZ3NhcCA9IGdzYXA7XG4gICAgICAgICAgKF93aW4uZ3NhcFZlcnNpb25zIHx8IChfd2luLmdzYXBWZXJzaW9ucyA9IFtdKSkucHVzaChnc2FwLnZlcnNpb24pO1xuXG4gICAgICAgICAgX2luc3RhbGwoX2luc3RhbGxTY29wZSB8fCBfd2luLkdyZWVuU29ja0dsb2JhbHMgfHwgIV93aW4uZ3NhcCAmJiBfd2luIHx8IHt9KTtcblxuICAgICAgICAgIF9yYWYgPSBfd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pZCAmJiBfc2VsZi5zbGVlcCgpO1xuXG4gICAgICAgIF9yZXEgPSBfcmFmIHx8IGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZiwgX25leHRUaW1lIC0gX3NlbGYudGltZSAqIDEwMDAgKyAxIHwgMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RpY2tlckFjdGl2ZSA9IDE7XG5cbiAgICAgICAgX3RpY2soMik7XG4gICAgICB9XG4gICAgfSxcbiAgICBzbGVlcDogZnVuY3Rpb24gc2xlZXAoKSB7XG4gICAgICAoX3JhZiA/IF93aW4uY2FuY2VsQW5pbWF0aW9uRnJhbWUgOiBjbGVhclRpbWVvdXQpKF9pZCk7XG4gICAgICBfdGlja2VyQWN0aXZlID0gMDtcbiAgICAgIF9yZXEgPSBfZW1wdHlGdW5jO1xuICAgIH0sXG4gICAgbGFnU21vb3RoaW5nOiBmdW5jdGlvbiBsYWdTbW9vdGhpbmcodGhyZXNob2xkLCBhZGp1c3RlZExhZykge1xuICAgICAgX2xhZ1RocmVzaG9sZCA9IHRocmVzaG9sZCB8fCAxIC8gX3RpbnlOdW07IC8vemVybyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzaWNhbGx5IHVubGltaXRlZFxuXG4gICAgICBfYWRqdXN0ZWRMYWcgPSBNYXRoLm1pbihhZGp1c3RlZExhZywgX2xhZ1RocmVzaG9sZCwgMCk7XG4gICAgfSxcbiAgICBmcHM6IGZ1bmN0aW9uIGZwcyhfZnBzKSB7XG4gICAgICBfZ2FwID0gMTAwMCAvIChfZnBzIHx8IDI0MCk7XG4gICAgICBfbmV4dFRpbWUgPSBfc2VsZi50aW1lICogMTAwMCArIF9nYXA7XG4gICAgfSxcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChjYWxsYmFjaykge1xuICAgICAgX2xpc3RlbmVycy5pbmRleE9mKGNhbGxiYWNrKSA8IDAgJiYgX2xpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgX3dha2UoKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIH4oaSA9IF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykpICYmIF9saXN0ZW5lcnMuc3BsaWNlKGksIDEpICYmIF9pID49IGkgJiYgX2ktLTtcbiAgICB9LFxuICAgIF9saXN0ZW5lcnM6IF9saXN0ZW5lcnNcbiAgfTtcbiAgcmV0dXJuIF9zZWxmO1xufSgpLFxuICAgIF93YWtlID0gZnVuY3Rpb24gX3dha2UoKSB7XG4gIHJldHVybiAhX3RpY2tlckFjdGl2ZSAmJiBfdGlja2VyLndha2UoKTtcbn0sXG4gICAgLy9hbHNvIGVuc3VyZXMgdGhlIGNvcmUgY2xhc3NlcyBhcmUgaW5pdGlhbGl6ZWQuXG5cbi8qXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogRUFTSU5HXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5fZWFzZU1hcCA9IHt9LFxuICAgIF9jdXN0b21FYXNlRXhwID0gL15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sXG4gICAgX3F1b3Rlc0V4cCA9IC9bXCInXS9nLFxuICAgIF9wYXJzZU9iamVjdEluU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlT2JqZWN0SW5TdHJpbmcodmFsdWUpIHtcbiAgLy90YWtlcyBhIHN0cmluZyBsaWtlIFwie3dpZ2dsZXM6MTAsIHR5cGU6YW50aWNpcGF0ZX0pXCIgYW5kIHR1cm5zIGl0IGludG8gYSByZWFsIG9iamVjdC4gTm90aWNlIGl0IGVuZHMgaW4gXCIpXCIgYW5kIGluY2x1ZGVzIHRoZSB7fSB3cmFwcGVycy4gVGhpcyBpcyBiZWNhdXNlIHdlIG9ubHkgdXNlIHRoaXMgZnVuY3Rpb24gZm9yIHBhcnNpbmcgZWFzZSBjb25maWdzIGFuZCBwcmlvcml0aXplZCBvcHRpbWl6YXRpb24gcmF0aGVyIHRoYW4gcmV1c2FiaWxpdHkuXG4gIHZhciBvYmogPSB7fSxcbiAgICAgIHNwbGl0ID0gdmFsdWUuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDMpLnNwbGl0KFwiOlwiKSxcbiAgICAgIGtleSA9IHNwbGl0WzBdLFxuICAgICAgaSA9IDEsXG4gICAgICBsID0gc3BsaXQubGVuZ3RoLFxuICAgICAgaW5kZXgsXG4gICAgICB2YWwsXG4gICAgICBwYXJzZWRWYWw7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICB2YWwgPSBzcGxpdFtpXTtcbiAgICBpbmRleCA9IGkgIT09IGwgLSAxID8gdmFsLmxhc3RJbmRleE9mKFwiLFwiKSA6IHZhbC5sZW5ndGg7XG4gICAgcGFyc2VkVmFsID0gdmFsLnN1YnN0cigwLCBpbmRleCk7XG4gICAgb2JqW2tleV0gPSBpc05hTihwYXJzZWRWYWwpID8gcGFyc2VkVmFsLnJlcGxhY2UoX3F1b3Rlc0V4cCwgXCJcIikudHJpbSgpIDogK3BhcnNlZFZhbDtcbiAgICBrZXkgPSB2YWwuc3Vic3RyKGluZGV4ICsgMSkudHJpbSgpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0sXG4gICAgX3ZhbHVlSW5QYXJlbnRoZXNlcyA9IGZ1bmN0aW9uIF92YWx1ZUluUGFyZW50aGVzZXModmFsdWUpIHtcbiAgdmFyIG9wZW4gPSB2YWx1ZS5pbmRleE9mKFwiKFwiKSArIDEsXG4gICAgICBjbG9zZSA9IHZhbHVlLmluZGV4T2YoXCIpXCIpLFxuICAgICAgbmVzdGVkID0gdmFsdWUuaW5kZXhPZihcIihcIiwgb3Blbik7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcob3Blbiwgfm5lc3RlZCAmJiBuZXN0ZWQgPCBjbG9zZSA/IHZhbHVlLmluZGV4T2YoXCIpXCIsIGNsb3NlICsgMSkgOiBjbG9zZSk7XG59LFxuICAgIF9jb25maWdFYXNlRnJvbVN0cmluZyA9IGZ1bmN0aW9uIF9jb25maWdFYXNlRnJvbVN0cmluZyhuYW1lKSB7XG4gIC8vbmFtZSBjYW4gYmUgYSBzdHJpbmcgbGlrZSBcImVsYXN0aWMub3V0KDEsMC41KVwiLCBhbmQgcGFzcyBpbiBfZWFzZU1hcCBhcyBvYmogYW5kIGl0J2xsIHBhcnNlIGl0IG91dCBhbmQgY2FsbCB0aGUgYWN0dWFsIGZ1bmN0aW9uIGxpa2UgX2Vhc2VNYXAuRWxhc3RpYy5lYXNlT3V0LmNvbmZpZygxLDAuNSkuIEl0IHdpbGwgYWxzbyBwYXJzZSBjdXN0b20gZWFzZSBzdHJpbmdzIGFzIGxvbmcgYXMgQ3VzdG9tRWFzZSBpcyBsb2FkZWQgYW5kIHJlZ2lzdGVyZWQgKGludGVybmFsbHkgYXMgX2Vhc2VNYXAuX0NFKS5cbiAgdmFyIHNwbGl0ID0gKG5hbWUgKyBcIlwiKS5zcGxpdChcIihcIiksXG4gICAgICBlYXNlID0gX2Vhc2VNYXBbc3BsaXRbMF1dO1xuICByZXR1cm4gZWFzZSAmJiBzcGxpdC5sZW5ndGggPiAxICYmIGVhc2UuY29uZmlnID8gZWFzZS5jb25maWcuYXBwbHkobnVsbCwgfm5hbWUuaW5kZXhPZihcIntcIikgPyBbX3BhcnNlT2JqZWN0SW5TdHJpbmcoc3BsaXRbMV0pXSA6IF92YWx1ZUluUGFyZW50aGVzZXMobmFtZSkuc3BsaXQoXCIsXCIpLm1hcChfbnVtZXJpY0lmUG9zc2libGUpKSA6IF9lYXNlTWFwLl9DRSAmJiBfY3VzdG9tRWFzZUV4cC50ZXN0KG5hbWUpID8gX2Vhc2VNYXAuX0NFKFwiXCIsIG5hbWUpIDogZWFzZTtcbn0sXG4gICAgX2ludmVydEVhc2UgPSBmdW5jdGlvbiBfaW52ZXJ0RWFzZShlYXNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZSgxIC0gcCk7XG4gIH07XG59LFxuICAgIC8vIGFsbG93IHlveW9FYXNlIHRvIGJlIHNldCBpbiBjaGlsZHJlbiBhbmQgaGF2ZSB0aG9zZSBhZmZlY3RlZCB3aGVuIHRoZSBwYXJlbnQvYW5jZXN0b3IgdGltZWxpbmUgeW95b3MuXG5fcHJvcGFnYXRlWW95b0Vhc2UgPSBmdW5jdGlvbiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95bykge1xuICB2YXIgY2hpbGQgPSB0aW1lbGluZS5fZmlyc3QsXG4gICAgICBlYXNlO1xuXG4gIHdoaWxlIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFRpbWVsaW5lKSB7XG4gICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQsIGlzWW95byk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC52YXJzLnlveW9FYXNlICYmICghY2hpbGQuX3lveW8gfHwgIWNoaWxkLl9yZXBlYXQpICYmIGNoaWxkLl95b3lvICE9PSBpc1lveW8pIHtcbiAgICAgIGlmIChjaGlsZC50aW1lbGluZSkge1xuICAgICAgICBfcHJvcGFnYXRlWW95b0Vhc2UoY2hpbGQudGltZWxpbmUsIGlzWW95byk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlYXNlID0gY2hpbGQuX2Vhc2U7XG4gICAgICAgIGNoaWxkLl9lYXNlID0gY2hpbGQuX3lFYXNlO1xuICAgICAgICBjaGlsZC5feUVhc2UgPSBlYXNlO1xuICAgICAgICBjaGlsZC5feW95byA9IGlzWW95bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICB9XG59LFxuICAgIF9wYXJzZUVhc2UgPSBmdW5jdGlvbiBfcGFyc2VFYXNlKGVhc2UsIGRlZmF1bHRFYXNlKSB7XG4gIHJldHVybiAhZWFzZSA/IGRlZmF1bHRFYXNlIDogKF9pc0Z1bmN0aW9uKGVhc2UpID8gZWFzZSA6IF9lYXNlTWFwW2Vhc2VdIHx8IF9jb25maWdFYXNlRnJvbVN0cmluZyhlYXNlKSkgfHwgZGVmYXVsdEVhc2U7XG59LFxuICAgIF9pbnNlcnRFYXNlID0gZnVuY3Rpb24gX2luc2VydEVhc2UobmFtZXMsIGVhc2VJbiwgZWFzZU91dCwgZWFzZUluT3V0KSB7XG4gIGlmIChlYXNlT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgICByZXR1cm4gMSAtIGVhc2VJbigxIC0gcCk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChlYXNlSW5PdXQgPT09IHZvaWQgMCkge1xuICAgIGVhc2VJbk91dCA9IGZ1bmN0aW9uIGVhc2VJbk91dChwKSB7XG4gICAgICByZXR1cm4gcCA8IC41ID8gZWFzZUluKHAgKiAyKSAvIDIgOiAxIC0gZWFzZUluKCgxIC0gcCkgKiAyKSAvIDI7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBlYXNlID0ge1xuICAgIGVhc2VJbjogZWFzZUluLFxuICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgZWFzZUluT3V0OiBlYXNlSW5PdXRcbiAgfSxcbiAgICAgIGxvd2VyY2FzZU5hbWU7XG5cbiAgX2ZvckVhY2hOYW1lKG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX2dsb2JhbHNbbmFtZV0gPSBlYXNlO1xuICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCldID0gZWFzZU91dDtcblxuICAgIGZvciAodmFyIHAgaW4gZWFzZSkge1xuICAgICAgX2Vhc2VNYXBbbG93ZXJjYXNlTmFtZSArIChwID09PSBcImVhc2VJblwiID8gXCIuaW5cIiA6IHAgPT09IFwiZWFzZU91dFwiID8gXCIub3V0XCIgOiBcIi5pbk91dFwiKV0gPSBfZWFzZU1hcFtuYW1lICsgXCIuXCIgKyBwXSA9IGVhc2VbcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2Vhc2VJbk91dEZyb21PdXQgPSBmdW5jdGlvbiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwIDwgLjUgPyAoMSAtIGVhc2VPdXQoMSAtIHAgKiAyKSkgLyAyIDogLjUgKyBlYXNlT3V0KChwIC0gLjUpICogMikgLyAyO1xuICB9O1xufSxcbiAgICBfY29uZmlnRWxhc3RpYyA9IGZ1bmN0aW9uIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gIHZhciBwMSA9IGFtcGxpdHVkZSA+PSAxID8gYW1wbGl0dWRlIDogMSxcbiAgICAgIC8vbm90ZTogaWYgYW1wbGl0dWRlIGlzIDwgMSwgd2Ugc2ltcGx5IGFkanVzdCB0aGUgcGVyaW9kIGZvciBhIG1vcmUgbmF0dXJhbCBmZWVsLiBPdGhlcndpc2UgdGhlIG1hdGggZG9lc24ndCB3b3JrIHJpZ2h0IGFuZCB0aGUgY3VydmUgc3RhcnRzIGF0IDEuXG4gIHAyID0gKHBlcmlvZCB8fCAodHlwZSA/IC4zIDogLjQ1KSkgLyAoYW1wbGl0dWRlIDwgMSA/IGFtcGxpdHVkZSA6IDEpLFxuICAgICAgcDMgPSBwMiAvIF8yUEkgKiAoTWF0aC5hc2luKDEgLyBwMSkgfHwgMCksXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPT09IDEgPyAxIDogcDEgKiBNYXRoLnBvdygyLCAtMTAgKiBwKSAqIF9zaW4oKHAgLSBwMykgKiBwMikgKyAxO1xuICB9LFxuICAgICAgZWFzZSA9IHR5cGUgPT09IFwib3V0XCIgPyBlYXNlT3V0IDogdHlwZSA9PT0gXCJpblwiID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9IDogX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCk7XG5cbiAgcDIgPSBfMlBJIC8gcDI7IC8vcHJlY2FsY3VsYXRlIHRvIG9wdGltaXplXG5cbiAgZWFzZS5jb25maWcgPSBmdW5jdGlvbiAoYW1wbGl0dWRlLCBwZXJpb2QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0VsYXN0aWModHlwZSwgYW1wbGl0dWRlLCBwZXJpb2QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufSxcbiAgICBfY29uZmlnQmFjayA9IGZ1bmN0aW9uIF9jb25maWdCYWNrKHR5cGUsIG92ZXJzaG9vdCkge1xuICBpZiAob3ZlcnNob290ID09PSB2b2lkIDApIHtcbiAgICBvdmVyc2hvb3QgPSAxLjcwMTU4O1xuICB9XG5cbiAgdmFyIGVhc2VPdXQgPSBmdW5jdGlvbiBlYXNlT3V0KHApIHtcbiAgICByZXR1cm4gcCA/IC0tcCAqIHAgKiAoKG92ZXJzaG9vdCArIDEpICogcCArIG92ZXJzaG9vdCkgKyAxIDogMDtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKG92ZXJzaG9vdCkge1xuICAgIHJldHVybiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpO1xuICB9O1xuXG4gIHJldHVybiBlYXNlO1xufTsgLy8gYSBjaGVhcGVyIChrYiBhbmQgY3B1KSBidXQgbW9yZSBtaWxkIHdheSB0byBnZXQgYSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgYnkgZmVlZGluZyBpbiBhIHZhbHVlIGJldHdlZW4gLTEgKGVhc2VJbikgYW5kIDEgKGVhc2VPdXQpIHdoZXJlIDAgaXMgbGluZWFyLlxuLy8gX3dlaWdodGVkRWFzZSA9IHJhdGlvID0+IHtcbi8vIFx0bGV0IHkgPSAwLjUgKyByYXRpbyAvIDI7XG4vLyBcdHJldHVybiBwID0+ICgyICogKDEgLSBwKSAqIHAgKiB5ICsgcCAqIHApO1xuLy8gfSxcbi8vIGEgc3Ryb25nZXIgKGJ1dCBtb3JlIGV4cGVuc2l2ZSBrYi9jcHUpIHBhcmFtZXRlcml6ZWQgd2VpZ2h0ZWQgZWFzZSB0aGF0IGxldHMgeW91IGZlZWQgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2VTdHJvbmcgPSByYXRpbyA9PiB7XG4vLyBcdHJhdGlvID0gLjUgKyByYXRpbyAvIDI7XG4vLyBcdGxldCBvID0gMSAvIDMgKiAocmF0aW8gPCAuNSA/IHJhdGlvIDogMSAtIHJhdGlvKSxcbi8vIFx0XHRiID0gcmF0aW8gLSBvLFxuLy8gXHRcdGMgPSByYXRpbyArIG87XG4vLyBcdHJldHVybiBwID0+IHAgPT09IDEgPyBwIDogMyAqIGIgKiAoMSAtIHApICogKDEgLSBwKSAqIHAgKyAzICogYyAqICgxIC0gcCkgKiBwICogcCArIHAgKiBwICogcDtcbi8vIH07XG5cblxuX2ZvckVhY2hOYW1lKFwiTGluZWFyLFF1YWQsQ3ViaWMsUXVhcnQsUXVpbnQsU3Ryb25nXCIsIGZ1bmN0aW9uIChuYW1lLCBpKSB7XG4gIHZhciBwb3dlciA9IGkgPCA1ID8gaSArIDEgOiBpO1xuXG4gIF9pbnNlcnRFYXNlKG5hbWUgKyBcIixQb3dlclwiICsgKHBvd2VyIC0gMSksIGkgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBNYXRoLnBvdyhwLCBwb3dlcik7XG4gIH0gOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwO1xuICB9LCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5wb3coMSAtIHAsIHBvd2VyKTtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gTWF0aC5wb3cocCAqIDIsIHBvd2VyKSAvIDIgOiAxIC0gTWF0aC5wb3coKDEgLSBwKSAqIDIsIHBvd2VyKSAvIDI7XG4gIH0pO1xufSk7XG5cbl9lYXNlTWFwLkxpbmVhci5lYXNlTm9uZSA9IF9lYXNlTWFwLm5vbmUgPSBfZWFzZU1hcC5MaW5lYXIuZWFzZUluO1xuXG5faW5zZXJ0RWFzZShcIkVsYXN0aWNcIiwgX2NvbmZpZ0VsYXN0aWMoXCJpblwiKSwgX2NvbmZpZ0VsYXN0aWMoXCJvdXRcIiksIF9jb25maWdFbGFzdGljKCkpO1xuXG4oZnVuY3Rpb24gKG4sIGMpIHtcbiAgdmFyIG4xID0gMSAvIGMsXG4gICAgICBuMiA9IDIgKiBuMSxcbiAgICAgIG4zID0gMi41ICogbjEsXG4gICAgICBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPCBuMSA/IG4gKiBwICogcCA6IHAgPCBuMiA/IG4gKiBNYXRoLnBvdyhwIC0gMS41IC8gYywgMikgKyAuNzUgOiBwIDwgbjMgPyBuICogKHAgLT0gMi4yNSAvIGMpICogcCArIC45Mzc1IDogbiAqIE1hdGgucG93KHAgLSAyLjYyNSAvIGMsIDIpICsgLjk4NDM3NTtcbiAgfTtcblxuICBfaW5zZXJ0RWFzZShcIkJvdW5jZVwiLCBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0sIGVhc2VPdXQpO1xufSkoNy41NjI1LCAyLjc1KTtcblxuX2luc2VydEVhc2UoXCJFeHBvXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID8gTWF0aC5wb3coMiwgMTAgKiAocCAtIDEpKSA6IDA7XG59KTtcblxuX2luc2VydEVhc2UoXCJDaXJjXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiAtKF9zcXJ0KDEgLSBwICogcCkgLSAxKTtcbn0pO1xuXG5faW5zZXJ0RWFzZShcIlNpbmVcIiwgZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAgPT09IDEgPyAxIDogLV9jb3MocCAqIF9IQUxGX1BJKSArIDE7XG59KTtcblxuX2luc2VydEVhc2UoXCJCYWNrXCIsIF9jb25maWdCYWNrKFwiaW5cIiksIF9jb25maWdCYWNrKFwib3V0XCIpLCBfY29uZmlnQmFjaygpKTtcblxuX2Vhc2VNYXAuU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5zdGVwcyA9IF9nbG9iYWxzLlN0ZXBwZWRFYXNlID0ge1xuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhzdGVwcywgaW1tZWRpYXRlU3RhcnQpIHtcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkge1xuICAgICAgc3RlcHMgPSAxO1xuICAgIH1cblxuICAgIHZhciBwMSA9IDEgLyBzdGVwcyxcbiAgICAgICAgcDIgPSBzdGVwcyArIChpbW1lZGlhdGVTdGFydCA/IDAgOiAxKSxcbiAgICAgICAgcDMgPSBpbW1lZGlhdGVTdGFydCA/IDEgOiAwLFxuICAgICAgICBtYXggPSAxIC0gX3RpbnlOdW07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gKChwMiAqIF9jbGFtcCgwLCBtYXgsIHApIHwgMCkgKyBwMykgKiBwMTtcbiAgICB9O1xuICB9XG59O1xuX2RlZmF1bHRzLmVhc2UgPSBfZWFzZU1hcFtcInF1YWQub3V0XCJdO1xuXG5fZm9yRWFjaE5hbWUoXCJvbkNvbXBsZXRlLG9uVXBkYXRlLG9uU3RhcnQsb25SZXBlYXQsb25SZXZlcnNlQ29tcGxldGUsb25JbnRlcnJ1cHRcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9jYWxsYmFja05hbWVzICs9IG5hbWUgKyBcIixcIiArIG5hbWUgKyBcIlBhcmFtcyxcIjtcbn0pO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDQUNIRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgR1NDYWNoZSA9IGZ1bmN0aW9uIEdTQ2FjaGUodGFyZ2V0LCBoYXJuZXNzKSB7XG4gIHRoaXMuaWQgPSBfZ3NJRCsrO1xuICB0YXJnZXQuX2dzYXAgPSB0aGlzO1xuICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgdGhpcy5oYXJuZXNzID0gaGFybmVzcztcbiAgdGhpcy5nZXQgPSBoYXJuZXNzID8gaGFybmVzcy5nZXQgOiBfZ2V0UHJvcGVydHk7XG4gIHRoaXMuc2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0U2V0dGVyIDogX2dldFNldHRlcjtcbn07XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFOSU1BVElPTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5leHBvcnQgdmFyIEFuaW1hdGlvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFuaW1hdGlvbih2YXJzKSB7XG4gICAgdGhpcy52YXJzID0gdmFycztcbiAgICB0aGlzLl9kZWxheSA9ICt2YXJzLmRlbGF5IHx8IDA7XG5cbiAgICBpZiAodGhpcy5fcmVwZWF0ID0gdmFycy5yZXBlYXQgPT09IEluZmluaXR5ID8gLTIgOiB2YXJzLnJlcGVhdCB8fCAwKSB7XG4gICAgICAvLyBUT0RPOiByZXBlYXQ6IEluZmluaXR5IG9uIGEgdGltZWxpbmUncyBjaGlsZHJlbiBtdXN0IGZsYWcgdGhhdCB0aW1lbGluZSBpbnRlcm5hbGx5IGFuZCBhZmZlY3QgaXRzIHRvdGFsRHVyYXRpb24sIG90aGVyd2lzZSBpdCdsbCBzdG9wIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gd2hlbiByZWFjaGluZyB0aGUgc3RhcnQuXG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YXJzLnJlcGVhdERlbGF5IHx8IDA7XG4gICAgICB0aGlzLl95b3lvID0gISF2YXJzLnlveW8gfHwgISF2YXJzLnlveW9FYXNlO1xuICAgIH1cblxuICAgIHRoaXMuX3RzID0gMTtcblxuICAgIF9zZXREdXJhdGlvbih0aGlzLCArdmFycy5kdXJhdGlvbiwgMSwgMSk7XG5cbiAgICB0aGlzLmRhdGEgPSB2YXJzLmRhdGE7XG4gICAgX3RpY2tlckFjdGl2ZSB8fCBfdGlja2VyLndha2UoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmltYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydCArIHZhbHVlIC0gdGhpcy5fZGVsYXkpO1xuICAgICAgdGhpcy5fZGVsYXkgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9kZWxheTtcbiAgfTtcblxuICBfcHJvdG8uZHVyYXRpb24gPSBmdW5jdGlvbiBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbER1cmF0aW9uKHRoaXMuX3JlcGVhdCA+IDAgPyB2YWx1ZSArICh2YWx1ZSArIHRoaXMuX3JEZWxheSkgKiB0aGlzLl9yZXBlYXQgOiB2YWx1ZSkgOiB0aGlzLnRvdGFsRHVyYXRpb24oKSAmJiB0aGlzLl9kdXI7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdER1cjtcbiAgICB9XG5cbiAgICB0aGlzLl9kaXJ0eSA9IDA7XG4gICAgcmV0dXJuIF9zZXREdXJhdGlvbih0aGlzLCB0aGlzLl9yZXBlYXQgPCAwID8gdmFsdWUgOiAodmFsdWUgLSB0aGlzLl9yZXBlYXQgKiB0aGlzLl9yRGVsYXkpIC8gKHRoaXMuX3JlcGVhdCArIDEpKTtcbiAgfTtcblxuICBfcHJvdG8udG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgX3dha2UoKTtcblxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9kcDtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nICYmIHRoaXMuX3RzKSB7XG4gICAgICBfYWxpZ25QbGF5aGVhZCh0aGlzLCBfdG90YWxUaW1lKTtcblxuICAgICAgIXBhcmVudC5fZHAgfHwgcGFyZW50LnBhcmVudCB8fCBfcG9zdEFkZENoZWNrcyhwYXJlbnQsIHRoaXMpOyAvLyBlZGdlIGNhc2U6IGlmIHRoaXMgaXMgYSBjaGlsZCBvZiBhIHRpbWVsaW5lIHRoYXQgYWxyZWFkeSBjb21wbGV0ZWQsIGZvciBleGFtcGxlLCB3ZSBtdXN0IHJlLWFjdGl2YXRlIHRoZSBwYXJlbnQuXG4gICAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvciB0aW1lbGluZXMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLCB3ZSBzaG91bGQgcmVzZXQgdGhlaXIgdG90YWxUaW1lKCkgd2hpY2ggd2lsbCBhbHNvIGVuc3VyZSB0aGF0IHRoZXkncmUgbGluZWQgdXAgcHJvcGVybHkgYW5kIGVuYWJsZWQuIFNraXAgZm9yIGFuaW1hdGlvbnMgdGhhdCBhcmUgb24gdGhlIHJvb3QgKHdhc3RlZnVsKS4gRXhhbXBsZTogYSBUaW1lbGluZUxpdGUuZXhwb3J0Um9vdCgpIGlzIHBlcmZvcm1lZCB3aGVuIHRoZXJlJ3MgYSBwYXVzZWQgdHdlZW4gb24gdGhlIHJvb3QsIHRoZSBleHBvcnQgd2lsbCBub3QgY29tcGxldGUgdW50aWwgdGhhdCB0d2VlbiBpcyB1bnBhdXNlZCwgYnV0IGltYWdpbmUgYSBjaGlsZCBnZXRzIHJlc3RhcnRlZCBsYXRlciwgYWZ0ZXIgYWxsIFt1bnBhdXNlZF0gdHdlZW5zIGhhdmUgY29tcGxldGVkLiBUaGUgc3RhcnQgb2YgdGhhdCBjaGlsZCB3b3VsZCBnZXQgcHVzaGVkIG91dCwgYnV0IG9uZSBvZiB0aGUgYW5jZXN0b3JzIG1heSBoYXZlIGNvbXBsZXRlZC5cblxuICAgICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQucGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQucGFyZW50Ll90aW1lICE9PSBwYXJlbnQuX3N0YXJ0ICsgKHBhcmVudC5fdHMgPj0gMCA/IHBhcmVudC5fdFRpbWUgLyBwYXJlbnQuX3RzIDogKHBhcmVudC50b3RhbER1cmF0aW9uKCkgLSBwYXJlbnQuX3RUaW1lKSAvIC1wYXJlbnQuX3RzKSkge1xuICAgICAgICAgIHBhcmVudC50b3RhbFRpbWUocGFyZW50Ll90VGltZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucGFyZW50ICYmIHRoaXMuX2RwLmF1dG9SZW1vdmVDaGlsZHJlbiAmJiAodGhpcy5fdHMgPiAwICYmIF90b3RhbFRpbWUgPCB0aGlzLl90RHVyIHx8IHRoaXMuX3RzIDwgMCAmJiBfdG90YWxUaW1lID4gMCB8fCAhdGhpcy5fdER1ciAmJiAhX3RvdGFsVGltZSkpIHtcbiAgICAgICAgLy9pZiB0aGUgYW5pbWF0aW9uIGRvZXNuJ3QgaGF2ZSBhIHBhcmVudCwgcHV0IGl0IGJhY2sgaW50byBpdHMgbGFzdCBwYXJlbnQgKHJlY29yZGVkIGFzIF9kcCBmb3IgZXhhY3RseSBjYXNlcyBsaWtlIHRoaXMpLiBMaW1pdCB0byBwYXJlbnRzIHdpdGggYXV0b1JlbW92ZUNoaWxkcmVuIChsaWtlIGdsb2JhbFRpbWVsaW5lKSBzbyB0aGF0IGlmIHRoZSB1c2VyIG1hbnVhbGx5IHJlbW92ZXMgYW4gYW5pbWF0aW9uIGZyb20gYSB0aW1lbGluZSBhbmQgdGhlbiBhbHRlcnMgaXRzIHBsYXloZWFkLCBpdCBkb2Vzbid0IGdldCBhZGRlZCBiYWNrIGluLlxuICAgICAgICBfYWRkVG9UaW1lbGluZSh0aGlzLl9kcCwgdGhpcywgdGhpcy5fc3RhcnQgLSB0aGlzLl9kZWxheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RUaW1lICE9PSBfdG90YWxUaW1lIHx8ICF0aGlzLl9kdXIgJiYgIXN1cHByZXNzRXZlbnRzIHx8IHRoaXMuX2luaXR0ZWQgJiYgTWF0aC5hYnModGhpcy5felRpbWUpID09PSBfdGlueU51bSB8fCAhX3RvdGFsVGltZSAmJiAhdGhpcy5faW5pdHRlZCAmJiAodGhpcy5hZGQgfHwgdGhpcy5fcHRMb29rdXApKSB7XG4gICAgICAvLyBjaGVjayBmb3IgX3B0TG9va3VwIG9uIGEgVHdlZW4gaW5zdGFuY2UgdG8gZW5zdXJlIGl0IGhhcyBhY3R1YWxseSBmaW5pc2hlZCBiZWluZyBpbnN0YW50aWF0ZWQsIG90aGVyd2lzZSBpZiB0aGlzLnJldmVyc2UoKSBnZXRzIGNhbGxlZCBpbiB0aGUgQW5pbWF0aW9uIGNvbnN0cnVjdG9yLCBpdCBjb3VsZCB0cmlnZ2VyIGEgcmVuZGVyKCkgaGVyZSBldmVuIHRob3VnaCB0aGUgX3RhcmdldHMgd2VyZW4ndCBwb3B1bGF0ZWQsIHRodXMgd2hlbiBfaW5pdCgpIGlzIGNhbGxlZCB0aGVyZSB3b24ndCBiZSBhbnkgUHJvcFR3ZWVucyAoaXQnbGwgYWN0IGxpa2UgdGhlIHR3ZWVuIGlzIG5vbi1mdW5jdGlvbmFsKVxuICAgICAgdGhpcy5fdHMgfHwgKHRoaXMuX3BUaW1lID0gX3RvdGFsVGltZSk7IC8vIG90aGVyd2lzZSwgaWYgYW4gYW5pbWF0aW9uIGlzIHBhdXNlZCwgdGhlbiB0aGUgcGxheWhlYWQgaXMgbW92ZWQgYmFjayB0byB6ZXJvLCB0aGVuIHJlc3VtZWQsIGl0J2QgcmV2ZXJ0IGJhY2sgdG8gdGhlIG9yaWdpbmFsIHRpbWUgYXQgdGhlIHBhdXNlXG4gICAgICAvL2lmICghdGhpcy5fbG9jaykgeyAvLyBhdm9pZCBlbmRsZXNzIHJlY3Vyc2lvbiAobm90IHN1cmUgd2UgbmVlZCB0aGlzIHlldCBvciBpZiBpdCdzIHdvcnRoIHRoZSBwZXJmb3JtYW5jZSBoaXQpXG4gICAgICAvLyAgIHRoaXMuX2xvY2sgPSAxO1xuXG4gICAgICBfbGF6eVNhZmVSZW5kZXIodGhpcywgX3RvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMpOyAvLyAgIHRoaXMuX2xvY2sgPSAwO1xuICAgICAgLy99XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udGltZSA9IGZ1bmN0aW9uIHRpbWUodmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSwgdmFsdWUgKyBfZWxhcHNlZEN5Y2xlRHVyYXRpb24odGhpcykpICUgKHRoaXMuX2R1ciArIHRoaXMuX3JEZWxheSkgfHwgKHZhbHVlID8gdGhpcy5fZHVyIDogMCksIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3RpbWU7IC8vIG5vdGU6IGlmIHRoZSBtb2R1bHVzIHJlc3VsdHMgaW4gMCwgdGhlIHBsYXloZWFkIGNvdWxkIGJlIGV4YWN0bHkgYXQgdGhlIGVuZCBvciB0aGUgYmVnaW5uaW5nLCBhbmQgd2UgYWx3YXlzIGRlZmVyIHRvIHRoZSBFTkQgd2l0aCBhIG5vbi16ZXJvIHZhbHVlLCBvdGhlcndpc2UgaWYgeW91IHNldCB0aGUgdGltZSgpIHRvIHRoZSB2ZXJ5IGVuZCAoZHVyYXRpb24oKSksIGl0IHdvdWxkIHJlbmRlciBhdCB0aGUgU1RBUlQhXG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0b3RhbFByb2dyZXNzKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy50b3RhbER1cmF0aW9uKCkgKiB2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90VGltZSAvIHRoaXMuX3REdXIpIDogdGhpcy5yYXRpbztcbiAgfTtcblxuICBfcHJvdG8ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBwcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSAqICh0aGlzLl95b3lvICYmICEodGhpcy5pdGVyYXRpb24oKSAmIDEpID8gMSAtIHZhbHVlIDogdmFsdWUpICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLmR1cmF0aW9uKCkgPyBNYXRoLm1pbigxLCB0aGlzLl90aW1lIC8gdGhpcy5fZHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLml0ZXJhdGlvbiA9IGZ1bmN0aW9uIGl0ZXJhdGlvbih2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICB2YXIgY3ljbGVEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24oKSArIHRoaXMuX3JEZWxheTtcblxuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZSArICh2YWx1ZSAtIDEpICogY3ljbGVEdXJhdGlvbiwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5fcmVwZWF0ID8gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKSArIDEgOiAxO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgYWRkaXRpb246XG4gIC8vIGlzUGxheWluZ0JhY2t3YXJkcygpIHtcbiAgLy8gXHRsZXQgYW5pbWF0aW9uID0gdGhpcyxcbiAgLy8gXHRcdG9yaWVudGF0aW9uID0gMTsgLy8gMSA9IGZvcndhcmQsIC0xID0gYmFja3dhcmRcbiAgLy8gXHR3aGlsZSAoYW5pbWF0aW9uKSB7XG4gIC8vIFx0XHRvcmllbnRhdGlvbiAqPSBhbmltYXRpb24ucmV2ZXJzZWQoKSB8fCAoYW5pbWF0aW9uLnJlcGVhdCgpICYmICEoYW5pbWF0aW9uLml0ZXJhdGlvbigpICYgMSkpID8gLTEgOiAxO1xuICAvLyBcdFx0YW5pbWF0aW9uID0gYW5pbWF0aW9uLnBhcmVudDtcbiAgLy8gXHR9XG4gIC8vIFx0cmV0dXJuIG9yaWVudGF0aW9uIDwgMDtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvLnRpbWVTY2FsZSA9IGZ1bmN0aW9uIHRpbWVTY2FsZSh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J0cyA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gcmVjb3JkZWQgdGltZVNjYWxlLiBTcGVjaWFsIGNhc2U6IGlmIHNvbWVvbmUgY2FsbHMgcmV2ZXJzZSgpIG9uIGFuIGFuaW1hdGlvbiB3aXRoIHRpbWVTY2FsZSBvZiAwLCB3ZSBhc3NpZ24gaXQgLV90aW55TnVtIHRvIHJlbWVtYmVyIGl0J3MgcmV2ZXJzZWQuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3J0cyA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciB0VGltZSA9IHRoaXMucGFyZW50ICYmIHRoaXMuX3RzID8gX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUodGhpcy5wYXJlbnQuX3RpbWUsIHRoaXMpIDogdGhpcy5fdFRpbWU7IC8vIG1ha2Ugc3VyZSB0byBkbyB0aGUgcGFyZW50VG9DaGlsZFRvdGFsVGltZSgpIEJFRk9SRSBzZXR0aW5nIHRoZSBuZXcgX3RzIGJlY2F1c2UgdGhlIG9sZCBvbmUgbXVzdCBiZSB1c2VkIGluIHRoYXQgY2FsY3VsYXRpb24uXG4gICAgLy8gZnV0dXJlIGFkZGl0aW9uPyBVcCBzaWRlOiBmYXN0IGFuZCBtaW5pbWFsIGZpbGUgc2l6ZS4gRG93biBzaWRlOiBvbmx5IHdvcmtzIG9uIHRoaXMgYW5pbWF0aW9uOyBpZiBhIHRpbWVsaW5lIGlzIHJldmVyc2VkLCBmb3IgZXhhbXBsZSwgaXRzIGNoaWxkcmVucycgb25SZXZlcnNlIHdvdWxkbid0IGdldCBjYWxsZWQuXG4gICAgLy8oK3ZhbHVlIDwgMCAmJiB0aGlzLl9ydHMgPj0gMCkgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXZlcnNlXCIsIHRydWUpO1xuICAgIC8vIHByaW9yaXRpemUgcmVuZGVyaW5nIHdoZXJlIHRoZSBwYXJlbnQncyBwbGF5aGVhZCBsaW5lcyB1cCBpbnN0ZWFkIG9mIHRoaXMuX3RUaW1lIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgYSB0d2VlbiB0aGF0J3MgYW5pbWF0aW5nIGFub3RoZXIgdHdlZW4ncyB0aW1lU2NhbGUgaW4gdGhlIHNhbWUgcmVuZGVyaW5nIGxvb3AgKHNhbWUgcGFyZW50KSwgdGh1cyBpZiB0aGUgdGltZVNjYWxlIHR3ZWVuIHJlbmRlcnMgZmlyc3QsIGl0IHdvdWxkIGFsdGVyIF9zdGFydCBCRUZPUkUgX3RUaW1lIHdhcyBzZXQgb24gdGhhdCB0aWNrIChpbiB0aGUgcmVuZGVyaW5nIGxvb3ApLCBlZmZlY3RpdmVseSBmcmVlemluZyBpdCB1bnRpbCB0aGUgdGltZVNjYWxlIHR3ZWVuIGZpbmlzaGVzLlxuXG4gICAgdGhpcy5fcnRzID0gK3ZhbHVlIHx8IDA7XG4gICAgdGhpcy5fdHMgPSB0aGlzLl9wcyB8fCB2YWx1ZSA9PT0gLV90aW55TnVtID8gMCA6IHRoaXMuX3J0czsgLy8gX3RzIGlzIHRoZSBmdW5jdGlvbmFsIHRpbWVTY2FsZSB3aGljaCB3b3VsZCBiZSAwIGlmIHRoZSBhbmltYXRpb24gaXMgcGF1c2VkLlxuXG4gICAgX3JlY2FjaGVBbmNlc3RvcnModGhpcy50b3RhbFRpbWUoX2NsYW1wKC10aGlzLl9kZWxheSwgdGhpcy5fdER1ciwgdFRpbWUpLCB0cnVlKSk7XG5cbiAgICBfc2V0RW5kKHRoaXMpOyAvLyBpZiBwYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgd2FzIGZhbHNlLCB0aGUgZW5kIHRpbWUgZGlkbid0IGdldCB1cGRhdGVkIGluIHRoZSBfYWxpZ25QbGF5aGVhZCgpIG1ldGhvZCwgc28gZG8gaXQgaGVyZS5cblxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlZCA9IGZ1bmN0aW9uIHBhdXNlZCh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3BzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wcyAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3BzID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wVGltZSA9IHRoaXMuX3RUaW1lIHx8IE1hdGgubWF4KC10aGlzLl9kZWxheSwgdGhpcy5yYXdUaW1lKCkpOyAvLyBpZiB0aGUgcGF1c2Ugb2NjdXJzIGR1cmluZyB0aGUgZGVsYXkgcGhhc2UsIG1ha2Ugc3VyZSB0aGF0J3MgZmFjdG9yZWQgaW4gd2hlbiByZXN1bWluZy5cblxuICAgICAgICB0aGlzLl90cyA9IHRoaXMuX2FjdCA9IDA7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUsIHNvIGEgcGF1c2VkIHR3ZWVuIHdvdWxkIGVmZmVjdGl2ZWx5IGhhdmUgYSB0aW1lU2NhbGUgb2YgMC4gV2UgcmVjb3JkIHRoZSBcInJlYWxcIiB0aW1lU2NhbGUgYXMgX3J0cyAocmVjb3JkZWQgdGltZSBzY2FsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF93YWtlKCk7XG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9ydHM7IC8vb25seSBkZWZlciB0byBfcFRpbWUgKHBhdXNlVGltZSkgaWYgdFRpbWUgaXMgemVyby4gUmVtZW1iZXIsIHNvbWVvbmUgY291bGQgcGF1c2UoKSBhbiBhbmltYXRpb24sIHRoZW4gc2NydWIgdGhlIHBsYXloZWFkIGFuZCByZXN1bWUoKS4gSWYgdGhlIHBhcmVudCBkb2Vzbid0IGhhdmUgc21vb3RoQ2hpbGRUaW1pbmcsIHdlIHJlbmRlciBhdCB0aGUgcmF3VGltZSgpIGJlY2F1c2UgdGhlIHN0YXJ0VGltZSB3b24ndCBnZXQgdXBkYXRlZC5cblxuICAgICAgICB0aGlzLnRvdGFsVGltZSh0aGlzLnBhcmVudCAmJiAhdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgPyB0aGlzLnJhd1RpbWUoKSA6IHRoaXMuX3RUaW1lIHx8IHRoaXMuX3BUaW1lLCB0aGlzLnByb2dyZXNzKCkgPT09IDEgJiYgTWF0aC5hYnModGhpcy5felRpbWUpICE9PSBfdGlueU51bSAmJiAodGhpcy5fdFRpbWUgLT0gX3RpbnlOdW0pKTsgLy8gZWRnZSBjYXNlOiBhbmltYXRpb24ucHJvZ3Jlc3MoMSkucGF1c2UoKS5wbGF5KCkgd291bGRuJ3QgcmVuZGVyIGFnYWluIGJlY2F1c2UgdGhlIHBsYXloZWFkIGlzIGFscmVhZHkgYXQgdGhlIGVuZCwgYnV0IHRoZSBjYWxsIHRvIHRvdGFsVGltZSgpIGJlbG93IHdpbGwgYWRkIGl0IGJhY2sgdG8gaXRzIHBhcmVudC4uLmFuZCBub3QgcmVtb3ZlIGl0IGFnYWluIChzaW5jZSByZW1vdmluZyBvbmx5IGhhcHBlbnMgdXBvbiByZW5kZXJpbmcgYXQgYSBuZXcgdGltZSkuIE9mZnNldHRpbmcgdGhlIF90VGltZSBzbGlnaHRseSBpcyBkb25lIHNpbXBseSB0byBjYXVzZSB0aGUgZmluYWwgcmVuZGVyIGluIHRvdGFsVGltZSgpIHRoYXQnbGwgcG9wIGl0IG9mZiBpdHMgdGltZWxpbmUgKGlmIGF1dG9SZW1vdmVDaGlsZHJlbiBpcyB0cnVlLCBvZiBjb3Vyc2UpLiBDaGVjayB0byBtYWtlIHN1cmUgX3pUaW1lIGlzbid0IC1fdGlueU51bSB0byBhdm9pZCBhbiBlZGdlIGNhc2Ugd2hlcmUgdGhlIHBsYXloZWFkIGlzIHB1c2hlZCB0byB0aGUgZW5kIGJ1dCBJTlNJREUgYSB0d2Vlbi9jYWxsYmFjaywgdGhlIHRpbWVsaW5lIGl0c2VsZiBpcyBwYXVzZWQgdGh1cyBoYWx0aW5nIHJlbmRlcmluZyBhbmQgbGVhdmluZyBhIGZldyB1bnJlbmRlcmVkLiBXaGVuIHJlc3VtaW5nLCBpdCB3b3VsZG4ndCByZW5kZXIgdGhvc2Ugb3RoZXJ3aXNlLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zdGFydFRpbWUgPSBmdW5jdGlvbiBzdGFydFRpbWUodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fc3RhcnQgPSB2YWx1ZTtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDtcbiAgICAgIHBhcmVudCAmJiAocGFyZW50Ll9zb3J0IHx8ICF0aGlzLnBhcmVudCkgJiYgX2FkZFRvVGltZWxpbmUocGFyZW50LCB0aGlzLCB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdGFydDtcbiAgfTtcblxuICBfcHJvdG8uZW5kVGltZSA9IGZ1bmN0aW9uIGVuZFRpbWUoaW5jbHVkZVJlcGVhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyAoX2lzTm90RmFsc2UoaW5jbHVkZVJlcGVhdHMpID8gdGhpcy50b3RhbER1cmF0aW9uKCkgOiB0aGlzLmR1cmF0aW9uKCkpIC8gTWF0aC5hYnModGhpcy5fdHMgfHwgMSk7XG4gIH07XG5cbiAgX3Byb3RvLnJhd1RpbWUgPSBmdW5jdGlvbiByYXdUaW1lKHdyYXBSZXBlYXRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50IHx8IHRoaXMuX2RwOyAvLyBfZHAgPSBkZXRhY2hlZCBwYXJlbnRcblxuICAgIHJldHVybiAhcGFyZW50ID8gdGhpcy5fdFRpbWUgOiB3cmFwUmVwZWF0cyAmJiAoIXRoaXMuX3RzIHx8IHRoaXMuX3JlcGVhdCAmJiB0aGlzLl90aW1lICYmIHRoaXMudG90YWxQcm9ncmVzcygpIDwgMSkgPyB0aGlzLl90VGltZSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIDogIXRoaXMuX3RzID8gdGhpcy5fdFRpbWUgOiBfcGFyZW50VG9DaGlsZFRvdGFsVGltZShwYXJlbnQucmF3VGltZSh3cmFwUmVwZWF0cyksIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5nbG9iYWxUaW1lID0gZnVuY3Rpb24gZ2xvYmFsVGltZShyYXdUaW1lKSB7XG4gICAgdmFyIGFuaW1hdGlvbiA9IHRoaXMsXG4gICAgICAgIHRpbWUgPSBhcmd1bWVudHMubGVuZ3RoID8gcmF3VGltZSA6IGFuaW1hdGlvbi5yYXdUaW1lKCk7XG5cbiAgICB3aGlsZSAoYW5pbWF0aW9uKSB7XG4gICAgICB0aW1lID0gYW5pbWF0aW9uLl9zdGFydCArIHRpbWUgLyAoYW5pbWF0aW9uLl90cyB8fCAxKTtcbiAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5fZHA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdCA9IGZ1bmN0aW9uIHJlcGVhdCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9yZXBlYXQgPSB2YWx1ZSA9PT0gSW5maW5pdHkgPyAtMiA6IHZhbHVlO1xuICAgICAgcmV0dXJuIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3JlcGVhdCA9PT0gLTIgPyBJbmZpbml0eSA6IHRoaXMuX3JlcGVhdDtcbiAgfTtcblxuICBfcHJvdG8ucmVwZWF0RGVsYXkgPSBmdW5jdGlvbiByZXBlYXREZWxheSh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgdGltZSA9IHRoaXMuX3RpbWU7XG4gICAgICB0aGlzLl9yRGVsYXkgPSB2YWx1ZTtcblxuICAgICAgX29uVXBkYXRlVG90YWxEdXJhdGlvbih0aGlzKTtcblxuICAgICAgcmV0dXJuIHRpbWUgPyB0aGlzLnRpbWUodGltZSkgOiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yRGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLnlveW8gPSBmdW5jdGlvbiB5b3lvKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3lveW8gPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl95b3lvO1xuICB9O1xuXG4gIF9wcm90by5zZWVrID0gZnVuY3Rpb24gc2Vlayhwb3NpdGlvbiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydChpbmNsdWRlRGVsYXksIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheSgpLnRvdGFsVGltZShpbmNsdWRlRGVsYXkgPyAtdGhpcy5fZGVsYXkgOiAwLCBfaXNOb3RGYWxzZShzdXBwcmVzc0V2ZW50cykpO1xuICB9O1xuXG4gIF9wcm90by5wbGF5ID0gZnVuY3Rpb24gcGxheShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKGZhbHNlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZShmcm9tLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGZyb20gIT0gbnVsbCAmJiB0aGlzLnNlZWsoZnJvbSB8fCB0aGlzLnRvdGFsRHVyYXRpb24oKSwgc3VwcHJlc3NFdmVudHMpO1xuICAgIHJldHVybiB0aGlzLnJldmVyc2VkKHRydWUpLnBhdXNlZChmYWxzZSk7XG4gIH07XG5cbiAgX3Byb3RvLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGF0VGltZSAhPSBudWxsICYmIHRoaXMuc2VlayhhdFRpbWUsIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQodHJ1ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlcnNlZCA9IGZ1bmN0aW9uIHJldmVyc2VkKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICEhdmFsdWUgIT09IHRoaXMucmV2ZXJzZWQoKSAmJiB0aGlzLnRpbWVTY2FsZSgtdGhpcy5fcnRzIHx8ICh2YWx1ZSA/IC1fdGlueU51bSA6IDApKTsgLy8gaW4gY2FzZSB0aW1lU2NhbGUgaXMgemVybywgcmV2ZXJzaW5nIHdvdWxkIGhhdmUgbm8gZWZmZWN0IHNvIHdlIHVzZSBfdGlueU51bS5cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J0cyA8IDA7XG4gIH07XG5cbiAgX3Byb3RvLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHRoaXMuX2luaXR0ZWQgPSB0aGlzLl9hY3QgPSAwO1xuICAgIHRoaXMuX3pUaW1lID0gLV90aW55TnVtO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5pc0FjdGl2ZSA9IGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcCxcbiAgICAgICAgc3RhcnQgPSB0aGlzLl9zdGFydCxcbiAgICAgICAgcmF3VGltZTtcbiAgICByZXR1cm4gISEoIXBhcmVudCB8fCB0aGlzLl90cyAmJiB0aGlzLl9pbml0dGVkICYmIHBhcmVudC5pc0FjdGl2ZSgpICYmIChyYXdUaW1lID0gcGFyZW50LnJhd1RpbWUodHJ1ZSkpID49IHN0YXJ0ICYmIHJhd1RpbWUgPCB0aGlzLmVuZFRpbWUodHJ1ZSkgLSBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvLmV2ZW50Q2FsbGJhY2sgPSBmdW5jdGlvbiBldmVudENhbGxiYWNrKHR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpIHtcbiAgICB2YXIgdmFycyA9IHRoaXMudmFycztcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICBkZWxldGUgdmFyc1t0eXBlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhcnNbdHlwZV0gPSBjYWxsYmFjaztcbiAgICAgICAgcGFyYW1zICYmICh2YXJzW3R5cGUgKyBcIlBhcmFtc1wiXSA9IHBhcmFtcyk7XG4gICAgICAgIHR5cGUgPT09IFwib25VcGRhdGVcIiAmJiAodGhpcy5fb25VcGRhdGUgPSBjYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJzW3R5cGVdO1xuICB9O1xuXG4gIF9wcm90by50aGVuID0gZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHZhciBmID0gX2lzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiBfcGFzc1Rocm91Z2gsXG4gICAgICAgICAgX3Jlc29sdmUgPSBmdW5jdGlvbiBfcmVzb2x2ZSgpIHtcbiAgICAgICAgdmFyIF90aGVuID0gc2VsZi50aGVuO1xuICAgICAgICBzZWxmLnRoZW4gPSBudWxsOyAvLyB0ZW1wb3JhcmlseSBudWxsIHRoZSB0aGVuKCkgbWV0aG9kIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3AgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVAvaXNzdWVzLzMyMilcblxuICAgICAgICBfaXNGdW5jdGlvbihmKSAmJiAoZiA9IGYoc2VsZikpICYmIChmLnRoZW4gfHwgZiA9PT0gc2VsZikgJiYgKHNlbGYudGhlbiA9IF90aGVuKTtcbiAgICAgICAgcmVzb2x2ZShmKTtcbiAgICAgICAgc2VsZi50aGVuID0gX3RoZW47XG4gICAgICB9O1xuXG4gICAgICBpZiAoc2VsZi5faW5pdHRlZCAmJiBzZWxmLnRvdGFsUHJvZ3Jlc3MoKSA9PT0gMSAmJiBzZWxmLl90cyA+PSAwIHx8ICFzZWxmLl90VGltZSAmJiBzZWxmLl90cyA8IDApIHtcbiAgICAgICAgX3Jlc29sdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuX3Byb20gPSBfcmVzb2x2ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ua2lsbCA9IGZ1bmN0aW9uIGtpbGwoKSB7XG4gICAgX2ludGVycnVwdCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uO1xufSgpO1xuXG5fc2V0RGVmYXVsdHMoQW5pbWF0aW9uLnByb3RvdHlwZSwge1xuICBfdGltZTogMCxcbiAgX3N0YXJ0OiAwLFxuICBfZW5kOiAwLFxuICBfdFRpbWU6IDAsXG4gIF90RHVyOiAwLFxuICBfZGlydHk6IDAsXG4gIF9yZXBlYXQ6IDAsXG4gIF95b3lvOiBmYWxzZSxcbiAgcGFyZW50OiBudWxsLFxuICBfaW5pdHRlZDogZmFsc2UsXG4gIF9yRGVsYXk6IDAsXG4gIF90czogMSxcbiAgX2RwOiAwLFxuICByYXRpbzogMCxcbiAgX3pUaW1lOiAtX3RpbnlOdW0sXG4gIF9wcm9tOiAwLFxuICBfcHM6IGZhbHNlLFxuICBfcnRzOiAxXG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUSU1FTElORVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxuZXhwb3J0IHZhciBUaW1lbGluZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0FuaW1hdGlvbikge1xuICBfaW5oZXJpdHNMb29zZShUaW1lbGluZSwgX0FuaW1hdGlvbik7XG5cbiAgZnVuY3Rpb24gVGltZWxpbmUodmFycywgcG9zaXRpb24pIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQW5pbWF0aW9uLmNhbGwodGhpcywgdmFycykgfHwgdGhpcztcbiAgICBfdGhpcy5sYWJlbHMgPSB7fTtcbiAgICBfdGhpcy5zbW9vdGhDaGlsZFRpbWluZyA9ICEhdmFycy5zbW9vdGhDaGlsZFRpbWluZztcbiAgICBfdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW4gPSAhIXZhcnMuYXV0b1JlbW92ZUNoaWxkcmVuO1xuICAgIF90aGlzLl9zb3J0ID0gX2lzTm90RmFsc2UodmFycy5zb3J0Q2hpbGRyZW4pO1xuICAgIF9nbG9iYWxUaW1lbGluZSAmJiBfYWRkVG9UaW1lbGluZSh2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBwb3NpdGlvbik7XG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpcy5yZXZlcnNlKCk7XG4gICAgdmFycy5wYXVzZWQgJiYgX3RoaXMucGF1c2VkKHRydWUpO1xuICAgIHZhcnMuc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgdmFycy5zY3JvbGxUcmlnZ2VyKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRpbWVsaW5lLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDAsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmZyb20gPSBmdW5jdGlvbiBmcm9tKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgxLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycywgcG9zaXRpb24pIHtcbiAgICBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cywgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnNldCA9IGZ1bmN0aW9uIHNldCh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gISF2YXJzLmltbWVkaWF0ZVJlbmRlcjtcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pLCAxKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmNhbGwgPSBmdW5jdGlvbiBjYWxsKGNhbGxiYWNrLCBwYXJhbXMsIHBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIFR3ZWVuLmRlbGF5ZWRDYWxsKDAsIGNhbGxiYWNrLCBwYXJhbXMpLCBwb3NpdGlvbik7XG4gIH0gLy9PTkxZIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5ISBNYXliZSBkZWxldGU/XG4gIDtcblxuICBfcHJvdG8yLnN0YWdnZXJUbyA9IGZ1bmN0aW9uIHN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgdmFycy5zdGFnZ2VyID0gdmFycy5zdGFnZ2VyIHx8IHN0YWdnZXI7XG4gICAgdmFycy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZUFsbDtcbiAgICB2YXJzLm9uQ29tcGxldGVQYXJhbXMgPSBvbkNvbXBsZXRlQWxsUGFyYW1zO1xuICAgIHZhcnMucGFyZW50ID0gdGhpcztcbiAgICBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tID0gZnVuY3Rpb24gc3RhZ2dlckZyb20odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5ydW5CYWNrd2FyZHMgPSAxO1xuICAgIF9pbmhlcml0RGVmYXVsdHModmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdmFycywgc3RhZ2dlciwgcG9zaXRpb24sIG9uQ29tcGxldGVBbGwsIG9uQ29tcGxldGVBbGxQYXJhbXMpO1xuICB9O1xuXG4gIF9wcm90bzIuc3RhZ2dlckZyb21UbyA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tVG8odGFyZ2V0cywgZHVyYXRpb24sIGZyb21WYXJzLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdG9WYXJzLnN0YXJ0QXQgPSBmcm9tVmFycztcbiAgICBfaW5oZXJpdERlZmF1bHRzKHRvVmFycykuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UodG9WYXJzLmltbWVkaWF0ZVJlbmRlcik7XG4gICAgcmV0dXJuIHRoaXMuc3RhZ2dlclRvKHRhcmdldHMsIGR1cmF0aW9uLCB0b1ZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl9kaXJ0eSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5fdER1cixcbiAgICAgICAgZHVyID0gdGhpcy5fZHVyLFxuICAgICAgICB0VGltZSA9IHRvdGFsVGltZSA8PSAwID8gMCA6IF9yb3VuZFByZWNpc2UodG90YWxUaW1lKSxcbiAgICAgICAgLy8gaWYgYSBwYXVzZWQgdGltZWxpbmUgaXMgcmVzdW1lZCAob3IgaXRzIF9zdGFydCBpcyB1cGRhdGVkIGZvciBhbm90aGVyIHJlYXNvbi4uLndoaWNoIHJvdW5kcyBpdCksIHRoYXQgY291bGQgcmVzdWx0IGluIHRoZSBwbGF5aGVhZCBzaGlmdGluZyBhICoqdGlueSoqIGFtb3VudCBhbmQgYSB6ZXJvLWR1cmF0aW9uIGNoaWxkIGF0IHRoYXQgc3BvdCBtYXkgZ2V0IHJlbmRlcmVkIGF0IGEgZGlmZmVyZW50IHJhdGlvLCBsaWtlIGl0cyB0b3RhbFRpbWUgaW4gcmVuZGVyKCkgbWF5IGJlIDFlLTE3IGluc3RlYWQgb2YgMCwgZm9yIGV4YW1wbGUuXG4gICAgY3Jvc3NpbmdTdGFydCA9IHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCAmJiAodGhpcy5faW5pdHRlZCB8fCAhZHVyKSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgY2hpbGQsXG4gICAgICAgIG5leHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldlBhdXNlZCxcbiAgICAgICAgcGF1c2VUd2VlbixcbiAgICAgICAgdGltZVNjYWxlLFxuICAgICAgICBwcmV2U3RhcnQsXG4gICAgICAgIHByZXZJdGVyYXRpb24sXG4gICAgICAgIHlveW8sXG4gICAgICAgIGlzWW95bztcbiAgICB0aGlzICE9PSBfZ2xvYmFsVGltZWxpbmUgJiYgdFRpbWUgPiB0RHVyICYmIHRvdGFsVGltZSA+PSAwICYmICh0VGltZSA9IHREdXIpO1xuXG4gICAgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCBmb3JjZSB8fCBjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICBpZiAocHJldlRpbWUgIT09IHRoaXMuX3RpbWUgJiYgZHVyKSB7XG4gICAgICAgIC8vaWYgdG90YWxEdXJhdGlvbigpIGZpbmRzIGEgY2hpbGQgd2l0aCBhIG5lZ2F0aXZlIHN0YXJ0VGltZSBhbmQgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgdGhpbmdzIGdldCBzaGlmdGVkIGFyb3VuZCBpbnRlcm5hbGx5IHNvIHdlIG5lZWQgdG8gYWRqdXN0IHRoZSB0aW1lIGFjY29yZGluZ2x5LiBGb3IgZXhhbXBsZSwgaWYgYSB0d2VlbiBzdGFydHMgYXQgLTMwIHdlIG11c3Qgc2hpZnQgRVZFUllUSElORyBmb3J3YXJkIDMwIHNlY29uZHMgYW5kIG1vdmUgdGhpcyB0aW1lbGluZSdzIHN0YXJ0VGltZSBiYWNrd2FyZCBieSAzMCBzZWNvbmRzIHNvIHRoYXQgdGhpbmdzIGFsaWduIHdpdGggdGhlIHBsYXloZWFkIChubyBqdW1wKS5cbiAgICAgICAgdFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgICB0b3RhbFRpbWUgKz0gdGhpcy5fdGltZSAtIHByZXZUaW1lO1xuICAgICAgfVxuXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICBwcmV2U3RhcnQgPSB0aGlzLl9zdGFydDtcbiAgICAgIHRpbWVTY2FsZSA9IHRoaXMuX3RzO1xuICAgICAgcHJldlBhdXNlZCA9ICF0aW1lU2NhbGU7XG5cbiAgICAgIGlmIChjcm9zc2luZ1N0YXJ0KSB7XG4gICAgICAgIGR1ciB8fCAocHJldlRpbWUgPSB0aGlzLl96VGltZSk7IC8vd2hlbiB0aGUgcGxheWhlYWQgYXJyaXZlcyBhdCBFWEFDVExZIHRpbWUgMCAocmlnaHQgb24gdG9wKSBvZiBhIHplcm8tZHVyYXRpb24gdGltZWxpbmUsIHdlIG5lZWQgdG8gZGlzY2VybiBpZiBldmVudHMgYXJlIHN1cHByZXNzZWQgc28gdGhhdCB3aGVuIHRoZSBwbGF5aGVhZCBtb3ZlcyBhZ2FpbiAobmV4dCB0aW1lKSwgaXQnbGwgdHJpZ2dlciB0aGUgY2FsbGJhY2suIElmIGV2ZW50cyBhcmUgTk9UIHN1cHByZXNzZWQsIG9idmlvdXNseSB0aGUgY2FsbGJhY2sgd291bGQgYmUgdHJpZ2dlcmVkIGluIHRoaXMgcmVuZGVyLiBCYXNpY2FsbHksIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZSBlaXRoZXIgd2hlbiB0aGUgcGxheWhlYWQgQVJSSVZFUyBvciBMRUFWRVMgdGhpcyBleGFjdCBzcG90LCBub3QgYm90aC4gSW1hZ2luZSBkb2luZyBhIHRpbWVsaW5lLnNlZWsoMCkgYW5kIHRoZXJlJ3MgYSBjYWxsYmFjayB0aGF0IHNpdHMgYXQgMC4gU2luY2UgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIG9uIHRoYXQgc2VlaygpIGJ5IGRlZmF1bHQsIG5vdGhpbmcgd2lsbCBmaXJlLCBidXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgb2ZmIG9mIHRoYXQgcG9zaXRpb24sIHRoZSBjYWxsYmFjayBzaG91bGQgZmlyZS4gVGhpcyBiZWhhdmlvciBpcyB3aGF0IHBlb3BsZSBpbnR1aXRpdmVseSBleHBlY3QuXG5cbiAgICAgICAgKHRvdGFsVGltZSB8fCAhc3VwcHJlc3NFdmVudHMpICYmICh0aGlzLl96VGltZSA9IHRvdGFsVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIHlveW8gPSB0aGlzLl95b3lvO1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuICAgICAgICAhcHJldlRpbWUgJiYgdGhpcy5fdFRpbWUgJiYgcHJldkl0ZXJhdGlvbiAhPT0gaXRlcmF0aW9uICYmIChwcmV2SXRlcmF0aW9uID0gaXRlcmF0aW9uKTsgLy8gZWRnZSBjYXNlIC0gaWYgc29tZW9uZSBkb2VzIGFkZFBhdXNlKCkgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9mIGEgcmVwZWF0aW5nIHRpbWVsaW5lLCB0aGF0IHBhdXNlIGlzIHRlY2huaWNhbGx5IGF0IHRoZSBzYW1lIHNwb3QgYXMgdGhlIGVuZCB3aGljaCBjYXVzZXMgdGhpcy5fdGltZSB0byBnZXQgc2V0IHRvIDAgd2hlbiB0aGUgdG90YWxUaW1lIHdvdWxkIG5vcm1hbGx5IHBsYWNlIHRoZSBwbGF5aGVhZCBhdCB0aGUgZW5kLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMzgyMy1jbG9zaW5nLW5hdi1hbmltYXRpb24tbm90LXdvcmtpbmctb24taWUtYW5kLWlwaG9uZS02LW1heWJlLW90aGVyLW9sZGVyLWJyb3dzZXIvP3RhYj1jb21tZW50cyNjb21tZW50LTExMzAwNVxuXG4gICAgICAgIGlmICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpIHtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgICBpc1lveW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgIG1ha2Ugc3VyZSBjaGlsZHJlbiBhdCB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgdGltZWxpbmUgYXJlIHJlbmRlcmVkIHByb3Blcmx5LiBJZiwgZm9yIGV4YW1wbGUsXG4gICAgICAgIGEgMy1zZWNvbmQgbG9uZyB0aW1lbGluZSByZW5kZXJlZCBhdCAyLjkgc2Vjb25kcyBwcmV2aW91c2x5LCBhbmQgbm93IHJlbmRlcnMgYXQgMy4yIHNlY29uZHMgKHdoaWNoXG4gICAgICAgIHdvdWxkIGdldCB0cmFuc2xhdGVkIHRvIDIuOCBzZWNvbmRzIGlmIHRoZSB0aW1lbGluZSB5b3lvcyBvciAwLjIgc2Vjb25kcyBpZiBpdCBqdXN0IHJlcGVhdHMpLCB0aGVyZVxuICAgICAgICBjb3VsZCBiZSBhIGNhbGxiYWNrIG9yIGEgc2hvcnQgdHdlZW4gdGhhdCdzIGF0IDIuOTUgb3IgMyBzZWNvbmRzIGluIHdoaWNoIHdvdWxkbid0IHJlbmRlci4gU29cbiAgICAgICAgd2UgbmVlZCB0byBwdXNoIHRoZSB0aW1lbGluZSB0byB0aGUgZW5kIChhbmQvb3IgYmVnaW5uaW5nIGRlcGVuZGluZyBvbiBpdHMgeW95byB2YWx1ZSkuIEFsc28gd2UgbXVzdFxuICAgICAgICBlbnN1cmUgdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBhdCB0aGUgdmVyeSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBUaW1lbGluZSB3b3JrLlxuICAgICAgICAqL1xuXG5cbiAgICAgICAgaWYgKGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgIHZhciByZXdpbmRpbmcgPSB5b3lvICYmIHByZXZJdGVyYXRpb24gJiAxLFxuICAgICAgICAgICAgICBkb2VzV3JhcCA9IHJld2luZGluZyA9PT0gKHlveW8gJiYgaXRlcmF0aW9uICYgMSk7XG4gICAgICAgICAgaXRlcmF0aW9uIDwgcHJldkl0ZXJhdGlvbiAmJiAocmV3aW5kaW5nID0gIXJld2luZGluZyk7XG4gICAgICAgICAgcHJldlRpbWUgPSByZXdpbmRpbmcgPyAwIDogZHVyO1xuICAgICAgICAgIHRoaXMuX2xvY2sgPSAxO1xuICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lIHx8IChpc1lveW8gPyAwIDogX3JvdW5kUHJlY2lzZShpdGVyYXRpb24gKiBjeWNsZUR1cmF0aW9uKSksIHN1cHByZXNzRXZlbnRzLCAhZHVyKS5fbG9jayA9IDA7XG4gICAgICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTsgLy8gaWYgYSB1c2VyIGdldHMgdGhlIGl0ZXJhdGlvbigpIGluc2lkZSB0aGUgb25SZXBlYXQsIGZvciBleGFtcGxlLCBpdCBzaG91bGQgYmUgYWNjdXJhdGUuXG5cbiAgICAgICAgICAhc3VwcHJlc3NFdmVudHMgJiYgdGhpcy5wYXJlbnQgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25SZXBlYXRcIik7XG4gICAgICAgICAgdGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAodGhpcy5pbnZhbGlkYXRlKCkuX2xvY2sgPSAxKTtcblxuICAgICAgICAgIGlmIChwcmV2VGltZSAmJiBwcmV2VGltZSAhPT0gdGhpcy5fdGltZSB8fCBwcmV2UGF1c2VkICE9PSAhdGhpcy5fdHMgfHwgdGhpcy52YXJzLm9uUmVwZWF0ICYmICF0aGlzLnBhcmVudCAmJiAhdGhpcy5fYWN0KSB7XG4gICAgICAgICAgICAvLyBpZiBwcmV2VGltZSBpcyAwIGFuZCB3ZSByZW5kZXIgYXQgdGhlIHZlcnkgZW5kLCBfdGltZSB3aWxsIGJlIHRoZSBlbmQsIHRodXMgd29uJ3QgbWF0Y2guIFNvIGluIHRoaXMgZWRnZSBjYXNlLCBwcmV2VGltZSB3b24ndCBtYXRjaCBfdGltZSBidXQgdGhhdCdzIG9rYXkuIElmIGl0IGdldHMga2lsbGVkIGluIHRoZSBvblJlcGVhdCwgZWplY3QgYXMgd2VsbC5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGR1ciA9IHRoaXMuX2R1cjsgLy8gaW4gY2FzZSB0aGUgZHVyYXRpb24gY2hhbmdlZCBpbiB0aGUgb25SZXBlYXRcblxuICAgICAgICAgIHREdXIgPSB0aGlzLl90RHVyO1xuXG4gICAgICAgICAgaWYgKGRvZXNXcmFwKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2NrID0gMjtcbiAgICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gZHVyIDogLTAuMDAwMTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHByZXZUaW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IC8vaW4gb3JkZXIgZm9yIHlveW9FYXNlIHRvIHdvcmsgcHJvcGVybHkgd2hlbiB0aGVyZSdzIGEgc3RhZ2dlciwgd2UgbXVzdCBzd2FwIG91dCB0aGUgZWFzZSBpbiBlYWNoIHN1Yi10d2Vlbi5cblxuXG4gICAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKHRoaXMsIGlzWW95byk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2hhc1BhdXNlICYmICF0aGlzLl9mb3JjaW5nICYmIHRoaXMuX2xvY2sgPCAyKSB7XG4gICAgICAgIHBhdXNlVHdlZW4gPSBfZmluZE5leHRQYXVzZVR3ZWVuKHRoaXMsIF9yb3VuZFByZWNpc2UocHJldlRpbWUpLCBfcm91bmRQcmVjaXNlKHRpbWUpKTtcblxuICAgICAgICBpZiAocGF1c2VUd2Vlbikge1xuICAgICAgICAgIHRUaW1lIC09IHRpbWUgLSAodGltZSA9IHBhdXNlVHdlZW4uX3N0YXJ0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgICB0aGlzLl9hY3QgPSAhdGltZVNjYWxlOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIHRoaXMuX29uVXBkYXRlID0gdGhpcy52YXJzLm9uVXBkYXRlO1xuICAgICAgICB0aGlzLl9pbml0dGVkID0gMTtcbiAgICAgICAgdGhpcy5felRpbWUgPSB0b3RhbFRpbWU7XG4gICAgICAgIHByZXZUaW1lID0gMDsgLy8gdXBvbiBpbml0LCB0aGUgcGxheWhlYWQgc2hvdWxkIGFsd2F5cyBnbyBmb3J3YXJkOyBzb21lb25lIGNvdWxkIGludmFsaWRhdGUoKSBhIGNvbXBsZXRlZCB0aW1lbGluZSBhbmQgdGhlbiBpZiB0aGV5IHJlc3RhcnQoKSwgdGhhdCB3b3VsZCBtYWtlIGNoaWxkIHR3ZWVucyByZW5kZXIgaW4gcmV2ZXJzZSBvcmRlciB3aGljaCBjb3VsZCBsb2NrIGluIHRoZSB3cm9uZyBzdGFydGluZyB2YWx1ZXMgaWYgdGhleSBidWlsZCBvbiBlYWNoIG90aGVyLCBsaWtlIHRsLnRvKG9iaiwge3g6IDEwMH0pLnRvKG9iaiwge3g6IDB9KS5cbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2VGltZSAmJiB0aW1lICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lID49IHByZXZUaW1lICYmIHRvdGFsVGltZSA+PSAwKSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IHRpbWUgPj0gY2hpbGQuX3N0YXJ0KSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/ICh0aW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICE9PSB0aGlzLl90aW1lIHx8ICF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgICAvL2luIGNhc2UgYSB0d2VlbiBwYXVzZXMgb3Igc2Vla3MgdGhlIHRpbWVsaW5lIHdoZW4gcmVuZGVyaW5nLCBsaWtlIGluc2lkZSBvZiBhbiBvblVwZGF0ZS9vbkNvbXBsZXRlXG4gICAgICAgICAgICAgIHBhdXNlVHdlZW4gPSAwO1xuICAgICAgICAgICAgICBuZXh0ICYmICh0VGltZSArPSB0aGlzLl96VGltZSA9IC1fdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBmbGFnIHpUaW1lIGFzIG5lZ2F0aXZlIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSB0aGlzLl9sYXN0O1xuICAgICAgICB2YXIgYWRqdXN0ZWRUaW1lID0gdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWU7IC8vd2hlbiB0aGUgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBiZXlvbmQgdGhlIHN0YXJ0IG9mIHRoaXMgdGltZWxpbmUsIHdlIG11c3QgcGFzcyB0aGF0IGluZm9ybWF0aW9uIGRvd24gdG8gdGhlIGNoaWxkIGFuaW1hdGlvbnMgc28gdGhhdCB6ZXJvLWR1cmF0aW9uIHR3ZWVucyBrbm93IHdoZXRoZXIgdG8gcmVuZGVyIHRoZWlyIHN0YXJ0aW5nIG9yIGVuZGluZyB2YWx1ZXMuXG5cbiAgICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgICAgbmV4dCA9IGNoaWxkLl9wcmV2O1xuXG4gICAgICAgICAgaWYgKChjaGlsZC5fYWN0IHx8IGFkanVzdGVkVGltZSA8PSBjaGlsZC5fZW5kKSAmJiBjaGlsZC5fdHMgJiYgcGF1c2VUd2VlbiAhPT0gY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5wYXJlbnQgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgLy8gYW4gZXh0cmVtZSBlZGdlIGNhc2UgLSB0aGUgY2hpbGQncyByZW5kZXIgY291bGQgZG8gc29tZXRoaW5nIGxpa2Uga2lsbCgpIHRoZSBcIm5leHRcIiBvbmUgaW4gdGhlIGxpbmtlZCBsaXN0LCBvciByZXBhcmVudCBpdC4gSW4gdGhhdCBjYXNlIHdlIG11c3QgcmUtaW5pdGlhdGUgdGhlIHdob2xlIHJlbmRlciB0byBiZSBzYWZlLlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZC5yZW5kZXIoY2hpbGQuX3RzID4gMCA/IChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzIDogKGNoaWxkLl9kaXJ0eSA/IGNoaWxkLnRvdGFsRHVyYXRpb24oKSA6IGNoaWxkLl90RHVyKSArIChhZGp1c3RlZFRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSBhZGp1c3RlZFRpbWUgPyAtX3RpbnlOdW0gOiBfdGlueU51bSk7IC8vIGl0IGRpZG4ndCBmaW5pc2ggcmVuZGVyaW5nLCBzbyBhZGp1c3QgelRpbWUgc28gdGhhdCBzbyB0aGF0IHRoZSBuZXh0IHRpbWUgcmVuZGVyKCkgaXMgY2FsbGVkIGl0J2xsIGJlIGZvcmNlZCAodG8gcmVuZGVyIGFueSByZW1haW5pbmcgY2hpbGRyZW4pXG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2hpbGQgPSBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXVzZVR3ZWVuICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHBhdXNlVHdlZW4ucmVuZGVyKHRpbWUgPj0gcHJldlRpbWUgPyAwIDogLV90aW55TnVtKS5felRpbWUgPSB0aW1lID49IHByZXZUaW1lID8gMSA6IC0xO1xuXG4gICAgICAgIGlmICh0aGlzLl90cykge1xuICAgICAgICAgIC8vdGhlIGNhbGxiYWNrIHJlc3VtZWQgcGxheWJhY2shIFNvIHNpbmNlIHdlIG1heSBoYXZlIGhlbGQgYmFjayB0aGUgcGxheWhlYWQgZHVlIHRvIHdoZXJlIHRoZSBwYXVzZSBpcyBwb3NpdGlvbmVkLCBnbyBhaGVhZCBhbmQganVtcCB0byB3aGVyZSBpdCdzIFNVUFBPU0VEIHRvIGJlIChpZiBubyBwYXVzZSBoYXBwZW5lZCkuXG4gICAgICAgICAgdGhpcy5fc3RhcnQgPSBwcmV2U3RhcnQ7IC8vaWYgdGhlIHBhdXNlIHdhcyBhdCBhbiBlYXJsaWVyIHRpbWUgYW5kIHRoZSB1c2VyIHJlc3VtZWQgaW4gdGhlIGNhbGxiYWNrLCBpdCBjb3VsZCByZXBvc2l0aW9uIHRoZSB0aW1lbGluZSAoY2hhbmdpbmcgaXRzIHN0YXJ0VGltZSksIHRocm93aW5nIHRoaW5ncyBvZmYgc2xpZ2h0bHksIHNvIHdlIG1ha2Ugc3VyZSB0aGUgX3N0YXJ0IGRvZXNuJ3Qgc2hpZnQuXG5cbiAgICAgICAgICBfc2V0RW5kKHRoaXMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIiwgdHJ1ZSk7XG4gICAgICBpZiAodFRpbWUgPT09IHREdXIgJiYgdER1ciA+PSB0aGlzLnRvdGFsRHVyYXRpb24oKSB8fCAhdFRpbWUgJiYgcHJldlRpbWUpIGlmIChwcmV2U3RhcnQgPT09IHRoaXMuX3N0YXJ0IHx8IE1hdGguYWJzKHRpbWVTY2FsZSkgIT09IE1hdGguYWJzKHRoaXMuX3RzKSkgaWYgKCF0aGlzLl9sb2NrKSB7XG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHRoZSB0aW1lbGluZSBpcyByZXZlcnNlZCBhbmQgdGhlIHBsYXloZWFkIGlzbid0IGF0IDAsIG90aGVyd2lzZSB0bC5wcm9ncmVzcygxKS5yZXZlcnNlKCkgd29uJ3Qgd29yay4gT25seSByZW1vdmUgaWYgdGhlIHBsYXloZWFkIGlzIGF0IHRoZSBlbmQgYW5kIHRpbWVTY2FsZSBpcyBwb3NpdGl2ZSwgb3IgaWYgdGhlIHBsYXloZWFkIGlzIGF0IDAgYW5kIHRoZSB0aW1lU2NhbGUgaXMgbmVnYXRpdmUuXG5cbiAgICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cyAmJiAhKHRvdGFsVGltZSA8IDAgJiYgIXByZXZUaW1lKSAmJiAodFRpbWUgfHwgcHJldlRpbWUgfHwgIXREdXIpKSB7XG4gICAgICAgICAgX2NhbGxiYWNrKHRoaXMsIHRUaW1lID09PSB0RHVyICYmIHRvdGFsVGltZSA+PSAwID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgICAgdGhpcy5fcHJvbSAmJiAhKHRUaW1lIDwgdER1ciAmJiB0aGlzLnRpbWVTY2FsZSgpID4gMCkgJiYgdGhpcy5fcHJvbSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGQgPSBmdW5jdGlvbiBhZGQoY2hpbGQsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfaXNOdW1iZXIocG9zaXRpb24pIHx8IChwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uLCBjaGlsZCkpO1xuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBBbmltYXRpb24pKSB7XG4gICAgICBpZiAoX2lzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuYWRkKG9iaiwgcG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExhYmVsKGNoaWxkLCBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgICAgY2hpbGQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjaGlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcyAhPT0gY2hpbGQgPyBfYWRkVG9UaW1lbGluZSh0aGlzLCBjaGlsZCwgcG9zaXRpb24pIDogdGhpczsgLy9kb24ndCBhbGxvdyBhIHRpbWVsaW5lIHRvIGJlIGFkZGVkIHRvIGl0c2VsZiBhcyBhIGNoaWxkIVxuICB9O1xuXG4gIF9wcm90bzIuZ2V0Q2hpbGRyZW4gPSBmdW5jdGlvbiBnZXRDaGlsZHJlbihuZXN0ZWQsIHR3ZWVucywgdGltZWxpbmVzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKG5lc3RlZCA9PT0gdm9pZCAwKSB7XG4gICAgICBuZXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0d2VlbnMgPT09IHZvaWQgMCkge1xuICAgICAgdHdlZW5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGltZWxpbmVzID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVsaW5lcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IC1fYmlnTnVtO1xuICAgIH1cblxuICAgIHZhciBhID0gW10sXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPj0gaWdub3JlQmVmb3JlVGltZSkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgIHR3ZWVucyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVsaW5lcyAmJiBhLnB1c2goY2hpbGQpO1xuICAgICAgICAgIG5lc3RlZCAmJiBhLnB1c2guYXBwbHkoYSwgY2hpbGQuZ2V0Q2hpbGRyZW4odHJ1ZSwgdHdlZW5zLCB0aW1lbGluZXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0QnlJZCA9IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICB2YXIgYW5pbWF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW4oMSwgMSwgMSksXG4gICAgICAgIGkgPSBhbmltYXRpb25zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChhbmltYXRpb25zW2ldLnZhcnMuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBhbmltYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShjaGlsZCkge1xuICAgIGlmIChfaXNTdHJpbmcoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZW1vdmVMYWJlbChjaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKF9pc0Z1bmN0aW9uKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMua2lsbFR3ZWVuc09mKGNoaWxkKTtcbiAgICB9XG5cbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgY2hpbGQpO1xuXG4gICAgaWYgKGNoaWxkID09PSB0aGlzLl9yZWNlbnQpIHtcbiAgICAgIHRoaXMuX3JlY2VudCA9IHRoaXMuX2xhc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxUaW1lID0gZnVuY3Rpb24gdG90YWxUaW1lKF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RUaW1lO1xuICAgIH1cblxuICAgIHRoaXMuX2ZvcmNpbmcgPSAxO1xuXG4gICAgaWYgKCF0aGlzLl9kcCAmJiB0aGlzLl90cykge1xuICAgICAgLy9zcGVjaWFsIGNhc2UgZm9yIHRoZSBnbG9iYWwgdGltZWxpbmUgKG9yIGFueSBvdGhlciB0aGF0IGhhcyBubyBwYXJlbnQgb3IgZGV0YWNoZWQgcGFyZW50KS5cbiAgICAgIHRoaXMuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZShfdGlja2VyLnRpbWUgLSAodGhpcy5fdHMgPiAwID8gX3RvdGFsVGltZTIgLyB0aGlzLl90cyA6ICh0aGlzLnRvdGFsRHVyYXRpb24oKSAtIF90b3RhbFRpbWUyKSAvIC10aGlzLl90cykpO1xuICAgIH1cblxuICAgIF9BbmltYXRpb24ucHJvdG90eXBlLnRvdGFsVGltZS5jYWxsKHRoaXMsIF90b3RhbFRpbWUyLCBzdXBwcmVzc0V2ZW50cyk7XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMDtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmFkZExhYmVsID0gZnVuY3Rpb24gYWRkTGFiZWwobGFiZWwsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5sYWJlbHNbbGFiZWxdID0gX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbiByZW1vdmVMYWJlbChsYWJlbCkge1xuICAgIGRlbGV0ZSB0aGlzLmxhYmVsc1tsYWJlbF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRQYXVzZSA9IGZ1bmN0aW9uIGFkZFBhdXNlKHBvc2l0aW9uLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHQgPSBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjayB8fCBfZW1wdHlGdW5jLCBwYXJhbXMpO1xuICAgIHQuZGF0YSA9IFwiaXNQYXVzZVwiO1xuICAgIHRoaXMuX2hhc1BhdXNlID0gMTtcbiAgICByZXR1cm4gX2FkZFRvVGltZWxpbmUodGhpcywgdCwgX3BhcnNlUG9zaXRpb24odGhpcywgcG9zaXRpb24pKTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZVBhdXNlID0gZnVuY3Rpb24gcmVtb3ZlUGF1c2UocG9zaXRpb24pIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdDtcbiAgICBwb3NpdGlvbiA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA9PT0gcG9zaXRpb24gJiYgY2hpbGQuZGF0YSA9PT0gXCJpc1BhdXNlXCIpIHtcbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQoY2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmtpbGxUd2VlbnNPZiA9IGZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSkge1xuICAgIHZhciB0d2VlbnMgPSB0aGlzLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpLFxuICAgICAgICBpID0gdHdlZW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuICE9PSB0d2VlbnNbaV0gJiYgdHdlZW5zW2ldLmtpbGwodGFyZ2V0cywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZ2V0VHdlZW5zT2YgPSBmdW5jdGlvbiBnZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSB7XG4gICAgdmFyIGEgPSBbXSxcbiAgICAgICAgcGFyc2VkVGFyZ2V0cyA9IHRvQXJyYXkodGFyZ2V0cyksXG4gICAgICAgIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGlzR2xvYmFsVGltZSA9IF9pc051bWJlcihvbmx5QWN0aXZlKSxcbiAgICAgICAgLy8gYSBudW1iZXIgaXMgaW50ZXJwcmV0ZWQgYXMgYSBnbG9iYWwgdGltZS4gSWYgdGhlIGFuaW1hdGlvbiBzcGFuc1xuICAgIGNoaWxkcmVuO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICBpZiAoX2FycmF5Q29udGFpbnNBbnkoY2hpbGQuX3RhcmdldHMsIHBhcnNlZFRhcmdldHMpICYmIChpc0dsb2JhbFRpbWUgPyAoIV9vdmVyd3JpdGluZ1R3ZWVuIHx8IGNoaWxkLl9pbml0dGVkICYmIGNoaWxkLl90cykgJiYgY2hpbGQuZ2xvYmFsVGltZSgwKSA8PSBvbmx5QWN0aXZlICYmIGNoaWxkLmdsb2JhbFRpbWUoY2hpbGQudG90YWxEdXJhdGlvbigpKSA+IG9ubHlBY3RpdmUgOiAhb25seUFjdGl2ZSB8fCBjaGlsZC5pc0FjdGl2ZSgpKSkge1xuICAgICAgICAgIC8vIG5vdGU6IGlmIHRoaXMgaXMgZm9yIG92ZXJ3cml0aW5nLCBpdCBzaG91bGQgb25seSBiZSBmb3IgdHdlZW5zIHRoYXQgYXJlbid0IHBhdXNlZCBhbmQgYXJlIGluaXR0ZWQuXG4gICAgICAgICAgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgoY2hpbGRyZW4gPSBjaGlsZC5nZXRUd2VlbnNPZihwYXJzZWRUYXJnZXRzLCBvbmx5QWN0aXZlKSkubGVuZ3RoKSB7XG4gICAgICAgIGEucHVzaC5hcHBseShhLCBjaGlsZHJlbik7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH0gLy8gcG90ZW50aWFsIGZ1dHVyZSBmZWF0dXJlIC0gdGFyZ2V0cygpIG9uIHRpbWVsaW5lc1xuICAvLyB0YXJnZXRzKCkge1xuICAvLyBcdGxldCByZXN1bHQgPSBbXTtcbiAgLy8gXHR0aGlzLmdldENoaWxkcmVuKHRydWUsIHRydWUsIGZhbHNlKS5mb3JFYWNoKHQgPT4gcmVzdWx0LnB1c2goLi4udC50YXJnZXRzKCkpKTtcbiAgLy8gXHRyZXR1cm4gcmVzdWx0LmZpbHRlcigodiwgaSkgPT4gcmVzdWx0LmluZGV4T2YodikgPT09IGkpO1xuICAvLyB9XG4gIDtcblxuICBfcHJvdG8yLnR3ZWVuVG8gPSBmdW5jdGlvbiB0d2VlblRvKHBvc2l0aW9uLCB2YXJzKSB7XG4gICAgdmFycyA9IHZhcnMgfHwge307XG5cbiAgICB2YXIgdGwgPSB0aGlzLFxuICAgICAgICBlbmRUaW1lID0gX3BhcnNlUG9zaXRpb24odGwsIHBvc2l0aW9uKSxcbiAgICAgICAgX3ZhcnMgPSB2YXJzLFxuICAgICAgICBzdGFydEF0ID0gX3ZhcnMuc3RhcnRBdCxcbiAgICAgICAgX29uU3RhcnQgPSBfdmFycy5vblN0YXJ0LFxuICAgICAgICBvblN0YXJ0UGFyYW1zID0gX3ZhcnMub25TdGFydFBhcmFtcyxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3ZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBpbml0dGVkLFxuICAgICAgICB0d2VlbiA9IFR3ZWVuLnRvKHRsLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgZWFzZTogdmFycy5lYXNlIHx8IFwibm9uZVwiLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgdGltZTogZW5kVGltZSxcbiAgICAgIG92ZXJ3cml0ZTogXCJhdXRvXCIsXG4gICAgICBkdXJhdGlvbjogdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpIHx8IF90aW55TnVtLFxuICAgICAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHtcbiAgICAgICAgdGwucGF1c2UoKTtcblxuICAgICAgICBpZiAoIWluaXR0ZWQpIHtcbiAgICAgICAgICB2YXIgZHVyYXRpb24gPSB2YXJzLmR1cmF0aW9uIHx8IE1hdGguYWJzKChlbmRUaW1lIC0gKHN0YXJ0QXQgJiYgXCJ0aW1lXCIgaW4gc3RhcnRBdCA/IHN0YXJ0QXQudGltZSA6IHRsLl90aW1lKSkgLyB0bC50aW1lU2NhbGUoKSk7XG4gICAgICAgICAgdHdlZW4uX2R1ciAhPT0gZHVyYXRpb24gJiYgX3NldER1cmF0aW9uKHR3ZWVuLCBkdXJhdGlvbiwgMCwgMSkucmVuZGVyKHR3ZWVuLl90aW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBpbml0dGVkID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vblN0YXJ0ICYmIF9vblN0YXJ0LmFwcGx5KHR3ZWVuLCBvblN0YXJ0UGFyYW1zIHx8IFtdKTsgLy9pbiBjYXNlIHRoZSB1c2VyIGhhZCBhbiBvblN0YXJ0IGluIHRoZSB2YXJzIC0gd2UgZG9uJ3Qgd2FudCB0byBvdmVyd3JpdGUgaXQuXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZVJlbmRlciA/IHR3ZWVuLnJlbmRlcigwKSA6IHR3ZWVuO1xuICB9O1xuXG4gIF9wcm90bzIudHdlZW5Gcm9tVG8gPSBmdW5jdGlvbiB0d2VlbkZyb21Ubyhmcm9tUG9zaXRpb24sIHRvUG9zaXRpb24sIHZhcnMpIHtcbiAgICByZXR1cm4gdGhpcy50d2VlblRvKHRvUG9zaXRpb24sIF9zZXREZWZhdWx0cyh7XG4gICAgICBzdGFydEF0OiB7XG4gICAgICAgIHRpbWU6IF9wYXJzZVBvc2l0aW9uKHRoaXMsIGZyb21Qb3NpdGlvbilcbiAgICAgIH1cbiAgICB9LCB2YXJzKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZWNlbnQgPSBmdW5jdGlvbiByZWNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlY2VudDtcbiAgfTtcblxuICBfcHJvdG8yLm5leHRMYWJlbCA9IGZ1bmN0aW9uIG5leHRMYWJlbChhZnRlclRpbWUpIHtcbiAgICBpZiAoYWZ0ZXJUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGFmdGVyVGltZSA9IHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRoaXMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIGFmdGVyVGltZSkpO1xuICB9O1xuXG4gIF9wcm90bzIucHJldmlvdXNMYWJlbCA9IGZ1bmN0aW9uIHByZXZpb3VzTGFiZWwoYmVmb3JlVGltZSkge1xuICAgIGlmIChiZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGJlZm9yZVRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBiZWZvcmVUaW1lKSwgMSk7XG4gIH07XG5cbiAgX3Byb3RvMi5jdXJyZW50TGFiZWwgPSBmdW5jdGlvbiBjdXJyZW50TGFiZWwodmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMuc2Vlayh2YWx1ZSwgdHJ1ZSkgOiB0aGlzLnByZXZpb3VzTGFiZWwodGhpcy5fdGltZSArIF90aW55TnVtKTtcbiAgfTtcblxuICBfcHJvdG8yLnNoaWZ0Q2hpbGRyZW4gPSBmdW5jdGlvbiBzaGlmdENoaWxkcmVuKGFtb3VudCwgYWRqdXN0TGFiZWxzLCBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgaWYgKGlnbm9yZUJlZm9yZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgaWdub3JlQmVmb3JlVGltZSA9IDA7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3QsXG4gICAgICAgIGxhYmVscyA9IHRoaXMubGFiZWxzLFxuICAgICAgICBwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgY2hpbGQuX3N0YXJ0ICs9IGFtb3VudDtcbiAgICAgICAgY2hpbGQuX2VuZCArPSBhbW91bnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgaWYgKGFkanVzdExhYmVscykge1xuICAgICAgZm9yIChwIGluIGxhYmVscykge1xuICAgICAgICBpZiAobGFiZWxzW3BdID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgICBsYWJlbHNbcF0gKz0gYW1vdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgdGhpcy5fbG9jayA9IDA7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGNoaWxkLmludmFsaWRhdGUoKTtcbiAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BbmltYXRpb24ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoaW5jbHVkZUxhYmVscykge1xuICAgIGlmIChpbmNsdWRlTGFiZWxzID09PSB2b2lkIDApIHtcbiAgICAgIGluY2x1ZGVMYWJlbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBuZXh0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG4gICAgICB0aGlzLnJlbW92ZShjaGlsZCk7XG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5fZHAgJiYgKHRoaXMuX3RpbWUgPSB0aGlzLl90VGltZSA9IHRoaXMuX3BUaW1lID0gMCk7XG4gICAgaW5jbHVkZUxhYmVscyAmJiAodGhpcy5sYWJlbHMgPSB7fSk7XG4gICAgcmV0dXJuIF91bmNhY2hlKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90bzIudG90YWxEdXJhdGlvbiA9IGZ1bmN0aW9uIHRvdGFsRHVyYXRpb24odmFsdWUpIHtcbiAgICB2YXIgbWF4ID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGNoaWxkID0gc2VsZi5fbGFzdCxcbiAgICAgICAgcHJldlN0YXJ0ID0gX2JpZ051bSxcbiAgICAgICAgcHJldixcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHBhcmVudDtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZi50aW1lU2NhbGUoKHNlbGYuX3JlcGVhdCA8IDAgPyBzZWxmLmR1cmF0aW9uKCkgOiBzZWxmLnRvdGFsRHVyYXRpb24oKSkgLyAoc2VsZi5yZXZlcnNlZCgpID8gLXZhbHVlIDogdmFsdWUpKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5fZGlydHkpIHtcbiAgICAgIHBhcmVudCA9IHNlbGYucGFyZW50O1xuXG4gICAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgcHJldiA9IGNoaWxkLl9wcmV2OyAvL3JlY29yZCBpdCBoZXJlIGluIGNhc2UgdGhlIHR3ZWVuIGNoYW5nZXMgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlLi4uXG5cbiAgICAgICAgY2hpbGQuX2RpcnR5ICYmIGNoaWxkLnRvdGFsRHVyYXRpb24oKTsgLy9jb3VsZCBjaGFuZ2UgdGhlIHR3ZWVuLl9zdGFydFRpbWUsIHNvIG1ha2Ugc3VyZSB0aGUgYW5pbWF0aW9uJ3MgY2FjaGUgaXMgY2xlYW4gYmVmb3JlIGFuYWx5emluZyBpdC5cblxuICAgICAgICBzdGFydCA9IGNoaWxkLl9zdGFydDtcblxuICAgICAgICBpZiAoc3RhcnQgPiBwcmV2U3RhcnQgJiYgc2VsZi5fc29ydCAmJiBjaGlsZC5fdHMgJiYgIXNlbGYuX2xvY2spIHtcbiAgICAgICAgICAvL2luIGNhc2Ugb25lIG9mIHRoZSB0d2VlbnMgc2hpZnRlZCBvdXQgb2Ygb3JkZXIsIGl0IG5lZWRzIHRvIGJlIHJlLWluc2VydGVkIGludG8gdGhlIGNvcnJlY3QgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlXG4gICAgICAgICAgc2VsZi5fbG9jayA9IDE7IC8vcHJldmVudCBlbmRsZXNzIHJlY3Vyc2l2ZSBjYWxscyAtIHRoZXJlIGFyZSBtZXRob2RzIHRoYXQgZ2V0IHRyaWdnZXJlZCB0aGF0IGNoZWNrIGR1cmF0aW9uL3RvdGFsRHVyYXRpb24gd2hlbiB3ZSBhZGQoKS5cblxuICAgICAgICAgIF9hZGRUb1RpbWVsaW5lKHNlbGYsIGNoaWxkLCBzdGFydCAtIGNoaWxkLl9kZWxheSwgMSkuX2xvY2sgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZTdGFydCA9IHN0YXJ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0IDwgMCAmJiBjaGlsZC5fdHMpIHtcbiAgICAgICAgICAvL2NoaWxkcmVuIGFyZW4ndCBhbGxvd2VkIHRvIGhhdmUgbmVnYXRpdmUgc3RhcnRUaW1lcyB1bmxlc3Mgc21vb3RoQ2hpbGRUaW1pbmcgaXMgdHJ1ZSwgc28gYWRqdXN0IGhlcmUgaWYgb25lIGlzIGZvdW5kLlxuICAgICAgICAgIG1heCAtPSBzdGFydDtcblxuICAgICAgICAgIGlmICghcGFyZW50ICYmICFzZWxmLl9kcCB8fCBwYXJlbnQgJiYgcGFyZW50LnNtb290aENoaWxkVGltaW5nKSB7XG4gICAgICAgICAgICBzZWxmLl9zdGFydCArPSBzdGFydCAvIHNlbGYuX3RzO1xuICAgICAgICAgICAgc2VsZi5fdGltZSAtPSBzdGFydDtcbiAgICAgICAgICAgIHNlbGYuX3RUaW1lIC09IHN0YXJ0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNlbGYuc2hpZnRDaGlsZHJlbigtc3RhcnQsIGZhbHNlLCAtMWU5OTkpO1xuICAgICAgICAgIHByZXZTdGFydCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5fZW5kID4gbWF4ICYmIGNoaWxkLl90cyAmJiAobWF4ID0gY2hpbGQuX2VuZCk7XG4gICAgICAgIGNoaWxkID0gcHJldjtcbiAgICAgIH1cblxuICAgICAgX3NldER1cmF0aW9uKHNlbGYsIHNlbGYgPT09IF9nbG9iYWxUaW1lbGluZSAmJiBzZWxmLl90aW1lID4gbWF4ID8gc2VsZi5fdGltZSA6IG1heCwgMSwgMSk7XG5cbiAgICAgIHNlbGYuX2RpcnR5ID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZi5fdER1cjtcbiAgfTtcblxuICBUaW1lbGluZS51cGRhdGVSb290ID0gZnVuY3Rpb24gdXBkYXRlUm9vdCh0aW1lKSB7XG4gICAgaWYgKF9nbG9iYWxUaW1lbGluZS5fdHMpIHtcbiAgICAgIF9sYXp5U2FmZVJlbmRlcihfZ2xvYmFsVGltZWxpbmUsIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWUsIF9nbG9iYWxUaW1lbGluZSkpO1xuXG4gICAgICBfbGFzdFJlbmRlcmVkRnJhbWUgPSBfdGlja2VyLmZyYW1lO1xuICAgIH1cblxuICAgIGlmIChfdGlja2VyLmZyYW1lID49IF9uZXh0R0NGcmFtZSkge1xuICAgICAgX25leHRHQ0ZyYW1lICs9IF9jb25maWcuYXV0b1NsZWVwIHx8IDEyMDtcbiAgICAgIHZhciBjaGlsZCA9IF9nbG9iYWxUaW1lbGluZS5fZmlyc3Q7XG4gICAgICBpZiAoIWNoaWxkIHx8ICFjaGlsZC5fdHMpIGlmIChfY29uZmlnLmF1dG9TbGVlcCAmJiBfdGlja2VyLl9saXN0ZW5lcnMubGVuZ3RoIDwgMikge1xuICAgICAgICB3aGlsZSAoY2hpbGQgJiYgIWNoaWxkLl90cykge1xuICAgICAgICAgIGNoaWxkID0gY2hpbGQuX25leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZCB8fCBfdGlja2VyLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUaW1lbGluZTtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFRpbWVsaW5lLnByb3RvdHlwZSwge1xuICBfbG9jazogMCxcbiAgX2hhc1BhdXNlOiAwLFxuICBfZm9yY2luZzogMFxufSk7XG5cbnZhciBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuKHRhcmdldCwgcHJvcCwgc3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSkge1xuICAvL25vdGU6IHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldCwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIG51bGwsIHNldHRlciksXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBtYXRjaEluZGV4ID0gMCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHN0YXJ0TnVtcyxcbiAgICAgIGNvbG9yLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBzdGFydE51bSxcbiAgICAgIGhhc1JhbmRvbSxcbiAgICAgIGE7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGhhc1JhbmRvbSA9IH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICBlbmQgPSBfcmVwbGFjZVJhbmRvbShlbmQpO1xuICB9XG5cbiAgaWYgKHN0cmluZ0ZpbHRlcikge1xuICAgIGEgPSBbc3RhcnQsIGVuZF07XG4gICAgc3RyaW5nRmlsdGVyKGEsIHRhcmdldCwgcHJvcCk7IC8vcGFzcyBhbiBhcnJheSB3aXRoIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcyBhbmQgbGV0IHRoZSBmaWx0ZXIgZG8gd2hhdGV2ZXIgaXQgbmVlZHMgdG8gdGhlIHZhbHVlcy5cblxuICAgIHN0YXJ0ID0gYVswXTtcbiAgICBlbmQgPSBhWzFdO1xuICB9XG5cbiAgc3RhcnROdW1zID0gc3RhcnQubWF0Y2goX2NvbXBsZXhTdHJpbmdOdW1FeHApIHx8IFtdO1xuXG4gIHdoaWxlIChyZXN1bHQgPSBfY29tcGxleFN0cmluZ051bUV4cC5leGVjKGVuZCkpIHtcbiAgICBlbmROdW0gPSByZXN1bHRbMF07XG4gICAgY2h1bmsgPSBlbmQuc3Vic3RyaW5nKGluZGV4LCByZXN1bHQuaW5kZXgpO1xuXG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBjb2xvciA9IChjb2xvciArIDEpICUgNTtcbiAgICB9IGVsc2UgaWYgKGNodW5rLnN1YnN0cigtNSkgPT09IFwicmdiYShcIikge1xuICAgICAgY29sb3IgPSAxO1xuICAgIH1cblxuICAgIGlmIChlbmROdW0gIT09IHN0YXJ0TnVtc1ttYXRjaEluZGV4KytdKSB7XG4gICAgICBzdGFydE51bSA9IHBhcnNlRmxvYXQoc3RhcnROdW1zW21hdGNoSW5kZXggLSAxXSkgfHwgMDsgLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG4gICAgICBwdC5fcHQgPSB7XG4gICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgIHA6IGNodW5rIHx8IG1hdGNoSW5kZXggPT09IDEgPyBjaHVuayA6IFwiLFwiLFxuICAgICAgICAvL25vdGU6IFNWRyBzcGVjIGFsbG93cyBvbWlzc2lvbiBvZiBjb21tYS9zcGFjZSB3aGVuIGEgbmVnYXRpdmUgc2lnbiBpcyB3ZWRnZWQgYmV0d2VlbiB0d28gbnVtYmVycywgbGlrZSAyLjUtNS4zIGluc3RlYWQgb2YgMi41LC01LjMgYnV0IHdoZW4gdHdlZW5pbmcsIHRoZSBuZWdhdGl2ZSB2YWx1ZSBtYXkgc3dpdGNoIHRvIHBvc2l0aXZlLCBzbyB3ZSBpbnNlcnQgdGhlIGNvbW1hIGp1c3QgaW4gY2FzZS5cbiAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgIGM6IGVuZE51bS5jaGFyQXQoMSkgPT09IFwiPVwiID8gcGFyc2VGbG9hdChlbmROdW0uc3Vic3RyKDIpKSAqIChlbmROdW0uY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgOiBwYXJzZUZsb2F0KGVuZE51bSkgLSBzdGFydE51bSxcbiAgICAgICAgbTogY29sb3IgJiYgY29sb3IgPCA0ID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgIH07XG4gICAgICBpbmRleCA9IF9jb21wbGV4U3RyaW5nTnVtRXhwLmxhc3RJbmRleDtcbiAgICB9XG4gIH1cblxuICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG5cbiAgcHQuZnAgPSBmdW5jUGFyYW07XG5cbiAgaWYgKF9yZWxFeHAudGVzdChlbmQpIHx8IGhhc1JhbmRvbSkge1xuICAgIHB0LmUgPSAwOyAvL2lmIHRoZSBlbmQgc3RyaW5nIGNvbnRhaW5zIHJlbGF0aXZlIHZhbHVlcyBvciBkeW5hbWljIHJhbmRvbSguLi4pIHZhbHVlcywgZGVsZXRlIHRoZSBlbmQgaXQgc28gdGhhdCBvbiB0aGUgZmluYWwgcmVuZGVyIHdlIGRvbid0IGFjdHVhbGx5IHNldCBpdCB0byB0aGUgc3RyaW5nIHdpdGggKz0gb3IgLT0gY2hhcmFjdGVycyAoZm9yY2VzIGl0IHRvIHVzZSB0aGUgY2FsY3VsYXRlZCB2YWx1ZSkuXG4gIH1cblxuICB0aGlzLl9wdCA9IHB0OyAvL3N0YXJ0IHRoZSBsaW5rZWQgbGlzdCB3aXRoIHRoaXMgbmV3IFByb3BUd2Vlbi4gUmVtZW1iZXIsIHdlIGNhbGwgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0d2Vlbkluc3RhbmNlLi4uKSB0byBlbnN1cmUgdGhhdCBpdCdzIHNjb3BlZCBwcm9wZXJseS4gV2UgbWF5IGNhbGwgaXQgZnJvbSB3aXRoaW4gYSBwbHVnaW4gdG9vLCB0aHVzIFwidGhpc1wiIHdvdWxkIHJlZmVyIHRvIHRoZSBwbHVnaW4uXG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkUHJvcFR3ZWVuID0gZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIGluZGV4LCB0YXJnZXRzLCBtb2RpZmllciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgX2lzRnVuY3Rpb24oZW5kKSAmJiAoZW5kID0gZW5kKGluZGV4IHx8IDAsIHRhcmdldCwgdGFyZ2V0cykpO1xuICB2YXIgY3VycmVudFZhbHVlID0gdGFyZ2V0W3Byb3BdLFxuICAgICAgcGFyc2VkU3RhcnQgPSBzdGFydCAhPT0gXCJnZXRcIiA/IHN0YXJ0IDogIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBjdXJyZW50VmFsdWUgOiBmdW5jUGFyYW0gPyB0YXJnZXRbcHJvcC5pbmRleE9mKFwic2V0XCIpIHx8ICFfaXNGdW5jdGlvbih0YXJnZXRbXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXSkgPyBwcm9wIDogXCJnZXRcIiArIHByb3Auc3Vic3RyKDMpXShmdW5jUGFyYW0pIDogdGFyZ2V0W3Byb3BdKCksXG4gICAgICBzZXR0ZXIgPSAhX2lzRnVuY3Rpb24oY3VycmVudFZhbHVlKSA/IF9zZXR0ZXJQbGFpbiA6IGZ1bmNQYXJhbSA/IF9zZXR0ZXJGdW5jV2l0aFBhcmFtIDogX3NldHRlckZ1bmMsXG4gICAgICBwdDtcblxuICBpZiAoX2lzU3RyaW5nKGVuZCkpIHtcbiAgICBpZiAofmVuZC5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgICB9XG5cbiAgICBpZiAoZW5kLmNoYXJBdCgxKSA9PT0gXCI9XCIpIHtcbiAgICAgIHB0ID0gcGFyc2VGbG9hdChwYXJzZWRTdGFydCkgKyBwYXJzZUZsb2F0KGVuZC5zdWJzdHIoMikpICogKGVuZC5jaGFyQXQoMCkgPT09IFwiLVwiID8gLTEgOiAxKSArIChnZXRVbml0KHBhcnNlZFN0YXJ0KSB8fCAwKTtcblxuICAgICAgaWYgKHB0IHx8IHB0ID09PSAwKSB7XG4gICAgICAgIC8vIHRvIGF2b2lkIGlzTmFOLCBsaWtlIGlmIHNvbWVvbmUgcGFzc2VzIGluIGEgdmFsdWUgbGlrZSBcIiE9IHdoYXRldmVyXCJcbiAgICAgICAgZW5kID0gcHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHBhcnNlZFN0YXJ0ICE9PSBlbmQpIHtcbiAgICBpZiAoIWlzTmFOKHBhcnNlZFN0YXJ0ICogZW5kKSAmJiBlbmQgIT09IFwiXCIpIHtcbiAgICAgIC8vIGZ1biBmYWN0OiBhbnkgbnVtYmVyIG11bHRpcGxpZWQgYnkgXCJcIiBpcyBldmFsdWF0ZWQgYXMgdGhlIG51bWJlciAwIVxuICAgICAgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsICtwYXJzZWRTdGFydCB8fCAwLCBlbmQgLSAocGFyc2VkU3RhcnQgfHwgMCksIHR5cGVvZiBjdXJyZW50VmFsdWUgPT09IFwiYm9vbGVhblwiID8gX3JlbmRlckJvb2xlYW4gOiBfcmVuZGVyUGxhaW4sIDAsIHNldHRlcik7XG4gICAgICBmdW5jUGFyYW0gJiYgKHB0LmZwID0gZnVuY1BhcmFtKTtcbiAgICAgIG1vZGlmaWVyICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0aGlzLCB0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRoaXMuX3B0ID0gcHQ7XG4gICAgfVxuXG4gICAgIWN1cnJlbnRWYWx1ZSAmJiAhKHByb3AgaW4gdGFyZ2V0KSAmJiBfbWlzc2luZ1BsdWdpbihwcm9wLCBlbmQpO1xuICAgIHJldHVybiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbi5jYWxsKHRoaXMsIHRhcmdldCwgcHJvcCwgcGFyc2VkU3RhcnQsIGVuZCwgc2V0dGVyLCBzdHJpbmdGaWx0ZXIgfHwgX2NvbmZpZy5zdHJpbmdGaWx0ZXIsIGZ1bmNQYXJhbSk7XG4gIH1cbn0sXG4gICAgLy9jcmVhdGVzIGEgY29weSBvZiB0aGUgdmFycyBvYmplY3QgYW5kIHByb2Nlc3NlcyBhbnkgZnVuY3Rpb24tYmFzZWQgdmFsdWVzIChwdXR0aW5nIHRoZSByZXN1bHRpbmcgdmFsdWVzIGRpcmVjdGx5IGludG8gdGhlIGNvcHkpIGFzIHdlbGwgYXMgc3RyaW5ncyB3aXRoIFwicmFuZG9tKClcIiBpbiB0aGVtLiBJdCBkb2VzIE5PVCBwcm9jZXNzIHJlbGF0aXZlIHZhbHVlcy5cbl9wcm9jZXNzVmFycyA9IGZ1bmN0aW9uIF9wcm9jZXNzVmFycyh2YXJzLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2Vlbikge1xuICBfaXNGdW5jdGlvbih2YXJzKSAmJiAodmFycyA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykpO1xuXG4gIGlmICghX2lzT2JqZWN0KHZhcnMpIHx8IHZhcnMuc3R5bGUgJiYgdmFycy5ub2RlVHlwZSB8fCBfaXNBcnJheSh2YXJzKSB8fCBfaXNUeXBlZEFycmF5KHZhcnMpKSB7XG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YXJzKSA/IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykgOiB2YXJzO1xuICB9XG5cbiAgdmFyIGNvcHkgPSB7fSxcbiAgICAgIHA7XG5cbiAgZm9yIChwIGluIHZhcnMpIHtcbiAgICBjb3B5W3BdID0gX3BhcnNlRnVuY09yU3RyaW5nKHZhcnNbcF0sIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKTtcbiAgfVxuXG4gIHJldHVybiBjb3B5O1xufSxcbiAgICBfY2hlY2tQbHVnaW4gPSBmdW5jdGlvbiBfY2hlY2tQbHVnaW4ocHJvcGVydHksIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHZhciBwbHVnaW4sIHB0LCBwdExvb2t1cCwgaTtcblxuICBpZiAoX3BsdWdpbnNbcHJvcGVydHldICYmIChwbHVnaW4gPSBuZXcgX3BsdWdpbnNbcHJvcGVydHldKCkpLmluaXQodGFyZ2V0LCBwbHVnaW4ucmF3VmFycyA/IHZhcnNbcHJvcGVydHldIDogX3Byb2Nlc3NWYXJzKHZhcnNbcHJvcGVydHldLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzLCB0d2VlbiksIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykgIT09IGZhbHNlKSB7XG4gICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgaWYgKHR3ZWVuICE9PSBfcXVpY2tUd2Vlbikge1xuICAgICAgcHRMb29rdXAgPSB0d2Vlbi5fcHRMb29rdXBbdHdlZW4uX3RhcmdldHMuaW5kZXhPZih0YXJnZXQpXTsgLy9ub3RlOiB3ZSBjYW4ndCB1c2UgdHdlZW4uX3B0TG9va3VwW2luZGV4XSBiZWNhdXNlIGZvciBzdGFnZ2VyZWQgdHdlZW5zLCB0aGUgaW5kZXggZnJvbSB0aGUgZnVsbFRhcmdldHMgYXJyYXkgd29uJ3QgbWF0Y2ggd2hhdCBpdCBpcyBpbiBlYWNoIGluZGl2aWR1YWwgdHdlZW4gdGhhdCBzcGF3bnMgZnJvbSB0aGUgc3RhZ2dlci5cblxuICAgICAgaSA9IHBsdWdpbi5fcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHB0TG9va3VwW3BsdWdpbi5fcHJvcHNbaV1dID0gcHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBsdWdpbjtcbn0sXG4gICAgX292ZXJ3cml0aW5nVHdlZW4sXG4gICAgLy9zdG9yZSBhIHJlZmVyZW5jZSB0ZW1wb3JhcmlseSBzbyB3ZSBjYW4gYXZvaWQgb3ZlcndyaXRpbmcgaXRzZWxmLlxuX2luaXRUd2VlbiA9IGZ1bmN0aW9uIF9pbml0VHdlZW4odHdlZW4sIHRpbWUpIHtcbiAgdmFyIHZhcnMgPSB0d2Vlbi52YXJzLFxuICAgICAgZWFzZSA9IHZhcnMuZWFzZSxcbiAgICAgIHN0YXJ0QXQgPSB2YXJzLnN0YXJ0QXQsXG4gICAgICBpbW1lZGlhdGVSZW5kZXIgPSB2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgIGxhenkgPSB2YXJzLmxhenksXG4gICAgICBvblVwZGF0ZSA9IHZhcnMub25VcGRhdGUsXG4gICAgICBvblVwZGF0ZVBhcmFtcyA9IHZhcnMub25VcGRhdGVQYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlID0gdmFycy5jYWxsYmFja1Njb3BlLFxuICAgICAgcnVuQmFja3dhcmRzID0gdmFycy5ydW5CYWNrd2FyZHMsXG4gICAgICB5b3lvRWFzZSA9IHZhcnMueW95b0Vhc2UsXG4gICAgICBrZXlmcmFtZXMgPSB2YXJzLmtleWZyYW1lcyxcbiAgICAgIGF1dG9SZXZlcnQgPSB2YXJzLmF1dG9SZXZlcnQsXG4gICAgICBkdXIgPSB0d2Vlbi5fZHVyLFxuICAgICAgcHJldlN0YXJ0QXQgPSB0d2Vlbi5fc3RhcnRBdCxcbiAgICAgIHRhcmdldHMgPSB0d2Vlbi5fdGFyZ2V0cyxcbiAgICAgIHBhcmVudCA9IHR3ZWVuLnBhcmVudCxcbiAgICAgIGZ1bGxUYXJnZXRzID0gcGFyZW50ICYmIHBhcmVudC5kYXRhID09PSBcIm5lc3RlZFwiID8gcGFyZW50LnBhcmVudC5fdGFyZ2V0cyA6IHRhcmdldHMsXG4gICAgICBhdXRvT3ZlcndyaXRlID0gdHdlZW4uX292ZXJ3cml0ZSA9PT0gXCJhdXRvXCIgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMsXG4gICAgICB0bCA9IHR3ZWVuLnRpbWVsaW5lLFxuICAgICAgY2xlYW5WYXJzLFxuICAgICAgaSxcbiAgICAgIHAsXG4gICAgICBwdCxcbiAgICAgIHRhcmdldCxcbiAgICAgIGhhc1ByaW9yaXR5LFxuICAgICAgZ3NEYXRhLFxuICAgICAgaGFybmVzcyxcbiAgICAgIHBsdWdpbixcbiAgICAgIHB0TG9va3VwLFxuICAgICAgaW5kZXgsXG4gICAgICBoYXJuZXNzVmFycyxcbiAgICAgIG92ZXJ3cml0dGVuO1xuICB0bCAmJiAoIWtleWZyYW1lcyB8fCAhZWFzZSkgJiYgKGVhc2UgPSBcIm5vbmVcIik7XG4gIHR3ZWVuLl9lYXNlID0gX3BhcnNlRWFzZShlYXNlLCBfZGVmYXVsdHMuZWFzZSk7XG4gIHR3ZWVuLl95RWFzZSA9IHlveW9FYXNlID8gX2ludmVydEVhc2UoX3BhcnNlRWFzZSh5b3lvRWFzZSA9PT0gdHJ1ZSA/IGVhc2UgOiB5b3lvRWFzZSwgX2RlZmF1bHRzLmVhc2UpKSA6IDA7XG5cbiAgaWYgKHlveW9FYXNlICYmIHR3ZWVuLl95b3lvICYmICF0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy90aGVyZSBtdXN0IGhhdmUgYmVlbiBhIHBhcmVudCB0aW1lbGluZSB3aXRoIHlveW86dHJ1ZSB0aGF0IGlzIGN1cnJlbnRseSBpbiBpdHMgeW95byBwaGFzZSwgc28gZmxpcCB0aGUgZWFzZXMuXG4gICAgeW95b0Vhc2UgPSB0d2Vlbi5feUVhc2U7XG4gICAgdHdlZW4uX3lFYXNlID0gdHdlZW4uX2Vhc2U7XG4gICAgdHdlZW4uX2Vhc2UgPSB5b3lvRWFzZTtcbiAgfVxuXG4gIHR3ZWVuLl9mcm9tID0gIXRsICYmICEhdmFycy5ydW5CYWNrd2FyZHM7IC8vbmVzdGVkIHRpbWVsaW5lcyBzaG91bGQgbmV2ZXIgcnVuIGJhY2t3YXJkcyAtIHRoZSBiYWNrd2FyZHMtbmVzcyBpcyBpbiB0aGUgY2hpbGQgdHdlZW5zLlxuXG4gIGlmICghdGwpIHtcbiAgICAvL2lmIHRoZXJlJ3MgYW4gaW50ZXJuYWwgdGltZWxpbmUsIHNraXAgYWxsIHRoZSBwYXJzaW5nIGJlY2F1c2Ugd2UgcGFzc2VkIHRoYXQgdGFzayBkb3duIHRoZSBjaGFpbi5cbiAgICBoYXJuZXNzID0gdGFyZ2V0c1swXSA/IF9nZXRDYWNoZSh0YXJnZXRzWzBdKS5oYXJuZXNzIDogMDtcbiAgICBoYXJuZXNzVmFycyA9IGhhcm5lc3MgJiYgdmFyc1toYXJuZXNzLnByb3BdOyAvL3NvbWVvbmUgbWF5IG5lZWQgdG8gc3BlY2lmeSBDU1Mtc3BlY2lmaWMgdmFsdWVzIEFORCBub24tQ1NTIHZhbHVlcywgbGlrZSBpZiB0aGUgZWxlbWVudCBoYXMgYW4gXCJ4XCIgcHJvcGVydHkgcGx1cyBpdCdzIGEgc3RhbmRhcmQgRE9NIGVsZW1lbnQuIFdlIGFsbG93IHBlb3BsZSB0byBkaXN0aW5ndWlzaCBieSB3cmFwcGluZyBwbHVnaW4tc3BlY2lmaWMgc3R1ZmYgaW4gYSBjc3M6e30gb2JqZWN0IGZvciBleGFtcGxlLlxuXG4gICAgY2xlYW5WYXJzID0gX2NvcHlFeGNsdWRpbmcodmFycywgX3Jlc2VydmVkUHJvcHMpO1xuICAgIHByZXZTdGFydEF0ICYmIHByZXZTdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSkua2lsbCgpO1xuXG4gICAgaWYgKHN0YXJ0QXQpIHtcbiAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIF9zZXREZWZhdWx0cyh7XG4gICAgICAgIGRhdGE6IFwiaXNTdGFydFwiLFxuICAgICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyOiB0cnVlLFxuICAgICAgICBsYXp5OiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgc3RhcnRBdDogbnVsbCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIG9uVXBkYXRlOiBvblVwZGF0ZSxcbiAgICAgICAgb25VcGRhdGVQYXJhbXM6IG9uVXBkYXRlUGFyYW1zLFxuICAgICAgICBjYWxsYmFja1Njb3BlOiBjYWxsYmFja1Njb3BlLFxuICAgICAgICBzdGFnZ2VyOiAwXG4gICAgICB9LCBzdGFydEF0KSkpOyAvL2NvcHkgdGhlIHByb3BlcnRpZXMvdmFsdWVzIGludG8gYSBuZXcgb2JqZWN0IHRvIGF2b2lkIGNvbGxpc2lvbnMsIGxpa2UgdmFyIHRvID0ge3g6MH0sIGZyb20gPSB7eDo1MDB9OyB0aW1lbGluZS5mcm9tVG8oZSwgZnJvbSwgdG8pLmZyb21UbyhlLCB0bywgZnJvbSk7XG5cblxuICAgICAgdGltZSA8IDAgJiYgIWltbWVkaWF0ZVJlbmRlciAmJiAhYXV0b1JldmVydCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIHR3ZWVuLlxuXG4gICAgICBpZiAoaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgIHRpbWUgPiAwICYmICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZSBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSBvciB3aGVuIGF1dG9SZXZlcnQgaXMgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cblxuICAgICAgICBpZiAoZHVyICYmIHRpbWUgPD0gMCkge1xuICAgICAgICAgIHRpbWUgJiYgKHR3ZWVuLl96VGltZSA9IHRpbWUpO1xuICAgICAgICAgIHJldHVybjsgLy93ZSBza2lwIGluaXRpYWxpemF0aW9uIGhlcmUgc28gdGhhdCBvdmVyd3JpdGluZyBkb2Vzbid0IG9jY3VyIHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMuIE90aGVyd2lzZSwgaWYgeW91IGNyZWF0ZSBzZXZlcmFsIGltbWVkaWF0ZVJlbmRlcjp0cnVlIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQvcHJvcGVydGllcyB0byBkcm9wIGludG8gYSBUaW1lbGluZSwgdGhlIGxhc3Qgb25lIGNyZWF0ZWQgd291bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmVzIGJlY2F1c2UgdGhleSBkaWRuJ3QgZ2V0IHBsYWNlZCBpbnRvIHRoZSB0aW1lbGluZSB5ZXQgYmVmb3JlIHRoZSBmaXJzdCByZW5kZXIgb2NjdXJzIGFuZCBraWNrcyBpbiBvdmVyd3JpdGluZy5cbiAgICAgICAgfSAvLyBpZiAodGltZSA+IDApIHtcbiAgICAgICAgLy8gXHRhdXRvUmV2ZXJ0IHx8ICh0d2Vlbi5fc3RhcnRBdCA9IDApOyAvL3R3ZWVucyB0aGF0IHJlbmRlciBpbW1lZGlhdGVseSAobGlrZSBtb3N0IGZyb20oKSBhbmQgZnJvbVRvKCkgdHdlZW5zKSBzaG91bGRuJ3QgcmV2ZXJ0IHdoZW4gdGhlaXIgcGFyZW50IHRpbWVsaW5lJ3MgcGxheWhlYWQgZ29lcyBiYWNrd2FyZCBwYXN0IHRoZSBzdGFydFRpbWUgYmVjYXVzZSB0aGUgaW5pdGlhbCByZW5kZXIgY291bGQgaGF2ZSBoYXBwZW5lZCBhbnl0aW1lIGFuZCBpdCBzaG91bGRuJ3QgYmUgZGlyZWN0bHkgY29ycmVsYXRlZCB0byB0aGlzIHR3ZWVuJ3Mgc3RhcnRUaW1lLiBJbWFnaW5lIHNldHRpbmcgdXAgYSBjb21wbGV4IGFuaW1hdGlvbiB3aGVyZSB0aGUgYmVnaW5uaW5nIHN0YXRlcyBvZiB2YXJpb3VzIG9iamVjdHMgYXJlIHJlbmRlcmVkIGltbWVkaWF0ZWx5IGJ1dCB0aGUgdHdlZW4gZG9lc24ndCBoYXBwZW4gZm9yIHF1aXRlIHNvbWUgdGltZSAtIGlmIHdlIHJldmVydCB0byB0aGUgc3RhcnRpbmcgdmFsdWVzIGFzIHNvb24gYXMgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgdHdlZW4ncyBzdGFydFRpbWUsIGl0IHdpbGwgdGhyb3cgdGhpbmdzIG9mZiB2aXN1YWxseS4gUmV2ZXJzaW9uIHNob3VsZCBvbmx5IGhhcHBlbiBpbiBUaW1lbGluZSBpbnN0YW5jZXMgd2hlcmUgaW1tZWRpYXRlUmVuZGVyIHdhcyBmYWxzZSBvciB3aGVuIGF1dG9SZXZlcnQgaXMgZXhwbGljaXRseSBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgLy8gfSBlbHNlIGlmIChkdXIgJiYgISh0aW1lIDwgMCAmJiBwcmV2U3RhcnRBdCkpIHtcbiAgICAgICAgLy8gXHR0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgLy8gXHRyZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIC8vIH1cblxuICAgICAgfSBlbHNlIGlmIChhdXRvUmV2ZXJ0ID09PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fc3RhcnRBdCA9IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydW5CYWNrd2FyZHMgJiYgZHVyKSB7XG4gICAgICAvL2Zyb20oKSB0d2VlbnMgbXVzdCBiZSBoYW5kbGVkIHVuaXF1ZWx5OiB0aGVpciBiZWdpbm5pbmcgdmFsdWVzIG11c3QgYmUgcmVuZGVyZWQgYnV0IHdlIGRvbid0IHdhbnQgb3ZlcndyaXRpbmcgdG8gb2NjdXIgeWV0ICh3aGVuIHRpbWUgaXMgc3RpbGwgMCkuIFdhaXQgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucyBiZWZvcmUgZG9pbmcgYWxsIHRoZSByb3V0aW5lcyBsaWtlIG92ZXJ3cml0aW5nLiBBdCB0aGF0IHRpbWUsIHdlIHNob3VsZCByZW5kZXIgYXQgdGhlIEVORCBvZiB0aGUgdHdlZW4gdG8gZW5zdXJlIHRoYXQgdGhpbmdzIGluaXRpYWxpemUgY29ycmVjdGx5IChyZW1lbWJlciwgZnJvbSgpIHR3ZWVucyBnbyBiYWNrd2FyZHMpXG4gICAgICBpZiAocHJldlN0YXJ0QXQpIHtcbiAgICAgICAgIWF1dG9SZXZlcnQgJiYgKHR3ZWVuLl9zdGFydEF0ID0gMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aW1lICYmIChpbW1lZGlhdGVSZW5kZXIgPSBmYWxzZSk7IC8vaW4gcmFyZSBjYXNlcyAobGlrZSBpZiBhIGZyb20oKSB0d2VlbiBydW5zIGFuZCB0aGVuIGlzIGludmFsaWRhdGUoKS1lZCksIGltbWVkaWF0ZVJlbmRlciBjb3VsZCBiZSB0cnVlIGJ1dCB0aGUgaW5pdGlhbCBmb3JjZWQtcmVuZGVyIGdldHMgc2tpcHBlZCwgc28gdGhlcmUncyBubyBuZWVkIHRvIGZvcmNlIHRoZSByZW5kZXIgaW4gdGhpcyBjb250ZXh0IHdoZW4gdGhlIF90aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXG5cbiAgICAgICAgcCA9IF9zZXREZWZhdWx0cyh7XG4gICAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBcImlzRnJvbVN0YXJ0XCIsXG4gICAgICAgICAgLy93ZSB0YWcgdGhlIHR3ZWVuIHdpdGggYXMgXCJpc0Zyb21TdGFydFwiIHNvIHRoYXQgaWYgW2luc2lkZSBhIHBsdWdpbl0gd2UgbmVlZCB0byBvbmx5IGRvIHNvbWV0aGluZyBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2Vlbiwgd2UgaGF2ZSBhIHdheSBvZiBpZGVudGlmeWluZyB0aGlzIHR3ZWVuIGFzIG1lcmVseSB0aGUgb25lIHRoYXQncyBzZXR0aW5nIHRoZSBiZWdpbm5pbmcgdmFsdWVzIGZvciBhIFwiZnJvbSgpXCIgdHdlZW4uIEZvciBleGFtcGxlLCBjbGVhclByb3BzIGluIENTU1BsdWdpbiBzaG91bGQgb25seSBnZXQgYXBwbGllZCBhdCB0aGUgdmVyeSBFTkQgb2YgYSB0d2VlbiBhbmQgd2l0aG91dCB0aGlzIHRhZywgZnJvbSguLi57aGVpZ2h0OjEwMCwgY2xlYXJQcm9wczpcImhlaWdodFwiLCBkZWxheToxfSkgd291bGQgd2lwZSB0aGUgaGVpZ2h0IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHR3ZWVuIGFuZCBhZnRlciAxIHNlY29uZCwgaXQnZCBraWNrIGJhY2sgaW4uXG4gICAgICAgICAgbGF6eTogaW1tZWRpYXRlUmVuZGVyICYmIF9pc05vdEZhbHNlKGxhenkpLFxuICAgICAgICAgIGltbWVkaWF0ZVJlbmRlcjogaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICAgIC8vemVyby1kdXJhdGlvbiB0d2VlbnMgcmVuZGVyIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHQsIGJ1dCBpZiB3ZSdyZSBub3Qgc3BlY2lmaWNhbGx5IGluc3RydWN0ZWQgdG8gcmVuZGVyIHRoaXMgdHdlZW4gaW1tZWRpYXRlbHksIHdlIHNob3VsZCBza2lwIHRoaXMgYW5kIG1lcmVseSBfaW5pdCgpIHRvIHJlY29yZCB0aGUgc3RhcnRpbmcgdmFsdWVzIChyZW5kZXJpbmcgdGhlbSBpbW1lZGlhdGVseSB3b3VsZCBwdXNoIHRoZW0gdG8gY29tcGxldGlvbiB3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGF0IGNhc2UgLSB3ZSdkIGhhdmUgdG8gcmVuZGVyKC0xKSBpbW1lZGlhdGVseSBhZnRlcilcbiAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgIHBhcmVudDogcGFyZW50IC8vZW5zdXJlcyB0aGF0IG5lc3RlZCB0d2VlbnMgdGhhdCBoYWQgYSBzdGFnZ2VyIGFyZSBoYW5kbGVkIHByb3Blcmx5LCBsaWtlIGdzYXAuZnJvbShcIi5jbGFzc1wiLCB7eTpnc2FwLnV0aWxzLndyYXAoWy0xMDAsMTAwXSl9KVxuXG4gICAgICAgIH0sIGNsZWFuVmFycyk7XG4gICAgICAgIGhhcm5lc3NWYXJzICYmIChwW2hhcm5lc3MucHJvcF0gPSBoYXJuZXNzVmFycyk7IC8vIGluIGNhc2Ugc29tZW9uZSBkb2VzIHNvbWV0aGluZyBsaWtlIC5mcm9tKC4uLiwge2Nzczp7fX0pXG5cbiAgICAgICAgX3JlbW92ZUZyb21QYXJlbnQodHdlZW4uX3N0YXJ0QXQgPSBUd2Vlbi5zZXQodGFyZ2V0cywgcCkpO1xuXG4gICAgICAgIHRpbWUgPCAwICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcigtMSwgdHJ1ZSk7IC8vIHJhcmUgZWRnZSBjYXNlLCBsaWtlIGlmIGEgcmVuZGVyIGlzIGZvcmNlZCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIG9mIGEgbm9uLWluaXR0ZWQgZnJvbSgpIHR3ZWVuLlxuXG4gICAgICAgIGlmICghaW1tZWRpYXRlUmVuZGVyKSB7XG4gICAgICAgICAgX2luaXRUd2Vlbih0d2Vlbi5fc3RhcnRBdCwgX3RpbnlOdW0pOyAvL2Vuc3VyZXMgdGhhdCB0aGUgaW5pdGlhbCB2YWx1ZXMgYXJlIHJlY29yZGVkXG5cbiAgICAgICAgfSBlbHNlIGlmICghdGltZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHR3ZWVuLl9wdCA9IDA7XG4gICAgbGF6eSA9IGR1ciAmJiBfaXNOb3RGYWxzZShsYXp5KSB8fCBsYXp5ICYmICFkdXI7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgIGdzRGF0YSA9IHRhcmdldC5fZ3NhcCB8fCBfaGFybmVzcyh0YXJnZXRzKVtpXS5fZ3NhcDtcbiAgICAgIHR3ZWVuLl9wdExvb2t1cFtpXSA9IHB0TG9va3VwID0ge307XG4gICAgICBfbGF6eUxvb2t1cFtnc0RhdGEuaWRdICYmIF9sYXp5VHdlZW5zLmxlbmd0aCAmJiBfbGF6eVJlbmRlcigpOyAvL2lmIG90aGVyIHR3ZWVucyBvZiB0aGUgc2FtZSB0YXJnZXQgaGF2ZSByZWNlbnRseSBpbml0dGVkIGJ1dCBoYXZlbid0IHJlbmRlcmVkIHlldCwgd2UndmUgZ290IHRvIGZvcmNlIHRoZSByZW5kZXIgc28gdGhhdCB0aGUgc3RhcnRpbmcgdmFsdWVzIGFyZSBjb3JyZWN0IChpbWFnaW5lIHBvcHVsYXRpbmcgYSB0aW1lbGluZSB3aXRoIGEgYnVuY2ggb2Ygc2VxdWVudGlhbCB0d2VlbnMgYW5kIHRoZW4ganVtcGluZyB0byB0aGUgZW5kKVxuXG4gICAgICBpbmRleCA9IGZ1bGxUYXJnZXRzID09PSB0YXJnZXRzID8gaSA6IGZ1bGxUYXJnZXRzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgICAgaWYgKGhhcm5lc3MgJiYgKHBsdWdpbiA9IG5ldyBoYXJuZXNzKCkpLmluaXQodGFyZ2V0LCBoYXJuZXNzVmFycyB8fCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgZnVsbFRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgICAgICB0d2Vlbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4odHdlZW4uX3B0LCB0YXJnZXQsIHBsdWdpbi5uYW1lLCAwLCAxLCBwbHVnaW4ucmVuZGVyLCBwbHVnaW4sIDAsIHBsdWdpbi5wcmlvcml0eSk7XG5cbiAgICAgICAgcGx1Z2luLl9wcm9wcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcHRMb29rdXBbbmFtZV0gPSBwdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGx1Z2luLnByaW9yaXR5ICYmIChoYXNQcmlvcml0eSA9IDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWhhcm5lc3MgfHwgaGFybmVzc1ZhcnMpIHtcbiAgICAgICAgZm9yIChwIGluIGNsZWFuVmFycykge1xuICAgICAgICAgIGlmIChfcGx1Z2luc1twXSAmJiAocGx1Z2luID0gX2NoZWNrUGx1Z2luKHAsIGNsZWFuVmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIGZ1bGxUYXJnZXRzKSkpIHtcbiAgICAgICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHRMb29rdXBbcF0gPSBwdCA9IF9hZGRQcm9wVHdlZW4uY2FsbCh0d2VlbiwgdGFyZ2V0LCBwLCBcImdldFwiLCBjbGVhblZhcnNbcF0sIGluZGV4LCBmdWxsVGFyZ2V0cywgMCwgdmFycy5zdHJpbmdGaWx0ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fb3AgJiYgdHdlZW4uX29wW2ldICYmIHR3ZWVuLmtpbGwodGFyZ2V0LCB0d2Vlbi5fb3BbaV0pO1xuXG4gICAgICBpZiAoYXV0b092ZXJ3cml0ZSAmJiB0d2Vlbi5fcHQpIHtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSB0d2VlbjtcblxuICAgICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHRhcmdldCwgcHRMb29rdXAsIHR3ZWVuLmdsb2JhbFRpbWUodGltZSkpOyAvLyBtYWtlIHN1cmUgdGhlIG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb3ZlcndyaXRlIFRISVMgdHdlZW4hISFcblxuXG4gICAgICAgIG92ZXJ3cml0dGVuID0gIXR3ZWVuLnBhcmVudDtcbiAgICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSAwO1xuICAgICAgfVxuXG4gICAgICB0d2Vlbi5fcHQgJiYgbGF6eSAmJiAoX2xhenlMb29rdXBbZ3NEYXRhLmlkXSA9IDEpO1xuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodHdlZW4pO1xuICAgIHR3ZWVuLl9vbkluaXQgJiYgdHdlZW4uX29uSW5pdCh0d2Vlbik7IC8vcGx1Z2lucyBsaWtlIFJvdW5kUHJvcHMgbXVzdCB3YWl0IHVudGlsIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyBhcmUgaW5zdGFudGlhdGVkLiBJbiB0aGUgcGx1Z2luJ3MgaW5pdCgpIGZ1bmN0aW9uLCBpdCBzZXRzIHRoZSBfb25Jbml0IG9uIHRoZSB0d2VlbiBpbnN0YW5jZS4gTWF5IG5vdCBiZSBwcmV0dHkvaW50dWl0aXZlLCBidXQgaXQncyBmYXN0IGFuZCBrZWVwcyBmaWxlIHNpemUgZG93bi5cbiAgfVxuXG4gIHR3ZWVuLl9vblVwZGF0ZSA9IG9uVXBkYXRlO1xuICB0d2Vlbi5faW5pdHRlZCA9ICghdHdlZW4uX29wIHx8IHR3ZWVuLl9wdCkgJiYgIW92ZXJ3cml0dGVuOyAvLyBpZiBvdmVyd3JpdHRlblByb3BzIHJlc3VsdGVkIGluIHRoZSBlbnRpcmUgdHdlZW4gYmVpbmcga2lsbGVkLCBkbyBOT1QgZmxhZyBpdCBhcyBpbml0dGVkIG9yIGVsc2UgaXQgbWF5IHJlbmRlciBmb3Igb25lIHRpY2suXG59LFxuICAgIF9hZGRBbGlhc2VzVG9WYXJzID0gZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModGFyZ2V0cywgdmFycykge1xuICB2YXIgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDAsXG4gICAgICBwcm9wZXJ0eUFsaWFzZXMgPSBoYXJuZXNzICYmIGhhcm5lc3MuYWxpYXNlcyxcbiAgICAgIGNvcHksXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIGFsaWFzZXM7XG5cbiAgaWYgKCFwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIGNvcHkgPSBfbWVyZ2Uoe30sIHZhcnMpO1xuXG4gIGZvciAocCBpbiBwcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICBpZiAocCBpbiBjb3B5KSB7XG4gICAgICBhbGlhc2VzID0gcHJvcGVydHlBbGlhc2VzW3BdLnNwbGl0KFwiLFwiKTtcbiAgICAgIGkgPSBhbGlhc2VzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb3B5W2FsaWFzZXNbaV1dID0gY29weVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX3BhcnNlRnVuY09yU3RyaW5nID0gZnVuY3Rpb24gX3BhcnNlRnVuY09yU3RyaW5nKHZhbHVlLCB0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih2YWx1ZSkgPyB2YWx1ZS5jYWxsKHR3ZWVuLCBpLCB0YXJnZXQsIHRhcmdldHMpIDogX2lzU3RyaW5nKHZhbHVlKSAmJiB+dmFsdWUuaW5kZXhPZihcInJhbmRvbShcIikgPyBfcmVwbGFjZVJhbmRvbSh2YWx1ZSkgOiB2YWx1ZTtcbn0sXG4gICAgX3N0YWdnZXJUd2VlblByb3BzID0gX2NhbGxiYWNrTmFtZXMgKyBcInJlcGVhdCxyZXBlYXREZWxheSx5b3lvLHJlcGVhdFJlZnJlc2gseW95b0Vhc2VcIixcbiAgICBfc3RhZ2dlclByb3BzVG9Ta2lwID0gKF9zdGFnZ2VyVHdlZW5Qcm9wcyArIFwiLGlkLHN0YWdnZXIsZGVsYXksZHVyYXRpb24scGF1c2VkLHNjcm9sbFRyaWdnZXJcIikuc3BsaXQoXCIsXCIpO1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFR3ZWVuLCBfQW5pbWF0aW9uMik7XG5cbiAgZnVuY3Rpb24gVHdlZW4odGFyZ2V0cywgdmFycywgcG9zaXRpb24sIHNraXBJbmhlcml0KSB7XG4gICAgdmFyIF90aGlzMztcblxuICAgIGlmICh0eXBlb2YgdmFycyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcG9zaXRpb24uZHVyYXRpb24gPSB2YXJzO1xuICAgICAgdmFycyA9IHBvc2l0aW9uO1xuICAgICAgcG9zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIF90aGlzMyA9IF9BbmltYXRpb24yLmNhbGwodGhpcywgc2tpcEluaGVyaXQgPyB2YXJzIDogX2luaGVyaXREZWZhdWx0cyh2YXJzKSkgfHwgdGhpcztcbiAgICB2YXIgX3RoaXMzJHZhcnMgPSBfdGhpczMudmFycyxcbiAgICAgICAgZHVyYXRpb24gPSBfdGhpczMkdmFycy5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfdGhpczMkdmFycy5kZWxheSxcbiAgICAgICAgaW1tZWRpYXRlUmVuZGVyID0gX3RoaXMzJHZhcnMuaW1tZWRpYXRlUmVuZGVyLFxuICAgICAgICBzdGFnZ2VyID0gX3RoaXMzJHZhcnMuc3RhZ2dlcixcbiAgICAgICAgb3ZlcndyaXRlID0gX3RoaXMzJHZhcnMub3ZlcndyaXRlLFxuICAgICAgICBrZXlmcmFtZXMgPSBfdGhpczMkdmFycy5rZXlmcmFtZXMsXG4gICAgICAgIGRlZmF1bHRzID0gX3RoaXMzJHZhcnMuZGVmYXVsdHMsXG4gICAgICAgIHNjcm9sbFRyaWdnZXIgPSBfdGhpczMkdmFycy5zY3JvbGxUcmlnZ2VyLFxuICAgICAgICB5b3lvRWFzZSA9IF90aGlzMyR2YXJzLnlveW9FYXNlLFxuICAgICAgICBwYXJlbnQgPSB2YXJzLnBhcmVudCB8fCBfZ2xvYmFsVGltZWxpbmUsXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSAoX2lzQXJyYXkodGFyZ2V0cykgfHwgX2lzVHlwZWRBcnJheSh0YXJnZXRzKSA/IF9pc051bWJlcih0YXJnZXRzWzBdKSA6IFwibGVuZ3RoXCIgaW4gdmFycykgPyBbdGFyZ2V0c10gOiB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICB0bCxcbiAgICAgICAgaSxcbiAgICAgICAgY29weSxcbiAgICAgICAgbCxcbiAgICAgICAgcCxcbiAgICAgICAgY3VyVGFyZ2V0LFxuICAgICAgICBzdGFnZ2VyRnVuYyxcbiAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlO1xuICAgIF90aGlzMy5fdGFyZ2V0cyA9IHBhcnNlZFRhcmdldHMubGVuZ3RoID8gX2hhcm5lc3MocGFyc2VkVGFyZ2V0cykgOiBfd2FybihcIkdTQVAgdGFyZ2V0IFwiICsgdGFyZ2V0cyArIFwiIG5vdCBmb3VuZC4gaHR0cHM6Ly9ncmVlbnNvY2suY29tXCIsICFfY29uZmlnLm51bGxUYXJnZXRXYXJuKSB8fCBbXTtcbiAgICBfdGhpczMuX3B0TG9va3VwID0gW107IC8vUHJvcFR3ZWVuIGxvb2t1cC4gQW4gYXJyYXkgY29udGFpbmluZyBhbiBvYmplY3QgZm9yIGVhY2ggdGFyZ2V0LCBoYXZpbmcga2V5cyBmb3IgZWFjaCB0d2VlbmluZyBwcm9wZXJ0eVxuXG4gICAgX3RoaXMzLl9vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG5cbiAgICBpZiAoa2V5ZnJhbWVzIHx8IHN0YWdnZXIgfHwgX2lzRnVuY09yU3RyaW5nKGR1cmF0aW9uKSB8fCBfaXNGdW5jT3JTdHJpbmcoZGVsYXkpKSB7XG4gICAgICB2YXJzID0gX3RoaXMzLnZhcnM7XG4gICAgICB0bCA9IF90aGlzMy50aW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gICAgICAgIGRhdGE6IFwibmVzdGVkXCIsXG4gICAgICAgIGRlZmF1bHRzOiBkZWZhdWx0cyB8fCB7fVxuICAgICAgfSk7XG4gICAgICB0bC5raWxsKCk7XG4gICAgICB0bC5wYXJlbnQgPSB0bC5fZHAgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG4gICAgICB0bC5fc3RhcnQgPSAwO1xuXG4gICAgICBpZiAoa2V5ZnJhbWVzKSB7XG4gICAgICAgIF9pbmhlcml0RGVmYXVsdHMoX3NldERlZmF1bHRzKHRsLnZhcnMuZGVmYXVsdHMsIHtcbiAgICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgICB9KSk7XG5cbiAgICAgICAgc3RhZ2dlciA/IHBhcnNlZFRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiAodCwgaSkge1xuICAgICAgICAgIHJldHVybiBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUsIGopIHtcbiAgICAgICAgICAgIHJldHVybiB0bC50byh0LCBmcmFtZSwgaiA/IFwiPlwiIDogaSAqIHN0YWdnZXIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IGtleWZyYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgIHJldHVybiB0bC50byhwYXJzZWRUYXJnZXRzLCBmcmFtZSwgXCI+XCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGwgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aDtcbiAgICAgICAgc3RhZ2dlckZ1bmMgPSBzdGFnZ2VyID8gZGlzdHJpYnV0ZShzdGFnZ2VyKSA6IF9lbXB0eUZ1bmM7XG5cbiAgICAgICAgaWYgKF9pc09iamVjdChzdGFnZ2VyKSkge1xuICAgICAgICAgIC8vdXNlcnMgY2FuIHBhc3MgaW4gY2FsbGJhY2tzIGxpa2Ugb25TdGFydC9vbkNvbXBsZXRlIGluIHRoZSBzdGFnZ2VyIG9iamVjdC4gVGhlc2Ugc2hvdWxkIGZpcmUgd2l0aCBlYWNoIGluZGl2aWR1YWwgdHdlZW4uXG4gICAgICAgICAgZm9yIChwIGluIHN0YWdnZXIpIHtcbiAgICAgICAgICAgIGlmICh+X3N0YWdnZXJUd2VlblByb3BzLmluZGV4T2YocCkpIHtcbiAgICAgICAgICAgICAgc3RhZ2dlclZhcnNUb01lcmdlIHx8IChzdGFnZ2VyVmFyc1RvTWVyZ2UgPSB7fSk7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZVtwXSA9IHN0YWdnZXJbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGNvcHkgPSB7fTtcblxuICAgICAgICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICAgICAgICBpZiAoX3N0YWdnZXJQcm9wc1RvU2tpcC5pbmRleE9mKHApIDwgMCkge1xuICAgICAgICAgICAgICBjb3B5W3BdID0gdmFyc1twXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb3B5LnN0YWdnZXIgPSAwO1xuICAgICAgICAgIHlveW9FYXNlICYmIChjb3B5LnlveW9FYXNlID0geW95b0Vhc2UpO1xuICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSAmJiBfbWVyZ2UoY29weSwgc3RhZ2dlclZhcnNUb01lcmdlKTtcbiAgICAgICAgICBjdXJUYXJnZXQgPSBwYXJzZWRUYXJnZXRzW2ldOyAvL2Rvbid0IGp1c3QgY29weSBkdXJhdGlvbiBvciBkZWxheSBiZWNhdXNlIGlmIHRoZXkncmUgYSBzdHJpbmcgb3IgZnVuY3Rpb24sIHdlJ2QgZW5kIHVwIGluIGFuIGluZmluaXRlIGxvb3AgYmVjYXVzZSBfaXNGdW5jT3JTdHJpbmcoKSB3b3VsZCBldmFsdWF0ZSBhcyB0cnVlIGluIHRoZSBjaGlsZCB0d2VlbnMsIGVudGVyaW5nIHRoaXMgbG9vcCwgZXRjLiBTbyB3ZSBwYXJzZSB0aGUgdmFsdWUgc3RyYWlnaHQgZnJvbSB2YXJzIGFuZCBkZWZhdWx0IHRvIDAuXG5cbiAgICAgICAgICBjb3B5LmR1cmF0aW9uID0gK19wYXJzZUZ1bmNPclN0cmluZyhkdXJhdGlvbiwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpO1xuICAgICAgICAgIGNvcHkuZGVsYXkgPSAoK19wYXJzZUZ1bmNPclN0cmluZyhkZWxheSwgX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpLCBpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpIHx8IDApIC0gX3RoaXMzLl9kZWxheTtcblxuICAgICAgICAgIGlmICghc3RhZ2dlciAmJiBsID09PSAxICYmIGNvcHkuZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIGlmIHNvbWVvbmUgZG9lcyBkZWxheTpcInJhbmRvbSgxLCA1KVwiLCByZXBlYXQ6LTEsIGZvciBleGFtcGxlLCB0aGUgZGVsYXkgc2hvdWxkbid0IGJlIGluc2lkZSB0aGUgcmVwZWF0LlxuICAgICAgICAgICAgX3RoaXMzLl9kZWxheSA9IGRlbGF5ID0gY29weS5kZWxheTtcbiAgICAgICAgICAgIF90aGlzMy5fc3RhcnQgKz0gZGVsYXk7XG4gICAgICAgICAgICBjb3B5LmRlbGF5ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0bC50byhjdXJUYXJnZXQsIGNvcHksIHN0YWdnZXJGdW5jKGksIGN1clRhcmdldCwgcGFyc2VkVGFyZ2V0cykpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGwuZHVyYXRpb24oKSA/IGR1cmF0aW9uID0gZGVsYXkgPSAwIDogX3RoaXMzLnRpbWVsaW5lID0gMDsgLy8gaWYgdGhlIHRpbWVsaW5lJ3MgZHVyYXRpb24gaXMgMCwgd2UgZG9uJ3QgbmVlZCBhIHRpbWVsaW5lIGludGVybmFsbHkhXG4gICAgICB9XG5cbiAgICAgIGR1cmF0aW9uIHx8IF90aGlzMy5kdXJhdGlvbihkdXJhdGlvbiA9IHRsLmR1cmF0aW9uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpczMudGltZWxpbmUgPSAwOyAvL3NwZWVkIG9wdGltaXphdGlvbiwgZmFzdGVyIGxvb2t1cHMgKG5vIGdvaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4pXG4gICAgfVxuXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdHJ1ZSAmJiAhX3N1cHByZXNzT3ZlcndyaXRlcykge1xuICAgICAgX292ZXJ3cml0aW5nVHdlZW4gPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyk7XG5cbiAgICAgIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YocGFyc2VkVGFyZ2V0cyk7XG5cbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShwYXJlbnQsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgcG9zaXRpb24pO1xuXG4gICAgdmFycy5yZXZlcnNlZCAmJiBfdGhpczMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzMy5wYXVzZWQodHJ1ZSk7XG5cbiAgICBpZiAoaW1tZWRpYXRlUmVuZGVyIHx8ICFkdXJhdGlvbiAmJiAha2V5ZnJhbWVzICYmIF90aGlzMy5fc3RhcnQgPT09IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lKSAmJiBfaXNOb3RGYWxzZShpbW1lZGlhdGVSZW5kZXIpICYmIF9oYXNOb1BhdXNlZEFuY2VzdG9ycyhfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMykpICYmIHBhcmVudC5kYXRhICE9PSBcIm5lc3RlZFwiKSB7XG4gICAgICBfdGhpczMuX3RUaW1lID0gLV90aW55TnVtOyAvL2ZvcmNlcyBhIHJlbmRlciB3aXRob3V0IGhhdmluZyB0byBzZXQgdGhlIHJlbmRlcigpIFwiZm9yY2VcIiBwYXJhbWV0ZXIgdG8gdHJ1ZSBiZWNhdXNlIHdlIHdhbnQgdG8gYWxsb3cgbGF6eWluZyBieSBkZWZhdWx0ICh1c2luZyB0aGUgXCJmb3JjZVwiIHBhcmFtZXRlciBhbHdheXMgZm9yY2VzIGFuIGltbWVkaWF0ZSBmdWxsIHJlbmRlcilcblxuICAgICAgX3RoaXMzLnJlbmRlcihNYXRoLm1heCgwLCAtZGVsYXkpKTsgLy9pbiBjYXNlIGRlbGF5IGlzIG5lZ2F0aXZlXG5cbiAgICB9XG5cbiAgICBzY3JvbGxUcmlnZ2VyICYmIF9zY3JvbGxUcmlnZ2VyKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzMztcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKSB7XG4gICAgdmFyIHByZXZUaW1lID0gdGhpcy5fdGltZSxcbiAgICAgICAgdER1ciA9IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPiB0RHVyIC0gX3RpbnlOdW0gJiYgdG90YWxUaW1lID49IDAgPyB0RHVyIDogdG90YWxUaW1lIDwgX3RpbnlOdW0gPyAwIDogdG90YWxUaW1lLFxuICAgICAgICB0aW1lLFxuICAgICAgICBwdCxcbiAgICAgICAgaXRlcmF0aW9uLFxuICAgICAgICBjeWNsZUR1cmF0aW9uLFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICBpc1lveW8sXG4gICAgICAgIHJhdGlvLFxuICAgICAgICB0aW1lbGluZSxcbiAgICAgICAgeW95b0Vhc2U7XG5cbiAgICBpZiAoIWR1cikge1xuICAgICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHRoaXMsIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICB9IGVsc2UgaWYgKHRUaW1lICE9PSB0aGlzLl90VGltZSB8fCAhdG90YWxUaW1lIHx8IGZvcmNlIHx8ICF0aGlzLl9pbml0dGVkICYmIHRoaXMuX3RUaW1lIHx8IHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5felRpbWUgPCAwICE9PSB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAvL3RoaXMgc2Vuc2VzIGlmIHdlJ3JlIGNyb3NzaW5nIG92ZXIgdGhlIHN0YXJ0IHRpbWUsIGluIHdoaWNoIGNhc2Ugd2UgbXVzdCByZWNvcmQgX3pUaW1lIGFuZCBmb3JjZSB0aGUgcmVuZGVyLCBidXQgd2UgZG8gaXQgaW4gdGhpcyBsZW5ndGh5IGNvbmRpdGlvbmFsIHdheSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyAodXN1YWxseSB3ZSBjYW4gc2tpcCB0aGUgY2FsY3VsYXRpb25zKTogdGhpcy5faW5pdHRlZCAmJiAodGhpcy5felRpbWUgPCAwKSAhPT0gKHRvdGFsVGltZSA8IDApXG4gICAgICB0aW1lID0gdFRpbWU7XG4gICAgICB0aW1lbGluZSA9IHRoaXMudGltZWxpbmU7XG5cbiAgICAgIGlmICh0aGlzLl9yZXBlYXQpIHtcbiAgICAgICAgLy9hZGp1c3QgdGhlIHRpbWUgZm9yIHJlcGVhdHMgYW5kIHlveW9zXG4gICAgICAgIGN5Y2xlRHVyYXRpb24gPSBkdXIgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3JlcGVhdCA8IC0xICYmIHRvdGFsVGltZSA8IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbFRpbWUoY3ljbGVEdXJhdGlvbiAqIDEwMCArIHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWUgPSBfcm91bmRQcmVjaXNlKHRUaW1lICUgY3ljbGVEdXJhdGlvbik7IC8vcm91bmQgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgZXJyb3JzLiAoNCAlIDAuOCBzaG91bGQgYmUgMCBidXQgc29tZSBicm93c2VycyByZXBvcnQgaXQgYXMgMC43OTk5OTk5OSEpXG5cbiAgICAgICAgaWYgKHRUaW1lID09PSB0RHVyKSB7XG4gICAgICAgICAgLy8gdGhlIHREdXIgPT09IHRUaW1lIGlzIGZvciBlZGdlIGNhc2VzIHdoZXJlIHRoZXJlJ3MgYSBsZW5ndGh5IGRlY2ltYWwgb24gdGhlIGR1cmF0aW9uIGFuZCBpdCBtYXkgcmVhY2ggdGhlIHZlcnkgZW5kIGJ1dCB0aGUgdGltZSBpcyByZW5kZXJlZCBhcyBub3QtcXVpdGUtdGhlcmUgKHJlbWVtYmVyLCB0RHVyIGlzIHJvdW5kZWQgdG8gNCBkZWNpbWFscyB3aGVyZWFzIGR1ciBpc24ndClcbiAgICAgICAgICBpdGVyYXRpb24gPSB0aGlzLl9yZXBlYXQ7XG4gICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVyYXRpb24gPSB+fih0VGltZSAvIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgICAgaWYgKGl0ZXJhdGlvbiAmJiBpdGVyYXRpb24gPT09IHRUaW1lIC8gY3ljbGVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGltZSA9IGR1cjtcbiAgICAgICAgICAgIGl0ZXJhdGlvbi0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRpbWUgPiBkdXIgJiYgKHRpbWUgPSBkdXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXNZb3lvID0gdGhpcy5feW95byAmJiBpdGVyYXRpb24gJiAxO1xuXG4gICAgICAgIGlmIChpc1lveW8pIHtcbiAgICAgICAgICB5b3lvRWFzZSA9IHRoaXMuX3lFYXNlO1xuICAgICAgICAgIHRpbWUgPSBkdXIgLSB0aW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJldkl0ZXJhdGlvbiA9IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRpbWUgPT09IHByZXZUaW1lICYmICFmb3JjZSAmJiB0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgICAgLy9jb3VsZCBiZSBkdXJpbmcgdGhlIHJlcGVhdERlbGF5IHBhcnQuIE5vIG5lZWQgdG8gcmVuZGVyIGFuZCBmaXJlIGNhbGxiYWNrcy5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgICAgICB0aW1lbGluZSAmJiB0aGlzLl95RWFzZSAmJiBfcHJvcGFnYXRlWW95b0Vhc2UodGltZWxpbmUsIGlzWW95byk7IC8vcmVwZWF0UmVmcmVzaCBmdW5jdGlvbmFsaXR5XG5cbiAgICAgICAgICBpZiAodGhpcy52YXJzLnJlcGVhdFJlZnJlc2ggJiYgIWlzWW95byAmJiAhdGhpcy5fbG9jaykge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IGZvcmNlID0gMTsgLy9mb3JjZSwgb3RoZXJ3aXNlIGlmIGxhenkgaXMgdHJ1ZSwgdGhlIF9hdHRlbXB0SW5pdFR3ZWVuKCkgd2lsbCByZXR1cm4gYW5kIHdlJ2xsIGp1bXAgb3V0IGFuZCBnZXQgY2F1Z2h0IGJvdW5jaW5nIG9uIGVhY2ggdGljay5cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoX3JvdW5kUHJlY2lzZShjeWNsZUR1cmF0aW9uICogaXRlcmF0aW9uKSwgdHJ1ZSkuaW52YWxpZGF0ZSgpLl9sb2NrID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pbml0dGVkKSB7XG4gICAgICAgIGlmIChfYXR0ZW1wdEluaXRUd2Vlbih0aGlzLCB0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogdGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gMDsgLy8gaW4gY29uc3RydWN0b3IgaWYgaW1tZWRpYXRlUmVuZGVyIGlzIHRydWUsIHdlIHNldCBfdFRpbWUgdG8gLV90aW55TnVtIHRvIGhhdmUgdGhlIHBsYXloZWFkIGNyb3NzIHRoZSBzdGFydGluZyBwb2ludCBidXQgd2UgY2FuJ3QgbGVhdmUgX3RUaW1lIGFzIGEgbmVnYXRpdmUgbnVtYmVyLlxuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZHVyICE9PSB0aGlzLl9kdXIpIHtcbiAgICAgICAgICAvLyB3aGlsZSBpbml0dGluZywgYSBwbHVnaW4gbGlrZSBJbmVydGlhUGx1Z2luIG1pZ2h0IGFsdGVyIHRoZSBkdXJhdGlvbiwgc28gcmVydW4gZnJvbSB0aGUgc3RhcnQgdG8gZW5zdXJlIGV2ZXJ5dGhpbmcgcmVuZGVycyBhcyBpdCBzaG91bGQuXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl90VGltZSA9IHRUaW1lO1xuICAgICAgdGhpcy5fdGltZSA9IHRpbWU7XG5cbiAgICAgIGlmICghdGhpcy5fYWN0ICYmIHRoaXMuX3RzKSB7XG4gICAgICAgIHRoaXMuX2FjdCA9IDE7IC8vYXMgbG9uZyBhcyBpdCdzIG5vdCBwYXVzZWQsIGZvcmNlIGl0IHRvIGJlIGFjdGl2ZSBzbyB0aGF0IGlmIHRoZSB1c2VyIHJlbmRlcnMgaW5kZXBlbmRlbnQgb2YgdGhlIHBhcmVudCB0aW1lbGluZSwgaXQnbGwgYmUgZm9yY2VkIHRvIHJlLXJlbmRlciBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgICAgIHRoaXMuX2xhenkgPSAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAoeW95b0Vhc2UgfHwgdGhpcy5fZWFzZSkodGltZSAvIGR1cik7XG5cbiAgICAgIGlmICh0aGlzLl9mcm9tKSB7XG4gICAgICAgIHRoaXMucmF0aW8gPSByYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIH1cblxuICAgICAgaWYgKHRpbWUgJiYgIXByZXZUaW1lICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblN0YXJ0XCIpO1xuXG4gICAgICAgIGlmICh0aGlzLl90VGltZSAhPT0gdFRpbWUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHRoZSBvblN0YXJ0IHRyaWdnZXJlZCBhIHJlbmRlciBhdCBhIGRpZmZlcmVudCBzcG90LCBlamVjdC4gTGlrZSBpZiBzb21lb25lIGRpZCBhbmltYXRpb24ucGF1c2UoMC41KSBvciBzb21ldGhpbmcgaW5zaWRlIHRoZSBvblN0YXJ0LlxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB0ID0gdGhpcy5fcHQ7XG5cbiAgICAgIHdoaWxlIChwdCkge1xuICAgICAgICBwdC5yKHJhdGlvLCBwdC5kKTtcbiAgICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICAgIH1cblxuICAgICAgdGltZWxpbmUgJiYgdGltZWxpbmUucmVuZGVyKHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiAhdGltZSAmJiBpc1lveW8gPyAtX3RpbnlOdW0gOiB0aW1lbGluZS5fZHVyICogcmF0aW8sIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkgfHwgdGhpcy5fc3RhcnRBdCAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuXG4gICAgICBpZiAodGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiB0aGlzLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIGZvcmNlKTsgLy9ub3RlOiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgd2UgdHVjayB0aGlzIGNvbmRpdGlvbmFsIGxvZ2ljIGluc2lkZSBsZXNzIHRyYXZlbGVkIGFyZWFzIChtb3N0IHR3ZWVucyBkb24ndCBoYXZlIGFuIG9uVXBkYXRlKS4gV2UnZCBqdXN0IGhhdmUgaXQgYXQgdGhlIGVuZCBiZWZvcmUgdGhlIG9uQ29tcGxldGUsIGJ1dCB0aGUgdmFsdWVzIHNob3VsZCBiZSB1cGRhdGVkIGJlZm9yZSBhbnkgb25VcGRhdGUgaXMgY2FsbGVkLCBzbyB3ZSBBTFNPIHB1dCBpdCBoZXJlIGFuZCB0aGVuIGlmIGl0J3Mgbm90IGNhbGxlZCwgd2UgZG8gc28gbGF0ZXIgbmVhciB0aGUgb25Db21wbGV0ZS5cblxuICAgICAgICBfY2FsbGJhY2sodGhpcywgXCJvblVwZGF0ZVwiKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVwZWF0ICYmIGl0ZXJhdGlvbiAhPT0gcHJldkl0ZXJhdGlvbiAmJiB0aGlzLnZhcnMub25SZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuXG4gICAgICBpZiAoKHRUaW1lID09PSB0aGlzLl90RHVyIHx8ICF0VGltZSkgJiYgdGhpcy5fdFRpbWUgPT09IHRUaW1lKSB7XG4gICAgICAgIHRvdGFsVGltZSA8IDAgJiYgdGhpcy5fc3RhcnRBdCAmJiAhdGhpcy5fb25VcGRhdGUgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgKHRvdGFsVGltZSB8fCAhZHVyKSAmJiAodFRpbWUgPT09IHRoaXMuX3REdXIgJiYgdGhpcy5fdHMgPiAwIHx8ICF0VGltZSAmJiB0aGlzLl90cyA8IDApICYmIF9yZW1vdmVGcm9tUGFyZW50KHRoaXMsIDEpOyAvLyBkb24ndCByZW1vdmUgaWYgd2UncmUgcmVuZGVyaW5nIGF0IGV4YWN0bHkgYSB0aW1lIG9mIDAsIGFzIHRoZXJlIGNvdWxkIGJlIGF1dG9SZXZlcnQgdmFsdWVzIHRoYXQgc2hvdWxkIGdldCBzZXQgb24gdGhlIG5leHQgdGljayAoaWYgdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydFRpbWUsIG5lZ2F0aXZlIHRvdGFsVGltZSkuIERvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lKSkge1xuICAgICAgICAgIC8vIGlmIHByZXZUaW1lIGFuZCB0VGltZSBhcmUgemVybywgd2Ugc2hvdWxkbid0IGZpcmUgdGhlIG9uUmV2ZXJzZUNvbXBsZXRlLiBUaGlzIGNvdWxkIGhhcHBlbiBpZiB5b3UgZ3NhcC50byguLi4ge3BhdXNlZDp0cnVlfSkucGxheSgpO1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzMudGFyZ2V0cyA9IGZ1bmN0aW9uIHRhcmdldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XG4gIH07XG5cbiAgX3Byb3RvMy5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9wdCA9IHRoaXMuX29wID0gdGhpcy5fc3RhcnRBdCA9IHRoaXMuX29uVXBkYXRlID0gdGhpcy5fbGF6eSA9IHRoaXMucmF0aW8gPSAwO1xuICAgIHRoaXMuX3B0TG9va3VwID0gW107XG4gICAgdGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoKTtcbiAgICByZXR1cm4gX0FuaW1hdGlvbjIucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8zLmtpbGwgPSBmdW5jdGlvbiBraWxsKHRhcmdldHMsIHZhcnMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0gXCJhbGxcIjtcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldHMgJiYgKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpKSB7XG4gICAgICB0aGlzLl9sYXp5ID0gdGhpcy5fcHQgPSAwO1xuICAgICAgcmV0dXJuIHRoaXMucGFyZW50ID8gX2ludGVycnVwdCh0aGlzKSA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZWxpbmUpIHtcbiAgICAgIHZhciB0RHVyID0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCB2YXJzLCBfb3ZlcndyaXRpbmdUd2VlbiAmJiBfb3ZlcndyaXRpbmdUd2Vlbi52YXJzLm92ZXJ3cml0ZSAhPT0gdHJ1ZSkuX2ZpcnN0IHx8IF9pbnRlcnJ1cHQodGhpcyk7IC8vIGlmIG5vdGhpbmcgaXMgbGVmdCB0d2VlbmluZywgaW50ZXJydXB0LlxuXG4gICAgICB0aGlzLnBhcmVudCAmJiB0RHVyICE9PSB0aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKSAmJiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fZHVyICogdGhpcy50aW1lbGluZS5fdER1ciAvIHREdXIsIDAsIDEpOyAvLyBpZiBhIG5lc3RlZCB0d2VlbiBpcyBraWxsZWQgdGhhdCBjaGFuZ2VzIHRoZSBkdXJhdGlvbiwgaXQgc2hvdWxkIGFmZmVjdCB0aGlzIHR3ZWVuJ3MgZHVyYXRpb24uIFdlIG11c3QgdXNlIHRoZSByYXRpbywgdGhvdWdoLCBiZWNhdXNlIHNvbWV0aW1lcyB0aGUgaW50ZXJuYWwgdGltZWxpbmUgaXMgc3RyZXRjaGVkIGxpa2UgZm9yIGtleWZyYW1lcyB3aGVyZSB0aGV5IGRvbid0IGFsbCBhZGQgdXAgdG8gd2hhdGV2ZXIgdGhlIHBhcmVudCB0d2VlbidzIGR1cmF0aW9uIHdhcyBzZXQgdG8uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBwYXJzZWRUYXJnZXRzID0gdGhpcy5fdGFyZ2V0cyxcbiAgICAgICAga2lsbGluZ1RhcmdldHMgPSB0YXJnZXRzID8gdG9BcnJheSh0YXJnZXRzKSA6IHBhcnNlZFRhcmdldHMsXG4gICAgICAgIHByb3BUd2Vlbkxvb2t1cCA9IHRoaXMuX3B0TG9va3VwLFxuICAgICAgICBmaXJzdFBUID0gdGhpcy5fcHQsXG4gICAgICAgIG92ZXJ3cml0dGVuUHJvcHMsXG4gICAgICAgIGN1ckxvb2t1cCxcbiAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBwLFxuICAgICAgICBwdCxcbiAgICAgICAgaTtcblxuICAgIGlmICgoIXZhcnMgfHwgdmFycyA9PT0gXCJhbGxcIikgJiYgX2FycmF5c01hdGNoKHBhcnNlZFRhcmdldHMsIGtpbGxpbmdUYXJnZXRzKSkge1xuICAgICAgdmFycyA9PT0gXCJhbGxcIiAmJiAodGhpcy5fcHQgPSAwKTtcbiAgICAgIHJldHVybiBfaW50ZXJydXB0KHRoaXMpO1xuICAgIH1cblxuICAgIG92ZXJ3cml0dGVuUHJvcHMgPSB0aGlzLl9vcCA9IHRoaXMuX29wIHx8IFtdO1xuXG4gICAgaWYgKHZhcnMgIT09IFwiYWxsXCIpIHtcbiAgICAgIC8vc28gcGVvcGxlIGNhbiBwYXNzIGluIGEgY29tbWEtZGVsaW1pdGVkIGxpc3Qgb2YgcHJvcGVydHkgbmFtZXNcbiAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgcCA9IHt9O1xuXG4gICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJldHVybiBwW25hbWVdID0gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFycyA9IHA7XG4gICAgICB9XG5cbiAgICAgIHZhcnMgPSBfYWRkQWxpYXNlc1RvVmFycyhwYXJzZWRUYXJnZXRzLCB2YXJzKTtcbiAgICB9XG5cbiAgICBpID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAofmtpbGxpbmdUYXJnZXRzLmluZGV4T2YocGFyc2VkVGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgY3VyTG9va3VwID0gcHJvcFR3ZWVuTG9va3VwW2ldO1xuXG4gICAgICAgIGlmICh2YXJzID09PSBcImFsbFwiKSB7XG4gICAgICAgICAgb3ZlcndyaXR0ZW5Qcm9wc1tpXSA9IHZhcnM7XG4gICAgICAgICAgcHJvcHMgPSBjdXJMb29rdXA7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSB7fTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wcyA9IG92ZXJ3cml0dGVuUHJvcHNbaV0gPSBvdmVyd3JpdHRlblByb3BzW2ldIHx8IHt9O1xuICAgICAgICAgIHByb3BzID0gdmFycztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocCBpbiBwcm9wcykge1xuICAgICAgICAgIHB0ID0gY3VyTG9va3VwICYmIGN1ckxvb2t1cFtwXTtcblxuICAgICAgICAgIGlmIChwdCkge1xuICAgICAgICAgICAgaWYgKCEoXCJraWxsXCIgaW4gcHQuZCkgfHwgcHQuZC5raWxsKHApID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjdXJMb29rdXBbcF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1ck92ZXJ3cml0ZVByb3BzICE9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBjdXJPdmVyd3JpdGVQcm9wc1twXSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdHRlZCAmJiAhdGhpcy5fcHQgJiYgZmlyc3RQVCAmJiBfaW50ZXJydXB0KHRoaXMpOyAvL2lmIGFsbCB0d2VlbmluZyBwcm9wZXJ0aWVzIGFyZSBraWxsZWQsIGtpbGwgdGhlIHR3ZWVuLiBXaXRob3V0IHRoaXMgbGluZSwgaWYgdGhlcmUncyBhIHR3ZWVuIHdpdGggbXVsdGlwbGUgdGFyZ2V0cyBhbmQgdGhlbiB5b3Uga2lsbFR3ZWVuc09mKCkgZWFjaCB0YXJnZXQgaW5kaXZpZHVhbGx5LCB0aGUgdHdlZW4gd291bGQgdGVjaG5pY2FsbHkgc3RpbGwgcmVtYWluIGFjdGl2ZSBhbmQgZmlyZSBpdHMgb25Db21wbGV0ZSBldmVuIHRob3VnaCB0aGVyZSBhcmVuJ3QgYW55IG1vcmUgcHJvcGVydGllcyB0d2VlbmluZy5cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnRvID0gZnVuY3Rpb24gdG8odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycywgYXJndW1lbnRzWzJdKTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5kZWxheWVkQ2FsbCA9IGZ1bmN0aW9uIGRlbGF5ZWRDYWxsKGRlbGF5LCBjYWxsYmFjaywgcGFyYW1zLCBzY29wZSkge1xuICAgIHJldHVybiBuZXcgVHdlZW4oY2FsbGJhY2ssIDAsIHtcbiAgICAgIGltbWVkaWF0ZVJlbmRlcjogZmFsc2UsXG4gICAgICBsYXp5OiBmYWxzZSxcbiAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBvbkNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlOiBjYWxsYmFjayxcbiAgICAgIG9uQ29tcGxldGVQYXJhbXM6IHBhcmFtcyxcbiAgICAgIG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBjYWxsYmFja1Njb3BlOiBzY29wZVxuICAgIH0pO1xuICB9O1xuXG4gIFR3ZWVuLmZyb21UbyA9IGZ1bmN0aW9uIGZyb21Ubyh0YXJnZXRzLCBmcm9tVmFycywgdG9WYXJzKSB7XG4gICAgcmV0dXJuIF9jcmVhdGVUd2VlblR5cGUoMiwgYXJndW1lbnRzKTtcbiAgfTtcblxuICBUd2Vlbi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycykge1xuICAgIHZhcnMuZHVyYXRpb24gPSAwO1xuICAgIHZhcnMucmVwZWF0RGVsYXkgfHwgKHZhcnMucmVwZWF0ID0gMCk7XG4gICAgcmV0dXJuIG5ldyBUd2Vlbih0YXJnZXRzLCB2YXJzKTtcbiAgfTtcblxuICBUd2Vlbi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXRzLCBwcm9wcywgb25seUFjdGl2ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShBbmltYXRpb24pO1xuXG5fc2V0RGVmYXVsdHMoVHdlZW4ucHJvdG90eXBlLCB7XG4gIF90YXJnZXRzOiBbXSxcbiAgX2xhenk6IDAsXG4gIF9zdGFydEF0OiAwLFxuICBfb3A6IDAsXG4gIF9vbkluaXQ6IDBcbn0pOyAvL2FkZCB0aGUgcGVydGluZW50IHRpbWVsaW5lIG1ldGhvZHMgdG8gVHdlZW4gaW5zdGFuY2VzIHNvIHRoYXQgdXNlcnMgY2FuIGNoYWluIGNvbnZlbmllbnRseSBhbmQgY3JlYXRlIGEgdGltZWxpbmUgYXV0b21hdGljYWxseS4gKHJlbW92ZWQgZHVlIHRvIGNvbmNlcm5zIHRoYXQgaXQnZCB1bHRpbWF0ZWx5IGFkZCB0byBtb3JlIGNvbmZ1c2lvbiBlc3BlY2lhbGx5IGZvciBiZWdpbm5lcnMpXG4vLyBfZm9yRWFjaE5hbWUoXCJ0byxmcm9tLGZyb21UbyxzZXQsY2FsbCxhZGQsYWRkTGFiZWwsYWRkUGF1c2VcIiwgbmFtZSA9PiB7XG4vLyBcdFR3ZWVuLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuLy8gXHRcdGxldCB0bCA9IG5ldyBUaW1lbGluZSgpO1xuLy8gXHRcdHJldHVybiBfYWRkVG9UaW1lbGluZSh0bCwgdGhpcylbbmFtZV0uYXBwbHkodGwsIHRvQXJyYXkoYXJndW1lbnRzKSk7XG4vLyBcdH1cbi8vIH0pO1xuLy9mb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eS4gTGV2ZXJhZ2UgdGhlIHRpbWVsaW5lIGNhbGxzLlxuXG5cbl9mb3JFYWNoTmFtZShcInN0YWdnZXJUbyxzdGFnZ2VyRnJvbSxzdGFnZ2VyRnJvbVRvXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIFR3ZWVuW25hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0bCA9IG5ldyBUaW1lbGluZSgpLFxuICAgICAgICBwYXJhbXMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuXG4gICAgcGFyYW1zLnNwbGljZShuYW1lID09PSBcInN0YWdnZXJGcm9tVG9cIiA/IDUgOiA0LCAwLCAwKTtcbiAgICByZXR1cm4gdGxbbmFtZV0uYXBwbHkodGwsIHBhcmFtcyk7XG4gIH07XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUFJPUFRXRUVOXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cblxudmFyIF9zZXR0ZXJQbGFpbiA9IGZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xufSxcbiAgICBfc2V0dGVyRnVuYyA9IGZ1bmN0aW9uIF9zZXR0ZXJGdW5jKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXRbcHJvcGVydHldKHZhbHVlKTtcbn0sXG4gICAgX3NldHRlckZ1bmNXaXRoUGFyYW0gPSBmdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XShkYXRhLmZwLCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJBdHRyaWJ1dGUgPSBmdW5jdGlvbiBfc2V0dGVyQXR0cmlidXRlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9nZXRTZXR0ZXIgPSBmdW5jdGlvbiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHRhcmdldFtwcm9wZXJ0eV0pID8gX3NldHRlckZ1bmMgOiBfaXNVbmRlZmluZWQodGFyZ2V0W3Byb3BlcnR5XSkgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZSA/IF9zZXR0ZXJBdHRyaWJ1dGUgOiBfc2V0dGVyUGxhaW47XG59LFxuICAgIF9yZW5kZXJQbGFpbiA9IGZ1bmN0aW9uIF9yZW5kZXJQbGFpbihyYXRpbywgZGF0YSkge1xuICByZXR1cm4gZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwMDApIC8gMTAwMDAwMCwgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJCb29sZWFuID0gZnVuY3Rpb24gX3JlbmRlckJvb2xlYW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCAhIShkYXRhLnMgKyBkYXRhLmMgKiByYXRpbyksIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQ29tcGxleFN0cmluZyA9IGZ1bmN0aW9uIF9yZW5kZXJDb21wbGV4U3RyaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0LFxuICAgICAgcyA9IFwiXCI7XG5cbiAgaWYgKCFyYXRpbyAmJiBkYXRhLmIpIHtcbiAgICAvL2IgPSBiZWdpbm5pbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuYjtcbiAgfSBlbHNlIGlmIChyYXRpbyA9PT0gMSAmJiBkYXRhLmUpIHtcbiAgICAvL2UgPSBlbmRpbmcgc3RyaW5nXG4gICAgcyA9IGRhdGEuZTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHMgPSBwdC5wICsgKHB0Lm0gPyBwdC5tKHB0LnMgKyBwdC5jICogcmF0aW8pIDogTWF0aC5yb3VuZCgocHQucyArIHB0LmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCkgKyBzOyAvL3dlIHVzZSB0aGUgXCJwXCIgcHJvcGVydHkgZm9yIHRoZSB0ZXh0IGluYmV0d2VlbiAobGlrZSBhIHN1ZmZpeCkuIEFuZCBpbiB0aGUgY29udGV4dCBvZiBhIGNvbXBsZXggc3RyaW5nLCB0aGUgbW9kaWZpZXIgKG0pIGlzIHR5cGljYWxseSBqdXN0IE1hdGgucm91bmQoKSwgbGlrZSBmb3IgUkdCIGNvbG9ycy5cblxuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICBzICs9IGRhdGEuYzsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIGNodW5rIG9mIG5vbi1udW1lcmljIHRleHQuXG4gIH1cblxuICBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcywgZGF0YSk7XG59LFxuICAgIF9yZW5kZXJQcm9wVHdlZW5zID0gZnVuY3Rpb24gX3JlbmRlclByb3BUd2VlbnMocmF0aW8sIGRhdGEpIHtcbiAgdmFyIHB0ID0gZGF0YS5fcHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxufSxcbiAgICBfYWRkUGx1Z2luTW9kaWZpZXIgPSBmdW5jdGlvbiBfYWRkUGx1Z2luTW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG4gICAgcHQucCA9PT0gcHJvcGVydHkgJiYgcHQubW9kaWZpZXIobW9kaWZpZXIsIHR3ZWVuLCB0YXJnZXQpO1xuICAgIHB0ID0gbmV4dDtcbiAgfVxufSxcbiAgICBfa2lsbFByb3BUd2VlbnNPZiA9IGZ1bmN0aW9uIF9raWxsUHJvcFR3ZWVuc09mKHByb3BlcnR5KSB7XG4gIHZhciBwdCA9IHRoaXMuX3B0LFxuICAgICAgaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nLFxuICAgICAgbmV4dDtcblxuICB3aGlsZSAocHQpIHtcbiAgICBuZXh0ID0gcHQuX25leHQ7XG5cbiAgICBpZiAocHQucCA9PT0gcHJvcGVydHkgJiYgIXB0Lm9wIHx8IHB0Lm9wID09PSBwcm9wZXJ0eSkge1xuICAgICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIHB0LCBcIl9wdFwiKTtcbiAgICB9IGVsc2UgaWYgKCFwdC5kZXApIHtcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyA9IDE7XG4gICAgfVxuXG4gICAgcHQgPSBuZXh0O1xuICB9XG5cbiAgcmV0dXJuICFoYXNOb25EZXBlbmRlbnRSZW1haW5pbmc7XG59LFxuICAgIF9zZXR0ZXJXaXRoTW9kaWZpZXIgPSBmdW5jdGlvbiBfc2V0dGVyV2l0aE1vZGlmaWVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhKSB7XG4gIGRhdGEubVNldCh0YXJnZXQsIHByb3BlcnR5LCBkYXRhLm0uY2FsbChkYXRhLnR3ZWVuLCB2YWx1ZSwgZGF0YS5tdCksIGRhdGEpO1xufSxcbiAgICBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5ID0gZnVuY3Rpb24gX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eShwYXJlbnQpIHtcbiAgdmFyIHB0ID0gcGFyZW50Ll9wdCxcbiAgICAgIG5leHQsXG4gICAgICBwdDIsXG4gICAgICBmaXJzdCxcbiAgICAgIGxhc3Q7IC8vc29ydHMgdGhlIFByb3BUd2VlbiBsaW5rZWQgbGlzdCBpbiBvcmRlciBvZiBwcmlvcml0eSBiZWNhdXNlIHNvbWUgcGx1Z2lucyBuZWVkIHRvIGRvIHRoZWlyIHdvcmsgYWZ0ZXIgQUxMIG9mIHRoZSBQcm9wVHdlZW5zIHdlcmUgY3JlYXRlZCAobGlrZSBSb3VuZFByb3BzUGx1Z2luIGFuZCBNb2RpZmllcnNQbHVnaW4pXG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0MiA9IGZpcnN0O1xuXG4gICAgd2hpbGUgKHB0MiAmJiBwdDIucHIgPiBwdC5wcikge1xuICAgICAgcHQyID0gcHQyLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChwdC5fcHJldiA9IHB0MiA/IHB0Mi5fcHJldiA6IGxhc3QpIHtcbiAgICAgIHB0Ll9wcmV2Ll9uZXh0ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpcnN0ID0gcHQ7XG4gICAgfVxuXG4gICAgaWYgKHB0Ll9uZXh0ID0gcHQyKSB7XG4gICAgICBwdDIuX3ByZXYgPSBwdDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IHB0O1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHBhcmVudC5fcHQgPSBmaXJzdDtcbn07IC8vUHJvcFR3ZWVuIGtleTogdCA9IHRhcmdldCwgcCA9IHByb3AsIHIgPSByZW5kZXJlciwgZCA9IGRhdGEsIHMgPSBzdGFydCwgYyA9IGNoYW5nZSwgb3AgPSBvdmVyd3JpdGVQcm9wZXJ0eSAoT05MWSBwb3B1bGF0ZWQgd2hlbiBpdCdzIGRpZmZlcmVudCB0aGFuIHApLCBwciA9IHByaW9yaXR5LCBfbmV4dC9fcHJldiBmb3IgdGhlIGxpbmtlZCBsaXN0IHNpYmxpbmdzLCBzZXQgPSBzZXR0ZXIsIG0gPSBtb2RpZmllciwgbVNldCA9IG1vZGlmaWVyU2V0dGVyICh0aGUgb3JpZ2luYWwgc2V0dGVyLCBiZWZvcmUgYSBtb2RpZmllciB3YXMgYWRkZWQpXG5cblxuZXhwb3J0IHZhciBQcm9wVHdlZW4gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQcm9wVHdlZW4obmV4dCwgdGFyZ2V0LCBwcm9wLCBzdGFydCwgY2hhbmdlLCByZW5kZXJlciwgZGF0YSwgc2V0dGVyLCBwcmlvcml0eSkge1xuICAgIHRoaXMudCA9IHRhcmdldDtcbiAgICB0aGlzLnMgPSBzdGFydDtcbiAgICB0aGlzLmMgPSBjaGFuZ2U7XG4gICAgdGhpcy5wID0gcHJvcDtcbiAgICB0aGlzLnIgPSByZW5kZXJlciB8fCBfcmVuZGVyUGxhaW47XG4gICAgdGhpcy5kID0gZGF0YSB8fCB0aGlzO1xuICAgIHRoaXMuc2V0ID0gc2V0dGVyIHx8IF9zZXR0ZXJQbGFpbjtcbiAgICB0aGlzLnByID0gcHJpb3JpdHkgfHwgMDtcbiAgICB0aGlzLl9uZXh0ID0gbmV4dDtcblxuICAgIGlmIChuZXh0KSB7XG4gICAgICBuZXh0Ll9wcmV2ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvNCA9IFByb3BUd2Vlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNC5tb2RpZmllciA9IGZ1bmN0aW9uIG1vZGlmaWVyKGZ1bmMsIHR3ZWVuLCB0YXJnZXQpIHtcbiAgICB0aGlzLm1TZXQgPSB0aGlzLm1TZXQgfHwgdGhpcy5zZXQ7IC8vaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSBzZXQgKGEgUHJvcFR3ZWVuIGNhbiBvbmx5IGhhdmUgb25lIG1vZGlmaWVyKVxuXG4gICAgdGhpcy5zZXQgPSBfc2V0dGVyV2l0aE1vZGlmaWVyO1xuICAgIHRoaXMubSA9IGZ1bmM7XG4gICAgdGhpcy5tdCA9IHRhcmdldDsgLy9tb2RpZmllciB0YXJnZXRcblxuICAgIHRoaXMudHdlZW4gPSB0d2VlbjtcbiAgfTtcblxuICByZXR1cm4gUHJvcFR3ZWVuO1xufSgpOyAvL0luaXRpYWxpemF0aW9uIHRhc2tzXG5cbl9mb3JFYWNoTmFtZShfY2FsbGJhY2tOYW1lcyArIFwicGFyZW50LGR1cmF0aW9uLGVhc2UsZGVsYXksb3ZlcndyaXRlLHJ1bkJhY2t3YXJkcyxzdGFydEF0LHlveW8saW1tZWRpYXRlUmVuZGVyLHJlcGVhdCxyZXBlYXREZWxheSxkYXRhLHBhdXNlZCxyZXZlcnNlZCxsYXp5LGNhbGxiYWNrU2NvcGUsc3RyaW5nRmlsdGVyLGlkLHlveW9FYXNlLHN0YWdnZXIsaW5oZXJpdCxyZXBlYXRSZWZyZXNoLGtleWZyYW1lcyxhdXRvUmV2ZXJ0LHNjcm9sbFRyaWdnZXJcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbn0pO1xuXG5fZ2xvYmFscy5Ud2Vlbk1heCA9IF9nbG9iYWxzLlR3ZWVuTGl0ZSA9IFR3ZWVuO1xuX2dsb2JhbHMuVGltZWxpbmVMaXRlID0gX2dsb2JhbHMuVGltZWxpbmVNYXggPSBUaW1lbGluZTtcbl9nbG9iYWxUaW1lbGluZSA9IG5ldyBUaW1lbGluZSh7XG4gIHNvcnRDaGlsZHJlbjogZmFsc2UsXG4gIGRlZmF1bHRzOiBfZGVmYXVsdHMsXG4gIGF1dG9SZW1vdmVDaGlsZHJlbjogdHJ1ZSxcbiAgaWQ6IFwicm9vdFwiLFxuICBzbW9vdGhDaGlsZFRpbWluZzogdHJ1ZVxufSk7XG5fY29uZmlnLnN0cmluZ0ZpbHRlciA9IF9jb2xvclN0cmluZ0ZpbHRlcjtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR1NBUFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG52YXIgX2dzYXAgPSB7XG4gIHJlZ2lzdGVyUGx1Z2luOiBmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgcmV0dXJuIF9jcmVhdGVQbHVnaW4oY29uZmlnKTtcbiAgICB9KTtcbiAgfSxcbiAgdGltZWxpbmU6IGZ1bmN0aW9uIHRpbWVsaW5lKHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFRpbWVsaW5lKHZhcnMpO1xuICB9LFxuICBnZXRUd2VlbnNPZjogZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSk7XG4gIH0sXG4gIGdldFByb3BlcnR5OiBmdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSB7XG4gICAgX2lzU3RyaW5nKHRhcmdldCkgJiYgKHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KVswXSk7IC8vaW4gY2FzZSBzZWxlY3RvciB0ZXh0IG9yIGFuIGFycmF5IGlzIHBhc3NlZCBpblxuXG4gICAgdmFyIGdldHRlciA9IF9nZXRDYWNoZSh0YXJnZXQgfHwge30pLmdldCxcbiAgICAgICAgZm9ybWF0ID0gdW5pdCA/IF9wYXNzVGhyb3VnaCA6IF9udW1lcmljSWZQb3NzaWJsZTtcblxuICAgIHVuaXQgPT09IFwibmF0aXZlXCIgJiYgKHVuaXQgPSBcIlwiKTtcbiAgICByZXR1cm4gIXRhcmdldCA/IHRhcmdldCA6ICFwcm9wZXJ0eSA/IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gICAgfSA6IGZvcm1hdCgoX3BsdWdpbnNbcHJvcGVydHldICYmIF9wbHVnaW5zW3Byb3BlcnR5XS5nZXQgfHwgZ2V0dGVyKSh0YXJnZXQsIHByb3BlcnR5LCB1bml0LCB1bmNhY2hlKSk7XG4gIH0sXG4gIHF1aWNrU2V0dGVyOiBmdW5jdGlvbiBxdWlja1NldHRlcih0YXJnZXQsIHByb3BlcnR5LCB1bml0KSB7XG4gICAgdGFyZ2V0ID0gdG9BcnJheSh0YXJnZXQpO1xuXG4gICAgaWYgKHRhcmdldC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc2V0dGVycyA9IHRhcmdldC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGdzYXAucXVpY2tTZXR0ZXIodCwgcHJvcGVydHksIHVuaXQpO1xuICAgICAgfSksXG4gICAgICAgICAgbCA9IHNldHRlcnMubGVuZ3RoO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IGw7XG5cbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIHNldHRlcnNbaV0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRhcmdldCA9IHRhcmdldFswXSB8fCB7fTtcblxuICAgIHZhciBQbHVnaW4gPSBfcGx1Z2luc1twcm9wZXJ0eV0sXG4gICAgICAgIGNhY2hlID0gX2dldENhY2hlKHRhcmdldCksXG4gICAgICAgIHAgPSBjYWNoZS5oYXJuZXNzICYmIChjYWNoZS5oYXJuZXNzLmFsaWFzZXMgfHwge30pW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSxcbiAgICAgICAgLy8gaW4gY2FzZSBpdCdzIGFuIGFsaWFzLCBsaWtlIFwicm90YXRlXCIgZm9yIFwicm90YXRpb25cIi5cbiAgICBzZXR0ZXIgPSBQbHVnaW4gPyBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBwID0gbmV3IFBsdWdpbigpO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ID0gMDtcbiAgICAgIHAuaW5pdCh0YXJnZXQsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgX3F1aWNrVHdlZW4sIDAsIFt0YXJnZXRdKTtcbiAgICAgIHAucmVuZGVyKDEsIHApO1xuICAgICAgX3F1aWNrVHdlZW4uX3B0ICYmIF9yZW5kZXJQcm9wVHdlZW5zKDEsIF9xdWlja1R3ZWVuKTtcbiAgICB9IDogY2FjaGUuc2V0KHRhcmdldCwgcCk7XG5cbiAgICByZXR1cm4gUGx1Z2luID8gc2V0dGVyIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gc2V0dGVyKHRhcmdldCwgcCwgdW5pdCA/IHZhbHVlICsgdW5pdCA6IHZhbHVlLCBjYWNoZSwgMSk7XG4gICAgfTtcbiAgfSxcbiAgaXNUd2VlbmluZzogZnVuY3Rpb24gaXNUd2VlbmluZyh0YXJnZXRzKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5nZXRUd2VlbnNPZih0YXJnZXRzLCB0cnVlKS5sZW5ndGggPiAwO1xuICB9LFxuICBkZWZhdWx0czogZnVuY3Rpb24gZGVmYXVsdHModmFsdWUpIHtcbiAgICB2YWx1ZSAmJiB2YWx1ZS5lYXNlICYmICh2YWx1ZS5lYXNlID0gX3BhcnNlRWFzZSh2YWx1ZS5lYXNlLCBfZGVmYXVsdHMuZWFzZSkpO1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9kZWZhdWx0cywgdmFsdWUgfHwge30pO1xuICB9LFxuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyh2YWx1ZSkge1xuICAgIHJldHVybiBfbWVyZ2VEZWVwKF9jb25maWcsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgcmVnaXN0ZXJFZmZlY3Q6IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KF9yZWYzKSB7XG4gICAgdmFyIG5hbWUgPSBfcmVmMy5uYW1lLFxuICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3QsXG4gICAgICAgIHBsdWdpbnMgPSBfcmVmMy5wbHVnaW5zLFxuICAgICAgICBkZWZhdWx0cyA9IF9yZWYzLmRlZmF1bHRzLFxuICAgICAgICBleHRlbmRUaW1lbGluZSA9IF9yZWYzLmV4dGVuZFRpbWVsaW5lO1xuICAgIChwbHVnaW5zIHx8IFwiXCIpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW5OYW1lKSB7XG4gICAgICByZXR1cm4gcGx1Z2luTmFtZSAmJiAhX3BsdWdpbnNbcGx1Z2luTmFtZV0gJiYgIV9nbG9iYWxzW3BsdWdpbk5hbWVdICYmIF93YXJuKG5hbWUgKyBcIiBlZmZlY3QgcmVxdWlyZXMgXCIgKyBwbHVnaW5OYW1lICsgXCIgcGx1Z2luLlwiKTtcbiAgICB9KTtcblxuICAgIF9lZmZlY3RzW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHRsKSB7XG4gICAgICByZXR1cm4gZWZmZWN0KHRvQXJyYXkodGFyZ2V0cyksIF9zZXREZWZhdWx0cyh2YXJzIHx8IHt9LCBkZWZhdWx0cyksIHRsKTtcbiAgICB9O1xuXG4gICAgaWYgKGV4dGVuZFRpbWVsaW5lKSB7XG4gICAgICBUaW1lbGluZS5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKF9lZmZlY3RzW25hbWVdKHRhcmdldHMsIF9pc09iamVjdCh2YXJzKSA/IHZhcnMgOiAocG9zaXRpb24gPSB2YXJzKSAmJiB7fSwgdGhpcyksIHBvc2l0aW9uKTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICByZWdpc3RlckVhc2U6IGZ1bmN0aW9uIHJlZ2lzdGVyRWFzZShuYW1lLCBlYXNlKSB7XG4gICAgX2Vhc2VNYXBbbmFtZV0gPSBfcGFyc2VFYXNlKGVhc2UpO1xuICB9LFxuICBwYXJzZUVhc2U6IGZ1bmN0aW9uIHBhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkgOiBfZWFzZU1hcDtcbiAgfSxcbiAgZ2V0QnlJZDogZnVuY3Rpb24gZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0QnlJZChpZCk7XG4gIH0sXG4gIGV4cG9ydFJvb3Q6IGZ1bmN0aW9uIGV4cG9ydFJvb3QodmFycywgaW5jbHVkZURlbGF5ZWRDYWxscykge1xuICAgIGlmICh2YXJzID09PSB2b2lkIDApIHtcbiAgICAgIHZhcnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUodmFycyksXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0O1xuICAgIHRsLnNtb290aENoaWxkVGltaW5nID0gX2lzTm90RmFsc2UodmFycy5zbW9vdGhDaGlsZFRpbWluZyk7XG5cbiAgICBfZ2xvYmFsVGltZWxpbmUucmVtb3ZlKHRsKTtcblxuICAgIHRsLl9kcCA9IDA7IC8vb3RoZXJ3aXNlIGl0J2xsIGdldCByZS1hY3RpdmF0ZWQgd2hlbiBhZGRpbmcgY2hpbGRyZW4gYW5kIGJlIHJlLWludHJvZHVjZWQgaW50byBfZ2xvYmFsVGltZWxpbmUncyBsaW5rZWQgbGlzdCAodGhlbiBhZGRlZCB0byBpdHNlbGYpLlxuXG4gICAgdGwuX3RpbWUgPSB0bC5fdFRpbWUgPSBfZ2xvYmFsVGltZWxpbmUuX3RpbWU7XG4gICAgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBuZXh0ID0gY2hpbGQuX25leHQ7XG5cbiAgICAgIGlmIChpbmNsdWRlRGVsYXllZENhbGxzIHx8ICEoIWNoaWxkLl9kdXIgJiYgY2hpbGQgaW5zdGFuY2VvZiBUd2VlbiAmJiBjaGlsZC52YXJzLm9uQ29tcGxldGUgPT09IGNoaWxkLl90YXJnZXRzWzBdKSkge1xuICAgICAgICBfYWRkVG9UaW1lbGluZSh0bCwgY2hpbGQsIGNoaWxkLl9zdGFydCAtIGNoaWxkLl9kZWxheSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gbmV4dDtcbiAgICB9XG5cbiAgICBfYWRkVG9UaW1lbGluZShfZ2xvYmFsVGltZWxpbmUsIHRsLCAwKTtcblxuICAgIHJldHVybiB0bDtcbiAgfSxcbiAgdXRpbHM6IHtcbiAgICB3cmFwOiB3cmFwLFxuICAgIHdyYXBZb3lvOiB3cmFwWW95byxcbiAgICBkaXN0cmlidXRlOiBkaXN0cmlidXRlLFxuICAgIHJhbmRvbTogcmFuZG9tLFxuICAgIHNuYXA6IHNuYXAsXG4gICAgbm9ybWFsaXplOiBub3JtYWxpemUsXG4gICAgZ2V0VW5pdDogZ2V0VW5pdCxcbiAgICBjbGFtcDogY2xhbXAsXG4gICAgc3BsaXRDb2xvcjogc3BsaXRDb2xvcixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICBtYXBSYW5nZTogbWFwUmFuZ2UsXG4gICAgcGlwZTogcGlwZSxcbiAgICB1bml0aXplOiB1bml0aXplLFxuICAgIGludGVycG9sYXRlOiBpbnRlcnBvbGF0ZSxcbiAgICBzaHVmZmxlOiBzaHVmZmxlXG4gIH0sXG4gIGluc3RhbGw6IF9pbnN0YWxsLFxuICBlZmZlY3RzOiBfZWZmZWN0cyxcbiAgdGlja2VyOiBfdGlja2VyLFxuICB1cGRhdGVSb290OiBUaW1lbGluZS51cGRhdGVSb290LFxuICBwbHVnaW5zOiBfcGx1Z2lucyxcbiAgZ2xvYmFsVGltZWxpbmU6IF9nbG9iYWxUaW1lbGluZSxcbiAgY29yZToge1xuICAgIFByb3BUd2VlbjogUHJvcFR3ZWVuLFxuICAgIGdsb2JhbHM6IF9hZGRHbG9iYWwsXG4gICAgVHdlZW46IFR3ZWVuLFxuICAgIFRpbWVsaW5lOiBUaW1lbGluZSxcbiAgICBBbmltYXRpb246IEFuaW1hdGlvbixcbiAgICBnZXRDYWNoZTogX2dldENhY2hlLFxuICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbTogX3JlbW92ZUxpbmtlZExpc3RJdGVtLFxuICAgIHN1cHByZXNzT3ZlcndyaXRlczogZnVuY3Rpb24gc3VwcHJlc3NPdmVyd3JpdGVzKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3N1cHByZXNzT3ZlcndyaXRlcyA9IHZhbHVlO1xuICAgIH1cbiAgfVxufTtcblxuX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sZGVsYXllZENhbGwsc2V0LGtpbGxUd2VlbnNPZlwiLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gX2dzYXBbbmFtZV0gPSBUd2VlbltuYW1lXTtcbn0pO1xuXG5fdGlja2VyLmFkZChUaW1lbGluZS51cGRhdGVSb290KTtcblxuX3F1aWNrVHdlZW4gPSBfZ3NhcC50byh7fSwge1xuICBkdXJhdGlvbjogMFxufSk7IC8vIC0tLS0gRVhUUkEgUExVR0lOUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgX2dldFBsdWdpblByb3BUd2VlbiA9IGZ1bmN0aW9uIF9nZXRQbHVnaW5Qcm9wVHdlZW4ocGx1Z2luLCBwcm9wKSB7XG4gIHZhciBwdCA9IHBsdWdpbi5fcHQ7XG5cbiAgd2hpbGUgKHB0ICYmIHB0LnAgIT09IHByb3AgJiYgcHQub3AgIT09IHByb3AgJiYgcHQuZnAgIT09IHByb3ApIHtcbiAgICBwdCA9IHB0Ll9uZXh0O1xuICB9XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYWRkTW9kaWZpZXJzID0gZnVuY3Rpb24gX2FkZE1vZGlmaWVycyh0d2VlbiwgbW9kaWZpZXJzKSB7XG4gIHZhciB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwLFxuICAgICAgaSxcbiAgICAgIHB0O1xuXG4gIGZvciAocCBpbiBtb2RpZmllcnMpIHtcbiAgICBpID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBwdCA9IHR3ZWVuLl9wdExvb2t1cFtpXVtwXTtcblxuICAgICAgaWYgKHB0ICYmIChwdCA9IHB0LmQpKSB7XG4gICAgICAgIGlmIChwdC5fcHQpIHtcbiAgICAgICAgICAvLyBpcyBhIHBsdWdpblxuICAgICAgICAgIHB0ID0gX2dldFBsdWdpblByb3BUd2VlbihwdCwgcCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdCAmJiBwdC5tb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllcnNbcF0sIHR3ZWVuLCB0YXJnZXRzW2ldLCBwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgX2J1aWxkTW9kaWZpZXJQbHVnaW4gPSBmdW5jdGlvbiBfYnVpbGRNb2RpZmllclBsdWdpbihuYW1lLCBtb2RpZmllcikge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgcmF3VmFyczogMSxcbiAgICAvL2Rvbid0IHByZS1wcm9jZXNzIGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyBvciBcInJhbmRvbSgpXCIgc3RyaW5ncy5cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4pIHtcbiAgICAgIHR3ZWVuLl9vbkluaXQgPSBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgdmFyIHRlbXAsIHA7XG5cbiAgICAgICAgaWYgKF9pc1N0cmluZyh2YXJzKSkge1xuICAgICAgICAgIHRlbXAgPSB7fTtcblxuICAgICAgICAgIF9mb3JFYWNoTmFtZSh2YXJzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBbbmFtZV0gPSAxO1xuICAgICAgICAgIH0pOyAvL2lmIHRoZSB1c2VyIHBhc3NlcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzIHRvIHJvdW5kUHJvcHMsIGxpa2UgXCJ4LHlcIiwgd2Ugcm91bmQgdG8gd2hvbGUgbnVtYmVycy5cblxuXG4gICAgICAgICAgdmFycyA9IHRlbXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgdGVtcFtwXSA9IG1vZGlmaWVyKHZhcnNbcF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZE1vZGlmaWVycyh0d2VlbiwgdmFycyk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn07IC8vcmVnaXN0ZXIgY29yZSBwbHVnaW5zXG5cblxuZXhwb3J0IHZhciBnc2FwID0gX2dzYXAucmVnaXN0ZXJQbHVnaW4oe1xuICBuYW1lOiBcImF0dHJcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0cykge1xuICAgIHZhciBwLCBwdDtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBwdCA9IHRoaXMuYWRkKHRhcmdldCwgXCJzZXRBdHRyaWJ1dGVcIiwgKHRhcmdldC5nZXRBdHRyaWJ1dGUocCkgfHwgMCkgKyBcIlwiLCB2YXJzW3BdLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICBwdCAmJiAocHQub3AgPSBwKTtcblxuICAgICAgdGhpcy5fcHJvcHMucHVzaChwKTtcbiAgICB9XG4gIH1cbn0sIHtcbiAgbmFtZTogXCJlbmRBcnJheVwiLFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFsdWUpIHtcbiAgICB2YXIgaSA9IHZhbHVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuYWRkKHRhcmdldCwgaSwgdGFyZ2V0W2ldIHx8IDAsIHZhbHVlW2ldKTtcbiAgICB9XG4gIH1cbn0sIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwicm91bmRQcm9wc1wiLCBfcm91bmRNb2RpZmllciksIF9idWlsZE1vZGlmaWVyUGx1Z2luKFwibW9kaWZpZXJzXCIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcInNuYXBcIiwgc25hcCkpIHx8IF9nc2FwOyAvL3RvIHByZXZlbnQgdGhlIGNvcmUgcGx1Z2lucyBmcm9tIGJlaW5nIGRyb3BwZWQgdmlhIGFnZ3Jlc3NpdmUgdHJlZSBzaGFraW5nLCB3ZSBtdXN0IGluY2x1ZGUgdGhlbSBpbiB0aGUgdmFyaWFibGUgZGVjbGFyYXRpb24gaW4gdGhpcyB3YXkuXG5cblR3ZWVuLnZlcnNpb24gPSBUaW1lbGluZS52ZXJzaW9uID0gZ3NhcC52ZXJzaW9uID0gXCIzLjguMFwiO1xuX2NvcmVSZWFkeSA9IDE7XG5fd2luZG93RXhpc3RzKCkgJiYgX3dha2UoKTtcbnZhciBQb3dlcjAgPSBfZWFzZU1hcC5Qb3dlcjAsXG4gICAgUG93ZXIxID0gX2Vhc2VNYXAuUG93ZXIxLFxuICAgIFBvd2VyMiA9IF9lYXNlTWFwLlBvd2VyMixcbiAgICBQb3dlcjMgPSBfZWFzZU1hcC5Qb3dlcjMsXG4gICAgUG93ZXI0ID0gX2Vhc2VNYXAuUG93ZXI0LFxuICAgIExpbmVhciA9IF9lYXNlTWFwLkxpbmVhcixcbiAgICBRdWFkID0gX2Vhc2VNYXAuUXVhZCxcbiAgICBDdWJpYyA9IF9lYXNlTWFwLkN1YmljLFxuICAgIFF1YXJ0ID0gX2Vhc2VNYXAuUXVhcnQsXG4gICAgUXVpbnQgPSBfZWFzZU1hcC5RdWludCxcbiAgICBTdHJvbmcgPSBfZWFzZU1hcC5TdHJvbmcsXG4gICAgRWxhc3RpYyA9IF9lYXNlTWFwLkVsYXN0aWMsXG4gICAgQmFjayA9IF9lYXNlTWFwLkJhY2ssXG4gICAgU3RlcHBlZEVhc2UgPSBfZWFzZU1hcC5TdGVwcGVkRWFzZSxcbiAgICBCb3VuY2UgPSBfZWFzZU1hcC5Cb3VuY2UsXG4gICAgU2luZSA9IF9lYXNlTWFwLlNpbmUsXG4gICAgRXhwbyA9IF9lYXNlTWFwLkV4cG8sXG4gICAgQ2lyYyA9IF9lYXNlTWFwLkNpcmM7XG5leHBvcnQgeyBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTtcbmV4cG9ydCB7IFR3ZWVuIGFzIFR3ZWVuTWF4LCBUd2VlbiBhcyBUd2VlbkxpdGUsIFRpbWVsaW5lIGFzIFRpbWVsaW5lTWF4LCBUaW1lbGluZSBhcyBUaW1lbGluZUxpdGUsIGdzYXAgYXMgZGVmYXVsdCwgd3JhcCwgd3JhcFlveW8sIGRpc3RyaWJ1dGUsIHJhbmRvbSwgc25hcCwgbm9ybWFsaXplLCBnZXRVbml0LCBjbGFtcCwgc3BsaXRDb2xvciwgdG9BcnJheSwgc2VsZWN0b3IsIG1hcFJhbmdlLCBwaXBlLCB1bml0aXplLCBpbnRlcnBvbGF0ZSwgc2h1ZmZsZSB9OyAvL2V4cG9ydCBzb21lIGludGVybmFsIG1ldGhvZHMvb3JvamVjdHMgZm9yIHVzZSBpbiBDU1NQbHVnaW4gc28gdGhhdCB3ZSBjYW4gZXh0ZXJuYWxpemUgdGhhdCBmaWxlIGFuZCBhbGxvdyBjdXN0b20gYnVpbGRzIHRoYXQgZXhjbHVkZSBpdC5cblxuZXhwb3J0IHsgX2dldFByb3BlcnR5LCBfbnVtRXhwLCBfbnVtV2l0aFVuaXRFeHAsIF9pc1N0cmluZywgX2lzVW5kZWZpbmVkLCBfcmVuZGVyQ29tcGxleFN0cmluZywgX3JlbEV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0sIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfcmVwbGFjZVJhbmRvbSwgX2NoZWNrUGx1Z2luLCBfcGx1Z2lucywgX3RpY2tlciwgX2NvbmZpZywgX3JvdW5kTW9kaWZpZXIsIF9yb3VuZCwgX21pc3NpbmdQbHVnaW4sIF9nZXRTZXR0ZXIsIF9nZXRDYWNoZSwgX2NvbG9yRXhwIH07IiwiaW1wb3J0IHsgZ3NhcCwgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjLCBUd2VlbkxpdGUsIFRpbWVsaW5lTGl0ZSwgVGltZWxpbmVNYXggfSBmcm9tIFwiLi9nc2FwLWNvcmUuanNcIjtcbmltcG9ydCB7IENTU1BsdWdpbiB9IGZyb20gXCIuL0NTU1BsdWdpbi5qc1wiO1xudmFyIGdzYXBXaXRoQ1NTID0gZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pIHx8IGdzYXAsXG4gICAgLy8gdG8gcHJvdGVjdCBmcm9tIHRyZWUgc2hha2luZ1xuVHdlZW5NYXhXaXRoQ1NTID0gZ3NhcFdpdGhDU1MuY29yZS5Ud2VlbjtcbmV4cG9ydCB7IGdzYXBXaXRoQ1NTIGFzIGdzYXAsIGdzYXBXaXRoQ1NTIGFzIGRlZmF1bHQsIENTU1BsdWdpbiwgVHdlZW5NYXhXaXRoQ1NTIGFzIFR3ZWVuTWF4LCBUd2VlbkxpdGUsIFRpbWVsaW5lTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYyB9OyIsImltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW5jaG92aWVzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbGlnaHRib3gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jdXJzb3InO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9kcmFnJztcclxuXHJcbmNvbnNvbGUubG9nKCdidW5kbGUnKTsiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAvL25hdmlnYXRpb24gZnVuY3Rpb25hbGl0eVxyXG4gICAgJCgnLm5hdl9vcGVuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXZfd3JhcCcpLmNzcygncmlnaHQnLCAnMCcpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5uYXZfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLm5hdl93cmFwJykuY3NzKCdyaWdodCcsICctMTAwJScpO1xyXG4gICAgICAgICQoJy5uYXZfb3BlbicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3Rocml2ZSBpbWFnZSBibG9jayB3b3JkIGNoYW5nZSBvbiByZXNpemUvbW9iaWxlXHJcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjcpIHtcclxuICAgICAgICAkKFwiLnRocml2ZV9pbWFnZXNfaW50cm9fcmlnaHQgLmJvbGRcIikudGV4dCgnVGhlIGltYWdlIGJlbG93IG1lYW5zLi4uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY3KSB7XHJcbiAgICAgICAgICAgICQoXCIudGhyaXZlX2ltYWdlc19pbnRyb19yaWdodCAuYm9sZFwiKS50ZXh0KCdUaGUgaW1hZ2UgYmVsb3cgbWVhbnMuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIudGhyaXZlX2ltYWdlc19pbnRyb19yaWdodCAuYm9sZFwiKS50ZXh0KCdUaGUgaW1hZ2Ugb24gdGhlIGxlZnQgbWVhbnMuLi4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL3dvcmsgcGFnZSBsc2FiIGltYWdlIHN3YXBcclxuICAgIC8qaWYgKCQoXCIubHNhYl9zbGlkZVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdmFyIGludGVydmFsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0aW1lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlID0gJCgnLmFjdGl2ZV9sc2FiJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9ICgkKCcuYWN0aXZlX2xzYWInKS5uZXh0KCkubGVuZ3RoID4gMCkgPyAkKCcuYWN0aXZlX2xzYWInKS5uZXh0KCkgOiAkKCcubHNhYl9zbGlkZTpmaXJzdCcpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmVfbHNhYicpO1xyXG4gICAgICAgICAgICAgICAgbmV4dC5hZGRDbGFzcygnYWN0aXZlX2xzYWInKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aW1lcigpO1xyXG5cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG5cclxuICAgIH0qL1xyXG5cclxuICAgIC8vaWYgdmlkZW8gaXMgdW5rbm93blxyXG4gICAgJCgndmlkZW8gc291cmNlW3NyYz1cIlwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLm5vdGVfdmlkZW8nKS5hZGRDbGFzcygndmlkX2hpZGUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgkKCcubm90ZV92aWRlb19pbWFnZScpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpID09ICdub25lJykge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cygnLm5vdGVfdmlkZW8nKS5hZGRDbGFzcygndmlkX2hpZGUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgdGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5ub3RlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJCgnLm5vdGVfdmlkZW8nLCB0aGlzKS5oYXNDbGFzcyhcInZpZF9oaWRlXCIpKSB7XHJcbiAgICAgICAgICAgICQoJy5ub3RlX3VwcGVyJywgdGhpcykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5wcmV2X3Byb2plY3QgYSwgLm5leHRfcHJvamVjdCBhJykuYWRkQ2xhc3MoJ2hvdmVyc3dhcCcpO1xyXG5cclxufSk7IiwiLypjb25zdCBjdXJzb3JCZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnNvci1iZWVcIik7XHJcbmNvbnN0IGN1cnNvckV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLWV5ZVwiKTtcclxubGV0IHNjYWxlID0gMTtcclxuXHJcbmZ1bmN0aW9uIG1vdXNlbW92ZUhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoe1xyXG4gICAgICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgeTogZS5jbGllbnRZLFxyXG4gICAgICAgICAgICBlYXNlOiBcInBvd2VyMi5vdXRcIlxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaG92ZXJzd2FwXCIpKSB7XHJcbiAgICAgICAgdGwudG8oY3Vyc29yQmVlLCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICB9KS50byhcclxuICAgICAgICAgICAgY3Vyc29yRXllLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiLT0wLjVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGluZS1hbmltYXRpb25cIikpIHtcclxuICAgICAgICAgICAgc2NhbGUgPSA0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjYWxlID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRsLnRvKGN1cnNvckJlZSwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBzY2FsZTogc2NhbGVcclxuICAgICAgICB9KS50byhcclxuICAgICAgICAgICAgY3Vyc29yRXllLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiLT0wLjVcIlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdXNlbGVhdmVIYW5kbGVyKCkge1xyXG4gICAgZ3NhcC50byhjdXJzb3JCZWUsIHtcclxuICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZW1vdmVIYW5kbGVyKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgbW91c2VsZWF2ZUhhbmRsZXIpO1xyXG4qLyIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAgIC8vR0RCRCAxLTVcclxuICAgIC8vbGlnaHRib3gxXHJcbiAgICB2YXIgYm94ID0gJChcIi5saWdodGJveDFcIik7XHJcblxyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMVwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kcyxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kc1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYID0gdGhpcy5tYXhYO1xyXG4gICAgICAgIHZhciBtYXhZID0gdGhpcy5tYXhZO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WCkgVHdlZW5MaXRlLnNldChib3gsIHsgeDogbWF4WCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WSkgVHdlZW5MaXRlLnNldChib3gsIHsgeTogbWF4WSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MlxyXG4gICAgdmFyIGJveDIgPSAkKFwiLmxpZ2h0Ym94MlwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDIsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMixcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczJcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczIoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMiA9IHRoaXMubWF4WDI7XHJcbiAgICAgICAgdmFyIG1heFkyID0gdGhpcy5tYXhZMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyKSBUd2VlbkxpdGUuc2V0KGJveDIsIHsgeDogbWF4WDIgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyKSBUd2VlbkxpdGUuc2V0KGJveDIsIHsgeTogbWF4WTIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDNcclxuICAgIHZhciBib3gzID0gJChcIi5saWdodGJveDNcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gzLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwM1wiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczMsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMzXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMzKCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDMgPSB0aGlzLm1heFgzO1xyXG4gICAgICAgIHZhciBtYXhZMyA9IHRoaXMubWF4WTM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMykgVHdlZW5MaXRlLnNldChib3gzLCB7IHg6IG1heFgzIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMykgVHdlZW5MaXRlLnNldChib3gzLCB7IHk6IG1heFkzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3g0XHJcbiAgICB2YXIgYm94NCA9ICQoXCIubGlnaHRib3g0XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94NCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDRcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHM0LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzNFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzNCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFg0ID0gdGhpcy5tYXhYNDtcclxuICAgICAgICB2YXIgbWF4WTQgPSB0aGlzLm1heFk0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDQpIFR3ZWVuTGl0ZS5zZXQoYm94NCwgeyB4OiBtYXhYNCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTQpIFR3ZWVuTGl0ZS5zZXQoYm94NCwgeyB5OiBtYXhZNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94NVxyXG4gICAgdmFyIGJveDUgPSAkKFwiLmxpZ2h0Ym94NVwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDUsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXA1XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzNSxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczVcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczUoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYNSA9IHRoaXMubWF4WDU7XHJcbiAgICAgICAgdmFyIG1heFk1ID0gdGhpcy5tYXhZNTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFg1KSBUd2VlbkxpdGUuc2V0KGJveDUsIHsgeDogbWF4WDUgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFk1KSBUd2VlbkxpdGUuc2V0KGJveDUsIHsgeTogbWF4WTUgfSk7XHJcbiAgICB9XHJcbiAgICAvL1NUUiA2LTEwXHJcbiAgICAvL2xpZ2h0Ym94NlxyXG4gICAgdmFyIGJveDYgPSAkKFwiLmxpZ2h0Ym94NlwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDYsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXA2XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzNixcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczZcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczYoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYNiA9IHRoaXMubWF4WDY7XHJcbiAgICAgICAgdmFyIG1heFk2ID0gdGhpcy5tYXhZNjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFg2KSBUd2VlbkxpdGUuc2V0KGJveDYsIHsgeDogbWF4WDYgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFk2KSBUd2VlbkxpdGUuc2V0KGJveDYsIHsgeTogbWF4WTYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDdcclxuICAgIHZhciBib3g3ID0gJChcIi5saWdodGJveDdcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3g3LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwN1wiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczcsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHM3XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHM3KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDcgPSB0aGlzLm1heFg3O1xyXG4gICAgICAgIHZhciBtYXhZNyA9IHRoaXMubWF4WTc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYNykgVHdlZW5MaXRlLnNldChib3g3LCB7IHg6IG1heFg3IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZNykgVHdlZW5MaXRlLnNldChib3g3LCB7IHk6IG1heFk3IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3g4XHJcbiAgICB2YXIgYm94OCA9ICQoXCIubGlnaHRib3g4XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94OCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDhcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHM4LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzOFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzOCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFg4ID0gdGhpcy5tYXhYODtcclxuICAgICAgICB2YXIgbWF4WTggPSB0aGlzLm1heFk4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDgpIFR3ZWVuTGl0ZS5zZXQoYm94OCwgeyB4OiBtYXhYOCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTgpIFR3ZWVuTGl0ZS5zZXQoYm94OCwgeyB5OiBtYXhZOCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94OVxyXG4gICAgdmFyIGJveDkgPSAkKFwiLmxpZ2h0Ym94OVwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDksIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXA5XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzOSxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczkoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYOSA9IHRoaXMubWF4WDk7XHJcbiAgICAgICAgdmFyIG1heFk5ID0gdGhpcy5tYXhZOTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFg5KSBUd2VlbkxpdGUuc2V0KGJveDksIHsgeDogbWF4WDkgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFk5KSBUd2VlbkxpdGUuc2V0KGJveDksIHsgeTogbWF4WTkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDEwXHJcbiAgICB2YXIgYm94MTAgPSAkKFwiLmxpZ2h0Ym94MTBcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxMCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDEwXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTAsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTAoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTAgPSB0aGlzLm1heFgxMDtcclxuICAgICAgICB2YXIgbWF4WTEwID0gdGhpcy5tYXhZMTA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTApIFR3ZWVuTGl0ZS5zZXQoYm94MTAsIHsgeDogbWF4WDEwIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTApIFR3ZWVuTGl0ZS5zZXQoYm94MTAsIHsgeTogbWF4WTEwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUm9tYW4gQ2FuZGxlIDExLTEzXHJcbiAgICAvL2xpZ2h0Ym94MTFcclxuICAgIHZhciBib3gxMSA9ICQoXCIubGlnaHRib3gxMVwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDExLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTFcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxMSxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczExXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxMSgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxMSA9IHRoaXMubWF4WDExO1xyXG4gICAgICAgIHZhciBtYXhZMTEgPSB0aGlzLm1heFkxMTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxMSkgVHdlZW5MaXRlLnNldChib3gxMSwgeyB4OiBtYXhYMTEgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxMSkgVHdlZW5MaXRlLnNldChib3gxMSwgeyB5OiBtYXhZMTEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDEyXHJcbiAgICB2YXIgYm94MTIgPSAkKFwiLmxpZ2h0Ym94MTJcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxMiwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDEyXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTIsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxMlxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTIoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTIgPSB0aGlzLm1heFgxMjtcclxuICAgICAgICB2YXIgbWF4WTEyID0gdGhpcy5tYXhZMTI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTIpIFR3ZWVuTGl0ZS5zZXQoYm94MTIsIHsgeDogbWF4WDEyIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTIpIFR3ZWVuTGl0ZS5zZXQoYm94MTIsIHsgeTogbWF4WTEyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gxM1xyXG4gICAgdmFyIGJveDEzID0gJChcIi5saWdodGJveDEzXCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTMsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxM1wiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczEzLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMTNcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczEzKCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDEzID0gdGhpcy5tYXhYMTM7XHJcbiAgICAgICAgdmFyIG1heFkxMyA9IHRoaXMubWF4WTEzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDEzKSBUd2VlbkxpdGUuc2V0KGJveDEzLCB7IHg6IG1heFgxMyB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTEzKSBUd2VlbkxpdGUuc2V0KGJveDEzLCB7IHk6IG1heFkxMyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1Rocml2ZSAxNC0xNVxyXG4gICAgLy9saWdodGJveDE0XHJcbiAgICB2YXIgYm94MTQgPSAkKFwiLmxpZ2h0Ym94MTRcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxNCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDE0XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTQsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxNFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTQoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTQgPSB0aGlzLm1heFgxNDtcclxuICAgICAgICB2YXIgbWF4WTE0ID0gdGhpcy5tYXhZMTQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTQpIFR3ZWVuTGl0ZS5zZXQoYm94MTQsIHsgeDogbWF4WDE0IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTQpIFR3ZWVuTGl0ZS5zZXQoYm94MTQsIHsgeTogbWF4WTE0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gxNVxyXG4gICAgdmFyIGJveDE1ID0gJChcIi5saWdodGJveDE1XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTUsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxNVwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczE1LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMTVcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczE1KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDE1ID0gdGhpcy5tYXhYMTU7XHJcbiAgICAgICAgdmFyIG1heFkxNSA9IHRoaXMubWF4WTE1O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDE1KSBUd2VlbkxpdGUuc2V0KGJveDE1LCB7IHg6IG1heFgxNSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTE1KSBUd2VlbkxpdGUuc2V0KGJveDE1LCB7IHk6IG1heFkxNSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1Nob3crVGVsbCAxNi0xOFxyXG4gICAgLy9saWdodGJveDE2XHJcbiAgICB2YXIgYm94MTYgPSAkKFwiLmxpZ2h0Ym94MTZcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxNiwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDE2XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTYsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxNlxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTYoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTYgPSB0aGlzLm1heFgxNjtcclxuICAgICAgICB2YXIgbWF4WTE2ID0gdGhpcy5tYXhZMTY7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTYpIFR3ZWVuTGl0ZS5zZXQoYm94MTYsIHsgeDogbWF4WDE2IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTYpIFR3ZWVuTGl0ZS5zZXQoYm94MTYsIHsgeTogbWF4WTE2IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gxN1xyXG4gICAgdmFyIGJveDE3ID0gJChcIi5saWdodGJveDE3XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTcsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxN1wiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczE3LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMTdcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczE3KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDE3ID0gdGhpcy5tYXhYMTc7XHJcbiAgICAgICAgdmFyIG1heFkxNyA9IHRoaXMubWF4WTE3O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDE3KSBUd2VlbkxpdGUuc2V0KGJveDE3LCB7IHg6IG1heFgxNyB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTE3KSBUd2VlbkxpdGUuc2V0KGJveDE3LCB7IHk6IG1heFkxNyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MThcclxuICAgIHZhciBib3gxOCA9ICQoXCIubGlnaHRib3gxOFwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDE4LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMThcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxOCxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczE4XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxOCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxOCA9IHRoaXMubWF4WDE4O1xyXG4gICAgICAgIHZhciBtYXhZMTggPSB0aGlzLm1heFkxODtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxOCkgVHdlZW5MaXRlLnNldChib3gxOCwgeyB4OiBtYXhYMTggfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxOCkgVHdlZW5MaXRlLnNldChib3gxOCwgeyB5OiBtYXhZMTggfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Db3BwZXIgQ295b3RlIDE5LTIxXHJcbiAgICAvL2xpZ2h0Ym94MTlcclxuICAgIHZhciBib3gxOSA9ICQoXCIubGlnaHRib3gxOVwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDE5LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTlcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxOSxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczE5XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxOSgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxOSA9IHRoaXMubWF4WDE5O1xyXG4gICAgICAgIHZhciBtYXhZMTkgPSB0aGlzLm1heFkxOTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxOSkgVHdlZW5MaXRlLnNldChib3gxOSwgeyB4OiBtYXhYMTkgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxOSkgVHdlZW5MaXRlLnNldChib3gxOSwgeyB5OiBtYXhZMTkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDIwXHJcbiAgICB2YXIgYm94MjAgPSAkKFwiLmxpZ2h0Ym94MjBcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyMCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDIwXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjAsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyMFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjAoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjAgPSB0aGlzLm1heFgyMDtcclxuICAgICAgICB2YXIgbWF4WTIwID0gdGhpcy5tYXhZMjA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjApIFR3ZWVuTGl0ZS5zZXQoYm94MjAsIHsgeDogbWF4WDIwIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjApIFR3ZWVuTGl0ZS5zZXQoYm94MjAsIHsgeTogbWF4WTIwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gyMVxyXG4gICAgdmFyIGJveDIxID0gJChcIi5saWdodGJveDIxXCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MjEsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyMVwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczIxLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMjFcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczIxKCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDIxID0gdGhpcy5tYXhYMjE7XHJcbiAgICAgICAgdmFyIG1heFkyMSA9IHRoaXMubWF4WTIxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDIxKSBUd2VlbkxpdGUuc2V0KGJveDIxLCB7IHg6IG1heFgyMSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTIxKSBUd2VlbkxpdGUuc2V0KGJveDIxLCB7IHk6IG1heFkyMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1ZpcmlkaWFuIDIyLTI0XHJcbiAgICAvL2xpZ2h0Ym94MjJcclxuICAgIHZhciBib3gyMiA9ICQoXCIubGlnaHRib3gyMlwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDIyLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMjJcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyMixcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczIyXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMyMigpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyMiA9IHRoaXMubWF4WDIyO1xyXG4gICAgICAgIHZhciBtYXhZMjIgPSB0aGlzLm1heFkyMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyMikgVHdlZW5MaXRlLnNldChib3gyMiwgeyB4OiBtYXhYMjIgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyMikgVHdlZW5MaXRlLnNldChib3gyMiwgeyB5OiBtYXhZMjIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDIzXHJcbiAgICB2YXIgYm94MjMgPSAkKFwiLmxpZ2h0Ym94MjNcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyMywge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDIzXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjMsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyM1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjMoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjMgPSB0aGlzLm1heFgyMztcclxuICAgICAgICB2YXIgbWF4WTIzID0gdGhpcy5tYXhZMjM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjMpIFR3ZWVuTGl0ZS5zZXQoYm94MjMsIHsgeDogbWF4WDIzIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjMpIFR3ZWVuTGl0ZS5zZXQoYm94MjMsIHsgeTogbWF4WTIzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gyNFxyXG4gICAgdmFyIGJveDI0ID0gJChcIi5saWdodGJveDI0XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MjQsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyNFwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczI0LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMjRcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczI0KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDI0ID0gdGhpcy5tYXhYMjQ7XHJcbiAgICAgICAgdmFyIG1heFkyNCA9IHRoaXMubWF4WTI0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDI0KSBUd2VlbkxpdGUuc2V0KGJveDI0LCB7IHg6IG1heFgyNCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTI0KSBUd2VlbkxpdGUuc2V0KGJveDI0LCB7IHk6IG1heFkyNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1BhcmFjaHV0ZSAyNS0yNlxyXG4gICAgLy9saWdodGJveDI1XHJcbiAgICB2YXIgYm94MjUgPSAkKFwiLmxpZ2h0Ym94MjVcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyNSwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDI1XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjUsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyNVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjUoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjUgPSB0aGlzLm1heFgyNTtcclxuICAgICAgICB2YXIgbWF4WTI1ID0gdGhpcy5tYXhZMjU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjUpIFR3ZWVuTGl0ZS5zZXQoYm94MjUsIHsgeDogbWF4WDI1IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjUpIFR3ZWVuTGl0ZS5zZXQoYm94MjUsIHsgeTogbWF4WTI1IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gyNlxyXG4gICAgdmFyIGJveDI2ID0gJChcIi5saWdodGJveDI2XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MjYsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyNlwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczI2LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMjZcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczI2KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDI2ID0gdGhpcy5tYXhYMjY7XHJcbiAgICAgICAgdmFyIG1heFkyNiA9IHRoaXMubWF4WTI2O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDI2KSBUd2VlbkxpdGUuc2V0KGJveDI2LCB7IHg6IG1heFgyNiB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTI2KSBUd2VlbkxpdGUuc2V0KGJveDI2LCB7IHk6IG1heFkyNiB9KTtcclxuICAgIH1cclxuICAgIC8vSHVtYW5seSAyNy0yOFxyXG4gICAgLy9saWdodGJveDI3XHJcbiAgICB2YXIgYm94MjcgPSAkKFwiLmxpZ2h0Ym94MjdcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyNywge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDI3XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjcsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyN1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjcoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjcgPSB0aGlzLm1heFgyNztcclxuICAgICAgICB2YXIgbWF4WTI3ID0gdGhpcy5tYXhZMjc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjcpIFR3ZWVuTGl0ZS5zZXQoYm94MjcsIHsgeDogbWF4WDI3IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjcpIFR3ZWVuTGl0ZS5zZXQoYm94MjcsIHsgeTogbWF4WTI3IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gyOFxyXG4gICAgdmFyIGJveDI4ID0gJChcIi5saWdodGJveDI4XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MjgsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyOFwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczI4LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMjhcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczI4KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDI4ID0gdGhpcy5tYXhYMjg7XHJcbiAgICAgICAgdmFyIG1heFkyOCA9IHRoaXMubWF4WTI4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDI4KSBUd2VlbkxpdGUuc2V0KGJveDI4LCB7IHg6IG1heFgyOCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTI4KSBUd2VlbkxpdGUuc2V0KGJveDI4LCB7IHk6IG1heFkyOCB9KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbiIsImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IGNsb3NlXHJcbiAgICAkKCcubGlnaHRib3hfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X3dyYXAnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnLTEnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJyxcclxuICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUoMCwgMCknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveF9jbG9zZScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaW5pdGlhbCcpO1xyXG4gICAgICAgICQoJy5saWdodGJveF9vcGVuJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IGV4YW1wbGUgb3BlblxyXG4gICAgJCgnLmxpZ2h0Ym94X2V4YW1wbGVfb3BlbiAuYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveF9leGFtcGxlJykuY3NzKHtcclxuICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X2Nsb3NlJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggZXhhbXBsZSBjbG9zZVxyXG4gICAgJCgnLmxpZ2h0Ym94X2V4YW1wbGUgLmJ0biwgLmV4YW1wbGVfY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X2V4YW1wbGUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnb3BhY2l0eSc6ICcwJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnLTEnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2luaXRpYWwnKTtcclxuICAgICAgICAkKCcubGlnaHRib3hfY2xvc2UnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Hb29kIERheXMgQmFkIERheXMgMS01XHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDEnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDEnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnOTUwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDJcclxuICAgICQoJy5saWdodGJveG9wZW4yJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDNcclxuICAgICQoJy5saWdodGJveG9wZW4zJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAzJykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gzJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UzJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gNFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDQnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDQnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnNzU1cHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlNCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDVcclxuICAgICQoJy5saWdodGJveG9wZW41Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXA1JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3g1JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2U1JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1NtZWxsIFRoZSBSb3NlcyA2LTEwXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gNlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDYnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDYnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTYnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiA3XHJcbiAgICAkKCcubGlnaHRib3hvcGVuNycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwNycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94NycpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICc5NTBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2U3JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gOFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDgnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDgnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTgnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiA5XHJcbiAgICAkKCcubGlnaHRib3hvcGVuOScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwOScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94OScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICc3NTVweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2U5JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMTBcclxuICAgICQoJy5saWdodGJveG9wZW4xMCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTAnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDEwJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxMCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Sb21hbiBDYW5kbGUgMTEtMTNcclxuICAgIC8vbGlnaHRib3ggb3BlbiAxMVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjExJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxMScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTEnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTExJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMTJcclxuICAgICQoJy5saWdodGJveG9wZW4xMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTInKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDEyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzc1NXB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTEyJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMTNcclxuICAgICQoJy5saWdodGJveG9wZW4xMycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTMnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDEzJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxMycpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9UaHJpdmUgMTQtMTVcclxuICAgIC8vbGlnaHRib3ggb3BlbiAxNFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjE0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxNCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTQnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTE0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMTVcclxuICAgICQoJy5saWdodGJveG9wZW4xNScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTUnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDE1JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxNScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9TaG93K1RlbGwgMTYtMThcclxuICAgIC8vbGlnaHRib3ggb3BlbiAxNlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjE2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxNicpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTYnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTE2JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMTdcclxuICAgICQoJy5saWdodGJveG9wZW4xNycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTcnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDE3JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxNycpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDE4XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMTgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDE4JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gxOCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTgnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vQ29wcGVyeSBDb3lvdGUgMTktMjFcclxuICAgIC8vbGlnaHRib3ggb3BlbiAxOVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjE5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxOScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTknKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTE5JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjBcclxuICAgICQoJy5saWdodGJveG9wZW4yMCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjAnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDIwJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEwMDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyMCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDIxXHJcbiAgICAkKCcubGlnaHRib3hvcGVuMjEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDIxJykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gyMScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMjEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vVmlyaWRpYW4gMjItMjRcclxuICAgIC8vbGlnaHRib3ggb3BlbiAyMlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjIyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyMicpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjInKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTIyJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjNcclxuICAgICQoJy5saWdodGJveG9wZW4yMycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjMnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDIzJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzk1MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTIzJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjRcclxuICAgICQoJy5saWdodGJveG9wZW4yNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjQnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDI0JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyNCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9QYXJhY2h1dGUgMjUtMjZcclxuICAgIC8vbGlnaHRib3ggb3BlbiAyNVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjI1Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyNScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTI1JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjZcclxuICAgICQoJy5saWdodGJveG9wZW4yNicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjYnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDI2JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyNicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9IdW1hbmx5IDI3LTI4XHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjdcclxuICAgICQoJy5saWdodGJveG9wZW4yNycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjcnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDI3JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyNycpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDI4XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMjgnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDI4JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gyOCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMjgnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9
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
  });

  //thrive image block word change on resize/mobile
  if ($(window).width() < 767) {
    $(".thrive_images_intro_right .bold").text('The image below means...');
  }
  $(window).resize(function () {
    if ($(window).width() < 767) {
      $(".thrive_images_intro_right .bold").text('The image below means...');
    } else {
      $(".thrive_images_intro_right .bold").text('The image on the left means...');
    }
  });

  //work page lsab image swap
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
  $('.inner .item:nth-child(1)').addClass('active');
});
var allWrap = document.getElementsByClassName('slider');
for (var i = 0; i < allWrap.length; i++) {
  allWrap[i].classList.add('mySlider_' + i);
  var slider = new Slider('.mySlider_' + i);
  slider.addListeners();
}
var allWrap = document.getElementsByClassName('slider');
for (var i = 0; i < allWrap.length; i++) {
  allWrap[i].classList.add('mySlider_' + i);
  var slider = new Slider('.mySlider_' + i);
  slider.addListeners();
}
function Slider(newclass) {
  var _this2 = this;
  this.buttons = document.querySelectorAll(newclass + ' button');
  this.items = document.querySelectorAll(newclass + ' .item');
  this.activeItem = 0;
  this.isSliding = false;
  this.addListeners = function () {
    var _this = this;
    this.buttons.forEach(function (el) {
      return el.addEventListener("click", _this.slide);
    });
  };
  this.slide = function (event) {
    if (!_this2.isSliding) {
      _this2.isSliding = true;
      var currentItem = _this2.activeItem;
      if (event.target === _this2.buttons[1]) {
        _this2.activeItem === _this2.items.length - 1 ? _this2.activeItem = 0 : _this2.activeItem++;
        //active slide out left
        _this2.items[currentItem].classList.add('active-left');
        //next slide in left
        _this2.items[_this2.activeItem].classList.add('item-next', 'item-left');
        //remove classes
        setTimeout(function () {
          _this2.items[currentItem].classList.remove('active-left', 'active');
          _this2.items[_this2.activeItem].classList.remove('item-next', 'item-left');
          //set new active item
          _this2.items[_this2.activeItem].classList.add('active');
          _this2.isSliding = false;
        }, 1000);
      } else {
        _this2.activeItem === 0 ? _this2.activeItem = _this2.items.length - 1 : _this2.activeItem--;
        //active slide out right
        _this2.items[currentItem].classList.add('active-right');
        //prev slide in right
        _this2.items[_this2.activeItem].classList.add('item-prev', 'item-right');
        //remove classes
        setTimeout(function () {
          _this2.items[currentItem].classList.remove('active-right', 'active');
          _this2.items[_this2.activeItem].classList.remove('item-prev', 'item-right');
          //set new active item
          _this2.items[_this2.activeItem].classList.add('active');
          _this2.isSliding = false;
        }, 1000);
      }
    }
  };
}

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
  }

  //lightbox2
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
  }

  //lightbox3
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
  }

  //lightbox4
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
  }

  //lightbox5
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
  }
  //STR 6-10
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
  }

  //lightbox7
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
  }

  //lightbox8
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
  }

  //lightbox9
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
  }

  //lightbox10
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
  }

  //Roman Candle 11-13
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
  }

  //lightbox12
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
  }

  //lightbox13
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
  }

  //Thrive 14-15
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
  }

  //lightbox15
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
  }

  //Show+Tell 16-18
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
  }

  //lightbox17
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
  }

  //lightbox18
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
  }

  //Copper Coyote 19-21
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
  }

  //lightbox20
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
  }

  //lightbox21
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
  }

  //Viridian 22-24
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
  }

  //lightbox23
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
  }

  //lightbox24
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
  }

  //Parachute 25-26
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
  }

  //lightbox26
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
  }
  //Humanly 27-28
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
  }

  //lightbox28
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
  });

  //lightbox example open
  $('.lightbox_example_open .btn').on('click', function () {
    $('.lightbox_example').css({
      'opacity': '1',
      'z-index': '999999999'
    });
    $('.lightbox_close').css('opacity', '1');
    $('body').css('overflow', 'hidden');
  });

  //lightbox example close
  $('.lightbox_example .btn, .example_close').on('click', function () {
    $('.lightbox_example').css({
      'opacity': '0',
      'z-index': '-1'
    });
    $('body').css('overflow', 'initial');
    $('.lightbox_close').css('opacity', '0');
  });

  //Good Days Bad Days 1-5
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
  });

  //lightbox open 2
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
  });

  //lightbox open 3
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
  });

  //lightbox open 4
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
  });

  //lightbox open 5
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
  });

  //Smell The Roses 6-10
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
  });

  //lightbox open 7
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
  });

  //lightbox open 8
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
  });

  //lightbox open 9
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
  });

  //lightbox open 10
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
  });

  //Roman Candle 11-13
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
  });

  //lightbox open 12
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
  });

  //lightbox open 13
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
  });

  //Thrive 14-15
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
  });

  //lightbox open 15
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
  });

  //Show+Tell 16-18
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
  });

  //lightbox open 17
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
  });

  //lightbox open 18
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
  });

  //Coppery Coyote 19-21
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
  });

  //lightbox open 20
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
  });

  //lightbox open 21
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
  });

  //Viridian 22-24
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
  });

  //lightbox open 23
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
  });

  //lightbox open 24
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
  });

  //Parachute 25-26
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
  });

  //lightbox open 26
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
  });

  //Humanly 27-28
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
  });

  //lightbox open 28
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dzYXAvQ1NTUGx1Z2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nc2FwL2dzYXAtY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ3NhcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2FuY2hvdmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZHJhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC5qcyJdLCJuYW1lcyI6WyJfd2luIiwiX2RvYyIsIl9kb2NFbGVtZW50IiwiX3BsdWdpbkluaXR0ZWQiLCJfdGVtcERpdiIsIl90ZW1wRGl2U3R5bGVyIiwiX3JlY2VudFNldHRlclBsdWdpbiIsIl93aW5kb3dFeGlzdHMiLCJ3aW5kb3ciLCJfdHJhbnNmb3JtUHJvcHMiLCJfUkFEMkRFRyIsIk1hdGgiLCJQSSIsIl9ERUcyUkFEIiwiX2F0YW4yIiwiYXRhbjIiLCJfYmlnTnVtIiwiX2NhcHNFeHAiLCJfaG9yaXpvbnRhbEV4cCIsIl9jb21wbGV4RXhwIiwiX3Byb3BlcnR5QWxpYXNlcyIsImF1dG9BbHBoYSIsInNjYWxlIiwiYWxwaGEiLCJfcmVuZGVyQ1NTUHJvcCIsInJhdGlvIiwiZGF0YSIsInNldCIsInQiLCJwIiwicm91bmQiLCJzIiwiYyIsInUiLCJfcmVuZGVyUHJvcFdpdGhFbmQiLCJlIiwiX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nIiwiYiIsIl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCIsInZhbHVlIiwiX3JlbmRlck5vblR3ZWVuaW5nVmFsdWUiLCJfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCIsIl9zZXR0ZXJDU1NTdHlsZSIsInRhcmdldCIsInByb3BlcnR5Iiwic3R5bGUiLCJfc2V0dGVyQ1NTUHJvcCIsInNldFByb3BlcnR5IiwiX3NldHRlclRyYW5zZm9ybSIsIl9nc2FwIiwiX3NldHRlclNjYWxlIiwic2NhbGVYIiwic2NhbGVZIiwiX3NldHRlclNjYWxlV2l0aFJlbmRlciIsImNhY2hlIiwicmVuZGVyVHJhbnNmb3JtIiwiX3NldHRlclRyYW5zZm9ybVdpdGhSZW5kZXIiLCJfdHJhbnNmb3JtUHJvcCIsIl90cmFuc2Zvcm1PcmlnaW5Qcm9wIiwiX3N1cHBvcnRzM0QiLCJfY3JlYXRlRWxlbWVudCIsInR5cGUiLCJucyIsImNyZWF0ZUVsZW1lbnROUyIsInJlcGxhY2UiLCJjcmVhdGVFbGVtZW50IiwiX2dldENvbXB1dGVkUHJvcGVydHkiLCJza2lwUHJlZml4RmFsbGJhY2siLCJjcyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwidG9Mb3dlckNhc2UiLCJfY2hlY2tQcm9wUHJlZml4IiwiX3ByZWZpeGVzIiwic3BsaXQiLCJlbGVtZW50IiwicHJlZmVyUHJlZml4IiwiaSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyIiwiX2luaXRDb3JlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjc3NUZXh0IiwiX2dldEJCb3hIYWNrIiwic3dhcElmUG9zc2libGUiLCJzdmciLCJvd25lclNWR0VsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJvbGRQYXJlbnQiLCJwYXJlbnROb2RlIiwib2xkU2libGluZyIsIm5leHRTaWJsaW5nIiwib2xkQ1NTIiwiYmJveCIsImFwcGVuZENoaWxkIiwiZGlzcGxheSIsImdldEJCb3giLCJfZ3NhcEJCb3giLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsIl9nZXRBdHRyaWJ1dGVGYWxsYmFja3MiLCJhdHRyaWJ1dGVzQXJyYXkiLCJsZW5ndGgiLCJoYXNBdHRyaWJ1dGUiLCJfZ2V0QkJveCIsImJvdW5kcyIsImVycm9yIiwiY2FsbCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJfaXNTVkciLCJnZXRDVE0iLCJfcmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZUF0dHJpYnV0ZSIsIl9hZGROb25Ud2VlbmluZ1BUIiwicGx1Z2luIiwiYmVnaW5uaW5nIiwiZW5kIiwib25seVNldEF0RW5kIiwicHQiLCJQcm9wVHdlZW4iLCJfcHQiLCJfcHJvcHMiLCJwdXNoIiwiX25vbkNvbnZlcnRpYmxlVW5pdHMiLCJkZWciLCJyYWQiLCJ0dXJuIiwiX2NvbnZlcnRUb1VuaXQiLCJ1bml0IiwiY3VyVmFsdWUiLCJwYXJzZUZsb2F0IiwiY3VyVW5pdCIsInRyaW0iLCJob3Jpem9udGFsIiwidGVzdCIsImlzUm9vdFNWRyIsInRhZ05hbWUiLCJtZWFzdXJlUHJvcGVydHkiLCJhbW91bnQiLCJ0b1BpeGVscyIsInRvUGVyY2VudCIsInB4IiwicGFyZW50IiwiaXNTVkciLCJpbmRleE9mIiwiX3JvdW5kIiwiYm9keSIsInRpbWUiLCJfdGlja2VyIiwicG9zaXRpb24iLCJfZ2V0Q2FjaGUiLCJfZ2V0IiwidW5jYWNoZSIsIl9wYXJzZVRyYW5zZm9ybSIsIm9yaWdpbiIsIl9maXJzdFR3b09ubHkiLCJ6T3JpZ2luIiwiX3NwZWNpYWxQcm9wcyIsIl9nZXRQcm9wZXJ0eSIsIl90d2VlbkNvbXBsZXhDU1NTdHJpbmciLCJwcm9wIiwic3RhcnQiLCJfcmVuZGVyQ29tcGxleFN0cmluZyIsImluZGV4IiwibWF0Y2hJbmRleCIsImEiLCJyZXN1bHQiLCJzdGFydFZhbHVlcyIsInN0YXJ0TnVtIiwiY29sb3IiLCJzdGFydFZhbHVlIiwiZW5kVmFsdWUiLCJlbmROdW0iLCJjaHVuayIsImVuZFVuaXQiLCJzdGFydFVuaXQiLCJyZWxhdGl2ZSIsImVuZFZhbHVlcyIsIl9jb2xvclN0cmluZ0ZpbHRlciIsIm1hdGNoIiwiX251bVdpdGhVbml0RXhwIiwiZXhlYyIsInN1YnN0cmluZyIsImxhc3RJbmRleCIsIl9jb25maWciLCJ1bml0cyIsIl9uZXh0IiwibSIsInIiLCJfcmVsRXhwIiwiX2tleXdvcmRUb1BlcmNlbnQiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJjZW50ZXIiLCJfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyIsImpvaW4iLCJfcmVuZGVyQ2xlYXJQcm9wcyIsInR3ZWVuIiwiX3RpbWUiLCJfZHVyIiwicHJvcHMiLCJjbGVhclRyYW5zZm9ybXMiLCJjbGVhclByb3BzIiwicHIiLCJfaWRlbnRpdHkyRE1hdHJpeCIsIl9yb3RhdGlvbmFsUHJvcGVydGllcyIsIl9pc051bGxUcmFuc2Zvcm0iLCJfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5IiwibWF0cml4U3RyaW5nIiwiX251bUV4cCIsIm1hcCIsIl9nZXRNYXRyaXgiLCJmb3JjZTJEIiwibWF0cml4IiwidGVtcCIsImFkZGVkVG9ET00iLCJ0cmFuc2Zvcm0iLCJiYXNlVmFsIiwiY29uc29saWRhdGUiLCJkIiwiZiIsIm9mZnNldFBhcmVudCIsIl9hcHBseVNWR09yaWdpbiIsIm9yaWdpbklzQWJzb2x1dGUiLCJzbW9vdGgiLCJtYXRyaXhBcnJheSIsInBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvIiwieE9yaWdpbk9sZCIsInhPcmlnaW4iLCJ5T3JpZ2luT2xkIiwieU9yaWdpbiIsInhPZmZzZXRPbGQiLCJ4T2Zmc2V0IiwieU9mZnNldE9sZCIsInlPZmZzZXQiLCJ0eCIsInR5Iiwib3JpZ2luU3BsaXQiLCJkZXRlcm1pbmFudCIsInNldEF0dHJpYnV0ZSIsIkdTQ2FjaGUiLCJpbnZlcnRlZFNjYWxlWCIsInoiLCJyb3RhdGlvbiIsInJvdGF0aW9uWCIsInJvdGF0aW9uWSIsInNrZXdYIiwic2tld1kiLCJwZXJzcGVjdGl2ZSIsImFuZ2xlIiwiY29zIiwic2luIiwiYTEyIiwiYTIyIiwidDEiLCJ0MiIsInQzIiwiYTEzIiwiYTIzIiwiYTMzIiwiYTQyIiwiYTQzIiwiYTMyIiwic3FydCIsImFicyIsImZvcmNlQ1NTIiwieFBlcmNlbnQiLCJvZmZzZXRXaWR0aCIsInlQZXJjZW50Iiwib2Zmc2V0SGVpZ2h0IiwidHJhbnNmb3JtUGVyc3BlY3RpdmUiLCJmb3JjZTNEIiwiX3JlbmRlclNWR1RyYW5zZm9ybXMiLCJfcmVuZGVyQ1NTVHJhbnNmb3JtcyIsIl9yZW5kZXJOb24zRFRyYW5zZm9ybXMiLCJfYWRkUHhUcmFuc2xhdGUiLCJnZXRVbml0IiwiX3plcm9EZWciLCJfemVyb1B4IiwiX2VuZFBhcmVudGhlc2lzIiwiX3JlZiIsInRyYW5zZm9ybXMiLCJ1c2UzRCIsIl9yZWYyIiwiYTExIiwiYTIxIiwidGFuIiwiX2FkZFJvdGF0aW9uYWxQcm9wVHdlZW4iLCJjYXAiLCJpc1N0cmluZyIsIl9pc1N0cmluZyIsImNoYW5nZSIsImZpbmFsVmFsdWUiLCJkaXJlY3Rpb24iLCJfYXNzaWduIiwic291cmNlIiwiX2FkZFJhd1RyYW5zZm9ybVBUcyIsInN0YXJ0Q2FjaGUiLCJleGNsdWRlIiwiZW5kQ2FjaGUiLCJfZm9yRWFjaE5hbWUiLCJuYW1lIiwibCIsInNpZGUiLCJ2YXJzIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImluaXQiLCJDU1NQbHVnaW4iLCJyZWdpc3RlciIsInRhcmdldFRlc3QiLCJub2RlVHlwZSIsInRhcmdldHMiLCJzdGFydEF0Iiwic3BlY2lhbFByb3AiLCJpc1RyYW5zZm9ybVJlbGF0ZWQiLCJ0cmFuc2Zvcm1Qcm9wVHdlZW4iLCJoYXNQcmlvcml0eSIsIl9wbHVnaW5zIiwiX2NoZWNrUGx1Z2luIiwiX3JlcGxhY2VSYW5kb20iLCJfY29sb3JFeHAiLCJhZGQiLCJwYXJzZVRyYW5zZm9ybSIsInNtb290aE9yaWdpbiIsImRlcCIsImF1dG9Sb3VuZCIsIl9taXNzaW5nUGx1Z2luIiwiX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSIsImdldCIsImFsaWFzZXMiLCJnZXRTZXR0ZXIiLCJfaXNVbmRlZmluZWQiLCJfZ2V0U2V0dGVyIiwiY29yZSIsImdzYXAiLCJ1dGlscyIsImNoZWNrUHJlZml4IiwicG9zaXRpb25BbmRTY2FsZSIsIm90aGVycyIsImFsbCIsInJlZ2lzdGVyUGx1Z2luIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJfX3Byb3RvX18iLCJhdXRvU2xlZXAiLCJudWxsVGFyZ2V0V2FybiIsImxpbmVIZWlnaHQiLCJfZGVmYXVsdHMiLCJkdXJhdGlvbiIsIm92ZXJ3cml0ZSIsImRlbGF5IiwiX3N1cHByZXNzT3ZlcndyaXRlcyIsIl90aW55TnVtIiwiXzJQSSIsIl9IQUxGX1BJIiwiX2dzSUQiLCJfc3FydCIsIl9jb3MiLCJfc2luIiwiX2lzRnVuY3Rpb24iLCJfaXNOdW1iZXIiLCJfaXNPYmplY3QiLCJfaXNOb3RGYWxzZSIsIl9pc0Z1bmNPclN0cmluZyIsIl9pc1R5cGVkQXJyYXkiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIl9pc0FycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiX3N0cmljdE51bUV4cCIsIl9jb21wbGV4U3RyaW5nTnVtRXhwIiwiX2RlbGltaXRlZFZhbHVlRXhwIiwiX3VuaXRFeHAiLCJfZ2xvYmFsVGltZWxpbmUiLCJfY29yZUluaXR0ZWQiLCJfZ2xvYmFscyIsIl9pbnN0YWxsU2NvcGUiLCJfY29yZVJlYWR5IiwiX2luc3RhbGwiLCJzY29wZSIsIl9tZXJnZSIsImNvbnNvbGUiLCJ3YXJuIiwiX3dhcm4iLCJtZXNzYWdlIiwic3VwcHJlc3MiLCJfYWRkR2xvYmFsIiwib2JqIiwiX2VtcHR5RnVuYyIsIl9yZXNlcnZlZFByb3BzIiwiX2xhenlUd2VlbnMiLCJfbGF6eUxvb2t1cCIsIl9sYXN0UmVuZGVyZWRGcmFtZSIsIl9lZmZlY3RzIiwiX25leHRHQ0ZyYW1lIiwiX2hhcm5lc3NQbHVnaW5zIiwiX2NhbGxiYWNrTmFtZXMiLCJfaGFybmVzcyIsImhhcm5lc3NQbHVnaW4iLCJoYXJuZXNzIiwic3BsaWNlIiwidG9BcnJheSIsInYiLCJuYW1lcyIsImZ1bmMiLCJfcm91bmRQcmVjaXNlIiwiX2FycmF5Q29udGFpbnNBbnkiLCJ0b1NlYXJjaCIsInRvRmluZCIsIl9sYXp5UmVuZGVyIiwic2xpY2UiLCJfbGF6eSIsInJlbmRlciIsIl9sYXp5U2FmZVJlbmRlciIsImFuaW1hdGlvbiIsInN1cHByZXNzRXZlbnRzIiwiZm9yY2UiLCJfbnVtZXJpY0lmUG9zc2libGUiLCJuIiwiX3Bhc3NUaHJvdWdoIiwiX3NldERlZmF1bHRzIiwiZGVmYXVsdHMiLCJfc2V0S2V5ZnJhbWVEZWZhdWx0cyIsImJhc2UiLCJ0b01lcmdlIiwiX21lcmdlRGVlcCIsIl9jb3B5RXhjbHVkaW5nIiwiZXhjbHVkaW5nIiwiY29weSIsIl9pbmhlcml0RGVmYXVsdHMiLCJrZXlmcmFtZXMiLCJpbmhlcml0IiwiX2RwIiwiX2FycmF5c01hdGNoIiwiYTEiLCJhMiIsIl9hZGRMaW5rZWRMaXN0SXRlbSIsImNoaWxkIiwiZmlyc3RQcm9wIiwibGFzdFByb3AiLCJzb3J0QnkiLCJwcmV2IiwiX3ByZXYiLCJfcmVtb3ZlTGlua2VkTGlzdEl0ZW0iLCJuZXh0IiwiX3JlbW92ZUZyb21QYXJlbnQiLCJvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIiwiYXV0b1JlbW92ZUNoaWxkcmVuIiwicmVtb3ZlIiwiX2FjdCIsIl91bmNhY2hlIiwiX2VuZCIsIl9zdGFydCIsIl9kaXJ0eSIsIl9yZWNhY2hlQW5jZXN0b3JzIiwidG90YWxEdXJhdGlvbiIsIl9oYXNOb1BhdXNlZEFuY2VzdG9ycyIsIl90cyIsIl9lbGFwc2VkQ3ljbGVEdXJhdGlvbiIsIl9yZXBlYXQiLCJfYW5pbWF0aW9uQ3ljbGUiLCJfdFRpbWUiLCJfckRlbGF5IiwidFRpbWUiLCJjeWNsZUR1cmF0aW9uIiwid2hvbGUiLCJmbG9vciIsIl9wYXJlbnRUb0NoaWxkVG90YWxUaW1lIiwicGFyZW50VGltZSIsIl90RHVyIiwiX3NldEVuZCIsIl9ydHMiLCJfYWxpZ25QbGF5aGVhZCIsInRvdGFsVGltZSIsInNtb290aENoaWxkVGltaW5nIiwiX3Bvc3RBZGRDaGVja3MiLCJ0aW1lbGluZSIsIl9pbml0dGVkIiwicmF3VGltZSIsIl9jbGFtcCIsIl96VGltZSIsIl9hZGRUb1RpbWVsaW5lIiwic2tpcENoZWNrcyIsIl9wYXJzZVBvc2l0aW9uIiwiX2RlbGF5IiwidGltZVNjYWxlIiwiX3NvcnQiLCJfaXNGcm9tT3JGcm9tU3RhcnQiLCJfcmVjZW50IiwiX3Njcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwiU2Nyb2xsVHJpZ2dlciIsIl9hdHRlbXB0SW5pdFR3ZWVuIiwiX2luaXRUd2VlbiIsImxhenkiLCJmcmFtZSIsIl9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQiLCJfbG9jayIsIl9yZW5kZXJaZXJvRHVyYXRpb25Ud2VlbiIsInByZXZSYXRpbyIsInJlcGVhdERlbGF5IiwiaXRlcmF0aW9uIiwicHJldkl0ZXJhdGlvbiIsIl95b3lvIiwicmVwZWF0UmVmcmVzaCIsImludmFsaWRhdGUiLCJfZnJvbSIsIl9zdGFydEF0IiwiX29uVXBkYXRlIiwiX2NhbGxiYWNrIiwiX3Byb20iLCJfZmluZE5leHRQYXVzZVR3ZWVuIiwicHJldlRpbWUiLCJfZmlyc3QiLCJfbGFzdCIsIl9zZXREdXJhdGlvbiIsInNraXBVbmNhY2hlIiwibGVhdmVQbGF5aGVhZCIsInJlcGVhdCIsImR1ciIsInRvdGFsUHJvZ3Jlc3MiLCJfb25VcGRhdGVUb3RhbER1cmF0aW9uIiwiVGltZWxpbmUiLCJfemVyb1Bvc2l0aW9uIiwiZW5kVGltZSIsInBlcmNlbnRBbmltYXRpb24iLCJsYWJlbHMiLCJyZWNlbnQiLCJjbGlwcGVkRHVyYXRpb24iLCJvZmZzZXQiLCJpc1BlcmNlbnQiLCJpc05hTiIsIl9jcmVhdGVUd2VlblR5cGUiLCJwYXJhbXMiLCJpc0xlZ2FjeSIsInZhcnNJbmRleCIsImlyVmFycyIsImltbWVkaWF0ZVJlbmRlciIsInJ1bkJhY2t3YXJkcyIsIlR3ZWVuIiwiX2NvbmRpdGlvbmFsUmV0dXJuIiwibWluIiwibWF4IiwiY2xhbXAiLCJfc2xpY2UiLCJfaXNBcnJheUxpa2UiLCJub25FbXB0eSIsIl9mbGF0dGVuIiwiYXIiLCJsZWF2ZVN0cmluZ3MiLCJhY2N1bXVsYXRvciIsIl9hY2N1bXVsYXRvciIsImFwcGx5IiwiX3dha2UiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0b3IiLCJlbCIsImN1cnJlbnQiLCJuYXRpdmVFbGVtZW50Iiwic2h1ZmZsZSIsInNvcnQiLCJyYW5kb20iLCJkaXN0cmlidXRlIiwiZWFjaCIsImVhc2UiLCJfcGFyc2VFYXNlIiwiZnJvbSIsImlzRGVjaW1hbCIsInJhdGlvcyIsImF4aXMiLCJyYXRpb1giLCJyYXRpb1kiLCJlZGdlcyIsImRpc3RhbmNlcyIsIm9yaWdpblgiLCJvcmlnaW5ZIiwiaiIsIndyYXBBdCIsImdyaWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfaW52ZXJ0RWFzZSIsIl9yb3VuZE1vZGlmaWVyIiwicG93IiwicmF3Iiwic25hcCIsInNuYXBUbyIsInJhZGl1cyIsImlzMkQiLCJ2YWx1ZXMiLCJpbmNyZW1lbnQiLCJjbG9zZXN0IiwiZHgiLCJkeSIsInJvdW5kaW5nSW5jcmVtZW50IiwicmV0dXJuRnVuY3Rpb24iLCJwaXBlIiwiX2xlbiIsImZ1bmN0aW9ucyIsIl9rZXkiLCJyZWR1Y2UiLCJ1bml0aXplIiwibm9ybWFsaXplIiwibWFwUmFuZ2UiLCJfd3JhcEFycmF5Iiwid3JhcHBlciIsIndyYXAiLCJyYW5nZSIsIndyYXBZb3lvIiwidG90YWwiLCJudW1zIiwiaW5NaW4iLCJpbk1heCIsIm91dE1pbiIsIm91dE1heCIsImluUmFuZ2UiLCJvdXRSYW5nZSIsImludGVycG9sYXRlIiwicHJvZ3Jlc3MiLCJtdXRhdGUiLCJtYXN0ZXIiLCJpbnRlcnBvbGF0b3JzIiwiaWwiLCJfYWRkUHJvcFR3ZWVuIiwiX3JlbmRlclByb3BUd2VlbnMiLCJfZ2V0TGFiZWxJbkRpcmVjdGlvbiIsImZyb21UaW1lIiwiYmFja3dhcmQiLCJkaXN0YW5jZSIsImxhYmVsIiwiZXhlY3V0ZUxhenlGaXJzdCIsImNhbGxiYWNrIiwiY2FsbGJhY2tTY29wZSIsIl9pbnRlcnJ1cHQiLCJzY3JvbGxUcmlnZ2VyIiwia2lsbCIsIl9xdWlja1R3ZWVuIiwiX2NyZWF0ZVBsdWdpbiIsImNvbmZpZyIsImlzRnVuYyIsIlBsdWdpbiIsImluc3RhbmNlRGVmYXVsdHMiLCJfa2lsbFByb3BUd2VlbnNPZiIsIm1vZGlmaWVyIiwiX2FkZFBsdWdpbk1vZGlmaWVyIiwicmF3VmFycyIsInN0YXRpY3MiLCJfMjU1IiwiX2NvbG9yTG9va3VwIiwiYXF1YSIsImxpbWUiLCJzaWx2ZXIiLCJibGFjayIsIm1hcm9vbiIsInRlYWwiLCJibHVlIiwibmF2eSIsIndoaXRlIiwib2xpdmUiLCJ5ZWxsb3ciLCJvcmFuZ2UiLCJncmF5IiwicHVycGxlIiwiZ3JlZW4iLCJyZWQiLCJwaW5rIiwiY3lhbiIsInRyYW5zcGFyZW50IiwiX2h1ZSIsImgiLCJtMSIsIm0yIiwic3BsaXRDb2xvciIsInRvSFNMIiwiZm9yY2VBbHBoYSIsImciLCJ3YXNIU0wiLCJwYXJzZUludCIsIk51bWJlciIsIl9jb2xvck9yZGVyRGF0YSIsIl9mb3JtYXRDb2xvcnMiLCJvcmRlck1hdGNoRGF0YSIsImNvbG9ycyIsInNoZWxsIiwic2hpZnQiLCJSZWdFeHAiLCJfaHNsRXhwIiwiY29tYmluZWQiLCJfdGlja2VyQWN0aXZlIiwiX2dldFRpbWUiLCJEYXRlIiwibm93IiwiX2xhZ1RocmVzaG9sZCIsIl9hZGp1c3RlZExhZyIsIl9zdGFydFRpbWUiLCJfbGFzdFVwZGF0ZSIsIl9nYXAiLCJfbmV4dFRpbWUiLCJfbGlzdGVuZXJzIiwiX2lkIiwiX3JlcSIsIl9yYWYiLCJfc2VsZiIsIl9kZWx0YSIsIl9pIiwiX3RpY2siLCJlbGFwc2VkIiwibWFudWFsIiwib3ZlcmxhcCIsImRpc3BhdGNoIiwidGljayIsImRlbHRhUmF0aW8iLCJmcHMiLCJ3YWtlIiwiZ3NhcFZlcnNpb25zIiwidmVyc2lvbiIsIkdyZWVuU29ja0dsb2JhbHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzbGVlcCIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImxhZ1Ntb290aGluZyIsInRocmVzaG9sZCIsImFkanVzdGVkTGFnIiwiX2ZwcyIsIl9lYXNlTWFwIiwiX2N1c3RvbUVhc2VFeHAiLCJfcXVvdGVzRXhwIiwiX3BhcnNlT2JqZWN0SW5TdHJpbmciLCJrZXkiLCJ2YWwiLCJwYXJzZWRWYWwiLCJsYXN0SW5kZXhPZiIsIl92YWx1ZUluUGFyZW50aGVzZXMiLCJvcGVuIiwiY2xvc2UiLCJuZXN0ZWQiLCJfY29uZmlnRWFzZUZyb21TdHJpbmciLCJfQ0UiLCJfcHJvcGFnYXRlWW95b0Vhc2UiLCJpc1lveW8iLCJ5b3lvRWFzZSIsIl9lYXNlIiwiX3lFYXNlIiwiZGVmYXVsdEVhc2UiLCJfaW5zZXJ0RWFzZSIsImVhc2VJbiIsImVhc2VPdXQiLCJlYXNlSW5PdXQiLCJsb3dlcmNhc2VOYW1lIiwiX2Vhc2VJbk91dEZyb21PdXQiLCJfY29uZmlnRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsInAxIiwicDIiLCJwMyIsImFzaW4iLCJfY29uZmlnQmFjayIsIm92ZXJzaG9vdCIsInBvd2VyIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJub25lIiwibjEiLCJuMiIsIm4zIiwiU3RlcHBlZEVhc2UiLCJzdGVwcyIsImltbWVkaWF0ZVN0YXJ0IiwiaWQiLCJBbmltYXRpb24iLCJJbmZpbml0eSIsInlveW8iLCJfcHJvdG8iLCJzdGFydFRpbWUiLCJfdG90YWxUaW1lIiwiX3B0TG9va3VwIiwiX3BUaW1lIiwiX3BzIiwicGF1c2VkIiwiaW5jbHVkZVJlcGVhdHMiLCJ3cmFwUmVwZWF0cyIsImdsb2JhbFRpbWUiLCJzZWVrIiwicmVzdGFydCIsImluY2x1ZGVEZWxheSIsInBsYXkiLCJyZXZlcnNlZCIsInJldmVyc2UiLCJwYXVzZSIsImF0VGltZSIsInJlc3VtZSIsImlzQWN0aXZlIiwiZXZlbnRDYWxsYmFjayIsInRoZW4iLCJvbkZ1bGZpbGxlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiX3Jlc29sdmUiLCJfdGhlbiIsIl9BbmltYXRpb24iLCJfdGhpcyIsInNvcnRDaGlsZHJlbiIsIl9wcm90bzIiLCJ0byIsImZyb21UbyIsImZyb21WYXJzIiwidG9WYXJzIiwiZGVsYXllZENhbGwiLCJzdGFnZ2VyVG8iLCJzdGFnZ2VyIiwib25Db21wbGV0ZUFsbCIsIm9uQ29tcGxldGVBbGxQYXJhbXMiLCJvbkNvbXBsZXRlIiwib25Db21wbGV0ZVBhcmFtcyIsInN0YWdnZXJGcm9tIiwic3RhZ2dlckZyb21UbyIsInREdXIiLCJjcm9zc2luZ1N0YXJ0IiwicHJldlBhdXNlZCIsInBhdXNlVHdlZW4iLCJwcmV2U3RhcnQiLCJyZXdpbmRpbmciLCJkb2VzV3JhcCIsIm9uUmVwZWF0IiwiX2hhc1BhdXNlIiwiX2ZvcmNpbmciLCJvblVwZGF0ZSIsImFkanVzdGVkVGltZSIsIl90aGlzMiIsImFkZExhYmVsIiwiZ2V0Q2hpbGRyZW4iLCJ0d2VlbnMiLCJ0aW1lbGluZXMiLCJpZ25vcmVCZWZvcmVUaW1lIiwiZ2V0QnlJZCIsImFuaW1hdGlvbnMiLCJyZW1vdmVMYWJlbCIsImtpbGxUd2VlbnNPZiIsIl90b3RhbFRpbWUyIiwiYWRkUGF1c2UiLCJyZW1vdmVQYXVzZSIsIm9ubHlBY3RpdmUiLCJnZXRUd2VlbnNPZiIsIl9vdmVyd3JpdGluZ1R3ZWVuIiwicGFyc2VkVGFyZ2V0cyIsImlzR2xvYmFsVGltZSIsImNoaWxkcmVuIiwiX3RhcmdldHMiLCJ0d2VlblRvIiwidGwiLCJfdmFycyIsIl9vblN0YXJ0Iiwib25TdGFydCIsIm9uU3RhcnRQYXJhbXMiLCJpbml0dGVkIiwidHdlZW5Gcm9tVG8iLCJmcm9tUG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwibmV4dExhYmVsIiwiYWZ0ZXJUaW1lIiwicHJldmlvdXNMYWJlbCIsImJlZm9yZVRpbWUiLCJjdXJyZW50TGFiZWwiLCJzaGlmdENoaWxkcmVuIiwiYWRqdXN0TGFiZWxzIiwiY2xlYXIiLCJpbmNsdWRlTGFiZWxzIiwidXBkYXRlUm9vdCIsIl9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuIiwic2V0dGVyIiwic3RyaW5nRmlsdGVyIiwiZnVuY1BhcmFtIiwic3RhcnROdW1zIiwiaGFzUmFuZG9tIiwiZnAiLCJjdXJyZW50VmFsdWUiLCJwYXJzZWRTdGFydCIsIl9zZXR0ZXJQbGFpbiIsIl9zZXR0ZXJGdW5jV2l0aFBhcmFtIiwiX3NldHRlckZ1bmMiLCJfcmVuZGVyQm9vbGVhbiIsIl9yZW5kZXJQbGFpbiIsIl9wcm9jZXNzVmFycyIsIl9wYXJzZUZ1bmNPclN0cmluZyIsInB0TG9va3VwIiwicHJpb3JpdHkiLCJvblVwZGF0ZVBhcmFtcyIsImF1dG9SZXZlcnQiLCJwcmV2U3RhcnRBdCIsImZ1bGxUYXJnZXRzIiwiYXV0b092ZXJ3cml0ZSIsIl9vdmVyd3JpdGUiLCJjbGVhblZhcnMiLCJnc0RhdGEiLCJoYXJuZXNzVmFycyIsIm92ZXJ3cml0dGVuIiwiX29wIiwiX29uSW5pdCIsIl9hZGRBbGlhc2VzVG9WYXJzIiwicHJvcGVydHlBbGlhc2VzIiwiX3N0YWdnZXJUd2VlblByb3BzIiwiX3N0YWdnZXJQcm9wc1RvU2tpcCIsIl9BbmltYXRpb24yIiwic2tpcEluaGVyaXQiLCJfdGhpczMiLCJfdGhpczMkdmFycyIsImN1clRhcmdldCIsInN0YWdnZXJGdW5jIiwic3RhZ2dlclZhcnNUb01lcmdlIiwiX3Byb3RvMyIsImtpbGxpbmdUYXJnZXRzIiwicHJvcFR3ZWVuTG9va3VwIiwiZmlyc3RQVCIsIm92ZXJ3cml0dGVuUHJvcHMiLCJjdXJMb29rdXAiLCJjdXJPdmVyd3JpdGVQcm9wcyIsIm9uUmV2ZXJzZUNvbXBsZXRlIiwib25SZXZlcnNlQ29tcGxldGVQYXJhbXMiLCJfc2V0dGVyQXR0cmlidXRlIiwiaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nIiwib3AiLCJfc2V0dGVyV2l0aE1vZGlmaWVyIiwibVNldCIsIm10IiwicHQyIiwiZmlyc3QiLCJsYXN0IiwicmVuZGVyZXIiLCJfcHJvdG80IiwiVHdlZW5NYXgiLCJUd2VlbkxpdGUiLCJUaW1lbGluZUxpdGUiLCJUaW1lbGluZU1heCIsIl9sZW4yIiwiYXJncyIsIl9rZXkyIiwiZ2V0UHJvcGVydHkiLCJnZXR0ZXIiLCJmb3JtYXQiLCJxdWlja1NldHRlciIsInNldHRlcnMiLCJpc1R3ZWVuaW5nIiwicmVnaXN0ZXJFZmZlY3QiLCJfcmVmMyIsImVmZmVjdCIsInBsdWdpbnMiLCJleHRlbmRUaW1lbGluZSIsInBsdWdpbk5hbWUiLCJyZWdpc3RlckVhc2UiLCJwYXJzZUVhc2UiLCJleHBvcnRSb290IiwiaW5jbHVkZURlbGF5ZWRDYWxscyIsImluc3RhbGwiLCJlZmZlY3RzIiwidGlja2VyIiwiZ2xvYmFsVGltZWxpbmUiLCJnbG9iYWxzIiwiZ2V0Q2FjaGUiLCJzdXBwcmVzc092ZXJ3cml0ZXMiLCJfZ2V0UGx1Z2luUHJvcFR3ZWVuIiwiX2FkZE1vZGlmaWVycyIsIm1vZGlmaWVycyIsIl9idWlsZE1vZGlmaWVyUGx1Z2luIiwiUG93ZXIwIiwiUG93ZXIxIiwiUG93ZXIyIiwiUG93ZXIzIiwiUG93ZXI0IiwiUXVhZCIsIkN1YmljIiwiUXVhcnQiLCJRdWludCIsIlN0cm9uZyIsIkVsYXN0aWMiLCJCYWNrIiwiQm91bmNlIiwiU2luZSIsIkV4cG8iLCJDaXJjIiwiZ3NhcFdpdGhDU1MiLCJUd2Vlbk1heFdpdGhDU1MiLCJsb2ciLCJqUXVlcnkiLCJyZWFkeSIsIiQiLCJvbiIsImNzcyIsInRleHQiLCJyZXNpemUiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImFsbFdyYXAiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0Iiwic2xpZGVyIiwiU2xpZGVyIiwiYWRkTGlzdGVuZXJzIiwibmV3Y2xhc3MiLCJidXR0b25zIiwiaXRlbXMiLCJhY3RpdmVJdGVtIiwiaXNTbGlkaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWRlIiwiZXZlbnQiLCJjdXJyZW50SXRlbSIsImJveCIsIkRyYWdnYWJsZSIsIm9uUHJlc3MiLCJvZmZzZXRCb3VuZHMiLCJvbkRyYWciLCJtYXhYIiwibWF4WSIsImJveDIiLCJvZmZzZXRCb3VuZHMyIiwibWF4WDIiLCJtYXhZMiIsImJveDMiLCJvZmZzZXRCb3VuZHMzIiwibWF4WDMiLCJtYXhZMyIsImJveDQiLCJvZmZzZXRCb3VuZHM0IiwibWF4WDQiLCJtYXhZNCIsImJveDUiLCJvZmZzZXRCb3VuZHM1IiwibWF4WDUiLCJtYXhZNSIsImJveDYiLCJvZmZzZXRCb3VuZHM2IiwibWF4WDYiLCJtYXhZNiIsImJveDciLCJvZmZzZXRCb3VuZHM3IiwibWF4WDciLCJtYXhZNyIsImJveDgiLCJvZmZzZXRCb3VuZHM4IiwibWF4WDgiLCJtYXhZOCIsImJveDkiLCJvZmZzZXRCb3VuZHM5IiwibWF4WDkiLCJtYXhZOSIsImJveDEwIiwib2Zmc2V0Qm91bmRzMTAiLCJtYXhYMTAiLCJtYXhZMTAiLCJib3gxMSIsIm9mZnNldEJvdW5kczExIiwibWF4WDExIiwibWF4WTExIiwiYm94MTIiLCJvZmZzZXRCb3VuZHMxMiIsIm1heFgxMiIsIm1heFkxMiIsImJveDEzIiwib2Zmc2V0Qm91bmRzMTMiLCJtYXhYMTMiLCJtYXhZMTMiLCJib3gxNCIsIm9mZnNldEJvdW5kczE0IiwibWF4WDE0IiwibWF4WTE0IiwiYm94MTUiLCJvZmZzZXRCb3VuZHMxNSIsIm1heFgxNSIsIm1heFkxNSIsImJveDE2Iiwib2Zmc2V0Qm91bmRzMTYiLCJtYXhYMTYiLCJtYXhZMTYiLCJib3gxNyIsIm9mZnNldEJvdW5kczE3IiwibWF4WDE3IiwibWF4WTE3IiwiYm94MTgiLCJvZmZzZXRCb3VuZHMxOCIsIm1heFgxOCIsIm1heFkxOCIsImJveDE5Iiwib2Zmc2V0Qm91bmRzMTkiLCJtYXhYMTkiLCJtYXhZMTkiLCJib3gyMCIsIm9mZnNldEJvdW5kczIwIiwibWF4WDIwIiwibWF4WTIwIiwiYm94MjEiLCJvZmZzZXRCb3VuZHMyMSIsIm1heFgyMSIsIm1heFkyMSIsImJveDIyIiwib2Zmc2V0Qm91bmRzMjIiLCJtYXhYMjIiLCJtYXhZMjIiLCJib3gyMyIsIm9mZnNldEJvdW5kczIzIiwibWF4WDIzIiwibWF4WTIzIiwiYm94MjQiLCJvZmZzZXRCb3VuZHMyNCIsIm1heFgyNCIsIm1heFkyNCIsImJveDI1Iiwib2Zmc2V0Qm91bmRzMjUiLCJtYXhYMjUiLCJtYXhZMjUiLCJib3gyNiIsIm9mZnNldEJvdW5kczI2IiwibWF4WDI2IiwibWF4WTI2IiwiYm94MjciLCJvZmZzZXRCb3VuZHMyNyIsIm1heFgyNyIsIm1heFkyNyIsImJveDI4Iiwib2Zmc2V0Qm91bmRzMjgiLCJtYXhYMjgiLCJtYXhZMjgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFd0I7QUFFeEIsSUFB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dWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCIvKiFcbiAqIENTU1BsdWdpbiAzLjguMFxuICogaHR0cHM6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQ29weXJpZ2h0IDIwMDgtMjAyMSwgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogU3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cHM6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCB7IGdzYXAsIF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBnZXRVbml0LCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9mb3JFYWNoTmFtZSwgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSwgX2NvbG9yU3RyaW5nRmlsdGVyLCBfY2hlY2tQbHVnaW4sIF9yZXBsYWNlUmFuZG9tLCBfcGx1Z2lucywgR1NDYWNoZSwgUHJvcFR3ZWVuLCBfY29uZmlnLCBfdGlja2VyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9jb2xvckV4cCwgX3NldERlZmF1bHRzLCBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0gLy9mb3IgdGhlIGNvbW1lbnRlZC1vdXQgY2xhc3NOYW1lIGZlYXR1cmUuXG59IGZyb20gXCIuL2dzYXAtY29yZS5qc1wiO1xuXG52YXIgX3dpbixcbiAgICBfZG9jLFxuICAgIF9kb2NFbGVtZW50LFxuICAgIF9wbHVnaW5Jbml0dGVkLFxuICAgIF90ZW1wRGl2LFxuICAgIF90ZW1wRGl2U3R5bGVyLFxuICAgIF9yZWNlbnRTZXR0ZXJQbHVnaW4sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfdHJhbnNmb3JtUHJvcHMgPSB7fSxcbiAgICBfUkFEMkRFRyA9IDE4MCAvIE1hdGguUEksXG4gICAgX0RFRzJSQUQgPSBNYXRoLlBJIC8gMTgwLFxuICAgIF9hdGFuMiA9IE1hdGguYXRhbjIsXG4gICAgX2JpZ051bSA9IDFlOCxcbiAgICBfY2Fwc0V4cCA9IC8oW0EtWl0pL2csXG4gICAgX2hvcml6b250YWxFeHAgPSAvKD86bGVmdHxyaWdodHx3aWR0aHxtYXJnaW58cGFkZGluZ3x4KS9pLFxuICAgIF9jb21wbGV4RXhwID0gL1tcXHMsXFwoXVxcUy8sXG4gICAgX3Byb3BlcnR5QWxpYXNlcyA9IHtcbiAgYXV0b0FscGhhOiBcIm9wYWNpdHksdmlzaWJpbGl0eVwiLFxuICBzY2FsZTogXCJzY2FsZVgsc2NhbGVZXCIsXG4gIGFscGhhOiBcIm9wYWNpdHlcIlxufSxcbiAgICBfcmVuZGVyQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJDU1NQcm9wKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgTWF0aC5yb3VuZCgoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDAgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFdpdGhFbmQgPSBmdW5jdGlvbiBfcmVuZGVyUHJvcFdpdGhFbmQocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCByYXRpbyA9PT0gMSA/IGRhdGEuZSA6IE1hdGgucm91bmQoKGRhdGEucyArIGRhdGEuYyAqIHJhdGlvKSAqIDEwMDAwKSAvIDEwMDAwICsgZGF0YS51LCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nID0gZnVuY3Rpb24gX3JlbmRlckNTU1Byb3BXaXRoQmVnaW5uaW5nKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMCkgLyAxMDAwMCArIGRhdGEudSA6IGRhdGEuYiwgZGF0YSk7XG59LFxuICAgIC8vaWYgdW5pdHMgY2hhbmdlLCB3ZSBuZWVkIGEgd2F5IHRvIHJlbmRlciB0aGUgb3JpZ2luYWwgdW5pdC92YWx1ZSB3aGVuIHRoZSB0d2VlbiBnb2VzIGFsbCB0aGUgd2F5IGJhY2sgdG8gdGhlIGJlZ2lubmluZyAocmF0aW86MClcbl9yZW5kZXJSb3VuZGVkQ1NTUHJvcCA9IGZ1bmN0aW9uIF9yZW5kZXJSb3VuZGVkQ1NTUHJvcChyYXRpbywgZGF0YSkge1xuICB2YXIgdmFsdWUgPSBkYXRhLnMgKyBkYXRhLmMgKiByYXRpbztcbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIH5+KHZhbHVlICsgKHZhbHVlIDwgMCA/IC0uNSA6IC41KSkgKyBkYXRhLnUsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gPyBkYXRhLmUgOiBkYXRhLmIsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA9IGZ1bmN0aW9uIF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlT25seUF0RW5kKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgcmF0aW8gIT09IDEgPyBkYXRhLmIgOiBkYXRhLmUsIGRhdGEpO1xufSxcbiAgICBfc2V0dGVyQ1NTU3R5bGUgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTU3R5bGUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldC5zdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckNTU1Byb3AgPSBmdW5jdGlvbiBfc2V0dGVyQ1NTUHJvcCh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfc2V0dGVyVHJhbnNmb3JtKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXBbcHJvcGVydHldID0gdmFsdWU7XG59LFxuICAgIF9zZXR0ZXJTY2FsZSA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0Ll9nc2FwLnNjYWxlWCA9IHRhcmdldC5fZ3NhcC5zY2FsZVkgPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlclNjYWxlV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJTY2FsZVdpdGhSZW5kZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEsIHJhdGlvKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgY2FjaGUuc2NhbGVYID0gY2FjaGUuc2NhbGVZID0gdmFsdWU7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybShyYXRpbywgY2FjaGUpO1xufSxcbiAgICBfc2V0dGVyVHJhbnNmb3JtV2l0aFJlbmRlciA9IGZ1bmN0aW9uIF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCBkYXRhLCByYXRpbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXA7XG4gIGNhY2hlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0ocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3RyYW5zZm9ybVByb3AgPSBcInRyYW5zZm9ybVwiLFxuICAgIF90cmFuc2Zvcm1PcmlnaW5Qcm9wID0gX3RyYW5zZm9ybVByb3AgKyBcIk9yaWdpblwiLFxuICAgIF9zdXBwb3J0czNELFxuICAgIF9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUVsZW1lbnQodHlwZSwgbnMpIHtcbiAgdmFyIGUgPSBfZG9jLmNyZWF0ZUVsZW1lbnROUyA/IF9kb2MuY3JlYXRlRWxlbWVudE5TKChucyB8fCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikucmVwbGFjZSgvXmh0dHBzLywgXCJodHRwXCIpLCB0eXBlKSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIHNlcnZlcnMgc3dhcCBpbiBodHRwcyBmb3IgaHR0cCBpbiB0aGUgbmFtZXNwYWNlIHdoaWNoIGNhbiBicmVhayB0aGluZ3MsIG1ha2luZyBcInN0eWxlXCIgaW5hY2Nlc3NpYmxlLlxuXG4gIHJldHVybiBlLnN0eWxlID8gZSA6IF9kb2MuY3JlYXRlRWxlbWVudCh0eXBlKTsgLy9zb21lIGVudmlyb25tZW50cyB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIGVsZW1lbnQncyBzdHlsZSB3aGVuIGNyZWF0ZWQgd2l0aCBhIG5hbWVzcGFjZSBpbiB3aGljaCBjYXNlIHdlIGRlZmF1bHQgdG8gdGhlIHN0YW5kYXJkIGNyZWF0ZUVsZW1lbnQoKSB0byB3b3JrIGFyb3VuZCB0aGUgaXNzdWUuIEFsc28gbm90ZSB0aGF0IHdoZW4gR1NBUCBpcyBlbWJlZGRlZCBkaXJlY3RseSBpbnNpZGUgYW4gU1ZHIGZpbGUsIGNyZWF0ZUVsZW1lbnQoKSB3b24ndCBhbGxvdyBhY2Nlc3MgdG8gdGhlIHN0eWxlIG9iamVjdCBpbiBGaXJlZm94IChzZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDIxNS1wcm9ibGVtLXVzaW5nLXR3ZWVubWF4LWluLXN0YW5kYWxvbmUtc2VsZi1jb250YWluaW5nLXN2Zy1maWxlLWVyci1jYW5ub3Qtc2V0LXByb3BlcnR5LWNzc3RleHQtb2YtdW5kZWZpbmVkLykuXG59LFxuICAgIF9nZXRDb21wdXRlZFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgc2tpcFByZWZpeEZhbGxiYWNrKSB7XG4gIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgcmV0dXJuIGNzW3Byb3BlcnR5XSB8fCBjcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpIHx8IGNzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpIHx8ICFza2lwUHJlZml4RmFsbGJhY2sgJiYgX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfY2hlY2tQcm9wUHJlZml4KHByb3BlcnR5KSB8fCBwcm9wZXJ0eSwgMSkgfHwgXCJcIjsgLy9jc3MgdmFyaWFibGVzIG1heSBub3QgbmVlZCBjYXBzIHN3YXBwZWQgb3V0IGZvciBkYXNoZXMgYW5kIGxvd2VyY2FzZS5cbn0sXG4gICAgX3ByZWZpeGVzID0gXCJPLE1veixtcyxNcyxXZWJraXRcIi5zcGxpdChcIixcIiksXG4gICAgX2NoZWNrUHJvcFByZWZpeCA9IGZ1bmN0aW9uIF9jaGVja1Byb3BQcmVmaXgocHJvcGVydHksIGVsZW1lbnQsIHByZWZlclByZWZpeCkge1xuICB2YXIgZSA9IGVsZW1lbnQgfHwgX3RlbXBEaXYsXG4gICAgICBzID0gZS5zdHlsZSxcbiAgICAgIGkgPSA1O1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBzICYmICFwcmVmZXJQcmVmaXgpIHtcbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc3Vic3RyKDEpO1xuXG4gIHdoaWxlIChpLS0gJiYgIShfcHJlZml4ZXNbaV0gKyBwcm9wZXJ0eSBpbiBzKSkge31cblxuICByZXR1cm4gaSA8IDAgPyBudWxsIDogKGkgPT09IDMgPyBcIm1zXCIgOiBpID49IDAgPyBfcHJlZml4ZXNbaV0gOiBcIlwiKSArIHByb3BlcnR5O1xufSxcbiAgICBfaW5pdENvcmUgPSBmdW5jdGlvbiBfaW5pdENvcmUoKSB7XG4gIGlmIChfd2luZG93RXhpc3RzKCkgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgX3dpbiA9IHdpbmRvdztcbiAgICBfZG9jID0gX3dpbi5kb2N1bWVudDtcbiAgICBfZG9jRWxlbWVudCA9IF9kb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIF90ZW1wRGl2ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIikgfHwge1xuICAgICAgc3R5bGU6IHt9XG4gICAgfTtcbiAgICBfdGVtcERpdlN0eWxlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIF90cmFuc2Zvcm1Qcm9wID0gX2NoZWNrUHJvcFByZWZpeChfdHJhbnNmb3JtUHJvcCk7XG4gICAgX3RyYW5zZm9ybU9yaWdpblByb3AgPSBfdHJhbnNmb3JtUHJvcCArIFwiT3JpZ2luXCI7XG4gICAgX3RlbXBEaXYuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLXdpZHRoOjA7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjBcIjsgLy9tYWtlIHN1cmUgdG8gb3ZlcnJpZGUgY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgbWF5IGNvbnRhbWluYXRlIG1lYXN1cmVtZW50cywgaW4gY2FzZSB0aGUgdXNlciBoYXMgb3ZlcnJlYWNoaW5nIHN0eWxlIHNoZWV0cy5cblxuICAgIF9zdXBwb3J0czNEID0gISFfY2hlY2tQcm9wUHJlZml4KFwicGVyc3BlY3RpdmVcIik7XG4gICAgX3BsdWdpbkluaXR0ZWQgPSAxO1xuICB9XG59LFxuICAgIF9nZXRCQm94SGFjayA9IGZ1bmN0aW9uIF9nZXRCQm94SGFjayhzd2FwSWZQb3NzaWJsZSkge1xuICAvL3dvcmtzIGFyb3VuZCBpc3N1ZXMgaW4gc29tZSBicm93c2VycyAobGlrZSBGaXJlZm94KSB0aGF0IGRvbid0IGNvcnJlY3RseSByZXBvcnQgZ2V0QkJveCgpIG9uIFNWRyBlbGVtZW50cyBpbnNpZGUgYSA8ZGVmcz4gZWxlbWVudCBhbmQvb3IgPG1hc2s+LiBXZSB0cnkgY3JlYXRpbmcgYW4gU1ZHLCBhZGRpbmcgaXQgdG8gdGhlIGRvY3VtZW50RWxlbWVudCBhbmQgdG9zcyB0aGUgZWxlbWVudCBpbiB0aGVyZSBzbyB0aGF0IGl0J3MgZGVmaW5pdGVseSBwYXJ0IG9mIHRoZSByZW5kZXJpbmcgdHJlZSwgdGhlbiBncmFiIHRoZSBiYm94IGFuZCBpZiBpdCB3b3Jrcywgd2UgYWN0dWFsbHkgc3dhcCBvdXQgdGhlIG9yaWdpbmFsIGdldEJCb3goKSBtZXRob2QgZm9yIG91ciBvd24gdGhhdCBkb2VzIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW5ldmVyIGdldEJCb3ggaXMgbmVlZGVkLiBUaGlzIGhlbHBzIGVuc3VyZSB0aGF0IHBlcmZvcm1hbmNlIGlzIG9wdGltYWwgKG9ubHkgZG8gYWxsIHRoZXNlIGV4dHJhIHN0ZXBzIHdoZW4gYWJzb2x1dGVseSBuZWNlc3NhcnkuLi5tb3N0IGVsZW1lbnRzIGRvbid0IG5lZWQgaXQpLlxuICB2YXIgc3ZnID0gX2NyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgdGhpcy5vd25lclNWR0VsZW1lbnQgJiYgdGhpcy5vd25lclNWR0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwieG1sbnNcIikgfHwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKSxcbiAgICAgIG9sZFBhcmVudCA9IHRoaXMucGFyZW50Tm9kZSxcbiAgICAgIG9sZFNpYmxpbmcgPSB0aGlzLm5leHRTaWJsaW5nLFxuICAgICAgb2xkQ1NTID0gdGhpcy5zdHlsZS5jc3NUZXh0LFxuICAgICAgYmJveDtcblxuICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGlmIChzd2FwSWZQb3NzaWJsZSkge1xuICAgIHRyeSB7XG4gICAgICBiYm94ID0gdGhpcy5nZXRCQm94KCk7XG4gICAgICB0aGlzLl9nc2FwQkJveCA9IHRoaXMuZ2V0QkJveDsgLy9zdG9yZSB0aGUgb3JpZ2luYWxcblxuICAgICAgdGhpcy5nZXRCQm94ID0gX2dldEJCb3hIYWNrO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0gZWxzZSBpZiAodGhpcy5fZ3NhcEJCb3gpIHtcbiAgICBiYm94ID0gdGhpcy5fZ3NhcEJCb3goKTtcbiAgfVxuXG4gIGlmIChvbGRQYXJlbnQpIHtcbiAgICBpZiAob2xkU2libGluZykge1xuICAgICAgb2xkUGFyZW50Lmluc2VydEJlZm9yZSh0aGlzLCBvbGRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHN2Zyk7XG5cbiAgdGhpcy5zdHlsZS5jc3NUZXh0ID0gb2xkQ1NTO1xuICByZXR1cm4gYmJveDtcbn0sXG4gICAgX2dldEF0dHJpYnV0ZUZhbGxiYWNrcyA9IGZ1bmN0aW9uIF9nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgdmFyIGkgPSBhdHRyaWJ1dGVzQXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzQXJyYXlbaV0pO1xuICAgIH1cbiAgfVxufSxcbiAgICBfZ2V0QkJveCA9IGZ1bmN0aW9uIF9nZXRCQm94KHRhcmdldCkge1xuICB2YXIgYm91bmRzO1xuXG4gIHRyeSB7XG4gICAgYm91bmRzID0gdGFyZ2V0LmdldEJCb3goKTsgLy9GaXJlZm94IHRocm93cyBlcnJvcnMgaWYgeW91IHRyeSBjYWxsaW5nIGdldEJCb3goKSBvbiBhbiBTVkcgZWxlbWVudCB0aGF0J3Mgbm90IHJlbmRlcmVkIChsaWtlIGluIGEgPHN5bWJvbD4gb3IgPGRlZnM+KS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjEyMTE4XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYm91bmRzID0gX2dldEJCb3hIYWNrLmNhbGwodGFyZ2V0LCB0cnVlKTtcbiAgfVxuXG4gIGJvdW5kcyAmJiAoYm91bmRzLndpZHRoIHx8IGJvdW5kcy5oZWlnaHQpIHx8IHRhcmdldC5nZXRCQm94ID09PSBfZ2V0QkJveEhhY2sgfHwgKGJvdW5kcyA9IF9nZXRCQm94SGFjay5jYWxsKHRhcmdldCwgdHJ1ZSkpOyAvL3NvbWUgYnJvd3NlcnMgKGxpa2UgRmlyZWZveCkgbWlzcmVwb3J0IHRoZSBib3VuZHMgaWYgdGhlIGVsZW1lbnQgaGFzIHplcm8gd2lkdGggYW5kIGhlaWdodCAoaXQganVzdCBhc3N1bWVzIGl0J3MgYXQgeDowLCB5OjApLCB0aHVzIHdlIG5lZWQgdG8gbWFudWFsbHkgZ3JhYiB0aGUgcG9zaXRpb24gaW4gdGhhdCBjYXNlLlxuXG4gIHJldHVybiBib3VuZHMgJiYgIWJvdW5kcy53aWR0aCAmJiAhYm91bmRzLnggJiYgIWJvdW5kcy55ID8ge1xuICAgIHg6ICtfZ2V0QXR0cmlidXRlRmFsbGJhY2tzKHRhcmdldCwgW1wieFwiLCBcImN4XCIsIFwieDFcIl0pIHx8IDAsXG4gICAgeTogK19nZXRBdHRyaWJ1dGVGYWxsYmFja3ModGFyZ2V0LCBbXCJ5XCIsIFwiY3lcIiwgXCJ5MVwiXSkgfHwgMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSA6IGJvdW5kcztcbn0sXG4gICAgX2lzU1ZHID0gZnVuY3Rpb24gX2lzU1ZHKGUpIHtcbiAgcmV0dXJuICEhKGUuZ2V0Q1RNICYmICghZS5wYXJlbnROb2RlIHx8IGUub3duZXJTVkdFbGVtZW50KSAmJiBfZ2V0QkJveChlKSk7XG59LFxuICAgIC8vcmVwb3J0cyBpZiB0aGUgZWxlbWVudCBpcyBhbiBTVkcgb24gd2hpY2ggZ2V0QkJveCgpIGFjdHVhbGx5IHdvcmtzXG5fcmVtb3ZlUHJvcGVydHkgPSBmdW5jdGlvbiBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICBpZiAocHJvcGVydHkpIHtcbiAgICB2YXIgc3R5bGUgPSB0YXJnZXQuc3R5bGU7XG5cbiAgICBpZiAocHJvcGVydHkgaW4gX3RyYW5zZm9ybVByb3BzICYmIHByb3BlcnR5ICE9PSBfdHJhbnNmb3JtT3JpZ2luUHJvcCkge1xuICAgICAgcHJvcGVydHkgPSBfdHJhbnNmb3JtUHJvcDtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUucmVtb3ZlUHJvcGVydHkpIHtcbiAgICAgIGlmIChwcm9wZXJ0eS5zdWJzdHIoMCwgMikgPT09IFwibXNcIiB8fCBwcm9wZXJ0eS5zdWJzdHIoMCwgNikgPT09IFwid2Via2l0XCIpIHtcbiAgICAgICAgLy9NaWNyb3NvZnQgYW5kIHNvbWUgV2Via2l0IGJyb3dzZXJzIGRvbid0IGNvbmZvcm0gdG8gdGhlIHN0YW5kYXJkIG9mIGNhcGl0YWxpemluZyB0aGUgZmlyc3QgcHJlZml4IGNoYXJhY3Rlciwgc28gd2UgYWRqdXN0IHNvIHRoYXQgd2hlbiB3ZSBwcmVmaXggdGhlIGNhcHMgd2l0aCBhIGRhc2gsIGl0J3MgY29ycmVjdCAob3RoZXJ3aXNlIGl0J2QgYmUgXCJtcy10cmFuc2Zvcm1cIiBpbnN0ZWFkIG9mIFwiLW1zLXRyYW5zZm9ybVwiIGZvciBJRTksIGZvciBleGFtcGxlKVxuICAgICAgICBwcm9wZXJ0eSA9IFwiLVwiICsgcHJvcGVydHk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5LnJlcGxhY2UoX2NhcHNFeHAsIFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvL25vdGU6IG9sZCB2ZXJzaW9ucyBvZiBJRSB1c2UgXCJyZW1vdmVBdHRyaWJ1dGUoKVwiIGluc3RlYWQgb2YgXCJyZW1vdmVQcm9wZXJ0eSgpXCJcbiAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gICAgfVxuICB9XG59LFxuICAgIF9hZGROb25Ud2VlbmluZ1BUID0gZnVuY3Rpb24gX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBiZWdpbm5pbmcsIGVuZCwgb25seVNldEF0RW5kKSB7XG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgMCwgMSwgb25seVNldEF0RW5kID8gX3JlbmRlck5vblR3ZWVuaW5nVmFsdWVPbmx5QXRFbmQgOiBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZSk7XG4gIHBsdWdpbi5fcHQgPSBwdDtcbiAgcHQuYiA9IGJlZ2lubmluZztcbiAgcHQuZSA9IGVuZDtcblxuICBwbHVnaW4uX3Byb3BzLnB1c2gocHJvcGVydHkpO1xuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX25vbkNvbnZlcnRpYmxlVW5pdHMgPSB7XG4gIGRlZzogMSxcbiAgcmFkOiAxLFxuICB0dXJuOiAxXG59LFxuICAgIC8vdGFrZXMgYSBzaW5nbGUgdmFsdWUgbGlrZSAyMHB4IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgdW5pdCBzcGVjaWZpZWQsIGxpa2UgXCIlXCIsIHJldHVybmluZyBvbmx5IHRoZSBudW1lcmljIGFtb3VudC5cbl9jb252ZXJ0VG9Vbml0ID0gZnVuY3Rpb24gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHVuaXQpIHtcbiAgdmFyIGN1clZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMCxcbiAgICAgIGN1clVuaXQgPSAodmFsdWUgKyBcIlwiKS50cmltKCkuc3Vic3RyKChjdXJWYWx1ZSArIFwiXCIpLmxlbmd0aCkgfHwgXCJweFwiLFxuICAgICAgLy8gc29tZSBicm93c2VycyBsZWF2ZSBleHRyYSB3aGl0ZXNwYWNlIGF0IHRoZSBiZWdpbm5pbmcgb2YgQ1NTIHZhcmlhYmxlcywgaGVuY2UgdGhlIG5lZWQgdG8gdHJpbSgpXG4gIHN0eWxlID0gX3RlbXBEaXYuc3R5bGUsXG4gICAgICBob3Jpem9udGFsID0gX2hvcml6b250YWxFeHAudGVzdChwcm9wZXJ0eSksXG4gICAgICBpc1Jvb3RTVkcgPSB0YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInN2Z1wiLFxuICAgICAgbWVhc3VyZVByb3BlcnR5ID0gKGlzUm9vdFNWRyA/IFwiY2xpZW50XCIgOiBcIm9mZnNldFwiKSArIChob3Jpem9udGFsID8gXCJXaWR0aFwiIDogXCJIZWlnaHRcIiksXG4gICAgICBhbW91bnQgPSAxMDAsXG4gICAgICB0b1BpeGVscyA9IHVuaXQgPT09IFwicHhcIixcbiAgICAgIHRvUGVyY2VudCA9IHVuaXQgPT09IFwiJVwiLFxuICAgICAgcHgsXG4gICAgICBwYXJlbnQsXG4gICAgICBjYWNoZSxcbiAgICAgIGlzU1ZHO1xuXG4gIGlmICh1bml0ID09PSBjdXJVbml0IHx8ICFjdXJWYWx1ZSB8fCBfbm9uQ29udmVydGlibGVVbml0c1t1bml0XSB8fCBfbm9uQ29udmVydGlibGVVbml0c1tjdXJVbml0XSkge1xuICAgIHJldHVybiBjdXJWYWx1ZTtcbiAgfVxuXG4gIGN1clVuaXQgIT09IFwicHhcIiAmJiAhdG9QaXhlbHMgJiYgKGN1clZhbHVlID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIFwicHhcIikpO1xuICBpc1NWRyA9IHRhcmdldC5nZXRDVE0gJiYgX2lzU1ZHKHRhcmdldCk7XG5cbiAgaWYgKCh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldIHx8IH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikpKSB7XG4gICAgcHggPSBpc1NWRyA/IHRhcmdldC5nZXRCQm94KClbaG9yaXpvbnRhbCA/IFwid2lkdGhcIiA6IFwiaGVpZ2h0XCJdIDogdGFyZ2V0W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgcmV0dXJuIF9yb3VuZCh0b1BlcmNlbnQgPyBjdXJWYWx1ZSAvIHB4ICogYW1vdW50IDogY3VyVmFsdWUgLyAxMDAgKiBweCk7XG4gIH1cblxuICBzdHlsZVtob3Jpem9udGFsID8gXCJ3aWR0aFwiIDogXCJoZWlnaHRcIl0gPSBhbW91bnQgKyAodG9QaXhlbHMgPyBjdXJVbml0IDogdW5pdCk7XG4gIHBhcmVudCA9IH5wcm9wZXJ0eS5pbmRleE9mKFwiYWRpdXNcIikgfHwgdW5pdCA9PT0gXCJlbVwiICYmIHRhcmdldC5hcHBlbmRDaGlsZCAmJiAhaXNSb290U1ZHID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgaWYgKGlzU1ZHKSB7XG4gICAgcGFyZW50ID0gKHRhcmdldC5vd25lclNWR0VsZW1lbnQgfHwge30pLnBhcmVudE5vZGU7XG4gIH1cblxuICBpZiAoIXBhcmVudCB8fCBwYXJlbnQgPT09IF9kb2MgfHwgIXBhcmVudC5hcHBlbmRDaGlsZCkge1xuICAgIHBhcmVudCA9IF9kb2MuYm9keTtcbiAgfVxuXG4gIGNhY2hlID0gcGFyZW50Ll9nc2FwO1xuXG4gIGlmIChjYWNoZSAmJiB0b1BlcmNlbnQgJiYgY2FjaGUud2lkdGggJiYgaG9yaXpvbnRhbCAmJiBjYWNoZS50aW1lID09PSBfdGlja2VyLnRpbWUpIHtcbiAgICByZXR1cm4gX3JvdW5kKGN1clZhbHVlIC8gY2FjaGUud2lkdGggKiBhbW91bnQpO1xuICB9IGVsc2Uge1xuICAgICh0b1BlcmNlbnQgfHwgY3VyVW5pdCA9PT0gXCIlXCIpICYmIChzdHlsZS5wb3NpdGlvbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJwb3NpdGlvblwiKSk7XG4gICAgcGFyZW50ID09PSB0YXJnZXQgJiYgKHN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIik7IC8vIGxpa2UgZm9yIGJvcmRlclJhZGl1cywgaWYgaXQncyBhICUgd2UgbXVzdCBoYXZlIGl0IHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgaXRzZWxmIGJ1dCB0aGF0IG1heSBub3QgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgb3IgcG9zaXRpb246IGFic29sdXRlIGluIHdoaWNoIGNhc2UgaXQnZCBnbyB1cCB0aGUgY2hhaW4gdW50aWwgaXQgZmluZHMgaXRzIG9mZnNldFBhcmVudCAoYmFkKS4gcG9zaXRpb246IHN0YXRpYyBwcm90ZWN0cyBhZ2FpbnN0IHRoYXQuXG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHB4ID0gX3RlbXBEaXZbbWVhc3VyZVByb3BlcnR5XTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoX3RlbXBEaXYpO1xuICAgIHN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgaWYgKGhvcml6b250YWwgJiYgdG9QZXJjZW50KSB7XG4gICAgICBjYWNoZSA9IF9nZXRDYWNoZShwYXJlbnQpO1xuICAgICAgY2FjaGUudGltZSA9IF90aWNrZXIudGltZTtcbiAgICAgIGNhY2hlLndpZHRoID0gcGFyZW50W21lYXN1cmVQcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9yb3VuZCh0b1BpeGVscyA/IHB4ICogY3VyVmFsdWUgLyBhbW91bnQgOiBweCAmJiBjdXJWYWx1ZSA/IGFtb3VudCAvIHB4ICogY3VyVmFsdWUgOiAwKTtcbn0sXG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICB2YXIgdmFsdWU7XG4gIF9wbHVnaW5Jbml0dGVkIHx8IF9pbml0Q29yZSgpO1xuXG4gIGlmIChwcm9wZXJ0eSBpbiBfcHJvcGVydHlBbGlhc2VzICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgcHJvcGVydHkgPSBfcHJvcGVydHlBbGlhc2VzW3Byb3BlcnR5XTtcblxuICAgIGlmICh+cHJvcGVydHkuaW5kZXhPZihcIixcIikpIHtcbiAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoXCIsXCIpWzBdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChfdHJhbnNmb3JtUHJvcHNbcHJvcGVydHldICYmIHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgdmFsdWUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKTtcbiAgICB2YWx1ZSA9IHByb3BlcnR5ICE9PSBcInRyYW5zZm9ybU9yaWdpblwiID8gdmFsdWVbcHJvcGVydHldIDogdmFsdWUuc3ZnID8gdmFsdWUub3JpZ2luIDogX2ZpcnN0VHdvT25seShfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1PcmlnaW5Qcm9wKSkgKyBcIiBcIiArIHZhbHVlLnpPcmlnaW4gKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSB0YXJnZXQuc3R5bGVbcHJvcGVydHldO1xuXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gXCJhdXRvXCIgfHwgdW5jYWNoZSB8fCB+KHZhbHVlICsgXCJcIikuaW5kZXhPZihcImNhbGMoXCIpKSB7XG4gICAgICB2YWx1ZSA9IF9zcGVjaWFsUHJvcHNbcHJvcGVydHldICYmIF9zcGVjaWFsUHJvcHNbcHJvcGVydHldKHRhcmdldCwgcHJvcGVydHksIHVuaXQpIHx8IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHx8IF9nZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB8fCAocHJvcGVydHkgPT09IFwib3BhY2l0eVwiID8gMSA6IDApOyAvLyBub3RlOiBzb21lIGJyb3dzZXJzLCBsaWtlIEZpcmVmb3gsIGRvbid0IHJlcG9ydCBib3JkZXJSYWRpdXMgY29ycmVjdGx5ISBJbnN0ZWFkLCBpdCBvbmx5IHJlcG9ydHMgZXZlcnkgY29ybmVyIGxpa2UgIGJvcmRlclRvcExlZnRSYWRpdXNcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5pdCAmJiAhfih2YWx1ZSArIFwiXCIpLnRyaW0oKS5pbmRleE9mKFwiIFwiKSA/IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgcHJvcGVydHksIHZhbHVlLCB1bml0KSArIHVuaXQgOiB2YWx1ZTtcbn0sXG4gICAgX3R3ZWVuQ29tcGxleENTU1N0cmluZyA9IGZ1bmN0aW9uIF90d2VlbkNvbXBsZXhDU1NTdHJpbmcodGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kKSB7XG4gIC8vbm90ZTogd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA9PT0gXCJub25lXCIpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGxpa2UgU2FmYXJpIGFjdHVhbGx5IFBSRUZFUiB0aGUgcHJlZml4ZWQgcHJvcGVydHkgYW5kIG1pcy1yZXBvcnQgdGhlIHVucHJlZml4ZWQgdmFsdWUgbGlrZSBjbGlwUGF0aCAoQlVHKS4gSW4gb3RoZXIgd29yZHMsIGV2ZW4gdGhvdWdoIGNsaXBQYXRoIGV4aXN0cyBpbiB0aGUgc3R5bGUgKFwiY2xpcFBhdGhcIiBpbiB0YXJnZXQuc3R5bGUpIGFuZCBpdCdzIHNldCBpbiB0aGUgQ1NTIHByb3Blcmx5IChhbG9uZyB3aXRoIC13ZWJraXQtY2xpcC1wYXRoKSwgU2FmYXJpIHJlcG9ydHMgY2xpcFBhdGggYXMgXCJub25lXCIgd2hlcmVhcyBXZWJraXRDbGlwUGF0aCByZXBvcnRzIGFjY3VyYXRlbHkgbGlrZSBcImVsbGlwc2UoMTAwJSAwJSBhdCA1MCUgMCUpXCIsIHNvIGluIHRoaXMgY2FzZSB3ZSBtdXN0IFNXSVRDSCB0byB1c2luZyB0aGUgcHJlZml4ZWQgcHJvcGVydHkgaW5zdGVhZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMTgzMTAtY2xpcHBhdGgtZG9lc250LXdvcmstb24taW9zL1xuICAgIHZhciBwID0gX2NoZWNrUHJvcFByZWZpeChwcm9wLCB0YXJnZXQsIDEpLFxuICAgICAgICBzID0gcCAmJiBfZ2V0Q29tcHV0ZWRQcm9wZXJ0eSh0YXJnZXQsIHAsIDEpO1xuXG4gICAgaWYgKHMgJiYgcyAhPT0gc3RhcnQpIHtcbiAgICAgIHByb3AgPSBwO1xuICAgICAgc3RhcnQgPSBzO1xuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gXCJib3JkZXJDb2xvclwiKSB7XG4gICAgICBzdGFydCA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgXCJib3JkZXJUb3BDb2xvclwiKTsgLy8gRmlyZWZveCBidWc6IGFsd2F5cyByZXBvcnRzIFwiYm9yZGVyQ29sb3JcIiBhcyBcIlwiLCBzbyB3ZSBtdXN0IGZhbGwgYmFjayB0byBib3JkZXJUb3BDb2xvci4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjQ1ODMtaG93LXRvLXJldHVybi1jb2xvcnMtdGhhdC1pLWhhZC1hZnRlci1yZXZlcnNlL1xuICAgIH1cbiAgfVxuXG4gIHZhciBwdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIHRhcmdldC5zdHlsZSwgcHJvcCwgMCwgMSwgX3JlbmRlckNvbXBsZXhTdHJpbmcpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICBhLFxuICAgICAgcmVzdWx0LFxuICAgICAgc3RhcnRWYWx1ZXMsXG4gICAgICBzdGFydE51bSxcbiAgICAgIGNvbG9yLFxuICAgICAgc3RhcnRWYWx1ZSxcbiAgICAgIGVuZFZhbHVlLFxuICAgICAgZW5kTnVtLFxuICAgICAgY2h1bmssXG4gICAgICBlbmRVbml0LFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBlbmRWYWx1ZXM7XG4gIHB0LmIgPSBzdGFydDtcbiAgcHQuZSA9IGVuZDtcbiAgc3RhcnQgKz0gXCJcIjsgLy9lbnN1cmUgdmFsdWVzIGFyZSBzdHJpbmdzXG5cbiAgZW5kICs9IFwiXCI7XG5cbiAgaWYgKGVuZCA9PT0gXCJhdXRvXCIpIHtcbiAgICB0YXJnZXQuc3R5bGVbcHJvcF0gPSBlbmQ7XG4gICAgZW5kID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBwcm9wKSB8fCBlbmQ7XG4gICAgdGFyZ2V0LnN0eWxlW3Byb3BdID0gc3RhcnQ7XG4gIH1cblxuICBhID0gW3N0YXJ0LCBlbmRdO1xuXG4gIF9jb2xvclN0cmluZ0ZpbHRlcihhKTsgLy9wYXNzIGFuIGFycmF5IHdpdGggdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzIGFuZCBsZXQgdGhlIGZpbHRlciBkbyB3aGF0ZXZlciBpdCBuZWVkcyB0byB0aGUgdmFsdWVzLiBJZiBjb2xvcnMgYXJlIGZvdW5kLCBpdCByZXR1cm5zIHRydWUgYW5kIHRoZW4gd2UgbXVzdCBtYXRjaCB3aGVyZSB0aGUgY29sb3Igc2hvd3MgdXAgb3JkZXItd2lzZSBiZWNhdXNlIGZvciB0aGluZ3MgbGlrZSBib3hTaGFkb3csIHNvbWV0aW1lcyB0aGUgYnJvd3NlciBwcm92aWRlcyB0aGUgY29tcHV0ZWQgdmFsdWVzIHdpdGggdGhlIGNvbG9yIEZJUlNULCBidXQgdGhlIHVzZXIgcHJvdmlkZXMgaXQgd2l0aCB0aGUgY29sb3IgTEFTVCwgc28gZmxpcCB0aGVtIGlmIG5lY2Vzc2FyeS4gU2FtZSBmb3IgZHJvcC1zaGFkb3coKS5cblxuXG4gIHN0YXJ0ID0gYVswXTtcbiAgZW5kID0gYVsxXTtcbiAgc3RhcnRWYWx1ZXMgPSBzdGFydC5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICBlbmRWYWx1ZXMgPSBlbmQubWF0Y2goX251bVdpdGhVbml0RXhwKSB8fCBbXTtcblxuICBpZiAoZW5kVmFsdWVzLmxlbmd0aCkge1xuICAgIHdoaWxlIChyZXN1bHQgPSBfbnVtV2l0aFVuaXRFeHAuZXhlYyhlbmQpKSB7XG4gICAgICBlbmRWYWx1ZSA9IHJlc3VsdFswXTtcbiAgICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gKGNvbG9yICsgMSkgJSA1O1xuICAgICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIgfHwgY2h1bmsuc3Vic3RyKC01KSA9PT0gXCJoc2xhKFwiKSB7XG4gICAgICAgIGNvbG9yID0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFZhbHVlICE9PSAoc3RhcnRWYWx1ZSA9IHN0YXJ0VmFsdWVzW21hdGNoSW5kZXgrK10gfHwgXCJcIikpIHtcbiAgICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0VmFsdWUpIHx8IDA7XG4gICAgICAgIHN0YXJ0VW5pdCA9IHN0YXJ0VmFsdWUuc3Vic3RyKChzdGFydE51bSArIFwiXCIpLmxlbmd0aCk7XG4gICAgICAgIHJlbGF0aXZlID0gZW5kVmFsdWUuY2hhckF0KDEpID09PSBcIj1cIiA/ICsoZW5kVmFsdWUuY2hhckF0KDApICsgXCIxXCIpIDogMDtcblxuICAgICAgICBpZiAocmVsYXRpdmUpIHtcbiAgICAgICAgICBlbmRWYWx1ZSA9IGVuZFZhbHVlLnN1YnN0cigyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgICBlbmRVbml0ID0gZW5kVmFsdWUuc3Vic3RyKChlbmROdW0gKyBcIlwiKS5sZW5ndGgpO1xuICAgICAgICBpbmRleCA9IF9udW1XaXRoVW5pdEV4cC5sYXN0SW5kZXggLSBlbmRVbml0Lmxlbmd0aDtcblxuICAgICAgICBpZiAoIWVuZFVuaXQpIHtcbiAgICAgICAgICAvL2lmIHNvbWV0aGluZyBsaWtlIFwicGVyc3BlY3RpdmU6MzAwXCIgaXMgcGFzc2VkIGluIGFuZCB3ZSBtdXN0IGFkZCBhIHVuaXQgdG8gdGhlIGVuZFxuICAgICAgICAgIGVuZFVuaXQgPSBlbmRVbml0IHx8IF9jb25maWcudW5pdHNbcHJvcF0gfHwgc3RhcnRVbml0O1xuXG4gICAgICAgICAgaWYgKGluZGV4ID09PSBlbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgKz0gZW5kVW5pdDtcbiAgICAgICAgICAgIHB0LmUgKz0gZW5kVW5pdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRVbml0ICE9PSBlbmRVbml0KSB7XG4gICAgICAgICAgc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHByb3AsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIHx8IDA7XG4gICAgICAgIH0gLy90aGVzZSBuZXN0ZWQgUHJvcFR3ZWVucyBhcmUgaGFuZGxlZCBpbiBhIHNwZWNpYWwgd2F5IC0gd2UnbGwgbmV2ZXIgYWN0dWFsbHkgY2FsbCBhIHJlbmRlciBvciBzZXR0ZXIgbWV0aG9kIG9uIHRoZW0uIFdlJ2xsIGp1c3QgbG9vcCB0aHJvdWdoIHRoZW0gaW4gdGhlIHBhcmVudCBjb21wbGV4IHN0cmluZyBQcm9wVHdlZW4ncyByZW5kZXIgbWV0aG9kLlxuXG5cbiAgICAgICAgcHQuX3B0ID0ge1xuICAgICAgICAgIF9uZXh0OiBwdC5fcHQsXG4gICAgICAgICAgcDogY2h1bmsgfHwgbWF0Y2hJbmRleCA9PT0gMSA/IGNodW5rIDogXCIsXCIsXG4gICAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgICAgczogc3RhcnROdW0sXG4gICAgICAgICAgYzogcmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCB8fCBwcm9wID09PSBcInpJbmRleFwiID8gTWF0aC5yb3VuZCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwdC5jID0gaW5kZXggPCBlbmQubGVuZ3RoID8gZW5kLnN1YnN0cmluZyhpbmRleCwgZW5kLmxlbmd0aCkgOiBcIlwiOyAvL3dlIHVzZSB0aGUgXCJjXCIgb2YgdGhlIFByb3BUd2VlbiB0byBzdG9yZSB0aGUgZmluYWwgcGFydCBvZiB0aGUgc3RyaW5nIChhZnRlciB0aGUgbGFzdCBudW1iZXIpXG4gIH0gZWxzZSB7XG4gICAgcHQuciA9IHByb3AgPT09IFwiZGlzcGxheVwiICYmIGVuZCA9PT0gXCJub25lXCIgPyBfcmVuZGVyTm9uVHdlZW5pbmdWYWx1ZU9ubHlBdEVuZCA6IF9yZW5kZXJOb25Ud2VlbmluZ1ZhbHVlO1xuICB9XG5cbiAgX3JlbEV4cC50ZXN0KGVuZCkgJiYgKHB0LmUgPSAwKTsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuXG4gIHRoaXMuX3B0ID0gcHQ7IC8vc3RhcnQgdGhlIGxpbmtlZCBsaXN0IHdpdGggdGhpcyBuZXcgUHJvcFR3ZWVuLiBSZW1lbWJlciwgd2UgY2FsbCBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwocGx1Z2luSW5zdGFuY2UuLi4pIHRvIGVuc3VyZSB0aGF0IGl0J3Mgc2NvcGVkIHByb3Blcmx5LiBXZSBtYXkgY2FsbCBpdCBmcm9tIHdpdGhpbiBhbm90aGVyIHBsdWdpbiB0b28sIHRodXMgXCJ0aGlzXCIgd291bGQgcmVmZXIgdG8gdGhlIHBsdWdpbi5cblxuICByZXR1cm4gcHQ7XG59LFxuICAgIF9rZXl3b3JkVG9QZXJjZW50ID0ge1xuICB0b3A6IFwiMCVcIixcbiAgYm90dG9tOiBcIjEwMCVcIixcbiAgbGVmdDogXCIwJVwiLFxuICByaWdodDogXCIxMDAlXCIsXG4gIGNlbnRlcjogXCI1MCVcIlxufSxcbiAgICBfY29udmVydEtleXdvcmRzVG9QZXJjZW50YWdlcyA9IGZ1bmN0aW9uIF9jb252ZXJ0S2V5d29yZHNUb1BlcmNlbnRhZ2VzKHZhbHVlKSB7XG4gIHZhciBzcGxpdCA9IHZhbHVlLnNwbGl0KFwiIFwiKSxcbiAgICAgIHggPSBzcGxpdFswXSxcbiAgICAgIHkgPSBzcGxpdFsxXSB8fCBcIjUwJVwiO1xuXG4gIGlmICh4ID09PSBcInRvcFwiIHx8IHggPT09IFwiYm90dG9tXCIgfHwgeSA9PT0gXCJsZWZ0XCIgfHwgeSA9PT0gXCJyaWdodFwiKSB7XG4gICAgLy90aGUgdXNlciBwcm92aWRlZCB0aGVtIGluIHRoZSB3cm9uZyBvcmRlciwgc28gZmxpcCB0aGVtXG4gICAgdmFsdWUgPSB4O1xuICAgIHggPSB5O1xuICAgIHkgPSB2YWx1ZTtcbiAgfVxuXG4gIHNwbGl0WzBdID0gX2tleXdvcmRUb1BlcmNlbnRbeF0gfHwgeDtcbiAgc3BsaXRbMV0gPSBfa2V5d29yZFRvUGVyY2VudFt5XSB8fCB5O1xuICByZXR1cm4gc3BsaXQuam9pbihcIiBcIik7XG59LFxuICAgIF9yZW5kZXJDbGVhclByb3BzID0gZnVuY3Rpb24gX3JlbmRlckNsZWFyUHJvcHMocmF0aW8sIGRhdGEpIHtcbiAgaWYgKGRhdGEudHdlZW4gJiYgZGF0YS50d2Vlbi5fdGltZSA9PT0gZGF0YS50d2Vlbi5fZHVyKSB7XG4gICAgdmFyIHRhcmdldCA9IGRhdGEudCxcbiAgICAgICAgc3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gICAgICAgIHByb3BzID0gZGF0YS51LFxuICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcCxcbiAgICAgICAgcHJvcCxcbiAgICAgICAgY2xlYXJUcmFuc2Zvcm1zLFxuICAgICAgICBpO1xuXG4gICAgaWYgKHByb3BzID09PSBcImFsbFwiIHx8IHByb3BzID09PSB0cnVlKSB7XG4gICAgICBzdHlsZS5jc3NUZXh0ID0gXCJcIjtcbiAgICAgIGNsZWFyVHJhbnNmb3JtcyA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BzID0gcHJvcHMuc3BsaXQoXCIsXCIpO1xuICAgICAgaSA9IHByb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKC0taSA+IC0xKSB7XG4gICAgICAgIHByb3AgPSBwcm9wc1tpXTtcblxuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzW3Byb3BdKSB7XG4gICAgICAgICAgY2xlYXJUcmFuc2Zvcm1zID0gMTtcbiAgICAgICAgICBwcm9wID0gcHJvcCA9PT0gXCJ0cmFuc2Zvcm1PcmlnaW5cIiA/IF90cmFuc2Zvcm1PcmlnaW5Qcm9wIDogX3RyYW5zZm9ybVByb3A7XG4gICAgICAgIH1cblxuICAgICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBwcm9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xlYXJUcmFuc2Zvcm1zKSB7XG4gICAgICBfcmVtb3ZlUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgICAgIGlmIChjYWNoZSkge1xuICAgICAgICBjYWNoZS5zdmcgJiYgdGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcblxuICAgICAgICBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTsgLy8gZm9yY2UgYWxsIHRoZSBjYWNoZWQgdmFsdWVzIGJhY2sgdG8gXCJub3JtYWxcIi9pZGVudGl0eSwgb3RoZXJ3aXNlIGlmIHRoZXJlJ3MgYW5vdGhlciB0d2VlbiB0aGF0J3MgYWxyZWFkeSBzZXQgdG8gcmVuZGVyIHRyYW5zZm9ybXMgb24gdGhpcyBlbGVtZW50LCBpdCBjb3VsZCBkaXNwbGF5IHRoZSB3cm9uZyB2YWx1ZXMuXG5cblxuICAgICAgICBjYWNoZS51bmNhY2hlID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG4gICAgLy8gbm90ZTogc3BlY2lhbFByb3BzIHNob3VsZCByZXR1cm4gMSBpZiAoYW5kIG9ubHkgaWYpIHRoZXkgaGF2ZSBhIG5vbi16ZXJvIHByaW9yaXR5LiBJdCBpbmRpY2F0ZXMgd2UgbmVlZCB0byBzb3J0IHRoZSBsaW5rZWQgbGlzdC5cbl9zcGVjaWFsUHJvcHMgPSB7XG4gIGNsZWFyUHJvcHM6IGZ1bmN0aW9uIGNsZWFyUHJvcHMocGx1Z2luLCB0YXJnZXQsIHByb3BlcnR5LCBlbmRWYWx1ZSwgdHdlZW4pIHtcbiAgICBpZiAodHdlZW4uZGF0YSAhPT0gXCJpc0Zyb21TdGFydFwiKSB7XG4gICAgICB2YXIgcHQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIHByb3BlcnR5LCAwLCAwLCBfcmVuZGVyQ2xlYXJQcm9wcyk7XG4gICAgICBwdC51ID0gZW5kVmFsdWU7XG4gICAgICBwdC5wciA9IC0xMDtcbiAgICAgIHB0LnR3ZWVuID0gdHdlZW47XG5cbiAgICAgIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICAvKiBjbGFzc05hbWUgZmVhdHVyZSAoYWJvdXQgMC40a2IgZ3ppcHBlZCkuXG4gICwgY2xhc3NOYW1lKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgZW5kVmFsdWUsIHR3ZWVuKSB7XG4gIFx0bGV0IF9yZW5kZXJDbGFzc05hbWUgPSAocmF0aW8sIGRhdGEpID0+IHtcbiAgXHRcdFx0ZGF0YS5jc3MucmVuZGVyKHJhdGlvLCBkYXRhLmNzcyk7XG4gIFx0XHRcdGlmICghcmF0aW8gfHwgcmF0aW8gPT09IDEpIHtcbiAgXHRcdFx0XHRsZXQgaW5saW5lID0gZGF0YS5ybXYsXG4gIFx0XHRcdFx0XHR0YXJnZXQgPSBkYXRhLnQsXG4gIFx0XHRcdFx0XHRwO1xuICBcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCByYXRpbyA/IGRhdGEuZSA6IGRhdGEuYik7XG4gIFx0XHRcdFx0Zm9yIChwIGluIGlubGluZSkge1xuICBcdFx0XHRcdFx0X3JlbW92ZVByb3BlcnR5KHRhcmdldCwgcCk7XG4gIFx0XHRcdFx0fVxuICBcdFx0XHR9XG4gIFx0XHR9LFxuICBcdFx0X2dldEFsbFN0eWxlcyA9ICh0YXJnZXQpID0+IHtcbiAgXHRcdFx0bGV0IHN0eWxlcyA9IHt9LFxuICBcdFx0XHRcdGNvbXB1dGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLFxuICBcdFx0XHRcdHA7XG4gIFx0XHRcdGZvciAocCBpbiBjb21wdXRlZCkge1xuICBcdFx0XHRcdGlmIChpc05hTihwKSAmJiBwICE9PSBcImNzc1RleHRcIiAmJiBwICE9PSBcImxlbmd0aFwiKSB7XG4gIFx0XHRcdFx0XHRzdHlsZXNbcF0gPSBjb21wdXRlZFtwXTtcbiAgXHRcdFx0XHR9XG4gIFx0XHRcdH1cbiAgXHRcdFx0X3NldERlZmF1bHRzKHN0eWxlcywgX3BhcnNlVHJhbnNmb3JtKHRhcmdldCwgMSkpO1xuICBcdFx0XHRyZXR1cm4gc3R5bGVzO1xuICBcdFx0fSxcbiAgXHRcdHN0YXJ0Q2xhc3NMaXN0ID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLFxuICBcdFx0c3R5bGUgPSB0YXJnZXQuc3R5bGUsXG4gIFx0XHRjc3NUZXh0ID0gc3R5bGUuY3NzVGV4dCxcbiAgXHRcdGNhY2hlID0gdGFyZ2V0Ll9nc2FwLFxuICBcdFx0Y2xhc3NQVCA9IGNhY2hlLmNsYXNzUFQsXG4gIFx0XHRpbmxpbmVUb1JlbW92ZUF0RW5kID0ge30sXG4gIFx0XHRkYXRhID0ge3Q6dGFyZ2V0LCBwbHVnaW46cGx1Z2luLCBybXY6aW5saW5lVG9SZW1vdmVBdEVuZCwgYjpzdGFydENsYXNzTGlzdCwgZTooZW5kVmFsdWUuY2hhckF0KDEpICE9PSBcIj1cIikgPyBlbmRWYWx1ZSA6IHN0YXJ0Q2xhc3NMaXN0LnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgKyBcIig/IVtcXFxcdy1dKVwiKSwgXCJcIikgKyAoKGVuZFZhbHVlLmNoYXJBdCgwKSA9PT0gXCIrXCIpID8gXCIgXCIgKyBlbmRWYWx1ZS5zdWJzdHIoMikgOiBcIlwiKX0sXG4gIFx0XHRjaGFuZ2luZ1ZhcnMgPSB7fSxcbiAgXHRcdHN0YXJ0VmFycyA9IF9nZXRBbGxTdHlsZXModGFyZ2V0KSxcbiAgXHRcdHRyYW5zZm9ybVJlbGF0ZWQgPSAvKHRyYW5zZm9ybXxwZXJzcGVjdGl2ZSkvaSxcbiAgXHRcdGVuZFZhcnMsIHA7XG4gIFx0aWYgKGNsYXNzUFQpIHtcbiAgXHRcdGNsYXNzUFQucigxLCBjbGFzc1BULmQpO1xuICBcdFx0X3JlbW92ZUxpbmtlZExpc3RJdGVtKGNsYXNzUFQuZC5wbHVnaW4sIGNsYXNzUFQsIFwiX3B0XCIpO1xuICBcdH1cbiAgXHR0YXJnZXQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZGF0YS5lKTtcbiAgXHRlbmRWYXJzID0gX2dldEFsbFN0eWxlcyh0YXJnZXQsIHRydWUpO1xuICBcdHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBzdGFydENsYXNzTGlzdCk7XG4gIFx0Zm9yIChwIGluIGVuZFZhcnMpIHtcbiAgXHRcdGlmIChlbmRWYXJzW3BdICE9PSBzdGFydFZhcnNbcF0gJiYgIXRyYW5zZm9ybVJlbGF0ZWQudGVzdChwKSkge1xuICBcdFx0XHRjaGFuZ2luZ1ZhcnNbcF0gPSBlbmRWYXJzW3BdO1xuICBcdFx0XHRpZiAoIXN0eWxlW3BdICYmIHN0eWxlW3BdICE9PSBcIjBcIikge1xuICBcdFx0XHRcdGlubGluZVRvUmVtb3ZlQXRFbmRbcF0gPSAxO1xuICBcdFx0XHR9XG4gIFx0XHR9XG4gIFx0fVxuICBcdGNhY2hlLmNsYXNzUFQgPSBwbHVnaW4uX3B0ID0gbmV3IFByb3BUd2VlbihwbHVnaW4uX3B0LCB0YXJnZXQsIFwiY2xhc3NOYW1lXCIsIDAsIDAsIF9yZW5kZXJDbGFzc05hbWUsIGRhdGEsIDAsIC0xMSk7XG4gIFx0aWYgKHN0eWxlLmNzc1RleHQgIT09IGNzc1RleHQpIHsgLy9vbmx5IGFwcGx5IGlmIHRoaW5ncyBjaGFuZ2UuIE90aGVyd2lzZSwgaW4gY2FzZXMgbGlrZSBhIGJhY2tncm91bmQtaW1hZ2UgdGhhdCdzIHB1bGxlZCBkeW5hbWljYWxseSwgaXQgY291bGQgY2F1c2UgYSByZWZyZXNoLiBTZWUgaHR0cHM6Ly9ncmVlbnNvY2suY29tL2ZvcnVtcy90b3BpYy8yMDM2OC1wb3NzaWJsZS1nc2FwLWJ1Zy1zd2l0Y2hpbmctY2xhc3NuYW1lcy1pbi1jaHJvbWUvLlxuICBcdFx0c3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7IC8vd2UgcmVjb3JkZWQgY3NzVGV4dCBiZWZvcmUgd2Ugc3dhcHBlZCBjbGFzc2VzIGFuZCByYW4gX2dldEFsbFN0eWxlcygpIGJlY2F1c2UgaW4gY2FzZXMgd2hlbiBhIGNsYXNzTmFtZSB0d2VlbiBpcyBvdmVyd3JpdHRlbiwgd2UgcmVtb3ZlIGFsbCB0aGUgcmVsYXRlZCB0d2VlbmluZyBwcm9wZXJ0aWVzIGZyb20gdGhhdCBjbGFzcyBjaGFuZ2UgKG90aGVyd2lzZSBjbGFzcy1zcGVjaWZpYyBzdHVmZiBjYW4ndCBvdmVycmlkZSBwcm9wZXJ0aWVzIHdlJ3ZlIGRpcmVjdGx5IHNldCBvbiB0aGUgdGFyZ2V0J3Mgc3R5bGUgb2JqZWN0IGR1ZSB0byBzcGVjaWZpY2l0eSkuXG4gIFx0fVxuICBcdF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIHRydWUpOyAvL3RvIGNsZWFyIHRoZSBjYWNoaW5nIG9mIHRyYW5zZm9ybXNcbiAgXHRkYXRhLmNzcyA9IG5ldyBnc2FwLnBsdWdpbnMuY3NzKCk7XG4gIFx0ZGF0YS5jc3MuaW5pdCh0YXJnZXQsIGNoYW5naW5nVmFycywgdHdlZW4pO1xuICBcdHBsdWdpbi5fcHJvcHMucHVzaCguLi5kYXRhLmNzcy5fcHJvcHMpO1xuICBcdHJldHVybiAxO1xuICB9XG4gICovXG5cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFJBTlNGT1JNU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuX2lkZW50aXR5MkRNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF0sXG4gICAgX3JvdGF0aW9uYWxQcm9wZXJ0aWVzID0ge30sXG4gICAgX2lzTnVsbFRyYW5zZm9ybSA9IGZ1bmN0aW9uIF9pc051bGxUcmFuc2Zvcm0odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiIHx8IHZhbHVlID09PSBcIm5vbmVcIiB8fCAhdmFsdWU7XG59LFxuICAgIF9nZXRDb21wdXRlZFRyYW5zZm9ybU1hdHJpeEFzQXJyYXkgPSBmdW5jdGlvbiBfZ2V0Q29tcHV0ZWRUcmFuc2Zvcm1NYXRyaXhBc0FycmF5KHRhcmdldCkge1xuICB2YXIgbWF0cml4U3RyaW5nID0gX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCk7XG5cbiAgcmV0dXJuIF9pc051bGxUcmFuc2Zvcm0obWF0cml4U3RyaW5nKSA/IF9pZGVudGl0eTJETWF0cml4IDogbWF0cml4U3RyaW5nLnN1YnN0cig3KS5tYXRjaChfbnVtRXhwKS5tYXAoX3JvdW5kKTtcbn0sXG4gICAgX2dldE1hdHJpeCA9IGZ1bmN0aW9uIF9nZXRNYXRyaXgodGFyZ2V0LCBmb3JjZTJEKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBfZ2V0Q2FjaGUodGFyZ2V0KSxcbiAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpLFxuICAgICAgcGFyZW50LFxuICAgICAgbmV4dFNpYmxpbmcsXG4gICAgICB0ZW1wLFxuICAgICAgYWRkZWRUb0RPTTtcblxuICBpZiAoY2FjaGUuc3ZnICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpIHtcbiAgICB0ZW1wID0gdGFyZ2V0LnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4OyAvL2Vuc3VyZXMgdGhhdCBldmVuIGNvbXBsZXggdmFsdWVzIGxpa2UgXCJ0cmFuc2xhdGUoNTAsNjApIHJvdGF0ZSgxMzUsMCwwKVwiIGFyZSBwYXJzZWQgYmVjYXVzZSBpdCBtYXNoZXMgaXQgaW50byBhIG1hdHJpeC5cblxuICAgIG1hdHJpeCA9IFt0ZW1wLmEsIHRlbXAuYiwgdGVtcC5jLCB0ZW1wLmQsIHRlbXAuZSwgdGVtcC5mXTtcbiAgICByZXR1cm4gbWF0cml4LmpvaW4oXCIsXCIpID09PSBcIjEsMCwwLDEsMCwwXCIgPyBfaWRlbnRpdHkyRE1hdHJpeCA6IG1hdHJpeDtcbiAgfSBlbHNlIGlmIChtYXRyaXggPT09IF9pZGVudGl0eTJETWF0cml4ICYmICF0YXJnZXQub2Zmc2V0UGFyZW50ICYmIHRhcmdldCAhPT0gX2RvY0VsZW1lbnQgJiYgIWNhY2hlLnN2Zykge1xuICAgIC8vbm90ZTogaWYgb2Zmc2V0UGFyZW50IGlzIG51bGwsIHRoYXQgbWVhbnMgdGhlIGVsZW1lbnQgaXNuJ3QgaW4gdGhlIG5vcm1hbCBkb2N1bWVudCBmbG93LCBsaWtlIGlmIGl0IGhhcyBkaXNwbGF5Om5vbmUgb3Igb25lIG9mIGl0cyBhbmNlc3RvcnMgaGFzIGRpc3BsYXk6bm9uZSkuIEZpcmVmb3ggcmV0dXJucyBudWxsIGZvciBnZXRDb21wdXRlZFN0eWxlKCkgaWYgdGhlIGVsZW1lbnQgaXMgaW4gYW4gaWZyYW1lIHRoYXQgaGFzIGRpc3BsYXk6bm9uZS4gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gICAgLy9icm93c2VycyBkb24ndCByZXBvcnQgdHJhbnNmb3JtcyBhY2N1cmF0ZWx5IHVubGVzcyB0aGUgZWxlbWVudCBpcyBpbiB0aGUgRE9NIGFuZCBoYXMgYSBkaXNwbGF5IHZhbHVlIHRoYXQncyBub3QgXCJub25lXCIuIEZpcmVmb3ggYW5kIE1pY3Jvc29mdCBicm93c2VycyBoYXZlIGEgcGFydGlhbCBidWcgd2hlcmUgdGhleSdsbCByZXBvcnQgdHJhbnNmb3JtcyBldmVuIGlmIGRpc3BsYXk6bm9uZSBCVVQgbm90IGFueSBwZXJjZW50YWdlLWJhc2VkIHZhbHVlcyBsaWtlIHRyYW5zbGF0ZSgtNTAlLCA4cHgpIHdpbGwgYmUgcmVwb3J0ZWQgYXMgaWYgaXQncyB0cmFuc2xhdGUoMCwgOHB4KS5cbiAgICB0ZW1wID0gc3R5bGUuZGlzcGxheTtcbiAgICBzdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBhcmVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKCFwYXJlbnQgfHwgIXRhcmdldC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIC8vIG5vdGU6IGluIDMuMy4wIHdlIHN3aXRjaGVkIHRhcmdldC5vZmZzZXRQYXJlbnQgdG8gX2RvYy5ib2R5LmNvbnRhaW5zKHRhcmdldCkgdG8gYXZvaWQgW3NvbWV0aW1lcyB1bm5lY2Vzc2FyeV0gTXV0YXRpb25PYnNlcnZlciBjYWxscyBidXQgdGhhdCB3YXNuJ3QgYWRlcXVhdGUgYmVjYXVzZSB0aGVyZSBhcmUgZWRnZSBjYXNlcyB3aGVyZSBuZXN0ZWQgcG9zaXRpb246IGZpeGVkIGVsZW1lbnRzIG5lZWQgdG8gZ2V0IHJlcGFyZW50ZWQgdG8gYWNjdXJhdGVseSBzZW5zZSB0cmFuc2Zvcm1zLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zODggYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUC9pc3N1ZXMvMzc1XG4gICAgICBhZGRlZFRvRE9NID0gMTsgLy9mbGFnXG5cbiAgICAgIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRTaWJsaW5nO1xuXG4gICAgICBfZG9jRWxlbWVudC5hcHBlbmRDaGlsZCh0YXJnZXQpOyAvL3dlIG11c3QgYWRkIGl0IHRvIHRoZSBET00gaW4gb3JkZXIgdG8gZ2V0IHZhbHVlcyBwcm9wZXJseVxuXG4gICAgfVxuXG4gICAgbWF0cml4ID0gX2dldENvbXB1dGVkVHJhbnNmb3JtTWF0cml4QXNBcnJheSh0YXJnZXQpO1xuICAgIHRlbXAgPyBzdHlsZS5kaXNwbGF5ID0gdGVtcCA6IF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIFwiZGlzcGxheVwiKTtcblxuICAgIGlmIChhZGRlZFRvRE9NKSB7XG4gICAgICBuZXh0U2libGluZyA/IHBhcmVudC5pbnNlcnRCZWZvcmUodGFyZ2V0LCBuZXh0U2libGluZykgOiBwYXJlbnQgPyBwYXJlbnQuYXBwZW5kQ2hpbGQodGFyZ2V0KSA6IF9kb2NFbGVtZW50LnJlbW92ZUNoaWxkKHRhcmdldCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcmNlMkQgJiYgbWF0cml4Lmxlbmd0aCA+IDYgPyBbbWF0cml4WzBdLCBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzVdLCBtYXRyaXhbMTJdLCBtYXRyaXhbMTNdXSA6IG1hdHJpeDtcbn0sXG4gICAgX2FwcGx5U1ZHT3JpZ2luID0gZnVuY3Rpb24gX2FwcGx5U1ZHT3JpZ2luKHRhcmdldCwgb3JpZ2luLCBvcmlnaW5Jc0Fic29sdXRlLCBzbW9vdGgsIG1hdHJpeEFycmF5LCBwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbykge1xuICB2YXIgY2FjaGUgPSB0YXJnZXQuX2dzYXAsXG4gICAgICBtYXRyaXggPSBtYXRyaXhBcnJheSB8fCBfZ2V0TWF0cml4KHRhcmdldCwgdHJ1ZSksXG4gICAgICB4T3JpZ2luT2xkID0gY2FjaGUueE9yaWdpbiB8fCAwLFxuICAgICAgeU9yaWdpbk9sZCA9IGNhY2hlLnlPcmlnaW4gfHwgMCxcbiAgICAgIHhPZmZzZXRPbGQgPSBjYWNoZS54T2Zmc2V0IHx8IDAsXG4gICAgICB5T2Zmc2V0T2xkID0gY2FjaGUueU9mZnNldCB8fCAwLFxuICAgICAgYSA9IG1hdHJpeFswXSxcbiAgICAgIGIgPSBtYXRyaXhbMV0sXG4gICAgICBjID0gbWF0cml4WzJdLFxuICAgICAgZCA9IG1hdHJpeFszXSxcbiAgICAgIHR4ID0gbWF0cml4WzRdLFxuICAgICAgdHkgPSBtYXRyaXhbNV0sXG4gICAgICBvcmlnaW5TcGxpdCA9IG9yaWdpbi5zcGxpdChcIiBcIiksXG4gICAgICB4T3JpZ2luID0gcGFyc2VGbG9hdChvcmlnaW5TcGxpdFswXSkgfHwgMCxcbiAgICAgIHlPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpblNwbGl0WzFdKSB8fCAwLFxuICAgICAgYm91bmRzLFxuICAgICAgZGV0ZXJtaW5hbnQsXG4gICAgICB4LFxuICAgICAgeTtcblxuICBpZiAoIW9yaWdpbklzQWJzb2x1dGUpIHtcbiAgICBib3VuZHMgPSBfZ2V0QkJveCh0YXJnZXQpO1xuICAgIHhPcmlnaW4gPSBib3VuZHMueCArICh+b3JpZ2luU3BsaXRbMF0uaW5kZXhPZihcIiVcIikgPyB4T3JpZ2luIC8gMTAwICogYm91bmRzLndpZHRoIDogeE9yaWdpbik7XG4gICAgeU9yaWdpbiA9IGJvdW5kcy55ICsgKH4ob3JpZ2luU3BsaXRbMV0gfHwgb3JpZ2luU3BsaXRbMF0pLmluZGV4T2YoXCIlXCIpID8geU9yaWdpbiAvIDEwMCAqIGJvdW5kcy5oZWlnaHQgOiB5T3JpZ2luKTtcbiAgfSBlbHNlIGlmIChtYXRyaXggIT09IF9pZGVudGl0eTJETWF0cml4ICYmIChkZXRlcm1pbmFudCA9IGEgKiBkIC0gYiAqIGMpKSB7XG4gICAgLy9pZiBpdCdzIHplcm8gKGxpa2UgaWYgc2NhbGVYIGFuZCBzY2FsZVkgYXJlIHplcm8pLCBza2lwIGl0IHRvIGF2b2lkIGVycm9ycyB3aXRoIGRpdmlkaW5nIGJ5IHplcm8uXG4gICAgeCA9IHhPcmlnaW4gKiAoZCAvIGRldGVybWluYW50KSArIHlPcmlnaW4gKiAoLWMgLyBkZXRlcm1pbmFudCkgKyAoYyAqIHR5IC0gZCAqIHR4KSAvIGRldGVybWluYW50O1xuICAgIHkgPSB4T3JpZ2luICogKC1iIC8gZGV0ZXJtaW5hbnQpICsgeU9yaWdpbiAqIChhIC8gZGV0ZXJtaW5hbnQpIC0gKGEgKiB0eSAtIGIgKiB0eCkgLyBkZXRlcm1pbmFudDtcbiAgICB4T3JpZ2luID0geDtcbiAgICB5T3JpZ2luID0geTtcbiAgfVxuXG4gIGlmIChzbW9vdGggfHwgc21vb3RoICE9PSBmYWxzZSAmJiBjYWNoZS5zbW9vdGgpIHtcbiAgICB0eCA9IHhPcmlnaW4gLSB4T3JpZ2luT2xkO1xuICAgIHR5ID0geU9yaWdpbiAtIHlPcmlnaW5PbGQ7XG4gICAgY2FjaGUueE9mZnNldCA9IHhPZmZzZXRPbGQgKyAodHggKiBhICsgdHkgKiBjKSAtIHR4O1xuICAgIGNhY2hlLnlPZmZzZXQgPSB5T2Zmc2V0T2xkICsgKHR4ICogYiArIHR5ICogZCkgLSB0eTtcbiAgfSBlbHNlIHtcbiAgICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gIH1cblxuICBjYWNoZS54T3JpZ2luID0geE9yaWdpbjtcbiAgY2FjaGUueU9yaWdpbiA9IHlPcmlnaW47XG4gIGNhY2hlLnNtb290aCA9ICEhc21vb3RoO1xuICBjYWNoZS5vcmlnaW4gPSBvcmlnaW47XG4gIGNhY2hlLm9yaWdpbklzQWJzb2x1dGUgPSAhIW9yaWdpbklzQWJzb2x1dGU7XG4gIHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBcIjBweCAwcHhcIjsgLy9vdGhlcndpc2UsIGlmIHNvbWVvbmUgc2V0cyAgYW4gb3JpZ2luIHZpYSBDU1MsIGl0IHdpbGwgbGlrZWx5IGludGVyZmVyZSB3aXRoIHRoZSBTVkcgdHJhbnNmb3JtIGF0dHJpYnV0ZSBvbmVzIChiZWNhdXNlIHJlbWVtYmVyLCB3ZSdyZSBiYWtpbmcgdGhlIG9yaWdpbiBpbnRvIHRoZSBtYXRyaXgoKSB2YWx1ZSkuXG5cbiAgaWYgKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvKSB7XG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInhPcmlnaW5cIiwgeE9yaWdpbk9sZCwgeE9yaWdpbik7XG5cbiAgICBfYWRkTm9uVHdlZW5pbmdQVChwbHVnaW5Ub0FkZFByb3BUd2VlbnNUbywgY2FjaGUsIFwieU9yaWdpblwiLCB5T3JpZ2luT2xkLCB5T3JpZ2luKTtcblxuICAgIF9hZGROb25Ud2VlbmluZ1BUKHBsdWdpblRvQWRkUHJvcFR3ZWVuc1RvLCBjYWNoZSwgXCJ4T2Zmc2V0XCIsIHhPZmZzZXRPbGQsIGNhY2hlLnhPZmZzZXQpO1xuXG4gICAgX2FkZE5vblR3ZWVuaW5nUFQocGx1Z2luVG9BZGRQcm9wVHdlZW5zVG8sIGNhY2hlLCBcInlPZmZzZXRcIiwgeU9mZnNldE9sZCwgY2FjaGUueU9mZnNldCk7XG4gIH1cblxuICB0YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsIHhPcmlnaW4gKyBcIiBcIiArIHlPcmlnaW4pO1xufSxcbiAgICBfcGFyc2VUcmFuc2Zvcm0gPSBmdW5jdGlvbiBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB1bmNhY2hlKSB7XG4gIHZhciBjYWNoZSA9IHRhcmdldC5fZ3NhcCB8fCBuZXcgR1NDYWNoZSh0YXJnZXQpO1xuXG4gIGlmIChcInhcIiBpbiBjYWNoZSAmJiAhdW5jYWNoZSAmJiAhY2FjaGUudW5jYWNoZSkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGludmVydGVkU2NhbGVYID0gY2FjaGUuc2NhbGVYIDwgMCxcbiAgICAgIHB4ID0gXCJweFwiLFxuICAgICAgZGVnID0gXCJkZWdcIixcbiAgICAgIG9yaWdpbiA9IF9nZXRDb21wdXRlZFByb3BlcnR5KHRhcmdldCwgX3RyYW5zZm9ybU9yaWdpblByb3ApIHx8IFwiMFwiLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB6LFxuICAgICAgc2NhbGVYLFxuICAgICAgc2NhbGVZLFxuICAgICAgcm90YXRpb24sXG4gICAgICByb3RhdGlvblgsXG4gICAgICByb3RhdGlvblksXG4gICAgICBza2V3WCxcbiAgICAgIHNrZXdZLFxuICAgICAgcGVyc3BlY3RpdmUsXG4gICAgICB4T3JpZ2luLFxuICAgICAgeU9yaWdpbixcbiAgICAgIG1hdHJpeCxcbiAgICAgIGFuZ2xlLFxuICAgICAgY29zLFxuICAgICAgc2luLFxuICAgICAgYSxcbiAgICAgIGIsXG4gICAgICBjLFxuICAgICAgZCxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHQxLFxuICAgICAgdDIsXG4gICAgICB0MyxcbiAgICAgIGExMyxcbiAgICAgIGEyMyxcbiAgICAgIGEzMyxcbiAgICAgIGE0MixcbiAgICAgIGE0MyxcbiAgICAgIGEzMjtcbiAgeCA9IHkgPSB6ID0gcm90YXRpb24gPSByb3RhdGlvblggPSByb3RhdGlvblkgPSBza2V3WCA9IHNrZXdZID0gcGVyc3BlY3RpdmUgPSAwO1xuICBzY2FsZVggPSBzY2FsZVkgPSAxO1xuICBjYWNoZS5zdmcgPSAhISh0YXJnZXQuZ2V0Q1RNICYmIF9pc1NWRyh0YXJnZXQpKTtcbiAgbWF0cml4ID0gX2dldE1hdHJpeCh0YXJnZXQsIGNhY2hlLnN2Zyk7XG5cbiAgaWYgKGNhY2hlLnN2Zykge1xuICAgIHQxID0gKCFjYWNoZS51bmNhY2hlIHx8IG9yaWdpbiA9PT0gXCIwcHggMHB4XCIpICYmICF1bmNhY2hlICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIik7IC8vIGlmIG9yaWdpbiBpcyAwLDAgYW5kIGNhY2hlLnVuY2FjaGUgaXMgdHJ1ZSwgbGV0IHRoZSByZWNvcmRlZCBkYXRhLXN2Zy1vcmlnaW4gc3RheS4gT3RoZXJ3aXNlLCB3aGVuZXZlciB3ZSBzZXQgY2FjaGUudW5jYWNoZSB0byB0cnVlLCB3ZSdkIG5lZWQgdG8gc2V0IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gKGNhY2hlLnhPcmlnaW4gLSBiYm94LngpICsgXCJweCBcIiArIChjYWNoZS55T3JpZ2luIC0gYmJveC55KSArIFwicHhcIi4gUmVtZW1iZXIsIHRvIHdvcmsgYXJvdW5kIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzIHdlIGFsd2F5cyBmb3JjZSBTVkcgZWxlbWVudHMnIHRyYW5zZm9ybU9yaWdpbiB0byAwLDAgYW5kIG9mZnNldCB0aGUgdHJhbnNsYXRpb24gYWNjb3JkaW5nbHkuXG5cbiAgICBfYXBwbHlTVkdPcmlnaW4odGFyZ2V0LCB0MSB8fCBvcmlnaW4sICEhdDEgfHwgY2FjaGUub3JpZ2luSXNBYnNvbHV0ZSwgY2FjaGUuc21vb3RoICE9PSBmYWxzZSwgbWF0cml4KTtcbiAgfVxuXG4gIHhPcmlnaW4gPSBjYWNoZS54T3JpZ2luIHx8IDA7XG4gIHlPcmlnaW4gPSBjYWNoZS55T3JpZ2luIHx8IDA7XG5cbiAgaWYgKG1hdHJpeCAhPT0gX2lkZW50aXR5MkRNYXRyaXgpIHtcbiAgICBhID0gbWF0cml4WzBdOyAvL2ExMVxuXG4gICAgYiA9IG1hdHJpeFsxXTsgLy9hMjFcblxuICAgIGMgPSBtYXRyaXhbMl07IC8vYTMxXG5cbiAgICBkID0gbWF0cml4WzNdOyAvL2E0MVxuXG4gICAgeCA9IGExMiA9IG1hdHJpeFs0XTtcbiAgICB5ID0gYTIyID0gbWF0cml4WzVdOyAvLzJEIG1hdHJpeFxuXG4gICAgaWYgKG1hdHJpeC5sZW5ndGggPT09IDYpIHtcbiAgICAgIHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbiAgICAgIHNjYWxlWSA9IE1hdGguc3FydChkICogZCArIGMgKiBjKTtcbiAgICAgIHJvdGF0aW9uID0gYSB8fCBiID8gX2F0YW4yKGIsIGEpICogX1JBRDJERUcgOiAwOyAvL25vdGU6IGlmIHNjYWxlWCBpcyAwLCB3ZSBjYW5ub3QgYWNjdXJhdGVseSBtZWFzdXJlIHJvdGF0aW9uLiBTYW1lIGZvciBza2V3WCB3aXRoIGEgc2NhbGVZIG9mIDAuIFRoZXJlZm9yZSwgd2UgZGVmYXVsdCB0byB0aGUgcHJldmlvdXNseSByZWNvcmRlZCB2YWx1ZSAob3IgemVybyBpZiB0aGF0IGRvZXNuJ3QgZXhpc3QpLlxuXG4gICAgICBza2V3WCA9IGMgfHwgZCA/IF9hdGFuMihjLCBkKSAqIF9SQUQyREVHICsgcm90YXRpb24gOiAwO1xuICAgICAgc2tld1ggJiYgKHNjYWxlWSAqPSBNYXRoLmFicyhNYXRoLmNvcyhza2V3WCAqIF9ERUcyUkFEKSkpO1xuXG4gICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgIHggLT0geE9yaWdpbiAtICh4T3JpZ2luICogYSArIHlPcmlnaW4gKiBjKTtcbiAgICAgICAgeSAtPSB5T3JpZ2luIC0gKHhPcmlnaW4gKiBiICsgeU9yaWdpbiAqIGQpO1xuICAgICAgfSAvLzNEIG1hdHJpeFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIGEzMiA9IG1hdHJpeFs2XTtcbiAgICAgIGE0MiA9IG1hdHJpeFs3XTtcbiAgICAgIGExMyA9IG1hdHJpeFs4XTtcbiAgICAgIGEyMyA9IG1hdHJpeFs5XTtcbiAgICAgIGEzMyA9IG1hdHJpeFsxMF07XG4gICAgICBhNDMgPSBtYXRyaXhbMTFdO1xuICAgICAgeCA9IG1hdHJpeFsxMl07XG4gICAgICB5ID0gbWF0cml4WzEzXTtcbiAgICAgIHogPSBtYXRyaXhbMTRdO1xuICAgICAgYW5nbGUgPSBfYXRhbjIoYTMyLCBhMzMpO1xuICAgICAgcm90YXRpb25YID0gYW5nbGUgKiBfUkFEMkRFRzsgLy9yb3RhdGlvblhcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKC1hbmdsZSk7XG4gICAgICAgIHNpbiA9IE1hdGguc2luKC1hbmdsZSk7XG4gICAgICAgIHQxID0gYTEyICogY29zICsgYTEzICogc2luO1xuICAgICAgICB0MiA9IGEyMiAqIGNvcyArIGEyMyAqIHNpbjtcbiAgICAgICAgdDMgPSBhMzIgKiBjb3MgKyBhMzMgKiBzaW47XG4gICAgICAgIGExMyA9IGExMiAqIC1zaW4gKyBhMTMgKiBjb3M7XG4gICAgICAgIGEyMyA9IGEyMiAqIC1zaW4gKyBhMjMgKiBjb3M7XG4gICAgICAgIGEzMyA9IGEzMiAqIC1zaW4gKyBhMzMgKiBjb3M7XG4gICAgICAgIGE0MyA9IGE0MiAqIC1zaW4gKyBhNDMgKiBjb3M7XG4gICAgICAgIGExMiA9IHQxO1xuICAgICAgICBhMjIgPSB0MjtcbiAgICAgICAgYTMyID0gdDM7XG4gICAgICB9IC8vcm90YXRpb25ZXG5cblxuICAgICAgYW5nbGUgPSBfYXRhbjIoLWMsIGEzMyk7XG4gICAgICByb3RhdGlvblkgPSBhbmdsZSAqIF9SQUQyREVHO1xuXG4gICAgICBpZiAoYW5nbGUpIHtcbiAgICAgICAgY29zID0gTWF0aC5jb3MoLWFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oLWFuZ2xlKTtcbiAgICAgICAgdDEgPSBhICogY29zIC0gYTEzICogc2luO1xuICAgICAgICB0MiA9IGIgKiBjb3MgLSBhMjMgKiBzaW47XG4gICAgICAgIHQzID0gYyAqIGNvcyAtIGEzMyAqIHNpbjtcbiAgICAgICAgYTQzID0gZCAqIHNpbiArIGE0MyAqIGNvcztcbiAgICAgICAgYSA9IHQxO1xuICAgICAgICBiID0gdDI7XG4gICAgICAgIGMgPSB0MztcbiAgICAgIH0gLy9yb3RhdGlvblpcblxuXG4gICAgICBhbmdsZSA9IF9hdGFuMihiLCBhKTtcbiAgICAgIHJvdGF0aW9uID0gYW5nbGUgKiBfUkFEMkRFRztcblxuICAgICAgaWYgKGFuZ2xlKSB7XG4gICAgICAgIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICB0MSA9IGEgKiBjb3MgKyBiICogc2luO1xuICAgICAgICB0MiA9IGExMiAqIGNvcyArIGEyMiAqIHNpbjtcbiAgICAgICAgYiA9IGIgKiBjb3MgLSBhICogc2luO1xuICAgICAgICBhMjIgPSBhMjIgKiBjb3MgLSBhMTIgKiBzaW47XG4gICAgICAgIGEgPSB0MTtcbiAgICAgICAgYTEyID0gdDI7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3RhdGlvblggJiYgTWF0aC5hYnMocm90YXRpb25YKSArIE1hdGguYWJzKHJvdGF0aW9uKSA+IDM1OS45KSB7XG4gICAgICAgIC8vd2hlbiByb3RhdGlvblkgaXMgc2V0LCBpdCB3aWxsIG9mdGVuIGJlIHBhcnNlZCBhcyAxODAgZGVncmVlcyBkaWZmZXJlbnQgdGhhbiBpdCBzaG91bGQgYmUsIGFuZCByb3RhdGlvblggYW5kIHJvdGF0aW9uIGJvdGggYmVpbmcgMTgwIChpdCBsb29rcyB0aGUgc2FtZSksIHNvIHdlIGFkanVzdCBmb3IgdGhhdCBoZXJlLlxuICAgICAgICByb3RhdGlvblggPSByb3RhdGlvbiA9IDA7XG4gICAgICAgIHJvdGF0aW9uWSA9IDE4MCAtIHJvdGF0aW9uWTtcbiAgICAgIH1cblxuICAgICAgc2NhbGVYID0gX3JvdW5kKE1hdGguc3FydChhICogYSArIGIgKiBiICsgYyAqIGMpKTtcbiAgICAgIHNjYWxlWSA9IF9yb3VuZChNYXRoLnNxcnQoYTIyICogYTIyICsgYTMyICogYTMyKSk7XG4gICAgICBhbmdsZSA9IF9hdGFuMihhMTIsIGEyMik7XG4gICAgICBza2V3WCA9IE1hdGguYWJzKGFuZ2xlKSA+IDAuMDAwMiA/IGFuZ2xlICogX1JBRDJERUcgOiAwO1xuICAgICAgcGVyc3BlY3RpdmUgPSBhNDMgPyAxIC8gKGE0MyA8IDAgPyAtYTQzIDogYTQzKSA6IDA7XG4gICAgfVxuXG4gICAgaWYgKGNhY2hlLnN2Zykge1xuICAgICAgLy9zZW5zZSBpZiB0aGVyZSBhcmUgQ1NTIHRyYW5zZm9ybXMgYXBwbGllZCBvbiBhbiBTVkcgZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlIG11c3Qgb3ZlcndyaXRlIHRoZW0gd2hlbiByZW5kZXJpbmcuIFRoZSB0cmFuc2Zvcm0gYXR0cmlidXRlIGlzIG1vcmUgcmVsaWFibGUgY3Jvc3MtYnJvd3NlciwgYnV0IHdlIGNhbid0IGp1c3QgcmVtb3ZlIHRoZSBDU1Mgb25lcyBiZWNhdXNlIHRoZXkgbWF5IGJlIGFwcGxpZWQgaW4gYSBDU1MgcnVsZSBzb21ld2hlcmUgKG5vdCBqdXN0IGlubGluZSkuXG4gICAgICB0MSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIik7XG4gICAgICBjYWNoZS5mb3JjZUNTUyA9IHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJcIikgfHwgIV9pc051bGxUcmFuc2Zvcm0oX2dldENvbXB1dGVkUHJvcGVydHkodGFyZ2V0LCBfdHJhbnNmb3JtUHJvcCkpO1xuICAgICAgdDEgJiYgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0MSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKE1hdGguYWJzKHNrZXdYKSA+IDkwICYmIE1hdGguYWJzKHNrZXdYKSA8IDI3MCkge1xuICAgIGlmIChpbnZlcnRlZFNjYWxlWCkge1xuICAgICAgc2NhbGVYICo9IC0xO1xuICAgICAgc2tld1ggKz0gcm90YXRpb24gPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgICByb3RhdGlvbiArPSByb3RhdGlvbiA8PSAwID8gMTgwIDogLTE4MDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGVZICo9IC0xO1xuICAgICAgc2tld1ggKz0gc2tld1ggPD0gMCA/IDE4MCA6IC0xODA7XG4gICAgfVxuICB9XG5cbiAgY2FjaGUueCA9IHggLSAoKGNhY2hlLnhQZXJjZW50ID0geCAmJiAoY2FjaGUueFBlcmNlbnQgfHwgKE1hdGgucm91bmQodGFyZ2V0Lm9mZnNldFdpZHRoIC8gMikgPT09IE1hdGgucm91bmQoLXgpID8gLTUwIDogMCkpKSA/IHRhcmdldC5vZmZzZXRXaWR0aCAqIGNhY2hlLnhQZXJjZW50IC8gMTAwIDogMCkgKyBweDtcbiAgY2FjaGUueSA9IHkgLSAoKGNhY2hlLnlQZXJjZW50ID0geSAmJiAoY2FjaGUueVBlcmNlbnQgfHwgKE1hdGgucm91bmQodGFyZ2V0Lm9mZnNldEhlaWdodCAvIDIpID09PSBNYXRoLnJvdW5kKC15KSA/IC01MCA6IDApKSkgPyB0YXJnZXQub2Zmc2V0SGVpZ2h0ICogY2FjaGUueVBlcmNlbnQgLyAxMDAgOiAwKSArIHB4O1xuICBjYWNoZS56ID0geiArIHB4O1xuICBjYWNoZS5zY2FsZVggPSBfcm91bmQoc2NhbGVYKTtcbiAgY2FjaGUuc2NhbGVZID0gX3JvdW5kKHNjYWxlWSk7XG4gIGNhY2hlLnJvdGF0aW9uID0gX3JvdW5kKHJvdGF0aW9uKSArIGRlZztcbiAgY2FjaGUucm90YXRpb25YID0gX3JvdW5kKHJvdGF0aW9uWCkgKyBkZWc7XG4gIGNhY2hlLnJvdGF0aW9uWSA9IF9yb3VuZChyb3RhdGlvblkpICsgZGVnO1xuICBjYWNoZS5za2V3WCA9IHNrZXdYICsgZGVnO1xuICBjYWNoZS5za2V3WSA9IHNrZXdZICsgZGVnO1xuICBjYWNoZS50cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IHBlcnNwZWN0aXZlICsgcHg7XG5cbiAgaWYgKGNhY2hlLnpPcmlnaW4gPSBwYXJzZUZsb2F0KG9yaWdpbi5zcGxpdChcIiBcIilbMl0pIHx8IDApIHtcbiAgICBzdHlsZVtfdHJhbnNmb3JtT3JpZ2luUHJvcF0gPSBfZmlyc3RUd29Pbmx5KG9yaWdpbik7XG4gIH1cblxuICBjYWNoZS54T2Zmc2V0ID0gY2FjaGUueU9mZnNldCA9IDA7XG4gIGNhY2hlLmZvcmNlM0QgPSBfY29uZmlnLmZvcmNlM0Q7XG4gIGNhY2hlLnJlbmRlclRyYW5zZm9ybSA9IGNhY2hlLnN2ZyA/IF9yZW5kZXJTVkdUcmFuc2Zvcm1zIDogX3N1cHBvcnRzM0QgPyBfcmVuZGVyQ1NTVHJhbnNmb3JtcyA6IF9yZW5kZXJOb24zRFRyYW5zZm9ybXM7XG4gIGNhY2hlLnVuY2FjaGUgPSAwO1xuICByZXR1cm4gY2FjaGU7XG59LFxuICAgIF9maXJzdFR3b09ubHkgPSBmdW5jdGlvbiBfZmlyc3RUd29Pbmx5KHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgPSB2YWx1ZS5zcGxpdChcIiBcIikpWzBdICsgXCIgXCIgKyB2YWx1ZVsxXTtcbn0sXG4gICAgLy9mb3IgaGFuZGxpbmcgdHJhbnNmb3JtT3JpZ2luIHZhbHVlcywgc3RyaXBwaW5nIG91dCB0aGUgM3JkIGRpbWVuc2lvblxuX2FkZFB4VHJhbnNsYXRlID0gZnVuY3Rpb24gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgc3RhcnQsIHZhbHVlKSB7XG4gIHZhciB1bml0ID0gZ2V0VW5pdChzdGFydCk7XG4gIHJldHVybiBfcm91bmQocGFyc2VGbG9hdChzdGFydCkgKyBwYXJzZUZsb2F0KF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ4XCIsIHZhbHVlICsgXCJweFwiLCB1bml0KSkpICsgdW5pdDtcbn0sXG4gICAgX3JlbmRlck5vbjNEVHJhbnNmb3JtcyA9IGZ1bmN0aW9uIF9yZW5kZXJOb24zRFRyYW5zZm9ybXMocmF0aW8sIGNhY2hlKSB7XG4gIGNhY2hlLnogPSBcIjBweFwiO1xuICBjYWNoZS5yb3RhdGlvblkgPSBjYWNoZS5yb3RhdGlvblggPSBcIjBkZWdcIjtcbiAgY2FjaGUuZm9yY2UzRCA9IDA7XG5cbiAgX3JlbmRlckNTU1RyYW5zZm9ybXMocmF0aW8sIGNhY2hlKTtcbn0sXG4gICAgX3plcm9EZWcgPSBcIjBkZWdcIixcbiAgICBfemVyb1B4ID0gXCIwcHhcIixcbiAgICBfZW5kUGFyZW50aGVzaXMgPSBcIikgXCIsXG4gICAgX3JlbmRlckNTU1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyQ1NTVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYgPSBjYWNoZSB8fCB0aGlzLFxuICAgICAgeFBlcmNlbnQgPSBfcmVmLnhQZXJjZW50LFxuICAgICAgeVBlcmNlbnQgPSBfcmVmLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnksXG4gICAgICB6ID0gX3JlZi56LFxuICAgICAgcm90YXRpb24gPSBfcmVmLnJvdGF0aW9uLFxuICAgICAgcm90YXRpb25ZID0gX3JlZi5yb3RhdGlvblksXG4gICAgICByb3RhdGlvblggPSBfcmVmLnJvdGF0aW9uWCxcbiAgICAgIHNrZXdYID0gX3JlZi5za2V3WCxcbiAgICAgIHNrZXdZID0gX3JlZi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gX3JlZi5zY2FsZVksXG4gICAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZSA9IF9yZWYudHJhbnNmb3JtUGVyc3BlY3RpdmUsXG4gICAgICBmb3JjZTNEID0gX3JlZi5mb3JjZTNELFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICB6T3JpZ2luID0gX3JlZi56T3JpZ2luLFxuICAgICAgdHJhbnNmb3JtcyA9IFwiXCIsXG4gICAgICB1c2UzRCA9IGZvcmNlM0QgPT09IFwiYXV0b1wiICYmIHJhdGlvICYmIHJhdGlvICE9PSAxIHx8IGZvcmNlM0QgPT09IHRydWU7IC8vIFNhZmFyaSBoYXMgYSBidWcgdGhhdCBjYXVzZXMgaXQgbm90IHRvIHJlbmRlciAzRCB0cmFuc2Zvcm0tb3JpZ2luIHZhbHVlcyBwcm9wZXJseSwgc28gd2UgZm9yY2UgdGhlIHogb3JpZ2luIHRvIDAsIHJlY29yZCBpdCBpbiB0aGUgY2FjaGUsIGFuZCB0aGVuIGRvIHRoZSBtYXRoIGhlcmUgdG8gb2Zmc2V0IHRoZSB0cmFuc2xhdGUgdmFsdWVzIGFjY29yZGluZ2x5IChiYXNpY2FsbHkgZG8gdGhlIDNEIHRyYW5zZm9ybS1vcmlnaW4gcGFydCBtYW51YWxseSlcblxuXG4gIGlmICh6T3JpZ2luICYmIChyb3RhdGlvblggIT09IF96ZXJvRGVnIHx8IHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpKSB7XG4gICAgdmFyIGFuZ2xlID0gcGFyc2VGbG9hdChyb3RhdGlvblkpICogX0RFRzJSQUQsXG4gICAgICAgIGExMyA9IE1hdGguc2luKGFuZ2xlKSxcbiAgICAgICAgYTMzID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICBjb3M7XG5cbiAgICBhbmdsZSA9IHBhcnNlRmxvYXQocm90YXRpb25YKSAqIF9ERUcyUkFEO1xuICAgIGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICB4ID0gX2FkZFB4VHJhbnNsYXRlKHRhcmdldCwgeCwgYTEzICogY29zICogLXpPcmlnaW4pO1xuICAgIHkgPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB5LCAtTWF0aC5zaW4oYW5nbGUpICogLXpPcmlnaW4pO1xuICAgIHogPSBfYWRkUHhUcmFuc2xhdGUodGFyZ2V0LCB6LCBhMzMgKiBjb3MgKiAtek9yaWdpbiArIHpPcmlnaW4pO1xuICB9XG5cbiAgaWYgKHRyYW5zZm9ybVBlcnNwZWN0aXZlICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInBlcnNwZWN0aXZlKFwiICsgdHJhbnNmb3JtUGVyc3BlY3RpdmUgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwidHJhbnNsYXRlKFwiICsgeFBlcmNlbnQgKyBcIiUsIFwiICsgeVBlcmNlbnQgKyBcIiUpIFwiO1xuICB9XG5cbiAgaWYgKHVzZTNEIHx8IHggIT09IF96ZXJvUHggfHwgeSAhPT0gX3plcm9QeCB8fCB6ICE9PSBfemVyb1B4KSB7XG4gICAgdHJhbnNmb3JtcyArPSB6ICE9PSBfemVyb1B4IHx8IHVzZTNEID8gXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIsIFwiICsgeiArIFwiKSBcIiA6IFwidHJhbnNsYXRlKFwiICsgeCArIFwiLCBcIiArIHkgKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAocm90YXRpb24gIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZShcIiArIHJvdGF0aW9uICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9uWSAhPT0gX3plcm9EZWcpIHtcbiAgICB0cmFuc2Zvcm1zICs9IFwicm90YXRlWShcIiArIHJvdGF0aW9uWSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChyb3RhdGlvblggIT09IF96ZXJvRGVnKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInJvdGF0ZVgoXCIgKyByb3RhdGlvblggKyBfZW5kUGFyZW50aGVzaXM7XG4gIH1cblxuICBpZiAoc2tld1ggIT09IF96ZXJvRGVnIHx8IHNrZXdZICE9PSBfemVyb0RlZykge1xuICAgIHRyYW5zZm9ybXMgKz0gXCJza2V3KFwiICsgc2tld1ggKyBcIiwgXCIgKyBza2V3WSArIF9lbmRQYXJlbnRoZXNpcztcbiAgfVxuXG4gIGlmIChzY2FsZVggIT09IDEgfHwgc2NhbGVZICE9PSAxKSB7XG4gICAgdHJhbnNmb3JtcyArPSBcInNjYWxlKFwiICsgc2NhbGVYICsgXCIsIFwiICsgc2NhbGVZICsgX2VuZFBhcmVudGhlc2lzO1xuICB9XG5cbiAgdGFyZ2V0LnN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXMgfHwgXCJ0cmFuc2xhdGUoMCwgMClcIjtcbn0sXG4gICAgX3JlbmRlclNWR1RyYW5zZm9ybXMgPSBmdW5jdGlvbiBfcmVuZGVyU1ZHVHJhbnNmb3JtcyhyYXRpbywgY2FjaGUpIHtcbiAgdmFyIF9yZWYyID0gY2FjaGUgfHwgdGhpcyxcbiAgICAgIHhQZXJjZW50ID0gX3JlZjIueFBlcmNlbnQsXG4gICAgICB5UGVyY2VudCA9IF9yZWYyLnlQZXJjZW50LFxuICAgICAgeCA9IF9yZWYyLngsXG4gICAgICB5ID0gX3JlZjIueSxcbiAgICAgIHJvdGF0aW9uID0gX3JlZjIucm90YXRpb24sXG4gICAgICBza2V3WCA9IF9yZWYyLnNrZXdYLFxuICAgICAgc2tld1kgPSBfcmVmMi5za2V3WSxcbiAgICAgIHNjYWxlWCA9IF9yZWYyLnNjYWxlWCxcbiAgICAgIHNjYWxlWSA9IF9yZWYyLnNjYWxlWSxcbiAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgIHhPcmlnaW4gPSBfcmVmMi54T3JpZ2luLFxuICAgICAgeU9yaWdpbiA9IF9yZWYyLnlPcmlnaW4sXG4gICAgICB4T2Zmc2V0ID0gX3JlZjIueE9mZnNldCxcbiAgICAgIHlPZmZzZXQgPSBfcmVmMi55T2Zmc2V0LFxuICAgICAgZm9yY2VDU1MgPSBfcmVmMi5mb3JjZUNTUyxcbiAgICAgIHR4ID0gcGFyc2VGbG9hdCh4KSxcbiAgICAgIHR5ID0gcGFyc2VGbG9hdCh5KSxcbiAgICAgIGExMSxcbiAgICAgIGEyMSxcbiAgICAgIGExMixcbiAgICAgIGEyMixcbiAgICAgIHRlbXA7XG5cbiAgcm90YXRpb24gPSBwYXJzZUZsb2F0KHJvdGF0aW9uKTtcbiAgc2tld1ggPSBwYXJzZUZsb2F0KHNrZXdYKTtcbiAgc2tld1kgPSBwYXJzZUZsb2F0KHNrZXdZKTtcblxuICBpZiAoc2tld1kpIHtcbiAgICAvL2ZvciBwZXJmb3JtYW5jZSByZWFzb25zLCB3ZSBjb21iaW5lIGFsbCBza2V3aW5nIGludG8gdGhlIHNrZXdYIGFuZCByb3RhdGlvbiB2YWx1ZXMuIFJlbWVtYmVyLCBhIHNrZXdZIG9mIDEwIGRlZ3JlZXMgbG9va3MgdGhlIHNhbWUgYXMgYSByb3RhdGlvbiBvZiAxMCBkZWdyZWVzIHBsdXMgYSBza2V3WCBvZiAxMCBkZWdyZWVzLlxuICAgIHNrZXdZID0gcGFyc2VGbG9hdChza2V3WSk7XG4gICAgc2tld1ggKz0gc2tld1k7XG4gICAgcm90YXRpb24gKz0gc2tld1k7XG4gIH1cblxuICBpZiAocm90YXRpb24gfHwgc2tld1gpIHtcbiAgICByb3RhdGlvbiAqPSBfREVHMlJBRDtcbiAgICBza2V3WCAqPSBfREVHMlJBRDtcbiAgICBhMTEgPSBNYXRoLmNvcyhyb3RhdGlvbikgKiBzY2FsZVg7XG4gICAgYTIxID0gTWF0aC5zaW4ocm90YXRpb24pICogc2NhbGVYO1xuICAgIGExMiA9IE1hdGguc2luKHJvdGF0aW9uIC0gc2tld1gpICogLXNjYWxlWTtcbiAgICBhMjIgPSBNYXRoLmNvcyhyb3RhdGlvbiAtIHNrZXdYKSAqIHNjYWxlWTtcblxuICAgIGlmIChza2V3WCkge1xuICAgICAgc2tld1kgKj0gX0RFRzJSQUQ7XG4gICAgICB0ZW1wID0gTWF0aC50YW4oc2tld1ggLSBza2V3WSk7XG4gICAgICB0ZW1wID0gTWF0aC5zcXJ0KDEgKyB0ZW1wICogdGVtcCk7XG4gICAgICBhMTIgKj0gdGVtcDtcbiAgICAgIGEyMiAqPSB0ZW1wO1xuXG4gICAgICBpZiAoc2tld1kpIHtcbiAgICAgICAgdGVtcCA9IE1hdGgudGFuKHNrZXdZKTtcbiAgICAgICAgdGVtcCA9IE1hdGguc3FydCgxICsgdGVtcCAqIHRlbXApO1xuICAgICAgICBhMTEgKj0gdGVtcDtcbiAgICAgICAgYTIxICo9IHRlbXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYTExID0gX3JvdW5kKGExMSk7XG4gICAgYTIxID0gX3JvdW5kKGEyMSk7XG4gICAgYTEyID0gX3JvdW5kKGExMik7XG4gICAgYTIyID0gX3JvdW5kKGEyMik7XG4gIH0gZWxzZSB7XG4gICAgYTExID0gc2NhbGVYO1xuICAgIGEyMiA9IHNjYWxlWTtcbiAgICBhMjEgPSBhMTIgPSAwO1xuICB9XG5cbiAgaWYgKHR4ICYmICF+KHggKyBcIlwiKS5pbmRleE9mKFwicHhcIikgfHwgdHkgJiYgIX4oeSArIFwiXCIpLmluZGV4T2YoXCJweFwiKSkge1xuICAgIHR4ID0gX2NvbnZlcnRUb1VuaXQodGFyZ2V0LCBcInhcIiwgeCwgXCJweFwiKTtcbiAgICB0eSA9IF9jb252ZXJ0VG9Vbml0KHRhcmdldCwgXCJ5XCIsIHksIFwicHhcIik7XG4gIH1cblxuICBpZiAoeE9yaWdpbiB8fCB5T3JpZ2luIHx8IHhPZmZzZXQgfHwgeU9mZnNldCkge1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeE9yaWdpbiAtICh4T3JpZ2luICogYTExICsgeU9yaWdpbiAqIGExMikgKyB4T2Zmc2V0KTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlPcmlnaW4gLSAoeE9yaWdpbiAqIGEyMSArIHlPcmlnaW4gKiBhMjIpICsgeU9mZnNldCk7XG4gIH1cblxuICBpZiAoeFBlcmNlbnQgfHwgeVBlcmNlbnQpIHtcbiAgICAvL1RoZSBTVkcgc3BlYyBkb2Vzbid0IHN1cHBvcnQgcGVyY2VudGFnZS1iYXNlZCB0cmFuc2xhdGlvbiBpbiB0aGUgXCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGUsIHNvIHdlIG1lcmdlIGl0IGludG8gdGhlIHRyYW5zbGF0aW9uIHRvIHNpbXVsYXRlIGl0LlxuICAgIHRlbXAgPSB0YXJnZXQuZ2V0QkJveCgpO1xuICAgIHR4ID0gX3JvdW5kKHR4ICsgeFBlcmNlbnQgLyAxMDAgKiB0ZW1wLndpZHRoKTtcbiAgICB0eSA9IF9yb3VuZCh0eSArIHlQZXJjZW50IC8gMTAwICogdGVtcC5oZWlnaHQpO1xuICB9XG5cbiAgdGVtcCA9IFwibWF0cml4KFwiICsgYTExICsgXCIsXCIgKyBhMjEgKyBcIixcIiArIGExMiArIFwiLFwiICsgYTIyICsgXCIsXCIgKyB0eCArIFwiLFwiICsgdHkgKyBcIilcIjtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0ZW1wKTtcbiAgZm9yY2VDU1MgJiYgKHRhcmdldC5zdHlsZVtfdHJhbnNmb3JtUHJvcF0gPSB0ZW1wKTsgLy9zb21lIGJyb3dzZXJzIHByaW9yaXRpemUgQ1NTIHRyYW5zZm9ybXMgb3ZlciB0aGUgdHJhbnNmb3JtIGF0dHJpYnV0ZS4gV2hlbiB3ZSBzZW5zZSB0aGF0IHRoZSB1c2VyIGhhcyBDU1MgdHJhbnNmb3JtcyBhcHBsaWVkLCB3ZSBtdXN0IG92ZXJ3cml0ZSB0aGVtIHRoaXMgd2F5IChvdGhlcndpc2Ugc29tZSBicm93c2VyIHNpbXBseSB3b24ndCByZW5kZXIgdGhlICB0cmFuc2Zvcm0gYXR0cmlidXRlIGNoYW5nZXMhKVxufSxcbiAgICBfYWRkUm90YXRpb25hbFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRSb3RhdGlvbmFsUHJvcFR3ZWVuKHBsdWdpbiwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGVuZFZhbHVlLCByZWxhdGl2ZSkge1xuICB2YXIgY2FwID0gMzYwLFxuICAgICAgaXNTdHJpbmcgPSBfaXNTdHJpbmcoZW5kVmFsdWUpLFxuICAgICAgZW5kTnVtID0gcGFyc2VGbG9hdChlbmRWYWx1ZSkgKiAoaXNTdHJpbmcgJiYgfmVuZFZhbHVlLmluZGV4T2YoXCJyYWRcIikgPyBfUkFEMkRFRyA6IDEpLFxuICAgICAgY2hhbmdlID0gcmVsYXRpdmUgPyBlbmROdW0gKiByZWxhdGl2ZSA6IGVuZE51bSAtIHN0YXJ0TnVtLFxuICAgICAgZmluYWxWYWx1ZSA9IHN0YXJ0TnVtICsgY2hhbmdlICsgXCJkZWdcIixcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIHB0O1xuXG4gIGlmIChpc1N0cmluZykge1xuICAgIGRpcmVjdGlvbiA9IGVuZFZhbHVlLnNwbGl0KFwiX1wiKVsxXTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwic2hvcnRcIikge1xuICAgICAgY2hhbmdlICU9IGNhcDtcblxuICAgICAgaWYgKGNoYW5nZSAhPT0gY2hhbmdlICUgKGNhcCAvIDIpKSB7XG4gICAgICAgIGNoYW5nZSArPSBjaGFuZ2UgPCAwID8gY2FwIDogLWNhcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImN3XCIgJiYgY2hhbmdlIDwgMCkge1xuICAgICAgY2hhbmdlID0gKGNoYW5nZSArIGNhcCAqIF9iaWdOdW0pICUgY2FwIC0gfn4oY2hhbmdlIC8gY2FwKSAqIGNhcDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJjY3dcIiAmJiBjaGFuZ2UgPiAwKSB7XG4gICAgICBjaGFuZ2UgPSAoY2hhbmdlIC0gY2FwICogX2JpZ051bSkgJSBjYXAgLSB+fihjaGFuZ2UgLyBjYXApICogY2FwO1xuICAgIH1cbiAgfVxuXG4gIHBsdWdpbi5fcHQgPSBwdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgdGFyZ2V0LCBwcm9wZXJ0eSwgc3RhcnROdW0sIGNoYW5nZSwgX3JlbmRlclByb3BXaXRoRW5kKTtcbiAgcHQuZSA9IGZpbmFsVmFsdWU7XG4gIHB0LnUgPSBcImRlZ1wiO1xuXG4gIHBsdWdpbi5fcHJvcHMucHVzaChwcm9wZXJ0eSk7XG5cbiAgcmV0dXJuIHB0O1xufSxcbiAgICBfYXNzaWduID0gZnVuY3Rpb24gX2Fzc2lnbih0YXJnZXQsIHNvdXJjZSkge1xuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBkb2Vzbid0IGhhdmUgT2JqZWN0LmFzc2lnbigpLCBzbyB3ZSByZWNyZWF0ZSBpdCBoZXJlLlxuICBmb3IgKHZhciBwIGluIHNvdXJjZSkge1xuICAgIHRhcmdldFtwXSA9IHNvdXJjZVtwXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59LFxuICAgIF9hZGRSYXdUcmFuc2Zvcm1QVHMgPSBmdW5jdGlvbiBfYWRkUmF3VHJhbnNmb3JtUFRzKHBsdWdpbiwgdHJhbnNmb3JtcywgdGFyZ2V0KSB7XG4gIC8vZm9yIGhhbmRsaW5nIGNhc2VzIHdoZXJlIHNvbWVvbmUgcGFzc2VzIGluIGEgd2hvbGUgdHJhbnNmb3JtIHN0cmluZywgbGlrZSB0cmFuc2Zvcm06IFwic2NhbGUoMiwgMykgcm90YXRlKDIwZGVnKSB0cmFuc2xhdGVZKDMwZW0pXCJcbiAgdmFyIHN0YXJ0Q2FjaGUgPSBfYXNzaWduKHt9LCB0YXJnZXQuX2dzYXApLFxuICAgICAgZXhjbHVkZSA9IFwicGVyc3BlY3RpdmUsZm9yY2UzRCx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luXCIsXG4gICAgICBzdHlsZSA9IHRhcmdldC5zdHlsZSxcbiAgICAgIGVuZENhY2hlLFxuICAgICAgcCxcbiAgICAgIHN0YXJ0VmFsdWUsXG4gICAgICBlbmRWYWx1ZSxcbiAgICAgIHN0YXJ0TnVtLFxuICAgICAgZW5kTnVtLFxuICAgICAgc3RhcnRVbml0LFxuICAgICAgZW5kVW5pdDtcblxuICBpZiAoc3RhcnRDYWNoZS5zdmcpIHtcbiAgICBzdGFydFZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKTtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwiXCIpO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHRyYW5zZm9ybXM7XG4gICAgZW5kQ2FjaGUgPSBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCAxKTtcblxuICAgIF9yZW1vdmVQcm9wZXJ0eSh0YXJnZXQsIF90cmFuc2Zvcm1Qcm9wKTtcblxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgc3RhcnRWYWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KVtfdHJhbnNmb3JtUHJvcF07XG4gICAgc3R5bGVbX3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtcztcbiAgICBlbmRDYWNoZSA9IF9wYXJzZVRyYW5zZm9ybSh0YXJnZXQsIDEpO1xuICAgIHN0eWxlW190cmFuc2Zvcm1Qcm9wXSA9IHN0YXJ0VmFsdWU7XG4gIH1cblxuICBmb3IgKHAgaW4gX3RyYW5zZm9ybVByb3BzKSB7XG4gICAgc3RhcnRWYWx1ZSA9IHN0YXJ0Q2FjaGVbcF07XG4gICAgZW5kVmFsdWUgPSBlbmRDYWNoZVtwXTtcblxuICAgIGlmIChzdGFydFZhbHVlICE9PSBlbmRWYWx1ZSAmJiBleGNsdWRlLmluZGV4T2YocCkgPCAwKSB7XG4gICAgICAvL3R3ZWVuaW5nIHRvIG5vIHBlcnNwZWN0aXZlIGdpdmVzIHZlcnkgdW5pbnR1aXRpdmUgcmVzdWx0cyAtIGp1c3Qga2VlcCB0aGUgc2FtZSBwZXJzcGVjdGl2ZSBpbiB0aGF0IGNhc2UuXG4gICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgZW5kVW5pdCA9IGdldFVuaXQoZW5kVmFsdWUpO1xuICAgICAgc3RhcnROdW0gPSBzdGFydFVuaXQgIT09IGVuZFVuaXQgPyBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpIDogcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuICAgICAgcGx1Z2luLl9wdCA9IG5ldyBQcm9wVHdlZW4ocGx1Z2luLl9wdCwgZW5kQ2FjaGUsIHAsIHN0YXJ0TnVtLCBlbmROdW0gLSBzdGFydE51bSwgX3JlbmRlckNTU1Byb3ApO1xuICAgICAgcGx1Z2luLl9wdC51ID0gZW5kVW5pdCB8fCAwO1xuXG4gICAgICBwbHVnaW4uX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG5cbiAgX2Fzc2lnbihlbmRDYWNoZSwgc3RhcnRDYWNoZSk7XG59OyAvLyBoYW5kbGUgc3BsaXR0aW5nIGFwYXJ0IHBhZGRpbmcsIG1hcmdpbiwgYm9yZGVyV2lkdGgsIGFuZCBib3JkZXJSYWRpdXMgaW50byB0aGVpciA0IGNvbXBvbmVudHMuIEZpcmVmb3gsIGZvciBleGFtcGxlLCB3b24ndCByZXBvcnQgYm9yZGVyUmFkaXVzIGNvcnJlY3RseSAtIGl0IHdpbGwgb25seSBkbyBib3JkZXJUb3BMZWZ0UmFkaXVzIGFuZCB0aGUgb3RoZXIgY29ybmVycy4gV2UgYWxzbyB3YW50IHRvIGhhbmRsZSBwYWRkaW5nVG9wLCBtYXJnaW5MZWZ0LCBib3JkZXJSaWdodFdpZHRoLCBldGMuXG5cblxuX2ZvckVhY2hOYW1lKFwicGFkZGluZyxtYXJnaW4sV2lkdGgsUmFkaXVzXCIsIGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICB2YXIgdCA9IFwiVG9wXCIsXG4gICAgICByID0gXCJSaWdodFwiLFxuICAgICAgYiA9IFwiQm90dG9tXCIsXG4gICAgICBsID0gXCJMZWZ0XCIsXG4gICAgICBwcm9wcyA9IChpbmRleCA8IDMgPyBbdCwgciwgYiwgbF0gOiBbdCArIGwsIHQgKyByLCBiICsgciwgYiArIGxdKS5tYXAoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gaW5kZXggPCAyID8gbmFtZSArIHNpZGUgOiBcImJvcmRlclwiICsgc2lkZSArIG5hbWU7XG4gIH0pO1xuXG4gIF9zcGVjaWFsUHJvcHNbaW5kZXggPiAxID8gXCJib3JkZXJcIiArIG5hbWUgOiBuYW1lXSA9IGZ1bmN0aW9uIChwbHVnaW4sIHRhcmdldCwgcHJvcGVydHksIGVuZFZhbHVlLCB0d2Vlbikge1xuICAgIHZhciBhLCB2YXJzO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA0KSB7XG4gICAgICAvLyBnZXR0ZXIsIHBhc3NlZCB0YXJnZXQsIHByb3BlcnR5LCBhbmQgdW5pdCAoZnJvbSBfZ2V0KCkpXG4gICAgICBhID0gcHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KHBsdWdpbiwgcHJvcCwgcHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgICB2YXJzID0gYS5qb2luKFwiIFwiKTtcbiAgICAgIHJldHVybiB2YXJzLnNwbGl0KGFbMF0pLmxlbmd0aCA9PT0gNSA/IGFbMF0gOiB2YXJzO1xuICAgIH1cblxuICAgIGEgPSAoZW5kVmFsdWUgKyBcIlwiKS5zcGxpdChcIiBcIik7XG4gICAgdmFycyA9IHt9O1xuICAgIHByb3BzLmZvckVhY2goZnVuY3Rpb24gKHByb3AsIGkpIHtcbiAgICAgIHJldHVybiB2YXJzW3Byb3BdID0gYVtpXSA9IGFbaV0gfHwgYVsoaSAtIDEpIC8gMiB8IDBdO1xuICAgIH0pO1xuICAgIHBsdWdpbi5pbml0KHRhcmdldCwgdmFycywgdHdlZW4pO1xuICB9O1xufSk7XG5cbmV4cG9ydCB2YXIgQ1NTUGx1Z2luID0ge1xuICBuYW1lOiBcImNzc1wiLFxuICByZWdpc3RlcjogX2luaXRDb3JlLFxuICB0YXJnZXRUZXN0OiBmdW5jdGlvbiB0YXJnZXRUZXN0KHRhcmdldCkge1xuICAgIHJldHVybiB0YXJnZXQuc3R5bGUgJiYgdGFyZ2V0Lm5vZGVUeXBlO1xuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KHRhcmdldCwgdmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXRzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5fcHJvcHMsXG4gICAgICAgIHN0eWxlID0gdGFyZ2V0LnN0eWxlLFxuICAgICAgICBzdGFydEF0ID0gdHdlZW4udmFycy5zdGFydEF0LFxuICAgICAgICBzdGFydFZhbHVlLFxuICAgICAgICBlbmRWYWx1ZSxcbiAgICAgICAgZW5kTnVtLFxuICAgICAgICBzdGFydE51bSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgc3BlY2lhbFByb3AsXG4gICAgICAgIHAsXG4gICAgICAgIHN0YXJ0VW5pdCxcbiAgICAgICAgZW5kVW5pdCxcbiAgICAgICAgcmVsYXRpdmUsXG4gICAgICAgIGlzVHJhbnNmb3JtUmVsYXRlZCxcbiAgICAgICAgdHJhbnNmb3JtUHJvcFR3ZWVuLFxuICAgICAgICBjYWNoZSxcbiAgICAgICAgc21vb3RoLFxuICAgICAgICBoYXNQcmlvcml0eTtcbiAgICBfcGx1Z2luSW5pdHRlZCB8fCBfaW5pdENvcmUoKTtcblxuICAgIGZvciAocCBpbiB2YXJzKSB7XG4gICAgICBpZiAocCA9PT0gXCJhdXRvUm91bmRcIikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZW5kVmFsdWUgPSB2YXJzW3BdO1xuXG4gICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgX2NoZWNrUGx1Z2luKHAsIHZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSkge1xuICAgICAgICAvLyBwbHVnaW5zXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0eXBlID0gdHlwZW9mIGVuZFZhbHVlO1xuICAgICAgc3BlY2lhbFByb3AgPSBfc3BlY2lhbFByb3BzW3BdO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGVuZFZhbHVlID0gZW5kVmFsdWUuY2FsbCh0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gICAgICAgIHR5cGUgPSB0eXBlb2YgZW5kVmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiICYmIH5lbmRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSkge1xuICAgICAgICBlbmRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKGVuZFZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNwZWNpYWxQcm9wKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wKHRoaXMsIHRhcmdldCwgcCwgZW5kVmFsdWUsIHR3ZWVuKSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH0gZWxzZSBpZiAocC5zdWJzdHIoMCwgMikgPT09IFwiLS1cIikge1xuICAgICAgICAvL0NTUyB2YXJpYWJsZVxuICAgICAgICBzdGFydFZhbHVlID0gKGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5nZXRQcm9wZXJ0eVZhbHVlKHApICsgXCJcIikudHJpbSgpO1xuICAgICAgICBlbmRWYWx1ZSArPSBcIlwiO1xuICAgICAgICBfY29sb3JFeHAubGFzdEluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIV9jb2xvckV4cC50ZXN0KHN0YXJ0VmFsdWUpKSB7XG4gICAgICAgICAgLy8gY29sb3JzIGRvbid0IGhhdmUgdW5pdHNcbiAgICAgICAgICBzdGFydFVuaXQgPSBnZXRVbml0KHN0YXJ0VmFsdWUpO1xuICAgICAgICAgIGVuZFVuaXQgPSBnZXRVbml0KGVuZFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuZFVuaXQgPyBzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgKHN0YXJ0VmFsdWUgPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpICsgZW5kVW5pdCkgOiBzdGFydFVuaXQgJiYgKGVuZFZhbHVlICs9IHN0YXJ0VW5pdCk7XG4gICAgICAgIHRoaXMuYWRkKHN0eWxlLCBcInNldFByb3BlcnR5XCIsIHN0YXJ0VmFsdWUsIGVuZFZhbHVlLCBpbmRleCwgdGFyZ2V0cywgMCwgMCwgcCk7XG4gICAgICAgIHByb3BzLnB1c2gocCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHN0YXJ0QXQgJiYgcCBpbiBzdGFydEF0KSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSBzb21lb25lIGhhcmQtY29kZXMgYSBjb21wbGV4IHZhbHVlIGFzIHRoZSBzdGFydCwgbGlrZSB0b3A6IFwiY2FsYygydmggLyAyKVwiLiBXaXRob3V0IHRoaXMsIGl0J2QgdXNlIHRoZSBjb21wdXRlZCB2YWx1ZSAoYWx3YXlzIGluIHB4KVxuICAgICAgICAgIHN0YXJ0VmFsdWUgPSB0eXBlb2Ygc3RhcnRBdFtwXSA9PT0gXCJmdW5jdGlvblwiID8gc3RhcnRBdFtwXS5jYWxsKHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCB0YXJnZXRzKSA6IHN0YXJ0QXRbcF07XG4gICAgICAgICAgcCBpbiBfY29uZmlnLnVuaXRzICYmICFnZXRVbml0KHN0YXJ0VmFsdWUpICYmIChzdGFydFZhbHVlICs9IF9jb25maWcudW5pdHNbcF0pOyAvLyBmb3IgY2FzZXMgd2hlbiBzb21lb25lIHBhc3NlcyBpbiBhIHVuaXRsZXNzIHZhbHVlIGxpa2Uge3g6IDEwMH07IGlmIHdlIHRyeSBzZXR0aW5nIHRyYW5zbGF0ZSgxMDAsIDBweCkgaXQgd29uJ3Qgd29yay5cblxuICAgICAgICAgIF9pc1N0cmluZyhzdGFydFZhbHVlKSAmJiB+c3RhcnRWYWx1ZS5pbmRleE9mKFwicmFuZG9tKFwiKSAmJiAoc3RhcnRWYWx1ZSA9IF9yZXBsYWNlUmFuZG9tKHN0YXJ0VmFsdWUpKTtcbiAgICAgICAgICAoc3RhcnRWYWx1ZSArIFwiXCIpLmNoYXJBdCgxKSA9PT0gXCI9XCIgJiYgKHN0YXJ0VmFsdWUgPSBfZ2V0KHRhcmdldCwgcCkpOyAvLyBjYW4ndCB3b3JrIHdpdGggcmVsYXRpdmUgdmFsdWVzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhcnRWYWx1ZSA9IF9nZXQodGFyZ2V0LCBwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0TnVtID0gcGFyc2VGbG9hdChzdGFydFZhbHVlKTtcbiAgICAgICAgcmVsYXRpdmUgPSB0eXBlID09PSBcInN0cmluZ1wiICYmIGVuZFZhbHVlLmNoYXJBdCgxKSA9PT0gXCI9XCIgPyArKGVuZFZhbHVlLmNoYXJBdCgwKSArIFwiMVwiKSA6IDA7XG4gICAgICAgIHJlbGF0aXZlICYmIChlbmRWYWx1ZSA9IGVuZFZhbHVlLnN1YnN0cigyKSk7XG4gICAgICAgIGVuZE51bSA9IHBhcnNlRmxvYXQoZW5kVmFsdWUpO1xuXG4gICAgICAgIGlmIChwIGluIF9wcm9wZXJ0eUFsaWFzZXMpIHtcbiAgICAgICAgICBpZiAocCA9PT0gXCJhdXRvQWxwaGFcIikge1xuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2Ugd2hlcmUgd2UgY29udHJvbCB0aGUgdmlzaWJpbGl0eSBhbG9uZyB3aXRoIG9wYWNpdHkuIFdlIHN0aWxsIGFsbG93IHRoZSBvcGFjaXR5IHZhbHVlIHRvIHBhc3MgdGhyb3VnaCBhbmQgZ2V0IHR3ZWVuZWQuXG4gICAgICAgICAgICBpZiAoc3RhcnROdW0gPT09IDEgJiYgX2dldCh0YXJnZXQsIFwidmlzaWJpbGl0eVwiKSA9PT0gXCJoaWRkZW5cIiAmJiBlbmROdW0pIHtcbiAgICAgICAgICAgICAgLy9pZiB2aXNpYmlsaXR5IGlzIGluaXRpYWxseSBzZXQgdG8gXCJoaWRkZW5cIiwgd2Ugc2hvdWxkIGludGVycHJldCB0aGF0IGFzIGludGVudCB0byBtYWtlIG9wYWNpdHkgMCAoYSBjb252ZW5pZW5jZSlcbiAgICAgICAgICAgICAgc3RhcnROdW0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgXCJ2aXNpYmlsaXR5XCIsIHN0YXJ0TnVtID8gXCJpbmhlcml0XCIgOiBcImhpZGRlblwiLCBlbmROdW0gPyBcImluaGVyaXRcIiA6IFwiaGlkZGVuXCIsICFlbmROdW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwICE9PSBcInNjYWxlXCIgJiYgcCAhPT0gXCJ0cmFuc2Zvcm1cIikge1xuICAgICAgICAgICAgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcF07XG4gICAgICAgICAgICB+cC5pbmRleE9mKFwiLFwiKSAmJiAocCA9IHAuc3BsaXQoXCIsXCIpWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpc1RyYW5zZm9ybVJlbGF0ZWQgPSBwIGluIF90cmFuc2Zvcm1Qcm9wczsgLy8tLS0gVFJBTlNGT1JNLVJFTEFURUQgLS0tXG5cbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUmVsYXRlZCkge1xuICAgICAgICAgIGlmICghdHJhbnNmb3JtUHJvcFR3ZWVuKSB7XG4gICAgICAgICAgICBjYWNoZSA9IHRhcmdldC5fZ3NhcDtcbiAgICAgICAgICAgIGNhY2hlLnJlbmRlclRyYW5zZm9ybSAmJiAhdmFycy5wYXJzZVRyYW5zZm9ybSB8fCBfcGFyc2VUcmFuc2Zvcm0odGFyZ2V0LCB2YXJzLnBhcnNlVHJhbnNmb3JtKTsgLy8gaWYsIGZvciBleGFtcGxlLCBnc2FwLnNldCguLi4ge3RyYW5zZm9ybTpcInRyYW5zbGF0ZVgoNTB2dylcIn0pLCB0aGUgX2dldCgpIGNhbGwgZG9lc24ndCBwYXJzZSB0aGUgdHJhbnNmb3JtLCB0aHVzIGNhY2hlLnJlbmRlclRyYW5zZm9ybSB3b24ndCBiZSBzZXQgeWV0IHNvIGZvcmNlIHRoZSBwYXJzaW5nIG9mIHRoZSB0cmFuc2Zvcm0gaGVyZS5cblxuICAgICAgICAgICAgc21vb3RoID0gdmFycy5zbW9vdGhPcmlnaW4gIT09IGZhbHNlICYmIGNhY2hlLnNtb290aDtcbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2VlbiA9IHRoaXMuX3B0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgc3R5bGUsIF90cmFuc2Zvcm1Qcm9wLCAwLCAxLCBjYWNoZS5yZW5kZXJUcmFuc2Zvcm0sIGNhY2hlLCAwLCAtMSk7IC8vdGhlIGZpcnN0IHRpbWUgdGhyb3VnaCwgY3JlYXRlIHRoZSByZW5kZXJpbmcgUHJvcFR3ZWVuIHNvIHRoYXQgaXQgcnVucyBMQVNUIChpbiB0aGUgbGlua2VkIGxpc3QsIHdlIGtlZXAgYWRkaW5nIHRvIHRoZSBiZWdpbm5pbmcpXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVByb3BUd2Vlbi5kZXAgPSAxOyAvL2ZsYWcgaXQgYXMgZGVwZW5kZW50IHNvIHRoYXQgaWYgdGhpbmdzIGdldCBraWxsZWQvb3ZlcndyaXR0ZW4gYW5kIHRoaXMgaXMgdGhlIG9ubHkgUHJvcFR3ZWVuIGxlZnQsIHdlIGNhbiBzYWZlbHkga2lsbCB0aGUgd2hvbGUgdHdlZW4uXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHAgPT09IFwic2NhbGVcIikge1xuICAgICAgICAgICAgdGhpcy5fcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCBjYWNoZSwgXCJzY2FsZVlcIiwgY2FjaGUuc2NhbGVZLCAocmVsYXRpdmUgPyByZWxhdGl2ZSAqIGVuZE51bSA6IGVuZE51bSAtIGNhY2hlLnNjYWxlWSkgfHwgMCk7XG4gICAgICAgICAgICBwcm9wcy5wdXNoKFwic2NhbGVZXCIsIHApO1xuICAgICAgICAgICAgcCArPSBcIlhcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwidHJhbnNmb3JtT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIGVuZFZhbHVlID0gX2NvbnZlcnRLZXl3b3Jkc1RvUGVyY2VudGFnZXMoZW5kVmFsdWUpOyAvL2luIGNhc2Ugc29tZXRoaW5nIGxpa2UgXCJsZWZ0IHRvcFwiIG9yIFwiYm90dG9tIHJpZ2h0XCIgaXMgcGFzc2VkIGluLiBDb252ZXJ0IHRvIHBlcmNlbnRhZ2VzLlxuXG4gICAgICAgICAgICBpZiAoY2FjaGUuc3ZnKSB7XG4gICAgICAgICAgICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIGVuZFZhbHVlLCAwLCBzbW9vdGgsIDAsIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW5kVW5pdCA9IHBhcnNlRmxvYXQoZW5kVmFsdWUuc3BsaXQoXCIgXCIpWzJdKSB8fCAwOyAvL2hhbmRsZSB0aGUgek9yaWdpbiBzZXBhcmF0ZWx5IVxuXG4gICAgICAgICAgICAgIGVuZFVuaXQgIT09IGNhY2hlLnpPcmlnaW4gJiYgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwiek9yaWdpblwiLCBjYWNoZS56T3JpZ2luLCBlbmRVbml0KTtcblxuICAgICAgICAgICAgICBfYWRkTm9uVHdlZW5pbmdQVCh0aGlzLCBzdHlsZSwgcCwgX2ZpcnN0VHdvT25seShzdGFydFZhbHVlKSwgX2ZpcnN0VHdvT25seShlbmRWYWx1ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwic3ZnT3JpZ2luXCIpIHtcbiAgICAgICAgICAgIF9hcHBseVNWR09yaWdpbih0YXJnZXQsIGVuZFZhbHVlLCAxLCBzbW9vdGgsIDAsIHRoaXMpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgaW4gX3JvdGF0aW9uYWxQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBfYWRkUm90YXRpb25hbFByb3BUd2Vlbih0aGlzLCBjYWNoZSwgcCwgc3RhcnROdW0sIGVuZFZhbHVlLCByZWxhdGl2ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocCA9PT0gXCJzbW9vdGhPcmlnaW5cIikge1xuICAgICAgICAgICAgX2FkZE5vblR3ZWVuaW5nUFQodGhpcywgY2FjaGUsIFwic21vb3RoXCIsIGNhY2hlLnNtb290aCwgZW5kVmFsdWUpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHAgPT09IFwiZm9yY2UzRFwiKSB7XG4gICAgICAgICAgICBjYWNoZVtwXSA9IGVuZFZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwID09PSBcInRyYW5zZm9ybVwiKSB7XG4gICAgICAgICAgICBfYWRkUmF3VHJhbnNmb3JtUFRzKHRoaXMsIGVuZFZhbHVlLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIShwIGluIHN0eWxlKSkge1xuICAgICAgICAgIHAgPSBfY2hlY2tQcm9wUHJlZml4KHApIHx8IHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUcmFuc2Zvcm1SZWxhdGVkIHx8IChlbmROdW0gfHwgZW5kTnVtID09PSAwKSAmJiAoc3RhcnROdW0gfHwgc3RhcnROdW0gPT09IDApICYmICFfY29tcGxleEV4cC50ZXN0KGVuZFZhbHVlKSAmJiBwIGluIHN0eWxlKSB7XG4gICAgICAgICAgc3RhcnRVbml0ID0gKHN0YXJ0VmFsdWUgKyBcIlwiKS5zdWJzdHIoKHN0YXJ0TnVtICsgXCJcIikubGVuZ3RoKTtcbiAgICAgICAgICBlbmROdW0gfHwgKGVuZE51bSA9IDApOyAvLyBwcm90ZWN0IGFnYWluc3QgTmFOXG5cbiAgICAgICAgICBlbmRVbml0ID0gZ2V0VW5pdChlbmRWYWx1ZSkgfHwgKHAgaW4gX2NvbmZpZy51bml0cyA/IF9jb25maWcudW5pdHNbcF0gOiBzdGFydFVuaXQpO1xuICAgICAgICAgIHN0YXJ0VW5pdCAhPT0gZW5kVW5pdCAmJiAoc3RhcnROdW0gPSBfY29udmVydFRvVW5pdCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUsIGVuZFVuaXQpKTtcbiAgICAgICAgICB0aGlzLl9wdCA9IG5ldyBQcm9wVHdlZW4odGhpcy5fcHQsIGlzVHJhbnNmb3JtUmVsYXRlZCA/IGNhY2hlIDogc3R5bGUsIHAsIHN0YXJ0TnVtLCByZWxhdGl2ZSA/IHJlbGF0aXZlICogZW5kTnVtIDogZW5kTnVtIC0gc3RhcnROdW0sICFpc1RyYW5zZm9ybVJlbGF0ZWQgJiYgKGVuZFVuaXQgPT09IFwicHhcIiB8fCBwID09PSBcInpJbmRleFwiKSAmJiB2YXJzLmF1dG9Sb3VuZCAhPT0gZmFsc2UgPyBfcmVuZGVyUm91bmRlZENTU1Byb3AgOiBfcmVuZGVyQ1NTUHJvcCk7XG4gICAgICAgICAgdGhpcy5fcHQudSA9IGVuZFVuaXQgfHwgMDtcblxuICAgICAgICAgIGlmIChzdGFydFVuaXQgIT09IGVuZFVuaXQgJiYgZW5kVW5pdCAhPT0gXCIlXCIpIHtcbiAgICAgICAgICAgIC8vd2hlbiB0aGUgdHdlZW4gZ29lcyBhbGwgdGhlIHdheSBiYWNrIHRvIHRoZSBiZWdpbm5pbmcsIHdlIG5lZWQgdG8gcmV2ZXJ0IGl0IHRvIHRoZSBPTEQvT1JJR0lOQUwgdmFsdWUgKHdpdGggdGhvc2UgdW5pdHMpLiBXZSByZWNvcmQgdGhhdCBhcyBhIFwiYlwiIChiZWdpbm5pbmcpIHByb3BlcnR5IGFuZCBwb2ludCB0byBhIHJlbmRlciBtZXRob2QgdGhhdCBoYW5kbGVzIHRoYXQuIChwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24pXG4gICAgICAgICAgICB0aGlzLl9wdC5iID0gc3RhcnRWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX3B0LnIgPSBfcmVuZGVyQ1NTUHJvcFdpdGhCZWdpbm5pbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEocCBpbiBzdHlsZSkpIHtcbiAgICAgICAgICBpZiAocCBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vbWF5YmUgaXQncyBub3QgYSBzdHlsZSAtIGl0IGNvdWxkIGJlIGEgcHJvcGVydHkgYWRkZWQgZGlyZWN0bHkgdG8gYW4gZWxlbWVudCBpbiB3aGljaCBjYXNlIHdlJ2xsIHRyeSB0byBhbmltYXRlIHRoYXQuXG4gICAgICAgICAgICB0aGlzLmFkZCh0YXJnZXQsIHAsIHN0YXJ0VmFsdWUgfHwgdGFyZ2V0W3BdLCBlbmRWYWx1ZSwgaW5kZXgsIHRhcmdldHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfbWlzc2luZ1BsdWdpbihwLCBlbmRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdHdlZW5Db21wbGV4Q1NTU3RyaW5nLmNhbGwodGhpcywgdGFyZ2V0LCBwLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcy5wdXNoKHApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhc1ByaW9yaXR5ICYmIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodGhpcyk7XG4gIH0sXG4gIGdldDogX2dldCxcbiAgYWxpYXNlczogX3Byb3BlcnR5QWxpYXNlcyxcbiAgZ2V0U2V0dGVyOiBmdW5jdGlvbiBnZXRTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgcGx1Z2luKSB7XG4gICAgLy9yZXR1cm5zIGEgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyB0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSBhbmQgYXBwbGllcyBpdCBhY2NvcmRpbmdseS4gUmVtZW1iZXIsIHByb3BlcnRpZXMgbGlrZSBcInhcIiBhcmVuJ3QgYXMgc2ltcGxlIGFzIHRhcmdldC5zdHlsZS5wcm9wZXJ0eSA9IHZhbHVlIGJlY2F1c2UgdGhleSd2ZSBnb3QgdG8gYmUgYXBwbGllZCB0byBhIHByb3h5IG9iamVjdCBhbmQgdGhlbiBtZXJnZWQgaW50byBhIHRyYW5zZm9ybSBzdHJpbmcgaW4gYSByZW5kZXJlci5cbiAgICB2YXIgcCA9IF9wcm9wZXJ0eUFsaWFzZXNbcHJvcGVydHldO1xuICAgIHAgJiYgcC5pbmRleE9mKFwiLFwiKSA8IDAgJiYgKHByb3BlcnR5ID0gcCk7XG4gICAgcmV0dXJuIHByb3BlcnR5IGluIF90cmFuc2Zvcm1Qcm9wcyAmJiBwcm9wZXJ0eSAhPT0gX3RyYW5zZm9ybU9yaWdpblByb3AgJiYgKHRhcmdldC5fZ3NhcC54IHx8IF9nZXQodGFyZ2V0LCBcInhcIikpID8gcGx1Z2luICYmIF9yZWNlbnRTZXR0ZXJQbHVnaW4gPT09IHBsdWdpbiA/IHByb3BlcnR5ID09PSBcInNjYWxlXCIgPyBfc2V0dGVyU2NhbGUgOiBfc2V0dGVyVHJhbnNmb3JtIDogKF9yZWNlbnRTZXR0ZXJQbHVnaW4gPSBwbHVnaW4gfHwge30pICYmIChwcm9wZXJ0eSA9PT0gXCJzY2FsZVwiID8gX3NldHRlclNjYWxlV2l0aFJlbmRlciA6IF9zZXR0ZXJUcmFuc2Zvcm1XaXRoUmVuZGVyKSA6IHRhcmdldC5zdHlsZSAmJiAhX2lzVW5kZWZpbmVkKHRhcmdldC5zdHlsZVtwcm9wZXJ0eV0pID8gX3NldHRlckNTU1N0eWxlIDogfnByb3BlcnR5LmluZGV4T2YoXCItXCIpID8gX3NldHRlckNTU1Byb3AgOiBfZ2V0U2V0dGVyKHRhcmdldCwgcHJvcGVydHkpO1xuICB9LFxuICBjb3JlOiB7XG4gICAgX3JlbW92ZVByb3BlcnR5OiBfcmVtb3ZlUHJvcGVydHksXG4gICAgX2dldE1hdHJpeDogX2dldE1hdHJpeFxuICB9XG59O1xuZ3NhcC51dGlscy5jaGVja1ByZWZpeCA9IF9jaGVja1Byb3BQcmVmaXg7XG5cbihmdW5jdGlvbiAocG9zaXRpb25BbmRTY2FsZSwgcm90YXRpb24sIG90aGVycywgYWxpYXNlcykge1xuICB2YXIgYWxsID0gX2ZvckVhY2hOYW1lKHBvc2l0aW9uQW5kU2NhbGUgKyBcIixcIiArIHJvdGF0aW9uICsgXCIsXCIgKyBvdGhlcnMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgX3RyYW5zZm9ybVByb3BzW25hbWVdID0gMTtcbiAgfSk7XG5cbiAgX2ZvckVhY2hOYW1lKHJvdGF0aW9uLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIF9jb25maWcudW5pdHNbbmFtZV0gPSBcImRlZ1wiO1xuICAgIF9yb3RhdGlvbmFsUHJvcGVydGllc1tuYW1lXSA9IDE7XG4gIH0pO1xuXG4gIF9wcm9wZXJ0eUFsaWFzZXNbYWxsWzEzXV0gPSBwb3NpdGlvbkFuZFNjYWxlICsgXCIsXCIgKyByb3RhdGlvbjtcblxuICBfZm9yRWFjaE5hbWUoYWxpYXNlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3BsaXQgPSBuYW1lLnNwbGl0KFwiOlwiKTtcbiAgICBfcHJvcGVydHlBbGlhc2VzW3NwbGl0WzFdXSA9IGFsbFtzcGxpdFswXV07XG4gIH0pO1xufSkoXCJ4LHkseixzY2FsZSxzY2FsZVgsc2NhbGVZLHhQZXJjZW50LHlQZXJjZW50XCIsIFwicm90YXRpb24scm90YXRpb25YLHJvdGF0aW9uWSxza2V3WCxza2V3WVwiLCBcInRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luLGZvcmNlM0Qsc21vb3RoT3JpZ2luLHRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsIFwiMDp0cmFuc2xhdGVYLDE6dHJhbnNsYXRlWSwyOnRyYW5zbGF0ZVosODpyb3RhdGUsODpyb3RhdGlvblosODpyb3RhdGVaLDk6cm90YXRlWCwxMDpyb3RhdGVZXCIpO1xuXG5fZm9yRWFjaE5hbWUoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIF9jb25maWcudW5pdHNbbmFtZV0gPSBcInB4XCI7XG59KTtcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NQbHVnaW4pO1xuZXhwb3J0IHsgQ1NTUGx1Z2luIGFzIGRlZmF1bHQsIF9nZXRCQm94LCBfY3JlYXRlRWxlbWVudCwgX2NoZWNrUHJvcFByZWZpeCBhcyBjaGVja1ByZWZpeCB9OyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLyohXG4gKiBHU0FQIDMuOC4wXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgMjAwOC0yMDIxLCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBTdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwczovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBhZ3JlZW1lbnQgaXNzdWVkIHdpdGggdGhhdCBtZW1iZXJzaGlwLlxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4qL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xudmFyIF9jb25maWcgPSB7XG4gIGF1dG9TbGVlcDogMTIwLFxuICBmb3JjZTNEOiBcImF1dG9cIixcbiAgbnVsbFRhcmdldFdhcm46IDEsXG4gIHVuaXRzOiB7XG4gICAgbGluZUhlaWdodDogXCJcIlxuICB9XG59LFxuICAgIF9kZWZhdWx0cyA9IHtcbiAgZHVyYXRpb246IC41LFxuICBvdmVyd3JpdGU6IGZhbHNlLFxuICBkZWxheTogMFxufSxcbiAgICBfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgIF9iaWdOdW0gPSAxZTgsXG4gICAgX3RpbnlOdW0gPSAxIC8gX2JpZ051bSxcbiAgICBfMlBJID0gTWF0aC5QSSAqIDIsXG4gICAgX0hBTEZfUEkgPSBfMlBJIC8gNCxcbiAgICBfZ3NJRCA9IDAsXG4gICAgX3NxcnQgPSBNYXRoLnNxcnQsXG4gICAgX2NvcyA9IE1hdGguY29zLFxuICAgIF9zaW4gPSBNYXRoLnNpbixcbiAgICBfaXNTdHJpbmcgPSBmdW5jdGlvbiBfaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn0sXG4gICAgX2lzRnVuY3Rpb24gPSBmdW5jdGlvbiBfaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCI7XG59LFxuICAgIF9pc051bWJlciA9IGZ1bmN0aW9uIF9pc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufSxcbiAgICBfaXNVbmRlZmluZWQgPSBmdW5jdGlvbiBfaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIjtcbn0sXG4gICAgX2lzT2JqZWN0ID0gZnVuY3Rpb24gX2lzT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG59LFxuICAgIF9pc05vdEZhbHNlID0gZnVuY3Rpb24gX2lzTm90RmFsc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBmYWxzZTtcbn0sXG4gICAgX3dpbmRvd0V4aXN0cyA9IGZ1bmN0aW9uIF93aW5kb3dFeGlzdHMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufSxcbiAgICBfaXNGdW5jT3JTdHJpbmcgPSBmdW5jdGlvbiBfaXNGdW5jT3JTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIF9pc0Z1bmN0aW9uKHZhbHVlKSB8fCBfaXNTdHJpbmcodmFsdWUpO1xufSxcbiAgICBfaXNUeXBlZEFycmF5ID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgIC8vIG5vdGU6IElFMTAgaGFzIEFycmF5QnVmZmVyLCBidXQgTk9UIEFycmF5QnVmZmVyLmlzVmlldygpLlxuX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5LFxuICAgIF9zdHJpY3ROdW1FeHAgPSAvKD86LT9cXC4/XFxkfFxcLikrL2dpLFxuICAgIC8vb25seSBudW1iZXJzIChpbmNsdWRpbmcgbmVnYXRpdmVzIGFuZCBkZWNpbWFscykgYnV0IE5PVCByZWxhdGl2ZSB2YWx1ZXMuXG5fbnVtRXhwID0gL1stKz0uXSpcXGQrWy5lXFwtK10qXFxkKltlXFwtK10qXFxkKi9nLFxuICAgIC8vZmluZHMgYW55IG51bWJlcnMsIGluY2x1ZGluZyBvbmVzIHRoYXQgc3RhcnQgd2l0aCArPSBvciAtPSwgbmVnYXRpdmUgbnVtYmVycywgYW5kIG9uZXMgaW4gc2NpZW50aWZpYyBub3RhdGlvbiBsaWtlIDFlLTguXG5fbnVtV2l0aFVuaXRFeHAgPSAvWy0rPS5dKlxcZCtbLmUtXSpcXGQqW2EteiVdKi9nLFxuICAgIF9jb21wbGV4U3RyaW5nTnVtRXhwID0gL1stKz0uXSpcXGQrXFwuP1xcZCooPzplLXxlXFwrKT9cXGQqL2dpLFxuICAgIC8vZHVwbGljYXRlIHNvIHRoYXQgd2hpbGUgd2UncmUgbG9vcGluZyB0aHJvdWdoIG1hdGNoZXMgZnJvbSBleGVjKCksIGl0IGRvZXNuJ3QgY29udGFtaW5hdGUgdGhlIGxhc3RJbmRleCBvZiBfbnVtRXhwIHdoaWNoIHdlIHVzZSB0byBzZWFyY2ggZm9yIGNvbG9ycyB0b28uXG5fcmVsRXhwID0gL1srLV09LT9bLlxcZF0rLyxcbiAgICBfZGVsaW1pdGVkVmFsdWVFeHAgPSAvW14sJ1wiXFxbXFxdXFxzXSsvZ2ksXG4gICAgLy8gcHJldmlvdXNseSAvWyNcXC0rLl0qXFxiW2EtelxcZFxcLT0rJS5dKy9naSBidXQgZGlkbid0IGNhdGNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbl91bml0RXhwID0gL1tcXGQuK1xcLT1dKyg/OmVbLStdXFxkKikqL2ksXG4gICAgX2dsb2JhbFRpbWVsaW5lLFxuICAgIF93aW4sXG4gICAgX2NvcmVJbml0dGVkLFxuICAgIF9kb2MsXG4gICAgX2dsb2JhbHMgPSB7fSxcbiAgICBfaW5zdGFsbFNjb3BlID0ge30sXG4gICAgX2NvcmVSZWFkeSxcbiAgICBfaW5zdGFsbCA9IGZ1bmN0aW9uIF9pbnN0YWxsKHNjb3BlKSB7XG4gIHJldHVybiAoX2luc3RhbGxTY29wZSA9IF9tZXJnZShzY29wZSwgX2dsb2JhbHMpKSAmJiBnc2FwO1xufSxcbiAgICBfbWlzc2luZ1BsdWdpbiA9IGZ1bmN0aW9uIF9taXNzaW5nUGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gY29uc29sZS53YXJuKFwiSW52YWxpZCBwcm9wZXJ0eVwiLCBwcm9wZXJ0eSwgXCJzZXQgdG9cIiwgdmFsdWUsIFwiTWlzc2luZyBwbHVnaW4/IGdzYXAucmVnaXN0ZXJQbHVnaW4oKVwiKTtcbn0sXG4gICAgX3dhcm4gPSBmdW5jdGlvbiBfd2FybihtZXNzYWdlLCBzdXBwcmVzcykge1xuICByZXR1cm4gIXN1cHByZXNzICYmIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn0sXG4gICAgX2FkZEdsb2JhbCA9IGZ1bmN0aW9uIF9hZGRHbG9iYWwobmFtZSwgb2JqKSB7XG4gIHJldHVybiBuYW1lICYmIChfZ2xvYmFsc1tuYW1lXSA9IG9iaikgJiYgX2luc3RhbGxTY29wZSAmJiAoX2luc3RhbGxTY29wZVtuYW1lXSA9IG9iaikgfHwgX2dsb2JhbHM7XG59LFxuICAgIF9lbXB0eUZ1bmMgPSBmdW5jdGlvbiBfZW1wdHlGdW5jKCkge1xuICByZXR1cm4gMDtcbn0sXG4gICAgX3Jlc2VydmVkUHJvcHMgPSB7fSxcbiAgICBfbGF6eVR3ZWVucyA9IFtdLFxuICAgIF9sYXp5TG9va3VwID0ge30sXG4gICAgX2xhc3RSZW5kZXJlZEZyYW1lLFxuICAgIF9wbHVnaW5zID0ge30sXG4gICAgX2VmZmVjdHMgPSB7fSxcbiAgICBfbmV4dEdDRnJhbWUgPSAzMCxcbiAgICBfaGFybmVzc1BsdWdpbnMgPSBbXSxcbiAgICBfY2FsbGJhY2tOYW1lcyA9IFwiXCIsXG4gICAgX2hhcm5lc3MgPSBmdW5jdGlvbiBfaGFybmVzcyh0YXJnZXRzKSB7XG4gIHZhciB0YXJnZXQgPSB0YXJnZXRzWzBdLFxuICAgICAgaGFybmVzc1BsdWdpbixcbiAgICAgIGk7XG4gIF9pc09iamVjdCh0YXJnZXQpIHx8IF9pc0Z1bmN0aW9uKHRhcmdldCkgfHwgKHRhcmdldHMgPSBbdGFyZ2V0c10pO1xuXG4gIGlmICghKGhhcm5lc3NQbHVnaW4gPSAodGFyZ2V0Ll9nc2FwIHx8IHt9KS5oYXJuZXNzKSkge1xuICAgIC8vIGZpbmQgdGhlIGZpcnN0IHRhcmdldCB3aXRoIGEgaGFybmVzcy4gV2UgYXNzdW1lIHRhcmdldHMgcGFzc2VkIGludG8gYW4gYW5pbWF0aW9uIHdpbGwgYmUgb2Ygc2ltaWxhciB0eXBlLCBtZWFuaW5nIHRoZSBzYW1lIGtpbmQgb2YgaGFybmVzcyBjYW4gYmUgdXNlZCBmb3IgdGhlbSBhbGwgKHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbilcbiAgICBpID0gX2hhcm5lc3NQbHVnaW5zLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0gJiYgIV9oYXJuZXNzUGx1Z2luc1tpXS50YXJnZXRUZXN0KHRhcmdldCkpIHt9XG5cbiAgICBoYXJuZXNzUGx1Z2luID0gX2hhcm5lc3NQbHVnaW5zW2ldO1xuICB9XG5cbiAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0YXJnZXRzW2ldICYmICh0YXJnZXRzW2ldLl9nc2FwIHx8ICh0YXJnZXRzW2ldLl9nc2FwID0gbmV3IEdTQ2FjaGUodGFyZ2V0c1tpXSwgaGFybmVzc1BsdWdpbikpKSB8fCB0YXJnZXRzLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXRzO1xufSxcbiAgICBfZ2V0Q2FjaGUgPSBmdW5jdGlvbiBfZ2V0Q2FjaGUodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModG9BcnJheSh0YXJnZXQpKVswXS5fZ3NhcDtcbn0sXG4gICAgX2dldFByb3BlcnR5ID0gZnVuY3Rpb24gX2dldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHYpIHtcbiAgcmV0dXJuICh2ID0gdGFyZ2V0W3Byb3BlcnR5XSkgJiYgX2lzRnVuY3Rpb24odikgPyB0YXJnZXRbcHJvcGVydHldKCkgOiBfaXNVbmRlZmluZWQodikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSB8fCB2O1xufSxcbiAgICBfZm9yRWFjaE5hbWUgPSBmdW5jdGlvbiBfZm9yRWFjaE5hbWUobmFtZXMsIGZ1bmMpIHtcbiAgcmV0dXJuIChuYW1lcyA9IG5hbWVzLnNwbGl0KFwiLFwiKSkuZm9yRWFjaChmdW5jKSB8fCBuYW1lcztcbn0sXG4gICAgLy9zcGxpdCBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIG5hbWVzIGludG8gYW4gYXJyYXksIHRoZW4gcnVuIGEgZm9yRWFjaCgpIGZ1bmN0aW9uIGFuZCByZXR1cm4gdGhlIHNwbGl0IGFycmF5ICh0aGlzIGlzIGp1c3QgYSB3YXkgdG8gY29uc29saWRhdGUvc2hvcnRlbiBzb21lIGNvZGUpLlxuX3JvdW5kID0gZnVuY3Rpb24gX3JvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogMTAwMDAwKSAvIDEwMDAwMCB8fCAwO1xufSxcbiAgICBfcm91bmRQcmVjaXNlID0gZnVuY3Rpb24gX3JvdW5kUHJlY2lzZSh2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwMDAwKSAvIDEwMDAwMDAwIHx8IDA7XG59LFxuICAgIC8vIGluY3JlYXNlZCBwcmVjaXNpb24gbW9zdGx5IGZvciB0aW1pbmcgdmFsdWVzLlxuX2FycmF5Q29udGFpbnNBbnkgPSBmdW5jdGlvbiBfYXJyYXlDb250YWluc0FueSh0b1NlYXJjaCwgdG9GaW5kKSB7XG4gIC8vc2VhcmNoZXMgb25lIGFycmF5IHRvIGZpbmQgbWF0Y2hlcyBmb3IgYW55IG9mIHRoZSBpdGVtcyBpbiB0aGUgdG9GaW5kIGFycmF5LiBBcyBzb29uIGFzIG9uZSBpcyBmb3VuZCwgaXQgcmV0dXJucyB0cnVlLiBJdCBkb2VzIE5PVCByZXR1cm4gYWxsIHRoZSBtYXRjaGVzOyBpdCdzIHNpbXBseSBhIGJvb2xlYW4gc2VhcmNoLlxuICB2YXIgbCA9IHRvRmluZC5sZW5ndGgsXG4gICAgICBpID0gMDtcblxuICBmb3IgKDsgdG9TZWFyY2guaW5kZXhPZih0b0ZpbmRbaV0pIDwgMCAmJiArK2kgPCBsOykge31cblxuICByZXR1cm4gaSA8IGw7XG59LFxuICAgIF9sYXp5UmVuZGVyID0gZnVuY3Rpb24gX2xhenlSZW5kZXIoKSB7XG4gIHZhciBsID0gX2xhenlUd2VlbnMubGVuZ3RoLFxuICAgICAgYSA9IF9sYXp5VHdlZW5zLnNsaWNlKDApLFxuICAgICAgaSxcbiAgICAgIHR3ZWVuO1xuXG4gIF9sYXp5TG9va3VwID0ge307XG4gIF9sYXp5VHdlZW5zLmxlbmd0aCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIHR3ZWVuID0gYVtpXTtcbiAgICB0d2VlbiAmJiB0d2Vlbi5fbGF6eSAmJiAodHdlZW4ucmVuZGVyKHR3ZWVuLl9sYXp5WzBdLCB0d2Vlbi5fbGF6eVsxXSwgdHJ1ZSkuX2xhenkgPSAwKTtcbiAgfVxufSxcbiAgICBfbGF6eVNhZmVSZW5kZXIgPSBmdW5jdGlvbiBfbGF6eVNhZmVSZW5kZXIoYW5pbWF0aW9uLCB0aW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7XG4gIGFuaW1hdGlvbi5yZW5kZXIodGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBzb21lb25lIGNhbGxzIHNlZWsoKSBvciB0aW1lKCkgb3IgcHJvZ3Jlc3MoKSwgdGhleSBleHBlY3QgYW4gaW1tZWRpYXRlIHJlbmRlci5cbn0sXG4gICAgX251bWVyaWNJZlBvc3NpYmxlID0gZnVuY3Rpb24gX251bWVyaWNJZlBvc3NpYmxlKHZhbHVlKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiAobiB8fCBuID09PSAwKSAmJiAodmFsdWUgKyBcIlwiKS5tYXRjaChfZGVsaW1pdGVkVmFsdWVFeHApLmxlbmd0aCA8IDIgPyBuIDogX2lzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xufSxcbiAgICBfcGFzc1Rocm91Z2ggPSBmdW5jdGlvbiBfcGFzc1Rocm91Z2gocCkge1xuICByZXR1cm4gcDtcbn0sXG4gICAgX3NldERlZmF1bHRzID0gZnVuY3Rpb24gX3NldERlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IChvYmpbcF0gPSBkZWZhdWx0c1twXSk7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSxcbiAgICBfc2V0S2V5ZnJhbWVEZWZhdWx0cyA9IGZ1bmN0aW9uIF9zZXRLZXlmcmFtZURlZmF1bHRzKG9iaiwgZGVmYXVsdHMpIHtcbiAgZm9yICh2YXIgcCBpbiBkZWZhdWx0cykge1xuICAgIHAgaW4gb2JqIHx8IHAgPT09IFwiZHVyYXRpb25cIiB8fCBwID09PSBcImVhc2VcIiB8fCAob2JqW3BdID0gZGVmYXVsdHNbcF0pO1xuICB9XG59LFxuICAgIF9tZXJnZSA9IGZ1bmN0aW9uIF9tZXJnZShiYXNlLCB0b01lcmdlKSB7XG4gIGZvciAodmFyIHAgaW4gdG9NZXJnZSkge1xuICAgIGJhc2VbcF0gPSB0b01lcmdlW3BdO1xuICB9XG5cbiAgcmV0dXJuIGJhc2U7XG59LFxuICAgIF9tZXJnZURlZXAgPSBmdW5jdGlvbiBfbWVyZ2VEZWVwKGJhc2UsIHRvTWVyZ2UpIHtcbiAgZm9yICh2YXIgcCBpbiB0b01lcmdlKSB7XG4gICAgcCAhPT0gXCJfX3Byb3RvX19cIiAmJiBwICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgcCAhPT0gXCJwcm90b3R5cGVcIiAmJiAoYmFzZVtwXSA9IF9pc09iamVjdCh0b01lcmdlW3BdKSA/IF9tZXJnZURlZXAoYmFzZVtwXSB8fCAoYmFzZVtwXSA9IHt9KSwgdG9NZXJnZVtwXSkgOiB0b01lcmdlW3BdKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlO1xufSxcbiAgICBfY29weUV4Y2x1ZGluZyA9IGZ1bmN0aW9uIF9jb3B5RXhjbHVkaW5nKG9iaiwgZXhjbHVkaW5nKSB7XG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiBvYmopIHtcbiAgICBwIGluIGV4Y2x1ZGluZyB8fCAoY29weVtwXSA9IG9ialtwXSk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2luaGVyaXREZWZhdWx0cyA9IGZ1bmN0aW9uIF9pbmhlcml0RGVmYXVsdHModmFycykge1xuICB2YXIgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgZnVuYyA9IHZhcnMua2V5ZnJhbWVzID8gX3NldEtleWZyYW1lRGVmYXVsdHMgOiBfc2V0RGVmYXVsdHM7XG5cbiAgaWYgKF9pc05vdEZhbHNlKHZhcnMuaW5oZXJpdCkpIHtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICBmdW5jKHZhcnMsIHBhcmVudC52YXJzLmRlZmF1bHRzKTtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQgfHwgcGFyZW50Ll9kcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFycztcbn0sXG4gICAgX2FycmF5c01hdGNoID0gZnVuY3Rpb24gX2FycmF5c01hdGNoKGExLCBhMikge1xuICB2YXIgaSA9IGExLmxlbmd0aCxcbiAgICAgIG1hdGNoID0gaSA9PT0gYTIubGVuZ3RoO1xuXG4gIHdoaWxlIChtYXRjaCAmJiBpLS0gJiYgYTFbaV0gPT09IGEyW2ldKSB7fVxuXG4gIHJldHVybiBpIDwgMDtcbn0sXG4gICAgX2FkZExpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX2FkZExpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3AsIHNvcnRCeSkge1xuICBpZiAoZmlyc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBmaXJzdFByb3AgPSBcIl9maXJzdFwiO1xuICB9XG5cbiAgaWYgKGxhc3RQcm9wID09PSB2b2lkIDApIHtcbiAgICBsYXN0UHJvcCA9IFwiX2xhc3RcIjtcbiAgfVxuXG4gIHZhciBwcmV2ID0gcGFyZW50W2xhc3RQcm9wXSxcbiAgICAgIHQ7XG5cbiAgaWYgKHNvcnRCeSkge1xuICAgIHQgPSBjaGlsZFtzb3J0QnldO1xuXG4gICAgd2hpbGUgKHByZXYgJiYgcHJldltzb3J0QnldID4gdCkge1xuICAgICAgcHJldiA9IHByZXYuX3ByZXY7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByZXYpIHtcbiAgICBjaGlsZC5fbmV4dCA9IHByZXYuX25leHQ7XG4gICAgcHJldi5fbmV4dCA9IGNoaWxkO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkLl9uZXh0ID0gcGFyZW50W2ZpcnN0UHJvcF07XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBjaGlsZDtcbiAgfVxuXG4gIGlmIChjaGlsZC5fbmV4dCkge1xuICAgIGNoaWxkLl9uZXh0Ll9wcmV2ID0gY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50W2xhc3RQcm9wXSA9IGNoaWxkO1xuICB9XG5cbiAgY2hpbGQuX3ByZXYgPSBwcmV2O1xuICBjaGlsZC5wYXJlbnQgPSBjaGlsZC5fZHAgPSBwYXJlbnQ7XG4gIHJldHVybiBjaGlsZDtcbn0sXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtID0gZnVuY3Rpb24gX3JlbW92ZUxpbmtlZExpc3RJdGVtKHBhcmVudCwgY2hpbGQsIGZpcnN0UHJvcCwgbGFzdFByb3ApIHtcbiAgaWYgKGZpcnN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgZmlyc3RQcm9wID0gXCJfZmlyc3RcIjtcbiAgfVxuXG4gIGlmIChsYXN0UHJvcCA9PT0gdm9pZCAwKSB7XG4gICAgbGFzdFByb3AgPSBcIl9sYXN0XCI7XG4gIH1cblxuICB2YXIgcHJldiA9IGNoaWxkLl9wcmV2LFxuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5fbmV4dCA9IG5leHQ7XG4gIH0gZWxzZSBpZiAocGFyZW50W2ZpcnN0UHJvcF0gPT09IGNoaWxkKSB7XG4gICAgcGFyZW50W2ZpcnN0UHJvcF0gPSBuZXh0O1xuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0Ll9wcmV2ID0gcHJldjtcbiAgfSBlbHNlIGlmIChwYXJlbnRbbGFzdFByb3BdID09PSBjaGlsZCkge1xuICAgIHBhcmVudFtsYXN0UHJvcF0gPSBwcmV2O1xuICB9XG5cbiAgY2hpbGQuX25leHQgPSBjaGlsZC5fcHJldiA9IGNoaWxkLnBhcmVudCA9IG51bGw7IC8vIGRvbid0IGRlbGV0ZSB0aGUgX2RwIGp1c3Qgc28gd2UgY2FuIHJldmVydCBpZiBuZWNlc3NhcnkuIEJ1dCBwYXJlbnQgc2hvdWxkIGJlIG51bGwgdG8gaW5kaWNhdGUgdGhlIGl0ZW0gaXNuJ3QgaW4gYSBsaW5rZWQgbGlzdC5cbn0sXG4gICAgX3JlbW92ZUZyb21QYXJlbnQgPSBmdW5jdGlvbiBfcmVtb3ZlRnJvbVBhcmVudChjaGlsZCwgb25seUlmUGFyZW50SGFzQXV0b1JlbW92ZSkge1xuICBjaGlsZC5wYXJlbnQgJiYgKCFvbmx5SWZQYXJlbnRIYXNBdXRvUmVtb3ZlIHx8IGNoaWxkLnBhcmVudC5hdXRvUmVtb3ZlQ2hpbGRyZW4pICYmIGNoaWxkLnBhcmVudC5yZW1vdmUoY2hpbGQpO1xuICBjaGlsZC5fYWN0ID0gMDtcbn0sXG4gICAgX3VuY2FjaGUgPSBmdW5jdGlvbiBfdW5jYWNoZShhbmltYXRpb24sIGNoaWxkKSB7XG4gIGlmIChhbmltYXRpb24gJiYgKCFjaGlsZCB8fCBjaGlsZC5fZW5kID4gYW5pbWF0aW9uLl9kdXIgfHwgY2hpbGQuX3N0YXJ0IDwgMCkpIHtcbiAgICAvLyBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb246IGlmIGEgY2hpbGQgYW5pbWF0aW9uIGlzIHBhc3NlZCBpbiB3ZSBzaG91bGQgb25seSB1bmNhY2hlIGlmIHRoYXQgY2hpbGQgRVhURU5EUyB0aGUgYW5pbWF0aW9uIChpdHMgZW5kIHRpbWUgaXMgYmV5b25kIHRoZSBlbmQpXG4gICAgdmFyIGEgPSBhbmltYXRpb247XG5cbiAgICB3aGlsZSAoYSkge1xuICAgICAgYS5fZGlydHkgPSAxO1xuICAgICAgYSA9IGEucGFyZW50O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9yZWNhY2hlQW5jZXN0b3JzID0gZnVuY3Rpb24gX3JlY2FjaGVBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHZhciBwYXJlbnQgPSBhbmltYXRpb24ucGFyZW50O1xuXG4gIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgIC8vc29tZXRpbWVzIHdlIG11c3QgZm9yY2UgYSByZS1zb3J0IG9mIGFsbCBjaGlsZHJlbiBhbmQgdXBkYXRlIHRoZSBkdXJhdGlvbi90b3RhbER1cmF0aW9uIG9mIGFsbCBhbmNlc3RvciB0aW1lbGluZXMgaW1tZWRpYXRlbHkgaW4gY2FzZSwgZm9yIGV4YW1wbGUsIGluIHRoZSBtaWRkbGUgb2YgYSByZW5kZXIgbG9vcCwgb25lIHR3ZWVuIGFsdGVycyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIHdoaWNoIHNob3ZlcyBpdHMgc3RhcnRUaW1lIGJlZm9yZSAwLCBmb3JjaW5nIHRoZSBwYXJlbnQgdGltZWxpbmUgdG8gc2hpZnQgYXJvdW5kIGFuZCBzaGlmdENoaWxkcmVuKCkgd2hpY2ggY291bGQgYWZmZWN0IHRoYXQgbmV4dCB0d2VlbidzIHJlbmRlciAoc3RhcnRUaW1lKS4gRG9lc24ndCBtYXR0ZXIgZm9yIHRoZSByb290IHRpbWVsaW5lIHRob3VnaC5cbiAgICBwYXJlbnQuX2RpcnR5ID0gMTtcbiAgICBwYXJlbnQudG90YWxEdXJhdGlvbigpO1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcbiAgICBfaGFzTm9QYXVzZWRBbmNlc3RvcnMgPSBmdW5jdGlvbiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAhYW5pbWF0aW9uIHx8IGFuaW1hdGlvbi5fdHMgJiYgX2hhc05vUGF1c2VkQW5jZXN0b3JzKGFuaW1hdGlvbi5wYXJlbnQpO1xufSxcbiAgICBfZWxhcHNlZEN5Y2xlRHVyYXRpb24gPSBmdW5jdGlvbiBfZWxhcHNlZEN5Y2xlRHVyYXRpb24oYW5pbWF0aW9uKSB7XG4gIHJldHVybiBhbmltYXRpb24uX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZShhbmltYXRpb24uX3RUaW1lLCBhbmltYXRpb24gPSBhbmltYXRpb24uZHVyYXRpb24oKSArIGFuaW1hdGlvbi5fckRlbGF5KSAqIGFuaW1hdGlvbiA6IDA7XG59LFxuICAgIC8vIGZlZWQgaW4gdGhlIHRvdGFsVGltZSBhbmQgY3ljbGVEdXJhdGlvbiBhbmQgaXQnbGwgcmV0dXJuIHRoZSBjeWNsZSAoaXRlcmF0aW9uIG1pbnVzIDEpIGFuZCBpZiB0aGUgcGxheWhlYWQgaXMgZXhhY3RseSBhdCB0aGUgdmVyeSBFTkQsIGl0IHdpbGwgTk9UIGJ1bXAgdXAgdG8gdGhlIG5leHQgY3ljbGUuXG5fYW5pbWF0aW9uQ3ljbGUgPSBmdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIGN5Y2xlRHVyYXRpb24pIHtcbiAgdmFyIHdob2xlID0gTWF0aC5mbG9vcih0VGltZSAvPSBjeWNsZUR1cmF0aW9uKTtcbiAgcmV0dXJuIHRUaW1lICYmIHdob2xlID09PSB0VGltZSA/IHdob2xlIC0gMSA6IHdob2xlO1xufSxcbiAgICBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSA9IGZ1bmN0aW9uIF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHBhcmVudFRpbWUsIGNoaWxkKSB7XG4gIHJldHVybiAocGFyZW50VGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgKyAoY2hpbGQuX3RzID49IDAgPyAwIDogY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpO1xufSxcbiAgICBfc2V0RW5kID0gZnVuY3Rpb24gX3NldEVuZChhbmltYXRpb24pIHtcbiAgcmV0dXJuIGFuaW1hdGlvbi5fZW5kID0gX3JvdW5kUHJlY2lzZShhbmltYXRpb24uX3N0YXJ0ICsgKGFuaW1hdGlvbi5fdER1ciAvIE1hdGguYWJzKGFuaW1hdGlvbi5fdHMgfHwgYW5pbWF0aW9uLl9ydHMgfHwgX3RpbnlOdW0pIHx8IDApKTtcbn0sXG4gICAgX2FsaWduUGxheWhlYWQgPSBmdW5jdGlvbiBfYWxpZ25QbGF5aGVhZChhbmltYXRpb24sIHRvdGFsVGltZSkge1xuICAvLyBhZGp1c3RzIHRoZSBhbmltYXRpb24ncyBfc3RhcnQgYW5kIF9lbmQgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCB0b3RhbFRpbWUgKG9ubHkgaWYgdGhlIHBhcmVudCdzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUgYW5kIHRoZSBhbmltYXRpb24gaXNuJ3QgcGF1c2VkKS4gSXQgZG9lc24ndCBkbyBhbnkgcmVuZGVyaW5nIG9yIGZvcmNpbmcgdGhpbmdzIGJhY2sgaW50byBwYXJlbnQgdGltZWxpbmVzLCBldGMuIC0gdGhhdCdzIHdoYXQgdG90YWxUaW1lKCkgaXMgZm9yLlxuICB2YXIgcGFyZW50ID0gYW5pbWF0aW9uLl9kcDtcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiBhbmltYXRpb24uX3RzKSB7XG4gICAgYW5pbWF0aW9uLl9zdGFydCA9IF9yb3VuZFByZWNpc2UocGFyZW50Ll90aW1lIC0gKGFuaW1hdGlvbi5fdHMgPiAwID8gdG90YWxUaW1lIC8gYW5pbWF0aW9uLl90cyA6ICgoYW5pbWF0aW9uLl9kaXJ0eSA/IGFuaW1hdGlvbi50b3RhbER1cmF0aW9uKCkgOiBhbmltYXRpb24uX3REdXIpIC0gdG90YWxUaW1lKSAvIC1hbmltYXRpb24uX3RzKSk7XG5cbiAgICBfc2V0RW5kKGFuaW1hdGlvbik7XG5cbiAgICBwYXJlbnQuX2RpcnR5IHx8IF91bmNhY2hlKHBhcmVudCwgYW5pbWF0aW9uKTsgLy9mb3IgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIElmIHRoZSBwYXJlbnQncyBjYWNoZSBpcyBhbHJlYWR5IGRpcnR5LCBpdCBhbHJlYWR5IHRvb2sgY2FyZSBvZiBtYXJraW5nIHRoZSBhbmNlc3RvcnMgYXMgZGlydHkgdG9vLCBzbyBza2lwIHRoZSBmdW5jdGlvbiBjYWxsIGhlcmUuXG4gIH1cblxuICByZXR1cm4gYW5pbWF0aW9uO1xufSxcblxuLypcbl90b3RhbFRpbWVUb1RpbWUgPSAoY2xhbXBlZFRvdGFsVGltZSwgZHVyYXRpb24sIHJlcGVhdCwgcmVwZWF0RGVsYXksIHlveW8pID0+IHtcblx0bGV0IGN5Y2xlRHVyYXRpb24gPSBkdXJhdGlvbiArIHJlcGVhdERlbGF5LFxuXHRcdHRpbWUgPSBfcm91bmQoY2xhbXBlZFRvdGFsVGltZSAlIGN5Y2xlRHVyYXRpb24pO1xuXHRpZiAodGltZSA+IGR1cmF0aW9uKSB7XG5cdFx0dGltZSA9IGR1cmF0aW9uO1xuXHR9XG5cdHJldHVybiAoeW95byAmJiAofn4oY2xhbXBlZFRvdGFsVGltZSAvIGN5Y2xlRHVyYXRpb24pICYgMSkpID8gZHVyYXRpb24gLSB0aW1lIDogdGltZTtcbn0sXG4qL1xuX3Bvc3RBZGRDaGVja3MgPSBmdW5jdGlvbiBfcG9zdEFkZENoZWNrcyh0aW1lbGluZSwgY2hpbGQpIHtcbiAgdmFyIHQ7XG5cbiAgaWYgKGNoaWxkLl90aW1lIHx8IGNoaWxkLl9pbml0dGVkICYmICFjaGlsZC5fZHVyKSB7XG4gICAgLy9pbiBjYXNlLCBmb3IgZXhhbXBsZSwgdGhlIF9zdGFydCBpcyBtb3ZlZCBvbiBhIHR3ZWVuIHRoYXQgaGFzIGFscmVhZHkgcmVuZGVyZWQuIEltYWdpbmUgaXQncyBhdCBpdHMgZW5kIHN0YXRlLCB0aGVuIHRoZSBzdGFydFRpbWUgaXMgbW92ZWQgV0FZIGxhdGVyIChhZnRlciB0aGUgZW5kIG9mIHRoaXMgdGltZWxpbmUpLCBpdCBzaG91bGQgcmVuZGVyIGF0IGl0cyBiZWdpbm5pbmcuXG4gICAgdCA9IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRpbWVsaW5lLnJhd1RpbWUoKSwgY2hpbGQpO1xuXG4gICAgaWYgKCFjaGlsZC5fZHVyIHx8IF9jbGFtcCgwLCBjaGlsZC50b3RhbER1cmF0aW9uKCksIHQpIC0gY2hpbGQuX3RUaW1lID4gX3RpbnlOdW0pIHtcbiAgICAgIGNoaWxkLnJlbmRlcih0LCB0cnVlKTtcbiAgICB9XG4gIH0gLy9pZiB0aGUgdGltZWxpbmUgaGFzIGFscmVhZHkgZW5kZWQgYnV0IHRoZSBpbnNlcnRlZCB0d2Vlbi90aW1lbGluZSBleHRlbmRzIHRoZSBkdXJhdGlvbiwgd2Ugc2hvdWxkIGVuYWJsZSB0aGlzIHRpbWVsaW5lIGFnYWluIHNvIHRoYXQgaXQgcmVuZGVycyBwcm9wZXJseS4gV2Ugc2hvdWxkIGFsc28gYWxpZ24gdGhlIHBsYXloZWFkIHdpdGggdGhlIHBhcmVudCB0aW1lbGluZSdzIHdoZW4gYXBwcm9wcmlhdGUuXG5cblxuICBpZiAoX3VuY2FjaGUodGltZWxpbmUsIGNoaWxkKS5fZHAgJiYgdGltZWxpbmUuX2luaXR0ZWQgJiYgdGltZWxpbmUuX3RpbWUgPj0gdGltZWxpbmUuX2R1ciAmJiB0aW1lbGluZS5fdHMpIHtcbiAgICAvL2luIGNhc2UgYW55IG9mIHRoZSBhbmNlc3RvcnMgaGFkIGNvbXBsZXRlZCBidXQgc2hvdWxkIG5vdyBiZSBlbmFibGVkLi4uXG4gICAgaWYgKHRpbWVsaW5lLl9kdXIgPCB0aW1lbGluZS5kdXJhdGlvbigpKSB7XG4gICAgICB0ID0gdGltZWxpbmU7XG5cbiAgICAgIHdoaWxlICh0Ll9kcCkge1xuICAgICAgICB0LnJhd1RpbWUoKSA+PSAwICYmIHQudG90YWxUaW1lKHQuX3RUaW1lKTsgLy9tb3ZlcyB0aGUgdGltZWxpbmUgKHNoaWZ0cyBpdHMgc3RhcnRUaW1lKSBpZiBuZWNlc3NhcnksIGFuZCBhbHNvIGVuYWJsZXMgaXQuIElmIGl0J3MgY3VycmVudGx5IHplcm8sIHRob3VnaCwgaXQgbWF5IG5vdCBiZSBzY2hlZHVsZWQgdG8gcmVuZGVyIHVudGlsIGxhdGVyIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSBpdCB0byBhbGlnbiB3aXRoIHRoZSBjdXJyZW50IHBsYXloZWFkIHBvc2l0aW9uLiBPbmx5IG1vdmUgdG8gY2F0Y2ggdXAgd2l0aCB0aGUgcGxheWhlYWQuXG5cbiAgICAgICAgdCA9IHQuX2RwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLl96VGltZSA9IC1fdGlueU51bTsgLy8gaGVscHMgZW5zdXJlIHRoYXQgdGhlIG5leHQgcmVuZGVyKCkgd2lsbCBiZSBmb3JjZWQgKGNyb3NzaW5nU3RhcnQgPSB0cnVlIGluIHJlbmRlcigpKSwgZXZlbiBpZiB0aGUgZHVyYXRpb24gaGFzbid0IGNoYW5nZWQgKHdlJ3JlIGFkZGluZyBhIGNoaWxkIHdoaWNoIHdvdWxkIG5lZWQgdG8gZ2V0IHJlbmRlcmVkKS4gRGVmaW5pdGVseSBhbiBlZGdlIGNhc2UuIE5vdGU6IHdlIE1VU1QgZG8gdGhpcyBBRlRFUiB0aGUgbG9vcCBhYm92ZSB3aGVyZSB0aGUgdG90YWxUaW1lKCkgbWlnaHQgdHJpZ2dlciBhIHJlbmRlcigpIGJlY2F1c2UgdGhpcyBfYWRkVG9UaW1lbGluZSgpIG1ldGhvZCBnZXRzIGNhbGxlZCBmcm9tIHRoZSBBbmltYXRpb24gY29uc3RydWN0b3IsIEJFRk9SRSB0d2VlbnMgZXZlbiByZWNvcmQgdGhlaXIgdGFyZ2V0cywgZXRjLiBzbyB3ZSB3b3VsZG4ndCB3YW50IHRoaW5ncyB0byBnZXQgdHJpZ2dlcmVkIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgfVxufSxcbiAgICBfYWRkVG9UaW1lbGluZSA9IGZ1bmN0aW9uIF9hZGRUb1RpbWVsaW5lKHRpbWVsaW5lLCBjaGlsZCwgcG9zaXRpb24sIHNraXBDaGVja3MpIHtcbiAgY2hpbGQucGFyZW50ICYmIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgY2hpbGQuX3N0YXJ0ID0gX3JvdW5kUHJlY2lzZSgoX2lzTnVtYmVyKHBvc2l0aW9uKSA/IHBvc2l0aW9uIDogcG9zaXRpb24gfHwgdGltZWxpbmUgIT09IF9nbG9iYWxUaW1lbGluZSA/IF9wYXJzZVBvc2l0aW9uKHRpbWVsaW5lLCBwb3NpdGlvbiwgY2hpbGQpIDogdGltZWxpbmUuX3RpbWUpICsgY2hpbGQuX2RlbGF5KTtcbiAgY2hpbGQuX2VuZCA9IF9yb3VuZFByZWNpc2UoY2hpbGQuX3N0YXJ0ICsgKGNoaWxkLnRvdGFsRHVyYXRpb24oKSAvIE1hdGguYWJzKGNoaWxkLnRpbWVTY2FsZSgpKSB8fCAwKSk7XG5cbiAgX2FkZExpbmtlZExpc3RJdGVtKHRpbWVsaW5lLCBjaGlsZCwgXCJfZmlyc3RcIiwgXCJfbGFzdFwiLCB0aW1lbGluZS5fc29ydCA/IFwiX3N0YXJ0XCIgOiAwKTtcblxuICBfaXNGcm9tT3JGcm9tU3RhcnQoY2hpbGQpIHx8ICh0aW1lbGluZS5fcmVjZW50ID0gY2hpbGQpO1xuICBza2lwQ2hlY2tzIHx8IF9wb3N0QWRkQ2hlY2tzKHRpbWVsaW5lLCBjaGlsZCk7XG4gIHJldHVybiB0aW1lbGluZTtcbn0sXG4gICAgX3Njcm9sbFRyaWdnZXIgPSBmdW5jdGlvbiBfc2Nyb2xsVHJpZ2dlcihhbmltYXRpb24sIHRyaWdnZXIpIHtcbiAgcmV0dXJuIChfZ2xvYmFscy5TY3JvbGxUcmlnZ2VyIHx8IF9taXNzaW5nUGx1Z2luKFwic2Nyb2xsVHJpZ2dlclwiLCB0cmlnZ2VyKSkgJiYgX2dsb2JhbHMuU2Nyb2xsVHJpZ2dlci5jcmVhdGUodHJpZ2dlciwgYW5pbWF0aW9uKTtcbn0sXG4gICAgX2F0dGVtcHRJbml0VHdlZW4gPSBmdW5jdGlvbiBfYXR0ZW1wdEluaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lLCBmb3JjZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgX2luaXRUd2Vlbih0d2VlbiwgdG90YWxUaW1lKTtcblxuICBpZiAoIXR3ZWVuLl9pbml0dGVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoIWZvcmNlICYmIHR3ZWVuLl9wdCAmJiAodHdlZW4uX2R1ciAmJiB0d2Vlbi52YXJzLmxhenkgIT09IGZhbHNlIHx8ICF0d2Vlbi5fZHVyICYmIHR3ZWVuLnZhcnMubGF6eSkgJiYgX2xhc3RSZW5kZXJlZEZyYW1lICE9PSBfdGlja2VyLmZyYW1lKSB7XG4gICAgX2xhenlUd2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgICB0d2Vlbi5fbGF6eSA9IFt0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzXTtcbiAgICByZXR1cm4gMTtcbiAgfVxufSxcbiAgICBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0ID0gZnVuY3Rpb24gX3BhcmVudFBsYXloZWFkSXNCZWZvcmVTdGFydChfcmVmKSB7XG4gIHZhciBwYXJlbnQgPSBfcmVmLnBhcmVudDtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQuX3RzICYmIHBhcmVudC5faW5pdHRlZCAmJiAhcGFyZW50Ll9sb2NrICYmIChwYXJlbnQucmF3VGltZSgpIDwgMCB8fCBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHBhcmVudCkpO1xufSxcbiAgICAvLyBjaGVjayBwYXJlbnQncyBfbG9jayBiZWNhdXNlIHdoZW4gYSB0aW1lbGluZSByZXBlYXRzL3lveW9zIGFuZCBkb2VzIGl0cyBhcnRpZmljaWFsIHdyYXBwaW5nLCB3ZSBzaG91bGRuJ3QgZm9yY2UgdGhlIHJhdGlvIGJhY2sgdG8gMFxuX2lzRnJvbU9yRnJvbVN0YXJ0ID0gZnVuY3Rpb24gX2lzRnJvbU9yRnJvbVN0YXJ0KF9yZWYyKSB7XG4gIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcbiAgcmV0dXJuIGRhdGEgPT09IFwiaXNGcm9tU3RhcnRcIiB8fCBkYXRhID09PSBcImlzU3RhcnRcIjtcbn0sXG4gICAgX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuID0gZnVuY3Rpb24gX3JlbmRlclplcm9EdXJhdGlvblR3ZWVuKHR3ZWVuLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICB2YXIgcHJldlJhdGlvID0gdHdlZW4ucmF0aW8sXG4gICAgICByYXRpbyA9IHRvdGFsVGltZSA8IDAgfHwgIXRvdGFsVGltZSAmJiAoIXR3ZWVuLl9zdGFydCAmJiBfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0KHR3ZWVuKSAmJiAhKCF0d2Vlbi5faW5pdHRlZCAmJiBfaXNGcm9tT3JGcm9tU3RhcnQodHdlZW4pKSB8fCAodHdlZW4uX3RzIDwgMCB8fCB0d2Vlbi5fZHAuX3RzIDwgMCkgJiYgIV9pc0Zyb21PckZyb21TdGFydCh0d2VlbikpID8gMCA6IDEsXG4gICAgICAvLyBpZiB0aGUgdHdlZW4gb3IgaXRzIHBhcmVudCBpcyByZXZlcnNlZCBhbmQgdGhlIHRvdGFsVGltZSBpcyAwLCB3ZSBzaG91bGQgZ28gdG8gYSByYXRpbyBvZiAwLiBFZGdlIGNhc2U6IGlmIGEgZnJvbSgpIG9yIGZyb21UbygpIHN0YWdnZXIgdHdlZW4gaXMgcGxhY2VkIGxhdGVyIGluIGEgdGltZWxpbmUsIHRoZSBcInN0YXJ0QXRcIiB6ZXJvLWR1cmF0aW9uIHR3ZWVuIGNvdWxkIGluaXRpYWxseSByZW5kZXIgYXQgYSB0aW1lIHdoZW4gdGhlIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGlzIHRlY2huaWNhbGx5IEJFRk9SRSB3aGVyZSB0aGlzIHR3ZWVuIGlzLCBzbyBtYWtlIHN1cmUgdGhhdCBhbnkgXCJmcm9tXCIgYW5kIFwiZnJvbVRvXCIgc3RhcnRBdCB0d2VlbnMgYXJlIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lIGF0IGEgcmF0aW8gb2YgMS5cbiAgcmVwZWF0RGVsYXkgPSB0d2Vlbi5fckRlbGF5LFxuICAgICAgdFRpbWUgPSAwLFxuICAgICAgcHQsXG4gICAgICBpdGVyYXRpb24sXG4gICAgICBwcmV2SXRlcmF0aW9uO1xuXG4gIGlmIChyZXBlYXREZWxheSAmJiB0d2Vlbi5fcmVwZWF0KSB7XG4gICAgLy8gaW4gY2FzZSB0aGVyZSdzIGEgemVyby1kdXJhdGlvbiB0d2VlbiB0aGF0IGhhcyBhIHJlcGVhdCB3aXRoIGEgcmVwZWF0RGVsYXlcbiAgICB0VGltZSA9IF9jbGFtcCgwLCB0d2Vlbi5fdER1ciwgdG90YWxUaW1lKTtcbiAgICBpdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodFRpbWUsIHJlcGVhdERlbGF5KTtcbiAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHR3ZWVuLl90VGltZSwgcmVwZWF0RGVsYXkpO1xuICAgIHR3ZWVuLl95b3lvICYmIGl0ZXJhdGlvbiAmIDEgJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcblxuICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24pIHtcbiAgICAgIHByZXZSYXRpbyA9IDEgLSByYXRpbztcbiAgICAgIHR3ZWVuLnZhcnMucmVwZWF0UmVmcmVzaCAmJiB0d2Vlbi5faW5pdHRlZCAmJiB0d2Vlbi5pbnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhdGlvICE9PSBwcmV2UmF0aW8gfHwgZm9yY2UgfHwgdHdlZW4uX3pUaW1lID09PSBfdGlueU51bSB8fCAhdG90YWxUaW1lICYmIHR3ZWVuLl96VGltZSkge1xuICAgIGlmICghdHdlZW4uX2luaXR0ZWQgJiYgX2F0dGVtcHRJbml0VHdlZW4odHdlZW4sIHRvdGFsVGltZSwgZm9yY2UsIHN1cHByZXNzRXZlbnRzKSkge1xuICAgICAgLy8gaWYgd2UgcmVuZGVyIHRoZSB2ZXJ5IGJlZ2lubmluZyAodGltZSA9PSAwKSBvZiBhIGZyb21UbygpLCB3ZSBtdXN0IGZvcmNlIHRoZSByZW5kZXIgKG5vcm1hbCB0d2VlbnMgd291bGRuJ3QgbmVlZCB0byByZW5kZXIgYXQgYSB0aW1lIG9mIDAgd2hlbiB0aGUgcHJldlRpbWUgd2FzIGFsc28gMCkuIFRoaXMgaXMgYWxzbyBtYW5kYXRvcnkgdG8gbWFrZSBzdXJlIG92ZXJ3cml0aW5nIGtpY2tzIGluIGltbWVkaWF0ZWx5LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByZXZJdGVyYXRpb24gPSB0d2Vlbi5felRpbWU7XG4gICAgdHdlZW4uX3pUaW1lID0gdG90YWxUaW1lIHx8IChzdXBwcmVzc0V2ZW50cyA/IF90aW55TnVtIDogMCk7IC8vIHdoZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHR3ZWVuLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgc3VwcHJlc3NFdmVudHMgfHwgKHN1cHByZXNzRXZlbnRzID0gdG90YWxUaW1lICYmICFwcmV2SXRlcmF0aW9uKTsgLy8gaWYgaXQgd2FzIHJlbmRlcmVkIHByZXZpb3VzbHkgYXQgZXhhY3RseSAwIChfelRpbWUpIGFuZCBub3cgdGhlIHBsYXloZWFkIGlzIG1vdmluZyBhd2F5LCBET04nVCBmaXJlIGNhbGxiYWNrcyBvdGhlcndpc2UgdGhleSdsbCBzZWVtIGxpa2UgZHVwbGljYXRlcy5cblxuICAgIHR3ZWVuLnJhdGlvID0gcmF0aW87XG4gICAgdHdlZW4uX2Zyb20gJiYgKHJhdGlvID0gMSAtIHJhdGlvKTtcbiAgICB0d2Vlbi5fdGltZSA9IDA7XG4gICAgdHdlZW4uX3RUaW1lID0gdFRpbWU7XG4gICAgcHQgPSB0d2Vlbi5fcHQ7XG5cbiAgICB3aGlsZSAocHQpIHtcbiAgICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgICAgcHQgPSBwdC5fbmV4dDtcbiAgICB9XG5cbiAgICB0d2Vlbi5fc3RhcnRBdCAmJiB0b3RhbFRpbWUgPCAwICYmIHR3ZWVuLl9zdGFydEF0LnJlbmRlcih0b3RhbFRpbWUsIHRydWUsIHRydWUpO1xuICAgIHR3ZWVuLl9vblVwZGF0ZSAmJiAhc3VwcHJlc3NFdmVudHMgJiYgX2NhbGxiYWNrKHR3ZWVuLCBcIm9uVXBkYXRlXCIpO1xuICAgIHRUaW1lICYmIHR3ZWVuLl9yZXBlYXQgJiYgIXN1cHByZXNzRXZlbnRzICYmIHR3ZWVuLnBhcmVudCAmJiBfY2FsbGJhY2sodHdlZW4sIFwib25SZXBlYXRcIik7XG5cbiAgICBpZiAoKHRvdGFsVGltZSA+PSB0d2Vlbi5fdER1ciB8fCB0b3RhbFRpbWUgPCAwKSAmJiB0d2Vlbi5yYXRpbyA9PT0gcmF0aW8pIHtcbiAgICAgIHJhdGlvICYmIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLCAxKTtcblxuICAgICAgaWYgKCFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICBfY2FsbGJhY2sodHdlZW4sIHJhdGlvID8gXCJvbkNvbXBsZXRlXCIgOiBcIm9uUmV2ZXJzZUNvbXBsZXRlXCIsIHRydWUpO1xuXG4gICAgICAgIHR3ZWVuLl9wcm9tICYmIHR3ZWVuLl9wcm9tKCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKCF0d2Vlbi5felRpbWUpIHtcbiAgICB0d2Vlbi5felRpbWUgPSB0b3RhbFRpbWU7XG4gIH1cbn0sXG4gICAgX2ZpbmROZXh0UGF1c2VUd2VlbiA9IGZ1bmN0aW9uIF9maW5kTmV4dFBhdXNlVHdlZW4oYW5pbWF0aW9uLCBwcmV2VGltZSwgdGltZSkge1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHRpbWUgPiBwcmV2VGltZSkge1xuICAgIGNoaWxkID0gYW5pbWF0aW9uLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCAmJiBjaGlsZC5fc3RhcnQgPD0gdGltZSkge1xuICAgICAgaWYgKCFjaGlsZC5fZHVyICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiICYmIGNoaWxkLl9zdGFydCA+IHByZXZUaW1lKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBhbmltYXRpb24uX2xhc3Q7XG5cbiAgICB3aGlsZSAoY2hpbGQgJiYgY2hpbGQuX3N0YXJ0ID49IHRpbWUpIHtcbiAgICAgIGlmICghY2hpbGQuX2R1ciAmJiBjaGlsZC5kYXRhID09PSBcImlzUGF1c2VcIiAmJiBjaGlsZC5fc3RhcnQgPCBwcmV2VGltZSkge1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkID0gY2hpbGQuX3ByZXY7XG4gICAgfVxuICB9XG59LFxuICAgIF9zZXREdXJhdGlvbiA9IGZ1bmN0aW9uIF9zZXREdXJhdGlvbihhbmltYXRpb24sIGR1cmF0aW9uLCBza2lwVW5jYWNoZSwgbGVhdmVQbGF5aGVhZCkge1xuICB2YXIgcmVwZWF0ID0gYW5pbWF0aW9uLl9yZXBlYXQsXG4gICAgICBkdXIgPSBfcm91bmRQcmVjaXNlKGR1cmF0aW9uKSB8fCAwLFxuICAgICAgdG90YWxQcm9ncmVzcyA9IGFuaW1hdGlvbi5fdFRpbWUgLyBhbmltYXRpb24uX3REdXI7XG4gIHRvdGFsUHJvZ3Jlc3MgJiYgIWxlYXZlUGxheWhlYWQgJiYgKGFuaW1hdGlvbi5fdGltZSAqPSBkdXIgLyBhbmltYXRpb24uX2R1cik7XG4gIGFuaW1hdGlvbi5fZHVyID0gZHVyO1xuICBhbmltYXRpb24uX3REdXIgPSAhcmVwZWF0ID8gZHVyIDogcmVwZWF0IDwgMCA/IDFlMTAgOiBfcm91bmRQcmVjaXNlKGR1ciAqIChyZXBlYXQgKyAxKSArIGFuaW1hdGlvbi5fckRlbGF5ICogcmVwZWF0KTtcbiAgdG90YWxQcm9ncmVzcyAmJiAhbGVhdmVQbGF5aGVhZCA/IF9hbGlnblBsYXloZWFkKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl90VGltZSA9IGFuaW1hdGlvbi5fdER1ciAqIHRvdGFsUHJvZ3Jlc3MpIDogYW5pbWF0aW9uLnBhcmVudCAmJiBfc2V0RW5kKGFuaW1hdGlvbik7XG4gIHNraXBVbmNhY2hlIHx8IF91bmNhY2hlKGFuaW1hdGlvbi5wYXJlbnQsIGFuaW1hdGlvbik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKGFuaW1hdGlvbikge1xuICByZXR1cm4gYW5pbWF0aW9uIGluc3RhbmNlb2YgVGltZWxpbmUgPyBfdW5jYWNoZShhbmltYXRpb24pIDogX3NldER1cmF0aW9uKGFuaW1hdGlvbiwgYW5pbWF0aW9uLl9kdXIpO1xufSxcbiAgICBfemVyb1Bvc2l0aW9uID0ge1xuICBfc3RhcnQ6IDAsXG4gIGVuZFRpbWU6IF9lbXB0eUZ1bmMsXG4gIHRvdGFsRHVyYXRpb246IF9lbXB0eUZ1bmNcbn0sXG4gICAgX3BhcnNlUG9zaXRpb24gPSBmdW5jdGlvbiBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLCBwZXJjZW50QW5pbWF0aW9uKSB7XG4gIHZhciBsYWJlbHMgPSBhbmltYXRpb24ubGFiZWxzLFxuICAgICAgcmVjZW50ID0gYW5pbWF0aW9uLl9yZWNlbnQgfHwgX3plcm9Qb3NpdGlvbixcbiAgICAgIGNsaXBwZWREdXJhdGlvbiA9IGFuaW1hdGlvbi5kdXJhdGlvbigpID49IF9iaWdOdW0gPyByZWNlbnQuZW5kVGltZShmYWxzZSkgOiBhbmltYXRpb24uX2R1cixcbiAgICAgIC8vaW4gY2FzZSB0aGVyZSdzIGEgY2hpbGQgdGhhdCBpbmZpbml0ZWx5IHJlcGVhdHMsIHVzZXJzIGFsbW9zdCBuZXZlciBpbnRlbmQgZm9yIHRoZSBpbnNlcnRpb24gcG9pbnQgb2YgYSBuZXcgY2hpbGQgdG8gYmUgYmFzZWQgb24gYSBTVVBFUiBsb25nIHZhbHVlIGxpa2UgdGhhdCBzbyB3ZSBjbGlwIGl0IGFuZCBhc3N1bWUgdGhlIG1vc3QgcmVjZW50bHktYWRkZWQgY2hpbGQncyBlbmRUaW1lIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gIGksXG4gICAgICBvZmZzZXQsXG4gICAgICBpc1BlcmNlbnQ7XG5cbiAgaWYgKF9pc1N0cmluZyhwb3NpdGlvbikgJiYgKGlzTmFOKHBvc2l0aW9uKSB8fCBwb3NpdGlvbiBpbiBsYWJlbHMpKSB7XG4gICAgLy9pZiB0aGUgc3RyaW5nIGlzIGEgbnVtYmVyIGxpa2UgXCIxXCIsIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSdzIGEgbGFiZWwgd2l0aCB0aGF0IG5hbWUsIG90aGVyd2lzZSBpbnRlcnByZXQgaXQgYXMgYSBudW1iZXIgKGFic29sdXRlIHZhbHVlKS5cbiAgICBvZmZzZXQgPSBwb3NpdGlvbi5jaGFyQXQoMCk7XG4gICAgaXNQZXJjZW50ID0gcG9zaXRpb24uc3Vic3RyKC0xKSA9PT0gXCIlXCI7XG4gICAgaSA9IHBvc2l0aW9uLmluZGV4T2YoXCI9XCIpO1xuXG4gICAgaWYgKG9mZnNldCA9PT0gXCI8XCIgfHwgb2Zmc2V0ID09PSBcIj5cIikge1xuICAgICAgaSA+PSAwICYmIChwb3NpdGlvbiA9IHBvc2l0aW9uLnJlcGxhY2UoLz0vLCBcIlwiKSk7XG4gICAgICByZXR1cm4gKG9mZnNldCA9PT0gXCI8XCIgPyByZWNlbnQuX3N0YXJ0IDogcmVjZW50LmVuZFRpbWUocmVjZW50Ll9yZXBlYXQgPj0gMCkpICsgKHBhcnNlRmxvYXQocG9zaXRpb24uc3Vic3RyKDEpKSB8fCAwKSAqIChpc1BlcmNlbnQgPyAoaSA8IDAgPyByZWNlbnQgOiBwZXJjZW50QW5pbWF0aW9uKS50b3RhbER1cmF0aW9uKCkgLyAxMDAgOiAxKTtcbiAgICB9XG5cbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHBvc2l0aW9uIGluIGxhYmVscyB8fCAobGFiZWxzW3Bvc2l0aW9uXSA9IGNsaXBwZWREdXJhdGlvbik7XG4gICAgICByZXR1cm4gbGFiZWxzW3Bvc2l0aW9uXTtcbiAgICB9XG5cbiAgICBvZmZzZXQgPSBwYXJzZUZsb2F0KHBvc2l0aW9uLmNoYXJBdChpIC0gMSkgKyBwb3NpdGlvbi5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChpc1BlcmNlbnQgJiYgcGVyY2VudEFuaW1hdGlvbikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IC8gMTAwICogKF9pc0FycmF5KHBlcmNlbnRBbmltYXRpb24pID8gcGVyY2VudEFuaW1hdGlvblswXSA6IHBlcmNlbnRBbmltYXRpb24pLnRvdGFsRHVyYXRpb24oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaSA+IDEgPyBfcGFyc2VQb3NpdGlvbihhbmltYXRpb24sIHBvc2l0aW9uLnN1YnN0cigwLCBpIC0gMSksIHBlcmNlbnRBbmltYXRpb24pICsgb2Zmc2V0IDogY2xpcHBlZER1cmF0aW9uICsgb2Zmc2V0O1xuICB9XG5cbiAgcmV0dXJuIHBvc2l0aW9uID09IG51bGwgPyBjbGlwcGVkRHVyYXRpb24gOiArcG9zaXRpb247XG59LFxuICAgIF9jcmVhdGVUd2VlblR5cGUgPSBmdW5jdGlvbiBfY3JlYXRlVHdlZW5UeXBlKHR5cGUsIHBhcmFtcywgdGltZWxpbmUpIHtcbiAgdmFyIGlzTGVnYWN5ID0gX2lzTnVtYmVyKHBhcmFtc1sxXSksXG4gICAgICB2YXJzSW5kZXggPSAoaXNMZWdhY3kgPyAyIDogMSkgKyAodHlwZSA8IDIgPyAwIDogMSksXG4gICAgICB2YXJzID0gcGFyYW1zW3ZhcnNJbmRleF0sXG4gICAgICBpclZhcnMsXG4gICAgICBwYXJlbnQ7XG5cbiAgaXNMZWdhY3kgJiYgKHZhcnMuZHVyYXRpb24gPSBwYXJhbXNbMV0pO1xuICB2YXJzLnBhcmVudCA9IHRpbWVsaW5lO1xuXG4gIGlmICh0eXBlKSB7XG4gICAgaXJWYXJzID0gdmFycztcbiAgICBwYXJlbnQgPSB0aW1lbGluZTtcblxuICAgIHdoaWxlIChwYXJlbnQgJiYgIShcImltbWVkaWF0ZVJlbmRlclwiIGluIGlyVmFycykpIHtcbiAgICAgIC8vIGluaGVyaXRhbmNlIGhhc24ndCBoYXBwZW5lZCB5ZXQsIGJ1dCBzb21lb25lIG1heSBoYXZlIHNldCBhIGRlZmF1bHQgaW4gYW4gYW5jZXN0b3IgdGltZWxpbmUuIFdlIGNvdWxkIGRvIHZhcnMuaW1tZWRpYXRlUmVuZGVyID0gX2lzTm90RmFsc2UoX2luaGVyaXREZWZhdWx0cyh2YXJzKS5pbW1lZGlhdGVSZW5kZXIpIGJ1dCB0aGF0J2QgZXhhY3QgYSBzbGlnaHQgcGVyZm9ybWFuY2UgcGVuYWx0eSBiZWNhdXNlIF9pbmhlcml0RGVmYXVsdHMoKSBhbHNvIHJ1bnMgaW4gdGhlIFR3ZWVuIGNvbnN0cnVjdG9yLiBXZSdyZSBwYXlpbmcgYSBzbWFsbCBrYiBwcmljZSBoZXJlIHRvIGdhaW4gc3BlZWQuXG4gICAgICBpclZhcnMgPSBwYXJlbnQudmFycy5kZWZhdWx0cyB8fCB7fTtcbiAgICAgIHBhcmVudCA9IF9pc05vdEZhbHNlKHBhcmVudC52YXJzLmluaGVyaXQpICYmIHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFycy5pbW1lZGlhdGVSZW5kZXIgPSBfaXNOb3RGYWxzZShpclZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICB0eXBlIDwgMiA/IHZhcnMucnVuQmFja3dhcmRzID0gMSA6IHZhcnMuc3RhcnRBdCA9IHBhcmFtc1t2YXJzSW5kZXggLSAxXTsgLy8gXCJmcm9tXCIgdmFyc1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUd2VlbihwYXJhbXNbMF0sIHZhcnMsIHBhcmFtc1t2YXJzSW5kZXggKyAxXSk7XG59LFxuICAgIF9jb25kaXRpb25hbFJldHVybiA9IGZ1bmN0aW9uIF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuYykge1xuICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyBmdW5jKHZhbHVlKSA6IGZ1bmM7XG59LFxuICAgIF9jbGFtcCA9IGZ1bmN0aW9uIF9jbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbn0sXG4gICAgZ2V0VW5pdCA9IGZ1bmN0aW9uIGdldFVuaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgdmFyIHYgPSBfdW5pdEV4cC5leGVjKHZhbHVlKTtcblxuICByZXR1cm4gdiA/IHZhbHVlLnN1YnN0cih2LmluZGV4ICsgdlswXS5sZW5ndGgpIDogXCJcIjtcbn0sXG4gICAgLy8gbm90ZTogcHJvdGVjdCBhZ2FpbnN0IHBhZGRlZCBudW1iZXJzIGFzIHN0cmluZ3MsIGxpa2UgXCIxMDAuMTAwXCIuIFRoYXQgc2hvdWxkbid0IHJldHVybiBcIjAwXCIgYXMgdGhlIHVuaXQuIElmIGl0J3MgbnVtZXJpYywgcmV0dXJuIG5vIHVuaXQuXG5jbGFtcCA9IGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBfY2xhbXAobWluLCBtYXgsIHYpO1xuICB9KTtcbn0sXG4gICAgX3NsaWNlID0gW10uc2xpY2UsXG4gICAgX2lzQXJyYXlMaWtlID0gZnVuY3Rpb24gX2lzQXJyYXlMaWtlKHZhbHVlLCBub25FbXB0eSkge1xuICByZXR1cm4gdmFsdWUgJiYgX2lzT2JqZWN0KHZhbHVlKSAmJiBcImxlbmd0aFwiIGluIHZhbHVlICYmICghbm9uRW1wdHkgJiYgIXZhbHVlLmxlbmd0aCB8fCB2YWx1ZS5sZW5ndGggLSAxIGluIHZhbHVlICYmIF9pc09iamVjdCh2YWx1ZVswXSkpICYmICF2YWx1ZS5ub2RlVHlwZSAmJiB2YWx1ZSAhPT0gX3dpbjtcbn0sXG4gICAgX2ZsYXR0ZW4gPSBmdW5jdGlvbiBfZmxhdHRlbihhciwgbGVhdmVTdHJpbmdzLCBhY2N1bXVsYXRvcikge1xuICBpZiAoYWNjdW11bGF0b3IgPT09IHZvaWQgMCkge1xuICAgIGFjY3VtdWxhdG9yID0gW107XG4gIH1cblxuICByZXR1cm4gYXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX2FjY3VtdWxhdG9yO1xuXG4gICAgcmV0dXJuIF9pc1N0cmluZyh2YWx1ZSkgJiYgIWxlYXZlU3RyaW5ncyB8fCBfaXNBcnJheUxpa2UodmFsdWUsIDEpID8gKF9hY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yKS5wdXNoLmFwcGx5KF9hY2N1bXVsYXRvciwgdG9BcnJheSh2YWx1ZSkpIDogYWNjdW11bGF0b3IucHVzaCh2YWx1ZSk7XG4gIH0pIHx8IGFjY3VtdWxhdG9yO1xufSxcbiAgICAvL3Rha2VzIGFueSB2YWx1ZSBhbmQgcmV0dXJucyBhbiBhcnJheS4gSWYgaXQncyBhIHN0cmluZyAoYW5kIGxlYXZlU3RyaW5ncyBpc24ndCB0cnVlKSwgaXQnbGwgdXNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoKSBhbmQgY29udmVydCB0aGF0IHRvIGFuIGFycmF5LiBJdCdsbCBhbHNvIGFjY2VwdCBpdGVyYWJsZXMgbGlrZSBqUXVlcnkgb2JqZWN0cy5cbnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KHZhbHVlLCBzY29wZSwgbGVhdmVTdHJpbmdzKSB7XG4gIHJldHVybiBfaXNTdHJpbmcodmFsdWUpICYmICFsZWF2ZVN0cmluZ3MgJiYgKF9jb3JlSW5pdHRlZCB8fCAhX3dha2UoKSkgPyBfc2xpY2UuY2FsbCgoc2NvcGUgfHwgX2RvYykucXVlcnlTZWxlY3RvckFsbCh2YWx1ZSksIDApIDogX2lzQXJyYXkodmFsdWUpID8gX2ZsYXR0ZW4odmFsdWUsIGxlYXZlU3RyaW5ncykgOiBfaXNBcnJheUxpa2UodmFsdWUpID8gX3NsaWNlLmNhbGwodmFsdWUsIDApIDogdmFsdWUgPyBbdmFsdWVdIDogW107XG59LFxuICAgIHNlbGVjdG9yID0gZnVuY3Rpb24gc2VsZWN0b3IodmFsdWUpIHtcbiAgdmFsdWUgPSB0b0FycmF5KHZhbHVlKVswXSB8fCBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwge307XG4gIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgIHZhciBlbCA9IHZhbHVlLmN1cnJlbnQgfHwgdmFsdWUubmF0aXZlRWxlbWVudCB8fCB2YWx1ZTtcbiAgICByZXR1cm4gdG9BcnJheSh2LCBlbC5xdWVyeVNlbGVjdG9yQWxsID8gZWwgOiBlbCA9PT0gdmFsdWUgPyBfd2FybihcIkludmFsaWQgc2NvcGVcIikgfHwgX2RvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpIDogdmFsdWUpO1xuICB9O1xufSxcbiAgICBzaHVmZmxlID0gZnVuY3Rpb24gc2h1ZmZsZShhKSB7XG4gIHJldHVybiBhLnNvcnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAuNSAtIE1hdGgucmFuZG9tKCk7XG4gIH0pO1xufSxcbiAgICAvLyBhbHRlcm5hdGl2ZSB0aGF0J3MgYSBiaXQgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGRpdmVyc2UgYnV0IGJpZ2dlcjogICBmb3IgKGxldCBqLCB2LCBpID0gYS5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgdiA9IGFbLS1pXSwgYVtpXSA9IGFbal0sIGFbal0gPSB2KTsgcmV0dXJuIGE7XG4vL2ZvciBkaXN0cmlidXRpbmcgdmFsdWVzIGFjcm9zcyBhbiBhcnJheS4gQ2FuIGFjY2VwdCBhIG51bWJlciwgYSBmdW5jdGlvbiBvciAobW9zdCBjb21tb25seSkgYSBmdW5jdGlvbiB3aGljaCBjYW4gY29udGFpbiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6IHtiYXNlLCBhbW91bnQsIGZyb20sIGVhc2UsIGdyaWQsIGF4aXMsIGxlbmd0aCwgZWFjaH0uIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGV4cGVjdHMgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOiBpbmRleCwgdGFyZ2V0LCBhcnJheS4gUmVjb2duaXplcyB0aGUgZm9sbG93aW5nXG5kaXN0cmlidXRlID0gZnVuY3Rpb24gZGlzdHJpYnV0ZSh2KSB7XG4gIGlmIChfaXNGdW5jdGlvbih2KSkge1xuICAgIHJldHVybiB2O1xuICB9XG5cbiAgdmFyIHZhcnMgPSBfaXNPYmplY3QodikgPyB2IDoge1xuICAgIGVhY2g6IHZcbiAgfSxcbiAgICAgIC8vbjoxIGlzIGp1c3QgdG8gaW5kaWNhdGUgdiB3YXMgYSBudW1iZXI7IHdlIGxldmVyYWdlIHRoYXQgbGF0ZXIgdG8gc2V0IHYgYWNjb3JkaW5nIHRvIHRoZSBsZW5ndGggd2UgZ2V0LiBJZiBhIG51bWJlciBpcyBwYXNzZWQgaW4sIHdlIHRyZWF0IGl0IGxpa2UgdGhlIG9sZCBzdGFnZ2VyIHZhbHVlIHdoZXJlIDAuMSwgZm9yIGV4YW1wbGUsIHdvdWxkIG1lYW4gdGhhdCB0aGluZ3Mgd291bGQgYmUgZGlzdHJpYnV0ZWQgd2l0aCAwLjEgYmV0d2VlbiBlYWNoIGVsZW1lbnQgaW4gdGhlIGFycmF5IHJhdGhlciB0aGFuIGEgdG90YWwgXCJhbW91bnRcIiB0aGF0J3MgY2h1bmtlZCBvdXQgYW1vbmcgdGhlbSBhbGwuXG4gIGVhc2UgPSBfcGFyc2VFYXNlKHZhcnMuZWFzZSksXG4gICAgICBmcm9tID0gdmFycy5mcm9tIHx8IDAsXG4gICAgICBiYXNlID0gcGFyc2VGbG9hdCh2YXJzLmJhc2UpIHx8IDAsXG4gICAgICBjYWNoZSA9IHt9LFxuICAgICAgaXNEZWNpbWFsID0gZnJvbSA+IDAgJiYgZnJvbSA8IDEsXG4gICAgICByYXRpb3MgPSBpc05hTihmcm9tKSB8fCBpc0RlY2ltYWwsXG4gICAgICBheGlzID0gdmFycy5heGlzLFxuICAgICAgcmF0aW9YID0gZnJvbSxcbiAgICAgIHJhdGlvWSA9IGZyb207XG5cbiAgaWYgKF9pc1N0cmluZyhmcm9tKSkge1xuICAgIHJhdGlvWCA9IHJhdGlvWSA9IHtcbiAgICAgIGNlbnRlcjogLjUsXG4gICAgICBlZGdlczogLjUsXG4gICAgICBlbmQ6IDFcbiAgICB9W2Zyb21dIHx8IDA7XG4gIH0gZWxzZSBpZiAoIWlzRGVjaW1hbCAmJiByYXRpb3MpIHtcbiAgICByYXRpb1ggPSBmcm9tWzBdO1xuICAgIHJhdGlvWSA9IGZyb21bMV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGksIHRhcmdldCwgYSkge1xuICAgIHZhciBsID0gKGEgfHwgdmFycykubGVuZ3RoLFxuICAgICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSxcbiAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgZCxcbiAgICAgICAgaixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW4sXG4gICAgICAgIHdyYXBBdDtcblxuICAgIGlmICghZGlzdGFuY2VzKSB7XG4gICAgICB3cmFwQXQgPSB2YXJzLmdyaWQgPT09IFwiYXV0b1wiID8gMCA6ICh2YXJzLmdyaWQgfHwgWzEsIF9iaWdOdW1dKVsxXTtcblxuICAgICAgaWYgKCF3cmFwQXQpIHtcbiAgICAgICAgbWF4ID0gLV9iaWdOdW07XG5cbiAgICAgICAgd2hpbGUgKG1heCA8IChtYXggPSBhW3dyYXBBdCsrXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAmJiB3cmFwQXQgPCBsKSB7fVxuXG4gICAgICAgIHdyYXBBdC0tO1xuICAgICAgfVxuXG4gICAgICBkaXN0YW5jZXMgPSBjYWNoZVtsXSA9IFtdO1xuICAgICAgb3JpZ2luWCA9IHJhdGlvcyA/IE1hdGgubWluKHdyYXBBdCwgbCkgKiByYXRpb1ggLSAuNSA6IGZyb20gJSB3cmFwQXQ7XG4gICAgICBvcmlnaW5ZID0gcmF0aW9zID8gbCAqIHJhdGlvWSAvIHdyYXBBdCAtIC41IDogZnJvbSAvIHdyYXBBdCB8IDA7XG4gICAgICBtYXggPSAwO1xuICAgICAgbWluID0gX2JpZ051bTtcblxuICAgICAgZm9yIChqID0gMDsgaiA8IGw7IGorKykge1xuICAgICAgICB4ID0gaiAlIHdyYXBBdCAtIG9yaWdpblg7XG4gICAgICAgIHkgPSBvcmlnaW5ZIC0gKGogLyB3cmFwQXQgfCAwKTtcbiAgICAgICAgZGlzdGFuY2VzW2pdID0gZCA9ICFheGlzID8gX3NxcnQoeCAqIHggKyB5ICogeSkgOiBNYXRoLmFicyhheGlzID09PSBcInlcIiA/IHkgOiB4KTtcbiAgICAgICAgZCA+IG1heCAmJiAobWF4ID0gZCk7XG4gICAgICAgIGQgPCBtaW4gJiYgKG1pbiA9IGQpO1xuICAgICAgfVxuXG4gICAgICBmcm9tID09PSBcInJhbmRvbVwiICYmIHNodWZmbGUoZGlzdGFuY2VzKTtcbiAgICAgIGRpc3RhbmNlcy5tYXggPSBtYXggLSBtaW47XG4gICAgICBkaXN0YW5jZXMubWluID0gbWluO1xuICAgICAgZGlzdGFuY2VzLnYgPSBsID0gKHBhcnNlRmxvYXQodmFycy5hbW91bnQpIHx8IHBhcnNlRmxvYXQodmFycy5lYWNoKSAqICh3cmFwQXQgPiBsID8gbCAtIDEgOiAhYXhpcyA/IE1hdGgubWF4KHdyYXBBdCwgbCAvIHdyYXBBdCkgOiBheGlzID09PSBcInlcIiA/IGwgLyB3cmFwQXQgOiB3cmFwQXQpIHx8IDApICogKGZyb20gPT09IFwiZWRnZXNcIiA/IC0xIDogMSk7XG4gICAgICBkaXN0YW5jZXMuYiA9IGwgPCAwID8gYmFzZSAtIGwgOiBiYXNlO1xuICAgICAgZGlzdGFuY2VzLnUgPSBnZXRVbml0KHZhcnMuYW1vdW50IHx8IHZhcnMuZWFjaCkgfHwgMDsgLy91bml0XG5cbiAgICAgIGVhc2UgPSBlYXNlICYmIGwgPCAwID8gX2ludmVydEVhc2UoZWFzZSkgOiBlYXNlO1xuICAgIH1cblxuICAgIGwgPSAoZGlzdGFuY2VzW2ldIC0gZGlzdGFuY2VzLm1pbikgLyBkaXN0YW5jZXMubWF4IHx8IDA7XG4gICAgcmV0dXJuIF9yb3VuZFByZWNpc2UoZGlzdGFuY2VzLmIgKyAoZWFzZSA/IGVhc2UobCkgOiBsKSAqIGRpc3RhbmNlcy52KSArIGRpc3RhbmNlcy51OyAvL3JvdW5kIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kIGZsb2F0aW5nIHBvaW50IGVycm9yc1xuICB9O1xufSxcbiAgICBfcm91bmRNb2RpZmllciA9IGZ1bmN0aW9uIF9yb3VuZE1vZGlmaWVyKHYpIHtcbiAgLy9wYXNzIGluIDAuMSBnZXQgYSBmdW5jdGlvbiB0aGF0J2xsIHJvdW5kIHRvIHRoZSBuZWFyZXN0IHRlbnRoLCBvciA1IHRvIHJvdW5kIHRvIHRoZSBjbG9zZXN0IDUsIG9yIDAuMDAxIHRvIHRoZSBjbG9zZXN0IDEwMDB0aCwgZXRjLlxuICB2YXIgcCA9IE1hdGgucG93KDEwLCAoKHYgKyBcIlwiKS5zcGxpdChcIi5cIilbMV0gfHwgXCJcIikubGVuZ3RoKTsgLy90byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAobGlrZSAyNCAqIDAuMSA9PSAyLjQwMDAwMDAwMDAwMDAwMDQpLCB3ZSBjaG9wIG9mZiBhdCBhIHNwZWNpZmljIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyAobXVjaCBmYXN0ZXIgdGhhbiB0b0ZpeGVkKCkpXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgbiA9IE1hdGgucm91bmQocGFyc2VGbG9hdChyYXcpIC8gdikgKiB2ICogcDtcbiAgICByZXR1cm4gKG4gLSBuICUgMSkgLyBwICsgKF9pc051bWJlcihyYXcpID8gMCA6IGdldFVuaXQocmF3KSk7IC8vIG4gLSBuICUgMSByZXBsYWNlcyBNYXRoLmZsb29yKCkgaW4gb3JkZXIgdG8gaGFuZGxlIG5lZ2F0aXZlIHZhbHVlcyBwcm9wZXJseS4gRm9yIGV4YW1wbGUsIE1hdGguZmxvb3IoLTE1MC4wMDAwMDAwMDAwMDAwMykgaXMgMTUxIVxuICB9O1xufSxcbiAgICBzbmFwID0gZnVuY3Rpb24gc25hcChzbmFwVG8sIHZhbHVlKSB7XG4gIHZhciBpc0FycmF5ID0gX2lzQXJyYXkoc25hcFRvKSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGlzMkQ7XG5cbiAgaWYgKCFpc0FycmF5ICYmIF9pc09iamVjdChzbmFwVG8pKSB7XG4gICAgcmFkaXVzID0gaXNBcnJheSA9IHNuYXBUby5yYWRpdXMgfHwgX2JpZ051bTtcblxuICAgIGlmIChzbmFwVG8udmFsdWVzKSB7XG4gICAgICBzbmFwVG8gPSB0b0FycmF5KHNuYXBUby52YWx1ZXMpO1xuXG4gICAgICBpZiAoaXMyRCA9ICFfaXNOdW1iZXIoc25hcFRvWzBdKSkge1xuICAgICAgICByYWRpdXMgKj0gcmFkaXVzOyAvL3BlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBzbyB3ZSBkb24ndCBoYXZlIHRvIE1hdGguc3FydCgpIGluIHRoZSBsb29wLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzbmFwVG8gPSBfcm91bmRNb2RpZmllcihzbmFwVG8uaW5jcmVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCAhaXNBcnJheSA/IF9yb3VuZE1vZGlmaWVyKHNuYXBUbykgOiBfaXNGdW5jdGlvbihzbmFwVG8pID8gZnVuY3Rpb24gKHJhdykge1xuICAgIGlzMkQgPSBzbmFwVG8ocmF3KTtcbiAgICByZXR1cm4gTWF0aC5hYnMoaXMyRCAtIHJhdykgPD0gcmFkaXVzID8gaXMyRCA6IHJhdztcbiAgfSA6IGZ1bmN0aW9uIChyYXcpIHtcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy54IDogcmF3KSxcbiAgICAgICAgeSA9IHBhcnNlRmxvYXQoaXMyRCA/IHJhdy55IDogMCksXG4gICAgICAgIG1pbiA9IF9iaWdOdW0sXG4gICAgICAgIGNsb3Nlc3QgPSAwLFxuICAgICAgICBpID0gc25hcFRvLmxlbmd0aCxcbiAgICAgICAgZHgsXG4gICAgICAgIGR5O1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGlzMkQpIHtcbiAgICAgICAgZHggPSBzbmFwVG9baV0ueCAtIHg7XG4gICAgICAgIGR5ID0gc25hcFRvW2ldLnkgLSB5O1xuICAgICAgICBkeCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHggPSBNYXRoLmFicyhzbmFwVG9baV0gLSB4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGR4IDwgbWluKSB7XG4gICAgICAgIG1pbiA9IGR4O1xuICAgICAgICBjbG9zZXN0ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZXN0ID0gIXJhZGl1cyB8fCBtaW4gPD0gcmFkaXVzID8gc25hcFRvW2Nsb3Nlc3RdIDogcmF3O1xuICAgIHJldHVybiBpczJEIHx8IGNsb3Nlc3QgPT09IHJhdyB8fCBfaXNOdW1iZXIocmF3KSA/IGNsb3Nlc3QgOiBjbG9zZXN0ICsgZ2V0VW5pdChyYXcpO1xuICB9KTtcbn0sXG4gICAgcmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4LCByb3VuZGluZ0luY3JlbWVudCwgcmV0dXJuRnVuY3Rpb24pIHtcbiAgcmV0dXJuIF9jb25kaXRpb25hbFJldHVybihfaXNBcnJheShtaW4pID8gIW1heCA6IHJvdW5kaW5nSW5jcmVtZW50ID09PSB0cnVlID8gISEocm91bmRpbmdJbmNyZW1lbnQgPSAwKSA6ICFyZXR1cm5GdW5jdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfaXNBcnJheShtaW4pID8gbWluW35+KE1hdGgucmFuZG9tKCkgKiBtaW4ubGVuZ3RoKV0gOiAocm91bmRpbmdJbmNyZW1lbnQgPSByb3VuZGluZ0luY3JlbWVudCB8fCAxZS01KSAmJiAocmV0dXJuRnVuY3Rpb24gPSByb3VuZGluZ0luY3JlbWVudCA8IDEgPyBNYXRoLnBvdygxMCwgKHJvdW5kaW5nSW5jcmVtZW50ICsgXCJcIikubGVuZ3RoIC0gMikgOiAxKSAmJiBNYXRoLmZsb29yKE1hdGgucm91bmQoKG1pbiAtIHJvdW5kaW5nSW5jcmVtZW50IC8gMiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgcm91bmRpbmdJbmNyZW1lbnQgKiAuOTkpKSAvIHJvdW5kaW5nSW5jcmVtZW50KSAqIHJvdW5kaW5nSW5jcmVtZW50ICogcmV0dXJuRnVuY3Rpb24pIC8gcmV0dXJuRnVuY3Rpb247XG4gIH0pO1xufSxcbiAgICBwaXBlID0gZnVuY3Rpb24gcGlwZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmN0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoZnVuY3Rpb24gKHYsIGYpIHtcbiAgICAgIHJldHVybiBmKHYpO1xuICAgIH0sIHZhbHVlKTtcbiAgfTtcbn0sXG4gICAgdW5pdGl6ZSA9IGZ1bmN0aW9uIHVuaXRpemUoZnVuYywgdW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmMocGFyc2VGbG9hdCh2YWx1ZSkpICsgKHVuaXQgfHwgZ2V0VW5pdCh2YWx1ZSkpO1xuICB9O1xufSxcbiAgICBub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobWluLCBtYXgsIHZhbHVlKSB7XG4gIHJldHVybiBtYXBSYW5nZShtaW4sIG1heCwgMCwgMSwgdmFsdWUpO1xufSxcbiAgICBfd3JhcEFycmF5ID0gZnVuY3Rpb24gX3dyYXBBcnJheShhLCB3cmFwcGVyLCB2YWx1ZSkge1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gYVt+fndyYXBwZXIoaW5kZXgpXTtcbiAgfSk7XG59LFxuICAgIHdyYXAgPSBmdW5jdGlvbiB3cmFwKG1pbiwgbWF4LCB2YWx1ZSkge1xuICAvLyBOT1RFOiB3cmFwKCkgQ0FOTk9UIGJlIGFuIGFycm93IGZ1bmN0aW9uISBBIHZlcnkgb2RkIGNvbXBpbGluZyBidWcgY2F1c2VzIHByb2JsZW1zICh1bnJlbGF0ZWQgdG8gR1NBUCkuXG4gIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgcmV0dXJuIF9pc0FycmF5KG1pbikgPyBfd3JhcEFycmF5KG1pbiwgd3JhcCgwLCBtaW4ubGVuZ3RoKSwgbWF4KSA6IF9jb25kaXRpb25hbFJldHVybih2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIChyYW5nZSArICh2YWx1ZSAtIG1pbikgJSByYW5nZSkgJSByYW5nZSArIG1pbjtcbiAgfSk7XG59LFxuICAgIHdyYXBZb3lvID0gZnVuY3Rpb24gd3JhcFlveW8obWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciByYW5nZSA9IG1heCAtIG1pbixcbiAgICAgIHRvdGFsID0gcmFuZ2UgKiAyO1xuICByZXR1cm4gX2lzQXJyYXkobWluKSA/IF93cmFwQXJyYXkobWluLCB3cmFwWW95bygwLCBtaW4ubGVuZ3RoIC0gMSksIG1heCkgOiBfY29uZGl0aW9uYWxSZXR1cm4odmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gKHRvdGFsICsgKHZhbHVlIC0gbWluKSAlIHRvdGFsKSAlIHRvdGFsIHx8IDA7XG4gICAgcmV0dXJuIG1pbiArICh2YWx1ZSA+IHJhbmdlID8gdG90YWwgLSB2YWx1ZSA6IHZhbHVlKTtcbiAgfSk7XG59LFxuICAgIF9yZXBsYWNlUmFuZG9tID0gZnVuY3Rpb24gX3JlcGxhY2VSYW5kb20odmFsdWUpIHtcbiAgLy9yZXBsYWNlcyBhbGwgb2NjdXJyZW5jZXMgb2YgcmFuZG9tKC4uLikgaW4gYSBzdHJpbmcgd2l0aCB0aGUgY2FsY3VsYXRlZCByYW5kb20gdmFsdWUuIGNhbiBiZSBhIHJhbmdlIGxpa2UgcmFuZG9tKC0xMDAsIDEwMCwgNSkgb3IgYW4gYXJyYXkgbGlrZSByYW5kb20oWzAsIDEwMCwgNTAwXSlcbiAgdmFyIHByZXYgPSAwLFxuICAgICAgcyA9IFwiXCIsXG4gICAgICBpLFxuICAgICAgbnVtcyxcbiAgICAgIGVuZCxcbiAgICAgIGlzQXJyYXk7XG5cbiAgd2hpbGUgKH4oaSA9IHZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIsIHByZXYpKSkge1xuICAgIGVuZCA9IHZhbHVlLmluZGV4T2YoXCIpXCIsIGkpO1xuICAgIGlzQXJyYXkgPSB2YWx1ZS5jaGFyQXQoaSArIDcpID09PSBcIltcIjtcbiAgICBudW1zID0gdmFsdWUuc3Vic3RyKGkgKyA3LCBlbmQgLSBpIC0gNykubWF0Y2goaXNBcnJheSA/IF9kZWxpbWl0ZWRWYWx1ZUV4cCA6IF9zdHJpY3ROdW1FeHApO1xuICAgIHMgKz0gdmFsdWUuc3Vic3RyKHByZXYsIGkgLSBwcmV2KSArIHJhbmRvbShpc0FycmF5ID8gbnVtcyA6ICtudW1zWzBdLCBpc0FycmF5ID8gMCA6ICtudW1zWzFdLCArbnVtc1syXSB8fCAxZS01KTtcbiAgICBwcmV2ID0gZW5kICsgMTtcbiAgfVxuXG4gIHJldHVybiBzICsgdmFsdWUuc3Vic3RyKHByZXYsIHZhbHVlLmxlbmd0aCAtIHByZXYpO1xufSxcbiAgICBtYXBSYW5nZSA9IGZ1bmN0aW9uIG1hcFJhbmdlKGluTWluLCBpbk1heCwgb3V0TWluLCBvdXRNYXgsIHZhbHVlKSB7XG4gIHZhciBpblJhbmdlID0gaW5NYXggLSBpbk1pbixcbiAgICAgIG91dFJhbmdlID0gb3V0TWF4IC0gb3V0TWluO1xuICByZXR1cm4gX2NvbmRpdGlvbmFsUmV0dXJuKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gb3V0TWluICsgKCh2YWx1ZSAtIGluTWluKSAvIGluUmFuZ2UgKiBvdXRSYW5nZSB8fCAwKTtcbiAgfSk7XG59LFxuICAgIGludGVycG9sYXRlID0gZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RhcnQsIGVuZCwgcHJvZ3Jlc3MsIG11dGF0ZSkge1xuICB2YXIgZnVuYyA9IGlzTmFOKHN0YXJ0ICsgZW5kKSA/IDAgOiBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAoMSAtIHApICogc3RhcnQgKyBwICogZW5kO1xuICB9O1xuXG4gIGlmICghZnVuYykge1xuICAgIHZhciBpc1N0cmluZyA9IF9pc1N0cmluZyhzdGFydCksXG4gICAgICAgIG1hc3RlciA9IHt9LFxuICAgICAgICBwLFxuICAgICAgICBpLFxuICAgICAgICBpbnRlcnBvbGF0b3JzLFxuICAgICAgICBsLFxuICAgICAgICBpbDtcblxuICAgIHByb2dyZXNzID09PSB0cnVlICYmIChtdXRhdGUgPSAxKSAmJiAocHJvZ3Jlc3MgPSBudWxsKTtcblxuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgc3RhcnQgPSB7XG4gICAgICAgIHA6IHN0YXJ0XG4gICAgICB9O1xuICAgICAgZW5kID0ge1xuICAgICAgICBwOiBlbmRcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChfaXNBcnJheShzdGFydCkgJiYgIV9pc0FycmF5KGVuZCkpIHtcbiAgICAgIGludGVycG9sYXRvcnMgPSBbXTtcbiAgICAgIGwgPSBzdGFydC5sZW5ndGg7XG4gICAgICBpbCA9IGwgLSAyO1xuXG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGludGVycG9sYXRvcnMucHVzaChpbnRlcnBvbGF0ZShzdGFydFtpIC0gMV0sIHN0YXJ0W2ldKSk7IC8vYnVpbGQgdGhlIGludGVycG9sYXRvcnMgdXAgZnJvbnQgYXMgYSBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gc28gdGhhdCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQgbWFueSB0aW1lcywgaXQgY2FuIGp1c3QgcmV1c2UgdGhlbS5cbiAgICAgIH1cblxuICAgICAgbC0tO1xuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHAgKj0gbDtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbihpbCwgfn5wKTtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcnNbaV0ocCAtIGkpO1xuICAgICAgfTtcblxuICAgICAgcHJvZ3Jlc3MgPSBlbmQ7XG4gICAgfSBlbHNlIGlmICghbXV0YXRlKSB7XG4gICAgICBzdGFydCA9IF9tZXJnZShfaXNBcnJheShzdGFydCkgPyBbXSA6IHt9LCBzdGFydCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnRlcnBvbGF0b3JzKSB7XG4gICAgICBmb3IgKHAgaW4gZW5kKSB7XG4gICAgICAgIF9hZGRQcm9wVHdlZW4uY2FsbChtYXN0ZXIsIHN0YXJ0LCBwLCBcImdldFwiLCBlbmRbcF0pO1xuICAgICAgfVxuXG4gICAgICBmdW5jID0gZnVuY3Rpb24gZnVuYyhwKSB7XG4gICAgICAgIHJldHVybiBfcmVuZGVyUHJvcFR3ZWVucyhwLCBtYXN0ZXIpIHx8IChpc1N0cmluZyA/IHN0YXJ0LnAgOiBzdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfY29uZGl0aW9uYWxSZXR1cm4ocHJvZ3Jlc3MsIGZ1bmMpO1xufSxcbiAgICBfZ2V0TGFiZWxJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIF9nZXRMYWJlbEluRGlyZWN0aW9uKHRpbWVsaW5lLCBmcm9tVGltZSwgYmFja3dhcmQpIHtcbiAgLy91c2VkIGZvciBuZXh0TGFiZWwoKSBhbmQgcHJldmlvdXNMYWJlbCgpXG4gIHZhciBsYWJlbHMgPSB0aW1lbGluZS5sYWJlbHMsXG4gICAgICBtaW4gPSBfYmlnTnVtLFxuICAgICAgcCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgbGFiZWw7XG5cbiAgZm9yIChwIGluIGxhYmVscykge1xuICAgIGRpc3RhbmNlID0gbGFiZWxzW3BdIC0gZnJvbVRpbWU7XG5cbiAgICBpZiAoZGlzdGFuY2UgPCAwID09PSAhIWJhY2t3YXJkICYmIGRpc3RhbmNlICYmIG1pbiA+IChkaXN0YW5jZSA9IE1hdGguYWJzKGRpc3RhbmNlKSkpIHtcbiAgICAgIGxhYmVsID0gcDtcbiAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn0sXG4gICAgX2NhbGxiYWNrID0gZnVuY3Rpb24gX2NhbGxiYWNrKGFuaW1hdGlvbiwgdHlwZSwgZXhlY3V0ZUxhenlGaXJzdCkge1xuICB2YXIgdiA9IGFuaW1hdGlvbi52YXJzLFxuICAgICAgY2FsbGJhY2sgPSB2W3R5cGVdLFxuICAgICAgcGFyYW1zLFxuICAgICAgc2NvcGU7XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBhcmFtcyA9IHZbdHlwZSArIFwiUGFyYW1zXCJdO1xuICBzY29wZSA9IHYuY2FsbGJhY2tTY29wZSB8fCBhbmltYXRpb247XG4gIGV4ZWN1dGVMYXp5Rmlyc3QgJiYgX2xhenlUd2VlbnMubGVuZ3RoICYmIF9sYXp5UmVuZGVyKCk7IC8vaW4gY2FzZSByZW5kZXJpbmcgY2F1c2VkIGFueSB0d2VlbnMgdG8gbGF6eS1pbml0LCB3ZSBzaG91bGQgcmVuZGVyIHRoZW0gYmVjYXVzZSB0eXBpY2FsbHkgd2hlbiBhIHRpbWVsaW5lIGZpbmlzaGVzLCB1c2VycyBleHBlY3QgdGhpbmdzIHRvIGhhdmUgcmVuZGVyZWQgZnVsbHkuIEltYWdpbmUgYW4gb25VcGRhdGUgb24gYSB0aW1lbGluZSB0aGF0IHJlcG9ydHMvY2hlY2tzIHR3ZWVuZWQgdmFsdWVzLlxuXG4gIHJldHVybiBwYXJhbXMgPyBjYWxsYmFjay5hcHBseShzY29wZSwgcGFyYW1zKSA6IGNhbGxiYWNrLmNhbGwoc2NvcGUpO1xufSxcbiAgICBfaW50ZXJydXB0ID0gZnVuY3Rpb24gX2ludGVycnVwdChhbmltYXRpb24pIHtcbiAgX3JlbW92ZUZyb21QYXJlbnQoYW5pbWF0aW9uKTtcblxuICBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlciAmJiBhbmltYXRpb24uc2Nyb2xsVHJpZ2dlci5raWxsKGZhbHNlKTtcbiAgYW5pbWF0aW9uLnByb2dyZXNzKCkgPCAxICYmIF9jYWxsYmFjayhhbmltYXRpb24sIFwib25JbnRlcnJ1cHRcIik7XG4gIHJldHVybiBhbmltYXRpb247XG59LFxuICAgIF9xdWlja1R3ZWVuLFxuICAgIF9jcmVhdGVQbHVnaW4gPSBmdW5jdGlvbiBfY3JlYXRlUGx1Z2luKGNvbmZpZykge1xuICBjb25maWcgPSAhY29uZmlnLm5hbWUgJiYgY29uZmlnW1wiZGVmYXVsdFwiXSB8fCBjb25maWc7IC8vVU1EIHBhY2thZ2luZyB3cmFwcyB0aGluZ3Mgb2RkbHksIHNvIGZvciBleGFtcGxlIE1vdGlvblBhdGhIZWxwZXIgYmVjb21lcyB7TW90aW9uUGF0aEhlbHBlcjpNb3Rpb25QYXRoSGVscGVyLCBkZWZhdWx0Ok1vdGlvblBhdGhIZWxwZXJ9LlxuXG4gIHZhciBuYW1lID0gY29uZmlnLm5hbWUsXG4gICAgICBpc0Z1bmMgPSBfaXNGdW5jdGlvbihjb25maWcpLFxuICAgICAgUGx1Z2luID0gbmFtZSAmJiAhaXNGdW5jICYmIGNvbmZpZy5pbml0ID8gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3Byb3BzID0gW107XG4gIH0gOiBjb25maWcsXG4gICAgICAvL2luIGNhc2Ugc29tZW9uZSBwYXNzZXMgaW4gYW4gb2JqZWN0IHRoYXQncyBub3QgYSBwbHVnaW4sIGxpa2UgQ3VzdG9tRWFzZVxuICBpbnN0YW5jZURlZmF1bHRzID0ge1xuICAgIGluaXQ6IF9lbXB0eUZ1bmMsXG4gICAgcmVuZGVyOiBfcmVuZGVyUHJvcFR3ZWVucyxcbiAgICBhZGQ6IF9hZGRQcm9wVHdlZW4sXG4gICAga2lsbDogX2tpbGxQcm9wVHdlZW5zT2YsXG4gICAgbW9kaWZpZXI6IF9hZGRQbHVnaW5Nb2RpZmllcixcbiAgICByYXdWYXJzOiAwXG4gIH0sXG4gICAgICBzdGF0aWNzID0ge1xuICAgIHRhcmdldFRlc3Q6IDAsXG4gICAgZ2V0OiAwLFxuICAgIGdldFNldHRlcjogX2dldFNldHRlcixcbiAgICBhbGlhc2VzOiB7fSxcbiAgICByZWdpc3RlcjogMFxuICB9O1xuXG4gIF93YWtlKCk7XG5cbiAgaWYgKGNvbmZpZyAhPT0gUGx1Z2luKSB7XG4gICAgaWYgKF9wbHVnaW5zW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgX3NldERlZmF1bHRzKFBsdWdpbiwgX3NldERlZmF1bHRzKF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgaW5zdGFuY2VEZWZhdWx0cyksIHN0YXRpY3MpKTsgLy9zdGF0aWMgbWV0aG9kc1xuXG5cbiAgICBfbWVyZ2UoUGx1Z2luLnByb3RvdHlwZSwgX21lcmdlKGluc3RhbmNlRGVmYXVsdHMsIF9jb3B5RXhjbHVkaW5nKGNvbmZpZywgc3RhdGljcykpKTsgLy9pbnN0YW5jZSBtZXRob2RzXG5cblxuICAgIF9wbHVnaW5zW1BsdWdpbi5wcm9wID0gbmFtZV0gPSBQbHVnaW47XG5cbiAgICBpZiAoY29uZmlnLnRhcmdldFRlc3QpIHtcbiAgICAgIF9oYXJuZXNzUGx1Z2lucy5wdXNoKFBsdWdpbik7XG5cbiAgICAgIF9yZXNlcnZlZFByb3BzW25hbWVdID0gMTtcbiAgICB9XG5cbiAgICBuYW1lID0gKG5hbWUgPT09IFwiY3NzXCIgPyBcIkNTU1wiIDogbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpKSArIFwiUGx1Z2luXCI7IC8vZm9yIHRoZSBnbG9iYWwgbmFtZS4gXCJtb3Rpb25QYXRoXCIgc2hvdWxkIGJlY29tZSBNb3Rpb25QYXRoUGx1Z2luXG4gIH1cblxuICBfYWRkR2xvYmFsKG5hbWUsIFBsdWdpbik7XG5cbiAgY29uZmlnLnJlZ2lzdGVyICYmIGNvbmZpZy5yZWdpc3Rlcihnc2FwLCBQbHVnaW4sIFByb3BUd2Vlbik7XG59LFxuXG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENPTE9SU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXzI1NSA9IDI1NSxcbiAgICBfY29sb3JMb29rdXAgPSB7XG4gIGFxdWE6IFswLCBfMjU1LCBfMjU1XSxcbiAgbGltZTogWzAsIF8yNTUsIDBdLFxuICBzaWx2ZXI6IFsxOTIsIDE5MiwgMTkyXSxcbiAgYmxhY2s6IFswLCAwLCAwXSxcbiAgbWFyb29uOiBbMTI4LCAwLCAwXSxcbiAgdGVhbDogWzAsIDEyOCwgMTI4XSxcbiAgYmx1ZTogWzAsIDAsIF8yNTVdLFxuICBuYXZ5OiBbMCwgMCwgMTI4XSxcbiAgd2hpdGU6IFtfMjU1LCBfMjU1LCBfMjU1XSxcbiAgb2xpdmU6IFsxMjgsIDEyOCwgMF0sXG4gIHllbGxvdzogW18yNTUsIF8yNTUsIDBdLFxuICBvcmFuZ2U6IFtfMjU1LCAxNjUsIDBdLFxuICBncmF5OiBbMTI4LCAxMjgsIDEyOF0sXG4gIHB1cnBsZTogWzEyOCwgMCwgMTI4XSxcbiAgZ3JlZW46IFswLCAxMjgsIDBdLFxuICByZWQ6IFtfMjU1LCAwLCAwXSxcbiAgcGluazogW18yNTUsIDE5MiwgMjAzXSxcbiAgY3lhbjogWzAsIF8yNTUsIF8yNTVdLFxuICB0cmFuc3BhcmVudDogW18yNTUsIF8yNTUsIF8yNTUsIDBdXG59LFxuICAgIF9odWUgPSBmdW5jdGlvbiBfaHVlKGgsIG0xLCBtMikge1xuICBoID0gaCA8IDAgPyBoICsgMSA6IGggPiAxID8gaCAtIDEgOiBoO1xuICByZXR1cm4gKGggKiA2IDwgMSA/IG0xICsgKG0yIC0gbTEpICogaCAqIDYgOiBoIDwgLjUgPyBtMiA6IGggKiAzIDwgMiA/IG0xICsgKG0yIC0gbTEpICogKDIgLyAzIC0gaCkgKiA2IDogbTEpICogXzI1NSArIC41IHwgMDtcbn0sXG4gICAgc3BsaXRDb2xvciA9IGZ1bmN0aW9uIHNwbGl0Q29sb3IodiwgdG9IU0wsIGZvcmNlQWxwaGEpIHtcbiAgdmFyIGEgPSAhdiA/IF9jb2xvckxvb2t1cC5ibGFjayA6IF9pc051bWJlcih2KSA/IFt2ID4+IDE2LCB2ID4+IDggJiBfMjU1LCB2ICYgXzI1NV0gOiAwLFxuICAgICAgcixcbiAgICAgIGcsXG4gICAgICBiLFxuICAgICAgaCxcbiAgICAgIHMsXG4gICAgICBsLFxuICAgICAgbWF4LFxuICAgICAgbWluLFxuICAgICAgZCxcbiAgICAgIHdhc0hTTDtcblxuICBpZiAoIWEpIHtcbiAgICBpZiAodi5zdWJzdHIoLTEpID09PSBcIixcIikge1xuICAgICAgLy9zb21ldGltZXMgYSB0cmFpbGluZyBjb21tYSBpcyBpbmNsdWRlZCBhbmQgd2Ugc2hvdWxkIGNob3AgaXQgb2ZmICh0eXBpY2FsbHkgZnJvbSBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHZhbHVlcyBsaWtlIGEgdGV4dFNoYWRvdzpcIjJweCAycHggMnB4IGJsdWUsIDVweCA1cHggNXB4IHJnYigyNTUsMCwwKVwiIC0gaW4gdGhpcyBleGFtcGxlIFwiYmx1ZSxcIiBoYXMgYSB0cmFpbGluZyBjb21tYS4gV2UgY291bGQgc3RyaXAgaXQgb3V0IGluc2lkZSBwYXJzZUNvbXBsZXgoKSBidXQgd2UnZCBuZWVkIHRvIGRvIGl0IHRvIHRoZSBiZWdpbm5pbmcgYW5kIGVuZGluZyB2YWx1ZXMgcGx1cyBpdCB3b3VsZG4ndCBwcm92aWRlIHByb3RlY3Rpb24gZnJvbSBvdGhlciBwb3RlbnRpYWwgc2NlbmFyaW9zIGxpa2UgaWYgdGhlIHVzZXIgcGFzc2VzIGluIGEgc2ltaWxhciB2YWx1ZS5cbiAgICAgIHYgPSB2LnN1YnN0cigwLCB2Lmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChfY29sb3JMb29rdXBbdl0pIHtcbiAgICAgIGEgPSBfY29sb3JMb29rdXBbdl07XG4gICAgfSBlbHNlIGlmICh2LmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgIGlmICh2Lmxlbmd0aCA8IDYpIHtcbiAgICAgICAgLy9mb3Igc2hvcnRoYW5kIGxpa2UgIzlGMCBvciAjOUYwRiAoY291bGQgaGF2ZSBhbHBoYSlcbiAgICAgICAgciA9IHYuY2hhckF0KDEpO1xuICAgICAgICBnID0gdi5jaGFyQXQoMik7XG4gICAgICAgIGIgPSB2LmNoYXJBdCgzKTtcbiAgICAgICAgdiA9IFwiI1wiICsgciArIHIgKyBnICsgZyArIGIgKyBiICsgKHYubGVuZ3RoID09PSA1ID8gdi5jaGFyQXQoNCkgKyB2LmNoYXJBdCg0KSA6IFwiXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodi5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgLy8gaGV4IHdpdGggYWxwaGEsIGxpa2UgI2ZkNWU1M2ZmXG4gICAgICAgIGEgPSBwYXJzZUludCh2LnN1YnN0cigxLCA2KSwgMTYpO1xuICAgICAgICByZXR1cm4gW2EgPj4gMTYsIGEgPj4gOCAmIF8yNTUsIGEgJiBfMjU1LCBwYXJzZUludCh2LnN1YnN0cig3KSwgMTYpIC8gMjU1XTtcbiAgICAgIH1cblxuICAgICAgdiA9IHBhcnNlSW50KHYuc3Vic3RyKDEpLCAxNik7XG4gICAgICBhID0gW3YgPj4gMTYsIHYgPj4gOCAmIF8yNTUsIHYgJiBfMjU1XTtcbiAgICB9IGVsc2UgaWYgKHYuc3Vic3RyKDAsIDMpID09PSBcImhzbFwiKSB7XG4gICAgICBhID0gd2FzSFNMID0gdi5tYXRjaChfc3RyaWN0TnVtRXhwKTtcblxuICAgICAgaWYgKCF0b0hTTCkge1xuICAgICAgICBoID0gK2FbMF0gJSAzNjAgLyAzNjA7XG4gICAgICAgIHMgPSArYVsxXSAvIDEwMDtcbiAgICAgICAgbCA9ICthWzJdIC8gMTAwO1xuICAgICAgICBnID0gbCA8PSAuNSA/IGwgKiAocyArIDEpIDogbCArIHMgLSBsICogcztcbiAgICAgICAgciA9IGwgKiAyIC0gZztcbiAgICAgICAgYS5sZW5ndGggPiAzICYmIChhWzNdICo9IDEpOyAvL2Nhc3QgYXMgbnVtYmVyXG5cbiAgICAgICAgYVswXSA9IF9odWUoaCArIDEgLyAzLCByLCBnKTtcbiAgICAgICAgYVsxXSA9IF9odWUoaCwgciwgZyk7XG4gICAgICAgIGFbMl0gPSBfaHVlKGggLSAxIC8gMywgciwgZyk7XG4gICAgICB9IGVsc2UgaWYgKH52LmluZGV4T2YoXCI9XCIpKSB7XG4gICAgICAgIC8vaWYgcmVsYXRpdmUgdmFsdWVzIGFyZSBmb3VuZCwganVzdCByZXR1cm4gdGhlIHJhdyBzdHJpbmdzIHdpdGggdGhlIHJlbGF0aXZlIHByZWZpeGVzIGluIHBsYWNlLlxuICAgICAgICBhID0gdi5tYXRjaChfbnVtRXhwKTtcbiAgICAgICAgZm9yY2VBbHBoYSAmJiBhLmxlbmd0aCA8IDQgJiYgKGFbM10gPSAxKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGEgPSB2Lm1hdGNoKF9zdHJpY3ROdW1FeHApIHx8IF9jb2xvckxvb2t1cC50cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBhID0gYS5tYXAoTnVtYmVyKTtcbiAgfVxuXG4gIGlmICh0b0hTTCAmJiAhd2FzSFNMKSB7XG4gICAgciA9IGFbMF0gLyBfMjU1O1xuICAgIGcgPSBhWzFdIC8gXzI1NTtcbiAgICBiID0gYVsyXSAvIF8yNTU7XG4gICAgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgbCA9IChtYXggKyBtaW4pIC8gMjtcblxuICAgIGlmIChtYXggPT09IG1pbikge1xuICAgICAgaCA9IHMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IGwgPiAwLjUgPyBkIC8gKDIgLSBtYXggLSBtaW4pIDogZCAvIChtYXggKyBtaW4pO1xuICAgICAgaCA9IG1heCA9PT0gciA/IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApIDogbWF4ID09PSBnID8gKGIgLSByKSAvIGQgKyAyIDogKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgaCAqPSA2MDtcbiAgICB9XG5cbiAgICBhWzBdID0gfn4oaCArIC41KTtcbiAgICBhWzFdID0gfn4ocyAqIDEwMCArIC41KTtcbiAgICBhWzJdID0gfn4obCAqIDEwMCArIC41KTtcbiAgfVxuXG4gIGZvcmNlQWxwaGEgJiYgYS5sZW5ndGggPCA0ICYmIChhWzNdID0gMSk7XG4gIHJldHVybiBhO1xufSxcbiAgICBfY29sb3JPcmRlckRhdGEgPSBmdW5jdGlvbiBfY29sb3JPcmRlckRhdGEodikge1xuICAvLyBzdHJpcHMgb3V0IHRoZSBjb2xvcnMgZnJvbSB0aGUgc3RyaW5nLCBmaW5kcyBhbGwgdGhlIG51bWVyaWMgc2xvdHMgKHdpdGggdW5pdHMpIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRob3NlLiBUaGUgQXJyYXkgYWxzbyBoYXMgYSBcImNcIiBwcm9wZXJ0eSB3aGljaCBpcyBhbiBBcnJheSBvZiB0aGUgaW5kZXggdmFsdWVzIHdoZXJlIHRoZSBjb2xvcnMgYmVsb25nLiBUaGlzIGlzIHRvIGhlbHAgd29yayBhcm91bmQgaXNzdWVzIHdoZXJlIHRoZXJlJ3MgYSBtaXMtbWF0Y2hlZCBvcmRlciBvZiBjb2xvci9udW1lcmljIGRhdGEgbGlrZSBkcm9wLXNoYWRvdygjZjAwIDBweCAxcHggMnB4KSBhbmQgZHJvcC1zaGFkb3coMHggMXB4IDJweCAjZjAwKS4gVGhpcyBpcyBiYXNpY2FsbHkgYSBoZWxwZXIgZnVuY3Rpb24gdXNlZCBpbiBfZm9ybWF0Q29sb3JzKClcbiAgdmFyIHZhbHVlcyA9IFtdLFxuICAgICAgYyA9IFtdLFxuICAgICAgaSA9IC0xO1xuICB2LnNwbGl0KF9jb2xvckV4cCkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIHZhciBhID0gdi5tYXRjaChfbnVtV2l0aFVuaXRFeHApIHx8IFtdO1xuICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgYSk7XG4gICAgYy5wdXNoKGkgKz0gYS5sZW5ndGggKyAxKTtcbiAgfSk7XG4gIHZhbHVlcy5jID0gYztcbiAgcmV0dXJuIHZhbHVlcztcbn0sXG4gICAgX2Zvcm1hdENvbG9ycyA9IGZ1bmN0aW9uIF9mb3JtYXRDb2xvcnMocywgdG9IU0wsIG9yZGVyTWF0Y2hEYXRhKSB7XG4gIHZhciByZXN1bHQgPSBcIlwiLFxuICAgICAgY29sb3JzID0gKHMgKyByZXN1bHQpLm1hdGNoKF9jb2xvckV4cCksXG4gICAgICB0eXBlID0gdG9IU0wgPyBcImhzbGEoXCIgOiBcInJnYmEoXCIsXG4gICAgICBpID0gMCxcbiAgICAgIGMsXG4gICAgICBzaGVsbCxcbiAgICAgIGQsXG4gICAgICBsO1xuXG4gIGlmICghY29sb3JzKSB7XG4gICAgcmV0dXJuIHM7XG4gIH1cblxuICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjb2xvcikge1xuICAgIHJldHVybiAoY29sb3IgPSBzcGxpdENvbG9yKGNvbG9yLCB0b0hTTCwgMSkpICYmIHR5cGUgKyAodG9IU0wgPyBjb2xvclswXSArIFwiLFwiICsgY29sb3JbMV0gKyBcIiUsXCIgKyBjb2xvclsyXSArIFwiJSxcIiArIGNvbG9yWzNdIDogY29sb3Iuam9pbihcIixcIikpICsgXCIpXCI7XG4gIH0pO1xuXG4gIGlmIChvcmRlck1hdGNoRGF0YSkge1xuICAgIGQgPSBfY29sb3JPcmRlckRhdGEocyk7XG4gICAgYyA9IG9yZGVyTWF0Y2hEYXRhLmM7XG5cbiAgICBpZiAoYy5qb2luKHJlc3VsdCkgIT09IGQuYy5qb2luKHJlc3VsdCkpIHtcbiAgICAgIHNoZWxsID0gcy5yZXBsYWNlKF9jb2xvckV4cCwgXCIxXCIpLnNwbGl0KF9udW1XaXRoVW5pdEV4cCk7XG4gICAgICBsID0gc2hlbGwubGVuZ3RoIC0gMTtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IHNoZWxsW2ldICsgKH5jLmluZGV4T2YoaSkgPyBjb2xvcnMuc2hpZnQoKSB8fCB0eXBlICsgXCIwLDAsMCwwKVwiIDogKGQubGVuZ3RoID8gZCA6IGNvbG9ycy5sZW5ndGggPyBjb2xvcnMgOiBvcmRlck1hdGNoRGF0YSkuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzaGVsbCkge1xuICAgIHNoZWxsID0gcy5zcGxpdChfY29sb3JFeHApO1xuICAgIGwgPSBzaGVsbC5sZW5ndGggLSAxO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzaGVsbFtpXSArIGNvbG9yc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc2hlbGxbbF07XG59LFxuICAgIF9jb2xvckV4cCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHMgPSBcIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17Myw0fSl7MSwyfVxcXFxiXCIsXG4gICAgICAvL3dlJ2xsIGR5bmFtaWNhbGx5IGJ1aWxkIHRoaXMgUmVndWxhciBFeHByZXNzaW9uIHRvIGNvbnNlcnZlIGZpbGUgc2l6ZS4gQWZ0ZXIgYnVpbGRpbmcgaXQsIGl0IHdpbGwgYmUgYWJsZSB0byBmaW5kIHJnYigpLCByZ2JhKCksICMgKGhleGFkZWNpbWFsKSwgYW5kIG5hbWVkIGNvbG9yIHZhbHVlcyBsaWtlIHJlZCwgYmx1ZSwgcHVycGxlLCBldGMuLFxuICBwO1xuXG4gIGZvciAocCBpbiBfY29sb3JMb29rdXApIHtcbiAgICBzICs9IFwifFwiICsgcCArIFwiXFxcXGJcIjtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKHMgKyBcIilcIiwgXCJnaVwiKTtcbn0oKSxcbiAgICBfaHNsRXhwID0gL2hzbFthXT9cXCgvLFxuICAgIF9jb2xvclN0cmluZ0ZpbHRlciA9IGZ1bmN0aW9uIF9jb2xvclN0cmluZ0ZpbHRlcihhKSB7XG4gIHZhciBjb21iaW5lZCA9IGEuam9pbihcIiBcIiksXG4gICAgICB0b0hTTDtcbiAgX2NvbG9yRXhwLmxhc3RJbmRleCA9IDA7XG5cbiAgaWYgKF9jb2xvckV4cC50ZXN0KGNvbWJpbmVkKSkge1xuICAgIHRvSFNMID0gX2hzbEV4cC50ZXN0KGNvbWJpbmVkKTtcbiAgICBhWzFdID0gX2Zvcm1hdENvbG9ycyhhWzFdLCB0b0hTTCk7XG4gICAgYVswXSA9IF9mb3JtYXRDb2xvcnMoYVswXSwgdG9IU0wsIF9jb2xvck9yZGVyRGF0YShhWzFdKSk7IC8vIG1ha2Ugc3VyZSB0aGUgb3JkZXIgb2YgbnVtYmVycy9jb2xvcnMgbWF0Y2ggd2l0aCB0aGUgRU5EIHZhbHVlLlxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0sXG5cbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElDS0VSXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5fdGlja2VyQWN0aXZlLFxuICAgIF90aWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfZ2V0VGltZSA9IERhdGUubm93LFxuICAgICAgX2xhZ1RocmVzaG9sZCA9IDUwMCxcbiAgICAgIF9hZGp1c3RlZExhZyA9IDMzLFxuICAgICAgX3N0YXJ0VGltZSA9IF9nZXRUaW1lKCksXG4gICAgICBfbGFzdFVwZGF0ZSA9IF9zdGFydFRpbWUsXG4gICAgICBfZ2FwID0gMTAwMCAvIDI0MCxcbiAgICAgIF9uZXh0VGltZSA9IF9nYXAsXG4gICAgICBfbGlzdGVuZXJzID0gW10sXG4gICAgICBfaWQsXG4gICAgICBfcmVxLFxuICAgICAgX3JhZixcbiAgICAgIF9zZWxmLFxuICAgICAgX2RlbHRhLFxuICAgICAgX2ksXG4gICAgICBfdGljayA9IGZ1bmN0aW9uIF90aWNrKHYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9nZXRUaW1lKCkgLSBfbGFzdFVwZGF0ZSxcbiAgICAgICAgbWFudWFsID0gdiA9PT0gdHJ1ZSxcbiAgICAgICAgb3ZlcmxhcCxcbiAgICAgICAgZGlzcGF0Y2gsXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGZyYW1lO1xuXG4gICAgZWxhcHNlZCA+IF9sYWdUaHJlc2hvbGQgJiYgKF9zdGFydFRpbWUgKz0gZWxhcHNlZCAtIF9hZGp1c3RlZExhZyk7XG4gICAgX2xhc3RVcGRhdGUgKz0gZWxhcHNlZDtcbiAgICB0aW1lID0gX2xhc3RVcGRhdGUgLSBfc3RhcnRUaW1lO1xuICAgIG92ZXJsYXAgPSB0aW1lIC0gX25leHRUaW1lO1xuXG4gICAgaWYgKG92ZXJsYXAgPiAwIHx8IG1hbnVhbCkge1xuICAgICAgZnJhbWUgPSArK19zZWxmLmZyYW1lO1xuICAgICAgX2RlbHRhID0gdGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwO1xuICAgICAgX3NlbGYudGltZSA9IHRpbWUgPSB0aW1lIC8gMTAwMDtcbiAgICAgIF9uZXh0VGltZSArPSBvdmVybGFwICsgKG92ZXJsYXAgPj0gX2dhcCA/IDQgOiBfZ2FwIC0gb3ZlcmxhcCk7XG4gICAgICBkaXNwYXRjaCA9IDE7XG4gICAgfVxuXG4gICAgbWFudWFsIHx8IChfaWQgPSBfcmVxKF90aWNrKSk7IC8vbWFrZSBzdXJlIHRoZSByZXF1ZXN0IGlzIG1hZGUgYmVmb3JlIHdlIGRpc3BhdGNoIHRoZSBcInRpY2tcIiBldmVudCBzbyB0aGF0IHRpbWluZyBpcyBtYWludGFpbmVkLiBPdGhlcndpc2UsIGlmIHByb2Nlc3NpbmcgdGhlIFwidGlja1wiIHJlcXVpcmVzIGEgYnVuY2ggb2YgdGltZSAobGlrZSAxNW1zKSBhbmQgd2UncmUgdXNpbmcgYSBzZXRUaW1lb3V0KCkgdGhhdCdzIGJhc2VkIG9uIDE2LjdtcywgaXQnZCB0ZWNobmljYWxseSB0YWtlIDMxLjdtcyBiZXR3ZWVuIGZyYW1lcyBvdGhlcndpc2UuXG5cbiAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgIGZvciAoX2kgPSAwOyBfaSA8IF9saXN0ZW5lcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIC8vIHVzZSBfaSBhbmQgY2hlY2sgX2xpc3RlbmVycy5sZW5ndGggaW5zdGVhZCBvZiBhIHZhcmlhYmxlIGJlY2F1c2UgYSBsaXN0ZW5lciBjb3VsZCBnZXQgcmVtb3ZlZCBkdXJpbmcgdGhlIGxvb3AsIGFuZCBpZiB0aGF0IGhhcHBlbnMgdG8gYW4gZWxlbWVudCBsZXNzIHRoYW4gdGhlIGN1cnJlbnQgaW5kZXgsIGl0J2QgdGhyb3cgdGhpbmdzIG9mZiBpbiB0aGUgbG9vcC5cbiAgICAgICAgX2xpc3RlbmVyc1tfaV0odGltZSwgX2RlbHRhLCBmcmFtZSwgdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9zZWxmID0ge1xuICAgIHRpbWU6IDAsXG4gICAgZnJhbWU6IDAsXG4gICAgdGljazogZnVuY3Rpb24gdGljaygpIHtcbiAgICAgIF90aWNrKHRydWUpO1xuICAgIH0sXG4gICAgZGVsdGFSYXRpbzogZnVuY3Rpb24gZGVsdGFSYXRpbyhmcHMpIHtcbiAgICAgIHJldHVybiBfZGVsdGEgLyAoMTAwMCAvIChmcHMgfHwgNjApKTtcbiAgICB9LFxuICAgIHdha2U6IGZ1bmN0aW9uIHdha2UoKSB7XG4gICAgICBpZiAoX2NvcmVSZWFkeSkge1xuICAgICAgICBpZiAoIV9jb3JlSW5pdHRlZCAmJiBfd2luZG93RXhpc3RzKCkpIHtcbiAgICAgICAgICBfd2luID0gX2NvcmVJbml0dGVkID0gd2luZG93O1xuICAgICAgICAgIF9kb2MgPSBfd2luLmRvY3VtZW50IHx8IHt9O1xuICAgICAgICAgIF9nbG9iYWxzLmdzYXAgPSBnc2FwO1xuICAgICAgICAgIChfd2luLmdzYXBWZXJzaW9ucyB8fCAoX3dpbi5nc2FwVmVyc2lvbnMgPSBbXSkpLnB1c2goZ3NhcC52ZXJzaW9uKTtcblxuICAgICAgICAgIF9pbnN0YWxsKF9pbnN0YWxsU2NvcGUgfHwgX3dpbi5HcmVlblNvY2tHbG9iYWxzIHx8ICFfd2luLmdzYXAgJiYgX3dpbiB8fCB7fSk7XG5cbiAgICAgICAgICBfcmFmID0gX3dpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgICAgIH1cblxuICAgICAgICBfaWQgJiYgX3NlbGYuc2xlZXAoKTtcblxuICAgICAgICBfcmVxID0gX3JhZiB8fCBmdW5jdGlvbiAoZikge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGYsIF9uZXh0VGltZSAtIF9zZWxmLnRpbWUgKiAxMDAwICsgMSB8IDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aWNrZXJBY3RpdmUgPSAxO1xuXG4gICAgICAgIF90aWNrKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc2xlZXA6IGZ1bmN0aW9uIHNsZWVwKCkge1xuICAgICAgKF9yYWYgPyBfd2luLmNhbmNlbEFuaW1hdGlvbkZyYW1lIDogY2xlYXJUaW1lb3V0KShfaWQpO1xuICAgICAgX3RpY2tlckFjdGl2ZSA9IDA7XG4gICAgICBfcmVxID0gX2VtcHR5RnVuYztcbiAgICB9LFxuICAgIGxhZ1Ntb290aGluZzogZnVuY3Rpb24gbGFnU21vb3RoaW5nKHRocmVzaG9sZCwgYWRqdXN0ZWRMYWcpIHtcbiAgICAgIF9sYWdUaHJlc2hvbGQgPSB0aHJlc2hvbGQgfHwgMSAvIF90aW55TnVtOyAvL3plcm8gc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2ljYWxseSB1bmxpbWl0ZWRcblxuICAgICAgX2FkanVzdGVkTGFnID0gTWF0aC5taW4oYWRqdXN0ZWRMYWcsIF9sYWdUaHJlc2hvbGQsIDApO1xuICAgIH0sXG4gICAgZnBzOiBmdW5jdGlvbiBmcHMoX2Zwcykge1xuICAgICAgX2dhcCA9IDEwMDAgLyAoX2ZwcyB8fCAyNDApO1xuICAgICAgX25leHRUaW1lID0gX3NlbGYudGltZSAqIDEwMDAgKyBfZ2FwO1xuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbiBhZGQoY2FsbGJhY2spIHtcbiAgICAgIF9saXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjaykgPCAwICYmIF9saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cbiAgICAgIF93YWtlKCk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShjYWxsYmFjaykge1xuICAgICAgdmFyIGk7XG4gICAgICB+KGkgPSBfbGlzdGVuZXJzLmluZGV4T2YoY2FsbGJhY2spKSAmJiBfbGlzdGVuZXJzLnNwbGljZShpLCAxKSAmJiBfaSA+PSBpICYmIF9pLS07XG4gICAgfSxcbiAgICBfbGlzdGVuZXJzOiBfbGlzdGVuZXJzXG4gIH07XG4gIHJldHVybiBfc2VsZjtcbn0oKSxcbiAgICBfd2FrZSA9IGZ1bmN0aW9uIF93YWtlKCkge1xuICByZXR1cm4gIV90aWNrZXJBY3RpdmUgJiYgX3RpY2tlci53YWtlKCk7XG59LFxuICAgIC8vYWxzbyBlbnN1cmVzIHRoZSBjb3JlIGNsYXNzZXMgYXJlIGluaXRpYWxpemVkLlxuXG4vKlxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIEVBU0lOR1xuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuX2Vhc2VNYXAgPSB7fSxcbiAgICBfY3VzdG9tRWFzZUV4cCA9IC9eW1xcZC5cXC1NXVtcXGQuXFwtLFxcc10vLFxuICAgIF9xdW90ZXNFeHAgPSAvW1wiJ10vZyxcbiAgICBfcGFyc2VPYmplY3RJblN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHZhbHVlKSB7XG4gIC8vdGFrZXMgYSBzdHJpbmcgbGlrZSBcInt3aWdnbGVzOjEwLCB0eXBlOmFudGljaXBhdGV9KVwiIGFuZCB0dXJucyBpdCBpbnRvIGEgcmVhbCBvYmplY3QuIE5vdGljZSBpdCBlbmRzIGluIFwiKVwiIGFuZCBpbmNsdWRlcyB0aGUge30gd3JhcHBlcnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSBvbmx5IHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBwYXJzaW5nIGVhc2UgY29uZmlncyBhbmQgcHJpb3JpdGl6ZWQgb3B0aW1pemF0aW9uIHJhdGhlciB0aGFuIHJldXNhYmlsaXR5LlxuICB2YXIgb2JqID0ge30sXG4gICAgICBzcGxpdCA9IHZhbHVlLnN1YnN0cigxLCB2YWx1ZS5sZW5ndGggLSAzKS5zcGxpdChcIjpcIiksXG4gICAgICBrZXkgPSBzcGxpdFswXSxcbiAgICAgIGkgPSAxLFxuICAgICAgbCA9IHNwbGl0Lmxlbmd0aCxcbiAgICAgIGluZGV4LFxuICAgICAgdmFsLFxuICAgICAgcGFyc2VkVmFsO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFsID0gc3BsaXRbaV07XG4gICAgaW5kZXggPSBpICE9PSBsIC0gMSA/IHZhbC5sYXN0SW5kZXhPZihcIixcIikgOiB2YWwubGVuZ3RoO1xuICAgIHBhcnNlZFZhbCA9IHZhbC5zdWJzdHIoMCwgaW5kZXgpO1xuICAgIG9ialtrZXldID0gaXNOYU4ocGFyc2VkVmFsKSA/IHBhcnNlZFZhbC5yZXBsYWNlKF9xdW90ZXNFeHAsIFwiXCIpLnRyaW0oKSA6ICtwYXJzZWRWYWw7XG4gICAga2V5ID0gdmFsLnN1YnN0cihpbmRleCArIDEpLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59LFxuICAgIF92YWx1ZUluUGFyZW50aGVzZXMgPSBmdW5jdGlvbiBfdmFsdWVJblBhcmVudGhlc2VzKHZhbHVlKSB7XG4gIHZhciBvcGVuID0gdmFsdWUuaW5kZXhPZihcIihcIikgKyAxLFxuICAgICAgY2xvc2UgPSB2YWx1ZS5pbmRleE9mKFwiKVwiKSxcbiAgICAgIG5lc3RlZCA9IHZhbHVlLmluZGV4T2YoXCIoXCIsIG9wZW4pO1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKG9wZW4sIH5uZXN0ZWQgJiYgbmVzdGVkIDwgY2xvc2UgPyB2YWx1ZS5pbmRleE9mKFwiKVwiLCBjbG9zZSArIDEpIDogY2xvc2UpO1xufSxcbiAgICBfY29uZmlnRWFzZUZyb21TdHJpbmcgPSBmdW5jdGlvbiBfY29uZmlnRWFzZUZyb21TdHJpbmcobmFtZSkge1xuICAvL25hbWUgY2FuIGJlIGEgc3RyaW5nIGxpa2UgXCJlbGFzdGljLm91dCgxLDAuNSlcIiwgYW5kIHBhc3MgaW4gX2Vhc2VNYXAgYXMgb2JqIGFuZCBpdCdsbCBwYXJzZSBpdCBvdXQgYW5kIGNhbGwgdGhlIGFjdHVhbCBmdW5jdGlvbiBsaWtlIF9lYXNlTWFwLkVsYXN0aWMuZWFzZU91dC5jb25maWcoMSwwLjUpLiBJdCB3aWxsIGFsc28gcGFyc2UgY3VzdG9tIGVhc2Ugc3RyaW5ncyBhcyBsb25nIGFzIEN1c3RvbUVhc2UgaXMgbG9hZGVkIGFuZCByZWdpc3RlcmVkIChpbnRlcm5hbGx5IGFzIF9lYXNlTWFwLl9DRSkuXG4gIHZhciBzcGxpdCA9IChuYW1lICsgXCJcIikuc3BsaXQoXCIoXCIpLFxuICAgICAgZWFzZSA9IF9lYXNlTWFwW3NwbGl0WzBdXTtcbiAgcmV0dXJuIGVhc2UgJiYgc3BsaXQubGVuZ3RoID4gMSAmJiBlYXNlLmNvbmZpZyA/IGVhc2UuY29uZmlnLmFwcGx5KG51bGwsIH5uYW1lLmluZGV4T2YoXCJ7XCIpID8gW19wYXJzZU9iamVjdEluU3RyaW5nKHNwbGl0WzFdKV0gOiBfdmFsdWVJblBhcmVudGhlc2VzKG5hbWUpLnNwbGl0KFwiLFwiKS5tYXAoX251bWVyaWNJZlBvc3NpYmxlKSkgOiBfZWFzZU1hcC5fQ0UgJiYgX2N1c3RvbUVhc2VFeHAudGVzdChuYW1lKSA/IF9lYXNlTWFwLl9DRShcIlwiLCBuYW1lKSA6IGVhc2U7XG59LFxuICAgIF9pbnZlcnRFYXNlID0gZnVuY3Rpb24gX2ludmVydEVhc2UoZWFzZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2UoMSAtIHApO1xuICB9O1xufSxcbiAgICAvLyBhbGxvdyB5b3lvRWFzZSB0byBiZSBzZXQgaW4gY2hpbGRyZW4gYW5kIGhhdmUgdGhvc2UgYWZmZWN0ZWQgd2hlbiB0aGUgcGFyZW50L2FuY2VzdG9yIHRpbWVsaW5lIHlveW9zLlxuX3Byb3BhZ2F0ZVlveW9FYXNlID0gZnVuY3Rpb24gX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pIHtcbiAgdmFyIGNoaWxkID0gdGltZWxpbmUuX2ZpcnN0LFxuICAgICAgZWFzZTtcblxuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBUaW1lbGluZSkge1xuICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLCBpc1lveW8pO1xuICAgIH0gZWxzZSBpZiAoY2hpbGQudmFycy55b3lvRWFzZSAmJiAoIWNoaWxkLl95b3lvIHx8ICFjaGlsZC5fcmVwZWF0KSAmJiBjaGlsZC5feW95byAhPT0gaXNZb3lvKSB7XG4gICAgICBpZiAoY2hpbGQudGltZWxpbmUpIHtcbiAgICAgICAgX3Byb3BhZ2F0ZVlveW9FYXNlKGNoaWxkLnRpbWVsaW5lLCBpc1lveW8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWFzZSA9IGNoaWxkLl9lYXNlO1xuICAgICAgICBjaGlsZC5fZWFzZSA9IGNoaWxkLl95RWFzZTtcbiAgICAgICAgY2hpbGQuX3lFYXNlID0gZWFzZTtcbiAgICAgICAgY2hpbGQuX3lveW8gPSBpc1lveW87XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgfVxufSxcbiAgICBfcGFyc2VFYXNlID0gZnVuY3Rpb24gX3BhcnNlRWFzZShlYXNlLCBkZWZhdWx0RWFzZSkge1xuICByZXR1cm4gIWVhc2UgPyBkZWZhdWx0RWFzZSA6IChfaXNGdW5jdGlvbihlYXNlKSA/IGVhc2UgOiBfZWFzZU1hcFtlYXNlXSB8fCBfY29uZmlnRWFzZUZyb21TdHJpbmcoZWFzZSkpIHx8IGRlZmF1bHRFYXNlO1xufSxcbiAgICBfaW5zZXJ0RWFzZSA9IGZ1bmN0aW9uIF9pbnNlcnRFYXNlKG5hbWVzLCBlYXNlSW4sIGVhc2VPdXQsIGVhc2VJbk91dCkge1xuICBpZiAoZWFzZU91dCA9PT0gdm9pZCAwKSB7XG4gICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oMSAtIHApO1xuICAgIH07XG4gIH1cblxuICBpZiAoZWFzZUluT3V0ID09PSB2b2lkIDApIHtcbiAgICBlYXNlSW5PdXQgPSBmdW5jdGlvbiBlYXNlSW5PdXQocCkge1xuICAgICAgcmV0dXJuIHAgPCAuNSA/IGVhc2VJbihwICogMikgLyAyIDogMSAtIGVhc2VJbigoMSAtIHApICogMikgLyAyO1xuICAgIH07XG4gIH1cblxuICB2YXIgZWFzZSA9IHtcbiAgICBlYXNlSW46IGVhc2VJbixcbiAgICBlYXNlT3V0OiBlYXNlT3V0LFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0XG4gIH0sXG4gICAgICBsb3dlcmNhc2VOYW1lO1xuXG4gIF9mb3JFYWNoTmFtZShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBfZWFzZU1hcFtuYW1lXSA9IF9nbG9iYWxzW25hbWVdID0gZWFzZTtcbiAgICBfZWFzZU1hcFtsb3dlcmNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpXSA9IGVhc2VPdXQ7XG5cbiAgICBmb3IgKHZhciBwIGluIGVhc2UpIHtcbiAgICAgIF9lYXNlTWFwW2xvd2VyY2FzZU5hbWUgKyAocCA9PT0gXCJlYXNlSW5cIiA/IFwiLmluXCIgOiBwID09PSBcImVhc2VPdXRcIiA/IFwiLm91dFwiIDogXCIuaW5PdXRcIildID0gX2Vhc2VNYXBbbmFtZSArIFwiLlwiICsgcF0gPSBlYXNlW3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVhc2U7XG59LFxuICAgIF9lYXNlSW5PdXRGcm9tT3V0ID0gZnVuY3Rpb24gX2Vhc2VJbk91dEZyb21PdXQoZWFzZU91dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IC41ID8gKDEgLSBlYXNlT3V0KDEgLSBwICogMikpIC8gMiA6IC41ICsgZWFzZU91dCgocCAtIC41KSAqIDIpIC8gMjtcbiAgfTtcbn0sXG4gICAgX2NvbmZpZ0VsYXN0aWMgPSBmdW5jdGlvbiBfY29uZmlnRWxhc3RpYyh0eXBlLCBhbXBsaXR1ZGUsIHBlcmlvZCkge1xuICB2YXIgcDEgPSBhbXBsaXR1ZGUgPj0gMSA/IGFtcGxpdHVkZSA6IDEsXG4gICAgICAvL25vdGU6IGlmIGFtcGxpdHVkZSBpcyA8IDEsIHdlIHNpbXBseSBhZGp1c3QgdGhlIHBlcmlvZCBmb3IgYSBtb3JlIG5hdHVyYWwgZmVlbC4gT3RoZXJ3aXNlIHRoZSBtYXRoIGRvZXNuJ3Qgd29yayByaWdodCBhbmQgdGhlIGN1cnZlIHN0YXJ0cyBhdCAxLlxuICBwMiA9IChwZXJpb2QgfHwgKHR5cGUgPyAuMyA6IC40NSkpIC8gKGFtcGxpdHVkZSA8IDEgPyBhbXBsaXR1ZGUgOiAxKSxcbiAgICAgIHAzID0gcDIgLyBfMlBJICogKE1hdGguYXNpbigxIC8gcDEpIHx8IDApLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwID09PSAxID8gMSA6IHAxICogTWF0aC5wb3coMiwgLTEwICogcCkgKiBfc2luKChwIC0gcDMpICogcDIpICsgMTtcbiAgfSxcbiAgICAgIGVhc2UgPSB0eXBlID09PSBcIm91dFwiID8gZWFzZU91dCA6IHR5cGUgPT09IFwiaW5cIiA/IGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIDEgLSBlYXNlT3V0KDEgLSBwKTtcbiAgfSA6IF9lYXNlSW5PdXRGcm9tT3V0KGVhc2VPdXQpO1xuXG4gIHAyID0gXzJQSSAvIHAyOyAvL3ByZWNhbGN1bGF0ZSB0byBvcHRpbWl6ZVxuXG4gIGVhc2UuY29uZmlnID0gZnVuY3Rpb24gKGFtcGxpdHVkZSwgcGVyaW9kKSB7XG4gICAgcmV0dXJuIF9jb25maWdFbGFzdGljKHR5cGUsIGFtcGxpdHVkZSwgcGVyaW9kKTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn0sXG4gICAgX2NvbmZpZ0JhY2sgPSBmdW5jdGlvbiBfY29uZmlnQmFjayh0eXBlLCBvdmVyc2hvb3QpIHtcbiAgaWYgKG92ZXJzaG9vdCA9PT0gdm9pZCAwKSB7XG4gICAgb3ZlcnNob290ID0gMS43MDE1ODtcbiAgfVxuXG4gIHZhciBlYXNlT3V0ID0gZnVuY3Rpb24gZWFzZU91dChwKSB7XG4gICAgcmV0dXJuIHAgPyAtLXAgKiBwICogKChvdmVyc2hvb3QgKyAxKSAqIHAgKyBvdmVyc2hvb3QpICsgMSA6IDA7XG4gIH0sXG4gICAgICBlYXNlID0gdHlwZSA9PT0gXCJvdXRcIiA/IGVhc2VPdXQgOiB0eXBlID09PSBcImluXCIgPyBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gZWFzZU91dCgxIC0gcCk7XG4gIH0gOiBfZWFzZUluT3V0RnJvbU91dChlYXNlT3V0KTtcblxuICBlYXNlLmNvbmZpZyA9IGZ1bmN0aW9uIChvdmVyc2hvb3QpIHtcbiAgICByZXR1cm4gX2NvbmZpZ0JhY2sodHlwZSwgb3ZlcnNob290KTtcbiAgfTtcblxuICByZXR1cm4gZWFzZTtcbn07IC8vIGEgY2hlYXBlciAoa2IgYW5kIGNwdSkgYnV0IG1vcmUgbWlsZCB3YXkgdG8gZ2V0IGEgcGFyYW1ldGVyaXplZCB3ZWlnaHRlZCBlYXNlIGJ5IGZlZWRpbmcgaW4gYSB2YWx1ZSBiZXR3ZWVuIC0xIChlYXNlSW4pIGFuZCAxIChlYXNlT3V0KSB3aGVyZSAwIGlzIGxpbmVhci5cbi8vIF93ZWlnaHRlZEVhc2UgPSByYXRpbyA9PiB7XG4vLyBcdGxldCB5ID0gMC41ICsgcmF0aW8gLyAyO1xuLy8gXHRyZXR1cm4gcCA9PiAoMiAqICgxIC0gcCkgKiBwICogeSArIHAgKiBwKTtcbi8vIH0sXG4vLyBhIHN0cm9uZ2VyIChidXQgbW9yZSBleHBlbnNpdmUga2IvY3B1KSBwYXJhbWV0ZXJpemVkIHdlaWdodGVkIGVhc2UgdGhhdCBsZXRzIHlvdSBmZWVkIGluIGEgdmFsdWUgYmV0d2VlbiAtMSAoZWFzZUluKSBhbmQgMSAoZWFzZU91dCkgd2hlcmUgMCBpcyBsaW5lYXIuXG4vLyBfd2VpZ2h0ZWRFYXNlU3Ryb25nID0gcmF0aW8gPT4ge1xuLy8gXHRyYXRpbyA9IC41ICsgcmF0aW8gLyAyO1xuLy8gXHRsZXQgbyA9IDEgLyAzICogKHJhdGlvIDwgLjUgPyByYXRpbyA6IDEgLSByYXRpbyksXG4vLyBcdFx0YiA9IHJhdGlvIC0gbyxcbi8vIFx0XHRjID0gcmF0aW8gKyBvO1xuLy8gXHRyZXR1cm4gcCA9PiBwID09PSAxID8gcCA6IDMgKiBiICogKDEgLSBwKSAqICgxIC0gcCkgKiBwICsgMyAqIGMgKiAoMSAtIHApICogcCAqIHAgKyBwICogcCAqIHA7XG4vLyB9O1xuXG5cbl9mb3JFYWNoTmFtZShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLCBmdW5jdGlvbiAobmFtZSwgaSkge1xuICB2YXIgcG93ZXIgPSBpIDwgNSA/IGkgKyAxIDogaTtcblxuICBfaW5zZXJ0RWFzZShuYW1lICsgXCIsUG93ZXJcIiArIChwb3dlciAtIDEpLCBpID8gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICB9IDogZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcDtcbiAgfSwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSBwLCBwb3dlcik7XG4gIH0sIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAgPCAuNSA/IE1hdGgucG93KHAgKiAyLCBwb3dlcikgLyAyIDogMSAtIE1hdGgucG93KCgxIC0gcCkgKiAyLCBwb3dlcikgLyAyO1xuICB9KTtcbn0pO1xuXG5fZWFzZU1hcC5MaW5lYXIuZWFzZU5vbmUgPSBfZWFzZU1hcC5ub25lID0gX2Vhc2VNYXAuTGluZWFyLmVhc2VJbjtcblxuX2luc2VydEVhc2UoXCJFbGFzdGljXCIsIF9jb25maWdFbGFzdGljKFwiaW5cIiksIF9jb25maWdFbGFzdGljKFwib3V0XCIpLCBfY29uZmlnRWxhc3RpYygpKTtcblxuKGZ1bmN0aW9uIChuLCBjKSB7XG4gIHZhciBuMSA9IDEgLyBjLFxuICAgICAgbjIgPSAyICogbjEsXG4gICAgICBuMyA9IDIuNSAqIG4xLFxuICAgICAgZWFzZU91dCA9IGZ1bmN0aW9uIGVhc2VPdXQocCkge1xuICAgIHJldHVybiBwIDwgbjEgPyBuICogcCAqIHAgOiBwIDwgbjIgPyBuICogTWF0aC5wb3cocCAtIDEuNSAvIGMsIDIpICsgLjc1IDogcCA8IG4zID8gbiAqIChwIC09IDIuMjUgLyBjKSAqIHAgKyAuOTM3NSA6IG4gKiBNYXRoLnBvdyhwIC0gMi42MjUgLyBjLCAyKSArIC45ODQzNzU7XG4gIH07XG5cbiAgX2luc2VydEVhc2UoXCJCb3VuY2VcIiwgZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gMSAtIGVhc2VPdXQoMSAtIHApO1xuICB9LCBlYXNlT3V0KTtcbn0pKDcuNTYyNSwgMi43NSk7XG5cbl9pbnNlcnRFYXNlKFwiRXhwb1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gcCA/IE1hdGgucG93KDIsIDEwICogKHAgLSAxKSkgOiAwO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQ2lyY1wiLCBmdW5jdGlvbiAocCkge1xuICByZXR1cm4gLShfc3FydCgxIC0gcCAqIHApIC0gMSk7XG59KTtcblxuX2luc2VydEVhc2UoXCJTaW5lXCIsIGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwID09PSAxID8gMSA6IC1fY29zKHAgKiBfSEFMRl9QSSkgKyAxO1xufSk7XG5cbl9pbnNlcnRFYXNlKFwiQmFja1wiLCBfY29uZmlnQmFjayhcImluXCIpLCBfY29uZmlnQmFjayhcIm91dFwiKSwgX2NvbmZpZ0JhY2soKSk7XG5cbl9lYXNlTWFwLlN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuc3RlcHMgPSBfZ2xvYmFscy5TdGVwcGVkRWFzZSA9IHtcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcoc3RlcHMsIGltbWVkaWF0ZVN0YXJ0KSB7XG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHtcbiAgICAgIHN0ZXBzID0gMTtcbiAgICB9XG5cbiAgICB2YXIgcDEgPSAxIC8gc3RlcHMsXG4gICAgICAgIHAyID0gc3RlcHMgKyAoaW1tZWRpYXRlU3RhcnQgPyAwIDogMSksXG4gICAgICAgIHAzID0gaW1tZWRpYXRlU3RhcnQgPyAxIDogMCxcbiAgICAgICAgbWF4ID0gMSAtIF90aW55TnVtO1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuICgocDIgKiBfY2xhbXAoMCwgbWF4LCBwKSB8IDApICsgcDMpICogcDE7XG4gICAgfTtcbiAgfVxufTtcbl9kZWZhdWx0cy5lYXNlID0gX2Vhc2VNYXBbXCJxdWFkLm91dFwiXTtcblxuX2ZvckVhY2hOYW1lKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfY2FsbGJhY2tOYW1lcyArPSBuYW1lICsgXCIsXCIgKyBuYW1lICsgXCJQYXJhbXMsXCI7XG59KTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ0FDSEVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIEdTQ2FjaGUgPSBmdW5jdGlvbiBHU0NhY2hlKHRhcmdldCwgaGFybmVzcykge1xuICB0aGlzLmlkID0gX2dzSUQrKztcbiAgdGFyZ2V0Ll9nc2FwID0gdGhpcztcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIHRoaXMuaGFybmVzcyA9IGhhcm5lc3M7XG4gIHRoaXMuZ2V0ID0gaGFybmVzcyA/IGhhcm5lc3MuZ2V0IDogX2dldFByb3BlcnR5O1xuICB0aGlzLnNldCA9IGhhcm5lc3MgPyBoYXJuZXNzLmdldFNldHRlciA6IF9nZXRTZXR0ZXI7XG59O1xuLypcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBTklNQVRJT05cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuZXhwb3J0IHZhciBBbmltYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBbmltYXRpb24odmFycykge1xuICAgIHRoaXMudmFycyA9IHZhcnM7XG4gICAgdGhpcy5fZGVsYXkgPSArdmFycy5kZWxheSB8fCAwO1xuXG4gICAgaWYgKHRoaXMuX3JlcGVhdCA9IHZhcnMucmVwZWF0ID09PSBJbmZpbml0eSA/IC0yIDogdmFycy5yZXBlYXQgfHwgMCkge1xuICAgICAgLy8gVE9ETzogcmVwZWF0OiBJbmZpbml0eSBvbiBhIHRpbWVsaW5lJ3MgY2hpbGRyZW4gbXVzdCBmbGFnIHRoYXQgdGltZWxpbmUgaW50ZXJuYWxseSBhbmQgYWZmZWN0IGl0cyB0b3RhbER1cmF0aW9uLCBvdGhlcndpc2UgaXQnbGwgc3RvcCBpbiB0aGUgbmVnYXRpdmUgZGlyZWN0aW9uIHdoZW4gcmVhY2hpbmcgdGhlIHN0YXJ0LlxuICAgICAgdGhpcy5fckRlbGF5ID0gdmFycy5yZXBlYXREZWxheSB8fCAwO1xuICAgICAgdGhpcy5feW95byA9ICEhdmFycy55b3lvIHx8ICEhdmFycy55b3lvRWFzZTtcbiAgICB9XG5cbiAgICB0aGlzLl90cyA9IDE7XG5cbiAgICBfc2V0RHVyYXRpb24odGhpcywgK3ZhcnMuZHVyYXRpb24sIDEsIDEpO1xuXG4gICAgdGhpcy5kYXRhID0gdmFycy5kYXRhO1xuICAgIF90aWNrZXJBY3RpdmUgfHwgX3RpY2tlci53YWtlKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQW5pbWF0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVsYXkgPSBmdW5jdGlvbiBkZWxheSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgdGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuc21vb3RoQ2hpbGRUaW1pbmcgJiYgdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQgKyB2YWx1ZSAtIHRoaXMuX2RlbGF5KTtcbiAgICAgIHRoaXMuX2RlbGF5ID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fZGVsYXk7XG4gIH07XG5cbiAgX3Byb3RvLmR1cmF0aW9uID0gZnVuY3Rpb24gZHVyYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxEdXJhdGlvbih0aGlzLl9yZXBlYXQgPiAwID8gdmFsdWUgKyAodmFsdWUgKyB0aGlzLl9yRGVsYXkpICogdGhpcy5fcmVwZWF0IDogdmFsdWUpIDogdGhpcy50b3RhbER1cmF0aW9uKCkgJiYgdGhpcy5fZHVyO1xuICB9O1xuXG4gIF9wcm90by50b3RhbER1cmF0aW9uID0gZnVuY3Rpb24gdG90YWxEdXJhdGlvbih2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3REdXI7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlydHkgPSAwO1xuICAgIHJldHVybiBfc2V0RHVyYXRpb24odGhpcywgdGhpcy5fcmVwZWF0IDwgMCA/IHZhbHVlIDogKHZhbHVlIC0gdGhpcy5fcmVwZWF0ICogdGhpcy5fckRlbGF5KSAvICh0aGlzLl9yZXBlYXQgKyAxKSk7XG4gIH07XG5cbiAgX3Byb3RvLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIF93YWtlKCk7XG5cbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy5fZHA7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyAmJiB0aGlzLl90cykge1xuICAgICAgX2FsaWduUGxheWhlYWQodGhpcywgX3RvdGFsVGltZSk7XG5cbiAgICAgICFwYXJlbnQuX2RwIHx8IHBhcmVudC5wYXJlbnQgfHwgX3Bvc3RBZGRDaGVja3MocGFyZW50LCB0aGlzKTsgLy8gZWRnZSBjYXNlOiBpZiB0aGlzIGlzIGEgY2hpbGQgb2YgYSB0aW1lbGluZSB0aGF0IGFscmVhZHkgY29tcGxldGVkLCBmb3IgZXhhbXBsZSwgd2UgbXVzdCByZS1hY3RpdmF0ZSB0aGUgcGFyZW50LlxuICAgICAgLy9pbiBjYXNlIGFueSBvZiB0aGUgYW5jZXN0b3IgdGltZWxpbmVzIGhhZCBjb21wbGV0ZWQgYnV0IHNob3VsZCBub3cgYmUgZW5hYmxlZCwgd2Ugc2hvdWxkIHJlc2V0IHRoZWlyIHRvdGFsVGltZSgpIHdoaWNoIHdpbGwgYWxzbyBlbnN1cmUgdGhhdCB0aGV5J3JlIGxpbmVkIHVwIHByb3Blcmx5IGFuZCBlbmFibGVkLiBTa2lwIGZvciBhbmltYXRpb25zIHRoYXQgYXJlIG9uIHRoZSByb290ICh3YXN0ZWZ1bCkuIEV4YW1wbGU6IGEgVGltZWxpbmVMaXRlLmV4cG9ydFJvb3QoKSBpcyBwZXJmb3JtZWQgd2hlbiB0aGVyZSdzIGEgcGF1c2VkIHR3ZWVuIG9uIHRoZSByb290LCB0aGUgZXhwb3J0IHdpbGwgbm90IGNvbXBsZXRlIHVudGlsIHRoYXQgdHdlZW4gaXMgdW5wYXVzZWQsIGJ1dCBpbWFnaW5lIGEgY2hpbGQgZ2V0cyByZXN0YXJ0ZWQgbGF0ZXIsIGFmdGVyIGFsbCBbdW5wYXVzZWRdIHR3ZWVucyBoYXZlIGNvbXBsZXRlZC4gVGhlIHN0YXJ0IG9mIHRoYXQgY2hpbGQgd291bGQgZ2V0IHB1c2hlZCBvdXQsIGJ1dCBvbmUgb2YgdGhlIGFuY2VzdG9ycyBtYXkgaGF2ZSBjb21wbGV0ZWQuXG5cbiAgICAgIHdoaWxlIChwYXJlbnQgJiYgcGFyZW50LnBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50LnBhcmVudC5fdGltZSAhPT0gcGFyZW50Ll9zdGFydCArIChwYXJlbnQuX3RzID49IDAgPyBwYXJlbnQuX3RUaW1lIC8gcGFyZW50Ll90cyA6IChwYXJlbnQudG90YWxEdXJhdGlvbigpIC0gcGFyZW50Ll90VGltZSkgLyAtcGFyZW50Ll90cykpIHtcbiAgICAgICAgICBwYXJlbnQudG90YWxUaW1lKHBhcmVudC5fdFRpbWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLnBhcmVudCAmJiB0aGlzLl9kcC5hdXRvUmVtb3ZlQ2hpbGRyZW4gJiYgKHRoaXMuX3RzID4gMCAmJiBfdG90YWxUaW1lIDwgdGhpcy5fdER1ciB8fCB0aGlzLl90cyA8IDAgJiYgX3RvdGFsVGltZSA+IDAgfHwgIXRoaXMuX3REdXIgJiYgIV90b3RhbFRpbWUpKSB7XG4gICAgICAgIC8vaWYgdGhlIGFuaW1hdGlvbiBkb2Vzbid0IGhhdmUgYSBwYXJlbnQsIHB1dCBpdCBiYWNrIGludG8gaXRzIGxhc3QgcGFyZW50IChyZWNvcmRlZCBhcyBfZHAgZm9yIGV4YWN0bHkgY2FzZXMgbGlrZSB0aGlzKS4gTGltaXQgdG8gcGFyZW50cyB3aXRoIGF1dG9SZW1vdmVDaGlsZHJlbiAobGlrZSBnbG9iYWxUaW1lbGluZSkgc28gdGhhdCBpZiB0aGUgdXNlciBtYW51YWxseSByZW1vdmVzIGFuIGFuaW1hdGlvbiBmcm9tIGEgdGltZWxpbmUgYW5kIHRoZW4gYWx0ZXJzIGl0cyBwbGF5aGVhZCwgaXQgZG9lc24ndCBnZXQgYWRkZWQgYmFjayBpbi5cbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGhpcy5fZHAsIHRoaXMsIHRoaXMuX3N0YXJ0IC0gdGhpcy5fZGVsYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl90VGltZSAhPT0gX3RvdGFsVGltZSB8fCAhdGhpcy5fZHVyICYmICFzdXBwcmVzc0V2ZW50cyB8fCB0aGlzLl9pbml0dGVkICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSA9PT0gX3RpbnlOdW0gfHwgIV90b3RhbFRpbWUgJiYgIXRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuYWRkIHx8IHRoaXMuX3B0TG9va3VwKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIF9wdExvb2t1cCBvbiBhIFR3ZWVuIGluc3RhbmNlIHRvIGVuc3VyZSBpdCBoYXMgYWN0dWFsbHkgZmluaXNoZWQgYmVpbmcgaW5zdGFudGlhdGVkLCBvdGhlcndpc2UgaWYgdGhpcy5yZXZlcnNlKCkgZ2V0cyBjYWxsZWQgaW4gdGhlIEFuaW1hdGlvbiBjb25zdHJ1Y3RvciwgaXQgY291bGQgdHJpZ2dlciBhIHJlbmRlcigpIGhlcmUgZXZlbiB0aG91Z2ggdGhlIF90YXJnZXRzIHdlcmVuJ3QgcG9wdWxhdGVkLCB0aHVzIHdoZW4gX2luaXQoKSBpcyBjYWxsZWQgdGhlcmUgd29uJ3QgYmUgYW55IFByb3BUd2VlbnMgKGl0J2xsIGFjdCBsaWtlIHRoZSB0d2VlbiBpcyBub24tZnVuY3Rpb25hbClcbiAgICAgIHRoaXMuX3RzIHx8ICh0aGlzLl9wVGltZSA9IF90b3RhbFRpbWUpOyAvLyBvdGhlcndpc2UsIGlmIGFuIGFuaW1hdGlvbiBpcyBwYXVzZWQsIHRoZW4gdGhlIHBsYXloZWFkIGlzIG1vdmVkIGJhY2sgdG8gemVybywgdGhlbiByZXN1bWVkLCBpdCdkIHJldmVydCBiYWNrIHRvIHRoZSBvcmlnaW5hbCB0aW1lIGF0IHRoZSBwYXVzZVxuICAgICAgLy9pZiAoIXRoaXMuX2xvY2spIHsgLy8gYXZvaWQgZW5kbGVzcyByZWN1cnNpb24gKG5vdCBzdXJlIHdlIG5lZWQgdGhpcyB5ZXQgb3IgaWYgaXQncyB3b3J0aCB0aGUgcGVyZm9ybWFuY2UgaGl0KVxuICAgICAgLy8gICB0aGlzLl9sb2NrID0gMTtcblxuICAgICAgX2xhenlTYWZlUmVuZGVyKHRoaXMsIF90b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzKTsgLy8gICB0aGlzLl9sb2NrID0gMDtcbiAgICAgIC8vfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnRpbWUgPSBmdW5jdGlvbiB0aW1lKHZhbHVlLCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gdGhpcy50b3RhbFRpbWUoTWF0aC5taW4odGhpcy50b3RhbER1cmF0aW9uKCksIHZhbHVlICsgX2VsYXBzZWRDeWNsZUR1cmF0aW9uKHRoaXMpKSAlICh0aGlzLl9kdXIgKyB0aGlzLl9yRGVsYXkpIHx8ICh2YWx1ZSA/IHRoaXMuX2R1ciA6IDApLCBzdXBwcmVzc0V2ZW50cykgOiB0aGlzLl90aW1lOyAvLyBub3RlOiBpZiB0aGUgbW9kdWx1cyByZXN1bHRzIGluIDAsIHRoZSBwbGF5aGVhZCBjb3VsZCBiZSBleGFjdGx5IGF0IHRoZSBlbmQgb3IgdGhlIGJlZ2lubmluZywgYW5kIHdlIGFsd2F5cyBkZWZlciB0byB0aGUgRU5EIHdpdGggYSBub24temVybyB2YWx1ZSwgb3RoZXJ3aXNlIGlmIHlvdSBzZXQgdGhlIHRpbWUoKSB0byB0aGUgdmVyeSBlbmQgKGR1cmF0aW9uKCkpLCBpdCB3b3VsZCByZW5kZXIgYXQgdGhlIFNUQVJUIVxuICB9O1xuXG4gIF9wcm90by50b3RhbFByb2dyZXNzID0gZnVuY3Rpb24gdG90YWxQcm9ncmVzcyh2YWx1ZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpICogdmFsdWUsIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMudG90YWxEdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdFRpbWUgLyB0aGlzLl90RHVyKSA6IHRoaXMucmF0aW87XG4gIH07XG5cbiAgX3Byb3RvLnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3ModmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkgKiAodGhpcy5feW95byAmJiAhKHRoaXMuaXRlcmF0aW9uKCkgJiAxKSA/IDEgLSB2YWx1ZSA6IHZhbHVlKSArIF9lbGFwc2VkQ3ljbGVEdXJhdGlvbih0aGlzKSwgc3VwcHJlc3NFdmVudHMpIDogdGhpcy5kdXJhdGlvbigpID8gTWF0aC5taW4oMSwgdGhpcy5fdGltZSAvIHRoaXMuX2R1cikgOiB0aGlzLnJhdGlvO1xuICB9O1xuXG4gIF9wcm90by5pdGVyYXRpb24gPSBmdW5jdGlvbiBpdGVyYXRpb24odmFsdWUsIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgdmFyIGN5Y2xlRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uKCkgKyB0aGlzLl9yRGVsYXk7XG5cbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRoaXMudG90YWxUaW1lKHRoaXMuX3RpbWUgKyAodmFsdWUgLSAxKSAqIGN5Y2xlRHVyYXRpb24sIHN1cHByZXNzRXZlbnRzKSA6IHRoaXMuX3JlcGVhdCA/IF9hbmltYXRpb25DeWNsZSh0aGlzLl90VGltZSwgY3ljbGVEdXJhdGlvbikgKyAxIDogMTtcbiAgfSAvLyBwb3RlbnRpYWwgZnV0dXJlIGFkZGl0aW9uOlxuICAvLyBpc1BsYXlpbmdCYWNrd2FyZHMoKSB7XG4gIC8vIFx0bGV0IGFuaW1hdGlvbiA9IHRoaXMsXG4gIC8vIFx0XHRvcmllbnRhdGlvbiA9IDE7IC8vIDEgPSBmb3J3YXJkLCAtMSA9IGJhY2t3YXJkXG4gIC8vIFx0d2hpbGUgKGFuaW1hdGlvbikge1xuICAvLyBcdFx0b3JpZW50YXRpb24gKj0gYW5pbWF0aW9uLnJldmVyc2VkKCkgfHwgKGFuaW1hdGlvbi5yZXBlYXQoKSAmJiAhKGFuaW1hdGlvbi5pdGVyYXRpb24oKSAmIDEpKSA/IC0xIDogMTtcbiAgLy8gXHRcdGFuaW1hdGlvbiA9IGFuaW1hdGlvbi5wYXJlbnQ7XG4gIC8vIFx0fVxuICAvLyBcdHJldHVybiBvcmllbnRhdGlvbiA8IDA7XG4gIC8vIH1cbiAgO1xuXG4gIF9wcm90by50aW1lU2NhbGUgPSBmdW5jdGlvbiB0aW1lU2NhbGUodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydHMgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIHJlY29yZGVkIHRpbWVTY2FsZS4gU3BlY2lhbCBjYXNlOiBpZiBzb21lb25lIGNhbGxzIHJldmVyc2UoKSBvbiBhbiBhbmltYXRpb24gd2l0aCB0aW1lU2NhbGUgb2YgMCwgd2UgYXNzaWduIGl0IC1fdGlueU51bSB0byByZW1lbWJlciBpdCdzIHJldmVyc2VkLlxuICAgIH1cblxuICAgIGlmICh0aGlzLl9ydHMgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgdFRpbWUgPSB0aGlzLnBhcmVudCAmJiB0aGlzLl90cyA/IF9wYXJlbnRUb0NoaWxkVG90YWxUaW1lKHRoaXMucGFyZW50Ll90aW1lLCB0aGlzKSA6IHRoaXMuX3RUaW1lOyAvLyBtYWtlIHN1cmUgdG8gZG8gdGhlIHBhcmVudFRvQ2hpbGRUb3RhbFRpbWUoKSBCRUZPUkUgc2V0dGluZyB0aGUgbmV3IF90cyBiZWNhdXNlIHRoZSBvbGQgb25lIG11c3QgYmUgdXNlZCBpbiB0aGF0IGNhbGN1bGF0aW9uLlxuICAgIC8vIGZ1dHVyZSBhZGRpdGlvbj8gVXAgc2lkZTogZmFzdCBhbmQgbWluaW1hbCBmaWxlIHNpemUuIERvd24gc2lkZTogb25seSB3b3JrcyBvbiB0aGlzIGFuaW1hdGlvbjsgaWYgYSB0aW1lbGluZSBpcyByZXZlcnNlZCwgZm9yIGV4YW1wbGUsIGl0cyBjaGlsZHJlbnMnIG9uUmV2ZXJzZSB3b3VsZG4ndCBnZXQgY2FsbGVkLlxuICAgIC8vKCt2YWx1ZSA8IDAgJiYgdGhpcy5fcnRzID49IDApICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmV2ZXJzZVwiLCB0cnVlKTtcbiAgICAvLyBwcmlvcml0aXplIHJlbmRlcmluZyB3aGVyZSB0aGUgcGFyZW50J3MgcGxheWhlYWQgbGluZXMgdXAgaW5zdGVhZCBvZiB0aGlzLl90VGltZSBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIGEgdHdlZW4gdGhhdCdzIGFuaW1hdGluZyBhbm90aGVyIHR3ZWVuJ3MgdGltZVNjYWxlIGluIHRoZSBzYW1lIHJlbmRlcmluZyBsb29wIChzYW1lIHBhcmVudCksIHRodXMgaWYgdGhlIHRpbWVTY2FsZSB0d2VlbiByZW5kZXJzIGZpcnN0LCBpdCB3b3VsZCBhbHRlciBfc3RhcnQgQkVGT1JFIF90VGltZSB3YXMgc2V0IG9uIHRoYXQgdGljayAoaW4gdGhlIHJlbmRlcmluZyBsb29wKSwgZWZmZWN0aXZlbHkgZnJlZXppbmcgaXQgdW50aWwgdGhlIHRpbWVTY2FsZSB0d2VlbiBmaW5pc2hlcy5cblxuICAgIHRoaXMuX3J0cyA9ICt2YWx1ZSB8fCAwO1xuICAgIHRoaXMuX3RzID0gdGhpcy5fcHMgfHwgdmFsdWUgPT09IC1fdGlueU51bSA/IDAgOiB0aGlzLl9ydHM7IC8vIF90cyBpcyB0aGUgZnVuY3Rpb25hbCB0aW1lU2NhbGUgd2hpY2ggd291bGQgYmUgMCBpZiB0aGUgYW5pbWF0aW9uIGlzIHBhdXNlZC5cblxuICAgIF9yZWNhY2hlQW5jZXN0b3JzKHRoaXMudG90YWxUaW1lKF9jbGFtcCgtdGhpcy5fZGVsYXksIHRoaXMuX3REdXIsIHRUaW1lKSwgdHJ1ZSkpO1xuXG4gICAgX3NldEVuZCh0aGlzKTsgLy8gaWYgcGFyZW50LnNtb290aENoaWxkVGltaW5nIHdhcyBmYWxzZSwgdGhlIGVuZCB0aW1lIGRpZG4ndCBnZXQgdXBkYXRlZCBpbiB0aGUgX2FsaWduUGxheWhlYWQoKSBtZXRob2QsIHNvIGRvIGl0IGhlcmUuXG5cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZWQgPSBmdW5jdGlvbiBwYXVzZWQodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcHMgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcyA9IHZhbHVlO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcFRpbWUgPSB0aGlzLl90VGltZSB8fCBNYXRoLm1heCgtdGhpcy5fZGVsYXksIHRoaXMucmF3VGltZSgpKTsgLy8gaWYgdGhlIHBhdXNlIG9jY3VycyBkdXJpbmcgdGhlIGRlbGF5IHBoYXNlLCBtYWtlIHN1cmUgdGhhdCdzIGZhY3RvcmVkIGluIHdoZW4gcmVzdW1pbmcuXG5cbiAgICAgICAgdGhpcy5fdHMgPSB0aGlzLl9hY3QgPSAwOyAvLyBfdHMgaXMgdGhlIGZ1bmN0aW9uYWwgdGltZVNjYWxlLCBzbyBhIHBhdXNlZCB0d2VlbiB3b3VsZCBlZmZlY3RpdmVseSBoYXZlIGEgdGltZVNjYWxlIG9mIDAuIFdlIHJlY29yZCB0aGUgXCJyZWFsXCIgdGltZVNjYWxlIGFzIF9ydHMgKHJlY29yZGVkIHRpbWUgc2NhbGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfd2FrZSgpO1xuXG4gICAgICAgIHRoaXMuX3RzID0gdGhpcy5fcnRzOyAvL29ubHkgZGVmZXIgdG8gX3BUaW1lIChwYXVzZVRpbWUpIGlmIHRUaW1lIGlzIHplcm8uIFJlbWVtYmVyLCBzb21lb25lIGNvdWxkIHBhdXNlKCkgYW4gYW5pbWF0aW9uLCB0aGVuIHNjcnViIHRoZSBwbGF5aGVhZCBhbmQgcmVzdW1lKCkuIElmIHRoZSBwYXJlbnQgZG9lc24ndCBoYXZlIHNtb290aENoaWxkVGltaW5nLCB3ZSByZW5kZXIgYXQgdGhlIHJhd1RpbWUoKSBiZWNhdXNlIHRoZSBzdGFydFRpbWUgd29uJ3QgZ2V0IHVwZGF0ZWQuXG5cbiAgICAgICAgdGhpcy50b3RhbFRpbWUodGhpcy5wYXJlbnQgJiYgIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nID8gdGhpcy5yYXdUaW1lKCkgOiB0aGlzLl90VGltZSB8fCB0aGlzLl9wVGltZSwgdGhpcy5wcm9ncmVzcygpID09PSAxICYmIE1hdGguYWJzKHRoaXMuX3pUaW1lKSAhPT0gX3RpbnlOdW0gJiYgKHRoaXMuX3RUaW1lIC09IF90aW55TnVtKSk7IC8vIGVkZ2UgY2FzZTogYW5pbWF0aW9uLnByb2dyZXNzKDEpLnBhdXNlKCkucGxheSgpIHdvdWxkbid0IHJlbmRlciBhZ2FpbiBiZWNhdXNlIHRoZSBwbGF5aGVhZCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQsIGJ1dCB0aGUgY2FsbCB0byB0b3RhbFRpbWUoKSBiZWxvdyB3aWxsIGFkZCBpdCBiYWNrIHRvIGl0cyBwYXJlbnQuLi5hbmQgbm90IHJlbW92ZSBpdCBhZ2FpbiAoc2luY2UgcmVtb3Zpbmcgb25seSBoYXBwZW5zIHVwb24gcmVuZGVyaW5nIGF0IGEgbmV3IHRpbWUpLiBPZmZzZXR0aW5nIHRoZSBfdFRpbWUgc2xpZ2h0bHkgaXMgZG9uZSBzaW1wbHkgdG8gY2F1c2UgdGhlIGZpbmFsIHJlbmRlciBpbiB0b3RhbFRpbWUoKSB0aGF0J2xsIHBvcCBpdCBvZmYgaXRzIHRpbWVsaW5lIChpZiBhdXRvUmVtb3ZlQ2hpbGRyZW4gaXMgdHJ1ZSwgb2YgY291cnNlKS4gQ2hlY2sgdG8gbWFrZSBzdXJlIF96VGltZSBpc24ndCAtX3RpbnlOdW0gdG8gYXZvaWQgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwbGF5aGVhZCBpcyBwdXNoZWQgdG8gdGhlIGVuZCBidXQgSU5TSURFIGEgdHdlZW4vY2FsbGJhY2ssIHRoZSB0aW1lbGluZSBpdHNlbGYgaXMgcGF1c2VkIHRodXMgaGFsdGluZyByZW5kZXJpbmcgYW5kIGxlYXZpbmcgYSBmZXcgdW5yZW5kZXJlZC4gV2hlbiByZXN1bWluZywgaXQgd291bGRuJ3QgcmVuZGVyIHRob3NlIG90aGVyd2lzZS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3RhcnRUaW1lID0gZnVuY3Rpb24gc3RhcnRUaW1lKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3N0YXJ0ID0gdmFsdWU7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHA7XG4gICAgICBwYXJlbnQgJiYgKHBhcmVudC5fc29ydCB8fCAhdGhpcy5wYXJlbnQpICYmIF9hZGRUb1RpbWVsaW5lKHBhcmVudCwgdGhpcywgdmFsdWUgLSB0aGlzLl9kZWxheSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc3RhcnQ7XG4gIH07XG5cbiAgX3Byb3RvLmVuZFRpbWUgPSBmdW5jdGlvbiBlbmRUaW1lKGluY2x1ZGVSZXBlYXRzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0ICsgKF9pc05vdEZhbHNlKGluY2x1ZGVSZXBlYXRzKSA/IHRoaXMudG90YWxEdXJhdGlvbigpIDogdGhpcy5kdXJhdGlvbigpKSAvIE1hdGguYWJzKHRoaXMuX3RzIHx8IDEpO1xuICB9O1xuXG4gIF9wcm90by5yYXdUaW1lID0gZnVuY3Rpb24gcmF3VGltZSh3cmFwUmVwZWF0cykge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudCB8fCB0aGlzLl9kcDsgLy8gX2RwID0gZGV0YWNoZWQgcGFyZW50XG5cbiAgICByZXR1cm4gIXBhcmVudCA/IHRoaXMuX3RUaW1lIDogd3JhcFJlcGVhdHMgJiYgKCF0aGlzLl90cyB8fCB0aGlzLl9yZXBlYXQgJiYgdGhpcy5fdGltZSAmJiB0aGlzLnRvdGFsUHJvZ3Jlc3MoKSA8IDEpID8gdGhpcy5fdFRpbWUgJSAodGhpcy5fZHVyICsgdGhpcy5fckRlbGF5KSA6ICF0aGlzLl90cyA/IHRoaXMuX3RUaW1lIDogX3BhcmVudFRvQ2hpbGRUb3RhbFRpbWUocGFyZW50LnJhd1RpbWUod3JhcFJlcGVhdHMpLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8uZ2xvYmFsVGltZSA9IGZ1bmN0aW9uIGdsb2JhbFRpbWUocmF3VGltZSkge1xuICAgIHZhciBhbmltYXRpb24gPSB0aGlzLFxuICAgICAgICB0aW1lID0gYXJndW1lbnRzLmxlbmd0aCA/IHJhd1RpbWUgOiBhbmltYXRpb24ucmF3VGltZSgpO1xuXG4gICAgd2hpbGUgKGFuaW1hdGlvbikge1xuICAgICAgdGltZSA9IGFuaW1hdGlvbi5fc3RhcnQgKyB0aW1lIC8gKGFuaW1hdGlvbi5fdHMgfHwgMSk7XG4gICAgICBhbmltYXRpb24gPSBhbmltYXRpb24uX2RwO1xuICAgIH1cblxuICAgIHJldHVybiB0aW1lO1xuICB9O1xuXG4gIF9wcm90by5yZXBlYXQgPSBmdW5jdGlvbiByZXBlYXQodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVwZWF0ID0gdmFsdWUgPT09IEluZmluaXR5ID8gLTIgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBfb25VcGRhdGVUb3RhbER1cmF0aW9uKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZXBlYXQgPT09IC0yID8gSW5maW5pdHkgOiB0aGlzLl9yZXBlYXQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlcGVhdERlbGF5ID0gZnVuY3Rpb24gcmVwZWF0RGVsYXkodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdmFyIHRpbWUgPSB0aGlzLl90aW1lO1xuICAgICAgdGhpcy5fckRlbGF5ID0gdmFsdWU7XG5cbiAgICAgIF9vblVwZGF0ZVRvdGFsRHVyYXRpb24odGhpcyk7XG5cbiAgICAgIHJldHVybiB0aW1lID8gdGhpcy50aW1lKHRpbWUpIDogdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fckRlbGF5O1xuICB9O1xuXG4gIF9wcm90by55b3lvID0gZnVuY3Rpb24geW95byh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl95b3lvID0gdmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5feW95bztcbiAgfTtcblxuICBfcHJvdG8uc2VlayA9IGZ1bmN0aW9uIHNlZWsocG9zaXRpb24sIHN1cHByZXNzRXZlbnRzKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoaW5jbHVkZURlbGF5LCBzdXBwcmVzc0V2ZW50cykge1xuICAgIHJldHVybiB0aGlzLnBsYXkoKS50b3RhbFRpbWUoaW5jbHVkZURlbGF5ID8gLXRoaXMuX2RlbGF5IDogMCwgX2lzTm90RmFsc2Uoc3VwcHJlc3NFdmVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8ucGxheSA9IGZ1bmN0aW9uIHBsYXkoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20sIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZChmYWxzZSkucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoZnJvbSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBmcm9tICE9IG51bGwgJiYgdGhpcy5zZWVrKGZyb20gfHwgdGhpcy50b3RhbER1cmF0aW9uKCksIHN1cHByZXNzRXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcy5yZXZlcnNlZCh0cnVlKS5wYXVzZWQoZmFsc2UpO1xuICB9O1xuXG4gIF9wcm90by5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKGF0VGltZSwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBhdFRpbWUgIT0gbnVsbCAmJiB0aGlzLnNlZWsoYXRUaW1lLCBzdXBwcmVzc0V2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKHRydWUpO1xuICB9O1xuXG4gIF9wcm90by5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGF1c2VkKGZhbHNlKTtcbiAgfTtcblxuICBfcHJvdG8ucmV2ZXJzZWQgPSBmdW5jdGlvbiByZXZlcnNlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAhIXZhbHVlICE9PSB0aGlzLnJldmVyc2VkKCkgJiYgdGhpcy50aW1lU2NhbGUoLXRoaXMuX3J0cyB8fCAodmFsdWUgPyAtX3RpbnlOdW0gOiAwKSk7IC8vIGluIGNhc2UgdGltZVNjYWxlIGlzIHplcm8sIHJldmVyc2luZyB3b3VsZCBoYXZlIG5vIGVmZmVjdCBzbyB3ZSB1c2UgX3RpbnlOdW0uXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9ydHMgPCAwO1xuICB9O1xuXG4gIF9wcm90by5pbnZhbGlkYXRlID0gZnVuY3Rpb24gaW52YWxpZGF0ZSgpIHtcbiAgICB0aGlzLl9pbml0dGVkID0gdGhpcy5fYWN0ID0gMDtcbiAgICB0aGlzLl96VGltZSA9IC1fdGlueU51bTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQgfHwgdGhpcy5fZHAsXG4gICAgICAgIHN0YXJ0ID0gdGhpcy5fc3RhcnQsXG4gICAgICAgIHJhd1RpbWU7XG4gICAgcmV0dXJuICEhKCFwYXJlbnQgfHwgdGhpcy5fdHMgJiYgdGhpcy5faW5pdHRlZCAmJiBwYXJlbnQuaXNBY3RpdmUoKSAmJiAocmF3VGltZSA9IHBhcmVudC5yYXdUaW1lKHRydWUpKSA+PSBzdGFydCAmJiByYXdUaW1lIDwgdGhpcy5lbmRUaW1lKHRydWUpIC0gX3RpbnlOdW0pO1xuICB9O1xuXG4gIF9wcm90by5ldmVudENhbGxiYWNrID0gZnVuY3Rpb24gZXZlbnRDYWxsYmFjayh0eXBlLCBjYWxsYmFjaywgcGFyYW1zKSB7XG4gICAgdmFyIHZhcnMgPSB0aGlzLnZhcnM7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgZGVsZXRlIHZhcnNbdHlwZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzW3R5cGVdID0gY2FsbGJhY2s7XG4gICAgICAgIHBhcmFtcyAmJiAodmFyc1t0eXBlICsgXCJQYXJhbXNcIl0gPSBwYXJhbXMpO1xuICAgICAgICB0eXBlID09PSBcIm9uVXBkYXRlXCIgJiYgKHRoaXMuX29uVXBkYXRlID0gY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyc1t0eXBlXTtcbiAgfTtcblxuICBfcHJvdG8udGhlbiA9IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICB2YXIgZiA9IF9pc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogX3Bhc3NUaHJvdWdoLFxuICAgICAgICAgIF9yZXNvbHZlID0gZnVuY3Rpb24gX3Jlc29sdmUoKSB7XG4gICAgICAgIHZhciBfdGhlbiA9IHNlbGYudGhlbjtcbiAgICAgICAgc2VsZi50aGVuID0gbnVsbDsgLy8gdGVtcG9yYXJpbHkgbnVsbCB0aGUgdGhlbigpIG1ldGhvZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQL2lzc3Vlcy8zMjIpXG5cbiAgICAgICAgX2lzRnVuY3Rpb24oZikgJiYgKGYgPSBmKHNlbGYpKSAmJiAoZi50aGVuIHx8IGYgPT09IHNlbGYpICYmIChzZWxmLnRoZW4gPSBfdGhlbik7XG4gICAgICAgIHJlc29sdmUoZik7XG4gICAgICAgIHNlbGYudGhlbiA9IF90aGVuO1xuICAgICAgfTtcblxuICAgICAgaWYgKHNlbGYuX2luaXR0ZWQgJiYgc2VsZi50b3RhbFByb2dyZXNzKCkgPT09IDEgJiYgc2VsZi5fdHMgPj0gMCB8fCAhc2VsZi5fdFRpbWUgJiYgc2VsZi5fdHMgPCAwKSB7XG4gICAgICAgIF9yZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLl9wcm9tID0gX3Jlc29sdmU7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmtpbGwgPSBmdW5jdGlvbiBraWxsKCkge1xuICAgIF9pbnRlcnJ1cHQodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFuaW1hdGlvbjtcbn0oKTtcblxuX3NldERlZmF1bHRzKEFuaW1hdGlvbi5wcm90b3R5cGUsIHtcbiAgX3RpbWU6IDAsXG4gIF9zdGFydDogMCxcbiAgX2VuZDogMCxcbiAgX3RUaW1lOiAwLFxuICBfdER1cjogMCxcbiAgX2RpcnR5OiAwLFxuICBfcmVwZWF0OiAwLFxuICBfeW95bzogZmFsc2UsXG4gIHBhcmVudDogbnVsbCxcbiAgX2luaXR0ZWQ6IGZhbHNlLFxuICBfckRlbGF5OiAwLFxuICBfdHM6IDEsXG4gIF9kcDogMCxcbiAgcmF0aW86IDAsXG4gIF96VGltZTogLV90aW55TnVtLFxuICBfcHJvbTogMCxcbiAgX3BzOiBmYWxzZSxcbiAgX3J0czogMVxufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVElNRUxJTkVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbmV4cG9ydCB2YXIgVGltZWxpbmUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BbmltYXRpb24pIHtcbiAgX2luaGVyaXRzTG9vc2UoVGltZWxpbmUsIF9BbmltYXRpb24pO1xuXG4gIGZ1bmN0aW9uIFRpbWVsaW5lKHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IHt9O1xuICAgIH1cblxuICAgIF90aGlzID0gX0FuaW1hdGlvbi5jYWxsKHRoaXMsIHZhcnMpIHx8IHRoaXM7XG4gICAgX3RoaXMubGFiZWxzID0ge307XG4gICAgX3RoaXMuc21vb3RoQ2hpbGRUaW1pbmcgPSAhIXZhcnMuc21vb3RoQ2hpbGRUaW1pbmc7XG4gICAgX3RoaXMuYXV0b1JlbW92ZUNoaWxkcmVuID0gISF2YXJzLmF1dG9SZW1vdmVDaGlsZHJlbjtcbiAgICBfdGhpcy5fc29ydCA9IF9pc05vdEZhbHNlKHZhcnMuc29ydENoaWxkcmVuKTtcbiAgICBfZ2xvYmFsVGltZWxpbmUgJiYgX2FkZFRvVGltZWxpbmUodmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgcG9zaXRpb24pO1xuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMucmV2ZXJzZSgpO1xuICAgIHZhcnMucGF1c2VkICYmIF90aGlzLnBhdXNlZCh0cnVlKTtcbiAgICB2YXJzLnNjcm9sbFRyaWdnZXIgJiYgX3Njcm9sbFRyaWdnZXIoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHZhcnMuc2Nyb2xsVHJpZ2dlcik7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBUaW1lbGluZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgwLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5mcm9tID0gZnVuY3Rpb24gZnJvbSh0YXJnZXRzLCB2YXJzLCBwb3NpdGlvbikge1xuICAgIF9jcmVhdGVUd2VlblR5cGUoMSwgYXJndW1lbnRzLCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuZnJvbVRvID0gZnVuY3Rpb24gZnJvbVRvKHRhcmdldHMsIGZyb21WYXJzLCB0b1ZhcnMsIHBvc2l0aW9uKSB7XG4gICAgX2NyZWF0ZVR3ZWVuVHlwZSgyLCBhcmd1bWVudHMsIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zZXQgPSBmdW5jdGlvbiBzZXQodGFyZ2V0cywgdmFycywgcG9zaXRpb24pIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh2YXJzKS5yZXBlYXREZWxheSB8fCAodmFycy5yZXBlYXQgPSAwKTtcbiAgICB2YXJzLmltbWVkaWF0ZVJlbmRlciA9ICEhdmFycy5pbW1lZGlhdGVSZW5kZXI7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSwgMSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5jYWxsID0gZnVuY3Rpb24gY2FsbChjYWxsYmFjaywgcGFyYW1zLCBwb3NpdGlvbikge1xuICAgIHJldHVybiBfYWRkVG9UaW1lbGluZSh0aGlzLCBUd2Vlbi5kZWxheWVkQ2FsbCgwLCBjYWxsYmFjaywgcGFyYW1zKSwgcG9zaXRpb24pO1xuICB9IC8vT05MWSBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSEgTWF5YmUgZGVsZXRlP1xuICA7XG5cbiAgX3Byb3RvMi5zdGFnZ2VyVG8gPSBmdW5jdGlvbiBzdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKSB7XG4gICAgdmFycy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIHZhcnMuc3RhZ2dlciA9IHZhcnMuc3RhZ2dlciB8fCBzdGFnZ2VyO1xuICAgIHZhcnMub25Db21wbGV0ZSA9IG9uQ29tcGxldGVBbGw7XG4gICAgdmFycy5vbkNvbXBsZXRlUGFyYW1zID0gb25Db21wbGV0ZUFsbFBhcmFtcztcbiAgICB2YXJzLnBhcmVudCA9IHRoaXM7XG4gICAgbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5zdGFnZ2VyRnJvbSA9IGZ1bmN0aW9uIHN0YWdnZXJGcm9tKHRhcmdldHMsIGR1cmF0aW9uLCB2YXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHZhcnMucnVuQmFja3dhcmRzID0gMTtcbiAgICBfaW5oZXJpdERlZmF1bHRzKHZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHZhcnMuaW1tZWRpYXRlUmVuZGVyKTtcbiAgICByZXR1cm4gdGhpcy5zdGFnZ2VyVG8odGFyZ2V0cywgZHVyYXRpb24sIHZhcnMsIHN0YWdnZXIsIHBvc2l0aW9uLCBvbkNvbXBsZXRlQWxsLCBvbkNvbXBsZXRlQWxsUGFyYW1zKTtcbiAgfTtcblxuICBfcHJvdG8yLnN0YWdnZXJGcm9tVG8gPSBmdW5jdGlvbiBzdGFnZ2VyRnJvbVRvKHRhcmdldHMsIGR1cmF0aW9uLCBmcm9tVmFycywgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcykge1xuICAgIHRvVmFycy5zdGFydEF0ID0gZnJvbVZhcnM7XG4gICAgX2luaGVyaXREZWZhdWx0cyh0b1ZhcnMpLmltbWVkaWF0ZVJlbmRlciA9IF9pc05vdEZhbHNlKHRvVmFycy5pbW1lZGlhdGVSZW5kZXIpO1xuICAgIHJldHVybiB0aGlzLnN0YWdnZXJUbyh0YXJnZXRzLCBkdXJhdGlvbiwgdG9WYXJzLCBzdGFnZ2VyLCBwb3NpdGlvbiwgb25Db21wbGV0ZUFsbCwgb25Db21wbGV0ZUFsbFBhcmFtcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIodG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHtcbiAgICB2YXIgcHJldlRpbWUgPSB0aGlzLl90aW1lLFxuICAgICAgICB0RHVyID0gdGhpcy5fZGlydHkgPyB0aGlzLnRvdGFsRHVyYXRpb24oKSA6IHRoaXMuX3REdXIsXG4gICAgICAgIGR1ciA9IHRoaXMuX2R1cixcbiAgICAgICAgdFRpbWUgPSB0b3RhbFRpbWUgPD0gMCA/IDAgOiBfcm91bmRQcmVjaXNlKHRvdGFsVGltZSksXG4gICAgICAgIC8vIGlmIGEgcGF1c2VkIHRpbWVsaW5lIGlzIHJlc3VtZWQgKG9yIGl0cyBfc3RhcnQgaXMgdXBkYXRlZCBmb3IgYW5vdGhlciByZWFzb24uLi53aGljaCByb3VuZHMgaXQpLCB0aGF0IGNvdWxkIHJlc3VsdCBpbiB0aGUgcGxheWhlYWQgc2hpZnRpbmcgYSAqKnRpbnkqKiBhbW91bnQgYW5kIGEgemVyby1kdXJhdGlvbiBjaGlsZCBhdCB0aGF0IHNwb3QgbWF5IGdldCByZW5kZXJlZCBhdCBhIGRpZmZlcmVudCByYXRpbywgbGlrZSBpdHMgdG90YWxUaW1lIGluIHJlbmRlcigpIG1heSBiZSAxZS0xNyBpbnN0ZWFkIG9mIDAsIGZvciBleGFtcGxlLlxuICAgIGNyb3NzaW5nU3RhcnQgPSB0aGlzLl96VGltZSA8IDAgIT09IHRvdGFsVGltZSA8IDAgJiYgKHRoaXMuX2luaXR0ZWQgfHwgIWR1ciksXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGNoaWxkLFxuICAgICAgICBuZXh0LFxuICAgICAgICBpdGVyYXRpb24sXG4gICAgICAgIGN5Y2xlRHVyYXRpb24sXG4gICAgICAgIHByZXZQYXVzZWQsXG4gICAgICAgIHBhdXNlVHdlZW4sXG4gICAgICAgIHRpbWVTY2FsZSxcbiAgICAgICAgcHJldlN0YXJ0LFxuICAgICAgICBwcmV2SXRlcmF0aW9uLFxuICAgICAgICB5b3lvLFxuICAgICAgICBpc1lveW87XG4gICAgdGhpcyAhPT0gX2dsb2JhbFRpbWVsaW5lICYmIHRUaW1lID4gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCAmJiAodFRpbWUgPSB0RHVyKTtcblxuICAgIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgZm9yY2UgfHwgY3Jvc3NpbmdTdGFydCkge1xuICAgICAgaWYgKHByZXZUaW1lICE9PSB0aGlzLl90aW1lICYmIGR1cikge1xuICAgICAgICAvL2lmIHRvdGFsRHVyYXRpb24oKSBmaW5kcyBhIGNoaWxkIHdpdGggYSBuZWdhdGl2ZSBzdGFydFRpbWUgYW5kIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHRoaW5ncyBnZXQgc2hpZnRlZCBhcm91bmQgaW50ZXJuYWxseSBzbyB3ZSBuZWVkIHRvIGFkanVzdCB0aGUgdGltZSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIGEgdHdlZW4gc3RhcnRzIGF0IC0zMCB3ZSBtdXN0IHNoaWZ0IEVWRVJZVEhJTkcgZm9yd2FyZCAzMCBzZWNvbmRzIGFuZCBtb3ZlIHRoaXMgdGltZWxpbmUncyBzdGFydFRpbWUgYmFja3dhcmQgYnkgMzAgc2Vjb25kcyBzbyB0aGF0IHRoaW5ncyBhbGlnbiB3aXRoIHRoZSBwbGF5aGVhZCAobm8ganVtcCkuXG4gICAgICAgIHRUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgICAgdG90YWxUaW1lICs9IHRoaXMuX3RpbWUgLSBwcmV2VGltZTtcbiAgICAgIH1cblxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgcHJldlN0YXJ0ID0gdGhpcy5fc3RhcnQ7XG4gICAgICB0aW1lU2NhbGUgPSB0aGlzLl90cztcbiAgICAgIHByZXZQYXVzZWQgPSAhdGltZVNjYWxlO1xuXG4gICAgICBpZiAoY3Jvc3NpbmdTdGFydCkge1xuICAgICAgICBkdXIgfHwgKHByZXZUaW1lID0gdGhpcy5felRpbWUpOyAvL3doZW4gdGhlIHBsYXloZWFkIGFycml2ZXMgYXQgRVhBQ1RMWSB0aW1lIDAgKHJpZ2h0IG9uIHRvcCkgb2YgYSB6ZXJvLWR1cmF0aW9uIHRpbWVsaW5lLCB3ZSBuZWVkIHRvIGRpc2Nlcm4gaWYgZXZlbnRzIGFyZSBzdXBwcmVzc2VkIHNvIHRoYXQgd2hlbiB0aGUgcGxheWhlYWQgbW92ZXMgYWdhaW4gKG5leHQgdGltZSksIGl0J2xsIHRyaWdnZXIgdGhlIGNhbGxiYWNrLiBJZiBldmVudHMgYXJlIE5PVCBzdXBwcmVzc2VkLCBvYnZpb3VzbHkgdGhlIGNhbGxiYWNrIHdvdWxkIGJlIHRyaWdnZXJlZCBpbiB0aGlzIHJlbmRlci4gQmFzaWNhbGx5LCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUgZWl0aGVyIHdoZW4gdGhlIHBsYXloZWFkIEFSUklWRVMgb3IgTEVBVkVTIHRoaXMgZXhhY3Qgc3BvdCwgbm90IGJvdGguIEltYWdpbmUgZG9pbmcgYSB0aW1lbGluZS5zZWVrKDApIGFuZCB0aGVyZSdzIGEgY2FsbGJhY2sgdGhhdCBzaXRzIGF0IDAuIFNpbmNlIGV2ZW50cyBhcmUgc3VwcHJlc3NlZCBvbiB0aGF0IHNlZWsoKSBieSBkZWZhdWx0LCBub3RoaW5nIHdpbGwgZmlyZSwgYnV0IHdoZW4gdGhlIHBsYXloZWFkIG1vdmVzIG9mZiBvZiB0aGF0IHBvc2l0aW9uLCB0aGUgY2FsbGJhY2sgc2hvdWxkIGZpcmUuIFRoaXMgYmVoYXZpb3IgaXMgd2hhdCBwZW9wbGUgaW50dWl0aXZlbHkgZXhwZWN0LlxuXG4gICAgICAgICh0b3RhbFRpbWUgfHwgIXN1cHByZXNzRXZlbnRzKSAmJiAodGhpcy5felRpbWUgPSB0b3RhbFRpbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICB5b3lvID0gdGhpcy5feW95bztcbiAgICAgICAgY3ljbGVEdXJhdGlvbiA9IGR1ciArIHRoaXMuX3JEZWxheTtcblxuICAgICAgICBpZiAodGhpcy5fcmVwZWF0IDwgLTEgJiYgdG90YWxUaW1lIDwgMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsVGltZShjeWNsZUR1cmF0aW9uICogMTAwICsgdG90YWxUaW1lLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZSA9IF9yb3VuZFByZWNpc2UodFRpbWUgJSBjeWNsZUR1cmF0aW9uKTsgLy9yb3VuZCB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBlcnJvcnMuICg0ICUgMC44IHNob3VsZCBiZSAwIGJ1dCBzb21lIGJyb3dzZXJzIHJlcG9ydCBpdCBhcyAwLjc5OTk5OTk5ISlcblxuICAgICAgICBpZiAodFRpbWUgPT09IHREdXIpIHtcbiAgICAgICAgICAvLyB0aGUgdER1ciA9PT0gdFRpbWUgaXMgZm9yIGVkZ2UgY2FzZXMgd2hlcmUgdGhlcmUncyBhIGxlbmd0aHkgZGVjaW1hbCBvbiB0aGUgZHVyYXRpb24gYW5kIGl0IG1heSByZWFjaCB0aGUgdmVyeSBlbmQgYnV0IHRoZSB0aW1lIGlzIHJlbmRlcmVkIGFzIG5vdC1xdWl0ZS10aGVyZSAocmVtZW1iZXIsIHREdXIgaXMgcm91bmRlZCB0byA0IGRlY2ltYWxzIHdoZXJlYXMgZHVyIGlzbid0KVxuICAgICAgICAgIGl0ZXJhdGlvbiA9IHRoaXMuX3JlcGVhdDtcbiAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZXJhdGlvbiA9IH5+KHRUaW1lIC8gY3ljbGVEdXJhdGlvbik7XG5cbiAgICAgICAgICBpZiAoaXRlcmF0aW9uICYmIGl0ZXJhdGlvbiA9PT0gdFRpbWUgLyBjeWNsZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aW1lID0gZHVyO1xuICAgICAgICAgICAgaXRlcmF0aW9uLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGltZSA+IGR1ciAmJiAodGltZSA9IGR1cik7XG4gICAgICAgIH1cblxuICAgICAgICBwcmV2SXRlcmF0aW9uID0gX2FuaW1hdGlvbkN5Y2xlKHRoaXMuX3RUaW1lLCBjeWNsZUR1cmF0aW9uKTtcbiAgICAgICAgIXByZXZUaW1lICYmIHRoaXMuX3RUaW1lICYmIHByZXZJdGVyYXRpb24gIT09IGl0ZXJhdGlvbiAmJiAocHJldkl0ZXJhdGlvbiA9IGl0ZXJhdGlvbik7IC8vIGVkZ2UgY2FzZSAtIGlmIHNvbWVvbmUgZG9lcyBhZGRQYXVzZSgpIGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyBvZiBhIHJlcGVhdGluZyB0aW1lbGluZSwgdGhhdCBwYXVzZSBpcyB0ZWNobmljYWxseSBhdCB0aGUgc2FtZSBzcG90IGFzIHRoZSBlbmQgd2hpY2ggY2F1c2VzIHRoaXMuX3RpbWUgdG8gZ2V0IHNldCB0byAwIHdoZW4gdGhlIHRvdGFsVGltZSB3b3VsZCBub3JtYWxseSBwbGFjZSB0aGUgcGxheWhlYWQgYXQgdGhlIGVuZC4gU2VlIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9mb3J1bXMvdG9waWMvMjM4MjMtY2xvc2luZy1uYXYtYW5pbWF0aW9uLW5vdC13b3JraW5nLW9uLWllLWFuZC1pcGhvbmUtNi1tYXliZS1vdGhlci1vbGRlci1icm93c2VyLz90YWI9Y29tbWVudHMjY29tbWVudC0xMTMwMDVcblxuICAgICAgICBpZiAoeW95byAmJiBpdGVyYXRpb24gJiAxKSB7XG4gICAgICAgICAgdGltZSA9IGR1ciAtIHRpbWU7XG4gICAgICAgICAgaXNZb3lvID0gMTtcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICBtYWtlIHN1cmUgY2hpbGRyZW4gYXQgdGhlIGVuZC9iZWdpbm5pbmcgb2YgdGhlIHRpbWVsaW5lIGFyZSByZW5kZXJlZCBwcm9wZXJseS4gSWYsIGZvciBleGFtcGxlLFxuICAgICAgICBhIDMtc2Vjb25kIGxvbmcgdGltZWxpbmUgcmVuZGVyZWQgYXQgMi45IHNlY29uZHMgcHJldmlvdXNseSwgYW5kIG5vdyByZW5kZXJzIGF0IDMuMiBzZWNvbmRzICh3aGljaFxuICAgICAgICB3b3VsZCBnZXQgdHJhbnNsYXRlZCB0byAyLjggc2Vjb25kcyBpZiB0aGUgdGltZWxpbmUgeW95b3Mgb3IgMC4yIHNlY29uZHMgaWYgaXQganVzdCByZXBlYXRzKSwgdGhlcmVcbiAgICAgICAgY291bGQgYmUgYSBjYWxsYmFjayBvciBhIHNob3J0IHR3ZWVuIHRoYXQncyBhdCAyLjk1IG9yIDMgc2Vjb25kcyBpbiB3aGljaCB3b3VsZG4ndCByZW5kZXIuIFNvXG4gICAgICAgIHdlIG5lZWQgdG8gcHVzaCB0aGUgdGltZWxpbmUgdG8gdGhlIGVuZCAoYW5kL29yIGJlZ2lubmluZyBkZXBlbmRpbmcgb24gaXRzIHlveW8gdmFsdWUpLiBBbHNvIHdlIG11c3RcbiAgICAgICAgZW5zdXJlIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMgYXQgdGhlIHZlcnkgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgVGltZWxpbmUgd29yay5cbiAgICAgICAgKi9cblxuXG4gICAgICAgIGlmIChpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICB2YXIgcmV3aW5kaW5nID0geW95byAmJiBwcmV2SXRlcmF0aW9uICYgMSxcbiAgICAgICAgICAgICAgZG9lc1dyYXAgPSByZXdpbmRpbmcgPT09ICh5b3lvICYmIGl0ZXJhdGlvbiAmIDEpO1xuICAgICAgICAgIGl0ZXJhdGlvbiA8IHByZXZJdGVyYXRpb24gJiYgKHJld2luZGluZyA9ICFyZXdpbmRpbmcpO1xuICAgICAgICAgIHByZXZUaW1lID0gcmV3aW5kaW5nID8gMCA6IGR1cjtcbiAgICAgICAgICB0aGlzLl9sb2NrID0gMTtcbiAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSB8fCAoaXNZb3lvID8gMCA6IF9yb3VuZFByZWNpc2UoaXRlcmF0aW9uICogY3ljbGVEdXJhdGlvbikpLCBzdXBwcmVzc0V2ZW50cywgIWR1cikuX2xvY2sgPSAwO1xuICAgICAgICAgIHRoaXMuX3RUaW1lID0gdFRpbWU7IC8vIGlmIGEgdXNlciBnZXRzIHRoZSBpdGVyYXRpb24oKSBpbnNpZGUgdGhlIG9uUmVwZWF0LCBmb3IgZXhhbXBsZSwgaXQgc2hvdWxkIGJlIGFjY3VyYXRlLlxuXG4gICAgICAgICAgIXN1cHByZXNzRXZlbnRzICYmIHRoaXMucGFyZW50ICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uUmVwZWF0XCIpO1xuICAgICAgICAgIHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgKHRoaXMuaW52YWxpZGF0ZSgpLl9sb2NrID0gMSk7XG5cbiAgICAgICAgICBpZiAocHJldlRpbWUgJiYgcHJldlRpbWUgIT09IHRoaXMuX3RpbWUgfHwgcHJldlBhdXNlZCAhPT0gIXRoaXMuX3RzIHx8IHRoaXMudmFycy5vblJlcGVhdCAmJiAhdGhpcy5wYXJlbnQgJiYgIXRoaXMuX2FjdCkge1xuICAgICAgICAgICAgLy8gaWYgcHJldlRpbWUgaXMgMCBhbmQgd2UgcmVuZGVyIGF0IHRoZSB2ZXJ5IGVuZCwgX3RpbWUgd2lsbCBiZSB0aGUgZW5kLCB0aHVzIHdvbid0IG1hdGNoLiBTbyBpbiB0aGlzIGVkZ2UgY2FzZSwgcHJldlRpbWUgd29uJ3QgbWF0Y2ggX3RpbWUgYnV0IHRoYXQncyBva2F5LiBJZiBpdCBnZXRzIGtpbGxlZCBpbiB0aGUgb25SZXBlYXQsIGVqZWN0IGFzIHdlbGwuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkdXIgPSB0aGlzLl9kdXI7IC8vIGluIGNhc2UgdGhlIGR1cmF0aW9uIGNoYW5nZWQgaW4gdGhlIG9uUmVwZWF0XG5cbiAgICAgICAgICB0RHVyID0gdGhpcy5fdER1cjtcblxuICAgICAgICAgIGlmIChkb2VzV3JhcCkge1xuICAgICAgICAgICAgdGhpcy5fbG9jayA9IDI7XG4gICAgICAgICAgICBwcmV2VGltZSA9IHJld2luZGluZyA/IGR1ciA6IC0wLjAwMDE7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihwcmV2VGltZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCAmJiAhaXNZb3lvICYmIHRoaXMuaW52YWxpZGF0ZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgICAgICAgaWYgKCF0aGlzLl90cyAmJiAhcHJldlBhdXNlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSAvL2luIG9yZGVyIGZvciB5b3lvRWFzZSB0byB3b3JrIHByb3Blcmx5IHdoZW4gdGhlcmUncyBhIHN0YWdnZXIsIHdlIG11c3Qgc3dhcCBvdXQgdGhlIGVhc2UgaW4gZWFjaCBzdWItdHdlZW4uXG5cblxuICAgICAgICAgIF9wcm9wYWdhdGVZb3lvRWFzZSh0aGlzLCBpc1lveW8pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9oYXNQYXVzZSAmJiAhdGhpcy5fZm9yY2luZyAmJiB0aGlzLl9sb2NrIDwgMikge1xuICAgICAgICBwYXVzZVR3ZWVuID0gX2ZpbmROZXh0UGF1c2VUd2Vlbih0aGlzLCBfcm91bmRQcmVjaXNlKHByZXZUaW1lKSwgX3JvdW5kUHJlY2lzZSh0aW1lKSk7XG5cbiAgICAgICAgaWYgKHBhdXNlVHdlZW4pIHtcbiAgICAgICAgICB0VGltZSAtPSB0aW1lIC0gKHRpbWUgPSBwYXVzZVR3ZWVuLl9zdGFydCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuICAgICAgdGhpcy5fYWN0ID0gIXRpbWVTY2FsZTsgLy9hcyBsb25nIGFzIGl0J3Mgbm90IHBhdXNlZCwgZm9yY2UgaXQgdG8gYmUgYWN0aXZlIHNvIHRoYXQgaWYgdGhlIHVzZXIgcmVuZGVycyBpbmRlcGVuZGVudCBvZiB0aGUgcGFyZW50IHRpbWVsaW5lLCBpdCdsbCBiZSBmb3JjZWQgdG8gcmUtcmVuZGVyIG9uIHRoZSBuZXh0IHRpY2suXG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICB0aGlzLl9vblVwZGF0ZSA9IHRoaXMudmFycy5vblVwZGF0ZTtcbiAgICAgICAgdGhpcy5faW5pdHRlZCA9IDE7XG4gICAgICAgIHRoaXMuX3pUaW1lID0gdG90YWxUaW1lO1xuICAgICAgICBwcmV2VGltZSA9IDA7IC8vIHVwb24gaW5pdCwgdGhlIHBsYXloZWFkIHNob3VsZCBhbHdheXMgZ28gZm9yd2FyZDsgc29tZW9uZSBjb3VsZCBpbnZhbGlkYXRlKCkgYSBjb21wbGV0ZWQgdGltZWxpbmUgYW5kIHRoZW4gaWYgdGhleSByZXN0YXJ0KCksIHRoYXQgd291bGQgbWFrZSBjaGlsZCB0d2VlbnMgcmVuZGVyIGluIHJldmVyc2Ugb3JkZXIgd2hpY2ggY291bGQgbG9jayBpbiB0aGUgd3Jvbmcgc3RhcnRpbmcgdmFsdWVzIGlmIHRoZXkgYnVpbGQgb24gZWFjaCBvdGhlciwgbGlrZSB0bC50byhvYmosIHt4OiAxMDB9KS50byhvYmosIHt4OiAwfSkuXG4gICAgICB9XG5cbiAgICAgIGlmICghcHJldlRpbWUgJiYgdGltZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdFRpbWUgIT09IHRUaW1lKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgb25TdGFydCB0cmlnZ2VyZWQgYSByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCwgZWplY3QuIExpa2UgaWYgc29tZW9uZSBkaWQgYW5pbWF0aW9uLnBhdXNlKDAuNSkgb3Igc29tZXRoaW5nIGluc2lkZSB0aGUgb25TdGFydC5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZSA+PSBwcmV2VGltZSAmJiB0b3RhbFRpbWUgPj0gMCkge1xuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fbmV4dDtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCB0aW1lID49IGNoaWxkLl9zdGFydCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAodGltZSAtIGNoaWxkLl9zdGFydCkgKiBjaGlsZC5fdHMgOiAoY2hpbGQuX2RpcnR5ID8gY2hpbGQudG90YWxEdXJhdGlvbigpIDogY2hpbGQuX3REdXIpICsgKHRpbWUgLSBjaGlsZC5fc3RhcnQpICogY2hpbGQuX3RzLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpO1xuXG4gICAgICAgICAgICBpZiAodGltZSAhPT0gdGhpcy5fdGltZSB8fCAhdGhpcy5fdHMgJiYgIXByZXZQYXVzZWQpIHtcbiAgICAgICAgICAgICAgLy9pbiBjYXNlIGEgdHdlZW4gcGF1c2VzIG9yIHNlZWtzIHRoZSB0aW1lbGluZSB3aGVuIHJlbmRlcmluZywgbGlrZSBpbnNpZGUgb2YgYW4gb25VcGRhdGUvb25Db21wbGV0ZVxuICAgICAgICAgICAgICBwYXVzZVR3ZWVuID0gMDtcbiAgICAgICAgICAgICAgbmV4dCAmJiAodFRpbWUgKz0gdGhpcy5felRpbWUgPSAtX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gZmxhZyB6VGltZSBhcyBuZWdhdGl2ZSBzbyB0aGF0IHNvIHRoYXQgdGhlIG5leHQgdGltZSByZW5kZXIoKSBpcyBjYWxsZWQgaXQnbGwgYmUgZm9yY2VkICh0byByZW5kZXIgYW55IHJlbWFpbmluZyBjaGlsZHJlbilcblxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGlsZCA9IG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gdGhpcy5fbGFzdDtcbiAgICAgICAgdmFyIGFkanVzdGVkVGltZSA9IHRvdGFsVGltZSA8IDAgPyB0b3RhbFRpbWUgOiB0aW1lOyAvL3doZW4gdGhlIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgYmV5b25kIHRoZSBzdGFydCBvZiB0aGlzIHRpbWVsaW5lLCB3ZSBtdXN0IHBhc3MgdGhhdCBpbmZvcm1hdGlvbiBkb3duIHRvIHRoZSBjaGlsZCBhbmltYXRpb25zIHNvIHRoYXQgemVyby1kdXJhdGlvbiB0d2VlbnMga25vdyB3aGV0aGVyIHRvIHJlbmRlciB0aGVpciBzdGFydGluZyBvciBlbmRpbmcgdmFsdWVzLlxuXG4gICAgICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgICAgIG5leHQgPSBjaGlsZC5fcHJldjtcblxuICAgICAgICAgIGlmICgoY2hpbGQuX2FjdCB8fCBhZGp1c3RlZFRpbWUgPD0gY2hpbGQuX2VuZCkgJiYgY2hpbGQuX3RzICYmIHBhdXNlVHdlZW4gIT09IGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQucGFyZW50ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgIC8vIGFuIGV4dHJlbWUgZWRnZSBjYXNlIC0gdGhlIGNoaWxkJ3MgcmVuZGVyIGNvdWxkIGRvIHNvbWV0aGluZyBsaWtlIGtpbGwoKSB0aGUgXCJuZXh0XCIgb25lIGluIHRoZSBsaW5rZWQgbGlzdCwgb3IgcmVwYXJlbnQgaXQuIEluIHRoYXQgY2FzZSB3ZSBtdXN0IHJlLWluaXRpYXRlIHRoZSB3aG9sZSByZW5kZXIgdG8gYmUgc2FmZS5cbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRvdGFsVGltZSwgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQucmVuZGVyKGNoaWxkLl90cyA+IDAgPyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cyA6IChjaGlsZC5fZGlydHkgPyBjaGlsZC50b3RhbER1cmF0aW9uKCkgOiBjaGlsZC5fdER1cikgKyAoYWRqdXN0ZWRUaW1lIC0gY2hpbGQuX3N0YXJ0KSAqIGNoaWxkLl90cywgc3VwcHJlc3NFdmVudHMsIGZvcmNlKTtcblxuICAgICAgICAgICAgaWYgKHRpbWUgIT09IHRoaXMuX3RpbWUgfHwgIXRoaXMuX3RzICYmICFwcmV2UGF1c2VkKSB7XG4gICAgICAgICAgICAgIC8vaW4gY2FzZSBhIHR3ZWVuIHBhdXNlcyBvciBzZWVrcyB0aGUgdGltZWxpbmUgd2hlbiByZW5kZXJpbmcsIGxpa2UgaW5zaWRlIG9mIGFuIG9uVXBkYXRlL29uQ29tcGxldGVcbiAgICAgICAgICAgICAgcGF1c2VUd2VlbiA9IDA7XG4gICAgICAgICAgICAgIG5leHQgJiYgKHRUaW1lICs9IHRoaXMuX3pUaW1lID0gYWRqdXN0ZWRUaW1lID8gLV90aW55TnVtIDogX3RpbnlOdW0pOyAvLyBpdCBkaWRuJ3QgZmluaXNoIHJlbmRlcmluZywgc28gYWRqdXN0IHpUaW1lIHNvIHRoYXQgc28gdGhhdCB0aGUgbmV4dCB0aW1lIHJlbmRlcigpIGlzIGNhbGxlZCBpdCdsbCBiZSBmb3JjZWQgKHRvIHJlbmRlciBhbnkgcmVtYWluaW5nIGNoaWxkcmVuKVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoaWxkID0gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocGF1c2VUd2VlbiAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBwYXVzZVR3ZWVuLnJlbmRlcih0aW1lID49IHByZXZUaW1lID8gMCA6IC1fdGlueU51bSkuX3pUaW1lID0gdGltZSA+PSBwcmV2VGltZSA/IDEgOiAtMTtcblxuICAgICAgICBpZiAodGhpcy5fdHMpIHtcbiAgICAgICAgICAvL3RoZSBjYWxsYmFjayByZXN1bWVkIHBsYXliYWNrISBTbyBzaW5jZSB3ZSBtYXkgaGF2ZSBoZWxkIGJhY2sgdGhlIHBsYXloZWFkIGR1ZSB0byB3aGVyZSB0aGUgcGF1c2UgaXMgcG9zaXRpb25lZCwgZ28gYWhlYWQgYW5kIGp1bXAgdG8gd2hlcmUgaXQncyBTVVBQT1NFRCB0byBiZSAoaWYgbm8gcGF1c2UgaGFwcGVuZWQpLlxuICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gcHJldlN0YXJ0OyAvL2lmIHRoZSBwYXVzZSB3YXMgYXQgYW4gZWFybGllciB0aW1lIGFuZCB0aGUgdXNlciByZXN1bWVkIGluIHRoZSBjYWxsYmFjaywgaXQgY291bGQgcmVwb3NpdGlvbiB0aGUgdGltZWxpbmUgKGNoYW5naW5nIGl0cyBzdGFydFRpbWUpLCB0aHJvd2luZyB0aGluZ3Mgb2ZmIHNsaWdodGx5LCBzbyB3ZSBtYWtlIHN1cmUgdGhlIF9zdGFydCBkb2Vzbid0IHNoaWZ0LlxuXG4gICAgICAgICAgX3NldEVuZCh0aGlzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb25VcGRhdGUgJiYgIXN1cHByZXNzRXZlbnRzICYmIF9jYWxsYmFjayh0aGlzLCBcIm9uVXBkYXRlXCIsIHRydWUpO1xuICAgICAgaWYgKHRUaW1lID09PSB0RHVyICYmIHREdXIgPj0gdGhpcy50b3RhbER1cmF0aW9uKCkgfHwgIXRUaW1lICYmIHByZXZUaW1lKSBpZiAocHJldlN0YXJ0ID09PSB0aGlzLl9zdGFydCB8fCBNYXRoLmFicyh0aW1lU2NhbGUpICE9PSBNYXRoLmFicyh0aGlzLl90cykpIGlmICghdGhpcy5fbG9jaykge1xuICAgICAgICAodG90YWxUaW1lIHx8ICFkdXIpICYmICh0VGltZSA9PT0gdER1ciAmJiB0aGlzLl90cyA+IDAgfHwgIXRUaW1lICYmIHRoaXMuX3RzIDwgMCkgJiYgX3JlbW92ZUZyb21QYXJlbnQodGhpcywgMSk7IC8vIGRvbid0IHJlbW92ZSBpZiB0aGUgdGltZWxpbmUgaXMgcmV2ZXJzZWQgYW5kIHRoZSBwbGF5aGVhZCBpc24ndCBhdCAwLCBvdGhlcndpc2UgdGwucHJvZ3Jlc3MoMSkucmV2ZXJzZSgpIHdvbid0IHdvcmsuIE9ubHkgcmVtb3ZlIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCB0aGUgZW5kIGFuZCB0aW1lU2NhbGUgaXMgcG9zaXRpdmUsIG9yIGlmIHRoZSBwbGF5aGVhZCBpcyBhdCAwIGFuZCB0aGUgdGltZVNjYWxlIGlzIG5lZ2F0aXZlLlxuXG4gICAgICAgIGlmICghc3VwcHJlc3NFdmVudHMgJiYgISh0b3RhbFRpbWUgPCAwICYmICFwcmV2VGltZSkgJiYgKHRUaW1lIHx8IHByZXZUaW1lIHx8ICF0RHVyKSkge1xuICAgICAgICAgIF9jYWxsYmFjayh0aGlzLCB0VGltZSA9PT0gdER1ciAmJiB0b3RhbFRpbWUgPj0gMCA/IFwib25Db21wbGV0ZVwiIDogXCJvblJldmVyc2VDb21wbGV0ZVwiLCB0cnVlKTtcblxuICAgICAgICAgIHRoaXMuX3Byb20gJiYgISh0VGltZSA8IHREdXIgJiYgdGhpcy50aW1lU2NhbGUoKSA+IDApICYmIHRoaXMuX3Byb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkID0gZnVuY3Rpb24gYWRkKGNoaWxkLCBwb3NpdGlvbikge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgX2lzTnVtYmVyKHBvc2l0aW9uKSB8fCAocG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbiwgY2hpbGQpKTtcblxuICAgIGlmICghKGNoaWxkIGluc3RhbmNlb2YgQW5pbWF0aW9uKSkge1xuICAgICAgaWYgKF9pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmFkZChvYmosIHBvc2l0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMYWJlbChjaGlsZCwgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoX2lzRnVuY3Rpb24oY2hpbGQpKSB7XG4gICAgICAgIGNoaWxkID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMgIT09IGNoaWxkID8gX2FkZFRvVGltZWxpbmUodGhpcywgY2hpbGQsIHBvc2l0aW9uKSA6IHRoaXM7IC8vZG9uJ3QgYWxsb3cgYSB0aW1lbGluZSB0byBiZSBhZGRlZCB0byBpdHNlbGYgYXMgYSBjaGlsZCFcbiAgfTtcblxuICBfcHJvdG8yLmdldENoaWxkcmVuID0gZnVuY3Rpb24gZ2V0Q2hpbGRyZW4obmVzdGVkLCB0d2VlbnMsIHRpbWVsaW5lcywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChuZXN0ZWQgPT09IHZvaWQgMCkge1xuICAgICAgbmVzdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW5zID09PSB2b2lkIDApIHtcbiAgICAgIHR3ZWVucyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVsaW5lcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0aW1lbGluZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAtX2JpZ051bTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IFtdLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBpZiAoY2hpbGQuX3N0YXJ0ID49IGlnbm9yZUJlZm9yZVRpbWUpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgICB0d2VlbnMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lbGluZXMgJiYgYS5wdXNoKGNoaWxkKTtcbiAgICAgICAgICBuZXN0ZWQgJiYgYS5wdXNoLmFwcGx5KGEsIGNoaWxkLmdldENoaWxkcmVuKHRydWUsIHR3ZWVucywgdGltZWxpbmVzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfTtcblxuICBfcHJvdG8yLmdldEJ5SWQgPSBmdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuKDEsIDEsIDEpLFxuICAgICAgICBpID0gYW5pbWF0aW9ucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoYW5pbWF0aW9uc1tpXS52YXJzLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoY2hpbGQpIHtcbiAgICBpZiAoX2lzU3RyaW5nKGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlTGFiZWwoY2hpbGQpO1xuICAgIH1cblxuICAgIGlmIChfaXNGdW5jdGlvbihjaGlsZCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmtpbGxUd2VlbnNPZihjaGlsZCk7XG4gICAgfVxuXG4gICAgX3JlbW92ZUxpbmtlZExpc3RJdGVtKHRoaXMsIGNoaWxkKTtcblxuICAgIGlmIChjaGlsZCA9PT0gdGhpcy5fcmVjZW50KSB7XG4gICAgICB0aGlzLl9yZWNlbnQgPSB0aGlzLl9sYXN0O1xuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsVGltZSA9IGZ1bmN0aW9uIHRvdGFsVGltZShfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90VGltZTtcbiAgICB9XG5cbiAgICB0aGlzLl9mb3JjaW5nID0gMTtcblxuICAgIGlmICghdGhpcy5fZHAgJiYgdGhpcy5fdHMpIHtcbiAgICAgIC8vc3BlY2lhbCBjYXNlIGZvciB0aGUgZ2xvYmFsIHRpbWVsaW5lIChvciBhbnkgb3RoZXIgdGhhdCBoYXMgbm8gcGFyZW50IG9yIGRldGFjaGVkIHBhcmVudCkuXG4gICAgICB0aGlzLl9zdGFydCA9IF9yb3VuZFByZWNpc2UoX3RpY2tlci50aW1lIC0gKHRoaXMuX3RzID4gMCA/IF90b3RhbFRpbWUyIC8gdGhpcy5fdHMgOiAodGhpcy50b3RhbER1cmF0aW9uKCkgLSBfdG90YWxUaW1lMikgLyAtdGhpcy5fdHMpKTtcbiAgICB9XG5cbiAgICBfQW5pbWF0aW9uLnByb3RvdHlwZS50b3RhbFRpbWUuY2FsbCh0aGlzLCBfdG90YWxUaW1lMiwgc3VwcHJlc3NFdmVudHMpO1xuXG4gICAgdGhpcy5fZm9yY2luZyA9IDA7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvMi5hZGRMYWJlbCA9IGZ1bmN0aW9uIGFkZExhYmVsKGxhYmVsLCBwb3NpdGlvbikge1xuICAgIHRoaXMubGFiZWxzW2xhYmVsXSA9IF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwobGFiZWwpIHtcbiAgICBkZWxldGUgdGhpcy5sYWJlbHNbbGFiZWxdO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIuYWRkUGF1c2UgPSBmdW5jdGlvbiBhZGRQYXVzZShwb3NpdGlvbiwgY2FsbGJhY2ssIHBhcmFtcykge1xuICAgIHZhciB0ID0gVHdlZW4uZGVsYXllZENhbGwoMCwgY2FsbGJhY2sgfHwgX2VtcHR5RnVuYywgcGFyYW1zKTtcbiAgICB0LmRhdGEgPSBcImlzUGF1c2VcIjtcbiAgICB0aGlzLl9oYXNQYXVzZSA9IDE7XG4gICAgcmV0dXJuIF9hZGRUb1RpbWVsaW5lKHRoaXMsIHQsIF9wYXJzZVBvc2l0aW9uKHRoaXMsIHBvc2l0aW9uKSk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW1vdmVQYXVzZSA9IGZ1bmN0aW9uIHJlbW92ZVBhdXNlKHBvc2l0aW9uKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5fZmlyc3Q7XG4gICAgcG9zaXRpb24gPSBfcGFyc2VQb3NpdGlvbih0aGlzLCBwb3NpdGlvbik7XG5cbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgIGlmIChjaGlsZC5fc3RhcnQgPT09IHBvc2l0aW9uICYmIGNoaWxkLmRhdGEgPT09IFwiaXNQYXVzZVwiKSB7XG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgY2hpbGQgPSBjaGlsZC5fbmV4dDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5raWxsVHdlZW5zT2YgPSBmdW5jdGlvbiBraWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpIHtcbiAgICB2YXIgdHdlZW5zID0gdGhpcy5nZXRUd2VlbnNPZih0YXJnZXRzLCBvbmx5QWN0aXZlKSxcbiAgICAgICAgaSA9IHR3ZWVucy5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiAhPT0gdHdlZW5zW2ldICYmIHR3ZWVuc1tpXS5raWxsKHRhcmdldHMsIHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8yLmdldFR3ZWVuc09mID0gZnVuY3Rpb24gZ2V0VHdlZW5zT2YodGFyZ2V0cywgb25seUFjdGl2ZSkge1xuICAgIHZhciBhID0gW10sXG4gICAgICAgIHBhcnNlZFRhcmdldHMgPSB0b0FycmF5KHRhcmdldHMpLFxuICAgICAgICBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBpc0dsb2JhbFRpbWUgPSBfaXNOdW1iZXIob25seUFjdGl2ZSksXG4gICAgICAgIC8vIGEgbnVtYmVyIGlzIGludGVycHJldGVkIGFzIGEgZ2xvYmFsIHRpbWUuIElmIHRoZSBhbmltYXRpb24gc3BhbnNcbiAgICBjaGlsZHJlbjtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgaWYgKF9hcnJheUNvbnRhaW5zQW55KGNoaWxkLl90YXJnZXRzLCBwYXJzZWRUYXJnZXRzKSAmJiAoaXNHbG9iYWxUaW1lID8gKCFfb3ZlcndyaXRpbmdUd2VlbiB8fCBjaGlsZC5faW5pdHRlZCAmJiBjaGlsZC5fdHMpICYmIGNoaWxkLmdsb2JhbFRpbWUoMCkgPD0gb25seUFjdGl2ZSAmJiBjaGlsZC5nbG9iYWxUaW1lKGNoaWxkLnRvdGFsRHVyYXRpb24oKSkgPiBvbmx5QWN0aXZlIDogIW9ubHlBY3RpdmUgfHwgY2hpbGQuaXNBY3RpdmUoKSkpIHtcbiAgICAgICAgICAvLyBub3RlOiBpZiB0aGlzIGlzIGZvciBvdmVyd3JpdGluZywgaXQgc2hvdWxkIG9ubHkgYmUgZm9yIHR3ZWVucyB0aGF0IGFyZW4ndCBwYXVzZWQgYW5kIGFyZSBpbml0dGVkLlxuICAgICAgICAgIGEucHVzaChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkcmVuID0gY2hpbGQuZ2V0VHdlZW5zT2YocGFyc2VkVGFyZ2V0cywgb25seUFjdGl2ZSkpLmxlbmd0aCkge1xuICAgICAgICBhLnB1c2guYXBwbHkoYSwgY2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9IC8vIHBvdGVudGlhbCBmdXR1cmUgZmVhdHVyZSAtIHRhcmdldHMoKSBvbiB0aW1lbGluZXNcbiAgLy8gdGFyZ2V0cygpIHtcbiAgLy8gXHRsZXQgcmVzdWx0ID0gW107XG4gIC8vIFx0dGhpcy5nZXRDaGlsZHJlbih0cnVlLCB0cnVlLCBmYWxzZSkuZm9yRWFjaCh0ID0+IHJlc3VsdC5wdXNoKC4uLnQudGFyZ2V0cygpKSk7XG4gIC8vIFx0cmV0dXJuIHJlc3VsdC5maWx0ZXIoKHYsIGkpID0+IHJlc3VsdC5pbmRleE9mKHYpID09PSBpKTtcbiAgLy8gfVxuICA7XG5cbiAgX3Byb3RvMi50d2VlblRvID0gZnVuY3Rpb24gdHdlZW5Ubyhwb3NpdGlvbiwgdmFycykge1xuICAgIHZhcnMgPSB2YXJzIHx8IHt9O1xuXG4gICAgdmFyIHRsID0gdGhpcyxcbiAgICAgICAgZW5kVGltZSA9IF9wYXJzZVBvc2l0aW9uKHRsLCBwb3NpdGlvbiksXG4gICAgICAgIF92YXJzID0gdmFycyxcbiAgICAgICAgc3RhcnRBdCA9IF92YXJzLnN0YXJ0QXQsXG4gICAgICAgIF9vblN0YXJ0ID0gX3ZhcnMub25TdGFydCxcbiAgICAgICAgb25TdGFydFBhcmFtcyA9IF92YXJzLm9uU3RhcnRQYXJhbXMsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF92YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgaW5pdHRlZCxcbiAgICAgICAgdHdlZW4gPSBUd2Vlbi50byh0bCwgX3NldERlZmF1bHRzKHtcbiAgICAgIGVhc2U6IHZhcnMuZWFzZSB8fCBcIm5vbmVcIixcbiAgICAgIGxhenk6IGZhbHNlLFxuICAgICAgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZSxcbiAgICAgIHRpbWU6IGVuZFRpbWUsXG4gICAgICBvdmVyd3JpdGU6IFwiYXV0b1wiLFxuICAgICAgZHVyYXRpb246IHZhcnMuZHVyYXRpb24gfHwgTWF0aC5hYnMoKGVuZFRpbWUgLSAoc3RhcnRBdCAmJiBcInRpbWVcIiBpbiBzdGFydEF0ID8gc3RhcnRBdC50aW1lIDogdGwuX3RpbWUpKSAvIHRsLnRpbWVTY2FsZSgpKSB8fCBfdGlueU51bSxcbiAgICAgIG9uU3RhcnQ6IGZ1bmN0aW9uIG9uU3RhcnQoKSB7XG4gICAgICAgIHRsLnBhdXNlKCk7XG5cbiAgICAgICAgaWYgKCFpbml0dGVkKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gdmFycy5kdXJhdGlvbiB8fCBNYXRoLmFicygoZW5kVGltZSAtIChzdGFydEF0ICYmIFwidGltZVwiIGluIHN0YXJ0QXQgPyBzdGFydEF0LnRpbWUgOiB0bC5fdGltZSkpIC8gdGwudGltZVNjYWxlKCkpO1xuICAgICAgICAgIHR3ZWVuLl9kdXIgIT09IGR1cmF0aW9uICYmIF9zZXREdXJhdGlvbih0d2VlbiwgZHVyYXRpb24sIDAsIDEpLnJlbmRlcih0d2Vlbi5fdGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgaW5pdHRlZCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBfb25TdGFydCAmJiBfb25TdGFydC5hcHBseSh0d2Vlbiwgb25TdGFydFBhcmFtcyB8fCBbXSk7IC8vaW4gY2FzZSB0aGUgdXNlciBoYWQgYW4gb25TdGFydCBpbiB0aGUgdmFycyAtIHdlIGRvbid0IHdhbnQgdG8gb3ZlcndyaXRlIGl0LlxuICAgICAgfVxuICAgIH0sIHZhcnMpKTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVSZW5kZXIgPyB0d2Vlbi5yZW5kZXIoMCkgOiB0d2VlbjtcbiAgfTtcblxuICBfcHJvdG8yLnR3ZWVuRnJvbVRvID0gZnVuY3Rpb24gdHdlZW5Gcm9tVG8oZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uLCB2YXJzKSB7XG4gICAgcmV0dXJuIHRoaXMudHdlZW5Ubyh0b1Bvc2l0aW9uLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgc3RhcnRBdDoge1xuICAgICAgICB0aW1lOiBfcGFyc2VQb3NpdGlvbih0aGlzLCBmcm9tUG9zaXRpb24pXG4gICAgICB9XG4gICAgfSwgdmFycykpO1xuICB9O1xuXG4gIF9wcm90bzIucmVjZW50ID0gZnVuY3Rpb24gcmVjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9yZWNlbnQ7XG4gIH07XG5cbiAgX3Byb3RvMi5uZXh0TGFiZWwgPSBmdW5jdGlvbiBuZXh0TGFiZWwoYWZ0ZXJUaW1lKSB7XG4gICAgaWYgKGFmdGVyVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBhZnRlclRpbWUgPSB0aGlzLl90aW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfZ2V0TGFiZWxJbkRpcmVjdGlvbih0aGlzLCBfcGFyc2VQb3NpdGlvbih0aGlzLCBhZnRlclRpbWUpKTtcbiAgfTtcblxuICBfcHJvdG8yLnByZXZpb3VzTGFiZWwgPSBmdW5jdGlvbiBwcmV2aW91c0xhYmVsKGJlZm9yZVRpbWUpIHtcbiAgICBpZiAoYmVmb3JlVGltZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiZWZvcmVUaW1lID0gdGhpcy5fdGltZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2dldExhYmVsSW5EaXJlY3Rpb24odGhpcywgX3BhcnNlUG9zaXRpb24odGhpcywgYmVmb3JlVGltZSksIDEpO1xuICB9O1xuXG4gIF9wcm90bzIuY3VycmVudExhYmVsID0gZnVuY3Rpb24gY3VycmVudExhYmVsKHZhbHVlKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyB0aGlzLnNlZWsodmFsdWUsIHRydWUpIDogdGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUgKyBfdGlueU51bSk7XG4gIH07XG5cbiAgX3Byb3RvMi5zaGlmdENoaWxkcmVuID0gZnVuY3Rpb24gc2hpZnRDaGlsZHJlbihhbW91bnQsIGFkanVzdExhYmVscywgaWdub3JlQmVmb3JlVGltZSkge1xuICAgIGlmIChpZ25vcmVCZWZvcmVUaW1lID09PSB2b2lkIDApIHtcbiAgICAgIGlnbm9yZUJlZm9yZVRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0LFxuICAgICAgICBsYWJlbHMgPSB0aGlzLmxhYmVscyxcbiAgICAgICAgcDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLl9zdGFydCA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgIGNoaWxkLl9zdGFydCArPSBhbW91bnQ7XG4gICAgICAgIGNoaWxkLl9lbmQgKz0gYW1vdW50O1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIGlmIChhZGp1c3RMYWJlbHMpIHtcbiAgICAgIGZvciAocCBpbiBsYWJlbHMpIHtcbiAgICAgICAgaWYgKGxhYmVsc1twXSA+PSBpZ25vcmVCZWZvcmVUaW1lKSB7XG4gICAgICAgICAgbGFiZWxzW3BdICs9IGFtb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLmludmFsaWRhdGUgPSBmdW5jdGlvbiBpbnZhbGlkYXRlKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuX2ZpcnN0O1xuICAgIHRoaXMuX2xvY2sgPSAwO1xuXG4gICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICBjaGlsZC5pbnZhbGlkYXRlKCk7XG4gICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBfQW5pbWF0aW9uLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMi5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKGluY2x1ZGVMYWJlbHMpIHtcbiAgICBpZiAoaW5jbHVkZUxhYmVscyA9PT0gdm9pZCAwKSB7XG4gICAgICBpbmNsdWRlTGFiZWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQgPSB0aGlzLl9maXJzdCxcbiAgICAgICAgbmV4dDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuICAgICAgdGhpcy5yZW1vdmUoY2hpbGQpO1xuICAgICAgY2hpbGQgPSBuZXh0O1xuICAgIH1cblxuICAgIHRoaXMuX2RwICYmICh0aGlzLl90aW1lID0gdGhpcy5fdFRpbWUgPSB0aGlzLl9wVGltZSA9IDApO1xuICAgIGluY2x1ZGVMYWJlbHMgJiYgKHRoaXMubGFiZWxzID0ge30pO1xuICAgIHJldHVybiBfdW5jYWNoZSh0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8yLnRvdGFsRHVyYXRpb24gPSBmdW5jdGlvbiB0b3RhbER1cmF0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG1heCA9IDAsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBjaGlsZCA9IHNlbGYuX2xhc3QsXG4gICAgICAgIHByZXZTdGFydCA9IF9iaWdOdW0sXG4gICAgICAgIHByZXYsXG4gICAgICAgIHN0YXJ0LFxuICAgICAgICBwYXJlbnQ7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGYudGltZVNjYWxlKChzZWxmLl9yZXBlYXQgPCAwID8gc2VsZi5kdXJhdGlvbigpIDogc2VsZi50b3RhbER1cmF0aW9uKCkpIC8gKHNlbGYucmV2ZXJzZWQoKSA/IC12YWx1ZSA6IHZhbHVlKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2RpcnR5KSB7XG4gICAgICBwYXJlbnQgPSBzZWxmLnBhcmVudDtcblxuICAgICAgd2hpbGUgKGNoaWxkKSB7XG4gICAgICAgIHByZXYgPSBjaGlsZC5fcHJldjsgLy9yZWNvcmQgaXQgaGVyZSBpbiBjYXNlIHRoZSB0d2VlbiBjaGFuZ2VzIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZS4uLlxuXG4gICAgICAgIGNoaWxkLl9kaXJ0eSAmJiBjaGlsZC50b3RhbER1cmF0aW9uKCk7IC8vY291bGQgY2hhbmdlIHRoZSB0d2Vlbi5fc3RhcnRUaW1lLCBzbyBtYWtlIHN1cmUgdGhlIGFuaW1hdGlvbidzIGNhY2hlIGlzIGNsZWFuIGJlZm9yZSBhbmFseXppbmcgaXQuXG5cbiAgICAgICAgc3RhcnQgPSBjaGlsZC5fc3RhcnQ7XG5cbiAgICAgICAgaWYgKHN0YXJ0ID4gcHJldlN0YXJ0ICYmIHNlbGYuX3NvcnQgJiYgY2hpbGQuX3RzICYmICFzZWxmLl9sb2NrKSB7XG4gICAgICAgICAgLy9pbiBjYXNlIG9uZSBvZiB0aGUgdHdlZW5zIHNoaWZ0ZWQgb3V0IG9mIG9yZGVyLCBpdCBuZWVkcyB0byBiZSByZS1pbnNlcnRlZCBpbnRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZVxuICAgICAgICAgIHNlbGYuX2xvY2sgPSAxOyAvL3ByZXZlbnQgZW5kbGVzcyByZWN1cnNpdmUgY2FsbHMgLSB0aGVyZSBhcmUgbWV0aG9kcyB0aGF0IGdldCB0cmlnZ2VyZWQgdGhhdCBjaGVjayBkdXJhdGlvbi90b3RhbER1cmF0aW9uIHdoZW4gd2UgYWRkKCkuXG5cbiAgICAgICAgICBfYWRkVG9UaW1lbGluZShzZWxmLCBjaGlsZCwgc3RhcnQgLSBjaGlsZC5fZGVsYXksIDEpLl9sb2NrID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2U3RhcnQgPSBzdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydCA8IDAgJiYgY2hpbGQuX3RzKSB7XG4gICAgICAgICAgLy9jaGlsZHJlbiBhcmVuJ3QgYWxsb3dlZCB0byBoYXZlIG5lZ2F0aXZlIHN0YXJ0VGltZXMgdW5sZXNzIHNtb290aENoaWxkVGltaW5nIGlzIHRydWUsIHNvIGFkanVzdCBoZXJlIGlmIG9uZSBpcyBmb3VuZC5cbiAgICAgICAgICBtYXggLT0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiAoIXBhcmVudCAmJiAhc2VsZi5fZHAgfHwgcGFyZW50ICYmIHBhcmVudC5zbW9vdGhDaGlsZFRpbWluZykge1xuICAgICAgICAgICAgc2VsZi5fc3RhcnQgKz0gc3RhcnQgLyBzZWxmLl90cztcbiAgICAgICAgICAgIHNlbGYuX3RpbWUgLT0gc3RhcnQ7XG4gICAgICAgICAgICBzZWxmLl90VGltZSAtPSBzdGFydDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnNoaWZ0Q2hpbGRyZW4oLXN0YXJ0LCBmYWxzZSwgLTFlOTk5KTtcbiAgICAgICAgICBwcmV2U3RhcnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuX2VuZCA+IG1heCAmJiBjaGlsZC5fdHMgJiYgKG1heCA9IGNoaWxkLl9lbmQpO1xuICAgICAgICBjaGlsZCA9IHByZXY7XG4gICAgICB9XG5cbiAgICAgIF9zZXREdXJhdGlvbihzZWxmLCBzZWxmID09PSBfZ2xvYmFsVGltZWxpbmUgJiYgc2VsZi5fdGltZSA+IG1heCA/IHNlbGYuX3RpbWUgOiBtYXgsIDEsIDEpO1xuXG4gICAgICBzZWxmLl9kaXJ0eSA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGYuX3REdXI7XG4gIH07XG5cbiAgVGltZWxpbmUudXBkYXRlUm9vdCA9IGZ1bmN0aW9uIHVwZGF0ZVJvb3QodGltZSkge1xuICAgIGlmIChfZ2xvYmFsVGltZWxpbmUuX3RzKSB7XG4gICAgICBfbGF6eVNhZmVSZW5kZXIoX2dsb2JhbFRpbWVsaW5lLCBfcGFyZW50VG9DaGlsZFRvdGFsVGltZSh0aW1lLCBfZ2xvYmFsVGltZWxpbmUpKTtcblxuICAgICAgX2xhc3RSZW5kZXJlZEZyYW1lID0gX3RpY2tlci5mcmFtZTtcbiAgICB9XG5cbiAgICBpZiAoX3RpY2tlci5mcmFtZSA+PSBfbmV4dEdDRnJhbWUpIHtcbiAgICAgIF9uZXh0R0NGcmFtZSArPSBfY29uZmlnLmF1dG9TbGVlcCB8fCAxMjA7XG4gICAgICB2YXIgY2hpbGQgPSBfZ2xvYmFsVGltZWxpbmUuX2ZpcnN0O1xuICAgICAgaWYgKCFjaGlsZCB8fCAhY2hpbGQuX3RzKSBpZiAoX2NvbmZpZy5hdXRvU2xlZXAgJiYgX3RpY2tlci5fbGlzdGVuZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgd2hpbGUgKGNoaWxkICYmICFjaGlsZC5fdHMpIHtcbiAgICAgICAgICBjaGlsZCA9IGNoaWxkLl9uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQgfHwgX3RpY2tlci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmU7XG59KEFuaW1hdGlvbik7XG5cbl9zZXREZWZhdWx0cyhUaW1lbGluZS5wcm90b3R5cGUsIHtcbiAgX2xvY2s6IDAsXG4gIF9oYXNQYXVzZTogMCxcbiAgX2ZvcmNpbmc6IDBcbn0pO1xuXG52YXIgX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4gPSBmdW5jdGlvbiBfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2Vlbih0YXJnZXQsIHByb3AsIHN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pIHtcbiAgLy9ub3RlOiB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuICB2YXIgcHQgPSBuZXcgUHJvcFR3ZWVuKHRoaXMuX3B0LCB0YXJnZXQsIHByb3AsIDAsIDEsIF9yZW5kZXJDb21wbGV4U3RyaW5nLCBudWxsLCBzZXR0ZXIpLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFydE51bXMsXG4gICAgICBjb2xvcixcbiAgICAgIGVuZE51bSxcbiAgICAgIGNodW5rLFxuICAgICAgc3RhcnROdW0sXG4gICAgICBoYXNSYW5kb20sXG4gICAgICBhO1xuICBwdC5iID0gc3RhcnQ7XG4gIHB0LmUgPSBlbmQ7XG4gIHN0YXJ0ICs9IFwiXCI7IC8vZW5zdXJlIHZhbHVlcyBhcmUgc3RyaW5nc1xuXG4gIGVuZCArPSBcIlwiO1xuXG4gIGlmIChoYXNSYW5kb20gPSB+ZW5kLmluZGV4T2YoXCJyYW5kb20oXCIpKSB7XG4gICAgZW5kID0gX3JlcGxhY2VSYW5kb20oZW5kKTtcbiAgfVxuXG4gIGlmIChzdHJpbmdGaWx0ZXIpIHtcbiAgICBhID0gW3N0YXJ0LCBlbmRdO1xuICAgIHN0cmluZ0ZpbHRlcihhLCB0YXJnZXQsIHByb3ApOyAvL3Bhc3MgYW4gYXJyYXkgd2l0aCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMgYW5kIGxldCB0aGUgZmlsdGVyIGRvIHdoYXRldmVyIGl0IG5lZWRzIHRvIHRoZSB2YWx1ZXMuXG5cbiAgICBzdGFydCA9IGFbMF07XG4gICAgZW5kID0gYVsxXTtcbiAgfVxuXG4gIHN0YXJ0TnVtcyA9IHN0YXJ0Lm1hdGNoKF9jb21wbGV4U3RyaW5nTnVtRXhwKSB8fCBbXTtcblxuICB3aGlsZSAocmVzdWx0ID0gX2NvbXBsZXhTdHJpbmdOdW1FeHAuZXhlYyhlbmQpKSB7XG4gICAgZW5kTnVtID0gcmVzdWx0WzBdO1xuICAgIGNodW5rID0gZW5kLnN1YnN0cmluZyhpbmRleCwgcmVzdWx0LmluZGV4KTtcblxuICAgIGlmIChjb2xvcikge1xuICAgICAgY29sb3IgPSAoY29sb3IgKyAxKSAlIDU7XG4gICAgfSBlbHNlIGlmIChjaHVuay5zdWJzdHIoLTUpID09PSBcInJnYmEoXCIpIHtcbiAgICAgIGNvbG9yID0gMTtcbiAgICB9XG5cbiAgICBpZiAoZW5kTnVtICE9PSBzdGFydE51bXNbbWF0Y2hJbmRleCsrXSkge1xuICAgICAgc3RhcnROdW0gPSBwYXJzZUZsb2F0KHN0YXJ0TnVtc1ttYXRjaEluZGV4IC0gMV0pIHx8IDA7IC8vdGhlc2UgbmVzdGVkIFByb3BUd2VlbnMgYXJlIGhhbmRsZWQgaW4gYSBzcGVjaWFsIHdheSAtIHdlJ2xsIG5ldmVyIGFjdHVhbGx5IGNhbGwgYSByZW5kZXIgb3Igc2V0dGVyIG1ldGhvZCBvbiB0aGVtLiBXZSdsbCBqdXN0IGxvb3AgdGhyb3VnaCB0aGVtIGluIHRoZSBwYXJlbnQgY29tcGxleCBzdHJpbmcgUHJvcFR3ZWVuJ3MgcmVuZGVyIG1ldGhvZC5cblxuICAgICAgcHQuX3B0ID0ge1xuICAgICAgICBfbmV4dDogcHQuX3B0LFxuICAgICAgICBwOiBjaHVuayB8fCBtYXRjaEluZGV4ID09PSAxID8gY2h1bmsgOiBcIixcIixcbiAgICAgICAgLy9ub3RlOiBTVkcgc3BlYyBhbGxvd3Mgb21pc3Npb24gb2YgY29tbWEvc3BhY2Ugd2hlbiBhIG5lZ2F0aXZlIHNpZ24gaXMgd2VkZ2VkIGJldHdlZW4gdHdvIG51bWJlcnMsIGxpa2UgMi41LTUuMyBpbnN0ZWFkIG9mIDIuNSwtNS4zIGJ1dCB3aGVuIHR3ZWVuaW5nLCB0aGUgbmVnYXRpdmUgdmFsdWUgbWF5IHN3aXRjaCB0byBwb3NpdGl2ZSwgc28gd2UgaW5zZXJ0IHRoZSBjb21tYSBqdXN0IGluIGNhc2UuXG4gICAgICAgIHM6IHN0YXJ0TnVtLFxuICAgICAgICBjOiBlbmROdW0uY2hhckF0KDEpID09PSBcIj1cIiA/IHBhcnNlRmxvYXQoZW5kTnVtLnN1YnN0cigyKSkgKiAoZW5kTnVtLmNoYXJBdCgwKSA9PT0gXCItXCIgPyAtMSA6IDEpIDogcGFyc2VGbG9hdChlbmROdW0pIC0gc3RhcnROdW0sXG4gICAgICAgIG06IGNvbG9yICYmIGNvbG9yIDwgNCA/IE1hdGgucm91bmQgOiAwXG4gICAgICB9O1xuICAgICAgaW5kZXggPSBfY29tcGxleFN0cmluZ051bUV4cC5sYXN0SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgcHQuYyA9IGluZGV4IDwgZW5kLmxlbmd0aCA/IGVuZC5zdWJzdHJpbmcoaW5kZXgsIGVuZC5sZW5ndGgpIDogXCJcIjsgLy93ZSB1c2UgdGhlIFwiY1wiIG9mIHRoZSBQcm9wVHdlZW4gdG8gc3RvcmUgdGhlIGZpbmFsIHBhcnQgb2YgdGhlIHN0cmluZyAoYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyKVxuXG4gIHB0LmZwID0gZnVuY1BhcmFtO1xuXG4gIGlmIChfcmVsRXhwLnRlc3QoZW5kKSB8fCBoYXNSYW5kb20pIHtcbiAgICBwdC5lID0gMDsgLy9pZiB0aGUgZW5kIHN0cmluZyBjb250YWlucyByZWxhdGl2ZSB2YWx1ZXMgb3IgZHluYW1pYyByYW5kb20oLi4uKSB2YWx1ZXMsIGRlbGV0ZSB0aGUgZW5kIGl0IHNvIHRoYXQgb24gdGhlIGZpbmFsIHJlbmRlciB3ZSBkb24ndCBhY3R1YWxseSBzZXQgaXQgdG8gdGhlIHN0cmluZyB3aXRoICs9IG9yIC09IGNoYXJhY3RlcnMgKGZvcmNlcyBpdCB0byB1c2UgdGhlIGNhbGN1bGF0ZWQgdmFsdWUpLlxuICB9XG5cbiAgdGhpcy5fcHQgPSBwdDsgLy9zdGFydCB0aGUgbGlua2VkIGxpc3Qgd2l0aCB0aGlzIG5ldyBQcm9wVHdlZW4uIFJlbWVtYmVyLCB3ZSBjYWxsIF9hZGRDb21wbGV4U3RyaW5nUHJvcFR3ZWVuLmNhbGwodHdlZW5JbnN0YW5jZS4uLikgdG8gZW5zdXJlIHRoYXQgaXQncyBzY29wZWQgcHJvcGVybHkuIFdlIG1heSBjYWxsIGl0IGZyb20gd2l0aGluIGEgcGx1Z2luIHRvbywgdGh1cyBcInRoaXNcIiB3b3VsZCByZWZlciB0byB0aGUgcGx1Z2luLlxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZFByb3BUd2VlbiA9IGZ1bmN0aW9uIF9hZGRQcm9wVHdlZW4odGFyZ2V0LCBwcm9wLCBzdGFydCwgZW5kLCBpbmRleCwgdGFyZ2V0cywgbW9kaWZpZXIsIHN0cmluZ0ZpbHRlciwgZnVuY1BhcmFtKSB7XG4gIF9pc0Z1bmN0aW9uKGVuZCkgJiYgKGVuZCA9IGVuZChpbmRleCB8fCAwLCB0YXJnZXQsIHRhcmdldHMpKTtcbiAgdmFyIGN1cnJlbnRWYWx1ZSA9IHRhcmdldFtwcm9wXSxcbiAgICAgIHBhcnNlZFN0YXJ0ID0gc3RhcnQgIT09IFwiZ2V0XCIgPyBzdGFydCA6ICFfaXNGdW5jdGlvbihjdXJyZW50VmFsdWUpID8gY3VycmVudFZhbHVlIDogZnVuY1BhcmFtID8gdGFyZ2V0W3Byb3AuaW5kZXhPZihcInNldFwiKSB8fCAhX2lzRnVuY3Rpb24odGFyZ2V0W1wiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0pID8gcHJvcCA6IFwiZ2V0XCIgKyBwcm9wLnN1YnN0cigzKV0oZnVuY1BhcmFtKSA6IHRhcmdldFtwcm9wXSgpLFxuICAgICAgc2V0dGVyID0gIV9pc0Z1bmN0aW9uKGN1cnJlbnRWYWx1ZSkgPyBfc2V0dGVyUGxhaW4gOiBmdW5jUGFyYW0gPyBfc2V0dGVyRnVuY1dpdGhQYXJhbSA6IF9zZXR0ZXJGdW5jLFxuICAgICAgcHQ7XG5cbiAgaWYgKF9pc1N0cmluZyhlbmQpKSB7XG4gICAgaWYgKH5lbmQuaW5kZXhPZihcInJhbmRvbShcIikpIHtcbiAgICAgIGVuZCA9IF9yZXBsYWNlUmFuZG9tKGVuZCk7XG4gICAgfVxuXG4gICAgaWYgKGVuZC5jaGFyQXQoMSkgPT09IFwiPVwiKSB7XG4gICAgICBwdCA9IHBhcnNlRmxvYXQocGFyc2VkU3RhcnQpICsgcGFyc2VGbG9hdChlbmQuc3Vic3RyKDIpKSAqIChlbmQuY2hhckF0KDApID09PSBcIi1cIiA/IC0xIDogMSkgKyAoZ2V0VW5pdChwYXJzZWRTdGFydCkgfHwgMCk7XG5cbiAgICAgIGlmIChwdCB8fCBwdCA9PT0gMCkge1xuICAgICAgICAvLyB0byBhdm9pZCBpc05hTiwgbGlrZSBpZiBzb21lb25lIHBhc3NlcyBpbiBhIHZhbHVlIGxpa2UgXCIhPSB3aGF0ZXZlclwiXG4gICAgICAgIGVuZCA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJzZWRTdGFydCAhPT0gZW5kKSB7XG4gICAgaWYgKCFpc05hTihwYXJzZWRTdGFydCAqIGVuZCkgJiYgZW5kICE9PSBcIlwiKSB7XG4gICAgICAvLyBmdW4gZmFjdDogYW55IG51bWJlciBtdWx0aXBsaWVkIGJ5IFwiXCIgaXMgZXZhbHVhdGVkIGFzIHRoZSBudW1iZXIgMCFcbiAgICAgIHB0ID0gbmV3IFByb3BUd2Vlbih0aGlzLl9wdCwgdGFyZ2V0LCBwcm9wLCArcGFyc2VkU3RhcnQgfHwgMCwgZW5kIC0gKHBhcnNlZFN0YXJ0IHx8IDApLCB0eXBlb2YgY3VycmVudFZhbHVlID09PSBcImJvb2xlYW5cIiA/IF9yZW5kZXJCb29sZWFuIDogX3JlbmRlclBsYWluLCAwLCBzZXR0ZXIpO1xuICAgICAgZnVuY1BhcmFtICYmIChwdC5mcCA9IGZ1bmNQYXJhbSk7XG4gICAgICBtb2RpZmllciAmJiBwdC5tb2RpZmllcihtb2RpZmllciwgdGhpcywgdGFyZ2V0KTtcbiAgICAgIHJldHVybiB0aGlzLl9wdCA9IHB0O1xuICAgIH1cblxuICAgICFjdXJyZW50VmFsdWUgJiYgIShwcm9wIGluIHRhcmdldCkgJiYgX21pc3NpbmdQbHVnaW4ocHJvcCwgZW5kKTtcbiAgICByZXR1cm4gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4uY2FsbCh0aGlzLCB0YXJnZXQsIHByb3AsIHBhcnNlZFN0YXJ0LCBlbmQsIHNldHRlciwgc3RyaW5nRmlsdGVyIHx8IF9jb25maWcuc3RyaW5nRmlsdGVyLCBmdW5jUGFyYW0pO1xuICB9XG59LFxuICAgIC8vY3JlYXRlcyBhIGNvcHkgb2YgdGhlIHZhcnMgb2JqZWN0IGFuZCBwcm9jZXNzZXMgYW55IGZ1bmN0aW9uLWJhc2VkIHZhbHVlcyAocHV0dGluZyB0aGUgcmVzdWx0aW5nIHZhbHVlcyBkaXJlY3RseSBpbnRvIHRoZSBjb3B5KSBhcyB3ZWxsIGFzIHN0cmluZ3Mgd2l0aCBcInJhbmRvbSgpXCIgaW4gdGhlbS4gSXQgZG9lcyBOT1QgcHJvY2VzcyByZWxhdGl2ZSB2YWx1ZXMuXG5fcHJvY2Vzc1ZhcnMgPSBmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModmFycywgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pIHtcbiAgX2lzRnVuY3Rpb24odmFycykgJiYgKHZhcnMgPSBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpKTtcblxuICBpZiAoIV9pc09iamVjdCh2YXJzKSB8fCB2YXJzLnN0eWxlICYmIHZhcnMubm9kZVR5cGUgfHwgX2lzQXJyYXkodmFycykgfHwgX2lzVHlwZWRBcnJheSh2YXJzKSkge1xuICAgIHJldHVybiBfaXNTdHJpbmcodmFycykgPyBfcGFyc2VGdW5jT3JTdHJpbmcodmFycywgdHdlZW4sIGluZGV4LCB0YXJnZXQsIHRhcmdldHMpIDogdmFycztcbiAgfVxuXG4gIHZhciBjb3B5ID0ge30sXG4gICAgICBwO1xuXG4gIGZvciAocCBpbiB2YXJzKSB7XG4gICAgY29weVtwXSA9IF9wYXJzZUZ1bmNPclN0cmluZyh2YXJzW3BdLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cyk7XG4gIH1cblxuICByZXR1cm4gY29weTtcbn0sXG4gICAgX2NoZWNrUGx1Z2luID0gZnVuY3Rpb24gX2NoZWNrUGx1Z2luKHByb3BlcnR5LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cykge1xuICB2YXIgcGx1Z2luLCBwdCwgcHRMb29rdXAsIGk7XG5cbiAgaWYgKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiAocGx1Z2luID0gbmV3IF9wbHVnaW5zW3Byb3BlcnR5XSgpKS5pbml0KHRhcmdldCwgcGx1Z2luLnJhd1ZhcnMgPyB2YXJzW3Byb3BlcnR5XSA6IF9wcm9jZXNzVmFycyh2YXJzW3Byb3BlcnR5XSwgaW5kZXgsIHRhcmdldCwgdGFyZ2V0cywgdHdlZW4pLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpICE9PSBmYWxzZSkge1xuICAgIHR3ZWVuLl9wdCA9IHB0ID0gbmV3IFByb3BUd2Vlbih0d2Vlbi5fcHQsIHRhcmdldCwgcHJvcGVydHksIDAsIDEsIHBsdWdpbi5yZW5kZXIsIHBsdWdpbiwgMCwgcGx1Z2luLnByaW9yaXR5KTtcblxuICAgIGlmICh0d2VlbiAhPT0gX3F1aWNrVHdlZW4pIHtcbiAgICAgIHB0TG9va3VwID0gdHdlZW4uX3B0TG9va3VwW3R3ZWVuLl90YXJnZXRzLmluZGV4T2YodGFyZ2V0KV07IC8vbm90ZTogd2UgY2FuJ3QgdXNlIHR3ZWVuLl9wdExvb2t1cFtpbmRleF0gYmVjYXVzZSBmb3Igc3RhZ2dlcmVkIHR3ZWVucywgdGhlIGluZGV4IGZyb20gdGhlIGZ1bGxUYXJnZXRzIGFycmF5IHdvbid0IG1hdGNoIHdoYXQgaXQgaXMgaW4gZWFjaCBpbmRpdmlkdWFsIHR3ZWVuIHRoYXQgc3Bhd25zIGZyb20gdGhlIHN0YWdnZXIuXG5cbiAgICAgIGkgPSBwbHVnaW4uX3Byb3BzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBwdExvb2t1cFtwbHVnaW4uX3Byb3BzW2ldXSA9IHB0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwbHVnaW47XG59LFxuICAgIF9vdmVyd3JpdGluZ1R3ZWVuLFxuICAgIC8vc3RvcmUgYSByZWZlcmVuY2UgdGVtcG9yYXJpbHkgc28gd2UgY2FuIGF2b2lkIG92ZXJ3cml0aW5nIGl0c2VsZi5cbl9pbml0VHdlZW4gPSBmdW5jdGlvbiBfaW5pdFR3ZWVuKHR3ZWVuLCB0aW1lKSB7XG4gIHZhciB2YXJzID0gdHdlZW4udmFycyxcbiAgICAgIGVhc2UgPSB2YXJzLmVhc2UsXG4gICAgICBzdGFydEF0ID0gdmFycy5zdGFydEF0LFxuICAgICAgaW1tZWRpYXRlUmVuZGVyID0gdmFycy5pbW1lZGlhdGVSZW5kZXIsXG4gICAgICBsYXp5ID0gdmFycy5sYXp5LFxuICAgICAgb25VcGRhdGUgPSB2YXJzLm9uVXBkYXRlLFxuICAgICAgb25VcGRhdGVQYXJhbXMgPSB2YXJzLm9uVXBkYXRlUGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZSA9IHZhcnMuY2FsbGJhY2tTY29wZSxcbiAgICAgIHJ1bkJhY2t3YXJkcyA9IHZhcnMucnVuQmFja3dhcmRzLFxuICAgICAgeW95b0Vhc2UgPSB2YXJzLnlveW9FYXNlLFxuICAgICAga2V5ZnJhbWVzID0gdmFycy5rZXlmcmFtZXMsXG4gICAgICBhdXRvUmV2ZXJ0ID0gdmFycy5hdXRvUmV2ZXJ0LFxuICAgICAgZHVyID0gdHdlZW4uX2R1cixcbiAgICAgIHByZXZTdGFydEF0ID0gdHdlZW4uX3N0YXJ0QXQsXG4gICAgICB0YXJnZXRzID0gdHdlZW4uX3RhcmdldHMsXG4gICAgICBwYXJlbnQgPSB0d2Vlbi5wYXJlbnQsXG4gICAgICBmdWxsVGFyZ2V0cyA9IHBhcmVudCAmJiBwYXJlbnQuZGF0YSA9PT0gXCJuZXN0ZWRcIiA/IHBhcmVudC5wYXJlbnQuX3RhcmdldHMgOiB0YXJnZXRzLFxuICAgICAgYXV0b092ZXJ3cml0ZSA9IHR3ZWVuLl9vdmVyd3JpdGUgPT09IFwiYXV0b1wiICYmICFfc3VwcHJlc3NPdmVyd3JpdGVzLFxuICAgICAgdGwgPSB0d2Vlbi50aW1lbGluZSxcbiAgICAgIGNsZWFuVmFycyxcbiAgICAgIGksXG4gICAgICBwLFxuICAgICAgcHQsXG4gICAgICB0YXJnZXQsXG4gICAgICBoYXNQcmlvcml0eSxcbiAgICAgIGdzRGF0YSxcbiAgICAgIGhhcm5lc3MsXG4gICAgICBwbHVnaW4sXG4gICAgICBwdExvb2t1cCxcbiAgICAgIGluZGV4LFxuICAgICAgaGFybmVzc1ZhcnMsXG4gICAgICBvdmVyd3JpdHRlbjtcbiAgdGwgJiYgKCFrZXlmcmFtZXMgfHwgIWVhc2UpICYmIChlYXNlID0gXCJub25lXCIpO1xuICB0d2Vlbi5fZWFzZSA9IF9wYXJzZUVhc2UoZWFzZSwgX2RlZmF1bHRzLmVhc2UpO1xuICB0d2Vlbi5feUVhc2UgPSB5b3lvRWFzZSA/IF9pbnZlcnRFYXNlKF9wYXJzZUVhc2UoeW95b0Vhc2UgPT09IHRydWUgPyBlYXNlIDogeW95b0Vhc2UsIF9kZWZhdWx0cy5lYXNlKSkgOiAwO1xuXG4gIGlmICh5b3lvRWFzZSAmJiB0d2Vlbi5feW95byAmJiAhdHdlZW4uX3JlcGVhdCkge1xuICAgIC8vdGhlcmUgbXVzdCBoYXZlIGJlZW4gYSBwYXJlbnQgdGltZWxpbmUgd2l0aCB5b3lvOnRydWUgdGhhdCBpcyBjdXJyZW50bHkgaW4gaXRzIHlveW8gcGhhc2UsIHNvIGZsaXAgdGhlIGVhc2VzLlxuICAgIHlveW9FYXNlID0gdHdlZW4uX3lFYXNlO1xuICAgIHR3ZWVuLl95RWFzZSA9IHR3ZWVuLl9lYXNlO1xuICAgIHR3ZWVuLl9lYXNlID0geW95b0Vhc2U7XG4gIH1cblxuICB0d2Vlbi5fZnJvbSA9ICF0bCAmJiAhIXZhcnMucnVuQmFja3dhcmRzOyAvL25lc3RlZCB0aW1lbGluZXMgc2hvdWxkIG5ldmVyIHJ1biBiYWNrd2FyZHMgLSB0aGUgYmFja3dhcmRzLW5lc3MgaXMgaW4gdGhlIGNoaWxkIHR3ZWVucy5cblxuICBpZiAoIXRsKSB7XG4gICAgLy9pZiB0aGVyZSdzIGFuIGludGVybmFsIHRpbWVsaW5lLCBza2lwIGFsbCB0aGUgcGFyc2luZyBiZWNhdXNlIHdlIHBhc3NlZCB0aGF0IHRhc2sgZG93biB0aGUgY2hhaW4uXG4gICAgaGFybmVzcyA9IHRhcmdldHNbMF0gPyBfZ2V0Q2FjaGUodGFyZ2V0c1swXSkuaGFybmVzcyA6IDA7XG4gICAgaGFybmVzc1ZhcnMgPSBoYXJuZXNzICYmIHZhcnNbaGFybmVzcy5wcm9wXTsgLy9zb21lb25lIG1heSBuZWVkIHRvIHNwZWNpZnkgQ1NTLXNwZWNpZmljIHZhbHVlcyBBTkQgbm9uLUNTUyB2YWx1ZXMsIGxpa2UgaWYgdGhlIGVsZW1lbnQgaGFzIGFuIFwieFwiIHByb3BlcnR5IHBsdXMgaXQncyBhIHN0YW5kYXJkIERPTSBlbGVtZW50LiBXZSBhbGxvdyBwZW9wbGUgdG8gZGlzdGluZ3Vpc2ggYnkgd3JhcHBpbmcgcGx1Z2luLXNwZWNpZmljIHN0dWZmIGluIGEgY3NzOnt9IG9iamVjdCBmb3IgZXhhbXBsZS5cblxuICAgIGNsZWFuVmFycyA9IF9jb3B5RXhjbHVkaW5nKHZhcnMsIF9yZXNlcnZlZFByb3BzKTtcbiAgICBwcmV2U3RhcnRBdCAmJiBwcmV2U3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpLmtpbGwoKTtcblxuICAgIGlmIChzdGFydEF0KSB7XG4gICAgICBfcmVtb3ZlRnJvbVBhcmVudCh0d2Vlbi5fc3RhcnRBdCA9IFR3ZWVuLnNldCh0YXJnZXRzLCBfc2V0RGVmYXVsdHMoe1xuICAgICAgICBkYXRhOiBcImlzU3RhcnRcIixcbiAgICAgICAgb3ZlcndyaXRlOiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlcjogdHJ1ZSxcbiAgICAgICAgbGF6eTogX2lzTm90RmFsc2UobGF6eSksXG4gICAgICAgIHN0YXJ0QXQ6IG51bGwsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBvblVwZGF0ZTogb25VcGRhdGUsXG4gICAgICAgIG9uVXBkYXRlUGFyYW1zOiBvblVwZGF0ZVBhcmFtcyxcbiAgICAgICAgY2FsbGJhY2tTY29wZTogY2FsbGJhY2tTY29wZSxcbiAgICAgICAgc3RhZ2dlcjogMFxuICAgICAgfSwgc3RhcnRBdCkpKTsgLy9jb3B5IHRoZSBwcm9wZXJ0aWVzL3ZhbHVlcyBpbnRvIGEgbmV3IG9iamVjdCB0byBhdm9pZCBjb2xsaXNpb25zLCBsaWtlIHZhciB0byA9IHt4OjB9LCBmcm9tID0ge3g6NTAwfTsgdGltZWxpbmUuZnJvbVRvKGUsIGZyb20sIHRvKS5mcm9tVG8oZSwgdG8sIGZyb20pO1xuXG5cbiAgICAgIHRpbWUgPCAwICYmICFpbW1lZGlhdGVSZW5kZXIgJiYgIWF1dG9SZXZlcnQgJiYgdHdlZW4uX3N0YXJ0QXQucmVuZGVyKC0xLCB0cnVlKTsgLy8gcmFyZSBlZGdlIGNhc2UsIGxpa2UgaWYgYSByZW5kZXIgaXMgZm9yY2VkIGluIHRoZSBuZWdhdGl2ZSBkaXJlY3Rpb24gb2YgYSBub24taW5pdHRlZCB0d2Vlbi5cblxuICAgICAgaWYgKGltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICB0aW1lID4gMCAmJiAhYXV0b1JldmVydCAmJiAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG5cbiAgICAgICAgaWYgKGR1ciAmJiB0aW1lIDw9IDApIHtcbiAgICAgICAgICB0aW1lICYmICh0d2Vlbi5felRpbWUgPSB0aW1lKTtcbiAgICAgICAgICByZXR1cm47IC8vd2Ugc2tpcCBpbml0aWFsaXphdGlvbiBoZXJlIHNvIHRoYXQgb3ZlcndyaXRpbmcgZG9lc24ndCBvY2N1ciB1bnRpbCB0aGUgdHdlZW4gYWN0dWFsbHkgYmVnaW5zLiBPdGhlcndpc2UsIGlmIHlvdSBjcmVhdGUgc2V2ZXJhbCBpbW1lZGlhdGVSZW5kZXI6dHJ1ZSB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0L3Byb3BlcnRpZXMgdG8gZHJvcCBpbnRvIGEgVGltZWxpbmUsIHRoZSBsYXN0IG9uZSBjcmVhdGVkIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmlyc3Qgb25lcyBiZWNhdXNlIHRoZXkgZGlkbid0IGdldCBwbGFjZWQgaW50byB0aGUgdGltZWxpbmUgeWV0IGJlZm9yZSB0aGUgZmlyc3QgcmVuZGVyIG9jY3VycyBhbmQga2lja3MgaW4gb3ZlcndyaXRpbmcuXG4gICAgICAgIH0gLy8gaWYgKHRpbWUgPiAwKSB7XG4gICAgICAgIC8vIFx0YXV0b1JldmVydCB8fCAodHdlZW4uX3N0YXJ0QXQgPSAwKTsgLy90d2VlbnMgdGhhdCByZW5kZXIgaW1tZWRpYXRlbHkgKGxpa2UgbW9zdCBmcm9tKCkgYW5kIGZyb21UbygpIHR3ZWVucykgc2hvdWxkbid0IHJldmVydCB3aGVuIHRoZWlyIHBhcmVudCB0aW1lbGluZSdzIHBsYXloZWFkIGdvZXMgYmFja3dhcmQgcGFzdCB0aGUgc3RhcnRUaW1lIGJlY2F1c2UgdGhlIGluaXRpYWwgcmVuZGVyIGNvdWxkIGhhdmUgaGFwcGVuZWQgYW55dGltZSBhbmQgaXQgc2hvdWxkbid0IGJlIGRpcmVjdGx5IGNvcnJlbGF0ZWQgdG8gdGhpcyB0d2VlbidzIHN0YXJ0VGltZS4gSW1hZ2luZSBzZXR0aW5nIHVwIGEgY29tcGxleCBhbmltYXRpb24gd2hlcmUgdGhlIGJlZ2lubmluZyBzdGF0ZXMgb2YgdmFyaW91cyBvYmplY3RzIGFyZSByZW5kZXJlZCBpbW1lZGlhdGVseSBidXQgdGhlIHR3ZWVuIGRvZXNuJ3QgaGFwcGVuIGZvciBxdWl0ZSBzb21lIHRpbWUgLSBpZiB3ZSByZXZlcnQgdG8gdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcyBzb29uIGFzIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIHBhc3QgdGhlIHR3ZWVuJ3Mgc3RhcnRUaW1lLCBpdCB3aWxsIHRocm93IHRoaW5ncyBvZmYgdmlzdWFsbHkuIFJldmVyc2lvbiBzaG91bGQgb25seSBoYXBwZW4gaW4gVGltZWxpbmUgaW5zdGFuY2VzIHdoZXJlIGltbWVkaWF0ZVJlbmRlciB3YXMgZmFsc2Ugb3Igd2hlbiBhdXRvUmV2ZXJ0IGlzIGV4cGxpY2l0bHkgc2V0IHRvIHRydWUuXG4gICAgICAgIC8vIH0gZWxzZSBpZiAoZHVyICYmICEodGltZSA8IDAgJiYgcHJldlN0YXJ0QXQpKSB7XG4gICAgICAgIC8vIFx0dGltZSAmJiAodHdlZW4uX3pUaW1lID0gdGltZSk7XG4gICAgICAgIC8vIFx0cmV0dXJuOyAvL3dlIHNraXAgaW5pdGlhbGl6YXRpb24gaGVyZSBzbyB0aGF0IG92ZXJ3cml0aW5nIGRvZXNuJ3Qgb2NjdXIgdW50aWwgdGhlIHR3ZWVuIGFjdHVhbGx5IGJlZ2lucy4gT3RoZXJ3aXNlLCBpZiB5b3UgY3JlYXRlIHNldmVyYWwgaW1tZWRpYXRlUmVuZGVyOnRydWUgdHdlZW5zIG9mIHRoZSBzYW1lIHRhcmdldC9wcm9wZXJ0aWVzIHRvIGRyb3AgaW50byBhIFRpbWVsaW5lLCB0aGUgbGFzdCBvbmUgY3JlYXRlZCB3b3VsZCBvdmVyd3JpdGUgdGhlIGZpcnN0IG9uZXMgYmVjYXVzZSB0aGV5IGRpZG4ndCBnZXQgcGxhY2VkIGludG8gdGhlIHRpbWVsaW5lIHlldCBiZWZvcmUgdGhlIGZpcnN0IHJlbmRlciBvY2N1cnMgYW5kIGtpY2tzIGluIG92ZXJ3cml0aW5nLlxuICAgICAgICAvLyB9XG5cbiAgICAgIH0gZWxzZSBpZiAoYXV0b1JldmVydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3N0YXJ0QXQgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVuQmFja3dhcmRzICYmIGR1cikge1xuICAgICAgLy9mcm9tKCkgdHdlZW5zIG11c3QgYmUgaGFuZGxlZCB1bmlxdWVseTogdGhlaXIgYmVnaW5uaW5nIHZhbHVlcyBtdXN0IGJlIHJlbmRlcmVkIGJ1dCB3ZSBkb24ndCB3YW50IG92ZXJ3cml0aW5nIHRvIG9jY3VyIHlldCAod2hlbiB0aW1lIGlzIHN0aWxsIDApLiBXYWl0IHVudGlsIHRoZSB0d2VlbiBhY3R1YWxseSBiZWdpbnMgYmVmb3JlIGRvaW5nIGFsbCB0aGUgcm91dGluZXMgbGlrZSBvdmVyd3JpdGluZy4gQXQgdGhhdCB0aW1lLCB3ZSBzaG91bGQgcmVuZGVyIGF0IHRoZSBFTkQgb2YgdGhlIHR3ZWVuIHRvIGVuc3VyZSB0aGF0IHRoaW5ncyBpbml0aWFsaXplIGNvcnJlY3RseSAocmVtZW1iZXIsIGZyb20oKSB0d2VlbnMgZ28gYmFja3dhcmRzKVxuICAgICAgaWYgKHByZXZTdGFydEF0KSB7XG4gICAgICAgICFhdXRvUmV2ZXJ0ICYmICh0d2Vlbi5fc3RhcnRBdCA9IDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZSAmJiAoaW1tZWRpYXRlUmVuZGVyID0gZmFsc2UpOyAvL2luIHJhcmUgY2FzZXMgKGxpa2UgaWYgYSBmcm9tKCkgdHdlZW4gcnVucyBhbmQgdGhlbiBpcyBpbnZhbGlkYXRlKCktZWQpLCBpbW1lZGlhdGVSZW5kZXIgY291bGQgYmUgdHJ1ZSBidXQgdGhlIGluaXRpYWwgZm9yY2VkLXJlbmRlciBnZXRzIHNraXBwZWQsIHNvIHRoZXJlJ3Mgbm8gbmVlZCB0byBmb3JjZSB0aGUgcmVuZGVyIGluIHRoaXMgY29udGV4dCB3aGVuIHRoZSBfdGltZSBpcyBncmVhdGVyIHRoYW4gMFxuXG4gICAgICAgIHAgPSBfc2V0RGVmYXVsdHMoe1xuICAgICAgICAgIG92ZXJ3cml0ZTogZmFsc2UsXG4gICAgICAgICAgZGF0YTogXCJpc0Zyb21TdGFydFwiLFxuICAgICAgICAgIC8vd2UgdGFnIHRoZSB0d2VlbiB3aXRoIGFzIFwiaXNGcm9tU3RhcnRcIiBzbyB0aGF0IGlmIFtpbnNpZGUgYSBwbHVnaW5dIHdlIG5lZWQgdG8gb25seSBkbyBzb21ldGhpbmcgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4sIHdlIGhhdmUgYSB3YXkgb2YgaWRlbnRpZnlpbmcgdGhpcyB0d2VlbiBhcyBtZXJlbHkgdGhlIG9uZSB0aGF0J3Mgc2V0dGluZyB0aGUgYmVnaW5uaW5nIHZhbHVlcyBmb3IgYSBcImZyb20oKVwiIHR3ZWVuLiBGb3IgZXhhbXBsZSwgY2xlYXJQcm9wcyBpbiBDU1NQbHVnaW4gc2hvdWxkIG9ubHkgZ2V0IGFwcGxpZWQgYXQgdGhlIHZlcnkgRU5EIG9mIGEgdHdlZW4gYW5kIHdpdGhvdXQgdGhpcyB0YWcsIGZyb20oLi4ue2hlaWdodDoxMDAsIGNsZWFyUHJvcHM6XCJoZWlnaHRcIiwgZGVsYXk6MX0pIHdvdWxkIHdpcGUgdGhlIGhlaWdodCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSB0d2VlbiBhbmQgYWZ0ZXIgMSBzZWNvbmQsIGl0J2Qga2ljayBiYWNrIGluLlxuICAgICAgICAgIGxhenk6IGltbWVkaWF0ZVJlbmRlciAmJiBfaXNOb3RGYWxzZShsYXp5KSxcbiAgICAgICAgICBpbW1lZGlhdGVSZW5kZXI6IGltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgICAvL3plcm8tZHVyYXRpb24gdHdlZW5zIHJlbmRlciBpbW1lZGlhdGVseSBieSBkZWZhdWx0LCBidXQgaWYgd2UncmUgbm90IHNwZWNpZmljYWxseSBpbnN0cnVjdGVkIHRvIHJlbmRlciB0aGlzIHR3ZWVuIGltbWVkaWF0ZWx5LCB3ZSBzaG91bGQgc2tpcCB0aGlzIGFuZCBtZXJlbHkgX2luaXQoKSB0byByZWNvcmQgdGhlIHN0YXJ0aW5nIHZhbHVlcyAocmVuZGVyaW5nIHRoZW0gaW1tZWRpYXRlbHkgd291bGQgcHVzaCB0aGVtIHRvIGNvbXBsZXRpb24gd2hpY2ggaXMgd2FzdGVmdWwgaW4gdGhhdCBjYXNlIC0gd2UnZCBoYXZlIHRvIHJlbmRlcigtMSkgaW1tZWRpYXRlbHkgYWZ0ZXIpXG4gICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICBwYXJlbnQ6IHBhcmVudCAvL2Vuc3VyZXMgdGhhdCBuZXN0ZWQgdHdlZW5zIHRoYXQgaGFkIGEgc3RhZ2dlciBhcmUgaGFuZGxlZCBwcm9wZXJseSwgbGlrZSBnc2FwLmZyb20oXCIuY2xhc3NcIiwge3k6Z3NhcC51dGlscy53cmFwKFstMTAwLDEwMF0pfSlcblxuICAgICAgICB9LCBjbGVhblZhcnMpO1xuICAgICAgICBoYXJuZXNzVmFycyAmJiAocFtoYXJuZXNzLnByb3BdID0gaGFybmVzc1ZhcnMpOyAvLyBpbiBjYXNlIHNvbWVvbmUgZG9lcyBzb21ldGhpbmcgbGlrZSAuZnJvbSguLi4sIHtjc3M6e319KVxuXG4gICAgICAgIF9yZW1vdmVGcm9tUGFyZW50KHR3ZWVuLl9zdGFydEF0ID0gVHdlZW4uc2V0KHRhcmdldHMsIHApKTtcblxuICAgICAgICB0aW1lIDwgMCAmJiB0d2Vlbi5fc3RhcnRBdC5yZW5kZXIoLTEsIHRydWUpOyAvLyByYXJlIGVkZ2UgY2FzZSwgbGlrZSBpZiBhIHJlbmRlciBpcyBmb3JjZWQgaW4gdGhlIG5lZ2F0aXZlIGRpcmVjdGlvbiBvZiBhIG5vbi1pbml0dGVkIGZyb20oKSB0d2Vlbi5cblxuICAgICAgICBpZiAoIWltbWVkaWF0ZVJlbmRlcikge1xuICAgICAgICAgIF9pbml0VHdlZW4odHdlZW4uX3N0YXJ0QXQsIF90aW55TnVtKTsgLy9lbnN1cmVzIHRoYXQgdGhlIGluaXRpYWwgdmFsdWVzIGFyZSByZWNvcmRlZFxuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRpbWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0d2Vlbi5fcHQgPSAwO1xuICAgIGxhenkgPSBkdXIgJiYgX2lzTm90RmFsc2UobGF6eSkgfHwgbGF6eSAmJiAhZHVyO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICBnc0RhdGEgPSB0YXJnZXQuX2dzYXAgfHwgX2hhcm5lc3ModGFyZ2V0cylbaV0uX2dzYXA7XG4gICAgICB0d2Vlbi5fcHRMb29rdXBbaV0gPSBwdExvb2t1cCA9IHt9O1xuICAgICAgX2xhenlMb29rdXBbZ3NEYXRhLmlkXSAmJiBfbGF6eVR3ZWVucy5sZW5ndGggJiYgX2xhenlSZW5kZXIoKTsgLy9pZiBvdGhlciB0d2VlbnMgb2YgdGhlIHNhbWUgdGFyZ2V0IGhhdmUgcmVjZW50bHkgaW5pdHRlZCBidXQgaGF2ZW4ndCByZW5kZXJlZCB5ZXQsIHdlJ3ZlIGdvdCB0byBmb3JjZSB0aGUgcmVuZGVyIHNvIHRoYXQgdGhlIHN0YXJ0aW5nIHZhbHVlcyBhcmUgY29ycmVjdCAoaW1hZ2luZSBwb3B1bGF0aW5nIGEgdGltZWxpbmUgd2l0aCBhIGJ1bmNoIG9mIHNlcXVlbnRpYWwgdHdlZW5zIGFuZCB0aGVuIGp1bXBpbmcgdG8gdGhlIGVuZClcblxuICAgICAgaW5kZXggPSBmdWxsVGFyZ2V0cyA9PT0gdGFyZ2V0cyA/IGkgOiBmdWxsVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAgIGlmIChoYXJuZXNzICYmIChwbHVnaW4gPSBuZXcgaGFybmVzcygpKS5pbml0KHRhcmdldCwgaGFybmVzc1ZhcnMgfHwgY2xlYW5WYXJzLCB0d2VlbiwgaW5kZXgsIGZ1bGxUYXJnZXRzKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHdlZW4uX3B0ID0gcHQgPSBuZXcgUHJvcFR3ZWVuKHR3ZWVuLl9wdCwgdGFyZ2V0LCBwbHVnaW4ubmFtZSwgMCwgMSwgcGx1Z2luLnJlbmRlciwgcGx1Z2luLCAwLCBwbHVnaW4ucHJpb3JpdHkpO1xuXG4gICAgICAgIHBsdWdpbi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHB0TG9va3VwW25hbWVdID0gcHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsdWdpbi5wcmlvcml0eSAmJiAoaGFzUHJpb3JpdHkgPSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFoYXJuZXNzIHx8IGhhcm5lc3NWYXJzKSB7XG4gICAgICAgIGZvciAocCBpbiBjbGVhblZhcnMpIHtcbiAgICAgICAgICBpZiAoX3BsdWdpbnNbcF0gJiYgKHBsdWdpbiA9IF9jaGVja1BsdWdpbihwLCBjbGVhblZhcnMsIHR3ZWVuLCBpbmRleCwgdGFyZ2V0LCBmdWxsVGFyZ2V0cykpKSB7XG4gICAgICAgICAgICBwbHVnaW4ucHJpb3JpdHkgJiYgKGhhc1ByaW9yaXR5ID0gMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB0TG9va3VwW3BdID0gcHQgPSBfYWRkUHJvcFR3ZWVuLmNhbGwodHdlZW4sIHRhcmdldCwgcCwgXCJnZXRcIiwgY2xlYW5WYXJzW3BdLCBpbmRleCwgZnVsbFRhcmdldHMsIDAsIHZhcnMuc3RyaW5nRmlsdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHdlZW4uX29wICYmIHR3ZWVuLl9vcFtpXSAmJiB0d2Vlbi5raWxsKHRhcmdldCwgdHdlZW4uX29wW2ldKTtcblxuICAgICAgaWYgKGF1dG9PdmVyd3JpdGUgJiYgdHdlZW4uX3B0KSB7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gdHdlZW47XG5cbiAgICAgICAgX2dsb2JhbFRpbWVsaW5lLmtpbGxUd2VlbnNPZih0YXJnZXQsIHB0TG9va3VwLCB0d2Vlbi5nbG9iYWxUaW1lKHRpbWUpKTsgLy8gbWFrZSBzdXJlIHRoZSBvdmVyd3JpdGluZyBkb2Vzbid0IG92ZXJ3cml0ZSBUSElTIHR3ZWVuISEhXG5cblxuICAgICAgICBvdmVyd3JpdHRlbiA9ICF0d2Vlbi5wYXJlbnQ7XG4gICAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gMDtcbiAgICAgIH1cblxuICAgICAgdHdlZW4uX3B0ICYmIGxhenkgJiYgKF9sYXp5TG9va3VwW2dzRGF0YS5pZF0gPSAxKTtcbiAgICB9XG5cbiAgICBoYXNQcmlvcml0eSAmJiBfc29ydFByb3BUd2VlbnNCeVByaW9yaXR5KHR3ZWVuKTtcbiAgICB0d2Vlbi5fb25Jbml0ICYmIHR3ZWVuLl9vbkluaXQodHdlZW4pOyAvL3BsdWdpbnMgbGlrZSBSb3VuZFByb3BzIG11c3Qgd2FpdCB1bnRpbCBBTEwgb2YgdGhlIFByb3BUd2VlbnMgYXJlIGluc3RhbnRpYXRlZC4gSW4gdGhlIHBsdWdpbidzIGluaXQoKSBmdW5jdGlvbiwgaXQgc2V0cyB0aGUgX29uSW5pdCBvbiB0aGUgdHdlZW4gaW5zdGFuY2UuIE1heSBub3QgYmUgcHJldHR5L2ludHVpdGl2ZSwgYnV0IGl0J3MgZmFzdCBhbmQga2VlcHMgZmlsZSBzaXplIGRvd24uXG4gIH1cblxuICB0d2Vlbi5fb25VcGRhdGUgPSBvblVwZGF0ZTtcbiAgdHdlZW4uX2luaXR0ZWQgPSAoIXR3ZWVuLl9vcCB8fCB0d2Vlbi5fcHQpICYmICFvdmVyd3JpdHRlbjsgLy8gaWYgb3ZlcndyaXR0ZW5Qcm9wcyByZXN1bHRlZCBpbiB0aGUgZW50aXJlIHR3ZWVuIGJlaW5nIGtpbGxlZCwgZG8gTk9UIGZsYWcgaXQgYXMgaW5pdHRlZCBvciBlbHNlIGl0IG1heSByZW5kZXIgZm9yIG9uZSB0aWNrLlxufSxcbiAgICBfYWRkQWxpYXNlc1RvVmFycyA9IGZ1bmN0aW9uIF9hZGRBbGlhc2VzVG9WYXJzKHRhcmdldHMsIHZhcnMpIHtcbiAgdmFyIGhhcm5lc3MgPSB0YXJnZXRzWzBdID8gX2dldENhY2hlKHRhcmdldHNbMF0pLmhhcm5lc3MgOiAwLFxuICAgICAgcHJvcGVydHlBbGlhc2VzID0gaGFybmVzcyAmJiBoYXJuZXNzLmFsaWFzZXMsXG4gICAgICBjb3B5LFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBhbGlhc2VzO1xuXG4gIGlmICghcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgcmV0dXJuIHZhcnM7XG4gIH1cblxuICBjb3B5ID0gX21lcmdlKHt9LCB2YXJzKTtcblxuICBmb3IgKHAgaW4gcHJvcGVydHlBbGlhc2VzKSB7XG4gICAgaWYgKHAgaW4gY29weSkge1xuICAgICAgYWxpYXNlcyA9IHByb3BlcnR5QWxpYXNlc1twXS5zcGxpdChcIixcIik7XG4gICAgICBpID0gYWxpYXNlcy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY29weVthbGlhc2VzW2ldXSA9IGNvcHlbcF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59LFxuICAgIF9wYXJzZUZ1bmNPclN0cmluZyA9IGZ1bmN0aW9uIF9wYXJzZUZ1bmNPclN0cmluZyh2YWx1ZSwgdHdlZW4sIGksIHRhcmdldCwgdGFyZ2V0cykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24odmFsdWUpID8gdmFsdWUuY2FsbCh0d2VlbiwgaSwgdGFyZ2V0LCB0YXJnZXRzKSA6IF9pc1N0cmluZyh2YWx1ZSkgJiYgfnZhbHVlLmluZGV4T2YoXCJyYW5kb20oXCIpID8gX3JlcGxhY2VSYW5kb20odmFsdWUpIDogdmFsdWU7XG59LFxuICAgIF9zdGFnZ2VyVHdlZW5Qcm9wcyA9IF9jYWxsYmFja05hbWVzICsgXCJyZXBlYXQscmVwZWF0RGVsYXkseW95byxyZXBlYXRSZWZyZXNoLHlveW9FYXNlXCIsXG4gICAgX3N0YWdnZXJQcm9wc1RvU2tpcCA9IChfc3RhZ2dlclR3ZWVuUHJvcHMgKyBcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIpLnNwbGl0KFwiLFwiKTtcbi8qXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVFdFRU5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuXG5leHBvcnQgdmFyIFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQW5pbWF0aW9uMikge1xuICBfaW5oZXJpdHNMb29zZShUd2VlbiwgX0FuaW1hdGlvbjIpO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uLCBza2lwSW5oZXJpdCkge1xuICAgIHZhciBfdGhpczM7XG5cbiAgICBpZiAodHlwZW9mIHZhcnMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHBvc2l0aW9uLmR1cmF0aW9uID0gdmFycztcbiAgICAgIHZhcnMgPSBwb3NpdGlvbjtcbiAgICAgIHBvc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICBfdGhpczMgPSBfQW5pbWF0aW9uMi5jYWxsKHRoaXMsIHNraXBJbmhlcml0ID8gdmFycyA6IF9pbmhlcml0RGVmYXVsdHModmFycykpIHx8IHRoaXM7XG4gICAgdmFyIF90aGlzMyR2YXJzID0gX3RoaXMzLnZhcnMsXG4gICAgICAgIGR1cmF0aW9uID0gX3RoaXMzJHZhcnMuZHVyYXRpb24sXG4gICAgICAgIGRlbGF5ID0gX3RoaXMzJHZhcnMuZGVsYXksXG4gICAgICAgIGltbWVkaWF0ZVJlbmRlciA9IF90aGlzMyR2YXJzLmltbWVkaWF0ZVJlbmRlcixcbiAgICAgICAgc3RhZ2dlciA9IF90aGlzMyR2YXJzLnN0YWdnZXIsXG4gICAgICAgIG92ZXJ3cml0ZSA9IF90aGlzMyR2YXJzLm92ZXJ3cml0ZSxcbiAgICAgICAga2V5ZnJhbWVzID0gX3RoaXMzJHZhcnMua2V5ZnJhbWVzLFxuICAgICAgICBkZWZhdWx0cyA9IF90aGlzMyR2YXJzLmRlZmF1bHRzLFxuICAgICAgICBzY3JvbGxUcmlnZ2VyID0gX3RoaXMzJHZhcnMuc2Nyb2xsVHJpZ2dlcixcbiAgICAgICAgeW95b0Vhc2UgPSBfdGhpczMkdmFycy55b3lvRWFzZSxcbiAgICAgICAgcGFyZW50ID0gdmFycy5wYXJlbnQgfHwgX2dsb2JhbFRpbWVsaW5lLFxuICAgICAgICBwYXJzZWRUYXJnZXRzID0gKF9pc0FycmF5KHRhcmdldHMpIHx8IF9pc1R5cGVkQXJyYXkodGFyZ2V0cykgPyBfaXNOdW1iZXIodGFyZ2V0c1swXSkgOiBcImxlbmd0aFwiIGluIHZhcnMpID8gW3RhcmdldHNdIDogdG9BcnJheSh0YXJnZXRzKSxcbiAgICAgICAgdGwsXG4gICAgICAgIGksXG4gICAgICAgIGNvcHksXG4gICAgICAgIGwsXG4gICAgICAgIHAsXG4gICAgICAgIGN1clRhcmdldCxcbiAgICAgICAgc3RhZ2dlckZ1bmMsXG4gICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZTtcbiAgICBfdGhpczMuX3RhcmdldHMgPSBwYXJzZWRUYXJnZXRzLmxlbmd0aCA/IF9oYXJuZXNzKHBhcnNlZFRhcmdldHMpIDogX3dhcm4oXCJHU0FQIHRhcmdldCBcIiArIHRhcmdldHMgKyBcIiBub3QgZm91bmQuIGh0dHBzOi8vZ3JlZW5zb2NrLmNvbVwiLCAhX2NvbmZpZy5udWxsVGFyZ2V0V2FybikgfHwgW107XG4gICAgX3RoaXMzLl9wdExvb2t1cCA9IFtdOyAvL1Byb3BUd2VlbiBsb29rdXAuIEFuIGFycmF5IGNvbnRhaW5pbmcgYW4gb2JqZWN0IGZvciBlYWNoIHRhcmdldCwgaGF2aW5nIGtleXMgZm9yIGVhY2ggdHdlZW5pbmcgcHJvcGVydHlcblxuICAgIF90aGlzMy5fb3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuXG4gICAgaWYgKGtleWZyYW1lcyB8fCBzdGFnZ2VyIHx8IF9pc0Z1bmNPclN0cmluZyhkdXJhdGlvbikgfHwgX2lzRnVuY09yU3RyaW5nKGRlbGF5KSkge1xuICAgICAgdmFycyA9IF90aGlzMy52YXJzO1xuICAgICAgdGwgPSBfdGhpczMudGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICAgICAgICBkYXRhOiBcIm5lc3RlZFwiLFxuICAgICAgICBkZWZhdWx0czogZGVmYXVsdHMgfHwge31cbiAgICAgIH0pO1xuICAgICAgdGwua2lsbCgpO1xuICAgICAgdGwucGFyZW50ID0gdGwuX2RwID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuICAgICAgdGwuX3N0YXJ0ID0gMDtcblxuICAgICAgaWYgKGtleWZyYW1lcykge1xuICAgICAgICBfaW5oZXJpdERlZmF1bHRzKF9zZXREZWZhdWx0cyh0bC52YXJzLmRlZmF1bHRzLCB7XG4gICAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHN0YWdnZXIgPyBwYXJzZWRUYXJnZXRzLmZvckVhY2goZnVuY3Rpb24gKHQsIGkpIHtcbiAgICAgICAgICByZXR1cm4ga2V5ZnJhbWVzLmZvckVhY2goZnVuY3Rpb24gKGZyYW1lLCBqKSB7XG4gICAgICAgICAgICByZXR1cm4gdGwudG8odCwgZnJhbWUsIGogPyBcIj5cIiA6IGkgKiBzdGFnZ2VyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkgOiBrZXlmcmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGwudG8ocGFyc2VkVGFyZ2V0cywgZnJhbWUsIFwiPlwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsID0gcGFyc2VkVGFyZ2V0cy5sZW5ndGg7XG4gICAgICAgIHN0YWdnZXJGdW5jID0gc3RhZ2dlciA/IGRpc3RyaWJ1dGUoc3RhZ2dlcikgOiBfZW1wdHlGdW5jO1xuXG4gICAgICAgIGlmIChfaXNPYmplY3Qoc3RhZ2dlcikpIHtcbiAgICAgICAgICAvL3VzZXJzIGNhbiBwYXNzIGluIGNhbGxiYWNrcyBsaWtlIG9uU3RhcnQvb25Db21wbGV0ZSBpbiB0aGUgc3RhZ2dlciBvYmplY3QuIFRoZXNlIHNob3VsZCBmaXJlIHdpdGggZWFjaCBpbmRpdmlkdWFsIHR3ZWVuLlxuICAgICAgICAgIGZvciAocCBpbiBzdGFnZ2VyKSB7XG4gICAgICAgICAgICBpZiAofl9zdGFnZ2VyVHdlZW5Qcm9wcy5pbmRleE9mKHApKSB7XG4gICAgICAgICAgICAgIHN0YWdnZXJWYXJzVG9NZXJnZSB8fCAoc3RhZ2dlclZhcnNUb01lcmdlID0ge30pO1xuICAgICAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2VbcF0gPSBzdGFnZ2VyW3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBjb3B5ID0ge307XG5cbiAgICAgICAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgICAgICAgaWYgKF9zdGFnZ2VyUHJvcHNUb1NraXAuaW5kZXhPZihwKSA8IDApIHtcbiAgICAgICAgICAgICAgY29weVtwXSA9IHZhcnNbcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29weS5zdGFnZ2VyID0gMDtcbiAgICAgICAgICB5b3lvRWFzZSAmJiAoY29weS55b3lvRWFzZSA9IHlveW9FYXNlKTtcbiAgICAgICAgICBzdGFnZ2VyVmFyc1RvTWVyZ2UgJiYgX21lcmdlKGNvcHksIHN0YWdnZXJWYXJzVG9NZXJnZSk7XG4gICAgICAgICAgY3VyVGFyZ2V0ID0gcGFyc2VkVGFyZ2V0c1tpXTsgLy9kb24ndCBqdXN0IGNvcHkgZHVyYXRpb24gb3IgZGVsYXkgYmVjYXVzZSBpZiB0aGV5J3JlIGEgc3RyaW5nIG9yIGZ1bmN0aW9uLCB3ZSdkIGVuZCB1cCBpbiBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgX2lzRnVuY09yU3RyaW5nKCkgd291bGQgZXZhbHVhdGUgYXMgdHJ1ZSBpbiB0aGUgY2hpbGQgdHdlZW5zLCBlbnRlcmluZyB0aGlzIGxvb3AsIGV0Yy4gU28gd2UgcGFyc2UgdGhlIHZhbHVlIHN0cmFpZ2h0IGZyb20gdmFycyBhbmQgZGVmYXVsdCB0byAwLlxuXG4gICAgICAgICAgY29weS5kdXJhdGlvbiA9ICtfcGFyc2VGdW5jT3JTdHJpbmcoZHVyYXRpb24sIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKTtcbiAgICAgICAgICBjb3B5LmRlbGF5ID0gKCtfcGFyc2VGdW5jT3JTdHJpbmcoZGVsYXksIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMzKSwgaSwgY3VyVGFyZ2V0LCBwYXJzZWRUYXJnZXRzKSB8fCAwKSAtIF90aGlzMy5fZGVsYXk7XG5cbiAgICAgICAgICBpZiAoIXN0YWdnZXIgJiYgbCA9PT0gMSAmJiBjb3B5LmRlbGF5KSB7XG4gICAgICAgICAgICAvLyBpZiBzb21lb25lIGRvZXMgZGVsYXk6XCJyYW5kb20oMSwgNSlcIiwgcmVwZWF0Oi0xLCBmb3IgZXhhbXBsZSwgdGhlIGRlbGF5IHNob3VsZG4ndCBiZSBpbnNpZGUgdGhlIHJlcGVhdC5cbiAgICAgICAgICAgIF90aGlzMy5fZGVsYXkgPSBkZWxheSA9IGNvcHkuZGVsYXk7XG4gICAgICAgICAgICBfdGhpczMuX3N0YXJ0ICs9IGRlbGF5O1xuICAgICAgICAgICAgY29weS5kZWxheSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGwudG8oY3VyVGFyZ2V0LCBjb3B5LCBzdGFnZ2VyRnVuYyhpLCBjdXJUYXJnZXQsIHBhcnNlZFRhcmdldHMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRsLmR1cmF0aW9uKCkgPyBkdXJhdGlvbiA9IGRlbGF5ID0gMCA6IF90aGlzMy50aW1lbGluZSA9IDA7IC8vIGlmIHRoZSB0aW1lbGluZSdzIGR1cmF0aW9uIGlzIDAsIHdlIGRvbid0IG5lZWQgYSB0aW1lbGluZSBpbnRlcm5hbGx5IVxuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiB8fCBfdGhpczMuZHVyYXRpb24oZHVyYXRpb24gPSB0bC5kdXJhdGlvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMzLnRpbWVsaW5lID0gMDsgLy9zcGVlZCBvcHRpbWl6YXRpb24sIGZhc3RlciBsb29rdXBzIChubyBnb2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluKVxuICAgIH1cblxuICAgIGlmIChvdmVyd3JpdGUgPT09IHRydWUgJiYgIV9zdXBwcmVzc092ZXJ3cml0ZXMpIHtcbiAgICAgIF9vdmVyd3JpdGluZ1R3ZWVuID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpO1xuXG4gICAgICBfZ2xvYmFsVGltZWxpbmUua2lsbFR3ZWVuc09mKHBhcnNlZFRhcmdldHMpO1xuXG4gICAgICBfb3ZlcndyaXRpbmdUd2VlbiA9IDA7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUocGFyZW50LCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHBvc2l0aW9uKTtcblxuICAgIHZhcnMucmV2ZXJzZWQgJiYgX3RoaXMzLnJldmVyc2UoKTtcbiAgICB2YXJzLnBhdXNlZCAmJiBfdGhpczMucGF1c2VkKHRydWUpO1xuXG4gICAgaWYgKGltbWVkaWF0ZVJlbmRlciB8fCAhZHVyYXRpb24gJiYgIWtleWZyYW1lcyAmJiBfdGhpczMuX3N0YXJ0ID09PSBfcm91bmRQcmVjaXNlKHBhcmVudC5fdGltZSkgJiYgX2lzTm90RmFsc2UoaW1tZWRpYXRlUmVuZGVyKSAmJiBfaGFzTm9QYXVzZWRBbmNlc3RvcnMoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczMpKSAmJiBwYXJlbnQuZGF0YSAhPT0gXCJuZXN0ZWRcIikge1xuICAgICAgX3RoaXMzLl90VGltZSA9IC1fdGlueU51bTsgLy9mb3JjZXMgYSByZW5kZXIgd2l0aG91dCBoYXZpbmcgdG8gc2V0IHRoZSByZW5kZXIoKSBcImZvcmNlXCIgcGFyYW1ldGVyIHRvIHRydWUgYmVjYXVzZSB3ZSB3YW50IHRvIGFsbG93IGxhenlpbmcgYnkgZGVmYXVsdCAodXNpbmcgdGhlIFwiZm9yY2VcIiBwYXJhbWV0ZXIgYWx3YXlzIGZvcmNlcyBhbiBpbW1lZGlhdGUgZnVsbCByZW5kZXIpXG5cbiAgICAgIF90aGlzMy5yZW5kZXIoTWF0aC5tYXgoMCwgLWRlbGF5KSk7IC8vaW4gY2FzZSBkZWxheSBpcyBuZWdhdGl2ZVxuXG4gICAgfVxuXG4gICAgc2Nyb2xsVHJpZ2dlciAmJiBfc2Nyb2xsVHJpZ2dlcihfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzMyksIHNjcm9sbFRyaWdnZXIpO1xuICAgIHJldHVybiBfdGhpczM7XG4gIH1cblxuICB2YXIgX3Byb3RvMyA9IFR3ZWVuLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSkge1xuICAgIHZhciBwcmV2VGltZSA9IHRoaXMuX3RpbWUsXG4gICAgICAgIHREdXIgPSB0aGlzLl90RHVyLFxuICAgICAgICBkdXIgPSB0aGlzLl9kdXIsXG4gICAgICAgIHRUaW1lID0gdG90YWxUaW1lID4gdER1ciAtIF90aW55TnVtICYmIHRvdGFsVGltZSA+PSAwID8gdER1ciA6IHRvdGFsVGltZSA8IF90aW55TnVtID8gMCA6IHRvdGFsVGltZSxcbiAgICAgICAgdGltZSxcbiAgICAgICAgcHQsXG4gICAgICAgIGl0ZXJhdGlvbixcbiAgICAgICAgY3ljbGVEdXJhdGlvbixcbiAgICAgICAgcHJldkl0ZXJhdGlvbixcbiAgICAgICAgaXNZb3lvLFxuICAgICAgICByYXRpbyxcbiAgICAgICAgdGltZWxpbmUsXG4gICAgICAgIHlveW9FYXNlO1xuXG4gICAgaWYgKCFkdXIpIHtcbiAgICAgIF9yZW5kZXJaZXJvRHVyYXRpb25Ud2Vlbih0aGlzLCB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgfSBlbHNlIGlmICh0VGltZSAhPT0gdGhpcy5fdFRpbWUgfHwgIXRvdGFsVGltZSB8fCBmb3JjZSB8fCAhdGhpcy5faW5pdHRlZCAmJiB0aGlzLl90VGltZSB8fCB0aGlzLl9zdGFydEF0ICYmIHRoaXMuX3pUaW1lIDwgMCAhPT0gdG90YWxUaW1lIDwgMCkge1xuICAgICAgLy90aGlzIHNlbnNlcyBpZiB3ZSdyZSBjcm9zc2luZyBvdmVyIHRoZSBzdGFydCB0aW1lLCBpbiB3aGljaCBjYXNlIHdlIG11c3QgcmVjb3JkIF96VGltZSBhbmQgZm9yY2UgdGhlIHJlbmRlciwgYnV0IHdlIGRvIGl0IGluIHRoaXMgbGVuZ3RoeSBjb25kaXRpb25hbCB3YXkgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgKHVzdWFsbHkgd2UgY2FuIHNraXAgdGhlIGNhbGN1bGF0aW9ucyk6IHRoaXMuX2luaXR0ZWQgJiYgKHRoaXMuX3pUaW1lIDwgMCkgIT09ICh0b3RhbFRpbWUgPCAwKVxuICAgICAgdGltZSA9IHRUaW1lO1xuICAgICAgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lO1xuXG4gICAgICBpZiAodGhpcy5fcmVwZWF0KSB7XG4gICAgICAgIC8vYWRqdXN0IHRoZSB0aW1lIGZvciByZXBlYXRzIGFuZCB5b3lvc1xuICAgICAgICBjeWNsZUR1cmF0aW9uID0gZHVyICsgdGhpcy5fckRlbGF5O1xuXG4gICAgICAgIGlmICh0aGlzLl9yZXBlYXQgPCAtMSAmJiB0b3RhbFRpbWUgPCAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxUaW1lKGN5Y2xlRHVyYXRpb24gKiAxMDAgKyB0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lID0gX3JvdW5kUHJlY2lzZSh0VGltZSAlIGN5Y2xlRHVyYXRpb24pOyAvL3JvdW5kIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IGVycm9ycy4gKDQgJSAwLjggc2hvdWxkIGJlIDAgYnV0IHNvbWUgYnJvd3NlcnMgcmVwb3J0IGl0IGFzIDAuNzk5OTk5OTkhKVxuXG4gICAgICAgIGlmICh0VGltZSA9PT0gdER1cikge1xuICAgICAgICAgIC8vIHRoZSB0RHVyID09PSB0VGltZSBpcyBmb3IgZWRnZSBjYXNlcyB3aGVyZSB0aGVyZSdzIGEgbGVuZ3RoeSBkZWNpbWFsIG9uIHRoZSBkdXJhdGlvbiBhbmQgaXQgbWF5IHJlYWNoIHRoZSB2ZXJ5IGVuZCBidXQgdGhlIHRpbWUgaXMgcmVuZGVyZWQgYXMgbm90LXF1aXRlLXRoZXJlIChyZW1lbWJlciwgdER1ciBpcyByb3VuZGVkIHRvIDQgZGVjaW1hbHMgd2hlcmVhcyBkdXIgaXNuJ3QpXG4gICAgICAgICAgaXRlcmF0aW9uID0gdGhpcy5fcmVwZWF0O1xuICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlcmF0aW9uID0gfn4odFRpbWUgLyBjeWNsZUR1cmF0aW9uKTtcblxuICAgICAgICAgIGlmIChpdGVyYXRpb24gJiYgaXRlcmF0aW9uID09PSB0VGltZSAvIGN5Y2xlRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRpbWUgPSBkdXI7XG4gICAgICAgICAgICBpdGVyYXRpb24tLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aW1lID4gZHVyICYmICh0aW1lID0gZHVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlzWW95byA9IHRoaXMuX3lveW8gJiYgaXRlcmF0aW9uICYgMTtcblxuICAgICAgICBpZiAoaXNZb3lvKSB7XG4gICAgICAgICAgeW95b0Vhc2UgPSB0aGlzLl95RWFzZTtcbiAgICAgICAgICB0aW1lID0gZHVyIC0gdGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZJdGVyYXRpb24gPSBfYW5pbWF0aW9uQ3ljbGUodGhpcy5fdFRpbWUsIGN5Y2xlRHVyYXRpb24pO1xuXG4gICAgICAgIGlmICh0aW1lID09PSBwcmV2VGltZSAmJiAhZm9yY2UgJiYgdGhpcy5faW5pdHRlZCkge1xuICAgICAgICAgIC8vY291bGQgYmUgZHVyaW5nIHRoZSByZXBlYXREZWxheSBwYXJ0LiBObyBuZWVkIHRvIHJlbmRlciBhbmQgZmlyZSBjYWxsYmFja3MuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlcmF0aW9uICE9PSBwcmV2SXRlcmF0aW9uKSB7XG4gICAgICAgICAgdGltZWxpbmUgJiYgdGhpcy5feUVhc2UgJiYgX3Byb3BhZ2F0ZVlveW9FYXNlKHRpbWVsaW5lLCBpc1lveW8pOyAvL3JlcGVhdFJlZnJlc2ggZnVuY3Rpb25hbGl0eVxuXG4gICAgICAgICAgaWYgKHRoaXMudmFycy5yZXBlYXRSZWZyZXNoICYmICFpc1lveW8gJiYgIXRoaXMuX2xvY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2xvY2sgPSBmb3JjZSA9IDE7IC8vZm9yY2UsIG90aGVyd2lzZSBpZiBsYXp5IGlzIHRydWUsIHRoZSBfYXR0ZW1wdEluaXRUd2VlbigpIHdpbGwgcmV0dXJuIGFuZCB3ZSdsbCBqdW1wIG91dCBhbmQgZ2V0IGNhdWdodCBib3VuY2luZyBvbiBlYWNoIHRpY2suXG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKF9yb3VuZFByZWNpc2UoY3ljbGVEdXJhdGlvbiAqIGl0ZXJhdGlvbiksIHRydWUpLmludmFsaWRhdGUoKS5fbG9jayA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faW5pdHRlZCkge1xuICAgICAgICBpZiAoX2F0dGVtcHRJbml0VHdlZW4odGhpcywgdG90YWxUaW1lIDwgMCA/IHRvdGFsVGltZSA6IHRpbWUsIGZvcmNlLCBzdXBwcmVzc0V2ZW50cykpIHtcbiAgICAgICAgICB0aGlzLl90VGltZSA9IDA7IC8vIGluIGNvbnN0cnVjdG9yIGlmIGltbWVkaWF0ZVJlbmRlciBpcyB0cnVlLCB3ZSBzZXQgX3RUaW1lIHRvIC1fdGlueU51bSB0byBoYXZlIHRoZSBwbGF5aGVhZCBjcm9zcyB0aGUgc3RhcnRpbmcgcG9pbnQgYnV0IHdlIGNhbid0IGxlYXZlIF90VGltZSBhcyBhIG5lZ2F0aXZlIG51bWJlci5cblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGR1ciAhPT0gdGhpcy5fZHVyKSB7XG4gICAgICAgICAgLy8gd2hpbGUgaW5pdHRpbmcsIGEgcGx1Z2luIGxpa2UgSW5lcnRpYVBsdWdpbiBtaWdodCBhbHRlciB0aGUgZHVyYXRpb24sIHNvIHJlcnVuIGZyb20gdGhlIHN0YXJ0IHRvIGVuc3VyZSBldmVyeXRoaW5nIHJlbmRlcnMgYXMgaXQgc2hvdWxkLlxuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0b3RhbFRpbWUsIHN1cHByZXNzRXZlbnRzLCBmb3JjZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fdFRpbWUgPSB0VGltZTtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xuXG4gICAgICBpZiAoIXRoaXMuX2FjdCAmJiB0aGlzLl90cykge1xuICAgICAgICB0aGlzLl9hY3QgPSAxOyAvL2FzIGxvbmcgYXMgaXQncyBub3QgcGF1c2VkLCBmb3JjZSBpdCB0byBiZSBhY3RpdmUgc28gdGhhdCBpZiB0aGUgdXNlciByZW5kZXJzIGluZGVwZW5kZW50IG9mIHRoZSBwYXJlbnQgdGltZWxpbmUsIGl0J2xsIGJlIGZvcmNlZCB0byByZS1yZW5kZXIgb24gdGhlIG5leHQgdGljay5cblxuICAgICAgICB0aGlzLl9sYXp5ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yYXRpbyA9IHJhdGlvID0gKHlveW9FYXNlIHx8IHRoaXMuX2Vhc2UpKHRpbWUgLyBkdXIpO1xuXG4gICAgICBpZiAodGhpcy5fZnJvbSkge1xuICAgICAgICB0aGlzLnJhdGlvID0gcmF0aW8gPSAxIC0gcmF0aW87XG4gICAgICB9XG5cbiAgICAgIGlmICh0aW1lICYmICFwcmV2VGltZSAmJiAhc3VwcHJlc3NFdmVudHMpIHtcbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25TdGFydFwiKTtcblxuICAgICAgICBpZiAodGhpcy5fdFRpbWUgIT09IHRUaW1lKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB0aGUgb25TdGFydCB0cmlnZ2VyZWQgYSByZW5kZXIgYXQgYSBkaWZmZXJlbnQgc3BvdCwgZWplY3QuIExpa2UgaWYgc29tZW9uZSBkaWQgYW5pbWF0aW9uLnBhdXNlKDAuNSkgb3Igc29tZXRoaW5nIGluc2lkZSB0aGUgb25TdGFydC5cbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwdCA9IHRoaXMuX3B0O1xuXG4gICAgICB3aGlsZSAocHQpIHtcbiAgICAgICAgcHQucihyYXRpbywgcHQuZCk7XG4gICAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgICB9XG5cbiAgICAgIHRpbWVsaW5lICYmIHRpbWVsaW5lLnJlbmRlcih0b3RhbFRpbWUgPCAwID8gdG90YWxUaW1lIDogIXRpbWUgJiYgaXNZb3lvID8gLV90aW55TnVtIDogdGltZWxpbmUuX2R1ciAqIHJhdGlvLCBzdXBwcmVzc0V2ZW50cywgZm9yY2UpIHx8IHRoaXMuX3N0YXJ0QXQgJiYgKHRoaXMuX3pUaW1lID0gdG90YWxUaW1lKTtcblxuICAgICAgaWYgKHRoaXMuX29uVXBkYXRlICYmICFzdXBwcmVzc0V2ZW50cykge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgdGhpcy5fc3RhcnRBdC5yZW5kZXIodG90YWxUaW1lLCB0cnVlLCBmb3JjZSk7IC8vbm90ZTogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHdlIHR1Y2sgdGhpcyBjb25kaXRpb25hbCBsb2dpYyBpbnNpZGUgbGVzcyB0cmF2ZWxlZCBhcmVhcyAobW9zdCB0d2VlbnMgZG9uJ3QgaGF2ZSBhbiBvblVwZGF0ZSkuIFdlJ2QganVzdCBoYXZlIGl0IGF0IHRoZSBlbmQgYmVmb3JlIHRoZSBvbkNvbXBsZXRlLCBidXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgdXBkYXRlZCBiZWZvcmUgYW55IG9uVXBkYXRlIGlzIGNhbGxlZCwgc28gd2UgQUxTTyBwdXQgaXQgaGVyZSBhbmQgdGhlbiBpZiBpdCdzIG5vdCBjYWxsZWQsIHdlIGRvIHNvIGxhdGVyIG5lYXIgdGhlIG9uQ29tcGxldGUuXG5cbiAgICAgICAgX2NhbGxiYWNrKHRoaXMsIFwib25VcGRhdGVcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlcGVhdCAmJiBpdGVyYXRpb24gIT09IHByZXZJdGVyYXRpb24gJiYgdGhpcy52YXJzLm9uUmVwZWF0ICYmICFzdXBwcmVzc0V2ZW50cyAmJiB0aGlzLnBhcmVudCAmJiBfY2FsbGJhY2sodGhpcywgXCJvblJlcGVhdFwiKTtcblxuICAgICAgaWYgKCh0VGltZSA9PT0gdGhpcy5fdER1ciB8fCAhdFRpbWUpICYmIHRoaXMuX3RUaW1lID09PSB0VGltZSkge1xuICAgICAgICB0b3RhbFRpbWUgPCAwICYmIHRoaXMuX3N0YXJ0QXQgJiYgIXRoaXMuX29uVXBkYXRlICYmIHRoaXMuX3N0YXJ0QXQucmVuZGVyKHRvdGFsVGltZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICh0b3RhbFRpbWUgfHwgIWR1cikgJiYgKHRUaW1lID09PSB0aGlzLl90RHVyICYmIHRoaXMuX3RzID4gMCB8fCAhdFRpbWUgJiYgdGhpcy5fdHMgPCAwKSAmJiBfcmVtb3ZlRnJvbVBhcmVudCh0aGlzLCAxKTsgLy8gZG9uJ3QgcmVtb3ZlIGlmIHdlJ3JlIHJlbmRlcmluZyBhdCBleGFjdGx5IGEgdGltZSBvZiAwLCBhcyB0aGVyZSBjb3VsZCBiZSBhdXRvUmV2ZXJ0IHZhbHVlcyB0aGF0IHNob3VsZCBnZXQgc2V0IG9uIHRoZSBuZXh0IHRpY2sgKGlmIHRoZSBwbGF5aGVhZCBnb2VzIGJhY2t3YXJkIGJleW9uZCB0aGUgc3RhcnRUaW1lLCBuZWdhdGl2ZSB0b3RhbFRpbWUpLiBEb24ndCByZW1vdmUgaWYgdGhlIHRpbWVsaW5lIGlzIHJldmVyc2VkIGFuZCB0aGUgcGxheWhlYWQgaXNuJ3QgYXQgMCwgb3RoZXJ3aXNlIHRsLnByb2dyZXNzKDEpLnJldmVyc2UoKSB3b24ndCB3b3JrLiBPbmx5IHJlbW92ZSBpZiB0aGUgcGxheWhlYWQgaXMgYXQgdGhlIGVuZCBhbmQgdGltZVNjYWxlIGlzIHBvc2l0aXZlLCBvciBpZiB0aGUgcGxheWhlYWQgaXMgYXQgMCBhbmQgdGhlIHRpbWVTY2FsZSBpcyBuZWdhdGl2ZS5cblxuICAgICAgICBpZiAoIXN1cHByZXNzRXZlbnRzICYmICEodG90YWxUaW1lIDwgMCAmJiAhcHJldlRpbWUpICYmICh0VGltZSB8fCBwcmV2VGltZSkpIHtcbiAgICAgICAgICAvLyBpZiBwcmV2VGltZSBhbmQgdFRpbWUgYXJlIHplcm8sIHdlIHNob3VsZG4ndCBmaXJlIHRoZSBvblJldmVyc2VDb21wbGV0ZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWYgeW91IGdzYXAudG8oLi4uIHtwYXVzZWQ6dHJ1ZX0pLnBsYXkoKTtcbiAgICAgICAgICBfY2FsbGJhY2sodGhpcywgdFRpbWUgPT09IHREdXIgPyBcIm9uQ29tcGxldGVcIiA6IFwib25SZXZlcnNlQ29tcGxldGVcIiwgdHJ1ZSk7XG5cbiAgICAgICAgICB0aGlzLl9wcm9tICYmICEodFRpbWUgPCB0RHVyICYmIHRoaXMudGltZVNjYWxlKCkgPiAwKSAmJiB0aGlzLl9wcm9tKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8zLnRhcmdldHMgPSBmdW5jdGlvbiB0YXJnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXJnZXRzO1xuICB9O1xuXG4gIF9wcm90bzMuaW52YWxpZGF0ZSA9IGZ1bmN0aW9uIGludmFsaWRhdGUoKSB7XG4gICAgdGhpcy5fcHQgPSB0aGlzLl9vcCA9IHRoaXMuX3N0YXJ0QXQgPSB0aGlzLl9vblVwZGF0ZSA9IHRoaXMuX2xhenkgPSB0aGlzLnJhdGlvID0gMDtcbiAgICB0aGlzLl9wdExvb2t1cCA9IFtdO1xuICAgIHRoaXMudGltZWxpbmUgJiYgdGhpcy50aW1lbGluZS5pbnZhbGlkYXRlKCk7XG4gICAgcmV0dXJuIF9BbmltYXRpb24yLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvMy5raWxsID0gZnVuY3Rpb24ga2lsbCh0YXJnZXRzLCB2YXJzKSB7XG4gICAgaWYgKHZhcnMgPT09IHZvaWQgMCkge1xuICAgICAgdmFycyA9IFwiYWxsXCI7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRzICYmICghdmFycyB8fCB2YXJzID09PSBcImFsbFwiKSkge1xuICAgICAgdGhpcy5fbGF6eSA9IHRoaXMuX3B0ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IF9pbnRlcnJ1cHQodGhpcykgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB2YXIgdER1ciA9IHRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO1xuICAgICAgdGhpcy50aW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgdmFycywgX292ZXJ3cml0aW5nVHdlZW4gJiYgX292ZXJ3cml0aW5nVHdlZW4udmFycy5vdmVyd3JpdGUgIT09IHRydWUpLl9maXJzdCB8fCBfaW50ZXJydXB0KHRoaXMpOyAvLyBpZiBub3RoaW5nIGlzIGxlZnQgdHdlZW5pbmcsIGludGVycnVwdC5cblxuICAgICAgdGhpcy5wYXJlbnQgJiYgdER1ciAhPT0gdGhpcy50aW1lbGluZS50b3RhbER1cmF0aW9uKCkgJiYgX3NldER1cmF0aW9uKHRoaXMsIHRoaXMuX2R1ciAqIHRoaXMudGltZWxpbmUuX3REdXIgLyB0RHVyLCAwLCAxKTsgLy8gaWYgYSBuZXN0ZWQgdHdlZW4gaXMga2lsbGVkIHRoYXQgY2hhbmdlcyB0aGUgZHVyYXRpb24sIGl0IHNob3VsZCBhZmZlY3QgdGhpcyB0d2VlbidzIGR1cmF0aW9uLiBXZSBtdXN0IHVzZSB0aGUgcmF0aW8sIHRob3VnaCwgYmVjYXVzZSBzb21ldGltZXMgdGhlIGludGVybmFsIHRpbWVsaW5lIGlzIHN0cmV0Y2hlZCBsaWtlIGZvciBrZXlmcmFtZXMgd2hlcmUgdGhleSBkb24ndCBhbGwgYWRkIHVwIHRvIHdoYXRldmVyIHRoZSBwYXJlbnQgdHdlZW4ncyBkdXJhdGlvbiB3YXMgc2V0IHRvLlxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgcGFyc2VkVGFyZ2V0cyA9IHRoaXMuX3RhcmdldHMsXG4gICAgICAgIGtpbGxpbmdUYXJnZXRzID0gdGFyZ2V0cyA/IHRvQXJyYXkodGFyZ2V0cykgOiBwYXJzZWRUYXJnZXRzLFxuICAgICAgICBwcm9wVHdlZW5Mb29rdXAgPSB0aGlzLl9wdExvb2t1cCxcbiAgICAgICAgZmlyc3RQVCA9IHRoaXMuX3B0LFxuICAgICAgICBvdmVyd3JpdHRlblByb3BzLFxuICAgICAgICBjdXJMb29rdXAsXG4gICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzLFxuICAgICAgICBwcm9wcyxcbiAgICAgICAgcCxcbiAgICAgICAgcHQsXG4gICAgICAgIGk7XG5cbiAgICBpZiAoKCF2YXJzIHx8IHZhcnMgPT09IFwiYWxsXCIpICYmIF9hcnJheXNNYXRjaChwYXJzZWRUYXJnZXRzLCBraWxsaW5nVGFyZ2V0cykpIHtcbiAgICAgIHZhcnMgPT09IFwiYWxsXCIgJiYgKHRoaXMuX3B0ID0gMCk7XG4gICAgICByZXR1cm4gX2ludGVycnVwdCh0aGlzKTtcbiAgICB9XG5cbiAgICBvdmVyd3JpdHRlblByb3BzID0gdGhpcy5fb3AgPSB0aGlzLl9vcCB8fCBbXTtcblxuICAgIGlmICh2YXJzICE9PSBcImFsbFwiKSB7XG4gICAgICAvL3NvIHBlb3BsZSBjYW4gcGFzcyBpbiBhIGNvbW1hLWRlbGltaXRlZCBsaXN0IG9mIHByb3BlcnR5IG5hbWVzXG4gICAgICBpZiAoX2lzU3RyaW5nKHZhcnMpKSB7XG4gICAgICAgIHAgPSB7fTtcblxuICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gcFtuYW1lXSA9IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhcnMgPSBwO1xuICAgICAgfVxuXG4gICAgICB2YXJzID0gX2FkZEFsaWFzZXNUb1ZhcnMocGFyc2VkVGFyZ2V0cywgdmFycyk7XG4gICAgfVxuXG4gICAgaSA9IHBhcnNlZFRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKH5raWxsaW5nVGFyZ2V0cy5pbmRleE9mKHBhcnNlZFRhcmdldHNbaV0pKSB7XG4gICAgICAgIGN1ckxvb2t1cCA9IHByb3BUd2Vlbkxvb2t1cFtpXTtcblxuICAgICAgICBpZiAodmFycyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG92ZXJ3cml0dGVuUHJvcHNbaV0gPSB2YXJzO1xuICAgICAgICAgIHByb3BzID0gY3VyTG9va3VwO1xuICAgICAgICAgIGN1ck92ZXJ3cml0ZVByb3BzID0ge307XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHMgPSBvdmVyd3JpdHRlblByb3BzW2ldID0gb3ZlcndyaXR0ZW5Qcm9wc1tpXSB8fCB7fTtcbiAgICAgICAgICBwcm9wcyA9IHZhcnM7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHAgaW4gcHJvcHMpIHtcbiAgICAgICAgICBwdCA9IGN1ckxvb2t1cCAmJiBjdXJMb29rdXBbcF07XG5cbiAgICAgICAgICBpZiAocHQpIHtcbiAgICAgICAgICAgIGlmICghKFwia2lsbFwiIGluIHB0LmQpIHx8IHB0LmQua2lsbChwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW0odGhpcywgcHQsIFwiX3B0XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY3VyTG9va3VwW3BdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjdXJPdmVyd3JpdGVQcm9wcyAhPT0gXCJhbGxcIikge1xuICAgICAgICAgICAgY3VyT3ZlcndyaXRlUHJvcHNbcF0gPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2luaXR0ZWQgJiYgIXRoaXMuX3B0ICYmIGZpcnN0UFQgJiYgX2ludGVycnVwdCh0aGlzKTsgLy9pZiBhbGwgdHdlZW5pbmcgcHJvcGVydGllcyBhcmUga2lsbGVkLCBraWxsIHRoZSB0d2Vlbi4gV2l0aG91dCB0aGlzIGxpbmUsIGlmIHRoZXJlJ3MgYSB0d2VlbiB3aXRoIG11bHRpcGxlIHRhcmdldHMgYW5kIHRoZW4geW91IGtpbGxUd2VlbnNPZigpIGVhY2ggdGFyZ2V0IGluZGl2aWR1YWxseSwgdGhlIHR3ZWVuIHdvdWxkIHRlY2huaWNhbGx5IHN0aWxsIHJlbWFpbiBhY3RpdmUgYW5kIGZpcmUgaXRzIG9uQ29tcGxldGUgZXZlbiB0aG91Z2ggdGhlcmUgYXJlbid0IGFueSBtb3JlIHByb3BlcnRpZXMgdHdlZW5pbmcuXG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi50byA9IGZ1bmN0aW9uIHRvKHRhcmdldHMsIHZhcnMpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKHRhcmdldHMsIHZhcnMsIGFyZ3VtZW50c1syXSk7XG4gIH07XG5cbiAgVHdlZW4uZnJvbSA9IGZ1bmN0aW9uIGZyb20odGFyZ2V0cywgdmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDEsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uZGVsYXllZENhbGwgPSBmdW5jdGlvbiBkZWxheWVkQ2FsbChkZWxheSwgY2FsbGJhY2ssIHBhcmFtcywgc2NvcGUpIHtcbiAgICByZXR1cm4gbmV3IFR3ZWVuKGNhbGxiYWNrLCAwLCB7XG4gICAgICBpbW1lZGlhdGVSZW5kZXI6IGZhbHNlLFxuICAgICAgbGF6eTogZmFsc2UsXG4gICAgICBvdmVyd3JpdGU6IGZhbHNlLFxuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgb25Db21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvblJldmVyc2VDb21wbGV0ZTogY2FsbGJhY2ssXG4gICAgICBvbkNvbXBsZXRlUGFyYW1zOiBwYXJhbXMsXG4gICAgICBvblJldmVyc2VDb21wbGV0ZVBhcmFtczogcGFyYW1zLFxuICAgICAgY2FsbGJhY2tTY29wZTogc2NvcGVcbiAgICB9KTtcbiAgfTtcblxuICBUd2Vlbi5mcm9tVG8gPSBmdW5jdGlvbiBmcm9tVG8odGFyZ2V0cywgZnJvbVZhcnMsIHRvVmFycykge1xuICAgIHJldHVybiBfY3JlYXRlVHdlZW5UeXBlKDIsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgVHdlZW4uc2V0ID0gZnVuY3Rpb24gc2V0KHRhcmdldHMsIHZhcnMpIHtcbiAgICB2YXJzLmR1cmF0aW9uID0gMDtcbiAgICB2YXJzLnJlcGVhdERlbGF5IHx8ICh2YXJzLnJlcGVhdCA9IDApO1xuICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0cywgdmFycyk7XG4gIH07XG5cbiAgVHdlZW4ua2lsbFR3ZWVuc09mID0gZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHRhcmdldHMsIHByb3BzLCBvbmx5QWN0aXZlKSB7XG4gICAgcmV0dXJuIF9nbG9iYWxUaW1lbGluZS5raWxsVHdlZW5zT2YodGFyZ2V0cywgcHJvcHMsIG9ubHlBY3RpdmUpO1xuICB9O1xuXG4gIHJldHVybiBUd2Vlbjtcbn0oQW5pbWF0aW9uKTtcblxuX3NldERlZmF1bHRzKFR3ZWVuLnByb3RvdHlwZSwge1xuICBfdGFyZ2V0czogW10sXG4gIF9sYXp5OiAwLFxuICBfc3RhcnRBdDogMCxcbiAgX29wOiAwLFxuICBfb25Jbml0OiAwXG59KTsgLy9hZGQgdGhlIHBlcnRpbmVudCB0aW1lbGluZSBtZXRob2RzIHRvIFR3ZWVuIGluc3RhbmNlcyBzbyB0aGF0IHVzZXJzIGNhbiBjaGFpbiBjb252ZW5pZW50bHkgYW5kIGNyZWF0ZSBhIHRpbWVsaW5lIGF1dG9tYXRpY2FsbHkuIChyZW1vdmVkIGR1ZSB0byBjb25jZXJucyB0aGF0IGl0J2QgdWx0aW1hdGVseSBhZGQgdG8gbW9yZSBjb25mdXNpb24gZXNwZWNpYWxseSBmb3IgYmVnaW5uZXJzKVxuLy8gX2ZvckVhY2hOYW1lKFwidG8sZnJvbSxmcm9tVG8sc2V0LGNhbGwsYWRkLGFkZExhYmVsLGFkZFBhdXNlXCIsIG5hbWUgPT4ge1xuLy8gXHRUd2Vlbi5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRsZXQgdGwgPSBuZXcgVGltZWxpbmUoKTtcbi8vIFx0XHRyZXR1cm4gX2FkZFRvVGltZWxpbmUodGwsIHRoaXMpW25hbWVdLmFwcGx5KHRsLCB0b0FycmF5KGFyZ3VtZW50cykpO1xuLy8gXHR9XG4vLyB9KTtcbi8vZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuIExldmVyYWdlIHRoZSB0aW1lbGluZSBjYWxscy5cblxuXG5fZm9yRWFjaE5hbWUoXCJzdGFnZ2VyVG8sc3RhZ2dlckZyb20sc3RhZ2dlckZyb21Ub1wiLCBmdW5jdGlvbiAobmFtZSkge1xuICBUd2VlbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGwgPSBuZXcgVGltZWxpbmUoKSxcbiAgICAgICAgcGFyYW1zID0gX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgIHBhcmFtcy5zcGxpY2UobmFtZSA9PT0gXCJzdGFnZ2VyRnJvbVRvXCIgPyA1IDogNCwgMCwgMCk7XG4gICAgcmV0dXJuIHRsW25hbWVdLmFwcGx5KHRsLCBwYXJhbXMpO1xuICB9O1xufSk7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFBST1BUV0VFTlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5cbnZhciBfc2V0dGVyUGxhaW4gPSBmdW5jdGlvbiBfc2V0dGVyUGxhaW4odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbn0sXG4gICAgX3NldHRlckZ1bmMgPSBmdW5jdGlvbiBfc2V0dGVyRnVuYyh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0W3Byb3BlcnR5XSh2YWx1ZSk7XG59LFxuICAgIF9zZXR0ZXJGdW5jV2l0aFBhcmFtID0gZnVuY3Rpb24gX3NldHRlckZ1bmNXaXRoUGFyYW0odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIGRhdGEpIHtcbiAgcmV0dXJuIHRhcmdldFtwcm9wZXJ0eV0oZGF0YS5mcCwgdmFsdWUpO1xufSxcbiAgICBfc2V0dGVyQXR0cmlidXRlID0gZnVuY3Rpb24gX3NldHRlckF0dHJpYnV0ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICByZXR1cm4gdGFyZ2V0LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpO1xufSxcbiAgICBfZ2V0U2V0dGVyID0gZnVuY3Rpb24gX2dldFNldHRlcih0YXJnZXQsIHByb3BlcnR5KSB7XG4gIHJldHVybiBfaXNGdW5jdGlvbih0YXJnZXRbcHJvcGVydHldKSA/IF9zZXR0ZXJGdW5jIDogX2lzVW5kZWZpbmVkKHRhcmdldFtwcm9wZXJ0eV0pICYmIHRhcmdldC5zZXRBdHRyaWJ1dGUgPyBfc2V0dGVyQXR0cmlidXRlIDogX3NldHRlclBsYWluO1xufSxcbiAgICBfcmVuZGVyUGxhaW4gPSBmdW5jdGlvbiBfcmVuZGVyUGxhaW4ocmF0aW8sIGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEuc2V0KGRhdGEudCwgZGF0YS5wLCBNYXRoLnJvdW5kKChkYXRhLnMgKyBkYXRhLmMgKiByYXRpbykgKiAxMDAwMDAwKSAvIDEwMDAwMDAsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyQm9vbGVhbiA9IGZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHJhdGlvLCBkYXRhKSB7XG4gIHJldHVybiBkYXRhLnNldChkYXRhLnQsIGRhdGEucCwgISEoZGF0YS5zICsgZGF0YS5jICogcmF0aW8pLCBkYXRhKTtcbn0sXG4gICAgX3JlbmRlckNvbXBsZXhTdHJpbmcgPSBmdW5jdGlvbiBfcmVuZGVyQ29tcGxleFN0cmluZyhyYXRpbywgZGF0YSkge1xuICB2YXIgcHQgPSBkYXRhLl9wdCxcbiAgICAgIHMgPSBcIlwiO1xuXG4gIGlmICghcmF0aW8gJiYgZGF0YS5iKSB7XG4gICAgLy9iID0gYmVnaW5uaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmI7XG4gIH0gZWxzZSBpZiAocmF0aW8gPT09IDEgJiYgZGF0YS5lKSB7XG4gICAgLy9lID0gZW5kaW5nIHN0cmluZ1xuICAgIHMgPSBkYXRhLmU7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHB0KSB7XG4gICAgICBzID0gcHQucCArIChwdC5tID8gcHQubShwdC5zICsgcHQuYyAqIHJhdGlvKSA6IE1hdGgucm91bmQoKHB0LnMgKyBwdC5jICogcmF0aW8pICogMTAwMDApIC8gMTAwMDApICsgczsgLy93ZSB1c2UgdGhlIFwicFwiIHByb3BlcnR5IGZvciB0aGUgdGV4dCBpbmJldHdlZW4gKGxpa2UgYSBzdWZmaXgpLiBBbmQgaW4gdGhlIGNvbnRleHQgb2YgYSBjb21wbGV4IHN0cmluZywgdGhlIG1vZGlmaWVyIChtKSBpcyB0eXBpY2FsbHkganVzdCBNYXRoLnJvdW5kKCksIGxpa2UgZm9yIFJHQiBjb2xvcnMuXG5cbiAgICAgIHB0ID0gcHQuX25leHQ7XG4gICAgfVxuXG4gICAgcyArPSBkYXRhLmM7IC8vd2UgdXNlIHRoZSBcImNcIiBvZiB0aGUgUHJvcFR3ZWVuIHRvIHN0b3JlIHRoZSBmaW5hbCBjaHVuayBvZiBub24tbnVtZXJpYyB0ZXh0LlxuICB9XG5cbiAgZGF0YS5zZXQoZGF0YS50LCBkYXRhLnAsIHMsIGRhdGEpO1xufSxcbiAgICBfcmVuZGVyUHJvcFR3ZWVucyA9IGZ1bmN0aW9uIF9yZW5kZXJQcm9wVHdlZW5zKHJhdGlvLCBkYXRhKSB7XG4gIHZhciBwdCA9IGRhdGEuX3B0O1xuXG4gIHdoaWxlIChwdCkge1xuICAgIHB0LnIocmF0aW8sIHB0LmQpO1xuICAgIHB0ID0gcHQuX25leHQ7XG4gIH1cbn0sXG4gICAgX2FkZFBsdWdpbk1vZGlmaWVyID0gZnVuY3Rpb24gX2FkZFBsdWdpbk1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0LCBwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuICAgIHB0LnAgPT09IHByb3BlcnR5ICYmIHB0Lm1vZGlmaWVyKG1vZGlmaWVyLCB0d2VlbiwgdGFyZ2V0KTtcbiAgICBwdCA9IG5leHQ7XG4gIH1cbn0sXG4gICAgX2tpbGxQcm9wVHdlZW5zT2YgPSBmdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZihwcm9wZXJ0eSkge1xuICB2YXIgcHQgPSB0aGlzLl9wdCxcbiAgICAgIGhhc05vbkRlcGVuZGVudFJlbWFpbmluZyxcbiAgICAgIG5leHQ7XG5cbiAgd2hpbGUgKHB0KSB7XG4gICAgbmV4dCA9IHB0Ll9uZXh0O1xuXG4gICAgaWYgKHB0LnAgPT09IHByb3BlcnR5ICYmICFwdC5vcCB8fCBwdC5vcCA9PT0gcHJvcGVydHkpIHtcbiAgICAgIF9yZW1vdmVMaW5rZWRMaXN0SXRlbSh0aGlzLCBwdCwgXCJfcHRcIik7XG4gICAgfSBlbHNlIGlmICghcHQuZGVwKSB7XG4gICAgICBoYXNOb25EZXBlbmRlbnRSZW1haW5pbmcgPSAxO1xuICAgIH1cblxuICAgIHB0ID0gbmV4dDtcbiAgfVxuXG4gIHJldHVybiAhaGFzTm9uRGVwZW5kZW50UmVtYWluaW5nO1xufSxcbiAgICBfc2V0dGVyV2l0aE1vZGlmaWVyID0gZnVuY3Rpb24gX3NldHRlcldpdGhNb2RpZmllcih0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSwgZGF0YSkge1xuICBkYXRhLm1TZXQodGFyZ2V0LCBwcm9wZXJ0eSwgZGF0YS5tLmNhbGwoZGF0YS50d2VlbiwgdmFsdWUsIGRhdGEubXQpLCBkYXRhKTtcbn0sXG4gICAgX3NvcnRQcm9wVHdlZW5zQnlQcmlvcml0eSA9IGZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkocGFyZW50KSB7XG4gIHZhciBwdCA9IHBhcmVudC5fcHQsXG4gICAgICBuZXh0LFxuICAgICAgcHQyLFxuICAgICAgZmlyc3QsXG4gICAgICBsYXN0OyAvL3NvcnRzIHRoZSBQcm9wVHdlZW4gbGlua2VkIGxpc3QgaW4gb3JkZXIgb2YgcHJpb3JpdHkgYmVjYXVzZSBzb21lIHBsdWdpbnMgbmVlZCB0byBkbyB0aGVpciB3b3JrIGFmdGVyIEFMTCBvZiB0aGUgUHJvcFR3ZWVucyB3ZXJlIGNyZWF0ZWQgKGxpa2UgUm91bmRQcm9wc1BsdWdpbiBhbmQgTW9kaWZpZXJzUGx1Z2luKVxuXG4gIHdoaWxlIChwdCkge1xuICAgIG5leHQgPSBwdC5fbmV4dDtcbiAgICBwdDIgPSBmaXJzdDtcblxuICAgIHdoaWxlIChwdDIgJiYgcHQyLnByID4gcHQucHIpIHtcbiAgICAgIHB0MiA9IHB0Mi5fbmV4dDtcbiAgICB9XG5cbiAgICBpZiAocHQuX3ByZXYgPSBwdDIgPyBwdDIuX3ByZXYgOiBsYXN0KSB7XG4gICAgICBwdC5fcHJldi5fbmV4dCA9IHB0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXJzdCA9IHB0O1xuICAgIH1cblxuICAgIGlmIChwdC5fbmV4dCA9IHB0Mikge1xuICAgICAgcHQyLl9wcmV2ID0gcHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3QgPSBwdDtcbiAgICB9XG5cbiAgICBwdCA9IG5leHQ7XG4gIH1cblxuICBwYXJlbnQuX3B0ID0gZmlyc3Q7XG59OyAvL1Byb3BUd2VlbiBrZXk6IHQgPSB0YXJnZXQsIHAgPSBwcm9wLCByID0gcmVuZGVyZXIsIGQgPSBkYXRhLCBzID0gc3RhcnQsIGMgPSBjaGFuZ2UsIG9wID0gb3ZlcndyaXRlUHJvcGVydHkgKE9OTFkgcG9wdWxhdGVkIHdoZW4gaXQncyBkaWZmZXJlbnQgdGhhbiBwKSwgcHIgPSBwcmlvcml0eSwgX25leHQvX3ByZXYgZm9yIHRoZSBsaW5rZWQgbGlzdCBzaWJsaW5ncywgc2V0ID0gc2V0dGVyLCBtID0gbW9kaWZpZXIsIG1TZXQgPSBtb2RpZmllclNldHRlciAodGhlIG9yaWdpbmFsIHNldHRlciwgYmVmb3JlIGEgbW9kaWZpZXIgd2FzIGFkZGVkKVxuXG5cbmV4cG9ydCB2YXIgUHJvcFR3ZWVuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvcFR3ZWVuKG5leHQsIHRhcmdldCwgcHJvcCwgc3RhcnQsIGNoYW5nZSwgcmVuZGVyZXIsIGRhdGEsIHNldHRlciwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnQgPSB0YXJnZXQ7XG4gICAgdGhpcy5zID0gc3RhcnQ7XG4gICAgdGhpcy5jID0gY2hhbmdlO1xuICAgIHRoaXMucCA9IHByb3A7XG4gICAgdGhpcy5yID0gcmVuZGVyZXIgfHwgX3JlbmRlclBsYWluO1xuICAgIHRoaXMuZCA9IGRhdGEgfHwgdGhpcztcbiAgICB0aGlzLnNldCA9IHNldHRlciB8fCBfc2V0dGVyUGxhaW47XG4gICAgdGhpcy5wciA9IHByaW9yaXR5IHx8IDA7XG4gICAgdGhpcy5fbmV4dCA9IG5leHQ7XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5fcHJldiA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBQcm9wVHdlZW4ucHJvdG90eXBlO1xuXG4gIF9wcm90bzQubW9kaWZpZXIgPSBmdW5jdGlvbiBtb2RpZmllcihmdW5jLCB0d2VlbiwgdGFyZ2V0KSB7XG4gICAgdGhpcy5tU2V0ID0gdGhpcy5tU2V0IHx8IHRoaXMuc2V0OyAvL2luIGNhc2UgaXQgd2FzIGFscmVhZHkgc2V0IChhIFByb3BUd2VlbiBjYW4gb25seSBoYXZlIG9uZSBtb2RpZmllcilcblxuICAgIHRoaXMuc2V0ID0gX3NldHRlcldpdGhNb2RpZmllcjtcbiAgICB0aGlzLm0gPSBmdW5jO1xuICAgIHRoaXMubXQgPSB0YXJnZXQ7IC8vbW9kaWZpZXIgdGFyZ2V0XG5cbiAgICB0aGlzLnR3ZWVuID0gdHdlZW47XG4gIH07XG5cbiAgcmV0dXJuIFByb3BUd2Vlbjtcbn0oKTsgLy9Jbml0aWFsaXphdGlvbiB0YXNrc1xuXG5fZm9yRWFjaE5hbWUoX2NhbGxiYWNrTmFtZXMgKyBcInBhcmVudCxkdXJhdGlvbixlYXNlLGRlbGF5LG92ZXJ3cml0ZSxydW5CYWNrd2FyZHMsc3RhcnRBdCx5b3lvLGltbWVkaWF0ZVJlbmRlcixyZXBlYXQscmVwZWF0RGVsYXksZGF0YSxwYXVzZWQscmV2ZXJzZWQsbGF6eSxjYWxsYmFja1Njb3BlLHN0cmluZ0ZpbHRlcixpZCx5b3lvRWFzZSxzdGFnZ2VyLGluaGVyaXQscmVwZWF0UmVmcmVzaCxrZXlmcmFtZXMsYXV0b1JldmVydCxzY3JvbGxUcmlnZ2VyXCIsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBfcmVzZXJ2ZWRQcm9wc1tuYW1lXSA9IDE7XG59KTtcblxuX2dsb2JhbHMuVHdlZW5NYXggPSBfZ2xvYmFscy5Ud2VlbkxpdGUgPSBUd2Vlbjtcbl9nbG9iYWxzLlRpbWVsaW5lTGl0ZSA9IF9nbG9iYWxzLlRpbWVsaW5lTWF4ID0gVGltZWxpbmU7XG5fZ2xvYmFsVGltZWxpbmUgPSBuZXcgVGltZWxpbmUoe1xuICBzb3J0Q2hpbGRyZW46IGZhbHNlLFxuICBkZWZhdWx0czogX2RlZmF1bHRzLFxuICBhdXRvUmVtb3ZlQ2hpbGRyZW46IHRydWUsXG4gIGlkOiBcInJvb3RcIixcbiAgc21vb3RoQ2hpbGRUaW1pbmc6IHRydWVcbn0pO1xuX2NvbmZpZy5zdHJpbmdGaWx0ZXIgPSBfY29sb3JTdHJpbmdGaWx0ZXI7XG4vKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdTQVBcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxudmFyIF9nc2FwID0ge1xuICByZWdpc3RlclBsdWdpbjogZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHJldHVybiBfY3JlYXRlUGx1Z2luKGNvbmZpZyk7XG4gICAgfSk7XG4gIH0sXG4gIHRpbWVsaW5lOiBmdW5jdGlvbiB0aW1lbGluZSh2YXJzKSB7XG4gICAgcmV0dXJuIG5ldyBUaW1lbGluZSh2YXJzKTtcbiAgfSxcbiAgZ2V0VHdlZW5zT2Y6IGZ1bmN0aW9uIGdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldFR3ZWVuc09mKHRhcmdldHMsIG9ubHlBY3RpdmUpO1xuICB9LFxuICBnZXRQcm9wZXJ0eTogZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkge1xuICAgIF9pc1N0cmluZyh0YXJnZXQpICYmICh0YXJnZXQgPSB0b0FycmF5KHRhcmdldClbMF0pOyAvL2luIGNhc2Ugc2VsZWN0b3IgdGV4dCBvciBhbiBhcnJheSBpcyBwYXNzZWQgaW5cblxuICAgIHZhciBnZXR0ZXIgPSBfZ2V0Q2FjaGUodGFyZ2V0IHx8IHt9KS5nZXQsXG4gICAgICAgIGZvcm1hdCA9IHVuaXQgPyBfcGFzc1Rocm91Z2ggOiBfbnVtZXJpY0lmUG9zc2libGU7XG5cbiAgICB1bml0ID09PSBcIm5hdGl2ZVwiICYmICh1bml0ID0gXCJcIik7XG4gICAgcmV0dXJuICF0YXJnZXQgPyB0YXJnZXQgOiAhcHJvcGVydHkgPyBmdW5jdGlvbiAocHJvcGVydHksIHVuaXQsIHVuY2FjaGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICAgIH0gOiBmb3JtYXQoKF9wbHVnaW5zW3Byb3BlcnR5XSAmJiBfcGx1Z2luc1twcm9wZXJ0eV0uZ2V0IHx8IGdldHRlcikodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCwgdW5jYWNoZSkpO1xuICB9LFxuICBxdWlja1NldHRlcjogZnVuY3Rpb24gcXVpY2tTZXR0ZXIodGFyZ2V0LCBwcm9wZXJ0eSwgdW5pdCkge1xuICAgIHRhcmdldCA9IHRvQXJyYXkodGFyZ2V0KTtcblxuICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIHNldHRlcnMgPSB0YXJnZXQubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBnc2FwLnF1aWNrU2V0dGVyKHQsIHByb3BlcnR5LCB1bml0KTtcbiAgICAgIH0pLFxuICAgICAgICAgIGwgPSBzZXR0ZXJzLmxlbmd0aDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGkgPSBsO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBzZXR0ZXJzW2ldKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSB0YXJnZXRbMF0gfHwge307XG5cbiAgICB2YXIgUGx1Z2luID0gX3BsdWdpbnNbcHJvcGVydHldLFxuICAgICAgICBjYWNoZSA9IF9nZXRDYWNoZSh0YXJnZXQpLFxuICAgICAgICBwID0gY2FjaGUuaGFybmVzcyAmJiAoY2FjaGUuaGFybmVzcy5hbGlhc2VzIHx8IHt9KVtwcm9wZXJ0eV0gfHwgcHJvcGVydHksXG4gICAgICAgIC8vIGluIGNhc2UgaXQncyBhbiBhbGlhcywgbGlrZSBcInJvdGF0ZVwiIGZvciBcInJvdGF0aW9uXCIuXG4gICAgc2V0dGVyID0gUGx1Z2luID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgcCA9IG5ldyBQbHVnaW4oKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCA9IDA7XG4gICAgICBwLmluaXQodGFyZ2V0LCB1bml0ID8gdmFsdWUgKyB1bml0IDogdmFsdWUsIF9xdWlja1R3ZWVuLCAwLCBbdGFyZ2V0XSk7XG4gICAgICBwLnJlbmRlcigxLCBwKTtcbiAgICAgIF9xdWlja1R3ZWVuLl9wdCAmJiBfcmVuZGVyUHJvcFR3ZWVucygxLCBfcXVpY2tUd2Vlbik7XG4gICAgfSA6IGNhY2hlLnNldCh0YXJnZXQsIHApO1xuXG4gICAgcmV0dXJuIFBsdWdpbiA/IHNldHRlciA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHNldHRlcih0YXJnZXQsIHAsIHVuaXQgPyB2YWx1ZSArIHVuaXQgOiB2YWx1ZSwgY2FjaGUsIDEpO1xuICAgIH07XG4gIH0sXG4gIGlzVHdlZW5pbmc6IGZ1bmN0aW9uIGlzVHdlZW5pbmcodGFyZ2V0cykge1xuICAgIHJldHVybiBfZ2xvYmFsVGltZWxpbmUuZ2V0VHdlZW5zT2YodGFyZ2V0cywgdHJ1ZSkubGVuZ3RoID4gMDtcbiAgfSxcbiAgZGVmYXVsdHM6IGZ1bmN0aW9uIGRlZmF1bHRzKHZhbHVlKSB7XG4gICAgdmFsdWUgJiYgdmFsdWUuZWFzZSAmJiAodmFsdWUuZWFzZSA9IF9wYXJzZUVhc2UodmFsdWUuZWFzZSwgX2RlZmF1bHRzLmVhc2UpKTtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfZGVmYXVsdHMsIHZhbHVlIHx8IHt9KTtcbiAgfSxcbiAgY29uZmlnOiBmdW5jdGlvbiBjb25maWcodmFsdWUpIHtcbiAgICByZXR1cm4gX21lcmdlRGVlcChfY29uZmlnLCB2YWx1ZSB8fCB7fSk7XG4gIH0sXG4gIHJlZ2lzdGVyRWZmZWN0OiBmdW5jdGlvbiByZWdpc3RlckVmZmVjdChfcmVmMykge1xuICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgZWZmZWN0ID0gX3JlZjMuZWZmZWN0LFxuICAgICAgICBwbHVnaW5zID0gX3JlZjMucGx1Z2lucyxcbiAgICAgICAgZGVmYXVsdHMgPSBfcmVmMy5kZWZhdWx0cyxcbiAgICAgICAgZXh0ZW5kVGltZWxpbmUgPSBfcmVmMy5leHRlbmRUaW1lbGluZTtcbiAgICAocGx1Z2lucyB8fCBcIlwiKS5zcGxpdChcIixcIikuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luTmFtZSkge1xuICAgICAgcmV0dXJuIHBsdWdpbk5hbWUgJiYgIV9wbHVnaW5zW3BsdWdpbk5hbWVdICYmICFfZ2xvYmFsc1twbHVnaW5OYW1lXSAmJiBfd2FybihuYW1lICsgXCIgZWZmZWN0IHJlcXVpcmVzIFwiICsgcGx1Z2luTmFtZSArIFwiIHBsdWdpbi5cIik7XG4gICAgfSk7XG5cbiAgICBfZWZmZWN0c1tuYW1lXSA9IGZ1bmN0aW9uICh0YXJnZXRzLCB2YXJzLCB0bCkge1xuICAgICAgcmV0dXJuIGVmZmVjdCh0b0FycmF5KHRhcmdldHMpLCBfc2V0RGVmYXVsdHModmFycyB8fCB7fSwgZGVmYXVsdHMpLCB0bCk7XG4gICAgfTtcblxuICAgIGlmIChleHRlbmRUaW1lbGluZSkge1xuICAgICAgVGltZWxpbmUucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldHMsIHZhcnMsIHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChfZWZmZWN0c1tuYW1lXSh0YXJnZXRzLCBfaXNPYmplY3QodmFycykgPyB2YXJzIDogKHBvc2l0aW9uID0gdmFycykgJiYge30sIHRoaXMpLCBwb3NpdGlvbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSxcbiAgcmVnaXN0ZXJFYXNlOiBmdW5jdGlvbiByZWdpc3RlckVhc2UobmFtZSwgZWFzZSkge1xuICAgIF9lYXNlTWFwW25hbWVdID0gX3BhcnNlRWFzZShlYXNlKTtcbiAgfSxcbiAgcGFyc2VFYXNlOiBmdW5jdGlvbiBwYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IF9wYXJzZUVhc2UoZWFzZSwgZGVmYXVsdEVhc2UpIDogX2Vhc2VNYXA7XG4gIH0sXG4gIGdldEJ5SWQ6IGZ1bmN0aW9uIGdldEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gX2dsb2JhbFRpbWVsaW5lLmdldEJ5SWQoaWQpO1xuICB9LFxuICBleHBvcnRSb290OiBmdW5jdGlvbiBleHBvcnRSb290KHZhcnMsIGluY2x1ZGVEZWxheWVkQ2FsbHMpIHtcbiAgICBpZiAodmFycyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YXJzID0ge307XG4gICAgfVxuXG4gICAgdmFyIHRsID0gbmV3IFRpbWVsaW5lKHZhcnMpLFxuICAgICAgICBjaGlsZCxcbiAgICAgICAgbmV4dDtcbiAgICB0bC5zbW9vdGhDaGlsZFRpbWluZyA9IF9pc05vdEZhbHNlKHZhcnMuc21vb3RoQ2hpbGRUaW1pbmcpO1xuXG4gICAgX2dsb2JhbFRpbWVsaW5lLnJlbW92ZSh0bCk7XG5cbiAgICB0bC5fZHAgPSAwOyAvL290aGVyd2lzZSBpdCdsbCBnZXQgcmUtYWN0aXZhdGVkIHdoZW4gYWRkaW5nIGNoaWxkcmVuIGFuZCBiZSByZS1pbnRyb2R1Y2VkIGludG8gX2dsb2JhbFRpbWVsaW5lJ3MgbGlua2VkIGxpc3QgKHRoZW4gYWRkZWQgdG8gaXRzZWxmKS5cblxuICAgIHRsLl90aW1lID0gdGwuX3RUaW1lID0gX2dsb2JhbFRpbWVsaW5lLl90aW1lO1xuICAgIGNoaWxkID0gX2dsb2JhbFRpbWVsaW5lLl9maXJzdDtcblxuICAgIHdoaWxlIChjaGlsZCkge1xuICAgICAgbmV4dCA9IGNoaWxkLl9uZXh0O1xuXG4gICAgICBpZiAoaW5jbHVkZURlbGF5ZWRDYWxscyB8fCAhKCFjaGlsZC5fZHVyICYmIGNoaWxkIGluc3RhbmNlb2YgVHdlZW4gJiYgY2hpbGQudmFycy5vbkNvbXBsZXRlID09PSBjaGlsZC5fdGFyZ2V0c1swXSkpIHtcbiAgICAgICAgX2FkZFRvVGltZWxpbmUodGwsIGNoaWxkLCBjaGlsZC5fc3RhcnQgLSBjaGlsZC5fZGVsYXkpO1xuICAgICAgfVxuXG4gICAgICBjaGlsZCA9IG5leHQ7XG4gICAgfVxuXG4gICAgX2FkZFRvVGltZWxpbmUoX2dsb2JhbFRpbWVsaW5lLCB0bCwgMCk7XG5cbiAgICByZXR1cm4gdGw7XG4gIH0sXG4gIHV0aWxzOiB7XG4gICAgd3JhcDogd3JhcCxcbiAgICB3cmFwWW95bzogd3JhcFlveW8sXG4gICAgZGlzdHJpYnV0ZTogZGlzdHJpYnV0ZSxcbiAgICByYW5kb206IHJhbmRvbSxcbiAgICBzbmFwOiBzbmFwLFxuICAgIG5vcm1hbGl6ZTogbm9ybWFsaXplLFxuICAgIGdldFVuaXQ6IGdldFVuaXQsXG4gICAgY2xhbXA6IGNsYW1wLFxuICAgIHNwbGl0Q29sb3I6IHNwbGl0Q29sb3IsXG4gICAgdG9BcnJheTogdG9BcnJheSxcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgbWFwUmFuZ2U6IG1hcFJhbmdlLFxuICAgIHBpcGU6IHBpcGUsXG4gICAgdW5pdGl6ZTogdW5pdGl6ZSxcbiAgICBpbnRlcnBvbGF0ZTogaW50ZXJwb2xhdGUsXG4gICAgc2h1ZmZsZTogc2h1ZmZsZVxuICB9LFxuICBpbnN0YWxsOiBfaW5zdGFsbCxcbiAgZWZmZWN0czogX2VmZmVjdHMsXG4gIHRpY2tlcjogX3RpY2tlcixcbiAgdXBkYXRlUm9vdDogVGltZWxpbmUudXBkYXRlUm9vdCxcbiAgcGx1Z2luczogX3BsdWdpbnMsXG4gIGdsb2JhbFRpbWVsaW5lOiBfZ2xvYmFsVGltZWxpbmUsXG4gIGNvcmU6IHtcbiAgICBQcm9wVHdlZW46IFByb3BUd2VlbixcbiAgICBnbG9iYWxzOiBfYWRkR2xvYmFsLFxuICAgIFR3ZWVuOiBUd2VlbixcbiAgICBUaW1lbGluZTogVGltZWxpbmUsXG4gICAgQW5pbWF0aW9uOiBBbmltYXRpb24sXG4gICAgZ2V0Q2FjaGU6IF9nZXRDYWNoZSxcbiAgICBfcmVtb3ZlTGlua2VkTGlzdEl0ZW06IF9yZW1vdmVMaW5rZWRMaXN0SXRlbSxcbiAgICBzdXBwcmVzc092ZXJ3cml0ZXM6IGZ1bmN0aW9uIHN1cHByZXNzT3ZlcndyaXRlcyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF9zdXBwcmVzc092ZXJ3cml0ZXMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn07XG5cbl9mb3JFYWNoTmFtZShcInRvLGZyb20sZnJvbVRvLGRlbGF5ZWRDYWxsLHNldCxraWxsVHdlZW5zT2ZcIiwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIF9nc2FwW25hbWVdID0gVHdlZW5bbmFtZV07XG59KTtcblxuX3RpY2tlci5hZGQoVGltZWxpbmUudXBkYXRlUm9vdCk7XG5cbl9xdWlja1R3ZWVuID0gX2dzYXAudG8oe30sIHtcbiAgZHVyYXRpb246IDBcbn0pOyAvLyAtLS0tIEVYVFJBIFBMVUdJTlMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIF9nZXRQbHVnaW5Qcm9wVHdlZW4gPSBmdW5jdGlvbiBfZ2V0UGx1Z2luUHJvcFR3ZWVuKHBsdWdpbiwgcHJvcCkge1xuICB2YXIgcHQgPSBwbHVnaW4uX3B0O1xuXG4gIHdoaWxlIChwdCAmJiBwdC5wICE9PSBwcm9wICYmIHB0Lm9wICE9PSBwcm9wICYmIHB0LmZwICE9PSBwcm9wKSB7XG4gICAgcHQgPSBwdC5fbmV4dDtcbiAgfVxuXG4gIHJldHVybiBwdDtcbn0sXG4gICAgX2FkZE1vZGlmaWVycyA9IGZ1bmN0aW9uIF9hZGRNb2RpZmllcnModHdlZW4sIG1vZGlmaWVycykge1xuICB2YXIgdGFyZ2V0cyA9IHR3ZWVuLl90YXJnZXRzLFxuICAgICAgcCxcbiAgICAgIGksXG4gICAgICBwdDtcblxuICBmb3IgKHAgaW4gbW9kaWZpZXJzKSB7XG4gICAgaSA9IHRhcmdldHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcHQgPSB0d2Vlbi5fcHRMb29rdXBbaV1bcF07XG5cbiAgICAgIGlmIChwdCAmJiAocHQgPSBwdC5kKSkge1xuICAgICAgICBpZiAocHQuX3B0KSB7XG4gICAgICAgICAgLy8gaXMgYSBwbHVnaW5cbiAgICAgICAgICBwdCA9IF9nZXRQbHVnaW5Qcm9wVHdlZW4ocHQsIHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHQgJiYgcHQubW9kaWZpZXIgJiYgcHQubW9kaWZpZXIobW9kaWZpZXJzW3BdLCB0d2VlbiwgdGFyZ2V0c1tpXSwgcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxuICAgIF9idWlsZE1vZGlmaWVyUGx1Z2luID0gZnVuY3Rpb24gX2J1aWxkTW9kaWZpZXJQbHVnaW4obmFtZSwgbW9kaWZpZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHJhd1ZhcnM6IDEsXG4gICAgLy9kb24ndCBwcmUtcHJvY2VzcyBmdW5jdGlvbi1iYXNlZCB2YWx1ZXMgb3IgXCJyYW5kb20oKVwiIHN0cmluZ3MuXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhcnMsIHR3ZWVuKSB7XG4gICAgICB0d2Vlbi5fb25Jbml0ID0gZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgIHZhciB0ZW1wLCBwO1xuXG4gICAgICAgIGlmIChfaXNTdHJpbmcodmFycykpIHtcbiAgICAgICAgICB0ZW1wID0ge307XG5cbiAgICAgICAgICBfZm9yRWFjaE5hbWUodmFycywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wW25hbWVdID0gMTtcbiAgICAgICAgICB9KTsgLy9pZiB0aGUgdXNlciBwYXNzZXMgaW4gYSBjb21tYS1kZWxpbWl0ZWQgbGlzdCBvZiBwcm9wZXJ0eSBuYW1lcyB0byByb3VuZFByb3BzLCBsaWtlIFwieCx5XCIsIHdlIHJvdW5kIHRvIHdob2xlIG51bWJlcnMuXG5cblxuICAgICAgICAgIHZhcnMgPSB0ZW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGlmaWVyKSB7XG4gICAgICAgICAgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgZm9yIChwIGluIHZhcnMpIHtcbiAgICAgICAgICAgIHRlbXBbcF0gPSBtb2RpZmllcih2YXJzW3BdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXJzID0gdGVtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRNb2RpZmllcnModHdlZW4sIHZhcnMpO1xuICAgICAgfTtcbiAgICB9XG4gIH07XG59OyAvL3JlZ2lzdGVyIGNvcmUgcGx1Z2luc1xuXG5cbmV4cG9ydCB2YXIgZ3NhcCA9IF9nc2FwLnJlZ2lzdGVyUGx1Z2luKHtcbiAgbmFtZTogXCJhdHRyXCIsXG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQodGFyZ2V0LCB2YXJzLCB0d2VlbiwgaW5kZXgsIHRhcmdldHMpIHtcbiAgICB2YXIgcCwgcHQ7XG5cbiAgICBmb3IgKHAgaW4gdmFycykge1xuICAgICAgcHQgPSB0aGlzLmFkZCh0YXJnZXQsIFwic2V0QXR0cmlidXRlXCIsICh0YXJnZXQuZ2V0QXR0cmlidXRlKHApIHx8IDApICsgXCJcIiwgdmFyc1twXSwgaW5kZXgsIHRhcmdldHMsIDAsIDAsIHApO1xuICAgICAgcHQgJiYgKHB0Lm9wID0gcCk7XG5cbiAgICAgIHRoaXMuX3Byb3BzLnB1c2gocCk7XG4gICAgfVxuICB9XG59LCB7XG4gIG5hbWU6IFwiZW5kQXJyYXlcIixcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCh0YXJnZXQsIHZhbHVlKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmFkZCh0YXJnZXQsIGksIHRhcmdldFtpXSB8fCAwLCB2YWx1ZVtpXSk7XG4gICAgfVxuICB9XG59LCBfYnVpbGRNb2RpZmllclBsdWdpbihcInJvdW5kUHJvcHNcIiwgX3JvdW5kTW9kaWZpZXIpLCBfYnVpbGRNb2RpZmllclBsdWdpbihcIm1vZGlmaWVyc1wiKSwgX2J1aWxkTW9kaWZpZXJQbHVnaW4oXCJzbmFwXCIsIHNuYXApKSB8fCBfZ3NhcDsgLy90byBwcmV2ZW50IHRoZSBjb3JlIHBsdWdpbnMgZnJvbSBiZWluZyBkcm9wcGVkIHZpYSBhZ2dyZXNzaXZlIHRyZWUgc2hha2luZywgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlIHZhcmlhYmxlIGRlY2xhcmF0aW9uIGluIHRoaXMgd2F5LlxuXG5Ud2Vlbi52ZXJzaW9uID0gVGltZWxpbmUudmVyc2lvbiA9IGdzYXAudmVyc2lvbiA9IFwiMy44LjBcIjtcbl9jb3JlUmVhZHkgPSAxO1xuX3dpbmRvd0V4aXN0cygpICYmIF93YWtlKCk7XG52YXIgUG93ZXIwID0gX2Vhc2VNYXAuUG93ZXIwLFxuICAgIFBvd2VyMSA9IF9lYXNlTWFwLlBvd2VyMSxcbiAgICBQb3dlcjIgPSBfZWFzZU1hcC5Qb3dlcjIsXG4gICAgUG93ZXIzID0gX2Vhc2VNYXAuUG93ZXIzLFxuICAgIFBvd2VyNCA9IF9lYXNlTWFwLlBvd2VyNCxcbiAgICBMaW5lYXIgPSBfZWFzZU1hcC5MaW5lYXIsXG4gICAgUXVhZCA9IF9lYXNlTWFwLlF1YWQsXG4gICAgQ3ViaWMgPSBfZWFzZU1hcC5DdWJpYyxcbiAgICBRdWFydCA9IF9lYXNlTWFwLlF1YXJ0LFxuICAgIFF1aW50ID0gX2Vhc2VNYXAuUXVpbnQsXG4gICAgU3Ryb25nID0gX2Vhc2VNYXAuU3Ryb25nLFxuICAgIEVsYXN0aWMgPSBfZWFzZU1hcC5FbGFzdGljLFxuICAgIEJhY2sgPSBfZWFzZU1hcC5CYWNrLFxuICAgIFN0ZXBwZWRFYXNlID0gX2Vhc2VNYXAuU3RlcHBlZEVhc2UsXG4gICAgQm91bmNlID0gX2Vhc2VNYXAuQm91bmNlLFxuICAgIFNpbmUgPSBfZWFzZU1hcC5TaW5lLFxuICAgIEV4cG8gPSBfZWFzZU1hcC5FeHBvLFxuICAgIENpcmMgPSBfZWFzZU1hcC5DaXJjO1xuZXhwb3J0IHsgUG93ZXIwLCBQb3dlcjEsIFBvd2VyMiwgUG93ZXIzLCBQb3dlcjQsIExpbmVhciwgUXVhZCwgQ3ViaWMsIFF1YXJ0LCBRdWludCwgU3Ryb25nLCBFbGFzdGljLCBCYWNrLCBTdGVwcGVkRWFzZSwgQm91bmNlLCBTaW5lLCBFeHBvLCBDaXJjIH07XG5leHBvcnQgeyBUd2VlbiBhcyBUd2Vlbk1heCwgVHdlZW4gYXMgVHdlZW5MaXRlLCBUaW1lbGluZSBhcyBUaW1lbGluZU1heCwgVGltZWxpbmUgYXMgVGltZWxpbmVMaXRlLCBnc2FwIGFzIGRlZmF1bHQsIHdyYXAsIHdyYXBZb3lvLCBkaXN0cmlidXRlLCByYW5kb20sIHNuYXAsIG5vcm1hbGl6ZSwgZ2V0VW5pdCwgY2xhbXAsIHNwbGl0Q29sb3IsIHRvQXJyYXksIHNlbGVjdG9yLCBtYXBSYW5nZSwgcGlwZSwgdW5pdGl6ZSwgaW50ZXJwb2xhdGUsIHNodWZmbGUgfTsgLy9leHBvcnQgc29tZSBpbnRlcm5hbCBtZXRob2RzL29yb2plY3RzIGZvciB1c2UgaW4gQ1NTUGx1Z2luIHNvIHRoYXQgd2UgY2FuIGV4dGVybmFsaXplIHRoYXQgZmlsZSBhbmQgYWxsb3cgY3VzdG9tIGJ1aWxkcyB0aGF0IGV4Y2x1ZGUgaXQuXG5cbmV4cG9ydCB7IF9nZXRQcm9wZXJ0eSwgX251bUV4cCwgX251bVdpdGhVbml0RXhwLCBfaXNTdHJpbmcsIF9pc1VuZGVmaW5lZCwgX3JlbmRlckNvbXBsZXhTdHJpbmcsIF9yZWxFeHAsIF9zZXREZWZhdWx0cywgX3JlbW92ZUxpbmtlZExpc3RJdGVtLCBfZm9yRWFjaE5hbWUsIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHksIF9jb2xvclN0cmluZ0ZpbHRlciwgX3JlcGxhY2VSYW5kb20sIF9jaGVja1BsdWdpbiwgX3BsdWdpbnMsIF90aWNrZXIsIF9jb25maWcsIF9yb3VuZE1vZGlmaWVyLCBfcm91bmQsIF9taXNzaW5nUGx1Z2luLCBfZ2V0U2V0dGVyLCBfZ2V0Q2FjaGUsIF9jb2xvckV4cCB9OyIsImltcG9ydCB7IGdzYXAsIFBvd2VyMCwgUG93ZXIxLCBQb3dlcjIsIFBvd2VyMywgUG93ZXI0LCBMaW5lYXIsIFF1YWQsIEN1YmljLCBRdWFydCwgUXVpbnQsIFN0cm9uZywgRWxhc3RpYywgQmFjaywgU3RlcHBlZEVhc2UsIEJvdW5jZSwgU2luZSwgRXhwbywgQ2lyYywgVHdlZW5MaXRlLCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4IH0gZnJvbSBcIi4vZ3NhcC1jb3JlLmpzXCI7XG5pbXBvcnQgeyBDU1NQbHVnaW4gfSBmcm9tIFwiLi9DU1NQbHVnaW4uanNcIjtcbnZhciBnc2FwV2l0aENTUyA9IGdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUGx1Z2luKSB8fCBnc2FwLFxuICAgIC8vIHRvIHByb3RlY3QgZnJvbSB0cmVlIHNoYWtpbmdcblR3ZWVuTWF4V2l0aENTUyA9IGdzYXBXaXRoQ1NTLmNvcmUuVHdlZW47XG5leHBvcnQgeyBnc2FwV2l0aENTUyBhcyBnc2FwLCBnc2FwV2l0aENTUyBhcyBkZWZhdWx0LCBDU1NQbHVnaW4sIFR3ZWVuTWF4V2l0aENTUyBhcyBUd2Vlbk1heCwgVHdlZW5MaXRlLCBUaW1lbGluZU1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjAsIFBvd2VyMSwgUG93ZXIyLCBQb3dlcjMsIFBvd2VyNCwgTGluZWFyLCBRdWFkLCBDdWJpYywgUXVhcnQsIFF1aW50LCBTdHJvbmcsIEVsYXN0aWMsIEJhY2ssIFN0ZXBwZWRFYXNlLCBCb3VuY2UsIFNpbmUsIEV4cG8sIENpcmMgfTsiLCJpbXBvcnQgeyBnc2FwIH0gZnJvbSAnZ3NhcCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FuY2hvdmllcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xpZ2h0Ym94JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY3Vyc29yJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZHJhZyc7XHJcblxyXG5jb25zb2xlLmxvZygnYnVuZGxlJyk7IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG4gICAgLy9uYXZpZ2F0aW9uIGZ1bmN0aW9uYWxpdHlcclxuICAgICQoJy5uYXZfb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubmF2X3dyYXAnKS5jc3MoJ3JpZ2h0JywgJzAnKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcubmF2X2Nsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5uYXZfd3JhcCcpLmNzcygncmlnaHQnLCAnLTEwMCUnKTtcclxuICAgICAgICAkKCcubmF2X29wZW4nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy90aHJpdmUgaW1hZ2UgYmxvY2sgd29yZCBjaGFuZ2Ugb24gcmVzaXplL21vYmlsZVxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY3KSB7XHJcbiAgICAgICAgJChcIi50aHJpdmVfaW1hZ2VzX2ludHJvX3JpZ2h0IC5ib2xkXCIpLnRleHQoJ1RoZSBpbWFnZSBiZWxvdyBtZWFucy4uLicpO1xyXG4gICAgfVxyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2Nykge1xyXG4gICAgICAgICAgICAkKFwiLnRocml2ZV9pbWFnZXNfaW50cm9fcmlnaHQgLmJvbGRcIikudGV4dCgnVGhlIGltYWdlIGJlbG93IG1lYW5zLi4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLnRocml2ZV9pbWFnZXNfaW50cm9fcmlnaHQgLmJvbGRcIikudGV4dCgnVGhlIGltYWdlIG9uIHRoZSBsZWZ0IG1lYW5zLi4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy93b3JrIHBhZ2UgbHNhYiBpbWFnZSBzd2FwXHJcbiAgICAvKmlmICgkKFwiLmxzYWJfc2xpZGVcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHZhciBpbnRlcnZhbDtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgdGltZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZSA9ICQoJy5hY3RpdmVfbHNhYicpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSAoJCgnLmFjdGl2ZV9sc2FiJykubmV4dCgpLmxlbmd0aCA+IDApID8gJCgnLmFjdGl2ZV9sc2FiJykubmV4dCgpIDogJCgnLmxzYWJfc2xpZGU6Zmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlX2xzYWInKTtcclxuICAgICAgICAgICAgICAgIG5leHQuYWRkQ2xhc3MoJ2FjdGl2ZV9sc2FiJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGltZXIoKTtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICB9Ki9cclxuXHJcbiAgICAvL2lmIHZpZGVvIGlzIHVua25vd25cclxuICAgICQoJ3ZpZGVvIHNvdXJjZVtzcmM9XCJcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ub3RlX3ZpZGVvJykuYWRkQ2xhc3MoJ3ZpZF9oaWRlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJCgnLm5vdGVfdmlkZW9faW1hZ2UnKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSA9PSAnbm9uZScpIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5ub3RlX3ZpZGVvJykuYWRkQ2xhc3MoJ3ZpZF9oaWRlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIHRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICAkKCcubm90ZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCQoJy5ub3RlX3ZpZGVvJywgdGhpcykuaGFzQ2xhc3MoXCJ2aWRfaGlkZVwiKSkge1xyXG4gICAgICAgICAgICAkKCcubm90ZV91cHBlcicsIHRoaXMpLmNzcygnZGlzcGxheScsICdibG9jaycpOyAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucHJldl9wcm9qZWN0IGEsIC5uZXh0X3Byb2plY3QgYScpLmFkZENsYXNzKCdob3ZlcnN3YXAnKTtcclxuXHJcbiAgICAkKCcuaW5uZXIgLml0ZW06bnRoLWNoaWxkKDEpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxufSk7XHJcblxyXG52YXIgYWxsV3JhcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlcicpO1xyXG5cclxuZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxXcmFwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhbGxXcmFwW2ldLmNsYXNzTGlzdC5hZGQoJ215U2xpZGVyXycgKyBpKTtcclxuXHJcbiAgICB2YXIgc2xpZGVyID0gbmV3IFNsaWRlcignLm15U2xpZGVyXycgKyBpKTtcclxuICAgIHNsaWRlci5hZGRMaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuXHJcbnZhciBhbGxXcmFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyJyk7XHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGFsbFdyYXAubGVuZ3RoOyBpKyspIHtcclxuICAgIGFsbFdyYXBbaV0uY2xhc3NMaXN0LmFkZCgnbXlTbGlkZXJfJyArIGkpO1xyXG5cclxuICAgIHZhciBzbGlkZXIgPSBuZXcgU2xpZGVyKCcubXlTbGlkZXJfJyArIGkpO1xyXG4gICAgc2xpZGVyLmFkZExpc3RlbmVycygpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU2xpZGVyKG5ld2NsYXNzKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG5ld2NsYXNzICsgJyBidXR0b24nKTtcclxuICAgIHRoaXMuaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG5ld2NsYXNzICsgJyAuaXRlbScpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gMDtcclxuICAgIHRoaXMuaXNTbGlkaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc2xpZGUpKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2xpZGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2xpZGluZykge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHRoaXMuYWN0aXZlSXRlbTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuYnV0dG9uc1sxXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUl0ZW0gPSAwIDogdGhpcy5hY3RpdmVJdGVtKys7XHJcbiAgICAgICAgICAgICAgICAvL2FjdGl2ZSBzbGlkZSBvdXQgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tjdXJyZW50SXRlbV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxlZnQnKTtcclxuICAgICAgICAgICAgICAgIC8vbmV4dCBzbGlkZSBpbiBsZWZ0XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbV0uY2xhc3NMaXN0LmFkZCgnaXRlbS1uZXh0JywgJ2l0ZW0tbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tjdXJyZW50SXRlbV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxlZnQnLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmFjdGl2ZUl0ZW1dLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0tbmV4dCcsICdpdGVtLWxlZnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL3NldCBuZXcgYWN0aXZlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuYWN0aXZlSXRlbV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NsaWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPT09IDAgPyB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgOiB0aGlzLmFjdGl2ZUl0ZW0tLTtcclxuICAgICAgICAgICAgICAgIC8vYWN0aXZlIHNsaWRlIG91dCByaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tjdXJyZW50SXRlbV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXJpZ2h0Jyk7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXYgc2xpZGUgaW4gcmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtXS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByZXYnLCAnaXRlbS1yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgY2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tjdXJyZW50SXRlbV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXJpZ2h0JywgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtXS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLXByZXYnLCAnaXRlbS1yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2V0IG5ldyBhY3RpdmUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5hY3RpdmVJdGVtXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2xpZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKmNvbnN0IGN1cnNvckJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLWJlZVwiKTtcclxuY29uc3QgY3Vyc29yRXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItZXllXCIpO1xyXG5sZXQgc2NhbGUgPSAxO1xyXG5cclxuZnVuY3Rpb24gbW91c2Vtb3ZlSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSh7XHJcbiAgICAgICAgZGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICB5OiBlLmNsaWVudFksXHJcbiAgICAgICAgICAgIGVhc2U6IFwicG93ZXIyLm91dFwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob3ZlcnN3YXBcIikpIHtcclxuICAgICAgICB0bC50byhjdXJzb3JCZWUsIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH0pLnRvKFxyXG4gICAgICAgICAgICBjdXJzb3JFeWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCItPTAuNVwiXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaW5lLWFuaW1hdGlvblwiKSkge1xyXG4gICAgICAgICAgICBzY2FsZSA9IDQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2NhbGUgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGwudG8oY3Vyc29yQmVlLCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHNjYWxlOiBzY2FsZVxyXG4gICAgICAgIH0pLnRvKFxyXG4gICAgICAgICAgICBjdXJzb3JFeWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCItPTAuNVwiXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VsZWF2ZUhhbmRsZXIoKSB7XHJcbiAgICBnc2FwLnRvKGN1cnNvckJlZSwge1xyXG4gICAgICAgIG9wYWNpdHk6IDBcclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdXNlbW92ZUhhbmRsZXIpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBtb3VzZWxlYXZlSGFuZGxlcik7XHJcbiovIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG4gICAgLy9HREJEIDEtNVxyXG4gICAgLy9saWdodGJveDFcclxuICAgIHZhciBib3ggPSAkKFwiLmxpZ2h0Ym94MVwiKTtcclxuXHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kcygpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm1heFg7XHJcbiAgICAgICAgdmFyIG1heFkgPSB0aGlzLm1heFk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYKSBUd2VlbkxpdGUuc2V0KGJveCwgeyB4OiBtYXhYIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZKSBUd2VlbkxpdGUuc2V0KGJveCwgeyB5OiBtYXhZIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gyXHJcbiAgICB2YXIgYm94MiA9ICQoXCIubGlnaHRib3gyXCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94Miwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDJcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMlxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMigpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyID0gdGhpcy5tYXhYMjtcclxuICAgICAgICB2YXIgbWF4WTIgPSB0aGlzLm1heFkyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDIpIFR3ZWVuTGl0ZS5zZXQoYm94MiwgeyB4OiBtYXhYMiB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTIpIFR3ZWVuTGl0ZS5zZXQoYm94MiwgeyB5OiBtYXhZMiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94M1xyXG4gICAgdmFyIGJveDMgPSAkKFwiLmxpZ2h0Ym94M1wiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDMsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAzXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMyxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczNcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczMoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMyA9IHRoaXMubWF4WDM7XHJcbiAgICAgICAgdmFyIG1heFkzID0gdGhpcy5tYXhZMztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgzKSBUd2VlbkxpdGUuc2V0KGJveDMsIHsgeDogbWF4WDMgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkzKSBUd2VlbkxpdGUuc2V0KGJveDMsIHsgeTogbWF4WTMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDRcclxuICAgIHZhciBib3g0ID0gJChcIi5saWdodGJveDRcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3g0LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwNFwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczQsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHM0XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHM0KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDQgPSB0aGlzLm1heFg0O1xyXG4gICAgICAgIHZhciBtYXhZNCA9IHRoaXMubWF4WTQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYNCkgVHdlZW5MaXRlLnNldChib3g0LCB7IHg6IG1heFg0IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZNCkgVHdlZW5MaXRlLnNldChib3g0LCB7IHk6IG1heFk0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3g1XHJcbiAgICB2YXIgYm94NSA9ICQoXCIubGlnaHRib3g1XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94NSwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDVcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHM1LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzNVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzNSgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFg1ID0gdGhpcy5tYXhYNTtcclxuICAgICAgICB2YXIgbWF4WTUgPSB0aGlzLm1heFk1O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDUpIFR3ZWVuTGl0ZS5zZXQoYm94NSwgeyB4OiBtYXhYNSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTUpIFR3ZWVuTGl0ZS5zZXQoYm94NSwgeyB5OiBtYXhZNSB9KTtcclxuICAgIH1cclxuICAgIC8vU1RSIDYtMTBcclxuICAgIC8vbGlnaHRib3g2XHJcbiAgICB2YXIgYm94NiA9ICQoXCIubGlnaHRib3g2XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94Niwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDZcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHM2LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzNlxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzNigpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFg2ID0gdGhpcy5tYXhYNjtcclxuICAgICAgICB2YXIgbWF4WTYgPSB0aGlzLm1heFk2O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDYpIFR3ZWVuTGl0ZS5zZXQoYm94NiwgeyB4OiBtYXhYNiB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTYpIFR3ZWVuTGl0ZS5zZXQoYm94NiwgeyB5OiBtYXhZNiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94N1xyXG4gICAgdmFyIGJveDcgPSAkKFwiLmxpZ2h0Ym94N1wiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDcsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXA3XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzNyxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczdcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczcoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYNyA9IHRoaXMubWF4WDc7XHJcbiAgICAgICAgdmFyIG1heFk3ID0gdGhpcy5tYXhZNztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFg3KSBUd2VlbkxpdGUuc2V0KGJveDcsIHsgeDogbWF4WDcgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFk3KSBUd2VlbkxpdGUuc2V0KGJveDcsIHsgeTogbWF4WTcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDhcclxuICAgIHZhciBib3g4ID0gJChcIi5saWdodGJveDhcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3g4LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwOFwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczgsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHM4XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHM4KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDggPSB0aGlzLm1heFg4O1xyXG4gICAgICAgIHZhciBtYXhZOCA9IHRoaXMubWF4WTg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYOCkgVHdlZW5MaXRlLnNldChib3g4LCB7IHg6IG1heFg4IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZOCkgVHdlZW5MaXRlLnNldChib3g4LCB7IHk6IG1heFk4IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3g5XHJcbiAgICB2YXIgYm94OSA9ICQoXCIubGlnaHRib3g5XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94OSwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDlcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHM5LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzOVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzOSgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFg5ID0gdGhpcy5tYXhYOTtcclxuICAgICAgICB2YXIgbWF4WTkgPSB0aGlzLm1heFk5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDkpIFR3ZWVuTGl0ZS5zZXQoYm94OSwgeyB4OiBtYXhYOSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTkpIFR3ZWVuTGl0ZS5zZXQoYm94OSwgeyB5OiBtYXhZOSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MTBcclxuICAgIHZhciBib3gxMCA9ICQoXCIubGlnaHRib3gxMFwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDEwLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTBcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxMCxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczEwXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxMCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxMCA9IHRoaXMubWF4WDEwO1xyXG4gICAgICAgIHZhciBtYXhZMTAgPSB0aGlzLm1heFkxMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxMCkgVHdlZW5MaXRlLnNldChib3gxMCwgeyB4OiBtYXhYMTAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxMCkgVHdlZW5MaXRlLnNldChib3gxMCwgeyB5OiBtYXhZMTAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Sb21hbiBDYW5kbGUgMTEtMTNcclxuICAgIC8vbGlnaHRib3gxMVxyXG4gICAgdmFyIGJveDExID0gJChcIi5saWdodGJveDExXCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTEsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxMVwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczExLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMTFcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczExKCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDExID0gdGhpcy5tYXhYMTE7XHJcbiAgICAgICAgdmFyIG1heFkxMSA9IHRoaXMubWF4WTExO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDExKSBUd2VlbkxpdGUuc2V0KGJveDExLCB7IHg6IG1heFgxMSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTExKSBUd2VlbkxpdGUuc2V0KGJveDExLCB7IHk6IG1heFkxMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MTJcclxuICAgIHZhciBib3gxMiA9ICQoXCIubGlnaHRib3gxMlwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDEyLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTJcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxMixcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczEyXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxMigpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxMiA9IHRoaXMubWF4WDEyO1xyXG4gICAgICAgIHZhciBtYXhZMTIgPSB0aGlzLm1heFkxMjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxMikgVHdlZW5MaXRlLnNldChib3gxMiwgeyB4OiBtYXhYMTIgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxMikgVHdlZW5MaXRlLnNldChib3gxMiwgeyB5OiBtYXhZMTIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDEzXHJcbiAgICB2YXIgYm94MTMgPSAkKFwiLmxpZ2h0Ym94MTNcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxMywge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDEzXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTMsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxM1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTMoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTMgPSB0aGlzLm1heFgxMztcclxuICAgICAgICB2YXIgbWF4WTEzID0gdGhpcy5tYXhZMTM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTMpIFR3ZWVuTGl0ZS5zZXQoYm94MTMsIHsgeDogbWF4WDEzIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTMpIFR3ZWVuTGl0ZS5zZXQoYm94MTMsIHsgeTogbWF4WTEzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVGhyaXZlIDE0LTE1XHJcbiAgICAvL2xpZ2h0Ym94MTRcclxuICAgIHZhciBib3gxNCA9ICQoXCIubGlnaHRib3gxNFwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDE0LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTRcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxNCxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczE0XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxNCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxNCA9IHRoaXMubWF4WDE0O1xyXG4gICAgICAgIHZhciBtYXhZMTQgPSB0aGlzLm1heFkxNDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxNCkgVHdlZW5MaXRlLnNldChib3gxNCwgeyB4OiBtYXhYMTQgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxNCkgVHdlZW5MaXRlLnNldChib3gxNCwgeyB5OiBtYXhZMTQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDE1XHJcbiAgICB2YXIgYm94MTUgPSAkKFwiLmxpZ2h0Ym94MTVcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxNSwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDE1XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTUsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxNVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTUoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTUgPSB0aGlzLm1heFgxNTtcclxuICAgICAgICB2YXIgbWF4WTE1ID0gdGhpcy5tYXhZMTU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTUpIFR3ZWVuTGl0ZS5zZXQoYm94MTUsIHsgeDogbWF4WDE1IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTUpIFR3ZWVuTGl0ZS5zZXQoYm94MTUsIHsgeTogbWF4WTE1IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2hvdytUZWxsIDE2LTE4XHJcbiAgICAvL2xpZ2h0Ym94MTZcclxuICAgIHZhciBib3gxNiA9ICQoXCIubGlnaHRib3gxNlwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDE2LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMTZcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMxNixcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczE2XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMxNigpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgxNiA9IHRoaXMubWF4WDE2O1xyXG4gICAgICAgIHZhciBtYXhZMTYgPSB0aGlzLm1heFkxNjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgxNikgVHdlZW5MaXRlLnNldChib3gxNiwgeyB4OiBtYXhYMTYgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkxNikgVHdlZW5MaXRlLnNldChib3gxNiwgeyB5OiBtYXhZMTYgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDE3XHJcbiAgICB2YXIgYm94MTcgPSAkKFwiLmxpZ2h0Ym94MTdcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gxNywge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDE3XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMTcsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMxN1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMTcoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMTcgPSB0aGlzLm1heFgxNztcclxuICAgICAgICB2YXIgbWF4WTE3ID0gdGhpcy5tYXhZMTc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMTcpIFR3ZWVuTGl0ZS5zZXQoYm94MTcsIHsgeDogbWF4WDE3IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMTcpIFR3ZWVuTGl0ZS5zZXQoYm94MTcsIHsgeTogbWF4WTE3IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbGlnaHRib3gxOFxyXG4gICAgdmFyIGJveDE4ID0gJChcIi5saWdodGJveDE4XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTgsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxOFwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczE4LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMThcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczE4KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDE4ID0gdGhpcy5tYXhYMTg7XHJcbiAgICAgICAgdmFyIG1heFkxOCA9IHRoaXMubWF4WTE4O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDE4KSBUd2VlbkxpdGUuc2V0KGJveDE4LCB7IHg6IG1heFgxOCB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTE4KSBUd2VlbkxpdGUuc2V0KGJveDE4LCB7IHk6IG1heFkxOCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NvcHBlciBDb3lvdGUgMTktMjFcclxuICAgIC8vbGlnaHRib3gxOVxyXG4gICAgdmFyIGJveDE5ID0gJChcIi5saWdodGJveDE5XCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MTksIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAxOVwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczE5LFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMTlcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczE5KCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDE5ID0gdGhpcy5tYXhYMTk7XHJcbiAgICAgICAgdmFyIG1heFkxOSA9IHRoaXMubWF4WTE5O1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDE5KSBUd2VlbkxpdGUuc2V0KGJveDE5LCB7IHg6IG1heFgxOSB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTE5KSBUd2VlbkxpdGUuc2V0KGJveDE5LCB7IHk6IG1heFkxOSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MjBcclxuICAgIHZhciBib3gyMCA9ICQoXCIubGlnaHRib3gyMFwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDIwLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMjBcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyMCxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczIwXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMyMCgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyMCA9IHRoaXMubWF4WDIwO1xyXG4gICAgICAgIHZhciBtYXhZMjAgPSB0aGlzLm1heFkyMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyMCkgVHdlZW5MaXRlLnNldChib3gyMCwgeyB4OiBtYXhYMjAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyMCkgVHdlZW5MaXRlLnNldChib3gyMCwgeyB5OiBtYXhZMjAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDIxXHJcbiAgICB2YXIgYm94MjEgPSAkKFwiLmxpZ2h0Ym94MjFcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyMSwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDIxXCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjEsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyMVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjEoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjEgPSB0aGlzLm1heFgyMTtcclxuICAgICAgICB2YXIgbWF4WTIxID0gdGhpcy5tYXhZMjE7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjEpIFR3ZWVuTGl0ZS5zZXQoYm94MjEsIHsgeDogbWF4WDIxIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjEpIFR3ZWVuTGl0ZS5zZXQoYm94MjEsIHsgeTogbWF4WTIxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vVmlyaWRpYW4gMjItMjRcclxuICAgIC8vbGlnaHRib3gyMlxyXG4gICAgdmFyIGJveDIyID0gJChcIi5saWdodGJveDIyXCIpO1xyXG5cclxuICAgIERyYWdnYWJsZS5jcmVhdGUoYm94MjIsIHtcclxuICAgICAgICBib3VuZHM6IFwiI2xpZ2h0Ym94X3dyYXAyMlwiLFxyXG4gICAgICAgIG9uUHJlc3M6IG9mZnNldEJvdW5kczIyLFxyXG4gICAgICAgIG9uRHJhZzogb2Zmc2V0Qm91bmRzMjJcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9mZnNldEJvdW5kczIyKCkge1xyXG5cclxuICAgICAgICAvLyBTaW11bGF0ZSBvZmZzZXRcclxuICAgICAgICB2YXIgbWF4WDIyID0gdGhpcy5tYXhYMjI7XHJcbiAgICAgICAgdmFyIG1heFkyMiA9IHRoaXMubWF4WTIyO1xyXG5cclxuICAgICAgICBpZiAodGhpcy54ID4gbWF4WDIyKSBUd2VlbkxpdGUuc2V0KGJveDIyLCB7IHg6IG1heFgyMiB9KTtcclxuICAgICAgICBpZiAodGhpcy55ID4gbWF4WTIyKSBUd2VlbkxpdGUuc2V0KGJveDIyLCB7IHk6IG1heFkyMiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xpZ2h0Ym94MjNcclxuICAgIHZhciBib3gyMyA9ICQoXCIubGlnaHRib3gyM1wiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDIzLCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMjNcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyMyxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczIzXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMyMygpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyMyA9IHRoaXMubWF4WDIzO1xyXG4gICAgICAgIHZhciBtYXhZMjMgPSB0aGlzLm1heFkyMztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyMykgVHdlZW5MaXRlLnNldChib3gyMywgeyB4OiBtYXhYMjMgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyMykgVHdlZW5MaXRlLnNldChib3gyMywgeyB5OiBtYXhZMjMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDI0XHJcbiAgICB2YXIgYm94MjQgPSAkKFwiLmxpZ2h0Ym94MjRcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyNCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDI0XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjQsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyNFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjQoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjQgPSB0aGlzLm1heFgyNDtcclxuICAgICAgICB2YXIgbWF4WTI0ID0gdGhpcy5tYXhZMjQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjQpIFR3ZWVuTGl0ZS5zZXQoYm94MjQsIHsgeDogbWF4WDI0IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjQpIFR3ZWVuTGl0ZS5zZXQoYm94MjQsIHsgeTogbWF4WTI0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUGFyYWNodXRlIDI1LTI2XHJcbiAgICAvL2xpZ2h0Ym94MjVcclxuICAgIHZhciBib3gyNSA9ICQoXCIubGlnaHRib3gyNVwiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDI1LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMjVcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyNSxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczI1XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMyNSgpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyNSA9IHRoaXMubWF4WDI1O1xyXG4gICAgICAgIHZhciBtYXhZMjUgPSB0aGlzLm1heFkyNTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyNSkgVHdlZW5MaXRlLnNldChib3gyNSwgeyB4OiBtYXhYMjUgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyNSkgVHdlZW5MaXRlLnNldChib3gyNSwgeyB5OiBtYXhZMjUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDI2XHJcbiAgICB2YXIgYm94MjYgPSAkKFwiLmxpZ2h0Ym94MjZcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyNiwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDI2XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjYsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyNlxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjYoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjYgPSB0aGlzLm1heFgyNjtcclxuICAgICAgICB2YXIgbWF4WTI2ID0gdGhpcy5tYXhZMjY7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjYpIFR3ZWVuTGl0ZS5zZXQoYm94MjYsIHsgeDogbWF4WDI2IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjYpIFR3ZWVuTGl0ZS5zZXQoYm94MjYsIHsgeTogbWF4WTI2IH0pO1xyXG4gICAgfVxyXG4gICAgLy9IdW1hbmx5IDI3LTI4XHJcbiAgICAvL2xpZ2h0Ym94MjdcclxuICAgIHZhciBib3gyNyA9ICQoXCIubGlnaHRib3gyN1wiKTtcclxuXHJcbiAgICBEcmFnZ2FibGUuY3JlYXRlKGJveDI3LCB7XHJcbiAgICAgICAgYm91bmRzOiBcIiNsaWdodGJveF93cmFwMjdcIixcclxuICAgICAgICBvblByZXNzOiBvZmZzZXRCb3VuZHMyNyxcclxuICAgICAgICBvbkRyYWc6IG9mZnNldEJvdW5kczI3XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvZmZzZXRCb3VuZHMyNygpIHtcclxuXHJcbiAgICAgICAgLy8gU2ltdWxhdGUgb2Zmc2V0XHJcbiAgICAgICAgdmFyIG1heFgyNyA9IHRoaXMubWF4WDI3O1xyXG4gICAgICAgIHZhciBtYXhZMjcgPSB0aGlzLm1heFkyNztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG1heFgyNykgVHdlZW5MaXRlLnNldChib3gyNywgeyB4OiBtYXhYMjcgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG1heFkyNykgVHdlZW5MaXRlLnNldChib3gyNywgeyB5OiBtYXhZMjcgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9saWdodGJveDI4XHJcbiAgICB2YXIgYm94MjggPSAkKFwiLmxpZ2h0Ym94MjhcIik7XHJcblxyXG4gICAgRHJhZ2dhYmxlLmNyZWF0ZShib3gyOCwge1xyXG4gICAgICAgIGJvdW5kczogXCIjbGlnaHRib3hfd3JhcDI4XCIsXHJcbiAgICAgICAgb25QcmVzczogb2Zmc2V0Qm91bmRzMjgsXHJcbiAgICAgICAgb25EcmFnOiBvZmZzZXRCb3VuZHMyOFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb2Zmc2V0Qm91bmRzMjgoKSB7XHJcblxyXG4gICAgICAgIC8vIFNpbXVsYXRlIG9mZnNldFxyXG4gICAgICAgIHZhciBtYXhYMjggPSB0aGlzLm1heFgyODtcclxuICAgICAgICB2YXIgbWF4WTI4ID0gdGhpcy5tYXhZMjg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnggPiBtYXhYMjgpIFR3ZWVuTGl0ZS5zZXQoYm94MjgsIHsgeDogbWF4WDI4IH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnkgPiBtYXhZMjgpIFR3ZWVuTGl0ZS5zZXQoYm94MjgsIHsgeTogbWF4WTI4IH0pO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG5cclxuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIC8vbGlnaHRib3ggY2xvc2VcclxuICAgICQoJy5saWdodGJveF9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3hfd3JhcCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICctMScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEwMCUnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxyXG4gICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZSgwLCAwKScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X2Nsb3NlJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdpbml0aWFsJyk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X29wZW4nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggZXhhbXBsZSBvcGVuXHJcbiAgICAkKCcubGlnaHRib3hfZXhhbXBsZV9vcGVuIC5idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94X2V4YW1wbGUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hfY2xvc2UnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBleGFtcGxlIGNsb3NlXHJcbiAgICAkKCcubGlnaHRib3hfZXhhbXBsZSAuYnRuLCAuZXhhbXBsZV9jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3hfZXhhbXBsZScpLmNzcyh7XHJcbiAgICAgICAgICAgICdvcGFjaXR5JzogJzAnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICctMScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaW5pdGlhbCcpO1xyXG4gICAgICAgICQoJy5saWdodGJveF9jbG9zZScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0dvb2QgRGF5cyBCYWQgRGF5cyAxLTVcclxuICAgIC8vbGlnaHRib3ggb3BlbiAxXHJcbiAgICAkKCcubGlnaHRib3hvcGVuMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICc5NTBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDInKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDInKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTInKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gM1xyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDMnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDMnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTMnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiA0XHJcbiAgICAkKCcubGlnaHRib3hvcGVuNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwNCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94NCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICc3NTVweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2U0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gNVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDUnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTUnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vU21lbGwgVGhlIFJvc2VzIDYtMTBcclxuICAgIC8vbGlnaHRib3ggb3BlbiA2XHJcbiAgICAkKCcubGlnaHRib3hvcGVuNicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwNicpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94NicpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlNicpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDdcclxuICAgICQoJy5saWdodGJveG9wZW43Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXA3JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3g3JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzk1MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTcnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiA4XHJcbiAgICAkKCcubGlnaHRib3hvcGVuOCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwOCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94OCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlOCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9saWdodGJveCBvcGVuIDlcclxuICAgICQoJy5saWdodGJveG9wZW45Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXA5JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3g5JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzc1NXB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTknKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAxMFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjEwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxMCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTAnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTEwJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1JvbWFuIENhbmRsZSAxMS0xM1xyXG4gICAgLy9saWdodGJveCBvcGVuIDExXHJcbiAgICAkKCcubGlnaHRib3hvcGVuMTEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDExJykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gxMScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTEnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAxMlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjEyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxMicpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTInKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnNzU1cHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTInKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAxM1xyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjEzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxMycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTMnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTEzJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1Rocml2ZSAxNC0xNVxyXG4gICAgLy9saWdodGJveCBvcGVuIDE0XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMTQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDE0JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gxNCcpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTQnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAxNVxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjE1Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxNScpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTUnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTE1JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1Nob3crVGVsbCAxNi0xOFxyXG4gICAgLy9saWdodGJveCBvcGVuIDE2XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMTYnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDE2JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gxNicpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTYnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAxN1xyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjE3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAxNycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MTcnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTE3JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMThcclxuICAgICQoJy5saWdodGJveG9wZW4xOCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMTgnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDE4JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UxOCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9Db3BwZXJ5IENveW90ZSAxOS0yMVxyXG4gICAgLy9saWdodGJveCBvcGVuIDE5XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMTknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDE5JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gxOScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMTknKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAyMFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjIwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyMCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjAnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTAwMHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTIwJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjFcclxuICAgICQoJy5saWdodGJveG9wZW4yMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjEnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDIxJykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyMScpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9WaXJpZGlhbiAyMi0yNFxyXG4gICAgLy9saWdodGJveCBvcGVuIDIyXHJcbiAgICAkKCcubGlnaHRib3hvcGVuMjInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDIyJykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gyMicpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMjInKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAyM1xyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjIzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyMycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjMnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnOTUwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMjMnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAyNFxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjI0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyNCcpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjQnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTI0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL1BhcmFjaHV0ZSAyNS0yNlxyXG4gICAgLy9saWdodGJveCBvcGVuIDI1XHJcbiAgICAkKCcubGlnaHRib3hvcGVuMjUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94d3JhcDI1JykuY3NzKHtcclxuICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTk5OTk5JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3gyNScpLmNzcyh7XHJcbiAgICAgICAgICAgICd3aWR0aCc6ICcxMzQwcHgnLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogJzEyMCUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveGNsb3NlMjUnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICQodGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vbGlnaHRib3ggb3BlbiAyNlxyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjI2Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyNicpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjYnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTI2JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0h1bWFubHkgMjctMjhcclxuICAgIC8vbGlnaHRib3ggb3BlbiAyN1xyXG4gICAgJCgnLmxpZ2h0Ym94b3BlbjI3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5saWdodGJveHdyYXAyNycpLmNzcyh7XHJcbiAgICAgICAgICAgICdwb3NpdGlvbic6ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICd6LWluZGV4JzogJzk5OTk5OScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94MjcnKS5jc3Moe1xyXG4gICAgICAgICAgICAnd2lkdGgnOiAnMTM0MHB4JyxcclxuICAgICAgICAgICAgJ2hlaWdodCc6ICcxMjAlJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcubGlnaHRib3hjbG9zZTI3JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgICAgICAkKCdib2R5JykuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcclxuICAgICAgICAkKHRoaXMpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2xpZ2h0Ym94IG9wZW4gMjhcclxuICAgICQoJy5saWdodGJveG9wZW4yOCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGlnaHRib3h3cmFwMjgnKS5jc3Moe1xyXG4gICAgICAgICAgICAncG9zaXRpb24nOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICAnei1pbmRleCc6ICc5OTk5OTknLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5saWdodGJveDI4JykuY3NzKHtcclxuICAgICAgICAgICAgJ3dpZHRoJzogJzEzNDBweCcsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiAnMTIwJScsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmxpZ2h0Ym94Y2xvc2UyOCcpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
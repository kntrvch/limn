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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tsc/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/tsc/app.ts":
/*!************************!*\
  !*** ./src/tsc/app.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
var CanvasEngine_1 = __webpack_require__(/*! ./utils/CanvasEngine */ "./src/tsc/utils/CanvasEngine.ts");
var DrawingModel_1 = __webpack_require__(/*! ./utils/DrawingModel */ "./src/tsc/utils/DrawingModel.ts");
var canvas = window.document.getElementById("drawingCanvas");
var model = new DrawingModel_1.DrawingModel();
var engine = new CanvasEngine_1.CanvasEngine(canvas, model);
var colorPicker = window.document.getElementById("colorPicker");


/***/ }),

/***/ "./src/tsc/utils/CanvasEngine.ts":
/*!***************************************!*\
  !*** ./src/tsc/utils/CanvasEngine.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Shapes_1 = __webpack_require__(/*! ./Shapes */ "./src/tsc/utils/Shapes.ts");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/tsc/utils/Enums.ts");
var CanvasEngine = /** @class */ (function () {
    function CanvasEngine(_canvas, _model) {
        var _this = this;
        this._canvas = _canvas;
        this._model = _model;
        this.action = Enums_1.CanvasEngineAction.None;
        this._dragOffsetX = 0;
        this._dragOffsetY = 0;
        this.context = this._canvas.getContext("2d");
        //this._canvas.addEventListener('selectstart',
        //    (e) => { e.preventDefault(); return false; },
        //    false);
        this._canvas.addEventListener('mousedown', function (e) { return _this._mousedown(e); }, true);
        this._canvas.addEventListener('mousemove', function (e) { return _this._mousemove(e); }, true);
        this._canvas.addEventListener('mouseup', function (e) { return _this._mouseup(e); }, true);
    }
    CanvasEngine.prototype.clear = function () {
        this.context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    };
    CanvasEngine.prototype.invalidate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.draw(); });
    };
    CanvasEngine.prototype.draw = function () {
        var shapes = this._model.shapes;
        this.clear();
        if (shapes) {
            for (var i = 0; i < shapes.length; i++) {
                this.context.save();
                shapes[i].draw(this.context);
                this.context.restore();
            }
        }
    };
    CanvasEngine.prototype._getMousePosition = function (canvas, e) {
        var rect = canvas.getBoundingClientRect(), root = window.document.documentElement;
        var mouseX = e.clientX - rect.left - root.scrollLeft;
        var mouseY = e.clientY - rect.top - root.scrollTop;
        return new Shapes_1.Point(mouseX, mouseY);
    };
    CanvasEngine.prototype._setShapeAsSelected = function (shape) {
        shape.isSelected = true;
        this._model.selection = shape;
        this.invalidate();
    };
    CanvasEngine.prototype._clearEngineState = function () {
        this.action = Enums_1.CanvasEngineAction.None;
        this._model.selection = null;
        this.invalidate();
    };
    CanvasEngine.prototype._bringToFront = function (index) {
        var shape = this._model.shapes[index];
        if (shape) {
            this._model.shapes.splice(index, 1);
            this._model.shapes.push(shape);
            this.invalidate();
        }
    };
    CanvasEngine.prototype._mousedown = function (e) {
        var mouse = this._getMousePosition(this._canvas, e);
        var i, shape;
        if (this._model.shapes) {
            for (i = this._model.shapes.length - 1; i >= 0; i--) {
                this._model.shapes[i].isSelected = false;
            }
        }
        if (this._model.getDrawingTool() != Enums_1.DrawingToolType.Select) {
            shape = this._model.getNewShape(mouse);
            this._model.addShape(shape);
            this.action = Enums_1.CanvasEngineAction.Resize;
            this._setShapeAsSelected(shape);
            return;
        }
        else if (this._model.shapes) {
            for (i = this._model.shapes.length - 1; i >= 0; i--) {
                this.action = this._model.shapes[i].getClickLocationAction(mouse, this.context);
                switch (this.action) {
                    case Enums_1.CanvasEngineAction.Resize:
                    case Enums_1.CanvasEngineAction.Move:
                        var moveOffsetPoint = this._model.shapes[i].getMoveOffset(mouse);
                        this._dragOffsetX = moveOffsetPoint.x;
                        this._dragOffsetY = moveOffsetPoint.y;
                        this._setShapeAsSelected(this._model.shapes[i]);
                        this._bringToFront(i);
                        return;
                    default:
                        break;
                }
            }
        }
        this._clearEngineState();
    };
    CanvasEngine.prototype._mousemove = function (e) {
        var mouse = this._getMousePosition(this._canvas, e);
        ;
        switch (this.action) {
            case Enums_1.CanvasEngineAction.Move:
                var newLocationX = mouse.x - this._dragOffsetX;
                var newLocationY = mouse.y - this._dragOffsetY;
                var newLocation = new Shapes_1.Point(newLocationX, newLocationY);
                this._model.selection.move(newLocation);
                this.invalidate();
                break;
            case Enums_1.CanvasEngineAction.Resize:
                this._model.selection.resizeToLocation(mouse);
                this.invalidate();
                break;
            case Enums_1.CanvasEngineAction.None:
            default:
                var mousePointer = "auto";
                if (this._model.shapes) {
                    for (var i = this._model.shapes.length - 1; i >= 0; i--) {
                        if (this._model.shapes[i].inResizeZone(mouse) ||
                            this._model.shapes[i].contains(mouse, this.context)) {
                            mousePointer = this._model.shapes[i].getCursorType(mouse);
                            break;
                        }
                    }
                }
                window.document.body.style.cursor = mousePointer;
                break;
        }
    };
    CanvasEngine.prototype._mouseup = function (e) {
        var selection = this._model.selection;
        if (selection) {
            selection.isSelected = false;
        }
        this._clearEngineState();
    };
    return CanvasEngine;
}());
exports.CanvasEngine = CanvasEngine;


/***/ }),

/***/ "./src/tsc/utils/DrawingModel.ts":
/*!***************************************!*\
  !*** ./src/tsc/utils/DrawingModel.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Shapes_1 = __webpack_require__(/*! ./Shapes */ "./src/tsc/utils/Shapes.ts");
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/tsc/utils/Enums.ts");
var DrawingModel = /** @class */ (function () {
    function DrawingModel() {
        this.selection = null;
        this.shapes = [];
        this._drawingTool = Enums_1.DrawingToolType.Select;
        this._drawingColor = "#000000";
        this._addEventListeners();
    }
    DrawingModel.prototype._addEventListeners = function () {
        var _this = this;
        var selectButton = window.document.getElementById("selectButton");
        selectButton.addEventListener("click", function (e) {
            _this._drawingTool = Enums_1.DrawingToolType.Select;
        }, true);
        var rectButton = window.document.getElementById("rectangleButton");
        rectButton.addEventListener("click", function (e) {
            _this._drawingTool = Enums_1.DrawingToolType.Rectangle;
        }, true);
        var rectButton = window.document.getElementById("lineButton");
        rectButton.addEventListener("click", function (e) {
            _this._drawingTool = Enums_1.DrawingToolType.Line;
        }, true);
        var colorPicker = window.document.getElementById("colorPicker");
        colorPicker.addEventListener("change", function (e) {
            _this._drawingColor = e.currentTarget.value;
        }, true);
    };
    DrawingModel.prototype.addShape = function (shape) {
        this.shapes.push(shape);
    };
    DrawingModel.prototype.getNewShape = function (location) {
        var shape = null;
        var cursor = "auto";
        switch (this._drawingTool) {
            case Enums_1.DrawingToolType.Rectangle:
                shape = new Shapes_1.DrawingRectangle();
                shape.move(location);
                shape.shape.height = 3;
                shape.shape.width = 3;
                shape.fillStyle = this._drawingColor;
                cursor = "se-resize";
                break;
            case Enums_1.DrawingToolType.Line:
                shape = new Shapes_1.DrawingLine();
                shape.shape.p1 = location;
                shape.shape.p2 = new Shapes_1.Point(location.x + 1, location.y + 1);
                shape.strokeStyle = this._drawingColor;
                cursor = "e-resize";
                break;
        }
        window.document.body.style.cursor = cursor;
        return shape;
    };
    DrawingModel.prototype.getDrawingTool = function () {
        return this._drawingTool;
    };
    return DrawingModel;
}());
exports.DrawingModel = DrawingModel;


/***/ }),

/***/ "./src/tsc/utils/Enums.ts":
/*!********************************!*\
  !*** ./src/tsc/utils/Enums.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DrawingToolType;
(function (DrawingToolType) {
    DrawingToolType[DrawingToolType["Select"] = 0] = "Select";
    DrawingToolType[DrawingToolType["Rectangle"] = 1] = "Rectangle";
    DrawingToolType[DrawingToolType["Circle"] = 2] = "Circle";
    DrawingToolType[DrawingToolType["Line"] = 3] = "Line";
    DrawingToolType[DrawingToolType["Freehand"] = 4] = "Freehand";
})(DrawingToolType = exports.DrawingToolType || (exports.DrawingToolType = {}));
var CanvasEngineAction;
(function (CanvasEngineAction) {
    CanvasEngineAction[CanvasEngineAction["None"] = 0] = "None";
    CanvasEngineAction[CanvasEngineAction["Move"] = 1] = "Move";
    CanvasEngineAction[CanvasEngineAction["Resize"] = 2] = "Resize";
})(CanvasEngineAction = exports.CanvasEngineAction || (exports.CanvasEngineAction = {}));


/***/ }),

/***/ "./src/tsc/utils/Shapes.ts":
/*!*********************************!*\
  !*** ./src/tsc/utils/Shapes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Enums_1 = __webpack_require__(/*! ./Enums */ "./src/tsc/utils/Enums.ts");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.resize = function (height, width) {
        this.height = height;
        this.width = width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.resize = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
var Line = /** @class */ (function () {
    function Line(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Line.prototype.length = function () {
        var a2 = Math.pow(this.p2.x - this.p1.x, 2);
        var b2 = Math.pow(this.p2.y - this.p1.y, 2);
        return Math.sqrt(a2 + b2);
    };
    return Line;
}());
exports.Line = Line;
var Freehand = /** @class */ (function () {
    function Freehand() {
        this.points = [];
    }
    Freehand.prototype.addPoint = function (point) {
        this.points.push(point);
    };
    return Freehand;
}());
exports.Freehand = Freehand;
var DrawingShapeBase = /** @class */ (function () {
    function DrawingShapeBase() {
        this.shape = null;
        this.location = new Point(0, 0);
        this.isSelected = false;
        this.selectionZoneWidth = 4;
        this.opacity = 1;
    }
    DrawingShapeBase.prototype.inResizeZone = function (mouse) {
        throw ("Method not implemented");
    };
    DrawingShapeBase.prototype.move = function (to) {
        this.location = to;
    };
    DrawingShapeBase.prototype.resizeToLocation = function (to) {
        throw ("Method not implemented");
    };
    DrawingShapeBase.prototype.contains = function (mousePoint, ctx) {
        throw ("Method not implemented");
    };
    DrawingShapeBase.prototype.draw = function (ctx) {
        throw ("Method not implemented");
    };
    DrawingShapeBase.prototype.getMoveOffset = function (mousePos) {
        return new Point(0, 0);
    };
    DrawingShapeBase.prototype.getCursorType = function (mousePoint) {
        throw ("Method not implemented");
    };
    DrawingShapeBase.prototype.getClickLocationAction = function (mousePoint, ctx) {
        if (this.inResizeZone(mousePoint)) {
            return Enums_1.CanvasEngineAction.Resize;
        }
        else if (this.contains(mousePoint, ctx)) {
            return Enums_1.CanvasEngineAction.Move;
        }
        return Enums_1.CanvasEngineAction.None;
    };
    return DrawingShapeBase;
}());
exports.DrawingShapeBase = DrawingShapeBase;
var DrawingRectangle = /** @class */ (function (_super) {
    __extends(DrawingRectangle, _super);
    function DrawingRectangle() {
        var _this = _super.call(this) || this;
        _this.shape = new Rectangle(0, 0);
        _this.fillStyle = "#FF0000";
        return _this;
    }
    DrawingRectangle.prototype.inResizeZone = function (point) {
        return ((point.x >= this.location.x + this.shape.width - this.selectionZoneWidth &&
            point.x <= this.location.x + this.shape.width + this.selectionZoneWidth) &&
            (point.y >= this.location.y + this.shape.height - this.selectionZoneWidth &&
                point.y <= this.location.y + this.shape.height + this.selectionZoneWidth));
    };
    DrawingRectangle.prototype.resizeToLocation = function (to) {
        var cursor = window.document.body.style.cursor;
        if (cursor == "se-resize") {
            this.shape.width = to.x - this.location.x;
            this.shape.height = to.y - this.location.y;
        }
    };
    DrawingRectangle.prototype.draw = function (ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = "#000000";
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 3;
        ctx.fillRect(this.location.x, this.location.y, this.shape.width, this.shape.height);
        ctx.strokeRect(this.location.x, this.location.y, this.shape.width, this.shape.height);
    };
    DrawingRectangle.prototype.contains = function (mousePoint, context) {
        if (this.shape.height < 0) {
            this.location.y = this.location.y + this.shape.height;
            this.shape.height = this.shape.height * -1;
        }
        if (this.shape.width < 0) {
            this.location.x = this.location.x + this.shape.width;
            this.shape.width = this.shape.width * -1;
        }
        return (this.location.x <= mousePoint.x) &&
            (this.location.x + this.shape.width >= mousePoint.x) &&
            (this.location.y <= mousePoint.y) &&
            (this.location.y + this.shape.height >= mousePoint.y);
    };
    DrawingRectangle.prototype.getMoveOffset = function (mousePosition) {
        return new Point(mousePosition.x - this.location.x, mousePosition.y - this.location.y);
    };
    DrawingRectangle.prototype.getCursorType = function (mousePoint) {
        if (this.inResizeZone(mousePoint))
            return "se-resize";
        else
            return "move";
    };
    return DrawingRectangle;
}(DrawingShapeBase));
exports.DrawingRectangle = DrawingRectangle;
var DrawingLine = /** @class */ (function (_super) {
    __extends(DrawingLine, _super);
    function DrawingLine() {
        var _this = _super.call(this) || this;
        _this.shape = new Line(new Point(0, 0), new Point(1, 1));
        _this.lineWidth = 5;
        _this.strokeStyle = "#000000";
        _this.lastMousePoint = null;
        return _this;
    }
    DrawingLine.prototype.draw = function (ctx) {
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.moveTo(this.shape.p1.x, this.shape.p1.y);
        ctx.lineTo(this.shape.p2.x, this.shape.p2.y);
        ctx.stroke();
        ctx.closePath();
    };
    DrawingLine.prototype.contains = function (mousePoint, ctx) {
        if (this.shape.p1.x > this.shape.p2.x) {
            var tempX = this.shape.p1.x;
            var tempY = this.shape.p1.y;
            this.shape.p1.x = this.shape.p2.x;
            this.shape.p1.y = this.shape.p2.y;
            this.shape.p2.x = tempX;
            this.shape.p2.y = tempY;
        }
        var withinError = false;
        var m = (this.shape.p1.y - this.shape.p2.y) / (this.shape.p1.x - this.shape.p2.x);
        for (var i = mousePoint.x - this.lineWidth / 2; i <= mousePoint.x + this.lineWidth / 2; i += .5) {
            for (var j = mousePoint.y - this.lineWidth / 2; j <= mousePoint.y + this.lineWidth / 2; j += .5) {
                withinError = Math.abs((this.shape.p1.y - j) / (this.shape.p1.x - i) - m) < .05 && i >= this.shape.p1.x && i <= this.shape.p2.x;
                if (withinError) {
                    break;
                }
            }
            if (withinError) {
                break;
            }
        }
        return withinError;
    };
    DrawingLine.prototype.inResizeZone = function (mousePoint) {
        this.lastMousePoint = new Point(mousePoint.x, mousePoint.y);
        return ((mousePoint.x >= this.shape.p1.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p1.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p1.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p1.y + this.selectionZoneWidth)) ||
            ((mousePoint.x >= this.shape.p2.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p2.x + this.selectionZoneWidth) &&
                (mousePoint.y >= this.shape.p2.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p2.y + this.selectionZoneWidth));
    };
    DrawingLine.prototype.getCursorType = function (mousePoint) {
        if ((mousePoint.x >= this.shape.p1.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p1.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p1.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p1.y + this.selectionZoneWidth)) {
            return "w-resize";
        }
        else if ((mousePoint.x >= this.shape.p2.x - this.selectionZoneWidth && mousePoint.x <= this.shape.p2.x + this.selectionZoneWidth) &&
            (mousePoint.y >= this.shape.p2.y - this.selectionZoneWidth && mousePoint.y <= this.shape.p2.y + this.selectionZoneWidth)) {
            return "e-resize";
        }
        else {
            return "auto";
        }
    };
    DrawingLine.prototype.resizeToLocation = function (mousePoint) {
        var cursor = window.document.body.style.cursor;
        if (cursor == "w-resize") {
            this.shape.p1.x = mousePoint.x;
            this.shape.p1.y = mousePoint.y;
        }
        else if (cursor == "e-resize") {
            this.shape.p2.x = mousePoint.x;
            this.shape.p2.y = mousePoint.y;
        }
    };
    DrawingLine.prototype.move = function (newPoint) {
        if (this.lastMousePoint != null) {
            var dx = newPoint.x - this.lastMousePoint.x;
            var dy = newPoint.y - this.lastMousePoint.y;
            this.shape.p1.x += dx;
            this.shape.p2.x += dx;
            this.shape.p1.y += dy;
            this.shape.p2.y += dy;
            this.lastMousePoint.x = newPoint.x;
            this.lastMousePoint.y = newPoint.y;
        }
        else {
            this.lastMousePoint = new Point(newPoint.x, newPoint.y);
        }
    };
    return DrawingLine;
}(DrawingShapeBase));
exports.DrawingLine = DrawingLine;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
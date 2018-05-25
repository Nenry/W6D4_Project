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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor($els){\n    this.$els = $els;\n  }\n  html(string){\n    if(string == null){\n      return this.$els[0].innerHTML;\n    } else {\n      this.$els.forEach( (el) => el.innerHTML = string );\n      return this.$els[0].innerHTML;\n    }\n  }\n  empty() {\n      this.html(\"\");\n  }\n\n  append(arg) {\n    this.$els.forEach((htmlel) => {\n      htmlel.innerHTML += arg;\n    });\n    return this.$els[0].innerHTML;\n  }\n\n  attr(key, value){\n    if(value == null){\n      return this.$els[0].getAttribute(key);\n    } else {\n        this.$els.forEach((html_el) =>{\n          html_el.setAttribute(key, value);\n        });\n        return this.$els[0].getAttribute(key);\n      }\n  }\n\n  addClass(classname) {\n    this.$els.forEach((html_el) => {\n      html_el.className = classname;\n    });\n    return this.$els[0].className;\n  }\n\n  removeClass() {\n    this.$els.forEach((html_el) => {\n      html_el.className = \"\";\n    });\n    return this.$els[0].className;\n  }\n\n  children(){\n    let children = [];\n\n    function child(arr){\n      if (arr.length === 1) {\n        children.push(arr[0]);\n      }\n    }\n  }\n\n}\n\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./lib/dom_node_collection.js\");\n\n\nfunction $l(selector){\n  let elements;\n  if(typeof selector === \"string\"){\n    elements_arr = document.querySelectorAll(selector);\n    arr = Array.from(elements_arr);\n    elements = new DOMNodeCollection(arr);\n  } else if(selector instanceof HTMLElement){\n    let html = [selector];\n    elements = new DOMNodeCollection(html);\n  }\n  return elements;\n}\n\nwindow.$l = $l;\n\nlet $a = $l(\".test\");\n\n\nwindow.$a = $a;\n// $a = new DOMNodeCollection($div.test)\n//\n// $a.$els\n\n// html_element.setAttribute(\"class\", \"democlass\");\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });
"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  background-color: rgb(218, 213, 213);\r\n}\r\n\r\n/* General styling for all elements */\r\n.todo-head,\r\n.input-div,\r\n.single-task,\r\n.clear-completed {\r\n  height: 2rem;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #fff;\r\n}\r\n\r\n/* General styling for the container */\r\n#todo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n/* 'todo-head' styles */\r\n.todo-head {\r\n  flex-direction: row;\r\n  padding: 0.5rem;\r\n  width: 50%;\r\n  margin-top: 5rem;\r\n}\r\n\r\n/* 'todo-head' p element */\r\n.todo-head p {\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n/* 'todo-head' i element */\r\n.todo-head i {\r\n  margin-left: auto;\r\n}\r\n\r\n/* 'input-div' styles */\r\n.input-div {\r\n  padding: 0.5rem;\r\n  width: 50%;\r\n  height: 2rem;\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.input-div input {\r\n  flex-grow: 1;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\ninput::placeholder {\r\n  font-size: 1rem;\r\n  font-style: italic;\r\n}\r\n\r\n/* Styling for the todo list */\r\n#list {\r\n  list-style: none;\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 50%;\r\n  position: relative;\r\n  left: -1.2rem;\r\n}\r\n\r\n.single-task {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 0.2rem;\r\n  width: 100%;\r\n  font-size: 1rem;\r\n  height: 2.6rem;\r\n  padding-inline: 8px;\r\n}\r\n\r\n.single-task p {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.single-task .edit-input {\r\n  font-size: 1.1rem;\r\n  height: 2rem;\r\n  border: none;\r\n}\r\n\r\n.single-task input[type=\"checkbox\"] {\r\n  margin-right: 20px;\r\n  align-self: flex-start;\r\n  margin-top: 0.7rem;\r\n}\r\n\r\n.single-task .dot-icon,\r\n.delete-icon {\r\n  margin-left: auto;\r\n  align-self: flex-end;\r\n  height: 0.5rem;\r\n  position: relative;\r\n  top: -1rem;\r\n}\r\n\r\n/* 'clear-completed' styles */\r\n#clear-completed {\r\n  padding: 0.5rem;\r\n  margin-top: 0.2rem;\r\n  font-size: 1.1rem;\r\n  color: gray;\r\n  background-color: rgb(240, 240, 240);\r\n  width: 50%;\r\n  text-align: center;\r\n  height: 2rem;\r\n  padding-top: 1rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskDB */ \"./src/modules/taskDB.js\");\n/* harmony import */ var _modules_addremove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addremove */ \"./src/modules/addremove.js\");\n\n\n\n\nconst listDiv = document.getElementById('list');\nconst clearBtn = document.getElementById('clear-completed');\nconst inputField = document.getElementById('newtask');\n\n// Add event listener for the 'keydown' event on the input field\ninputField.addEventListener('keydown', (event) => {\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.addNewTask)(inputField, event, listDiv);\n});\n\n// Add event listener for the 'click' event on the clearBtn\nclearBtn.addEventListener('click', () => {\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTasks)(listDiv); // Call the clearCompletedTasks function\n});\n\n// Add event listener for the 'click' event\n// on the listDiv (for editing task description or deleting)\nlistDiv.addEventListener('click', (event) => {\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.handleTaskClick)(event, listDiv); // Call the handleTaskClick function to handle task clicks\n});\n\n// Load data from local storage when the page loads\nwindow.addEventListener('DOMContentLoaded', () => {\n  const data = JSON.parse(localStorage.getItem('todoTasks'));\n  if (data) {\n    _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length = 0;\n    data.forEach((task) => {\n      _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(task);\n    });\n  }\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.buildTask)(listDiv);\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addremove.js":
/*!**********************************!*\
  !*** ./src/modules/addremove.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   buildTask: () => (/* binding */ buildTask),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),\n/* harmony export */   handleTaskClick: () => (/* binding */ handleTaskClick),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),\n/* harmony export */   toggleEditMode: () => (/* binding */ toggleEditMode),\n/* harmony export */   toggleViewMode: () => (/* binding */ toggleViewMode),\n/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* harmony import */ var _taskDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDB */ \"./src/modules/taskDB.js\");\n\n\nconst saveToLocalStorage = () => {\n  const LOCAL_STORAGE_KEY = 'todoTasks';\n  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n};\n\nconst addTask = (detail, idx, status, listDiv) => {\n  const task = {\n    description: detail,\n    completed: status,\n    index: idx,\n  };\n\n  const singleTask = document.createElement('li');\n  singleTask.className = 'single-task';\n  singleTask.id = `${task.description}-${task.index}`;\n\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.id = `${task.index}-checkbox`;\n  checkbox.name = 'checkbox';\n  checkbox.className = 'check-box';\n  if (status) {\n    checkbox.checked = true;\n  }\n  const taskDescription = document.createElement('p');\n  taskDescription.innerHTML = detail;\n\n  singleTask.appendChild(checkbox);\n  singleTask.appendChild(taskDescription);\n\n  const threeDotIcon = document.createElement('i');\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\n  threeDotIcon.classList.add(`${task.index}-threedot`);\n  singleTask.appendChild(threeDotIcon);\n  listDiv.appendChild(singleTask);\n};\n\nconst addNewTask = (inputField, event, listDiv) => {\n  if (event.key === 'Enter' && inputField.value.trim() !== '') {\n    // Intentionally left blank\n  } else {\n    console.log('event.key check');\n    return;\n  }\n\n  // --------------------//\n  const detail = inputField.value.trim();\n  const status = false;\n  const idx = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length + 1;\n  const task = {\n    description: detail,\n    completed: status,\n    index: idx,\n  };\n\n  const singleTask = document.createElement('li');\n  singleTask.className = 'single-task';\n  singleTask.id = `${task.description}-${task.index}`;\n\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.id = `${task.index}-checkbox`;\n  checkbox.name = 'checkbox';\n  checkbox.className = 'check-box';\n  if (status) {\n    checkbox.checked = true;\n  }\n  const taskDescription = document.createElement('p');\n  taskDescription.innerText = task.description;\n\n  singleTask.appendChild(checkbox);\n  singleTask.appendChild(taskDescription);\n\n  const threeDotIcon = document.createElement('i');\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\n  threeDotIcon.classList.add(`${task.index}-threedot`);\n  singleTask.appendChild(threeDotIcon);\n  listDiv.appendChild(singleTask);\n\n  // --------------------//\n  const newTask = {\n    description: detail,\n    completed: false,\n    index: idx,\n  };\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(newTask);\n  inputField.value = '';\n  saveToLocalStorage();\n};\n\nconst updateTaskStatus = (index) => {\n  const status = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].completed;\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].completed = !status;\n  saveToLocalStorage();\n};\n\n// Function to build the tasks on the screen\nconst buildTask = (listDiv) => {\n  listDiv.innerHTML = ''; // Clear existing tasks before building\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task) => {\n    addTask(task.description, task.index, task.completed, listDiv);\n  });\n  // Get checkboxes after building the tasks\n  const checkboxes = document.querySelectorAll('.check-box');\n  // Add event listener for the 'change' event on the checkboxes\n  checkboxes.forEach((checkbox) => {\n    checkbox.addEventListener('change', () => {\n      const index = Number(checkbox.id.split('-')[0]);\n      updateTaskStatus(index);\n    });\n    saveToLocalStorage();\n  });\n  saveToLocalStorage();\n};\n\nconst deleteTask = (indexes, listDiv) => {\n  // Sort indexes in descending order\n  indexes.sort((a, b) => b - a);\n\n  indexes.forEach((index) => {\n    _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(index, 1);\n  });\n  // Update indexes of remaining tasks\n  for (let i = 0; i < _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index = i + 1;\n  }\n\n  saveToLocalStorage();\n  buildTask(listDiv);\n};\n\nconst toggleViewMode = (taskElement, index, description) => {\n  const deleteIcon = taskElement.querySelector('.delete-icon');\n  const threeDotIcon = document.createElement('i');\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\n  threeDotIcon.setAttribute('data-action', 'edit');\n\n  const inputField = taskElement.querySelector('.edit-input');\n  inputField.remove(); // Remove the input field\n\n  const taskDescription = document.createElement('p');\n  taskDescription.innerText = description;\n  taskElement.appendChild(taskDescription); // Add back the task description\n\n  deleteIcon.remove(); // Remove the delete icon\n  taskElement.appendChild(threeDotIcon); // Add the three-dot icon\n\n  // Update the task description in the todoTasks array\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].description = description;\n  saveToLocalStorage();\n};\n\nconst editTaskDescription = (index, newDescription) => {\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].description = newDescription;\n  saveToLocalStorage();\n};\n\nconst toggleEditMode = (taskElement, index) => {\n  const threeDotIcon = taskElement.querySelector('.dot-icon');\n  const deleteIcon = document.createElement('i');\n  deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');\n  deleteIcon.setAttribute('data-action', 'delete');\n\n  const taskDescription = taskElement.querySelector('p');\n  const currentDescription = taskDescription.innerText;\n\n  taskDescription.remove(); // Remove the task description\n  const inputField = document.createElement('input');\n  inputField.type = 'text';\n  inputField.className = 'edit-input';\n  inputField.value = currentDescription;\n  taskElement.appendChild(inputField); // Add the input field\n\n  threeDotIcon.remove(); // Remove the three-dot icon\n  taskElement.appendChild(deleteIcon); // Add the delete icon\n\n  inputField.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter' && inputField.value.trim() !== '') {\n      const newDescription = inputField.value.trim();\n      editTaskDescription(index, newDescription);\n      toggleViewMode(taskElement, index, newDescription); // Toggle back to view mode\n    }\n  });\n};\n\nconst clearCompletedTasks = (listDiv) => {\n  const completedIndexes = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reduce((indexes, task, index) => {\n    if (task.completed) indexes.push(index);\n    return indexes;\n  }, []);\n\n  if (completedIndexes.length > 0) {\n    deleteTask(completedIndexes, listDiv);\n    buildTask(listDiv); // Rebuild the tasks after deleting completed tasks\n  }\n};\n\nconst handleTaskClick = (event, listDiv) => {\n  const { target } = event;\n  const taskElement = target.closest('.single-task');\n\n  if (!taskElement) return; // Exit if the clicked element is not a task\n\n  const index = Number(taskElement.id.split('-')[1]);\n\n  if (target.classList.contains('dot-icon') || target.classList.contains('delete-icon')) {\n    const dataAction = target.getAttribute('data-action');\n    if (dataAction === 'edit') {\n      toggleEditMode(taskElement, index);\n    } else if (dataAction === 'delete') {\n      deleteTask([index - 1], listDiv); // Use deleteTask function to remove the task\n    }\n  } else if (target.tagName === 'P') {\n    toggleEditMode(taskElement, index); // Toggle to edit mode when the task description is clicked\n  }\n};\n\n\n//# sourceURL=webpack://todo-list/./src/modules/addremove.js?");

/***/ }),

/***/ "./src/modules/taskDB.js":
/*!*******************************!*\
  !*** ./src/modules/taskDB.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This is a demo database for todo list\nconst todoTasks = [\n  {\n    description: 'Read the documentation',\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'Create the Repository',\n    completed: false,\n    index: 2,\n  },\n  {\n    description: 'Set the Linters',\n    completed: false,\n    index: 3,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoTasks);\n\n//# sourceURL=webpack://todo-list/./src/modules/taskDB.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
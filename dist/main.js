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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskDB */ \"./src/modules/taskDB.js\");\n/* harmony import */ var _modules_addremove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addremove */ \"./src/modules/addremove.js\");\n\r\n\r\n\r\n\r\nconst listDiv = document.getElementById('list');\r\nconst clearBtn = document.getElementById('clear-completed');\r\nconst inputField = document.getElementById('newtask');\r\n\r\n// Add event listener for the 'keydown' event on the input field\r\ninputField.addEventListener('keydown', (event) => {\r\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.addNewTask)(inputField, event, listDiv);\r\n});\r\n\r\n// Add event listener for the 'click' event on the clearBtn\r\nclearBtn.addEventListener('click', () => {\r\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTasks)(listDiv); // Call the clearCompletedTasks function to handle clearing completed tasks\r\n});\r\n\r\n// Add event listener for the 'click' event\r\n// on the listDiv (for editing task description or deleting)\r\nlistDiv.addEventListener('click', (event) => {\r\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.handleTaskClick)(event, listDiv); // Call the handleTaskClick function to handle task clicks\r\n});\r\n\r\n// Load data from local storage when the page loads\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n  const data = JSON.parse(localStorage.getItem('todoTasks'));\r\n  if (data) {\r\n    _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length = 0;\r\n    data.forEach((task) => {\r\n      _modules_taskDB__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push(task);\r\n    });\r\n  }\r\n  (0,_modules_addremove__WEBPACK_IMPORTED_MODULE_2__.buildTask)(listDiv);\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addremove.js":
/*!**********************************!*\
  !*** ./src/modules/addremove.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   buildTask: () => (/* binding */ buildTask),\n/* harmony export */   clearCompletedTasks: () => (/* binding */ clearCompletedTasks),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   editTaskDescription: () => (/* binding */ editTaskDescription),\n/* harmony export */   handleTaskClick: () => (/* binding */ handleTaskClick),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),\n/* harmony export */   toggleEditMode: () => (/* binding */ toggleEditMode),\n/* harmony export */   toggleViewMode: () => (/* binding */ toggleViewMode),\n/* harmony export */   updateTaskStatus: () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* harmony import */ var _taskDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDB */ \"./src/modules/taskDB.js\");\n\r\n\r\nconst saveToLocalStorage = () => {\r\n  const LOCAL_STORAGE_KEY = 'todoTasks';\r\n  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(_taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n};\r\n\r\nconst addTask = (detail, idx, status, listDiv) => {\r\n  const task = {\r\n    description: detail,\r\n    completed: status,\r\n    index: idx,\r\n  };\r\n\r\n  const singleTask = document.createElement('li');\r\n  singleTask.className = 'single-task';\r\n  singleTask.id = `${task.description}-${task.index}`;\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.type = 'checkbox';\r\n  checkbox.id = `${task.index}-checkbox`;\r\n  checkbox.name = 'checkbox';\r\n  checkbox.className = 'check-box';\r\n  if (status) {\r\n    checkbox.checked = true;\r\n  }\r\n  const taskDescription = document.createElement('p');\r\n  taskDescription.innerHTML = detail;\r\n\r\n  singleTask.appendChild(checkbox);\r\n  singleTask.appendChild(taskDescription);\r\n\r\n  const threeDotIcon = document.createElement('i');\r\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\r\n  threeDotIcon.classList.add(`${task.index}-threedot`);\r\n  singleTask.appendChild(threeDotIcon);\r\n  listDiv.appendChild(singleTask);\r\n};\r\n\r\nconst addNewTask = (inputField, event, listDiv) => {\r\n  if (event.key === 'Enter' && inputField.value.trim() !== '') {\r\n    // Intentionally left blank\r\n  } else {\r\n    console.log('event.key check');\r\n    return;\r\n  }\r\n\r\n  // --------------------//\r\n  const detail = inputField.value.trim();\r\n  const status = false;\r\n  const idx = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length + 1;\r\n  const task = {\r\n    description: detail,\r\n    completed: status,\r\n    index: idx,\r\n  };\r\n\r\n  const singleTask = document.createElement('li');\r\n  singleTask.className = 'single-task';\r\n  singleTask.id = `${task.description}-${task.index}`;\r\n\r\n  const checkbox = document.createElement('input');\r\n  checkbox.type = 'checkbox';\r\n  checkbox.id = `${task.index}-checkbox`;\r\n  checkbox.name = 'checkbox';\r\n  checkbox.className = 'check-box';\r\n  if (status) {\r\n    checkbox.checked = true;\r\n  }\r\n  const taskDescription = document.createElement('p');\r\n  taskDescription.innerText = task.description;\r\n\r\n  singleTask.appendChild(checkbox);\r\n  singleTask.appendChild(taskDescription);\r\n\r\n  const threeDotIcon = document.createElement('i');\r\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\r\n  threeDotIcon.classList.add(`${task.index}-threedot`);\r\n  singleTask.appendChild(threeDotIcon);\r\n  listDiv.appendChild(singleTask);\r\n\r\n  // --------------------//\r\n  const newTask = {\r\n    description: detail,\r\n    completed: false,\r\n    index: idx,\r\n  };\r\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(newTask);\r\n  inputField.value = '';\r\n  saveToLocalStorage();\r\n};\r\n\r\nconst updateTaskStatus = (index) => {\r\n  const status = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].completed;\r\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].completed = !status;\r\n  saveToLocalStorage();\r\n};\r\n\r\n// Function to build the tasks on the screen\r\nconst buildTask = (listDiv) => {\r\n  listDiv.innerHTML = ''; // Clear existing tasks before building\r\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task) => {\r\n    addTask(task.description, task.index, task.completed, listDiv);\r\n  });\r\n  // Get checkboxes after building the tasks\r\n  const checkboxes = document.querySelectorAll('.check-box');\r\n  // Add event listener for the 'change' event on the checkboxes\r\n  checkboxes.forEach((checkbox) => {\r\n    checkbox.addEventListener('change', () => {\r\n      const index = Number(checkbox.id.split('-')[0]);\r\n      updateTaskStatus(index);\r\n    });\r\n    saveToLocalStorage();\r\n  });\r\n  saveToLocalStorage();\r\n};\r\n\r\nconst deleteTask = (indexes, listDiv) => {\r\n  // Sort indexes in descending order\r\n  indexes.sort((a, b) => b - a);\r\n\r\n  indexes.forEach((index) => {\r\n    _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(index, 1);\r\n  });\r\n  // Update indexes of remaining tasks\r\n  for (let i = 0; i < _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\r\n    _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].index = i + 1;\r\n  }\r\n\r\n  saveToLocalStorage();\r\n  buildTask(listDiv);\r\n};\r\n\r\nconst toggleViewMode = (taskElement, index, description) => {\r\n  const deleteIcon = taskElement.querySelector('.delete-icon');\r\n  const threeDotIcon = document.createElement('i');\r\n  threeDotIcon.classList.add('fas', 'fa-ellipsis-v', 'dot-icon');\r\n  threeDotIcon.setAttribute('data-action', 'edit');\r\n\r\n  const inputField = taskElement.querySelector('.edit-input');\r\n  inputField.remove(); // Remove the input field\r\n\r\n  const taskDescription = document.createElement('p');\r\n  taskDescription.innerText = description;\r\n  taskElement.appendChild(taskDescription); // Add back the task description\r\n\r\n  deleteIcon.remove(); // Remove the delete icon\r\n  taskElement.appendChild(threeDotIcon); // Add the three-dot icon\r\n\r\n  // Update the task description in the todoTasks array\r\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].description = description;\r\n  saveToLocalStorage();\r\n};\r\n\r\nconst editTaskDescription = (index, newDescription) => {\r\n  _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index - 1].description = newDescription;\r\n  saveToLocalStorage();\r\n};\r\n\r\nconst toggleEditMode = (taskElement, index) => {\r\n  const threeDotIcon = taskElement.querySelector('.dot-icon');\r\n  const deleteIcon = document.createElement('i');\r\n  deleteIcon.classList.add('fas', 'fa-trash', 'delete-icon');\r\n  deleteIcon.setAttribute('data-action', 'delete');\r\n\r\n  const taskDescription = taskElement.querySelector('p');\r\n  const currentDescription = taskDescription.innerText;\r\n\r\n  taskDescription.remove(); // Remove the task description\r\n  const inputField = document.createElement('input');\r\n  inputField.type = 'text';\r\n  inputField.className = 'edit-input';\r\n  inputField.value = currentDescription;\r\n  taskElement.appendChild(inputField); // Add the input field\r\n\r\n  threeDotIcon.remove(); // Remove the three-dot icon\r\n  taskElement.appendChild(deleteIcon); // Add the delete icon\r\n\r\n  inputField.addEventListener('keydown', (event) => {\r\n    if (event.key === 'Enter' && inputField.value.trim() !== '') {\r\n      const newDescription = inputField.value.trim();\r\n      editTaskDescription(index, newDescription);\r\n      toggleViewMode(taskElement, index, newDescription); // Toggle back to view mode\r\n    }\r\n  });\r\n};\r\n\r\nconst clearCompletedTasks = (listDiv) => {\r\n  const completedIndexes = _taskDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"].reduce((indexes, task, index) => {\r\n    if (task.completed) indexes.push(index);\r\n    return indexes;\r\n  }, []);\r\n\r\n  if (completedIndexes.length > 0) {\r\n    deleteTask(completedIndexes, listDiv);\r\n    buildTask(listDiv); // Rebuild the tasks after deleting completed tasks\r\n  }\r\n};\r\n\r\nconst handleTaskClick = (event, listDiv) => {\r\n  const { target } = event;\r\n  const taskElement = target.closest('.single-task');\r\n\r\n  if (!taskElement) return; // Exit if the clicked element is not a task\r\n\r\n  const index = Number(taskElement.id.split('-')[1]);\r\n\r\n  if (target.classList.contains('dot-icon') || target.classList.contains('delete-icon')) {\r\n    const dataAction = target.getAttribute('data-action');\r\n    if (dataAction === 'edit') {\r\n      toggleEditMode(taskElement, index);\r\n    } else if (dataAction === 'delete') {\r\n      deleteTask([index - 1], listDiv); // Use deleteTask function to remove the task\r\n    }\r\n  } else if (target.tagName === 'P') {\r\n    toggleEditMode(taskElement, index); // Toggle to edit mode when the task description is clicked\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/addremove.js?");

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
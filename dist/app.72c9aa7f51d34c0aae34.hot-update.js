"use strict";
self["webpackHotUpdatemy_app"]("app",{

/***/ "./src/components/orbita/Controller/Controller.tsx":
/*!*********************************************************!*\
  !*** ./src/components/orbita/Controller/Controller.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/ArrowIcon */ "./src/components/orbita/Icon/ArrowIcon.tsx");



const NavigationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Controller__NavigationContainer",
  componentId: "sc-1if5ohz-0"
})(["top:250px;left:5%;z-index:10;display:flex;gap:12px;@media ", "{display:flex;justify-content:space-between;width:120px;}@media ", "{position:absolute;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.media.medium;
}, _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.media.small;
});
const ArrowButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Controller__ArrowButton",
  componentId: "sc-1if5ohz-1"
})(["height:25px;width:25px;border-radius:50%;cursor:pointer;transition:background 0.3s;border:1px solid black;background-color:transparent;@media ", "{svg{width:12px;height:12px;}}&:hover{background:gray;}@media ", "{height:50px;width:50px;border-radius:50%;cursor:pointer;transition:background 0.3s;border:1px solid black;background-color:transparent;}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.media.small;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.media.medium;
});
const Controller = _ref5 => {
  let {
    onPrev,
    onNext
  } = _ref5;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavigationContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArrowButton, {
    onClick: onPrev
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__.ArrowIcon, {
    size: 24,
    direction: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ArrowButton, {
    onClick: onNext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_1__.ArrowIcon, {
    size: 24,
    direction: "left"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("071dcf400d4ba24454db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=app.72c9aa7f51d34c0aae34.hot-update.js.map
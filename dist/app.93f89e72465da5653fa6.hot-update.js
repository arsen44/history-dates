"use strict";
self["webpackHotUpdatemy_app"]("app",{

/***/ "./src/components/orbita/OrbitalTimeline.tsx":
/*!***************************************************!*\
  !*** ./src/components/orbita/OrbitalTimeline.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _OrbitSection_OrbitSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrbitSection/OrbitSection */ "./src/components/orbita/OrbitSection/OrbitSection.tsx");
/* harmony import */ var _SwiperComponents_DataSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwiperComponents/DataSection */ "./src/components/orbita/SwiperComponents/DataSection.tsx");





// Types

// Styled Components
const Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "OrbitalTimeline__Container",
  componentId: "sc-5etdgx-0"
})(["min-height:max-content;@media ", "{min-height:max-content;display:flex;flex-direction:column;align-items:center;padding:2rem;box-sizing:border-box;width:100%;justify-content:center;max-width:1200px;margin:0 auto;min-height:100vh;gap:10px;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.media.medium;
});
const OrbitTimeline = _ref2 => {
  let {
    data
  } = _ref2;
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data.length > 0 ? data[0] : null);
  const handleSectionClick = section => {
    setActiveSection(section);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_OrbitSection_OrbitSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    activeSection: activeSection,
    onSectionClick: handleSectionClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SwiperComponents_DataSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeSection: activeSection
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrbitTimeline);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9bf2dcfdf8badf07122")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=app.93f89e72465da5653fa6.hot-update.js.map
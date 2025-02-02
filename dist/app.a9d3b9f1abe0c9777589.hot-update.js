"use strict";
self["webpackHotUpdatemy_app"]("app",{

/***/ "./src/components/orbita/SwiperComponents/DataSection.tsx":
/*!****************************************************************!*\
  !*** ./src/components/orbita/SwiperComponents/DataSection.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon/ArrowIcon */ "./src/components/orbita/Icon/ArrowIcon.tsx");








// Types

// Styled Components
const DataContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "DataSection__DataContainer",
  componentId: "sc-cqx7h8-0"
})(["width:100%;"]);
const YearText = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "DataSection__YearText",
  componentId: "sc-cqx7h8-1"
})(["font-weight:600;margin-bottom:0.5rem;color:#2563eb;font-size:1.1rem;"]);
const DetailText = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].p.withConfig({
  displayName: "DataSection__DetailText",
  componentId: "sc-cqx7h8-2"
})(["font-size:14px;font-weight:400;line-height:20.3px;text-align:left;color:#42567a;"]);
const NavButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "DataSection__NavButton",
  componentId: "sc-cqx7h8-3"
})(["display:none;@media ", "{display:flex;align-items:center;justify-content:center;height:40px;width:40px;background:white;border-radius:50%;border:none;cursor:pointer;position:absolute;top:50%;z-index:10;box-shadow:0 2px 4px rgba(0,0,0,0.2);&:hover{background:#f3f4f6;}}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.media.medium;
});
const PrevButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(NavButton).withConfig({
  displayName: "DataSection__PrevButton",
  componentId: "sc-cqx7h8-4"
})(["left:-50px;"]);
const NextButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(NavButton).withConfig({
  displayName: "DataSection__NextButton",
  componentId: "sc-cqx7h8-5"
})(["right:-50px;"]);
const DataSection = _ref2 => {
  let {
    activeSection
  } = _ref2;
  const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleSwiper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(instance => setSwiper(instance), []);
  if (!activeSection || activeSection.data.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DataContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    pagination: true,
    navigation: true,
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_4__.Navigation],
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 100
      }
    },
    loop: true,
    grabCursor: true,
    onSwiper: handleSwiper,
    className: "mySwiper"
  }, activeSection.data.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(YearText, null, item.year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DetailText, null, item.text)))), activeSection.data.length > 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrevButton, {
    onClick: () => swiper.slidePrev()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_5__.ArrowIcon, {
    size: 24,
    direction: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NextButton, {
    onClick: () => swiper.slideNext()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_ArrowIcon__WEBPACK_IMPORTED_MODULE_5__.ArrowIcon, {
    direction: "left"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSection);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("11188556bb329232fcda")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=app.a9d3b9f1abe0c9777589.hot-update.js.map
"use strict";
self["webpackHotUpdatemy_app"]("app",{

/***/ "./src/components/orbita/CenterCircleDate/CenterCircleDate.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/orbita/CenterCircleDate/CenterCircleDate.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



const DateContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CenterCircleDate__DateContainer",
  componentId: "sc-1iucnb5-0"
})(["position:relative;display:flex;@media ", "{position:absolute;justify-content:center;top:30%;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.media.medium;
});
const DateText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "CenterCircleDate__DateText",
  componentId: "sc-1iucnb5-1"
})(["font-weight:500;display:flex;justify-content:space-around;gap:20px;@media ", "{font-weight:500;display:flex;width:400px;}"], _ref2 => {
  let {
    theme
  } = _ref2;
  return theme.media.medium;
});
const StartYear = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "CenterCircleDate__StartYear",
  componentId: "sc-1iucnb5-2"
})(["font-size:60px;font-weight:700;letter-spacing:-0.02em;text-align:center;color:", ";@media ", "{color:", ";font-family:\"Inter\";font-style:normal;font-weight:400;font-size:128px;line-height:155px;}"], _ref3 => {
  let {
    theme
  } = _ref3;
  return theme.colors.primary;
}, _ref4 => {
  let {
    theme
  } = _ref4;
  return theme.media.medium;
}, _ref5 => {
  let {
    theme
  } = _ref5;
  return theme.colors.primary;
});
const EndYear = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "CenterCircleDate__EndYear",
  componentId: "sc-1iucnb5-3"
})(["font-size:60px;font-weight:700;letter-spacing:-0.02em;text-align:center;color:", ";@media ", "{color:", ";font-family:\"Inter\";font-style:normal;font-weight:400;font-size:128px;line-height:155px;}"], _ref6 => {
  let {
    theme
  } = _ref6;
  return theme.colors.pink;
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.media.medium;
}, _ref8 => {
  let {
    theme
  } = _ref8;
  return theme.colors.pink;
});
const CenterCircleDate = _ref9 => {
  let {
    activeSection
  } = _ref9;
  const startYearRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const endYearRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const prevSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!startYearRef.current || !endYearRef.current || !containerRef.current) return;
    const tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
    if (prevSection.current && activeSection) {
      // Fade out
      tl.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut"
      })
      // Fade in
      .to(containerRef.current, {
        duration: 1,
        ease: "power2.out"
      })
      // Animate both numbers simultaneously
      .to([startYearRef.current, endYearRef.current], {
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          const progress = tl.progress();

          // Animate start year
          if (startYearRef.current) {
            const currentStart = Math.round(prevSection.current.start + (activeSection.start - prevSection.current.start) * progress);
            startYearRef.current.textContent = String(currentStart);
          }

          // Animate end year
          if (endYearRef.current) {
            const currentEnd = Math.round(prevSection.current.end + (activeSection.end - prevSection.current.end) * progress);
            endYearRef.current.textContent = String(currentEnd);
          }
        }
      });
    } else {
      // Initial load animation
      tl.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          if (startYearRef.current && endYearRef.current) {
            if (activeSection) {
              startYearRef.current.textContent = String(activeSection.start);
              endYearRef.current.textContent = String(activeSection.end);
            } else {
              startYearRef.current.textContent = "Выберите";
              endYearRef.current.textContent = "раздел";
            }
          }
        }
      }).to(containerRef.current, {
        duration: 1,
        ease: "power2.out"
      });
    }
    prevSection.current = activeSection;
  }, [activeSection]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DateContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DateText, {
    ref: containerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StartYear, {
    ref: startYearRef
  }, activeSection ? activeSection.start : "Выберите"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EndYear, {
    ref: endYearRef
  }, activeSection ? activeSection.end : "раздел")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CenterCircleDate);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("830a0706cd771b6dd326")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=app.a698f287203badec5d22.hot-update.js.map
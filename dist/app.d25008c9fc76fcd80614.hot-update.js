"use strict";
self["webpackHotUpdatemy_app"]("app",{

/***/ "./src/components/orbita/OrbitSection/OrbitSection.tsx":
/*!*************************************************************!*\
  !*** ./src/components/orbita/OrbitSection/OrbitSection.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Icon_OrbitCircleIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/OrbitCircleIcon */ "./src/components/orbita/Icon/OrbitCircleIcon.tsx");
/* harmony import */ var _CenterCircleDate_CenterCircleDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CenterCircleDate/CenterCircleDate */ "./src/components/orbita/CenterCircleDate/CenterCircleDate.tsx");
/* harmony import */ var _Controller_Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controller/Controller */ "./src/components/orbita/Controller/Controller.tsx");







// Types remain the same

// Constants
const ORBIT_RADIUS = 250;
const SMALL_BUTTON_SIZE = 12;
const LARGE_BUTTON_SIZE = 50;

// Styled Components
const OrbitContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "OrbitSection__OrbitContainer",
  componentId: "sc-bwgins-0"
})(["position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const OrbitPath = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "OrbitSection__OrbitPath",
  componentId: "sc-bwgins-1"
})(["display:none;@media ", "{display:flex;justify-content:center;}"], _ref => {
  let {
    theme
  } = _ref;
  return theme.media.medium;
});
const OrbitCircleIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "OrbitSection__OrbitCircleIconWrapper",
  componentId: "sc-bwgins-2"
})(["position:relative;display:flex;justify-content:center;align-items:center;"]);
const CircleButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  shouldForwardProp: prop => !["isActive", "isHovered", "rotationAngle"].includes(prop)
}).withConfig({
  displayName: "OrbitSection__CircleButton",
  componentId: "sc-bwgins-3"
})(["position:absolute;width:", ";height:", ";transform-origin:center center;transform:", ";transition:width 0.5s,height 0.5s,font-size 0.5s,box-shadow 0.5s,background-color 0.5s;border-radius:50%;color:black;font-size:", ";display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer;box-shadow:0 2px 4px rgba(0,0,0,0.1);border:1px solid black;background-color:", ";&:hover{width:", "px;height:", "px;font-size:1rem;box-shadow:0 0 10px rgba(0,0,0,0.3);border:1px solid black;color:black;background-color:#f5f5f5;}"], props => props.isActive ? "".concat(LARGE_BUTTON_SIZE, "px") : "".concat(SMALL_BUTTON_SIZE, "px"), props => props.isActive ? "".concat(LARGE_BUTTON_SIZE, "px") : "".concat(SMALL_BUTTON_SIZE, "px"), _ref2 => {
  let {
    rotationAngle
  } = _ref2;
  return "\n    translate(-50%, -50%) \n    rotate(".concat(rotationAngle, "deg)\n  ");
}, props => props.isHovered ? "0.6rem" : "1rem", props => props.isActive ? "#f5f5f5" : "black", LARGE_BUTTON_SIZE, LARGE_BUTTON_SIZE);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "OrbitSection__Content",
  componentId: "sc-bwgins-4"
})(["width:100%;"]);
const OrbitSection = _ref3 => {
  let {
    data,
    activeSection: propActiveSection,
    onSectionClick
  } = _ref3;
  const orbitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [hoveredIndex, setHoveredIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propActiveSection || null);
  const [rotationAngle, setRotationAngle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const calculatePosition = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, total) => {
    const angle = index * 2 * Math.PI / total;
    return {
      x: Math.cos(angle) * ORBIT_RADIUS,
      y: Math.sin(angle) * ORBIT_RADIUS
    };
  }, []);
  const circlePositions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return data.map((_, index) => calculatePosition(index, data.length));
  }, [data.length, calculatePosition]);
  const handleSectionClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(section => {
    if (!orbitRef.current) return;
    setActiveSection(section);
    const targetAngle = 360 - 360 / data.length * section.id;
    setRotationAngle(targetAngle);
    gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(orbitRef.current, {
      rotation: targetAngle,
      duration: 2,
      ease: "power2.out"
    });
    onSectionClick(section);
  }, [data.length, onSectionClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!activeSection && data.length > 0) {
      setActiveSection(data[0]);
    }
  }, [data, activeSection]);
  const handleNext = () => {
    if (!activeSection) return;
    const currentIndex = data.findIndex(item => item.id === activeSection.id);
    const nextIndex = (currentIndex + 1) % data.length;
    handleSectionClick(data[nextIndex]);
  };
  const handlePrev = () => {
    if (!activeSection) return;
    const currentIndex = data.findIndex(item => item.id === activeSection.id);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    handleSectionClick(data[prevIndex]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrbitContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CenterCircleDate_CenterCircleDate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeSection: activeSection
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrbitPath, {
    ref: orbitRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(OrbitCircleIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icon_OrbitCircleIcon__WEBPACK_IMPORTED_MODULE_1__.OrbitCircleIcon, {
    radius: 500
  }), data.map((section, index) => {
    const position = circlePositions[index];
    const isActive = (activeSection === null || activeSection === void 0 ? void 0 : activeSection.id) === section.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CircleButton, {
      key: section.id,
      isActive: isActive,
      isHovered: hoveredIndex === section.id,
      onClick: () => handleSectionClick(section),
      onMouseEnter: () => setHoveredIndex(section.id),
      onMouseLeave: () => setHoveredIndex(null),
      rotationAngle: -rotationAngle,
      style: {
        left: "".concat(position.x + ORBIT_RADIUS, "px"),
        top: "".concat(position.y + ORBIT_RADIUS, "px")
      }
    }, section.id);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Controller_Controller__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onPrev: handlePrev,
    onNext: handleNext
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OrbitSection));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("76707c2d4fd9fa8c1edf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=app.d25008c9fc76fcd80614.hot-update.js.map
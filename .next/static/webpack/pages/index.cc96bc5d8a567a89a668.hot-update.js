self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Accordion.jsx":
/*!**********************************!*\
  !*** ./components/Accordion.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\next-login\\components\\Accordion.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var Accordion = function Accordion(_ref) {
  _s();

  var visible = _ref.visible,
      handleToggle = _ref.handleToggle;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state),
      menu = _useSelector.menu;

  var handleClick = function handleClick() {
    handleToggle();
  };

  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      onClick: handleClick,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 68
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 49
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Accordion, "0RD9ex7wdSp2BDZkcsO7mmhJ7Ss=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Accordion__AccordionMenu",
  componentId: "sc-wg3e6s-0"
})(["position:absolute;width:100%;left:0px;top:10vh;z-index:5;background:#fff;padding:7vh 0;display:", ";& > ul{display:flex;flex-direction:column;}& > ul > li{margin-top:20px;text-align:center;}"], function (props) {
  return props.flag ? "block" : "none";
});
_c2 = AccordionMenu;

var _c, _c2;

$RefreshReg$(_c, "Accordion");
$RefreshReg$(_c2, "AccordionMenu");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInZpc2libGUiLCJoYW5kbGVUb2dnbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwibWVudSIsImhhbmRsZUNsaWNrIiwiY2F0ZWdvcnkiLCJtYXAiLCJ2IiwidXJsIiwiaWQiLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE0QjtBQUFBOztBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUFBLHFCQUM3QkMsd0RBQVcsQ0FBRUMsS0FBRixDQURrQjtBQUFBLE1BQ3JDQyxJQURxQyxnQkFDckNBLElBRHFDOztBQUc1QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCSixnQkFBWTtBQUViLEdBSEQ7O0FBS0EsTUFBTUssUUFBUSxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUs7QUFDN0Isd0JBQU87QUFBZSxhQUFPLEVBQUVILFdBQXhCO0FBQUEsNkJBQXFDLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFRyxDQUFDLENBQUNDLEdBQWQ7QUFBQSwrQkFBbUI7QUFBQSxvQkFBSUQsQ0FBQyxDQUFDRjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQyxPQUFTRSxDQUFDLENBQUNFLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0QsR0FGZ0IsQ0FBakI7QUFLQSxzQkFDRSw4REFBQyxhQUFEO0FBQWUsUUFBSSxFQUFJVixPQUF2QjtBQUFBLDJCQUNFO0FBQUEsZ0JBQ0dNO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBckJEOztHQUFNUCxTO1VBQ1dHLG9EOzs7S0FEWEgsUztBQXVCTiwrREFBZUEsU0FBZjtBQUdBLElBQU1ZLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdU1BU0wsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBbkM7QUFBQSxDQVRLLENBQW5CO01BQU1ILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2M5NmJjNWQ4YTU2N2E4OWE2NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSAoe3Zpc2libGUsaGFuZGxlVG9nZ2xlfSkgPT4geyBcclxuICBjb25zdCB7bWVudX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGhhbmRsZVRvZ2dsZSgpXHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBtZW51Lm1hcCgodik9PnsgXHJcbiAgICByZXR1cm4gPGxpIGtleT17di5pZH0gb25DbGljaz17aGFuZGxlQ2xpY2t9PjxMaW5rIGhyZWY9e3YudXJsfT48YT57di5jYXRlZ29yeX08L2E+PC9MaW5rPjwvbGk+XHJcbiAgfSlcclxuXHJcbiAgXHJcbiAgcmV0dXJuICggXHJcbiAgICA8QWNjb3JkaW9uTWVudSBmbGFnID0ge3Zpc2libGV9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxyXG5cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MTB2aDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDd2aCAwO1xyXG5cclxuICAgIGRpc3BsYXk6JHsocHJvcHMpID0+IChwcm9wcy5mbGFnID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcclxuXHJcbiAgICAmID4gdWwgeyBcclxuICAgICAgZGlzcGxheTpmbGV4OyBcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICAgIH1cclxuXHJcbiAgICAmID4gdWwgPiBsaSB7IFxyXG4gICAgICBtYXJnaW4tdG9wOjIwcHg7IFxyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICB9XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==
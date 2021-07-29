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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\next-login\\components\\Accordion.jsx",
    _this = undefined;




var Accordion = function Accordion(_ref) {
  var visible = _ref.visible,
      handleToggle = _ref.handleToggle;

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
          lineNumber: 16,
          columnNumber: 68
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 49
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, _this);
};

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIkFjY29yZGlvbiIsInZpc2libGUiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVDbGljayIsImNhdGVnb3J5IiwibWVudSIsIm1hcCIsInYiLCJ1cmwiLCJpZCIsIkFjY29yZGlvbk1lbnUiLCJTdHlsZWQiLCJwcm9wcyIsImZsYWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBNEI7QUFBQSxNQUExQkMsT0FBMEIsUUFBMUJBLE9BQTBCO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjs7QUFFNUMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkQsZ0JBQVk7QUFFYixHQUhEOztBQUtBLE1BQU1FLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFLO0FBQzdCLHdCQUFPO0FBQWUsYUFBTyxFQUFFSixXQUF4QjtBQUFBLDZCQUFxQyw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUksQ0FBQyxDQUFDQyxHQUFkO0FBQUEsK0JBQW1CO0FBQUEsb0JBQUlELENBQUMsQ0FBQ0g7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckMsT0FBU0csQ0FBQyxDQUFDRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBRmdCLENBQWpCO0FBS0Esc0JBQ0UsOERBQUMsYUFBRDtBQUFlLFFBQUksRUFBSVIsT0FBdkI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQXBCRDs7S0FBTUosUztBQXNCTiwrREFBZUEsU0FBZjtBQUdBLElBQU1VLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdU1BU0wsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBbkM7QUFBQSxDQVRLLENBQW5CO01BQU1ILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTE2ZTQ5NTVhOGE4MWNkZjM3YzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFjY29yZGlvbiA9ICh7dmlzaWJsZSxoYW5kbGVUb2dnbGV9KSA9PiB7IFxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlVG9nZ2xlKClcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2KT0+eyBcclxuICAgIHJldHVybiA8bGkga2V5PXt2LmlkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+PExpbmsgaHJlZj17di51cmx9PjxhPnt2LmNhdGVnb3J5fTwvYT48L0xpbms+PC9saT5cclxuICB9KVxyXG5cclxuICBcclxuICByZXR1cm4gKCBcclxuICAgIDxBY2NvcmRpb25NZW51IGZsYWcgPSB7dmlzaWJsZX0+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC9BY2NvcmRpb25NZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXHJcblxyXG5cclxuY29uc3QgQWNjb3JkaW9uTWVudSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHRvcDoxMHZoO1xyXG4gICAgei1pbmRleDo1O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzogN3ZoIDA7XHJcblxyXG4gICAgZGlzcGxheTokeyhwcm9wcykgPT4gKHByb3BzLmZsYWcgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG5cclxuICAgICYgPiB1bCB7IFxyXG4gICAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+IGxpIHsgXHJcbiAgICAgIG1hcmdpbi10b3A6MjBweDsgXHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyOyBcclxuICAgIH1cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9
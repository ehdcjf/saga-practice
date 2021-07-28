self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NavToggle.jsx":
/*!**********************************!*\
  !*** ./components/NavToggle.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion */ "./components/Accordion.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\components\\NavToggle.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "NavToggle__Toggle",
  componentId: "sc-1oox2ki-0"
})(["background:transparent;border-color:transparent;&> .nav-toggle{display:none;}& > .nav-toggle +label{display:block;width:2.5rem;height:2rem;position:relative;cursor:pointer;}&> .nav-toggle+label > span{display:block;position:absolute;width:100%;height:5px;border-radius:30px;background:#000;transition:all .35s;}& > .nav-toggle + label > span:nth-child(1){top:0;}& > .nav-toggle + label > span:nth-child(2){top:50%;transform:translateY(-50%)}& > .nav-toggle + label > span:nth-child(3){bottom:0;}& > .nav-toggle:checked + label > span:nth-child(1){top:50%;transform:translateY(-50%) rotate(45deg);}& > .nav-toggle:checked + label > span:nth-child(2){opacity:0;}& > .nav-toggle:checked + label > span:nth-child(3){bottom:50%;transform:translateY(50%) rotate(-45deg);}"]);
_c = Toggle;

var NavToggle = function NavToggle() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleToggle = function handleToggle() {
    setVisible(!visible);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Toggle, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      type: "checkbox",
      id: "nav-toggle",
      className: "nav-toggle",
      onClick: handleToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
      htmlFor: "nav-toggle",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Accodion, {
      visible: visible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(NavToggle, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");

_c2 = NavToggle;
/* harmony default export */ __webpack_exports__["default"] = (NavToggle);

var _c, _c2;

$RefreshReg$(_c, "Toggle");
$RefreshReg$(_c2, "NavToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZUb2dnbGUuanN4Il0sIm5hbWVzIjpbIlRvZ2dsZSIsIlN0eWxlZCIsIk5hdlRvZ2dsZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxd0JBQVo7S0FBTUQsTTs7QUFrRE4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNmQyxPQURlO0FBQUEsTUFDTkMsVUFETTs7QUFFdEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkQsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsTUFBRDtBQUFBLDRCQUNFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFFLEVBQUMsWUFGTDtBQUdFLGVBQVMsRUFBQyxZQUhaO0FBSUUsYUFBTyxFQUFFRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQU8sYUFBTyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFZRSw4REFBQyxRQUFEO0FBQVUsYUFBTyxFQUFFRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0F0QkQ7O0dBQU1GLFM7O01BQUFBLFM7QUF3Qk4sK0RBQWVBLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjYyNDQ2MzJhZDdmYWVjYWQ2OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vQWNjb3JkaW9uXCI7XHJcblxyXG5jb25zdCBUb2dnbGUgPSBTdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICY+IC5uYXYtdG9nZ2xlIHsgXHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfSBcclxuICAmID4gLm5hdi10b2dnbGUgK2xhYmVseyBcclxuICAgIGRpc3BsYXk6YmxvY2s7IFxyXG4gICAgd2lkdGg6Mi41cmVtOyBcclxuICAgIGhlaWdodDoycmVtOyBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7IFxyXG4gIH1cclxuICAmPiAubmF2LXRvZ2dsZStsYWJlbCA+IHNwYW4geyBcclxuICAgIGRpc3BsYXk6YmxvY2s7IFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7IFxyXG4gICAgd2lkdGg6MTAwJTsgXHJcbiAgICBoZWlnaHQ6NXB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6MzBweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiMwMDA7IFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXM7XHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDEpe3RvcDowO31cclxuXHJcbiAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKVxyXG4gIH1cclxuXHJcbiAgJiA+IC5uYXYtdG9nZ2xlICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgzKXtib3R0b206MDt9XHJcblxyXG5cclxuICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICB0b3A6NTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTsgXHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMil7XHJcbiAgICBvcGFjaXR5OjA7IFxyXG4gIH1cclxuXHJcbiAgJiA+IC5uYXYtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDMpe1xyXG4gICAgICBib3R0b206NTAlO1xyXG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5jb25zdCBOYXZUb2dnbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGUoIXZpc2libGUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxUb2dnbGU+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCJcclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2LXRvZ2dsZVwiPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8QWNjb2Rpb24gdmlzaWJsZT17dmlzaWJsZX0gLz5cclxuICAgICAgXHJcbiAgICA8L1RvZ2dsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2VG9nZ2xlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
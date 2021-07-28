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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\components\\NavToggle.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var Toggle = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
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
      flag: visible,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZUb2dnbGUuanN4Il0sIm5hbWVzIjpbIlRvZ2dsZSIsIlN0eWxlZCIsIk5hdlRvZ2dsZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJoYW5kbGVUb2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxxd0JBQVo7S0FBTUQsTTs7QUFrRE4sSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUNRQywrQ0FBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUNmQyxPQURlO0FBQUEsTUFDTkMsVUFETTs7QUFFdEIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkQsY0FBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0UsOERBQUMsTUFBRDtBQUFBLDRCQUNFO0FBQ0UsVUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFFLEVBQUMsWUFGTDtBQUdFLGVBQVMsRUFBQyxZQUhaO0FBSUUsYUFBTyxFQUFFRTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU9FO0FBQU8sYUFBTyxFQUFDLFlBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsZUFZRSw4REFBQyxRQUFEO0FBQVUsVUFBSSxFQUFFRixPQUFoQjtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBNUJEOztHQUFNRixTOztNQUFBQSxTO0FBOEJOLCtEQUFlQSxTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4MDM2ZTAyNmZmYzYzNmZiZjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IFRvZ2dsZSA9IFN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgJj4gLm5hdi10b2dnbGUgeyBcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICB9IFxyXG4gICYgPiAubmF2LXRvZ2dsZSArbGFiZWx7IFxyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICB3aWR0aDoyLjVyZW07IFxyXG4gICAgaGVpZ2h0OjJyZW07IFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjsgXHJcbiAgfVxyXG4gICY+IC5uYXYtdG9nZ2xlK2xhYmVsID4gc3BhbiB7IFxyXG4gICAgZGlzcGxheTpibG9jazsgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgXHJcbiAgICB3aWR0aDoxMDAlOyBcclxuICAgIGhlaWdodDo1cHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czozMHB4OyBcclxuICAgIGJhY2tncm91bmQ6IzAwMDsgXHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cztcclxuICB9XHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZSArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMSl7dG9wOjA7fVxyXG5cclxuICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgdG9wOjUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpXHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGUgKyBsYWJlbCA+IHNwYW46bnRoLWNoaWxkKDMpe2JvdHRvbTowO31cclxuXHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgxKXtcclxuICAgIHRvcDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpOyBcclxuICB9XHJcblxyXG4gICYgPiAubmF2LXRvZ2dsZTpjaGVja2VkICsgbGFiZWwgPiBzcGFuOm50aC1jaGlsZCgyKXtcclxuICAgIG9wYWNpdHk6MDsgXHJcbiAgfVxyXG5cclxuICAmID4gLm5hdi10b2dnbGU6Y2hlY2tlZCArIGxhYmVsID4gc3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICAgIGJvdHRvbTo1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDUwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5hdlRvZ2dsZSA9ICgpID0+IHtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSghdmlzaWJsZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRvZ2dsZT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICBpZD1cIm5hdi10b2dnbGVcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdi10b2dnbGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYXYtdG9nZ2xlXCI+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxBY2NvZGlvbiBmbGFnPXt2aXNpYmxlfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+MTwvbGk+XHJcbiAgICAgICAgICA8bGk+MjwvbGk+XHJcbiAgICAgICAgICA8bGk+MzwvbGk+XHJcbiAgICAgICAgICA8bGk+NDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9BY2NvZGlvbj5cclxuICAgIDwvVG9nZ2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZUb2dnbGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
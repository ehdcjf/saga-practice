self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/Header.jsx":
/*!**************************************!*\
  !*** ./components/layout/Header.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavToggle */ "./components/NavToggle.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\next-login\\components\\layout\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();





i;
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-7vevco-0"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 5vw;box-sizing:border-box;border-bottom:1px solid #ddd;width:100vw;"]);
_c = HeaderContainer;
var Gnb = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.ul.withConfig({
  displayName: "Header__Gnb",
  componentId: "sc-7vevco-1"
})(["display:flex;flex-direction:row;& > li{margin-left:20px;}@media only screen and (max-width:768px){display:none;}"]);
_c2 = Gnb;

var Header = function Header() {
  _s();

  var IsLogin = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.user.IsLogin;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderContainer, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "\uB85C\uACE0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/posts/post",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: "\uAE00\uC4F0\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), IsLogin === false ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uB85C\uADF8\uC778"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/join",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, _this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/login",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uB85C\uADF8\uC544\uC6C3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/user/join",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "\uD68C\uC6D0\uC815\uBCF4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, _this)]
      }, void 0, true)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavToggle__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Header, "Rkgrnkaa/FQuA/hx3g1L7lDDMeA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "HeaderContainer");
$RefreshReg$(_c2, "Gnb");
$RefreshReg$(_c3, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJpIiwiSGVhZGVyQ29udGFpbmVyIiwiU3R5bGVkIiwiR25iIiwiSGVhZGVyIiwiSXNMb2dpbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsQ0FBQztBQUdELElBQU1DLGVBQWUsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsc0tBQXJCO0tBQU1ELGU7QUFXTixJQUFNRSxHQUFHLEdBQUdELG9FQUFIO0FBQUE7QUFBQTtBQUFBLHdIQUFUO01BQU1DLEc7O0FBYU4sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxPQUFPLEdBQUdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxPQUFwQjtBQUFBLEdBQUQsQ0FBM0I7QUFFQSxzQkFDRSw4REFBQyxlQUFEO0FBQUEsNEJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLEdBQUQ7QUFBQSw4QkFDRTtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGFBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsRUFXR0EsT0FBTyxLQUFLLEtBQVosZ0JBQ0M7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFlBQVg7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsc0JBREQsZ0JBY0M7QUFBQSxnQ0FDRTtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFlBQVg7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsc0JBekJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBMENFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4Q0QsQ0FqREQ7O0dBQU1ELE07VUFDWUUsb0Q7OztNQURaRixNO0FBbUROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzMGZlZjYyNTIxMWE5M2EwOGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBOYXZUb2dnbGUgZnJvbSBcIi4uL05hdlRvZ2dsZVwiO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pXHJcblxyXG5cclxuY29uc3QgSGVhZGVyQ29udGFpbmVyID0gU3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzowIDV2dztcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZGQ7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuYDtcclxuXHJcbmNvbnN0IEduYiA9IFN0eWxlZC51bGBcclxuICAgIC8v66qo67CU7J28XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAmID4gbGkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICB9XHJcbiAgICAvL+uvuOuUlOyWtOy/vOumrCBQQ+uCtOyaqeuTpFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTpub25lOyAgICBcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBJc0xvZ2luID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlci5Jc0xvZ2luKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlckNvbnRhaW5lcj5cclxuICAgICAgey8qIOuhnOqzoOyZgCDrqZTribQgKi99XHJcbiAgICAgIDxoMT7roZzqs6A8L2gxPlxyXG4gICAgICA8R25iPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPkhPTUU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL3Bvc3RcIj5cclxuICAgICAgICAgICAgPGE+6riA7JOw6riwPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAge0lzTG9naW4gPT09IGZhbHNlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+66Gc6re47J24PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9qb2luXCI+XHJcbiAgICAgICAgICAgICAgICA8YT7tmozsm5DqsIDsnoU8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPuuhnOq3uOyVhOybgzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvam9pblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+7ZqM7JuQ7KCV67O0PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvR25iPlxyXG4gICAgICA8TmF2VG9nZ2xlIC8+XHJcbiAgICA8L0hlYWRlckNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
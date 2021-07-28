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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\components\\Accordion.jsx",
    _this = undefined;


var menu = [{
  id: '1',
  category: '대분류메뉴1',
  url: '/posts/1'
}, {
  id: '2',
  category: '대분류메뉴2',
  url: '/posts/2'
}, {
  id: '3',
  category: '대분류메뉴3',
  url: '/posts/3'
}, {
  id: '4',
  category: '대분류메뉴4',
  url: '/posts/4'
}, {
  id: '5',
  category: '대분류메뉴5',
  url: '/posts/5'
}];

var Accordion = function Accordion(visible) {
  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
      href: v.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: v.category
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 31
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 12
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: "ca"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_c = Accordion;
/* harmony default export */ __webpack_exports__["default"] = (Accordion);
var AccordionMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsIm1hcCIsInYiLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNBQyxJQUFFLEVBQUMsR0FESDtBQUVBQyxVQUFRLEVBQUMsUUFGVDtBQUdBQyxLQUFHLEVBQUM7QUFISixDQURXLEVBTVg7QUFDQUYsSUFBRSxFQUFDLEdBREg7QUFFQUMsVUFBUSxFQUFDLFFBRlQ7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0FOVyxFQVdYO0FBQ0FGLElBQUUsRUFBQyxHQURIO0FBRUFDLFVBQVEsRUFBQyxRQUZUO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBWFcsRUFnQlg7QUFDQUYsSUFBRSxFQUFDLEdBREg7QUFFQUMsVUFBUSxFQUFDLFFBRlQ7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0FoQlcsRUFxQlg7QUFDQUYsSUFBRSxFQUFDLEdBREg7QUFFQUMsVUFBUSxFQUFDLFFBRlQ7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0FyQlcsQ0FBYjs7QUE4QkEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsT0FBRCxFQUFhO0FBRTdCLE1BQU1ILFFBQVEsR0FBR0YsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFLO0FBQzdCLHdCQUFPLDhEQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUVBLENBQUMsQ0FBQ0osR0FBZDtBQUFBLDZCQUFtQjtBQUFBLGtCQUFJSSxDQUFDLENBQUNMO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQUZnQixDQUFqQjtBQUlBLHNCQUNFLDhEQUFDLGFBQUQ7QUFBZSxRQUFJLEVBQUlHLE9BQXZCO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFRRCxDQWREOztLQUFNRCxTO0FBZ0JOLCtEQUFlQSxTQUFmO0FBR0EsSUFBTUksYUFBYSxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1TUFTTCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxJQUFOLEdBQWEsT0FBYixHQUF1QixNQUFuQztBQUFBLENBVEssQ0FBbkI7TUFBTUgsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZTcxZjkyODlkZjRhNjQyNDZkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICB7IFxyXG4gIGlkOicxJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gIHVybDonL3Bvc3RzLzEnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOicyJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gIHVybDonL3Bvc3RzLzInXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOiczJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gIHVybDonL3Bvc3RzLzMnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOic0JywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gIHVybDonL3Bvc3RzLzQnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOic1JywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gIHVybDonL3Bvc3RzLzUnXHJcbiAgfSxcclxuXVxyXG5cclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSAodmlzaWJsZSkgPT4geyBcclxuICBcclxuICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2KT0+eyBcclxuICAgIHJldHVybiA8TGluayBocmVmPXt2LnVybH0+PGE+e3YuY2F0ZWdvcnl9PC9hPjwvTGluaz5cclxuICB9KVxyXG4gIFxyXG4gIHJldHVybiAoIFxyXG4gICAgPEFjY29yZGlvbk1lbnUgZmxhZyA9IHt2aXNpYmxlfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIGNhXHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgPC9BY2NvcmRpb25NZW51PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uXHJcblxyXG5cclxuY29uc3QgQWNjb3JkaW9uTWVudSA9IFN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHRvcDoxMHZoO1xyXG4gICAgei1pbmRleDo1O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgcGFkZGluZzogN3ZoIDA7XHJcblxyXG4gICAgZGlzcGxheTokeyhwcm9wcykgPT4gKHByb3BzLmZsYWcgPyBcImJsb2NrXCIgOiBcIm5vbmVcIil9O1xyXG5cclxuICAgICYgPiB1bCB7IFxyXG4gICAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gICAgfVxyXG5cclxuICAgICYgPiB1bCA+IGxpIHsgXHJcbiAgICAgIG1hcmdpbi10b3A6MjBweDsgXHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyOyBcclxuICAgIH1cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9
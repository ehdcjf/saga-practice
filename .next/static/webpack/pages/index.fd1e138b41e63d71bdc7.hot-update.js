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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 46
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 27
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 12
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccordionMenu, {
    flag: visible,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvcmRpb24uanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiQWNjb3JkaW9uIiwidmlzaWJsZSIsIm1hcCIsInYiLCJBY2NvcmRpb25NZW51IiwiU3R5bGVkIiwicHJvcHMiLCJmbGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDQUMsSUFBRSxFQUFDLEdBREg7QUFFQUMsVUFBUSxFQUFDLFFBRlQ7QUFHQUMsS0FBRyxFQUFDO0FBSEosQ0FEVyxFQU1YO0FBQ0FGLElBQUUsRUFBQyxHQURIO0FBRUFDLFVBQVEsRUFBQyxRQUZUO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBTlcsRUFXWDtBQUNBRixJQUFFLEVBQUMsR0FESDtBQUVBQyxVQUFRLEVBQUMsUUFGVDtBQUdBQyxLQUFHLEVBQUM7QUFISixDQVhXLEVBZ0JYO0FBQ0FGLElBQUUsRUFBQyxHQURIO0FBRUFDLFVBQVEsRUFBQyxRQUZUO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBaEJXLEVBcUJYO0FBQ0FGLElBQUUsRUFBQyxHQURIO0FBRUFDLFVBQVEsRUFBQyxRQUZUO0FBR0FDLEtBQUcsRUFBQztBQUhKLENBckJXLENBQWI7O0FBOEJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBYTtBQUU3QixNQUFNSCxRQUFRLEdBQUdGLElBQUksQ0FBQ00sR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSztBQUM3Qix3QkFBTztBQUFBLDZCQUFlLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFQSxDQUFDLENBQUNKLEdBQWQ7QUFBQSwrQkFBbUI7QUFBQSxvQkFBSUksQ0FBQyxDQUFDTDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmLE9BQVNLLENBQUMsQ0FBQ04sRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRCxHQUZnQixDQUFqQjtBQUlBLHNCQUNFLDhEQUFDLGFBQUQ7QUFBZSxRQUFJLEVBQUlJLE9BQXZCO0FBQUEsMkJBQ0U7QUFBQSxnQkFDR0g7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0FkRDs7S0FBTUUsUztBQWdCTiwrREFBZUEsU0FBZjtBQUdBLElBQU1JLGFBQWEsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsdU1BU0wsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsSUFBTixHQUFhLE9BQWIsR0FBdUIsTUFBbkM7QUFBQSxDQVRLLENBQW5CO01BQU1ILGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQxZTEzOGI0MWU2M2Q3MWJkYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbWVudSA9IFtcclxuICB7IFxyXG4gIGlkOicxJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDEnLFxyXG4gIHVybDonL3Bvc3RzLzEnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOicyJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gIHVybDonL3Bvc3RzLzInXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOiczJywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gIHVybDonL3Bvc3RzLzMnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOic0JywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDQnLFxyXG4gIHVybDonL3Bvc3RzLzQnXHJcbiAgfSxcclxuICB7IFxyXG4gIGlkOic1JywgXHJcbiAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gIHVybDonL3Bvc3RzLzUnXHJcbiAgfSxcclxuXVxyXG5cclxuXHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSAodmlzaWJsZSkgPT4geyBcclxuICBcclxuICBjb25zdCBjYXRlZ29yeSA9IG1lbnUubWFwKCh2KT0+eyBcclxuICAgIHJldHVybiA8bGkga2V5PXt2LmlkfT48TGluayBocmVmPXt2LnVybH0+PGE+e3YuY2F0ZWdvcnl9PC9hPjwvTGluaz48L2xpPlxyXG4gIH0pXHJcbiAgXHJcbiAgcmV0dXJuICggXHJcbiAgICA8QWNjb3JkaW9uTWVudSBmbGFnID0ge3Zpc2libGV9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgIDwvQWNjb3JkaW9uTWVudT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvblxyXG5cclxuXHJcbmNvbnN0IEFjY29yZGlvbk1lbnUgPSBTdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB0b3A6MTB2aDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIHBhZGRpbmc6IDd2aCAwO1xyXG5cclxuICAgIGRpc3BsYXk6JHsocHJvcHMpID0+IChwcm9wcy5mbGFnID8gXCJibG9ja1wiIDogXCJub25lXCIpfTtcclxuXHJcbiAgICAmID4gdWwgeyBcclxuICAgICAgZGlzcGxheTpmbGV4OyBcclxuICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICAgIH1cclxuXHJcbiAgICAmID4gdWwgPiBsaSB7IFxyXG4gICAgICBtYXJnaW4tdG9wOjIwcHg7IFxyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICB9XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==
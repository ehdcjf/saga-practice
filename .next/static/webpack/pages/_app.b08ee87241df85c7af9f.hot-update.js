self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
/* module decorator */ module = __webpack_require__.hmd(module);
im;



var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_0__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_1__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW0iLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1c2VyIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxPQUFPLEdBQUdDLHNEQUFlLENBQUM7QUFDOUJDLE9BQUssRUFBQyxpQkFBbUI7QUFBQSxRQUFsQkMsS0FBa0IsdUVBQVosRUFBWTtBQUFBLFFBQVRDLE1BQVM7O0FBQ3ZCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFO0FBQ0UsZUFBT0YsS0FBUDtBQUZKO0FBSUQsR0FONkI7QUFPOUJHLE1BQUksRUFBSkEsMENBUDhCO0FBT3pCQyxVQUFRLEVBQVJBLDhDQUFRQTtBQVBpQixDQUFELENBQS9CO0FBVUEsK0RBQWVQLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMDhlZTg3MjQxZGY4NWM3YWY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDooc3RhdGU9e30sYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLGNhdGVnb3J5LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=
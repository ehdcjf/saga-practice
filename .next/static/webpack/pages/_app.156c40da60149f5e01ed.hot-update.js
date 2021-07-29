self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_18_Desktop_next_login_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var configureStore = function configureStore() {
  var enhancer =  false ? 0 : redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools;
  var Store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, enhancer);
  return Store;
};

var wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(configureStore, {});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

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


/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : function () {
        if (arguments.length === 0) return undefined;
        if (typeof arguments[0] === 'object') return compose;
        return compose.apply(null, arguments);
      };

exports.devToolsEnhancer =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__
    : function () {
        return function (noop) {
          return noop;
        };
      };


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vaW5kZXguanMiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiU3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxHQUFHLFNBQ2hCQyxDQURnQixHQUVmQyx5RUFGRjtBQUdBLE1BQU1DLEtBQUssR0FBR0Msa0RBQVcsQ0FBQ0MsOENBQUQsRUFBU0wsUUFBVCxDQUF6QjtBQUVBLFNBQU9HLEtBQVA7QUFDRCxDQVBEOztBQVNBLElBQU1HLE9BQU8sR0FBR0MsaUVBQWEsQ0FBQ1IsY0FBRCxFQUFnQixFQUFoQixDQUE3QjtBQUVBLCtEQUFlTyxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJhOztBQUViLGNBQWMsNEVBQXdCOztBQUV0QyxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE1NmM0MGRhNjAxNDlmNWUwMWVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiXHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSdwcm9kdWN0aW9uJ1xyXG4gID9jb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgOiBjb21wb3NlV2l0aERldlRvb2xzXHJcbiAgY29uc3QgU3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLGVuaGFuY2VyKVxyXG5cclxuICByZXR1cm4gU3RvcmVcclxufVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse30pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyXHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbXBvc2UgPSByZXF1aXJlKCdyZWR1eCcpLmNvbXBvc2U7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2VXaXRoRGV2VG9vbHMgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHJldHVybiBjb21wb3NlO1xuICAgICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX19cbiAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9vcCkge1xuICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9O1xuICAgICAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
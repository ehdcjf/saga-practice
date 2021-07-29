self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ "./reducers/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var initialState = {
  user: {
    IsLogin: false
  },
  post: {},
  comment: {},
  category: {
    menu: [{
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
    }]
  }
};
var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: function index() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      default:
        return state;
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwibWVudSIsImlkIiwidXJsIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFDO0FBQ0hDLFdBQU8sRUFBQztBQURMLEdBRGM7QUFJbkJDLE1BQUksRUFBQyxFQUpjO0FBT25CQyxTQUFPLEVBQUMsRUFQVztBQVVuQkMsVUFBUSxFQUFDO0FBQ1BDLFFBQUksRUFBQyxDQUNIO0FBQ0FDLFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBREcsRUFNSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQU5HLEVBV0g7QUFDQUQsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FYRyxFQWdCSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQWhCRyxFQXFCSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQXJCRztBQURFO0FBVlUsQ0FBckI7QUEyQ0EsSUFBTUMsT0FBTyxHQUFHQyxzREFBZSxDQUFDO0FBQzlCQyxPQUFLLEVBQUMsaUJBQW1CO0FBQUEsUUFBbEJDLEtBQWtCLHVFQUFaLEVBQVk7QUFBQSxRQUFUQyxNQUFTOztBQUN2QixZQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDRTtBQUNFLGVBQU9GLEtBQVA7QUFGSjtBQUlEO0FBTjZCLENBQUQsQ0FBL0I7QUFTQSwrREFBZUgsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjlmMTk5MDU2MTQ2OWE4YmNlNzQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi8nXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgdXNlcjp7XHJcbiAgICBJc0xvZ2luOmZhbHNlLFxyXG4gIH0sXHJcbiAgcG9zdDp7XHJcblxyXG4gIH0sXHJcbiAgY29tbWVudDp7XHJcblxyXG4gIH0sXHJcbiAgY2F0ZWdvcnk6e1xyXG4gICAgbWVudTpbXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOicxJywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICAgICAgdXJsOicvcG9zdHMvMSdcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzInLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICBpZDonMycsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOic0JywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgICAgdXJsOicvcG9zdHMvNCdcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzUnLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDooc3RhdGU9e30sYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=
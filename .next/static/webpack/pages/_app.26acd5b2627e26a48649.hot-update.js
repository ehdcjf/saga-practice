self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
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
var reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwibWVudSIsImlkIiwidXJsIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBQztBQUNIQyxXQUFPLEVBQUM7QUFETCxHQURjO0FBSW5CQyxNQUFJLEVBQUMsRUFKYztBQU9uQkMsU0FBTyxFQUFDLEVBUFc7QUFVbkJDLFVBQVEsRUFBQztBQUNQQyxRQUFJLEVBQUMsQ0FDSDtBQUNBQyxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQURHLEVBTUg7QUFDQUQsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FORyxFQVdIO0FBQ0FELFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBWEcsRUFnQkg7QUFDQUQsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FoQkcsRUFxQkg7QUFDQUQsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FyQkc7QUFERTtBQVZVLENBQXJCO0FBMkNBLElBQU1DLE9BQU8sR0FBR0Msc0RBQWUsQ0FBQyxFQUFELENBQS9CO0FBSUEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNmFjZDViMjYyN2UyNmE0ODY0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIHVzZXI6e1xyXG4gICAgSXNMb2dpbjpmYWxzZSxcclxuICB9LFxyXG4gIHBvc3Q6e1xyXG5cclxuICB9LFxyXG4gIGNvbW1lbnQ6e1xyXG5cclxuICB9LFxyXG4gIGNhdGVnb3J5OntcclxuICAgIG1lbnU6W1xyXG4gICAgICB7IFxyXG4gICAgICBpZDonMScsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOicyJywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzMnLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICBpZDonNCcsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOic1JywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
var initialState = {
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
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

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


/***/ }),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL2luZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBQyxDQUNIO0FBQ0FDLE1BQUUsRUFBQyxHQURIO0FBRUFDLFlBQVEsRUFBQyxRQUZUO0FBR0FDLE9BQUcsRUFBQztBQUhKLEdBREcsRUFNSDtBQUNBRixNQUFFLEVBQUMsR0FESDtBQUVBQyxZQUFRLEVBQUMsUUFGVDtBQUdBQyxPQUFHLEVBQUM7QUFISixHQU5HLEVBV0g7QUFDQUYsTUFBRSxFQUFDLEdBREg7QUFFQUMsWUFBUSxFQUFDLFFBRlQ7QUFHQUMsT0FBRyxFQUFDO0FBSEosR0FYRyxFQWdCSDtBQUNBRixNQUFFLEVBQUMsR0FESDtBQUVBQyxZQUFRLEVBQUMsUUFGVDtBQUdBQyxPQUFHLEVBQUM7QUFISixHQWhCRyxFQXFCSDtBQUNBRixNQUFFLEVBQUMsR0FESDtBQUVBQyxZQUFRLEVBQUMsUUFGVDtBQUdBQyxPQUFHLEVBQUM7QUFISixHQXJCRztBQURjLENBQXJCOztBQThCQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUE2QjtBQUFBLE1BQTVCQyxLQUE0Qix1RUFBdEJOLFlBQXNCO0FBQUEsTUFBVE8sTUFBUzs7QUFDN0MsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0U7QUFDRSxhQUFPRixLQUFQO0FBRko7QUFJQyxDQUxEOztBQU9BLCtEQUFlRCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHSSxzREFBZSxDQUFDO0FBQzlCQyxPQUFLLEVBQUMsaUJBQW1CO0FBQUEsUUFBbEJKLEtBQWtCLHVFQUFaLEVBQVk7QUFBQSxRQUFUQyxNQUFTOztBQUN2QixZQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDRTtBQUNFLGVBQU9GLEtBQVA7QUFGSjtBQUlELEdBTjZCO0FBTzlCSyxNQUFJLEVBQUpBLDBDQVA4QjtBQU96QlIsVUFBUSxFQUFSQSw4Q0FBUUE7QUFQaUIsQ0FBRCxDQUEvQjtBQVVBLCtEQUFlRSxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTQyOTFmNWYyN2NkY2M4ZTc0MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbWVudTpbXHJcbiAgICB7IFxyXG4gICAgaWQ6JzEnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOicyJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MicsXHJcbiAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMycsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgdXJsOicvcG9zdHMvMydcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzQnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic1JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NScsXHJcbiAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgfSxcclxuICBdXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9Pntcclxuc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgZGVmYXVsdDpcclxuICAgIHJldHVybiBzdGF0ZVxyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcidcclxuaW1wb3J0IGNhdGVnb3J5IGZyb20gJy4vY2F0ZWdvcnknXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDooc3RhdGU9e30sYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfSxcclxuICB1c2VyLGNhdGVnb3J5LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=
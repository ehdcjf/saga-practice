self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
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


/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
/* harmony import */ var C_Users_KGA_18_Desktop_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_18_Desktop_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  IsLogin: false
};
var USER_LOGIN = 'USER_LOGIN';
var USER_LOGOUT = 'USER_LOGOUT';
var UserLoginAction = function UserLoginAction(data) {
  return {
    type: USER_LOGIN,
    data: data
  };
};
_c = UserLoginAction;
var UserLogoutAction = function UserLogoutAction() {
  return {
    type: USER_LOGOUT
  };
};
_c2 = UserLogoutAction;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          IsLogin: true
        })
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: _objectSpread(_objectSpread({}, state.user), {}, {
          IsLogin: false
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2;

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLogoutAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwibWVudSIsImlkIiwidXJsIiwicmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsIlVzZXJMb2dvdXRBY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUM7QUFDSEMsV0FBTyxFQUFDO0FBREwsR0FEYztBQUluQkMsTUFBSSxFQUFDLEVBSmM7QUFPbkJDLFNBQU8sRUFBQyxFQVBXO0FBVW5CQyxVQUFRLEVBQUM7QUFDUEMsUUFBSSxFQUFDLENBQ0g7QUFDQUMsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FERyxFQU1IO0FBQ0FELFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBTkcsRUFXSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQVhHLEVBZ0JIO0FBQ0FELFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBaEJHLEVBcUJIO0FBQ0FELFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBckJHO0FBREU7QUFWVSxDQUFyQjtBQTJDQSxJQUFNQyxPQUFPLEdBQUdDLHNEQUFlLENBQUM7QUFDOUJDLE9BQUssRUFBQyxpQkFBbUI7QUFBQSxRQUFsQkMsS0FBa0IsdUVBQVosRUFBWTtBQUFBLFFBQVRDLE1BQVM7O0FBQ3ZCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFO0FBQ0UsZUFBT0YsS0FBUDtBQUZKO0FBSUQ7QUFONkIsQ0FBRCxDQUEvQjtBQVNBLCtEQUFlSCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQSxJQUFNVCxZQUFZLEdBQUc7QUFDakJFLFNBQU8sRUFBQztBQURTLENBQXJCO0FBS0EsSUFBTWEsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQVU7QUFDdkMsU0FBTTtBQUNKSixRQUFJLEVBQUNDLFVBREQ7QUFFSkcsUUFBSSxFQUFKQTtBQUZJLEdBQU47QUFJRCxDQUxNO0tBQU1ELGU7QUFPTixJQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU87QUFDckMsU0FBTTtBQUNKTCxRQUFJLEVBQUNFO0FBREQsR0FBTjtBQUdELENBSk07TUFBTUcsZ0I7O0FBTWIsSUFBTVYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBNkI7QUFBQSxNQUE1QkcsS0FBNEIsdUVBQXRCWixZQUFzQjtBQUFBLE1BQVRhLE1BQVM7O0FBQzNDLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFLFNBQUtDLFVBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFWCxZQUFJLGtDQUNDVyxLQUFLLENBQUNYLElBRFA7QUFFRkMsaUJBQU8sRUFBQztBQUZOO0FBRk47O0FBT0YsU0FBS2MsV0FBTDtBQUNFLDZDQUNLSixLQURMO0FBRUVYLFlBQUksa0NBQ0NXLEtBQUssQ0FBQ1gsSUFEUDtBQUVGQyxpQkFBTyxFQUFDO0FBRk47QUFGTjs7QUFPRjtBQUNFLGFBQU9VLEtBQVA7QUFsQko7QUFvQkQsQ0FyQkQ7O0FBdUJBLCtEQUFlSCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGIxY2YyYTkwOWRiZDI3MDA4ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgdXNlcjp7XHJcbiAgICBJc0xvZ2luOmZhbHNlLFxyXG4gIH0sXHJcbiAgcG9zdDp7XHJcblxyXG4gIH0sXHJcbiAgY29tbWVudDp7XHJcblxyXG4gIH0sXHJcbiAgY2F0ZWdvcnk6e1xyXG4gICAgbWVudTpbXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOicxJywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQxJyxcclxuICAgICAgdXJsOicvcG9zdHMvMSdcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzInLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgICB1cmw6Jy9wb3N0cy8yJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICBpZDonMycsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MycsXHJcbiAgICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOic0JywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ0JyxcclxuICAgICAgdXJsOicvcG9zdHMvNCdcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzUnLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgICB1cmw6Jy9wb3N0cy81J1xyXG4gICAgICB9LFxyXG4gICAgXVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBpbmRleDooc3RhdGU9e30sYWN0aW9uKT0+e1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgICBJc0xvZ2luOmZhbHNlXHJcbn1cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOID0gJ1VTRVJfTE9HSU4nXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU4sXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCApID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICBjYXNlIFVTRVJfTE9HSU46IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuICAiXSwic291cmNlUm9vdCI6IiJ9
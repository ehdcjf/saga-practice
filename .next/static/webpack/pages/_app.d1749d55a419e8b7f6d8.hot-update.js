self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLOGOUT_ACTION": function() { return /* binding */ UserLOGOUT_ACTION; }
/* harmony export */ });
/* harmony import */ var C_Users_KGA_18_Desktop_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_18_Desktop_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  user: {
    IsLogin: false
  },
  post: {},
  comment: {},
  category: {}
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
var UserLOGOUT_ACTION = function UserLOGOUT_ACTION() {
  return {
    type: USER_LOGOUT
  };
};
_c2 = UserLOGOUT_ACTION;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOGIN:
      console.log('xxxxxxxx');
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
$RefreshReg$(_c2, "UserLOGOUT_ACTION");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJVc2VyTE9HT1VUX0FDVElPTiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBQztBQUNIQyxXQUFPLEVBQUM7QUFETCxHQURjO0FBSW5CQyxNQUFJLEVBQUMsRUFKYztBQU9uQkMsU0FBTyxFQUFDLEVBUFc7QUFVbkJDLFVBQVEsRUFBQztBQVZVLENBQXJCO0FBZUEsSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQVU7QUFDdkMsU0FBTTtBQUNKQyxRQUFJLEVBQUNKLFVBREQ7QUFFSkcsUUFBSSxFQUFKQTtBQUZJLEdBQU47QUFJRCxDQUxNO0tBQU1ELGU7QUFPTixJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU87QUFDdEMsU0FBTTtBQUNKRCxRQUFJLEVBQUNIO0FBREQsR0FBTjtBQUdELENBSk07TUFBTUksaUI7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBOEI7QUFBQSxNQUE3QkMsS0FBNkIsdUVBQXZCYixZQUF1QjtBQUFBLE1BQVZjLE1BQVU7O0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNFLFNBQUtKLFVBQUw7QUFDQVMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNFLDZDQUNLSCxLQURMO0FBRUVaLFlBQUksa0NBQ0NZLEtBQUssQ0FBQ1osSUFEUDtBQUVGQyxpQkFBTyxFQUFDO0FBRk47QUFGTjs7QUFPRixTQUFLSyxXQUFMO0FBQ0UsNkNBQ0tNLEtBREw7QUFFRVosWUFBSSxrQ0FDQ1ksS0FBSyxDQUFDWixJQURQO0FBRUZDLGlCQUFPLEVBQUM7QUFGTjtBQUZOOztBQU9GO0FBQ0UsYUFBT1csS0FBUDtBQW5CSjtBQXVCRCxDQXhCRDs7QUEwQkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMTc0OWQ1NWE0MTllOGI3ZjZkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICB1c2VyOntcclxuICAgIElzTG9naW46ZmFsc2UsXHJcbiAgfSxcclxuICBwb3N0OntcclxuXHJcbiAgfSxcclxuICBjb21tZW50OntcclxuXHJcbiAgfSxcclxuICBjYXRlZ29yeTp7XHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVVNFUl9MT0dJTiA9ICdVU0VSX0xPR0lOJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4geyBcclxuICByZXR1cm57IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOLFxyXG4gICAgZGF0YSwgXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxPR09VVF9BQ1RJT04gPSAoICkgPT4geyBcclxuICByZXR1cm57IFxyXG4gICAgdHlwZTpVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbikgPT57IFxyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gICAgY2FzZSBVU0VSX0xPR0lOOiBcclxuICAgIGNvbnNvbGUubG9nKCd4eHh4eHh4eCcpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjp7XHJcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgSXNMb2dpbjpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTsgXHJcbiAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=
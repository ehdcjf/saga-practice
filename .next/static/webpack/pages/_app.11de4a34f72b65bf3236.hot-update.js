self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; },
/* harmony export */   "USER_LOGOUT_ACTION": function() { return /* binding */ USER_LOGOUT_ACTION; }
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
var User = function User(data) {
  return {
    type: USER_LOGIN,
    data: data
  };
};
_c = User;
var USER_LOGOUT_ACTION = function USER_LOGOUT_ACTION() {
  return {
    type: USER_LOGOUT
  };
};
_c2 = USER_LOGOUT_ACTION;

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

$RefreshReg$(_c, "User");
$RefreshReg$(_c2, "USER_LOGOUT_ACTION");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlciIsImRhdGEiLCJ0eXBlIiwiVVNFUl9MT0dPVVRfQUNUSU9OIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFDO0FBQ0hDLFdBQU8sRUFBQztBQURMLEdBRGM7QUFJbkJDLE1BQUksRUFBQyxFQUpjO0FBT25CQyxTQUFPLEVBQUMsRUFQVztBQVVuQkMsVUFBUSxFQUFDO0FBVlUsQ0FBckI7QUFlQSxJQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxJQUFELEVBQVU7QUFDNUIsU0FBTTtBQUNKQyxRQUFJLEVBQUNKLFVBREQ7QUFFSkcsUUFBSSxFQUFKQTtBQUZJLEdBQU47QUFJRCxDQUxNO0tBQU1ELEk7QUFPTixJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU87QUFDdkMsU0FBTTtBQUNKRCxRQUFJLEVBQUNIO0FBREQsR0FBTjtBQUdELENBSk07TUFBTUksa0I7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBOEI7QUFBQSxNQUE3QkMsS0FBNkIsdUVBQXZCYixZQUF1QjtBQUFBLE1BQVZjLE1BQVU7O0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNFLFNBQUtKLFVBQUw7QUFDQVMsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNFLDZDQUNLSCxLQURMO0FBRUVaLFlBQUksa0NBQ0NZLEtBQUssQ0FBQ1osSUFEUDtBQUVGQyxpQkFBTyxFQUFDO0FBRk47QUFGTjs7QUFPRixTQUFLSyxXQUFMO0FBQ0UsNkNBQ0tNLEtBREw7QUFFRVosWUFBSSxrQ0FDQ1ksS0FBSyxDQUFDWixJQURQO0FBRUZDLGlCQUFPLEVBQUM7QUFGTjtBQUZOOztBQU9GO0FBQ0UsYUFBT1csS0FBUDtBQW5CSjtBQXVCRCxDQXhCRDs7QUEwQkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMWRlNGEzNGY3MmI2NWJmMzIzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICB1c2VyOntcclxuICAgIElzTG9naW46ZmFsc2UsXHJcbiAgfSxcclxuICBwb3N0OntcclxuXHJcbiAgfSxcclxuICBjb21tZW50OntcclxuXHJcbiAgfSxcclxuICBjYXRlZ29yeTp7XHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgVVNFUl9MT0dJTiA9ICdVU0VSX0xPR0lOJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyID0gKGRhdGEpID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTixcclxuICAgIGRhdGEsIFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVTRVJfTE9HT1VUX0FDVElPTiA9ICggKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKSA9PnsgXHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICBjYXNlIFVTRVJfTE9HSU46IFxyXG4gICAgY29uc29sZS5sb2coJ3h4eHh4eHh4JylcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOntcclxuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyOntcclxuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlOyBcclxuICBcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==
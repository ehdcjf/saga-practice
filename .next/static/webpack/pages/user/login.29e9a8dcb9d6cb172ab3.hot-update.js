self["webpackHotUpdate_N_E"]("pages/user/login",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLoginRequest": function() { return /* binding */ UserLoginRequest; },
/* harmony export */   "UserLoginSuccess": function() { return /* binding */ UserLoginSuccess; },
/* harmony export */   "UserLoginError": function() { return /* binding */ UserLoginError; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
/* harmony import */ var C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  loadding: false,
  IsLogin: false
};
var USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
var USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
var USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
var USER_LOGOUT = 'USER_LOGOUT';
var UserLoginAction = function UserLoginAction(data) {
  return /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {
      var response, result;
      return C_Users_KGA_18_Desktop_redux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch(UserLoginRequest());
              _context.prev = 1;
              _context.next = 4;
              return fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                  "Content-type": "application/json"
                },
                body: JSON.stringify(_objectSpread({}, data))
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              console.log(result);
              result.result === 'OK' ? dispatch(UserLoginSuccess(result)) : dispatch(UserLoginError());
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              dispatch(UserLoginError());

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
_c = UserLoginAction;
var UserLoginRequest = function UserLoginRequest(data) {
  return {
    type: USER_LOGIN_REQUEST,
    loadding: true
  };
};
_c2 = UserLoginRequest;
var UserLoginSuccess = function UserLoginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS,
    loadding: false
  };
};
_c3 = UserLoginSuccess;
var UserLoginError = function UserLoginError() {
  return {
    type: USER_LOGIN_ERROR,
    loadding: false
  };
};
_c4 = UserLoginError;
var UserLogoutAction = function UserLogoutAction() {
  return {
    type: USER_LOGOUT
  };
};
_c5 = UserLogoutAction;

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: fals
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
      });

    case USER_LOGIN_ERROR:
      return _objectSpread({}, state);

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLoginRequest");
$RefreshReg$(_c3, "UserLoginSuccess");
$RefreshReg$(_c4, "UserLoginError");
$RefreshReg$(_c5, "UserLogoutAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJVc2VyTG9naW5SZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJmYWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFVBQVEsRUFBQyxLQURVO0FBRW5CQyxTQUFPLEVBQUM7QUFGVyxDQUFyQjtBQU9BLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVPLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3ZDO0FBQUEsMlFBQU8saUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xBLHNCQUFRLENBQUNDLGdCQUFnQixFQUFqQixDQUFSO0FBREs7QUFBQTtBQUFBLHFCQUdvQkMsS0FBSyxDQUFDLGlDQUFELEVBQW1DO0FBQzdEQyxzQkFBTSxFQUFDLE1BRHNEO0FBRTdEQyx1QkFBTyxFQUFDO0FBQ04sa0NBQWU7QUFEVCxpQkFGcUQ7QUFLN0RDLG9CQUFJLEVBQUNDLElBQUksQ0FBQ0MsU0FBTCxtQkFDQVIsSUFEQTtBQUx3RCxlQUFuQyxDQUh6Qjs7QUFBQTtBQUdHUyxzQkFISDtBQUFBO0FBQUEscUJBWWtCQSxRQUFRLENBQUNDLElBQVQsRUFabEI7O0FBQUE7QUFZR0Msb0JBWkg7QUFhSEMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FBLG9CQUFNLENBQUNBLE1BQVAsS0FBaUIsSUFBakIsR0FDRVYsUUFBUSxDQUFDYSxnQkFBZ0IsQ0FBQ0gsTUFBRCxDQUFqQixDQURWLEdBRUVWLFFBQVEsQ0FBQ2MsY0FBYyxFQUFmLENBRlY7QUFkRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCSGQsc0JBQVEsQ0FBQ2MsY0FBYyxFQUFmLENBQVI7O0FBbEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkQsQ0F0Qk07S0FBTWhCLGU7QUF3Qk4sSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDRixJQUFELEVBQVM7QUFDdkMsU0FBTztBQUNMZ0IsUUFBSSxFQUFDckIsa0JBREE7QUFFTEYsWUFBUSxFQUFDO0FBRkosR0FBUDtBQUlELENBTE07TUFBTVMsZ0I7QUFNTixJQUFNWSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUs7QUFDbkMsU0FBTztBQUNMRSxRQUFJLEVBQUNwQixrQkFEQTtBQUVMSCxZQUFRLEVBQUM7QUFGSixHQUFQO0FBSUQsQ0FMTTtNQUFNcUIsZ0I7QUFNTixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDakMsU0FBTztBQUNMQyxRQUFJLEVBQUNuQixnQkFEQTtBQUVMSixZQUFRLEVBQUM7QUFGSixHQUFQO0FBSUQsQ0FMTTtNQUFNc0IsYztBQVFOLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTztBQUNyQyxTQUFNO0FBQ0pELFFBQUksRUFBQ2xCO0FBREQsR0FBTjtBQUdELENBSk07TUFBTW1CLGdCOztBQU1iLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUF0QjNCLFlBQXNCO0FBQUEsTUFBVDRCLE1BQVM7O0FBQzNDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUVFLFNBQUtyQixrQkFBTDtBQUNFLDZDQUNLd0IsS0FETDtBQUVFMUIsZ0JBQVEsRUFBQzRCO0FBRlg7O0FBSUYsU0FBS3pCLGtCQUFMO0FBQ0UsNkNBQ0t1QixLQURMO0FBRUl6QixlQUFPLEVBQUM7QUFGWjs7QUFJRixTQUFLRyxnQkFBTDtBQUNFLCtCQUNLc0IsS0FETDs7QUFHRixTQUFLckIsV0FBTDtBQUNFLDZDQUNLcUIsS0FETDtBQUVJekIsZUFBTyxFQUFDO0FBRlo7O0FBSUY7QUFDRSxhQUFPeUIsS0FBUDtBQXRCSjtBQXdCRCxDQXpCRDs7QUEyQkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9sb2dpbi4yOWU5YThkY2I5ZDZjYjE3MmFiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBsb2FkZGluZzpmYWxzZSwgXHJcbiAgSXNMb2dpbjpmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHsgXHJcbiAgcmV0dXJuIGFzeW5jKGRpc3BhdGNoKSA9PiB7IFxyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTsgXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIiwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICByZXN1bHQucmVzdWx0ID09PSdPSycgXHJcbiAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luU3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9Y2F0Y2goZSl7IFxyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoZGF0YSkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX1JFUVVFU1QsXHJcbiAgICBsb2FkZGluZzp0cnVlLCBcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblN1Y2Nlc3MgPSAoKSA9PnsgXHJcbiAgcmV0dXJuIHsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuICAgIGxvYWRkaW5nOmZhbHNlLCBcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SLFxyXG4gICAgbG9hZGRpbmc6ZmFsc2UsIFxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCApID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcblxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRkaW5nOmZhbHNcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fRVJST1I6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HT1VUOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIElzTG9naW46ZmFsc2UsXHJcbiAgICAgIH0gXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcclxuICAiXSwic291cmNlUm9vdCI6IiJ9
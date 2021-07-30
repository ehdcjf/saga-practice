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
              result;
              dispatch(UserLoginSuccess(result));
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
var UserLoginRequest = function UserLoginRequest() {
  return {
    type: USER_LOGIN_REQUEST
  };
};
_c2 = UserLoginRequest;
var UserLoginSuccess = function UserLoginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
_c3 = UserLoginSuccess;
var UserLoginError = function UserLoginError() {
  return {
    type: USER_LOGIN_ERROR
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
      return _objectSpread({}, state);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJVc2VyTG9naW5SZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJVc2VyTG9naW5TdWNjZXNzIiwiVXNlckxvZ2luRXJyb3IiLCJ0eXBlIiwiVXNlckxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxVQUFRLEVBQUMsS0FEVTtBQUVuQkMsU0FBTyxFQUFDO0FBRlcsQ0FBckI7QUFPQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFTyxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBVTtBQUN2QztBQUFBLDJRQUFPLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNMQSxzQkFBUSxDQUFDQyxnQkFBZ0IsRUFBakIsQ0FBUjtBQURLO0FBQUE7QUFBQSxxQkFHb0JDLEtBQUssQ0FBQyxpQ0FBRCxFQUFtQztBQUM3REMsc0JBQU0sRUFBQyxNQURzRDtBQUU3REMsdUJBQU8sRUFBQztBQUNOLGtDQUFlO0FBRFQsaUJBRnFEO0FBSzdEQyxvQkFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsbUJBQ0FSLElBREE7QUFMd0QsZUFBbkMsQ0FIekI7O0FBQUE7QUFHR1Msc0JBSEg7QUFBQTtBQUFBLHFCQVlrQkEsUUFBUSxDQUFDQyxJQUFULEVBWmxCOztBQUFBO0FBWUdDLG9CQVpIO0FBYUhBLG9CQUFNO0FBQ05WLHNCQUFRLENBQUNXLGdCQUFnQixDQUFDRCxNQUFELENBQWpCLENBQVI7QUFkRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCSFYsc0JBQVEsQ0FBQ1ksY0FBYyxFQUFmLENBQVI7O0FBaEJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkQsQ0FwQk07S0FBTWQsZTtBQXNCTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUs7QUFDbkMsU0FBTztBQUNMWSxRQUFJLEVBQUNuQjtBQURBLEdBQVA7QUFHRCxDQUpNO01BQU1PLGdCO0FBS04sSUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFLO0FBQ25DLFNBQU87QUFDTEUsUUFBSSxFQUFDbEI7QUFEQSxHQUFQO0FBR0QsQ0FKTTtNQUFNZ0IsZ0I7QUFLTixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDakMsU0FBTztBQUNMQyxRQUFJLEVBQUNqQjtBQURBLEdBQVA7QUFHRCxDQUpNO01BQU1nQixjO0FBT04sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFPO0FBQ3JDLFNBQU07QUFDSkQsUUFBSSxFQUFDaEI7QUFERCxHQUFOO0FBR0QsQ0FKTTtNQUFNaUIsZ0I7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXRCekIsWUFBc0I7QUFBQSxNQUFUMEIsTUFBUzs7QUFDM0MsVUFBT0EsTUFBTSxDQUFDSixJQUFkO0FBRUUsU0FBS25CLGtCQUFMO0FBQ0UsK0JBQ0tzQixLQURMOztBQUdGLFNBQUtyQixrQkFBTDtBQUNFLDZDQUNLcUIsS0FETDtBQUVJdkIsZUFBTyxFQUFDO0FBRlo7O0FBSUYsU0FBS0csZ0JBQUw7QUFDRSwrQkFDS29CLEtBREw7O0FBR0YsU0FBS25CLFdBQUw7QUFDRSw2Q0FDS21CLEtBREw7QUFFSXZCLGVBQU8sRUFBQztBQUZaOztBQUlGO0FBQ0UsYUFBT3VCLEtBQVA7QUFyQko7QUF1QkQsQ0F4QkQ7O0FBMEJBLCtEQUFlRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvbG9naW4uOGM5MzQ4YTQxMTNjZDAxY2VhOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbG9hZGRpbmc6ZmFsc2UsIFxyXG4gIElzTG9naW46ZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4geyBcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7IFxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIHJlc3VsdFxyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5TdWNjZXNzKHJlc3VsdCkpXHJcbiAgICB9Y2F0Y2goZSl7IFxyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoKSA9PnsgXHJcbiAgcmV0dXJuIHsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU5fUkVRVUVTVFxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9FUlJPUlxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCApID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcblxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgSXNMb2dpbjpmYWxzZSxcclxuICAgICAgfSBcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=
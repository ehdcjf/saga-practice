self["webpackHotUpdate_N_E"]("pages/_app",{

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
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJVc2VyTG9naW5SZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiVXNlckxvZ2luU3VjY2VzcyIsIlVzZXJMb2dpbkVycm9yIiwidHlwZSIsIlVzZXJMb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsVUFBUSxFQUFDLEtBRFU7QUFFbkJDLFNBQU8sRUFBQztBQUZXLENBQXJCO0FBT0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQVU7QUFDdkM7QUFBQSwyUUFBTyxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTEEsc0JBQVEsQ0FBQ0MsZ0JBQWdCLEVBQWpCLENBQVI7QUFESztBQUFBO0FBQUEscUJBR29CQyxLQUFLLENBQUMsaUNBQUQsRUFBbUM7QUFDN0RDLHNCQUFNLEVBQUMsTUFEc0Q7QUFFN0RDLHVCQUFPLEVBQUM7QUFDTixrQ0FBZTtBQURULGlCQUZxRDtBQUs3REMsb0JBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLG1CQUNBUixJQURBO0FBTHdELGVBQW5DLENBSHpCOztBQUFBO0FBR0dTLHNCQUhIO0FBQUE7QUFBQSxxQkFZa0JBLFFBQVEsQ0FBQ0MsSUFBVCxFQVpsQjs7QUFBQTtBQVlHQyxvQkFaSDtBQWFIQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQUEsb0JBQU0sQ0FBQ0EsTUFBUCxLQUFpQixJQUFqQixHQUNFVixRQUFRLENBQUNhLGdCQUFnQixDQUFDSCxNQUFELENBQWpCLENBRFYsR0FFRVYsUUFBUSxDQUFDYyxjQUFjLEVBQWYsQ0FGVjtBQWRHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBa0JIZCxzQkFBUSxDQUFDYyxjQUFjLEVBQWYsQ0FBUjs7QUFsQkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCRCxDQXRCTTtLQUFNaEIsZTtBQXdCTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNGLElBQUQsRUFBUztBQUN2QyxTQUFPO0FBQ0xnQixRQUFJLEVBQUNyQjtBQURBLEdBQVA7QUFJRCxDQUxNO01BQU1PLGdCO0FBTU4sSUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFLO0FBQ25DLFNBQU87QUFDTEUsUUFBSSxFQUFDcEI7QUFEQSxHQUFQO0FBSUQsQ0FMTTtNQUFNa0IsZ0I7QUFNTixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDakMsU0FBTztBQUNMQyxRQUFJLEVBQUNuQjtBQURBLEdBQVA7QUFJRCxDQUxNO01BQU1rQixjO0FBUU4sSUFBTUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFPO0FBQ3JDLFNBQU07QUFDSkQsUUFBSSxFQUFDbEI7QUFERCxHQUFOO0FBR0QsQ0FKTTtNQUFNbUIsZ0I7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBNkI7QUFBQSxNQUE1QkMsS0FBNEIsdUVBQXRCM0IsWUFBc0I7QUFBQSxNQUFUNEIsTUFBUzs7QUFDM0MsVUFBT0EsTUFBTSxDQUFDSixJQUFkO0FBRUUsU0FBS3JCLGtCQUFMO0FBQ0UsNkNBQ0t3QixLQURMO0FBRUUxQixnQkFBUSxFQUFDO0FBRlg7O0FBS0YsU0FBS0csa0JBQUw7QUFDRSw2Q0FDS3VCLEtBREw7QUFFSXpCLGVBQU8sRUFBQyxJQUZaO0FBR0lELGdCQUFRLEVBQUM7QUFIYjs7QUFLRixTQUFLSSxnQkFBTDtBQUNFLDZDQUNLc0IsS0FETDtBQUVFMUIsZ0JBQVEsRUFBQztBQUZYOztBQUlGLFNBQUtLLFdBQUw7QUFDRSw2Q0FDS3FCLEtBREw7QUFFSXpCLGVBQU8sRUFBQztBQUZaOztBQUlGO0FBQ0UsYUFBT3lCLEtBQVA7QUF6Qko7QUEyQkQsQ0E1QkQ7O0FBOEJBLCtEQUFlRCxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjkwYjYxZjNhYjkwNjU5YzYwYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbG9hZGRpbmc6ZmFsc2UsIFxyXG4gIElzTG9naW46ZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4geyBcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7IFxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgcmVzdWx0LnJlc3VsdCA9PT0nT0snIFxyXG4gICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgOiBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfWNhdGNoKGUpeyBcclxuICAgICAgZGlzcGF0Y2goVXNlckxvZ2luRXJyb3IoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5SZXF1ZXN0ID0gKGRhdGEpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNULFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblN1Y2Nlc3MgPSAoKSA9PnsgXHJcbiAgcmV0dXJuIHsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU5fU1VDQ0VTUyxcclxuXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5FcnJvciA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9FUlJPUixcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoICkgPT4geyBcclxuICByZXR1cm57IFxyXG4gICAgdHlwZTpVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6dHJ1ZSxcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1NVQ0NFU1M6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG4gICAgICAgICAgbG9hZGRpbmc6ZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
(function() {
var exports = {};
exports.id = "pages/user/logout";
exports.ids = ["pages/user/logout"];
exports.modules = {

/***/ "./pages/user/logout.jsx":
/*!*******************************!*\
  !*** ./pages/user/logout.jsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");







const Logout = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.UserLogoutAction)());
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout"
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLoginRequest": function() { return /* binding */ UserLoginRequest; },
/* harmony export */   "UserLoginSuccess": function() { return /* binding */ UserLoginSuccess; },
/* harmony export */   "UserLoginError": function() { return /* binding */ UserLoginError; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false
};
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';
const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLoginRequest());

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(_objectSpread({}, data))
      });
      const result = await response.json();
      dispatch(UserLoginSuccess(result));
    } catch (e) {
      dispatch(UserLoginError());
    }
  };
};
const UserLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};
const UserLoginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
const UserLoginError = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
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

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL3VzZXIvbG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dvdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiVXNlckxvZ291dEFjdGlvbiIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJsb2FkZGluZyIsIklzTG9naW4iLCJVU0VSX0xPR0lOX1JFUVVFU1QiLCJVU0VSX0xPR0lOX1NVQ0NFU1MiLCJVU0VSX0xPR0lOX0VSUk9SIiwiVVNFUl9MT0dPVVQiLCJVc2VyTG9naW5BY3Rpb24iLCJkYXRhIiwiVXNlckxvZ2luUmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiVXNlckxvZ2luU3VjY2VzcyIsImUiLCJVc2VyTG9naW5FcnJvciIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRLENBQUNHLGdFQUFnQixFQUFqQixDQUFSO0FBQ0FDLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZDLDZEQUFBO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFBTztBQUFBO0FBQUEsbUJBQVA7QUFDRCxDQVhEOztBQWFBLCtEQUFlTixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsTUFBTU8sWUFBWSxHQUFHO0FBQ25CQyxVQUFRLEVBQUMsS0FEVTtBQUVuQkMsU0FBTyxFQUFDO0FBRlcsQ0FBckI7QUFPQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFFTyxNQUFNQyxlQUFlLEdBQUlDLElBQUQsSUFBVTtBQUN2QyxTQUFPLE1BQU1kLFFBQU4sSUFBbUI7QUFDeEJBLFlBQVEsQ0FBQ2UsZ0JBQWdCLEVBQWpCLENBQVI7O0FBQ0EsUUFBRztBQUNELFlBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUMsaUNBQUQsRUFBbUM7QUFDN0RDLGNBQU0sRUFBQyxNQURzRDtBQUU3REMsZUFBTyxFQUFDO0FBQ04sMEJBQWU7QUFEVCxTQUZxRDtBQUs3REMsWUFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsbUJBQ0FSLElBREE7QUFMd0QsT0FBbkMsQ0FBNUI7QUFTQSxZQUFNUyxNQUFNLEdBQUcsTUFBTVAsUUFBUSxDQUFDUSxJQUFULEVBQXJCO0FBQ0F4QixjQUFRLENBQUN5QixnQkFBZ0IsQ0FBQ0YsTUFBRCxDQUFqQixDQUFSO0FBQ0QsS0FaRCxDQVlDLE9BQU1HLENBQU4sRUFBUTtBQUNQMUIsY0FBUSxDQUFDMkIsY0FBYyxFQUFmLENBQVI7QUFDRDtBQUNGLEdBakJEO0FBa0JELENBbkJNO0FBcUJBLE1BQU1aLGdCQUFnQixHQUFHLE1BQUs7QUFDbkMsU0FBTztBQUNMYSxRQUFJLEVBQUNuQjtBQURBLEdBQVA7QUFHRCxDQUpNO0FBS0EsTUFBTWdCLGdCQUFnQixHQUFHLE1BQUs7QUFDbkMsU0FBTztBQUNMRyxRQUFJLEVBQUNsQjtBQURBLEdBQVA7QUFHRCxDQUpNO0FBS0EsTUFBTWlCLGNBQWMsR0FBRyxNQUFLO0FBQ2pDLFNBQU87QUFDTEMsUUFBSSxFQUFDakI7QUFEQSxHQUFQO0FBR0QsQ0FKTTtBQU9BLE1BQU1SLGdCQUFnQixHQUFHLE1BQU87QUFDckMsU0FBTTtBQUNKeUIsUUFBSSxFQUFDaEI7QUFERCxHQUFOO0FBR0QsQ0FKTTs7QUFNUCxNQUFNaUIsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBQ3hCLFlBQVAsRUFBb0J5QixNQUFwQixLQUE2QjtBQUMzQyxVQUFPQSxNQUFNLENBQUNILElBQWQ7QUFFRSxTQUFLbkIsa0JBQUw7QUFDRSwrQkFDS3FCLEtBREw7O0FBR0YsU0FBS3BCLGtCQUFMO0FBQ0UsNkNBQ0tvQixLQURMO0FBRUl0QixlQUFPLEVBQUM7QUFGWjs7QUFJRixTQUFLRyxnQkFBTDtBQUNFLCtCQUNLbUIsS0FETDs7QUFHRixTQUFLbEIsV0FBTDtBQUNFLDZDQUNLa0IsS0FETDtBQUVJdEIsZUFBTyxFQUFDO0FBRlo7O0FBSUY7QUFDRSxhQUFPc0IsS0FBUDtBQXJCSjtBQXVCRCxDQXhCRDs7QUEwQkEsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7QUNsRkEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdXNlci9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAgUm91dGVyICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckxvZ291dEFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBMb2dvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dvdXRBY3Rpb24oKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPD5sb2dvdXQ8Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgbG9hZGRpbmc6ZmFsc2UsIFxyXG4gIElzTG9naW46ZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOX1JFUVVFU1QgPSAnVVNFUl9MT0dJTl9SRVFVRVNUJ1xyXG5jb25zdCBVU0VSX0xPR0lOX1NVQ0NFU1MgPSAnVVNFUl9MT0dJTl9TVUNDRVNTJ1xyXG5jb25zdCBVU0VSX0xPR0lOX0VSUk9SID0gJ1VTRVJfTE9HSU5fRVJST1InXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybiBhc3luYyhkaXNwYXRjaCkgPT4geyBcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7IFxyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2xvZ2luJyx7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MocmVzdWx0KSlcclxuICAgIH1jYXRjaChlKXsgXHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luUmVxdWVzdCA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9SRVFVRVNUXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdWNjZXNzID0gKCkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX1NVQ0NFU1NcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dvdXRBY3Rpb24gPSAoICkgPT4geyBcclxuICByZXR1cm57IFxyXG4gICAgdHlwZTpVU0VSX0xPR09VVCxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuXHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fUkVRVUVTVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9TVUNDRVNTOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
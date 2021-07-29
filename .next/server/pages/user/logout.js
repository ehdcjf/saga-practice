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
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  IsLogin: false
};
const USER_LOGIN = 'USER_LOGIN';
const USER_LOGOUT = 'USER_LOGOUT';
const UserLoginAction = data => {
  return {
    type: USER_LOGIN,
    data
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL3VzZXIvbG9nb3V0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMb2dvdXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwiVXNlckxvZ291dEFjdGlvbiIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJpbml0aWFsU3RhdGUiLCJJc0xvZ2luIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRLENBQUNHLGdFQUFnQixFQUFqQixDQUFSO0FBQ0FDLGNBQVUsQ0FBQyxNQUFNO0FBQ2ZDLDZEQUFBO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFBTztBQUFBO0FBQUEsbUJBQVA7QUFDRCxDQVhEOztBQWFBLCtEQUFlTixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsTUFBTU8sWUFBWSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUM7QUFEUyxDQUFyQjtBQUtBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVPLE1BQU1DLGVBQWUsR0FBSUMsSUFBRCxJQUFVO0FBQ3ZDLFNBQU07QUFDSkMsUUFBSSxFQUFDSixVQUREO0FBRUpHO0FBRkksR0FBTjtBQUlELENBTE07QUFPQSxNQUFNUixnQkFBZ0IsR0FBRyxNQUFPO0FBQ3JDLFNBQU07QUFDSlMsUUFBSSxFQUFDSDtBQURELEdBQU47QUFHRCxDQUpNOztBQU1QLE1BQU1JLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUNSLFlBQVAsRUFBb0JTLE1BQXBCLEtBQTZCO0FBQzNDLFVBQU9BLE1BQU0sQ0FBQ0gsSUFBZDtBQUNFLFNBQUtKLFVBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVJUCxlQUFPLEVBQUM7QUFGWjs7QUFLRixTQUFLRSxXQUFMO0FBQ0UsNkNBQ0tLLEtBREw7QUFFSVAsZUFBTyxFQUFDO0FBRlo7O0FBSUY7QUFDRSxhQUFPTyxLQUFQO0FBYko7QUFlRCxDQWhCRDs7QUFrQkEsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7QUN2Q0EseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvdXNlci9sb2dvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAgUm91dGVyICBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgVXNlckxvZ291dEFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBMb2dvdXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpOyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dvdXRBY3Rpb24oKSlcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBSb3V0ZXIuYmFjaygpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPD5sb2dvdXQ8Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XHJcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgXHJcbiAgICBJc0xvZ2luOmZhbHNlXHJcbn1cclxuXHJcblxyXG5jb25zdCBVU0VSX0xPR0lOID0gJ1VTRVJfTE9HSU4nXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU4sXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCApID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXsgXHJcbiAgICBjYXNlIFVTRVJfTE9HSU46IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgSXNMb2dpbjp0cnVlLFxyXG5cclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
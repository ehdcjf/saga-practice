(function() {
var exports = {};
exports.id = "pages/user/login";
exports.ids = ["pages/user/login"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\redux\\components\\FormLayout.jsx";
 // import styled from "./FormLayout.module.css";


const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormLayout__Background",
  componentId: "sc-f90v8c-0"
})(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:500px;background:#fff;padding:20px;}"]);

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().back(),
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./hooks/useInput.jsx":
/*!****************************!*\
  !*** ./hooks/useInput.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  const onChange = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setValue(value);
  };

  return {
    value,
    onChange
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./pages/user/login.jsx":
/*!******************************!*\
  !*** ./pages/user/login.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\redux\\pages\\user\\login.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Login = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const {
    loadding,
    IsLogin
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.user);
  const userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)("");
  const userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)("");

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      userid: userid.value,
      userpw: userpw.value
    };
    await dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_6__.UserLoginAction)(data)); // userid.value === "1234" && userpw.value === "1234"
    //   ? Router.push("/")
    //   : alert("아이디와 패스워드가 다릅니다.");
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    IsLogin === true ? next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/') : alert('아이디와 패스와드가 다릅니다.');
  }, [IsLogin]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uD328\uC2A4\uC6CC\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), loadding ? "로딩중" : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
      console.log(result);
      result.result === 'OK' ? dispatch(UserLoginSuccess(result)) : dispatch(UserLoginError());
    } catch (e) {
      dispatch(UserLoginError());
    }
  };
};
const UserLoginRequest = data => {
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
        loadding: false
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/login.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJMb2dpbiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJsb2FkZGluZyIsIklzTG9naW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJpZCIsInVzZXJwdyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIlVzZXJMb2dpbkFjdGlvbiIsInVzZUVmZmVjdCIsImFsZXJ0IiwiaW5pdGlhbFN0YXRlIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luUmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsInR5cGUiLCJVc2VyTG9nb3V0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUtBQWhCOztBQWdCQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbkMsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxVQUFEO0FBQUEsNkJBQ0U7QUFBQSxnQ0FDRTtBQUFHLGlCQUFPLEVBQUUsTUFBTUMsdURBQUEsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0QsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFVRCxDQVhEOztBQWFBLCtEQUFlRCxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBOztBQUVBLE1BQU1HLFFBQVEsR0FBSUMsWUFBRCxJQUFrQjtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUNILFlBQUQsQ0FBbEM7O0FBQ0EsUUFBTUksUUFBUSxHQUFJQyxDQUFELElBQU87QUFDdEIsVUFBTTtBQUFFSjtBQUFGLDBCQUFpQkksQ0FBQyxDQUFDQyxNQUFuQixDQUFOOztBQUNBSixZQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsU0FBTztBQUNMQSxTQURLO0FBRUxHO0FBRkssR0FBUDtBQUlELENBWEQ7O0FBY0EsK0RBQWVMLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7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REFBZStCLE9BQWYsRTs7Ozs7Ozs7Ozs7QUM1RkEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvdXNlci9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSBcIi4vRm9ybUxheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kID0gU3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDojZWVlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHJcbiAgICAmID4gZGl2IHtcclxuICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IEZvcm1MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCYWNrZ3JvdW5kPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfT7rkqTroZzqsIDquLA8L3A+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQmFja2dyb3VuZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IHVzZUlucHV0ID0gKGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB7IC4uLmUudGFyZ2V0IH07XHJcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHZhbHVlLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VJbnB1dCIsImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7bG9hZGRpbmcsSXNMb2dpbn0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKVxyXG5cclxuXHJcbiAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgdXNlcnB3ID0gdXNlSW5wdXQoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHVzZXJpZDp1c2VyaWQudmFsdWUsIFxyXG4gICAgICB1c2VycHc6dXNlcnB3LnZhbHVlXHJcbiAgICB9XHJcbiAgICAgYXdhaXQgZGlzcGF0Y2goVXNlckxvZ2luQWN0aW9uKGRhdGEpKVxyXG4gICAgICAgICAgXHJcbiAgICAvLyB1c2VyaWQudmFsdWUgPT09IFwiMTIzNFwiICYmIHVzZXJwdy52YWx1ZSA9PT0gXCIxMjM0XCJcclxuICAgIC8vICAgPyBSb3V0ZXIucHVzaChcIi9cIilcclxuICAgIC8vICAgOiBhbGVydChcIuyVhOydtOuUlOyZgCDtjKjsiqTsm4zrk5zqsIAg64uk66aF64uI64ukLlwiKTtcclxuXHJcbiAgICBcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIElzTG9naW4gPT09IHRydWUgXHJcbiAgICA/IFJvdXRlci5wdXNoKCcvJylcclxuICAgIDogYWxlcnQoJ+yVhOydtOuUlOyZgCDtjKjsiqTsmYDrk5zqsIAg64uk66aF64uI64ukLicpXHJcbiAgfSxbSXNMb2dpbl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgIDxoMj7roZzqt7jsnbg8L2gyPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB7Li4udXNlcnB3fVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2MqOyKpOybjOuTnOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtsb2FkZGluZz8gXCLroZzrlKnspJFcIiA6PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+66Gc6re47J24PC9idXR0b24+fSBcclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvRm9ybUxheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBsb2FkZGluZzpmYWxzZSwgXHJcbiAgSXNMb2dpbjpmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHsgXHJcbiAgcmV0dXJuIGFzeW5jKGRpc3BhdGNoKSA9PiB7IFxyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTsgXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIiwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICByZXN1bHQucmVzdWx0ID09PSdPSycgXHJcbiAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luU3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9Y2F0Y2goZSl7IFxyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoZGF0YSkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTLFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SLFxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICggKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
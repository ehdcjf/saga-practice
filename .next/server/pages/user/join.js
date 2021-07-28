(function() {
var exports = {};
exports.id = "pages/user/join";
exports.ids = ["pages/user/join"];
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


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\components\\FormLayout.jsx";
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

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\pages\\user\\join.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Join = () => {
  const userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)('');
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: passwordError,
    1: setPasswordError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  const handlePasswordCheck = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setPasswordError(userpw.value !== value);
    setPasswordCheck(value);
  };

  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: termError,
    1: setTermError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);

  const handleTerm = () => {
    setTermError(term === true);
    setTerm(!term);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userpw.value !== passwordCheck) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    if (!term) {
      setTermError(true);
      return;
    }

    console.log(userid.value);
    console.log(username.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: ["\uC544\uC544\uB514: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 75
        }, undefined), "\uC774\uB984: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, username), {}, {
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 75
        }, undefined), "\uBE44\uBC00\uBC88\uD638: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 81
        }, undefined), "\uBE44\uBC00\uBC88\uD638 \uD655\uC778: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          value: passwordCheck,
          onChange: handlePasswordCheck,
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 20
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 128
        }, undefined), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: 'red'
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: term,
          onChange: handleTerm,
          id: "term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "term",
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 52
        }, undefined), termError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: 'red'
          },
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

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
var __webpack_exports__ = (__webpack_exec__("./pages/user/join.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2pvaW4uanN4Iiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwidXNlSW5wdXQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJKb2luIiwidXNlcmlkIiwidXNlcm5hbWUiLCJ1c2VycHciLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwiaGFuZGxlUGFzc3dvcmRDaGVjayIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwiaGFuZGxlVGVybSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1S0FBaEI7O0FBZ0JBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxL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LGVBTzJDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUDNDLEVBUUdGLFNBQVMsaUJBQUk7QUFBSyxlQUFLLEVBQUU7QUFBQ08saUJBQUssRUFBQztBQUFQLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUmhCLGVBU0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUEsa0JBREY7QUFxQkQsQ0E3REQ7O0FBK0RBLCtEQUFlbEIsSUFBZixFOzs7Ozs7Ozs7OztBQ3BFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy91c2VyL2pvaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgc3R5bGVkIGZyb20gXCIuL0Zvcm1MYXlvdXQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IFN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDoxMDB2dztcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6I2VlZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmFja2dyb3VuZD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHAgb25DbGljaz17KCkgPT4gUm91dGVyLmJhY2soKX0+65Kk66Gc6rCA6riwPC9wPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JhY2tncm91bmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB1c2VJbnB1dCA9IChkZWZhdWx0VmFsdWUpID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0geyAuLi5lLnRhcmdldCB9O1xyXG4gICAgc2V0VmFsdWUodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZSxcclxuICAgIG9uQ2hhbmdlLFxyXG4gIH07XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQiLCJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3JtTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEpvaW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcmlkID0gdXNlSW5wdXQoJycpXHJcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VJbnB1dCgnJylcclxuICBjb25zdCB1c2VycHcgPSB1c2VJbnB1dCgnJyk7IFxyXG5cclxuICBjb25zdCBbcGFzc3dvcmRDaGVjayxzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3Isc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoZWNrID0gZSAgPT4geyBcclxuICAgIGNvbnN0IHt2YWx1ZX0gPSB7Li4uZS50YXJnZXR9O1xyXG4gICAgc2V0UGFzc3dvcmRFcnJvcih1c2VycHcudmFsdWUgIT09IHZhbHVlKVxyXG4gICAgc2V0UGFzc3dvcmRDaGVjayh2YWx1ZSk7IFxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3Rlcm0sc2V0VGVybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvcixzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpOyBcclxuICBcclxuICBjb25zdCBoYW5kbGVUZXJtID0gKCkgPT4geyBcclxuICAgIHNldFRlcm1FcnJvcih0ZXJtID09PSB0cnVlIClcclxuICAgIHNldFRlcm0oIXRlcm0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHsgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYodXNlcnB3LnZhbHVlIT09cGFzc3dvcmRDaGVjayl7IFxyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKHRydWUpXHJcbiAgICAgIHJldHVybiBcclxuICAgIH1lbHNle1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGZhbHNlKTsgXHJcbiAgICB9XHJcbiAgICBpZighdGVybSl7IFxyXG4gICAgICBzZXRUZXJtRXJyb3IodHJ1ZSlcclxuICAgICAgcmV0dXJuOyBcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHVzZXJpZC52YWx1ZSlcclxuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lLnZhbHVlKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Sm9pbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgPGgyPu2ajOybkOqwgOyehTwvaDI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICDslYTslYTrlJQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi51c2VyaWR9IHBsYWNlaG9sZGVyPVwi7JWE7J2065SU66W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyLz5cclxuICAgICAgICAgIOydtOumhDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJuYW1lfSBwbGFjZWhvbGRlcj1cIuydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxici8+XHJcbiAgICAgICAgICDruYTrsIDrsojtmLg6IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB7Li4udXNlcnB3fSBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxici8+XHJcbiAgICAgICAgICDruYTrsIDrsojtmLgg7ZmV7J24OiA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9IG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoZWNrfSBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDri6Tsi5wg7J6F66Cl7ZW07KO87IS47JqUXCIgLz48YnIvPlxyXG4gICAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPGRpdiBzdHlsZT17e2NvbG9yOidyZWQnfX0+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9kaXY+fVxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rlcm19IG9uQ2hhbmdlPXtoYW5kbGVUZXJtfSBpZD1cInRlcm1cIi8+IFxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZXJtXCI+7JW96rSA7JeQIOuPmeydmO2VtOyjvOyEuOyalC48L2xhYmVsPjxici8+XHJcbiAgICAgICAgICB7dGVybUVycm9yICYmIDxkaXYgc3R5bGU9e3tjb2xvcjoncmVkJ319PuyVveq0gOyXkCDrj5nsnZjtlbTso7zshLjsmpQuPC9kaXY+fVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7ZqM7JuQ6rCA7J6FPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
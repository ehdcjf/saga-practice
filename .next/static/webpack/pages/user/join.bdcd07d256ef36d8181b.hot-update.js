self["webpackHotUpdate_N_E"]("pages/user/join",{

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\next-login\\pages\\user\\join.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_18_Desktop_rlaehdcjf_next_login_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Join = function Join() {
  _s();

  var userid = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var username = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');
  var userpw = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default)('');

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var handlePasswordCheck = function handlePasswordCheck(e) {
    var _e$target = _objectSpread({}, e.target),
        value = _e$target.value;

    setPasswordError(userpw.value !== value);
    setPasswordCheck(value);
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var handleTerm = function handleTerm() {
    setTermError(term !== true);
    setTerm(!term);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(userid.value);
    console.log(username.value);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: ["\uC544\uC544\uB514: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, userid), {}, {
          placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 16
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 75
        }, _this), "\uC774\uB984: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, username), {}, {
          placeholder: "\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 75
        }, _this), "\uBE44\uBC00\uBC88\uD638: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "password"
        }, userpw), {}, {
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 81
        }, _this), "\uBE44\uBC00\uBC88\uD638 \uD655\uC778: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          value: passwordCheck,
          onChange: handlePasswordCheck,
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uB2E4\uC2DC \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 128
        }, _this), passwordError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: 'red'
          },
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: term,
          onChange: handleTerm,
          id: "term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "term",
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 52
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Join, "YVaohCNi7dwpuu9w0vpgxJTJwPU=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Join;
/* harmony default export */ __webpack_exports__["default"] = (Join);

var _c;

$RefreshReg$(_c, "Join");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9qb2luLmpzeCJdLCJuYW1lcyI6WyJKb2luIiwidXNlcmlkIiwidXNlSW5wdXQiLCJ1c2VybmFtZSIsInVzZXJwdyIsInVzZVN0YXRlIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsImhhbmRsZVBhc3N3b3JkQ2hlY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsImhhbmRsZVRlcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0Msd0RBQVEsQ0FBQyxFQUFELENBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCx3REFBUSxDQUFDLEVBQUQsQ0FBekI7QUFDQSxNQUFNRSxNQUFNLEdBQUdGLHdEQUFRLENBQUMsRUFBRCxDQUF2Qjs7QUFIaUIsa0JBS3dCRywrQ0FBUSxDQUFDLEVBQUQsQ0FMaEM7QUFBQSxNQUtWQyxhQUxVO0FBQUEsTUFLSUMsZ0JBTEo7O0FBQUEsbUJBTXdCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FOaEM7QUFBQSxNQU1WRyxhQU5VO0FBQUEsTUFNSUMsZ0JBTko7O0FBUWpCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsQ0FBQyxFQUFLO0FBQUEsc0NBQ1pBLENBQUMsQ0FBQ0MsTUFEVTtBQUFBLFFBQ3pCQyxLQUR5QixhQUN6QkEsS0FEeUI7O0FBRWhDSixvQkFBZ0IsQ0FBQ0wsTUFBTSxDQUFDUyxLQUFQLEtBQWlCQSxLQUFsQixDQUFoQjtBQUNBTixvQkFBZ0IsQ0FBQ00sS0FBRCxDQUFoQjtBQUNELEdBSkQ7O0FBUmlCLG1CQWNNUiwrQ0FBUSxDQUFDLEtBQUQsQ0FkZDtBQUFBLE1BY1ZTLElBZFU7QUFBQSxNQWNMQyxPQWRLOztBQUFBLG1CQWVnQlYsK0NBQVEsQ0FBQyxLQUFELENBZnhCO0FBQUEsTUFlVlcsU0FmVTtBQUFBLE1BZUFDLFlBZkE7O0FBaUJqQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxnQkFBWSxDQUFDSCxJQUFJLEtBQUssSUFBVixDQUFaO0FBQ0FDLFdBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDRCxHQUhEOztBQUtBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFSLENBQUMsRUFBSTtBQUN4QkEsS0FBQyxDQUFDUyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZckIsTUFBTSxDQUFDWSxLQUFuQjtBQUNBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWW5CLFFBQVEsQ0FBQ1UsS0FBckI7QUFDRCxHQUpEOztBQU9BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLDhEQUFDLDJEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sZ0JBQVEsRUFBRU0sWUFBaEI7QUFBQSx3REFDTztBQUFPLGNBQUksRUFBQztBQUFaLFdBQXVCbEIsTUFBdkI7QUFBK0IscUJBQVcsRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURQLGVBQ2tFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGxFLGlDQUVNO0FBQU8sY0FBSSxFQUFDO0FBQVosV0FBdUJFLFFBQXZCO0FBQWlDLHFCQUFXLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGTixlQUVrRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZsRSw2Q0FHUTtBQUFPLGNBQUksRUFBQztBQUFaLFdBQTJCQyxNQUEzQjtBQUFtQyxxQkFBVyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSFIsZUFHd0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIeEUsMERBSVc7QUFBTyxjQUFJLEVBQUMsVUFBWjtBQUF1QixlQUFLLEVBQUVFLGFBQTlCO0FBQTZDLGtCQUFRLEVBQUVJLG1CQUF2RDtBQUE0RSxxQkFBVyxFQUFDO0FBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSlgsZUFJdUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKdkgsRUFLR0YsYUFBYSxpQkFBSTtBQUFLLGVBQUssRUFBRTtBQUFDZSxpQkFBSyxFQUFDO0FBQVAsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMcEIsZUFNRTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGlCQUFPLEVBQUVULElBQWhDO0FBQXNDLGtCQUFRLEVBQUVJLFVBQWhEO0FBQTRELFlBQUUsRUFBQztBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBT0U7QUFBTyxpQkFBTyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFPMkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQM0MsZUFRRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFvQkQsQ0FqREQ7O0dBQU1sQixJO1VBQ1dFLG9ELEVBQ0VBLG9ELEVBQ0ZBLG9EOzs7S0FIWEYsSTtBQW1ETiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2pvaW4uYmRjZDA3ZDI1NmVmMzZkODE4MWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgSm9pbiA9ICgpID0+IHtcclxuICBjb25zdCB1c2VyaWQgPSB1c2VJbnB1dCgnJylcclxuICBjb25zdCB1c2VybmFtZSA9IHVzZUlucHV0KCcnKVxyXG4gIGNvbnN0IHVzZXJwdyA9IHVzZUlucHV0KCcnKTsgXHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpOyBcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvcixzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTsgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hlY2sgPSBlICA9PiB7IFxyXG4gICAgY29uc3Qge3ZhbHVlfSA9IHsuLi5lLnRhcmdldH07XHJcbiAgICBzZXRQYXNzd29yZEVycm9yKHVzZXJwdy52YWx1ZSAhPT0gdmFsdWUpXHJcbiAgICBzZXRQYXNzd29yZENoZWNrKHZhbHVlKTsgXHJcbiAgfVxyXG5cclxuICBjb25zdCBbdGVybSxzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybUVycm9yLHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZVRlcm0gPSAoKSA9PiB7IFxyXG4gICAgc2V0VGVybUVycm9yKHRlcm0gIT09IHRydWUpXHJcbiAgICBzZXRUZXJtKCF0ZXJtKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7IFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codXNlcmlkLnZhbHVlKVxyXG4gICAgY29uc29sZS5sb2codXNlcm5hbWUudmFsdWUpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Kb2luPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICA8aDI+7ZqM7JuQ6rCA7J6FPC9oMj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIOyVhOyVhOuUlDogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnVzZXJpZH0gcGxhY2Vob2xkZXI9XCLslYTsnbTrlJTrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIgLz48YnIvPlxyXG4gICAgICAgICAg7J2066aEOiA8aW5wdXQgdHlwZT1cInRleHRcIiB7Li4udXNlcm5hbWV9IHBsYWNlaG9sZGVyPVwi7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyLz5cclxuICAgICAgICAgIOu5hOuwgOuyiO2YuDogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHsuLi51c2VycHd9IHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiIC8+PGJyLz5cclxuICAgICAgICAgIOu5hOuwgOuyiO2YuCDtmZXsnbg6IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRDaGVja30gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hlY2t9IHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOuLpOyLnCDsnoXroKXtlbTso7zshLjsmpRcIiAvPjxici8+XHJcbiAgICAgICAgICB7cGFzc3dvcmRFcnJvciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6J3JlZCd9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L2Rpdj59XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGVybX0gb25DaGFuZ2U9e2hhbmRsZVRlcm19IGlkPVwidGVybVwiLz4gXHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlcm1cIj7slb3qtIDsl5Ag64+Z7J2Y7ZW07KO87IS47JqULjwvbGFiZWw+PGJyLz5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPu2ajOybkOqwgOyehTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvaW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
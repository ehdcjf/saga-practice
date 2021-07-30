(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\\uC0C8 \uD3F4\uB354\\redux\\pages\\_app.jsx";




const App = ({
  Component
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__.default.withRedux(App));

/***/ }),

/***/ "./reducers/category.js":
/*!******************************!*\
  !*** ./reducers/category.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const initialState = {
  menu: [{
    id: '1',
    category: '대분류메뉴1',
    url: '/posts/1'
  }, {
    id: '2',
    category: '대분류메뉴2',
    url: '/posts/2'
  }, {
    id: '3',
    category: '대분류메뉴3',
    url: '/posts/3'
  }, {
    id: '4',
    category: '대분류메뉴4',
    url: '/posts/4'
  }, {
    id: '5',
    category: '대분류메뉴5',
    url: '/posts/5'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./reducers/category.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__.default,
  category: _category__WEBPACK_IMPORTED_MODULE_3__.default
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);






const loggetrMiddelware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  console.log(dispatch);
  console.log(getState);
  return next(action);
};

const configureStore = () => {
  const middlewares = [loggetrMiddelware, (redux_thunk__WEBPACK_IMPORTED_MODULE_4___default())];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const Store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, enhancer);
  return Store;
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: false
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udC8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50Iiwid3JhcHBlciIsImluaXRpYWxTdGF0ZSIsIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4IiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiVXNlckxvZ2luUmVxdWVzdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsImUiLCJVc2VyTG9nb3V0QWN0aW9uIiwibG9nZ2V0ck1pZGRlbHdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmVzIiwidGh1bmtNaWRkbGV3YXJlIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsIlN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQSxHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFHN0Isc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUNFLFdBQUcsRUFBQyxZQUROO0FBRUUsWUFBSSxFQUFDLDJCQUZQO0FBR0UsbUJBQVcsRUFBQztBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFPRTtBQUNFLFlBQUksRUFBQyxvRUFEUDtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBY0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKO0FBQUEsa0JBREY7QUFtQkQsQ0F0QkQ7O0FBdUJBLCtEQUFlQyxvRUFBQSxDQUFrQkYsR0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUM1QkEsTUFBTUcsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUMsQ0FDSDtBQUNBQyxNQUFFLEVBQUMsR0FESDtBQUVBQyxZQUFRLEVBQUMsUUFGVDtBQUdBQyxPQUFHLEVBQUM7QUFI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R0wsV0FBSixDQUFoQixDQUZyQjtBQUdBLFFBQU1NLEtBQUssR0FBR0Msa0RBQVcsQ0FBQzdDLDhDQUFELEVBQVN3QyxRQUFULENBQXpCO0FBRUEsU0FBT0ksS0FBUDtBQUNELENBUkQ7O0FBVUEsTUFBTWxELE9BQU8sR0FBR29ELGlFQUFhLENBQUNULGNBQUQsRUFBZ0I7QUFDM0NVLE9BQUs7QUFEc0MsQ0FBaEIsQ0FBN0I7QUFJQSwrREFBZXJELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9pbmRleC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIlxyXG4gICAgICAgICAgY3Jvc3NPcmlnaW49XCJ0cnVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1ImZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICBcclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xyXG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIG1lbnU6W1xyXG4gICAgeyBcclxuICAgIGlkOicxJywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICB1cmw6Jy9wb3N0cy8xJ1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonMicsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDInLFxyXG4gICAgdXJsOicvcG9zdHMvMidcclxuICAgIH0sXHJcbiAgICB7IFxyXG4gICAgaWQ6JzMnLCBcclxuICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQzJyxcclxuICAgIHVybDonL3Bvc3RzLzMnXHJcbiAgICB9LFxyXG4gICAgeyBcclxuICAgIGlkOic0JywgXHJcbiAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICB1cmw6Jy9wb3N0cy80J1xyXG4gICAgfSxcclxuICAgIHsgXHJcbiAgICBpZDonNScsIFxyXG4gICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDUnLFxyXG4gICAgdXJsOicvcG9zdHMvNSdcclxuICAgIH0sXHJcbiAgXVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbnN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gIGRlZmF1bHQ6XHJcbiAgICByZXR1cm4gc3RhdGVcclxufVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInXHJcbmltcG9ydCBjYXRlZ29yeSBmcm9tICcuL2NhdGVnb3J5J1xyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgaW5kZXg6KHN0YXRlPXt9LGFjdGlvbik9PntcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsY2F0ZWdvcnksXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIiwiY29uc3QgaW5pdGlhbFN0YXRlID0geyBcclxuICBsb2FkZGluZzpmYWxzZSwgXHJcbiAgSXNMb2dpbjpmYWxzZVxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IFVTRVJfTE9HSU5fUkVRVUVTVCA9ICdVU0VSX0xPR0lOX1JFUVVFU1QnXHJcbmNvbnN0IFVTRVJfTE9HSU5fU1VDQ0VTUyA9ICdVU0VSX0xPR0lOX1NVQ0NFU1MnXHJcbmNvbnN0IFVTRVJfTE9HSU5fRVJST1IgPSAnVVNFUl9MT0dJTl9FUlJPUidcclxuY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHsgXHJcbiAgcmV0dXJuIGFzeW5jKGRpc3BhdGNoKSA9PiB7IFxyXG4gICAgZGlzcGF0Y2goVXNlckxvZ2luUmVxdWVzdCgpKTsgXHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW4nLHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIiwgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICByZXN1bHQucmVzdWx0ID09PSdPSycgXHJcbiAgICAgID8gZGlzcGF0Y2goVXNlckxvZ2luU3VjY2VzcyhyZXN1bHQpKVxyXG4gICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9Y2F0Y2goZSl7IFxyXG4gICAgICBkaXNwYXRjaChVc2VyTG9naW5FcnJvcigpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblJlcXVlc3QgPSAoZGF0YSkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX1JFUVVFU1QsXHJcblxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3VjY2VzcyA9ICgpID0+eyBcclxuICByZXR1cm4geyBcclxuICAgIHR5cGU6VVNFUl9MT0dJTl9TVUNDRVNTLFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT57IFxyXG4gIHJldHVybiB7IFxyXG4gICAgdHlwZTpVU0VSX0xPR0lOX0VSUk9SLFxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICggKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HT1VULFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gIHN3aXRjaChhY3Rpb24udHlwZSl7IFxyXG5cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9SRVFVRVNUOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzp0cnVlLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOnRydWUsXHJcbiAgICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX0VSUk9SOiBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzpmYWxzZSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBVU0VSX0xPR09VVDogXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBJc0xvZ2luOmZhbHNlLFxyXG4gICAgICB9IFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiAgIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIlxyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIlxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIlxyXG5pbXBvcnQgIHRodW5rTWlkZGxld2FyZSAgZnJvbSBcInJlZHV4LXRodW5rXCJcclxuXHJcbmNvbnN0IGxvZ2dldHJNaWRkZWx3YXJlID0gKHtkaXNwYXRjaCxnZXRTdGF0ZX0pID0+IChuZXh0KSA9PihhY3Rpb24pID0+IHsgXHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTsgXHJcbiAgY29uc29sZS5sb2coZGlzcGF0Y2gpOyBcclxuICBjb25zb2xlLmxvZyhnZXRTdGF0ZSk7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTsgXHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW2xvZ2dldHJNaWRkZWx3YXJlLHRodW5rTWlkZGxld2FyZV07IFxyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09J3Byb2R1Y3Rpb24nXHJcbiAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpXHJcblxyXG4gIHJldHVybiBTdG9yZVxyXG59XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgZGVidWc6cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkYXZlbG9wbWVudCdcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXJcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=
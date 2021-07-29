self["webpackHotUpdate_N_E"]("pages/user/login",{

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
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
  category: {
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
  }
};
var USER_LOGIN = 'USER_LOGIN';
var USER_LOGOUT = 'USER_LOGOUT';
var UserLoginAction = function UserLoginAction(data) {
  return {
    type: USER_LOGIN,
    data: data
  };
};
_c = UserLoginAction;
var UserLogoutAction = function UserLogoutAction() {
  return {
    type: USER_LOGOUT
  };
};
_c2 = UserLogoutAction;

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

$RefreshReg$(_c, "UserLoginAction");
$RefreshReg$(_c2, "UserLogoutAction");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvaW5kZXguanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsIklzTG9naW4iLCJwb3N0IiwiY29tbWVudCIsImNhdGVnb3J5IiwibWVudSIsImlkIiwidXJsIiwiVVNFUl9MT0dJTiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJVc2VyTG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsTUFBSSxFQUFDO0FBQ0hDLFdBQU8sRUFBQztBQURMLEdBRGM7QUFJbkJDLE1BQUksRUFBQyxFQUpjO0FBT25CQyxTQUFPLEVBQUMsRUFQVztBQVVuQkMsVUFBUSxFQUFDO0FBQ1BDLFFBQUksRUFBQyxDQUNIO0FBQ0FDLFFBQUUsRUFBQyxHQURIO0FBRUFGLGNBQVEsRUFBQyxRQUZUO0FBR0FHLFNBQUcsRUFBQztBQUhKLEtBREcsRUFNSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQU5HLEVBV0g7QUFDQUQsUUFBRSxFQUFDLEdBREg7QUFFQUYsY0FBUSxFQUFDLFFBRlQ7QUFHQUcsU0FBRyxFQUFDO0FBSEosS0FYRyxFQWdCSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQWhCRyxFQXFCSDtBQUNBRCxRQUFFLEVBQUMsR0FESDtBQUVBRixjQUFRLEVBQUMsUUFGVDtBQUdBRyxTQUFHLEVBQUM7QUFISixLQXJCRztBQURFO0FBVlUsQ0FBckI7QUEwQ0EsSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBRU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFELEVBQVU7QUFDdkMsU0FBTTtBQUNKQyxRQUFJLEVBQUNKLFVBREQ7QUFFSkcsUUFBSSxFQUFKQTtBQUZJLEdBQU47QUFJRCxDQUxNO0tBQU1ELGU7QUFPTixJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU87QUFDckMsU0FBTTtBQUNKRCxRQUFJLEVBQUNIO0FBREQsR0FBTjtBQUdELENBSk07TUFBTUksZ0I7O0FBTWIsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBOEI7QUFBQSxNQUE3QkMsS0FBNkIsdUVBQXZCaEIsWUFBdUI7QUFBQSxNQUFWaUIsTUFBVTs7QUFDNUMsVUFBT0EsTUFBTSxDQUFDSixJQUFkO0FBQ0UsU0FBS0osVUFBTDtBQUNBUyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0UsNkNBQ0tILEtBREw7QUFFRWYsWUFBSSxrQ0FDQ2UsS0FBSyxDQUFDZixJQURQO0FBRUZDLGlCQUFPLEVBQUM7QUFGTjtBQUZOOztBQU9GLFNBQUtRLFdBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVFZixZQUFJLGtDQUNDZSxLQUFLLENBQUNmLElBRFA7QUFFRkMsaUJBQU8sRUFBQztBQUZOO0FBRk47O0FBT0Y7QUFDRSxhQUFPYyxLQUFQO0FBbkJKO0FBdUJELENBeEJEOztBQTBCQSwrREFBZUQsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2xvZ2luLjM3ZWRmMzFmNzA4OGJmM2YzZWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIHVzZXI6e1xyXG4gICAgSXNMb2dpbjpmYWxzZSxcclxuICB9LFxyXG4gIHBvc3Q6e1xyXG5cclxuICB9LFxyXG4gIGNvbW1lbnQ6e1xyXG5cclxuICB9LFxyXG4gIGNhdGVnb3J5OntcclxuICAgIG1lbnU6W1xyXG4gICAgICB7IFxyXG4gICAgICBpZDonMScsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0MScsXHJcbiAgICAgIHVybDonL3Bvc3RzLzEnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOicyJywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQyJyxcclxuICAgICAgdXJsOicvcG9zdHMvMidcclxuICAgICAgfSxcclxuICAgICAgeyBcclxuICAgICAgaWQ6JzMnLCBcclxuICAgICAgY2F0ZWdvcnk6J+uMgOu2hOulmOuplOuJtDMnLFxyXG4gICAgICB1cmw6Jy9wb3N0cy8zJ1xyXG4gICAgICB9LFxyXG4gICAgICB7IFxyXG4gICAgICBpZDonNCcsIFxyXG4gICAgICBjYXRlZ29yeTon64yA67aE66WY66mU64m0NCcsXHJcbiAgICAgIHVybDonL3Bvc3RzLzQnXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgXHJcbiAgICAgIGlkOic1JywgXHJcbiAgICAgIGNhdGVnb3J5OifrjIDrtoTrpZjrqZTribQ1JyxcclxuICAgICAgdXJsOicvcG9zdHMvNSdcclxuICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBVU0VSX0xPR0lOID0gJ1VTRVJfTE9HSU4nXHJcbmNvbnN0IFVTRVJfTE9HT1VUID0gJ1VTRVJfTE9HT1VUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7IFxyXG4gIHJldHVybnsgXHJcbiAgICB0eXBlOlVTRVJfTE9HSU4sXHJcbiAgICBkYXRhLCBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9nb3V0QWN0aW9uID0gKCApID0+IHsgXHJcbiAgcmV0dXJueyBcclxuICAgIHR5cGU6VVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pID0+eyBcclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpeyBcclxuICAgIGNhc2UgVVNFUl9MT0dJTjogXHJcbiAgICBjb25zb2xlLmxvZygneHh4eHh4eHgnKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIElzTG9naW46dHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6IFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgIElzTG9naW46ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH0gXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7IFxyXG4gIFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9
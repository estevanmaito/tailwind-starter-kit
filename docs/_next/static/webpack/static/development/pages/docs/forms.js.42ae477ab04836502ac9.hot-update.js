webpackHotUpdate("static\\development\\pages\\docs\\forms.js",{

/***/ "./containers/Layout.jsx":
/*!*******************************!*\
  !*** ./containers/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.jsx");
var _jsxFileName = "D:\\windmill\\containers\\Layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Layout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var mainClassName = isOpen ? 'fixed max-w-full min-h-screen overflow-hidden lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12' : 'max-w-full lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12';
  return __jsx("div", {
    className: "w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex mt-24",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: isOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: mainClassName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children)));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=forms.js.42ae477ab04836502ac9.hot-update.js.map
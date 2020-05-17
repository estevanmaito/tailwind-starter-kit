webpackHotUpdate("static\\development\\pages\\docs\\new-alert.js",{

/***/ "./layouts/docs.jsx":
/*!**************************!*\
  !*** ./layouts/docs.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.jsx");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.jsx");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO */ "./components/SEO.jsx");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "D:\\windmill\\layouts\\docs.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function extractFileName(frontMatter) {
  return path__WEBPACK_IMPORTED_MODULE_4___default.a.basename(frontMatter.__resourcePath, path__WEBPACK_IMPORTED_MODULE_4___default.a.extname(frontMatter.__resourcePath));
}

/* harmony default export */ __webpack_exports__["default"] = (function (frontMatter) {
  console.log(extractFileName(frontMatter));
  return function (_ref) {
    var children = _ref.children;

    var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
        isOpen = _useState[0],
        setIsOpen = _useState[1];

    var mainClassName = isOpen ? 'fixed max-w-full min-h-screen overflow-hidden lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16' : 'max-w-full lg:relative lg:w-3/4 xl:w-3/5 xl:pl-12 markdown mb-16';
    return __jsx("div", {
      className: "w-full px-6 mx-auto sm:max-w-screen-sm lg:max-w-screen-xl",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: frontMatter.title,
      url: "docs/".concat(frontMatter.url),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isOpen: isOpen,
      setIsOpen: setIsOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "flex mt-24",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isOpen: isOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: mainClassName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, children)));
  };
});

/***/ })

})
//# sourceMappingURL=new-alert.js.ba901222df8779512b0a.hot-update.js.map
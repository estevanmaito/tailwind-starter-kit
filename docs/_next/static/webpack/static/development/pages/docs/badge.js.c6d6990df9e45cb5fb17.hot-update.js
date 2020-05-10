webpackHotUpdate("static\\development\\pages\\docs\\badge.js",{

/***/ "./pages/docs/badge.jsx":
/*!******************************!*\
  !*** ./pages/docs/badge.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Layout */ "./containers/Layout.jsx");
/* harmony import */ var _components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Headings/H2 */ "./components/Headings/H2.jsx");
/* harmony import */ var _components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Headings/H4 */ "./components/Headings/H4.jsx");
/* harmony import */ var _components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Text/Lead */ "./components/Text/Lead.jsx");
/* harmony import */ var _components_Text_P__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Text/P */ "./components/Text/P.jsx");
/* harmony import */ var _components_CodeCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CodeCard */ "./components/CodeCard.jsx");
/* harmony import */ var _components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ExampleSection */ "./components/ExampleSection.jsx");
var _jsxFileName = "D:\\windmill\\pages\\docs\\badge.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var badgeSizesCode = "\n<span class=\"rounded-full h-2 w-2 inline-block bg-red-600\"></span>\n<span class=\"rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600\">9</span>\n<span class=\"rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600\">99+</span>\n";
var badgeButtonCode = "\n<button class=\"rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">\n  <span class=\"mr-2\">Button</span>\n  <span class=\"rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600\">9</span>\n</button>\n";
var badgeIconCode = "\n<span class=\"rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600\">NEW</span>\n";

function Badge() {
  return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(_components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Badge"), __jsx(_components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "Badge component using Tailwind CSS to speed up your project."), __jsx("hr", {
    className: "my-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "badge-sizes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Badge sizes"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Different sized badges. The ones with text are the same and expand with the inner text."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: badgeSizesCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "badge-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Button with badge"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "A button with a badge inside."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: badgeButtonCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "badge-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Icon with badge"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "An icon with a badge inside."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: badgeIconCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "badge-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Text badge"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "An icon with a badge inside."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: badgeIconCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ })

})
//# sourceMappingURL=badge.js.c6d6990df9e45cb5fb17.hot-update.js.map
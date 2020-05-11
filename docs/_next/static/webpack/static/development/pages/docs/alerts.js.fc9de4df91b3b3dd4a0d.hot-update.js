webpackHotUpdate("static\\development\\pages\\docs\\alerts.js",{

/***/ "./pages/docs/alerts.jsx":
/*!*******************************!*\
  !*** ./pages/docs/alerts.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SEO */ "./components/SEO.jsx");
/* harmony import */ var _containers_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/Layout */ "./containers/Layout.jsx");
/* harmony import */ var _components_Headings_H2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Headings/H2 */ "./components/Headings/H2.jsx");
/* harmony import */ var _components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Headings/H4 */ "./components/Headings/H4.jsx");
/* harmony import */ var _components_Text_Lead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Text/Lead */ "./components/Text/Lead.jsx");
/* harmony import */ var _components_Text_P__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Text/P */ "./components/Text/P.jsx");
/* harmony import */ var _components_CodeCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/CodeCard */ "./components/CodeCard.jsx");
/* harmony import */ var _components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ExampleSection */ "./components/ExampleSection.jsx");
var _jsxFileName = "D:\\windmill\\pages\\docs\\alerts.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var simpleAlertCode = "\n<div class=\"px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg\" role=\"alert\">\n  <p>A simple alert with text</p>\n</div>\n";
var alerWithCloseIconCode = "\n<div class=\"pl-4 pr-10 py-3 leading-normal text-red-700 bg-red-100 rounded-lg relative\" role=\"alert\">\n  <p>A simple alert with text and a right icon</p>\n  <span class=\"absolute right-0 inset-y-0 flex items-center mr-4\">\n    <svg class=\"fill-current h-4 w-4\" role=\"button\" viewBox=\"0 0 20 20\"><path d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </span>\n</div>\n";
var alertWithLinkCode = "\n<div class=\"px-4 py-3 leading-normal text-orange-700 bg-orange-100 rounded-lg\" role=\"alert\">\n  <p>A simple alert with text <a class=\"font-bold hover:underline\" href=\"#\">and a link</a>. Check it out!</p>\n</div>\n";
var alertWithHeaderCode = "\n<div class=\"px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg\" role=\"alert\">\n  <p class=\"font-bold\">You are the visitor 1000!</p>\n  <p>A simple alert with text and header. Check it out!</p>\n</div>\n";
var alertWithLeftIconCode = "\n<div class=\"px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg relative\" role=\"alert\">\n  <span class=\"absolute left-0 inset-y-0 flex items-center ml-4\">\n    <svg class=\"fill-current h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </span>\n  <p class=\"ml-6\">A simple alert with text and an icon. Check it out!</p>\n</div>\n";
var alertFilledCode = "\n<div class=\"px-4 py-3 leading-normal bg-red-700 text-red-100 rounded-lg\" role=\"alert\">\n  <p>A simple alert with text and an icon. Check it out!</p>\n</div>\n";
var alertFilledHeaderCode = "\n<div class=\"leading-normal rounded-lg overflow-hidden\" role=\"alert\">\n  <p class=\"py-3 px-4 font-bold text-purple-100 bg-purple-800\">You're being notified</p>\n  <p class=\"py-3 px-4 text-purple-700 bg-purple-100 \">A simple alert with text and a filled header. Check it out!</p>\n</div>\n";
var alertBorderedCode = "\n<div class=\"px-4 py-3 leading-normal rounded-lg text-indigo-700 border border-indigo-500\" role=\"alert\">\n  <p\">A simple alert with text and borders!</p>\n</div>\n";

function Alerts() {
  return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Alerts",
    url: "docs/alerts",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx(_components_Headings_H2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Alerts"), __jsx(_components_Text_Lead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Alert components using Tailwind CSS to speed up your project."), __jsx("hr", {
    className: "my-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "simple",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, "Simple"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "A simple alert component with text."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: simpleAlertCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "With close icon"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "A simple alert component with text and a right icon."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alerWithCloseIconCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "With link"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, "A simple alert component with text and link."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertWithLinkCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "With header"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "A simple alert component with text and header."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertWithHeaderCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "With icon"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "A simple alert component with text and a left icon."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertWithLeftIconCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Filled background"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "A simple alert component with filled background and text."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertFilledCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Filled header"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "A simple alert component with filled header and text."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertFilledHeaderCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "With border"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "A simple alert component with border and text."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    lang: "html",
    code: alertBorderedCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ })

})
//# sourceMappingURL=alerts.js.fc9de4df91b3b3dd4a0d.hot-update.js.map
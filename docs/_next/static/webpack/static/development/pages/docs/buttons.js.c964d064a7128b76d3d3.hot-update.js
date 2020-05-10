webpackHotUpdate("static\\development\\pages\\docs\\buttons.js",{

/***/ "./pages/docs/buttons.jsx":
/*!********************************!*\
  !*** ./pages/docs/buttons.jsx ***!
  \********************************/
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
var _jsxFileName = "D:\\windmill\\pages\\docs\\buttons.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var buttonSizesCode = "\n<button class=\"rounded-lg px-6 h-12 text-lg text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Large</button>\n<button class=\"rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Regular</button>\n<button class=\"rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Small</button>\n<a class=\"rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center\" href=\"#\">Link</a>\n<input class=\"rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 cursor-pointer\" type=\"submit\" value=\"Input\">\n";
var buttonBlockCode = "\n<button class=\"w-full rounded-lg px-6 h-12 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Large block button</button>\n";
var buttonColorsCode = "\n<button class=\"rounded-lg px-5 h-10 text-red-100 bg-red-700 focus:shadow-outline hover:bg-red-800 transition-colors duration-150\">Danger</button>\n<button class=\"rounded-lg px-5 h-10 text-green-100 bg-green-700 focus:shadow-outline hover:bg-green-800 transition-colors duration-150\">Success</button>\n<button class=\"rounded-lg px-5 h-10 text-blue-100 bg-blue-600 focus:shadow-outline hover:bg-blue-700 transition-colors duration-150\">Info</button>\n<button class=\"rounded-lg px-5 h-10 text-gray-100 bg-gray-700 focus:shadow-outline hover:bg-gray-800 transition-colors duration-150\">Secondary</button>\n<button class=\"rounded-lg px-5 h-10 text-pink-100 bg-pink-600 focus:shadow-outline hover:bg-pink-700 transition-colors duration-150\">Pink</button>\n<button class=\"rounded-lg px-5 h-10 text-purple-100 bg-purple-600 focus:shadow-outline hover:bg-purple-700 transition-colors duration-150\">Purple</button>\n<button class=\"rounded-lg px-5 h-10 text-gray-800 bg-white focus:shadow-outline hover:bg-gray-200 transition-colors duration-150\">White</button>\n";
var buttonOutlineCode = "\n<button class=\"rounded-lg px-5 h-10 text-indigo-700 border border-indigo-500 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 transition-colors duration-150\">Outline</button>\n";
var buttonIconRightCode = "\n<button class=\"rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center\">\n  <span>With icon</span>\n  <svg class=\"fill-current h-4 w-4 ml-3\" viewBox=\"0 0 20 20\"><path d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n</button>\n";
var buttonIconLeftCode = "\n<button class=\"rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center\">\n  <svg class=\"fill-current h-4 w-4 mr-3\" viewBox=\"0 0 20 20\"><path d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  <span>With icon</span>\n</button>\n";
var buttonGroupCode = "\n<div class=\"inline-flex\" role=\"group\" aria-label=\"Button group\">\n  <button class=\"rounded-l-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Left</button>\n  <button class=\"px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Middle</button>\n  <button class=\"rounded-r-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Right</button>\n</div>\n";
var buttonPillCode = "\n<button class=\"rounded-full px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150\">Pill button</button>\n";
var buttonIconCode = "\n<button class=\"rounded-full w-10 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center justify-center\">\n  <svg class=\"fill-current h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n</button>\n<button class=\"rounded-lg w-10 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center justify-center\">\n  <svg class=\"fill-current h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n</button>\n<button class=\"rounded-full w-10 h-10 text-gray-700 bg-white focus:shadow-outline hover:bg-gray-200 transition-colors duration-150 inline-flex items-center justify-center\">\n  <svg class=\"fill-current h-4 w-4\" viewBox=\"0 0 20 20\"><path d=\"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z\"></path></svg>\n</button>\n";
var dropdownLeftCode = "\n<div class=\"relative mb-32\">\n  <button class=\"rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center\">\n    <span>Dropdown</span>\n    <svg class=\"fill-current h-4 w-4 ml-3\" viewBox=\"0 0 20 20\"><path d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </button>\n  <div class=\"absolute mt-1 py-2 rounded-lg flex flex-col bg-white text-gray-700 border\">\n    <a class=\"px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white\" href=\"#\">One item</a>\n    <a class=\"px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white\" href=\"#\">Another longer item</a>\n    <a class=\"px-3 py-1 hover:text-gray-800 focus:bg-indigo-700 focus:text-white\" href=\"#\">A medium item</a>\n  </div>\n</div>\n";

function Buttons() {
  return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(_components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "Buttons"), __jsx(_components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "Button components using Tailwind CSS to speed up your project."), __jsx("hr", {
    className: "my-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-sizes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Button sizes"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "Different sizes of a button component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonSizesCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "Block button"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "A full-width block button."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonBlockCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-colors",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Button colors"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "Some color variations."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonColorsCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Outline button"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Outlined button."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonOutlineCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-iconRight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, "Button with icon right"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Button with SVG icon right."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonIconRightCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-iconLeft",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "Button with icon left"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "Button with SVG icon left."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonIconLeftCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, "Button group"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Group of two or more buttons."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonGroupCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-pill",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "Pill button"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, "Button with full rounded sides."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonPillCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "button-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "Icon button"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, "Button with icon."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: buttonIconCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "dropdown-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "Dropdown"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "Dropdown button with left aligned menu. ", __jsx("code", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 51
    }
  }, "mb-32"), " added just for the example."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: dropdownLeftCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Buttons);

/***/ })

})
//# sourceMappingURL=buttons.js.c964d064a7128b76d3d3.hot-update.js.map
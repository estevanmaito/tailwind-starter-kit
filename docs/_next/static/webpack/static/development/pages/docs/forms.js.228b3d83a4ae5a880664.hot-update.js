webpackHotUpdate("static\\development\\pages\\docs\\forms.js",{

/***/ "./pages/docs/forms.jsx":
/*!******************************!*\
  !*** ./pages/docs/forms.jsx ***!
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
var _jsxFileName = "D:\\windmill\\pages\\docs\\forms.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var simpleInputCode = "\n<input class=\"border rounded-lg px-4 h-12 text-gray-700 placeholder-gray-600 text-lg w-full focus:shadow-outline mb-2\" type=\"text\" placeholder=\"Large input\">\n<input class=\"border rounded-lg px-3 h-10 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline mb-2\" type=\"text\" placeholder=\"Regular input\">\n<input class=\"border rounded-lg px-2 h-8 text-gray-700 placeholder-gray-600 text-sm focus:shadow-outline w-full\" type=\"text\" placeholder=\"Small input\">\n";
var simpleSelectCode = "\n<div class=\"relative inline-block text-gray-700 w-full\">\n  <select class=\"appearance-none border rounded-lg pl-3 pr-6 h-10  placeholder-gray-600 text-base w-full focus:shadow-outline\" placeholder=\"Regular input\">\n    <option>A regular sized select input</option>\n    <option>Another option</option>\n    <option>And one more</option>\n  </select>\n  <div class=\"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2\">\n    <svg class=\"fill-current w-4 h-4\" viewBox=\"0 0 20 20\"><path d=\"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z\" clip-rule=\"evenodd\" fill-rule=\"evenodd\"></path></svg>\n  </div>\n</div>\n";
var checkboxCode = "\n<label class=\"text-gray-700\">\n  <input type=\"checkbox\" value=\"\">\n  <span class=\"ml-1\">Lorem ipsum dolor sit</span>\n</label>\n";
var radioCode = "\n<label class=\"text-gray-700\">\n  <input type=\"radio\" value=\"\">\n  <span class=\"ml-1\">Lorem ipsum dolor sit</span>\n</label>\n";
var textareaCode = "\n<textarea class=\"border rounded-lg px-3 py-2 h-16 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline\"></textarea>\n";
var labelOverInputCode = "\n<div class=\"text-gray-700\">\n  <label class=\"block mb-1\" for=\"forms-labelOverInputCode\">Full name</label>\n  <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\" id=\"forms-labelOverInputCode\">\n</div>\n";
var labelLeftInputCode = "\n<div class=\"text-gray-700 md:flex md:items-center\">\n  <div class=\"mb-1 md:mb-0 md:w-1/3\">\n    <label for=\"forms-labelLeftInputCode\">Full name</label>\n  </div>\n  <div class=\"md:w-2/3 md:flex-grow\">\n    <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" placeholder=\"Regular input\" id=\"forms-labelLeftInputCode\">\n  </div>\n</div>\n";
var formGridCode = "\n<form class=\"text-gray-700\">\n  <div class=\"flex flex-wrap mb-4\">\n    <div class=\"text-gray-700 w-full\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_card\">Card number</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_card\">\n    </div>\n  </div>\n  <div class=\"flex flex-wrap md:mb-4 -mx-2\">\n    <div class=\"text-gray-700 w-full mb-4 md:mb-0 md:w-1/2 px-2\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_name\">First name</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_name\">\n    </div>\n    <div class=\"text-gray-700 w-full mb-4 md:mb-0 md:w-1/2 px-2\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_last\">Last name</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_last\">\n    </div>\n  </div>\n  <div class=\"flex flex-wrap -mx-2 space-y-4\">\n    <div class=\"text-gray-700 w-full md:mb-0 md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_month\">Month</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_month\">\n    </div>\n    <div class=\"text-gray-700 w-full md:mb-0 md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_year\">Year</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_year\">\n    </div>\n    <div class=\"text-gray-700 w-full md:mb-0 md:w-1/3 px-2\">\n      <label class=\"block mb-1\" for=\"forms-formGridCode_cvc\">CVC</label>\n      <input class=\"border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline\" type=\"text\" id=\"forms-formGridCode_cvc\">\n    </div>\n  </div>\n</form>\n";

function Forms() {
  return __jsx(_containers_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(_components_Headings_H2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Forms"), __jsx(_components_Text_Lead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "Form components using Tailwind CSS to speed up your project."), __jsx("hr", {
    className: "mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "simple-input",
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
  }, "Simple input"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, "A simple input component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: simpleInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "simple-select",
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
  }, "Simple select"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "A simple select component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: simpleSelectCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "checkbox",
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
  }, "Checkbox"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "A checkbox component. If you're looking for a more elaborate checkbox, I recommend using", ' ', __jsx("a", {
    className: "font-bold underline hover:text-gray-600",
    href: "https://tailwindcss-custom-forms.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Custom Forms"), ", an official library to extend the look of general form elements with custom CSS."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: checkboxCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Radio"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "A radio component. If you're looking for a more elaborate radio button, I recommend using", ' ', __jsx("a", {
    className: "font-bold underline hover:text-gray-600",
    href: "https://tailwindcss-custom-forms.netlify.app/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "Custom Forms"), ", an official library to extend the look of general form elements with custom CSS."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: radioCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "textarea",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, "Textarea"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "A simple textarea component."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: textareaCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "labelOverInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, "Label over"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "A simple input component with label over."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: labelOverInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "labelLeftInputCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "Label left"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "A responsive form group with label and input, with left text on desktop and over the input on mobile."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: labelLeftInputCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  })), __jsx(_components_ExampleSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "formGridCode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(_components_Headings_H4__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  }, "Form grid"), __jsx(_components_Text_P__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "A responsive form grid."), __jsx(_components_CodeCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    lang: "html",
    code: formGridCode,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ })

})
//# sourceMappingURL=forms.js.228b3d83a4ae5a880664.hot-update.js.map
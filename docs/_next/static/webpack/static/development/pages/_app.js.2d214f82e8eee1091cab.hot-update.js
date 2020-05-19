webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/CodeBlock.jsx":
/*!**********************************!*\
  !*** ./components/CodeBlock.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var react_live__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-live */ "./node_modules/react-live/dist/react-live.es.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer/themes/vsDark */ "./node_modules/prism-react-renderer/themes/vsDark/index.js");



var _this = undefined,
    _jsxFileName = "D:\\windmill\\components\\CodeBlock.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      live = _ref.live,
      render = _ref.render;
  var language = className.replace(/language-/, '');

  if (live) {
    return __jsx("div", {
      className: "overflow-hidden rounded-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LiveProvider"], {
      code: children.trim(),
      transformCode: function transformCode(code) {
        return '/** @jsx mdx */' + "<>".concat(code, "</>");
      },
      scope: {
        mdx: _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__["mdx"]
      },
      theme: prism_react_renderer_themes_vsDark__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LivePreview"], {
      className: "p-4 border-t border-l border-r rounded-t-lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LiveEditor"], {
      className: "overflow-x-auto break-normal",
      style: {
        fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }), __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LiveError"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    })));
  }

  if (render) {
    return __jsx("div", {
      style: {
        marginTop: '40px'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LiveProvider"], {
      code: children,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, __jsx(react_live__WEBPACK_IMPORTED_MODULE_4__["LivePreview"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    })));
  }

  return __jsx(prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_3__["defaultProps"], {
    code: children,
    language: language,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), function (_ref2) {
    var className = _ref2.className,
        style = _ref2.style,
        tokens = _ref2.tokens,
        getLineProps = _ref2.getLineProps,
        getTokenProps = _ref2.getTokenProps;
    return __jsx("pre", {
      className: className,
      style: _objectSpread(_objectSpread({}, style), {}, {
        padding: '20px'
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, tokens.map(function (line, i) {
      return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: i
      }, getLineProps({
        line: line,
        key: i
      }), {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }
      }), line.map(function (token, key) {
        return __jsx("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: key
        }, getTokenProps({
          token: token,
          key: key
        }), {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }
        }));
      }));
    }));
  });
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvZGVCbG9jay5qc3giXSwibmFtZXMiOlsiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsaXZlIiwicmVuZGVyIiwibGFuZ3VhZ2UiLCJyZXBsYWNlIiwidHJpbSIsImNvZGUiLCJtZHgiLCJ0aGVtZSIsImZvbnRGYW1pbHkiLCJtYXJnaW5Ub3AiLCJkZWZhdWx0UHJvcHMiLCJzdHlsZSIsInRva2VucyIsImdldExpbmVQcm9wcyIsImdldFRva2VuUHJvcHMiLCJwYWRkaW5nIiwibWFwIiwibGluZSIsImkiLCJrZXkiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSwrRUFBMkM7QUFBQSxNQUF4Q0EsUUFBd0MsUUFBeENBLFFBQXdDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDeEQsTUFBTUMsUUFBUSxHQUFHSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0IsV0FBbEIsRUFBK0IsRUFBL0IsQ0FBakI7O0FBQ0EsTUFBSUgsSUFBSixFQUFVO0FBQ1IsV0FDRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUNFLFVBQUksRUFBRUYsUUFBUSxDQUFDTSxJQUFULEVBRFI7QUFFRSxtQkFBYSxFQUFFLHVCQUFDQyxJQUFEO0FBQUEsZUFBVSxnQ0FBeUJBLElBQXpCLFFBQVY7QUFBQSxPQUZqQjtBQUdFLFdBQUssRUFBRTtBQUFFQyxXQUFHLEVBQUhBLGlEQUFHQTtBQUFMLE9BSFQ7QUFJRSxXQUFLLEVBQUVDLDBFQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLRSxNQUFDLHNEQUFEO0FBQWEsZUFBUyxFQUFDLDZDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEYsRUFNRSxNQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFDLDhCQURaO0FBRUUsV0FBSyxFQUFFO0FBQ0xDLGtCQUFVLEVBQUU7QUFEUCxPQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORixFQVlFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpGLENBREYsQ0FERjtBQWtCRDs7QUFFRCxNQUFJUCxNQUFKLEVBQVk7QUFDVixXQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVRLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVEQUFEO0FBQWMsVUFBSSxFQUFFWCxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixDQURGO0FBT0Q7O0FBRUQsU0FDRSxNQUFDLDREQUFELHlGQUFlWSxpRUFBZjtBQUE2QixRQUFJLEVBQUVaLFFBQW5DO0FBQTZDLFlBQVEsRUFBRUksUUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNHO0FBQUEsUUFBR0gsU0FBSCxTQUFHQSxTQUFIO0FBQUEsUUFBY1ksS0FBZCxTQUFjQSxLQUFkO0FBQUEsUUFBcUJDLE1BQXJCLFNBQXFCQSxNQUFyQjtBQUFBLFFBQTZCQyxZQUE3QixTQUE2QkEsWUFBN0I7QUFBQSxRQUEyQ0MsYUFBM0MsU0FBMkNBLGFBQTNDO0FBQUEsV0FDQztBQUFLLGVBQVMsRUFBRWYsU0FBaEI7QUFBMkIsV0FBSyxrQ0FBT1ksS0FBUDtBQUFjSSxlQUFPLEVBQUU7QUFBdkIsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxhQUNWO0FBQUssV0FBRyxFQUFFQTtBQUFWLFNBQWlCTCxZQUFZLENBQUM7QUFBRUksWUFBSSxFQUFKQSxJQUFGO0FBQVFFLFdBQUcsRUFBRUQ7QUFBYixPQUFELENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDR0QsSUFBSSxDQUFDRCxHQUFMLENBQVMsVUFBQ0ksS0FBRCxFQUFRRCxHQUFSO0FBQUEsZUFDUjtBQUFNLGFBQUcsRUFBRUE7QUFBWCxXQUFvQkwsYUFBYSxDQUFDO0FBQUVNLGVBQUssRUFBTEEsS0FBRjtBQUFTRCxhQUFHLEVBQUhBO0FBQVQsU0FBRCxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFE7QUFBQSxPQUFULENBREgsQ0FEVTtBQUFBLEtBQVgsQ0FESCxDQUREO0FBQUEsR0FESCxDQURGO0FBZUQsQ0FoREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuMmQyMTRmODJlOGVlZTEwOTFjYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSAncHJpc20tcmVhY3QtcmVuZGVyZXInXG5pbXBvcnQgeyBMaXZlUHJvdmlkZXIsIExpdmVFZGl0b3IsIExpdmVFcnJvciwgTGl2ZVByZXZpZXcgfSBmcm9tICdyZWFjdC1saXZlJ1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcbmltcG9ydCB0aGVtZSBmcm9tICdwcmlzbS1yZWFjdC1yZW5kZXJlci90aGVtZXMvdnNEYXJrJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBsaXZlLCByZW5kZXIgfSkgPT4ge1xuICBjb25zdCBsYW5ndWFnZSA9IGNsYXNzTmFtZS5yZXBsYWNlKC9sYW5ndWFnZS0vLCAnJylcbiAgaWYgKGxpdmUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZ1wiPlxuICAgICAgICA8TGl2ZVByb3ZpZGVyXG4gICAgICAgICAgY29kZT17Y2hpbGRyZW4udHJpbSgpfVxuICAgICAgICAgIHRyYW5zZm9ybUNvZGU9eyhjb2RlKSA9PiAnLyoqIEBqc3ggbWR4ICovJyArIGA8PiR7Y29kZX08Lz5gfVxuICAgICAgICAgIHNjb3BlPXt7IG1keCB9fVxuICAgICAgICAgIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPExpdmVQcmV2aWV3IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBib3JkZXItbCBib3JkZXItciByb3VuZGVkLXQtbGdcIiAvPlxuICAgICAgICAgIDxMaXZlRWRpdG9yXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gYnJlYWstbm9ybWFsXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaXZlRXJyb3IgLz5cbiAgICAgICAgPC9MaXZlUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNDBweCcgfX0+XG4gICAgICAgIDxMaXZlUHJvdmlkZXIgY29kZT17Y2hpbGRyZW59PlxuICAgICAgICAgIDxMaXZlUHJldmlldyAvPlxuICAgICAgICA8L0xpdmVQcm92aWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEhpZ2hsaWdodCB7Li4uZGVmYXVsdFByb3BzfSBjb2RlPXtjaGlsZHJlbn0gbGFuZ3VhZ2U9e2xhbmd1YWdlfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxwcmUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXt7IC4uLnN0eWxlLCBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpfSB7Li4uZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pfT5cbiAgICAgICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtrZXl9IHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9wcmU+XG4gICAgICApfVxuICAgIDwvSGlnaGxpZ2h0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/empty-screen.tsx":
/*!*************************************!*\
  !*** ./components/empty-screen.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmptyScreen: function() { return /* binding */ EmptyScreen; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n\n\n\nconst exampleMessages = [\n    {\n        heading: \"Best noice-cancellation headphones\",\n        message: \"Best noice-cancellation headphones\"\n    },\n    {\n        heading: \"Is the Apple Vision Pro worth buying?\",\n        message: \"Is the Apple Vision Pro worth buying?\"\n    },\n    {\n        heading: \"Compare Apple iPhone 13 and Google Pixel 8\",\n        message: \"Compare Apple iPhone 13 and Google Pixel 8\"\n    },\n    {\n        heading: \"Is iPhone 15 waterproof?\",\n        message: \"Is iPhone 15 waterproof?\"\n    }\n];\nfunction EmptyScreen(param) {\n    let { submitMessage, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto w-full transition-all \".concat(className),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-background p-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex flex-col items-start space-y-2 mb-4\",\n                children: exampleMessages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"link\",\n                        className: \"h-auto p-0 text-base\",\n                        name: message.message,\n                        onClick: async ()=>{\n                            submitMessage(message.message);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                size: 16,\n                                className: \"mr-2 text-muted-foreground\"\n                            }, void 0, false, {\n                                fileName: \"/Users/amol/Documents/clearchoice/components/empty-screen.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, this),\n                            message.heading\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/empty-screen.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/empty-screen.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amol/Documents/clearchoice/components/empty-screen.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amol/Documents/clearchoice/components/empty-screen.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_c = EmptyScreen;\nvar _c;\n$RefreshReg$(_c, \"EmptyScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZW1wdHktc2NyZWVuLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUNOO0FBRXpDLE1BQU1FLGtCQUFrQjtJQUN0QjtRQUNFQyxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtJQUNBO1FBQ0VELFNBQVM7UUFDVEMsU0FBUztJQUNYO0lBQ0E7UUFDRUQsU0FBUztRQUNUQyxTQUFTO0lBQ1g7SUFDQTtRQUNFRCxTQUFTO1FBQ1RDLFNBQVM7SUFDWDtDQUNEO0FBQ00sU0FBU0MsWUFBWSxLQU0zQjtRQU4yQixFQUMxQkMsYUFBYSxFQUNiQyxTQUFTLEVBSVYsR0FOMkI7SUFPMUIscUJBQ0UsOERBQUNDO1FBQUlELFdBQVcsaUNBQTJDLE9BQVZBO2tCQUMvQyw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pMLGdCQUFnQk8sR0FBRyxDQUFDLENBQUNMLFNBQVNNLHNCQUM3Qiw4REFBQ1YseURBQU1BO3dCQUVMVyxTQUFRO3dCQUNSSixXQUFVO3dCQUNWSyxNQUFNUixRQUFRQSxPQUFPO3dCQUNyQlMsU0FBUzs0QkFDUFAsY0FBY0YsUUFBUUEsT0FBTzt3QkFDL0I7OzBDQUVBLDhEQUFDSCxzRkFBVUE7Z0NBQUNhLE1BQU07Z0NBQUlQLFdBQVU7Ozs7Ozs0QkFDL0JILFFBQVFELE9BQU87O3VCQVRYTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQm5CO0tBN0JnQkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbXB0eS1zY3JlZW4udHN4PzYzYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcbmltcG9ydCB7IEFycm93UmlnaHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5cbmNvbnN0IGV4YW1wbGVNZXNzYWdlcyA9IFtcbiAge1xuICAgIGhlYWRpbmc6ICdCZXN0IG5vaWNlLWNhbmNlbGxhdGlvbiBoZWFkcGhvbmVzJyxcbiAgICBtZXNzYWdlOiAnQmVzdCBub2ljZS1jYW5jZWxsYXRpb24gaGVhZHBob25lcydcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6ICdJcyB0aGUgQXBwbGUgVmlzaW9uIFBybyB3b3J0aCBidXlpbmc/JyxcbiAgICBtZXNzYWdlOiAnSXMgdGhlIEFwcGxlIFZpc2lvbiBQcm8gd29ydGggYnV5aW5nPydcbiAgfSxcbiAge1xuICAgIGhlYWRpbmc6ICdDb21wYXJlIEFwcGxlIGlQaG9uZSAxMyBhbmQgR29vZ2xlIFBpeGVsIDgnLFxuICAgIG1lc3NhZ2U6ICdDb21wYXJlIEFwcGxlIGlQaG9uZSAxMyBhbmQgR29vZ2xlIFBpeGVsIDgnXG4gIH0sXG4gIHtcbiAgICBoZWFkaW5nOiAnSXMgaVBob25lIDE1IHdhdGVycHJvb2Y/JyxcbiAgICBtZXNzYWdlOiAnSXMgaVBob25lIDE1IHdhdGVycHJvb2Y/J1xuICB9XG5dXG5leHBvcnQgZnVuY3Rpb24gRW1wdHlTY3JlZW4oe1xuICBzdWJtaXRNZXNzYWdlLFxuICBjbGFzc05hbWVcbn06IHtcbiAgc3VibWl0TWVzc2FnZTogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG14LWF1dG8gdy1mdWxsIHRyYW5zaXRpb24tYWxsICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1iYWNrZ3JvdW5kIHAtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBzcGFjZS15LTIgbWItNFwiPlxuICAgICAgICAgIHtleGFtcGxlTWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byBwLTAgdGV4dC1iYXNlXCJcbiAgICAgICAgICAgICAgbmFtZT17bWVzc2FnZS5tZXNzYWdlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3VibWl0TWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UpXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IHNpemU9ezE2fSBjbGFzc05hbWU9XCJtci0yIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiIC8+XG4gICAgICAgICAgICAgIHttZXNzYWdlLmhlYWRpbmd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkFycm93UmlnaHQiLCJleGFtcGxlTWVzc2FnZXMiLCJoZWFkaW5nIiwibWVzc2FnZSIsIkVtcHR5U2NyZWVuIiwic3VibWl0TWVzc2FnZSIsImNsYXNzTmFtZSIsImRpdiIsIm1hcCIsImluZGV4IiwidmFyaWFudCIsIm5hbWUiLCJvbkNsaWNrIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/empty-screen.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./components/chat-panel.tsx":
/*!***********************************!*\
  !*** ./components/chat-panel.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatPanel: function() { return /* binding */ ChatPanel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ai_rsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ai/rsc */ \"(app-pages-browser)/./node_modules/ai/rsc/dist/rsc-shared.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils/index.ts\");\n/* harmony import */ var _user_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-message */ \"(app-pages-browser)/./components/user-message.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Plus!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _empty_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-screen */ \"(app-pages-browser)/./components/empty-screen.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction ChatPanel() {\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useUIState)();\n    const [aiMessages, setAiMessages] = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useAIState)();\n    const { submit } = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useActions)();\n    const [isButtonPressed, setIsButtonPressed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showEmptyScreen, setShowEmptyScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Focus on input when button is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isButtonPressed) {\n            var _inputRef_current;\n            (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n            setIsButtonPressed(false);\n        }\n    }, [\n        isButtonPressed\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Clear messages if button is pressed\n        if (isButtonPressed) {\n            handleClear();\n            setIsButtonPressed(false);\n        }\n        // Add user message to UI state\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                {\n                    id: Date.now(),\n                    isGenerating: false,\n                    component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_message__WEBPACK_IMPORTED_MODULE_3__.UserMessage, {\n                        message: input\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 20\n                    }, this)\n                }\n            ]);\n        // Submit and get response message\n        const formData = new FormData(e.currentTarget);\n        const responseMessage = await submit(formData);\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                responseMessage\n            ]);\n        setInput(\"\");\n    };\n    // Clear messages\n    const handleClear = ()=>{\n        setIsButtonPressed(true);\n        setMessages([]);\n        setAiMessages([]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var // focus on input when the page loads\n        _inputRef_current;\n        (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.focus();\n    }, []);\n    // If there are messages and the new button has not been pressed, display the new Button\n    if (messages.length > 0 && !isButtonPressed) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed bottom-2 md:bottom-8 left-0 right-0 flex justify-center items-center mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                type: \"button\",\n                variant: \"secondary\",\n                className: \"rounded-full bg-secondary/80 group transition-all hover:scale-105\",\n                onClick: ()=>handleClear(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm mr-2 group-hover:block hidden animate-in fade-in duration-300\",\n                        children: \"New\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        size: 18,\n                        className: \"group-hover:rotate-90 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this);\n    }\n    // Condition 1 and 3: If there are no messages or the button is pressed, display the form\n    const formPositionClass = messages.length === 0 ? \"fixed bottom-8 left-0 right-0 top-10 mx-auto h-screen flex flex-col items-center justify-center\" : \"fixed bottom-8-ml-6\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: formPositionClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Your Trusted AI for Honest Product Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"max-w-2xl w-full px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex items-center w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                ref: inputRef,\n                                type: \"text\",\n                                name: \"input\",\n                                placeholder: \"Ask a question...\",\n                                value: input,\n                                className: \"pl-4 pr-10 h-12 rounded-full bg-muted\",\n                                onChange: (e)=>{\n                                    setInput(e.target.value);\n                                    setShowEmptyScreen(e.target.value.length === 0);\n                                },\n                                onFocus: ()=>setShowEmptyScreen(true),\n                                onBlur: ()=>setShowEmptyScreen(false)\n                            }, void 0, false, {\n                                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                size: \"icon\",\n                                variant: \"ghost\",\n                                className: \"absolute right-2 top-1/2 transform -translate-y-1/2\",\n                                disabled: input.length === 0,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_empty_screen__WEBPACK_IMPORTED_MODULE_6__.EmptyScreen, {\n                        submitMessage: (message)=>{\n                            setInput(message);\n                        },\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(showEmptyScreen ? \"visible\" : \"invisible\")\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatPanel, \"f0MujKNc0IrHgA1p7u0oiGz73Uo=\", false, function() {\n    return [\n        ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useUIState,\n        ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useAIState,\n        ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useActions\n    ];\n});\n_c = ChatPanel;\nvar _c;\n$RefreshReg$(_c, \"ChatPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2hhdC1wYW5lbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFUTtBQUMzQjtBQUNZO0FBQ1Y7QUFDRTtBQUNtQjtBQUNYO0FBRXJDLFNBQVNhOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2Qsa0RBQVVBO0lBQzFDLE1BQU0sQ0FBQ2UsWUFBWUMsY0FBYyxHQUFHZCxrREFBVUE7SUFDOUMsTUFBTSxFQUFFZSxNQUFNLEVBQUUsR0FBR2hCLGtEQUFVQTtJQUM3QixNQUFNLENBQUNpQixpQkFBaUJDLG1CQUFtQixHQUFHckIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTXNCLFdBQVdyQiw2Q0FBTUEsQ0FBbUI7SUFDMUMsTUFBTSxDQUFDc0IsaUJBQWlCQyxtQkFBbUIsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3ZELHdDQUF3QztJQUN4Q0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJcUIsaUJBQWlCO2dCQUNuQkU7YUFBQUEsb0JBQUFBLFNBQVNHLE9BQU8sY0FBaEJILHdDQUFBQSxrQkFBa0JJLEtBQUs7WUFDdkJMLG1CQUFtQjtRQUNyQjtJQUNGLEdBQUc7UUFBQ0Q7S0FBZ0I7SUFFcEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixzQ0FBc0M7UUFDdEMsSUFBSVQsaUJBQWlCO1lBQ25CVTtZQUNBVCxtQkFBbUI7UUFDckI7UUFFQSwrQkFBK0I7UUFDL0JMLFlBQVllLENBQUFBLGtCQUFtQjttQkFDMUJBO2dCQUNIO29CQUNFQyxJQUFJQyxLQUFLQyxHQUFHO29CQUNaQyxjQUFjO29CQUNkQyx5QkFBVyw4REFBQzlCLHNEQUFXQTt3QkFBQytCLFNBQVN4Qjs7Ozs7O2dCQUNuQzthQUNEO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU15QixXQUFXLElBQUlDLFNBQVNYLEVBQUVZLGFBQWE7UUFDN0MsTUFBTUMsa0JBQWtCLE1BQU10QixPQUFPbUI7UUFDckN0QixZQUFZZSxDQUFBQSxrQkFBbUI7bUJBQUlBO2dCQUFpQlU7YUFBdUI7UUFFM0UzQixTQUFTO0lBQ1g7SUFFQSxpQkFBaUI7SUFDakIsTUFBTWdCLGNBQWM7UUFDbEJULG1CQUFtQjtRQUNuQkwsWUFBWSxFQUFFO1FBQ2RFLGNBQWMsRUFBRTtJQUNsQjtJQUVBbkIsZ0RBQVNBLENBQUM7WUFDUixxQ0FBcUM7UUFDckN1QjtTQUFBQSxvQkFBQUEsU0FBU0csT0FBTyxjQUFoQkgsd0NBQUFBLGtCQUFrQkksS0FBSztJQUN6QixHQUFHLEVBQUU7SUFFTCx3RkFBd0Y7SUFDeEYsSUFBSVgsU0FBUzJCLE1BQU0sR0FBRyxLQUFLLENBQUN0QixpQkFBaUI7UUFDM0MscUJBQ0UsOERBQUN1QjtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDcEMsOENBQU1BO2dCQUNMcUMsTUFBSztnQkFDTEMsU0FBUztnQkFDVEYsV0FBVTtnQkFDVkcsU0FBUyxJQUFNakI7O2tDQUVmLDhEQUFDa0I7d0JBQUtKLFdBQVU7a0NBQXdFOzs7Ozs7a0NBR3hGLDhEQUFDbEMsMkZBQUlBO3dCQUFDdUMsTUFBTTt3QkFBSUwsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJbEM7SUFFQSx5RkFBeUY7SUFDekYsTUFBTU0sb0JBQ0puQyxTQUFTMkIsTUFBTSxLQUFLLElBQ2hCLG9HQUNBO0lBQ04scUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdNOzswQkFFZCw4REFBQ0M7Z0JBQUdQLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDUTtnQkFBS0MsVUFBVTFCO2dCQUFjaUIsV0FBVTs7a0NBQ3RDLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNyQyw0Q0FBS0E7Z0NBQ0orQyxLQUFLaEM7Z0NBQ0x1QixNQUFLO2dDQUNMVSxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxPQUFPNUM7Z0NBQ1ArQixXQUFVO2dDQUNWYyxVQUFVOUIsQ0FBQUE7b0NBQ1JkLFNBQVNjLEVBQUUrQixNQUFNLENBQUNGLEtBQUs7b0NBQ3ZCakMsbUJBQW1CSSxFQUFFK0IsTUFBTSxDQUFDRixLQUFLLENBQUNmLE1BQU0sS0FBSztnQ0FDL0M7Z0NBQ0FrQixTQUFTLElBQU1wQyxtQkFBbUI7Z0NBQ2xDcUMsUUFBUSxJQUFNckMsbUJBQW1COzs7Ozs7MENBRW5DLDhEQUFDaEIsOENBQU1BO2dDQUNMcUMsTUFBSztnQ0FDTEksTUFBTTtnQ0FDTkgsU0FBUztnQ0FDVEYsV0FBVTtnQ0FDVmtCLFVBQVVqRCxNQUFNNkIsTUFBTSxLQUFLOzBDQUUzQiw0RUFBQ2pDLDJGQUFVQTtvQ0FBQ3dDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd0Qiw4REFBQ3RDLHNEQUFXQTt3QkFDVm9ELGVBQWUxQixDQUFBQTs0QkFDYnZCLFNBQVN1Qjt3QkFDWDt3QkFDQU8sV0FBV3ZDLDhDQUFFQSxDQUFDa0Isa0JBQWtCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RDtHQXRIZ0JYOztRQUVrQlYsOENBQVVBO1FBQ05FLDhDQUFVQTtRQUMzQkQsOENBQVVBOzs7S0FKZlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0LXBhbmVsLnRzeD9jMTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBBSSB9IGZyb20gJ0AvYXBwL2FjdGlvbidcbmltcG9ydCB7IHVzZVVJU3RhdGUsIHVzZUFjdGlvbnMsIHVzZUFJU3RhdGUgfSBmcm9tICdhaS9yc2MnXG5pbXBvcnQgeyBjbiB9IGZyb20gJ0AvbGliL3V0aWxzJ1xuaW1wb3J0IHsgVXNlck1lc3NhZ2UgfSBmcm9tICcuL3VzZXItbWVzc2FnZSdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi91aS9pbnB1dCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJ1xuaW1wb3J0IHsgQXJyb3dSaWdodCwgUGx1cywgU3F1YXJlIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgRW1wdHlTY3JlZW4gfSBmcm9tICcuL2VtcHR5LXNjcmVlbidcblxuZXhwb3J0IGZ1bmN0aW9uIENoYXRQYW5lbCgpIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VVSVN0YXRlPHR5cGVvZiBBST4oKVxuICBjb25zdCBbYWlNZXNzYWdlcywgc2V0QWlNZXNzYWdlc10gPSB1c2VBSVN0YXRlPHR5cGVvZiBBST4oKVxuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlQWN0aW9uczx0eXBlb2YgQUk+KClcbiAgY29uc3QgW2lzQnV0dG9uUHJlc3NlZCwgc2V0SXNCdXR0b25QcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxuICBjb25zdCBbc2hvd0VtcHR5U2NyZWVuLCBzZXRTaG93RW1wdHlTY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIC8vIEZvY3VzIG9uIGlucHV0IHdoZW4gYnV0dG9uIGlzIHByZXNzZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNCdXR0b25QcmVzc2VkKSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpXG4gICAgICBzZXRJc0J1dHRvblByZXNzZWQoZmFsc2UpXG4gICAgfVxuICB9LCBbaXNCdXR0b25QcmVzc2VkXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vIENsZWFyIG1lc3NhZ2VzIGlmIGJ1dHRvbiBpcyBwcmVzc2VkXG4gICAgaWYgKGlzQnV0dG9uUHJlc3NlZCkge1xuICAgICAgaGFuZGxlQ2xlYXIoKVxuICAgICAgc2V0SXNCdXR0b25QcmVzc2VkKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIEFkZCB1c2VyIG1lc3NhZ2UgdG8gVUkgc3RhdGVcbiAgICBzZXRNZXNzYWdlcyhjdXJyZW50TWVzc2FnZXMgPT4gW1xuICAgICAgLi4uY3VycmVudE1lc3NhZ2VzLFxuICAgICAge1xuICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgaXNHZW5lcmF0aW5nOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50OiA8VXNlck1lc3NhZ2UgbWVzc2FnZT17aW5wdXR9IC8+XG4gICAgICB9XG4gICAgXSlcblxuICAgIC8vIFN1Ym1pdCBhbmQgZ2V0IHJlc3BvbnNlIG1lc3NhZ2VcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLmN1cnJlbnRUYXJnZXQpXG4gICAgY29uc3QgcmVzcG9uc2VNZXNzYWdlID0gYXdhaXQgc3VibWl0KGZvcm1EYXRhKVxuICAgIHNldE1lc3NhZ2VzKGN1cnJlbnRNZXNzYWdlcyA9PiBbLi4uY3VycmVudE1lc3NhZ2VzLCByZXNwb25zZU1lc3NhZ2UgYXMgYW55XSlcblxuICAgIHNldElucHV0KCcnKVxuICB9XG5cbiAgLy8gQ2xlYXIgbWVzc2FnZXNcbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XG4gICAgc2V0SXNCdXR0b25QcmVzc2VkKHRydWUpXG4gICAgc2V0TWVzc2FnZXMoW10pXG4gICAgc2V0QWlNZXNzYWdlcyhbXSlcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZm9jdXMgb24gaW5wdXQgd2hlbiB0aGUgcGFnZSBsb2Fkc1xuICAgIGlucHV0UmVmLmN1cnJlbnQ/LmZvY3VzKClcbiAgfSwgW10pXG5cbiAgLy8gSWYgdGhlcmUgYXJlIG1lc3NhZ2VzIGFuZCB0aGUgbmV3IGJ1dHRvbiBoYXMgbm90IGJlZW4gcHJlc3NlZCwgZGlzcGxheSB0aGUgbmV3IEJ1dHRvblxuICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhaXNCdXR0b25QcmVzc2VkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTIgbWQ6Ym90dG9tLTggbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD17J3NlY29uZGFyeSd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeS84MCBncm91cCB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsZWFyKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1yLTIgZ3JvdXAtaG92ZXI6YmxvY2sgaGlkZGVuIGFuaW1hdGUtaW4gZmFkZS1pbiBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgIE5ld1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8UGx1cyBzaXplPXsxOH0gY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6cm90YXRlLTkwIHRyYW5zaXRpb24tYWxsXCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyBDb25kaXRpb24gMSBhbmQgMzogSWYgdGhlcmUgYXJlIG5vIG1lc3NhZ2VzIG9yIHRoZSBidXR0b24gaXMgcHJlc3NlZCwgZGlzcGxheSB0aGUgZm9ybVxuICBjb25zdCBmb3JtUG9zaXRpb25DbGFzcyA9XG4gICAgbWVzc2FnZXMubGVuZ3RoID09PSAwXG4gICAgICA/ICdmaXhlZCBib3R0b20tOCBsZWZ0LTAgcmlnaHQtMCB0b3AtMTAgbXgtYXV0byBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcidcbiAgICAgIDogJ2ZpeGVkIGJvdHRvbS04LW1sLTYnXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1Qb3NpdGlvbkNsYXNzfT5cbiAgICAgIHsvKiA8SWNvbkt1cm9rbyBjbGFzc05hbWU9XCJ3LTYgaC02IG1iLTRcIiAvPiAqL31cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPllvdXIgVHJ1c3RlZCBBSSBmb3IgSG9uZXN0IFByb2R1Y3QgUmV2aWV3czwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtYXgtdy0yeGwgdy1mdWxsIHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgYSBxdWVzdGlvbi4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IHByLTEwIGgtMTIgcm91bmRlZC1mdWxsIGJnLW11dGVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIHNldFNob3dFbXB0eVNjcmVlbihlLnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2hvd0VtcHR5U2NyZWVuKHRydWUpfVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRTaG93RW1wdHlTY3JlZW4oZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBzaXplPXsnaWNvbid9XG4gICAgICAgICAgICB2YXJpYW50PXsnZ2hvc3QnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpbnB1dC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93UmlnaHQgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RW1wdHlTY3JlZW5cbiAgICAgICAgICBzdWJtaXRNZXNzYWdlPXttZXNzYWdlID0+IHtcbiAgICAgICAgICAgIHNldElucHV0KG1lc3NhZ2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKHNob3dFbXB0eVNjcmVlbiA/ICd2aXNpYmxlJyA6ICdpbnZpc2libGUnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlVUlTdGF0ZSIsInVzZUFjdGlvbnMiLCJ1c2VBSVN0YXRlIiwiY24iLCJVc2VyTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiQXJyb3dSaWdodCIsIlBsdXMiLCJFbXB0eVNjcmVlbiIsIkNoYXRQYW5lbCIsImlucHV0Iiwic2V0SW5wdXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWlNZXNzYWdlcyIsInNldEFpTWVzc2FnZXMiLCJzdWJtaXQiLCJpc0J1dHRvblByZXNzZWQiLCJzZXRJc0J1dHRvblByZXNzZWQiLCJpbnB1dFJlZiIsInNob3dFbXB0eVNjcmVlbiIsInNldFNob3dFbXB0eVNjcmVlbiIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsZWFyIiwiY3VycmVudE1lc3NhZ2VzIiwiaWQiLCJEYXRlIiwibm93IiwiaXNHZW5lcmF0aW5nIiwiY29tcG9uZW50IiwibWVzc2FnZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2VNZXNzYWdlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwic3BhbiIsInNpemUiLCJmb3JtUG9zaXRpb25DbGFzcyIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwicmVmIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJkaXNhYmxlZCIsInN1Ym1pdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/chat-panel.tsx\n"));

/***/ })

});
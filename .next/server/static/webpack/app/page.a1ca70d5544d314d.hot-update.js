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

/***/ "(ssr)/./components/chat-panel.tsx":
/*!***********************************!*\
  !*** ./components/chat-panel.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatPanel: () => (/* binding */ ChatPanel)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ai_rsc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ai/rsc */ \"(ssr)/./node_modules/ai/rsc/dist/rsc-shared.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(ssr)/./lib/utils/index.ts\");\n/* harmony import */ var _user_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-message */ \"(ssr)/./components/user-message.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/input */ \"(ssr)/./components/ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"(ssr)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Plus!=!lucide-react */ \"(ssr)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRight,Plus!=!lucide-react */ \"(ssr)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _empty_screen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-screen */ \"(ssr)/./components/empty-screen.tsx\");\n\n\n\n\n\n\n\n\n\nfunction ChatPanel() {\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [messages, setMessages] = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useUIState)();\n    const [aiMessages, setAiMessages] = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useAIState)();\n    const { submit } = (0,ai_rsc__WEBPACK_IMPORTED_MODULE_7__.useActions)();\n    const [isButtonPressed, setIsButtonPressed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [showEmptyScreen, setShowEmptyScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Focus on input when button is pressed\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isButtonPressed) {\n            inputRef.current?.focus();\n            setIsButtonPressed(false);\n        }\n    }, [\n        isButtonPressed\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Clear messages if button is pressed\n        if (isButtonPressed) {\n            handleClear();\n            setIsButtonPressed(false);\n        }\n        // Add user message to UI state\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                {\n                    id: Date.now(),\n                    isGenerating: false,\n                    component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_user_message__WEBPACK_IMPORTED_MODULE_3__.UserMessage, {\n                        message: input\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 20\n                    }, this)\n                }\n            ]);\n        // Submit and get response message\n        const formData = new FormData(e.currentTarget);\n        const responseMessage = await submit(formData);\n        setMessages((currentMessages)=>[\n                ...currentMessages,\n                responseMessage\n            ]);\n        setInput(\"\");\n    };\n    // Clear messages\n    const handleClear = ()=>{\n        setIsButtonPressed(true);\n        setMessages([]);\n        setAiMessages([]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // focus on input when the page loads\n        inputRef.current?.focus();\n    }, []);\n    // If there are messages and the new button has not been pressed, display the new Button\n    if (messages.length > 0 && !isButtonPressed) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed bottom-2 md:bottom-8 left-0 right-0 flex justify-center items-center mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                type: \"button\",\n                variant: \"secondary\",\n                className: \"rounded-full bg-secondary/80 group transition-all hover:scale-105\",\n                onClick: ()=>handleClear(),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm mr-2 group-hover:block hidden animate-in fade-in duration-300\",\n                        children: \"New\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        size: 18,\n                        className: \"group-hover:rotate-90 transition-all\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this);\n    }\n    // Condition 1 and 3: If there are no messages or the button is pressed, display the form\n    const formPositionClass = messages.length === 0 ? \"fixed bottom-8 left-0 right-0 top-10 mx-auto h-screen flex flex-col items-center justify-center\" : \"fixed bottom-8-ml-6\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: formPositionClass,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Trusted Source for Honest Product Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"max-w-2xl w-full px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex items-center w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                                ref: inputRef,\n                                type: \"text\",\n                                name: \"input\",\n                                placeholder: \"Ask a question...\",\n                                value: input,\n                                className: \"pl-4 pr-10 h-12 rounded-full bg-muted\",\n                                onChange: (e)=>{\n                                    setInput(e.target.value);\n                                    setShowEmptyScreen(e.target.value.length === 0);\n                                },\n                                onFocus: ()=>setShowEmptyScreen(true),\n                                onBlur: ()=>setShowEmptyScreen(false)\n                            }, void 0, false, {\n                                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                type: \"submit\",\n                                size: \"icon\",\n                                variant: \"ghost\",\n                                className: \"absolute right-2 top-1/2 transform -translate-y-1/2\",\n                                disabled: input.length === 0,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRight_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    size: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_empty_screen__WEBPACK_IMPORTED_MODULE_6__.EmptyScreen, {\n                        submitMessage: (message)=>{\n                            setInput(message);\n                        },\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(showEmptyScreen ? \"visible\" : \"invisible\")\n                    }, void 0, false, {\n                        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amol/Documents/clearchoice/components/chat-panel.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9jb21wb25lbnRzL2NoYXQtcGFuZWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFUTtBQUMzQjtBQUNZO0FBQ1Y7QUFDRTtBQUNtQjtBQUNYO0FBRXJDLFNBQVNhO0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2UsVUFBVUMsWUFBWSxHQUFHZCxrREFBVUE7SUFDMUMsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdkLGtEQUFVQTtJQUM5QyxNQUFNLEVBQUVlLE1BQU0sRUFBRSxHQUFHaEIsa0RBQVVBO0lBQzdCLE1BQU0sQ0FBQ2lCLGlCQUFpQkMsbUJBQW1CLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNc0IsV0FBV3JCLDZDQUFNQSxDQUFtQjtJQUMxQyxNQUFNLENBQUNzQixpQkFBaUJDLG1CQUFtQixHQUFHeEIsK0NBQVFBLENBQUM7SUFDdkQsd0NBQXdDO0lBQ3hDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlxQixpQkFBaUI7WUFDbkJFLFNBQVNHLE9BQU8sRUFBRUM7WUFDbEJMLG1CQUFtQjtRQUNyQjtJQUNGLEdBQUc7UUFBQ0Q7S0FBZ0I7SUFFcEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixzQ0FBc0M7UUFDdEMsSUFBSVQsaUJBQWlCO1lBQ25CVTtZQUNBVCxtQkFBbUI7UUFDckI7UUFFQSwrQkFBK0I7UUFDL0JMLFlBQVllLENBQUFBLGtCQUFtQjttQkFDMUJBO2dCQUNIO29CQUNFQyxJQUFJQyxLQUFLQyxHQUFHO29CQUNaQyxjQUFjO29CQUNkQyx5QkFBVyw4REFBQzlCLHNEQUFXQTt3QkFBQytCLFNBQVN4Qjs7Ozs7O2dCQUNuQzthQUNEO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU15QixXQUFXLElBQUlDLFNBQVNYLEVBQUVZLGFBQWE7UUFDN0MsTUFBTUMsa0JBQWtCLE1BQU10QixPQUFPbUI7UUFDckN0QixZQUFZZSxDQUFBQSxrQkFBbUI7bUJBQUlBO2dCQUFpQlU7YUFBdUI7UUFFM0UzQixTQUFTO0lBQ1g7SUFFQSxpQkFBaUI7SUFDakIsTUFBTWdCLGNBQWM7UUFDbEJULG1CQUFtQjtRQUNuQkwsWUFBWSxFQUFFO1FBQ2RFLGNBQWMsRUFBRTtJQUNsQjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUixxQ0FBcUM7UUFDckN1QixTQUFTRyxPQUFPLEVBQUVDO0lBQ3BCLEdBQUcsRUFBRTtJQUVMLHdGQUF3RjtJQUN4RixJQUFJWCxTQUFTMkIsTUFBTSxHQUFHLEtBQUssQ0FBQ3RCLGlCQUFpQjtRQUMzQyxxQkFDRSw4REFBQ3VCO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNwQyw4Q0FBTUE7Z0JBQ0xxQyxNQUFLO2dCQUNMQyxTQUFTO2dCQUNURixXQUFVO2dCQUNWRyxTQUFTLElBQU1qQjs7a0NBRWYsOERBQUNrQjt3QkFBS0osV0FBVTtrQ0FBd0U7Ozs7OztrQ0FHeEYsOERBQUNsQywyRkFBSUE7d0JBQUN1QyxNQUFNO3dCQUFJTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztJQUlsQztJQUVBLHlGQUF5RjtJQUN6RixNQUFNTSxvQkFDSm5DLFNBQVMyQixNQUFNLEtBQUssSUFDaEIsb0dBQ0E7SUFDTixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV007OzBCQUVkLDhEQUFDQztnQkFBR1AsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNRO2dCQUFLQyxVQUFVMUI7Z0JBQWNpQixXQUFVOztrQ0FDdEMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3JDLDRDQUFLQTtnQ0FDSitDLEtBQUtoQztnQ0FDTHVCLE1BQUs7Z0NBQ0xVLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU81QztnQ0FDUCtCLFdBQVU7Z0NBQ1ZjLFVBQVU5QixDQUFBQTtvQ0FDUmQsU0FBU2MsRUFBRStCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDdkJqQyxtQkFBbUJJLEVBQUUrQixNQUFNLENBQUNGLEtBQUssQ0FBQ2YsTUFBTSxLQUFLO2dDQUMvQztnQ0FDQWtCLFNBQVMsSUFBTXBDLG1CQUFtQjtnQ0FDbENxQyxRQUFRLElBQU1yQyxtQkFBbUI7Ozs7OzswQ0FFbkMsOERBQUNoQiw4Q0FBTUE7Z0NBQ0xxQyxNQUFLO2dDQUNMSSxNQUFNO2dDQUNOSCxTQUFTO2dDQUNURixXQUFVO2dDQUNWa0IsVUFBVWpELE1BQU02QixNQUFNLEtBQUs7MENBRTNCLDRFQUFDakMsMkZBQVVBO29DQUFDd0MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3RCLDhEQUFDdEMsc0RBQVdBO3dCQUNWb0QsZUFBZTFCLENBQUFBOzRCQUNidkIsU0FBU3VCO3dCQUNYO3dCQUNBTyxXQUFXdkMsOENBQUVBLENBQUNrQixrQkFBa0IsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdC1wYW5lbC50c3g/YzE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQUkgfSBmcm9tICdAL2FwcC9hY3Rpb24nXG5pbXBvcnQgeyB1c2VVSVN0YXRlLCB1c2VBY3Rpb25zLCB1c2VBSVN0YXRlIH0gZnJvbSAnYWkvcnNjJ1xuaW1wb3J0IHsgY24gfSBmcm9tICdAL2xpYi91dGlscydcbmltcG9ydCB7IFVzZXJNZXNzYWdlIH0gZnJvbSAnLi91c2VyLW1lc3NhZ2UnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vdWkvaW5wdXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbidcbmltcG9ydCB7IEFycm93UmlnaHQsIFBsdXMsIFNxdWFyZSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IEVtcHR5U2NyZWVuIH0gZnJvbSAnLi9lbXB0eS1zY3JlZW4nXG5cbmV4cG9ydCBmdW5jdGlvbiBDaGF0UGFuZWwoKSB7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlVUlTdGF0ZTx0eXBlb2YgQUk+KClcbiAgY29uc3QgW2FpTWVzc2FnZXMsIHNldEFpTWVzc2FnZXNdID0gdXNlQUlTdGF0ZTx0eXBlb2YgQUk+KClcbiAgY29uc3QgeyBzdWJtaXQgfSA9IHVzZUFjdGlvbnM8dHlwZW9mIEFJPigpXG4gIGNvbnN0IFtpc0J1dHRvblByZXNzZWQsIHNldElzQnV0dG9uUHJlc3NlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcbiAgY29uc3QgW3Nob3dFbXB0eVNjcmVlbiwgc2V0U2hvd0VtcHR5U2NyZWVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAvLyBGb2N1cyBvbiBpbnB1dCB3aGVuIGJ1dHRvbiBpcyBwcmVzc2VkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzQnV0dG9uUHJlc3NlZCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudD8uZm9jdXMoKVxuICAgICAgc2V0SXNCdXR0b25QcmVzc2VkKGZhbHNlKVxuICAgIH1cbiAgfSwgW2lzQnV0dG9uUHJlc3NlZF0pXG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBDbGVhciBtZXNzYWdlcyBpZiBidXR0b24gaXMgcHJlc3NlZFxuICAgIGlmIChpc0J1dHRvblByZXNzZWQpIHtcbiAgICAgIGhhbmRsZUNsZWFyKClcbiAgICAgIHNldElzQnV0dG9uUHJlc3NlZChmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBBZGQgdXNlciBtZXNzYWdlIHRvIFVJIHN0YXRlXG4gICAgc2V0TWVzc2FnZXMoY3VycmVudE1lc3NhZ2VzID0+IFtcbiAgICAgIC4uLmN1cnJlbnRNZXNzYWdlcyxcbiAgICAgIHtcbiAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgIGlzR2VuZXJhdGluZzogZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudDogPFVzZXJNZXNzYWdlIG1lc3NhZ2U9e2lucHV0fSAvPlxuICAgICAgfVxuICAgIF0pXG5cbiAgICAvLyBTdWJtaXQgYW5kIGdldCByZXNwb25zZSBtZXNzYWdlXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS5jdXJyZW50VGFyZ2V0KVxuICAgIGNvbnN0IHJlc3BvbnNlTWVzc2FnZSA9IGF3YWl0IHN1Ym1pdChmb3JtRGF0YSlcbiAgICBzZXRNZXNzYWdlcyhjdXJyZW50TWVzc2FnZXMgPT4gWy4uLmN1cnJlbnRNZXNzYWdlcywgcmVzcG9uc2VNZXNzYWdlIGFzIGFueV0pXG5cbiAgICBzZXRJbnB1dCgnJylcbiAgfVxuXG4gIC8vIENsZWFyIG1lc3NhZ2VzXG4gIGNvbnN0IGhhbmRsZUNsZWFyID0gKCkgPT4ge1xuICAgIHNldElzQnV0dG9uUHJlc3NlZCh0cnVlKVxuICAgIHNldE1lc3NhZ2VzKFtdKVxuICAgIHNldEFpTWVzc2FnZXMoW10pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIGlucHV0IHdoZW4gdGhlIHBhZ2UgbG9hZHNcbiAgICBpbnB1dFJlZi5jdXJyZW50Py5mb2N1cygpXG4gIH0sIFtdKVxuXG4gIC8vIElmIHRoZXJlIGFyZSBtZXNzYWdlcyBhbmQgdGhlIG5ldyBidXR0b24gaGFzIG5vdCBiZWVuIHByZXNzZWQsIGRpc3BsYXkgdGhlIG5ldyBCdXR0b25cbiAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgIWlzQnV0dG9uUHJlc3NlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0yIG1kOmJvdHRvbS04IGxlZnQtMCByaWdodC0wIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9eydzZWNvbmRhcnknfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnkvODAgZ3JvdXAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGVhcigpfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBtci0yIGdyb3VwLWhvdmVyOmJsb2NrIGhpZGRlbiBhbmltYXRlLWluIGZhZGUtaW4gZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICBOZXdcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFBsdXMgc2l6ZT17MTh9IGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOnJvdGF0ZS05MCB0cmFuc2l0aW9uLWFsbFwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8gQ29uZGl0aW9uIDEgYW5kIDM6IElmIHRoZXJlIGFyZSBubyBtZXNzYWdlcyBvciB0aGUgYnV0dG9uIGlzIHByZXNzZWQsIGRpc3BsYXkgdGhlIGZvcm1cbiAgY29uc3QgZm9ybVBvc2l0aW9uQ2xhc3MgPVxuICAgIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMFxuICAgICAgPyAnZml4ZWQgYm90dG9tLTggbGVmdC0wIHJpZ2h0LTAgdG9wLTEwIG14LWF1dG8gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInXG4gICAgICA6ICdmaXhlZCBib3R0b20tOC1tbC02J1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtUG9zaXRpb25DbGFzc30+XG4gICAgICB7LyogPEljb25LdXJva28gY2xhc3NOYW1lPVwidy02IGgtNiBtYi00XCIgLz4gKi99XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTRcIj5UcnVzdGVkIFNvdXJjZSBmb3IgSG9uZXN0IFByb2R1Y3QgUmV2aWV3czwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJtYXgtdy0yeGwgdy1mdWxsIHB4LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiaW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBc2sgYSBxdWVzdGlvbi4uLlwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IHByLTEwIGgtMTIgcm91bmRlZC1mdWxsIGJnLW11dGVkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIHNldFNob3dFbXB0eVNjcmVlbihlLnRhcmdldC52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2hvd0VtcHR5U2NyZWVuKHRydWUpfVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRTaG93RW1wdHlTY3JlZW4oZmFsc2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBzaXplPXsnaWNvbid9XG4gICAgICAgICAgICB2YXJpYW50PXsnZ2hvc3QnfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpbnB1dC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFycm93UmlnaHQgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RW1wdHlTY3JlZW5cbiAgICAgICAgICBzdWJtaXRNZXNzYWdlPXttZXNzYWdlID0+IHtcbiAgICAgICAgICAgIHNldElucHV0KG1lc3NhZ2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e2NuKHNob3dFbXB0eVNjcmVlbiA/ICd2aXNpYmxlJyA6ICdpbnZpc2libGUnKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlVUlTdGF0ZSIsInVzZUFjdGlvbnMiLCJ1c2VBSVN0YXRlIiwiY24iLCJVc2VyTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiQXJyb3dSaWdodCIsIlBsdXMiLCJFbXB0eVNjcmVlbiIsIkNoYXRQYW5lbCIsImlucHV0Iiwic2V0SW5wdXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiYWlNZXNzYWdlcyIsInNldEFpTWVzc2FnZXMiLCJzdWJtaXQiLCJpc0J1dHRvblByZXNzZWQiLCJzZXRJc0J1dHRvblByZXNzZWQiLCJpbnB1dFJlZiIsInNob3dFbXB0eVNjcmVlbiIsInNldFNob3dFbXB0eVNjcmVlbiIsImN1cnJlbnQiLCJmb2N1cyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsZWFyIiwiY3VycmVudE1lc3NhZ2VzIiwiaWQiLCJEYXRlIiwibm93IiwiaXNHZW5lcmF0aW5nIiwiY29tcG9uZW50IiwibWVzc2FnZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2VNZXNzYWdlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsInZhcmlhbnQiLCJvbkNsaWNrIiwic3BhbiIsInNpemUiLCJmb3JtUG9zaXRpb25DbGFzcyIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwicmVmIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJkaXNhYmxlZCIsInN1Ym1pdE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./components/chat-panel.tsx\n");

/***/ })

});
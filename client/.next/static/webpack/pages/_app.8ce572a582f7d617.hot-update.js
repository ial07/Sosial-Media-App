"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Nav = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), current = ref1[0], setCurrent = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n         true && setCurrent(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var logout = function() {\n        router.push(\"/login\");\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg bg-light\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"logo\",\n                        children: \"S.O.S-IAL MEDIA\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNavAltMarkup\",\n                    \"aria-controls\": \"navbarNavAltMarkup\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarNavAltMarkup\",\n                    children: state === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link \".concat(current === \"/login\" && \"linkko\"),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"nav-link \".concat(current === \"/register\" && \"linkko\"),\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"nav-item\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/dashboard\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"nav-link \".concat(current === \"/user/dashboard\" && \"linkko\"),\n                                            children: \"NEWSFEEDS\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dropdown dropstart\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserOutlined, {\n                                        className: \"btn dropdown-toggle\",\n                                        \"data-bs-toggle\": \"dropdown\",\n                                        \"aria-expanded\": \"false\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"dropdown-menu\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/user/profile/update\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item \".concat(current === \"/user/profile/update\" && \"linkko\"),\n                                                        children: state && state.user && state.user.name\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                    lineNumber: 78,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, _this),\n                                            state.user.role === \"Admin\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    href: \"/admin\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"dropdown-item \".concat(current === \"/admin\" && \"linkko\"),\n                                                        children: state && state.user && state.user.name\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 23\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                                    className: \"dropdown-divider\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"dropdown-item\",\n                                                    onClick: logout,\n                                                    children: \"Logout\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\NEXT\\\\Sosial Media App\\\\client\\\\components\\\\Nav.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Nav, \"uN5HzMqcEnyKlUrHvoRaTl/DGrI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEM7MERBQ0wsOERBQUNjLElBQUU7MERBQ0QsNEVBQUNYLEdBQUM7b0RBQUNILFNBQVMsRUFBQyxlQUFlO29EQUFDbUIsT0FBTyxFQUFFeEIsTUFBTTs4REFBRSxRQUU5Qzs7Ozs7eURBQUk7Ozs7O3FEQUNEOzs7Ozs7NkNBQ0Y7Ozs7OztxQ0FDRDs7b0NBQ0w7Ozs7O3lCQUVEOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBOUdLWCxHQUFHOztRQVFRRixrREFBUzs7O0FBUnBCRSxLQUFBQSxHQUFHO0FBZ0hULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFwiKTtcclxuICAgIHNldFN0YXRlKG51bGwpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgYmctbGlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiPlMuTy5TLUlBTCBNRURJQTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZBbHRNYXJrdXBcIlxyXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiXHJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XHJcbiAgICAgICAgICB7c3RhdGUgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YG5hdi1saW5rICR7Y3VycmVudCA9PT0gXCIvbG9naW5cIiAmJiBcImxpbmtrb1wifWB9PlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke2N1cnJlbnQgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJsaW5ra29cIn1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID09PSBcIi91c2VyL2Rhc2hib2FyZFwiICYmIFwibGlua2tvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE5FV1NGRUVEU1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcHN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL3Byb2ZpbGUvdXBkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1pdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvdXNlci9wcm9maWxlL3VwZGF0ZVwiICYmIFwibGlua2tvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyLnJvbGUgPT09IFwiQWRtaW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLWl0ZW0gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL2FkbWluXCIgJiYgXCJsaW5ra29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1kaXZpZGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIiBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJVc2VyQ29udGV4dCIsInVzZVJvdXRlciIsIlVzZXJPdXRsaW5lZCIsIk5hdiIsInN0YXRlIiwic2V0U3RhdGUiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJvdXRlciIsImxvZ291dCIsInB1c2giLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImEiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCIsInVsIiwibGkiLCJ1c2VyIiwibmFtZSIsInJvbGUiLCJociIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n"));

/***/ })

});
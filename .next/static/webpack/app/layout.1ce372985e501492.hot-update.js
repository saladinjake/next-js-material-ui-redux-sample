"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/components/shared/Navbar.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/shared/Navbar.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _app_components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/basic */ \"(app-pages-browser)/./src/app/components/basic/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavigationComponent = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openWish, setOpenWishList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenToggle = ()=>setToggle(true);\n    const handleCloseToggle = ()=>setToggle(false);\n    const openWishList = ()=>setOpenWishList(true);\n    const closeWishList = ()=>setOpenWishList(false);\n    const [canOpen, setCanOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const openNavMenu = (event)=>{\n        setCanOpen(event.currentTarget);\n    };\n    const closeNavMenu = ()=>{\n        setCanOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        position: \"static\",\n        sx: {\n            backgroundColor: \"background.paper\",\n            boxShadow: \"none\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                maxWidth: \"xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    disableGutters: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AppLogo, {\n                            basic: true\n                        }, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.MenuItems, {\n                            openCart: handleOpenToggle,\n                            openNavMenu: openNavMenu,\n                            closeNavMenu: closeNavMenu,\n                            openModal: openWishList,\n                            canOpen: canOpen\n                        }, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AppLogo, {}, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                flexGrow: 1,\n                                display: {\n                                    xs: \"none\",\n                                    md: \"flex\"\n                                },\n                                justifyContent: \"space-between\",\n                                marginLeft: \"40px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.PublicLinks, {}, void 0, false, {\n                                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AuthLinks, {}, void 0, false, {\n                                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.ShopingCartInformationModal, {\n                closeCart: handleCloseToggle,\n                canOpen: toggle\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.WishListInformationModal, {\n                openWishList: openWish,\n                closeWishList: closeWishList\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationComponent, \"AvKuOThSQCYqRz6z4oRz0m9Ng08=\");\n_c = NavigationComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationComponent);\nvar _c;\n$RefreshReg$(_c, \"NavigationComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1QztBQVdRO0FBR047QUFDTjtBQUNRO0FBV1o7QUFFL0IsTUFBTVksc0JBQXNCOztJQUMxQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDYyxVQUFVQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDN0MsTUFBTWdCLG1CQUFtQixJQUFNSCxVQUFVO0lBQ3pDLE1BQU1JLG9CQUFvQixJQUFNSixVQUFVO0lBRTFDLE1BQU1LLGVBQWUsSUFBTUgsZ0JBQWdCO0lBQzNDLE1BQU1JLGdCQUFnQixJQUFNSixnQkFBZ0I7SUFFNUMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUd0QixxREFBYyxDQUF3QjtJQUVwRSxNQUFNdUIsY0FBYyxDQUFDQztRQUNuQkYsV0FBV0UsTUFBTUMsYUFBYTtJQUNoQztJQUVBLE1BQU1DLGVBQWU7UUFDbkJKLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDbkIsNERBQU1BO1FBQ0x3QixVQUFTO1FBQ1RDLElBQUk7WUFBRUMsaUJBQWlCO1lBQW9CQyxXQUFXO1FBQU87OzBCQUU3RCw4REFBQzVCLCtEQUFTQTtnQkFBQzZCLFVBQVM7MEJBQ2xCLDRFQUFDMUIsNkRBQU9BO29CQUFDMkIsY0FBYzs7c0NBQ3JCLDhEQUFDMUIsMERBQU9BOzRCQUFDMkIsS0FBSzs7Ozs7O3NDQUVkLDhEQUFDMUIsNERBQVNBOzRCQUNSMkIsVUFBVWpCOzRCQUNWTSxhQUFhQTs0QkFDYkcsY0FBY0E7NEJBQ2RTLFdBQVdoQjs0QkFDWEUsU0FBU0E7Ozs7OztzQ0FFWCw4REFBQ2YsMERBQU9BOzs7OztzQ0FFUiw4REFBQ0YseURBQUdBOzRCQUNGd0IsSUFBSTtnQ0FDRlEsVUFBVTtnQ0FDVkMsU0FBUztvQ0FBRUMsSUFBSTtvQ0FBUUMsSUFBSTtnQ0FBTztnQ0FDbENDLGdCQUFnQjtnQ0FDaEJDLFlBQVk7NEJBQ2Q7OzhDQUVBLDhEQUFDakMsOERBQVdBOzs7Ozs4Q0FDWiw4REFBQ0MsNERBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ0MsOEVBQTJCQTtnQkFDMUJnQyxXQUFXeEI7Z0JBQ1hHLFNBQVNSOzs7Ozs7MEJBRVgsOERBQUNGLDJFQUF3QkE7Z0JBQ3ZCUSxjQUFjSjtnQkFDZEssZUFBZUE7Ozs7Ozs7Ozs7OztBQUl2QjtHQTdETVI7S0FBQUE7QUErRE4sK0RBQWVBLG1CQUFtQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL05hdmJhci50c3g/ZWIxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0Rvd25PdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bk91dGxpbmVkJ1xuaW1wb3J0IFBlcnNvbk91dGxpbmVPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb25PdXRsaW5lT3V0bGluZWQnXG5pbXBvcnQgU2VhcmNoT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoT3V0bGluZWQnXG5pbXBvcnQgU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2hvcHBpbmdDYXJ0T3V0bGluZWQnXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYXZvcml0ZUJvcmRlck91dGxpbmVkJ1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5J1xuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51J1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJ1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcidcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSdcbmltcG9ydCBNb2RhbCBmcm9tICdAbXVpL21hdGVyaWFsL01vZGFsJ1xuXG5pbXBvcnQge1xuICBBcHBMb2dvLFxuICBNZW51SXRlbXMsXG4gIFB1YmxpY0xpbmtzLFxuICBBdXRoTGlua3MsXG4gIFNob3BpbmdDYXJ0SW5mb3JtYXRpb25Nb2RhbCxcbiAgV2lzaExpc3RJbmZvcm1hdGlvbk1vZGFsLFxufSBmcm9tICdAL2FwcC9jb21wb25lbnRzL2Jhc2ljJ1xuXG5jb25zdCBOYXZpZ2F0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtvcGVuV2lzaCwgc2V0T3Blbldpc2hMaXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVPcGVuVG9nZ2xlID0gKCkgPT4gc2V0VG9nZ2xlKHRydWUpXG4gIGNvbnN0IGhhbmRsZUNsb3NlVG9nZ2xlID0gKCkgPT4gc2V0VG9nZ2xlKGZhbHNlKVxuXG4gIGNvbnN0IG9wZW5XaXNoTGlzdCA9ICgpID0+IHNldE9wZW5XaXNoTGlzdCh0cnVlKVxuICBjb25zdCBjbG9zZVdpc2hMaXN0ID0gKCkgPT4gc2V0T3Blbldpc2hMaXN0KGZhbHNlKVxuXG4gIGNvbnN0IFtjYW5PcGVuLCBzZXRDYW5PcGVuXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4gfCBIVE1MRWxlbWVudD4oZmFsc2UpXG5cbiAgY29uc3Qgb3Blbk5hdk1lbnUgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0Q2FuT3BlbihldmVudC5jdXJyZW50VGFyZ2V0KVxuICB9XG5cbiAgY29uc3QgY2xvc2VOYXZNZW51ID0gKCkgPT4ge1xuICAgIHNldENhbk9wZW4oZmFsc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXJcbiAgICAgIHBvc2l0aW9uPVwic3RhdGljXCJcbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQucGFwZXInLCBib3hTaGFkb3c6ICdub25lJyB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4bFwiPlxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICA8QXBwTG9nbyBiYXNpYyAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxNZW51SXRlbXNcbiAgICAgICAgICAgIG9wZW5DYXJ0PXtoYW5kbGVPcGVuVG9nZ2xlfVxuICAgICAgICAgICAgb3Blbk5hdk1lbnU9e29wZW5OYXZNZW51fVxuICAgICAgICAgICAgY2xvc2VOYXZNZW51PXtjbG9zZU5hdk1lbnV9XG4gICAgICAgICAgICBvcGVuTW9kYWw9e29wZW5XaXNoTGlzdH1cbiAgICAgICAgICAgIGNhbk9wZW49e2Nhbk9wZW59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QXBwTG9nbyAvPlxuXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbWQ6ICdmbGV4JyB9LFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnNDBweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQdWJsaWNMaW5rcyAvPlxuICAgICAgICAgICAgPEF1dGhMaW5rcyAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPFNob3BpbmdDYXJ0SW5mb3JtYXRpb25Nb2RhbFxuICAgICAgICBjbG9zZUNhcnQ9e2hhbmRsZUNsb3NlVG9nZ2xlfVxuICAgICAgICBjYW5PcGVuPXt0b2dnbGV9XG4gICAgICAvPlxuICAgICAgPFdpc2hMaXN0SW5mb3JtYXRpb25Nb2RhbFxuICAgICAgICBvcGVuV2lzaExpc3Q9e29wZW5XaXNofVxuICAgICAgICBjbG9zZVdpc2hMaXN0PXtjbG9zZVdpc2hMaXN0fVxuICAgICAgLz5cbiAgICA8L0FwcEJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQ29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkFwcEJhciIsIkJveCIsIlRvb2xiYXIiLCJBcHBMb2dvIiwiTWVudUl0ZW1zIiwiUHVibGljTGlua3MiLCJBdXRoTGlua3MiLCJTaG9waW5nQ2FydEluZm9ybWF0aW9uTW9kYWwiLCJXaXNoTGlzdEluZm9ybWF0aW9uTW9kYWwiLCJOYXZpZ2F0aW9uQ29tcG9uZW50IiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwib3Blbldpc2giLCJzZXRPcGVuV2lzaExpc3QiLCJoYW5kbGVPcGVuVG9nZ2xlIiwiaGFuZGxlQ2xvc2VUb2dnbGUiLCJvcGVuV2lzaExpc3QiLCJjbG9zZVdpc2hMaXN0IiwiY2FuT3BlbiIsInNldENhbk9wZW4iLCJvcGVuTmF2TWVudSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNsb3NlTmF2TWVudSIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJtYXhXaWR0aCIsImRpc2FibGVHdXR0ZXJzIiwiYmFzaWMiLCJvcGVuQ2FydCIsIm9wZW5Nb2RhbCIsImZsZXhHcm93IiwiZGlzcGxheSIsInhzIiwibWQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJjbG9zZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/shared/Navbar.tsx\n"));

/***/ })

});
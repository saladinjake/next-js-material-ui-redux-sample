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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/AppBar */ \"(app-pages-browser)/./node_modules/@mui/material/AppBar/AppBar.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ \"(app-pages-browser)/./node_modules/@mui/material/Toolbar/Toolbar.js\");\n/* harmony import */ var _app_components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/basic */ \"(app-pages-browser)/./src/app/components/basic/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst NavigationComponent = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openWish, setOpenWishList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpenToggle = ()=>setToggle(true);\n    const handleCloseToggle = ()=>setToggle(false);\n    const openWishList = ()=>setOpenWishList(true);\n    const closeWishList = ()=>setOpenWishList(false);\n    const [canOpen, setCanOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const openNavMenu = (event)=>{\n        setCanOpen(event.currentTarget);\n    };\n    const closeNavMenu = ()=>{\n        setCanOpen(false);\n    };\n    const shoppingCart = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>{\n        var _state_cart;\n        return state === null || state === void 0 ? void 0 : (_state_cart = state.cart) === null || _state_cart === void 0 ? void 0 : _state_cart.cart;\n    });\n    const wishList = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>{\n        var _state_wishlist;\n        return state === null || state === void 0 ? void 0 : (_state_wishlist = state.wishlist) === null || _state_wishlist === void 0 ? void 0 : _state_wishlist.wishlist;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        position: \"static\",\n        sx: {\n            backgroundColor: \"background.paper\",\n            boxShadow: \"none\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                maxWidth: \"xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    disableGutters: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AppLogo, {\n                            basic: true\n                        }, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.MenuItems, {\n                            openCart: handleOpenToggle,\n                            openNavMenu: openNavMenu,\n                            closeNavMenu: closeNavMenu,\n                            openModal: openWishList,\n                            canOpen: canOpen,\n                            cart: shoppingCart,\n                            wishlist: wishList\n                        }, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AppLogo, {}, void 0, false, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                flexGrow: 1,\n                                display: {\n                                    xs: \"none\",\n                                    md: \"flex\"\n                                },\n                                justifyContent: \"space-between\",\n                                marginLeft: \"40px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.PublicLinks, {}, void 0, false, {\n                                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.AuthLinks, {\n                                    cart: shoppingCart,\n                                    wishlist: wishList\n                                }, void 0, false, {\n                                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.ShopingCartInformationModal, {\n                closeCart: handleCloseToggle,\n                canOpen: toggle,\n                cart: shoppingCart\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.WishListInformationModal, {\n                openWishList: openWish,\n                closeWishList: closeWishList !== null && closeWishList !== void 0 ? closeWishList : [],\n                wishlist: wishList !== null && wishList !== void 0 ? wishList : []\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Navbar.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavigationComponent, \"EqUdhBEVJ4ZfoJw+nCaucpGbC+k=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = NavigationComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationComponent);\nvar _c;\n$RefreshReg$(_c, \"NavigationComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDdUM7QUFDZTtBQVVQO0FBR047QUFDTjtBQUNRO0FBV1o7QUFFL0IsTUFBTWEsc0JBQXNCOztJQUMxQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDZSxVQUFVQyxnQkFBZ0IsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1pQixtQkFBbUIsSUFBTUgsVUFBVTtJQUN6QyxNQUFNSSxvQkFBb0IsSUFBTUosVUFBVTtJQUUxQyxNQUFNSyxlQUFlLElBQU1ILGdCQUFnQjtJQUMzQyxNQUFNSSxnQkFBZ0IsSUFBTUosZ0JBQWdCO0lBRTVDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHdkIscURBQWMsQ0FBd0I7SUFFcEUsTUFBTXdCLGNBQWMsQ0FBQ0M7UUFDbkJGLFdBQVdFLE1BQU1DLGFBQWE7SUFDaEM7SUFFQSxNQUFNQyxlQUFlO1FBQ25CSixXQUFXO0lBQ2I7SUFFQSxNQUFNSyxlQUFlMUIsd0RBQVdBLENBQUMsQ0FBQzJCO1lBQWVBO2VBQUFBLGtCQUFBQSw2QkFBQUEsY0FBQUEsTUFBT0MsSUFBSSxjQUFYRCxrQ0FBQUEsWUFBYUMsSUFBSTs7SUFDbEUsTUFBTUMsV0FBVzdCLHdEQUFXQSxDQUFDLENBQUMyQjtZQUFlQTtlQUFBQSxrQkFBQUEsNkJBQUFBLGtCQUFBQSxNQUFPRyxRQUFRLGNBQWZILHNDQUFBQSxnQkFBaUJHLFFBQVE7O0lBRXRFLHFCQUNFLDhEQUFDNUIsNERBQU1BO1FBQ0w2QixVQUFTO1FBQ1RDLElBQUk7WUFBRUMsaUJBQWlCO1lBQW9CQyxXQUFXO1FBQU87OzBCQUU3RCw4REFBQ2pDLCtEQUFTQTtnQkFBQ2tDLFVBQVM7MEJBQ2xCLDRFQUFDL0IsNkRBQU9BO29CQUFDZ0MsY0FBYzs7c0NBQ3JCLDhEQUFDL0IsMERBQU9BOzRCQUFDZ0MsS0FBSzs7Ozs7O3NDQUVkLDhEQUFDL0IsNERBQVNBOzRCQUNSZ0MsVUFBVXRCOzRCQUNWTSxhQUFhQTs0QkFDYkcsY0FBY0E7NEJBQ2RjLFdBQVdyQjs0QkFDWEUsU0FBU0E7NEJBQ1RRLE1BQU1GOzRCQUNOSSxVQUFVRDs7Ozs7O3NDQUVaLDhEQUFDeEIsMERBQU9BOzs7OztzQ0FFUiw4REFBQ0YseURBQUdBOzRCQUNGNkIsSUFBSTtnQ0FDRlEsVUFBVTtnQ0FDVkMsU0FBUztvQ0FBRUMsSUFBSTtvQ0FBUUMsSUFBSTtnQ0FBTztnQ0FDbENDLGdCQUFnQjtnQ0FDaEJDLFlBQVk7NEJBQ2Q7OzhDQUVBLDhEQUFDdEMsOERBQVdBOzs7Ozs4Q0FDWiw4REFBQ0MsNERBQVNBO29DQUFDb0IsTUFBTUY7b0NBQWNJLFVBQVVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLL0MsOERBQUNwQiw4RUFBMkJBO2dCQUMxQnFDLFdBQVc3QjtnQkFDWEcsU0FBU1I7Z0JBQ1RnQixNQUFNRjs7Ozs7OzBCQUVSLDhEQUFDaEIsMkVBQXdCQTtnQkFDdkJRLGNBQWNKO2dCQUNkSyxlQUFlQSwwQkFBQUEsMkJBQUFBLGdCQUFpQixFQUFFO2dCQUNsQ1csVUFBVUQscUJBQUFBLHNCQUFBQSxXQUFZLEVBQUU7Ozs7Ozs7Ozs7OztBQUloQztHQXBFTWxCOztRQW1CaUJYLG9EQUFXQTtRQUNmQSxvREFBV0E7OztLQXBCeEJXO0FBc0VOLCtEQUFlQSxtQkFBbUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9OYXZiYXIudHN4P2ViMTMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd25PdXRsaW5lZCdcbmltcG9ydCBQZXJzb25PdXRsaW5lT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVyc29uT3V0bGluZU91dGxpbmVkJ1xuaW1wb3J0IFNlYXJjaE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaE91dGxpbmVkJ1xuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJ1xuaW1wb3J0IEZhdm9yaXRlQm9yZGVyT3V0bGluZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRmF2b3JpdGVCb3JkZXJPdXRsaW5lZCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbidcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSdcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSdcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCdcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94J1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCdcblxuaW1wb3J0IHtcbiAgQXBwTG9nbyxcbiAgTWVudUl0ZW1zLFxuICBQdWJsaWNMaW5rcyxcbiAgQXV0aExpbmtzLFxuICBTaG9waW5nQ2FydEluZm9ybWF0aW9uTW9kYWwsXG4gIFdpc2hMaXN0SW5mb3JtYXRpb25Nb2RhbCxcbn0gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9iYXNpYydcblxuY29uc3QgTmF2aWdhdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbb3Blbldpc2gsIHNldE9wZW5XaXNoTGlzdF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlT3BlblRvZ2dsZSA9ICgpID0+IHNldFRvZ2dsZSh0cnVlKVxuICBjb25zdCBoYW5kbGVDbG9zZVRvZ2dsZSA9ICgpID0+IHNldFRvZ2dsZShmYWxzZSlcblxuICBjb25zdCBvcGVuV2lzaExpc3QgPSAoKSA9PiBzZXRPcGVuV2lzaExpc3QodHJ1ZSlcbiAgY29uc3QgY2xvc2VXaXNoTGlzdCA9ICgpID0+IHNldE9wZW5XaXNoTGlzdChmYWxzZSlcblxuICBjb25zdCBbY2FuT3Blbiwgc2V0Q2FuT3Blbl0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuIHwgSFRNTEVsZW1lbnQ+KGZhbHNlKVxuXG4gIGNvbnN0IG9wZW5OYXZNZW51ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldENhbk9wZW4oZXZlbnQuY3VycmVudFRhcmdldClcbiAgfVxuXG4gIGNvbnN0IGNsb3NlTmF2TWVudSA9ICgpID0+IHtcbiAgICBzZXRDYW5PcGVuKGZhbHNlKVxuICB9XG5cbiAgY29uc3Qgc2hvcHBpbmdDYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlPy5jYXJ0Py5jYXJ0KVxuICBjb25zdCB3aXNoTGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8ud2lzaGxpc3Q/Lndpc2hsaXN0KVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxuICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsIGJveFNoYWRvdzogJ25vbmUnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhsXCI+XG4gICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPlxuICAgICAgICAgIDxBcHBMb2dvIGJhc2ljIC8+XG5cbiAgICAgICAgICA8TWVudUl0ZW1zXG4gICAgICAgICAgICBvcGVuQ2FydD17aGFuZGxlT3BlblRvZ2dsZX1cbiAgICAgICAgICAgIG9wZW5OYXZNZW51PXtvcGVuTmF2TWVudX1cbiAgICAgICAgICAgIGNsb3NlTmF2TWVudT17Y2xvc2VOYXZNZW51fVxuICAgICAgICAgICAgb3Blbk1vZGFsPXtvcGVuV2lzaExpc3R9XG4gICAgICAgICAgICBjYW5PcGVuPXtjYW5PcGVufVxuICAgICAgICAgICAgY2FydD17c2hvcHBpbmdDYXJ0fVxuICAgICAgICAgICAgd2lzaGxpc3Q9e3dpc2hMaXN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFwcExvZ28gLz5cblxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiAnbm9uZScsIG1kOiAnZmxleCcgfSxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzQwcHgnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHVibGljTGlua3MgLz5cbiAgICAgICAgICAgIDxBdXRoTGlua3MgY2FydD17c2hvcHBpbmdDYXJ0fSB3aXNobGlzdD17d2lzaExpc3R9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICA8U2hvcGluZ0NhcnRJbmZvcm1hdGlvbk1vZGFsXG4gICAgICAgIGNsb3NlQ2FydD17aGFuZGxlQ2xvc2VUb2dnbGV9XG4gICAgICAgIGNhbk9wZW49e3RvZ2dsZX1cbiAgICAgICAgY2FydD17c2hvcHBpbmdDYXJ0fVxuICAgICAgLz5cbiAgICAgIDxXaXNoTGlzdEluZm9ybWF0aW9uTW9kYWxcbiAgICAgICAgb3Blbldpc2hMaXN0PXtvcGVuV2lzaH1cbiAgICAgICAgY2xvc2VXaXNoTGlzdD17Y2xvc2VXaXNoTGlzdCA/PyBbXX1cbiAgICAgICAgd2lzaGxpc3Q9e3dpc2hMaXN0ID8/IFtdfVxuICAgICAgLz5cbiAgICA8L0FwcEJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQ29tcG9uZW50XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiQ29udGFpbmVyIiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkFwcExvZ28iLCJNZW51SXRlbXMiLCJQdWJsaWNMaW5rcyIsIkF1dGhMaW5rcyIsIlNob3BpbmdDYXJ0SW5mb3JtYXRpb25Nb2RhbCIsIldpc2hMaXN0SW5mb3JtYXRpb25Nb2RhbCIsIk5hdmlnYXRpb25Db21wb25lbnQiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvcGVuV2lzaCIsInNldE9wZW5XaXNoTGlzdCIsImhhbmRsZU9wZW5Ub2dnbGUiLCJoYW5kbGVDbG9zZVRvZ2dsZSIsIm9wZW5XaXNoTGlzdCIsImNsb3NlV2lzaExpc3QiLCJjYW5PcGVuIiwic2V0Q2FuT3BlbiIsIm9wZW5OYXZNZW51IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2VOYXZNZW51Iiwic2hvcHBpbmdDYXJ0Iiwic3RhdGUiLCJjYXJ0Iiwid2lzaExpc3QiLCJ3aXNobGlzdCIsInBvc2l0aW9uIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJtYXhXaWR0aCIsImRpc2FibGVHdXR0ZXJzIiwiYmFzaWMiLCJvcGVuQ2FydCIsIm9wZW5Nb2RhbCIsImZsZXhHcm93IiwiZGlzcGxheSIsInhzIiwibWQiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbkxlZnQiLCJjbG9zZUNhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/shared/Navbar.tsx\n"));

/***/ })

});
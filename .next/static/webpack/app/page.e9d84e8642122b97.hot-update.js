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

/***/ "(app-pages-browser)/./src/app/components/shared/Products.tsx":
/*!************************************************!*\
  !*** ./src/app/components/shared/Products.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _app_lib_redux_helpers_infiniteProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/redux/helpers/infiniteProducts */ \"(app-pages-browser)/./src/app/lib/redux/helpers/infiniteProducts.ts\");\n/* harmony import */ var _app_components_basic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/basic */ \"(app-pages-browser)/./src/app/components/basic/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst InfinitProducts = ()=>{\n    var _infiniteLoads_payload_products, _infiniteLoads_payload, _infiniteLoads_payload1, _infiniteLoads_payload2, _infiniteLoads_payload_products1, _infiniteLoads_payload3;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const infiniteLoads = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state === null || state === void 0 ? void 0 : state.products);\n    const canLoadMore = ((_infiniteLoads_payload = infiniteLoads.payload) === null || _infiniteLoads_payload === void 0 ? void 0 : (_infiniteLoads_payload_products = _infiniteLoads_payload.products) === null || _infiniteLoads_payload_products === void 0 ? void 0 : _infiniteLoads_payload_products.length) < (infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload1 = infiniteLoads.payload) === null || _infiniteLoads_payload1 === void 0 ? void 0 : _infiniteLoads_payload1.total);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_app_lib_redux_helpers_infiniteProducts__WEBPACK_IMPORTED_MODULE_2__.getProducts)({\n            skip: 0\n        }));\n    }, []);\n    const handleRefetchRemount = ()=>{\n        var _infiniteLoads_payload;\n        const skip = (_infiniteLoads_payload = infiniteLoads.payload) === null || _infiniteLoads_payload === void 0 ? void 0 : _infiniteLoads_payload.products.length;\n        dispatch((0,_app_lib_redux_helpers_infiniteProducts__WEBPACK_IMPORTED_MODULE_2__.getMoreProducts)({\n            skip: skip\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            mt: \"90px\",\n            mb: \"24px\",\n            mx: \"56px\"\n        },\n        children: [\n            (infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload2 = infiniteLoads.payload) === null || _infiniteLoads_payload2 === void 0 ? void 0 : _infiniteLoads_payload2.products) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    display: {\n                        xs: \"block\",\n                        md: \"grid\"\n                    },\n                    mt: \"80px\"\n                },\n                gridTemplateColumns: \"repeat(10, 1fr)\",\n                gap: 1,\n                children: infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload3 = infiniteLoads.payload) === null || _infiniteLoads_payload3 === void 0 ? void 0 : (_infiniteLoads_payload_products1 = _infiniteLoads_payload3.products) === null || _infiniteLoads_payload_products1 === void 0 ? void 0 : _infiniteLoads_payload_products1.map((productDetail)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_3__.ProductCard, {\n                        productDetail: productDetail\n                    }, void 0, false, {\n                        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            canLoadMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"outlined\",\n                onClick: handleRefetchRemount,\n                sx: {\n                    margin: \"auto\",\n                    display: \"block\",\n                    mt: \"40px\",\n                    color: \"#23a6f0\",\n                    borderColor: \"#23a6f0\"\n                },\n                children: \"LOAD MORE PRODUCTS\"\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InfinitProducts, \"BUWD40BWBBwmHa4i5tb5ioW5+e4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = InfinitProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfinitProducts);\nvar _c;\n$RefreshReg$(_c, \"InfinitProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvUHJvZHVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lDO0FBRUw7QUFRTTtBQU9PO0FBSWxCO0FBRXdCO0FBR3ZELE1BQU1TLGtCQUFrQjtRQUdGQyxpQ0FBQUEsd0JBQTBDQSx5QkFjekRBLHlCQU1JQSxrQ0FBQUE7O0lBdEJULE1BQU1DLFdBQVdKLHdEQUFXQTtJQUM1QixNQUFNRyxnQkFBZ0JGLHdEQUFXQSxDQUFDLENBQUNJLFFBQVVBLGtCQUFBQSw0QkFBQUEsTUFBT0MsUUFBUTtJQUM1RCxNQUFNQyxjQUFjSixFQUFBQSx5QkFBQUEsY0FBY0ssT0FBTyxjQUFyQkwsOENBQUFBLGtDQUFBQSx1QkFBdUJHLFFBQVEsY0FBL0JILHNEQUFBQSxnQ0FBaUNNLE1BQU0sS0FBR04sMEJBQUFBLHFDQUFBQSwwQkFBQUEsY0FBZUssT0FBTyxjQUF0QkwsOENBQUFBLHdCQUF3Qk8sS0FBSztJQUUzRmhCLGdEQUFTQSxDQUFDO1FBQ1JVLFNBQVNQLG9GQUFXQSxDQUFDO1lBQUVjLE1BQU07UUFBRTtJQUNqQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyx1QkFBdUI7WUFDZFQ7UUFBYixNQUFNUSxRQUFPUix5QkFBQUEsY0FBY0ssT0FBTyxjQUFyQkwsNkNBQUFBLHVCQUF1QkcsUUFBUSxDQUFDRyxNQUFNO1FBQ25ETCxTQUFTTix3RkFBZUEsQ0FBQztZQUFFYSxNQUFNQTtRQUFLO0lBQ3hDO0lBR0EscUJBQ0UsOERBQUNoQix5REFBR0E7UUFBQ2tCLElBQUk7WUFBRUMsSUFBSTtZQUFRQyxJQUFJO1lBQVFDLElBQUk7UUFBTzs7WUFDM0NiLENBQUFBLDBCQUFBQSxxQ0FBQUEsMEJBQUFBLGNBQWVLLE9BQU8sY0FBdEJMLDhDQUFBQSx3QkFBd0JHLFFBQVEsbUJBQy9CLDhEQUFDWCx5REFBR0E7Z0JBQ0ZrQixJQUFJO29CQUFFSSxTQUFTO3dCQUFFQyxJQUFJO3dCQUFTQyxJQUFJO29CQUFPO29CQUFHTCxJQUFJO2dCQUFPO2dCQUN2RE0scUJBQW9CO2dCQUNwQkMsS0FBSzswQkFFSmxCLDBCQUFBQSxxQ0FBQUEsMEJBQUFBLGNBQWVLLE9BQU8sY0FBdEJMLCtDQUFBQSxtQ0FBQUEsd0JBQXdCRyxRQUFRLGNBQWhDSCx1REFBQUEsaUNBQWtDbUIsR0FBRyxDQUFDLENBQUNDLDhCQUNwQyw4REFBQ3hCLDhEQUFXQTt3QkFBQ3dCLGVBQWVBOzs7Ozs7Ozs7OztZQUluQ2hCLDZCQUVHLDhEQUFDWCw0REFBTUE7Z0JBQ0w0QixTQUFRO2dCQUNSQyxTQUFTYjtnQkFDVEMsSUFBSTtvQkFDRmEsUUFBUTtvQkFDUlQsU0FBUztvQkFDVEgsSUFBSTtvQkFDSmEsT0FBTztvQkFDUEMsYUFBYTtnQkFDZjswQkFDRDs7Ozs7Ozs7Ozs7O0FBTVg7R0E5Q00xQjs7UUFDYUYsb0RBQVdBO1FBQ05DLG9EQUFXQTs7O0tBRjdCQztBQWdETiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL1Byb2R1Y3RzLnRzeD8zMzNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQ2FyZFwiO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRDb250ZW50XCI7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRNZWRpYVwiO1xuaW1wb3J0IHsgQ2FyZEFjdGlvbkFyZWEgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQmxvY2tUaWxlIH0gZnJvbSAnLi4vYmFzaWMnXG5cbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5cblxuaW1wb3J0IHtcbiAgZ2V0UHJvZHVjdHMsXG4gIGdldE1vcmVQcm9kdWN0cyxcbiBcbn0gZnJvbSAnQC9hcHAvbGliL3JlZHV4L2hlbHBlcnMvaW5maW5pdGVQcm9kdWN0cydcblxuaW1wb3J0IHtcbiAgUHJvZHVjdENhcmRcbn0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvYmFzaWNcIlxuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuXG5jb25zdCBJbmZpbml0UHJvZHVjdHMgPSAoKSAgPT57XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaW5maW5pdGVMb2FkcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LnByb2R1Y3RzKTtcbiAgY29uc3QgY2FuTG9hZE1vcmUgPSBpbmZpbml0ZUxvYWRzLnBheWxvYWQ/LnByb2R1Y3RzPy5sZW5ndGggPCBpbmZpbml0ZUxvYWRzPy5wYXlsb2FkPy50b3RhbFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0UHJvZHVjdHMoeyBza2lwOiAwIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZVJlZmV0Y2hSZW1vdW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNraXAgPSBpbmZpbml0ZUxvYWRzLnBheWxvYWQ/LnByb2R1Y3RzLmxlbmd0aDtcbiAgICBkaXNwYXRjaChnZXRNb3JlUHJvZHVjdHMoeyBza2lwOiBza2lwIH0pKTtcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBtdDogXCI5MHB4XCIsIG1iOiBcIjI0cHhcIiwgbXg6IFwiNTZweFwiIH19PlxuICAgICAge2luZmluaXRlTG9hZHM/LnBheWxvYWQ/LnByb2R1Y3RzICYmIChcbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IHsgeHM6IFwiYmxvY2tcIiwgbWQ6IFwiZ3JpZFwiIH0sIG10OiBcIjgwcHhcIiB9fVxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoMTAsIDFmcilcIlxuICAgICAgICAgIGdhcD17MX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmZpbml0ZUxvYWRzPy5wYXlsb2FkPy5wcm9kdWN0cz8ubWFwKChwcm9kdWN0RGV0YWlsKSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBwcm9kdWN0RGV0YWlsPXtwcm9kdWN0RGV0YWlsfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICB7Y2FuTG9hZE1vcmVcbiAgICAgICAgICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVmZXRjaFJlbW91bnR9XG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIG10OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzIzYTZmMFwiLFxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjMjNhNmYwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExPQUQgTU9SRSBQUk9EVUNUU1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZpbml0UHJvZHVjdHNcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkJveCIsIkJ1dHRvbiIsImdldFByb2R1Y3RzIiwiZ2V0TW9yZVByb2R1Y3RzIiwiUHJvZHVjdENhcmQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiSW5maW5pdFByb2R1Y3RzIiwiaW5maW5pdGVMb2FkcyIsImRpc3BhdGNoIiwic3RhdGUiLCJwcm9kdWN0cyIsImNhbkxvYWRNb3JlIiwicGF5bG9hZCIsImxlbmd0aCIsInRvdGFsIiwic2tpcCIsImhhbmRsZVJlZmV0Y2hSZW1vdW50Iiwic3giLCJtdCIsIm1iIiwibXgiLCJkaXNwbGF5IiwieHMiLCJtZCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXAiLCJwcm9kdWN0RGV0YWlsIiwidmFyaWFudCIsIm9uQ2xpY2siLCJtYXJnaW4iLCJjb2xvciIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/shared/Products.tsx\n"));

/***/ })

});
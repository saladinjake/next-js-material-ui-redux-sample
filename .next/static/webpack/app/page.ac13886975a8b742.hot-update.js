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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _app_components_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/basic */ \"(app-pages-browser)/./src/app/components/basic/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api */ \"(app-pages-browser)/./src/app/api/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst InfinitProducts = ()=>{\n    var _infiniteLoads_payload_products, _infiniteLoads_payload, _infiniteLoads_payload1, _infiniteLoads_payload2, _infiniteLoads_payload_products1, _infiniteLoads_payload3;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const infiniteLoads = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state === null || state === void 0 ? void 0 : state.products);\n    const canLoadMore = (infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload = infiniteLoads.payload) === null || _infiniteLoads_payload === void 0 ? void 0 : (_infiniteLoads_payload_products = _infiniteLoads_payload.products) === null || _infiniteLoads_payload_products === void 0 ? void 0 : _infiniteLoads_payload_products.length) < (infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload1 = infiniteLoads.payload) === null || _infiniteLoads_payload1 === void 0 ? void 0 : _infiniteLoads_payload1.total);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_app_api__WEBPACK_IMPORTED_MODULE_3__.loadInfiniteProducts)({\n            skip: 0\n        }));\n    }, []);\n    const handleRefetchRemount = ()=>{\n        var _infiniteLoads_payload;\n        const skip = (_infiniteLoads_payload = infiniteLoads.payload) === null || _infiniteLoads_payload === void 0 ? void 0 : _infiniteLoads_payload.products.length;\n        dispatch((0,_app_api__WEBPACK_IMPORTED_MODULE_3__.loadPaginatedInfiniteProducts)({\n            skip: skip\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        sx: {\n            mt: \"90px\",\n            mb: \"24px\",\n            mx: \"56px\"\n        },\n        children: [\n            (infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload2 = infiniteLoads.payload) === null || _infiniteLoads_payload2 === void 0 ? void 0 : _infiniteLoads_payload2.products) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    display: {\n                        xs: \"block\",\n                        md: \"grid\"\n                    },\n                    mt: \"80px\"\n                },\n                gridTemplateColumns: \"repeat(10, 1fr)\",\n                gap: 1,\n                children: infiniteLoads === null || infiniteLoads === void 0 ? void 0 : (_infiniteLoads_payload3 = infiniteLoads.payload) === null || _infiniteLoads_payload3 === void 0 ? void 0 : (_infiniteLoads_payload_products1 = _infiniteLoads_payload3.products) === null || _infiniteLoads_payload_products1 === void 0 ? void 0 : _infiniteLoads_payload_products1.map((productDetail)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_basic__WEBPACK_IMPORTED_MODULE_2__.ProductCard, {\n                        productDetail: productDetail\n                    }, void 0, false, {\n                        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            canLoadMore && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                variant: \"outlined\",\n                onClick: handleRefetchRemount,\n                sx: {\n                    margin: \"auto\",\n                    display: \"block\",\n                    mt: \"40px\",\n                    color: \"#23a6f0\",\n                    borderColor: \"#23a6f0\"\n                },\n                children: \"LOAD MORE PRODUCTS\"\n            }, void 0, false, {\n                fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/victorjuwa/Desktop/Learning-Resource/Learn-mui/src/app/components/shared/Products.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(InfinitProducts, \"BUWD40BWBBwmHa4i5tb5ioW5+e4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = InfinitProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfinitProducts);\nvar _c;\n$RefreshReg$(_c, \"InfinitProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvUHJvZHVjdHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lDO0FBRUw7QUFRTTtBQU9YO0FBRXdCO0FBTXJDO0FBR2xCLE1BQU1TLGtCQUFrQjtRQUdGQyxpQ0FBQUEsd0JBQTJDQSx5QkFjMURBLHlCQU1JQSxrQ0FBQUE7O0lBdEJULE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNSyxnQkFBZ0JKLHdEQUFXQSxDQUFDLENBQUNNLFFBQVVBLGtCQUFBQSw0QkFBQUEsTUFBT0MsUUFBUTtJQUM1RCxNQUFNQyxjQUFjSixDQUFBQSwwQkFBQUEscUNBQUFBLHlCQUFBQSxjQUFlSyxPQUFPLGNBQXRCTCw4Q0FBQUEsa0NBQUFBLHVCQUF3QkcsUUFBUSxjQUFoQ0gsc0RBQUFBLGdDQUFrQ00sTUFBTSxLQUFHTiwwQkFBQUEscUNBQUFBLDBCQUFBQSxjQUFlSyxPQUFPLGNBQXRCTCw4Q0FBQUEsd0JBQXdCTyxLQUFLO0lBRTVGaEIsZ0RBQVNBLENBQUM7UUFDUlUsU0FBU0gsOERBQW9CQSxDQUFDO1lBQUVVLE1BQU07UUFBRTtJQUMxQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyx1QkFBdUI7WUFDZFQ7UUFBYixNQUFNUSxRQUFPUix5QkFBQUEsY0FBY0ssT0FBTyxjQUFyQkwsNkNBQUFBLHVCQUF1QkcsUUFBUSxDQUFDRyxNQUFNO1FBQ25ETCxTQUFTSix1RUFBNkJBLENBQUM7WUFBRVcsTUFBTUE7UUFBSztJQUN0RDtJQUdBLHFCQUNFLDhEQUFDaEIseURBQUdBO1FBQUNrQixJQUFJO1lBQUVDLElBQUk7WUFBUUMsSUFBSTtZQUFRQyxJQUFJO1FBQU87O1lBQzNDYixDQUFBQSwwQkFBQUEscUNBQUFBLDBCQUFBQSxjQUFlSyxPQUFPLGNBQXRCTCw4Q0FBQUEsd0JBQXdCRyxRQUFRLG1CQUMvQiw4REFBQ1gseURBQUdBO2dCQUNGa0IsSUFBSTtvQkFBRUksU0FBUzt3QkFBRUMsSUFBSTt3QkFBU0MsSUFBSTtvQkFBTztvQkFBR0wsSUFBSTtnQkFBTztnQkFDdkRNLHFCQUFvQjtnQkFDcEJDLEtBQUs7MEJBRUpsQiwwQkFBQUEscUNBQUFBLDBCQUFBQSxjQUFlSyxPQUFPLGNBQXRCTCwrQ0FBQUEsbUNBQUFBLHdCQUF3QkcsUUFBUSxjQUFoQ0gsdURBQUFBLGlDQUFrQ21CLEdBQUcsQ0FBQyxDQUFDQyw4QkFDcEMsOERBQUMxQiw4REFBV0E7d0JBQUMwQixlQUFlQTs7Ozs7Ozs7Ozs7WUFJbkNoQiw2QkFFRyw4REFBQ1gsNERBQU1BO2dCQUNMNEIsU0FBUTtnQkFDUkMsU0FBU2I7Z0JBQ1RDLElBQUk7b0JBQ0ZhLFFBQVE7b0JBQ1JULFNBQVM7b0JBQ1RILElBQUk7b0JBQ0phLE9BQU87b0JBQ1BDLGFBQWE7Z0JBQ2Y7MEJBQ0Q7Ozs7Ozs7Ozs7OztBQU1YO0dBOUNNMUI7O1FBQ2FKLG9EQUFXQTtRQUNOQyxvREFBV0E7OztLQUY3Qkc7QUFnRE4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9Qcm9kdWN0cy50c3g/MzMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBDYXJkIGZyb20gXCJAbXVpL21hdGVyaWFsL0NhcmRcIjtcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudFwiO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkTWVkaWFcIjtcbmltcG9ydCB7IENhcmRBY3Rpb25BcmVhIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEJsb2NrVGlsZSB9IGZyb20gJy4uL2Jhc2ljJ1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuXG5cblxuXG5pbXBvcnQge1xuICBQcm9kdWN0Q2FyZFxufSBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9iYXNpY1wiXG5cbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQge1xuICAgbG9hZFBhZ2luYXRlZEluZmluaXRlUHJvZHVjdHMsIFxuIFxuICAgbG9hZEluZmluaXRlUHJvZHVjdHNcbn0gZnJvbSBcIkAvYXBwL2FwaVwiXG5cblxuY29uc3QgSW5maW5pdFByb2R1Y3RzID0gKCkgID0+e1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGluZmluaXRlTG9hZHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5wcm9kdWN0cyk7XG4gIGNvbnN0IGNhbkxvYWRNb3JlID0gaW5maW5pdGVMb2Fkcz8ucGF5bG9hZD8ucHJvZHVjdHM/Lmxlbmd0aCA8IGluZmluaXRlTG9hZHM/LnBheWxvYWQ/LnRvdGFsXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkSW5maW5pdGVQcm9kdWN0cyh7IHNraXA6IDAgfSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUmVmZXRjaFJlbW91bnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2tpcCA9IGluZmluaXRlTG9hZHMucGF5bG9hZD8ucHJvZHVjdHMubGVuZ3RoO1xuICAgIGRpc3BhdGNoKGxvYWRQYWdpbmF0ZWRJbmZpbml0ZVByb2R1Y3RzKHsgc2tpcDogc2tpcCB9KSk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgbXQ6IFwiOTBweFwiLCBtYjogXCIyNHB4XCIsIG14OiBcIjU2cHhcIiB9fT5cbiAgICAgIHtpbmZpbml0ZUxvYWRzPy5wYXlsb2FkPy5wcm9kdWN0cyAmJiAoXG4gICAgICAgIDxCb3hcbiAgICAgICAgICBzeD17eyBkaXNwbGF5OiB7IHhzOiBcImJsb2NrXCIsIG1kOiBcImdyaWRcIiB9LCBtdDogXCI4MHB4XCIgfX1cbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zPVwicmVwZWF0KDEwLCAxZnIpXCJcbiAgICAgICAgICBnYXA9ezF9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5maW5pdGVMb2Fkcz8ucGF5bG9hZD8ucHJvZHVjdHM/Lm1hcCgocHJvZHVjdERldGFpbCkgPT4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgcHJvZHVjdERldGFpbD17cHJvZHVjdERldGFpbH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuICAgICAge2NhbkxvYWRNb3JlXG4gICAgICAgICAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlZmV0Y2hSZW1vdW50fVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBtdDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyM2E2ZjBcIixcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzIzYTZmMFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBMT0FEIE1PUkUgUFJPRFVDVFNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdFByb2R1Y3RzXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJCb3giLCJCdXR0b24iLCJQcm9kdWN0Q2FyZCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2FkUGFnaW5hdGVkSW5maW5pdGVQcm9kdWN0cyIsImxvYWRJbmZpbml0ZVByb2R1Y3RzIiwiSW5maW5pdFByb2R1Y3RzIiwiaW5maW5pdGVMb2FkcyIsImRpc3BhdGNoIiwic3RhdGUiLCJwcm9kdWN0cyIsImNhbkxvYWRNb3JlIiwicGF5bG9hZCIsImxlbmd0aCIsInRvdGFsIiwic2tpcCIsImhhbmRsZVJlZmV0Y2hSZW1vdW50Iiwic3giLCJtdCIsIm1iIiwibXgiLCJkaXNwbGF5IiwieHMiLCJtZCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtYXAiLCJwcm9kdWN0RGV0YWlsIiwidmFyaWFudCIsIm9uQ2xpY2siLCJtYXJnaW4iLCJjb2xvciIsImJvcmRlckNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/shared/Products.tsx\n"));

/***/ })

});
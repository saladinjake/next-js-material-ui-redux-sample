/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallowequal";
exports.ids = ["vendor-chunks/shallowequal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("//\nmodule.exports = function shallowEqual(objA, objB, compare, compareContext) {\n    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;\n    if (ret !== void 0) {\n        return !!ret;\n    }\n    if (objA === objB) {\n        return true;\n    }\n    if (typeof objA !== \"object\" || !objA || typeof objB !== \"object\" || !objB) {\n        return false;\n    }\n    var keysA = Object.keys(objA);\n    var keysB = Object.keys(objB);\n    if (keysA.length !== keysB.length) {\n        return false;\n    }\n    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);\n    // Test for A's keys different from B.\n    for(var idx = 0; idx < keysA.length; idx++){\n        var key = keysA[idx];\n        if (!bHasOwnProperty(key)) {\n            return false;\n        }\n        var valueA = objA[key];\n        var valueB = objB[key];\n        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;\n        if (ret === false || ret === void 0 && valueA !== valueB) {\n            return false;\n        }\n    }\n    return true;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYW1wbGUtdWktZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanM/NzE4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCLCBjb21wYXJlLCBjb21wYXJlQ29udGV4dCkge1xuICB2YXIgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgb2JqQSwgb2JqQikgOiB2b2lkIDA7XG5cbiAgaWYgKHJldCAhPT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuICEhcmV0O1xuICB9XG5cbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQSB8fCB0eXBlb2Ygb2JqQiAhPT0gXCJvYmplY3RcIiB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcblxuICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAodmFyIGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICB2YXIga2V5ID0ga2V5c0FbaWR4XTtcblxuICAgIGlmICghYkhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVBID0gb2JqQVtrZXldO1xuICAgIHZhciB2YWx1ZUIgPSBvYmpCW2tleV07XG5cbiAgICByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCB2YWx1ZUEsIHZhbHVlQiwga2V5KSA6IHZvaWQgMDtcblxuICAgIGlmIChyZXQgPT09IGZhbHNlIHx8IChyZXQgPT09IHZvaWQgMCAmJiB2YWx1ZUEgIT09IHZhbHVlQikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNoYWxsb3dFcXVhbCIsIm9iakEiLCJvYmpCIiwiY29tcGFyZSIsImNvbXBhcmVDb250ZXh0IiwicmV0IiwiY2FsbCIsImtleXNBIiwiT2JqZWN0Iiwia2V5cyIsImtleXNCIiwibGVuZ3RoIiwiYkhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJiaW5kIiwiaWR4Iiwia2V5IiwidmFsdWVBIiwidmFsdWVCIl0sIm1hcHBpbmdzIjoiQUFBQSxFQUFFO0FBRUZBLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxhQUFhQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxjQUFjO0lBQ3hFLElBQUlDLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCSCxNQUFNQyxRQUFRLEtBQUs7SUFFcEUsSUFBSUcsUUFBUSxLQUFLLEdBQUc7UUFDbEIsT0FBTyxDQUFDLENBQUNBO0lBQ1g7SUFFQSxJQUFJSixTQUFTQyxNQUFNO1FBQ2pCLE9BQU87SUFDVDtJQUVBLElBQUksT0FBT0QsU0FBUyxZQUFZLENBQUNBLFFBQVEsT0FBT0MsU0FBUyxZQUFZLENBQUNBLE1BQU07UUFDMUUsT0FBTztJQUNUO0lBRUEsSUFBSUssUUFBUUMsT0FBT0MsSUFBSSxDQUFDUjtJQUN4QixJQUFJUyxRQUFRRixPQUFPQyxJQUFJLENBQUNQO0lBRXhCLElBQUlLLE1BQU1JLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUVBLElBQUlDLGtCQUFrQkosT0FBT0ssU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ2I7SUFFM0Qsc0NBQXNDO0lBQ3RDLElBQUssSUFBSWMsTUFBTSxHQUFHQSxNQUFNVCxNQUFNSSxNQUFNLEVBQUVLLE1BQU87UUFDM0MsSUFBSUMsTUFBTVYsS0FBSyxDQUFDUyxJQUFJO1FBRXBCLElBQUksQ0FBQ0osZ0JBQWdCSyxNQUFNO1lBQ3pCLE9BQU87UUFDVDtRQUVBLElBQUlDLFNBQVNqQixJQUFJLENBQUNnQixJQUFJO1FBQ3RCLElBQUlFLFNBQVNqQixJQUFJLENBQUNlLElBQUk7UUFFdEJaLE1BQU1GLFVBQVVBLFFBQVFHLElBQUksQ0FBQ0YsZ0JBQWdCYyxRQUFRQyxRQUFRRixPQUFPLEtBQUs7UUFFekUsSUFBSVosUUFBUSxTQUFVQSxRQUFRLEtBQUssS0FBS2EsV0FBV0MsUUFBUztZQUMxRCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVCIsImZpbGUiOiIoc3NyKS8uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallowequal/index.js\n");

/***/ })

};
;
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        name: \"Add image\",\n        type: \"image\",\n        accept: \"image/*\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"UqEtsPKZsxv3SzkV4NFGdbK1x3o=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop];\n      console.log(\"🚀 ~ file: index.js ~ line 120 ~ currentValue\", currentValue); // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      console.log(\"🚀 ~ file: index.js ~ line 100 ~ setSelectionStyle ~ objects\", objects);\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJlZGl0b3IiLCJidWlsZEVkaXRvciIsInN0eWxlcyIsImNvbnRhaW5lciIsImJ1dHRvbnMiLCJhZGRUZXh0Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwicmVuZGVyQWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiZm9yRWFjaCIsInJlbW92ZSIsImRpc2NhcmRBY3RpdmVPYmplY3QiLCJnZXRPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJvYmplY3RzIiwicHJvcGVydHkiLCJoYXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdG9uRW5kIiwidmFsdWUiLCJnZXRTZWxlY3Rpb25TdHlsZXMiLCJpIiwic2VsZWN0aW9uRW5kIiwibWFwIiwic2V0Iiwic2NhbGVYIiwic2V0Q29vcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxFQURQO0FBQUEsTUFDdEJDLE1BRHNCO0FBQUEsTUFDZEMsU0FEYzs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBLE1BRXRCRyxlQUZzQjtBQUFBLE1BRUxDLGlCQUZLOztBQUFBLG1CQUdLSixzREFBUSxFQUhiO0FBQUEsTUFHdEJLLFNBSHNCO0FBQUEsTUFHWEMsWUFIVzs7QUFBQSxtQkFJU04sc0RBQVEsRUFKakI7QUFBQSxNQUl0Qk8sV0FKc0I7QUFBQSxNQUlUQyxjQUpTOztBQU03QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLGFBQVMsQ0FDUCxJQUFJUSw2Q0FBTSxDQUFDQyxNQUFYLENBQWtCQyxTQUFTLENBQUNDLE9BQTVCLEVBQXFDO0FBQ25DQyx1QkFBaUIsRUFBRTtBQURnQixLQUFyQyxDQURPLENBQVQ7QUFLRCxHQU5RLEVBTU4sQ0FBQ1osU0FBRCxDQU5NLENBQVQ7QUFRQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2QsTUFBRCxFQUFZO0FBQzdCQSxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixZQUFNO0FBQ25DWix5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsT0FGRDtBQUdBSCxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDcENiLHlCQUFpQixDQUFDYSxDQUFDLENBQUNDLFFBQUgsQ0FBakI7QUFDRCxPQUZEO0FBR0FqQixZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxD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RUFBVztBQUNoQixVQUFNTCxPQUFPLEdBQUdwRSxNQUFNLENBQUNpRCxnQkFBUCxFQUFoQjs7QUFFQSxVQUFJd0IsS0FBSyxJQUFJLEVBQVQsSUFBZUwsT0FBTyxDQUFDTCxNQUFSLEdBQWlCLENBQXBDLEVBQXVDO0FBQ3JDSyxlQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFDeEMsTUFBRCxFQUFZO0FBQ3RCLGNBQUlvQyxLQUFLLEtBQUssTUFBZCxFQUFzQjtBQUNwQnBDLGtCQUFNLENBQUN5QyxHQUFQLENBQVc7QUFDVHZDLGtCQUFJLEVBQUU7QUFERyxhQUFYO0FBR0QsV0FKRCxNQUlPLElBQUlrQyxLQUFLLEtBQUssT0FBZCxFQUF1QjtBQUM1QnBDLGtCQUFNLENBQUN5QyxHQUFQLENBQVc7QUFDVHZDLGtCQUFJLEVBQUV2QyxNQUFNLENBQUN5QyxLQUFQLEdBQWVKLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlSixNQUFNLENBQUMwQztBQURsQyxhQUFYO0FBR0QsV0FKTSxNQUlBLElBQUlOLEtBQUssS0FBSyxRQUFkLEVBQXdCO0FBQzdCcEMsa0JBQU0sQ0FBQ3lDLEdBQVAsQ0FBVztBQUNUdkMsa0JBQUksRUFBRXZDLE1BQU0sQ0FBQ3lDLEtBQVAsR0FBZSxDQUFmLEdBQW9CSixNQUFNLENBQUNJLEtBQVAsR0FBZUosTUFBTSxDQUFDMEMsTUFBdkIsR0FBaUM7QUFEakQsYUFBWDtBQUdEOztBQUNEMUMsZ0JBQU0sQ0FBQzJDLFNBQVA7QUFDRCxTQWZEO0FBZ0JEOztBQUNEaEYsWUFBTSxDQUFDNkMsU0FBUDtBQUNEO0FBNUdJLEdBQVA7QUE4R0QsQ0FySEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGZhYnJpYyB9IGZyb20gXCJmYWJyaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FudmFzLCBzZXRDYW52YXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NlbGVjdGVkT2JqZWN0cywgc2V0U2VsZWN0ZWRPYmplY3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsbENvbG9yLCBzZXRGaWxsQ29sb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0cm9rZUNvbG9yLCBzZXRTdHJva2VDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FudmFzKFxuICAgICAgbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgcmVuZGVyT25BZGRSZW1vdmU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtzZXRDYW52YXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoY2FudmFzKSA9PiB7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2xlYXJlZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KFtdKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOmNyZWF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjp1cGRhdGVkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2hhbmdlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgYmluZEV2ZW50cyhjYW52YXMpO1xuICAgIH1cbiAgfSwgW2NhbnZhc10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZWRpdG9yID0gYnVpbGRFZGl0b3IoXG4gICAgY2FudmFzLFxuICAgIGZpbGxDb2xvcixcbiAgICBzdHJva2VDb2xvcixcbiAgICBzZXRGaWxsQ29sb3IsXG4gICAgc2V0U3Ryb2tlQ29sb3JcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hZGRUZXh0KFwiXCIpfT5BZGQgVGV4dDwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgbmFtZT1cIkFkZCBpbWFnZVwiIHR5cGU9XCJpbWFnZVwiICBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxuICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJmaWxlXCIgIG5hbWU9XCJpbWFnZVwiIGlkPVwiZmlsZVwiICBvbmNoYW5nZT1cImxvYWRGaWxlKGV2ZW50KVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2lucHV0PiAqL31cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEJvbGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3Iuc2V0U2VsZWN0aW9uU3R5bGUoc2VsZWN0ZWRPYmplY3RzLCBcImJvbGRcIil9XG4gICAgICAgID5cbiAgICAgICAgICBJdGFsaWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwibGVmdFwiKX0+QWxpZ24gbGVmdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcImNlbnRlclwiKX0+Q2VudGVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwicmlnaHRcIil9PkFsaWduIHJpZ2h0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmRlbGV0ZUFsbCgpfT5EZWxldGUgc2VsZWN0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkNsZWFyIGFsbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCJzb2xpZCAxcHggYmxhY2tcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgVEVYVF9TVFlMRVMgPSB7XG4gIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJub3JtYWxcIl0sXG4gIG92ZXJsaW5lOiBbdHJ1ZSwgZmFsc2VdLFxuICB1bmRlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIGZvbnRTdHlsZTogW1wiaXRhbGljXCIsIFwibm9ybWFsXCJdLFxufTtcblxuY29uc3QgYnVpbGRFZGl0b3IgPSAoXG4gIGNhbnZhcyxcbiAgZmlsbENvbG9yLFxuICBzdHJva2VDb2xvcixcbiAgX3NldEZpbGxDb2xvcixcbiAgX3NldFN0cm9rZUNvbG9yXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYW52YXMsXG4gICAgYWRkVGV4dDogKHRleHQpID0+IHtcbiAgICAgIC8vIHVzZSBzdHJva2UgaW4gdGV4dCBmaWxsLCBmaWxsIGRlZmF1bHQgaXMgbW9zdCBvZiB0aGUgdGltZSB0cmFuc3BhcmVudFxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IGZhYnJpYy5UZXh0Ym94KHRleHQsIHtcbiAgICAgICAgbGVmdDogMjAwLFxuICAgICAgICB0b3A6IDIwMCxcbiAgICAgICAgd2lkdGg6IDM1MCxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmaWxsOiBcIiMwMDBcIixcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLmFkZChvYmplY3QpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChvYmplY3QpO1xuICAgICAgb2JqZWN0LmVudGVyRWRpdGluZygpO1xuICAgIH0sXG4gICAgLyogRGVsZXRlIHNlbGVjdGVkIGVsZW1lbnRzIGZyb20gdGhlIGNhbnZhcyAqL1xuICAgIGRlbGV0ZVNlbGVjdGVkOiAoKSA9PiB7XG4gICAgICBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4gY2FudmFzLnJlbW92ZShvYmplY3QpKTtcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIC8qIERlbGV0ZSBhbGwgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlQWxsOiAoKSA9PiB7XG4gICAgICBjYW52YXMuZ2V0T2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4gY2FudmFzLnJlbW92ZShvYmplY3QpKTtcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIF9nZXRUb2dnbGVkVmFsdWU6IChhcnIsIHByb3ApID0+IHtcbiAgICAgIC8vIGdldCBtYXhpbXVtIHZhbHVlIGluIHNlbGVjdGlvbiAqL1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gYXJyXG4gICAgICAgIC5zb3J0KFxuICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYVtwcm9wXSkubGVuZ3RoIC1cbiAgICAgICAgICAgIGFyci5maWx0ZXIoKHYpID0+IHZbcHJvcF0gPT09IGJbcHJvcF0pLmxlbmd0aFxuICAgICAgICApXG4gICAgICAgIC5wb3AoKVtwcm9wXTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTIwIH4gY3VycmVudFZhbHVlXCIsXG4gICAgICAgIGN1cnJlbnRWYWx1ZVxuICAgICAgKTtcbiAgICAgIC8vIHJldHVybiB0aGUgb3Bwb3NpdGUgdmFsdWVcbiAgICAgIGxldCBhID0gVEVYVF9TVFlMRVNbcHJvcF0uZmluZCgodikgPT4gdiAhPT0gY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMjIgfiBhXCIsIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICAvKiBJZiB0ZXh0Ym94IGhhcyBzZWxlY3Rpb24gaW5zaWRlLCBvbmx5IHNlbGVjdGVkIHN5bWJvbHMgd2lsbCBiZSBjaGFuZ2VkXG4gICAgICogSWYgbm8gdGV4dCBpcyBzZWxlY3RlZCwgdHJhbnNmb3JtYXRpb24gd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBzZWxlY3RlZCB0ZXh0IGJveGVzICovXG4gICAgc2V0U2VsZWN0aW9uU3R5bGUob2JqZWN0cywgcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTAwIH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBvYmplY3RzXCIsXG4gICAgICAgIG9iamVjdHNcbiAgICAgICk7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPCAxKSByZXR1cm47XG4gICAgICBlbHNlIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBvYmplY3RzWzBdO1xuICAgICAgICBjb25zdCBoYXNTZWxlY3Rpb24gPSBvYmplY3Quc2VsZWN0aW9uU3RhcnQgIT09IG9iamVjdC5zZWxlY3RvbkVuZDtcbiAgICAgICAgaWYgKGhhc1NlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VG9nZ2xlZFZhbHVlKFxuICAgICAgICAgICAgb2JqZWN0LmdldFNlbGVjdGlvblN0eWxlcygpLFxuICAgICAgICAgICAgXCJmb250V2VpZ2h0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzNyB+IHNldFNlbGVjdGlvblN0eWxlIH4gdmFsdWVcIixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUT0RPOiByZXdyaXRlIHRvIGF2b2lkIG9iamVjdCBtdXRhdGlvblxuICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF0gPSBvYmplY3Quc3R5bGVzWzBdID8/IHt9O1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzOCB+IHNldFNlbGVjdGlvblN0eWxlIH4gb2JqZWN0LnN0eWxlc1swXVwiLFxuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5zZWxlY3Rpb25TdGFydDsgaSA8IG9iamVjdC5zZWxlY3Rpb25FbmQ7IGkrKykge1xuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVtpXSA9IHsgZm9udFdlaWdodDogdmFsdWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IG9iamVjdHNbMF0uZ2V0U2VsZWN0aW9uU3RhcnRGcm9tUG9pbnRlcigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTA2IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBzZWxlY3Rpb25cIiwgc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gaWYgc2VsZWN0aW9uXG4gICAgICB9XG4gICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7fSk7XG4gICAgICAvLyBzZWxlY3RlZE9iamVjdHNcbiAgICB9LFxuICAgIGFsaWduOiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9iamVjdHMgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gXCJcIiAmJiBvYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2JqZWN0cy5tYXAoKG9iamVjdCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogY2FudmFzLndpZHRoIC0gb2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLyAyIC0gKG9iamVjdC53aWR0aCAqIG9iamVjdC5zY2FsZVgpIC8gMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
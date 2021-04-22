webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        \"for\": \"file-upload\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fileupload,\n        children: \"Add Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: imageInputRef,\n        id: \"file-upload\",\n        type: \"file\",\n        style: {\n          display: \"none\"\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"yNAnIF55Um0g5t8KGULPPQFrsXM=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop];\n      console.log(\"🚀 ~ file: index.js ~ line 120 ~ currentValue\", currentValue); // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      console.log(\"🚀 ~ file: index.js ~ line 100 ~ setSelectionStyle ~ objects\", objects);\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJpbWFnZUlucHV0UmVmIiwiZWRpdG9yIiwiYnVpbGRFZGl0b3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwiYWRkVGV4dCIsImZpbGV1cGxvYWQiLCJkaXNwbGF5Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwicmVuZGVyQWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiZm9yRWFjaCIsInJlbW92ZSIsImRpc2NhcmRBY3RpdmVPYmplY3QiLCJnZXRPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJvYmplY3RzIiwicHJvcGVydHkiLCJoYXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdG9uRW5kIiwidmFsdWUiLCJnZXRTZWxlY3Rpb25TdHlsZXMiLCJpIiwic2VsZWN0aW9uRW5kIiwibWFwIiwic2V0Iiwic2NhbGVYIiwic2V0Q29vcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxFQURQO0FBQUEsTUFDdEJDLE1BRHNCO0FBQUEsTUFDZEMsU0FEYzs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBLE1BRXRCRyxlQUZzQjtBQUFBLE1BRUxDLGlCQUZLOztBQUFBLG1CQUdLSixzREFBUSxFQUhiO0FBQUEsTUFHdEJLLFNBSHNCO0FBQUEsTUFHWEMsWUFIVzs7QUFBQSxtQkFJU04sc0RBQVEsRUFKakI7QUFBQSxNQUl0Qk8sV0FKc0I7QUFBQSxNQUlUQyxjQUpTOztBQU03QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLGFBQVMsQ0FDUCxJQUFJUSw2Q0FBTSxDQUFDQyxNQUFYLENBQWtCQyxTQUFTLENBQUNDLE9BQTVCLEVBQXFDO0FBQ25DQyx1QkFBaUIsRUFBRTtBQURnQixLQUFyQyxDQURPLENBQVQ7QUFLRCxHQU5RLEVBTU4sQ0FBQ1osU0FBRCxDQU5NLENBQVQ7QUFRQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2QsTUFBRCxFQUFZO0FBQzdCQSxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixZQUFNO0FBQ25DWix5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsT0FGRDtBQUdBSCxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDcENiLHlCQUFpQixDQUFDYSxDQUFDLENBQUNDLFFBQUgsQ0FBakI7QUFDRCxPQUZEO0FBR0FqQixZ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O0FBNUdJLEdBQVA7QUE4R0QsQ0FySEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGZhYnJpYyB9IGZyb20gXCJmYWJyaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FudmFzLCBzZXRDYW52YXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NlbGVjdGVkT2JqZWN0cywgc2V0U2VsZWN0ZWRPYmplY3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsbENvbG9yLCBzZXRGaWxsQ29sb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0cm9rZUNvbG9yLCBzZXRTdHJva2VDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FudmFzKFxuICAgICAgbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgcmVuZGVyT25BZGRSZW1vdmU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtzZXRDYW52YXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoY2FudmFzKSA9PiB7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2xlYXJlZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KFtdKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOmNyZWF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjp1cGRhdGVkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2hhbmdlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgYmluZEV2ZW50cyhjYW52YXMpO1xuICAgIH1cbiAgfSwgW2NhbnZhc10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZWRpdG9yID0gYnVpbGRFZGl0b3IoXG4gICAgY2FudmFzLFxuICAgIGZpbGxDb2xvcixcbiAgICBzdHJva2VDb2xvcixcbiAgICBzZXRGaWxsQ29sb3IsXG4gICAgc2V0U3Ryb2tlQ29sb3JcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hZGRUZXh0KFwiXCIpfT5BZGQgVGV4dDwvYnV0dG9uPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9e3N0eWxlcy5maWxldXBsb2FkfT5cbiAgICAgICAgICBBZGQgSW1hZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0UmVmfVxuICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLnNldFNlbGVjdGlvblN0eWxlKHNlbGVjdGVkT2JqZWN0cywgXCJib2xkXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgQm9sZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEl0YWxpY1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJsZWZ0XCIpfT5BbGlnbiBsZWZ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwiY2VudGVyXCIpfT5DZW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJyaWdodFwiKX0+QWxpZ24gcmlnaHQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkRlbGV0ZSBzZWxlY3RlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5kZWxldGVBbGwoKX0+Q2xlYXIgYWxsPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjYW52YXNcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPVwiNzAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcInNvbGlkIDFweCBibGFja1wiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBURVhUX1NUWUxFUyA9IHtcbiAgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcIm5vcm1hbFwiXSxcbiAgb3ZlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIHVuZGVybGluZTogW3RydWUsIGZhbHNlXSxcbiAgZm9udFN0eWxlOiBbXCJpdGFsaWNcIiwgXCJub3JtYWxcIl0sXG59O1xuXG5jb25zdCBidWlsZEVkaXRvciA9IChcbiAgY2FudmFzLFxuICBmaWxsQ29sb3IsXG4gIHN0cm9rZUNvbG9yLFxuICBfc2V0RmlsbENvbG9yLFxuICBfc2V0U3Ryb2tlQ29sb3JcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhbnZhcyxcbiAgICBhZGRUZXh0OiAodGV4dCkgPT4ge1xuICAgICAgLy8gdXNlIHN0cm9rZSBpbiB0ZXh0IGZpbGwsIGZpbGwgZGVmYXVsdCBpcyBtb3N0IG9mIHRoZSB0aW1lIHRyYW5zcGFyZW50XG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgZmFicmljLlRleHRib3godGV4dCwge1xuICAgICAgICBsZWZ0OiAyMDAsXG4gICAgICAgIHRvcDogMjAwLFxuICAgICAgICB3aWR0aDogMzUwLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZpbGw6IFwiIzAwMFwiLFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKG9iamVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KG9iamVjdCk7XG4gICAgICBvYmplY3QuZW50ZXJFZGl0aW5nKCk7XG4gICAgfSxcbiAgICAvKiBEZWxldGUgc2VsZWN0ZWQgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlU2VsZWN0ZWQ6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgLyogRGVsZXRlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBjYW52YXMgKi9cbiAgICBkZWxldGVBbGw6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgX2dldFRvZ2dsZWRWYWx1ZTogKGFyciwgcHJvcCkgPT4ge1xuICAgICAgLy8gZ2V0IG1heGltdW0gdmFsdWUgaW4gc2VsZWN0aW9uICovXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhcnJcbiAgICAgICAgLnNvcnQoXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBhW3Byb3BdKS5sZW5ndGggLVxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYltwcm9wXSkubGVuZ3RoXG4gICAgICAgIClcbiAgICAgICAgLnBvcCgpW3Byb3BdO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMjAgfiBjdXJyZW50VmFsdWVcIixcbiAgICAgICAgY3VycmVudFZhbHVlXG4gICAgICApO1xuICAgICAgLy8gcmV0dXJuIHRoZSBvcHBvc2l0ZSB2YWx1ZVxuICAgICAgbGV0IGEgPSBURVhUX1NUWUxFU1twcm9wXS5maW5kKCh2KSA9PiB2ICE9PSBjdXJyZW50VmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEyMiB+IGFcIiwgYSk7XG4gICAgICByZXR1cm4gYTtcbiAgICB9LFxuICAgIC8qIElmIHRleHRib3ggaGFzIHNlbGVjdGlvbiBpbnNpZGUsIG9ubHkgc2VsZWN0ZWQgc3ltYm9scyB3aWxsIGJlIGNoYW5nZWRcbiAgICAgKiBJZiBubyB0ZXh0IGlzIHNlbGVjdGVkLCB0cmFuc2Zvcm1hdGlvbiB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIHNlbGVjdGVkIHRleHQgYm94ZXMgKi9cbiAgICBzZXRTZWxlY3Rpb25TdHlsZShvYmplY3RzLCBwcm9wZXJ0eSkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMDAgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IG9iamVjdHNcIixcbiAgICAgICAgb2JqZWN0c1xuICAgICAgKTtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA8IDEpIHJldHVybjtcbiAgICAgIGVsc2UgaWYgKG9iamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG9iamVjdHNbMF07XG4gICAgICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9IG9iamVjdC5zZWxlY3Rpb25TdGFydCAhPT0gb2JqZWN0LnNlbGVjdG9uRW5kO1xuICAgICAgICBpZiAoaGFzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRUb2dnbGVkVmFsdWUoXG4gICAgICAgICAgICBvYmplY3QuZ2V0U2VsZWN0aW9uU3R5bGVzKCksXG4gICAgICAgICAgICBcImZvbnRXZWlnaHRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM3IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiB2YWx1ZVwiLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRPRE86IHJld3JpdGUgdG8gYXZvaWQgb2JqZWN0IG11dGF0aW9uXG4gICAgICAgICAgb2JqZWN0LnN0eWxlc1swXSA9IG9iamVjdC5zdHlsZXNbMF0gPz8ge307XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM4IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBvYmplY3Quc3R5bGVzWzBdXCIsXG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LnNlbGVjdGlvblN0YXJ0OyBpIDwgb2JqZWN0LnNlbGVjdGlvbkVuZDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdW2ldID0geyBmb250V2VpZ2h0OiB2YWx1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0aW9uID0gb2JqZWN0c1swXS5nZXRTZWxlY3Rpb25TdGFydEZyb21Qb2ludGVyKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMDYgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IHNlbGVjdGlvblwiLCBzZWxlY3Rpb24pO1xuICAgICAgICAvLyBpZiBzZWxlY3Rpb25cbiAgICAgIH1cbiAgICAgIG9iamVjdHMubWFwKChvYmplY3QpID0+IHt9KTtcbiAgICAgIC8vIHNlbGVjdGVkT2JqZWN0c1xuICAgIH0sXG4gICAgYWxpZ246ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0cyA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBcIlwiICYmIG9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLSBvYmplY3Qud2lkdGggKiBvYmplY3Quc2NhbGVYLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IGNhbnZhcy53aWR0aCAvIDIgLSAob2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCkgLyAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"UqEtsPKZsxv3SzkV4NFGdbK1x3o=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      object.enterEditing();\n      canvas.renderAll();\n    },\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop];\n      console.log(\"🚀 ~ file: index.js ~ line 120 ~ currentValue\", currentValue); // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      console.log(\"🚀 ~ file: index.js ~ line 100 ~ setSelectionStyle ~ objects\", objects);\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJlZGl0b3IiLCJidWlsZEVkaXRvciIsInN0eWxlcyIsImNvbnRhaW5lciIsImJ1dHRvbnMiLCJhZGRUZXh0Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwiZW50ZXJFZGl0aW5nIiwicmVuZGVyQWxsIiwiZ2V0T2JqZWN0cyIsImZvckVhY2giLCJyZW1vdmUiLCJkaXNjYXJkQWN0aXZlT2JqZWN0IiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJvYmplY3RzIiwicHJvcGVydHkiLCJoYXNTZWxlY3Rpb24iLCJzZWxlY3Rpb25TdGFydCIsInNlbGVjdG9uRW5kIiwidmFsdWUiLCJnZXRTZWxlY3Rpb25TdHlsZXMiLCJpIiwic2VsZWN0aW9uRW5kIiwibWFwIiwic2V0Iiwic2NhbGVYIiwic2V0Q29vcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNEQyxzREFBUSxFQURQO0FBQUEsTUFDdEJDLE1BRHNCO0FBQUEsTUFDZEMsU0FEYzs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsRUFBRCxDQUZ4QjtBQUFBLE1BRXRCRyxlQUZzQjtBQUFBLE1BRUxDLGlCQUZLOztBQUFBLG1CQUdLSixzREFBUSxFQUhiO0FBQUEsTUFHdEJLLFNBSHNCO0FBQUEsTUFHWEMsWUFIVzs7QUFBQSxtQkFJU04sc0RBQVEsRUFKakI7QUFBQSxNQUl0Qk8sV0FKc0I7QUFBQSxNQUlUQyxjQUpTOztBQU03QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RQLGFBQVMsQ0FDUCxJQUFJUSw2Q0FBTSxDQUFDQyxNQUFYLENBQWtCQyxTQUFTLENBQUNDLE9BQTVCLEVBQXFDO0FBQ25DQyx1QkFBaUIsRUFBRTtBQURnQixLQUFyQyxDQURPLENBQVQ7QUFLRCxHQU5RLEVBTU4sQ0FBQ1osU0FBRCxDQU5NLENBQVQ7QUFRQU8seURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2QsTUFBRCxFQUFZO0FBQzdCQSxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixZQUFNO0FBQ25DWix5QkFBaUIsQ0FBQyxFQUFELENBQWpCO0FBQ0QsT0FGRDtBQUdBSCxZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDcENiLHlCQUFpQixDQUFDYSxDQUFDLENBQUNDLFFBQUgsQ0FBakI7QUFDRCxPQUZEO0FBR0FqQixZQUFNLENBQUNlLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDcENiLHlC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QUFDdEIsY0FBSW1DLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ3BCbkMsa0JBQU0sQ0FBQ3dDLEdBQVAsQ0FBVztBQUNUdEMsa0JBQUksRUFBRTtBQURHLGFBQVg7QUFHRCxXQUpELE1BSU8sSUFBSWlDLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQzVCbkMsa0JBQU0sQ0FBQ3dDLEdBQVAsQ0FBVztBQUNUdEMsa0JBQUksRUFBRXZDLE1BQU0sQ0FBQ3lDLEtBQVAsR0FBZUosTUFBTSxDQUFDSSxLQUFQLEdBQWVKLE1BQU0sQ0FBQ3lDO0FBRGxDLGFBQVg7QUFHRCxXQUpNLE1BSUEsSUFBSU4sS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDN0JuQyxrQkFBTSxDQUFDd0MsR0FBUCxDQUFXO0FBQ1R0QyxrQkFBSSxFQUFFdkMsTUFBTSxDQUFDeUMsS0FBUCxHQUFlLENBQWYsR0FBb0JKLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlSixNQUFNLENBQUN5QyxNQUF2QixHQUFpQztBQURqRCxhQUFYO0FBR0Q7O0FBQ0R6QyxnQkFBTSxDQUFDMEMsU0FBUDtBQUNELFNBZkQ7QUFnQkQ7O0FBQ0QvRSxZQUFNLENBQUM4QyxTQUFQO0FBQ0Q7QUF2R0ksR0FBUDtBQTJHRCxDQWxIRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZmFicmljIH0gZnJvbSBcImZhYnJpY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRPYmplY3RzLCBzZXRTZWxlY3RlZE9iamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWxsQ29sb3IsIHNldEZpbGxDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3Ryb2tlQ29sb3IsIHNldFN0cm9rZUNvbG9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYW52YXMoXG4gICAgICBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNSZWYuY3VycmVudCwge1xuICAgICAgICByZW5kZXJPbkFkZFJlbW92ZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW3NldENhbnZhc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmluZEV2ZW50cyA9IChjYW52YXMpID0+IHtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjbGVhcmVkXCIsICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoW10pO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y3JlYXRlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOnVwZGF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjaGFuZ2VkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBiaW5kRXZlbnRzKGNhbnZhcyk7XG4gICAgfVxuICB9LCBbY2FudmFzXSk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBlZGl0b3IgPSBidWlsZEVkaXRvcihcbiAgICBjYW52YXMsXG4gICAgZmlsbENvbG9yLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHNldEZpbGxDb2xvcixcbiAgICBzZXRTdHJva2VDb2xvclxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFkZFRleHQoXCJcIil9PkFkZCBUZXh0PC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3Iuc2V0U2VsZWN0aW9uU3R5bGUoc2VsZWN0ZWRPYmplY3RzLCBcImJvbGRcIil9XG4gICAgICAgID5cbiAgICAgICAgICBCb2xkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLnNldFNlbGVjdGlvblN0eWxlKHNlbGVjdGVkT2JqZWN0cywgXCJib2xkXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgSXRhbGljXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcImxlZnRcIil9PkFsaWduIGxlZnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJjZW50ZXJcIil9PkNlbnRlcjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcInJpZ2h0XCIpfT5BbGlnbiByaWdodDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5kZWxldGVBbGwoKX0+RGVsZXRlIHNlbGVjdGVkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmRlbGV0ZUFsbCgpfT5DbGVhciBhbGw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGNhbnZhc1xuICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgd2lkdGg9XCI3MDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwic29saWQgMXB4IGJsYWNrXCIgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFRFWFRfU1RZTEVTID0ge1xuICBmb250V2VpZ2h0OiBbXCJib2xkXCIsIFwibm9ybWFsXCJdLFxuICBvdmVybGluZTogW3RydWUsIGZhbHNlXSxcbiAgdW5kZXJsaW5lOiBbdHJ1ZSwgZmFsc2VdLFxuICBmb250U3R5bGU6IFtcIml0YWxpY1wiLCBcIm5vcm1hbFwiXSxcbn07XG5cbmNvbnN0IGJ1aWxkRWRpdG9yID0gKFxuICBjYW52YXMsXG4gIGZpbGxDb2xvcixcbiAgc3Ryb2tlQ29sb3IsXG4gIF9zZXRGaWxsQ29sb3IsXG4gIF9zZXRTdHJva2VDb2xvclxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FudmFzLFxuICAgIGFkZFRleHQ6ICh0ZXh0KSA9PiB7XG4gICAgICAvLyB1c2Ugc3Ryb2tlIGluIHRleHQgZmlsbCwgZmlsbCBkZWZhdWx0IGlzIG1vc3Qgb2YgdGhlIHRpbWUgdHJhbnNwYXJlbnRcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBmYWJyaWMuVGV4dGJveCh0ZXh0LCB7XG4gICAgICAgIGxlZnQ6IDIwMCxcbiAgICAgICAgdG9wOiAyMDAsXG4gICAgICAgIHdpZHRoOiAzNTAsXG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZmlsbDogXCIjMDAwXCIsXG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5hZGQob2JqZWN0KTtcbiAgICAgIG9iamVjdC5lbnRlckVkaXRpbmcoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuICAgIGRlbGV0ZUFsbDogKCkgPT4ge1xuICAgICAgY2FudmFzLmdldE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IGNhbnZhcy5yZW1vdmUob2JqZWN0KSk7XG4gICAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkOiAoKSA9PiB7XG4gICAgICBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4gY2FudmFzLnJlbW92ZShvYmplY3QpKVxuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKVxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpXG4gICAgfSxcbiAgICBfZ2V0VG9nZ2xlZFZhbHVlOiAoYXJyLCBwcm9wKSA9PiB7XG4gICAgICAvLyBnZXQgbWF4aW11bSB2YWx1ZSBpbiBzZWxlY3Rpb24gKi9cbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGFyclxuICAgICAgICAuc29ydChcbiAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgIGFyci5maWx0ZXIoKHYpID0+IHZbcHJvcF0gPT09IGFbcHJvcF0pLmxlbmd0aCAtXG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBiW3Byb3BdKS5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgICAucG9wKClbcHJvcF07XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEyMCB+IGN1cnJlbnRWYWx1ZVwiLFxuICAgICAgICBjdXJyZW50VmFsdWVcbiAgICAgICk7XG4gICAgICAvLyByZXR1cm4gdGhlIG9wcG9zaXRlIHZhbHVlXG4gICAgICBsZXQgYSA9IFRFWFRfU1RZTEVTW3Byb3BdLmZpbmQoKHYpID0+IHYgIT09IGN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTIyIH4gYVwiLCBhKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0sXG4gICAgLyogSWYgdGV4dGJveCBoYXMgc2VsZWN0aW9uIGluc2lkZSwgb25seSBzZWxlY3RlZCBzeW1ib2xzIHdpbGwgYmUgY2hhbmdlZFxuICAgICAqIElmIG5vIHRleHQgaXMgc2VsZWN0ZWQsIHRyYW5zZm9ybWF0aW9uIHdpbGwgYmUgYXBwbGllZCB0byBhbGwgc2VsZWN0ZWQgdGV4dCBib3hlcyAqL1xuICAgIHNldFNlbGVjdGlvblN0eWxlKG9iamVjdHMsIHByb3BlcnR5KSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEwMCB+IHNldFNlbGVjdGlvblN0eWxlIH4gb2JqZWN0c1wiLFxuICAgICAgICBvYmplY3RzXG4gICAgICApO1xuICAgICAgaWYgKG9iamVjdHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgICAgZWxzZSBpZiAob2JqZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gb2JqZWN0c1swXTtcbiAgICAgICAgY29uc3QgaGFzU2VsZWN0aW9uID0gb2JqZWN0LnNlbGVjdGlvblN0YXJ0ICE9PSBvYmplY3Quc2VsZWN0b25FbmQ7XG4gICAgICAgIGlmIChoYXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2dldFRvZ2dsZWRWYWx1ZShcbiAgICAgICAgICAgIG9iamVjdC5nZXRTZWxlY3Rpb25TdHlsZXMoKSxcbiAgICAgICAgICAgIFwiZm9udFdlaWdodFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMzcgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IHZhbHVlXCIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVE9ETzogcmV3cml0ZSB0byBhdm9pZCBvYmplY3QgbXV0YXRpb25cbiAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdID0gb2JqZWN0LnN0eWxlc1swXSA/PyB7fTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMzggfiBzZXRTZWxlY3Rpb25TdHlsZSB+IG9iamVjdC5zdHlsZXNbMF1cIixcbiAgICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBvYmplY3Quc2VsZWN0aW9uU3RhcnQ7IGkgPCBvYmplY3Quc2VsZWN0aW9uRW5kOyBpKyspIHtcbiAgICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF1baV0gPSB7IGZvbnRXZWlnaHQ6IHZhbHVlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBzZWxlY3Rpb24gPSBvYmplY3RzWzBdLmdldFNlbGVjdGlvblN0YXJ0RnJvbVBvaW50ZXIoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEwNiB+IHNldFNlbGVjdGlvblN0eWxlIH4gc2VsZWN0aW9uXCIsIHNlbGVjdGlvbik7XG4gICAgICAgIC8vIGlmIHNlbGVjdGlvblxuICAgICAgfVxuICAgICAgb2JqZWN0cy5tYXAoKG9iamVjdCkgPT4ge30pO1xuICAgICAgLy8gc2VsZWN0ZWRPYmplY3RzXG4gICAgfSxcbiAgICBhbGlnbjogKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvYmplY3RzID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdHMoKTtcblxuICAgICAgaWYgKHZhbHVlICE9IFwiXCIgJiYgb2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9iamVjdHMubWFwKChvYmplY3QpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IGNhbnZhcy53aWR0aCAtIG9iamVjdC53aWR0aCAqIG9iamVjdC5zY2FsZVgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogY2FudmFzLndpZHRoIC8gMiAtIChvYmplY3Qud2lkdGggKiBvYmplY3Quc2NhbGVYKSAvIDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2JqZWN0LnNldENvb3JkcygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG5cbiAgfTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: [\"Add image\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"file\",\n          accept: \"image/*\",\n          style: {\n            visibility: \"hidden\"\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"UqEtsPKZsxv3SzkV4NFGdbK1x3o=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop];\n      console.log(\"🚀 ~ file: index.js ~ line 120 ~ currentValue\", currentValue); // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      console.log(\"🚀 ~ file: index.js ~ line 100 ~ setSelectionStyle ~ objects\", objects);\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJlZGl0b3IiLCJidWlsZEVkaXRvciIsInN0eWxlcyIsImNvbnRhaW5lciIsImJ1dHRvbnMiLCJhZGRUZXh0IiwidmlzaWJpbGl0eSIsInNldFNlbGVjdGlvblN0eWxlIiwiYWxpZ24iLCJkZWxldGVBbGwiLCJib3JkZXIiLCJURVhUX1NUWUxFUyIsImZvbnRXZWlnaHQiLCJvdmVybGluZSIsInVuZGVybGluZSIsImZvbnRTdHlsZSIsIl9zZXRGaWxsQ29sb3IiLCJfc2V0U3Ryb2tlQ29sb3IiLCJ0ZXh0Iiwib2JqZWN0IiwiVGV4dGJveCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImZvbnRTaXplIiwiZmlsbCIsImFkZCIsInJlbmRlckFsbCIsInNldEFjdGl2ZU9iamVjdCIsImVudGVyRWRpdGluZyIsImRlbGV0ZVNlbGVjdGVkIiwiZ2V0QWN0aXZlT2JqZWN0cyIsImZvckVhY2giLCJyZW1vdmUiLCJkaXNjYXJkQWN0aXZlT2JqZWN0IiwiZ2V0T2JqZWN0cyIsIl9nZXRUb2dnbGVkVmFsdWUiLCJhcnIiLCJwcm9wIiwiY3VycmVudFZhbHVlIiwic29ydCIsImEiLCJiIiwiZmlsdGVyIiwidiIsImxlbmd0aCIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwib2JqZWN0cyIsInByb3BlcnR5IiwiaGFzU2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3RvbkVuZCIsInZhbHVlIiwiZ2V0U2VsZWN0aW9uU3R5bGVzIiwiaSIsInNlbGVjdGlvbkVuZCIsIm1hcCIsInNldCIsInNjYWxlWCIsInNldENvb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsRUFEUDtBQUFBLE1BQ3RCQyxNQURzQjtBQUFBLE1BQ2RDLFNBRGM7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUV0QkcsZUFGc0I7QUFBQSxNQUVMQyxpQkFGSzs7QUFBQSxtQkFHS0osc0RBQVEsRUFIYjtBQUFBLE1BR3RCSyxTQUhzQjtBQUFBLE1BR1hDLFlBSFc7O0FBQUEsbUJBSVNOLHNEQUFRLEVBSmpCO0FBQUEsTUFJdEJPLFdBSnNCO0FBQUEsTUFJVEMsY0FKUzs7QUFNN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxhQUFTLENBQ1AsSUFBSVEsNkNBQU0sQ0FBQ0MsTUFBWCxDQUFrQkMsU0FBUyxDQUFDQyxPQUE1QixFQUFxQztBQUNuQ0MsdUJBQWlCLEVBQUU7QUFEZ0IsS0FBckMsQ0FETyxDQUFUO0FBS0QsR0FOUSxFQU1OLENBQUNaLFNBQUQsQ0FOTSxDQUFUO0FBUUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNkLE1BQUQsRUFBWTtBQUM3QkEsWUFBTSxDQUFDZSxFQUFQLENBQVUsbUJBQVYsRUFBK0IsWUFBTTtBQUNuQ1oseUJBQWlCLENBQUMsRUFBRCxDQUFqQjtBQUNELE9BRkQ7QUFHQUgsWUFBTSxDQUFDZSxFQUFQLENBQVUsbUJBQVYsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDYix5QkFBaUIsQ0FBQ2EsQ0FBQyxDQUFDQyxRQUFILENBQWpCO0FBQ0QsT0FGRDtBQUdBakIsWUFBTSxDQUFDZSxFQUFQLENBQVUsbUJBQVYs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QUN4QyxNQUFELEVBQVksQ0FBRSxDQUExQixFQWpDbUMsQ0FrQ25DO0FBQ0QsS0FyRkk7QUFzRkxYLFNBQUssRUFBRSxlQUFDK0MsS0FBRCxFQUFXO0FBQ2hCLFVBQU1MLE9BQU8sR0FBR3JFLE1BQU0sQ0FBQ2tELGdCQUFQLEVBQWhCOztBQUVBLFVBQUl3QixLQUFLLElBQUksRUFBVCxJQUFlTCxPQUFPLENBQUNMLE1BQVIsR0FBaUIsQ0FBcEMsRUFBdUM7QUFDckNLLGVBQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUN4QyxNQUFELEVBQVk7QUFDdEIsY0FBSW9DLEtBQUssS0FBSyxNQUFkLEVBQXNCO0FBQ3BCcEMsa0JBQU0sQ0FBQ3lDLEdBQVAsQ0FBVztBQUNUdkMsa0JBQUksRUFBRTtBQURHLGFBQVg7QUFHRCxXQUpELE1BSU8sSUFBSWtDLEtBQUssS0FBSyxPQUFkLEVBQXVCO0FBQzVCcEMsa0JBQU0sQ0FBQ3lDLEdBQVAsQ0FBVztBQUNUdkMsa0JBQUksRUFBRXhDLE1BQU0sQ0FBQzBDLEtBQVAsR0FBZUosTUFBTSxDQUFDSSxLQUFQLEdBQWVKLE1BQU0sQ0FBQzBDO0FBRGxDLGFBQVg7QUFHRCxXQUpNLE1BSUEsSUFBSU4sS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDN0JwQyxrQkFBTSxDQUFDeUMsR0FBUCxDQUFXO0FBQ1R2QyxrQkFBSSxFQUFFeEMsTUFBTSxDQUFDMEMsS0FBUCxHQUFlLENBQWYsR0FBb0JKLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlSixNQUFNLENBQUMwQyxNQUF2QixHQUFpQztBQURqRCxhQUFYO0FBR0Q7O0FBQ0QxQyxnQkFBTSxDQUFDMkMsU0FBUDtBQUNELFNBZkQ7QUFnQkQ7O0FBQ0RqRixZQUFNLENBQUM4QyxTQUFQO0FBQ0Q7QUE1R0ksR0FBUDtBQThHRCxDQXJIRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZmFicmljIH0gZnJvbSBcImZhYnJpY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRPYmplY3RzLCBzZXRTZWxlY3RlZE9iamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWxsQ29sb3IsIHNldEZpbGxDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3Ryb2tlQ29sb3IsIHNldFN0cm9rZUNvbG9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYW52YXMoXG4gICAgICBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNSZWYuY3VycmVudCwge1xuICAgICAgICByZW5kZXJPbkFkZFJlbW92ZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW3NldENhbnZhc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmluZEV2ZW50cyA9IChjYW52YXMpID0+IHtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjbGVhcmVkXCIsICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoW10pO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y3JlYXRlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOnVwZGF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjaGFuZ2VkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBiaW5kRXZlbnRzKGNhbnZhcyk7XG4gICAgfVxuICB9LCBbY2FudmFzXSk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBlZGl0b3IgPSBidWlsZEVkaXRvcihcbiAgICBjYW52YXMsXG4gICAgZmlsbENvbG9yLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHNldEZpbGxDb2xvcixcbiAgICBzZXRTdHJva2VDb2xvclxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFkZFRleHQoXCJcIil9PkFkZCBUZXh0PC9idXR0b24+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBBZGQgaW1hZ2VcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgc3R5bGU9e3sgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImZpbGVcIiAgbmFtZT1cImltYWdlXCIgaWQ9XCJmaWxlXCIgIG9uY2hhbmdlPVwibG9hZEZpbGUoZXZlbnQpXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPjwvaW5wdXQ+ICovfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLnNldFNlbGVjdGlvblN0eWxlKHNlbGVjdGVkT2JqZWN0cywgXCJib2xkXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgQm9sZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEl0YWxpY1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJsZWZ0XCIpfT5BbGlnbiBsZWZ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwiY2VudGVyXCIpfT5DZW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJyaWdodFwiKX0+QWxpZ24gcmlnaHQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkRlbGV0ZSBzZWxlY3RlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5kZWxldGVBbGwoKX0+Q2xlYXIgYWxsPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjYW52YXNcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPVwiNzAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcInNvbGlkIDFweCBibGFja1wiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBURVhUX1NUWUxFUyA9IHtcbiAgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcIm5vcm1hbFwiXSxcbiAgb3ZlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIHVuZGVybGluZTogW3RydWUsIGZhbHNlXSxcbiAgZm9udFN0eWxlOiBbXCJpdGFsaWNcIiwgXCJub3JtYWxcIl0sXG59O1xuXG5jb25zdCBidWlsZEVkaXRvciA9IChcbiAgY2FudmFzLFxuICBmaWxsQ29sb3IsXG4gIHN0cm9rZUNvbG9yLFxuICBfc2V0RmlsbENvbG9yLFxuICBfc2V0U3Ryb2tlQ29sb3JcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhbnZhcyxcbiAgICBhZGRUZXh0OiAodGV4dCkgPT4ge1xuICAgICAgLy8gdXNlIHN0cm9rZSBpbiB0ZXh0IGZpbGwsIGZpbGwgZGVmYXVsdCBpcyBtb3N0IG9mIHRoZSB0aW1lIHRyYW5zcGFyZW50XG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgZmFicmljLlRleHRib3godGV4dCwge1xuICAgICAgICBsZWZ0OiAyMDAsXG4gICAgICAgIHRvcDogMjAwLFxuICAgICAgICB3aWR0aDogMzUwLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZpbGw6IFwiIzAwMFwiLFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKG9iamVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KG9iamVjdCk7XG4gICAgICBvYmplY3QuZW50ZXJFZGl0aW5nKCk7XG4gICAgfSxcbiAgICAvKiBEZWxldGUgc2VsZWN0ZWQgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlU2VsZWN0ZWQ6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgLyogRGVsZXRlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBjYW52YXMgKi9cbiAgICBkZWxldGVBbGw6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgX2dldFRvZ2dsZWRWYWx1ZTogKGFyciwgcHJvcCkgPT4ge1xuICAgICAgLy8gZ2V0IG1heGltdW0gdmFsdWUgaW4gc2VsZWN0aW9uICovXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhcnJcbiAgICAgICAgLnNvcnQoXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBhW3Byb3BdKS5sZW5ndGggLVxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYltwcm9wXSkubGVuZ3RoXG4gICAgICAgIClcbiAgICAgICAgLnBvcCgpW3Byb3BdO1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMjAgfiBjdXJyZW50VmFsdWVcIixcbiAgICAgICAgY3VycmVudFZhbHVlXG4gICAgICApO1xuICAgICAgLy8gcmV0dXJuIHRoZSBvcHBvc2l0ZSB2YWx1ZVxuICAgICAgbGV0IGEgPSBURVhUX1NUWUxFU1twcm9wXS5maW5kKCh2KSA9PiB2ICE9PSBjdXJyZW50VmFsdWUpO1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEyMiB+IGFcIiwgYSk7XG4gICAgICByZXR1cm4gYTtcbiAgICB9LFxuICAgIC8qIElmIHRleHRib3ggaGFzIHNlbGVjdGlvbiBpbnNpZGUsIG9ubHkgc2VsZWN0ZWQgc3ltYm9scyB3aWxsIGJlIGNoYW5nZWRcbiAgICAgKiBJZiBubyB0ZXh0IGlzIHNlbGVjdGVkLCB0cmFuc2Zvcm1hdGlvbiB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIHNlbGVjdGVkIHRleHQgYm94ZXMgKi9cbiAgICBzZXRTZWxlY3Rpb25TdHlsZShvYmplY3RzLCBwcm9wZXJ0eSkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMDAgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IG9iamVjdHNcIixcbiAgICAgICAgb2JqZWN0c1xuICAgICAgKTtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA8IDEpIHJldHVybjtcbiAgICAgIGVsc2UgaWYgKG9iamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG9iamVjdHNbMF07XG4gICAgICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9IG9iamVjdC5zZWxlY3Rpb25TdGFydCAhPT0gb2JqZWN0LnNlbGVjdG9uRW5kO1xuICAgICAgICBpZiAoaGFzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRUb2dnbGVkVmFsdWUoXG4gICAgICAgICAgICBvYmplY3QuZ2V0U2VsZWN0aW9uU3R5bGVzKCksXG4gICAgICAgICAgICBcImZvbnRXZWlnaHRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM3IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiB2YWx1ZVwiLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRPRE86IHJld3JpdGUgdG8gYXZvaWQgb2JqZWN0IG11dGF0aW9uXG4gICAgICAgICAgb2JqZWN0LnN0eWxlc1swXSA9IG9iamVjdC5zdHlsZXNbMF0gPz8ge307XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM4IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBvYmplY3Quc3R5bGVzWzBdXCIsXG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LnNlbGVjdGlvblN0YXJ0OyBpIDwgb2JqZWN0LnNlbGVjdGlvbkVuZDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdW2ldID0geyBmb250V2VpZ2h0OiB2YWx1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0aW9uID0gb2JqZWN0c1swXS5nZXRTZWxlY3Rpb25TdGFydEZyb21Qb2ludGVyKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMDYgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IHNlbGVjdGlvblwiLCBzZWxlY3Rpb24pO1xuICAgICAgICAvLyBpZiBzZWxlY3Rpb25cbiAgICAgIH1cbiAgICAgIG9iamVjdHMubWFwKChvYmplY3QpID0+IHt9KTtcbiAgICAgIC8vIHNlbGVjdGVkT2JqZWN0c1xuICAgIH0sXG4gICAgYWxpZ246ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0cyA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBcIlwiICYmIG9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLSBvYmplY3Qud2lkdGggKiBvYmplY3Quc2NhbGVYLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IGNhbnZhcy53aWR0aCAvIDIgLSAob2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCkgLyAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
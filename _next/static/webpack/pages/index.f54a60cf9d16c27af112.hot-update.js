webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n\n  var addImage = function addImage() {\n    imageInputRef;\n    console.log(\"🚀 ~ file: index.js ~ line 53 ~ addImage ~ imageInputRef\", imageInputRef);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        \"for\": \"file-upload\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fileupload,\n        children: \"Add Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: imageInputRef,\n        id: \"file-upload\",\n        type: \"file\",\n        style: {\n          display: \"none\"\n        },\n        onChange: addImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"yNAnIF55Um0g5t8KGULPPQFrsXM=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop];\n      console.log(\"🚀 ~ file: index.js ~ line 120 ~ currentValue\", currentValue); // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      console.log(\"🚀 ~ file: index.js ~ line 100 ~ setSelectionStyle ~ objects\", objects);\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJpbWFnZUlucHV0UmVmIiwiZWRpdG9yIiwiYnVpbGRFZGl0b3IiLCJhZGRJbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwiYWRkVGV4dCIsImZpbGV1cGxvYWQiLCJkaXNwbGF5Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwicmVuZGVyQWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiZm9yRWFjaCIsInJlbW92ZSIsImRpc2NhcmRBY3RpdmVPYmplY3QiLCJnZXRPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiZmluZCIsIm9iamVjdHMiLCJwcm9wZXJ0eSIsImhhc1NlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0b25FbmQiLCJ2YWx1ZSIsImdldFNlbGVjdGlvblN0eWxlcyIsImkiLCJzZWxlY3Rpb25FbmQiLCJtYXAiLCJzZXQiLCJzY2FsZVgiLCJzZXRDb29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLEVBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFdEJHLGVBRnNCO0FBQUEsTUFFTEMsaUJBRks7O0FBQUEsbUJBR0tKLHNEQUFRLEVBSGI7QUFBQSxNQUd0QkssU0FIc0I7QUFBQSxNQUdYQyxZQUhXOztBQUFBLG1CQUlTTixzREFBUSxFQUpqQjtBQUFBLE1BSXRCTyxXQUpzQjtBQUFBLE1BSVRDLGNBSlM7O0FBTTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZFAsYUFBUyxDQUNQLElBQUlRLDZDQUFNLENBQUNDLE1BQVgsQ0FBa0JDLFNBQVMsQ0FBQ0MsT0FBNUIsRUFBcUM7QUFDbkNDLHVCQUFpQixFQUFFO0FBRGdCLEtBQXJDLENBRE8sQ0FBVDtBQUtELEdBTlEsRUFNTixDQUFDWixTQUFELENBTk0sQ0FBVDtBQVFBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZCxNQUFELEVBQVk7QUFDN0JBLFlBQU0sQ0FBQ2UsRUFBUCxDQUFVLG1CQUFWLEVBQStCLFlBQU07QUFDbkNaLHlCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDRCxPQUZEO0FBR0FILFlBQU0sQ0FBQ2UsRUFBUCxDQUFVLG1CQUFWLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNwQ2IseUJBQWlCLENBQUNhLENBQUMsQ0FBQ0MsUUFBSCxDQUFqQjtBQUNELE9B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ZSxDQUFmLEdBQW9CSixNQUFNLENBQUNJLEtBQVAsR0FBZUosTUFBTSxDQUFDd0MsTUFBdkIsR0FBaUM7QUFEakQsYUFBWDtBQUdEOztBQUNEeEMsZ0JBQU0sQ0FBQ3lDLFNBQVA7QUFDRCxTQWZEO0FBZ0JEOztBQUNEcEYsWUFBTSxDQUFDbUQsU0FBUDtBQUNEO0FBNUdJLEdBQVA7QUE4R0QsQ0FySEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGZhYnJpYyB9IGZyb20gXCJmYWJyaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FudmFzLCBzZXRDYW52YXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NlbGVjdGVkT2JqZWN0cywgc2V0U2VsZWN0ZWRPYmplY3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsbENvbG9yLCBzZXRGaWxsQ29sb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0cm9rZUNvbG9yLCBzZXRTdHJva2VDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FudmFzKFxuICAgICAgbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgcmVuZGVyT25BZGRSZW1vdmU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtzZXRDYW52YXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoY2FudmFzKSA9PiB7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2xlYXJlZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KFtdKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOmNyZWF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjp1cGRhdGVkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2hhbmdlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgYmluZEV2ZW50cyhjYW52YXMpO1xuICAgIH1cbiAgfSwgW2NhbnZhc10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZWRpdG9yID0gYnVpbGRFZGl0b3IoXG4gICAgY2FudmFzLFxuICAgIGZpbGxDb2xvcixcbiAgICBzdHJva2VDb2xvcixcbiAgICBzZXRGaWxsQ29sb3IsXG4gICAgc2V0U3Ryb2tlQ29sb3JcbiAgKTtcblxuICBjb25zdCBhZGRJbWFnZSA9ICgpID0+IHtcbiAgICBpbWFnZUlucHV0UmVmO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDUzIH4gYWRkSW1hZ2UgfiBpbWFnZUlucHV0UmVmXCIsXG4gICAgICBpbWFnZUlucHV0UmVmXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hZGRUZXh0KFwiXCIpfT5BZGQgVGV4dDwvYnV0dG9uPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9e3N0eWxlcy5maWxldXBsb2FkfT5cbiAgICAgICAgICBBZGQgSW1hZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0UmVmfVxuICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXthZGRJbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEJvbGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3Iuc2V0U2VsZWN0aW9uU3R5bGUoc2VsZWN0ZWRPYmplY3RzLCBcImJvbGRcIil9XG4gICAgICAgID5cbiAgICAgICAgICBJdGFsaWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwibGVmdFwiKX0+QWxpZ24gbGVmdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcImNlbnRlclwiKX0+Q2VudGVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwicmlnaHRcIil9PkFsaWduIHJpZ2h0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmRlbGV0ZUFsbCgpfT5EZWxldGUgc2VsZWN0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkNsZWFyIGFsbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCJzb2xpZCAxcHggYmxhY2tcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgVEVYVF9TVFlMRVMgPSB7XG4gIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJub3JtYWxcIl0sXG4gIG92ZXJsaW5lOiBbdHJ1ZSwgZmFsc2VdLFxuICB1bmRlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIGZvbnRTdHlsZTogW1wiaXRhbGljXCIsIFwibm9ybWFsXCJdLFxufTtcblxuY29uc3QgYnVpbGRFZGl0b3IgPSAoXG4gIGNhbnZhcyxcbiAgZmlsbENvbG9yLFxuICBzdHJva2VDb2xvcixcbiAgX3NldEZpbGxDb2xvcixcbiAgX3NldFN0cm9rZUNvbG9yXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYW52YXMsXG4gICAgYWRkVGV4dDogKHRleHQpID0+IHtcbiAgICAgIC8vIHVzZSBzdHJva2UgaW4gdGV4dCBmaWxsLCBmaWxsIGRlZmF1bHQgaXMgbW9zdCBvZiB0aGUgdGltZSB0cmFuc3BhcmVudFxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IGZhYnJpYy5UZXh0Ym94KHRleHQsIHtcbiAgICAgICAgbGVmdDogMjAwLFxuICAgICAgICB0b3A6IDIwMCxcbiAgICAgICAgd2lkdGg6IDM1MCxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmaWxsOiBcIiMwMDBcIixcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLmFkZChvYmplY3QpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChvYmplY3QpO1xuICAgICAgb2JqZWN0LmVudGVyRWRpdGluZygpO1xuICAgIH0sXG4gICAgLyogRGVsZXRlIHNlbGVjdGVkIGVsZW1lbnRzIGZyb20gdGhlIGNhbnZhcyAqL1xuICAgIGRlbGV0ZVNlbGVjdGVkOiAoKSA9PiB7XG4gICAgICBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4gY2FudmFzLnJlbW92ZShvYmplY3QpKTtcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIC8qIERlbGV0ZSBhbGwgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlQWxsOiAoKSA9PiB7XG4gICAgICBjYW52YXMuZ2V0T2JqZWN0cygpLmZvckVhY2goKG9iamVjdCkgPT4gY2FudmFzLnJlbW92ZShvYmplY3QpKTtcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcblxuICAgIF9nZXRUb2dnbGVkVmFsdWU6IChhcnIsIHByb3ApID0+IHtcbiAgICAgIC8vIGdldCBtYXhpbXVtIHZhbHVlIGluIHNlbGVjdGlvbiAqL1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gYXJyXG4gICAgICAgIC5zb3J0KFxuICAgICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYVtwcm9wXSkubGVuZ3RoIC1cbiAgICAgICAgICAgIGFyci5maWx0ZXIoKHYpID0+IHZbcHJvcF0gPT09IGJbcHJvcF0pLmxlbmd0aFxuICAgICAgICApXG4gICAgICAgIC5wb3AoKVtwcm9wXTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTIwIH4gY3VycmVudFZhbHVlXCIsXG4gICAgICAgIGN1cnJlbnRWYWx1ZVxuICAgICAgKTtcbiAgICAgIC8vIHJldHVybiB0aGUgb3Bwb3NpdGUgdmFsdWVcbiAgICAgIGxldCBhID0gVEVYVF9TVFlMRVNbcHJvcF0uZmluZCgodikgPT4gdiAhPT0gY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMjIgfiBhXCIsIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICAvKiBJZiB0ZXh0Ym94IGhhcyBzZWxlY3Rpb24gaW5zaWRlLCBvbmx5IHNlbGVjdGVkIHN5bWJvbHMgd2lsbCBiZSBjaGFuZ2VkXG4gICAgICogSWYgbm8gdGV4dCBpcyBzZWxlY3RlZCwgdHJhbnNmb3JtYXRpb24gd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBzZWxlY3RlZCB0ZXh0IGJveGVzICovXG4gICAgc2V0U2VsZWN0aW9uU3R5bGUob2JqZWN0cywgcHJvcGVydHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTAwIH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBvYmplY3RzXCIsXG4gICAgICAgIG9iamVjdHNcbiAgICAgICk7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPCAxKSByZXR1cm47XG4gICAgICBlbHNlIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBvYmplY3RzWzBdO1xuICAgICAgICBjb25zdCBoYXNTZWxlY3Rpb24gPSBvYmplY3Quc2VsZWN0aW9uU3RhcnQgIT09IG9iamVjdC5zZWxlY3RvbkVuZDtcbiAgICAgICAgaWYgKGhhc1NlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VG9nZ2xlZFZhbHVlKFxuICAgICAgICAgICAgb2JqZWN0LmdldFNlbGVjdGlvblN0eWxlcygpLFxuICAgICAgICAgICAgXCJmb250V2VpZ2h0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzNyB+IHNldFNlbGVjdGlvblN0eWxlIH4gdmFsdWVcIixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUT0RPOiByZXdyaXRlIHRvIGF2b2lkIG9iamVjdCBtdXRhdGlvblxuICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF0gPSBvYmplY3Quc3R5bGVzWzBdID8/IHt9O1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzOCB+IHNldFNlbGVjdGlvblN0eWxlIH4gb2JqZWN0LnN0eWxlc1swXVwiLFxuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5zZWxlY3Rpb25TdGFydDsgaSA8IG9iamVjdC5zZWxlY3Rpb25FbmQ7IGkrKykge1xuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVtpXSA9IHsgZm9udFdlaWdodDogdmFsdWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IG9iamVjdHNbMF0uZ2V0U2VsZWN0aW9uU3RhcnRGcm9tUG9pbnRlcigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTA2IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBzZWxlY3Rpb25cIiwgc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gaWYgc2VsZWN0aW9uXG4gICAgICB9XG4gICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7fSk7XG4gICAgICAvLyBzZWxlY3RlZE9iamVjdHNcbiAgICB9LFxuICAgIGFsaWduOiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9iamVjdHMgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gXCJcIiAmJiBvYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2JqZWN0cy5tYXAoKG9iamVjdCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogY2FudmFzLndpZHRoIC0gb2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLyAyIC0gKG9iamVjdC53aWR0aCAqIG9iamVjdC5zY2FsZVgpIC8gMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
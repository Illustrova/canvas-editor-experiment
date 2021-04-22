webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_illustrova_Dropbox_PROJECTS_fabricjs_experiment_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_4__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n\n  var addImage = function addImage() {\n    var input = imageInputRef.current;\n\n    if (input.files && input.files[0]) {\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        var imgObj = new Image();\n        imgObj.src = event.target.result;\n\n        imgObj.onload = function () {\n          editor.addImage(imgObj);\n        };\n      };\n\n      reader.readAsDataURL(input.files[0]);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"file-upload\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fileupload,\n        children: \"Add Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        ref: imageInputRef,\n        id: \"file-upload\",\n        type: \"file\",\n        style: {\n          display: \"none\"\n        },\n        onChange: addImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"fontweight\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"fontStyle\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"yNAnIF55Um0g5t8KGULPPQFrsXM=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n\n    /* Adds new text block and sets focus in it */\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_4__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n\n    /* Loads image to canvas */\n    addImage: function addImage(image) {\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_4__[\"fabric\"].Image(image, {\n        width: 500,\n        height: 500 // left: 50,\n        // top: 70,\n        // scaleX: .25,\n        // scaleY: .25\n\n      });\n      canvas.add(object);\n      canvas.renderAll;\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Private method, works with \"styles\" array, where every array element keeps individual letter style\n    the purpose is to detect the most common value in selection (for eanmple, bold text can be mixed with normal, and we need to detect the styling of the most part)\n    Then we find the opposite value in the dictionary (since fontWeight and fontStyle are not boolean) */\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get most frequent value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop]; // return the opposite value\n\n      return TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes \n    \n    @param property {string} - supported fontWeight, fontStyle, underline, overline\n    */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), property);\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = Object(_Users_illustrova_Dropbox_PROJECTS_fabricjs_experiment_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, property, value);\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJpbWFnZUlucHV0UmVmIiwiZWRpdG9yIiwiYnVpbGRFZGl0b3IiLCJhZGRJbWFnZSIsImlucHV0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaW1nT2JqIiwiSW1hZ2UiLCJzcmMiLCJldmVudCIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwiYWRkVGV4dCIsImZpbGV1cGxvYWQiLCJkaXNwbGF5Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwicmVuZGVyQWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiaW1hZ2UiLCJoZWlnaHQiLCJkZWxldGVTZWxlY3RlZCIsImdldEFjdGl2ZU9iamVjdHMiLCJmb3JFYWNoIiwicmVtb3ZlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsImdldE9iamVjdHMiLCJfZ2V0VG9nZ2xlZFZhbHVlIiwiYXJyIiwicHJvcCIsImN1cnJlbnRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsImZpbHRlciIsInYiLCJsZW5ndGgiLCJwb3AiLCJmaW5kIiwib2JqZWN0cyIsInByb3BlcnR5IiwiaGFzU2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3RvbkVuZCIsInZhbHVlIiwiZ2V0U2VsZWN0aW9uU3R5bGVzIiwiY29uc29sZSIsImxvZyIsImkiLCJzZWxlY3Rpb25FbmQiLCJtYXAiLCJzZXQiLCJzY2FsZVgiLCJzZXRDb29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsRUFEUDtBQUFBLE1BQ3RCQyxNQURzQjtBQUFBLE1BQ2RDLFNBRGM7O0FBQUEsbUJBRWdCRixzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUV0QkcsZUFGc0I7QUFBQSxNQUVMQyxpQkFGSzs7QUFBQSxtQkFHS0osc0RBQVEsRUFIYjtBQUFBLE1BR3RCSyxTQUhzQjtBQUFBLE1BR1hDLFlBSFc7O0FBQUEsbUJBSVNOLHNEQUFRLEVBSmpCO0FBQUEsTUFJdEJPLFdBSnNCO0FBQUEsTUFJVEMsY0FKUzs7QUFNN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxhQUFTLENBQ1AsSUFBSVEsNkNBQU0sQ0FBQ0MsTUFBWCxDQUFrQkMsU0FBUyxDQUFDQyxPQUE1QixFQUFxQztBQUNuQ0MsdUJBQWlCLEVBQUU7QUFEZ0IsS0FBckMsQ0FETyxDQUFUO0FBS0QsR0FOUSxFQU1OLENBQUNaLFNBQUQsQ0FOTSxDQUFUO0FBUUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNkLE1BQUQsRUFBWTtBQUM3QkEsWUFBTSxDQUFDZSxFQUFQLENBQVUsbUJBQVYsRUFBK0IsWUFBTTtBQUNuQ1oseUJBQWlC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IGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGZhYnJpYyB9IGZyb20gXCJmYWJyaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbY2FudmFzLCBzZXRDYW52YXNdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3NlbGVjdGVkT2JqZWN0cywgc2V0U2VsZWN0ZWRPYmplY3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsbENvbG9yLCBzZXRGaWxsQ29sb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3N0cm9rZUNvbG9yLCBzZXRTdHJva2VDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2FudmFzKFxuICAgICAgbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgcmVuZGVyT25BZGRSZW1vdmU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtzZXRDYW52YXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbmRFdmVudHMgPSAoY2FudmFzKSA9PiB7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2xlYXJlZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KFtdKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOmNyZWF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjp1cGRhdGVkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y2hhbmdlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgYmluZEV2ZW50cyhjYW52YXMpO1xuICAgIH1cbiAgfSwgW2NhbnZhc10pO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGltYWdlSW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZWRpdG9yID0gYnVpbGRFZGl0b3IoXG4gICAgY2FudmFzLFxuICAgIGZpbGxDb2xvcixcbiAgICBzdHJva2VDb2xvcixcbiAgICBzZXRGaWxsQ29sb3IsXG4gICAgc2V0U3Ryb2tlQ29sb3JcbiAgKTtcblxuICBjb25zdCBhZGRJbWFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGltYWdlSW5wdXRSZWYuY3VycmVudDtcbiAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcbiAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGltZ09iaiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWdPYmouc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgaW1nT2JqLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlZGl0b3IuYWRkSW1hZ2UoaW1nT2JqKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFkZFRleHQoXCJcIil9PkFkZCBUZXh0PC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9e3N0eWxlcy5maWxldXBsb2FkfT5cbiAgICAgICAgICBBZGQgSW1hZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0UmVmfVxuICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXthZGRJbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICBlZGl0b3Iuc2V0U2VsZWN0aW9uU3R5bGUoc2VsZWN0ZWRPYmplY3RzLCBcImZvbnR3ZWlnaHRcIilcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICBCb2xkXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLnNldFNlbGVjdGlvblN0eWxlKHNlbGVjdGVkT2JqZWN0cywgXCJmb250U3R5bGVcIil9XG4gICAgICAgID5cbiAgICAgICAgICBJdGFsaWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwibGVmdFwiKX0+QWxpZ24gbGVmdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcImNlbnRlclwiKX0+Q2VudGVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwicmlnaHRcIil9PkFsaWduIHJpZ2h0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmRlbGV0ZUFsbCgpfT5EZWxldGUgc2VsZWN0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkNsZWFyIGFsbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCJzb2xpZCAxcHggYmxhY2tcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgVEVYVF9TVFlMRVMgPSB7XG4gIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJub3JtYWxcIl0sXG4gIG92ZXJsaW5lOiBbdHJ1ZSwgZmFsc2VdLFxuICB1bmRlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIGZvbnRTdHlsZTogW1wiaXRhbGljXCIsIFwibm9ybWFsXCJdLFxufTtcblxuY29uc3QgYnVpbGRFZGl0b3IgPSAoXG4gIGNhbnZhcyxcbiAgZmlsbENvbG9yLFxuICBzdHJva2VDb2xvcixcbiAgX3NldEZpbGxDb2xvcixcbiAgX3NldFN0cm9rZUNvbG9yXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYW52YXMsXG4gICAgLyogQWRkcyBuZXcgdGV4dCBibG9jayBhbmQgc2V0cyBmb2N1cyBpbiBpdCAqL1xuICAgIGFkZFRleHQ6ICh0ZXh0KSA9PiB7XG4gICAgICAvLyB1c2Ugc3Ryb2tlIGluIHRleHQgZmlsbCwgZmlsbCBkZWZhdWx0IGlzIG1vc3Qgb2YgdGhlIHRpbWUgdHJhbnNwYXJlbnRcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBmYWJyaWMuVGV4dGJveCh0ZXh0LCB7XG4gICAgICAgIGxlZnQ6IDIwMCxcbiAgICAgICAgdG9wOiAyMDAsXG4gICAgICAgIHdpZHRoOiAzNTAsXG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZmlsbDogXCIjMDAwXCIsXG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5hZGQob2JqZWN0KTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3Qob2JqZWN0KTtcbiAgICAgIG9iamVjdC5lbnRlckVkaXRpbmcoKTtcbiAgICB9LFxuXG4gICAgLyogTG9hZHMgaW1hZ2UgdG8gY2FudmFzICovXG4gICAgYWRkSW1hZ2U6IChpbWFnZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IGZhYnJpYy5JbWFnZShpbWFnZSwge1xuICAgICAgICB3aWR0aDogNTAwLFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgLy8gbGVmdDogNTAsXG4gICAgICAgIC8vIHRvcDogNzAsXG4gICAgICAgIC8vIHNjYWxlWDogLjI1LFxuICAgICAgICAvLyBzY2FsZVk6IC4yNVxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKG9iamVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsO1xuICAgIH0sXG5cbiAgICAvKiBEZWxldGUgc2VsZWN0ZWQgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlU2VsZWN0ZWQ6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgLyogRGVsZXRlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBjYW52YXMgKi9cbiAgICBkZWxldGVBbGw6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuICAgIC8qIFByaXZhdGUgbWV0aG9kLCB3b3JrcyB3aXRoIFwic3R5bGVzXCIgYXJyYXksIHdoZXJlIGV2ZXJ5IGFycmF5IGVsZW1lbnQga2VlcHMgaW5kaXZpZHVhbCBsZXR0ZXIgc3R5bGVcbiAgICB0aGUgcHVycG9zZSBpcyB0byBkZXRlY3QgdGhlIG1vc3QgY29tbW9uIHZhbHVlIGluIHNlbGVjdGlvbiAoZm9yIGVhbm1wbGUsIGJvbGQgdGV4dCBjYW4gYmUgbWl4ZWQgd2l0aCBub3JtYWwsIGFuZCB3ZSBuZWVkIHRvIGRldGVjdCB0aGUgc3R5bGluZyBvZiB0aGUgbW9zdCBwYXJ0KVxuICAgIFRoZW4gd2UgZmluZCB0aGUgb3Bwb3NpdGUgdmFsdWUgaW4gdGhlIGRpY3Rpb25hcnkgKHNpbmNlIGZvbnRXZWlnaHQgYW5kIGZvbnRTdHlsZSBhcmUgbm90IGJvb2xlYW4pICovXG4gICAgX2dldFRvZ2dsZWRWYWx1ZTogKGFyciwgcHJvcCkgPT4ge1xuICAgICAgLy8gZ2V0IG1vc3QgZnJlcXVlbnQgdmFsdWUgaW4gc2VsZWN0aW9uICovXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhcnJcbiAgICAgICAgLnNvcnQoXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBhW3Byb3BdKS5sZW5ndGggLVxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYltwcm9wXSkubGVuZ3RoXG4gICAgICAgIClcbiAgICAgICAgLnBvcCgpW3Byb3BdO1xuXG4gICAgICAvLyByZXR1cm4gdGhlIG9wcG9zaXRlIHZhbHVlXG4gICAgICByZXR1cm4gVEVYVF9TVFlMRVNbcHJvcF0uZmluZCgodikgPT4gdiAhPT0gY3VycmVudFZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyogSWYgdGV4dGJveCBoYXMgc2VsZWN0aW9uIGluc2lkZSwgb25seSBzZWxlY3RlZCBzeW1ib2xzIHdpbGwgYmUgY2hhbmdlZFxuICAgICAqIElmIG5vIHRleHQgaXMgc2VsZWN0ZWQsIHRyYW5zZm9ybWF0aW9uIHdpbGwgYmUgYXBwbGllZCB0byBhbGwgc2VsZWN0ZWQgdGV4dCBib3hlcyBcbiAgICBcbiAgICBAcGFyYW0gcHJvcGVydHkge3N0cmluZ30gLSBzdXBwb3J0ZWQgZm9udFdlaWdodCwgZm9udFN0eWxlLCB1bmRlcmxpbmUsIG92ZXJsaW5lXG4gICAgKi9cbiAgICBzZXRTZWxlY3Rpb25TdHlsZShvYmplY3RzLCBwcm9wZXJ0eSkge1xuICAgICAgaWYgKG9iamVjdHMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgICAgZWxzZSBpZiAob2JqZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gb2JqZWN0c1swXTtcbiAgICAgICAgY29uc3QgaGFzU2VsZWN0aW9uID0gb2JqZWN0LnNlbGVjdGlvblN0YXJ0ICE9PSBvYmplY3Quc2VsZWN0b25FbmQ7XG4gICAgICAgIGlmIChoYXNTZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2dldFRvZ2dsZWRWYWx1ZShcbiAgICAgICAgICAgIG9iamVjdC5nZXRTZWxlY3Rpb25TdHlsZXMoKSxcbiAgICAgICAgICAgIHByb3BlcnR5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMzcgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IHZhbHVlXCIsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVE9ETzogcmV3cml0ZSB0byBhdm9pZCBvYmplY3QgbXV0YXRpb25cbiAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdID0gb2JqZWN0LnN0eWxlc1swXSA/PyB7fTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgIFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMzggfiBzZXRTZWxlY3Rpb25TdHlsZSB+IG9iamVjdC5zdHlsZXNbMF1cIixcbiAgICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF1cbiAgICAgICAgICApO1xuICAgICAgICAgIGZvciAobGV0IGkgPSBvYmplY3Quc2VsZWN0aW9uU3RhcnQ7IGkgPCBvYmplY3Quc2VsZWN0aW9uRW5kOyBpKyspIHtcbiAgICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF1baV0gPSB7IFtwcm9wZXJ0eV06IHZhbHVlIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zdCBzZWxlY3Rpb24gPSBvYmplY3RzWzBdLmdldFNlbGVjdGlvblN0YXJ0RnJvbVBvaW50ZXIoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEwNiB+IHNldFNlbGVjdGlvblN0eWxlIH4gc2VsZWN0aW9uXCIsIHNlbGVjdGlvbik7XG4gICAgICAgIC8vIGlmIHNlbGVjdGlvblxuICAgICAgfVxuICAgICAgb2JqZWN0cy5tYXAoKG9iamVjdCkgPT4ge30pO1xuICAgICAgLy8gc2VsZWN0ZWRPYmplY3RzXG4gICAgfSxcbiAgICBhbGlnbjogKHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBvYmplY3RzID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdHMoKTtcblxuICAgICAgaWYgKHZhbHVlICE9IFwiXCIgJiYgb2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9iamVjdHMubWFwKChvYmplY3QpID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IGNhbnZhcy53aWR0aCAtIG9iamVjdC53aWR0aCAqIG9iamVjdC5zY2FsZVgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogY2FudmFzLndpZHRoIC8gMiAtIChvYmplY3Qud2lkdGggKiBvYmplY3Quc2NhbGVYKSAvIDIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb2JqZWN0LnNldENvb3JkcygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
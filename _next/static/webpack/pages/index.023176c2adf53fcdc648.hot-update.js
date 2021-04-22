webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n\n  var addImage = function addImage() {\n    var input = imageInputRef.current;\n\n    if (input.files && input.files[0]) {\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        var imgObj = new Image();\n        imgObj.src = event.target.result;\n\n        imgObj.onload = function () {\n          editor.addImage(imgObj);\n        };\n      };\n\n      reader.readAsDataURL(input.files[0]);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"file-upload\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fileupload,\n        children: \"Add Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: imageInputRef,\n        id: \"file-upload\",\n        type: \"file\",\n        style: {\n          display: \"none\"\n        },\n        onChange: addImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"yNAnIF55Um0g5t8KGULPPQFrsXM=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n    addImage: function addImage(image) {\n      //  var image = new fabric.Image(imgObj);\n      //  image.set({\n      //    // angle: 0,\n      //    // padding: 10,\n      //    // cornersize: 10,\n      //    // height: 110,\n      //    // width: 110,\n      //  });\n      //  canvas.centerObject(image);\n      //  canvas.add(image);\n      //  canvas.renderAll();\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Image(image, {\n        width: 500,\n        height: 500 // left: 50,\n        // top: 70,\n        // scaleX: .25,\n        // scaleY: .25\n\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 141 ~ object\", object);\n      canvas.add(object);\n      canvas.renderAll;\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop]; // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJpbWFnZUlucHV0UmVmIiwiZWRpdG9yIiwiYnVpbGRFZGl0b3IiLCJhZGRJbWFnZSIsImlucHV0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiaW1nT2JqIiwiSW1hZ2UiLCJzcmMiLCJldmVudCIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwiYWRkVGV4dCIsImZpbGV1cGxvYWQiLCJkaXNwbGF5Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwiYWRkIiwicmVuZGVyQWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiaW1hZ2UiLCJoZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiZm9yRWFjaCIsInJlbW92ZSIsImRpc2NhcmRBY3RpdmVPYmplY3QiLCJnZXRPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiZmluZCIsIm9iamVjdHMiLCJwcm9wZXJ0eSIsImhhc1NlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0b25FbmQiLCJ2YWx1ZSIsImdldFNlbGVjdGlvblN0eWxlcyIsImkiLCJzZWxlY3Rpb25FbmQiLCJtYXAiLCJzZXQiLCJzY2FsZVgiLCJzZXRDb29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLEVBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFdEJHLGVBRnNCO0FBQUEsTUFFTEMsaUJBRks7O0FBQUEsbUJBR0tKLHNEQUFRLEVBSGI7QUFBQSxNQUd0QkssU0FIc0I7QUFBQSxNQUdYQyxZQUhXOztBQUFBLG1CQUlTTixzREFBUSxFQUpqQjtBQUFBLE1BSXRCTyxXQUpzQjtBQUFBLE1BSVRDLGNBSlM7O0FBTTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZFAsYUFBUyxDQUNQLElBQUlRLDZDQUFNLENBQUNDLE1BQVgsQ0FBa0JDLFNBQVMsQ0FBQ0MsT0FBNUIsRUFBcUM7QUFDbkNDLHVCQUFpQixFQUFFO0FBRGdCLEtBQXJDLENBRE8sQ0FBVDtBQUtELEdBTlEsRUFNTixDQUFDWixTQUFELENBTk0sQ0FBVDtBQVFBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZCxNQUFELEVBQVk7QUFDN0JBLFlBQU0sQ0FBQ2UsRUFBUCxDQUFVLG1CQUFWLEVBQStCLFlBQU07QUFDbkNaLHlCQUFpQixD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QUFDNkMsU0FBUDtBQUNELFNBZkQ7QUFnQkQ7O0FBQ0RsRyxZQUFNLENBQUM2RCxTQUFQO0FBQ0Q7QUE5SEksR0FBUDtBQWdJRCxDQXZJRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZmFicmljIH0gZnJvbSBcImZhYnJpY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRPYmplY3RzLCBzZXRTZWxlY3RlZE9iamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWxsQ29sb3IsIHNldEZpbGxDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3Ryb2tlQ29sb3IsIHNldFN0cm9rZUNvbG9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYW52YXMoXG4gICAgICBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNSZWYuY3VycmVudCwge1xuICAgICAgICByZW5kZXJPbkFkZFJlbW92ZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW3NldENhbnZhc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmluZEV2ZW50cyA9IChjYW52YXMpID0+IHtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjbGVhcmVkXCIsICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoW10pO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y3JlYXRlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOnVwZGF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjaGFuZ2VkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBiaW5kRXZlbnRzKGNhbnZhcyk7XG4gICAgfVxuICB9LCBbY2FudmFzXSk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBlZGl0b3IgPSBidWlsZEVkaXRvcihcbiAgICBjYW52YXMsXG4gICAgZmlsbENvbG9yLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHNldEZpbGxDb2xvcixcbiAgICBzZXRTdHJva2VDb2xvclxuICApO1xuXG4gIGNvbnN0IGFkZEltYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gaW1hZ2VJbnB1dFJlZi5jdXJyZW50O1xuICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ09iai5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICBpbWdPYmoub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVkaXRvci5hZGRJbWFnZShpbWdPYmopO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWRkVGV4dChcIlwiKX0+QWRkIFRleHQ8L2J1dHRvbj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaWxlLXVwbG9hZFwiIGNsYXNzTmFtZT17c3R5bGVzLmZpbGV1cGxvYWR9PlxuICAgICAgICAgIEFkZCBJbWFnZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZWY9e2ltYWdlSW5wdXRSZWZ9XG4gICAgICAgICAgaWQ9XCJmaWxlLXVwbG9hZFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2FkZEltYWdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdG9yLnNldFNlbGVjdGlvblN0eWxlKHNlbGVjdGVkT2JqZWN0cywgXCJib2xkXCIpfVxuICAgICAgICA+XG4gICAgICAgICAgQm9sZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEl0YWxpY1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJsZWZ0XCIpfT5BbGlnbiBsZWZ0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwiY2VudGVyXCIpfT5DZW50ZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuYWxpZ24oXCJyaWdodFwiKX0+QWxpZ24gcmlnaHQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkRlbGV0ZSBzZWxlY3RlZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5kZWxldGVBbGwoKX0+Q2xlYXIgYWxsPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxjYW52YXNcbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPVwiNzAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBcInNvbGlkIDFweCBibGFja1wiIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBURVhUX1NUWUxFUyA9IHtcbiAgZm9udFdlaWdodDogW1wiYm9sZFwiLCBcIm5vcm1hbFwiXSxcbiAgb3ZlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIHVuZGVybGluZTogW3RydWUsIGZhbHNlXSxcbiAgZm9udFN0eWxlOiBbXCJpdGFsaWNcIiwgXCJub3JtYWxcIl0sXG59O1xuXG5jb25zdCBidWlsZEVkaXRvciA9IChcbiAgY2FudmFzLFxuICBmaWxsQ29sb3IsXG4gIHN0cm9rZUNvbG9yLFxuICBfc2V0RmlsbENvbG9yLFxuICBfc2V0U3Ryb2tlQ29sb3JcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhbnZhcyxcbiAgICBhZGRUZXh0OiAodGV4dCkgPT4ge1xuICAgICAgLy8gdXNlIHN0cm9rZSBpbiB0ZXh0IGZpbGwsIGZpbGwgZGVmYXVsdCBpcyBtb3N0IG9mIHRoZSB0aW1lIHRyYW5zcGFyZW50XG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgZmFicmljLlRleHRib3godGV4dCwge1xuICAgICAgICBsZWZ0OiAyMDAsXG4gICAgICAgIHRvcDogMjAwLFxuICAgICAgICB3aWR0aDogMzUwLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZpbGw6IFwiIzAwMFwiLFxuICAgICAgfSk7XG4gICAgICBjYW52YXMuYWRkKG9iamVjdCk7XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KG9iamVjdCk7XG4gICAgICBvYmplY3QuZW50ZXJFZGl0aW5nKCk7XG4gICAgfSxcbiAgICBhZGRJbWFnZTogKGltYWdlKSA9PiB7XG4gICAgICAvLyAgdmFyIGltYWdlID0gbmV3IGZhYnJpYy5JbWFnZShpbWdPYmopO1xuICAgICAgLy8gIGltYWdlLnNldCh7XG4gICAgICAvLyAgICAvLyBhbmdsZTogMCxcbiAgICAgIC8vICAgIC8vIHBhZGRpbmc6IDEwLFxuICAgICAgLy8gICAgLy8gY29ybmVyc2l6ZTogMTAsXG4gICAgICAvLyAgICAvLyBoZWlnaHQ6IDExMCxcbiAgICAgIC8vICAgIC8vIHdpZHRoOiAxMTAsXG4gICAgICAvLyAgfSk7XG4gICAgICAvLyAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgICAvLyAgY2FudmFzLmFkZChpbWFnZSk7XG4gICAgICAvLyAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgICBjb25zdCBvYmplY3QgPSBuZXcgZmFicmljLkltYWdlKGltYWdlLCB7XG4gICAgICAgIHdpZHRoOiA1MDAsXG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgICAgICAvLyBsZWZ0OiA1MCxcbiAgICAgICAgLy8gdG9wOiA3MCxcbiAgICAgICAgLy8gc2NhbGVYOiAuMjUsXG4gICAgICAgIC8vIHNjYWxlWTogLjI1XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxNDEgfiBvYmplY3RcIiwgb2JqZWN0KTtcbiAgICAgIGNhbnZhcy5hZGQob2JqZWN0KTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGw7XG4gICAgfSxcbiAgICAvKiBEZWxldGUgc2VsZWN0ZWQgZWxlbWVudHMgZnJvbSB0aGUgY2FudmFzICovXG4gICAgZGVsZXRlU2VsZWN0ZWQ6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgLyogRGVsZXRlIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBjYW52YXMgKi9cbiAgICBkZWxldGVBbGw6ICgpID0+IHtcbiAgICAgIGNhbnZhcy5nZXRPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiBjYW52YXMucmVtb3ZlKG9iamVjdCkpO1xuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICB9LFxuXG4gICAgX2dldFRvZ2dsZWRWYWx1ZTogKGFyciwgcHJvcCkgPT4ge1xuICAgICAgLy8gZ2V0IG1heGltdW0gdmFsdWUgaW4gc2VsZWN0aW9uICovXG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBhcnJcbiAgICAgICAgLnNvcnQoXG4gICAgICAgICAgKGEsIGIpID0+XG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBhW3Byb3BdKS5sZW5ndGggLVxuICAgICAgICAgICAgYXJyLmZpbHRlcigodikgPT4gdltwcm9wXSA9PT0gYltwcm9wXSkubGVuZ3RoXG4gICAgICAgIClcbiAgICAgICAgLnBvcCgpW3Byb3BdO1xuXG4gICAgICAvLyByZXR1cm4gdGhlIG9wcG9zaXRlIHZhbHVlXG4gICAgICBsZXQgYSA9IFRFWFRfU1RZTEVTW3Byb3BdLmZpbmQoKHYpID0+IHYgIT09IGN1cnJlbnRWYWx1ZSk7XG4gICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTIyIH4gYVwiLCBhKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0sXG4gICAgLyogSWYgdGV4dGJveCBoYXMgc2VsZWN0aW9uIGluc2lkZSwgb25seSBzZWxlY3RlZCBzeW1ib2xzIHdpbGwgYmUgY2hhbmdlZFxuICAgICAqIElmIG5vIHRleHQgaXMgc2VsZWN0ZWQsIHRyYW5zZm9ybWF0aW9uIHdpbGwgYmUgYXBwbGllZCB0byBhbGwgc2VsZWN0ZWQgdGV4dCBib3hlcyAqL1xuICAgIHNldFNlbGVjdGlvblN0eWxlKG9iamVjdHMsIHByb3BlcnR5KSB7XG4gICAgICBpZiAob2JqZWN0cy5sZW5ndGggPCAxKSByZXR1cm47XG4gICAgICBlbHNlIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBvYmplY3QgPSBvYmplY3RzWzBdO1xuICAgICAgICBjb25zdCBoYXNTZWxlY3Rpb24gPSBvYmplY3Quc2VsZWN0aW9uU3RhcnQgIT09IG9iamVjdC5zZWxlY3RvbkVuZDtcbiAgICAgICAgaWYgKGhhc1NlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZ2V0VG9nZ2xlZFZhbHVlKFxuICAgICAgICAgICAgb2JqZWN0LmdldFNlbGVjdGlvblN0eWxlcygpLFxuICAgICAgICAgICAgXCJmb250V2VpZ2h0XCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzNyB+IHNldFNlbGVjdGlvblN0eWxlIH4gdmFsdWVcIixcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBUT0RPOiByZXdyaXRlIHRvIGF2b2lkIG9iamVjdCBtdXRhdGlvblxuICAgICAgICAgIG9iamVjdC5zdHlsZXNbMF0gPSBvYmplY3Quc3R5bGVzWzBdID8/IHt9O1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzOCB+IHNldFNlbGVjdGlvblN0eWxlIH4gb2JqZWN0LnN0eWxlc1swXVwiLFxuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVxuICAgICAgICAgICk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IG9iamVjdC5zZWxlY3Rpb25TdGFydDsgaSA8IG9iamVjdC5zZWxlY3Rpb25FbmQ7IGkrKykge1xuICAgICAgICAgICAgb2JqZWN0LnN0eWxlc1swXVtpXSA9IHsgZm9udFdlaWdodDogdmFsdWUgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGlvbiA9IG9iamVjdHNbMF0uZ2V0U2VsZWN0aW9uU3RhcnRGcm9tUG9pbnRlcigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTA2IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBzZWxlY3Rpb25cIiwgc2VsZWN0aW9uKTtcbiAgICAgICAgLy8gaWYgc2VsZWN0aW9uXG4gICAgICB9XG4gICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7fSk7XG4gICAgICAvLyBzZWxlY3RlZE9iamVjdHNcbiAgICB9LFxuICAgIGFsaWduOiAodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IG9iamVjdHMgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0cygpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gXCJcIiAmJiBvYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2JqZWN0cy5tYXAoKG9iamVjdCkgPT4ge1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICBvYmplY3Quc2V0KHtcbiAgICAgICAgICAgICAgbGVmdDogY2FudmFzLndpZHRoIC0gb2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLyAyIC0gKG9iamVjdC53aWR0aCAqIG9iamVjdC5zY2FsZVgpIC8gMixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
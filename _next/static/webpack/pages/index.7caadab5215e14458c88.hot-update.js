webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fabric */ \"./node_modules/fabric/dist/fabric.js\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/illustrova/Dropbox/PROJECTS/fabricjs-experiment/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      canvas = _useState[0],\n      setCanvas = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      selectedObjects = _useState2[0],\n      setSelectedObject = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      fillColor = _useState3[0],\n      setFillColor = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(),\n      strokeColor = _useState4[0],\n      setStrokeColor = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setCanvas(new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Canvas(canvasRef.current, {\n      renderOnAddRemove: true\n    }));\n  }, [setCanvas]);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var bindEvents = function bindEvents(canvas) {\n      canvas.on(\"selection:cleared\", function () {\n        setSelectedObject([]);\n      });\n      canvas.on(\"selection:created\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:updated\", function (e) {\n        setSelectedObject(e.selected);\n      });\n      canvas.on(\"selection:changed\", function (e) {\n        setSelectedObject(e.selected);\n      });\n    };\n\n    if (canvas) {\n      bindEvents(canvas);\n    }\n  }, [canvas]);\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var imageInputRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(null);\n  var editor = buildEditor(canvas, fillColor, strokeColor, setFillColor, setStrokeColor);\n\n  var addImage = function addImage() {\n    var input = imageInputRef.current;\n\n    if (input.files && input.files[0]) {\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        console.log(\"🚀 ~ file: index.js ~ line 56 ~ addImage ~ e\", e); // editor.addImage(e.target.result);\n\n        var imgObj = new Image();\n        imgObj.src = event.target.result;\n\n        imgObj.onload = function () {\n          var image = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Image(imgObj);\n          image.set({// angle: 0,\n            // padding: 10,\n            // cornersize: 10,\n            // height: 110,\n            // width: 110,\n          });\n          canvas.centerObject(image);\n          canvas.add(image);\n          canvas.renderAll();\n        };\n      };\n\n      reader.readAsDataURL(input.files[0]);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttons,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.addText(\"\");\n        },\n        children: \"Add Text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"file-upload\",\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fileupload,\n        children: \"Add Image\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: imageInputRef,\n        id: \"file-upload\",\n        type: \"file\",\n        style: {\n          display: \"none\"\n        },\n        onChange: addImage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Bold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.setSelectionStyle(selectedObjects, \"bold\");\n        },\n        children: \"Italic\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"left\");\n        },\n        children: \"Align left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"center\");\n        },\n        children: \"Center\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.align(\"right\");\n        },\n        children: \"Align right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Delete selected\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: function onClick() {\n          return editor.deleteAll();\n        },\n        children: \"Clear all\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"canvas\", {\n      ref: canvasRef,\n      width: \"700\",\n      height: \"400\",\n      style: {\n        border: \"solid 1px black\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"yNAnIF55Um0g5t8KGULPPQFrsXM=\");\n\n_c = Home;\nvar TEXT_STYLES = {\n  fontWeight: [\"bold\", \"normal\"],\n  overline: [true, false],\n  underline: [true, false],\n  fontStyle: [\"italic\", \"normal\"]\n};\n\nvar buildEditor = function buildEditor(canvas, fillColor, strokeColor, _setFillColor, _setStrokeColor) {\n  return {\n    canvas: canvas,\n    addText: function addText(text) {\n      // use stroke in text fill, fill default is most of the time transparent\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Textbox(text, {\n        left: 200,\n        top: 200,\n        width: 350,\n        fontSize: 24,\n        fill: \"#000\"\n      });\n      canvas.add(object);\n      canvas.renderAll();\n      canvas.setActiveObject(object);\n      object.enterEditing();\n    },\n    addImage: function addImage(image) {\n      console.log(\"🚀 ~ file: index.js ~ line 133 ~ image\", image);\n      var object = new fabric__WEBPACK_IMPORTED_MODULE_3__[\"fabric\"].Image(image, {\n        width: 500,\n        height: 500 // left: 50,\n        // top: 70,\n        // scaleX: .25,\n        // scaleY: .25\n\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 141 ~ object\", object);\n      canvas.add(object);\n      canvas.renderAll;\n    },\n\n    /* Delete selected elements from the canvas */\n    deleteSelected: function deleteSelected() {\n      canvas.getActiveObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n\n    /* Delete all elements from the canvas */\n    deleteAll: function deleteAll() {\n      canvas.getObjects().forEach(function (object) {\n        return canvas.remove(object);\n      });\n      canvas.discardActiveObject();\n      canvas.renderAll();\n    },\n    _getToggledValue: function _getToggledValue(arr, prop) {\n      // get maximum value in selection */\n      var currentValue = arr.sort(function (a, b) {\n        return arr.filter(function (v) {\n          return v[prop] === a[prop];\n        }).length - arr.filter(function (v) {\n          return v[prop] === b[prop];\n        }).length;\n      }).pop()[prop]; // return the opposite value\n\n      var a = TEXT_STYLES[prop].find(function (v) {\n        return v !== currentValue;\n      });\n      console.log(\"🚀 ~ file: index.js ~ line 122 ~ a\", a);\n      return a;\n    },\n\n    /* If textbox has selection inside, only selected symbols will be changed\n     * If no text is selected, transformation will be applied to all selected text boxes */\n    setSelectionStyle: function setSelectionStyle(objects, property) {\n      if (objects.length < 1) return;else if (objects.length === 1) {\n        var object = objects[0];\n        var hasSelection = object.selectionStart !== object.selectonEnd;\n\n        if (hasSelection) {\n          var _object$styles$;\n\n          var value = this._getToggledValue(object.getSelectionStyles(), \"fontWeight\");\n\n          console.log(\"🚀 ~ file: index.js ~ line 137 ~ setSelectionStyle ~ value\", value); // TODO: rewrite to avoid object mutation\n\n          object.styles[0] = (_object$styles$ = object.styles[0]) !== null && _object$styles$ !== void 0 ? _object$styles$ : {};\n          console.log(\"🚀 ~ file: index.js ~ line 138 ~ setSelectionStyle ~ object.styles[0]\", object.styles[0]);\n\n          for (var i = object.selectionStart; i < object.selectionEnd; i++) {\n            object.styles[0][i] = {\n              fontWeight: value\n            };\n          }\n\n          canvas.renderAll();\n        } // const selection = objects[0].getSelectionStartFromPointer();\n        // console.log(\"🚀 ~ file: index.js ~ line 106 ~ setSelectionStyle ~ selection\", selection);\n        // if selection\n\n      }\n      objects.map(function (object) {}); // selectedObjects\n    },\n    align: function align(value) {\n      var objects = canvas.getActiveObjects();\n\n      if (value != \"\" && objects.length > 0) {\n        objects.map(function (object) {\n          if (value === \"left\") {\n            object.set({\n              left: 0\n            });\n          } else if (value === \"right\") {\n            object.set({\n              left: canvas.width - object.width * object.scaleX\n            });\n          } else if (value === \"center\") {\n            object.set({\n              left: canvas.width / 2 - object.width * object.scaleX / 2\n            });\n          }\n\n          object.setCoords();\n        });\n      }\n\n      canvas.renderAll();\n    }\n  };\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJjYW52YXMiLCJzZXRDYW52YXMiLCJzZWxlY3RlZE9iamVjdHMiLCJzZXRTZWxlY3RlZE9iamVjdCIsImZpbGxDb2xvciIsInNldEZpbGxDb2xvciIsInN0cm9rZUNvbG9yIiwic2V0U3Ryb2tlQ29sb3IiLCJ1c2VFZmZlY3QiLCJmYWJyaWMiLCJDYW52YXMiLCJjYW52YXNSZWYiLCJjdXJyZW50IiwicmVuZGVyT25BZGRSZW1vdmUiLCJiaW5kRXZlbnRzIiwib24iLCJlIiwic2VsZWN0ZWQiLCJ1c2VSZWYiLCJpbWFnZUlucHV0UmVmIiwiZWRpdG9yIiwiYnVpbGRFZGl0b3IiLCJhZGRJbWFnZSIsImlucHV0IiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImltZ09iaiIsIkltYWdlIiwic3JjIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJpbWFnZSIsInNldCIsImNlbnRlck9iamVjdCIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzdHlsZXMiLCJjb250YWluZXIiLCJidXR0b25zIiwiYWRkVGV4dCIsImZpbGV1cGxvYWQiLCJkaXNwbGF5Iiwic2V0U2VsZWN0aW9uU3R5bGUiLCJhbGlnbiIsImRlbGV0ZUFsbCIsImJvcmRlciIsIlRFWFRfU1RZTEVTIiwiZm9udFdlaWdodCIsIm92ZXJsaW5lIiwidW5kZXJsaW5lIiwiZm9udFN0eWxlIiwiX3NldEZpbGxDb2xvciIsIl9zZXRTdHJva2VDb2xvciIsInRleHQiLCJvYmplY3QiLCJUZXh0Ym94IiwibGVmdCIsInRvcCIsIndpZHRoIiwiZm9udFNpemUiLCJmaWxsIiwic2V0QWN0aXZlT2JqZWN0IiwiZW50ZXJFZGl0aW5nIiwiaGVpZ2h0IiwiZGVsZXRlU2VsZWN0ZWQiLCJnZXRBY3RpdmVPYmplY3RzIiwiZm9yRWFjaCIsInJlbW92ZSIsImRpc2NhcmRBY3RpdmVPYmplY3QiLCJnZXRPYmplY3RzIiwiX2dldFRvZ2dsZWRWYWx1ZSIsImFyciIsInByb3AiLCJjdXJyZW50VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJmaWx0ZXIiLCJ2IiwibGVuZ3RoIiwicG9wIiwiZmluZCIsIm9iamVjdHMiLCJwcm9wZXJ0eSIsImhhc1NlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0b25FbmQiLCJ2YWx1ZSIsImdldFNlbGVjdGlvblN0eWxlcyIsImkiLCJzZWxlY3Rpb25FbmQiLCJtYXAiLCJzY2FsZVgiLCJzZXRDb29yZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLEVBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVnQkYsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFdEJHLGVBRnNCO0FBQUEsTUFFTEMsaUJBRks7O0FBQUEsbUJBR0tKLHNEQUFRLEVBSGI7QUFBQSxNQUd0QkssU0FIc0I7QUFBQSxNQUdYQyxZQUhXOztBQUFBLG1CQUlTTixzREFBUSxFQUpqQjtBQUFBLE1BSXRCTyxXQUpzQjtBQUFBLE1BSVRDLGNBSlM7O0FBTTdCQyx5REFBUyxDQUFDLFlBQU07QUFDZFAsYUFBUyxDQUNQLElBQUlRLDZDQUFNLENBQUNDLE1BQVgsQ0FBa0JDLFNBQVMsQ0FBQ0MsT0FBNUIsRUFBcUM7QUFDbkNDLHVCQUFpQixFQUFFO0FBRGdCLEtBQXJDLENBRE8sQ0FBVDtBQUtELEdBTlEsRUFNTixDQUFDWixTQUFELENBTk0sQ0FBVDtBQVFBTyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZCxNQUFELEVBQVk7QUFDN0JBLFlBQU0sQ0FBQ2UsRUFBUCxDQUFVLG1CQUFWLEVBQStCLFlBQU07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Q2dFLEtBQVAsR0FBZUosTUFBTSxDQUFDSSxLQUFQLEdBQWVKLE1BQU0sQ0FBQ3NDO0FBRGxDLGFBQVg7QUFHRCxXQUpNLE1BSUEsSUFBSUwsS0FBSyxLQUFLLFFBQWQsRUFBd0I7QUFDN0JqQyxrQkFBTSxDQUFDdkIsR0FBUCxDQUFXO0FBQ1R5QixrQkFBSSxFQUFFOUQsTUFBTSxDQUFDZ0UsS0FBUCxHQUFlLENBQWYsR0FBb0JKLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlSixNQUFNLENBQUNzQyxNQUF2QixHQUFpQztBQURqRCxhQUFYO0FBR0Q7O0FBQ0R0QyxnQkFBTSxDQUFDdUMsU0FBUDtBQUNELFNBZkQ7QUFnQkQ7O0FBQ0RuRyxZQUFNLENBQUN3QyxTQUFQO0FBQ0Q7QUFuSEksR0FBUDtBQXFIRCxDQTVIRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZmFicmljIH0gZnJvbSBcImZhYnJpY1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtjYW52YXMsIHNldENhbnZhc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRPYmplY3RzLCBzZXRTZWxlY3RlZE9iamVjdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWxsQ29sb3IsIHNldEZpbGxDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc3Ryb2tlQ29sb3IsIHNldFN0cm9rZUNvbG9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYW52YXMoXG4gICAgICBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNSZWYuY3VycmVudCwge1xuICAgICAgICByZW5kZXJPbkFkZFJlbW92ZTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW3NldENhbnZhc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYmluZEV2ZW50cyA9IChjYW52YXMpID0+IHtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjbGVhcmVkXCIsICgpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoW10pO1xuICAgICAgfSk7XG4gICAgICBjYW52YXMub24oXCJzZWxlY3Rpb246Y3JlYXRlZFwiLCAoZSkgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZE9iamVjdChlLnNlbGVjdGVkKTtcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLm9uKFwic2VsZWN0aW9uOnVwZGF0ZWRcIiwgKGUpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRPYmplY3QoZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICAgIGNhbnZhcy5vbihcInNlbGVjdGlvbjpjaGFuZ2VkXCIsIChlKSA9PiB7XG4gICAgICAgIHNldFNlbGVjdGVkT2JqZWN0KGUuc2VsZWN0ZWQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBiaW5kRXZlbnRzKGNhbnZhcyk7XG4gICAgfVxuICB9LCBbY2FudmFzXSk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBlZGl0b3IgPSBidWlsZEVkaXRvcihcbiAgICBjYW52YXMsXG4gICAgZmlsbENvbG9yLFxuICAgIHN0cm9rZUNvbG9yLFxuICAgIHNldEZpbGxDb2xvcixcbiAgICBzZXRTdHJva2VDb2xvclxuICApO1xuXG4gIGNvbnN0IGFkZEltYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gaW1hZ2VJbnB1dFJlZi5jdXJyZW50O1xuICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgNTYgfiBhZGRJbWFnZSB+IGVcIiwgZSk7XG4gICAgICAgIC8vIGVkaXRvci5hZGRJbWFnZShlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICB2YXIgaW1nT2JqID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ09iai5zcmMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICBpbWdPYmoub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1nT2JqKTtcbiAgICAgICAgICBpbWFnZS5zZXQoe1xuICAgICAgICAgICAgLy8gYW5nbGU6IDAsXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIC8vIGNvcm5lcnNpemU6IDEwLFxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMTAsXG4gICAgICAgICAgICAvLyB3aWR0aDogMTEwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xuICAgICAgICAgIGNhbnZhcy5hZGQoaW1hZ2UpO1xuICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFkZFRleHQoXCJcIil9PkFkZCBUZXh0PC9idXR0b24+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsZS11cGxvYWRcIiBjbGFzc05hbWU9e3N0eWxlcy5maWxldXBsb2FkfT5cbiAgICAgICAgICBBZGQgSW1hZ2VcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0UmVmfVxuICAgICAgICAgIGlkPVwiZmlsZS11cGxvYWRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXthZGRJbWFnZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRvci5zZXRTZWxlY3Rpb25TdHlsZShzZWxlY3RlZE9iamVjdHMsIFwiYm9sZFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIEJvbGRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0b3Iuc2V0U2VsZWN0aW9uU3R5bGUoc2VsZWN0ZWRPYmplY3RzLCBcImJvbGRcIil9XG4gICAgICAgID5cbiAgICAgICAgICBJdGFsaWNcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwibGVmdFwiKX0+QWxpZ24gbGVmdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGVkaXRvci5hbGlnbihcImNlbnRlclwiKX0+Q2VudGVyPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmFsaWduKFwicmlnaHRcIil9PkFsaWduIHJpZ2h0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZWRpdG9yLmRlbGV0ZUFsbCgpfT5EZWxldGUgc2VsZWN0ZWQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0b3IuZGVsZXRlQWxsKCl9PkNsZWFyIGFsbDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD1cIjcwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIHN0eWxlPXt7IGJvcmRlcjogXCJzb2xpZCAxcHggYmxhY2tcIiB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgVEVYVF9TVFlMRVMgPSB7XG4gIGZvbnRXZWlnaHQ6IFtcImJvbGRcIiwgXCJub3JtYWxcIl0sXG4gIG92ZXJsaW5lOiBbdHJ1ZSwgZmFsc2VdLFxuICB1bmRlcmxpbmU6IFt0cnVlLCBmYWxzZV0sXG4gIGZvbnRTdHlsZTogW1wiaXRhbGljXCIsIFwibm9ybWFsXCJdLFxufTtcblxuY29uc3QgYnVpbGRFZGl0b3IgPSAoXG4gIGNhbnZhcyxcbiAgZmlsbENvbG9yLFxuICBzdHJva2VDb2xvcixcbiAgX3NldEZpbGxDb2xvcixcbiAgX3NldFN0cm9rZUNvbG9yXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYW52YXMsXG4gICAgYWRkVGV4dDogKHRleHQpID0+IHtcbiAgICAgIC8vIHVzZSBzdHJva2UgaW4gdGV4dCBmaWxsLCBmaWxsIGRlZmF1bHQgaXMgbW9zdCBvZiB0aGUgdGltZSB0cmFuc3BhcmVudFxuICAgICAgY29uc3Qgb2JqZWN0ID0gbmV3IGZhYnJpYy5UZXh0Ym94KHRleHQsIHtcbiAgICAgICAgbGVmdDogMjAwLFxuICAgICAgICB0b3A6IDIwMCxcbiAgICAgICAgd2lkdGg6IDM1MCxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmaWxsOiBcIiMwMDBcIixcbiAgICAgIH0pO1xuICAgICAgY2FudmFzLmFkZChvYmplY3QpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdChvYmplY3QpO1xuICAgICAgb2JqZWN0LmVudGVyRWRpdGluZygpO1xuICAgIH0sXG4gICAgYWRkSW1hZ2U6IChpbWFnZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDEzMyB+IGltYWdlXCIsIGltYWdlKTtcbiAgICAgIGNvbnN0IG9iamVjdCA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1hZ2UsIHtcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICAgIC8vIGxlZnQ6IDUwLFxuICAgICAgICAvLyB0b3A6IDcwLFxuICAgICAgICAvLyBzY2FsZVg6IC4yNSxcbiAgICAgICAgLy8gc2NhbGVZOiAuMjVcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanMgfiBsaW5lIDE0MSB+IG9iamVjdFwiLCBvYmplY3QpO1xuICAgICAgY2FudmFzLmFkZChvYmplY3QpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbDtcbiAgICB9LFxuICAgIC8qIERlbGV0ZSBzZWxlY3RlZCBlbGVtZW50cyBmcm9tIHRoZSBjYW52YXMgKi9cbiAgICBkZWxldGVTZWxlY3RlZDogKCkgPT4ge1xuICAgICAgY2FudmFzLmdldEFjdGl2ZU9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IGNhbnZhcy5yZW1vdmUob2JqZWN0KSk7XG4gICAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICAvKiBEZWxldGUgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGNhbnZhcyAqL1xuICAgIGRlbGV0ZUFsbDogKCkgPT4ge1xuICAgICAgY2FudmFzLmdldE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IGNhbnZhcy5yZW1vdmUob2JqZWN0KSk7XG4gICAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgIH0sXG5cbiAgICBfZ2V0VG9nZ2xlZFZhbHVlOiAoYXJyLCBwcm9wKSA9PiB7XG4gICAgICAvLyBnZXQgbWF4aW11bSB2YWx1ZSBpbiBzZWxlY3Rpb24gKi9cbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGFyclxuICAgICAgICAuc29ydChcbiAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgIGFyci5maWx0ZXIoKHYpID0+IHZbcHJvcF0gPT09IGFbcHJvcF0pLmxlbmd0aCAtXG4gICAgICAgICAgICBhcnIuZmlsdGVyKCh2KSA9PiB2W3Byb3BdID09PSBiW3Byb3BdKS5sZW5ndGhcbiAgICAgICAgKVxuICAgICAgICAucG9wKClbcHJvcF07XG5cbiAgICAgIC8vIHJldHVybiB0aGUgb3Bwb3NpdGUgdmFsdWVcbiAgICAgIGxldCBhID0gVEVYVF9TVFlMRVNbcHJvcF0uZmluZCgodikgPT4gdiAhPT0gY3VycmVudFZhbHVlKTtcbiAgICAgIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMjIgfiBhXCIsIGEpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSxcbiAgICAvKiBJZiB0ZXh0Ym94IGhhcyBzZWxlY3Rpb24gaW5zaWRlLCBvbmx5IHNlbGVjdGVkIHN5bWJvbHMgd2lsbCBiZSBjaGFuZ2VkXG4gICAgICogSWYgbm8gdGV4dCBpcyBzZWxlY3RlZCwgdHJhbnNmb3JtYXRpb24gd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBzZWxlY3RlZCB0ZXh0IGJveGVzICovXG4gICAgc2V0U2VsZWN0aW9uU3R5bGUob2JqZWN0cywgcHJvcGVydHkpIHtcbiAgICAgIGlmIChvYmplY3RzLmxlbmd0aCA8IDEpIHJldHVybjtcbiAgICAgIGVsc2UgaWYgKG9iamVjdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdCA9IG9iamVjdHNbMF07XG4gICAgICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9IG9iamVjdC5zZWxlY3Rpb25TdGFydCAhPT0gb2JqZWN0LnNlbGVjdG9uRW5kO1xuICAgICAgICBpZiAoaGFzU2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRUb2dnbGVkVmFsdWUoXG4gICAgICAgICAgICBvYmplY3QuZ2V0U2VsZWN0aW9uU3R5bGVzKCksXG4gICAgICAgICAgICBcImZvbnRXZWlnaHRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM3IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiB2YWx1ZVwiLFxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8vIFRPRE86IHJld3JpdGUgdG8gYXZvaWQgb2JqZWN0IG11dGF0aW9uXG4gICAgICAgICAgb2JqZWN0LnN0eWxlc1swXSA9IG9iamVjdC5zdHlsZXNbMF0gPz8ge307XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBcIvCfmoAgfiBmaWxlOiBpbmRleC5qcyB+IGxpbmUgMTM4IH4gc2V0U2VsZWN0aW9uU3R5bGUgfiBvYmplY3Quc3R5bGVzWzBdXCIsXG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdXG4gICAgICAgICAgKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gb2JqZWN0LnNlbGVjdGlvblN0YXJ0OyBpIDwgb2JqZWN0LnNlbGVjdGlvbkVuZDsgaSsrKSB7XG4gICAgICAgICAgICBvYmplY3Quc3R5bGVzWzBdW2ldID0geyBmb250V2VpZ2h0OiB2YWx1ZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0aW9uID0gb2JqZWN0c1swXS5nZXRTZWxlY3Rpb25TdGFydEZyb21Qb2ludGVyKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi8J+agCB+IGZpbGU6IGluZGV4LmpzIH4gbGluZSAxMDYgfiBzZXRTZWxlY3Rpb25TdHlsZSB+IHNlbGVjdGlvblwiLCBzZWxlY3Rpb24pO1xuICAgICAgICAvLyBpZiBzZWxlY3Rpb25cbiAgICAgIH1cbiAgICAgIG9iamVjdHMubWFwKChvYmplY3QpID0+IHt9KTtcbiAgICAgIC8vIHNlbGVjdGVkT2JqZWN0c1xuICAgIH0sXG4gICAgYWxpZ246ICh2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qgb2JqZWN0cyA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3RzKCk7XG5cbiAgICAgIGlmICh2YWx1ZSAhPSBcIlwiICYmIG9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmplY3RzLm1hcCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoe1xuICAgICAgICAgICAgICBsZWZ0OiBjYW52YXMud2lkdGggLSBvYmplY3Qud2lkdGggKiBvYmplY3Quc2NhbGVYLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgb2JqZWN0LnNldCh7XG4gICAgICAgICAgICAgIGxlZnQ6IGNhbnZhcy53aWR0aCAvIDIgLSAob2JqZWN0LndpZHRoICogb2JqZWN0LnNjYWxlWCkgLyAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjYW52YXMucmVuZGVyQWxsKCk7XG4gICAgfSxcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fabric } from "fabric";
import { useEffect, useState, useRef } from "react";

import * as icons from "../icons";

const DEFAULT_FILL = "#eaeaea";
const DEFAULT_GRADIENT = { color1: "#ffffff", color2: "#000000" };

export default function Home() {
  const [canvas, setCanvas] = useState();
  const [selectedObjects, setSelectedObject] = useState([]);
  const [useGradient, setUseGradient] = useState(false);
  const [gradientColors, setGradientColors] = useState(DEFAULT_GRADIENT);


  // Renders the delete icon from svg source.
  function renderIcon(src) {
    let deleteImg = document.createElement("img");
    deleteImg.src = src;

    return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
      let size = this.cornerSize;
      ctx.save();
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      ctx.drawImage(deleteImg, -size / 2, -size / 2, size, size);
      ctx.restore();
    };
  }

  const customTextControls = [
    "textLeft",
    "textCenter",
    "textRight",
    "textJustify",
  ];
  // Places the delete icon to the corner of each token.
  function setTextControls() {
    const iconSize = 24;
    // Calculate offset depending on number of items
    const getOffsetX = (index) =>
      (index - customTextControls.length / 2) * iconSize + iconSize / 2;

    customTextControls.forEach((control, index) => {
      fabric.Textbox.prototype.controls[control] = new fabric.Control({
        x: 0,
        y: -0.5,
        offsetY: -25,
        offsetX: getOffsetX(index),
        cursorStyle: "pointer",
        mouseUpHandler: () =>
          editor.alignText(control.substring(4).toLowerCase()),
        render: renderIcon(icons[control]),
        cornerSize: 20,
      });
    });
  }

  useEffect(() => {
    setCanvas(
      new fabric.Canvas(canvasRef.current, {
        renderOnAddRemove: true,
      })
    );
  }, [setCanvas]);

  useEffect(() => {
    const bindEvents = (canvas) => {
      canvas.on("selection:cleared", () => {
        setSelectedObject([]);
      });
      canvas.on("selection:created", (e) => {
        setSelectedObject(e.selected);
      });
      canvas.on("selection:updated", (e) => {
        setSelectedObject(e.selected);
      });
      canvas.on("selection:changed", (e) => {
        setSelectedObject(e.selected);
      });
    };
    if (canvas) {
      bindEvents(canvas);
      setTextControls();
    }
  }, [canvas]);

  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);
  const sliderRef = useRef(null);

  const editor = buildEditor(canvas);

  const addImage = () => {
    const input = imageInputRef.current;
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
          editor.addImage(imgObj);
        };
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const resizeCanvas = (value) => {
    editor.resize(value);
    sliderRef.current.innerHTML = value;
  };

  const setGradient = (colorName, colorValue) => {
    setGradientColors({ ...gradientColors, [colorName]: colorValue });
    editor.setFill(gradientColors);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div>
          <button onClick={() => editor.addText("")}>Add Text</button>
          <label htmlFor="file-upload" className={styles.fileupload}>
            Add Image
          </label>
          <input
            ref={imageInputRef}
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={addImage}
          />
          <button onClick={() => editor.setSelectionStyle("fontWeight")}>
            Bold
          </button>
          <button onClick={() => editor.setSelectionStyle("fontStyle")}>
            Italic
          </button>
          <button onClick={() => editor.setSelectionStyle("underline")}>
            Underline
          </button>
          <button onClick={() => editor.setSelectionStyle("linethrough")}>
            Strikethrough
          </button>
          <button onClick={() => editor.align("left")}>Align left</button>
          <button onClick={() => editor.align("center")}>Center</button>
          <button onClick={() => editor.align("right")}>Align right</button>
          <button onClick={() => editor.deleteAll()}>Delete selected</button>
          <button onClick={() => editor.deleteAll()}>Clear all</button>
        </div>
        <div>
          <input
            type="range"
            min="100"
            max="1000"
            defaultValue="700"
            step="100"
            onChange={(e) => resizeCanvas(e.target.value)}
          />
          <span ref={sliderRef}>700</span>
          <label htmlFor="head"> Fill color: </label>

          <input
            type="color"
            id="head"
            name="head"
            value="#e66465"
            onChange={(e) => editor.setFill(e.target.value)}
          />
          <label htmlFor="grad"> Use gradient </label>
          <input
            type="checkbox"
            id="grad"
            checked={useGradient}
            onChange={(e) => setUseGradient(e.target.checked)}
          />
          {useGradient && (
            <>
              <label htmlFor="cs1">color 1</label>
              <input
                type="color"
                id="color1"
                name="head"
                defaultValue="#ffffff"
                onChange={(e) => setGradient(e.target.id, e.target.value)}
              />
              <label htmlFor="cs2">color 2</label>
              <input
                type="color"
                id="color2"
                name="head"
                defaultValue="#000000"
                onChange={(e) => setGradient(e.target.id, e.target.value)}
              />
            </>
          )}
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width="700"
        height="400"
        style={{ border: "solid 1px black" }}
      />
    </div>
  );
}

const TEXT_STYLES = {
  fontWeight: ["bold", "normal"],
  linethrough: [true, false],
  underline: [true, false],
  fontStyle: ["italic", "normal"],
};

const buildEditor = (canvas) => {
  return {
    canvas,
    /* Adds new text block and sets focus in it */
    addText: (text) => {
      // use stroke in text fill, fill default is most of the time transparent
      const object = new fabric.Textbox(text, {
        left: 200,
        top: 200,
        width: 350,
        fontSize: 24,
        fill: "#000",
      });
      // disable controls to prevent text distortion
      object.setControlsVisibility({ mb: false, mt: false });
      canvas.add(object);
      canvas.renderAll();
      canvas.setActiveObject(object);
      object.enterEditing();
    },

    /* Loads image to canvas */
    addImage: (image) => {
      const object = new fabric.Image(image, {
        width: 500,
        height: 500,
        // left: 50,
        // top: 70,
        // scaleX: .25,
        // scaleY: .25
      });
      canvas.add(object);
      canvas.renderAll;
    },

    /* Delete selected elements from the canvas */
    deleteSelected: () => {
      canvas.getActiveObjects().forEach((object) => canvas.remove(object));
      canvas.discardActiveObject();
      canvas.renderAll();
    },

    /* Delete all elements from the canvas */
    deleteAll: () => {
      canvas.getObjects().forEach((object) => canvas.remove(object));
      canvas.discardActiveObject();
      canvas.renderAll();
    },

    /* Private method, works with "styles" array, where every array element keeps individual letter style
    the purpose is to detect the most common value in selection (for eanmple, bold text can be mixed with normal, and we need to detect the styling of the most part) */
    _getMostFrequentValue: (arr, prop) => {
      // get most frequent value in selection */

      if (arr.length < 1) return;
      return arr
        .sort(
          (a, b) =>
            arr.filter((v) => v[prop] === a[prop]).length -
            arr.filter((v) => v[prop] === b[prop]).length
        )
        .pop()[prop];
    },
    /* find the opposite value in the dictionary (since fontWeight and fontStyle are not boolean, we need to store togglable values somewhere) */
    _getToggledValue: (prop, value) => {
      return TEXT_STYLES[prop].find((v) => v !== value);
    },

    /* Sets text style of the whole selected object or some text inside object box.  
    @param property {string} - supported fontWeight, fontStyle, underline, linethrough
    */
    setSelectionStyle(property) {
      const objects = canvas.getActiveObjects();

      /* if nothing is selected we have nothing to do */
      if (objects.length < 1) return;
      else if (objects.length === 1) {
        /* if 1 object selected, it can possibly has inner selection */
        const object = objects[0];

        const hasSelection = object.selectionStart !== object.selectionEnd;
        if (hasSelection) {
          const mostFrequentInSelection = this._getMostFrequentValue(
            object.getSelectionStyles(),
            property
          );
          const value = this._getToggledValue(
            property,
            mostFrequentInSelection
          );
          // TODO: rewrite to avoid object mutation
          // Fix for multiline text
          object.styles[0] = object.styles[0] ?? {};

          for (let i = object.selectionStart; i < object.selectionEnd; i++) {
            object.styles[0][i] = { [property]: value };
          }
          canvas.renderAll();
        } else {
          /* transform whole selected object */
          console.log(
            "🚀 ~ file: index.js ~ line 205 ~ setSelectionStyle ~ object",
            object
          );
          object.set({
            [property]: this._getToggledValue(property, object[property]),
          });
        }
      } else {
        /* if a few objects selected */
        // TODO: rewrite without repeating
        objects.map((object) => {
          object.set({
            [property]: this._getToggledValue(property, object[property]),
          });
        });
      }
      canvas.renderAll();
    },
    /* aligns obkect relatively to canvas */
    /* @param value {"left"|"center"|"right"} */
    align: (value) => {
      const objects = canvas.getActiveObjects();

      if (value != "" && objects.length > 0) {
        objects.map((object) => {
          if (value === "left") {
            object.set({
              left: 0,
            });
          } else if (value === "right") {
            object.set({
              left: canvas.width - object.width * object.scaleX,
            });
          } else if (value === "center") {
            object.set({
              left: canvas.width / 2 - (object.width * object.scaleX) / 2,
            });
          }
          object.setCoords();
        });
      }
      canvas.renderAll();
    },
    /* aligns text inside object */
    /* @param value {"left"|"center"|"right"} */
    alignText: (value) => {
      const objects = canvas?.getActiveObjects();

      objects.map((object) => object.set("textAlign", value));
      canvas.renderAll();
    },
    resize: (newWidth) => {
      if (canvas.width != newWidth) {
        var scaleMultiplier = newWidth / canvas.width;
        var objects = canvas.getObjects();
        for (var i in objects) {
          objects[i].scaleX = objects[i].scaleX * scaleMultiplier;
          objects[i].scaleY = objects[i].scaleY * scaleMultiplier;
          objects[i].left = objects[i].left * scaleMultiplier;
          objects[i].top = objects[i].top * scaleMultiplier;
          objects[i].setCoords();
        }
        var obj = canvas.backgroundImage;
        if (obj) {
          obj.scaleX = obj.scaleX * scaleMultiplier;
          obj.scaleY = obj.scaleY * scaleMultiplier;
        }

        canvas.discardActiveObject();
        canvas.setWidth(canvas.getWidth() * scaleMultiplier);
        canvas.setHeight(canvas.getHeight() * scaleMultiplier);
        canvas.renderAll();
        canvas.calcOffset();
      }
    },
    setFill: (color) => {
      // set solid color
      if (typeof color === "string" || color instanceof String) {
        canvas.backgroundColor = color;
      }
      // set gradient fill
      else if (typeof color === "object" && color !== null) {
        const grad = new fabric.Gradient({
          type: "linear",
          gradientUnits: "pixels",
          coords: {
            x1: 0,
            y1: 0,
            x2: canvas.width,
            y2: 0,
          },
          colorStops: [
            { offset: 0, color: color.color1 },
            { offset: 1, color: color.color2 },
          ],
        });
        canvas.backgroundColor = grad.toLive(canvas.contextContainer);
      } else {
        return;
      }
      canvas.renderAll();
    },
  };
};

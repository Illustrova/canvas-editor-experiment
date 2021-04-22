import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fabric } from "fabric";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [canvas, setCanvas] = useState();
  const [selectedObjects, setSelectedObject] = useState([]);

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
    }
  }, [canvas]);
  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);

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
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
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
          object.set({
            [property]: this._getToggledValue(property, object[property]),
          });
        }
      } else {
        /* if a few objects selected */
        // TODO: rewrite without repeating
      }
      objects.map((object) => {
        object.set({
          [property]: this._getToggledValue(property, object[property]),
        });
      });
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
  };
};
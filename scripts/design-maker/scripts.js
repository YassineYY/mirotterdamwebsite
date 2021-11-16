import {setCanvasImage} from "scripts/design-maker/setCanvasImage.js";
import {loadElements} from "scripts/design-maker/loadElements.js";
import {CanvasElement} from "scripts/design-maker/CanvasElement.js";
import {Slider} from "scripts/design-maker/ElementSizeSlider.js";
import {AttributeEditor} from "scripts/design-maker/AttributeEditor.js";

    const canvas = document.getElementById('canvas');
    const canvasImageWidth = 100;

    setCanvasImage(canvas);

    loadElements(
        (element) => CanvasElement(canvas, element, canvasImageWidth))

    AttributeEditor()

    Slider(canvasImageWidth, 50)
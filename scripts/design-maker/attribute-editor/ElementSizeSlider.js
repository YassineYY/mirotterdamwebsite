import {getSelectedElement} from "../utils/getSelectedElement.js";

const slider = document.getElementById('scale-slider')

export function Slider(imageWidth, imageMargin) {

    slider.min = imageWidth - imageMargin
    slider.max = imageWidth + imageMargin

    slider.addEventListener('input', e => {
        const currentSelectedElement = getSelectedElement()
        currentSelectedElement.style.width = parseInt(slider.value) + 'px'
    })
}

export function updateSlider() {
    slider.value = getSelectedElement().width
}
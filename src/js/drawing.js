const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const toolsButton = document.querySelectorAll('.draw__tool');
let isDrawing = false;
const sizeSlider = document.getElementById('size-slider');
const colorBtn = document.querySelectorAll('.draw__colors_opt');
const colorPicker = document.getElementById('color-picker');
let selectedColor = '#000000';
let selectedTools = 'brush';
window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
})

const drawing = (e) => {
    if(!isDrawing) return;
    ctx.strokeStyle = selectedTools === 'eraser' ? '#ffffff' : selectedColor;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

const startDrawing = (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = brushWidth;
};

toolsButton.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector(".active").classList.remove("active");
        button.childNodes[1].classList.add("active");
    })
})

sizeSlider.addEventListener('change', () => {
    brushWidth = sizeSlider.value;
});

colorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector(".selected").classList.remove("selected");
        btn.classList.add("selected");
        selectedColor = window.getComputedStyle(btn).backgroundColor;
    })
})

colorPicker.addEventListener('change', () => {
    colorPicker.parentElement.style.backgroundColor = colorPicker.value;
    colorPicker.parentElement.click();
})

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);
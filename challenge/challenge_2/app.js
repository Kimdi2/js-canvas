const canvas = document.querySelector("canvas");
// ctx = context
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");
const fillBtn = document.getElementById("fill-btn");
const strokeBtn = document.getElementById("stroke-btn");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 5;

let isPainting = false;
let isFilling = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function finishPainting() {
  if (isFilling) {
    ctx.fill();
  }
  ctx.beginPath();
  isPainting = false;
}

function fillMode() {
  isFilling = true;
}

function strokeMode() {
  isFilling = false;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", finishPainting);
canvas.addEventListener("mouseleave", finishPainting);

fillBtn.addEventListener("click", fillMode);
strokeBtn.addEventListener("click", strokeMode);

color.addEventListener("change", onColorChange);

const canvas = document.querySelector("canvas");
// ctx = context
const ctx = canvas.getContext("2d");
const lineWidth = document.getElementById("line-width");

canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}
function finishPainting() {
  isPainting = false;
  ctx.stroke();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", finishPainting);
canvas.addEventListener("mouseleave", finishPainting);

lineWidth.addEventListener("change", onLineWidthChange);

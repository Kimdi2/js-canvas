const canvas = document.querySelector("canvas");
// ctx = context
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);
ctx.strokeRect(500, 50, 100, 200);

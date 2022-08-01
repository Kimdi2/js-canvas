const canvas = document.querySelector("canvas");
// ctx = context
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(220 - 40, 200 - 30, 15, 100);
ctx.fillRect(345 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 85, 8, 1 * Math.PI, 2 * Math.PI);
ctx.arc(230, 85, 8, 1 * Math.PI, 2 * Math.PI);
ctx.fill();

const canvas = document.querySelector("canvas");
const hint = document.querySelector("h2");

const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.fillRect(200, 200 + 30, 100, 250);
// ctx.fillRect(150, 200 + 30, 30, 150);
// ctx.fillRect(320, 200 + 30, 30, 150);

ctx.moveTo(180, 230);
ctx.lineTo(70, 230);
ctx.lineTo(70, 360);
ctx.lineTo(100, 360);
ctx.lineTo(100, 260);
ctx.lineTo(180, 260);
ctx.lineTo(180, 230);

ctx.moveTo(320, 230);
ctx.lineTo(400, 230);
ctx.lineTo(400, 130);
ctx.lineTo(430, 130);
ctx.lineTo(430, 260);
ctx.lineTo(320, 260);
ctx.lineTo(320, 230);
ctx.fill();

ctx.beginPath();
ctx.arc(250, 120, 100, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "coral";
ctx.arc(210, 100, 30, 1 * Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "cadetblue";
ctx.arc(290, 100, 30, 1 * Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "blueviolet";
ctx.arc(250, 130, 60, 0.1 * Math.PI, 0.9 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(250, 130, 55, 0, 1 * Math.PI);
ctx.fill();

function wink() {
  if (canvas.className === "") {
    canvas.classList.add("wink");
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(290, 100, 25, 1 * Math.PI, 2 * Math.PI);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.fillStyle = "cadetblue";
    ctx.arc(290, 100, 30, 1 * Math.PI, 2 * Math.PI);
    ctx.fill();
    canvas.classList.remove("wink");
  }
}

canvas.addEventListener("click", wink);
hint.addEventListener("click", () => {
  hint.innerText = "Just clicking!";
});

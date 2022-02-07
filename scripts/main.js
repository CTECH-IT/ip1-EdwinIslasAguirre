let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(232, 152, 12, 0, Math.PI*2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
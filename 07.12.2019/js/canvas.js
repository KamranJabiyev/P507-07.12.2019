let canvas=document.querySelector("canvas");
let ctx=canvas.getContext("2d");
// ctx.moveTo(0, 0);
// ctx.lineTo(400, 400);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(200, 200, 100, Math.PI, 3/2*Math.PI);
// ctx.fill();

ctx.beginPath();
ctx.rect(100, 100,200,200);
ctx.fill();
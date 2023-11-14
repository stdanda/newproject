

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let image = new Image();
image.src = "res/image/dvd.png";
let x = 0;
let y = 0;
let xVelocity = 0.5;
let yVelocity = 0.5;
let imageWidth = 100;
let imageHeight = 100;

canvas.addEventListener("resize", () => {
    resizeCanvas();
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = () => {
    resizeCanvas();

    setInterval(() => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        x += xVelocity;
        y += yVelocity;

        if (y + imageHeight >= canvas.height || y <= 0) {
            yVelocity *= -1;
        }
        if (x + imageWidth >= canvas.width || x <= 0) {
            xVelocity *= -1;
        }

        ctx.drawImage(image, x, y, imageWidth, imageHeight);
    }, 1); // Adjust the interval as needed
};





























































































/*
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 100, 200, 200);

ctx.strokeStyle = "black";
ctx.fillRect(600, 110, 25, 150)

ctx.strokeStyle = "black";
ctx.fillRect(850, 110, 25, 150)

ctx.strokeStyle = "black";
ctx.fillRect(620, 400 , 250, 25)

ctx.strokeStyle = "black";
ctx.strokeRect(435, 15, 600, 600);

ctx.beginPath();
ctx.moveTo(300, 300);

ctx.fillStyle = "blue";
ctx.fillRect(850, 300, 100, 25)

ctx.fillStyle = "black";
ctx.fillRect(600, 615, 25, 200)

ctx.fillStyle = "black";
ctx.fillRect(850, 615, 25, 200)

ctx.fill();
ctx.strokeStyle();

let x = 0;

window.onload = () => {
    
    setInterval(() => {
        x+=10;
       drawImage(x, 100)
    }, 500)
}
*/
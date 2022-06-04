var img = "";



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}


function preload() {
    img = loadImage("https://5.imimg.com/data5/HV/IV/YB/SELLER-11089923/2-door-sliding-swinging-wardrobe-500x500.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function back() {
    window.location = "main.html";
}
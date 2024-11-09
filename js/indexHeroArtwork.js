// page 4 //

let snakeX = [];
let snakeY = [];


function setup() {
    var canvasDiv = document.getElementById('hero-artwork');
    var width = canvasDiv.offsetWidth;
    var height = canvasDiv.offsetHeight;
    var sketchCanvas = createCanvas(width,height);
    console.log(sketchCanvas);
    sketchCanvas.parent("hero-artwork");
}

function draw() {

    var bValue = 60+(70-mouseY/20);
    var gValue = 100+(20-mouseX/70);

    console.log(bValue);
    console.log(mouseX)
    // background(frameCount/1%360, mouseY/20+30, mouseX/20+30);
    background(126, gValue, bValue);

    snakeX.push(mouseX);
    snakeY.push(mouseY);

    if(snakeX.length>80) {
        snakeX.splice(0,1);
        snakeY.splice(0,1);
    }

    for(let i = 0; i<snakeX.length; i = i + 0.5) {
        noStroke();
        // fill(frameCount/3%360, mouseY/5+100, mouseX/4+100, i);
        fill(255, 255, 255, 10);
        ellipse(snakeX[i], snakeY[i], i*1.6, i*1.6)
    }
    
}

function windowResized() {
    resizeCanvas(width, height);
  }
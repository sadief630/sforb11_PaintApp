
let selected = 255; //this is the variable that I'll use for the selected Color

function setup() {
  createCanvas(1530, 750);
  background(255);
}

function draw() {
  makePallette();
  noStroke();
  if(mouseIsPressed){
    if(mouseX <= 40 && mouseY <= 400){
      selectNewColor();
    }
    else{
      stroke(selected);
      strokeWeight(15);
      line(pmouseX,pmouseY, mouseX, mouseY);
      console.log(mouseX,mouseY);
    }
  }
}

function selectNewColor(){
  if(mouseY <= 40){
    selected = color(255,0,0);
    console.log('changed to red');
  }
  else if(mouseY <= 80){
    selected = color(255,165,0);
    console.log('changed to orange');
  }
  else if(mouseY <= 120){
    selected = color(255,255,0);
    console.log('changed to yellow');
  }
  else if(mouseY <= 160){
    selected = color(0,255,0);
    console.log('changed to green');
  }
  else if(mouseY <= 200){
    selected = color(0,255,255);
    console.log('changed to cyan');
  }
  else if(mouseY <= 240){
    selected = color(0,0,255);
    console.log('changed to blue');
  }
  else if(mouseY <= 280){
    selected = color(255,0,255);
    console.log('changed to magenta');
  }
  else if(mouseY <= 320){
    selected = color(150,75,0);
    console.log('changed to brown');
  }
  else if(mouseY <= 360){
    selected = 255;
    console.log('changed to white');
  }
  else if(mouseY <= 400){
    selected = 0;
    console.log('changed to black');
  }
}

function makePallette(){
  stroke(255,255,255);
  strokeWeight(2);
  fill(255,0,0);
  rect(0,0,40,40);
  fill(255,165,0);
  rect(0,40,40,40);
  fill(255,255,0);
  rect(0,80,40,40);
  fill(0,255,0);
  rect(0,120,40,40);
  fill(0,255,255);
  rect(0,160,40,40);
  fill(0,0,255);
  rect(0,200,40,40);
  fill(255,0,255);
  rect(0,240,40,40);
  fill(150,75,0);
  rect(0,280,40,40);
  fill(255,255,255);
  rect(0,320,40,40);
  fill(0);
  rect(0,360,40,40);
}
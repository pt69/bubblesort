var zahlenMenge = [35,13,24,2,63,7];

function setup() {
  createCanvas(700,300);
}

function draw() {
  background(240);
  if(frameCount%120 == 0) {
    for(var j = 0; j < zahlenMenge.length-1; j++){
      if(zahlenMenge[j]>zahlenMenge[j+1]){
        var merkZahl = 0;
        merkZahl = zahlenMenge[j];
        zahlenMenge[j] = zahlenMenge[j+1];
        zahlenMenge[j+1] = merkZahl;  
      }     
    }
  }
  for(var i = 0; i < zahlenMenge.length; i++){
    text(zahlenMenge[i], 20+i*30, 30);
  }   
}
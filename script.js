var timer = 60;
var score =0;
var rn = 0;

function increaseScore(){
     score += 10;
     document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
     rn = Math.floor(Math.random()*10);
     document.querySelector("#hitval").textContent = rn
}
function makeBubble(){

var clutter = "";
for(var i = 1; i<=140; i++){
     var rn = Math.floor(Math.random()*10);
     clutter += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
     var time = setInterval(function(){
          if(timer>0){
               timer--;
               document.querySelector("#timerval").textContent = timer;
               
          }else{
               clearInterval(time);
               document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
          }
     },1000)
}
document.querySelector("#pbtm").addEventListener("click", function(dets){
     var clickedNum = Number(dets.target.textContent);
     if(clickedNum === rn){
          increaseScore();
          getNewHit();
          makeBubble();
     }
})

runTimer();
makeBubble();
getNewHit();
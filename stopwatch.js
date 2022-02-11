var Addsec
var AddsecValue= Addsec
const laps = []
let i = 0;

function myTimer() {
  document.getElementById("stopwatch").innerHTML = i;
  i++;
}

function start() {
Addsec = setInterval(myTimer, 1000);
}

function stop() {
clearInterval(Addsec);
Addsec = null;
document.getElementById("stopwatch").innerHTML = i;
}

function reset() {
i=0;
laps.length=0;
document.getElementById("laprec").innerHTML = laps; 
}

function lap () {    
    laps.push(i);
    document.getElementById("laprec").innerHTML = laps; 
  }

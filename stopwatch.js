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
clearInterval(Addsec);
Addsec = null;
Addsec = setInterval(myTimer, 0);
i=0;
laps.length=0;
}

function displayReset() {
i = 0;
laps.length=0;
document.getElementById("laprec").innerHTML = laps;
document.getElementById("stopwatch").innerHTML = i;
}

function lap () {    
    laps.push(i);
    document.getElementById("laprec").innerHTML = laps; 
  }

var Addsec
var AddsecValue= Addsec
const laps = []
var seconds = 00;
var minutes = 00;
var hours = 00;

function myTimer() {
  seconds++;
  document.getElementById("seconds").innerHTML = seconds;  
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("hours").innerHTML = hours;

  if (seconds==60) {

    seconds=00;
    document.getElementById("seconds").innerHTML = seconds;
    minutes = minutes+1;
    document.getElementById("minutes").innerHTML = minutes;

  }

  if (minutes==60) {

    minutes=00;
    document.getElementById("minutes").innerHTML = minutes;
    hours=hours+1
}
}

function start() {
Addsec = setInterval(myTimer, 1000);
}

function stop() {
clearInterval(Addsec);
Addsec = null;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

}


function displayReset() {
hours=0;
seconds=0;
minutes=0;
laps.length=0;
document.getElementById("laprec").innerHTML = laps;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
}

function lap () {    
    laps.push(['[',hours,minutes,seconds,']']);
    document.getElementById("laprec").innerHTML = laps 
  }

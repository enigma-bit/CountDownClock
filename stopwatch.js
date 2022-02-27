var Addsec
var AddsecValue= Addsec
const laps = []
var seconds = 00;
var minutes = 00;
var hours = 00;

function myTimer() {
  seconds++;
  if (seconds<=9) {
    
    document.getElementById("seconds").innerHTML = '0' + seconds;
  }
  else {
    document.getElementById("seconds").innerHTML = seconds;
  }

  

  if (seconds==60) {

    seconds=00;
    document.getElementById("seconds").innerHTML = seconds;
    minutes = minutes+1;
    if (seconds<=9) {
      document.getElementById("minutes").innerHTML = '0' + minutes;
    }
    else {
      document.getElementById("minutes").innerHTML = minutes;
    }

  }

  if (minutes==60) {

    minutes=00;
    document.getElementById("minutes").innerHTML = minutes;
    hours=hours+1;

    if (seconds<=9) {
      document.getElementById("hours").innerHTML = '0' + hours;
    }
    else {
      document.getElementById("hours").innerHTML = hours;
    }
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
hours='00';
seconds='00';
minutes='00';
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

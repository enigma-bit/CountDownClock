function myFunction() {
  var timeC = new Date();
  var timeU = document.getElementById("time").value;
  const [StrhourU, StrminuteU, Strseconds] = timeU.split(':');

  if (StrhourU.length === 0) {
    document.getElementById("countdown1").innerHTML = "Please enter hours";

    if (StrminuteU.length === 0) {
      document.getElementById("countdown1").innerHTML = "Please enter minutes";

      if (Strseconds.length === 0) {
        document.getElementById("countdown1").innerHTML = "Please enter seconds";

        if (timeU.length === 0) {
          document.getElementById("countdown1").innerHTML = "Please enter a time";
        }

      }
    }
  }

  else {

    
    var hourU = parseInt(StrhourU);
    var minuteU = parseInt(StrminuteU);
    var secondsU = parseInt(Strseconds) ;
  
    var hourC = timeC.getHours();
    var minuteC = timeC.getMinutes();
    var secondsC = timeC.getSeconds();
  
    var distanceHour = hourU - hourC ;
    var distanceMin = minuteU - minuteC ;
    var distanceSec = secondsU - secondsC ;
  
    if (distanceMin<0) {
      distanceHour = distanceHour - 1 ;
      distanceMin = distanceMin + 60 ;
    }

    if (distanceSec<0) {
      distanceMin = distanceMin - 1;
      distanceSec = distanceSec + 60;
    }

    document.getElementById("countdown1").innerHTML = distanceHour + " Hours" ;
    document.getElementById("countdown2").innerHTML = distanceMin + " Minutes" ;
    document.getElementById("and").innerHTML = "and" ;
    document.getElementById("countdown3").innerHTML = distanceSec + " Seconds left" ;
    
    if (distanceHour<0 || distanceMin<0 || distanceSec<0) {
      var msg = new SpeechSynthesisUtterance();
      msg.text = "Time is up";
      window.speechSynthesis.speak(msg);
      document.getElementById("countdown").innerHTML = "Time-Up";
    }
  }
}

function refresh() {

  setInterval(myFunction,200)

}

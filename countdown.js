function myFunction() {
  var timeC = new Date();
  var timeU = document.getElementById("time").value;

  const [StrhourU, StrminuteU, Strseconds] = timeU.split(':');
  var hourU = parseInt(StrhourU);
  var minuteU = parseInt(StrminuteU);
  var secondsU = parseInt(Strseconds) ;

  var hourC = timeC.getHours();
  var minuteC = timeC.getMinutes();
  var secondsC = timeC.getSeconds();

  var distanceHour = hourU - hourC ;
  var distanceMin = minuteU - minuteC ;
  var distanceSec = secondsU - secondsC ;

  document.getElementById("countdown1").innerHTML = distanceHour + " Hours" ;
  document.getElementById("countdown2").innerHTML = distanceMin + " Minutes" ;
  document.getElementById("and").innerHTML = "and" ;
  document.getElementById("countdown3").innerHTML = distanceSec + " Seconds left" ;



  if (distanceHour<0 || distanceMin<0) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Time is up";
    window.speechSynthesis.speak(msg);
    document.getElementById("countdown").innerHTML = "Time-Up";
  }
}

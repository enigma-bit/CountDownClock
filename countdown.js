function myFunction() {
  var timeC = new Date();
  var timeU = document.getElementById("time").value;

  const [StrhourU, StrminuteU] = timeU.split(':');
  var hourU = parseInt(StrhourU);
  var minuteU = parseInt(StrminuteU);

  var hourC = timeC.getHours();
  var minuteC = timeC.getHours();

  var distanceHour = hourU - hourC;
  var distanceMin = minuteU - minuteC;

  var timeLeft = distanceHour + ':' + distanceMin


  document.getElementById("countdown").innerHTML = timeLeft;

  if (distanceHour<0 || distanceMin<0) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Time is up";
    window.speechSynthesis.speak(msg);
    document.getElementById("countdown").innerHTML = "Time-Up";
  }
}

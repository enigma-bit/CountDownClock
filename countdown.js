function myFunction() {
  var timeC = new Date();
  var timeU = document.getElementById("time").value;

  const [StrhourU, StrminuteU] = timeU.split(':');
  var hourU = parseInt(StrhourU);
  var minuteU = parseInt(StrminuteU);

  var hourC = timeC.getHours();
  var minuteC = timeC.getMinutes();

  var distanceHour = hourU - hourC ;
  var distanceMin = minuteU - minuteC ;


  document.getElementById("countdown1").innerHTML = distanceHour + " Hours";
  document.getElementById("and").innerHTML = "and" ;
  document.getElementById("countdown2").innerHTML = distanceMin + " and Minutes left";


  if (distanceHour<0 || distanceMin<0) {
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Time is up";
    window.speechSynthesis.speak(msg);
    document.getElementById("countdown").innerHTML = "Time-Up";
  }
}




 
  

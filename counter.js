var number = 0;
        function updateNumber() {
            document.getElementById("clickCount").innerHTML = number;
        }

        function checkNumberEvenOdd() {

            

            if(number % 2 == 0) {
                var result = "The number is even.";
                document.getElementById("display").innerHTML = result;

            }else {
                var result = "The number is odd.";
                document.getElementById("display").innerHTML = result;
            }

        }

        function checkNumberPrime(){

            if(number === 2) {
                var result = "The number is Not a prime.";
                document.getElementById("display2").innerHTML = result;

            }else if (number % 2 == 0){
                var result = "The number is Not a prime.";
                document.getElementById("display2").innerHTML = result;
            }else {

                var result = "The number is a prime";
                document.getElementById("display2").innerHTML = result;

            }
            }
        
        function reset() {
            number = 0;
            document.getElementById("display").innerHTML = "Odd/Even";
            document.getElementById("display2").innerHTML = "Prime/Not Prime"
            document.getElementById("clickCount").innerHTML = " ";

        }

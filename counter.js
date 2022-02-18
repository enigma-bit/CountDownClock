var number = 0;
        function updateNumber() {
            document.getElementById("clickCount").innerHTML = number;
        }

        function checkNumber() {

            if(number % 2 == 0) {
                var result = "The number is even.";
                document.getElementById("display").innerHTML = result;

            }else {
                var result = "The number is odd.";
                document.getElementById("display").innerHTML = result;
            }

        }

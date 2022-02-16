evenNumb = []
oddNumb = []

function EvenNumbers() {

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {

        evenNumb.push(i);
        document.getElementById("counterEven").innerHTML = evenNumb;
    } 
  }
}


function OddNumbers() {

for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        oddNumb.push(i);
        document.getElementById("counterOdd").innerHTML = oddNumb;
    } 
  }
}

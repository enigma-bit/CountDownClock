Even = [0,]
Odd = [0,]
source = []

function StartEven() {
    setInterval(SeparateEven, 1000);
}

function StartOdd() {
    setInterval(SeparateOdd, 1000);
}

function reset() {
    Even.length = 0;
    Odd.length = 0;
    source.length = 0;
}

function SeparateEven() {

    index = 0;
    
    while (index < source.length) {
        if ((source[index]%2)==0) {

            even.push(source[index]);       
            
            
        } else {

            newNumb = source[index]+1;
            source.push(newNumb);
        }

    index++;
    document.getElementById("counter").innerHTML = Even;

    }    
}

function SeparateOdd() {
    
    index = 0;
    
    while (index < source.length) {
        if ((source[index]%2)!=0) {
            
            Odd.push(index);
            
        }else {

            newNumb = source[index]+1;
            source.push(newNumb);
        }
    index++;
    document.getElementById("counter").innerHTML = Odd;

    }    
}
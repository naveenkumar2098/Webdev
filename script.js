function findPrimeNums(){
    var numone = document.getElementById("firstNum").value
    var numtwo = document.getElementById("lastNum").value
    var primeNumbers = new Array()
    first = parseInt(numone,10)
    second = parseInt(numtwo,10)
    var counter = first
    while(counter<=second){
        if(isPrime(counter)==true){
            primeNumbers[primeNumbers.length] = counter
        }
        counter = counter + 1
    }
    if(primeNumbers.length == 0){
        document.getElementById("output").innerHTML = "There are no prime numbers within the provided interval."
    }
    else{
        printPrime(primeNumbers)
    }
}

function isPrime(value){
    var f = true
    for(i=2;i<=Math.ceil(value/2);i++){
        if((value%i)===0){
            f = false;
            break;
        }
    }
    return f
}

function printPrime(primes){
    var content = "<h3>Prime Numbers :</h3>"
    for(j=0;j<primes.length;j++){
        content += primes[j] + "<br>"
    }
    document.getElementById("output").innerHTML = content
}

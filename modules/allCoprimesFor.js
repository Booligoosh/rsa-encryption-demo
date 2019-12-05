// A comprime is a number where the greatest common
// divisor with the other number is 1

module.exports = function (num) {
    var coprimes = new Array(num).fill(true);
    //console.log(coprimes.length);
    
    for(var i = 2; i < Math.sqrt(num); i++) {
        if (coprimes[i]) {
            for (var j = Math.pow(i, 2); j < num; j += i) {
                coprimes[j] = false;
            }
        }
    }
    
    return coprimes.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
          primes.push(i)
        }

        return primes
    }, [])
}
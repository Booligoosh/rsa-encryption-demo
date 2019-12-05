const isPrime = require('./isPrime.js');
const allCoprimesFor = require('./allCoprimesFor.js');

module.exports = function (debug = true){
    var multiple = 300;

    var p = 0;
    while(!isPrime(p)) {
        p = Number(Math.round(Math.random()*multiple) + '1')
    }

    var q = 0;
    while(!isPrime(q) || q === p) {
        q = Number(Math.round(Math.random()*multiple) + '1')
    }

    //p = 61; q = 53;
    if(debug){console.log({p,q})}

    var n = p * q;
    var totient = (p - 1) * (q - 1);
    var e = allCoprimesFor(totient)[Math.round(Math.random() * allCoprimesFor(totient).length - 1)];
    var d;
    var k = 0;
    while(!Number.isInteger(d)) {
        //console.log(k);
        d = (1+k*totient)/e;
        k++;
    }
    
    var keys = {};

    keys.publicKey = {n,e};
    keys.privateKey = {n,d};
    
    if(debug){
        console.log({p,q,n,totient,e,d});
        console.log('Public key:',JSON.stringify(keys.publicKey));
        console.log('Private key:',JSON.stringify(keys.privateKey));
    }
    
    return keys;
}
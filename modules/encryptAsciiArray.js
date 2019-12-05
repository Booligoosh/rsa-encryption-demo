module.exports = function (array, publicKey) {
    var encryptedAsciiArray = new Array(array.length);
    for(var i = 0; i < array.length; i++) {
        var m = BigInt(array[i]);
        var c = (m ** BigInt(publicKey.e)) % BigInt(publicKey.n);
        encryptedAsciiArray[i] = c;
    }
    return encryptedAsciiArray;
}
module.exports = function (array, privateKey) {
    var decryptedAsciiArray = new Array(array.length);
    for(var i = 0; i < array.length; i++) {
        var c = array[i];
        decryptedAsciiArray[i] = Number((BigInt(c) ** BigInt(privateKey.d)) % BigInt(privateKey.n));
    }
    return decryptedAsciiArray;
}
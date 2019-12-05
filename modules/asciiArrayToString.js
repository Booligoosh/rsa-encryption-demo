module.exports = function (asciiArray) {
    return asciiArray.map(n => String.fromCharCode(n)).join('')
}
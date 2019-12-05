module.exports = function (string) {
    var asciiArray = [];

    for(var i = 0; i < string.length; i++) {
        var num = string.charCodeAt(i);
        while(num.length < 3) {
            num = '0' + num;
        }
        asciiArray.push(num);
    }
    
    return asciiArray;
}
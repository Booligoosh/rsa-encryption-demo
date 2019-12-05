const generateKeys = require('./modules/generateKeys.js');
const stringToAsciiArray = require('./modules/stringToAsciiArray.js');
const asciiArrayToString = require('./modules/asciiArrayToString.js');
const encryptAsciiArray = require('./modules/encryptAsciiArray.js');
const decryptAsciiArray = require('./modules/decryptAsciiArray.js');

console.log(process.argv);

console.log('_______________________________________\n\n');

const keys = generateKeys();
const publicKey = keys.publicKey;
const privateKey = keys.privateKey;

console.log('\n_______________________________________\n\n');

var message = 'Woooo this is a message!!!!!';

console.log('Message to encrypt: \x1b[45m%s\x1b[0m',` ${message} `);

var charNumbersToEncrypt = stringToAsciiArray(message);

console.log('Char numbers to encrypt: \x1b[46m\x1b[30m%s\x1b[0m',` ${charNumbersToEncrypt.join(', ')} `)

var encryptedCharNumbers = new Array(charNumbersToEncrypt.length);
var decryptedCharNumbers = new Array(charNumbersToEncrypt.length);

// Encrypt numbers
var encryptedCharNumbers = encryptAsciiArray(charNumbersToEncrypt, publicKey);

console.log('Encrypted: \x1b[43m\x1b[30m%s\x1b[0m',` ${encryptedCharNumbers.map(n => n.toString()).join(', ')} `);

var decryptedCharNumbers = decryptAsciiArray(encryptedCharNumbers, privateKey);

console.log('Decrypted char numbers: \x1b[46m\x1b[30m%s\x1b[0m',` ${decryptedCharNumbers.map(n => n.toString()).join(', ')} `);

var decryptedMessage = asciiArrayToString(decryptedCharNumbers);

console.log('Decrypted message: \x1b[45m%s\x1b[0m',` ${decryptedMessage} `);

if(message === decryptedMessage) {
    console.log('\n\n\x1b[40m\x1b[32m%s\x1b[0m', ' Successfully decrypted! ');
} else {
    console.log('\n\n\x1b[40m\x1b[31m%s\x1b[0m', ' Message was not successfully decrypted ');
}

console.log('\n')
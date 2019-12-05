const generateKeys = require('./modules/generateKeys.js');
const keyToString = require('./modules/keyToString.js');
const keys = generateKeys(false);
console.log('Public key: ','\x1b[32m',keyToString(keys.publicKey),'\x1b[0m');
console.log('Private key:','\x1b[32m',keyToString(keys.privateKey),'\x1b[0m');
console.log('\n');
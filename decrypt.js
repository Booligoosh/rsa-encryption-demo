(async function () {
    
    const prompts = require('prompts');

    const prompt = await prompts([
        {
            type: 'text',
            name: 'encryptedArray',
            message: 'Encrypted message:'
        }, {
            type: 'text',
            name: 'privateKey',
            message: 'Private key:'
        }
    ]);
    
    const stringToNumArray = require('./modules/stringToNumArray.js');
    const stringToKey = require('./modules/stringToKey.js');

    const encryptedArray = stringToNumArray(prompt.encryptedArray).map(n => BigInt(n));
    const privateKey = stringToKey(prompt.privateKey, true);
    //console.log({encryptedArray,privateKey});
    const asciiArrayToString = require('./modules/asciiArrayToString.js');
    const decryptAsciiArray = require('./modules/decryptAsciiArray.js');

    console.log('\n');
    console.log('\x1b[32m%s\x1b[0m',asciiArrayToString(decryptAsciiArray(encryptedArray,privateKey)));
    console.log('\n');
})();
(async function () {
    
    const prompts = require('prompts');

    const prompt = await prompts([
        {
            type: 'text',
            name: 'message',
            message: 'Message:'
        }, {
            type: 'text',
            name: 'publicKey',
            message: 'Public key:'
        }
    ]);
    
    const stringToKey = require('./modules/stringToKey.js');
    const message = prompt.message;
    const publicKey = stringToKey(prompt.publicKey, false);
    //console.log({message,publicKey});
    const stringToAsciiArray = require('./modules/stringToAsciiArray.js');
    const encryptAsciiArray = require('./modules/encryptAsciiArray.js');
    const numArrayToString = require('./modules/numArrayToString.js');

    console.log('\n');
    console.log('\x1b[32m%s\x1b[0m',numArrayToString(encryptAsciiArray(stringToAsciiArray(message), publicKey).map(n => n.toString())));
    console.log('\n');
})();

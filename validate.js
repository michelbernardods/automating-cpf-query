const readline = require('readline');
const fs = require('fs');
const search = require('./index');

const readFile = readline.createInterface({
    input: fs.createReadStream('list-cpf.txt'),
    output: process.stdout,
    terminal: true
})

readFile.on('line', (line) => {
    search(`${line}`);
});


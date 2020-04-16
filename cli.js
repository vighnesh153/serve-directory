#!/usr/bin/env node

const fs = require('fs');

const getPortFromArgs = require('./utility/getPortFromArgs');

const serve = require('./index');

// defaults to home directory
let pathToBeServed = require('os').homedir();
if (process.argv.length > 2) {
    pathToBeServed = process.argv[2];
}

// Invalid path
if (fs.existsSync(pathToBeServed) === false) {
    console.log(`%cInvalid path: ${pathToBeServed}`, 'color: red');
    process.exit(1);
}

// Path is not of a directory
if (fs.lstatSync(pathToBeServed).isDirectory() === false) {
    console.log(`%cProvided path is not of a directory`, 'color: red');
    process.exit(2);
}

const PORT = getPortFromArgs() || 8153;
serve(PORT, pathToBeServed);

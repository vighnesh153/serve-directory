#!/usr/bin/env node

const fs = require('fs');
const { Command } = require('commander');
const packageInfo = require('./package.json');

const program = new Command();

program
  .name(packageInfo.name)
  .description(packageInfo.description)
  .version(packageInfo.version)
  .option('-p, --path <path>', 'path-of-directory to serve', '.')
  .option('-P, --port <port>', 'port number to use for the server', /[0-9]+/, '8153')
  .parse();

const serve = require('./index');

// defaults to home directory
const options = program.opts();
const pathToBeServed = options.path;

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

serve(parseInt(`${options.port}`), options.path);

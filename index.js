const nodePath = require('path');
const ip = require('ip');
const ipAddress = ip.address();

const express = require('express');
const app = express();

const directoryHandler = require('./controllers/directory-handler');
const noPathFound = require('./controllers/404-handler');

app.set('view engine', 'ejs');
app.set('views', nodePath.join(__dirname, 'views'));

module.exports = (port, path) => {
    app.use(express.static(nodePath.join(__dirname, 'static')));
    app.use((req, res, next) => directoryHandler(req, res, next, path));
    app.use(express.static(path));

    app.use((req, res) => noPathFound(req, res, path));
    app.listen(port, () => {
        console.log(`Directory: ${path}`);
        console.log(`Server is listening on port ${port}.`);
        console.log(`On this machine: http://localhost:${port}/`);
        console.log(`On local network: http://${ipAddress}:${port}/`);
    })
        .on('error', (e) => {
            if (e.code === 'EADDRINUSE') {
                console.log(`Port ${port} already in use!`);
                console.log('Provide different port. eg. --port=4200');
            }
        });
};

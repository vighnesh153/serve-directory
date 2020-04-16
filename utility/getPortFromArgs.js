const argumentIdentifier = '--port=';

const getPort = argument => {
    const result = +argument.split(argumentIdentifier)[1];
    if (isNaN(result)) {
        console.log('Invalid format or invalid port number: ' + argument);
        process.exit(4);
    }
    return result;
};

module.exports = () => {
    let result = null;
    process.argv.forEach(argument => {
        if (argument.startsWith(argumentIdentifier)) {
            result = getPort(argument);
        }
    });
    return result;
}

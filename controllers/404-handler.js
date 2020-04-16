const path = require('path');
const fs = require('fs');

module.exports = (req, res, rootPath) => {
    const url = decodeURIComponent(req.url);
    const pathToFile = path.join(rootPath, url);

    if (fs.existsSync(pathToFile)) {
        /* If file exists and express was not able to
         * send it, then we make it downloadable here, forcefully.
         */

        const fileName = path.basename(pathToFile);

        // Making it downloadable
        res.set('Content-Type', 'application/octet-stream');
        res.set('Content-disposition', `attachment; filename=${fileName}`);
        const buffer = fs.readFileSync(pathToFile);
        res.status(200);
        res.send(buffer);

    } else {
        res.send('<h1>Can\'t get requested URL.</h1>');
    }
}

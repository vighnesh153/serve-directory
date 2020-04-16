const fs = require('fs');
const path = require('path');

const attachFileType = (fileNamesArray, baseDirectoryPath, url) => {
    return fileNamesArray.map(fileName => {
        const filePath = path.join(baseDirectoryPath, fileName);
        return {
            name: fileName,
            isDirectory: fs.lstatSync(filePath).isDirectory(),
            url: path.join(url, fileName)
        };
    });
};

module.exports = (req, res, next, rootPath) => {
    const url = decodeURIComponent(req.url);
    const directoryPath = path.join(rootPath, url);

    // Works only if the path provided is of a directory
    if (fs.existsSync(directoryPath) &&
        fs.lstatSync(directoryPath).isDirectory()) {
        const files = fs.readdirSync(directoryPath);
        const filesWithTheirTypes = attachFileType(files, directoryPath, url);
        const isRoot = url === '/';

        if (isRoot === false) {
            const parentPath = path.resolve(url, '..');
            filesWithTheirTypes.unshift({
                name: '..',
                isDirectory: true,
                url: parentPath
            });
        }

        res.render('index', { files: filesWithTheirTypes });
    } else {
        next();
    }
}

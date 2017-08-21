var path = require('path');

module.exports = function (url, prev, done) {
    if (url.startsWith('~')) {
        const newUrl = path.join(__dirname, 'node_modules', url.substr(1));
        return { file: newUrl };
    } else {
        return { file: url };
    }
};
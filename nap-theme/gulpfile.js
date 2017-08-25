var gulp = require('gulp');
var parsePath = require('parse-filepath');
var through2 = require('through2');
var sizeOf = require('image-size');
var base64Img = require('base64-img');
var fs = require('fs');

var baseContent = `.nap-icon {
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}`;

var classList = [baseContent];

function process(file, encode, callback) {
    var imagePath = parsePath(file.relative);
    var words = imagePath.name.split('+');
    var className = 'nap-icon-' + (imagePath.dir ? imagePath.dir + '-' : '') + words[0];
    var dimensions = sizeOf(file.path);
    var base64 = base64Img.base64Sync(file.path);
    const imageClass = generateClass(className, dimensions, base64, words.slice(1));
    classList.push(imageClass);
    callback();
}

function generateClass(className, dimensions, base64, pseudoClasses) {
    var width = dimensions.width / (pseudoClasses.length + 1);
    var height = dimensions.height;
    var imageClass = '.' + className + ' {' +
        '\n  width: ' + width + 'px;' +
        '\n  height: ' + height + 'px;' +
        '\n  background-image: url("' + base64 + '");';
    var positionX = width;
    for (var pseudoClass of pseudoClasses) {
        imageClass += '\n  &:' + pseudoClass + ' {' +
            '\n    background-position-x: ' + positionX + 'px;' +
            '\n  }';
        positionX += width;
    }
    imageClass += '\n}';
    return imageClass;
}

// generate sprite.png and _sprite.scss 
gulp.task('default', function () {
    gulp.src('./images/**/*.*').pipe(through2.obj(process, function (callback) {
        var content = classList.join('\n');
        fs.writeFile('./scss/sprite.scss', content, callback);
    }));
});
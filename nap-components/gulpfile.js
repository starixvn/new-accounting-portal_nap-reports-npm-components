const path = require('path');
const gulp = require('gulp');
const sass = require('node-sass');
const through = require('through2')
const inlineTemplates = require('gulp-inline-ng2-template');

/**
 * Inline external HTML and SCSS templates into Angular component files.
 * @see: https://github.com/ludohenin/gulp-inline-ng2-template
 */
gulp.task('inline-templates', () => {
    const INLINE_TEMPLATES = {
        SRC: './src/lib/**/*.ts',
        DIST: './tmp',
        CONFIG: {
            base: '/src',
            target: 'es6',
            useRelativePaths: true,
            styleProcessor: compileSass
        }
    };
    return gulp.src(INLINE_TEMPLATES.SRC)
        .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
        .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});

/**
 * Compile SASS to CSS.
 * @see https://github.com/ludohenin/gulp-inline-ng2-template
 * @see https://github.com/sass/node-sass
 */
function compileSass(_path, ext, data, callback) {
    const compiledCss = sass.renderSync({
        data: data,
        outputStyle: 'expanded',
        importer: function (url, prev, done) {
            if (url.startsWith('~')) {
                const newUrl = path.join(__dirname, 'node_modules', url.substr(1));
                return { file: newUrl };
            } else {
                return { file: url };
            }
        }
    });
    callback(null, compiledCss.css);
}

gulp.task('copy-style', () => {
    return gulp.src('./src/style/**/*')
        .pipe(gulp.dest('./dist/style'));
});

gulp.task('copy-package', () => {
    gulp.src('./package.json')
        .pipe(through.obj((file, encode, callback) => {
            let contents = file.contents.toString(encode);
            const json = JSON.parse(contents);
            delete (json.scripts);
            delete (json.devDependencies);
            contents = JSON.stringify(json, null, 4);
            file.contents = new Buffer(contents, encode);
            callback(null, file);
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy-files', ['copy-style', 'copy-package']);

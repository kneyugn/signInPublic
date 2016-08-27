/**
 * Automation for development
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
    return gulp.src('redux/component/index.js')
        .pipe(webpack({
            watch: false,
            devServer: {
                proxy: {
                    target: 'http://localhost:3000'
                }
            },
            devtool: 'cheap-module-eval-source-map',
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loaders: ['babel'],
                        exclude: /node_modules/
                    }
                ],
            },
            output: {
                filename: 'bundle.min.js'
            },
        }))
        .pipe(gulp.dest('bundle/'));
});

/**
 * Transpiles es6 to es5
 */
gulp.task('build', function () {
    browserify({
        entries: 'redux/component/index.js',
        extensions: ['.js'],
        debug: true
    })
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('bundle.min.js'))
        .pipe(gulp.dest('bundle'));
});

/**
 * on change, nodemon is alerted, transpiles, bundles, reloads browser.
 * Ignore is very important!! else, infinite loop
 */
gulp.task('nodemon', function () {
    nodemon({ script: 'app.js'
        , ext: 'ejs, js'
        , ignore: ['bundle/*.js' ]
        , tasks: ['webpack']})
        .on('start', function () {
        })
});

'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var babelify = require('babelify');
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('build', function () {
    return browserify({
        entries: "./src/main.js",
        debug: true
    })
	.transform(babelify)
    .bundle()
	.pipe(source("bundle.js"))
	.pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./dist"));

});

gulp.task('watch', function(){
    gulp.watch('./src/**/*', ['build']);
});
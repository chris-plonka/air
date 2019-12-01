var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var uncss = require('gulp-uncss');
var minifycss = require('gulp-minify-css');

gulp.task('build', shell.task(['jekyll build --watch']));


gulp.task('serve', function () {

	browserSync.init({server: {baseDir: '_site/'}});

	gulp.watch('_site/**/*.*').on('change', browserSync.reload);

});


gulp.task('default', ['build','serve']);



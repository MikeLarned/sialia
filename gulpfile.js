'use strict';
 
var gulp = require('gulp'),
    sass = require('gulp-sass');
 
var config = {
    styles: './client/styles/',
    sass: './client/styles/*.scss'
};
 
gulp.task('sass', function () {
  return gulp.src(config.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.styles));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(config.sass, ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('watch', ['sass:watch']);


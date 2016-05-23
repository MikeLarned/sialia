'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    Builder = require('jspm').Builder;

var config = {
    styles: './client/styles/',
    sass: './client/styles/*.scss',
    build: './client/build/build.js',
    jspm: { minify: false, sourceMaps: true }
};

gulp.task('sass', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss({
            debug: true
        }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest(config.styles));
});

gulp.task('sass:watch', function() {
    gulp.watch(config.sass, ['sass']);
});

gulp.task('default', ['sass']);
gulp.task('watch', ['sass:watch']);

gulp.task('jspm', ['jspm:dev']);

gulp.task('jspm:release', function(done) {
  var builder = new Builder();
  builder.bundle("client - font-awesome", config.build, config.jspm)
    .then(function() {
      done();
    });
});

gulp.task('jspm:dev', function(done) {
  var builder = new Builder();
  builder.bundle('client/app/**/* - [client/app/**/*] - font-awesome', config.build, config.jspm)
    .then(function() {
      done();
    });
});

'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    Builder = require('jspm').Builder,
    browserSync = require('browser-sync').create();

var base = './client/';
var config = {
    ts: base + 'app/**/*.ts',
    html: base + '*.html',
    html: base + 'app/**/*.tag',
    styles: base + 'styles/',
    sass: base + 'styles/*.scss',
    build: base + 'build/build.js'
};

gulp.task('default', ['sass', 'jspm']);
gulp.task('release', ['sass:release', 'jspm:release']);
gulp.task('jspm', ['jspm:debug']);
gulp.task('sass', ['sass:debug']);

gulp.task('serve', ['sass', 'jspm'], function() {

    browserSync.init({
        startPath: '/client/',
        server: {
            baseDir: './'
        }
    });

    gulp.watch(config.ts, ['jspm']);
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.tag).on('change', browserSync.reload);
    gulp.watch(config.html).on('change', browserSync.reload);
});

gulp.task('sass:debug', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.styles))
        .pipe(browserSync.stream());
});

gulp.task('sass:release', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest(config.styles));
});

gulp.task('jspm:debug', function(done) {
    var builder = new Builder(),
        options = {
            minify: false,
            sourceMaps: true
        };
    builder
        .bundle('client/app/**/* - [client/app/**/*] - [client/app/**/*.tag!]', config.build, options)
        .then(function() {
            browserSync.reload();
            done();
        });
});

gulp.task('jspm:release', function(done) {
    var builder = new Builder(),
        options = {
            minify: true,
            sourceMaps: false
        };
    builder
        .bundle("client", config.build, options)
        .then(function() {
            browserSync.reload();
            done();
        });
});

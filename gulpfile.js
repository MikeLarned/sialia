'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cleanCss = require('postcss-clean'),
    Builder = require('jspm').Builder,
    browserSync = require('browser-sync').create();

var base = './client/';
var config = {
    lib: base + 'lib/**/*.*',
    ts: base + 'app/**/*.ts',
    html: base + '*.html',
    tag: base + 'app/**/*.tag',
    styles: base + 'styles/',
    sass: base + 'styles/*.scss',
    build: base + 'build/sialia.js'
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
    gulp.watch(config.lib, ['jspm']);
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.tag).on('change', browserSync.reload);
    gulp.watch(config.html).on('change', browserSync.reload);
});

gulp.task('serve:release', ['sass:release', 'jspm:release'], function() {
    browserSync.init({
        startPath: '/client/index.release.html',
        server: {
            baseDir: './'
        }
    });
});

gulp.task('sass:debug', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ]))
        .pipe(gulp.dest(config.styles))
        .pipe(browserSync.stream());
});

gulp.task('sass:release', function() {
    return gulp.src(config.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions']
            }),
            cleanCss()
        ]))
        .pipe(gulp.dest(config.styles));
});

gulp.task('jspm:debug', ['sass:debug'], function(done) {
    var builder = new Builder(),
        options = {
            minify: false,
            sourceMaps: true
        };

    builder.config({
       rootURL: 'file:' + process.cwd()
    });

    builder
        .bundle('client/app/**/* - [client/app/**/*] - [client/app/**/*.tag!] - [client/styles/**/*.css!]', config.build, options)
        .then(function() {
            browserSync.reload();
            done();
        });
});

gulp.task('jspm:release', ['sass:release'], function(done) {
    var builder = new Builder(),
        options = {
            minify: true,
            sourceMaps: false
        };

    builder.config({
       rootURL: 'file:' + process.cwd()
    });

    builder
        .buildStatic("client", config.build, options)
        .then(function() {
            browserSync.reload();
            done();
        });
});

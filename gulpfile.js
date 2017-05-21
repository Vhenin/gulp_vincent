'use strict';
// Requis
var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

//sass task
gulp.task('sass', function(){
  return gulp.src('./scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

//sass watch
gulp.task('sass:watch', function () {
  gulp.watch('./scss/styles.scss', ['sass']);
});

//less task
gulp.task('less', function () {
  return gulp.src('./assets/css/style.less')
    .pipe(plugins.less())
    .pipe(gulp.dest('./css/'));
});
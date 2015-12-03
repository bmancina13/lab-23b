console.log(8);
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat'),
	del= require('del');

gulp.task('stylus', function() {
  gulp.src('demostyles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
 });
 
gulp.task('serve', ['stylus'],function(){

	browserSync.init({
		server: "."
	});

	gulp.watch("demostyles.styl",['stylus']);
	gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('scripts', function() {
     gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});

gulp.task('delete', function(){
	return del([
		'./js])






}
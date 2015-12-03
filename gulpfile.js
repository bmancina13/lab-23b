var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	stylus = require('gulp-stylus');

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
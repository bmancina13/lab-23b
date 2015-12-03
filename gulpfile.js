var gulp = require('gulp'),
<<<<<<< HEAD
	browserSync = require('browser-sync').create(),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat');
=======
		browserSync = require('browser-sync').create(),
		stylus = require('gulp-stylus'),
		concat = require('gulp-concat'),
		del = require("del");
>>>>>>> e68c1bf28aed7fa0811cdd51e743cd82f6d45104

gulp.task('stylus', function() {
  gulp.src('css/demostyles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
 });

gulp.task('serve', ['stylus'],function(){

	browserSync.init({
		server: "."
	});

	gulp.watch("css/demostyles.styl", ['stylus']);
	gulp.watch("index.html").on('change', browserSync.reload);
<<<<<<< HEAD

});

gulp.task('scripts', function() {
     gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/'));
});
=======
});

gulp.task('scripts', ["delete"], function() {
  gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'));
});

gulp.task("delete", function() {
	return del([
		"js/all.js"
	]);
});
>>>>>>> e68c1bf28aed7fa0811cdd51e743cd82f6d45104

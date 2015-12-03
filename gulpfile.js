var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		stylus = require('gulp-stylus'),
		concat = require('gulp-concat'),
		del = require("del"),
		uglify = require("gulp-uglify"),
		git = require ("gulp-git");

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
});

gulp.task('scripts', ["delete"], function() {
  gulp.src('js/*.js')
    .pipe(concat('all.js'))
	.pipe(uglify({mangle:true}))
	.pipe(gulp.dest('js'));
});

gulp.task("delete", function() {
	return del([
		"js/all.js"
]);

gulp.task('add', function(){
	gulp.src('./*')
    .pipe(git.add());
});

gulp.task('commit', function(){
  	 gulp.src('./*')
    .pipe(git.commit('initial commit'));
});

gulp.task('push', function(){
  git.push('origin', 'master', function (err) {
    if (err) throw err;
  });

gulp.task('pull', function(){
  git.pull('origin', 'master',function (err) {
    if (err) throw err;
  });


});
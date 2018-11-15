var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

gulp.task('sass', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', function() {

	var buildCss = gulp.src([
		'app/css/*.css',
	])
		.pipe(gulp.dest('dest/css'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('dest'));

});
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function (cb) {
    gulp.src('scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/'));
    cb();
});

/**
 * Setup file watchers for /modules and /templates folders
 * gulp will not auto-exit in the command line, run ctrl + c to exit
 */
gulp.task('default', gulp.series('sass', function (cb) {
    gulp.watch('scss/*.scss', gulp.series('sass'));
    gulp.watch('scss/helpers/*.scss', gulp.series('sass'));
    gulp.watch('scss/sections/*.scss', gulp.series('sass'));
    gulp.watch('scss/shared/*.scss', gulp.series('sass'));
    gulp.watch('scss/views/*.scss', gulp.series('sass'));
    cb();
}));
var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js-concat', ['sass'], function () {
    return gulp.src([
            '_js/lib/*.js'
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('assets/js/'));
});

var gulp          = require('gulp'),
    browserSync   = require('browser-sync'),
    sass          = require('gulp-sass')
    reload        = browserSync.reload

gulp.task('serve',['sass'], function() {

    browserSync({
      server: "./"
    });

    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('*.html').on('change', reload);
    gulp.watch('./app/*/**.js').on('change', reload);
});

gulp.task('sass', function() {
    return gulp.src('./app/scss/*.scss')
      .pipe(sass())
      .pipe(gulp.dest("app/css"))
      .pipe(reload({stream: true}))
});


// Start the tasks
gulp.task('default', ['serve']);
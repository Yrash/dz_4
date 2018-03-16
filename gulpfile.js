var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
  ts = require('gulp-typescript'),
	browserSync = require('browser-sync').create();
 
gulp.task('default', [ 'sass', 'serve']);


gulp.task('sass', function () {
  return gulp.src('./src/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'))
    .pipe(browserSync.stream());
});
 
gulp.task('views', function buildHTML() {
  return gulp.src('./src/index.pug')
  .pipe(pug({pretty: true}))
  .pipe(gulp.dest(''))
  .pipe(browserSync.stream());
});

gulp.task('ts', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('./src/main.js'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: ""
    });

    gulp.watch('./src/**/*.sass', ['sass']).on('change', browserSync.reload);
    // gulp.watch('./src/index.pug', ['views']).on('change', browserSync.reload);
  	// gulp.watch('./src/main.ts',['ts'] ).on('change', browserSync.reload);
    
});



 

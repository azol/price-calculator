var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var sass = require('gulp-sass');
var inlinesource = require('gulp-inline-source');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync').create();
var GulpSSH = require('gulp-ssh');
var fs = require('fs');

var config = {
  app: './',
  tmp: '.tmp/',
  dist: 'dist/',
  host: '192.168.7.2',
  port: 22,
  username: 'alex',
  privateKey: fs.readFileSync('/home/alex/.ssh/id_rsa')

};

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
})

gulp.task('deploy', function () {
  return gulp.src(config.dist + 'price_calculator.html')
    .pipe(gulpSSH.sftp('write', '/var/www/html/price_calculator.html'))
})

gulp.task('build', function(callback) {
  runSequence('build-clean',
    'lint',
    'build-css',
    'build-html',
    callback);
});

gulp.task('build-clean', function() {
  return del([config.tmp, config.dist]);
});

gulp.task('lint', function() {
  gulp.src(config.app + 'main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('build-css', function() {
  return gulp.src(config.app + 'scss/app.scss')
    .pipe(sass({outputStyle: 'compressed', includePaths: ['bower_components/foundation/scss']}))
    .pipe(gulp.dest(config.tmp + 'css'))
    .pipe(browserSync.stream());
});

gulp.task('build-html', function() {
  gulp.src(config.app + 'price_calculator.html')
    .pipe(inlinesource())
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['build']);

gulp.task('serve', ['build-css'], function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'price_calculator.html'
    }
  });
  gulp.watch(config.app + 'scss/*.scss', ['build-css']);
  gulp.watch(config.app + 'price_calculator.html').on('change', browserSync.reload);
});

const { src, dest, watch, series } = require('gulp');
const del = require('delete');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const inlinesource = require('gulp-inline-source');
const jshint = require('gulp-jshint');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const config = {
  app: './',
  tmp: '.tmp/',
  dist: 'dist/'
};

function clean() {
  return del([config.tmp, config.dist]);
}

function lint() {
  return src(config.app + 'main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
}

function buildCss() {
  return src(config.app + 'scss/app.scss')
    .pipe(sass({outputStyle: 'compressed', includePaths: ['node_modules/foundation-sites/scss']}))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(dest(config.tmp + 'css'))
    .pipe(reload({stream: true}));
}

function buildHtml() {
  return src(config.app + 'price_calculator.html')
    .pipe(inlinesource())
    .pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
    .pipe(dest(config.dist));
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'price_calculator.html'
    }
  });
  watch(config.app + 'scss/*.scss', buildCss);
  watch(config.app + 'price_calculator.html').on('change', reload);
  watch(config.app + 'main.js').on('change', reload);
}

exports.clean = clean;
exports.lint = lint;
exports.buildCss = buildCss;
exports.buildHtml = buildHtml;
exports.serve = serve;
exports.build = series(clean, lint, buildCss, buildHtml);
exports.default = exports.build

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    header = require('gulp-header'),
    del = require('del');

var pkg = require('./package.json');

var banner = [
  '/**',
  ' * <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var paths = {
  src: './src/*.js',
  dist: './dist/'
};

gulp.task('default', ['minify']);

gulp.task('clean',function(cb){
  return del(paths.dist+"*" , cb);
});

gulp.task('minify', ['clean'], function(cb){
  pump([
    gulp.src(paths.src),

    uglify(),

    rename({
      suffix: '.min'
    }),

    header(banner, {pkg: pkg}),

    gulp.dest(paths.dist)
  ], cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['minify']);
});

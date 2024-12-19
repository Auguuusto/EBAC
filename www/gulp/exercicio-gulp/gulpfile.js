const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

gulp.compileImages('imagemin', () => {
 return gulp.src('www/source/images/*').pipe(imagemin()).pipe(gulp.dest('www/build/images'));
});

function compileJavaScript() {
 return gulp.src('www/source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('www/build/scripts'));
}

gulp.compileImages('default', gulp.series('imagemin'));
exports.javascript = compileJavaScript;
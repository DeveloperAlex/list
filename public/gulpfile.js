var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('*.ts', ["typescript"]);
});

gulp.task('redirectToMyOrdersGithubRepo', function() {
  console.log('\n\nPlease visit my Orders Github repo - where I have a fully functioning Gulp project.');
  console.log('> https://github.com/DeveloperAlex/Orders/blob/master/OrdersExpressSvc/gulpfile.js\n\n');
});

//gulp.task('default', ["watch"]);
gulp.task('default', ["redirectToMyOrdersGithubRepo"]);

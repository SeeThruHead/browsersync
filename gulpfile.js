var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  stylus = require('stylus');

gulp.task('default', function() {

  var styles = stylus.middleware({
    src: 'app/css/',
    compile: function(str, path) {
      return stylus(str)
       .set('filename', path);
    }
  });


  
  var config = {
    files: ['app/css/*.styl'],
    server: 'app/',
    middleware: styles
  };
  browserSync(config);
});

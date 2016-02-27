'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundles JS
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var del = require('del');

var nodemon = require('gulp-nodemon');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var buffer = require('vinyl-buffer');
var watchify = require('watchify'); // Watchify for source changes
var gutil = require('gulp-util'); // Provides gulp utilities, including logging and beep
var chalk = require('chalk'); // Allows for coloring for logging
var notify = require('gulp-notify'); // Provides notification to both the console and Growel
var sourcemaps = require('gulp-sourcemaps'); // Provide external sourcemap files
var duration = require('gulp-duration'); // Time aspects of your gulp process
var livereload = require('gulp-livereload'); // Livereload support for the browser
var merge = require('utils-merge'); // Object merge tool


var config = {
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/font-awesome/css/font-awesome.css',
      'node_modules/react-input-calendar/styles/input-calendar.css',
      'node_modules/blueimp-file-upload/css/jquery.fileupload.css',
      './src/css/*.css'
    ],
    images: './src/images/*',
    fonts: './src/fonts/*',
    dist: './dist',
    /*mainJs: './src/main.js',*/
    mainJs: [
      './src/main.js',
      './node_modules/jquery-knob/dist/jquery.knob.min.js',
      './node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
      './node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
      './node_modules/blueimp-file-upload/js/jquery.fileupload.js'
      //'./lib/circle-progress.js'

    ],
    serverJs: './server.js',
    distSource: './dist*/**/*',
    configFolderFiles: './config*/*',
    configFolder: './config',
    views: './src*/views/**/*',
  },
  environment: 'development'
};

// Error reporting function
function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(chalk.red(err.name)
      + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
      + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
      + ': ' + chalk.blue(err.description));
  } else {
    // Browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message));
  }
}

// Completes the final file outputs
function bundle(bundler) {
  var bundleTimer = duration('Javascript bundle time');

  bundler
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source('bundle.js')) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(rename('bundle.js')) // Rename the output file
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>'
    })) // Output the file being created
    .pipe(bundleTimer) // Output time timing of the file creation
    .pipe(gulpif(isDev, livereload()));
}



gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});


gulp.task('images', function() {
  gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('fonts', function() {
  gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('lint', function() {
  return gulp.src([config.paths.js, '!node_modules/**'])
		.pipe(lint({config: '.eslintrc'}))
		.pipe(lint.format());
});

// Gulp task for build
gulp.task('build', function () {
  livereload.listen(); // Start livereload server
  var args = merge(watchify.args, { debug: true ,cache: {}, packageCache: {}, ignoreWatch: ['**/node_modules/**', '**/bower_components/**'] }); // Merge in default watchify args with browserify arguments
  var bundler = watchify(browserify(config.paths.mainJs, watchify.args));
  //var bundler = browserify(config.paths.mainJs, args) // Browserify
  //  .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']}) // Watchify to watch source file changes
    bundler.transform(babelify.configure({presets: ["react", "es2015"], babelrc: false}))
    bundle(bundler); // Run the bundle the first time (required for Watchify to kick in)

  bundler.on('update', function () {
    bundle(bundler); // Re-run bundle on source updates
  });
});

gulp.task('default', function(callback) {
    runSequence( 'css', 'images', 'fonts', 'build',
      callback);
});

// return gulpSequence('js',['html', 'css','images','fonts'], 'startServer', 'watch');
// 	if(argv.env === '' ||	argv.env === "local"){
// 		runSequence('js',['html', 'css','images','fonts'], 'startServer', 'watch');
// 	}
//  	else if (argv.env === "dev"){
//
//  	}
// 	else if (argv.env === "production"){
//
// 	}
// 	else {
// 		console.log(argv.env +" is not supported.");
// 	}

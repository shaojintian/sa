var gulp = require('gulp'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	server = require('gulp-develop-server');

var serverFiles = [
    './sa.js',
    './server/**/*.*'
];

//Sass task
gulp.task('sass', function(){
	gulp.src('./assets/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(rename({suffix:'.min'}))
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./assets/css'));
		console.log('SASS compiled to CSS!');
});

gulp.task('start', ['watch'], function(){
	server.listen({path:'./sa.js'});
});

gulp.task('watch', function(){
	gulp.watch(serverFiles, server.restart);
	gulp.watch(['./assets/scss/**/*.scss','./assets/plugins/**/*.scss'], [sass]);
});

gulp.task('default',['start']);
var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var minify=require('gulp-minify-css');
var imagemin=require('gulp-image-min');


gulp.task('hello',function(){
	console.log('hello world');
});


gulp.task('copefile',function(){
	return gulp.src('indexTestgulp.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});

gulp.task('copeimg',function(){
	return gulp.src('images/*.{jpg,png}').pipe(imagemin()).pipe(gulp.dest('dist/img'));
});

gulp.task('copeDir',function(){
	return gulp.src('images/**').pipe(gulp.dest('dist/images'));
});

gulp.task('copeMutDir',function(){
	return gulp.src(['xml/*.xml','json/*.js']).pipe(gulp.dest('dist/data'));
});

gulp.task('copeMutDirP',function(){
	return gulp.src(['xml/*.xml','json/*.js','!json/index1fei.html']).pipe(gulp.dest('dist/data'));
});

gulp.task('duogebuild',['copefile','hello'],function(){
	console.log('aaa');
});

gulp.task('watch',function(){
	gulp.watch('indexTestgulp.html',['copefile']);
});

gulp.task('sass',function(){
	return gulp.src('stylesheet/**/*.scss').pipe(sass()).pipe(minify()).pipe(gulp.dest('dist/css'));
});

gulp.task('server',function(){
	connect.server({root:'dist',liveload:true});
});

gulp.task('default',['server','watch']);

gulp.task('scriptshb',function(){
	return gulp.src(['json/aa.js','json/bb.js']).pipe(concat('hebing.js')).pipe(gulp.dest('dist/js')).pipe(uglify())
	.pipe(rename('hebing.min.js')).pipe(gulp.dest('dist/js'));
});




















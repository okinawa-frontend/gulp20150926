var gulp = require("gulp");
var sass = require("gulp-sass");
var haml = require("gulp-haml");
var imagemin  = require("gulp-imagemin");
var pngquant  = require("imagemin-pngquant");
var concatCss = require("gulp-concat-css");
var minifyCss = require("gulp-minify-css");
var frontnote = require("gulp-frontnote");

// work3
// fileのコピー
gulp.task("file_copy", function() {
    gulp.src("src/test/*")
        .pipe(gulp.dest("web/test"));
});

// work4
// sassのコンパイル
gulp.task("sass", function() {
    gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("web/css"));
});

// work4
// hamlのコンパイル
gulp.task("haml", function() {
    gulp.src("src/**/*.haml")
        .pipe(haml())
        .pipe(gulp.dest("web"));
});

// work5
// ファイルを監視して自動的にコンパイルする
gulp.task("watch", function(){
    gulp.watch("src/scss/**/*.scss", ["sass"]);
    gulp.watch("src/**/*.haml", ["haml"]);
});

// work6
// imageファイルの圧縮
gulp.task("image_min", function() {
    gulp.src("src/images/**/*.*")
        .pipe(imagemin({
             use: [
                pngquant({ // tinyPng使用
                  quality: 60-80,
                  speed: 1
                })
             ]
        }))
        .pipe(gulp.dest("web/images"));
});

// work6
// cssの圧縮
gulp.task("css_minify", function(){
    gulp.src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(concatCss("bundle.min.css"))
        .pipe(minifyCss())
        .pipe(gulp.dest("web/css"));
});

// work7
// スタイルガイドの作成
gulp.task("css_styleguide", function() {
    gulp.src("src/scss/**/*.scss")
        .pipe(frontnote({
          css: '../web/css/style.css'
        }))
        .pipe(sass())
        .pipe(gulp.dest("web/css"));
});

// すべて動かす
gulp.task("default", ["sass", "haml", "css_styleguide"]);

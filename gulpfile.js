const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function comprimeImagens() {
  return gulp
    .src("./src/imgs/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/imgs"));
}

function compilaJavaScript() {
  return gulp
    .src("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));
}

function compilaSass() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

function funcaoPadrao(callback) {
  setTimeout(() => {
    console.log("Executando via Gulp");
    callback();
  }, 2000);
}

function dizOi(callback) {
  console.log("Olá Gulp");
  dizTchau();
  callback();
}

function dizTchau() {
  console.log("Tchau Gulp");
}

// exports.default = gulp.parallel(funcaoPadrao, dizOi);
// exports.dizOi = dizOi;

// exports.default = compilaSass;
// exports.sass = compilaSass;
exports.default = function () {
  gulp.watch(
    "./src/styles/*.scss",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    "./src/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(compilaJavaScript)
  );
  gulp.watch(
    "./src/imgs",
    { ignoreInitial: false },
    gulp.series(comprimeImagens)
  );
};
// exports.javascript = compilaJavaScript;
// exports.images = comprimeImagens;

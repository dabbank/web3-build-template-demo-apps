// TODO only sass

var gulp = require("gulp");
var _ = require('lodash');

var plugins = {};
plugins.concat = require('gulp-concat');

var CONFIG = require('./node_modules/web3-common-build-setup/Build_Config');

CONFIG.DEV.HTML_MAIN = _.constant("./src/index.html");

var gulpInit = require("./node_modules/web3-common-build-setup/gulpfile");
var gulpInstanceToOverride = gulpInit(gulp, CONFIG);

gulpInstanceToOverride.task("prod:once", ["copyFonts", "prod:jslibs"
// TODO move from global gulp to lib "prod:jslibs"
// Lib does not need to be build by every app itself
]);

gulpInstanceToOverride.task("copyFonts", function(){
    gulp.src(CONFIG.SRC.THIRDPARTY.FONTS())
        .pipe(gulp.dest(CONFIG.DELIVERED_WEBSERVER.DIST.CURRENT_MODULE() + "fonts/"));
});

gulp.task('prod:jslibs', function () {
    // TODO use minified libs, instead
    gulp.src(CONFIG.SRC.JS.LIBS())
        .pipe(plugins.concat(CONFIG.DIST.JS.FILES.LIBS()))
        .pipe(gulp.dest(CONFIG.DELIVERED_WEBSERVER.DIST.CURRENT_MODULE()));

    // TODO use minified libs, instead
    gulp.src(CONFIG.SRC.JS.SINGLE_LIBS())
        .pipe(gulp.dest(CONFIG.DELIVERED_WEBSERVER.DIST.CURRENT_MODULE()));
});
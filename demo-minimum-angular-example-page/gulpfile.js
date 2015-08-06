var gulp = require("gulp");
var COMMON = require("web3-common-build-setup");
var CONFIG = COMMON.buildConfig;
var DEPS_FOLDER = COMMON.depsFolder;
var gulpInit = COMMON.initGulp;
_ = require(DEPS_FOLDER + "lodash");
var plugins = {};
plugins.concat = require(DEPS_FOLDER + "gulp-concat");
plugins.rename = require(DEPS_FOLDER + "gulp-rename");

var ABSOLUTE = "/";
CONFIG.DEV.HTML_MAIN = _.constant("src/index.html");
CONFIG.PARTIALS.MAIN = _.constant("src/frameContent.html");

CONFIG.DEV.WEBSERVER_BASE_ROOT_DIRS = function () {
    return [
        //"./", 					// For Sourcemaps
        CONFIG.DIST.DEV_FOLDER(),
        "./bower_components/demo-minimum-sass-example-component/dev_target/"
    ];
};

CONFIG.SRC.JS.LIBS = _.constant(
    [
        "bower_components/angular/angular.js",
        "bower_components/angular-i18n/angular-locale_de.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
        "bower_components/lodash/dist/lodash.compat.js"
    ]);

CONFIG.DIST.CSS.HEAD_FILE = function () {
    return [
        "/demo-minimum-sass-example-component/css/main.css"
    ];
}

var gulpInstanceToOverride = gulpInit(gulp, CONFIG);

// TODO reduce and move to web3-common-build-setup
var copyMocksAndCSS = function(ENV_PATH_ROOT){
    gulpInstanceToOverride.src("css/basis.css")
        .pipe(gulpInstanceToOverride.dest(ENV_PATH_ROOT));

    gulpInstanceToOverride.src("mocks/**/*")
        .pipe(gulp.dest(ENV_PATH_ROOT + "mocks"));

    gulpInstanceToOverride.src("img/*")
        .pipe(gulpInstanceToOverride.dest(ENV_PATH_ROOT + "img/"));

    gulpInstanceToOverride.src("src/frameContent.html")
        .pipe(gulpInstanceToOverride.dest(ENV_PATH_ROOT));
};

gulpInstanceToOverride.task("dev", ["copyMocksAndCSS_DEV", "devFromCommon"]);

gulpInstanceToOverride.task("copyMocksAndCSS_DEV", function(){
    //copyMocksAndCSS(CONFIG.DIST.DEV_FOLDER() + CONFIG.DIST.ROOT_PREFIX_PATH());
});

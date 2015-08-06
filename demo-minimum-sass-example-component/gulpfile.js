var gulp = require("gulp");
var plugins = {};

gulp.task("default", ["dev:styles"]);
gulp.task("dev", ["dev:styles"]);
gulp.task("prod", ["prod:styles"]);

// copied from web3-common-build-setup/config/build_config.js
var CONFIG = {
    SRC: {
        SASS_MAIN: function () {
            return "./src/sass/main.scss";
        },
        SPRITES_IMG_BASE_FOLDER: function () {
            return "src/img/";
        },
    },
    DIST: {
        DEV_FOLDER: function () {
            return "dev_target/";
        },
        DIST_FOLDER: function () {
            return "dist_target/";
        },
        ROOT_PREFIX_PATH : function(){
            return "demo-minimum-sass-example-component";
        }
    },
    FILE_TYPE_MACHER: {
        SVG: function () {
            return "**/*.svg";
        }
    }
};

var svgSrcFiles = CONFIG.SRC.SPRITES_IMG_BASE_FOLDER() + CONFIG.FILE_TYPE_MACHER.SVG();


var compileSass = function (environment) {
    plugins.sass = plugins.sass || require("gulp-sass");
    //gulp.src(CONFIG.SRC.THIRDPARTY.FONTS())
    //    .pipe(gulp.dest(CONFIG.DIST.DEV_FOLDER() + "css"));

    return gulp.src(CONFIG.SRC.SASS_MAIN())
        .pipe(plugins.sass({
            precision: 8,
            errLogToConsole: true
        }));
};

gulp.task("dev:styles", function () {
    var envPath = getEnvironmentPath("dev");
    performCSS().pipe(gulp.dest(envPath));
});

gulp.task("prod:styles", function () {
    var envPath = getEnvironmentPath("prod");
    performCSS().pipe(gulp.dest(envPath));
});


var performCSS = function(){
    plugins.gulpMerge = plugins.gulpMerge || require('gulp-merge');
    plugins.gulpFilter = plugins.gulpFilter || require('gulp-filter');
    plugins.concat = plugins.concat || require('gulp-concat');

    var myFilter = plugins.gulpFilter("**/*.css");
    //  To prevent async issues & writing to temp files, we need to write to memory stream
    return plugins.gulpMerge(
        require("./gulp_tasks/sprites").generateSprites(svgSrcFiles),
        compileSass()
    )
    .pipe(myFilter)
    // concat sprites.css with bootstrap.css
    .pipe(plugins.concat("css/main.css"))
    .pipe(myFilter.restore());
};


// TODO generalize
var getEnvironmentPath = function (env) {
    var ENV_PATH_ROOT = (env === "dev") ? CONFIG.DIST.DEV_FOLDER() : CONFIG.DIST.DIST_FOLDER();
    return ENV_PATH_ROOT + CONFIG.DIST.ROOT_PREFIX_PATH();
};
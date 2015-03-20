var gulp = require("gulp");
var _ = require('lodash');
var fs = require('fs');

var plugins = {};
plugins.sass = require('gulp-sass');
plugins.base64 = require('gulp-base64');
plugins.notify = require('gulp-notify');
plugins.template = require('gulp-template');

var gulp_utils = require("./node_modules/web3-common-build-setup/gulp_utils");
var errorPipe = gulp_utils.errorPipe;

var gulpInit = require("./node_modules/web3-common-build-setup/gulpfile");

var CONFIG_TO_OVERRIDE = require('./node_modules/web3-common-build-setup/Build_Config');
CONFIG_TO_OVERRIDE.DEV.HTML_MAIN = _.constant("./src/index.html");
var CONFIG = CONFIG_TO_OVERRIDE; // alias
var gulpInstanceToOverride = gulpInit(gulp, CONFIG);

// distinguish between dev and prod
gulpInstanceToOverride.task("prod", ["sass"]);
gulpInstanceToOverride.task("dev", ["watchSass"]);
gulpInstanceToOverride.task("dev:once", ["sass"]);


gulp.task('watchSass', function (cb) {
    gulp.watch(['sass/**/*.scss'], ['sass']);
});

// CALL FROM PARENT dab-web
gulp.task('sass', function () {
    gulp.src(CONFIG_TO_OVERRIDE.SRC.SASS_MAIN())

        .pipe(errorPipe())
        .pipe(staticCSSTemplateMixin())
        .pipe(plugins.sass({
            precision: 8,
            errLogToConsole: false
        }))
        .pipe(plugins.base64({
            baseDir: CONFIG.SRC.SPRITES_IMG_BASE_FOLDER(),
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            maxImageSize: 300 * 1024, // bytes
            debug: true
        }))
        .pipe(gulp.dest(CONFIG.DIST.CSS.FOLDER()))
        .pipe(gulp.dest(CONFIG.DELIVERED_WEBSERVER.DIST.CURRENT_MODULE()))
        .pipe(plugins.notify("Successful changed SCSS"));
});

var staticCSSTemplateMixin = function() {
    return plugins.template({
            cssImport : function (cssPath) {
                var contentPath = "./" + cssPath;
                var content = fs.readFileSync(contentPath, {'encoding' : 'utf-8'});
                return content;
            }
        },
        {
            interpolate: /<%gulp=([\s\S]+?)%>/g,
            evaluate: /<%gulp([\s\S]+?)%>/g
        }
    );
};
var gulp = require("gulp");


var COMMON = require('web3-common-build-setup');
var CONFIG = COMMON.buildConfig;

var DEPS_FOLDER = COMMON.depsFolder;

var _ = require(DEPS_FOLDER+"lodash");


CONFIG.DEV.HTML_MAIN = function() {
    return "src/index.html";
};


var gulpInit = COMMON.initGulp;
var gulpInstanceToOverride = gulpInit(gulp, CONFIG);

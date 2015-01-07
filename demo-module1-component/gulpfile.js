var gulp = require("gulp");
var _ = require('lodash');

var CONFIG = require('./node_modules/web3-common-build-setup/Build_Config');

CONFIG.DEV.HTML_MAIN = _.constant("./src/index.html");

var gulpInit = require("./node_modules/web3-common-build-setup/gulpfile");
var gulp2 = gulpInit(gulp, CONFIG);

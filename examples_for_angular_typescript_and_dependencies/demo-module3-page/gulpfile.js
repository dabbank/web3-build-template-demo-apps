var gulp = require("gulp");
var _ = require("lodash");

var CONFIG_TO_OVERRIDE = require('./node_modules/web3-common-build-setup/Build_Config');
CONFIG_TO_OVERRIDE.FOLDER.GLOBAL_MODULE = _.constant("dab-bootstrap-component/");


var gulpInit = require("./node_modules/web3-common-build-setup/gulpfile");
var mainGulp = gulpInit(gulp, CONFIG_TO_OVERRIDE);
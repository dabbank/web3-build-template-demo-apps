var gulp = require("gulp");
var _ = require('lodash');

var CONFIG = require('./node_modules/web3-common-build-setup/Build_Config');

[].push.apply(CONFIG.DEV.WEBSERVER_BASE_ROOT_DIRS, [
	"bower_components/dab-bootstrap-component/portal_standalone/dev_standalone/",
	"bower_components/demo-global-css-component/sass/target/",
	"bower_components/bootstrap-sass-official/assets/"
]);

// overriding entry point of index.html for partial template generation
CONFIG.DEV.HTML_MAIN = _.constant("./src/index.html");

var gulpInit = require("./node_modules/web3-common-build-setup/gulpfile");

var gulpInstanceToOverride = gulpInit(gulp, CONFIG);

gulpInstanceToOverride.task("echo", function(){
    console.log("child");
});
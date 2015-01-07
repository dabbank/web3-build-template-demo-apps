
var dab;
(function (dab) {
    (function (demo) {

        /*
         IDs of injected services are actually not needed:
         In build process, they are generated out of parameter names
         */
        var dependencyID_01 = "$scope";
        var dependencyID_02 = "demoDataService";

        /* injected angular service */
        var controllerCodeFunc = function ($scope, demoDataService) {
            // gets called like a constructur

            // scope is the data-binding between controller & html
            $scope.demoModel = "123"; // initial value
            demoDataService.then();
        };

        // TODO
        //promise.(nul)

        var demoAppModuleInstance = angular.module("dab-demo-page");
        var nameOfController = "demoController";

        // Last parameter is awlaysthe function
        demoAppModuleInstance.controller(nameOfController, [dependencyID_01, dependencyID_02, controllerCodeFunc]);

    })(dab.demo || (dab.demo = {}));
    var demo = dab.demo;
})(dab || (dab = {})); // immediately involked function
module dab.demo {
    /**
     * @description some example
     */
    class DemoController {

        // will be generated at build-process by ng-annotate:
        // public static $inject = ["$scope", "demoDataService"];
        private $scope;
        private demoDataService;

        constructor($scope:ng.IScope, demoDataService) {
            this.$scope = $scope;
            this.demoDataService = demoDataService;

            this.$scope.demoModel = "123";
        }
    }

    // Registration of bean
    angular.module("dab-demo-page").controller("demoController", DemoController);
}

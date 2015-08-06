module demo.demo {

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
            demoDataService.getServerData("123").then((response)=> {
                this.$scope.demoFromService = response.data;
            });
        }
    }

    // Registration of bean
    angular.module("demo-minimum-angular-example-page").controller("DemoController", DemoController);
}

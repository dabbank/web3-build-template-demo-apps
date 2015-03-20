
module demo.module3 {

    export class SubController {
        private scope;

        constructor($scope){
            this.scope = $scope;

            this.scope.test = "222";
        }
        public doSomething():void {

        }
    }
    angular.module('module3App').controller('subcontroller', SubController);


}

module demo.demo {
    class DemoDirectiveController implements IDemoDirectiveController {

        private $filter : ng.IFilterService;

        constructor($filter : ng.IFilterService) {
            this.$filter = $filter;
        }

        public sayHelloToConsole(text : string, reverted? : boolean) : void {
            if(!!reverted) {
                console.info(this.revertInput(text));
            } else {
                console.info(text);
            }
        }

        private revertInput(input : string) : string {
            return this.$filter('revertInputFilter')(input);
        }
    }

    angular.module("demo-minimum-angular-example-page").controller("demoDirectiveController", DemoDirectiveController);
}
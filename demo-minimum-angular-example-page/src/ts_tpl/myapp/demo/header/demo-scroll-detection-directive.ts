
module demo.demo {

    class DemoScrollDetectionDirective {
        public static demoScrollDetectionDirective_instance($window) {
            return {
                restrict: 'AC',
                link : (scope, element, attribute)=>{
                    angular.element($window).bind("scroll", ()=>{
                        var className = "navbar-shrink";
                        if(window.pageYOffset > 100){
                            element.addClass(className);
                        }else{
                            element.removeClass(className);
                        }
                    });
                    scope.$watch(angular)
                }
            };
        }
    }

    angular.module("demo-minimum-angular-example-page")
        .directive("demoScrollDetectionDirective", DemoScrollDetectionDirective.demoScrollDetectionDirective_instance);

}
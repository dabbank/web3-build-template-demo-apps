module demo.module1 {
    var dependencies = [];

    angular.module('demo-module1-component', dependencies)

        .directive("demoModule1Directive", function () {

            return {
                scope: false,
                templateUrl: '/demo-module1-directive.tpl.html'
            };
        })
        .directive("demoModule1TileDirective", function () {
            return {
                scope: false,
                templateUrl: '/demo-module1-tile-directive.tpl.html'
            };
        });
    ;
}
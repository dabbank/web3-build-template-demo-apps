
module dab.pfm.demo {

    class DabDemoDirective {
        public static dabDemoDirective_instance() {
            return {
                /*
                 Only use if really needs isolated scope!
                 scope: {
                 readOnly : "@"
                 functionCall : "&"
                 bidirectional : "="
                 }
                 */
                templateUrl: "/dab/demo/directives/dab-demo-directive.tpl.html"
            };
        }
    }

    angular.module("dab-demo-page")
        .directive("dabDemoDirective", DabDemoDirective.dabDemoDirective_instance);

}
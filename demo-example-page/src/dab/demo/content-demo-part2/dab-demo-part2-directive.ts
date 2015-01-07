
module dab.pfm.demo {

    class DabDemoPart2Directive {
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
                templateUrl: "/dab/demo/content-demo-part2/dab-demo-part2-directive.tpl.html"
            };
        }
    }

    angular.module("dab-demo-page")
        .directive("dabDemoPart2Directive", DabDemoPart2Directive.dabDemoDirective_instance);

}
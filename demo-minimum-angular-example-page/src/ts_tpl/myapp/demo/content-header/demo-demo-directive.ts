
module demo.demo {

    class demoDemoDirective {
        public static demoDemoDirective_instance() {
            return {
                /*
                 Only use if really needs isolated scope!
                 scope: {
                 readOnly : "@"
                 functionCall : "&"
                 bidirectional : "="
                 }
                 restrict : 'AECM'
                 */
                templateUrl: "/ts_tpl/myapp/demo/content-header/demo-demo-directive.tpl.html"
            };
        }
    }

    angular.module("demo-minimum-angular-example-page")
        .directive("demoDemoDirective", demoDemoDirective.demoDemoDirective_instance);

}
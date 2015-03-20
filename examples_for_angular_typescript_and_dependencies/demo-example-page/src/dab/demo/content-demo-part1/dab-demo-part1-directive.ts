
module dab.pfm.demo {

    class DabDemoPart1Directive implements ng.IDirective {
        /*
         Only use if really needs isolated scope!
         scope:any = {
             readOnly : "@"
             functionCall : "&"
             bidirectional : "="
         };
        */
        // actually a name, not a path, compiled a build time
        templateUrl:string = "/dab/demo/content-demo-part1/dab-demo-part1-directive.tpl.html" ;
        // If needed: compile(elem:ng.IAugmentedJQuery, attributes:ng.IAttributes):any{}
    }

    angular.module("dab-demo-page")
        .directive("dabDemoPart1Directive", () => new DabDemoPart1Directive());

}
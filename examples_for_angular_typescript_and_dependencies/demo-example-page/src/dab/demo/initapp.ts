module dab.demo {

// Document https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation

    /**
     * @ngdoc overview
     * @name rfx.directive:rAutogrow
     * @element textarea
     * @function
     *
     * @description
     * Resize textarea automatically to the size of its text content.
     *
     * **Note:** ie<9 needs pollyfill for window.getComputedStyle
     *
     * @example
     <example module="rfx">
     <file name="index.html">
     <textarea ng-model="text"rx-autogrow class="input-block-level"></textarea>
     <pre>{{text}}</pre>
     </file>
     </example>
     */


    // need to be loaded first
    angular.module("dab-demo-page", [
        // TODO templateCache
        "ui.bootstrap", "dabTemplatecache", "ngLocale"
    ]);

    angular.element(document).ready(function () {
        angular.bootstrap(
            document.body,
            ["dab-demo-page"]
        );
    });

    angular.module("dab-demo-page").config(function ($provide, $httpProvider) {
//        de.dab.common.standaloneMockHTTP_CONFIG($provide, $httpProvider);
    });

    // TODO ui router and resolve
//    var d = $q.defer();
//    d.resolve("resolved: " + msg);
//    return d.promise;
    //
}
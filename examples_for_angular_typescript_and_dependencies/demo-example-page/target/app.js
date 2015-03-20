var demo;
(function (demo) {
    var module1;
    (function (module1) {
        var dependencies = [];
        angular.module('demo-module1-component', dependencies).directive("demoModule1Directive", function () {
            return {
                scope: false,
                templateUrl: '/demo-module1-directive.tpl.html'
            };
        }).directive("demoModule1TileDirective", function () {
            return {
                scope: false,
                templateUrl: '/demo-module1-tile-directive.tpl.html'
            };
        });
        ;
    })(module1 = demo.module1 || (demo.module1 = {}));
})(demo || (demo = {}));
var demo;
(function (demo) {
    var module1;
    (function (module1) {
        var DemoModule1Controller = (function () {
            function DemoModule1Controller(demoModule1DataSource, $scope, demoModule1Service) {
                this.ds = demoModule1DataSource;
                this.$scope = $scope;
                $scope.module1ModelList = demoModule1Service.getModelList();
            }
            return DemoModule1Controller;
        })();
        module1.DemoModule1Controller = DemoModule1Controller;
        ;
        angular.module('demo-module1-component').controller('demoModule1Controller', DemoModule1Controller);
    })(module1 = demo.module1 || (demo.module1 = {}));
})(demo || (demo = {}));
var demo;
(function (demo) {
    var module1;
    (function (module1) {
        var DemoModule1DataSource = (function () {
            function DemoModule1DataSource($q) {
                this.q = $q;
            }
            DemoModule1DataSource.prototype.getServerData = function (isins) {
                return [
                    {
                        isin: isins[0],
                        buy: 2,
                        sell: 5,
                        changeAbsolute: 1,
                        changeRelative: 30
                    }
                ];
            };
            return DemoModule1DataSource;
        })();
        module1.DemoModule1DataSource = DemoModule1DataSource;
        ;
        angular.module('demo-module1-component').service('demoModule1DataSource', DemoModule1DataSource);
    })(module1 = demo.module1 || (demo.module1 = {}));
})(demo || (demo = {}));
var demo;
(function (demo) {
    var module1;
    (function (module1) {
        var DemoModule1Service = (function () {
            function DemoModule1Service(demoModule1DataSource) {
                this.ds = demoModule1DataSource;
            }
            DemoModule1Service.prototype.setIsins = function (isins) {
                this.bestPricemodelList = this.ds.getServerData(isins);
            };
            DemoModule1Service.prototype.getModelList = function () {
                return this.bestPricemodelList;
            };
            return DemoModule1Service;
        })();
        module1.DemoModule1Service = DemoModule1Service;
        ;
        angular.module('demo-module1-component').service('demoModule1Service', DemoModule1Service);
    })(module1 = demo.module1 || (demo.module1 = {}));
})(demo || (demo = {}));
var dab;
(function (dab) {
    var demo;
    (function (demo) {
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
            "ui.bootstrap",
            "dabTemplatecache",
            "ngLocale"
        ]);
        angular.element(document).ready(function () {
            angular.bootstrap(document.body, ["dab-demo-page"]);
        });
        angular.module("dab-demo-page").config(function ($provide, $httpProvider) {
            //        de.dab.common.standaloneMockHTTP_CONFIG($provide, $httpProvider);
        });
    })(demo = dab.demo || (dab.demo = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var demo;
    (function (demo) {
        /**
         * @description some example
         */
        var DemoController = (function () {
            function DemoController($scope, demoDataService) {
                this.$scope = $scope;
                this.demoDataService = demoDataService;
                this.$scope.demoModel = "123";
            }
            return DemoController;
        })();
        // Registration of bean
        angular.module("dab-demo-page").controller("demoController", DemoController);
    })(demo = dab.demo || (dab.demo = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var pfm;
    (function (pfm) {
        var demo;
        (function (demo) {
            var DabDemoPart1Directive = (function () {
                function DabDemoPart1Directive() {
                    /*
                     Only use if really needs isolated scope!
                     scope:any = {
                         readOnly : "@"
                         functionCall : "&"
                         bidirectional : "="
                     };
                    */
                    // actually a name, not a path, compiled a build time
                    this.templateUrl = "/dab/demo/content-demo-part1/dab-demo-part1-directive.tpl.html";
                }
                return DabDemoPart1Directive;
            })();
            angular.module("dab-demo-page").directive("dabDemoPart1Directive", function () { return new DabDemoPart1Directive(); });
        })(demo = pfm.demo || (pfm.demo = {}));
    })(pfm = dab.pfm || (dab.pfm = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var pfm;
    (function (pfm) {
        var demo;
        (function (demo) {
            var DabDemoPart2Directive = (function () {
                function DabDemoPart2Directive() {
                }
                DabDemoPart2Directive.dabDemoDirective_instance = function () {
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
                };
                return DabDemoPart2Directive;
            })();
            angular.module("dab-demo-page").directive("dabDemoPart2Directive", DabDemoPart2Directive.dabDemoDirective_instance);
        })(demo = pfm.demo || (pfm.demo = {}));
    })(pfm = dab.pfm || (dab.pfm = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var pfm;
    (function (pfm) {
        var demo;
        (function (demo) {
            var DabDemoDirective = (function () {
                function DabDemoDirective() {
                }
                DabDemoDirective.dabDemoDirective_instance = function () {
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
                };
                return DabDemoDirective;
            })();
            angular.module("dab-demo-page").directive("dabDemoDirective", DabDemoDirective.dabDemoDirective_instance);
        })(demo = pfm.demo || (pfm.demo = {}));
    })(pfm = dab.pfm || (dab.pfm = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var demo;
    (function (demo) {
        var services;
        (function (services) {
            /**
             * backToTop Directive
             * @param  {Function} $anchorScroll
             * @description Ensure that the browser scrolls when the anchor is clicked
             */
            var DemoDataService = (function () {
                function DemoDataService(demoDataSource) {
                    this.demoDataSource = demoDataSource;
                }
                // return average of country
                DemoDataService.prototype.getServerData = function (id) {
                    var response = this.demoDataSource.fetchDemoData(id);
                    return response;
                };
                DemoDataService.prototype.getExtractedNumbers = function (toBeExtracted) {
                    //_.map(toBeExtracted, "amount");
                    return null;
                };
                //
                DemoDataService.prototype.calculateAverage = function (absoluteValues) {
                    //var result = _.reduce(toBeExtracted, function(){
                    //
                    //});
                    return null;
                };
                return DemoDataService;
            })();
            angular.module("dab-demo-page").service("demoDataService", DemoDataService);
        })(services = demo.services || (demo.services = {}));
    })(demo = dab.demo || (dab.demo = {}));
})(dab || (dab = {}));
var dab;
(function (dab) {
    var demo;
    (function (demo) {
        var services;
        (function (services) {
            var DemoDataSource = (function () {
                function DemoDataSource($http) {
                    this.$http = $http;
                    //this.serverDataConfig = ; //
                }
                DemoDataSource.prototype.fetchDemoData = function (id) {
                    var url = "/users/account";
                    this.$http.get(url, this.serverDataConfig);
                    return null;
                };
                return DemoDataSource;
            })();
            angular.module("dab-demo-page").service("demoDataSource", DemoDataSource);
        })(services = demo.services || (demo.services = {}));
    })(demo = dab.demo || (dab.demo = {}));
})(dab || (dab = {}));
//# sourceMappingURL=app.js.map
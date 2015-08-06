var registerModuleSyntax = [];
angular.module("mock.server", registerModuleSyntax);
angular.module("demo-minimum-angular-example-page", ["demoMinimumAngularExamplePageTemplatecache", "mock.server", "ui.bootstrap"]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['demo-minimum-angular-example-page']);
});



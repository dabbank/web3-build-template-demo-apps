module dab.module3 {
    // Need to be loaded first
    angular.module('module3App', [
        'ui.bootstrap', 'demoTemplatecache', 'ngLocale', 'dab-module1-component'
    ]);

    angular.element(document).ready(function () {

        angular.bootstrap(
            document.body,
            ['module3App']
        );
    });

}
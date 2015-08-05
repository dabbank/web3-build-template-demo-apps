class HttpInterceptorFactory {

    /*@ngInject*/
    public static HttpInterceptor_Instance($q:ng.IQService, $injector, $location) {

        var isMockMode = !_.isUndefined($location.search().mockMode);
        var urlToMocks = $location.url();

        return {
            request: (config) => {
                var isNoAngularTemplateRequest = !(config.url.indexOf("html") > -1);
                if (isMockMode && isNoAngularTemplateRequest) {
                    config.method = 'GET';
                    var appName = "demo-minimum-angular-example-page";
                    config.url = "/web3/"+appName+"/mocks" + config.url + ".json";
                }

                return config;
            },

            response: (response) => {
                return response;
            }
        }
    }
}

angular.module("mock.server").factory("httpInterceptorFactory", HttpInterceptorFactory.HttpInterceptor_Instance);
angular.module("mock.server").config(["$httpProvider", ($httpProvider : ng.IHttpProvider) => {
    $httpProvider.interceptors.push("httpInterceptorFactory");
}]);
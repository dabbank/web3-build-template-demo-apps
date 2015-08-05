module demo.demo.services {

    class DemoDataSource implements IDemoDataSource {

        private $http:ng.IHttpService;
        private serverDataConfig:ng.IRequestConfig;

        constructor($http) {
            this.$http = $http;
            //this.serverDataConfig = ; //
        }

        fetchDemoData(id:string) : any {
            var url = "/users/account";
            return this.$http.get(url, this.serverDataConfig);
        }
    }

    angular.module("demo-minimum-angular-example-page").service("demoDataSource", DemoDataSource);

}


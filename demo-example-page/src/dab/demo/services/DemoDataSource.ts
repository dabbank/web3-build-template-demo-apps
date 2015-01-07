
module dab.demo.services {

    class DemoDataSource implements IDemoDataSource{

        private $http : ng.IHttpService;
        private serverDataConfig : ng.IRequestConfig;
        constructor($http){
            this.$http = $http;
            //this.serverDataConfig = ; //
        }

        fetchDemoData(id:string):dab.demo.model.response.IDemoModelResponse {
            var url = "/users/account";
            this.$http.get(url, this.serverDataConfig);
            return null;
        }
    }

    angular.module("dab-demo-page").service("demoDataSource", DemoDataSource);

}


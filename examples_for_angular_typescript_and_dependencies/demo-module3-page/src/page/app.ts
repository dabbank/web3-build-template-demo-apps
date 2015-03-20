module demo.module3 {
    import IModule1Service = demo.module1.IDemoModule1Service;

    angular.module('module3App')
        .controller('Module3Controller', function ($scope, module1Service:IModule1Service) {

            $scope.module1Model = {
                customers: [
                    {
                        name: 'Karl Mustermann',
                        accounts: [
                            {
                                accountNo: '10489823424',
                                balance: 1895.56,
                                currency: 'EUR',
                                productName: 'Girokonto'
                            },
                            {
                                accountNo: '10489823498',
                                balance: 221800.44,
                                currency: 'EUR',
                                productName: 'Tagesgelskonto'
                            },
                            {
                                accountNo: '10489823465',
                                balance: 1223800.00,
                                currency: 'USD',
                                productName: 'Fremdwährungskonto'
                            }
                        ]
                    },
                    {
                        name: 'Max Mustermann'
                    },
                    {
                        name: 'Dr. Katharina Mustermann'
                    }
                ]
            };
            $scope.currentCustomer = 0; // TODO

            module1Service.setIsins(['DE00070000']);

        })
        .config(function ($httpProvider) {
            // Prevents IE to prevent caching XHR
            $httpProvider.defaults.headers.common['Cache-Control'] = 'no cache';
        })
        .controller('DemoCarouselController', ['$scope', function ($scope) {
            $scope.myInterval = 10000;
        }]);

}
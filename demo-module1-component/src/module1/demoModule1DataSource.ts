module demo.module1 {

    export class DemoModule1DataSource {
        private q:ng.IQService

        constructor($q:ng.IQService) {
            this.q = $q;
        }

        public getServerData(isins:Array<String>):any {
            return [
                {
                    isin: isins[0],
                    buy: 2,
                    sell: 5,
                    changeAbsolute: 1,
                    changeRelative: 30
                }
            ];
        }
    }
    ;


    angular.module('demo-module1-component')
        .service('demoModule1DataSource', DemoModule1DataSource);

}

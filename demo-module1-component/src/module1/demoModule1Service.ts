module demo.module1 {

    export class DemoModule1Service implements IDemoModule1Service {
        private ds:DemoModule1DataSource;
        private bestPricemodelList:Array<any>;
        private $scope:any; // TODO: do we need a typed scope here?
        constructor(demoModule1DataSource:DemoModule1DataSource) {
            this.ds = demoModule1DataSource;
        }

        public setIsins(isins:Array<String>):void {
            this.bestPricemodelList = this.ds.getServerData(isins);
        }

        public getModelList():Array<any> {
            return this.bestPricemodelList;
        }
    }
    ;

    angular.module('demo-module1-component')
        .service('demoModule1Service', DemoModule1Service);


}
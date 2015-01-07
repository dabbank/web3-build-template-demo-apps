
module demo.module1 {

export class DemoModule1Controller{
    private ds:DemoModule1DataSource;
    private $scope:any; // TODO: do we need a typed scope here?
    constructor( demoModule1DataSource:DemoModule1DataSource, $scope:any, demoModule1Service:DemoModule1Service ){
        this.ds = demoModule1DataSource;
        this.$scope = $scope;
        $scope.module1ModelList = demoModule1Service.getModelList();
    }
};

angular.module('demo-module1-component')
    .controller('demoModule1Controller', DemoModule1Controller );


}
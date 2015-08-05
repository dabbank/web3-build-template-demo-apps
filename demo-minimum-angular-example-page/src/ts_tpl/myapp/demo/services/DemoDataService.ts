module demo.demo.services {

    import IDemoModelResponse = company.demo.model.response.IDemoModelResponse;

    /**
     * backToTop Directive
     * @param  {Function} $anchorScroll
     * @description Ensure that the browser scrolls when the anchor is clicked
     */
    class DemoDataService implements IDemoDataService {

        private demoDataSource:IDemoDataSource;

        constructor(demoDataSource:IDemoDataSource) {
            this.demoDataSource = demoDataSource;
        }

        // return average of country
        public getServerData(id:string):ng.IHttpPromise<IDemoModelResponse> {
            return this.demoDataSource.fetchDemoData(id);
        }

        public getExtractedNumbers(toBeExtracted:IDemoModelResponse):number[] {
            //_.map(toBeExtracted, "amount");
            return null;
        }
//
        public calculateAverage(absoluteValues:number[]):number {
            //var result = _.reduce(toBeExtracted, function(){
            //
            //});
            return null;
        }

    }

    angular.module("demo-minimum-angular-example-page").service("demoDataService", DemoDataService);
}
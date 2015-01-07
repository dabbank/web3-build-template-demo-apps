describe("Test this", function () {


    beforeEach(function () {
        angular.mock.module("demo-bestprice-component");
    });


    describe("Test Some", function () {

        it("test in", function(){
            expect(true).toBe(true);
            debugger;
        });

        it("test initial data", angular.mock.inject(function (dabBestpriceDataSource){
            expect(dabBestpriceDataSource).toBeDefined();
            expect(dabBestpriceDataSource.fetchDemoData()).toEqual([{
                isin: 'DE_1',
                buy: 2,
                sell: 5,
                changeAbsolute: 1,
                changeRelative: 30
            }]);
        }));
    });
});

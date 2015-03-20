// <reference path="./IDemoDataService.d.ts" />
/// /// <reference path="./../../../../node_modules/web3-common-build-setup/ts_definitions/reference.d.ts" />
describe("how the DemoDataService works", function () {
    var demoDataService;
    beforeEach(function () {
        angular.mock.module("dab-demo-page");
        angular.mock.inject(function (demoDataService) {
            this.demoDataService = demoDataService;
        });
        //        module(function($provide) {
        //            $provide.value('version', 'overridden'); // override version here
        //        });
    });
    describe("how fetchDemoData works", function () {
        //it("should return the sum", angular.mock.inject(function (demoDataService, demoDataSource, demoModelResponseMock){
        it("test initial data", angular.mock.inject(function (demoDataSource, demoModelResponseMock) {
            // will get caught in the Chrome when opened the ChromeDevTools with F12
            // If using a debugger in general, you are not on TDD
            //debugger;
            //
            console.log(demoModelResponseMock);
            // Given
            var idToFetchData = "123";
            // When
            spyOn(demoDataSource, "fetchDemoData").and.returnValue("222");
            // Then
            expect(true).toBe(false);
            expect(demoDataSource.fetchDemoData).toBeDefined();
            expect(this.demoDataService).toBeDefined();
            expect(this.demoDataService.getServerData(idToFetchData)).toEqual("222");
            var userAccounts = [];
            ///...
            userAccounts.push();
        }));
    });
});
//declare module dab.demo.model.response {
/**
 * Example of a mock objects only used for tests
 * for easier refactoring
 */
// TODO to be typescriptified
var simple = [
    {
        "id": 123
    }
];
var multiple = [
    {
        "id": 2
    },
    {
        "id": 1
    }
];
var DemoModelResponseMocks = {
    simple: simple,
    multiple: multiple
};
angular.module("dab-demo-page").constant("demoModelResponseMock", DemoModelResponseMocks);
//# sourceMappingURL=tests.js.map
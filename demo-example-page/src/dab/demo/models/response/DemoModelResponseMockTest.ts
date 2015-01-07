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
//}
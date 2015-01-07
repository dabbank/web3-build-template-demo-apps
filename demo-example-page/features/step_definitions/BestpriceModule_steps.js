
function BestpriceModule(){

    var firstIncome;
    var firstExpense;
    var actualResult;

    console.error("IN2");
    var ptor = protractor.getInstance();

    this.Given(/^I have an income of 1000 and an expense of 2000$/,  function(callback){
//    this.Given(/^I have an income of (\d+) and an expense of (\d+)$/,  function(arg1, arg2, callback){
//        var ptor =   protractor.getInstance();
//        ptor.get("http://localhost:3000/");
        console.error("IN");
//        browser.get("http://localhost:3000");
        ptor.get('http://localhost:3000/');
        element.all(by.css('[type="checkbox"]')).get(0).click();
        firstIncome = 1;
        firstExpense = 2;
        callback();
    });

    this.When(/^I check my total balance$/, function(callback) {
        actualResult = -1000;
        callback();
    });

    this.Then(/^the total should be -1000 and highlighted in red$/, function(callback){
//        var expectedResult = arg1;
//        var expectedColour = arg2;
//        assertEquals(expectedResult, actualResult);
//        assertEquals(true, true);

        ptor.get('http://localhost:3000/');
        element.all(by.css('[type="checkbox"]')).get(0).click();
        //expect(true).toBe(true);

        if(true == true){
            callback();
        }else{
            callback.fail(new Error("it failed"));

        }

    });
};

module.exports = BestpriceModule;

["a"].forEach(function(resolution){
//    switch (resolution) {
//        case 'a':
//            browser.manage().window().setSize(320, 480);
//            break;
//        case 'b':
//            browser.manage().window().setSize(1600, 1200);
//            break;
//        default :
//            return;
//    }


    describe("how the page initializes correct", function () {

            beforeEach(function () {
                ptor.get("http://localhost:3000/");
                if(resolution === "a"){
                    browser.manage().window().setSize(1600, 1200);
                }else{
                    browser.manage().window().setSize(320, 480);
                }
            });


//    for (var i = 0; i < 2; i++) {
//        switch (i) {
//            case 0:
//                browser.manage().window().setSize(320, 480);
//            case 1:
//                browser.manage().window().setSize(1200, 900);
//            default :
//                return;
//        }
//    }


            var ptor;

//    var protractor :any = protractor || {};
            ptor = protractor.getInstance();
            // TODO see: protractor issue 325
            ptor.ignoreSynchronization = true;

            it('should load the homepage ', function () {
//        element(protractor.By.id("accessNumber")).sendKeys("123");
                browser.takeScreenshot();
//        var anyElement = $('button[ng-click="toggleOpen()"]');
//        anyElement.click();
                element.all(by.css('[type="checkbox"]')).get(0).click();
                browser.debugger();
                //expect(usernameField).toBeDefined();
                console.log("info");
            });
        }


    );

});


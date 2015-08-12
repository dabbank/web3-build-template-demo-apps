declare module demo.demo {
    interface IDemoDirectiveController {

        // public method with optional parameter 'reverted'
        sayHelloToConsole(text : string, reverted? : boolean) : void;

        // don't declare private methods
        // revertInput(text : string) : string;
    }
}
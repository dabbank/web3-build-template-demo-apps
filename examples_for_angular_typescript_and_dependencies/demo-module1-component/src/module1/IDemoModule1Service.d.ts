declare module demo.module1 {

    export interface IDemoModule1Service{
        getModelList():Array<any>;
        setIsins(isins: Array<String>):void;
    }
}

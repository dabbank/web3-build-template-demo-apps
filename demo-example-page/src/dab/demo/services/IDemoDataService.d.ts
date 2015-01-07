declare module dab.demo {

    import IDemoModel = dab.demo.model.response.IDemoModelResponse;

    interface IDemoDataService {

        getServerData(id : string) : IDemoModel;
        calculateAverage(absoluteValues : number[] ) : number;
    }
}
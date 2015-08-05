declare module demo.demo {

    import IDemoModelResponse = company.demo.model.response.IDemoModelResponse;

    interface IDemoDataService {

        getServerData(id : string) : ng.IHttpPromise<IDemoModelResponse>;
        calculateAverage(absoluteValues : number[] ) : number;
    }
}
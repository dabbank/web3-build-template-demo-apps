declare module dab.demo.services {

//    import IAccountType = dab.demo.model.request.IAccountType;
//    import IDemoModel = dab.demo.model.response.IDemoModelResponse;

    interface IDemoDataSource {
        fetchDemoData(id:string); //, accountType?IAccountType, isActive: boolean): IDemoModel;
    }
}
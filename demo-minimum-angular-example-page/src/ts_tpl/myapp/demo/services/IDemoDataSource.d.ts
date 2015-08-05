declare module demo.demo.services {

//    import IAccountType = demo.demo.model.request.IAccountType;
//    import IDemoModel = demo.demo.model.response.IDemoModelResponse;

    interface IDemoDataSource {
        fetchDemoData(id:string); //, accountType?IAccountType, isActive: boolean): IDemoModel;
    }
}
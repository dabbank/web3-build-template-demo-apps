declare module company.demo.model.response {
//
    interface IDemoModelResponse {
        id: string;
        accounts : IAccount[];
    }

    interface IAccount {
        name : string;
        id : number;
        metaInfo : any;
    }


}
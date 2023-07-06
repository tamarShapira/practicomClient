import Child from "./Child";

export default class Parent{
    constructor(public Id:number,public parentFirstName:string,public parentLastName:string,public parentId:string,
                public parentDOB:Date,public parentHMO:string,public parentSpecies:string,public children:Child[]){}
}
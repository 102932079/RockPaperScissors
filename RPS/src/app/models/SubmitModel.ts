// these are for submit request and respond interface/class
//same with api
export interface SubmitRequestModel {
    username: string;
    playerChoice: string;
}

//json property name attribute
export interface SubmitResponseModel {
    username: string;
    playerChoice: string;
    aIChoice: string;
    result: string;
}
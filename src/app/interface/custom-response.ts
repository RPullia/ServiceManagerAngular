import { Application } from "./application";

export interface CustomResponse{
    timeStamp: Date;
    statusCode: Number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: {applications?: Application[], application?: Application}
}
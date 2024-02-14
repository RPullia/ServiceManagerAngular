import { Status } from "../enum/status.enum"

export interface Application {
    id: number;
    ipAddress: string;
    portNumber: number;
    name: string;
    type: string;
    imageUrl: string;
    status: Status;
}
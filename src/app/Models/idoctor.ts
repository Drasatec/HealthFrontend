import { ISpecialty } from "./ispecialty";

export interface IDoctor {
    id: number;
    fullName: string;
    photo: string;
    special: [ISpecialty];
    
    
}

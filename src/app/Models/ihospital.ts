import { ISpecialty } from "./ispecialty";

export interface IHospital {
    id: number;
    name: string;
   special:[ISpecialty]

}

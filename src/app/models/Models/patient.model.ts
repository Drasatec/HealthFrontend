export class PatientProfileModel {
  FullName?:string;
  FullNameEn?:string;
  LangCode?:string;
  Address?:string;
  Gender?:string;
  BirthDate?: {
    year: number;
    month: number;
    day: number;
  };
  MaritalStatus?:string;
  NationalityId?:string;
  BloodType?:string;
  Religion?:string;
}

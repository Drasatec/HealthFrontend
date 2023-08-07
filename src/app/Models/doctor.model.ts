export class DoctorModel{

    doctorWorkPeriod: DoctorWorkPeriodModel =new DoctorWorkPeriodModel;
    doctor:DoctorInfoModel=new DoctorInfoModel;
}

export class TranslationModel{
  id:  number |null =null;
  fullName: string |null =null;
  headline:string |null =null;
  about: string |null =null;
  doctorId:  number |null =null;
  langCode: string |null =null;
}
export class DoctorInfoModel {
  id:  number |null =null;
  codeNumber: string |null =null;
  gender:  number |null =null;
  photo: string |null =null;
  workingHours: number |null =null;
  docStatus:  number |null =null;
  reason: string |null =null;
  isAppearanceOnSite: boolean=true;
  phoneNumber:string |null =null;
  phoneNumberAppearance:  boolean=true;
  visitPriceAppearance:  boolean=true;
  isDeleted: boolean=false;
  doctorsDegreeId:  number |null =null;
  nationalityId:  number |null =null;
  doctorTranslations: TranslationModel[]=[]
}
export class DoctorWorkPeriodModel{
  id: number |null =null;
  hospitalId: number |null =null;
  specialtyId: number |null =null;
  clinicId:  number |null =null;
  doctorId:  number |null =null;
  workingPeriodId:  number |null =null;
  onDay:  number |null =null;
  workingPeriod: string |null =null;
  hospital: string |null =null;
  clinic: string |null =null;
  doctor: string |null =null;
  dayName: string |null =null;
}


export class HospitalNamesModel {
  hospitalId:number | null =null;
  name:string | null =null;
}
export class DoctorNamesModel {
  doctorId:number | null =null;
  fullName:string | null =null;
  headline:string | null =null;
  about:string | null =null;
}
export class SpecialNamesModel {
  medicalSpecialtyId:number | null =null;
  name:string | null =null;
}

export class GenderModel{
  genderNumber:number |null=null;
  genderName:string | null =null;
}

export class DegreeModel{
  degreeName:string | null =null;
doctorDegreeId:number |null=null;
}

export class HospitalModel {

  id:number=0 ;
  photo:  string='';
  codeNumber:  string='';
  email:  string='';
  whatsAppNumber:  string='';
  isDeleted: boolean=false;
  longitude:number=0 ;
  latitude: number=0 ;
  phoneNumbers: PhoneModel[]=[];
  hospitalTrasnlations: TranslationHospitalModel[]=[]
}
export class PhoneModel {
    id: number=0 ;
    telephoneNumber:  string='';
    hospitalId: number=0 ;
}
export class TranslationHospitalModel{
  id: number=0 ;
  name:  string='';
  address:  string='';
  description: string='';
  hospitalId:number=0 ;
  langCode: string='';
}
export class HospitalFeatureModel {
  id: number=0 ;
  photo: string='';
  createOn: string='';
  hospitalId: number=0 ;
  hospitalFeatureTranslations: FeatureTranslation[]=[]
}
export class FeatureTranslation{
  id: number=0 ;
  name: string='';
  description:string='';
  featureId: number=0 ;
  langCode: string='';
}

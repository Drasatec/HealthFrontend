import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DoctorNamesModel, GenderModel, HospitalNamesModel, NationalityModel, SpecialNamesModel, VisitTypeModel } from '../Models/names.model';
import { environment } from 'src/environment/environment.prod';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  baseURL: string = environment.apiUrl;
  lang:string =''
constructor(private http: HttpClient,private translateservice:TranslateService) {
this.lang=this.translateservice.currentLang
}

getAllHospitalsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Hospital/names?lang=${this.lang}`;
    return this.http.get<HospitalNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllBuildingsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}building/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllFloorssNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Floor/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllRoomsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Room/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllClinicsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Clinic/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllSpecialNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}MedicalSpecialty/names?lang=${this.lang}`;
    return this.http.get<SpecialNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllRoomTypesNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}RoomType/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllNationalityNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Nationality/names?lang=${this.lang}`;
    return this.http.get<NationalityModel[]>(url,{ params: fetchCriteria });
  }
  getAllWorkingPeriodNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}WorkingPeriod/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllVisitTypesNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}TypesVisit/names?lang=${this.lang}`;
    return this.http.get<VisitTypeModel[]>(url,{ params: fetchCriteria });
  }
  getAllPriceCategoryNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}PriceCategory/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllWorkWeek(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Weekday/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllDegrees(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}DoctorsDegree/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllStatus(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}EmployeeStatus/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllGender(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}HumanGender/names?lang=${this.lang}`;
    return this.http.get<GenderModel[]>(url,{ params: fetchCriteria });
  }
  getAllCurrency(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Currency/all`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllSsn(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Ssntype/all`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllDoctors(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Doctor/names?lang=${this.lang}`;
    return this.http.get<DoctorNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllPatients(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Patient/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllBookingStatus(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}BookingStatus/names?lang=${this.lang}`;
    return this.http.get(url,{ params: fetchCriteria });
  }
}

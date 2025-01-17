import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environment/environment.prod';
import { DoctorNamesModel, GenderModel, HospitalNamesModel, NationalityModel, SpecialNamesModel, VisitTypeModel } from '../Models/names.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  baseURL: string = environment.apiUrl;

constructor(private http: HttpClient) {}

getAllHospitalsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Hospital/names?lang=ar`;
    return this.http.get<HospitalNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllBuildingsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}building/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllFloorssNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Floor/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllRoomsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Room/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllClinicsNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Clinic/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllSpecialNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}MedicalSpecialty/names?lang=ar`;
    return this.http.get<SpecialNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllRoomTypesNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}RoomType/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllNationalityNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Nationality/names?lang=ar`;
    return this.http.get<NationalityModel[]>(url,{ params: fetchCriteria });
  }
  getAllWorkingPeriodNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}WorkingPeriod/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllVisitTypesNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}TypesVisit/names?lang=ar`;
    return this.http.get<VisitTypeModel[]>(url,{ params: fetchCriteria });
  }
  getAllPriceCategoryNames(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}PriceCategory/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllWorkWeek(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Weekday/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllDegrees(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}DoctorsDegree/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllStatus(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}EmployeeStatus/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllGender(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}HumanGender/names?lang=ar`;
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
    const url = `${this.baseURL}Doctor/names?lang=ar`;
    return this.http.get<DoctorNamesModel[]>(url,{ params: fetchCriteria });
  }
  getAllPatients(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}Patient/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
  getAllBookingStatus(fetchCriteria?: any): Observable<any> {
    const url = `${this.baseURL}BookingStatus/names?lang=ar`;
    return this.http.get(url,{ params: fetchCriteria });
  }
}

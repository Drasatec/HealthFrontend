import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { DoctorInfoModel, DoctorModel, DoctorVisitModel, DoctorWorkPeriodModel } from '../Models/doctor.model';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}Doctor/find-doctor?lang=ar`;
      return this.http.get<HospitalNamesModel>(url,{ params: fetchCriteria });
    }
    getWorkPeriodDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}DoctorWorkPeriod?lang=ar`;
      return this.http.get<DoctorWorkPeriodModel[]>(url,{ params: fetchCriteria });
    }
    getVisitDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}DoctorVisitPrice?lang=ar`;
      return this.http.get<DoctorVisitModel[]>(url,{ params: fetchCriteria });
    }
    getDoctorById(id:number): Observable<any> {
      const url = `${this.baseURL}Doctor?lang=ar&id=${id}`;
      return this.http.get<DoctorInfoModel>(url);
    }
  }

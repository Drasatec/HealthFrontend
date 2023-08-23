import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { DoctorInfoModel, DoctorModel, DoctorVisitModel, DoctorWorkPeriodModel } from '../Models/doctor.model';
import { environment } from 'src/environment/environment.prod';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseURL: string = environment.apiUrl;

  lang:string=''
  constructor(private http: HttpClient,private translateService:TranslateService) {
    this.lang=this.translateService.currentLang
  }
  getAllDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}Doctor/find-doctor?lang=${this.lang}`;
      return this.http.get<HospitalNamesModel>(url,{ params: fetchCriteria });
    }
    getWorkPeriodDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}DoctorWorkPeriod?lang=${this.lang}`;
      return this.http.get<DoctorWorkPeriodModel[]>(url,{ params: fetchCriteria });
    }
    getVisitDoctor(fetchCriteria?: any): Observable<any> {
      const url = `${this.baseURL}DoctorVisitPrice?lang=${this.lang}`;
      return this.http.get<DoctorVisitModel[]>(url,{ params: fetchCriteria });
    }
    getDoctorById(id:number): Observable<any> {
      const url = `${this.baseURL}Doctor?lang=${this.lang}&id=${id}`;
      return this.http.get<DoctorInfoModel>(url);
    }
  }

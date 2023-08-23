import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { HospitalFeatureModel, HospitalModel } from '../Models/hospital.model';
import { environment } from 'src/environment/environment.prod';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseURL: string = environment.apiUrl;
  lang:string=''
  constructor(private http: HttpClient,private translateService:TranslateService) {
    this.lang=this.translateService.currentLang
  }

  getHospitalById(id:number): Observable<any> {
    const url = `${this.baseURL}Hospital?lang=${this.lang}&id=${id}`;
    return this.http.get<HospitalModel[]>(url);
  }
  getHospitalFeatures(id:number): Observable<any> {
    const url = `${this.baseURL}HospitalFeature/all?lang=${this.lang}&hosId=${id}`;
    return this.http.get<HospitalFeatureModel[]>(url);
  }
  sendHospitalContact(body:any): Observable<any> {
    const url = `${this.baseURL}ContactForm/add`;
    return this.http.post(url,body);
  }
  getHospitalPromotion(): Observable<any> {
    const url = `${this.baseURL}Promotion/all?lang=${this.lang}`;
    return this.http.get(url);
  }
  }

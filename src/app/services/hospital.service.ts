import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { environment } from '../environment/environment.prod';
import { HospitalFeatureModel, HospitalModel } from '../Models/hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHospitalById(id:number): Observable<any> {
    const url = `${this.baseURL}Hospital?lang=ar&id=${id}`;
    return this.http.get<HospitalModel[]>(url);
  }
  getHospitalFeatures(id:number): Observable<any> {
    const url = `${this.baseURL}HospitalFeature/all?lang=ar&hosId=${id}`;
    return this.http.get<HospitalFeatureModel[]>(url);
  }
  sendHospitalContact(body:any): Observable<any> {
    const url = `${this.baseURL}ContactForm/add`;
    return this.http.post(url,body);
  }
  }

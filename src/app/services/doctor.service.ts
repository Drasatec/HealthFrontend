import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { environment } from '../environment/environment.prod';

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
  }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  register(body:any,verification:string): Observable<any> {
    const url = `${this.baseURL}Authenticate/reqister?verification=${verification}`;
    return this.http.post(url,body);
  }
  login(body:any): Observable<any> {
    const url = `${this.baseURL}Authenticate/login`;
    return this.http.post(url,body);
  }
  confirmEmail(body:any): Observable<any> {
    const url = `${this.baseURL}Authenticate/verification-email`;
    return this.http.post(url,body);
  }
  confirmPhone(body:any): Observable<any> {
    const url = `${this.baseURL}Authenticate/verification-sms`;
    return this.http.post(url,body);
  }
  addProfile(body:any): Observable<any> {
    const url = `${this.baseURL}Patient/add-patient-data`;
    return this.http.post(url,body);
  }
}

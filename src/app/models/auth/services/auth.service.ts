import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';
import { AuthenticateResponse } from '../../Models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL: string = environment.apiUrl;
  private storageKey = '~CurrentUser~';

  constructor(private http: HttpClient,private router: Router) {}

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
  logOut() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }
  saveLoginToken(data:AuthenticateResponse){
    localStorage.setItem(this.storageKey, JSON.stringify(data.token));
  }
  get currentUser(): AuthenticateResponse | null {
    return JSON.parse(localStorage.getItem(this.storageKey) || 'null');
  }
}

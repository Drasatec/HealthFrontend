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
  private userId =''
  private patientId=''
  redirectUrl:any
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
    console.log(data)
    localStorage.setItem(this.storageKey, JSON.stringify(data.token));
    localStorage.setItem(this.userId, JSON.stringify(data.userId));
    localStorage.setItem(this.patientId, JSON.stringify(data.patientId));


    console.log(localStorage.getItem(this.storageKey))
    console.log(JSON.parse(localStorage.getItem(this.storageKey) || 'null'))
  }
  get currentUser(): AuthenticateResponse | null {
    return JSON.parse(localStorage.getItem(this.storageKey) || 'null');
  }
  get currentUserId():string  {
    return JSON.parse(localStorage.getItem(this.userId) || 'null');
  }
  get currentPatientId():string  {
    return JSON.parse(localStorage.getItem(this.patientId) || 'null');
  }
  setRedirectUrl(url: any) {
    this.redirectUrl = url;
  }
  getRedirectUrl():any|null {
    const url = this.redirectUrl;
    this.redirectUrl = null; // Clear the stored URL
    return url;
  }
  isAuthenticated(){
    // console.log(localStorage.getItem(this.storageKey)? true :false);
    let auth = this.currentUser
    if(auth){
      return true
    }else {
      return false
    }
  }
  getConfirmationMethod(): Observable<any> {
    const url = `${this.baseURL}ConfirmationOption/all`;
    return this.http.get(url);
  }
  getAllLanguages(): Observable<any> {
    const url = `${this.baseURL}Language/all`;
    return this.http.get(url);
  }
}

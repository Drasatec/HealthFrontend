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
}

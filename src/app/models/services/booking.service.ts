import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { environment } from 'src/environment/environment.prod';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseURL: string = environment.apiUrl;
lang:string=''
  constructor(private http: HttpClient,private translateService:TranslateService) {
    this.lang=this.translateService.currentLang
    console.log(this.lang)
  }

  addBooking(clinic:number,body:any): Observable<any> {
      const url = `${this.baseURL}Booking/add?clinicId=${clinic}&lang=${this.lang}`;
      return this.http.post(url,body);
    }
  getBooking(fetch:any):Observable<any>{
    const url = `${this.baseURL}Booking?lang=${this.lang}`;
      return this.http.get(url,{params:fetch});
  }
  statusBooking(id:number): Observable<any> {
    const url = `${this.baseURL}Booking/edit-status?bookingId=${id}&statusId=3`;
    return this.http.put(url,'');
  }
  getPatient(id:any):Observable<any>{
    const url = `${this.baseURL}Patient?id=${id}&lang=${this.lang}`;
      return this.http.get(url);
  }
}

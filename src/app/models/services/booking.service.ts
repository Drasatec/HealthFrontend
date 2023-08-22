import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HospitalNamesModel } from '../Models/names.model';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseURL: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addBooking(clinic:number,body:any): Observable<any> {
      const url = `${this.baseURL}Booking/add?clinicId=${clinic}&lang=ar`;
      return this.http.post(url,body);
    }
  getBooking(fetch:any):Observable<any>{
    const url = `${this.baseURL}Booking?lang=ar`;
      return this.http.get(url,{params:fetch});
  }
  statusBooking(id:number): Observable<any> {
    const url = `${this.baseURL}Booking/edit-status?bookingId=${id}&statusId=3`;
    return this.http.put(url,'');
  }
  getPatient(id:any):Observable<any>{
    const url = `${this.baseURL}Patient?id=${id}&lang=ar`;
      return this.http.get(url);
  }
}

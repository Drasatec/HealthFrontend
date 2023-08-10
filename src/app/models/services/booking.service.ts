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

  addBooking(body:any): Observable<any> {
      const url = `${this.baseURL}Booking/add?clinicId=${body.ClinicId}&lang=ar`;
      return this.http.post(url,body);
    }
}

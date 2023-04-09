import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reservation-agree-by-hospital',
  templateUrl: './reservation-agree-by-hospital.component.html',
  styleUrls: ['./reservation-agree-by-hospital.component.css']
})
export class ReservationAgreeByHospitalComponent {
  faLocationDot = faLocationDot;
  header: string = "";
  background: string = "";

  constructor(private router: Router) {
    
    
  }
  ngOnInit() {
    this.checkUrl();
  } 
  checkUrl() {
    if (this.router.url == "/agree-hospital") {
      this.header = "تم تأكيد الحجز"
      console.log(this.router.url);
      this.background = "rgb(43, 203, 102)";
    }
    else if (this.router.url == "/agree-client") {
      this.header = "تمت تأكيد الحجز   "
      console.log(this.router.url);
      this.background = "rgb(43, 203, 102);";
    }
    else if (this.router.url == "/disagree-client") {
      this.header = " الحجز غير مناسب "
      console.log(this.router.url);
      this.background = "red";
    }
    else if (this.router.url == "/disagree-hospital") {
      this.header = " الحجز غير مناسب   "
      console.log(this.router.url);
      this.background = "rgb(239, 165, 63)";
    }
    
  }
  
}

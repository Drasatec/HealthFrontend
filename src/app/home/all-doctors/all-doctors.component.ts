import { Component } from '@angular/core';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.css']
})
export class AllDoctorsComponent {
  doctors: any[] = [];
  constructor() {
    this.doctors = [
      {id:1 ,src:"../../../assets/Images/homeImages/doctor.jpg", name:'أحمد على', specialty:"جراحة الفم والاسنان "    },
      {id:2 ,src:"../../../assets/Images/homeImages/doctor.jpg", name:' رامى فريد', specialty:" قلب وأوعية دموية "    },
      {id:3 ,src:"../../../assets/Images/homeImages/doctor.jpg", name:'حسن محمد', specialty:"  صدر وأمراض تنفس "    },
    ]
  }

}

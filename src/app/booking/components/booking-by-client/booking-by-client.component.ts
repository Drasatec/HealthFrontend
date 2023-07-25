import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-by-client',
  templateUrl: './booking-by-client.component.html',
  styleUrls: ['./booking-by-client.component.css']
})
export class BookingByClientComponent {
  faLocationDot = faLocationDot;
  searchInput: any;
  member: string = "";
  patientList=[
  { id: 1, name: "محمد على ", groupID: 2 },
  { id: 2, name: "رامى على ",groupID:1  },
  { id: 3, name: " محمد رامى  ",groupID:2  },
  { id: 4, name: "حسن أحمد " ,groupID:2 },
  { id: 5, name: "محمد على " ,groupID:2 },
  { id: 6, name: "على  على ",groupID:2  },
  {id:  7, name:"محسن  على ",groupID:2 },
  { id: 8, name: "حامد على ",groupID:2  },
  { id: 9, name: "ليلى على ", groupID: 2 }
  ];
  patientFilter=[


  ]
  constructor() {

  }
  ngOnInit() {

// this.search("")
  }
  // search(key: any) {
  //   console.log(key);
  //   this.patientFilter=this.patientList.filter(i=>i.name.indexOf(key)!=-1)
  //   console.log(this.patientFilter);

  // }


}

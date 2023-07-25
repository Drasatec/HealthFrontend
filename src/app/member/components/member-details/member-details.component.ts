import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { IPatient } from 'src/app/Models/ipatient';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent {

  faLocationDot = faLocationDot;
  patientId: number = 0;
  patient = {
    id: 0,
    name: '',
    groupID: 0
  };
  patientList=[
    { id: 1, name: "محمد على ", groupID: 2 },
    { id: 2, name: "رامى على ",groupID:1  },
    { id: 3, name: " محمد رامى  ",groupID:2  },
    { id: 4, name: "حسن أحمد " ,groupID:2 },
    { id: 5, name: "محمد على " ,groupID:2 },
    { id: 6, name: "على  على ",groupID:2  },
    { id: 7, name:"محسن  على ",groupID:2 },
    { id: 8, name: "حامد على ",groupID:2  },
    { id: 9, name: "ليلى على ", groupID: 2 }
  ];
  constructor(private activeParam:ActivatedRoute) {

  }
  ngOnInit() {
    this.getActiveParam()
  }
  getActiveParam() {
    this.activeParam.params.subscribe((res:any) => {
      console.log(res);
      this.patientId = res.id;
     this.getPatientById()
    })
  }

  getPatientById() {
    let selectedPatient= this.patientList.find(  i=>i.id == this.patientId )
    console.log(selectedPatient);
    // this.patient = selectedPatient;
    console.log(this.patient);


  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLocationDot, faStar  ,faDollarSign} from '@fortawesome/free-solid-svg-icons';
// import { IDoctor } from 'src/app/Models/names.model';

@Component({
  selector: 'app-special-card-doctor',
  templateUrl: './special-card-doctor.component.html',
  styleUrls: ['./special-card-doctor.component.css']
})
export class SpecialCardDoctorComponent {

  faStar = faStar;
  faLocationDot = faLocationDot;
  faDollarSign = faDollarSign;

  doctorId: number = 0;
  doctor = {
    id: 0,
    fullName: '',
    photo: '',
    specialty: ''
  }

  doctorList= [
    { id: 1, fullName: 'أحمد على', photo: "../../../assets/Images/homeImages/doctor.jpg",  special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    {id:2 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:' رامى فريد',   special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    {id:3 ,photo:"../../../assets/Images/homeImages/doctor.jpg", fullName:'حسن محمد', special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },];


    constructor(private activeParam:ActivatedRoute) {

    }
    ngOnInit() {
      this.getActiveParam()
    }
    getActiveParam() {
      this.activeParam.params.subscribe((res:any) => {
        console.log(res);
        this.doctorId = res.id;
       this.getDoctorById()
      })
    }


    getDoctorById() {
      let selectedDoctor= this.doctorList.find(  i=>i.id == this.doctorId )
      console.log(selectedDoctor);
      // this.doctor = selectedDoctor;
      console.log(this.doctor);


    }

}

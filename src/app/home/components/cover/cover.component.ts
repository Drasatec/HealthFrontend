import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  imgList: any[] = [];
  activeSlideIndex = 0;

  constructor(private route:Router) {
    this.imgList = [
      {id:1,path:"/assets/Images/homeImages/cover1.jpg"},
      {id:1,path:"/assets/Images/homeImages/cover2.jpg"},
      {id:1,path:"/assets/Images/homeImages/cover3.jpg"},
    ]
  }
  filterChange(e:any){
    console.log(e)
    this.route.navigate(['doctor/doctors/',e.hosId,e.specialtyId,e.docId])
  }
}

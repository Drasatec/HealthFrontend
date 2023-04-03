import { Component } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent {
  imgList: any[] = [];
  constructor() {
    this.imgList = [
      {id:1 ,path:"../../../assets/Images/homeImages/cover1.jpg"},
      {id:2 ,path:"../../../assets/Images/homeImages/cover2.jpg"},
      {id:3 ,path:"../../../assets/Images/homeImages/cover3.jpg"},
    ]
  }
}

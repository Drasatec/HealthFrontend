import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-clients-page',
  templateUrl: './booking-clients-page.component.html',
  styleUrls: ['./booking-clients-page.component.css']
})
export class BookingClientsPageComponent {
  menuLists = ['القادمة', 'الماضية', 'المطلوبة']
  selectedList: any;
  
  constructor() {
    
  }
  ngOnInit() {
    this.selectedList=this.menuLists[0]
  }
  openMenuList(menuList:any) {
    this.selectedList = menuList; 
  }
}

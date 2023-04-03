import { Component } from '@angular/core';


@Component({
  selector: 'app-booking-clients-or-patinets-page',
  templateUrl: './booking-clients-or-patinets-page.component.html',
  styleUrls: ['./booking-clients-or-patinets-page.component.css']
})
export class BookingClientsOrPatinetsPageComponent {

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

import { Component } from '@angular/core';
import { faCirclePlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  faCircleUser = faCircleUser;
  faCirclePlus = faCirclePlus;
  member: string = "";
  members: any[] = [];
  constructor() {
    this.members = [
      { id: 1, name: "محمد على " }, 
      { id: 2, name: "رامى على " }, 
      { id: 3, name: " محمد رامى  " }, 
      { id: 4, name: "حسن أحمد " }, 
      { id: 5, name: "محمد على " }, 
      { id: 6, name: "على  على " }, 
      {id:7, name:"محسن  على "}, 
      { id: 8, name: "حامد على " }, 
      {id:9, name:"ليلى على "}, 
     ]
  }

  
}

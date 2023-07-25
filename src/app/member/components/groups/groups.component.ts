// import { IGroups } from '../../../Models/igroups';
import { Component } from '@angular/core';
import { faCirclePlus, faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import { IPatient } from 'src/app/Models/ipatient';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  faCircleUser = faCircleUser;
  faCirclePlus = faCirclePlus;

  searchInput: any;
  member: string = '';
  patientList = [
    { id: 1, name: 'محمد على ', groupID: 1 },
    { id: 2, name: 'رامى على ', groupID: 1 },
    { id: 3, name: ' محمد رامى  ', groupID: 1 },
    { id: 4, name: 'حسن أحمد ', groupID: 2 },
    { id: 5, name: 'محمد على ', groupID: 2 },
    { id: 6, name: 'على  على ', groupID: 2 },
    { id: 7, name: 'محسن  على ', groupID: 3 },
    { id: 8, name: 'حامد على ', groupID: 3 },
    { id: 9, name: 'ليلى على ', groupID: 3 },
  ];
  groupList= [
    { id: 1, name: 'الكل' },
    { id: 2, name: 'المهندسين' },
    { id: 3, name: 'المبرمجين' },
    { id: 4, name: 'العمال' },
    { id: 5, name: 'المحاسبين' },
  ];

  patientFilter= [];
  constructor() {}
  ngOnInit() {
    this.search('');
  }
  search(key: any) {
    console.log(key);
    // this.patientFilter = this.patientList.filter(
    //   (i) => i.name.indexOf(key) != -1
    // );
    console.log(this.patientFilter);
  }

  searchByBtn() {
    this.search(this.searchInput);
  }
  groupInput:string=''
  addMember() {
    this.groupList.push({id:10,name:this.groupInput})
  }
}


import { ISpecialty } from './../../Models/ispecialty';
import { IHospital } from './../../Models/ihospital';
import { IDoctor } from './../../Models/idoctor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchInput: string = "";

  hospitalList: IHospital[] = [
    { id: 1, name: ' مستشفى الرحمة ' ,special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}]},
    { id: 2, name: '   مستشفى القدس  ' ,special: [{id: 1, name: "قلب وأوردة ",hospitalId:3}]},
    { id: 3, name: ' مستشفى السلام ',special: [{id: 1, name: "قلب وأوردة ",hospitalId:3}] },
    { id: 4, name: 'مستشفى القادسية ',special: [{id: 1, name: "قلب وأوردة ",hospitalId:1}]},
    { id: 5, name: ' مستشفى الصفوة  ' ,special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    
  ];
  spialtiesList: ISpecialty[] = [
    { id: 1, name: 'جراحة عامة ', hospitalId: 1 },
    { id: 2, name: ' مخ وأعصاب ', hospitalId: 5 },
    { id: 3, name: ' أنف وأذن ', hospitalId: 1 },
    { id: 4, name: ' باطنة  ', hospitalId: 4 },
    { id: 5, name: 'قلب وأوردة  ', hospitalId: 2 },
    { id: 5, name: 'نساء وتوليد  ', hospitalId: 2 },
    { id: 6, name: 'نساء وتوليد  ', hospitalId: 3},
    { id: 7, name: 'جراحة أوردة ', hospitalId: 3 },
    { id: 6, name: 'نساء وتوليد  ', hospitalId: 3},
    { id: 7, name: 'جراحة أوردة ', hospitalId: 3 },
  ];
  doctors: IDoctor[] = [
    { id: 1, fullName: 'محمد على ', photo: "", special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    { id: 2, fullName: '  أحمد محسن ',photo:"" , special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}]  },
    { id: 2, fullName: 'راندا  علاء ', photo:"" , special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    { id: 3, fullName: 'سما محمد ', photo: "",  special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    { id: 2, fullName: '  أحمد محسن ',photo:"" ,  special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    { id: 2, fullName: 'راندا  علاء ', photo:"" , special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] } ,
    { id: 3, fullName: 'سما محمد ', photo: "", special: [{ id: 1, name: "قلب وأوردة ", hospitalId: 2 }] } ,
    { id: 2, fullName: 'راندا  علاء ', photo:"" , special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
    { id: 3, fullName: 'سما محمد ', photo:"" , special: [{id: 1, name: "قلب وأوردة ",hospitalId:2}] },
  ];
  hospitalFilter: IHospital[] = [];
  spialtiesFilter: ISpecialty[] = [];
  ngOnInit() {
    this.searchHospital('');
    this.searchSpecialty('');
  }

  selectHospital(id: any) {
    this.spialtiesList = this.spialtiesList.filter((i) => i.hospitalId == id);
    console.log(id, this.hospitalList);
  }
  selectSpecial(special: any) {
  
    console.log(special);
  }

  searchHospital(key: any) {
    console.log(key);
    this.hospitalFilter = this.hospitalList.filter(
      (i) => i.name.indexOf(key) != -1
    );
    console.log(this.hospitalFilter);
  }

  searchSpecialty(key: any) {
    console.log(key);
    this.spialtiesFilter = this.spialtiesList.filter(
      (i) => i.name.indexOf(key) != -1
    );
    console.log(this.spialtiesFilter);
  }
}
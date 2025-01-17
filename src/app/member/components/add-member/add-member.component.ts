import { Router } from '@angular/router';
import { Component } from '@angular/core';
// import { IGroups } from 'src/app/Models/igroups';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {
  faCirclePlus = faCirclePlus;
addGroupFlag:boolean=false

  header: string = "";
  groupList = [
    { id: 1, name: "الكل" },
    { id: 2, name: "المهندسين"},
    { id: 3, name: "المبرمجين"},
    {id: 4, name: "العمال"},
    { id: 5, name: "المحاسبين" },

  ]
constructor(private router:Router){

}
ngOnInit() {
  this.checkUrl();
}
  checkUrl() {
    if (this.router.url == "/add-member") {
      this.header = "  اضافة مشترك";

      console.log(this.router.url);
    }
    else if (this.router.url == "/update-member") {
       this.header = "تعديل بيانات المشترك";
       console.log(this.router.url);
    }
  }
  addGroup() {
    this.addGroupFlag = true
    console.log(this.addGroupFlag);

  }

}

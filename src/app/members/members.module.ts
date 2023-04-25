import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members.component';
import { FilterMembersComponent } from './filter-members/filter-members.component';
import { GroupsComponent } from './groups/groups.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import {MatInputModule} from '@angular/material/input'



@NgModule({
  declarations: [
    MembersComponent,
    FilterMembersComponent,
    GroupsComponent,
    MemberDetailsComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule  
  ],
  exports:[AddMemberComponent]
})
export class MembersModule { }

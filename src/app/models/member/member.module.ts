import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { FilterMembersComponent } from './components/filter-members/filter-members.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MemberComponent,
    FilterMembersComponent,
    GroupsComponent,
    MemberDetailsComponent,
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule
  ]
})
export class MemberModule { }

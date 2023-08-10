import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';

const routes: Routes = [
  { path: '', component: MemberComponent },

  {
    path: 'members',
    component: MemberComponent,
  },
  {
    path: 'member-details',
    component: MemberDetailsComponent,
  },
  {
    path: 'member-details/:id',
    component: MemberDetailsComponent,
  },
  {
    path: 'add-member',
    component:  AddMemberComponent,
  },

  {
    path:'update-member',
    component: AddMemberComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }

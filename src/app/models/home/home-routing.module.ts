import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AllSpecialtyComponent } from './components/all-specialty/all-specialty.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'special', component: AllSpecialtyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

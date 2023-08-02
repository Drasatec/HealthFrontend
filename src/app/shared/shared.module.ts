import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { DebounceInputChangeDirective } from '../directives/input-change-debounce.directive';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import {MatPaginatorModule} from '@angular/material/paginator';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const Modules=[
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  FontAwesomeModule,
  NgxPaginationModule,
  MatTabsModule,
  CarouselModule,
  MatFormFieldModule,
  MatSelectModule,
  TooltipModule,
  RouterModule,
  MatTabsModule,
  MatInputModule,
  NgSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatPaginatorModule,
  BsDropdownModule,
  MatCardModule,
  MatIconModule
]
const components=[
  SearchComponent,
  PaginationComponent,
  NavbarComponent,
  FooterComponent,
  DebounceInputChangeDirective,
  BreadcrumbComponent
]
@NgModule({
  declarations: [
  ...components
  ],
  imports: [
    ...Modules
  ],
  exports:[
    ...Modules,
    ...components
  ]
})
export class SharedModule { }

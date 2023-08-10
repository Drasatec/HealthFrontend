import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    AboutInfoComponent
  ],
  imports: [
    AboutUsRoutingModule,
    SharedModule,


  ]
})
export class AboutUsModule { }

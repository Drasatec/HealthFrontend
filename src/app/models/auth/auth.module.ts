import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ConfirmMethodComponent } from './components/confirm-method/confirm-method.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegistrationComponent,
    LoginComponent,
    ConfirmMethodComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,

  ]
})
export class AuthModule { }

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form=new FormGroup({
    email:  new FormControl ('',[Validators.required,Validators.email]),
    password: new FormControl ('',[Validators.required,Validators.minLength(8)]),
  }
  )

  constructor(private authService:AuthService,private snackBar: MatSnackBar,
    private router:Router
    ){}
  save(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe(
        (res)=>{
          if(res.success){
            this.snackBar.open("تم الدخول بنجاح ", "success", {
              duration: 5000,
              panelClass: 'success'
            });
          }else {
            this.snackBar.open("الايميل او الباسورد خاطئة", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }

        },(error)=>{
          this.snackBar.open("الايميل او الباسورد خاطيء", "error", {
            duration: 5000,
            panelClass: 'error'
          });
        }
      )
    }
  }
}

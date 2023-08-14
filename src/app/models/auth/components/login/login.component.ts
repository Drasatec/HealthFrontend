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
    email:  new FormControl ('fatma2@gmail.com',[Validators.required,Validators.email]),
    password: new FormControl ('12345678',[Validators.required,Validators.minLength(8)]),
  }
  )
  redirectUrl:string=''
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
            this.authService.saveLoginToken(res)
            console.log(this.authService.isAuthenticated())
            const redirectUrl = this.authService.getRedirectUrl();
            console.log(redirectUrl)
            if (redirectUrl) {
              // Navigate to the stored redirect URL
              this.router.navigate(['/booking/booking-by-patient'], { queryParams: { data: redirectUrl } });

            } else {
              // Navigate to the default page after login
              this.router.navigate(['/']);
            }
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

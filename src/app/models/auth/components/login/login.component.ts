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
    email:  new FormControl ('ff@gmail.com',[Validators.required,Validators.email]),
    password: new FormControl ('12345678',[Validators.required,Validators.minLength(8)]),
  }
  )
  redirectUrl:string=''
  constructor(private authService:AuthService,private snackBar: MatSnackBar,
    private router:Router
    ){}
    loading=false
  save(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.loading=true
      this.authService.login(this.form.value).subscribe({
        next:res=>{
          console.log("res",res)
          if(res.success){
            this.loading=false
            this.snackBar.open("تم الدخول بنجاح ", "success", {
              duration: 5000,
              panelClass: 'success'
            });
            this.authService.saveLoginToken(res)
            console.log(this.authService.isAuthenticated())
            const redirectUrl = this.authService.getRedirectUrl();
            console.log(redirectUrl)
            if(res.isCompletData){
              if (redirectUrl) {
                // Navigate to the stored redirect URL
                this.router.navigate(['/booking/booking-by-patient'], { queryParams: { data: redirectUrl } });
  
              } else {
                // Navigate to the default page after login
                this.router.navigate(['/']);
              }
            }else{
              this.router.navigate(['/auth/profile',res.userId])
            }
            
          }else {
          console.log("res",res)

            this.loading=false
            this.snackBar.open("الايميل او الباسورد خاطئة", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }

        },error:err=>{
          this.loading=false
          this.snackBar.open("الايميل او الباسورد خاطيء", "error", {
            duration: 5000,
            panelClass: 'error'
          });
        }
    })
    }
  }
}

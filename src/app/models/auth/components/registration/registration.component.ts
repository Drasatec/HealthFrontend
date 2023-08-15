import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form=new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email:  new FormControl ('',[Validators.required,Validators.email]),
    password: new FormControl ('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl ('',[Validators.required]),
    phoneNumber: new FormControl('',[Validators.required])
  },{
    validators: this.passwordMatchValidator()
  }
  )

  constructor(private authService:AuthService,private snackBar: MatSnackBar,
    private router:Router
    ){}
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
       const password = control.get('password')?.value;
       const confirmPassword = control.get('confirmPassword')?.value;
       console.log('Password:', password);
       console.log('Confirm Password:', confirmPassword);

       const isMatch = password === confirmPassword;
       console.log('Passwords Match:', isMatch);

       return isMatch ? null : { passwordMismatch: true };
    };
 }
 confirmMethod:string="null"
  save(){
    this.form.markAllAsTouched();
    this.confirmMethod = "null"
    if(this.form.valid){
      let data = this.form.value
      this.form.patchValue({
        phoneNumber:'+2' + data.phoneNumber
      })
      this.authService.register(this.form.value,this.confirmMethod).subscribe(
        (res)=>{
          if(res.success){
            if(this.confirmMethod !== 'null'){
              this.snackBar.open(this.confirmMethod+"تم التسجيل بنجاح , من فضلك تحقق من ", "success", {
                duration: 5000,
                panelClass: 'success'
              });
              let data=this.confirmMethod === 'email'? this.form.value.email : this.form.value.phoneNumber
              this.router.navigate(['/auth/confirm-method',this.confirmMethod,data])
            }else {
              console.log("null")
              this.snackBar.open("تم التسجيل بنجاح ", "success", {
                duration: 5000,
                panelClass: 'success'
              });
              this.router.navigate(['/auth/profile',res.userId])
            }
          }else {
            this.snackBar.open("انت مسجل بالفعل", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }

        },(error)=>{
          this.snackBar.open("حاول مرة اخري ", "error", {
            duration: 5000,
            panelClass: 'error'
          });
        }
      )
    }
  }
}

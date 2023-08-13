import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-confirm-method',
  templateUrl: './confirm-method.component.html',
  styleUrls: ['./confirm-method.component.css']
})
export class ConfirmMethodComponent implements OnInit{
  confirmMethod = 'email'
  data=''
  form=new FormGroup({
    VerificationCode:  new FormControl ('',[Validators.required]),
  }
  )

  constructor(private authService:AuthService,private snackBar: MatSnackBar,
    private router:Router,private route:ActivatedRoute
    ){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (res)=>{
        this.confirmMethod= res['method']
        this.data=res['data']
      }
    )
  }
  save(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      if(this.confirmMethod === 'email'){
        let data = {
          email:this.data,
          VerificationCode:this.form.controls.VerificationCode
        }
        this.authService.confirmEmail(data).subscribe(
          (res)=>{
            if(res.success){
                this.snackBar.open("تم التاكيد بنجاح ", "success", {
                  duration: 5000,
                  panelClass: 'success'
                });
                this.router.navigate(['/auth/profile',res.userId])
            }else {
              this.snackBar.open("محاولة خاطئة", "error", {
                duration: 5000,
                panelClass: 'error'
              });
            }

          },(error)=>{
            this.snackBar.open("محاولة خاطئة", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }
        )
      }else {
        let data = {
          PhoneNumber:this.data,
          VerificationCode:this.form.value.VerificationCode
        }
        console.log(data)
        this.authService.confirmPhone(data).subscribe(
          (res)=>{
            if(res.success){
                this.snackBar.open("تم التاكيد بنجاح ", "success", {
                  duration: 5000,
                  panelClass: 'success'
                });
                this.router.navigate(['/auth/login'])
            }else {
              this.snackBar.open("محاولة خاطئة", "error", {
                duration: 5000,
                panelClass: 'error'
              });
            }

          },(error)=>{
            this.snackBar.open("محاولة خاطئة", "error", {
              duration: 5000,
              panelClass: 'error'
            });
          }
        )
      }

    }
  }
}

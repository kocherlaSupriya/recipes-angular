import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
isLoginMode=true;

onSwitchMode(){
  this.isLoginMode=!this.isLoginMode
}
onSubmit(authForm:NgForm){
  console.log("email :",authForm.value.email,"password :",authForm.value.password);
  
}


}

import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../../services/validation.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { AuthService } from '../../services/auth.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  username:String;
  email:String;
  password:String;
  
  constructor(
    private validateService:ValidationService, 
    private messageService:FlashMessagesService, 
    private authService:AuthService,
    private router:Router) { }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
  
  if(!this.validateService.validationRegister(user)){
    this.messageService.show("Plase fill all the fields", {cssclass:'alert-danger hr', time:300});
    return false;
  }

  if(!this.validateService.validateEmail(user.email)){
    this.messageService.show("Plase enter a valid email.", {cssclass:'alert-danger hrcd', time:300});
    return false;
  }
  //Register Service  
  this.authService.registerUser(user).subscribe( data=> {
    if(data.success){
      this.messageService.show("User Registered.", {cssclass:'alert-success', time:300});
      this.router.navigate(['/login']);
    } else {
      this.messageService.show("User Registered.", {cssclass:'alert-danger', time:300});
      this.router.navigate(['/register']);
    }
  });
}


  ngOnInit() {
  }

}

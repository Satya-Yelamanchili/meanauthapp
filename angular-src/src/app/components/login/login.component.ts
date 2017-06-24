import { Component, OnInit } from '@angular/core';
import { ValidationService } from "../../services/validation.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private validateService: ValidationService,
    private messageService: FlashMessagesService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validationLogin(user)) {
      this.messageService.show("Username and Password fields are required", { cssclass: 'alert-danger hr', time: 300 });
      return false;
    }

    this.authService.loginUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.router.navigate(['/dashboard']);
      } else {
        this.messageService.show(data.msg, { cssclass: 'alert-danger', time: 300 });
        this.router.navigate(['/login']);
      }
    });
  }
}

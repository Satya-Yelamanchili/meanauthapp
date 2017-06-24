import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validationRegister(user){
    if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    }
    else{
      return true;
    }
  }

    validationLogin(user){
    if (user.username == undefined || user.password == undefined){
      return false;
    }
    else{
      return true;
    }
  }

  validateEmail(email){
    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return regex.test(email);
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:4300/users/register', user, { headers: headers })
      .map(res => res.json());
  }

  loginUser(user) {
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:4300/users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.authToken = token;
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    console.log(this.authToken);
    headers.append('Authorization', this.authToken);
    headers.append('content-type', 'application/json');
    return this.http.get('http://localhost:4300/users/profile', { headers: headers })
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  
  logOut(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addactor',
  templateUrl: './addactor.component.html',
  styleUrls: ['./addactor.component.css']
})
export class AddactorComponent implements OnInit {
  birthname: String;
  givenname: String;
  gender: String;
  dob: String;
  birthcity: String;
  birthstate: String;
  birthcountry: String;
  bio: String;
  picture: String;

  constructor() { }

  ngOnInit() {
  }

}

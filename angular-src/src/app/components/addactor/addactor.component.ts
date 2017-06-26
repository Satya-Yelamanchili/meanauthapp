import { Component, OnInit } from '@angular/core';
import { ActorsService } from "../../services/actors.service";

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
  searchText: string;
  actors:any;
  constructor(private actorsService:ActorsService) { }

  ngOnInit() {
  }

  onSearchTextChange(){
    console.log(this.searchText);
    this.actorsService.getSearchActors(this.searchText).subscribe(actors=>{
      this.actors = actors;
      console.log(this.actors);
    },
    err=>{
      console.log(err);
      return false;
    });
  }
}

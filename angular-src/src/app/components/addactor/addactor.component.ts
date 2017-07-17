import { Component, OnInit } from '@angular/core';
import { ActorsService } from "../../services/actors.service";
import { FlashMessagesService } from "angular2-flash-messages";

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
  picture: { contentType: String };
  searchText: string;
  actors: any;
  constructor(private actorsService: ActorsService, private messageService:FlashMessagesService) { }

  ngOnInit() {
  }

  onSearchTextChange() {
    console.log(this.searchText);
    this.actorsService.getSearchActors(this.searchText).subscribe(actors => {
      this.actors = actors;
      console.log(this.actors);
    },
      err => {
        console.log(err);
        return false;
      });
  }

  onAddSubmit() {
    const actor = {
      birthname: this.birthname,
      givenname: this.givenname,
      gender: this.gender,
      dob: this.dob,
      birthcity: this.birthcity,
      birthstate: this.birthstate,
      birthcountry: this.birthcountry,
      bio: this.bio,
      picture: this.picture
    };
    this.actorsService.addActor(actor).subscribe(data=>{
      if(data.success){
        this.messageService.show("Actor added.", {cssclass:'alert-success', time:300});
      }else{
        this.messageService.show("Actor not Added.", {cssclass:'alert-danger', time:300});
      }
    });

    
  }

  onFileChane(event) {
       const files: FileList = event.target.files;
  }
}

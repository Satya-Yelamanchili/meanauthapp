import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';

@Injectable()
export class ActorsService {

  constructor(private http:Http) { }

  getSearchActors(searchText){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.get('http://localhost:4300/actors/' + searchText , { headers: headers })
      .map(res => res.json());
  }

  addActor(actors){
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    return this.http.post('http://localhost:4300/actors/add', actors, { headers: headers })
      .map(res => res.json());
  }
}

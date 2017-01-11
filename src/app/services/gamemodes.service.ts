import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GameModesService {
  API_URL: string = 'https://aimtrain.herokuapp.com';
  // API_URL: string = 'http://localhost:4300';

  private headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  getGameModes() {
    return this.http.get(`${this.API_URL}/api/gamemodes`)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error getting Game Modes'));
  }

  getGameMode(mode: String, level: String) {
    return this.http.get(`${this.API_URL}/api/gamemodes/${mode}/${level}`).map(res => res.json());
  }
}

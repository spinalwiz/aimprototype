import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
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
    return this.http.get(`${this.API_URL}/api/gameconfig/${mode}/${level}`)
      .map(res => res.json())
      .catch((this.handleError));
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

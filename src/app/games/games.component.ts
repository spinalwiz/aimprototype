import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  filter:String;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log(this.route);
    this.route.firstChild.params.subscribe(
      params => this.filter = params['filter'],
      error => this.filter = ''
    );
  }

}

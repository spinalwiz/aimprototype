import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GameModesService} from "../services/gamemodes.service";


@Component({
  selector: 'gamecanvas',
  templateUrl: './gamecanvas.component.html',
  styleUrls: ['./gamecanvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  mode: String;
  level: String;
  configData: any;

  constructor(private route: ActivatedRoute, private gameModesService: GameModesService) {
  }


  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.mode = params['m'];
      this.level = params['l'];
    });
    this.getGameConfig(this.mode, this.level);
  }

  getGameConfig(mode, level) {

  }




}

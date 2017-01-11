import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {GameModesService} from "../services/gamemodes.service";
import {GameConfig} from "../../interfaces/gameconfig.interface";

@Component({
  selector: 'gamecanvas',
  templateUrl: './gamecanvas.component.html',
  styleUrls: ['./gamecanvas.component.css']
})
export class GameCanvasComponent implements OnInit {
  mode: String;
  level: String;
  configData: GameConfig;
  configDataString: String;

  constructor(private route: ActivatedRoute, private gameModesService: GameModesService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.mode = params['m'];
      this.level = params['l'];
    });
    this.gameModesService.getGameMode(this.mode, this.level).subscribe(
      data => {
        this.configData = data;
        this.configDataString = JSON.stringify(data);
      },
      error => console.log(error)
    );
  }





}

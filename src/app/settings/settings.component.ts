import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

}

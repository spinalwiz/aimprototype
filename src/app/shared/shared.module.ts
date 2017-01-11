import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentileGraphComponent } from './percentile-graph/percentile-graph.component';
import {ChartsModule} from "ng2-charts";
import 'chart.js';
import {TopnavComponent} from "./topnav/topnav.component";
import {AuthService} from "../services/auth.service";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    PercentileGraphComponent,
    TopnavComponent
  ],
  exports: [
    PercentileGraphComponent,
    TopnavComponent
  ],
  providers: [
    AuthService
  ]
})
export class SharedModule { }

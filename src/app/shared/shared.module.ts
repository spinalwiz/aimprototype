import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentileGraphComponent } from './percentile-graph/percentile-graph.component';
import {ChartsModule} from "ng2-charts";
import 'chart.js';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [PercentileGraphComponent],
  exports: [PercentileGraphComponent]
})
export class SharedModule { }

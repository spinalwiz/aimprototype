import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {SharedModule} from "../shared/shared.module";
import {StatsRoutingModule} from "./stats-routing.module";
import {StatsComponent} from "./stats.component";
import { StatsNavComponent } from './stats-nav/stats-nav.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StatsRoutingModule
  ],
  declarations: [
    LeaderboardComponent,
    StatsComponent,
    StatsNavComponent,
    HistoryComponent,
    ReportsComponent
  ]
})
export class StatsModule {
}

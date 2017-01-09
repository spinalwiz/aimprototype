import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {StatsComponent} from "./stats.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {HistoryComponent} from "./history/history.component";
import {ReportsComponent} from "./reports/reports.component";
import {AuthGuard} from "../services/auth.guard";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'stats',
            component: StatsComponent,
            children: [
              {
                path: '',
                component: LeaderboardComponent
              },
              {
                path: 'history',
                component: HistoryComponent
              },
              {
                path: 'reports',
                component: ReportsComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StatsRoutingModule {
}

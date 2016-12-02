import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {StatsComponent} from "./stats.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'stats',
        component: StatsComponent,
        children: [
          {
            path: '',
            component: LeaderboardComponent
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

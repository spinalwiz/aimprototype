import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {GamesComponent} from "./games.component";
import {GameModesComponent} from "./gamemodes/gamemodes.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'games',
        component: GamesComponent,
        children: [
          {
            path: '',
            component: GameModesComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRoutingModule {
}

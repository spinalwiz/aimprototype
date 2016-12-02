import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {GameModesComponent} from "./gamemodes/gamemodes.component";
import {GamesRoutingModule} from "./games-routing.module";
import {GamesNavComponent} from './games-nav/games-nav.component';
import {GamesComponent} from "./games.component";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule
  ],
  declarations: [
    GameModesComponent,
    GamesNavComponent,
    GamesComponent]
})
export class GamesModule {
}

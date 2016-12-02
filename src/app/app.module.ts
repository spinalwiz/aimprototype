import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardModule} from "./dashboard/dashboard.module";


import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HighscoresService} from './services/highscores.service';
import {AuthService} from "./services/auth.service";
import {AuthComponent} from './auth/auth.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {UserProfileComponent} from './userprofile/userprofile.component';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from "./services/auth.guard";
import {GameCanvasComponent} from './gamecanvas/gamecanvas.component';
import {GameModesService} from './services/gamemodes.service';
import {SafePipe} from './pipes/safe.pipe';
import {UserPerformanceDataService} from "./services/user-performance-data.service";


import {SharedModule} from "./shared/shared.module";
import {StatsModule} from "./stats/stats.module";
import {GamesModule} from "./games/games.module";



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserProfileComponent,
    AdminComponent,
    GameCanvasComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule,
    DashboardModule,
    SharedModule,
    StatsModule,
    GamesModule
  ],
  providers: [
    HighscoresService,
    AuthService,
    AUTH_PROVIDERS,
    AuthGuard,
    GameModesService,
    UserPerformanceDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

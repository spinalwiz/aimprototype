import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardModule} from "./dashboard/dashboard.module";


import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HighscoresService} from './services/highscores.service';
import {AuthService} from "./services/auth.service";
import {AUTH_PROVIDERS} from 'angular2-jwt';
import {AdminComponent} from './admin/admin.component';
import {AuthGuard} from "./services/auth.guard";
import {GameCanvasComponent} from './gamecanvas/gamecanvas.component';
import {GameModesService} from './services/gamemodes.service';
import {SafePipe} from './pipes/safe.pipe';
import {UserPerformanceDataService} from "./services/user-performance-data.service";


import {SharedModule} from "./shared/shared.module";
import {StatsModule} from "./stats/stats.module";
import {GamesModule} from "./games/games.module";
import {TrainingPlanModule} from "./training-plan/training-plan.module";
import {SettingsModule} from "./settings/settings.module";
import {LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GameCanvasComponent,
    SafePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    DashboardModule,
    SharedModule,
    StatsModule,
    GamesModule,
    TrainingPlanModule,
    SettingsModule
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

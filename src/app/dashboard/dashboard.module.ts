import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {AlertComponent} from "./alert/alert.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../shared/shared.module";
import { TrainingPlanComponent } from './training-plan/training-plan.component';
import { PremiumCalloutComponent } from './premium-callout/premium-callout.component';
import {LandingComponent} from "../landing/landing.component";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule

  ],
  declarations: [
    DashboardComponent,
    AlertComponent,
    TrainingPlanComponent,
    PremiumCalloutComponent,
    LandingComponent
  ]
})

export class DashboardModule{}


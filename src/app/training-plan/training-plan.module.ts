import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPlanComponent } from './training-plan.component';
import {SharedModule} from "../shared/shared.module";
import {TrainingPlanRoutingModule} from "./training-plan-routing.module";
import { PlanComponent } from './plan/plan.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TrainingPlanRoutingModule
  ],
  declarations: [TrainingPlanComponent, PlanComponent]
})
export class TrainingPlanModule { }

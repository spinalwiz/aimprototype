import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {TrainingPlanComponent} from "./training-plan.component";
import {PlanComponent} from "./plan/plan.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'training-plan',
        component: TrainingPlanComponent,
        children: [
          {
            path: '',
            component:PlanComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrainingPlanRoutingModule {
}

import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {TrainingPlanComponent} from "./training-plan/training-plan.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: ':id',
            component: DashboardComponent
          },
          {
            path: '',
            component: TrainingPlanComponent
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}

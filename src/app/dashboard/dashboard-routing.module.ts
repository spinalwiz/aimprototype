import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {TrainingPlanComponent} from "./training-plan/training-plan.component";
import {AuthGuard} from "../services/auth.guard";
import {LandingComponent} from "../landing/landing.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent
      },
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
            children: [
              {
                path: '',
                component: TrainingPlanComponent
              }
            ]
          },
        ]
      }
    ])
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     // pathMatch: 'full',
    //     // canActivate: [Auth Guard],
    //     children: [
    //       {
    //         path: '',
    //         component: DashboardComponent,
    //         children: [
    //
    //           {
    //             path: ':id',
    //             component: DashboardComponent
    //           },
    //           {
    //             path: '',
    //             component: TrainingPlanComponent
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuard}                   from './services/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {GameCanvasComponent} from './gamecanvas/gamecanvas.component';
import {LoginComponent} from "./login/login.component";



const appRoutes: Routes = [
  {
    path: 'game',
    component: GameCanvasComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

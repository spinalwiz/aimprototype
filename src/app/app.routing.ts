import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserProfileComponent} from './userprofile/userprofile.component';
import {AuthGuard}                   from './services/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {GameCanvasComponent} from './gamecanvas/gamecanvas.component';



const appRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'game',
    component: GameCanvasComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

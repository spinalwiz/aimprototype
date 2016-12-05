import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {SettingsComponent} from "./settings.component";
import {AccountComponent} from "./account/account.component";
import {UserProfileComponent} from "./userprofile/userprofile.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          {
            path: '',
            component:AccountComponent
          }
        ]
      },
      {
        path: 'profile',
        component: UserProfileComponent
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SettingsRoutingModule {
}

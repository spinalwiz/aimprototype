import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import {SharedModule} from "../shared/shared.module";
import {SettingsRoutingModule} from "./settings-routing.module";
import {AuthService} from "../services/auth.service";
import {UserProfileComponent} from "./userprofile/userprofile.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule

  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    UserProfileComponent
  ],
  providers: [AuthService]
})
export class SettingsModule { }

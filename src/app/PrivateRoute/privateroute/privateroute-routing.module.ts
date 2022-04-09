import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { RoleGuard } from 'src/app/services/role.guard';
import { AboutComponent } from '../components/about/about.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SettingComponent } from '../components/setting/setting.component';
import { PrivaterouteComponent } from './privateroute.component';

const routes: Routes = [{ path: '', component: PrivaterouteComponent, children:[
  {path:'about', component: AboutComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'setting', component: SettingComponent, canActivate:[AuthGuard, RoleGuard]}
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivaterouteRoutingModule { }

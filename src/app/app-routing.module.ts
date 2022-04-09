import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', component: LandingpageComponent},
  {path: 'privateroute', loadChildren: () => import('./PrivateRoute/privateroute/privateroute.module').then(m => m.PrivaterouteModule), canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
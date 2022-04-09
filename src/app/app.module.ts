import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivaterouteModule } from './PrivateRoute/privateroute/privateroute.module';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { AboutComponent } from './PrivateRoute/components/about/about.component';
import { ProfileComponent } from './PrivateRoute/components/profile/profile.component';
import { SettingComponent } from './PrivateRoute/components/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LandingpageComponent,
    AboutComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrivaterouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivaterouteRoutingModule } from './privateroute-routing.module';
import { PrivaterouteComponent } from './privateroute.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PrivaterouteComponent
  ],
  imports: [
    CommonModule,
    PrivaterouteRoutingModule
  ]
})
export class PrivaterouteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewMyPatientsRoutingModule } from './view-my-patients-routing.module';
import { ViewMyPatientsComponent } from './view-my-patients.component';


@NgModule({
  declarations: [
    ViewMyPatientsComponent
  ],
  imports: [
    CommonModule,
    ViewMyPatientsRoutingModule
  ]
})
export class ViewMyPatientsModule { }

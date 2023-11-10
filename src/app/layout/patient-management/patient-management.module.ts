import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientManagementComponent } from './patient-management.component';
import { PatientManagementRoutingModule } from './patient-management-routing.module';



@NgModule({
  declarations: [
    PatientManagementComponent
  ],
  imports: [
    CommonModule,
    PatientManagementRoutingModule
  ]
})
export class PatientManagementModule { }

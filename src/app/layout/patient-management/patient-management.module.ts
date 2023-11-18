import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientManagementComponent } from './patient-management.component';
import { PatientManagementRoutingModule } from './patient-management-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientManagementComponent
  ],
  imports: [
    CommonModule,
    PatientManagementRoutingModule,
    FormsModule
  ]
})
export class PatientManagementModule { }

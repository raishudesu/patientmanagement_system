import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsManagementComponent } from './doctors-management.component';
import { DoctorsManagementRoutingModule } from './doctors-management-routing.module';



@NgModule({
  declarations: [
    DoctorsManagementComponent
  ],
  imports: [
    CommonModule,
    DoctorsManagementRoutingModule
  ]
})
export class DoctorsManagementModule { }

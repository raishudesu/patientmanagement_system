import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsManagementComponent } from './doctors-management.component';
import { DoctorsManagementRoutingModule } from './doctors-management-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorsManagementComponent
  ],
  imports: [
    CommonModule,
    DoctorsManagementRoutingModule,
    FormsModule
  ]
})
export class DoctorsManagementModule { }

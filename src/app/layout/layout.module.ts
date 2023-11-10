import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientManagementComponent } from './patient-management/patient-management.component';
import { DoctorsManagementComponent } from './doctors-management/doctors-management.component';
import { SharedComponentModule } from './component/shared-component.module';




@NgModule({
  declarations: [
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedComponentModule
  ]
})
export class LayoutModule { }

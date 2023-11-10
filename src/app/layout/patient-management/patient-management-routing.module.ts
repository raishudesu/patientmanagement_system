import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PatientManagementComponent } from './patient-management.component';

const routes : Routes = [
  {
    path: '',
    component: PatientManagementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientManagementRoutingModule { }

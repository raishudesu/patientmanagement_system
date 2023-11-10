import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsManagementComponent } from './doctors-management.component';

const routes : Routes = [
  {
    path: '',
    component: DoctorsManagementComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsManagementRoutingModule { }

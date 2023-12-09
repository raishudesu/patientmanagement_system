import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsManagementModule } from './doctors-management/doctors-management.module';

const routes : Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "", redirectTo: "dashboard", pathMatch: "prefix",
      },
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "doctors-management",
        loadChildren: () => import('./doctors-management/doctors-management.module').then(mod => mod.DoctorsManagementModule),
      },
      {
        path: "patient-management",
        loadChildren: () => import('./patient-management/patient-management.module').then(mod => mod.PatientManagementModule),
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

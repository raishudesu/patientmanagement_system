import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (mod) => mod.DashboardModule
          ),
      },
      {
        path: 'doctors-management',
        loadChildren: () =>
          import('./doctors-management/doctors-management.module').then(
            (mod) => mod.DoctorsManagementModule
          ),
      },
      {
        path: 'patient-management',
        loadChildren: () =>
          import('./patient-management/patient-management.module').then(
            (mod) => mod.PatientManagementModule
          ),
      },
      {
        path: 'usersview',
        loadChildren: () =>
          import('./usersview/usersview.module').then(
            (mod) => mod.UsersviewModule
          ),
      },
      {
        path: 'users-management',
        loadChildren: () =>
          import('./users-management/users-management.module').then(
            (mod) => mod.UsersManagementModule
          ),
      },
      {
        path: 'bookings-management',
        loadChildren: () =>
          import('./bookings-management/bookings-management.module').then(
            (mod) => mod.BookingsManagementModule
          ),
      },
      {
        path: 'view-my-patients',
        loadChildren: () =>
          import('./view-my-patients/view-my-patients.module').then(
            (mod) => mod.ViewMyPatientsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsManagementComponent } from './bookings-management.component';

const routes: Routes = [
  {
    path: '',
    component: BookingsManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingsManagementRoutingModule {}

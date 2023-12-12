import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsManagementRoutingModule } from './bookings-management-routing.module';
import { BookingsManagementComponent } from './bookings-management.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookingsManagementComponent],
  imports: [CommonModule, BookingsManagementRoutingModule, FormsModule],
})
export class BookingsManagementModule {}

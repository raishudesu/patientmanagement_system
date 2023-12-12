import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { bookings } from 'src/app/models/bookings.model';

@Component({
  selector: 'app-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.scss'],
})
export class BookingsManagementComponent {
  @ViewChild('f') loginForm!: NgForm;
  @ViewChild('bookingForm') bookingForm!: NgForm;
  booking!: bookings[];
  currentBookingId: number | null = null;
  currentBooking: bookings = {
    idbookings: 0,
    booker_id: 0,
    patient_name: '',
    patient_age: 0,
    patient_sex: '',
    appointment: '',
    is_confirmed: 0,
    created_at: '',
    booking_date: '',
  };

  updateBooking: bookings = {
    idbookings: 0,
    booker_id: 0,
    patient_name: '',
    patient_age: 0,
    patient_sex: '',
    appointment: '',
    is_confirmed: 0,
    created_at: '',
    booking_date: '',
  };

  bookingDate: string = '';

  ngOnInit(): void {
    const getBookings = async () => {
      const res = await fetch('http://localhost:8000/api/bookings');
      const data = await res.json();

      console.log(data);
      this.booking = data.bookings;
    };

    getBookings();
  }

  async onSubmit() {
    console.log(this.loginForm.value);

    const res = await fetch('http://localhost:8000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.loginForm.value),
    });

    const data = await res.json();

    console.log(data);
    this.ngOnInit();
  }

  setBookingId(id: number) {
    this.currentBookingId = id;

    console.log(this.currentBookingId);
  }

  setCurrentBooking(booking: bookings) {
    this.currentBooking = booking;
    this.updateBooking = { ...this.currentBooking };
    this.setBookingId(booking.idbookings);
  }

  async updateBookingSubmit() {
    console.log(this.bookingForm.value);
    const res = await fetch(
      `http://localhost:8000/api/bookings/${this.currentBookingId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.bookingForm.value),
      }
    );

    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }

  async deleteBooking() {
    const res = await fetch(
      `http://localhost:8000/api/bookings/${this.currentBookingId}`,
      {
        method: 'DELETE',
      }
    );
    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }
}

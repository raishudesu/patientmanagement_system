import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('f') loginForm!: NgForm;
  session = {
    isAdmin: false,
    ok: false,
    admin: {
      username: '',
    },
    user: {
      idusers: 0,
      username: '',
    },
  };
  constructor(private router: Router) {}
  ngOnInit() {
    const sessionString = localStorage.getItem('session');

    if (sessionString !== null) {
      const session = JSON.parse(sessionString as string);
      this.session = session;
    } else {
      // Handle the case where 'sessionString' is null
      this.router.navigateByUrl('/login');
    }
  }

  async onSubmit() {
    console.log(this.loginForm.value);

    try {
      // const ses

      const res = await fetch('http://localhost:8000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          booker_id: this.session.user.idusers,
          ...this.loginForm.value,
        }),
      });
      const data = await res.json();

      if (!data.ok) {
        alert('Something went wrong');
        return;
      }

      alert('Booking added!');
    } catch (error) {
      console.log(error);
    }
  }
}

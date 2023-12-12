import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  @ViewChild('f') loginForm!: NgForm;
  @ViewChild('registerForm') registerForm!: NgForm;
  @ViewChild('adminForm') adminForm!: NgForm;
  @ViewChild('doctorForm') doctorForm!: NgForm;

  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    if (sessionString) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  async userLogin() {
    try {
      console.log(this.loginForm.value);
      const res = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.loginForm.value),
      });

      const user = await res.json();
      console.log(user);

      if (!user.ok) {
        alert(user.error);
        return;
      }
      localStorage.setItem('session', JSON.stringify(user));
      alert('Login success');
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  async userRegister() {
    console.log(this.registerForm.value);

    try {
      if (
        this.registerForm.value.password !==
        this.registerForm.value.confirmPassword
      ) {
        alert('Passwords do not match');
        return;
      }
      const { confirmPassword, ...postData } = this.registerForm.value;
      const res = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (!data.ok) {
        alert('Something went wrong!');
        return;
      }
      alert('Register success. You may now login');
    } catch (error) {
      console.log(error);
    }
  }

  async adminLogin() {
    try {
      console.log(this.adminForm.value);
      const res = await fetch('http://localhost:8000/api/admin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.adminForm.value),
      });

      const user = await res.json();
      console.log(user);

      if (!user.ok) {
        alert(user.error);
        return;
      }
      localStorage.setItem(
        'session',
        JSON.stringify({ isAdmin: true, ...user })
      );
      alert('Admin Login success');
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }
  async doctorLogin() {
    try {
      console.log(this.doctorForm.value);
      const res = await fetch('http://localhost:8000/api/doctors/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.doctorForm.value),
      });

      const user = await res.json();
      console.log(user);

      if (!user.ok) {
        alert(user.error);
        return;
      }
      localStorage.setItem(
        'session',
        JSON.stringify({ isDoctor: true, ...user })
      );
      alert('Doctor Login success');
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }
}

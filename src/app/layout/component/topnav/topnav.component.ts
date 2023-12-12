import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
})
export class TopnavComponent {
  constructor(private router: Router) {}
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    const session = JSON.parse(sessionString as string);

    if (session.isAdmin) {
      this.isAdmin = true;
    }

    if (session.ok) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('session');
    alert('User logged out');
    this.router.navigateByUrl('/login');
  }
}

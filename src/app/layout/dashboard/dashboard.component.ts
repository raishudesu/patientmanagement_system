import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // constructor(private router: Router) {}
  // ngOnInit() {
  //   const sessionString = localStorage.getItem('session');
  //   if (sessionString !== null) {
  //     const session = JSON.parse(sessionString);
  //     // Use 'session' here
  //   } else {
  //     // Handle the case where 'sessionString' is null
  //     this.router.navigateByUrl('/login');
  //   }
  // }
}

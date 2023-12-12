import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from 'src/app/models/users.model';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent {
  @ViewChild('f') loginForm!: NgForm;
  @ViewChild('userForm') userForm!: NgForm;
  user!: users[];
  currentUserId: number | null = null;
  currentUser: users = {
    idusers: 0,
    username: '',
    email: '',
    password: '',
  };

  updateUser: users = {
    idusers: 0,
    username: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {
    const getUsers = async () => {
      const res = await fetch('http://localhost:8000/api/users');
      const data = await res.json();

      this.user = data.users;
      console.log(data);
    };

    getUsers();
  }

  async onSubmit() {
    console.log(this.loginForm.value);

    const res = await fetch('http://localhost:8000/api/users/register', {
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

  setUserId(id: number) {
    this.currentUserId = id;

    console.log(this.currentUserId);
  }

  setCurrentUser(user: users) {
    this.currentUser = user;
    this.updateUser = { ...this.currentUser };
    this.setUserId(user.idusers);
  }

  async updateUserSubmit() {
    console.log(this.userForm.value);
    const res = await fetch(
      `http://localhost:8000/api/users/${this.currentUserId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.userForm.value),
      }
    );

    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }

  async deleteUser() {
    const res = await fetch(
      `http://localhost:8000/api/users/${this.currentUserId}`,
      {
        method: 'DELETE',
      }
    );
    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }
}

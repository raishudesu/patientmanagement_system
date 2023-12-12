import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DoctorsService } from 'src/app/services/doctors.service';
import { doctors } from 'src/app/models/doctors.model';

@Component({
  selector: 'app-doctors-management',
  templateUrl: './doctors-management.component.html',
  styleUrls: ['./doctors-management.component.scss'],
})
export class DoctorsManagementComponent {
  @ViewChild('f') loginForm!: NgForm;
  @ViewChild('doctorForm') doctorForm!: NgForm;
  doctor!: doctors[];
  currentDoctorId: number | null = null;
  // doctorsSubscription!: Subscription;
  currentDoctor: doctors = {
    iddoctors: 0,
    name: '',
    age: 0,
    sex: '',
    specialist: '',
    date_hired: '',
  };

  updateDoctor: doctors = {
    iddoctors: 0,
    name: '',
    age: 0,
    sex: '',
    specialist: '',
    date_hired: '',
  };
  dateHired: string = '';
  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    // this.doctorsSubscription = this.doctorsService.doctor.subscribe((data) => {
    //   this.doctor = data;
    // });

    const getDoctors = async () => {
      const res = await fetch('http://localhost:8000/api/doctors');
      const data = await res.json();

      this.doctor = data.doctors;
      console.log(data);
    };

    getDoctors();
  }

  // ngOnDestroy(): void {
  //   this.doctorsSubscription.unsubscribe();
  // }
  async onSubmit() {
    console.log(this.loginForm.value);

    const res = await fetch('http://localhost:8000/api/doctors', {
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
  setDoctorId(id: number) {
    this.currentDoctorId = id;

    console.log(this.currentDoctorId);
  }

  setCurrentDoctor(doctor: doctors) {
    this.currentDoctor = doctor;
    this.updateDoctor = { ...this.currentDoctor };
    this.setDoctorId(doctor.iddoctors);
  }

  async updateDoctorSubmit() {
    console.log(this.doctorForm.value);
    const res = await fetch(
      `http://localhost:8000/api/doctors/${this.currentDoctorId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.doctorForm.value),
      }
    );

    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }

  async deleteDoctor() {
    const res = await fetch(
      `http://localhost:8000/api/doctors/${this.currentDoctorId}`,
      {
        method: 'DELETE',
      }
    );
    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }
}

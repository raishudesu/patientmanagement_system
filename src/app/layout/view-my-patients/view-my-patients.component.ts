import { Component } from '@angular/core';
import { patient } from 'src/app/models/patients.model';

@Component({
  selector: 'app-view-my-patients',
  templateUrl: './view-my-patients.component.html',
  styleUrls: ['./view-my-patients.component.scss'],
})
export class ViewMyPatientsComponent {
  patients!: patient[];
  iddoctor!: number;

  ngOnInit() {
    const sessionString = localStorage.getItem('session');
    const session = JSON.parse(sessionString as string);
    this.iddoctor = session.doctor.iddoctors;
    // this.patients = session.doctor.patients;
    this.getDocPatients();
  }

  async getDocPatients() {
    try {
      const res = await fetch(
        `http://localhost:8000/api/patients/doctor/${this.iddoctor}`
      );
      const patients = await res.json();
      console.log(patients);
      this.patients = patients.patients;
    } catch (error) {
      console.log(error);
    }
  }

  async dischargePatient(id: number) {
    try {
      const res = await fetch(`http://localhost:8000/api/patients/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ discharged_date: new Date().toISOString() }),
      });

      const data = await res.json();

      if (!data.ok) {
        alert('Something went wrong!');
        return;
      }

      alert('Patient discharged');

      this.ngOnInit();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

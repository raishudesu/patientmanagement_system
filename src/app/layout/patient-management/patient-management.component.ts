import { Component, ViewChild } from '@angular/core';
import { patient } from 'src/app/models/patients.model';
import { PatientService } from 'src/app/services/patient.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.scss'],
})
export class PatientManagementComponent {
  @ViewChild('f') loginForm!: NgForm;
  @ViewChild('patientForm') patientForm!: NgForm;
  patients!: patient[];
  currentPatient: patient = {
    idpatients: 0,
    name: '',
    age: 0,
    sex: '',
    patient_number: 0,
    appointment: '',
    doctor: 0,
    admission_date: '',
    discharged_date: '',
  };

  updatePatient: patient = {
    idpatients: 0,
    name: '',
    age: 0,
    sex: '',
    patient_number: 0,
    appointment: '',
    doctor: 0,
    admission_date: '',
    discharged_date: '',
  };
  dischargedDate: string = '';
  admissionDate: string = '';
  patientSubscription!: Subscription;
  currentPatientId: number | null = null;
  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    // this.patientSubscription = this.patientService.patients.subscribe(
    //   (data) => {
    //     this.patients = data;
    //   }
    // );

    const getPatients = async () => {
      const res = await fetch('http://localhost:8000/api/patients');
      const data = await res.json();

      console.log(data);
      this.patients = data.patients;
    };

    getPatients();
  }

  // ngOnDestroy(): void {
  //   this.patientSubscription.unsubscribe();
  // }
  async onSubmit() {
    console.log(this.loginForm.value);

    const res = await fetch('http://localhost:8000/api/patients', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.loginForm.value),
    });

    const data = await res.json();

    console.log(data);
    this.ngOnInit();
    // this.patientService.addSubject(
    //   this.loginForm.value.name,
    //   this.loginForm.value.age,
    //   this.loginForm.value.gender,
    //   this.loginForm.value.patientNumber,
    //   this.loginForm.value.admissionDate,
    //   this.loginForm.value.dischargedDate
    // );
    // this.loginForm.reset();
  }

  setPatientId(id: number) {
    this.currentPatientId = id;

    console.log(this.currentPatientId);
  }

  setCurrentPatient(patient: patient) {
    this.currentPatient = patient;
    this.updatePatient = { ...this.currentPatient };
    this.setPatientId(patient.idpatients);
  }

  async updatePatientSubmit() {
    const res = await fetch(
      `http://localhost:8000/api/patients/${this.currentPatientId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(this.patientForm.value),
      }
    );

    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }

  async deletePatient() {
    const res = await fetch(
      `http://localhost:8000/api/patients/${this.currentPatientId}`,
      {
        method: 'DELETE',
      }
    );
    const data = await res.json();
    this.ngOnInit();
    console.log(data);
  }
}

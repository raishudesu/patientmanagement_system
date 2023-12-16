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
    doctors: {
      iddoctors: 0,
      name: '',
      age: 0,
      sex: '',
      specialist: '',
      date_hired: '',
    },
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
    doctors: {
      iddoctors: 0,
      name: '',
      age: 0,
      sex: '',
      specialist: '',
      date_hired: '',
    },
  };
  dischargedDate: string = '';
  admissionDate: string = '';
  patientSubscription!: Subscription;
  currentPatientId: number | null = null;

  filteredPatients: patient[] = [];
  searchTerm: string = '';
  constructor(private patientService: PatientService) {
    this.filteredPatients = this.patients;
  }

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
      this.filteredPatients = this.patients;
    };

    getPatients();
  }

  // ngOnDestroy(): void {
  //   this.patientSubscription.unsubscribe();
  // }
  onSearch(): void {
    this.filteredPatients = this.searchTerm
      ? this.patients.filter((patient) =>
          patient.patient_number
            .toString()
            .toLowerCase()
            .includes(this.searchTerm.toString().toLowerCase())
        )
      : this.patients;
  }

  // onSearch(): void {
  //   this.filteredPatients = this.searchTerm
  //     ? this.patients.filter(
  //         (patient) => patient.patient_number === Number(this.searchTerm)
  //       )
  //     : this.patients;
  // }

  async onSubmit() {
    function generatePatientNumber(existingNumbers: number[]): number {
      const MAX_PATIENT_NUMBER = 2147483647;
      let newPatientNumber: number;

      do {
        newPatientNumber = Math.floor(Math.random() * MAX_PATIENT_NUMBER) + 1;
      } while (existingNumbers.includes(newPatientNumber));

      return newPatientNumber;
    }

    // Usage example:
    const existingPatientNumbers = this.patients.map(
      (patient) => patient.patient_number
    );

    console.log(this.loginForm.value);
    this.loginForm.value.patient_number = generatePatientNumber(
      existingPatientNumbers
    );
    console.log(this.loginForm.value.patient_number);

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
    console.log(this.patientForm.value);
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

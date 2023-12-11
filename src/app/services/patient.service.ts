import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { patient } from '../models/patients.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  // patients = new BehaviorSubject<patient[]>([
  //   {
  //     id: '1',
  //     name: 'Mikmik',
  //     age: 18,
  //     sex: 'female',
  //     patient_number: 200222,
  //     admission_date: '1993-02-23',
  //     discharged_date: '2015-09-30',
  //   },
  // ]);

  // private dummyPatients: patient[] = [
  //   {
  //     id: '1',
  //     name: 'Mikmik',
  //     age: 18,
  //     sex: 'female',
  //     patient_number: 200222,
  //     admission_date: '1993-02-23',
  //     discharged_date: '2015-09-30',
  //   },
  // ];

  // addSubject(
  //   name: string,
  //   age: number,
  //   sex: string,
  //   patient_number: number,
  //   admission_date: string,
  //   discharged_date: string
  // ) {
  //   this.dummyPatients.push({
  //     id: Math.random().toString(),
  //     name: name,
  //     age: age,
  //     sex: sex,
  //     patient_number: patient_number,
  //     admission_date: admission_date,
  //     discharged_date: discharged_date,
  //   });
  //   console.log(this.dummyPatients);

  //   this.patients.next(this.dummyPatients.slice());
  // }

  editSubject() {}

  deleteSubject() {}
  constructor() {}
}

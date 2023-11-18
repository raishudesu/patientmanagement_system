import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { patient } from '../models/patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients = new BehaviorSubject<patient[]>([
    {
      id: '1',
      name: 'Mikmik',
      age: 18,
      sex: 'female',
      admissionDate: '1993-02-23',
      dischargedDate: '2015-09-30',
    }
  ])

  private dummyPatients: patient[] = [
    {
      id: '1',
      name: 'Mikmik',
      age: 18,
      sex: 'female',
      admissionDate: '1993-02-23',
      dischargedDate: '2015-09-30',
    }
  ]


  addSubject(name: string, age: number, sex: string, admissionDate: string, dischargedDate: string){
    this.dummyPatients.push({
      id:  Math.random().toString(),
      name: name,
      age: age,
      sex: sex,
      admissionDate: admissionDate,
      dischargedDate: dischargedDate
    })
    console.log(this.dummyPatients);
    
    this.patients.next(this.dummyPatients.slice())
  }


  editSubject(){

  }


  deleteSubject(){

  }
  constructor() { }
}

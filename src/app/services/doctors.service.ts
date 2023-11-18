import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { doctors } from '../models/doctors.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctor = new BehaviorSubject<doctors[]>([
    {
      id: '1',
      name: 'Ronald',
      age: 18,
      sex: 'male',
      specialist: '1993-02-23',
      dateHired: '2015-09-30',
    }
  ])

  private dummyDoctors: doctors[] = [
    {
      id: '1',
      name: 'Ronald',
      age: 18,
      sex: 'male',
      specialist: '1993-02-23',
      dateHired: '2015-09-30',
    }
  ]

  addSubject(name: string, age: number, sex: string, specialist: string, dateHired: string){
    this.dummyDoctors.push({
      id: Math.random().toString(),
      name: name,
      age: age,
      sex: sex,
      specialist: specialist,
      dateHired: dateHired
    })
    console.log(this.dummyDoctors);

    this.doctor.next(this.dummyDoctors.slice())
  }

  editSubject(){

  }

  deleteSubject(){

  }

  constructor() { }
}

import { Component, ViewChild } from '@angular/core';
import { patient } from 'src/app/models/patients.model';
import { PatientService } from 'src/app/services/patient.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-management',
  templateUrl: './patient-management.component.html',
  styleUrls: ['./patient-management.component.scss']
})
export class PatientManagementComponent {
  @ViewChild('f') loginForm !: NgForm
  patients!: patient[]
  patientSubscription!: Subscription

  constructor(private patientService: PatientService){}

  ngOnInit(): void {
    this.patientSubscription = this.patientService.patients.subscribe((data) => {
      this.patients = data
    })
  }

  ngOnDestroy(): void {
    this.patientSubscription.unsubscribe()
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.patientService.addSubject(this.loginForm.value.name, this.loginForm.value.age, this.loginForm.value.gender, this.loginForm.value.patientNumber, this.loginForm.value.admissionDate, this.loginForm.value.dischargedDate)
    this.loginForm.reset()
  }
}

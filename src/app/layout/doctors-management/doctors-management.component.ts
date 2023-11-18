import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DoctorsService } from 'src/app/services/doctors.service';
import { doctors } from 'src/app/models/doctors.model';



@Component({
  selector: 'app-doctors-management',
  templateUrl: './doctors-management.component.html',
  styleUrls: ['./doctors-management.component.scss']
})
export class DoctorsManagementComponent {
  @ViewChild('f') loginForm !: NgForm
  doctor!: doctors[]
  doctorsSubscription!: Subscription

  constructor(private doctorsService: DoctorsService){}

  ngOnInit(): void {
    this.doctorsSubscription = this.doctorsService.doctor.subscribe((data) => {
      this.doctor = data
    })
  }

  ngOnDestroy(): void {
    this.doctorsSubscription.unsubscribe()
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.doctorsService.addSubject(this.loginForm.value.name, this.loginForm.value.age, this.loginForm.value.gender, this.loginForm.value.specialist, this.loginForm.value.dateHired)
    this.loginForm.reset()
  }
}

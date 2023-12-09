import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersviewComponent } from './usersview.component';



@NgModule({
  declarations: [
    UsersviewComponent
  ],
  imports: [
    CommonModule,
    UsersviewModule
  ]
})
export class UsersviewModule { }

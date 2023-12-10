import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersviewComponent } from './usersview.component';
import { UserviewRoutingModule } from './userview-routing.module';



@NgModule({
  declarations: [
    UsersviewComponent
  ],
  imports: [
    CommonModule,
    UserviewRoutingModule
  ]
})
export class UsersviewModule { }

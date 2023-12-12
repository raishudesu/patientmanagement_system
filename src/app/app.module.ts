import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersManagementModule } from './layout/users-management/users-management.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UsersManagementModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

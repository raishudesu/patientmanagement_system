import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ScreenComponent } from './screen/screen.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidenavComponent,
    TopnavComponent,
    ScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidenavComponent,
    TopnavComponent,
    ScreenComponent
  ]
})
export class SharedComponentModule { }

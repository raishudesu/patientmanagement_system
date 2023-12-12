import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMyPatientsComponent } from './view-my-patients.component';

const routes: Routes = [
  {
    path: '',
    component: ViewMyPatientsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMyPatientsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpwellRefiningComponent} from './upwell-refining/upwell-refining.component';
const routes: Routes = [{path: "", component: UpwellRefiningComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

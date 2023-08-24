import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {path:'calendario', component:CalendarioComponent},
      {path:'**', redirectTo:'calendario'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

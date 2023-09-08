import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlotanteComponent } from './flotante/flotante.component';


@NgModule({
  declarations: [
    MainComponent,
    CalendarioComponent,
    FlotanteComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ],
  exports:[RouterModule]
})
export class PagesModule { }

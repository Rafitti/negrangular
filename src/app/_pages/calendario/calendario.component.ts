import { Component, ChangeDetectionStrategy } from '@angular/core';
import { format, subMonths, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarioComponent {
  mesActual: Date = new Date();
  diaActual: number = new Date().getDate();
  dias: number[] = [];
  fechaSeleccionada: Date | null = null;
  mostrarFlotante = false;
  flotanteLeft = '0';
  flotanteTop = '0';
  diaSeleccionado: number | null = null;



  constructor() {
    this.generarCalendario();
  }

  mostrarMesAnterior() {
    this.mesActual = subMonths(this.mesActual, 1);
    this.generarCalendario();
  }

  mostrarMesSiguiente() {
    this.mesActual = addMonths(this.mesActual, 1);
    this.generarCalendario();
  }

  private generarCalendario() {
    const primerDiaDelMes = startOfMonth(this.mesActual);
    const ultimoDiaDelMes = endOfMonth(this.mesActual);
    const primerDiaDeLaSemana = startOfWeek(primerDiaDelMes, { locale: es });
    const ultimoDiaDeLaSemana = endOfWeek(ultimoDiaDelMes, { locale: es });

    const dias: number[] = [];
    let diaActual = primerDiaDeLaSemana;

    while (diaActual <= ultimoDiaDeLaSemana) {
      dias.push(diaActual.getDate());
      diaActual = addDays(diaActual, 1);
    }

    this.dias = dias;
  }
  mostrarComponenteFlotante(event: MouseEvent, dia: number) {
    this.seleccionarFecha(dia); // También puedes llamar a la función seleccionarFecha aquí si lo deseas
    this.flotanteLeft = event.clientX + 'px';
    this.flotanteTop = event.clientY + 'px';
    if(this.mostrarFlotante){
      this.mostrarFlotante = false;
    }else{
      this.mostrarFlotante = true;
    }
    

  }
  seleccionarFecha(dia: number) {
    this.fechaSeleccionada = new Date(this.mesActual.getFullYear(), this.mesActual.getMonth(), dia);
    this.diaSeleccionado = dia; // Establece el día seleccionado
  }
  
}

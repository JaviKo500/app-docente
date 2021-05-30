import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { valorReloj } from '../../models/valorReloj.model';
import {  RelojService } from '../../services/reloj.service';
import { IndexedDBService } from '../../services/indexed-db.service';
import { Registro } from '../../models/registro.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-entrada',
  templateUrl: './registrar-entrada.component.html',
  styleUrls: ['./registrar-entrada.component.css']
})
export class RegistrarEntradaComponent implements OnInit {
  datos$!: Observable<valorReloj>;
  hora!: number;
  minutos!: string;
  dia!: string;
  fecha1!: string;
  ampm!: string;
  segundos!: string;

  public mensajeError!: string;
  public asistencia!: Registro;
  public formAsistencia!: FormGroup;
  public fecha!: Date;
  constructor( 
    private formBuilder: FormBuilder,
    private relojService: RelojService,
    private indexedDBService: IndexedDBService
    ) { }

  ngOnInit(): void {
    this.cacularHoraActua();
    this.formAsistencia = this.formBuilder.group( {
      docenteCedula: ['', [Validators.required]]
    }); 
  }
  cacularHoraActua = () => {
    this.datos$=this.relojService.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha1 = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
  }

  agregarAsistencia = (): void => {
    this.mensajeError = '';
    let {docenteCedula} = this.formAsistencia.value;
    if ( this.formAsistencia.valid ) {
      this.fecha = new Date();
      let fechas = [];
      fechas.push(this.fecha);
      this.asistencia = { docenteCedula, fechas};
      this.indexedDBService.buscarAsistenciaDocente(this.asistencia,  this.formAsistencia);
    } else {
      this.mensajeError = 'Por favor complete los campos';
    }
  }
}

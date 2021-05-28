import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { valorReloj } from '../../models/valorReloj.model';
import {  RelojService } from '../../services/reloj.service';

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
  fecha!: string;
  ampm!: string;
  segundos!: string;

  constructor( private relojService: RelojService) { }

  ngOnInit(): void {
    this.cacularHoraActua();
  }
  cacularHoraActua = () => {
    this.datos$=this.relojService.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { Docente } from '../../models/docente.model';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {
  public docente!: Docente;
  public cargoDocente: string [] = ['Docente', 'Rector', 'Vicerrector', 'Inspector', 'Secretario(a)', 'Encargado DECE'];
  constructor() { }
  
  ngOnInit(): void {
  }


}

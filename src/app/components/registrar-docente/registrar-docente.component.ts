import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  public cargoDocente: string [] = ['Docente', 'Rector', 'Vicerrector', 'Inspector', 'Secretario(a)', 'Encargado DECE'];
  constructor() { }

  ngOnInit(): void {
  }


}

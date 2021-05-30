import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Docente } from '../../models/docente.model';
import { IndexedDBService } from '../../services/indexed-db.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {
  public cargoDocente: string [] = ['Docente', 'Rector', 'Vicerrector', 'Inspector', 'Secretario(a)', 'Encargado DECE'];
  public docente!: Docente;

  public formDocente!: FormGroup;
  public errorForm!: string;
  constructor(
    private formBuilder: FormBuilder,
    private indexedBDService: IndexedDBService
  ) { }
  
  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario = (): void => {
    this.formDocente = this.formBuilder.group({
      nombres:    [ '', [ Validators.required ]],
      apellidos:  [ '', [ Validators.required ]],
      cedula:     [ '', [ Validators.required ]],
      email:      [ '', [ Validators.required ]],
      cargo:      [ '', [ Validators.required ]],
      observacion:[ '']
    });
  }
  guardarDatos = (): void => {
    this.errorForm = '';
    let { nombres, apellidos, cedula, email, cargo, observacion } = this.formDocente.value;
    this.docente = {nombres, apellidos, cedula, email, cargo, observacion};
    if ( this.formDocente.valid ) {
      this.indexedBDService.guardarDocente(this.docente);
    } else {
      this.errorForm = 'Existen campos vacíos';
    }
  }
}

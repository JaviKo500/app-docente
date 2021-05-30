import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from '../../models/registro.model';
import { IndexedDBService } from '../../services/indexed-db.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.css']
})
export class AsistenciasComponent implements OnInit {
  public contenedor: any;
  constructor(
    private router: Router,
    public indexedDBService: IndexedDBService
  ) { }

  ngOnInit(): void {
    if ( !this.indexedDBService.asistenciaDocente ) {
      this.router.navigate(['/']);
    }
    this.contenedor  = document.getElementById('contenedor');
    let tamanoPantalla = screen.height;
    let pantalla = tamanoPantalla - 150;
    this.contenedor!.style.height =`${pantalla}px`;
    
  }

}

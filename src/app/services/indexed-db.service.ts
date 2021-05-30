import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Docente } from '../models/docente.model';
import { Registro } from '../models/registro.model';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  public indexedDB = window.indexedDB;
  public db!:IDBDatabase;
  public mensajeAccion!: string;
  public request = this.indexedDB.open('asistenciaDB', 1);
  public asistenciaDocente!: Registro;
  constructor(
    private router: Router,
  ) {
    this.crearBD();
  }

  crearBD = (): void => {
    this.request.onsuccess = () => {
      this.db = this.request.result;
      
    }
    this.request.onupgradeneeded = () => {
      this.db = this.request.result;
      this.crearTablas(this.db);
    }
    this.request.onerror = () => {
      return;
    }
  }
  crearTablas = (db: IDBDatabase): void => {
    const objectStoreDocente = db.createObjectStore('docentes', {keyPath: 'cedula'});
    const objectStoreAsistencia = db.createObjectStore('asistencia', {keyPath: 'docenteCedula'});
  }
  guardarDocente =  (docente: Docente) => {
    const transaccion = this.db.transaction( ['docentes'], 'readwrite');
    const objectStore = transaccion.objectStore('docentes');
    const request = objectStore.add(docente);
    let asistencia: Registro  = {docenteCedula: docente.cedula, fechas: []}; 

    request.onsuccess = () => {      
      this.crearRegistroAsistencia(asistencia);
    };
    request.onerror = () => {
      this.mensajeAccion = `Error cedula: ${docente.cedula} duplicada`;
      alert(this.mensajeAccion);
    };
  }
  crearRegistroAsistencia = (asistencia: Registro): void => {  
    const transaccion = this.db.transaction( ['asistencia'], 'readwrite');
    const objectStore = transaccion.objectStore('asistencia');
    const request = objectStore.add(asistencia);
    request.onsuccess = () => {
      this.mensajeAccion = 'Docente guardado';
      this.router.navigate(['/']);
      alert(this.mensajeAccion);
    };
  }
  buscarAsistenciaDocente = (asistencia: Registro , formulario: FormGroup) => {
    const transaction = this.db.transaction(['asistencia'], 'readwrite');
        const objectStore = transaction.objectStore('asistencia');
        const request = objectStore.get(asistencia.docenteCedula);
        request.onsuccess = () => {
          let asistenciaDocente: Registro = request.result as Registro;
          if (asistenciaDocente) {
            asistenciaDocente.fechas.push(asistencia.fechas[0]);
            this.agregarAsistencia(asistenciaDocente, formulario);
          } else {
            alert(`No hay un Docente con CI: ${asistencia.docenteCedula}`);
            formulario.reset();
            return;
          }
        }
  }
  agregarAsistencia = (asistencia: Registro,  formulario: FormGroup): void => {
      const transaction = this.db.transaction(['asistencia'], 'readwrite');
      const objectStore = transaction.objectStore('asistencia');
      const request = objectStore.put(asistencia); //si existe el dato lo actualiza o lo añade
      console.log(request);
      request.onsuccess = () => {        
        let opcion = confirm('Asistencia guardada,  ¿Desea ver sus registros?');
        if (opcion == true) {
          this.asistenciaDocente = asistencia;
          this.router.navigate(['registro/', asistencia.docenteCedula ]);
	      } else {
          formulario.reset();
        }   
      }
  }

  
}

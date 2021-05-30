import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';
import { RegistrarDocenteComponent } from './components/registrar-docente/registrar-docente.component';
import { AsistenciasComponent } from './components/asistencias/asistencias.component';

const routes: Routes = [
  { path: "", component: RegistrarEntradaComponent },
  { path: "registrar", component: RegistrarDocenteComponent},
  { path: "registro/:cedula", component: AsistenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

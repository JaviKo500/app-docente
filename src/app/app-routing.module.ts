import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';
import { RegistrarDocenteComponent } from './components/registrar-docente/registrar-docente.component';

const routes: Routes = [
  { path: "", component: RegistrarEntradaComponent },
  { path: "registrar", component: RegistrarDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

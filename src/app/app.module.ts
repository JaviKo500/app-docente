import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarDocenteComponent } from './components/registrar-docente/registrar-docente.component';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';
import { AsistenciasComponent } from './components/asistencias/asistencias.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarDocenteComponent,
    RegistrarEntradaComponent,
    AsistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

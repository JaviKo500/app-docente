import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarDocenteComponent } from './components/registrar-docente/registrar-docente.component';
import { RegistrarEntradaComponent } from './components/registrar-entrada/registrar-entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarDocenteComponent,
    RegistrarEntradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MediopagoComponent } from './components/mediopago/mediopago.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { MediospagoFormComponent } from './components/mediopago/mediospago-form.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { MediostransporteComponent } from './components/mediostransporte/mediostransporte.component';
import { MediotransporteFormComponent } from './components/mediostransporte/mediotransporte-form.component';
import { UsuariosFormComponent } from './components/usuario/usuarios-form.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatPaginatorModule} from '@angular/material/paginator';
import { TipomercanciaComponent } from './components/tipomercancia/tipomercancia.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { PuntoenviorecepcionComponent } from './components/puntoenviorecepcion/puntoenviorecepcion.component';
import { EnvioComponent } from './components/envio/envio.component';
import { TipomercanciaFormComponent } from './components/tipomercancia/tipomercancia-form.component';
import { TarifaFormComponent } from './components/tarifa/tarifa-form.component';
import { PuntoenviorecepcionFormComponent } from './components/puntoenviorecepcion/puntoenviorecepcion-form.component';
import { EnvioFormComponent } from './components/envio/envio-form.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    MediopagoComponent,
    HomeComponent,
    MediospagoFormComponent,
    ClientesComponent,
    ClienteFormComponent,
    MediostransporteComponent,
    MediotransporteFormComponent,
    UsuariosFormComponent,
    TipomercanciaComponent,
    TarifaComponent,
    PuntoenviorecepcionComponent,
    EnvioComponent,
    TipomercanciaFormComponent,
    TarifaFormComponent,
    PuntoenviorecepcionFormComponent,
    EnvioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

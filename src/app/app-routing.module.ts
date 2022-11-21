import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MediopagoComponent } from './components/mediopago/mediopago.component';
import { MediostransporteComponent } from './components/mediostransporte/mediostransporte.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteFormComponent } from './components/clientes/cliente-form.component';
import { UsuariosFormComponent } from './components/usuario/usuarios-form.component';
import { MediospagoFormComponent } from './components/mediopago/mediospago-form.component';
import { MediotransporteFormComponent } from './components/mediostransporte/mediotransporte-form.component';

import { PuntoenviorecepcionComponent } from './components/puntoenviorecepcion/puntoenviorecepcion.component';
import { TarifaComponent } from './components/tarifa/tarifa.component';
import { TipomercanciaComponent } from './components/tipomercancia/tipomercancia.component';
import { EnvioComponent } from './components/envio/envio.component';

import { PuntoenviorecepcionFormComponent } from './components/puntoenviorecepcion/puntoenviorecepcion-form.component';
import { TarifaFormComponent } from './components/tarifa/tarifa-form.component';
import { TipomercanciaFormComponent } from './components/tipomercancia/tipomercancia-form.component';
import { EnvioFormComponent } from './components/envio/envio-form.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'clientes',component:ClientesComponent},
  {path:'clientes/form',component:ClienteFormComponent},
  {path:'clientes/form/:id',component:ClienteFormComponent},
  {path:'usuario',component:UsuarioComponent},
  {path:'usuario/form',component:UsuariosFormComponent},
  {path:'usuario/form/:id',component:UsuariosFormComponent},
  {path:'mediopago',component:MediopagoComponent},
  {path:'mediopago/form',component:MediospagoFormComponent},
  {path:'mediostransporte',component:MediostransporteComponent},
  {path:'mediostransporte',component:MediotransporteFormComponent},
  //ce
  {path:'puntoenviorecepcion',component:PuntoenviorecepcionComponent},
  {path:'tarifa',component:TarifaComponent},
  {path:'tipomercancia',component:TipomercanciaComponent},
  {path:'envio',component:EnvioComponent},

  {path:'puntoenviorecepcion/form',component:PuntoenviorecepcionFormComponent},
  {path:'puntoenviorecepcion/form/:id',component:PuntoenviorecepcionFormComponent},
  {path:'tarifa/form',component:TarifaFormComponent},
  {path:'tarifa/form/:id',component:TarifaFormComponent},
  {path:'tipomercancia/form',component:TipomercanciaFormComponent},
  {path:'tipomercancia/form/:id',component:TipomercanciaFormComponent},
  {path:'envio/form',component:EnvioFormComponent},
  {path:'envio/form/:id',component:EnvioFormComponent},

  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






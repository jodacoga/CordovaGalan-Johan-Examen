import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ServicioClienteService } from './servicios/servicio-cliente.service';
import { NavbarComponent } from './extras/navbar/navbar.component';
import { RestauranteComponent } from './componentes/restaurante/restaurante.component';
import { ReservaComponent } from './componentes/reserva/reserva.component';
import { ServicioRestauranteService } from './servicios/servicio-restaurante.service';
import { ServicioReservaService } from './servicios/servicio-reserva.service';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavbarComponent,
    RestauranteComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioClienteService,
    ServicioRestauranteService,
    ServicioReservaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

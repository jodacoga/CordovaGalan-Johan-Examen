import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ServicioClienteService } from './servicios/servicio-cliente.service';
import { NavbarComponent } from './extras/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServicioClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

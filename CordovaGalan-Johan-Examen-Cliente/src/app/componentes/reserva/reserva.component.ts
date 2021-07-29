import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/entidades/reserva.entidad';
import { ServicioReservaService } from 'src/app/servicios/servicio-reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reserva: Reserva;

  constructor(private servicio: ServicioReservaService) {
    this.reserva = new Reserva();
  }

  ngOnInit(): void {
  }

  crear(): void {
    if (this.reserva.cliente.cedula != '' && this.reserva.restaurante.nombre != '') {
      if (this.reserva.cantidadPersonas > this.reserva.restaurante.aforo) {
        alert(
          '¡Ups!. Lo sentimos, el número de asistentes supera el aforo ' +
          'máximo permitido por el restaurante.'
        );
      } else if (this.reserva.cantidadPersonas == 0){
        alert('¡El número de asistentes debe ser al menos uno!')
      } else {
        this.servicio.post(this.reserva).subscribe(
          data => {
            alert('¡Gracias. Se ha registrado su reserva!');
            this.reserva = new Reserva();
          },
          error => alert(
            '¡Lo sentimos!. No es posible realizar la reserva la fecha y hora que especificó.' +
            'Intentelo de nuevo con otra fecha y hora.'
          )
        );
      }
    } else {
      alert('¡Debe seleccionar el cliente que reserva y el restaurante donde lo hace!');
    }
  }

  buscarCliente(): void {
    this.servicio.getCliente(this.reserva.cliente.cedula).subscribe(
      data => this.reserva.cliente = data,
      error => alert('¡Este cliente no se encuentra registrado!')
    )
  }

  buscarRestaurante(): void {
    this.servicio.getRestaurante(this.reserva.restaurante.nombre).subscribe(
      data => this.reserva.restaurante = data,
      error => alert('¡Este restaurante no se encuentra registrado!')
    )
  }
}

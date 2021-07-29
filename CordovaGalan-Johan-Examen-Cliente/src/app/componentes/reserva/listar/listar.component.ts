import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/entidades/reserva.entidad';
import { ServicioReservaService } from 'src/app/servicios/servicio-reserva.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  texto: string;
  fecha: string;
  lista: Reserva[];

  constructor(private servicio: ServicioReservaService) {
    this.texto = '';
    this.fecha = '';
    this.lista = [];
  }

  ngOnInit(): void {
  }

  listar(): void {
    this.servicio.getReservas(this.texto, this.fecha).subscribe(
      data => {
        this.lista = data;
        if (this.lista.length == 0) {
          alert('¡No se ha encontrado resultados!');
        }
      },
      error => console.log('Ha ocurrido un error.', error)
    )  
  }
}

import { Component, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/entidades/restaurante.entidad';
import { ServicioRestauranteService } from 'src/app/servicios/servicio-restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private servicio: ServicioRestauranteService) {
    this.restaurante = new Restaurante();
  }

  ngOnInit(): void {
  }

  crear(): void {
    if (this.restaurante.nombre != '' && this.restaurante.nombre
      && this.restaurante.direccion && this.restaurante.telefono
      && this.restaurante.aforo) {
        if (!this.validarContieneNumeros(this.restaurante.telefono)) {
          alert('¡El teléfono solo permite valores numéricos!')
        } else {
          this.servicio.post(this.restaurante).subscribe(
            data => {
              alert('¡Su restaurante ha sido registrado exitosamente!');
              this.restaurante = new Restaurante();
            },
            error => alert('¡Ya existe un restaurante con este nombre!')
          );
        }
    } else {
      alert('¡Debe llenar todos los campos del formulario!');
    }
  }

  validarContieneNumeros(texto: string): boolean {
    const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < texto.length; i++) {
      if (!numeros.includes(texto[i])) {
        return false;
      }
    }
    return true;
  }
}
